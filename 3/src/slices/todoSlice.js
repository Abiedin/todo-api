import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const responseTodo = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!responseTodo) {
        throw new Error("Can/t delete post. Server error.");
      }
      console.log(responseTodo);
      return responseTodo.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const completedTodo = createAsyncThunk(
  "todos/completedTodo",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const todo = getState().todo.todos.find((todo) => todo.id === id);
    console.log("todo123 =", todo);

    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          //method: "PATCH", //для обновлений
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      if (!response) {
        throw new Error("Can/t toggle status. Server error.");
      }

      dispatch(toggleCompletedTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodoApi = createAsyncThunk(
  "todos/removeTodoApi",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const responseTodo = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!responseTodo) {
        throw new Error("Can/t delete post. Server error.");
      }
      dispatch(removeTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const newPost = {
        title: text,
        userId: 1,
        completed: false,
      };

      console.log('newPost =', newPost)
      console.log('text =', text)

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (!response) {
        throw new Error("Can/t add post. Server error.");
      }
      
      const data = await response.json();
      console.log('data =', data)
      dispatch(addTodo(data));
     
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  console.log("rejected");
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    setChangeTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    setChangeValue: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.value;
        }
      });
    },
    addTodo: (state, action) => {
      alert("rrrrrrr")
      state.todos.push(action.payload)
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
    [getTodos.pending]: (state) => {
      console.log("pending");
      state.status = "loading";
      state.error = null;
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.status = "fulfilled";
      state.todos = action.payload;
    },
    [getTodos.rejected]: setError,


    [addNewTodo.pending]: (state) => {
      console.log("pending");
      state.status = "loading";
      state.error = null;
    },
    [addNewTodo.pending]: (state) => {
      console.log("pending");
      state.status = "loading";
      state.error = null;
    },
  
    [addNewTodo.rejected]: setError,

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
} = todoSlice.actions;

export default todoSlice.reducer;
