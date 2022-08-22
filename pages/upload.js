import React from "react";
import Link from "next/link";
import { MaterialSymbolsArrowBackRounded } from "../components/MaterialSymbolsArrowBackRounded";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { MaterialSymbolsUpload } from "../components/MaterialSymbolsUpload";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "error",
  },
];

export default function upload() {

  const updateContent = () => {
    fetch("/api/create-page", {
      method: "post",
      body: JSON.stringify(obj),
    });
    console.log("hahaha");
  };

  const handleInputChange = (e) => {
    const text = e.target.files
  };

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    
  }

  return (
    <>
      <Link href="/">
        <button className="fixed flex z-10 w-10 h-10 top-10 left-1/2 rounded-full shadow-md justify-center items-center">
          <MaterialSymbolsArrowBackRounded size="24" />
        </button>
      </Link>
      <div className="max-w-2xl mx-auto">
        <div className="fixed inset-0 top-0 z-8 flex flex-col items-center justify-center text-sm">
          <div className="top-3 z-20 space-y-6">
            <div className="text-lg font-bold">
              <h1>输入图片及文字</h1>
            </div>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full max-h-52 min-h-30 text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="输入文字..."
              onChange={handleInputChange}
            ></textarea>
            
            <input
              type="file"
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-gray-50 file:text-gray-700
              hover:file:bg-gray-100"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              multiple
              onChange={handleFileChange}
            />

            <button
              className="flex w-full text-md h-12 rounded-full justify-center items-center transition duration-300 bg-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring focus:ring-gray-300"
              onClick={updateContent}
            >
              发布
            </button>
          </div>
        </div>
      </div>
      <ToggleDarkModeButton />
    </>
  );
}
