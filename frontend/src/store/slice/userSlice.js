import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  accessTime: null,
  refreshToken: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_TOKEN: (state, action) => {
      state.accessToken = action.payload[0];
      state.refreshToken = action.payload[1];
      state.isLogin = true;

      console.log(action.payload);
    },

    LOG_OUT: (state) => {
      alert("로그아웃됨");
      state.accessToken = null;
      state.refreshToken = null;
      state.id = null;
      state.pw = null;
      state.isLogin = false;
    },
  },
});

export const { LOGIN_TOKEN, LOG_OUT } = userSlice.actions;
export default userSlice.reducer;
