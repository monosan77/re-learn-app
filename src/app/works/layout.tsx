import WorksLayout from "@/components/Layout/works/WorksLayout";
import { auth } from "../../../auth";
import { prisma } from "@/lib/prisma";
import Loader from "@/components/Loading/Loader";
import { Problem_SetModel } from "@/types/types";
async function getProblemSet() {
  try {
    const session = await auth();

    const problemData = prisma.problem_set.findMany({
      where: {
        profile_id: session?.user?.id,
      },
    });
    return problemData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const problemData: Problem_SetModel[] | null = await getProblemSet();
  if (!problemData) return <Loader />;

  return (
    <>
      <WorksLayout problemData={problemData}>{children}</WorksLayout>
    </>
  );
};

export default Layout;
