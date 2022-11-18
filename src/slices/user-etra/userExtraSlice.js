import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserAlboms = createAsyncThunk(
  'userExtra/getUserAlboms',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const responseAlbom = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1/albums'
      );

      if (!responseAlbom) {
        throw new Error('Can/t get users. Server error.');
      }
      return responseAlbom.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserTodos = createAsyncThunk(
  'userExtra/getUserTodos',
  async (_, { rejectWithValue }) => {
    try {
      const responseTodo = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1/todos'
      );

      if (!responseTodo) {
        throw new Error('Can/t get users. Server error.');
      }
      return responseTodo.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  'userExtra/getUserPosts',
  async (_, { rejectWithValue }) => {
    try {
      const responsePost = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1/posts'
      );

      if (!responsePost) {
        throw new Error('Can/t get users. Server error.');
      }
      return responsePost.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const setError = (state, action) => {
  console.log('rejected');
  state.status = 'rejected';
  state.error = action.payload;
};

const userExtraSlice = createSlice({
  name: 'userExtra',
  initialState: {
    extraAlboms: [],
    extraTodos: [],
    extraPosts: [],
  },
  reducers: {
    extraApiAlbom: (state, action) => {
      const title = state.extraAlboms.find((title) => title.id == action.payload)
      state.extraAlboms = title;
    },
    extraApiTodo: (state, action) => {
      const title = state.extraTodos.find((title) => title.id == action.payload)
      state.extraTodos = title;
    }, 
    extraApiPost: (state, action) => {
      const title = state.extraPosts.find((title) => title.id == action.payload)
      state.extraPosts = title;
    },
  },
  extraReducers: {
    [getUserAlboms.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getUserAlboms.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.extraAlboms = action.payload;
    },
    [getUserAlboms.rejected]: setError,
    
    [getUserTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getUserTodos.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.extraTodos = action.payload;
    },
    [getUserTodos.rejected]: setError,
    
    [getUserPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getUserPosts.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.extraPosts = action.payload;
    },
    [getUserPosts.rejected]: setError,
  },
});

export const { extraApiAlbom, extraApiTodo, extraApiPost } = userExtraSlice.actions;

export default userExtraSlice.reducer;
