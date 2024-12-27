-- AddForeignKey
ALTER TABLE "answer_history" ADD CONSTRAINT "answer_history_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
