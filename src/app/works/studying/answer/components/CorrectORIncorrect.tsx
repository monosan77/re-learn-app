import React from "react";

const CorrectORIncorrect = () => {
  return (
    <div className="space-y-2">
      <div>
        <p className="text-sm">あなたの解答</p>
        <div className="flex justify-start items-center space-x-2 font-bold">
          <p>4.</p>
          <p>getServerSideProps</p>
        </div>
      </div>
      <div className="text-red-600">
        <p className="text-sm">正解の選択肢</p>
        <div className="flex justify-start items-center space-x-2 font-bold ">
          <p>4.</p>
          <p>getServerSideProps</p>
        </div>
      </div>
    </div>
  );
};

export default CorrectORIncorrect;
