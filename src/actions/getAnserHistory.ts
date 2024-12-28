"use server";

import { prisma } from "@/lib/prisma";

export async function getAnswerHistory(id: string) {
  try {
    const problemSession = await prisma.study_session.findUnique({
      where: {
        id: id,
      },
      include: {
        answer_history: {
          include: {
            problem: true,
          },
          orderBy: {
            index: "asc",
          },
        },
      },
    });

    return problemSession;
  } catch (error) {
    console.log(error);
    return null;
  }
}
