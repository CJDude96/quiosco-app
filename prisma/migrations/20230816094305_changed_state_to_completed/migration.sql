/*
  Warnings:

  - You are about to drop the column `state` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "state",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
