import { PrismaClient } from '@prisma/client';
import bcryptjs, { hash } from 'bcryptjs'

const prisma = new PrismaClient();

const seedDB =  async () => {
  await prisma.$connect();
  await prisma.feedItem.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.like.deleteMany();
  await prisma.retweet.deleteMany();
  await prisma.hashtag.deleteMany();
  await prisma.tweet.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcryptjs.hash('password', 12)

  const user1 = await prisma.user.create({
    data: {
      email: 'fakeemail@gmail.com',
      password: hashedPassword,
      name: 'im another bot', 
      username: 'bot365',  
      profile: {
        create: {
          bio: 'android 17',
          image: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/android-17.webp',
          header_image: 'https://images.nintendolife.com/8ce294add2bb3/dragon-ball-z-kakarot.large.jpg'
        }
      },
      tweets: {
        create: [
          {
            contents: 'this is my first tweet',
          },
          {
            contents: 'this is my second tweet'
          },
          {
            contents: 'testing out the hashtags #testing #flitter',
            hashtags: {
              connectOrCreate: [
                {
                  where: {contents: '#testing'},
                  create: {contents: '#testing'}
                },
                {
                  where: {contents: '#flitter'},
                  create: {contents: '#flitter'}
                },
              ]
            }
          },
        ]
      }
    }
  });
  

  const hashedPassword2 = await bcryptjs.hash('password', 12)


  const user2 = await prisma.user.create({
    data: {
      email: '419email@gmail.com',
      password: hashedPassword2,
      name: 'Im a bot', 
      username: 'bot419',
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
              connectOrCreate: [
                {
                  where: {contents: '#testing'},
                  create: {contents: '#testing'}
                },
                {
                  where: {contents: '#flitter'},
                  create: {contents: '#flitter'}
                },
              ]
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

  const hashedPassword3 = await bcryptjs.hash('password', 12)


  const user3 = await prisma.user.create({
    data: {
      email: 'dababy@gmail.com',
      password: hashedPassword3,
      name: 'dababy', 
      username: 'dababy',
      profile: {
        create: {
          bio: 'dont trust dababy',
          image: 'https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg',
          header_image: 'https://allhiphop.com/wp-content/uploads/2020/12/dababy-1-1-960x628.jpg.webp'
        }
      },
      tweets: {
        create: [
          {
            contents: 'Im using this site for the first time'
          },
          {
            contents: 'this site is lit'
          },
          {
            contents: 'hashtag #testing #flitter',
            hashtags: {
              connectOrCreate: [
                {
                  where: {contents: '#testing'},
                  create: {contents: '#testing'}
                },
                {
                  where: {contents: '#flitter'},
                  create: {contents: '#flitter'}
                },
              ]
            }
          },
        ]
      },
      following: {
        connect: [
          {
            id: user1.id
          }, 
          {
            id: user2.id
          }
        ]
      }
    }
  });

  const adminHashedPassword = await bcryptjs.hash('adminPassword', 12)

  const admin = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      password: adminHashedPassword,
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
            contents: 'Anyone here?'
          },
          {
            contents: 'testing out the hashtags #testing #flitter',
            hashtags: {
              connectOrCreate: [
                {
                  where: {contents: '#testing'},
                  create: {contents: '#testing'}
                },
                {
                  where: {contents: '#flitter'},
                  create: {contents: '#flitter'}
                },
              ]
            }
          },
        ]
      },
      following: {
        connect: [
          {
            id: user1.id
          }, 
          {
            id: user2.id
          },
          {
            id: user3.id
          }
        ]
      }
    }
  });

  console.log({ user1 })
  console.log({ user2 })
  console.log({ user3 })
  console.log({ admin })
}

seedDB()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })