import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDB =  async () => {
  await prisma.$connect();

  await prisma.hashtag.deleteMany();
  await prisma.tweet.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      email: 'fakeemail@gmail.com',
      name: 'eman', 
      username: 'emanf',
      profile: {
        create: {
          bio: 'trust the process',
          image: 'https://pbs.twimg.com/profile_images/1427765403971903497/1QMVtdSC_400x400.jpg',
          header_image: 'https://pbs.twimg.com/profile_banners/2740681051/1625950578/1500x500'
        }
      },
      tweets: {
        create: [
          {
            contents: 'this is my first tweet'
          },
          {
            contents: 'this is my second tweet'
          },
          {
            contents: 'testing out the hashtags #testing #flitter',
            hashtags: {
              create: [{contents: 'testing'}, {contents: 'flitter'}]
            }
          },
        ]
      }
    }
  });

  console.log({ user1 })
}

seedDB()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })