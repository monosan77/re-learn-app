/*
  Warnings:

  - Changed the type of `format` on the `problem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Format" AS ENUM ('select', 'write');

-- AlterTable
ALTER TABLE "problem" DROP COLUMN "format",
ADD COLUMN     "format" "Format" NOT NULL;
