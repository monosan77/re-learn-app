"use client";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import ButtonContents from "./ButtonContents";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";


interface Prop {
  category_id: string;
  problem_id: string;
}

export interface Inputs {
  title: string;
  format: "select" | "write";
  statement: string;
  answer: string;
  otherAnswer: string[];
  explanation: string;
}

const CreateProblemForm = ({ category_id, problem_id }: Prop) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      format: "select",
      statement: "",
      answer: "",
      otherAnswer: ["", "", ""],
      explanation: "",
    },
  });
  const [format, answer, statement, otherAnswer] = watch([
    "format",
    "answer",
    "statement",
    "otherAnswer",
  ]);
console.log(otherAnswer,'other')
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    // 配列全体にエラーメッセージを付与したいのでここでバリデーションを実施する。
    if (otherAnswer.every((item) => item.trim().length === 0)) {
      return setError("otherAnswer", {
        type: "custom",
        message: "選択肢は必須です。",
      });
    }
    console.log(data);
    try {
      const res = await fetch("/api/editProblem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          category_id,
        }),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("api error");
      }
      return router.push(`/works/problems?id=${problem_id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className=" pt-4 space-y-6">
      <InputText
        title="問題タイトル"
        name="title"
        register={register}
        error={errors}
      />

      {/* 出題形式 */}
      <ProblemFormat register={register} />

      <InputTextArea
        title="問題文"
        register={register}
        name={"statement"}
        error={errors}
      />

      <InputText
        title="答え"
        name="answer"
        register={register}
        error={errors}
      />

      {/* 不正解選択肢 */}
      {format === "select" && (
        <IncorrectAnswer
          register={register}
          answer={answer}
          otherAnswer={otherAnswer}
          statement={statement}
          setError={setError}
          setValue={setValue}
          error={errors}
        />
      )}

      <InputTextArea
        title="解説（任意）"
        register={register}
        name={"explanation"}
        error={errors}
      />

      <ButtonContents handleSubmit={handleSubmit(onSubmit)} />
    </form>
  );
};

export default CreateProblemForm;
