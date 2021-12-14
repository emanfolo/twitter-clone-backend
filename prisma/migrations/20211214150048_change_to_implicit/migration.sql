/*
  Warnings:

  - You are about to drop the `HashtagsOnTweets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HashtagsOnTweets" DROP CONSTRAINT "HashtagsOnTweets_hashtagID_fkey";

-- DropForeignKey
ALTER TABLE "HashtagsOnTweets" DROP CONSTRAINT "HashtagsOnTweets_tweetID_fkey";

-- DropTable
DROP TABLE "HashtagsOnTweets";

-- CreateTable
CREATE TABLE "_HashtagToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HashtagToTweet_AB_unique" ON "_HashtagToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_HashtagToTweet_B_index" ON "_HashtagToTweet"("B");

-- AddForeignKey
ALTER TABLE "_HashtagToTweet" ADD FOREIGN KEY ("A") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToTweet" ADD FOREIGN KEY ("B") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
