import ButtonMedium from "@/components/buttons/ButtonMedium";
import Input from "@/components/Input/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <div className="mb-6">
          <Image
            src={"/logo/ReLearn.png"}
            alt=""
            width={200}
            height={50}
            className="m-auto mb-2"
          />
          <h1 className="text-2xl text-center font-bold text-mainColor">
            Login
          </h1>
        </div>

        <form
          action=""
          className="form-500  px-6 py-7 mx-4 border rounded-md box-shadow "
        >
          <div className="mb-4">
            <label htmlFor="email">メールアドレス</label>
            <Input type="text" name="email" id="email" />
          </div>
          <div className="mb-10">
            <label htmlFor="password">パスワード</label>
            <Input type="text" name="password" id="password" />
          </div>
          <ButtonMedium type="submit" buttonText="ログイン" />
          <nav>
            <ul className="text-center mt-7">
              <li>
                <Link href={"#"} className="text-linkColor underline">
                  パスワードをお忘れの方
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-linkColor underline">
                  新しくアカウントを作成する
                </Link>
              </li>
            </ul>
          </nav>
        </form>
      </div>
    </div>
  );
};

export default Page;
