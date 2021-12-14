/*
  Warnings:

  - You are about to drop the `_HashtagToTweet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HashtagToTweet" DROP CONSTRAINT "_HashtagToTweet_A_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToTweet" DROP CONSTRAINT "_HashtagToTweet_B_fkey";

-- DropTable
DROP TABLE "_HashtagToTweet";

-- CreateTable
CREATE TABLE "HashtagsOnTweets" (
    "hashtagID" INTEGER NOT NULL,
    "tweetID" INTEGER NOT NULL,

    CONSTRAINT "HashtagsOnTweets_pkey" PRIMARY KEY ("hashtagID","tweetID")
);

-- AddForeignKey
ALTER TABLE "HashtagsOnTweets" ADD CONSTRAINT "HashtagsOnTweets_hashtagID_fkey" FOREIGN KEY ("hashtagID") REFERENCES "Hashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashtagsOnTweets" ADD CONSTRAINT "HashtagsOnTweets_tweetID_fkey" FOREIGN KEY ("tweetID") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
