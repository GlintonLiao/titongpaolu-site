import React from "react";
import Link from "next/link";
import { RiStackLine } from "./RiStackLine";
import { PhClockClockwiseFill } from "./PhClockClockwiseFill";
import { MaterialSymbolsUpload } from "./MaterialSymbolsUpload";

export default function Header(props) {
  return (
    <div className={`duration-500 opacity-${props.top ? 0 : 1}`}>
      <div className="fixed top-0 z-10 w-full backdrop-filter backdrop-blur-md bg-opacity-60">
        <div className="flex items-center justify-between max-w-2xl p-6 py-5 mx-auto text-gray-800 dark:text-white select-none md:px-2">
          <button>
            <h1 className="duration-300 font-bold text-lg">提桶跑路</h1>
          </button>
          <div
            className={`flex items-center space-x-6 transition duration-300 ease ${
              props.top ? "moved opacity-0" : ""
            }`}
          >
            <button className={`transition duration-300 ease`}>
              <RiStackLine size="18" />
            </button>
            <button
              className={`transition duration-300 ease`}
              onClick={() =>
                window.scrollTo({
                  top: 25,
                  left: 25,
                  behavior: "smooth",
                })
              }
            >
              <PhClockClockwiseFill size="18" />
            </button>
            <Link href="/upload">
              <button className={`transition duration-300 ease`}>
                <MaterialSymbolsUpload size="18" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
