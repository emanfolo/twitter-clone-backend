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
      password: 'password',
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

  const user2 = await prisma.user.create({
    data: {
      email: '419email@gmail.com',
      password: 'password',
      name: 'emans opp', 
      username: 'emansopp',
      profile: {
        create: {
          bio: 'dont trust the process',
          image: 'https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg',
          header_image: 'https://allhiphop.com/wp-content/uploads/2020/12/dababy-1-1-960x628.jpg.webp'
        }
      },
      tweets: {
        create: [
          {
            contents: 'My profile pic is da baby'
          },
          {
            contents: 'but I dont F with da baby'
          },
          {
            contents: 'hashtag #testing #flitter',
            hashtags: {
              create: [{contents: 'testing'}, {contents: 'flitter'}]
            }
          },
        ]
      },
      following: {
        connect: [
          {
            id: user1.id
          }
        ]
      }
    }
  });

  console.log({ user1 })
  console.log({ user2 })
}

seedDB()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })