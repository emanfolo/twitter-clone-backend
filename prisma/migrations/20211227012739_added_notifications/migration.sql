/*
  Warnings:

  - Added the required column `notificationId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notificationId` to the `Mention` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notificationId` to the `Retweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "notificationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Mention" ADD COLUMN     "notificationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Retweet" ADD COLUMN     "notificationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recipientID" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "mentionID" INTEGER,
    "likeID" INTEGER,
    "retweetID" INTEGER,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Retweet" ADD FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mention" ADD FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipientID_fkey" FOREIGN KEY ("recipientID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
