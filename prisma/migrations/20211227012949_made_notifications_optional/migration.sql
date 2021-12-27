/*
  Warnings:

  - You are about to drop the column `notificationId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `notificationId` on the `Mention` table. All the data in the column will be lost.
  - You are about to drop the column `notificationId` on the `Retweet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mentionID]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[likeID]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[retweetID]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "Mention" DROP CONSTRAINT "Mention_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "Retweet" DROP CONSTRAINT "Retweet_notificationId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "notificationId";

-- AlterTable
ALTER TABLE "Mention" DROP COLUMN "notificationId";

-- AlterTable
ALTER TABLE "Retweet" DROP COLUMN "notificationId";

-- CreateIndex
CREATE UNIQUE INDEX "Notification_mentionID_key" ON "Notification"("mentionID");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_likeID_key" ON "Notification"("likeID");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_retweetID_key" ON "Notification"("retweetID");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_mentionID_fkey" FOREIGN KEY ("mentionID") REFERENCES "Mention"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_likeID_fkey" FOREIGN KEY ("likeID") REFERENCES "Like"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_retweetID_fkey" FOREIGN KEY ("retweetID") REFERENCES "Retweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
