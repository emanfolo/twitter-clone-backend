import express from "express";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import * as dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'


dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

router.get('/', (req:any , res:any) => {

  res.send('User endpoint')

})

interface RegistrationRequest {
  body: {
    email: string,
    password: string,
    name: string,
    username: string
  }
}

router.post('/register', async (req: RegistrationRequest, res: any) =>{

  if(req.body.email){
      console.log(req.body.email)

    const hashedPassword = await bcryptjs.hash(req.body.password, 12)

    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
        username: req.body.username,
        profile: {
          create: {
            bio: null,
            image: null,
            header_image: null
          }
        }
      }
    })

    const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)

    res.json({userDetails: newUser, accessToken: accessToken})
  } else {
    res.send('Error please try again')
  }

})

interface LoginRequest {
  body: {
    email: string, 
    password: string
  }
  
}

router.post('/login', async (req:LoginRequest, res:any) => {

    let userObject = await prisma.user.findUnique({
      where: {
        email: req.body.email
      },
    })  

    if(userObject){
      const match =  await bcryptjs.compare(req.body.password, userObject.password)

      if(match){
        const accessToken = jwt.sign(userObject, process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: accessToken})
      } else if (!match){
        res.console.error();
        ('Wrong password')
      }
    } else if (!userObject) {
      res.console.error();
      ('No user matches this email')
    }

})

export default router