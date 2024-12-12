import ButtonLarge from "@/components/buttons/ButtonLarge";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import LinkText from "@/components/Link/LinkText";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center px-3 lg:px-8 py-0 fixed top-0 left-0 right-0 bg-white z-30">
        <Image
          src={"/logo/ReLearn.png"}
          alt="ReLearnロゴ"
          width={170}
          height={50}
        />
        <nav className="space-x-7 ">
          <Link
            href={"#"}
            className="hidden lg:inline hover:text-mainColor font-bold transition-all duration-100 "
          >
            お知らせ
          </Link>
          <Link
            href={"#"}
            className="hidden lg:inline hover:text-mainColor font-bold transition-all duration-100"
          >
            お問い合わせ
          </Link>
          <Link href={"/auth/signin"}>
            <ButtonSmall type="button" buttonText="ログイン" />
          </Link>
        </nav>
      </header>
      <Image
        src={"/images/main-visual(1).png"}
        alt="メイン画像"
        width={1000}
        height={400}
        className="relative w-full max-h-80 mt-12  mb-4 object-cover lg:max-h-none lg:h-[calc(100vh-50px)] lg:min-height-780"
      />
      <main className="container mb-24  mx-auto lg:max-w-lg ">
        <div className="w-full mb-12">
          <div className="mx-3">
            <div className="max-w-md  font-sans font-bold mx-auto mb-7 lg:absolute lg:top-1/2 lg:left-1/4 lg:-translate-x-1/2 ">
              <div className="text-5xl lg:text-6xl mb-6 lg:text-shadow lg:text-stroke">
                <h1 className="text-left">今日の復習が</h1>
                <h1 className="text-right">明日の力に</h1>
              </div>
              <div className="text-center text-lg lg:text-2xl lg:text-shadow">
                <h3>短時間でも効果的。</h3>
                <h3 className="mb-1">どこでも器楽に学びなおし。</h3>
                <h3>ReLearnは、あなたの確実な知識定着</h3>
                <h3>サポートします。</h3>
              </div>
            </div>

            <div className="lg:absolute lg:top-3/4 lg:right18p lg:translate-x-1/2 lg:w-96">
              <Link href={"/auth/signin"}>
                <ButtonLarge type="button" buttonText="はじめる‼" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-3">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">復習の大切さ</h2>
            <p>
              　勉強した内容を長く記憶に残すためには「復習」が重要です。新しい知識はすぐに忘れがちですが、定期的な復習で短期記憶から長期記憶に定着させることができます。
            </p>
            <div className="w-full flex justify-center">
              <Image
                src={"/images/graph.jpg"}
                alt="エンビハウス忘却曲線"
                width={1000}
                height={400}
                className="lg:width-750"
              />
            </div>
          </div>
          <div className="mb-8 space-y-3">
            <h2 className="text-2xl font-bold mb-3">復習のポイントは３つ</h2>
            <div>
              <h3 className="font-bold text-lg">1.記憶の定着</h3>
              <p>
                人は、新しい情報を覚えてから1日以内に約70％を忘れてしまうと言われています。しかし、学んだ内容を繰り返し復習することで、その情報を長く覚えていられるようになります。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">2.理解の深化</h3>
              <p>
                勉強した内容を繰り返し見返すことで、最初は理解しにくかった部分もだんだんとクリアに。問題形式で復習することで、知識をアウトプットする力も身につきます。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">3.自身の向上</h3>
              <p>
                繰り返し学ぶことで、自然と自信がついていきます。「わからないこと」を「わかること」に変える喜びが、勉強へのモチベーションにつながります。{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="container  mx-auto px-3 lg:max-w-lg">
        <div className="border-black border-t pt-5">
          <Image
            src={"/logo/ReLearn.png"}
            alt="ReLearnロゴ"
            width={130}
            height={50}
          />
        </div>
        <LinkText url={"/users/signin"}>
          <p>ReLearnを始める</p>
          <Image
            src={"/icon/link-blue.svg"}
            alt="リンクアイコン"
            width={17}
            height={17}
          />
        </LinkText>
        <nav className="my-4 mx-auto lg:my-6 lg:lg:width-750 text-sm">
          <ul className="flex justify-around items-center underline">
            <li>
              <Link href={"#"}>プライバシー</Link>
            </li>
            <li>
              <Link href={"#"}>お問い合わせ</Link>
            </li>
            <li>
              <Link href={"#"}>お知らせ</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-center text-xs">&copy; 2024 ReLearn</p>
        </div>
      </footer>
    </>
  );
}
