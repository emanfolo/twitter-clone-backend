import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app']

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

  const feedByHashtag = await prisma.feedItem.findMany({
    where: {
      tweet: {
        hashtags: {
          some: {
            contents: {
              contains: req.params.contents,
              mode: 'insensitive'
            }
          }
        }
      }
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
      }
    }
  })

  res.send(feedByHashtag)

  // console.log(feedByHashtag)

})

export default router