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
const prisma = new client_1.PrismaClient;
const hashtagFinder = (tweet, tweetID) => __awaiter(void 0, void 0, void 0, function* () {
    let re = /(?<!\w)#\w+/g;
    const hashTags = [...tweet.matchAll(re)];
    const array = hashTags.flat();
    if (array && array.length > 0) {
        const addHashtags = yield prisma.tweet.update({
            data: {
                hashtags: {
                    connectOrCreate: array.map((tag) => {
                        return {
                            create: { contents: tag },
                            where: { contents: tag },
                        };
                    }),
                }
            },
            where: {
                id: tweetID,
            },
        });
    }
    // for (let i = 0; i < array.length; i++) {
    //   const addHashtags = await prisma.tweet.update({
    //     where: {
    //       id: tweetID,
    //     },
    //     data: {
    //       hashtags: {
    //         // create: { 
    //         //   contents: array[i],
    //         // }
    //         connectOrCreate: {
    //           create: {contents: array[i]}, 
    //           where: { id: 4 }
    //         }
    //       }
    //     }
    //   })
    // }
});
exports.default = hashtagFinder;
//# sourceMappingURL=hashtagFinder.js.map