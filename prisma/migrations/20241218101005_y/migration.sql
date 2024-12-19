-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_problem_set_id_fkey";

-- DropForeignKey
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_problem_id_fkey";

-- DropForeignKey
ALTER TABLE "history_problem" DROP CONSTRAINT "history_problem_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "problem" DROP CONSTRAINT "problem_category_id_fkey";

-- DropForeignKey
ALTER TABLE "problem_set" DROP CONSTRAINT "problem_set_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_id_fkey";

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_id_fkey" FOREIGN KEY ("id") REFERENCES "auth_data"("providerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem_set" ADD CONSTRAINT "problem_set_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_problem" ADD CONSTRAINT "history_problem_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_problem_set_id_fkey" FOREIGN KEY ("problem_set_id") REFERENCES "problem_set"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problem" ADD CONSTRAINT "problem_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
