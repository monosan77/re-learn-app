/*
  Warnings:

  - Added the required column `history_group_id` to the `history_problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "history_problem" ADD COLUMN     "history_group_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "history_group" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "history_group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_history_group_id_fkey" FOREIGN KEY ("history_group_id") REFERENCES "history_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
