import TitleText from "@/components/Title/TitleText";
import Image from "next/image";
import React from "react";

const ProblemHistory = () => {
  return (
    <>
      <div className="relative flex justify-start items-center mx-4 mt-16 mb-4 space-x-2">
        <Image
          src={"/icon/clock-black.svg"}
          alt="アイコン"
          width={20}
          height={20}
        />
        <TitleText text="最近の復習" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
      </div>
    </>
  );
};

export default ProblemHistory;
