import { prisma } from "@/lib/prisma";
import { Answer_History_Model } from "@/types/types";
import { NextResponse } from "next/server";

interface fetchModel {
  currentProblem: Answer_History_Model;
  index: number;
  userAnswer: string;
}

export async function PUT(req: Request) {
  try {
    const { currentProblem, index, userAnswer }: fetchModel = await req.json();
    if (!currentProblem || !index || !userAnswer) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

    const studySessionData = await prisma.study_session.findUnique({
      where: {
        id: currentProblem.study_session_id,
      },
      include: {
        answer_history: {
          where: {
            index: index,
          },
        },
      },
    });

    const isCorrect = currentProblem.problem.answer === userAnswer;
    const isCompleted = studySessionData?.answer_history.length === index;

    const data1 = await prisma.study_session.update({
      where: {
        id: currentProblem.study_session_id,
      },
      data: {
        current_index: index + 1,
        is_completed: isCompleted,
      },
    });
    const data2 = await prisma.answer_history.update({
      where: {
        id: currentProblem.id,
      },
      data: {
        user_answer: userAnswer,
        is_correct: isCorrect,
      },
    });
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
