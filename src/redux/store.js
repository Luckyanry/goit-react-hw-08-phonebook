import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import contactReducer from "./contacts/contactsReducer";
import authReducer, { authPersistConfig } from "./auth/authReducer";
// import contactReducer, {
//   contactsPersistConfig,
// } from "./contacts/contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactReducer),
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });
