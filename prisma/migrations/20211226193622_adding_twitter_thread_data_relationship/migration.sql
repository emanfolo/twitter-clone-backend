/*
  Warnings:

  - A unique constraint covering the columns `[threadSuccessorID]` on the table `Tweet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "threadSuccessorID" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Tweet_threadSuccessorID_key" ON "Tweet"("threadSuccessorID");

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_threadSuccessorID_fkey" FOREIGN KEY ("threadSuccessorID") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
