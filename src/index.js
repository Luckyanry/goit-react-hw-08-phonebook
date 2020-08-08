import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import ContactsApp from "./components/ContactsApp/ContactsApp";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ContactsApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
