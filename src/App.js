import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home, Login, Register } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
