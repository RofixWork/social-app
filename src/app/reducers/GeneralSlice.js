import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: false,
  signin: false,
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    openModel: (state) => {
      state.model = true;
    },
    closeModel: (state) => {
      state.model = false;
    },
    toggleSign: (state) => {
      state.signin = !state.signin;
    },
  },
});

export const { openModel, closeModel, toggleSign } = GeneralSlice.actions;

export default GeneralSlice.reducer;
