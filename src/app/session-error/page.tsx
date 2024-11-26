import LinkText from "@/components/Link/LinkText";
import LogoAndTitle from "@/components/Title/LogoAndTitle";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <LogoAndTitle title="Session Error" />
        <Image
          src={"/errorImage/error-session.png"}
          alt=""
          width={400}
          height={300}
          className="px-4 mx-auto"
        />
        <div className="text-center">
          <p className="text-2xl font-bold text-red-500 my-8 ">
            セッションタイムアウト
          </p>
          <p>セッションエラーが発生しました。</p>
          <p>恐れ入りますが、再度ログインをお願いします。</p>
          <div className="flex justify-center my-7">
            <LinkText url="/users/login">ログインページへ移動する</LinkText>
          </div>
        </div>
      </div>
    </div>
  );
}
