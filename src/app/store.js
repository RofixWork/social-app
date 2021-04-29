import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/GeneralSlice";
import userReducer from "./reducers/UserSlice";
export const store = configureStore({
  reducer: {
    general: generalReducer,
    user: userReducer,
  },
});
