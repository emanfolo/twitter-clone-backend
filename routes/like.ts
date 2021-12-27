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

router.post('/new', authenticateToken, async (req: any, res:any) => {
  const newLike = await prisma.like.create({
    data: {
      userID: req.user.id,
      tweetID: req.body.tweetID,
    }
  })

  const addNotification = await prisma.notification.create({
    data: {
      likeID: newLike.id,
      type: 'Like',
      recipientID: req.body.notificationRecipient
    }
  })

  res.send(newLike)
})

router.post('/delete', authenticateToken, async (req: any, res:any) => {

  const deletedLike = await prisma.like.delete({
    where: {
      TweetLikeUserID: {
        userID: req.user.id , 
        tweetID: req.body.tweetID 
      }
    }
  })

//  delete notification soon

  res.send(deletedLike)
})

export default router