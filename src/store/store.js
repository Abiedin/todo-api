import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import postSlice from "../slices/postSlice";
import userSlice from "../slices/userSlice";
import userExtraSlice from "../slices/user-etra/userExtraSlice"

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    postStore: postSlice,
    userStore: userSlice,
    userLocal: userSlice,
    extraStore: userExtraSlice,
  },
});
