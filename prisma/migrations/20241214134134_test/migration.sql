-- DropForeignKey
ALTER TABLE "problem_set" DROP CONSTRAINT "problem_set_profile_id_fkey";

-- AlterTable
ALTER TABLE "problem_set" ALTER COLUMN "profile_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "problem_set" ADD CONSTRAINT "problem_set_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
