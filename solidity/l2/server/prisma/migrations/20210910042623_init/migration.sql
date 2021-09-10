-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "addr" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternalTransaction" (
    "id" SERIAL NOT NULL,
    "from_addr" TEXT NOT NULL,
    "to_addr" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "InternalTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalTransaction" (
    "id" SERIAL NOT NULL,
    "external_addr" TEXT NOT NULL,
    "internal_addr" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "ExternalTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_addr_key" ON "Account"("addr");

-- CreateIndex
CREATE UNIQUE INDEX "InternalTransaction_id_key" ON "InternalTransaction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalTransaction_id_key" ON "ExternalTransaction"("id");
