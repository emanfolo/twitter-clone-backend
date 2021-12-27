"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$connect();
    yield prisma.hashtag.deleteMany();
    yield prisma.tweet.deleteMany();
    yield prisma.profile.deleteMany();
    yield prisma.user.deleteMany();
    const hashedPassword = yield bcryptjs_1.default.hash('password', 12);
    const user1 = yield prisma.user.create({
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
                        contents: 'this is my first tweet'
                    },
                    {
                        contents: 'this is my second tweet'
                    },
                    {
                        contents: 'testing out the hashtags #testing #flitter',
                        hashtags: {
                            connectOrCreate: [
                                {
                                    where: { contents: '#testing' },
                                    create: { contents: '#testing' }
                                },
                                {
                                    where: { contents: '#flitter' },
                                    create: { contents: '#flitter' }
                                },
                            ]
                        }
                    },
                ]
            }
        }
    });
    const hashedPassword2 = yield bcryptjs_1.default.hash('password', 12);
    const user2 = yield prisma.user.create({
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
                                    where: { contents: '#testing' },
                                    create: { contents: '#testing' }
                                },
                                {
                                    where: { contents: '#flitter' },
                                    create: { contents: '#flitter' }
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
    const hashedPassword3 = yield bcryptjs_1.default.hash('password', 12);
    const user3 = yield prisma.user.create({
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
                                    where: { contents: '#testing' },
                                    create: { contents: '#testing' }
                                },
                                {
                                    where: { contents: '#flitter' },
                                    create: { contents: '#flitter' }
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
    const adminHashedPassword = yield bcryptjs_1.default.hash('adminPassword', 12);
    const admin = yield prisma.user.create({
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
                                    where: { contents: '#testing' },
                                    create: { contents: '#testing' }
                                },
                                {
                                    where: { contents: '#flitter' },
                                    create: { contents: '#flitter' }
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
    console.log({ user1 });
    console.log({ user2 });
    console.log({ user3 });
    console.log({ admin });
});
seedDB()
    .catch(e => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map