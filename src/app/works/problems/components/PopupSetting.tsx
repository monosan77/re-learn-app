"use client";
import ButtonMedium from "@/components/buttons/ButtonMedium";
import Image from "next/image";
import React from "react";
interface Prop {
  handlePopUp: () => void;
  isStudyPopUp: boolean;
}
const PopupSetting = ({ handlePopUp, isStudyPopUp }: Prop) => {
  return (
    <div
      className={`${isStudyPopUp ? "bottom-0" : "-bottom-96"} w-full md:w-[calc(100%-256px)] mx-auto fixed text-white transition-all duration-200`}
    >
      <div className="max-w-1000 mx-auto bg-background p-6 lg:px-24 lg:py-10 rounded-t-2xl space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">出題設定</h1>
          <button type="button" onClick={handlePopUp}>
            <Image
              src={"/icon/batu-white.svg"}
              alt="アイコン"
              width={18}
              height={18}
            />
          </button>
        </div>
        <p className="font-bold text-lg">問題集 : プログラミング</p>
        <form action="" className="space-y-5">
          <div className="space-x-4">
            <label htmlFor="">カテゴリー選択 : </label>
            <select
              name=""
              id=""
              className="text-black rounded-md text-sm py-0.5 px-2 min-w-[180px] inner-shadow"
            >
              <option value="--" hidden>
                --
              </option>
              <option value="NextJs">NextJs</option>
              <option value="Vue.js">Vue.js</option>
            </select>
          </div>
          <div className="space-x-4">
            <label htmlFor="">問題数を選択 : </label>
            <select
              name=""
              id=""
              className="text-black rounded-md text-sm py-0.5 px-2 min-w-[180px] inner-shadow"
            >
              <option value="--" hidden>
                --
              </option>
              <option value="10">10問</option>
              <option value="20">20問</option>
              <option value="30">30問</option>
              <option value="all">すべて</option>
            </select>
          </div>
          <div className="py-6">
            <ButtonMedium type="button" buttonText="復習を始める" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupSetting;
