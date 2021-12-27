/*
  Warnings:

  - A unique constraint covering the columns `[replyID]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "replyID" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Notification_replyID_key" ON "Notification"("replyID");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_replyID_fkey" FOREIGN KEY ("replyID") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
