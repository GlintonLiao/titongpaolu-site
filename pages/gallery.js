import Link from "next/link";
import { Context } from "../context/ContextProvider";
import { MaterialSymbolsArrowBackRounded } from "../components/MaterialSymbolsArrowBackRounded";
import React, { useContext } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";

const Gallery = () => {
  const [posts, setPosts] = useContext(Context);
  const data = [];

  posts.forEach((post) => {
    post.results.forEach((item) => {
      if (item.type === "image") data.push(item["image"].file.url);
    });
  });

  const col1 = [],
    col2 = [],
    col3 = [];
  let i = 0;

  while (i < data.length) {
    col1.push(data[i++]);
    if (i < data.length) col2.push(data[i++]);
    if (i < data.length) col3.push(data[i++]);
  }

  return (
    <>
      <Link href="/">
        <button className="fixed bg-white dark:bg-gray-800 flex z-10 w-10 h-10 top-10 left-1/2 rounded-full shadow-md justify-center items-center">
          <MaterialSymbolsArrowBackRounded size="24" />
        </button>
      </Link>
      <div className="absolute inset-x-8 inset-y-28 flex flex-row max-w-5xl mx-auto space-x-8">
        <div className="flex flex-col space-y-8">
          {col1.map((item, _idx) => (
            <Zoom key={_idx}>
              <picture>
                <img src={item} alt="img" className="shadow-lg rounded" />
              </picture>
            </Zoom>
          ))}
        </div>
        <div className="flex flex-col space-y-8">
          {col2.map((item, _idx) => (
            <Zoom key={_idx}>
              <picture>
                <img src={item} alt="img" className="shadow-lg rounded" />
              </picture>
            </Zoom>
          ))}
        </div>
        <div className="flex flex-col space-y-8">
          {col3.map((item, _idx) => (
            <Zoom key={_idx}>
              <picture>
                <img src={item} alt="img" className="shadow-lg rounded" />
              </picture>
            </Zoom>
          ))}
        </div>
      </div>
      <ToggleDarkModeButton />
    </>
  );
};

export default Gallery;
