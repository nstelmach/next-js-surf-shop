/*
  Warnings:

  - You are about to drop the column `paymentId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `shippingId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Shipping` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentName` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingName` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_shippingId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "paymentId",
DROP COLUMN "shippingId",
ADD COLUMN     "paymentName" TEXT NOT NULL,
ADD COLUMN     "shippingName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "name" SET DEFAULT 'blik';

-- AlterTable
ALTER TABLE "Shipping" ALTER COLUMN "name" SET DEFAULT 'inpost';

-- CreateIndex
CREATE UNIQUE INDEX "Payment_name_key" ON "Payment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shipping_name_key" ON "Shipping"("name");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_shippingName_fkey" FOREIGN KEY ("shippingName") REFERENCES "Shipping"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_paymentName_fkey" FOREIGN KEY ("paymentName") REFERENCES "Payment"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
