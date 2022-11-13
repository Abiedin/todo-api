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

      for (let i = 0; i < getLocalS.data.length; i++) {
        if (getLocalS.data[i].id == action.payload.id) {
          getLocalS.data[i].name = action.payload.lastName;
          getLocalS.data[i].email = action.payload.email;
          getLocalS.data[i].phone = action.payload.phone;
          getLocalS.data[i].company.name = action.payload.companyName;
          getLocalS.data[i].company.catchPhrase = action.payload.specialization;
          getLocalS.data[i].website = action.payload.website;
          getLocalS.data[i].company.bs = action.payload.tagline;
          getLocalS.data[i].address.city = action.payload.city;
          getLocalS.data[i].address.street = action.payload.street;

          state.storLocalUser = getLocalS.data[i];
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
    allRemove: (state) => {
      state.userArr = [];
      localStorage.clear();
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      console.log('getUsers: pending');
      state.status = 'loading';
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log('getUsers: fulfilled');
      state.status = 'fulfilled';
      state.userArr = action.payload;
    },
    [getUsers.rejected]: setError,
  },
});

export const { allRemove, alskdm, changeUserStorage, stateUser } =
  userSlice.actions;

export default userSlice.reducer;
