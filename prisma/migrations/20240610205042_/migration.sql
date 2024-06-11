/*
  Warnings:

  - Made the column `memberId` on table `CheckIn` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_memberId_fkey";

-- AlterTable
ALTER TABLE "CheckIn" ALTER COLUMN "memberId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
