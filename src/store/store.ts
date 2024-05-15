"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import colorModeReducer from "./colorModeReducer";
import todoReducer from "./todoReducer";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { WebStorage } from "redux-persist/lib/types";
import InProgressReducer from "./inProgressReducer";
import InDoneReducer from "./doneReducer";

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined";

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage("local");
}

const reducers = combineReducers({
  colorMode: colorModeReducer,
  todo: todoReducer,
  inProgress: InProgressReducer,
  done: InDoneReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: createPersistStorage(),
    whitelist: ["colorMode", "todo", "inProgress", "done"],
  },
  reducers
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
