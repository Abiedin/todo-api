import React from "react";
import { useSelector } from "react-redux"; // хук, для того чтобы достать массив todos
import TodoItem   from "./TodoItem";
import InputField  from "./InputField"
import "../scss/todo.scss";
import { useDispatch } from "react-redux"; 
import { allRemove } from "../slices/todoSlice";

 const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-conteiner">
      <h1 className="todo-title">TodoList</h1>
      <InputField />
      <ul className="todo-ul">
        {todos?.map((todo) => (
          <TodoItem 
            todo={todo}              
          />
        ))}
        <div className="todo-info">
          <span>All todos: {todos.length}</span>
        </div>
        <button className="btn-clear" onClick={() => dispatch(allRemove())}>
          Clear All
        </button>
      </ul>
    </div>
  );
};

export default TodoList;