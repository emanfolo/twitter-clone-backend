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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv = __importStar(require("dotenv"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
dotenv.config({ path: '../.env' });
const prisma = new client_1.PrismaClient();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use((0, cors_1.default)(options));
router.get('/', (req, res) => {
    res.send('User endpoint');
});
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email) {
        console.log(req.body.email);
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 12);
        const newUser = yield prisma.user.create({
            data: {
                email: req.body.email,
                password: hashedPassword,
                name: req.body.name,
                username: req.body.username,
                profile: {
                    create: {
                        bio: null,
                        image: null,
                        header_image: null
                    }
                }
            }
        });
        const accessToken = jsonwebtoken_1.default.sign(newUser, process.env.ACCESS_TOKEN_SECRET);
        res.json({ userDetails: newUser, accessToken: accessToken });
    }
    else {
        res.send('Error please try again');
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userObject = yield prisma.user.findUnique({
        where: {
            email: req.body.email
        },
    });
    if (userObject) {
        const match = yield bcryptjs_1.default.compare(req.body.password, userObject.password);
        if (match) {
            const accessToken = jsonwebtoken_1.default.sign(userObject, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
        }
        else if (!match) {
            res.console.error();
            ('Wrong password');
        }
    }
    else if (!userObject) {
        res.console.error();
        ('No user matches this email');
    }
}));
exports.default = router;
//# sourceMappingURL=user.js.map