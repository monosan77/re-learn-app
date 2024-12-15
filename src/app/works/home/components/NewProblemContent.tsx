"use client";
import { createProblem } from "@/actions/createProblem";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import Card_Popup from "@/components/Card/Card_Popup";
import Input from "@/components/Input/Input";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import { prisma } from "@/lib/prisma";
import React, { useState } from "react";
import Form from "./Form";
import Link from "next/link";

// async function createProblem(formData: FormData) {
//   "use server";
//   console.log(formData, "form");
//   // const data = await prisma.problem_set.create({
//   //   formdata
//   // })
// }
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
