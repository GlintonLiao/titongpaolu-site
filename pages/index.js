import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { RiStackLine } from "../components/RiStackLine";
import { PhClockClockwiseFill } from "../components/PhClockClockwiseFill";
import { MaterialSymbolsUpload } from "../components/MaterialSymbolsUpload";
import { MaterialSymbolsArrowUpwardRounded } from "../components/MaterialSymbolsArrowUpwardRounded";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";
import Posts from "../components/Posts";
import { queryDatabase } from "./api/query-database";
import { queryContent } from "./api/query-content";
import { Context } from "../context/ContextProvider";

export default function Home({ content }) {
  const arr = [false, false, false];
  const [isHov, setIsHov] = useState(arr);
  const [isTop, setIsTop] = useState(true);
  const [posts, setPosts] = useContext(Context);

  useEffect(() => {
    const scrollFun = () => {
      if (window.pageYOffset > 20) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener("scroll", scrollFun);
    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, []);

  useEffect(() => {
    setPosts(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouse = (id) => {
    const newHov = isHov;
    newHov[id] = !newHov[id];
    setIsHov([...newHov]);
  };

  return (
    <div>
      <Head>
        <title>提桶跑路</title>
        <meta name="description" content="快逃" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header top={isTop} />

      <main className="max-w-2xl mx-auto">
        <div className="fixed inset-0 top-0 z-20 flex flex-col items-center justify-center text-sm">
          <div className="z-20 flex items-center space-x-6">
            <div
              className={`transform duration-300 ${
                isTop ? "animate-landing1" : "opacity-0 z-0"
              }`}
            >
              <Link href="/gallery">
                <button
                  className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                  onMouseEnter={() => handleMouse(0)}
                  onMouseLeave={() => handleMouse(0)}
                >
                  <div className="transition filter group-hover:drop-shadow-glow">
                    <RiStackLine size="24" />
                  </div>
                </button>
              </Link>
              <div
                className={`relative text-center transition ease-in-out duration-300 ${
                  isHov[0] ? "opacity-100" : "opacity-0"
                }`}
              >
                <p
                  className={`transition duration-300 ${
                    isHov[0] ? "" : "transform translate-y-2"
                  }`}
                >
                  图库
                </p>
              </div>
            </div>
            <div
              className={`transform duration-300 ${
                isTop ? "animate-landing2" : "opacity-0 z-0"
              }`}
            >
              <button
                className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                onMouseEnter={() => handleMouse(1)}
                onMouseLeave={() => handleMouse(1)}
                onClick={() =>
                  window.scrollTo({
                    top: 25,
                    left: 25,
                    behavior: "smooth",
                  })
                }
              >
                <div className="transition filter group-hover:drop-shadow-glow">
                  <PhClockClockwiseFill size="24" />
                </div>
              </button>
              <div
                className={`relative text-center transition ease-in-out duration-300 ${
                  isHov[1] ? "opacity-100" : "opacity-0"
                }`}
              >
                <p
                  className={`transition duration-300 ${
                    isHov[1] ? "" : "transform translate-y-2"
                  }`}
                >
                  时间线
                </p>
              </div>
            </div>
            <div
              className={`transform duration-200 ${
                isTop ? "animate-landing3" : "opacity-0 z-0"
              }`}
            >
              <Link href="/upload">
                <button
                  className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                  onMouseEnter={() => handleMouse(2)}
                  onMouseLeave={() => handleMouse(2)}
                >
                  <div className="transition filter group-hover:drop-shadow-glow">
                    <MaterialSymbolsUpload size="24" />
                  </div>
                </button>
              </Link>
              <div
                className={`relative text-center transition ease-in-out duration-300 ${
                  isHov[2] ? "opacity-100" : "opacity-0"
                }`}
              >
                <p
                  className={`transition duration-300 ${
                    isHov[2] ? "" : "transform translate-y-2"
                  }`}
                >
                  上传
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ToggleDarkModeButton />

      <button
        className="fixed z-50 w-10 h-10 bottom-24 right-10 bg-white dark:bg-gray-800 rounded-full shadow-lg"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="flex justify-center transition duration-300">
          <MaterialSymbolsArrowUpwardRounded size="18" />
        </div>
      </button>

      <Posts top={isTop} postList={content} />

      <footer
        className={`transform duration-200 ${
          isTop ? "opacity-1" : "opacity-0"
        } fixed inset-x-0 bottom-10 flex flex-col items-center justify-center text-center text-gray-800 dark:text-white text-md`}
      >
        <p className="w-40 sm:w-80">Designed and coded by Guotong Liao</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const database = await queryDatabase();
  const content = await queryContent(database.results);
  return {
    props: {
      database,
      content,
    },
    revalidate: 30, // In seconds
  };
}
