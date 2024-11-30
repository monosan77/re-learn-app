import Image from "next/image";
import React from "react";

const StudyingProblemTitle = () => {
  return (
    <div className="flex justify-start items-center">
      <h3 className="font-bold">SSRについて</h3>
      <Image src={"/icon/check.svg"} alt="アイコン" width={30} height={30} />
      <p className="text-green-400 font-bold">正解</p>
    </div>
  );
};

export default StudyingProblemTitle;
