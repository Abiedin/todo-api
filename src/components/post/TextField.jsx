import React from "react";
import { useState } from "react";
import "./form-postlist.scss";
import { useDispatch } from "react-redux";


const TextField = (props) => {
  const dispatch = useDispatch(); 
  const [value, setValuePost] = useState(""); 

  return (
    <form className="form-post">
      <textarea
        type="text"
        value={value}
        onChange={(e) => setValuePost(e.target.value)}
        placeholder="Input posts"
        className="textarea-input"
      />
      <button
        className="textarea-btn"
        onClick={(e) => {
          e.preventDefault();
          props.putPost(value);
          setValuePost("");
        }}
      >
        Add post
      </button>
    </form>
  );
};

export default TextField;
