import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

interface FormData {
  title: string;
  format: string;
  statement: string;
  answer: string;
  otherAnswer: string[];
  explanation?: string;
  category_id: string;
  problem_id?: string;
}

// 問題を新規に作成するAPI
export async function POST(req: Request) {
  const formData: FormData = await req.json();
  try {
    const check = validation(formData);
    if (!check.ok) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

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
    revalidatePath("/works/problems");
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("server error", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

// 問題を編集するAPI
export async function PUT(req: Request) {
  try {
    const formData: FormData = await req.json();
    const check = validation(formData);
    if (!check.ok) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }
    const data = await prisma.problem.update({
      where: {
        id: formData.problem_id,
      },
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
    revalidatePath("/works/problems");
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}

// bodyから取得したデータのバリデーション関数
function validation(formData: FormData) {
  if (
    formData.title.trim().length === 0 ||
    formData.format.trim().length === 0 ||
    formData.statement.trim().length === 0 ||
    formData.answer.trim().length === 0 ||
    !formData.category_id ||
    formData.otherAnswer[0].trim().length === 0 ||
    formData.otherAnswer[1].trim().length === 0 ||
    formData.otherAnswer[2].trim().length === 0
  ) {
    return { ok: false };
  }
  formData.otherAnswer.map((data) => {
    if (data.trim().length === 0) {
      return { ok: false };
    }
  });
  return { ok: true };
}
