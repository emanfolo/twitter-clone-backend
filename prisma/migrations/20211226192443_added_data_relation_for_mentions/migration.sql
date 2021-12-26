-- CreateTable
CREATE TABLE "Mention" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Mention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MentionToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Mention_username_key" ON "Mention"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_MentionToTweet_AB_unique" ON "_MentionToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_MentionToTweet_B_index" ON "_MentionToTweet"("B");

-- AddForeignKey
ALTER TABLE "Mention" ADD CONSTRAINT "Mention_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MentionToTweet" ADD FOREIGN KEY ("A") REFERENCES "Mention"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MentionToTweet" ADD FOREIGN KEY ("B") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
