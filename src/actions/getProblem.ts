import { prisma } from "@/lib/prisma";

//　問題単体のIDをもとに問題のデータを取得
export async function getProblem(id: string) {
  try {
    const problemData = await prisma.problem.findUnique({
      where: {
        id: id,
      },
    });
    if (problemData) {
      return problemData;
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Error("データを取得できませんでした。");
  }
}

// カテゴリーIDを持つ全ての問題を取得
export async function getProblemList(id: string) {
  try {
    const problem = await prisma.problem.findMany({
      where: {
        category_id: id,
      },
    });
    return problem;
  } catch (error) {
    console.log(error);
    return null;
  }
}
