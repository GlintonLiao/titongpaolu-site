import { Context } from "../context/ContextProvider";
import React, { useContext } from "react";

const Gallery = () => {
  const [posts, setPosts] = useContext(Context);
  const data = []
  console.log(posts)

  posts.forEach(post => {
    post.results.forEach(item => {
      if (item.type === 'image')
        data.push(item['image'].file.url)
    })
  })

  console.log(data);

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
      <div className="flex flex-row max-w-5xl mx-auto space-x-8">
        <div className="flex flex-col space-y-8">
          {col1.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" className="shadow-lg rounded"/>
            </picture>
          ))}
        </div>
        <div className="flex flex-col space-y-8">
          {col2.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" className="shadow-lg rounded"/>
            </picture>
          ))}
        </div>
        <div className="flex flex-col space-y-8">
          {col3.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" className="shadow-lg rounded"/>
            </picture>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
