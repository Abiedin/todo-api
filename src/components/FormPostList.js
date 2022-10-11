import React from "react";
import { useState } from 'react';
import '../scss/form-postlist.scss'
//import { useDispatch } from "react-redux";
//import { addTodo } from "../features/todo/todoSlice";
//import { v4 } from 'uuid';

const FormPostList = (props) => {
 // const dispatch = useDispatch(); //вызывает екшены
  const [value, setValuePost] = useState(""); //чтобы сделать наш объект input управляемым, для этого создаем состояние


  return (
    <form className="form-post">
      <textarea
        type='text'
        value={value}
        onChange =  {(e) => setValuePost(e.target.value)}
        placeholder="Input posts"
         //на каждое изменение в этом инпуте, с помощью (e)-ивента, изменяем состояние на ивент таргет велью - тоесть на велью нашего инпута, тем самых велью хранится в нашем состоянии
        className='textarea-input'
      />
      <button 
        className='textarea-btn'
        onClick={(e) => {
          e.preventDefault();
          props.putPost(value);
          setValuePost("");
        }
      }>Add post</button>
    </form>
  )
}

export default FormPostList; 