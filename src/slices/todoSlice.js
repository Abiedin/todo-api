import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ // сущность, срез состояния
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setChangeTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
      if(toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    setChangeValue: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
            todo.text = action.payload.value
          }
        })
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
      if(toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload)
    },
    allRemove: (state) => {
      state.todos = [];
    },  
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo, setChangeTodo, setChangeValue, allRemove} = todoSlice.actions;

export default todoSlice.reducer;