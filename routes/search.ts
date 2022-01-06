import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import { resolve } from "path/posix";

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

// router.get('/profile/:id', async (req:any, res: any) => {



// })

router.post('/', async (req:any, res: any) => {
  const searchResult = await prisma.feedItem.findMany({
    where: {
      AND: [
        {
        tweet: {
        contents: {
          contains: req.body.params,
          mode: 'insensitive'
        },
      },
    },
    {
      type: {
        not: 'Retweet'
      }
    }
    ]
      
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
              followedBy: true,
              following: true,
            }
          }
        }
      }
    }
  })

  if (searchResult){
    res.send(searchResult)
  } else {
    res.send([])
  }


})


export default router