import React from "react";
import PostItem from "./PostItem";
import FirstPost from "./FirstPost";

export default function Posts({ postList, top }) {
  return (
    <div
      className={`translate-y-96 duration-300 ease opacity-${
        top ? 0 : 1
      }`}
    >
      <FirstPost />
      <div>
        {postList.map((post, _idx) => (
          <PostItem content={post.results} key={_idx}/>
        ))}
      </div>
    </div>
  );
}
