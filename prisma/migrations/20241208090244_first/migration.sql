/*
  Warnings:

  - The primary key for the `Certification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Certification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[providerId]` on the table `Certification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerId` to the `Certification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_pkey",
ADD COLUMN     "providerId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Certification_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Certification_providerId_key" ON "Certification"("providerId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Certification"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;
