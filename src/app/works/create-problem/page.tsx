"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import TitleText from "@/components/Title/TitleText";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  function backPage() {
    router.back();
  }

  return (
    <div>
      <ProblemTitle />
      <div className="w-[calc(100%-32px)] mx-4 md:max-w-750 lg:mx-auto pt-24 mb-14">
        <TitleText text="問題の新規作成" />
        <form action="" className=" pt-4 space-y-6">
          <InputText title="問題タイトル" />

          <ProblemFormat />

          <InputTextArea title="問題文" />

          <InputText title="答え" />

          <IncorrectAnswer />

          <InputTextArea title="解説" />

          <div className="max-w-450 flex justify-between items-center mx-auto pt-8">
            <ButtonSmall type="button" buttonText="保存する" />
            <ButtonSmallWhite
              type="button"
              buttonText="キャンセル"
              fn={backPage}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
