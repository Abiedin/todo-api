import React from "react";
import { useSelector } from "react-redux";
import TodoItem   from "./TodoItem";
import { InputField }  from "./InputField"
import { useDispatch } from "react-redux"; 
import { allRemove, getTodos } from "../../slices/todoSlice";
import "./todo.scss";

 const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  

  return (
    <div className="todo-conteiner">
      <h1 className="todo-title">TodoList</h1>
      <InputField />
      <div className="todo-info">
          <span>All todos: {todos.length}</span>
      </div>   
      <div className="todobtncl">
        <button className="btn-gettodo" onClick={() => {dispatch(getTodos())}}> 
          Get todos
        </button>
        <button className="btn-clear" onClick={() => dispatch(allRemove())}>
          Clear All
        </button>
      </div>
      <ul className="todo-ul">
        {todos?.map((todo) => (
          <TodoItem 
            key={todo.title}
            todo={todo}              
          />
        ))}      
      </ul>
    </div>
  );
};

export default TodoList;