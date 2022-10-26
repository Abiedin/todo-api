import React from "react";
import "./form-postlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { valuePost, adddPost } from "../../slices/postSlice";

const TextField = (props) => {
  const dispatch = useDispatch();
  const postsStore = useSelector(state => state.postStore.postsArr);
  return (
    <>
      <textarea
        type="text"
        value=''
        onChange={(e) => dispatch(valuePost(e.target.value))}
        placeholder="Input posts"
        className="textarea-input"
      />
      <button
        className="textarea-btn"
        onClick={() => {dispatch(adddPost())}}
      >
        Add post
      </button>
    </>
  );
};

export default TextField;
