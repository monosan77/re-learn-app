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

    const newOptions: string[] = formData.otherAnswer.map((elem: string) => {
      const result = elem.replace(/[\r\n]+/g, "");
      return result;
    });

    const data = await prisma.problem.create({
      data: {
        title: formData.title,
        format: formData.format,
        statement: formData.statement,
        answer: formData.answer,
        otherOptions: newOptions,
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

    const newOptions: string[] = formData.otherAnswer.map((elem: string) => {
      const result = elem.replace(/[\r\n]+/g, "");
      return result;
    });

    const data = await prisma.problem.update({
      where: {
        id: formData.problem_id,
      },
      data: {
        title: formData.title.trim(),
        format: formData.format,
        statement: formData.statement,
        answer: formData.answer,
        otherOptions: newOptions,
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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const problemId = searchParams.get("id");

    if (!problemId) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

    const data = await prisma.problem.delete({
      where: {
        id: problemId,
      },
    });
    revalidatePath("/works/problem");
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
    !formData.category_id
  ) {
    return { ok: false };
  }
  if (formData.format === "select") {
    formData.otherAnswer.map((data) => {
      if (data.trim().length === 0) {
        return { ok: false };
      }
    });
  }
  return { ok: true };
}
