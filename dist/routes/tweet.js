"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashtagFinder_1 = __importDefault(require("../utils/hashtagFinder"));
dotenv.config({ path: "../.env" });
const prisma = new client_1.PrismaClient();
// const allowedOrigins = ['http://localhost:3000', 'flitter-site.netlify.app', 'https://flitter-zeta.vercel.app/']
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// }
const router = express_1.default.Router();
router.use(express_1.default.json());
// router.use(cors(options))
router.use((0, cors_1.default)());
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const specificTweet = yield prisma.tweet.findUnique({
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
}));
router.post("/new", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.user)
    const newTweet = yield prisma.tweet.create({
        data: {
            contents: req.body.contents,
            image: req.body.image,
            userID: req.user.id,
        },
    });
    if (req.body.replyTo) {
        const replyTo = yield prisma.tweet.update({
            where: {
                id: req.body.replyTo,
            },
            data: {
                threadSuccessorID: newTweet.id,
            },
        });
        if (req.user.id != req.body.notificationRecipient && newTweet.id) {
            const addNotification = yield prisma.notification.create({
                data: {
                    replyID: newTweet.id,
                    type: "Reply",
                    recipientID: req.body.notificationRecipient,
                },
            });
        }
    }
    const addToFeed = yield prisma.feedItem.create({
        data: {
            type: "Tweet",
            tweetID: newTweet.id,
            userID: req.user.id,
        },
    });
    const createHashtags = yield (0, hashtagFinder_1.default)(newTweet.contents, newTweet.id);
    const createdTweetAndHashtags = yield prisma.tweet.findUnique({
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
}));
router.post("/delete", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteRelations = yield prisma.tweet.update({
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
    const deleteTweet = yield prisma.tweet.delete({
        where: {
            id: req.body.tweetID,
        },
    });
    res.sendStatus(204);
}));
// router.delete('/', authenticateToken, async (req:any, res:any) => {
//   const deleteTweet = prisma.
// })
exports.default = router;
//# sourceMappingURL=tweet.js.map