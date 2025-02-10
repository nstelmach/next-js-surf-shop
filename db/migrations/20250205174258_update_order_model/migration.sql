/*
  Warnings:

  - You are about to drop the column `paymentId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippingId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `paymentName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_shippingId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paymentId",
DROP COLUMN "shippingId",
ADD COLUMN     "paymentName" TEXT NOT NULL,
ADD COLUMN     "shippingName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingName_fkey" FOREIGN KEY ("shippingName") REFERENCES "Shipping"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentName_fkey" FOREIGN KEY ("paymentName") REFERENCES "Payment"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
