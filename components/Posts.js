import React from 'react'
import PostItem from './PostItem'

export default function Posts(props) {
  return (
    <div className={`translate-y-96 duration-200 ease-out opacity-${props.top ? 0 : 1}`}>
      <PostItem />
    </div>
  )
}
