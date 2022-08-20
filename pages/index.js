import Head from 'next/head'
import Image from 'next/image'
import { queryDatabase } from './api/query-database';
// import styles from '../styles/Home.module.css'

export default function Home({database}) {

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

  console.info(view);
  
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
          <div className='z-20 flex items-center space-x-6'>
            <div className='transition duration-300 ease-in-out hover:-translate-y-2 relative text-white'>
              <button className=' p-4 bg-gradient-to-t from-gray-950 to-grey-900 rounded-2xl shadow-highlight gruop'>
                <div className='transition filter group-hover:drop-shadow-glow transform: none'>
                  <div className='h-10 w-10'>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <button onClick={updateContent}>dadad</button>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
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
