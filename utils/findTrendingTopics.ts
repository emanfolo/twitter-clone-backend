import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient


const findTrendingTopics = async (tweets: any) => {

//Find frequency of all words 

  const freqMap = {};

  function wordFreq(string) {
    let words = string.replace(/[.]/g, '').split(/\s/);
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
      });
    }

  for (let i = 0; i < tweets.length; i++){
    wordFreq(tweets[i].contents)
  }

//Filter out unpermitted words 

const unpermittedWord = ['the', 
'i', 'my', 'to', 'for', 'is', 'this', 
'hashtags', '?', '', 'on', 'there', 'a', 'if', 'on', 'be', 'way', 'do', 'of']

const filteredTrending = Object.keys(freqMap)
  .filter(key => !unpermittedWord.includes(key.toLowerCase()))
  .reduce((obj, key) => {
    obj[key] = freqMap[key];
    return obj;
  }, {});

let topTenTrending = {};

//Take the top 10 most frequent words


const pickHighest = (obj, num = 10) => {
   
   if(num > Object.keys(obj).length){
      return false;
   };
   Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
   {
      if(ind < num){
         topTenTrending[key] = obj[key];
      }
   });
};

pickHighest(filteredTrending)

//Return the trending topics

console.log(topTenTrending)

return topTenTrending

}

export default findTrendingTopics