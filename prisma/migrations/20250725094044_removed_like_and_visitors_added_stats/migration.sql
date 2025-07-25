/*
  Warnings:

  - You are about to drop the `Likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Visitors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Likes";

-- DropTable
DROP TABLE "Visitors";

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "visitors" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);
