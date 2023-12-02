import React from "react";
import {useNavigate} from "react-router";
import {IPost, postApi} from "../../Pages/Posts/postsApi";
import style from './PostItem.module.scss'
import {Button} from "../../shared/button/Button";

type PropsType={
  post?:IPost
}

export const PostItem = ({post}:PropsType) => {

  const navigate=useNavigate()

  return (
      <div className={style.container}>
        <div className={style.number}>№ {post?.id}</div>
        <div className={style.postItem__title}>{post?.title}</div>
        <div  className={style.postItem_body}>
        {Number(post?.body.length)>100?post?.body.substring(0,100)+'...':post?.body}
        </div>
        <div  onClick={()=>{navigate(`/posts/${2}`)}} className={style.button}>
          <Button >
            К посту
          </Button>
        </div>

      </div>
  );
};
