"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import LinkText from "@/components/Link/LinkText";
import LogoAndTitle from "@/components/Title/LogoAndTitle";
import Image from "next/image";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <LogoAndTitle title="404 Error" />
        <Image
          src={"/errorImage/error-404.png"}
          alt=""
          width={400}
          height={300}
          className="px-4 mx-auto"
        />
        <div className="text-center">
          <p className="text-2xl font-bold text-red-500 my-8 ">
            ページが見つかりません
          </p>
          <p>再度試すか、トップページへお戻りください。</p>
          <div onClick={() => reset()} className="my-8">
            <ButtonSmall type="button" buttonText="もう一度試す" />
          </div>
          <div className="flex justify-center">
            <LinkText url="/">トップページへ戻る</LinkText>
          </div>
        </div>
      </div>
    </div>
  );
}
