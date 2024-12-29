import { prisma } from "@/lib/prisma";
import { Study_Session_Model } from "@/types/types";
import { NextResponse } from "next/server";

interface QueryModel {
  answerHistoryData: Study_Session_Model;
}

export async function PUT(req: Request) {
  try {
    const { answerHistoryData }: QueryModel = await req.json();

    if (!answerHistoryData || !answerHistoryData.answer_history) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

    const data = await prisma.study_session.update({
      where: {
        id: answerHistoryData.id,
      },
      data: {
        current_index: 1,
        answer_history: {
          updateMany: {
            where: {
              study_session_id: answerHistoryData.id,
            },
            data: {
              is_correct: false,
              user_answer: "",
            },
          },
        },
      },
    });
    console.log(data, "uududu");
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
