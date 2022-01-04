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

// router.post('/new', authenticateToken, async (req: any, res: any) => {
//   const newProfile = await prisma.profile.create({
    
//   })
// })

router.get('/:username', async (req:any , res:any) => {

  const requestedProfile = await prisma.user.findUnique({
    where: {
      username: req.params.username
    },
    select: {
      id: true,
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

  if (requestedProfile){
    res.send(requestedProfile)
  } else {
    res.sendStatus(404)
  }
})

router.post('/image/header', authenticateToken, async (req: any, res: any) => {

  const uploadHeaderImage = await prisma.user.update({
        where: {
          id: req.user.id
        }, 
        data: {
          profile: {
            upsert: {
              create: {
              image: req.body.header
            },
            update: {
              image: req.body.header
            }
          }  
          }
        }
      })

  if (uploadHeaderImage){
      res.sendStatus(204)
  } else {
    res.sendStatus(404)
  }
})

router.post('/image/profile', authenticateToken, async (req: any, res: any) => {

  const uploadProfileImage = await prisma.user.update({
        where: {
          id: req.user.id
        }, 
        data: {
          profile: {
            upsert: {
              create: {
              image: req.body.profile
            },
            update: {
              image: req.body.profile
            }
          }  
          }
        }
      })

  if (uploadProfileImage){
      res.sendStatus(204)
  } else {
    res.sendStatus(404)
  }
      

})

router.post('/bio', authenticateToken, async (req: any, res: any) => {

  const changeBio = await prisma.user.update({
        where: {
          id: req.user.id
        }, 
        data: {
          profile: {
            upsert: {
              create: {
              image: req.body.bio
            },
            update: {
              image: req.body.bio
            }
          }  
         }
        }
      })
  
})

export default router