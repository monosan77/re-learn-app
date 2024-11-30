import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import React from "react";
import StudyingTitle from "./components/StudyingTitle";

const Page = () => {
  return (
    <div>
      <ProblemTitle />
      <div className="w-[calc(100%-32px)] mx-4 p-6 mt-28 mb-24 max-w-750 md:mx-auto rounded-md border border-solid  border-gray-300  card-shadow space-y-4">
        <StudyingTitle color="mainColor" text="問題" />

        <h3 className="font-bold">SSRについて</h3>
        <p>
          SSR で使用する関数について、最も適切に述べた説明を選択してください。
        </p>
        <ul>
          <li className="flex justify-start items-center space-x-2">
            <p>1.</p>
            <p>getStaticProps</p>
          </li>
          <li className="flex justify-start items-center space-x-2">
            <p>2.</p>
            <p>useState</p>
          </li>
          <li className="flex justify-start items-center space-x-2">
            <p>3.</p>
            <p>getDynamicPaths</p>
          </li>
          <li className="flex justify-start items-center space-x-2">
            <p>4.</p>
            <p>getServerSideProps</p>
          </li>
        </ul>
        <div className="flex justify-end items-center pt-2">
          <StudyingNextBtn type="button" buttonText="答え" />
        </div>
      </div>
    </div>
  );
};

export default Page;
