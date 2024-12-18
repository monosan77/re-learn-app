"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import { isDarkColor } from "@/utils/isDarkColor";

export async function createCategory(formData: FormData, id: string) {
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

  await prisma.category.create({
    data: {
      name: formData.get("title") as string,
      color: formData.get("color") as string,
      text_color: textColor,
      problem_set_id: id,
    },
  });

  revalidatePath("/works/home");

  return null;
}
