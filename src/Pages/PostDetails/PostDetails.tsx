import React from "react";
import {useNavigate} from "react-router";
import {IPost} from "../Posts/postsApi";


type PropsType={
  post?:IPost
}

export const PostDetails = ({post}:PropsType) => {

  const navigate=useNavigate()

  return (
      <div >
        <div>№ {post?.id}</div>
        <div className='postitem__title'>Title: {post?.title}</div>
        <div  className='postitem__body'>
          Body: VGDWD  {Number(post?.body.length)>20?post?.body.substring(0,20)+'...':post?.body}
        </div>
      </div>
  );
};
