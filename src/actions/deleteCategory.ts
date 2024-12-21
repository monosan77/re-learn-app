"use server";
import { auth } from "../../auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCategory(categoryId: string) {
  "use server";
  const session = await auth();
  if (!session || !session.user) {
    const message = { title: "※セッションエラー" };
    return message;
  }

  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  revalidatePath("/works/problem");

  return null;
}
