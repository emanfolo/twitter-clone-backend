/*
  Warnings:

  - A unique constraint covering the columns `[userID,tweetID]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userID,tweetID]` on the table `Retweet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_userID_tweetID_key" ON "Like"("userID", "tweetID");

-- CreateIndex
CREATE UNIQUE INDEX "Retweet_userID_tweetID_key" ON "Retweet"("userID", "tweetID");
