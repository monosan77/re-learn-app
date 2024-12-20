"use server";
import { auth } from "../../auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProblem(problemId: string) {
  "use server";
  const session = await auth();
  if (!session || !session.user) {
    const message = { title: "※セッションエラー" };
    return message;
  }

  await prisma.problem_set.delete({
    where: {
      id: problemId,
    },
  });
  revalidatePath("/works/home");

  return null;
}
