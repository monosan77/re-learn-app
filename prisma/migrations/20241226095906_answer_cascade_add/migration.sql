-- DropForeignKey
ALTER TABLE "answer_history" DROP CONSTRAINT "answer_history_study_session_id_fkey";

-- AddForeignKey
ALTER TABLE "answer_history" ADD CONSTRAINT "answer_history_study_session_id_fkey" FOREIGN KEY ("study_session_id") REFERENCES "study_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
