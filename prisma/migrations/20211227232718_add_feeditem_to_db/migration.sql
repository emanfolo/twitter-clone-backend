-- CreateTable
CREATE TABLE "FeedItem" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "tweetID" INTEGER,
    "retweetID" INTEGER,

    CONSTRAINT "FeedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FeedItem_tweetID_key" ON "FeedItem"("tweetID");

-- CreateIndex
CREATE UNIQUE INDEX "FeedItem_retweetID_key" ON "FeedItem"("retweetID");

-- AddForeignKey
ALTER TABLE "FeedItem" ADD CONSTRAINT "FeedItem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItem" ADD CONSTRAINT "FeedItem_tweetID_fkey" FOREIGN KEY ("tweetID") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedItem" ADD CONSTRAINT "FeedItem_retweetID_fkey" FOREIGN KEY ("retweetID") REFERENCES "Retweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
