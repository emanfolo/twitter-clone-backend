import { PrismaClient } from "@prisma/client";
import bcryptjs, { hash } from "bcryptjs";
import hashtagFinder from "../utils/hashtagFinder";

const prisma = new PrismaClient();

const seedDB = async () => {
  await prisma.$connect();
  await prisma.feedItem.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.like.deleteMany();
  await prisma.retweet.deleteMany();
  await prisma.hashtag.deleteMany();
  await prisma.tweet.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcryptjs.hash("password", 12);

  const user1 = await prisma.user.create({
    data: {
      email: "fakeemail@gmail.com",
      password: hashedPassword,
      name: "im another bot",
      username: "bot365",
      profile: {
        create: {
          bio: "android 17",
          image:
            "https://cdn.costumewall.com/wp-content/uploads/2017/02/android-17.webp",
          header_image:
            "https://images.nintendolife.com/8ce294add2bb3/dragon-ball-z-kakarot.large.jpg",
        },
      },
    },
  });

  const user1Tweet1 = await prisma.tweet.create({
    data: {
      contents: "this is my first tweet",
      userID: user1.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user1.id,
        },
      },
    },
  });

  const user1Tweet2 = await prisma.tweet.create({
    data: {
      contents: "this is my second tweet",
      userID: user1.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user1.id,
        },
      },
    },
  });

  const user1Tweet3 = await prisma.tweet.create({
    data: {
      contents: "testing out the hashtags #testing #flitter",
      userID: user1.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user1.id,
        },
      },
    },
  });

  const user1Tweet3Hashtags = await hashtagFinder(
    user1Tweet3.contents,
    user1Tweet3.id
  );

  const hashedPassword2 = await bcryptjs.hash("password", 12);

  const user2 = await prisma.user.create({
    data: {
      email: "email@gmail.com",
      password: hashedPassword2,
      name: "Im a bot",
      username: "botAccount",
      profile: {
        create: {
          bio: "dont trust the process",
          image:
            "https://media.wired.com/photos/5b6df22751297c21002b4536/16:9/w_2400,h_1350,c_limit/HackerBot.jpg",
          header_image:
            "https://cdn.searchenginejournal.com/wp-content/uploads/2020/06/47e5b89a-2b1c-4dcd-a9a8-5db0118157cb-5efbf892d137a-1520x800.jpeg",
        },
      },
    },
  });

  const user2Tweet1 = await prisma.tweet.create({
    data: {
      contents: "Tweeting is fun",
      userID: user2.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user2.id,
        },
      },
    },
  });

  const user2Tweet2 = await prisma.tweet.create({
    data: {
      contents: "I love this site!",
      userID: user2.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user2.id,
        },
      },
    },
  });

  const user2Tweet3 = await prisma.tweet.create({
    data: {
      contents: "I want to see if these hashtags even work! #testing #flitter",
      userID: user2.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user2.id,
        },
      },
    },
  });

  const user2Tweet3Hashtags = await hashtagFinder(
    user2Tweet3.contents,
    user2Tweet3.id
  );

  const hashedPassword3 = await bcryptjs.hash("password", 12);

  const user3 = await prisma.user.create({
    data: {
      email: "email2@gmail.com",
      password: hashedPassword3,
      name: "not a bot",
      username: "botv2",
      profile: {
        create: {
          bio: "im not a bot account",
          image:
            "https://www.techopedia.com/images/uploads/6e13a6b3-28b6-454a-bef3-92d3d5529007.jpeg",
          header_image:
            "https://www.kaspersky.com/content/en-global/images/repository/isc/2021/what_are_bots_image1_710x400px_300dpi.jpg",
        },
      },
    },
  });

  const user3Tweet1 = await prisma.tweet.create({
    data: {
      contents: "Using this site for the first time",
      userID: user3.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user3.id,
        },
      },
    },
  });

  const user3Tweet2 = await prisma.tweet.create({
    data: {
      contents: "Shout out to whoever developed this site!",
      userID: user3.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user3.id,
        },
      },
    },
  });

  const user3Tweet3 = await prisma.tweet.create({
    data: {
      contents: "Do these tags even work #testing #flitter #OleOut",
      userID: user3.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: user3.id,
        },
      },
    },
  });

  const user3Tweet3Hashtags = await hashtagFinder(
    user3Tweet3.contents,
    user3Tweet3.id
  );

  const adminHashedPassword = await bcryptjs.hash("adminPassword", 12);

  const admin = await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      password: adminHashedPassword,
      name: "eman",
      username: "emanf",
      profile: {
        create: {
          bio: "trust the process",
          image: null,
          header_image:
            "https://phantom-marca.unidadeditorial.es/1244d59d773f2d751225de0bcefa0d9a/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/13/16315436372092.jpg",
        },
      },
    },
  });

  const adminTweet1 = await prisma.tweet.create({
    data: {
      contents: "Using my own site for the first time",
      userID: admin.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: admin.id,
        },
      },
    },
  });

  const adminTweet2 = await prisma.tweet.create({
    data: {
      contents: "Looking good, CSS could do with a bit of sprucing though!",
      userID: admin.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: admin.id,
        },
      },
    },
  });

  const adminTweet3 = await prisma.tweet.create({
    data: {
      contents: "Of course the hashtags work #testing #flitter #OleOut",
      userID: admin.id,
      feedItems: {
        create: {
          type: "Tweet",
          userID: admin.id,
        },
      },
    },
  });

  const adminTweet3Hashtags = await hashtagFinder(
    adminTweet3.contents,
    adminTweet3.id
  );

  console.log({ user1 });
  console.log({ user2 });
  console.log({ user3 });
  console.log({ admin });
};

seedDB()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
