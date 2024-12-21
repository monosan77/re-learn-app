"use client";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import Form from "./Form";

const NewProblemContent = ({}) => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }

  return (
    <>
      <div className="relative ">
        <button
          onClick={handleOpen}
          className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2 box-shadow hover:scale-[1.025] transition-all duration-100"
        >
          <p className="text-white font-bold">新しい問題集を作る</p>
        </button>
      </div>

      <div style={{ display: isOpenPop ? "block" : "none" }} className="">
        <Modal openFn={handleOpen}>
          <Form handleOpen={handleOpen} />
        </Modal>
        <Mask_Transparent active={isOpenPop} fn={handleOpen} />
      </div>
    </>
  );
};

export default NewProblemContent;
