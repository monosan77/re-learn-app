-- CreateEnum
CREATE TYPE "Format" AS ENUM ('select', 'write');

-- CreateTable
CREATE TABLE "problem_set" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,

    CONSTRAINT "problem_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history_problem" (
    "id" SERIAL NOT NULL,
    "profile_id" TEXT NOT NULL,
    "problem_Id" INTEGER NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "attemptedAnswer" TEXT NOT NULL,

    CONSTRAINT "history_problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "problem_set_Id" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "format_Id" INTEGER NOT NULL,
    "statement" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "otherOptions" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "category_Id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "format" (
    "id" SERIAL NOT NULL,
    "name" "Format" NOT NULL,

    CONSTRAINT "format_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "problem_set" ADD CONSTRAINT "problem_set_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_problem_Id_fkey" FOREIGN KEY ("problem_Id") REFERENCES "problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_problem_set_Id_fkey" FOREIGN KEY ("problem_set_Id") REFERENCES "problem_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_format_Id_fkey" FOREIGN KEY ("format_Id") REFERENCES "format"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_category_Id_fkey" FOREIGN KEY ("category_Id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
