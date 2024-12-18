import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 環境変数を利用
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    "API_KEY is not set. Please set it in your environment variables."
  );
}

// Google Generative AIクライアントの初期化
const genAI = new GoogleGenerativeAI(apiKey);

// POSTリクエストのハンドラー
export async function POST(request: Request) {
  console.log("uuu");
  try {
    const { answer, statement } = await request.json();

    if (!answer || !statement) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const prompt = `4択問題を作ります。問題文とその回答を送るので、残りの3択の答えを書きフォーマットで返却してください。なお答えに関しては提供した答えと同じような文で返してください。 フォーマット以外の返答はいりません。 フォーマット 解答１,解答２,解答３ 問題文：${statement} 答え：${answer}`;

    // モデルの設定 (例: gemini-1.5-flash)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    // const response = result.response;
    const text = result.response.text().split(",");
    console.log(text);
    console.log(text[0]);
    console.log(text[1]);
    console.log(text[2]);

    return NextResponse.json({ text }, { status: 200 });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
