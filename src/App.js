import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import { authOperations } from "./redux/auth";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);

/* <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Redirect to="/" />
</Switch> */
