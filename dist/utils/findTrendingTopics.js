"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const findTrendingTopics = (tweets) =>
  __awaiter(void 0, void 0, void 0, function* () {
    //Find frequency of all words
    const freqMap = {};
    function wordFreq(string) {
      let words = string.replace(/[.]/g, "").split(/\s/);
      words.forEach(function (w) {
        if (!freqMap[w]) {
          freqMap[w] = 0;
        }
        freqMap[w] += 1;
      });
    }
    for (let i = 0; i < tweets.length; i++) {
      wordFreq(tweets[i].contents);
    }
    //Filter out unpermitted words
    const unpermittedWord = [
      "the",
      "i",
      "my",
      "to",
      "for",
      "is",
      "this",
      "hashtags",
      "?",
      "",
      "on",
      "there",
      "a",
      "if",
      "on",
      "be",
      "way",
      "do",
      "of",
    ];
    const filteredTrending = Object.keys(freqMap)
      .filter((key) => !unpermittedWord.includes(key.toLowerCase()))
      .reduce((obj, key) => {
        obj[key] = freqMap[key];
        return obj;
      }, {});
    //Take the top 10 most frequent words
    let topTenTrending = {};
    const pickHighest = (obj, num = 10) => {
      if (num > Object.keys(obj).length) {
        return false;
      }
      Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach((key, ind) => {
          if (ind < num) {
            topTenTrending[key] = obj[key];
          }
        });
    };
    pickHighest(filteredTrending);
    //Return the trending topics
    return topTenTrending;
  });
exports.default = findTrendingTopics;
//# sourceMappingURL=findTrendingTopics.js.map
