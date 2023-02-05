-- CreateEnum
CREATE TYPE "ROLE_NAME" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "nationalId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT,
    "action" INTEGER NOT NULL DEFAULT 1,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" TEXT NOT NULL,
    "rolename" "ROLE_NAME" NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "Gender" (
    "genderId" INTEGER NOT NULL,
    "gender" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleId_key" ON "Role"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_rolename_key" ON "Role"("rolename");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_genderId_key" ON "Gender"("genderId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gender_fkey" FOREIGN KEY ("gender") REFERENCES "Gender"("genderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_fkey" FOREIGN KEY ("role") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;
