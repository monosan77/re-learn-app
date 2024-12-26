"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "../../auth";
import { CategoryModel } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createStudySession(
  formData: FormData,
  categoryList: CategoryModel[]
) {
  "use server";
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    const message = { response: "※セッションエラー", ok: false };
    return message;
  }
  console.log(formData.get("category")?.toString());
  if (formData.get("category")?.toString() === "--") {
    const message = { response: "※カテゴリーを選択してください", ok: false };
    return message;
  }

  try {
    const problemData: CategoryModel | undefined = categoryList.find(
      (category) => category.id === formData.get("category")?.toString()
    );

    if (!problemData || !problemData.problem) {
      throw new Error("※カテゴリーデータを取得できませんでした。");
    }

    const studySession = await prisma.study_session.create({
      data: {
        profile_id: session.user.id,
        current_index: 1,
        is_completed: false,
        answer_history: {
          createMany: {
            data: problemData.problem.map((problem, index) => ({
              index: index + 1,
              problem_id: problem.id,
              is_correct: false,
              user_answer: "",
            })),
          },
        },
      },
    });

    revalidatePath("/works/studying");
    return { response: studySession.id, ok: true };
  } catch (error) {
    console.log(error);
    const message = { response: "※サーバーエラーが発生しました。", ok: false };
    return message;
  }
}
