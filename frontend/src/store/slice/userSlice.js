import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  accessTime: null,
  refreshToken: null,
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
      state.accessToken = null;
      state.refreshToken = null;
    },

    WITH_DRAW: (state) => {
      alert("회원 탈퇴");
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { LOGIN_TOKEN, LOG_OUT, WITH_DRAW } =
  userSlice.actions;
export default userSlice.reducer;
