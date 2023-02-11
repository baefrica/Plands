import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  accessTime: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_TOKEN: (state, action) => {
      state.accessToken = action.payload[0];
      state.refreshToken = action.payload[1];
    },

    LOG_OUT: (state) => {
      alert("로그아웃됨");
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { LOGIN_TOKEN, LOG_OUT } = userSlice.actions;
export default userSlice.reducer;
