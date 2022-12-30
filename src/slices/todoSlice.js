import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

export const getAll = createAsyncThunk(
  'todos/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const dataArr = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      if (!dataArr) {
        throw new Error('Can/t get post. Server error.');
      }
      //localStorage.clear();
      
      let getLocalStorageTodos = JSON.parse(localStorage.getItem('todos'));

      if (!getLocalStorageTodos) localStorage.setItem('todos', JSON.stringify(dataArr));

      return dataArr.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const completedTodo = createAsyncThunk(
  'todos/completedTodo',
  async (id, { rejectWithValue, getState, dispatch }) => {
    const todo = getState().todo.todos.find((todo) => todo.id === id);
    console.log('todo123 =', todo);

    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          //method: "PATCH", //для обновлений
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      if (!response) {
        throw new Error('Can/t toggle status. Server error.');
      }

      dispatch(toggleCompletedTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodoApi = createAsyncThunk(
  'todos/removeTodoApi',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const responseTodo = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!responseTodo) {
        throw new Error('Can/t delete post. Server error.');
      }
      dispatch(removeTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text, { rejectWithValue, dispatch }) => {
   try {
    const newTodo = {
     id: v4(),
     title: text,
     userId: 1,
     completed: false,
    }
 
    const response = await axios.post(
     'https://jsonplaceholder.typicode.com/posts',
     {
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newTodo }),
     }
    )
    dispatch(addTodo(newTodo))
    if (!response.ok) {
     throw new Error('Can/t add post. Server error.')
    }
 
    const data = await response.json()
    console.log('data =', data)
    dispatch(addTodo(data))
   } catch (error) {
    return rejectWithValue(error.message)
   }
  }
 )
 

const setError = (state, action) => {
  console.log('rejected');
  state.status = 'rejected';
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    chtodoTitle: '',
    chtodoId: 0,
    inputNull: true,
    status: null,
    error: null,
  },
  reducers: {
    sendId: (state, action) => {
      state.chtodoId = action.payload;
      const rTodo = state.todos.find((todo) => todo.id === action.payload);
      if (rTodo) {
        state.chtodoTitle = rTodo.title;
      }
    },
    setChangeTodo: (state, action) => {
      const gTodo = state.todos.find((todo) => todo.id === state.chtodoId);
      if (gTodo) {
        gTodo.title = state.chtodoTitle;
      }
    },
    setChangeValue: (state, action) => {
      state.chtodoTitle = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    allRemove: (state) => {
      state.todos = [];
    },
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      console.log('pending');
      state.status = 'loading';
      state.error = null;
    },
    [getAll.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.status = 'fulfilled';
      state.todos = action.payload;
    },
    [getAll.rejected]: setError,

    [addNewTodo.pending]: () => {
      console.log('addNewTodo: pending');
    },
    [addNewTodo.fulfilled]: (state, action) => {
      console.log('addNewTodo: fulfilled');
      state.status = 'fulfilled';
      state.todos = action.payload;
    },
    [addNewTodo.rejected]: (state, action) => {
      console.log('addNewTodo: rejected');
      state.status = 'rejected';
      state.error = action.payload;
    },
    [completedTodo.rejected]: setError,

    [removeTodoApi.rejected]: setError,
  },
});

export const {
  addTodo,
  toggleCompletedTodo,
  removeTodo,
  setChangeTodo,
  setChangeValue,
  allRemove,
  sendId,
  changeUserStorage,
} = todoSlice.actions;

export default todoSlice.reducer;
