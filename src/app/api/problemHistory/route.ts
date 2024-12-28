import { prisma } from "@/lib/prisma";
import { Study_Session_Model } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { answerHistoryData }: { answerHistoryData: Study_Session_Model } =
      await req.json();
    if (!answerHistoryData || !answerHistoryData.answer_history) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }
    await prisma.history_group.create({
      data: {
        profile_id: answerHistoryData.profile_id,
        history_problem: {
          createMany: {
            data: answerHistoryData.answer_history.map((problem) => ({
              isCorrect: problem.is_correct,
              attemptedAnswer: problem.user_answer,
              problem_id: problem.problem_id,
            })),
          },
        },
      },
    });
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
