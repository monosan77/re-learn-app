import WorksLayout from "@/components/Layout/works/WorksLayout";
import { auth } from "../../../auth";
import { prisma } from "@/lib/prisma";
import Loader from "@/components/Loading/Loader";
import { Problem_SetModel, ProblemModel } from "@/types/types";
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
    // <div>
    //   <SideBar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
    //   <div className="w-full md:w-[calc(100%-256px)] md:ml-64 transition-all duration-300">
    //     <Header handleMenuOpen={handleMenuOpen} />
    //     <div className="w-full pt-12">
    //       <LoadingPopup.Provider value={{ loading, setLoading }}>
    //         {children}
    //         {loading && (
    //           <div className="fixed top-0 left-0 right-0 bottom-0">
    //             <div className="fixed top-0 left-0 right-0 z-50">
    //               <Loader />
    //             </div>
    //             <Mask_Gray />
    //           </div>
    //         )}
    //       </LoadingPopup.Provider>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Layout;
