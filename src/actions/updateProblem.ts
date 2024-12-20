"use server";
import { isDarkColor } from "@/utils/isDarkColor";
import { auth } from "../../auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProblem(formData: FormData, problemId: string) {
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

  const textColor = isDarkColor(formData.get("color") as string);

  await prisma.problem_set.update({
    where: {
      id: problemId,
    },
    data: {
      name: formData.get("title") as string,
      color: formData.get("color") as string,
      text_color: textColor,
      profile_id: session.user.id as string,
    },
  });
  revalidatePath("/works/problem");

  return null;
}
