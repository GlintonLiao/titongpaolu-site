import { data } from "autoprefixer";
import React, { useContext } from "react";

const Gallery = () => {
  // const  = useContext();

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
      <div className="flex flex-row max-w-2xl mx-auto">
        <div className="flex flex-col">
          {col1.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" />
            </picture>
          ))}
        </div>
        <div className="flex flex-col">
          {col2.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" />
            </picture>
          ))}
        </div>
        <div className="flex flex-col">
          {col3.map((item, _idx) => (
            <picture key={_idx}>
              <img src={item} alt="img" />
            </picture>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
