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
dotenv.config({ path: '../.env' });
const prisma = new client_1.PrismaClient();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use((0, cors_1.default)(options));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
router.get('/:username', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: {
            username: req.params.username
        },
        select: {
            id: true
        }
    });
    if (user) {
        const userFeed = yield prisma.feedItem.findMany({
            where: {
                userID: user.id
            },
            orderBy: {
                createdAt: "desc"
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
                                    }
                                },
                                followedBy: true,
                                following: true,
                            }
                        },
                        retweets: true,
                        likes: true,
                        hashtags: true,
                        mentions: true,
                        threadSuccessor: true,
                        threadPredecessor: true
                    }
                },
                retweet: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                username: true,
                                followedBy: true,
                                following: true,
                            }
                        }
                    }
                }
            }
        });
        res.send(userFeed);
    }
}));
router.get('/', authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedArray = [req.user.id];
    const userAndFollowing = yield prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        select: {
            following: true
        }
    });
    const addFollowingToFeed = (userAndFollowing) => __awaiter(void 0, void 0, void 0, function* () {
        userAndFollowing.following.forEach(element => {
            feedArray.push(element.id);
        });
    });
    addFollowingToFeed(userAndFollowing);
    const feed = yield prisma.feedItem.findMany({
        where: {
            userID: { in: feedArray }
        },
        orderBy: {
            createdAt: "desc"
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
                                }
                            },
                            followedBy: true,
                            following: true,
                        }
                    },
                    retweets: true,
                    likes: true,
                    hashtags: true,
                    mentions: true,
                    threadSuccessor: true,
                    threadPredecessor: true
                }
            },
            retweet: {
                select: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            username: true,
                            followedBy: true,
                            following: true,
                        }
                    }
                }
            }
        }
    });
    res.send(feed);
}));
exports.default = router;
//# sourceMappingURL=feed.js.map