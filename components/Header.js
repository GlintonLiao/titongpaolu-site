import React from "react";
import Image from "next/image";
import { RiStackLine } from "./RiStackLine";
import { PhClockClockwiseFill } from "./PhClockClockwiseFill";
import { MaterialSymbolsUpload } from "./MaterialSymbolsUpload";

export default function Header(props) {
  return (
    <div className={`duration-500 opacity-${props.top ? 0 : 1}`}>
      <div className="fixed top-0 z-10 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="flex items-center justify-between max-w-2xl p-6 py-5 mx-auto text-gray-500 dark:text-white select-none md:px-2">
          <button>
            <h1 className="transform duration-300 font-bold text-lg">
              提桶跑路
            </h1>
          </button>
          <div className="flex items-center space-x-6">
            <button className="opacity-100">
              <RiStackLine size="18" />
            </button>
            <button className="opacity-100">
              <PhClockClockwiseFill size="18" />
            </button>
            <button className="opacity-100">
              <MaterialSymbolsUpload size="18" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
