import React from "react";
import Card from "./Card";
import { signIn } from "../../../../../auth";
import Image from "next/image";

const SnsForm = () => {
  return (
    <Card>
      <div className="w-[400px] space-y-5">
        <h3 className="text-mainColor">・アカウントを選択してください</h3>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/works/home" });
          }}
        >
          <button
            type="submit"
            className="w-full py-2 px-12 h-14 flex justify-center items-center  rounded-md space-x-2 border border-solid transition-all duration-200 hover:scale-105"
          >
            <Image
              src={"/icon/google-icon-white.png"}
              alt="googleアイコン"
              width={50}
              height={50}
            />
            <p>Google で続ける</p>
          </button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/works/home" });
          }}
        >
          <button
            type="submit"
            className="w-full py-2 px-12 h-14 flex justify-center items-center bg-black text-white rounded-md space-x-5 transition-all duration-200 hover:scale-105"
          >
            <Image
              src={"/icon/github-icon-white.png"}
              alt="githubアイコン"
              width={40}
              height={40}
            />
            <p>GitHub で続ける</p>
          </button>
        </form>
      </div>
    </Card>
  );
};

export default SnsForm;
