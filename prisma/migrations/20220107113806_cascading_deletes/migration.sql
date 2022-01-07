-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_likeID_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_mentionID_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_replyID_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_retweetID_fkey";

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_mentionID_fkey" FOREIGN KEY ("mentionID") REFERENCES "Mention"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_likeID_fkey" FOREIGN KEY ("likeID") REFERENCES "Like"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_retweetID_fkey" FOREIGN KEY ("retweetID") REFERENCES "Retweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_replyID_fkey" FOREIGN KEY ("replyID") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
