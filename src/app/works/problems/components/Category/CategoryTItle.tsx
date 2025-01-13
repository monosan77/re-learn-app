"use client";
import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";
import { CategoryModel } from "@/types/types";
import { updateCategory } from "@/actions/updateCategory";
import { useRouter } from "next/navigation";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import Form from "../CategoryForm/Form";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import MenuModal from "./MenuModal";
import ListIcon from "@mui/icons-material/List";

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

  // カテゴリー編集のモーダル開閉
  function handleOpenSetting() {
    setIsOpenSetting(!isOpenSetting);
    setIsMenuOpen(false);
    setIsDeleteModal(false);
  }
  //編集、削除の目乳の開閉
  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
    setIsOpenSetting(false);
    setIsDeleteModal(false);
  }
  // 削除の確認モーダル
  function handleDeleteCategoryModalOpen() {
    setIsDeleteModal(!isDeleteModal);
    setIsMenuOpen(false);
  }

  //　編集の確定関数
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
      <div className="flex justify-between items-center border-solid border-b border-current font-bold mb-2">
        <h3>{category.name} </h3>
        <button
          type="button"
          onClick={handleMenuOpen}
          className="hover:opacity-80"
        >
          <ListIcon />
        </button>
      </div>

      <div style={{ display: isMenuOpen ? "block" : "none" }}>
        <MenuModal
          handleFn={handleOpenSetting}
          deleteFn={handleDeleteCategoryModalOpen}
          handleOpenMenu={handleMenuOpen}
          modalTitle="カテゴリー"
        />
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
