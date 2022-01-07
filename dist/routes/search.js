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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
// const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }
const router = express_1.default.Router();
router.use(express_1.default.json());
// router.use(cors(options))
router.use((0, cors_1.default)());
// router.get('/profile/:id', async (req:any, res: any) => {
// })
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield prisma.feedItem.findMany({
        where: {
            AND: [
                {
                    tweet: {
                        contents: {
                            contains: req.body.params,
                            mode: "insensitive",
                        },
                    },
                },
                {
                    type: {
                        not: "Retweet",
                    },
                },
            ],
        },
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            type: true,
            tweet: {
                select: {
                    id: true,
                    contents: true,
                    createdAt: true,
                    image: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            username: true,
                            profile: {
                                select: {
                                    image: true,
                                    header_image: true,
                                    bio: true,
                                },
                            },
                            followedBy: true,
                            following: true,
                        },
                    },
                    retweets: true,
                    likes: true,
                    hashtags: true,
                    mentions: true,
                    threadSuccessor: true,
                    threadPredecessor: true,
                },
            },
            retweet: {
                select: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            followedBy: true,
                            following: true,
                        },
                    },
                },
            },
        },
    });
    if (searchResult) {
        res.send(searchResult);
    }
    else {
        res.send([]);
    }
}));
exports.default = router;
//# sourceMappingURL=search.js.map