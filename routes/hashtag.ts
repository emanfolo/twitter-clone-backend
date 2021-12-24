import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

interface HashtagRequest {
  params : {
    contents: string
  }
}


router.get('/:contents', async (req: HashtagRequest, res: any) => {

  const tweetsByHashtag = await prisma.tweet.findMany({
    where: {
      hashtags: {
        some: {
          contents: {
            contains: req.params.contents,
            mode: 'insensitive'
          }
        }
      }
    },select: {
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
      }
    }
  })

  res.send(tweetsByHashtag)

})

export default router