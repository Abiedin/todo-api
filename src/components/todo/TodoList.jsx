import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { InputField } from "./InputField";
import Buttons from "../../modal/buttons/Buttons";
import "./todo.scss";
import Modal from "../../modal/modals/Modal";
import { allRemove, getAll } from "../../slices/todoSlice";
import TextField from "../../modal/modals/TextField";
import { setChangeValue } from "../../slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  //const todo = useSelector((state) => state.todo.chtodoTitle);
  const [modalActive, setModalActive] = useState(false);
  
  return (
    <div className="todo-conteiner">
      <h1 className="todo-title">TodoList</h1>
      <InputField />
      <div className="todo-info">
        <span>All todos: {todos.length}</span>
      </div>
      <Buttons getAll={getAll} allRemove={allRemove} />

      <Modal active={modalActive} setActive={setModalActive}
          TextField={<TextField 
            value=""
            setChangeValue={setChangeValue}
          />}          
        />

      <ul className="todo-ul">
        {todos
          ?.map((todo) => (
            <TodoItem
              key={todo.title}
              todo={todo}
              setModalActive={setModalActive}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default TodoList;
