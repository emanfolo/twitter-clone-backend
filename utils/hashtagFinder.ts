import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient


const hashtagFinder = async (tweet: string, tweetID: number) => {

  let re = /(?<!\w)#\w+/g;

  const hashTags = [...tweet.matchAll(re)];

  const array = hashTags.flat()

  if (array && array.length > 0) {

    const addHashtags = await prisma.tweet.update({
      data: {
        hashtags: {
          connectOrCreate: array.map((tag) => {
            return {
              create: { contents: tag},
              where: { contents: tag },
            };
          }),
        }
      },
      where: {
        id: tweetID,
      },
    })

  }

}

export default hashtagFinder