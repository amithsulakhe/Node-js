import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const appstore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default appstore;
