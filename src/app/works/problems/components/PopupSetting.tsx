"use client";
import { createStudySession } from "@/actions/createStudySession";
import ButtonMedium from "@/components/buttons/ButtonMedium";
import { CategoryModel } from "@/types/types";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { LoadingPopup } from "../../layout";
import { useRouter } from "next/navigation";
interface Prop {
  handlePopUp: () => void;
  isStudyPopUp: boolean;
  categoryData: CategoryModel[];
  problemSetName: string;
}

const PopupSetting = ({
  handlePopUp,
  isStudyPopUp,
  categoryData,
  problemSetName,
}: Prop) => {
  const router = useRouter();
  const { setLoading } = useContext(LoadingPopup);
  const [error, setError] = useState("");
  async function handleSubmit(formData: FormData) {
    try {
      setError("");
      setLoading(true);
      const data: { response: string; ok: boolean } = await createStudySession(
        formData,
        categoryData
      );
      if (!data.ok) {
        setError(data.response);
        setLoading(false);
      }
      return router.push(
        `/works/studying?id=${data.response}&category=${formData.get("category")}&name=${problemSetName}&index=1`
      );
    } catch {
      setError("※サーバーエラーが発生しました。");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

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
        <p className="font-bold text-lg">
          問題集 : プログラミング{" "}
          <span className="text-red-600 text-base">{error}</span>
        </p>
        <form action={handleSubmit} className="space-y-5">
          <div className="space-x-4">
            <label htmlFor="">カテゴリー選択 : </label>
            <select
              name="category"
              id="category"
              className="text-black rounded-md text-sm py-0.5 px-2 min-w-[180px] inner-shadow"
            >
              <option value="--" hidden>
                --
              </option>
              {categoryData.map((category) => (
                <option key={category.id} value={`${category.id}`}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="space-x-4">
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
          </div> */}
          <div className="py-6">
            <ButtonMedium type="submit" buttonText="復習を始める" />
          </div>
        </form>
      </div>
      {/* <div className="">{loading && <Loader />}</div> */}
    </div>
  );
};

export default PopupSetting;
