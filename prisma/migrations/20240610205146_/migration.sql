-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_memberId_fkey";

-- AlterTable
ALTER TABLE "CheckIn" ALTER COLUMN "memberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
