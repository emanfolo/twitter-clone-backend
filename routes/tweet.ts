import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import hashtagFinder from '../utils/hashtagFinder'

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

router.get('/:id', async (req: any, res: any) => {


  const specificTweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(req.params.id)
    }, select: {
      id: true,
      contents: true,
      createdAt: true,
      image: true,
      user: {
        select: {
          username: true,
          name: true, 
          profile: {
            select: {
              image: true
            }
          }
        }
      },
      hashtags: true,
      retweets: true,
      likes: true,
      threadSuccessor: true,
      threadPredecessor: true,
    }
  })

  res.send(specificTweet)

})


router.post('/new', authenticateToken, async (req: any, res: any) => {



  // console.log(req.user)
  const newTweet = await prisma.tweet.create({
    data: {
      contents: req.body.contents,
      image: req.body.image,
      userID: req.user.id
    }
  })
  
  if (req.body.replyTo){
  const replyTo = await prisma.tweet.update({
    where: {
      id: req.body.replyTo
    }, 
    data: {
      threadSuccessorID: newTweet.id
    },
  })

  // Also create a notification
}


  const addToFeed = await prisma.feedItem.create({
    data: {
      type: "Tweet", 
      tweetID: newTweet.id,
      userID: req.user.id
    }
  })

  const createHashtags = await hashtagFinder(newTweet.contents, newTweet.id)

  const createdTweetAndHashtags = await prisma.tweet.findUnique({
    where: {
      id: newTweet.id
    }, 
    select: {
      id: true,
      contents: true,
      createdAt: true,
      image: true,
      userID: true,
      hashtags: {
        select: {
          id: true,
          contents: true,
        }
      }
    }
  })


  res.send(createdTweetAndHashtags)

})

// router.delete('/', authenticateToken, async (req:any, res:any) => {
//   const deleteTweet = prisma.
// })

export default router
