/*
  Warnings:

  - You are about to drop the column `rolecode` on the `Role` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Role_rolecode_key";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "rolecode",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "modifiedBy" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
