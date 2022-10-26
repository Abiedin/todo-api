import { useDispatch } from "react-redux";
import React from "react";
import {
  setChangeTodo,
  setChangeValue,
  completedTodo,
  removeTodoApi,
} from "../../slices/todoSlice";

import "./todo.scss";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      {
        /*todo.completed ? (
        <>
          <input
            type="text"
            value={todo.title}
            onChange={(e) =>
              dispatch(setChangeValue({ value: e.target.value, id: todo.id }))
            }
            className="todo-change"
          />
          <button
            className="btn-change-save"
            onClick={() => {
              dispatch(setChangeTodo(todo.id));
            }}
          >
            Save change
          </button>
        </>
      ) : (*/
        <li
          className={todo.completed ? "todo-li done" : "todo-li"}
          key={todo.id}
        >
          <div onClick={() => dispatch(completedTodo(todo.id))}>
            {todo.title}
          </div>
          <img src="./img/pen.png" alert="pen" className="todo-pen-img" />
          <img
            src="./img/delete.png"
            alert="delete"
            className="todo-dell-img"
            onClick={() => {
              dispatch(removeTodoApi(todo.id));
            }}
          />
        </li>
      }
    </>
  );
};

export default TodoItem;
