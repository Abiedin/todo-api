import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

export const getAll = createAsyncThunk(
  "postN/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response) {
        throw new Error("Can/t delete post. Server error.");
      }

      console.log(response.data);

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
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (!response) {
        throw new Error("Can/t add post. Server error.");
      }
      dispatch(deletePost(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "postN/addNewPost",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const newTodo = {
        id: v4(),
        title: text,
        userId: 1,
        body: "Loream ipson",
      };
      console.log("text =", text);
      console.log("newTodo =", newTodo);
      dispatch(adddPost(newTodo));

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );
      if (!response) {
        throw new Error("Can/t add post. Server error.");
      }

      /*const data = await response.json();
      console.log("data =", data);
      dispatch(adddPost(data));*/
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

const postSlice = createSlice({
  name: "postN",
  initialState: {
    postsArr: [],
  },
  reducers: {
    deletePost: (state, action) => {
      state.postsArr = state.postsArr.filter(
        (post) => post.id !== action.payload
      );
    },
    adddPost: (state, action) => {
      state.postsArr.push(action.payload);
    },
    allRemove: (state) => {
      state.postsArr = [];
    },
  },
  extraReducers: {
    //rejectWithValue - с помощью нее имеем доступ к эти всем методам - fulfilled, pending, rejected
    [getAll.pending]: (state) => {
      console.log("pending"); //метод вызывается тогда начинаю вызывать запрос фун-и getAll
      state.status = "loading";
      state.error = null;
    },
    [getAll.fulfilled]: (state, action) => {
      console.log("fulfilled"); //метод вызывается тогда когда наш запрос прошел успешно
      state.status = "fulfilled";
      state.postsArr = action.payload;
    },
    [getAll.rejected]: setError, //метод вызывается тогда когда есть какая-то ошибка
    //теперь есть доступ в функции getAll в любом месте приложения

    /*[addNewPost.pending]: (state) => {
      console.log("addNewPost: pending");
      state.status = "loading";
      state.error = null;
    },
    [addNewPost.fulfilled]: (state, action) => {
      console.log("addNewPost: fulfilled");
      state.status = "fulfilled";
      state.postsArr = action.payload;
    },*/

    [addNewPost.rejected]: setError,
    [removePost.rejected]: setError,
  },
});

export const { deletePost, valuePost, adddPost, allRemove } = postSlice.actions;

export default postSlice.reducer;
