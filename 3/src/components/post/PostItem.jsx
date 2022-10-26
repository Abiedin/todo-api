import React from "react";
import { removePost } from "../../slices/postSlice";
import { useDispatch } from "react-redux";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(removePost(post.id))}>{post.id}{post.title} </div>;
};

export default PostItem;
