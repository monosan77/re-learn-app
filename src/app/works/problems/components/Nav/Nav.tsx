"use client";
import React, { useState } from "react";
import NavList from "./NavList";
import List from "./List";
import DropDownList from "./DropDownList";
import Form from "../../../home/components/ProblemSetForm/Form";
import { Problem_SetModel } from "@/types/types";
import { useRouter } from "next/navigation";
import { updateProblem } from "@/actions/updateProblem";
import Modal from "@/components/Modal/Modal";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import AddCategoryNav from "./AddCategoryNav";
interface Prop {
  problemData: Problem_SetModel;
}
const Nav = ({ problemData }: Prop) => {
  const router = useRouter();
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isProblemModal, setIsProblemModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  function handleOpenSetting() {
    setIsOpenSetting(!isOpenSetting);
    setIsOpenFilter(false);
    setIsProblemModal(false);
  }
  function handleOpenFilter() {
    setIsOpenFilter(!isOpenFilter);
    setIsOpenSetting(false);
  }
  function handleProblemModalOpen() {
    setIsProblemModal(!isProblemModal);
    setIsOpenSetting(false);
    setIsDeleteModal(false);
  }
  function handleDeleteProblemModalOpen() {
    setIsDeleteModal(!isDeleteModal);
    setIsProblemModal(false);
    setIsOpenSetting(false);
  }

  async function deleteProblemSet() {
    try {
      const res = await fetch(`/api/editProblem?id=${problemData.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("正常に削除できませんでした。");
      }
      return router.push("/works/home");
    } catch (error) {
      console.log(error);
    }
  }

  const [errors, setErrors] = useState<string>();

  async function handleSubmit(formData: FormData) {
    setErrors("");

    try {
      const result = await updateProblem(formData, problemData.id);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpenSetting();
        router.push(`/works/problems?id=${problemData.id}`);
      }
    } catch (error) {
      console.log(error);
      setErrors("※サーバーエラー");
    }
  }

  return (
    <div className="flex justify-end items-center ">
      <AddCategoryNav problemSetId={problemData.id} />

      {/* <NavList imgPath="/icon/plus-white.svg" categoryName="カテゴリー追加" /> */}
      <DropDownList
        handleFn={handleOpenFilter}
        openBool={isOpenFilter}
        iconPath={"/icon/filter-white.svg"}
        navName={"Filter"}
      >
        <ul className="space-y-2 text-sm">
          <List text="問題集の" />
          <List text="サインアウト" />
        </ul>
      </DropDownList>
      <DropDownList
        handleFn={handleOpenSetting}
        openBool={isOpenSetting}
        iconPath={"/icon/gear-white.svg"}
        navName={"設定"}
      >
        <ul className="space-y-2 text-sm">
          <button
            className="block w-full text-start"
            onClick={handleProblemModalOpen}
          >
            <List text="問題集の設定" />
          </button>
          <button
            className="block w-full text-start"
            onClick={handleDeleteProblemModalOpen}
          >
            <List text="問題集の削除" />
          </button>
          <List text="サインアウト" />
        </ul>
      </DropDownList>
      {/* 問題集の編集モーダル */}
      <div className={`${isProblemModal ? "block" : "hidden"} `}>
        <Modal openFn={handleOpenSetting}>
          <Form
            problemData={problemData}
            modalOpenFn={handleOpenSetting}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </Modal>
      </div>
      {/* 削除確認モーダル */}
      <ConfirmModal
        active={isDeleteModal}
        submitFn={deleteProblemSet}
        backActionFn={handleDeleteProblemModalOpen}
        confirmText="問題集を削除したら復元できません。"
      />
    </div>
  );
};

export default Nav;
