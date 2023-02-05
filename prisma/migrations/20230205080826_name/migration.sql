/*
  Warnings:

  - You are about to drop the column `action` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nationalId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phonenumber` on the `User` table. All the data in the column will be lost.
  - The `image` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_gender_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "action",
DROP COLUMN "email",
DROP COLUMN "firstname",
DROP COLUMN "gender",
DROP COLUMN "lastname",
DROP COLUMN "nationalId",
DROP COLUMN "phonenumber",
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "genderGenderId" INTEGER,
ADD COLUMN     "number" TEXT NOT NULL,
DROP COLUMN "image",
ADD COLUMN     "image" BYTEA;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_genderGenderId_fkey" FOREIGN KEY ("genderGenderId") REFERENCES "Gender"("genderId") ON DELETE SET NULL ON UPDATE CASCADE;
