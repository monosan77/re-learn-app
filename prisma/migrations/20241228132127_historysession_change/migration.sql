/*
  Warnings:

  - You are about to drop the column `profile_id` on the `history_problem` table. All the data in the column will be lost.
  - Added the required column `profile_id` to the `history_group` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_profile_id_fkey";

-- AlterTable
ALTER TABLE "history_group" ADD COLUMN     "profile_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "history_problem" DROP COLUMN "profile_id";

-- AddForeignKey
ALTER TABLE "history_group" ADD CONSTRAINT "history_group_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
