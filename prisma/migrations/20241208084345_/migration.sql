/*
  Warnings:

  - You are about to drop the column `email` on the `Certification` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Certification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Certification_email_key";

-- AlterTable
ALTER TABLE "Certification" DROP COLUMN "email",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
