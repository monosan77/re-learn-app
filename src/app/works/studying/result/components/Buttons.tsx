"use client";
import { LoadingPopup } from "@/app/works/layout";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { Study_Session_Model } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface Prop {
  answerHistoryData: Study_Session_Model;
  setId: string;
}

async function deleteStudySession(answerHistoryData: Study_Session_Model) {
  const deleteResponse = await fetch(
    `/api/studySession?studyId=${answerHistoryData.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return deleteResponse;
}
async function createHistory(answerHistoryData: Study_Session_Model) {
  const createProblemHistory = await fetch(`/api/problemHistory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answerHistoryData }),
  });
  return createProblemHistory;
}

const Buttons = ({ answerHistoryData, setId }: Prop) => {
  const router = useRouter();
  const { setLoading } = useContext(LoadingPopup);
  async function handleFinish() {
    try {
      setLoading(true);
      const [deleteResponse, createProblemHistory] = await Promise.all([
        deleteStudySession(answerHistoryData),
        createHistory(answerHistoryData),
      ]);

      if (!deleteResponse.ok || !createProblemHistory.ok) {
        throw new Error("サーバーエラーが起きました。");
      }
      console.log(createProblemHistory);
      return router.push(`/works/problems?id=${setId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full px-4 pt-4 pb-8 md:pt-8  md:w-[calc(100%-256px)] fixed bottom-0 bg-background">
      <div className="max-w-600 mx-auto flex justify-between items-center">
        <ButtonSmall type="button" buttonText="やり直す" />
        <ButtonSmallWhite
          type="button"
          buttonText="終了する"
          fn={handleFinish}
        />
      </div>
    </div>
  );
};

export default Buttons;
