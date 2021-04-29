import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  posts: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { login, logout, getPosts, getComments } = UserSlice.actions;
export default UserSlice.reducer;
