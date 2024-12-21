"use client";
import React, { useState } from "react";
import NavList from "./NavList";
import Modal from "@/components/Modal/Modal";
import Form from "../CategoryForm/Form";
import { createCategory } from "@/actions/createCategory";
import { useRouter } from "next/navigation";

interface Prop {
  problemSetId: string;
}

const AddCategoryNav = ({ problemSetId }: Prop) => {
  const router = useRouter();

  const [isOpenPop, setIsOpenPop] = useState(false);
  const [errors, setErrors] = useState<string>();

  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }
  async function handleSubmit(formData: FormData) {
    setErrors("");

    try {
      const result = await createCategory(formData, problemSetId);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpen();
        return router.push(`/works/problems?id=${problemSetId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={handleOpen}>
        <NavList imgPath="/icon/plus-white.svg" categoryName="カテゴリー追加" />
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
    </div>
  );
};

export default AddCategoryNav;
