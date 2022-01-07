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
// router.post('/new', authenticateToken, async (req: any, res: any) => {
//   const newProfile = await prisma.profile.create({
//   })
// })
router.get("/recommended", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield prisma.user.findMany({
        select: {
            id: true,
            name: true,
            username: true,
            createdAt: true,
            profile: {
                select: {
                    image: true,
                    header_image: true,
                    bio: true,
                },
            },
            followedBy: {
                select: {
                    id: true,
                    username: true,
                },
            },
            following: {
                select: {
                    id: true,
                    username: true,
                },
            },
        },
    });
    res.send(profiles);
}));
router.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestedProfile = yield prisma.user.findUnique({
        where: {
            username: req.params.username,
        },
        select: {
            id: true,
            name: true,
            username: true,
            createdAt: true,
            profile: {
                select: {
                    image: true,
                    header_image: true,
                    bio: true,
                },
            },
            followedBy: {
                select: {
                    id: true,
                    username: true,
                },
            },
            following: {
                select: {
                    id: true,
                    username: true,
                },
            },
        },
    });
    if (requestedProfile) {
        res.send(requestedProfile);
    }
    else {
        res.sendStatus(404);
    }
}));
router.post("/image/header", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadHeaderImage = yield prisma.user.update({
        where: {
            id: req.user.id,
        },
        data: {
            profile: {
                upsert: {
                    create: {
                        header_image: req.body.image,
                    },
                    update: {
                        header_image: req.body.image,
                    },
                },
            },
        },
    });
    if (uploadHeaderImage) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
}));
router.post("/image/profile", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadProfileImage = yield prisma.user.update({
        where: {
            id: req.user.id,
        },
        data: {
            profile: {
                upsert: {
                    create: {
                        image: req.body.image,
                    },
                    update: {
                        image: req.body.image,
                    },
                },
            },
        },
    });
    if (uploadProfileImage) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
}));
router.post("/bio", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const changeBio = yield prisma.user.update({
        where: {
            id: req.user.id,
        },
        data: {
            profile: {
                upsert: {
                    create: {
                        bio: req.body.bio,
                    },
                    update: {
                        bio: req.body.bio,
                    },
                },
            },
        },
    });
    if (changeBio) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
}));
exports.default = router;
//# sourceMappingURL=profile.js.map