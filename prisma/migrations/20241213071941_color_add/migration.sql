/*
  Warnings:

  - Added the required column `color` to the `problem_set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "problem_set" ADD COLUMN     "color" TEXT NOT NULL;
