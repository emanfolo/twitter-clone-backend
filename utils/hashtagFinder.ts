import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient


const hashtagFinder = async (tweet: string, tweetID: number) => {

  let re = /(?<!\w)#\w+/g;

  const hashTags = [...tweet.matchAll(re)];

  const array = hashTags.flat()

  for (let i = 0; i < array.length; i++) {
    const addHashtags = await prisma.tweet.update({
      where: {
        id: tweetID,
      },
      data: {
        hashtags: {
          create: { 
            contents: array[i],
          }
        }
      }
    })
  }

  // const createdHashtags = await prisma.tweet.findUnique({
  //   where: {
  //     id: tweetID,
      
  //   }
  // })
}

export default hashtagFinder