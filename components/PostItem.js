import React, { memo } from "react";
import Image from "next/image";

const PostItem = ({ content }) => {
  const [dateObj, ...rest] = content
  const texts = [];
  const imgs = [];
  const date = dateObj.paragraph.rich_text[0].plain_text

  rest.map((item) => {
    const typestr = item.type;
    switch (typestr) {
      case "paragraph":
        texts.push(item[typestr].rich_text[0].plain_text);
        break;
      case "image":
        imgs.push(item[typestr].file.url);
        break;
    }
  });

  console.log(imgs);

  return (
    <>
      <div className="grid max-w-2xl gap-16 pl-8 pr-5 mx-auto transition-opacity md:p-0 md:grid-cols-1fr-5fr">
        <div className="hidden md:block">
          <p className="font-mono text-xs leading-6 text-right text-gray-500 ">
            {date}
          </p>
        </div>
        <div className="relative pb-20 pl-6 md:pl-16 border-l border-gray-300 dark:border-gray-700">
          <p className="mb-0.5 font-mono text-xs leading-6 text-gray-500 -translate-y-1/4 md:hidden">
            {date}
          </p>
          {texts.map((text, _idx) => (
            <div className="prose-sm prose-dark md:prose-dark" key={_idx}>
              {text}
            </div>
          ))}
          <div className="absolute -translate-x-1/2 -top-1 left-0 w-3 h-3  bg-white border-4 border-gray-800 dark:border-gray-200 rounded-full md:translate-y-1/2 md:ring-4 ring-gray-200 dark:ring-gray-800"></div>
          {imgs.map((img, _idx) => (
            <div className="mt-5 overflow-hidden space-y-5 text-sm text-gray-400 rounded-lg shadow-highlight" key={_idx}>
              <picture>
                <img src={img} alt="img" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(PostItem);
