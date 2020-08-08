import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialContactState = { name: null, email: null };

const contact = createReducer(initialContactState, {
  [authActions.registerSeccess]: (_, { payload }) => payload.contact,
  [authActions.loginSeccess]: (_, { payload }) => payload.contact,
  [authActions.logoutSeccess]: () => initialContactState,
  [authActions.getCurrentContactsSeccess]: (_, { payload }) => payload.contact,
});

const token = createReducer(null, {
  [authActions.registerSeccess]: (_, { payload }) => payload.token,
  [authActions.loginSeccess]: (_, { payload }) => payload.token,
  [authActions.logoutSeccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentContactsError]: (_, { payload }) => payload,
});

export default combineReducers({
  contact,
  token,
  error,
});
