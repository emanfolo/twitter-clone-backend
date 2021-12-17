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


const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h'})
}

const parseUserDetails = async (user) => {
  let details = {
    id: user.id,
    email: user.email,
    username: user.username,
    name: user.name,
    createdAt: user.createdAt
  }
  return details
}

//Store in redis soon
let refreshTokens: string[] = []

router.post('/token', (req: any, res:any) => {
  console.log(refreshTokens)
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    delete user.iat
    const accessToken = generateAccessToken(user)
    res.json({accessToken: accessToken})
  })
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

    // const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)
    const accessToken = generateAccessToken(newUser)
    const refreshToken: string = jwt.sign(newUser, process.env.REFRESH_TOKEN_SECRET)
    //Store in redis soon
    refreshTokens.push(refreshToken)
    const userDetails = await parseUserDetails(newUser)

    res.json({userDetails: userDetails, accessToken: accessToken, refreshToken: refreshToken})
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
        // const accessToken = jwt.sign(userObject, process.env.ACCESS_TOKEN_SECRET)
        const accessToken = generateAccessToken(userObject)
        const refreshToken: string = jwt.sign(userObject, process.env.REFRESH_TOKEN_SECRET)
        //Store in redis soon
        refreshTokens.push(refreshToken)
        const userDetails = await parseUserDetails(userObject)
        res.json({userDetails: userDetails, accessToken: accessToken, refreshToken: refreshToken})
      } else if (!match){
        res.console.error();
        ('Wrong password')
      }
    } else if (!userObject) {
      res.console.error();
      ('No user matches this email')
    }

})

router.delete('/logout', (req, res) => {
  // Eventually will delete refreshtoken from DB (REDIS?)
  console.log(refreshTokens)
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

export default router