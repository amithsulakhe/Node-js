import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = userReducer.actions;
export default userReducer.reducer;
