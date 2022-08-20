import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { queryDatabase } from './api/query-database';
// import styles from '../styles/Home.module.css'

export default function Home({database}) {

  const arr = [false, false, false]

  const [isHov, setIsHov] = useState(arr)

  const dataArr = database.results
  const obj = {
    texts: "jjjljkl", 
    img: "lldiuqowy", 
  }

  const updateContent = () => {
    fetch('http://localhost:3000/api/create-page', { 
      method: 'post',
      body: JSON.stringify(obj), 
    })
    console.log("hahaha");
  }


  const view = {}

  dataArr.map(item => {
    const typestr = item.type
    switch (typestr) {
      case "paragraph": 
        view[typestr] = item[typestr].rich_text[0].plain_text
        break;
      case "image":
        view[typestr] = item[typestr].file.url
        break;
      case "bulleted_list_item":
        view.date = item[typestr].rich_text[0].plain_text
        break;
    }
  })

  const handleMouse = (id) => {
    const newHov = isHov
    // console.log(isHov);
    newHov[id] = !newHov[id]
    setIsHov([...newHov])
    console.log(isHov);
  }
  
  return (
    <div>
      <Head>
        <title>提桶跑路</title>
        <meta name="description" content="快逃" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl mx-auto">
        <div className='fixed inset-0 top-0 z-20 flex flex-col items-center justify-center text-lg'
        >
          <div className='z-20 flex text-sm items-center space-x-6'>
            <div className='realtive'>
              <button className='p-4 duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 rounded-2xl shadow-lg group' onMouseEnter={() => handleMouse(0)} onMouseLeave={() => handleMouse(0)}>
                <div className='transition filter group-hover:drop-shadow-glow'>
                  <div className='h-10 w-10'>
                  </div>
                </div>
              </button>
              <div className={`relative text-center transition ease-in-out duration-300 ${isHov[0] ? "opacity-100" : "opacity-0"}`}>
                <p className={`transition duration-300 ${isHov[0] ? "" : "transform translate-y-2"}`}>图库</p>
              </div>
            </div>
            <div className='realtive'>
              <button className='p-4 duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 rounded-2xl shadow-lg group' onMouseEnter={() => handleMouse(1)} onMouseLeave={() => handleMouse(1)}>
                <div className='transition filter group-hover:drop-shadow-glow'>
                  <div className='h-10 w-10'>
                  </div>
                </div>
              </button>
              <div className={`relative text-center transition ease-in-out duration-300 ${isHov[1] ? "opacity-100" : "opacity-0"}`}>
                <p className={`transition duration-300 ${isHov[1] ? "" : "transform translate-y-2"}`}>时间线</p>
              </div>
            </div>
            <div className='realtive'>
              <button className='p-4 duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 rounded-2xl shadow-lg group' onMouseEnter={() => handleMouse(2)} onMouseLeave={() => handleMouse(2)}>
                <div className='transition filter group-hover:drop-shadow-glow'>
                  <div className='h-10 w-10'>
                  </div>
                </div>
              </button>
              <div className={`relative text-center transition ease-in-out duration-300 ${isHov[2] ? "opacity-100" : "opacity-0"}`}>
                <p className={`transition duration-300 ${isHov[2] ? "" : "transform translate-y-2"}`}>上传</p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={updateContent}>dadad</button>

      </main>

      <footer className='fixed inset-x-0 bottom-10 flex flex-col items-center justify-center text-md'>
          Design and coded by Guotong Liao
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const database = await queryDatabase();
  return {
    props: {
      database,
    },
  };
}
