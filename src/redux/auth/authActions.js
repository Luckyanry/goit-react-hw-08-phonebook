import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("@auth/registerRequest");
const registerSeccess = createAction("@auth/registerSeccess");
const registerError = createAction("@auth/registerError");

const loginRequest = createAction("@auth/loginRequest");
const loginSeccess = createAction("@auth/loginSeccess");
const loginError = createAction("@auth/loginError");

const logoutRequest = createAction("@auth/logoutRequest");
const logoutSeccess = createAction("@auth/logoutSeccess");
const logoutError = createAction("@auth/logoutError");

const getCurrentContactsRequest = createAction(
  "@auth/getCurrentContactsRequest"
);
const getCurrentContactsSeccess = createAction(
  "@auth/getCurrentContactsSeccess"
);
const getCurrentContactsError = createAction("@auth/getCurrentContactsError");

export default {
  registerRequest,
  loginRequest,
  logoutRequest,
  getCurrentContactsRequest,
  registerError,
  loginError,
  logoutError,
  getCurrentContactsError,
  registerSeccess,
  loginSeccess,
  logoutSeccess,
  getCurrentContactsSeccess,
};
