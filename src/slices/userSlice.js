import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'userN/getUsers',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response) {
        throw new Error('Can/t get users. Server error.');
      }
      localStorage.setItem('users', JSON.stringify(response));
      return response.data;
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

const userSlice = createSlice({
  name: 'userN',
  initialState: {
    userArr: [],
    status: null,
    error: null,
    storLocalUser: [],
  },
  reducers: {
    changeUserStorage: (state, action) => {
      const getLocalS = JSON.parse(localStorage.getItem('users'));

     
      localStorage.setItem('users', JSON.stringify(getLocalS));
    },
    stateUser: (state, action) => {
      const arrA = JSON.parse(localStorage.getItem('users')).data;
      const arr = JSON.parse(localStorage.getItem('users')).data[
        action.payload - 1
      ];
     
    },
   
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      console.log('getUsers: pending');
      state.status = 'loading';
      state.error = null;
    },
   
    [getUsers.rejected]: setError,
  },
});

export const { allRemove, alskdm, changeUserStorage, stateUser } =
  userSlice.actions;

export default userSlice.reducer;
