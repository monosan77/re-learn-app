"use client";
import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";
interface Prop {
  id: string;
}
const AddProblem = ({ id }: Prop) => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }
  return (
    <>
      <button
        // href={`/works/createCategory?id=${id}`}
        // scroll={false}
        onClick={handleOpen}
        className="flex justify-start items-center h-fit min-w-60 text-white bg-slate-400 p-3 rounded-md box-shadow space-x-2"
      >
        <Image
          src={"/icon/plus-white2.svg"}
          alt="アイコン"
          width={18}
          height={18}
        />
        <p className="text-sm">カテゴリーを追加</p>
      </button>
      <div style={{ display: isOpenPop ? "block" : "none" }}>
        <Modal>
          <Form id={id} handleOpen={handleOpen} />
        </Modal>
      </div>
    </>
  );
};

export default AddProblem;
