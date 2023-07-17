import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  //   user: authSlice,
});

const secretKey =
  process.env.REACT_APP_SECRET_KEY ||
  "my-super-secret-key-which-is-very-long-so-that-it-will-be-hard-for-anyone-to-guess-it";

const persistConfig = {
  key: "google-chatbot",
  version: 1,
  storage,
  whitelist: ["user"],
  transforms: [
    encryptTransform({
      secretKey,
      onError: (error: any) => {
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
