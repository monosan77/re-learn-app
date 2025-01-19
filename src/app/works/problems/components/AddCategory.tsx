"use client";
import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";
import Form from "./CategoryForm/Form";
import { createCategory } from "@/actions/createCategory";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

interface Prop {
  id: string;
  categoryLength: number;
}
const AddCategory = ({ id, categoryLength }: Prop) => {
  const router = useRouter();

  const [isOpenPop, setIsOpenPop] = useState(false);
  const [errors, setErrors] = useState<string>();

  function handleOpen() {
    // 10個以上の時カテゴリーを作成できないように制限する。
    if (10 <= categoryLength) {
      setIsOpenPop(false);
      return;
    }
    setIsOpenPop(!isOpenPop);
  }
  async function handleSubmit(formData: FormData) {
    setErrors("");
    if (10 <= categoryLength) {
      setErrors("カテゴリーは10個まで作成できます。");
      return;
    }

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
        className="flex justify-start items-center h-fit min-w-60 text-white bg-slate-400 p-3 rounded-md box-shadow space-x-2 hover:opacity-90 "
      >
        <AddIcon />
        <div className="text-center">
          <p className="text-sm">カテゴリーを追加</p>
          <p className=" text-xs">
            ※{" "}
            {10 > categoryLength
              ? `残り${10 - categoryLength} 作成できます。`
              : "これ以上作成できません。"}
          </p>
        </div>
      </button>
      <div style={{ display: isOpenPop ? "block" : "none" }}>
        <Modal openFn={handleOpen}>
          <Form
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
