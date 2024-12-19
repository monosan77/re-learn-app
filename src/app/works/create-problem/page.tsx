import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import TitleText from "@/components/Title/TitleText";
import CreateProblemForm from "./components/Form";
import { prisma } from "@/lib/prisma";
import { CategoryModel } from "@/types/types";

async function getCategory(id: string) {
  const data = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  if (data) {
    return data;
  }
  return null;
}
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const id = (await searchParams).id;
  const category = (await searchParams).category;

  if (!id || !category) return <p>データを取得できませんでした</p>;
  const categoryData: CategoryModel | null = await getCategory(id);
  if (!categoryData) return <p>データを取得できませんでした</p>;
  return (
    <div>
      <ProblemTitle
        title={categoryData.name}
        bgColor={categoryData.color}
        textColor={categoryData.text_color}
        name={category}
      />
      <div className="w-[calc(100%-32px)] mx-4 md:max-w-750 lg:mx-auto pt-24 mb-14">
        <TitleText text="問題の新規作成" />
        <CreateProblemForm category_id={categoryData.id} problem_id={id} />
      </div>
    </div>
  );
};

export default Page;
