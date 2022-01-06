import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app']

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

router.post('/new', authenticateToken, async (req:any, res:any) => {

  const addFollowRelation = await prisma.user.update({
    where: {
      id: req.user.id
    },
    data: {
      following: {
        connect: {
          id: req.body.followRecipient
        }
      }
    }
  })

  const createNotification = await prisma.notification.create({
    data:{
      recipientID: req.body.followRecipient,
      type: 'Follow',
      followID: req.user.id
    }
  })

  res.sendStatus(204)
  

})

router.delete('/delete', authenticateToken, async (req:any, res:any) => {

  const removeNotification = await prisma.notification.delete({
    where: {
      newFollowID: {
        recipientID: req.body.followRecipient,
        followID: req.user.id
      }
    }
  })
  
  const removeFollowRelation = await prisma.user.update({
    where: {
      id: req.user.id  
    },
    data: {
      following: {
        disconnect: {
          id: req.body.followRecipient
        }
      }
    }
  })


  res.sendStatus(204)
  

})


export default router
