/*
  Warnings:

  - You are about to drop the column `tweetID` on the `Hashtag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hashtag" DROP CONSTRAINT "Hashtag_tweetID_fkey";

-- AlterTable
ALTER TABLE "Hashtag" DROP COLUMN "tweetID";

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
