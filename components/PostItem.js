import React from "react";
import Image from "next/image";

export default function PostItem(props) {
  const children = props.content.results;
  const text = children[0].paragraph.rich_text[0].plain_text;
  const img = children[1].image.file.url;
  console.log(text);
  return (
    <>
      <div className="grid max-w-2xl gap-16 pl-8 pr-5 mx-auto transition-opacity md:p-0 md:grid-cols-1fr-5fr">
        <div className="hidden md:block">
          <p className="font-mono text-xs leading-6 text-right text-gray-500 ">
            Jan 15, 2022
          </p>
        </div>
        <div className="relative pb-20 pl-6 md:pl-16 border-l border-gray-300 dark:border-gray-700">
          <p className="mb-0.5 font-mono text-xs leading-6 text-gray-500 -translate-y-1/4 md:hidden">
            Jan 15, 2022
          </p>
          <div className="prose-sm prose-dark md:prose-dark">{text}</div>
          <div className="absolute -translate-x-1/2 -top-1 left-0 w-3 h-3  bg-white border-4 border-gray-200 rounded-full md:translate-y-1/2 md:ring-4 ring-gray-800"></div>
          <div className="mt-5 overflow-hidden space-y-5 text-sm text-gray-400 rounded-lg shadow-highlight">
              <picture>
                <img src={img} alt="img" />
              </picture>
          </div>
        </div>
      </div>
    </>
  );
}
