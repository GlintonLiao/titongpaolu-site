import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import Header from "../components/Header";
import { RiStackLine } from "../components/RiStackLine";
import { PhClockClockwiseFill } from "../components/PhClockClockwiseFill";
import { MaterialSymbolsUpload } from "../components/MaterialSymbolsUpload";
import { MaterialSymbolsBedtimeOutlineRounded } from "../components/MaterialSymbolsBedtimeOutlineRounded";
import Posts from "../components/Posts";
import { MaterialSymbolsWbSunnyOutlineRounded } from "../components/MaterialSymbolsWbSunnyOutlineRounded";
import { queryDatabase } from "./api/query-database";

export default function Home({ database }) {
  const arr = [false, false, false];

  const [isHov, setIsHov] = useState(arr);
  const [isTop, setIsTop] = useState(true);
  const {theme, setTheme} = useTheme()

  const dataArr = database.results;
  const obj = {
    texts: "jjjljkl",
    img: "lldiuqowy",
  };

  useEffect(() => {
    const scrollFun = () => {
      if (window.pageYOffset) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }
    
    window.addEventListener("scroll", scrollFun);
  
    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, []);

  const updateContent = () => {
    fetch("http://localhost:3000/api/create-page", {
      method: "post",
      body: JSON.stringify(obj),
    });
    console.log("hahaha");
  };

  const view = {};

  dataArr.map((item) => {
    const typestr = item.type;
    switch (typestr) {
      case "paragraph":
        view[typestr] = item[typestr].rich_text[0].plain_text;
        break;
      case "image":
        view[typestr] = item[typestr].file.url;
        break;
      case "bulleted_list_item":
        view.date = item[typestr].rich_text[0].plain_text;
        break;
    }
  });

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

      <Header top={isTop}/>

      <main className="max-w-2xl mx-auto">
        <div className="fixed inset-0 top-0 z-8 flex flex-col items-center justify-center text-sm">
          <div className="z-20 flex items-center space-x-6">
            <div className={`transform duration-300 ${isTop ? "animate-landing1" : "opacity-0"}`}>
              <button
                className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                onMouseEnter={() => handleMouse(0)}
                onMouseLeave={() => handleMouse(0)}
              >
                <div className="transition filter group-hover:drop-shadow-glow">
                  <RiStackLine size="24" />
                </div>
              </button>
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
            <div className={`transform duration-300 ${isTop ? "animate-landing2" : "opacity-0"}`}>
              <button
                className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                onMouseEnter={() => handleMouse(1)}
                onMouseLeave={() => handleMouse(1)}
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
            <div className={`transform duration-200 ${isTop ? "animate-landing3" : "opacity-0"}`}>
              <button
                className="p-4 duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 rounded-2xl shadow-lg group"
                onMouseEnter={() => handleMouse(2)}
                onMouseLeave={() => handleMouse(2)}
              >
                <div className="transition filter group-hover:drop-shadow-glow">
                  <MaterialSymbolsUpload size="24" />
                </div>
              </button>
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

        <button onClick={updateContent}>dadad</button>
      </main>

      <button className="fixed z-50 w-10 h-10 bottom-10 right-10 bg-white dark:bg-gray-800 rounded-full shadow-lg" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <div className="flex justify-center transition duration-300">
          {theme == 'dark' ? 
            <MaterialSymbolsWbSunnyOutlineRounded size="18" /> :
            <MaterialSymbolsBedtimeOutlineRounded size="18" />
          }
        </div>
      </button>

      <Posts top={isTop}/>

      <footer className={`transform duration-200 ${isTop ? "opacity-1" : "opacity-0"} fixed inset-x-0 bottom-10 flex flex-col items-center justify-center text-center text-gray-800 dark:text-white text-md`}>
        <p className="w-40 sm:w-80">Design and coded by Guotong Liao</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const database = await queryDatabase();
  return {
    props: {
      database,
    },
  };
}
