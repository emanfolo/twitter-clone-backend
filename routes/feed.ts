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


  const tweets = await prisma.tweet.findMany({
    where: {
      userID: { in: feedArray },
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      contents: true,
      createdAt: true,
      image: true,
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          profile: true,
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
      },
      hashtags: {
        select: {
          id: true,
          contents: true,
        }
      }, 
      likes: {
        select: {
          id: true, 
          userID: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: {
                select: {
                  id: true,
                  username: true
                }
              },
              following: {
                select: {
                  id: true,
                  username: true
                }
              },
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true
                }
              }
            }
          }
        }
      },
      retweets: {
        select: {
          id: true, 
          userID: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: {
                select: {
                  id: true,
                  username: true
                }
              },
              following: {
                select: {
                  id: true,
                  username: true
                }
              },
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true
                }
              }
            }
          }
        }
      }, 
      threadSuccessorID: true
    }
  })

  res.send(tweets)

})

export default router

