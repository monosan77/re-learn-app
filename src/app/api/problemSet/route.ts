import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const problemSetId = searchParams.get("id");

    if (!problemSetId) {
      return NextResponse.json(
        { message: "リクエストエラー" },
        { status: 405 }
      );
    }

    const data = await prisma.problem_set.delete({
      where: {
        id: problemSetId,
      },
    });
    revalidatePath("/works/home");
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
