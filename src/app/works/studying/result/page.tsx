"use client";
import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import React from "react";
import StudyingProblemTitle from "../answer/components/StudyingProblemTitle";
import CorrectORIncorrect from "../answer/components/CorrectORIncorrect";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  function backPage() {
    router.back();
  }
  return (
    <div>
      <ProblemTitle title={""} bgColor={""} textColor={""} name={""} />
      <div className="w-full px-4 mt-28 mb-32 max-w-600 mx-auto space-y-4">
        <div className="flex justify-between items-center font-bold text-3xl">
          <h2>結果</h2>
          <h2>5/10点</h2>
        </div>
        <div className="p-5 border rounded-md card-shadow space-y-2">
          <h3 className="font-bold text-2xl">1問目</h3>
          <StudyingProblemTitle />
          <CorrectORIncorrect />
        </div>
        <div className="p-5 border rounded-md card-shadow space-y-2">
          <h3 className="font-bold text-2xl">2問目</h3>
          <StudyingProblemTitle />
          <CorrectORIncorrect />
        </div>
        <div className="p-5 border rounded-md card-shadow space-y-2">
          <h3 className="font-bold text-2xl">3問目</h3>
          <StudyingProblemTitle />
          <CorrectORIncorrect />
        </div>
      </div>
      <div className="w-full px-4 pt-4 pb-8 md:pt-8  md:w-[calc(100%-256px)] fixed bottom-0 bg-background">
        <div className="max-w-600 mx-auto flex justify-between items-center">
          <ButtonSmall type="button" buttonText="やり直す" />
          <ButtonSmallWhite type="button" buttonText="終了する" fn={backPage} />
        </div>
      </div>
    </div>
  );
};

export default Page;
