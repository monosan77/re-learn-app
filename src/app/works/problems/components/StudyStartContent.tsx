"use client";
import React, { useState } from "react";
import StartBtn from "./StartBtn";
import PopupSetting from "./PopupSetting";

const StudyStartContent = () => {
  const [isStudyPopUp, setIsStudyPopUp] = useState(false);
  function handlePopUp() {
    setIsStudyPopUp(!isStudyPopUp);
  }
  return (
    <>
      <StartBtn handlePopUp={handlePopUp} />
      <PopupSetting handlePopUp={handlePopUp} isStudyPopUp={isStudyPopUp} />
    </>
  );
};

export default StudyStartContent;
