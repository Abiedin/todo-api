//import { useSelector } from 'react-redux';
import React from "react";
import Form from "../components/FormTodo";
import '../scss/todo.scss'
import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0)
  //const [ setEdit ] = useState("")

 

  //const todos = useSelector((state) => state.todo.todos)

  const putTodo = (value) => {
    if(value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
      setAllTodos(allTodos + 1)
    } else {
      alert('Введите текст')
    }
  }

  const togleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id != id)  {
        setAllComplete(allComplete + 1)
        return todo;
      } else {
        setAllComplete(allComplete - 1)
        return {
          ...todo,
          done: !todo.done,
        }
      }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
    setAllTodos(allTodos - 1)
  }

  const clearAllTodos = () => {
    setTodos([]);
    setAllTodos(0);
    setAllComplete(0);
  }

  const changeTodo = (id) => {
    alert('asd')
  }

  return (
    <div className="todo-conteiner">
      <h1 className="todo-title">TodoList</h1>
        <Form 
          putTodo={putTodo}
        />
        <ul className="todo-ul">
          {
            todos.map((todo) => {
              return (
                <li className={todo.done ? "todo-li done" : "todo-li"} key={todo.id} onClick={() => togleTodo(todo.id)}>
                  {todo.text}
                  <img src="./pen.png" alert="pen" className="todo-pen-img"
                    onClick={e => {
                        e.stopPropagation();
                        changeTodo(todo.id)
                      }
                    }
                  />
                  <img src="./delete.png" alert="delete" className="todo-dell-img"
                    onClick={e => {
                        e.stopPropagation();
                        removeTodo(todo.id)
                      }
                    }
                  />
                </li>

              );
            })
          }
          <div className="todo-info">
            <span>All todos: {allTodos}</span>
            <span>Complete: {allComplete}</span>
          </div>
          <button className="btn-clear" onClick={clearAllTodos} > Clear All</button>
        </ul>

    </div>
  )
}