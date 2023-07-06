-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "redeemed" BOOLEAN NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);
