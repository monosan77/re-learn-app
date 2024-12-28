import React from "react";

const ExplainText = () => {
  return (
    <div>
      <h4 className=" font-bold">解説</h4>
      <p className="text-sm">
        SSRは、サーバーサイドでページをレンダリングして、完全なHTMLをクライアントに送信する機能です。これにより、ページがユーザーに表示される前にサーバー側で処理されるため、高速なWEBサイトが実装されます。
      </p>
    </div>
  );
};

export default ExplainText;
