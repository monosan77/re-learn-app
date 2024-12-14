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
        {/* <button
          className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2"
          onClick={handleOpen}
        >
          <p className="text-white font-bold">新しい問題集を作る</p>
        </button> */}
        <Link
          href={"/works/create"}
          // as={"/works/create"}
          scroll={false}
          className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2"
          // onClick={handleOpen}
        >
          <p className="text-white font-bold">新しい問題集を作る</p>
        </Link>
      </div>

      <Mask_Transparent active={isOpenPop} fn={handleOpen} />

      {/* <Card_Popup active={isOpenPop}> */}
      {/* <Form /> */}
      {/* <form action={createProblem} className="space-y-4">
          <h3 className="text-center  text-white text-lg  font-bold ">
            問題集を作成
          </h3>
          <div>
            <label htmlFor="" className="text-white">
              問題集タイトル
            </label>
            <Input type="text" name="title" id="title" />
          </div>
          <div className="">
            <label htmlFor="color" className="text-white">
              テーマカラー
            </label>
            <input type="color" id="color" name="color" className="w-full" />
          </div>
          <div className="flex justify-between">
            <ButtonSmall type="submit" buttonText="作成" />
            <ButtonSmallWhite
              type="button"
              buttonText="閉じる"
              fn={handleOpen}
            />
          </div>
        </form> */}
      {/* </Card_Popup> */}
    </>
  );
};

export default NewProblemContent;
