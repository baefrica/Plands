import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  accessTime: null,
  refreshToken: null,
  id: null,
  pw: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOG_IN: (state, action) => {
      state.accessToken = action.payload[0];
      state.refreshToken = action.payload[1];
      state.id = action.payload[2];
      state.pw = action.payload[3];
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

export const { LOG_IN, LOG_OUT } = userSlice.actions;
export default userSlice.reducer;
