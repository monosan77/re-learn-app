"use server";

import { prisma } from "@/lib/prisma";

export async function getCategory(id: string) {
  try {
    const categoryData = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    if (categoryData) {
      return categoryData;
    }
    return null;
  } catch (error) {
    throw new Error("データを取得できませんでした。");
  }
}
