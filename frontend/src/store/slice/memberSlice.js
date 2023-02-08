import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  pwd: null,
  name: null,
  nickname: null,
  gender: null,
  birthDay: null,
  pNumber: null,
  email: null,
};

export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    SIGN_UP: (state, action) => {
      state.id = action.payload[0];
      state.pwd = action.payload[1];
      state.name = action.payload[2];
      state.nickname = action.payload[3];
      state.gender = action.payload[4];
      state.birthDay = action.payload[5];
      state.pNumber = action.payload[6];
      state.email = action.payload[7];
    },
  },
});

export const { SIGN_UP } = memberSlice.actions;
export default memberSlice.reducer;
