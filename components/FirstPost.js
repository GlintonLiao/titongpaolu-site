import React, { memo }  from "react";
import { getDate } from "../utils/getDate";

const FirstPost = () => {
  const date = getDate()
  return (
    <div className="grid max-w-2xl gap-16 p-5 pl-8 mx-auto mb-6 md:mb-20 md:p-0 md:grid-cols-1fr-5fr">
      <div className="hidden md:block">
        <p className="font-mono text-xs leading-6 text-right text-gray-500">{date}</p>
      </div>
      <div className="relative pl-6 prose border-gray-800 md:pl-16 prose-dark">
        <p className="mb-0.5 font-mono text-xs leading-6 text-gray-500 -translate-y-1/4 md:hidden">{date}</p>
        <p className="!mt-0 !mb-6 text-sm md:text-base">
          我本可以忍受黑暗 如果我不曾见过光明 —— 艾米莉·狄金森
        </p>
        <div className="absolute top-0 left-0 w-3 h-3 ">
          <div className="w-full h-full -translate-x-1/2 translate-y-1/3">
            <span className="absolute w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
            <span className="absolute w-full h-full bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FirstPost)
