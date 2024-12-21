"use client";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { CategoryModel } from "@/types/types";
import { updateCategory } from "@/actions/updateCategory";
import { useRouter } from "next/navigation";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import Form from "../CategoryForm/Form";
import ConfirmModal from "@/components/Modal/ConfirmModal";
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
            handleOpen={handleOpenSetting}
            inputData={category}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </Modal>
      </div>

      <ConfirmModal
        active={isDeleteModal}
        backActionFn={handleDeleteCategoryModalOpen}
        submitFn={deleteCategory}
        confirmText="削除したら復元できません。"
      />
    </>
  );
};

export default CategoryTItle;
