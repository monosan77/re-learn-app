"use client";
import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";
import { CategoryModel } from "@/types/types";
import { updateCategory } from "@/actions/updateCategory";
import { useRouter } from "next/navigation";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
interface Prop {
  category: CategoryModel;
  problemSet_id: string;
}
const CategoryTItle = ({ category, problemSet_id }: Prop) => {
  const router = useRouter();
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [errors, setErrors] = useState<string>();

  function handleOpenSetting() {
    setIsOpenSetting(!isOpenSetting);
    setIsMenuOpen(false);
    setIsDeleteModal(false);
  }
  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
    setIsOpenSetting(false);
    setIsDeleteModal(false);
  }
  function handleDeleteCategoryModalOpen() {
    setIsDeleteModal(!isDeleteModal);
    setIsMenuOpen(false);
  }
  async function handleSubmit(formData: FormData) {
    setErrors("");
    try {
      const result = await updateCategory(formData, category.id, problemSet_id);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpenSetting();
        return router.push(`/works/problems?id=${problemSet_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteCategory() {
    try {
      const res = await fetch(`/api/category?id=${category.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("正常に削除できませんでした。");
      }
      return router.push(`/works/problems?id=${problemSet_id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-between items-center border-solid border-b font-bold mb-2">
        <h3>{category.name} </h3>
        <button
          type="button"
          onClick={handleMenuOpen}
          className="hover:opacity-80"
        >
          <Image
            src={"/icon/three-ten-white.svg"}
            alt="アイコン"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div style={{ display: isMenuOpen ? "block" : "none" }}>
        <div
          // style={{ display: isMenuOpen ? "block" : "none" }}
          className="w-40 text-white bg-background absolute left-full top-0 z-30 p-2 ml-1 rounded-lg"
        >
          <div className="flex items-center justify-between  text-center mb-3">
            <h3 className="font-bold">カテゴリー</h3>
            <button onClick={handleMenuOpen}>
              <Image
                src={"/icon/batu-white.svg"}
                alt="アイコン"
                width={14}
                height={14}
                className="hover:opacity-70"
              />
            </button>
          </div>

          <ul className="space-y-2 ">
            <li className="border-b hover:opacity-80">
              <button type="button" onClick={handleOpenSetting}>
                編集
              </button>
            </li>
            <li className="border-b hover:opacity-80">
              <button onClick={handleDeleteCategoryModalOpen}>削除</button>
            </li>
          </ul>
        </div>
        <Mask_Transparent fn={handleMenuOpen} />
      </div>

      <div style={{ display: isOpenSetting ? "block" : "none" }}>
        <Modal openFn={handleOpenSetting}>
          <Form
            // id={category.id}
            handleOpen={handleOpenSetting}
            inputData={category}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </Modal>
      </div>

      <div style={{ display: isDeleteModal ? "block" : "none" }}>
        <div
          // style={{ display: isDeleteModal ? "block" : "none" }}
          className="w-80 text-white bg-background rounded p-4 text-center fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 space-y-4"
        >
          <p className="">削除したら復元できません。</p>
          <p>本当に削除しますか？</p>
          <div className="flex justify-between">
            <ButtonSmall
              type="button"
              buttonFn={deleteCategory}
              buttonText="削除"
            />
            <ButtonSmallWhite
              buttonText="戻る"
              type="button"
              fn={handleDeleteCategoryModalOpen}
            />
          </div>
        </div>
        <Mask_Transparent fn={handleDeleteCategoryModalOpen} />
      </div>
    </>
  );
};

export default CategoryTItle;
