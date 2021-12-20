import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

const authenticateToken = (req: any, res:any, next:any) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

router.get('/', authenticateToken, async (req:any , res:any) => {

  const userProfile = await prisma.user.findUnique({
    where: {
      id: req.user.id
    }, 
    select: {
      name: true,
      username: true,
      createdAt: true,
      profile: {
        select: {
          image: true,
          header_image: true,
          bio: true
        }
      },
      tweets:{
        select: {
          id: true,
          contents: true,
          createdAt: true, 
          image: true,
          hashtags: {
            select: {
              id: true,
              contents: true
            }
          }
        }
      },
      followedBy: {
            select: {
              id: true,
              username: true
            }
          },
      following:  {
        select: {
          id: true,
          username: true
        }
      }
    }
  })

  res.send(userProfile)

})

export default router