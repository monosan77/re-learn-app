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

export async function GET(req: NextRequest) {
  try {
    const userId: string | null = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      throw new Error("error");
    }
    const historyGroup = await prisma.history_group.findMany({
      where: {
        profile_id: userId,
      },
      select: {
        id: true,
        createdAt: true,
        history_problem: true,
      },
    });

    const formatHistoryGroup = historyGroup.map((problem) => ({
      id: problem.history_problem[0].problem_id,
      date: problem.createdAt,
    }));

    type HistoryItem = {
      id: string;
      date: Date;
    };

    // 同じIDがすでにある場合、dateを比較して新しい方を残し新しい順に並び替える
    const uniqueData = Object.values(
      formatHistoryGroup.reduce<Record<string, HistoryItem>>((acc, item) => {
        if (!acc[item.id] || acc[item.id].date < item.date) {
          acc[item.id] = item;
        }
        return acc;
      }, {})
    ).sort((a, b) => b.date.getTime() - a.date.getTime());

    //データを６件までに制限
    if (uniqueData.length > 6) {
      uniqueData.slice(0, 6);
    }
    // console.log(uniqueData);

    const categoryAndProblem = await prisma.problem.findMany({
      where: {
        id: { in: uniqueData.map((date) => date.id) },
      },
      select: {
        category: {
          select: {
            name: true,
            problem_set: {
              select: {
                name: true,
                id: true,
                color: true,
                text_color: true,
              },
            },
          },
        },
      },
    });

    const historyProblem = categoryAndProblem.map((category, index) => ({
      day: uniqueData[index].date,
      categoryName: category.category.name,
      problemSetName: category.category.problem_set.name,
      problemSetId: category.category.problem_set.id,
      color: category.category.problem_set.color,
      text_color: category.category.problem_set.text_color,
    }));
    return NextResponse.json({ historyProblem }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
