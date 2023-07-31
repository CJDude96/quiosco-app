-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "order" JSONB NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
