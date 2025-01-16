import TitleText from "@/components/Title/TitleText";
import React from "react";
import HistoryIcon from "@mui/icons-material/History";
import { auth } from "../../../../../auth";
import Link from "next/link";

interface HistoryProblemData {
  day: Date;
  categoryName: string;
  problemSetName: string;
  problemSetId: string;
  color: string;
  text_color: string;
}
async function getStudyHistory() {
  try {
    const session = await auth();
    if (!session || !session.user) {
      throw new Error("error");
    }
    const res = await fetch(
      `${process.env.BASE_URL}/api/problemHistory?userId=${session.user.id}`
    );

    const { historyProblem }: { historyProblem: HistoryProblemData[] } =
      await res.json();

    return historyProblem;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const ProblemHistory = async () => {
  const historyData: HistoryProblemData[] | null = await getStudyHistory();
  if (!historyData) return <p>データを取得できませんでした。</p>;
  return (
    <>
      <div className="relative flex justify-start items-center mx-4 mt-8 mb-4 space-x-2">
        <HistoryIcon />
        <TitleText text="最近の復習" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {historyData.map((problem, index) => (
          <Link key={index} href={`/works/problems?id=${problem.problemSetId}`}>
            <div
              className="w-full  p-4 rounded-md space-y-2"
              style={{
                backgroundColor: problem.color,
                color: problem.text_color,
              }}
            >
              <h3 className="text-white font-bold text-base lg:text-lg">
                {problem.problemSetName}
              </h3>
              <p className="text-white text-sm lg:text-base">
                {problem.categoryName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProblemHistory;
