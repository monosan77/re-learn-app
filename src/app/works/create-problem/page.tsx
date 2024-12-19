import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import TitleText from "@/components/Title/TitleText";
import CreateProblemForm from "./components/CreateProblemForm";
import { CategoryModel } from "@/types/types";
import { getCategory } from "@/actions/getCategory";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const id = (await searchParams).categoryId;
  const problemId = (await searchParams).problemSetId;
  const problemSetName = (await searchParams).problemSetName;

  if (!id || !problemSetName || !problemId)
    return <p>データを取得できませんでした</p>;
  const categoryData: CategoryModel | null = await getCategory(id);
  if (!categoryData) return <p>データを取得できませんでした</p>;
  return (
    <div>
      <ProblemTitle
        title={categoryData.name}
        bgColor={categoryData.color}
        textColor={categoryData.text_color}
        name={problemSetName}
      />
      <div className="w-[calc(100%-32px)] mx-4 md:max-w-750 lg:mx-auto pt-24 mb-14">
        <TitleText text="問題の新規作成" />
        <CreateProblemForm
          category_id={categoryData.id}
          problem_id={problemId}
        />
      </div>
    </div>
  );
};

export default Page;
