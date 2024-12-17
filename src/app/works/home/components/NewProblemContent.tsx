"use client";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import React, { useState } from "react";
import Link from "next/link";

const NewProblemContent = ({}) => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }

  return (
    <>
      <div className="relative ">
        <Link
          href={"/works/create"}
          // as={"/works/create"}
          scroll={false}
          className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2 box-shadow hover:scale-[1.025] transition-all duration-100"
          // onClick={handleOpen}
        >
          <p className="text-white font-bold">新しい問題集を作る</p>
        </Link>
      </div>

      <Mask_Transparent active={isOpenPop} fn={handleOpen} />
    </>
  );
};

export default NewProblemContent;
