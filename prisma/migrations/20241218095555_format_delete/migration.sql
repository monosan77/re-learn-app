/*
  Warnings:

  - You are about to drop the column `format_id` on the `problem` table. All the data in the column will be lost.
  - You are about to drop the `format` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `format` to the `problem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "problem" DROP CONSTRAINT "problem_format_id_fkey";

-- AlterTable
ALTER TABLE "problem" DROP COLUMN "format_id",
ADD COLUMN     "format" "Format" NOT NULL,
ALTER COLUMN "explanation" DROP NOT NULL;

-- DropTable
DROP TABLE "format";
