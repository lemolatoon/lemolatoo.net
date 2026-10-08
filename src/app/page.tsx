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
  l("lemolatoon v1.0.0", 0.01),
] as const;

const ubuntu_mono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
});
const BAR_WIDTH = 25;
export default function Home() {
  const { takenMilliSeconds, compiledText } = useCompileText(compileTexts);
  const is_compile_done = takenMilliSeconds !== undefined;
  const compiling_bar_width =
    BAR_WIDTH * (compiledText.length / compileTexts.length);
  const bar_string = `[${"=".repeat(compiling_bar_width)}>${"\u00A0".repeat(BAR_WIDTH - compiling_bar_width)}]`;
  const n_compiled = compiledText.length;
  const n_total = compileTexts.length;
  return (
    <main>
      <BlackOverlay done={is_compile_done}>
        <div
          className={`w-full h-full text-[#F2F2F2] sm:text-3xl ${ubuntu_mono.className}`}
        >
          <div className="text-gray-400 text-base"># click to skip</div>
          <div>cargo build --release</div>
          {compiledText.map((text, i) => {
            return (
              <div key={i} className="ml-8 mt-2">
                <span className="text-[#16C60C]">Compiling</span>
                <span>{`　${text}`}</span>
              </div>
            );
          })}
          {is_compile_done ? (
            <div className="ml-8 mt-2">
              <span className="text-[#16C60C]">Finished</span>
              <span>{`　release [optimized] target(s) in ${
                takenMilliSeconds / 1000
              }s`}</span>
            </div>
          ) : (
            <div className="ml-8 mt-2">
              <span className="text-[#25B7DA]">&nbsp;Building</span>
              <span>{`　 ${bar_string}\u00A0${n_compiled}/${n_total}:\u00A0${compileTexts[Math.min(n_compiled, n_total - 1)].text}`}</span>
            </div>
          )}
        </div>
      </BlackOverlay>
      <div className="m-8 sm:text-base text-sm">
        <h1 className="text-3xl">lemolatoonのポートフォリオ</h1>
        <h2 className="text-xl mt-8">経歴</h2>
        <ul className="mt-2">
          <li className="mt-1">2026年3月 慶應義塾大学情報工学科 卒業</li>
          <li className="mt-1">
            2026年4月 慶應義塾大学大学院理工学研究科 入学
          </li>
        </ul>
        <h2 className="text-xl mt-8">所属</h2>
        <ul className="mt-2">
          <li className="mt-1">慶應義塾大学大学院理工学研究科</li>
          <li className="mt-1">慶應義塾大学公認サークル　Computer Society</li>
        </ul>
        <h2 className="text-xl mt-8">アルバイト・インターン</h2>
        <ul className="mt-2">
          <li className="mb-4">
            <div className="grid grid-cols-1 gap-1 md:flex md:justify-start md:space-x-4">
              <span>2024年1月～</span>
              <span>株式会社Preferred Networks</span>
              <span>Part-time Engineer</span>
            </div>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p>C++を用いて、MN-Coreのコンパイラの実装をやっています。</p>
            </div>
          </li>
          <li className="mb-4">
            <div className="grid grid-cols-1 gap-1 md:flex md:justify-start md:space-x-4">
              <span>2026年8月～2026年9月</span>
              <span>LINEヤフー株式会社</span>
              <span>インターンシップ</span>
            </div>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p>
                Private Cloud の OpenStack まわりの開発業務を行いました。「
                <Link href="https://www.lycorp.co.jp/ja/recruit/newgrads/internship/detail/INF-4-75/">
                  統合プライベートクラウドにおける大規模IaaSシステム開発
                </Link>
                」
              </p>
            </div>
          </li>
          <li className="mb-4">
            <div className="grid grid-cols-1 gap-1 md:flex md:justify-start md:space-x-4">
              <span>2022年10月～2023年12月</span>
              <span>トゥギャッター株式会社</span>
              <span>アルバイト</span>
            </div>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p>
                Typescript/Reactを用いて、主にWebフロントエンドをやっていました。
              </p>
            </div>
          </li>
        </ul>
        <h2 className="text-xl mt-8">アクティビティ</h2>
        <ul className="mt-2">
          <li className="mt-2 md:mt-1">
            <div>
              2025年6月～8月　Google Summer of Code 2025 Contributor（QEMU
              Org.）
            </div>
            <div className="mt-1">
              Rust製のvirtiofsdに、io_uringを用いた非同期I/O実行経路を実装（
              <Link href="https://gsoc.lemolatoo.net/">成果レポート</Link>）
            </div>
          </li>
          <li className="mt-2 md:mt-1">
            2024年夏　The University of Chicago:
            <Link href="https://cs.uchicago.edu/academics/undergraduate/summer-research/student-summer-research-fellowship-program/">
              Student Summer Research Fellowship Program
            </Link>
            に参加
          </li>
          <li className="mt-2 md:mt-1">
            2023年度　未踏ターゲット(リザバーコンピューティング技術を活用したソフトウェア開発分野)
            <Link href="https://www.ipa.go.jp/jinzai/mitou/target/2023_reservoir/gaiyou_ky-2.html">
              採択
            </Link>
          </li>
          <li className="mt-2 md:mt-1">
            2023年度　セキュリティ・キャンプ全国大会 OS自作ゼミ修了
          </li>
          <li className="mt-2 md:mt-1">
            2022年度　セキュリティ・キャンプ全国大会オンライン
            Cコンパイラゼミ修了
          </li>
        </ul>
        <h2 className="text-xl mt-8">登壇・発表資料</h2>
        <ul className="mt-2">
          <li className="mt-1">
            <div className="flex gap-4">
              <div>2023年度セキュリティ・キャンプ全国大会LT</div>
              <Link href="https://speakerdeck.com/lemolatoon/rust-x-c-plus-plus-meng-nogong-yan-woshi-sitahua">
                【Rust×C++】夢の共演を試した話
              </Link>
            </div>
          </li>
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
        </ul>
        <h2 className="text-xl mt-8">出版・投稿</h2>
        <ul>
          <li className="mt-1">
            2025/07/01 Proceedings of the VLDB Endowment Vol. 18, No. 11{" "}
            <span className="font-bold underline">Kaisei Hishida</span>, Chunwei
            Liu, John Paparrizos, and Aaron J. Elmore.{" "}
            <Link href="https://doi.org/10.14778/3749646.3749701">
              Beyond Compression: A Comprehensive Evaluation of Lossless
              Floating-Point Compression
            </Link>
          </li>
          <li className="mt-1">
            2023/11/11　技術書展15　大学サークルとして出展『
            <Link href="https://techbookfest.org/product/15U934x7A5Ve9E7nxTSLDp?productVariantID=dmKSevFsUN8B1mpaBkpTtk">
              KCS Tips
            </Link>
            』で『【C++20】パーサーコンビネータを自作して json
            パーサを作る』の章を執筆
          </li>
          <li className="mt-1">
            2023/05/20　技術書展14　大学サークルとして出展『
            <Link href="https://techbookfest.org/product/rs7c0J6iJJe3a0qVAMMtwR?productVariantID=aMUB5tpcs0fxHZAhvgkJbq">
              KCS Tips
            </Link>
            』で『Rustの一点特化型手続きマクロ』の章を執筆
          </li>
          <li className="mt-1">
            2023/04/09　大学サークルYoutube 『
            <Link href="https://youtu.be/tw2WCjBTgRM?si=CBWu6p7P9j8fR7RK">
              【ゼロからはじめる】プログラミング言語 Rust 集中講座
            </Link>
            』講師
          </li>
        </ul>
        <h2 className="text-xl mt-8">リンク集</h2>
        <ul>
          <li className="mt-1">
            <Link href="https://github.com/lemolatoon">GitHub</Link>
          </li>
          <li className="mt-1">
            <Link href="https://twitter.com/lemolatoon">Twitter (X)</Link>
          </li>
          <li className="mt-1">
            <Link href="https://speakerdeck.com/lemolatoon">SpeakerDeck</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
