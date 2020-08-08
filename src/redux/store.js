import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contacts/contactsReducer";
import authReducer from "./auth/authReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
