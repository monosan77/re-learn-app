/*
  Warnings:

  - The primary key for the `auth_data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `history_problem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `problem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_problem_id_fkey";

-- DropForeignKey
ALTER TABLE "problem" DROP CONSTRAINT "problem_category_id_fkey";

-- AlterTable
ALTER TABLE "auth_data" DROP CONSTRAINT "auth_data_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "auth_data_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "auth_data_id_seq";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "category_id_seq";

-- AlterTable
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "problem_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "history_problem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "history_problem_id_seq";

-- AlterTable
ALTER TABLE "problem" DROP CONSTRAINT "problem_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "problem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "problem_id_seq";

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
