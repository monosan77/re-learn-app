/*
  Warnings:

  - Made the column `profile_id` on table `problem_set` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `profile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "problem_set" DROP CONSTRAINT "problem_set_profile_id_fkey";

-- AlterTable
ALTER TABLE "problem_set" ALTER COLUMN "profile_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "profile" ALTER COLUMN "image" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "problem_set" ADD CONSTRAINT "problem_set_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
