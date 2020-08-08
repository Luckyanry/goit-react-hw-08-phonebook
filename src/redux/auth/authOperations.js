import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "http://localhost:2000";

const token = {};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const result = await axios.post("/contacts/signup", credentials);
    console.log("register result :>> ", result);
    token.set(result.data.token);
    dispatch(authActions.registerSeccess(result.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const result = await axios.post("/contacts/login", credentials);
    token.set(result.data.token);
    dispatch(authActions.loginSeccess(result.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logOut = (credentials) => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    const result = await axios.post("/contacts/logout");
    dispatch(authActions.logoutSeccess(result.data));
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

const getCurrentContact = (credentials) => async (dispatch) => {
  dispatch(authActions.getCurrentContactsRequest());
  try {
    const result = await axios.get("/contacts");
    dispatch(authActions.getCurrentContactsSeccess(result.data));
  } catch (error) {
    dispatch(authActions.getCurrentContactsError(error));
  }
};

export default { register, logIn, logOut, getCurrentContact };
