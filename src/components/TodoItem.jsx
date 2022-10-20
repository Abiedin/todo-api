import { useDispatch } from "react-redux";
import React from "react";
import { toggleCompletedTodo } from "../slices/todoSlice";
import { removeTodo } from "../slices/todoSlice";
import { setChangeTodo, setChangeValue } from "../slices/todoSlice";

import "../scss/todo.scss";

const TodoItem = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <>
      {todo.completed ? (
        <>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => dispatch(setChangeValue({value : e.target.value, id : todo.id}))}
            className="todo-change"
          />
          <button
            className="btn-change-save"
            onClick={() => {dispatch( setChangeTodo(todo.id))}}
          >
            Save change
          </button>
        </>
      ) : (
        <li   className={todo.done ? "todo-li done" : "todo-li"}  key={todo.id} >
          {todo.text}
          <img   src="./pen.png"    alert="pen"   className="todo-pen-img"  onClick={() =>  dispatch(toggleCompletedTodo(todo.id))} />
          <img   src="./delete.png"  alert="delete"  className="todo-dell-img"  onClick={(e) => {dispatch(removeTodo(todo.id))}}/>
        </li>
      )}
    </>    
  );
};

export default TodoItem;