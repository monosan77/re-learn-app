"use client";
import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";
import { createCategory } from "@/actions/createCategory";
import { useRouter } from "next/navigation";
interface Prop {
  id: string;
}
const AddCategory = ({ id }: Prop) => {
  const router = useRouter();

  const [isOpenPop, setIsOpenPop] = useState(false);
  const [errors, setErrors] = useState<string>();

  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }
  async function handleSubmit(formData: FormData) {
    setErrors("");

    try {
      const result = await createCategory(formData, id);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpen();
        return router.push(`/works/problems?id=${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
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
        <Modal openFn={handleOpen}>
          <Form
            // id={id}
            handleOpen={handleOpen}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddCategory;
