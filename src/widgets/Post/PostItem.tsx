import React from "react";
import {useNavigate} from "react-router";
import {IPost, postApi} from "../../Pages/Posts/postsApi";
import style from './PostItem.module.scss'

type PropsType={
  post?:IPost
}

export const PostItem = ({post}:PropsType) => {

  const navigate=useNavigate()

  return (
      <div className={style.container}>
        <div>№ {post?.id}</div>
        <div className='postitem__title'>Title: {post?.title}</div>
        <div  className='postitem__body'>
          Body:  {Number(post?.body.length)>20?post?.body.substring(0,20)+'...':post?.body}
        </div>
      </div>
  );
};
