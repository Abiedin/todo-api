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

      //const modifiedData =
      response.data.map((item) => {
        item.password = '';
        return item;
        //return {...item, pass:'', confPass: ''}
      });

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

      //const items = getLocalS.data.find((element) => element.id == action.payload.id)

      for (let i = 0; i < getLocalS.data.length; i++) {
        if (getLocalS.data[i].id == action.payload.id) {

          getLocalS.data[i] = action.payload;

          state.storLocalUser = action.payload;
        }
      }
      localStorage.setItem('users', JSON.stringify(getLocalS));
    },
    stateUser: (state, action) => {
      const arrA = JSON.parse(localStorage.getItem('users')).data;
      const arr = JSON.parse(localStorage.getItem('users')).data[
        action.payload - 1
      ];
      state.storLocalUser = arr;
      state.userArr = arrA;
    },
    removeAll: (state) => {
      state.userArr = [];
      localStorage.clear();
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.userArr = action.payload;
    },
    [getUsers.rejected]: setError,
  },
});

export const { removeAll, alskdm, changeUserStorage, stateUser } =
  userSlice.actions;

export default userSlice.reducer;
