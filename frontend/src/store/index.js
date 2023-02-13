import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./slice/userSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "user",
  // sessionStorage에 저장합니다.
  storage: sessionStorage,
  // reducer 중에 userReducer만 sessionStorage 에 저장합니다.
  whitelist: ["userReducer"],
  // blacklist -> 그것만 제외합니다
};

const persistedReducer = persistReducer(
  persistConfig,
  userReducer
);

export const store = configureStore({
  reducer: {
    user: userReducer,
    persistedUser: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }).concat(logger),
});
