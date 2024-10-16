-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShortPosition" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "shortVolume" INTEGER NOT NULL,
    "shortExemptVolume" INTEGER NOT NULL,
    "totalVolume" INTEGER NOT NULL,

    CONSTRAINT "ShortPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ownership" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "shares" INTEGER NOT NULL,
    "change" TEXT NOT NULL,

    CONSTRAINT "Ownership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchCoverage" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "firm" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "priceTarget" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ResearchCoverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingPageTraffic" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "pageViews" INTEGER NOT NULL,
    "uniqueVisitors" INTEGER NOT NULL,
    "conversionRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LandingPageTraffic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebinarPerformance" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "registrations" INTEGER NOT NULL,
    "attendance" INTEGER NOT NULL,
    "conversionRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WebinarPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailPerformance" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "sends" INTEGER NOT NULL,
    "opens" INTEGER NOT NULL,
    "clicks" INTEGER NOT NULL,
    "conversionRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "EmailPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- AddForeignKey
ALTER TABLE "ShortPosition" ADD CONSTRAINT "ShortPosition_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ownership" ADD CONSTRAINT "Ownership_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchCoverage" ADD CONSTRAINT "ResearchCoverage_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandingPageTraffic" ADD CONSTRAINT "LandingPageTraffic_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebinarPerformance" ADD CONSTRAINT "WebinarPerformance_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailPerformance" ADD CONSTRAINT "EmailPerformance_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
