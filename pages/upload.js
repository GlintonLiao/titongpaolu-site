import React from 'react'

export default function upload() {
  
  const updateContent = () => {
    fetch("/api/create-page", {
      method: "post",
      body: JSON.stringify(obj),
    });
    console.log("hahaha");
  };

  return (
    <div className='w-full h-full flex'>
      <button className='fixed w-10 h-10 top-10 rounded-lg flex justify-center'>
        <Link 
          href="/index">
          <SomeComponent />
        </Link>
      </button>
      <div className='absolute mx-auto'>
        <div className='text-lg font-bold'>
          <h1>输入图片及文字</h1>
        </div>
        <InputComponent />
        <Image />
        <button className="flex justify-center transition duration-300"
          onClick={updateContent}
          >
          <MaterialSymbolsWbSunnyOutlineRounded size="18" />
        </button>
      </div>
    </div>
  )
    
}