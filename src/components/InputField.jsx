import "../scss/todo-form.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../slices/todoSlice";

const InputField = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = React.useState('');

  const addTodoHandler = () => {
    if (todoValue.length > 0) {
      const todo = {
        id: new Date().toISOString(),
        text: todoValue,
        completed: false,
      }
      dispatch(addTodo(todo))
      setTodoValue('')
    }    
  }

  return (
    <form className="form-todo" onSubmit={(e) => {
      e.preventDefault()
      addTodoHandler()
      }}>
      <input
        type="text"
        value={todoValue}
        placeholder="Your todo..."
        onChange={(e) => setTodoValue(e.target.value)} //на каждое изменение в этом инпуте, с помощью (e)-ивента, изменяем состояние на ивент таргет велью - тоесть на велью нашего инпута, тем самых велью хранится в нашем состоянии
        className="todo-input"
      />
    </form>
  );
};

export default InputField;
