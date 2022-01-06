import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

// const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }

const router = express.Router()
router.use(express.json())
// router.use(cors(options))

router.use(cors())


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

router.get('/:username', async (req:any, res:any) => {

  const user = await prisma.user.findUnique({
    where: {
      username: req.params.username
    },
    select: {
      id: true
    }
  })

  if (user){
    const userFeed = await prisma.feedItem.findMany({
    where: {
      userID: user.id
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      type: true,
      tweet: {
        select:{
          id: true,
          contents: true,
          createdAt: true,
          image: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true,
                }
              },
              followedBy: true,
              following: true,
            }
          },
          retweets: true,
          likes: true,
          hashtags: true,
          mentions: true,
          threadSuccessor: true,
          threadPredecessor: true
        }
      },
      retweet: {
        select: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: true,
              following: true,
            }
          }
        }
      }
    }
  })

  res.send(userFeed)
  }

})

router.get('/', authenticateToken, async (req:any , res:any) => {

  const feedArray: Array<number> = [req.user.id]


  const userAndFollowing = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    select: {
      following: true
    }
  })

  const addFollowingToFeed = async (userAndFollowing:any) => {
    userAndFollowing.following.forEach(element => {
      feedArray.push(element.id)
    });
  }

  addFollowingToFeed(userAndFollowing)

  const feed = await prisma.feedItem.findMany({
    where: {
      userID: { in: feedArray }
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      type: true,
      tweet: {
        select:{
          id: true,
          contents: true,
          createdAt: true,
          image: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true,
                }
              }, 
              followedBy: true,
              following: true,
            }
          },
          retweets: true,
          likes: true,
          hashtags: true,
          mentions: true,
          threadSuccessor: true,
          threadPredecessor: true
        }
      },
      retweet: {
        select: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: true,
              following: true,
            }
          }
        }
      }
    }
  })

  res.send(feed)

})

export default router