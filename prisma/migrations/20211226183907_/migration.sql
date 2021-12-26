/*
  Warnings:

  - A unique constraint covering the columns `[contents]` on the table `Hashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hashtag_contents_key" ON "Hashtag"("contents");
