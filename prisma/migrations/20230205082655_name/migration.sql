/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedBy` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `genderGenderId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rolecode]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rolecode` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationalId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_genderGenderId_fkey";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "createdAt",
DROP COLUMN "modifiedBy",
DROP COLUMN "updatedAt",
ADD COLUMN     "rolecode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullname",
DROP COLUMN "genderGenderId",
DROP COLUMN "number",
ADD COLUMN     "action" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "gender" INTEGER NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "nationalId" TEXT NOT NULL,
ADD COLUMN     "phonenumber" TEXT NOT NULL,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Role_rolecode_key" ON "Role"("rolecode");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gender_fkey" FOREIGN KEY ("gender") REFERENCES "Gender"("genderId") ON DELETE RESTRICT ON UPDATE CASCADE;
