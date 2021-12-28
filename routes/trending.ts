import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import findTrendingTopics from '../utils/findTrendingTopics'

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

router.get('/', async (req: any, res: any) => {

  const allTweets = await prisma.tweet.findMany()


  const trendingTopics = await findTrendingTopics(allTweets)

  res.send(trendingTopics)

})

export default router