-- CreateTable
CREATE TABLE "study_session" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "current_index" INTEGER NOT NULL DEFAULT 1,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "study_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer_history" (
    "id" SERIAL NOT NULL,
    "study_session_id" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "problem_id" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,
    "user_answer" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "answer_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "study_session" ADD CONSTRAINT "study_session_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer_history" ADD CONSTRAINT "answer_history_study_session_id_fkey" FOREIGN KEY ("study_session_id") REFERENCES "study_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
