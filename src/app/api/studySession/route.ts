import { prisma } from "@/lib/prisma";
import { Answer_History_Model } from "@/types/types";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface fetchModel {
  currentProblem: Answer_History_Model;
  currentIndex: number;
  userAnswer: string;
}

export async function PUT(req: Request) {
  try {
    const { currentProblem, currentIndex, userAnswer }: fetchModel =
      await req.json();
    if (!currentProblem || !currentIndex) {
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
            index: currentIndex,
          },
        },
      },
    });

    // ユーザの解答と答えの正当
    const isCorrect: boolean = currentProblem.problem.answer === userAnswer;
    // 全ての問題を解き終わったか
    const isCompleted:boolean =
      studySessionData?.answer_history.length === currentIndex;

    await prisma.study_session.update({
      where: {
        id: currentProblem.study_session_id,
      },
      data: {
        current_index: currentIndex + 1,
        is_completed: isCompleted,
      },
    });
    await prisma.answer_history.update({
      where: {
        id: currentProblem.id,
      },
      data: {
        user_answer: userAnswer ? userAnswer : "",
        is_correct: isCorrect,
      },
    });
    revalidatePath("/works/studying");
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const studyId = searchParams.get("studyId");
    console.log(studyId);
    if (!studyId) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

    await prisma.study_session.delete({
      where: {
        id: studyId,
      },
    });
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
