import { useDispatch } from 'react-redux';
import React from 'react';

import { completedTodo, removeTodoApi, sendId } from '../../slices/todoSlice';

import './todo.scss';

const TodoItem = ({ todo, setModalActive }) => {
  const dispatch = useDispatch();

  return (
    <>
      {
        <div
          className={todo.completed ? 'todo-li done' : 'todo-li'}
          key={todo.id}
        >
          <div
            className="textli"
            onClick={() => dispatch(completedTodo(todo.id))}
          >
            {todo.title}
          </div>
          <div className="changetodo">
            <img
              src="./img/pen.png"
              alert="pen"
              alt=""
              className="todo-pen-img"
              onClick={() => {
                setModalActive(true);
                dispatch(sendId(todo.id));
              }}
            />
            <img
              src="./img/delete.png"
              alert="delete"
              alt=""
              className="todo-dell-img"
              onClick={() => {
                dispatch(removeTodoApi(todo.id));
              }}
            />
          </div>
        </div>
      }
    </>
  );
};

export default TodoItem;
