"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuModal from "./MenuModal";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import CreateIcon from "@mui/icons-material/Create";
interface Props {
  problemName: string;
  problemSet_id: string;
  category_id: string;
  problem_id: string;
  name: string;
}
const ProblemList = ({
  problemName,
  problemSet_id,
  category_id,
  problem_id,
  name,
}: Props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  // 問題編集画面へ遷移する関数
  function navigateToProblemEdit() {
    return router.push(
      `/works/edit-problem?problemSetId=${problemSet_id}&categoryId=${category_id}&problemSetName=${name}&problemId=${problem_id}`
    );
  }

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  // 削除確認モーダルを表示する関数
  function openConfirmModal() {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  }

  async function deleteProblem() {
    try {
      const res = await fetch(`/api/editProblem?id=${problem_id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("server error");
      }

      return router.push(`/works/problems?id=${problemSet_id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleMenuOpen}
        className="w-full flex justify-between items-center"
      >
        <p>{problemName}</p>
        <CreateIcon />
      </button>
      <div style={{ display: isMenuOpen ? "block" : "none" }}>
        <MenuModal
          handleFn={navigateToProblemEdit}
          deleteFn={openConfirmModal}
          handleOpenMenu={handleMenuOpen}
          modalTitle="問題"
        />
        <Mask_Transparent fn={handleMenuOpen} />
      </div>
      {/* 削除確認モーダル */}
      <ConfirmModal
        active={isOpenConfirmModal}
        submitFn={deleteProblem}
        backActionFn={openConfirmModal}
        confirmText="問題を削除したら復元できません。"
      />
    </div>
  );
};

export default ProblemList;
