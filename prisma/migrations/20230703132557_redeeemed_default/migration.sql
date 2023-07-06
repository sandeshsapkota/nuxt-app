/*
  Warnings:

  - You are about to drop the column `redeemed` on the `Coupon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "redeemed",
ADD COLUMN     "redeemed" BOOLEAN NOT NULL DEFAULT false;
