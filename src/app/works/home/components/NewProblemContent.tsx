"use client";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import React, { useState } from "react";
import Modal from "@/components/Modal/Modal";
import Form from "./ProblemSetForm/Form";
import { createProblem } from "@/actions/createProblem";
import { useRouter } from "next/navigation";
import { Problem_SetModel } from "@/types/types";

interface Props {
  problemData: Problem_SetModel[];
}

const NewProblemContent = ({ problemData }: Props) => {
  const router = useRouter();
  const [isOpenPop, setIsOpenPop] = useState(false);

  function handleOpen() {
    if (problemData.length >= 8) {
      return setIsOpenPop(false);
    }
    setIsOpenPop(!isOpenPop);
  }

  const [errors, setErrors] = useState<string>();
  async function handleSubmit(formData: FormData) {
    setErrors("");
    if (problemData.length >= 8) {
      setErrors("問題集は8個まで作成できます。");
      return;
    }
    try {
      const result = await createProblem(formData);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpen();
        return router.push("/works/home");
      }
    } catch (error) {
      console.log(error);
      setErrors("server error");
    }
  }

  return (
    <>
      <div className="relative ">
        <button
          onClick={handleOpen}
          className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2 box-shadow hover:scale-[1.025] transition-all duration-100"
        >
          <div>
            <p className="text-white font-bold">新しい問題集を作る</p>
            <p>
              {8 - problemData.length > 0
                ? `残り ${8 - problemData.length} 個作成できます。`
                : "問題集は8個まで作成できます。"}
            </p>
          </div>
        </button>
      </div>

      <div style={{ display: isOpenPop ? "block" : "none" }} className="">
        <Modal openFn={handleOpen}>
          <Form
            modalOpenFn={handleOpen}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </Modal>
        <Mask_Transparent active={isOpenPop} fn={handleOpen} />
      </div>
    </>
  );
};

export default NewProblemContent;
