import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']
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

router.get('/all', authenticateToken, async (req: any, res: any) =>{

  const notifications = await prisma.notification.findMany({
    where:{
      recipientID: req.user.id
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      createdAt: true,
      type: true,
      mention: true,
      like: {
        select: {
          tweet: {
            select: {
              contents: true, 
              id: true             
            }
          }, 
          user: {
            select: {
              name: true,
              username: true,
              profile: {
                select: {
                  image: true
                }
              }
            }
          }
        }
      },
      retweet: {
        select: {
          tweet: {
            select: {
              contents: true, 
              id: true             
            }
          }, 
          user: {
            select: {
              name: true,
              username: true,
              profile: {
                select: {
                  image: true
                }
              }
            }
          }
        }
      },
      reply: true,
      follow: {
        select: {
          name: true,
              username: true,
              profile: {
                select: {
                  image: true
                }
              }
        }
      }
    }
  })

  res.send(notifications)

})

export default router