"use client";
import React, { useState } from "react";
import NavList from "./NavList";
import List from "./List";
import DropDownList from "./DropDownList";
import Modal from "@/components/Modal";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import Form from "./Form";
import { Problem_SetModel } from "@/types/types";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { useRouter } from "next/navigation";
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
  }
  function handleDeleteProblemModalOpen() {
    setIsDeleteModal(!isDeleteModal);
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

  return (
    <div className="flex justify-end items-center space-x-4">
      <NavList imgPath="/icon/plus-white.svg" categoryName="カテゴリー追加" />
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
        {/* 問題集の編集モーダル */}
        <div className={`${isProblemModal ? "block" : "hidden"} `}>
          <Modal>
            <Form problemData={problemData} modalOpenFn={handleOpenSetting} />
          </Modal>
        </div>
        {/* 削除確認モーダル */}
        <div
          style={{ display: isDeleteModal ? "block" : "none" }}
          className="w-80 bg-background rounded p-4 text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4"
        >
          <p className="">問題集を削除したら復元できません。</p>
          <p>本当に削除しますか？</p>
          <div className="flex justify-between">
            {/* <button onClick={deleteProblemSet}> */}
            <ButtonSmall
              type="button"
              buttonFn={deleteProblemSet}
              buttonText="削除"
            />
            {/* </button> */}
            <ButtonSmallWhite
              buttonText="戻る"
              type="button"
              fn={handleDeleteProblemModalOpen}
            />
          </div>
        </div>
        <Mask_Transparent />
      </DropDownList>
    </div>
  );
};

export default Nav;
