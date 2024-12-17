/*
  Warnings:

  - You are about to drop the column `problem_set_Id` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `problem_Id` on the `history_problem` table. All the data in the column will be lost.
  - You are about to drop the column `category_Id` on the `problem` table. All the data in the column will be lost.
  - You are about to drop the column `format_Id` on the `problem` table. All the data in the column will be lost.
  - You are about to drop the column `auth_providerId` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth_provider_id]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `problem_set_id` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problem_id` to the `history_problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format_id` to the `problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auth_provider_id` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_problem_set_Id_fkey";

-- DropForeignKey
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_problem_Id_fkey";

-- DropForeignKey
ALTER TABLE "problem" DROP CONSTRAINT "problem_category_Id_fkey";

-- DropForeignKey
ALTER TABLE "problem" DROP CONSTRAINT "problem_format_Id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_auth_providerId_fkey";

-- DropIndex
DROP INDEX "profile_auth_providerId_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "problem_set_Id",
ADD COLUMN     "problem_set_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "history_problem" DROP COLUMN "problem_Id",
ADD COLUMN     "problem_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "problem" DROP COLUMN "category_Id",
DROP COLUMN "format_Id",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "format_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "auth_providerId",
ADD COLUMN     "auth_provider_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profile_auth_provider_id_key" ON "profile"("auth_provider_id");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_auth_provider_id_fkey" FOREIGN KEY ("auth_provider_id") REFERENCES "auth_data"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_problem_set_id_fkey" FOREIGN KEY ("problem_set_id") REFERENCES "problem_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_format_id_fkey" FOREIGN KEY ("format_id") REFERENCES "format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
