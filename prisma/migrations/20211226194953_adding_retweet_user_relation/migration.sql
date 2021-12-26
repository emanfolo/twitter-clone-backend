-- CreateTable
CREATE TABLE "Retweet" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "tweetID" INTEGER NOT NULL,

    CONSTRAINT "Retweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_tweetID_fkey" FOREIGN KEY ("tweetID") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
