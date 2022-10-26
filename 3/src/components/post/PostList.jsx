import "./post.scss";
import { useDispatch, useSelector } from "react-redux";
import  { getPosts }  from "../../slices/postSlice";
import PostItem from "./PostItem";
import TextField from './TextField';

export const PostList = () => {
  const dispatch = useDispatch();
  const arrpo = useSelector((state) => state.postStore.postsArr);

  return (
    <div className="post-conteiner">
      <h1 className="post-title">PostList</h1>
      <TextField />
      <div className="postbtncl">
        <button className="btn-clear" onClick={() => {dispatch(getPosts())}}> 
          Get posts
        </button>
      </div>
     
      {arrpo?.map(post => (
        <PostItem  post={post} />
      ))}
    </div>
  );
};
