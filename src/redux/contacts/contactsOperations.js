import axios from "axios";
import contactsAction from "./contactsAction";

// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getContacts = () => async (dispatch) => {
  // const getContacts = () => async (dispatch, getState) => {
  // const {
  //   contacts: { token: persistedToken },
  // } = getState();

  // if (!persistedToken) {
  //   return;
  // }

  // token.set(persistedToken);
  dispatch(contactsAction.getContactsRequest());
  try {
    const result = await axios.get("/contacts");
    dispatch(contactsAction.getContactsSeccess(result.data));
  } catch (error) {
    dispatch(contactsAction.getContactsError(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  dispatch(contactsAction.addContactRequest());
  try {
    const result = await axios.post("/contacts", {
      name,
      number,
    });
    token.set(result.data.token);
    dispatch(contactsAction.addContactSeccess(result.data));
  } catch (error) {
    dispatch(contactsAction.addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(contactsAction.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    token.unset();
    dispatch(contactsAction.deleteContactSeccess(id));
  } catch (error) {
    dispatch(contactsAction.deleteContactError(error));
  }
};

export default {
  getContacts,
  addContact,
  deleteContact,
};
