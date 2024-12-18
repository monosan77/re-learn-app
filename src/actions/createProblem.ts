"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import { isDarkColor } from "@/utils/isDarkColor";

export async function createProblem(formData: FormData) {
  "use server";
  const session = await auth();
  if (!session || !session.user) {
    const message = { title: "※セッションエラー" };
    return message;
  }
  if (!formData.get("title")?.toString().trim()) {
    const message = { title: "※入力してください" };
    return message;
  }

  // 暗い色ならtrueを返す
  const textColor = isDarkColor(formData.get("color") as string);

  await prisma.problem_set.create({
    data: {
      name: formData.get("title") as string,
      color: formData.get("color") as string,
      text_color: textColor,
      profile_id: session.user.id as string,
    },
  });

  revalidatePath("/works/home");

  return null;
}
