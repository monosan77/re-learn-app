"use server";

import { isDarkColor } from "@/utils/isDarkColor";
import { auth } from "../../auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateCategory(
  formData: FormData,
  id: string,
  problem_set_id: string
) {
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

  await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name: formData.get("title") as string,
      color: formData.get("color") as string,
      text_color: textColor,
      problem_set_id: problem_set_id,
    },
  });
  revalidatePath("/works/problem");

  return null;
}
