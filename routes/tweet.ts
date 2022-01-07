import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import hashtagFinder from "../utils/hashtagFinder";

dotenv.config({ path: "../.env" });

const prisma = new PrismaClient();

// const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }

const router = express.Router();
router.use(express.json());
// router.use(cors(options))
router.use(cors());

const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get("/:id", async (req: any, res: any) => {
  const specificTweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    select: {
      id: true,
      contents: true,
      createdAt: true,
      image: true,
      user: {
        select: {
          id: true,
          username: true,
          name: true,
          profile: {
            select: {
              image: true,
            },
          },
          followedBy: true,
          following: true,
        },
      },
      hashtags: true,
      retweets: true,
      likes: true,
      threadSuccessor: true,
      threadPredecessor: true,
    },
  });

  res.send(specificTweet);
});

router.post("/new", authenticateToken, async (req: any, res: any) => {
  // console.log(req.user)
  const newTweet = await prisma.tweet.create({
    data: {
      contents: req.body.contents,
      image: req.body.image,
      userID: req.user.id,
    },
  });

  if (req.body.replyTo) {
    const replyTo = await prisma.tweet.update({
      where: {
        id: req.body.replyTo,
      },
      data: {
        threadSuccessorID: newTweet.id,
      },
    });
    if (req.user.id != req.body.notificationRecipient && newTweet.id) {
      const addNotification = await prisma.notification.create({
        data: {
          replyID: newTweet.id,
          type: "Reply",
          recipientID: req.body.notificationRecipient,
        },
      });
    }
  }

  const addToFeed = await prisma.feedItem.create({
    data: {
      type: "Tweet",
      tweetID: newTweet.id,
      userID: req.user.id,
    },
  });

  const createHashtags = await hashtagFinder(newTweet.contents, newTweet.id);

  const createdTweetAndHashtags = await prisma.tweet.findUnique({
    where: {
      id: newTweet.id,
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
        },
      },
    },
  });

  res.send(createdTweetAndHashtags);
});

router.post("/delete", authenticateToken, async (req: any, res: any) => {
  const deleteRelations = await prisma.tweet.update({
    where: {
      id: req.body.tweetID,
    },
    data: {
      likes: {
        deleteMany: {},
      },
      retweets: {
        deleteMany: {},
      },
      mentions: {
        deleteMany: {},
      },
      feedItems: {
        deleteMany: {},
      },
    },
  });

  const deleteTweet = await prisma.tweet.delete({
    where: {
      id: req.body.tweetID,
    },
  });

  res.sendStatus(204);
});

// router.delete('/', authenticateToken, async (req:any, res:any) => {
//   const deleteTweet = prisma.
// })

export default router;
