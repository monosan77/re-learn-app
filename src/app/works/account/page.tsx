import TitleText from "@/components/Title/TitleText";
import Image from "next/image";
import React from "react";
import { signOut } from "../../../../auth";

const Page = () => {
  return (
    <div className="w-[calc(100%-32px)] mx-4 my-8 p-7 md:max-w-600 md:mx-auto rounded-md  card-shadow space-y-8">
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-start items-center space-x-4">
          <Image
            src={"/icon/person-black.svg"}
            alt="アイコン"
            width={25}
            height={25}
          />
          <TitleText text="アカウント" />
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button type="submit" className="text-red-600 font-bold mr-4">
            サインアウト
          </button>
        </form>
      </div>
      <form action="" className="w-full space-y-8">
        <div className="w-full flex justify-start items-center space-x-7">
          <div className="relative bg-mainColor rounded-full w-16 min-w-16 h-16 min-h-16">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">
              Y
            </p>
          </div>
          <div>
            <label htmlFor="userName" className="font-bold">
              名前
            </label>
            <p>yoshiki noguch</p>
          </div>
        </div>
        <div className="space-y-3">
          <label
            htmlFor=""
            className="flex justify-start items-center space-x-3"
          >
            <Image
              src={"/icon/mail-black.svg"}
              alt="アイコン"
              width={22}
              height={22}
            />
            <span className="font-bold">メールアドレス</span>
          </label>
          <div className="ml-8">
            {/* <Input type="email" name="email" id="email" /> */}
            <p>test@example.com</p>
          </div>
        </div>
        {/* <div className="space-y-3">
          <label
            htmlFor=""
            className="flex justify-start items-center space-x-3"
          >
            <Image
              src={"/icon/palette-black.svg"}
              alt="アイコン"
              width={22}
              height={22}
            />
            <span className="font-bold">カラーモード</span>
          </label>
          <div className="ml-8 flex justify-start items-center space-x-6">
            <div>
              <input type="radio" name="mode" id="right" />
              <label htmlFor="right">ライトモード</label>
            </div>
            <div>
              <input type="radio" name="mode" id="dark" />
              <label htmlFor="dark">ダークモード</label>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full flex justify-between">
          <ButtonSmallWhite type="button" buttonText="戻る" />
          <ButtonSmall type="button" buttonText="変更を保存" />
        </div> */}
      </form>
    </div>
  );
};

export default Page;
