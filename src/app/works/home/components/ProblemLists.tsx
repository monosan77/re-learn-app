"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import Card_Popup from "@/components/Card/Card_Popup";
import Input from "@/components/Input/Input";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import TitleText from "@/components/Title/TitleText";
import Image from "next/image";
import React, { useState } from "react";

const ProblemLists = () => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  function handleOpen() {
    setIsOpenPop(!isOpenPop);
  }
  // RGBから相対輝度を計算して、明るさを判定する関数
  // function isDarkColor(hex) {
  //   // HEXをRGBに変換
  //   const r = parseInt(hex.substr(1, 2), 16); // 赤
  //   const g = parseInt(hex.substr(3, 2), 16); // 緑
  //   const b = parseInt(hex.substr(5, 2), 16); // 青

  //   // 輝度を計算 (簡易的な輝度の計算式)
  //   const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  //   return brightness < 128; // 128未満なら暗い色と判定
  // }
  // const selectedColor = event.target.value; // カラーコードを取得
  //     colorDisplay.style.backgroundColor = selectedColor; // 背景色を変更
  //     colorCode.textContent = `現在のカラーコード: ${selectedColor}`; // カラーコードを表示

  //     // 色の明るさに応じて文字色を変更
  //     if (isDarkColor(selectedColor)) {
  //       colorDisplay.style.color = '#ffffff'; // 暗い背景なら文字を白
  //     } else {
  //       colorDisplay.style.color = '#000000'; // 明るい背景なら文字を黒
  //     }
  return (
    <>
      <div className="relative flex justify-start items-center mx-4 mt-16 mb-4 space-x-2">
        <Image
          src={"/icon/folder-black.svg"}
          alt="アイコン"
          width={20}
          height={20}
        />
        <TitleText text="問題集一覧" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>
        <div className="w-full bg-mainColor p-4 rounded-md space-y-2">
          <h3 className="text-white font-bold text-base lg:text-lg">
            プログラミング
          </h3>
          <p className="text-white text-sm lg:text-base">NextJs</p>
        </div>

        <div className="relative ">
          <button
            className="w-full h-full flex justify-center items-center bg-gray-400 p-4 rounded-md space-y-2"
            onClick={handleOpen}
          >
            <p className="text-white font-bold">新しい問題集を作る</p>
          </button>
        </div>

        <Mask_Transparent active={isOpenPop} fn={handleOpen} />

        <Card_Popup active={isOpenPop}>
          <form action="" className="space-y-4">
            <h3 className="text-center  text-white text-lg  font-bold ">
              問題集を作成
            </h3>
            <div>
              <label htmlFor="" className="text-white">
                問題集タイトル
              </label>
              <Input type="text" name="title" id="title" />
            </div>
            <div className="">
              <label htmlFor="color" className="text-white">
                テーマカラー
              </label>
              <input type="color" id="color" name="color" className="w-full" />
            </div>
            <div className="flex justify-between">
              <ButtonSmall type="submit" buttonText="作成" />
              <ButtonSmallWhite
                type="button"
                buttonText="閉じる"
                fn={handleOpen}
              />
            </div>
          </form>
        </Card_Popup>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProblemLists;
