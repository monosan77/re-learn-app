import React from "react";

interface Props {
  explanation: string | null;
}

const ExplainText = ({ explanation }: Props) => {
  return (
    <div>
      <h4 className=" font-bold">解説</h4>
      <p className="text-sm">
        {explanation === "" && "解説が登録されていません。"}
      </p>
    </div>
  );
};

export default ExplainText;
