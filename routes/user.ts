import express from "express";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import * as dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const router = express.Router()
router.use(express.json())

router.get('/', (req:any , res:any) => {

  res.send('User endpoint')

})

router.post('/register', async (req: any, res: any) =>{

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

})

router.post('/login', async (req:any, res:any) => {

 
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


    // if(userObject){
    //   {
    //   return result
    //   })
    // }

    


  // if(await checkPassword()){
    
  // }

  // const username = req.body.username
  // const user = { name: username}

  // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  // res.json({accessToken: accessToken})

})

export default router