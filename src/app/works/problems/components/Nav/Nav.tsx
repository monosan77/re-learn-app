"use client";
import React, { useReducer, useState } from "react";
import List from "./List";
import DropDownList from "./DropDownList";
import Form from "../../../home/components/ProblemSetForm/Form";
import { CategoryModel, Problem_SetModel } from "@/types/types";
import { useRouter } from "next/navigation";
import { updateProblem } from "@/actions/updateProblem";
import Modal from "@/components/Modal/Modal";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import AddCategoryNav from "./AddCategoryNav";
import BuildIcon from "@mui/icons-material/Build";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
interface Prop {
  problemData: Problem_SetModel;
  category: CategoryModel[];
}

interface NavState {
  isOpenSetting: boolean;
  isOpenFilter: boolean;
  isProblemModal: boolean;
  isDeleteModal: boolean;
}
type NavAction =
  | { type: "TOGGLE_SETTING" }
  | { type: "TOGGLE_FILTER" }
  | { type: "TOGGLE_PROBLEM_MODAL" }
  | { type: "TOGGLE_DELETE_MODAL" };

const navReducer = (state: NavState, action: NavAction) => {
  switch (action.type) {
    case "TOGGLE_SETTING":
      return {
        ...state,
        isOpenSetting: !state.isOpenSetting,
        isOpenFilter: false,
        isProblemModal: false,
      };
    case "TOGGLE_FILTER":
      return {
        ...state,
        isOpenFilter: !state.isOpenFilter,
        isOpenSetting: false,
      };
    case "TOGGLE_PROBLEM_MODAL":
      return {
        ...state,
        isProblemModal: !state.isProblemModal,
        isOpenSetting: false,
        isDeleteModal: false,
      };
    case "TOGGLE_DELETE_MODAL":
      return {
        ...state,
        isDeleteModal: !state.isDeleteModal,
        isOpenSetting: false,
        isProblemModal: false,
      };
  }
};
const initialState = {
  isOpenSetting: false,
  isOpenFilter: false,
  isProblemModal: false,
  isDeleteModal: false,
};

const Nav = ({ problemData, category }: Prop) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(navReducer, initialState);

  //ドロップダウンのメニューを開閉する関数
  function handleOpenSetting() {
    dispatch({ type: "TOGGLE_SETTING" });
  }
  function handleOpenFilter() {
    dispatch({ type: "TOGGLE_FILTER" });
  }
  function handleProblemModalOpen() {
    dispatch({ type: "TOGGLE_PROBLEM_MODAL" });
  }
  function handleDeleteProblemModalOpen() {
    dispatch({ type: "TOGGLE_DELETE_MODAL" });
  }

  async function deleteProblemSet() {
    try {
      const res = await fetch(`/api/problemSet?id=${problemData.id}`, {
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
      {8 > category.length && <AddCategoryNav problemSetId={problemData.id} />}

      <DropDownList
        handleFn={handleOpenFilter}
        openBool={state.isOpenFilter}
        iconElem={<FilterAltIcon />}
        navName={"Filter"}
      >
        <ul className="space-y-2 text-sm">
          <List text="問題集の" />
          <List text="サインアウト" />
        </ul>
      </DropDownList>
      <DropDownList
        handleFn={handleOpenSetting}
        openBool={state.isOpenSetting}
        iconElem={<BuildIcon />}
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
      <div className={`${state.isProblemModal ? "block" : "hidden"} `}>
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
        active={state.isDeleteModal}
        submitFn={deleteProblemSet}
        backActionFn={handleDeleteProblemModalOpen}
        confirmText="問題集を削除したら復元できません。"
      />
    </div>
  );
};

export default Nav;
