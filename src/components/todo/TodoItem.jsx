import { useDispatch } from "react-redux";
import React from "react";
import { setChangeTodo, setChangeValue, toggleCompletedTodo, removeTodo } from "../../slices/todoSlice";

import "./todo.scss";

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
          <img   src="./img/pen.png"    alert="pen"   className="todo-pen-img"  onClick={() =>  dispatch(toggleCompletedTodo(todo.id))} />
          <img   src="./img/delete.png"  alert="delete"  className="todo-dell-img"  onClick={(e) => {dispatch(removeTodo(todo.id))}}/>
        </li>
      )}
    </>    
  );
};

export default TodoItem;