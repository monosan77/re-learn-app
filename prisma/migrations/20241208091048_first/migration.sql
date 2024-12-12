/*
  Warnings:

  - You are about to drop the column `userId` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth_providerId]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth_providerId` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_userId_fkey";

-- DropIndex
DROP INDEX "profile_userId_key";

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "userId",
ADD COLUMN     "auth_providerId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profile_auth_providerId_key" ON "profile"("auth_providerId");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_auth_providerId_fkey" FOREIGN KEY ("auth_providerId") REFERENCES "auth_data"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;
