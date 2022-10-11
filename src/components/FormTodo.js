import React from "react";
import { useState } from 'react';
import '../scss/todo-form.scss'
//import { useDispatch } from "react-redux";
//import { addTodo } from "../features/todo/todoSlice";
//import { v4 } from 'uuid';

const Form = (props) => {
 // const dispatch = useDispatch(); //вызывает екшены
  const [value, setValue] = useState(""); //чтобы сделать наш объект input управляемым, для этого создаем состояние

 /* const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    }

    dispatch(addTodo(todo))
    setValue('')
  }*/

  return (
    <form className="form-todo" onSubmit={(e) => {
                                    e.preventDefault();
                                    props.putTodo(value);
                                    setValue("");
                                  }
                                }>
      <input
        type='text'
        value={value}
        placeholder='Your todo...'
        onChange =  {
          (e) => setValue(e.target.value)
        } //на каждое изменение в этом инпуте, с помощью (e)-ивента, изменяем состояние на ивент таргет велью - тоесть на велью нашего инпута, тем самых велью хранится в нашем состоянии
        className='todo-input'
      />
    </form>
  )
}

export default Form; 