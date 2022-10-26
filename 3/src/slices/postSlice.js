import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "postN/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      
      if (!response) {
        throw new Error('Can/t delete post. Server error.')
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removePost = createAsyncThunk(
  "postN/removePost",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      console.log(response)
      dispatch(deletePost(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "postN/getPosts",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const newPost = {
        title: text,
        userId: 1,
        completed: false,
      };

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (!response) {
        throw new Error("Can/t add post. Server error.");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  console.log("rejected");
  state.status = "rejected";
  state.error = action.payload;
}

const postSlice = createSlice({
  name: "postN",
  initialState: {
    postsArr: [],
  },
  reducers: {
    deletePost: (state, action) => {
      state.postsArr = state.postsArr.filter((post) => post.id !== action.payload);
    },
    valuePost: (state, action) => {
     
    },
    adddPost: (state, action) => {
      state.postsArr.push(action.payload)
    },
  },
  extraReducers: {
    //rejectWithValue - с помощью нее имеем доступ к эти всем методам - fulfilled, pending, rejected
    [getPosts.pending]: (state) => {
      console.log("pending"); //метод вызывается тогда начинаю вызывать запрос фун-и getPosts
      state.status = "loading";
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      console.log("fulfilled"); //метод вызывается тогда когда наш запрос прошел успешно
      state.status = "fulfilled";
      state.postsArr = action.payload;
    },
    [getPosts.rejected]: setError, //метод вызывается тогда когда есть какая-то ошибка
    //теперь есть доступ в функции getPosts в любом месте приложения
    [removePost.fulfilled]: (state, action) => {
      console.log("fulfilled"); //метод вызывается тогда когда наш запрос прошел успешно
      state.status = "fulfilled";
      state.postsArr = action.payload;
    },
    [removePost.rejected]: setError,
  },
});

export const { deletePost, valuePost, adddPost } = postSlice.actions;

export default postSlice.reducer;
