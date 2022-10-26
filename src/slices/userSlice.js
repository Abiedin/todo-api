import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "userN/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response) {
        throw new Error("Can/t get users. Server error.");
      }
      console.log(response.data);
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
};

const userSlice = createSlice({
  name: "userN",
  initialState: {
    userArr: [],
    status: null,
    error: null,
  },
  reducers: {
    allRemove: (state) => {
      state.userArr = [];
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      console.log("getUsers: pending");
      state.status = "loading";
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log("getUsers: fulfilled");
      state.status = "fulfilled";
      state.userArr = action.payload;
    },
    [getUsers.rejected]: setError,
  }
});


export const { allRemove } = userSlice.actions;

export default userSlice.reducer;