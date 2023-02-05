/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `modifiedBy` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rolecode]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rolecode` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "createdAt",
DROP COLUMN "modifiedBy",
DROP COLUMN "updatedAt",
ADD COLUMN     "rolecode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Role_rolecode_key" ON "Role"("rolecode");
