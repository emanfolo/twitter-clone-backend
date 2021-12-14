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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$connect();
    yield prisma.hashtag.deleteMany();
    yield prisma.tweet.deleteMany();
    yield prisma.profile.deleteMany();
    yield prisma.user.deleteMany();
    const user1 = yield prisma.user.create({
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
                            create: [{ contents: 'testing' }, { contents: 'flitter' }]
                        }
                    },
                ]
            }
        }
    });
    console.log({ user1 });
});
seedDB()
    .catch(e => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map