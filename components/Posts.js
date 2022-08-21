import React from "react";
import PostItem from "./PostItem";
import FirstPost from "./FirstPost";

export default function Posts(props) {
  const postList = props.content;
  console.log(postList);
  return (
    <div
      className={`translate-y-96 duration-300 ease opacity-${
        props.top ? 0 : 1
      }`}
    >
      <FirstPost />
      <div>
        {postList.map(post => (
          <PostItem content={post} key={post.results.id}/>
        ))}
      </div>
    </div>
  );
}
