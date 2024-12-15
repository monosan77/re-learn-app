/*
  Warnings:

  - You are about to drop the column `auth_provider_id` on the `profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_auth_provider_id_fkey";

-- DropIndex
DROP INDEX "profile_auth_provider_id_key";

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "auth_provider_id";

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_id_fkey" FOREIGN KEY ("id") REFERENCES "auth_data"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;
