/*
  Warnings:

  - Changed the type of `chosenSize` on the `CartProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `OrderProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "chosenSize",
ADD COLUMN     "chosenSize" "Size" NOT NULL;

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "size",
ADD COLUMN     "size" "Size" NOT NULL;
