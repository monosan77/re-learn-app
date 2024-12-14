"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "../../auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// export async function()
export async function createProblem(formData: FormData) {
  "use server";
  const session = await auth();
  if (!session || !session.user) {
    const message = { title: "セッションエラー" };
    return message;
  }
  console.log(session?.user);
  // "use server";
  console.log(formData.get("color"), "form");
  console.log(!formData.get("title")?.toString().trim(), "form");
  if (!formData.get("title") || !formData.get("color")) {
    formData.get("title") === null;
  }
  if (
    !formData.get("title")?.toString().trim()
    // !formData.get("title") ||
    // !formData.get("color")?.toString()
  ) {
    const message = { title: "入力してください" };
    return message;
  }

  // 暗い色ならtrueを返す
  const textColor = isDarkColor(formData.get("color") as string);

  const createData = await prisma.problem_set.create({
    data: {
      name: formData.get("title") as string,
      color: formData.get("color") as string,
      text_color: textColor,
      profile_id: session.user.id,
    },
  });

  revalidatePath("/works/home");

  return null;
}

// RGBから相対輝度を計算して、明るさを判定する関数
function isDarkColor(hex: string) {
  // if (!hex) return false;

  // HEXをRGBに変換
  const r = parseInt(hex.slice(1, 3), 16); // 赤
  const g = parseInt(hex.slice(3, 5), 16); // 緑
  const b = parseInt(hex.slice(5, 7), 16); // 青

  console.log(r, g, b);
  // 輝度を計算 (簡易的な輝度の計算式)

  const brightness = r * 0.299 + g * 0.587 + b * 0.114;
  console.log(brightness);
  if (brightness < 128) {
    const color = "#ffffff";
    return color;
  } else {
    const color = "#000000";
    return color;
  }
  // return brightness < 128; // 128未満なら暗い色と判定
}
