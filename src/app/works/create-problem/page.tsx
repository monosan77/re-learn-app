// "use client";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import TitleText from "@/components/Title/TitleText";
import ButtonContents from "./components/ButtonContents";
import CreateProblemForm from "./components/Form";

const Page = () => {
  return (
    <div>
      <ProblemTitle />
      <div className="w-[calc(100%-32px)] mx-4 md:max-w-750 lg:mx-auto pt-24 mb-14">
        <TitleText text="問題の新規作成" />
        <CreateProblemForm />
      </div>
    </div>
  );
};

export default Page;
