/*
  Warnings:

  - You are about to drop the `_HashtagToTweet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tweetID` to the `Hashtag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_HashtagToTweet" DROP CONSTRAINT "_HashtagToTweet_A_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToTweet" DROP CONSTRAINT "_HashtagToTweet_B_fkey";

-- AlterTable
ALTER TABLE "Hashtag" ADD COLUMN     "tweetID" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_HashtagToTweet";

-- AddForeignKey
ALTER TABLE "Hashtag" ADD CONSTRAINT "Hashtag_tweetID_fkey" FOREIGN KEY ("tweetID") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
