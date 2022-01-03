-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "followID" INTEGER;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_followID_fkey" FOREIGN KEY ("followID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
