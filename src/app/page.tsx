"use client";
import { BlackOverlay } from "@/components/BlackOverlay";
import Link from "@/components/Link";
import { l, useCompileText } from "@/hooks/useCompileText";
import { Ubuntu_Mono } from "next/font/google";
const compileTexts = [
  l("compiler_builtins v0.1.95", 0.8),
  l("core v0.0.0", 0.8),
  l("shanghai v2.1.5", 0.02),
  l("tennis v4.2.1", 0.08),
  l("keio-shiki v3.4.2", 0.8),
  l("covid v0.2.1", 0.016),
  l("vrchat v1.0.0", 0.02),
  l("keio-univ v43.2.0", 0.9),
  l("kcs v1959.2.1", 0.02),
  l("j-ka v1.1.1", 0.2),
  l("lemolatoon v1.0.0", 0.02),
];

const ubuntu_mono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const { takenMilliSeconds, compiledText } = useCompileText(compileTexts);
  return (
    <main>
      <BlackOverlay done={takenMilliSeconds !== null}>
        <div
          className={`w-full h-full text-[#F2F2F2] sm:text-3xl ${ubuntu_mono.className}`}
        >
          <div>cargo build --release</div>
          {compiledText.map((text, i) => {
            return (
              <div key={i} className="ml-8 mt-2">
                <span className="text-[#16C60C]">Compiling</span>
                <span>{`　${text}`}</span>
              </div>
            );
          })}
          {takenMilliSeconds && (
            <div className="ml-8 mt-2">
              <span className="text-[#16C60C]">Finished</span>
              <span>{`　release [optimized] target(s) in ${
                takenMilliSeconds / 1000
              }s`}</span>
            </div>
          )}
        </div>
      </BlackOverlay>
      <div className="m-8 sm:text-base text-sm">
        <h1 className="text-3xl">lemolatoonのポートフォリオ</h1>
        <h2 className="text-xl mt-8">経歴</h2>
        <ul className="mt-2">
          <li className="mt-1">2022年3月 慶應義塾大学附属志木高等学校 卒業</li>
          <li className="mt-1">2022年4月 慶應義塾大学 入学</li>
          <li className="mt-1">慶應義塾大学理工学部情報工学科在学</li>
        </ul>
        <h2 className="text-xl mt-8">所属</h2>
        <ul className="mt-2">
          <li className="mt-1">慶應義塾大学理工学部情報工学科</li>
          <li className="mt-1">慶應義塾大学公認サークル　Computer Society</li>
        </ul>
        <h2 className="text-xl mt-8">アルバイト</h2>
        <ul className="mt-2">
          <li>
            2022年10月～　トゥギャッター株式会社アルバイト(2023/11/20現在)
          </li>
        </ul>
        <h2 className="text-xl mt-8">アクティビティ</h2>
        <ul className="mt-2">
          <li className="mt-1">
            2022年度　セキュリティ・キャンプ全国大会オンライン
            Cコンパイラゼミ修了
          </li>
          <li className="mt-1">
            2023年度　セキュリティ・キャンプ全国大会オンライン OS自作ゼミ修了
          </li>
          <li className="mt-1">
            2023年度　未踏ターゲット(リザバーコンピューティング技術を活用したソフトウェア開発分野)
            <Link href="https://www.ipa.go.jp/jinzai/mitou/target/2023_reservoir/gaiyou_ky-2.html">
              採択
            </Link>
          </li>
        </ul>
        <h2 className="text-xl mt-8">登壇・発表資料</h2>
        <ul className="mt-2">
          <li className="mt-1">
            <div className="flex gap-4">
              <Link href="https://www.ipa.go.jp/jinzai/security-camp/2022/forum2023.html">
                セキュリティ・キャンプフォーラム2023
              </Link>
              <Link href="https://speakerdeck.com/lemolatoon/rustnoshou-sok-kimakurodehei-mo-shu-ru-men">
                Rustの手続きマクロで黒魔術入門
              </Link>
            </div>
          </li>
          <li className="mt-1">
            <div className="flex gap-4">
              <div>2023年度セキュリティ・キャンプ全国大会LT</div>
              <Link href="https://speakerdeck.com/lemolatoon/rust-x-c-plus-plus-meng-nogong-yan-woshi-sitahua">
                【Rust×C++】夢の共演を試した話
              </Link>
            </div>
          </li>
        </ul>
        <h2 className="text-xl mt-8">出版・投稿</h2>
        <ul>
          <li className="mt-1">
            2023/04/09　大学サークルYoutube 『
            <Link href="https://youtu.be/tw2WCjBTgRM?si=CBWu6p7P9j8fR7RK">
              【ゼロからはじめる】プログラミング言語 Rust 集中講座
            </Link>
            』講師
          </li>
          <li className="mt-1">
            2023/05/20　技術書展14　大学サークルとして出展『
            <Link href="https://techbookfest.org/product/rs7c0J6iJJe3a0qVAMMtwR?productVariantID=aMUB5tpcs0fxHZAhvgkJbq">
              KCS Tips
            </Link>
            』で『Rustの一点特化型手続きマクロ』の章を執筆
          </li>
          <li className="mt-1">
            2023/11/11　技術書展15　大学サークルとして出展『
            <Link href="https://techbookfest.org/product/15U934x7A5Ve9E7nxTSLDp?productVariantID=dmKSevFsUN8B1mpaBkpTtk">
              KCS Tips
            </Link>
            』で『【C++20】パーサーコンビネータを自作して json
            パーサを作る』の章を執筆
          </li>
        </ul>
        <h2 className="text-xl mt-8">リンク集</h2>
        <ul>
          <li className="mt-1">
            <Link href="https://github.com/lemolatoon">GitHub</Link>
          </li>
          <li className="mt-1">
            <Link href="https://twitter.com/lemolatoon1">Twitter (X)</Link>
          </li>
          <li className="mt-1">
            <Link href="https://speakerdeck.com/lemolatoon">SpeakerDeck</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
