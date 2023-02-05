-- CreateTable
CREATE TABLE "Store" (
    "storeId" TEXT NOT NULL,
    "storeName" TEXT NOT NULL,
    "storeAddress" TEXT NOT NULL,
    "storeNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "action" INTEGER NOT NULL DEFAULT 1,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("storeId")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "certificateId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "action" INTEGER NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("certificateId")
);

-- CreateTable
CREATE TABLE "StoreCertificate" (
    "id" TEXT NOT NULL,
    "cetificateId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "action" INTEGER NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "planId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "action" INTEGER NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("planId")
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tilte" TEXT NOT NULL,
    "action" INTEGER NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "StoreImage" (
    "imageId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreImage_pkey" PRIMARY KEY ("imageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_storeId_key" ON "Store"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_certificateId_key" ON "Certificate"("certificateId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreCertificate_id_key" ON "StoreCertificate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_planId_key" ON "Plan"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_postId_key" ON "Post"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreImage_imageId_key" ON "StoreImage"("imageId");

-- AddForeignKey
ALTER TABLE "StoreCertificate" ADD CONSTRAINT "StoreCertificate_cetificateId_fkey" FOREIGN KEY ("cetificateId") REFERENCES "Certificate"("certificateId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCertificate" ADD CONSTRAINT "StoreCertificate_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreImage" ADD CONSTRAINT "StoreImage_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;
