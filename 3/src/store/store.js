import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import postSlice from "../slices/postSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    postStore: postSlice,
  },
});
