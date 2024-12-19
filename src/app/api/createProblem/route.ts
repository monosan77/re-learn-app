import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface FormData {
  title: string;
  format: string;
  statement: string;
  answer: string;
  otherAnswer: string[];
  explanation?: string;
  category_id: string;
}
export async function POST(req: Request) {
  const formData: FormData = await req.json();
  try {
    if (
      formData.title.trim().length === 0 ||
      formData.format.trim().length === 0 ||
      formData.statement.trim().length === 0 ||
      formData.answer.trim().length === 0 ||
      !formData.category_id
    ) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }
    formData.otherAnswer.map((data) => {
      if (data.trim().length === 0) {
        return NextResponse.json(
          { message: "リクエストエラー" },
          { status: 405 }
        );
      }
    });

    const data = await prisma.problem.create({
      data: {
        title: formData.title,
        format: formData.format,
        statement: formData.statement,
        answer: formData.answer,
        otherOptions: formData.otherAnswer,
        explanation: formData.explanation,
        category_id: formData.category_id,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("server error", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
