"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv.config({ path: "../.env" });
const prisma = new client_1.PrismaClient();
const allowedOrigins = ["http://localhost:3000"];
const options = {
  origin: allowedOrigins,
};
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use((0, cors_1.default)(options));
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jsonwebtoken_1.default.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};
router.post("/new", authenticateToken, (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const newRetweet = yield prisma.retweet.create({
      data: {
        userID: req.user.id,
        tweetID: req.body.tweetID,
      },
    });
    if (req.user.id != req.body.notificationRecipient) {
      const addNotification = yield prisma.notification.create({
        data: {
          retweetID: newRetweet.id,
          type: "Retweet",
          recipientID: req.body.notificationRecipient,
        },
      });
      const addToFeed = yield prisma.feedItem.create({
        data: {
          type: "Retweet",
          tweetID: newRetweet.tweetID,
          retweetID: newRetweet.id,
          userID: req.user.id,
        },
      });
    }
    res.sendStatus(204);
  })
);
router.post("/delete", authenticateToken, (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const retweet = yield prisma.retweet.findUnique({
      where: {
        TweetRetweetUserID: {
          userID: req.user.id,
          tweetID: req.body.tweetID,
        },
      },
      select: {
        id: true,
      },
    });
    if (retweet) {
      if (req.user.id != req.body.notificationRecipient) {
        const deleteNotificationAndFeedItem = yield prisma.retweet.update({
          where: {
            id: retweet.id,
          },
          data: {
            notification: {
              delete: true,
            },
            feedItem: {
              delete: true,
            },
          },
        });
      }
      const deletedRetweet = yield prisma.retweet.delete({
        where: {
          id: retweet.id,
        },
      });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  })
);
exports.default = router;
//# sourceMappingURL=retweet.js.map
