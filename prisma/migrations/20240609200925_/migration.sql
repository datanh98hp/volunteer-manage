-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CHILDREND', 'YOUTH');

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'CHILDREND',
    "class" VARCHAR(5) NOT NULL,
    "school" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckIn" (
    "id" SERIAL NOT NULL,
    "note" TEXT,
    "memberId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CheckIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perform" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Perform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JoinIn" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER,
    "perfomId" INTEGER,

    CONSTRAINT "JoinIn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinIn" ADD CONSTRAINT "JoinIn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinIn" ADD CONSTRAINT "JoinIn_perfomId_fkey" FOREIGN KEY ("perfomId") REFERENCES "Perform"("id") ON DELETE SET NULL ON UPDATE CASCADE;
