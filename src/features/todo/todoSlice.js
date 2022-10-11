import { createSlice } from "@reduxjs/toolkit";

const initialState = {  //создаем стейт для этого апликейшена
  todos: [],
}

export const todoSlice = createSlice ({
  name: 'todos',
  initialState,  // это state
  reducers: {
    addTodo: (state, action) => { 
      state.todos.push(action.payload)
     },
  },
})

export const { addTodo } = todoSlice.actions // из todoSlice вытаскиваем екшены
export default todoSlice.reducer // вытаскиваем name