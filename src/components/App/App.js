import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import Header from "../Header/Header";
// import routes from "../../routes";
import { authOperations } from "../../redux/auth";
import "./App.css";
import { Home, Login, Register, Contacts } from "../../containers";

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
            <PublicRoute path="/" exact component={Home} restricted={false} />
            <PublicRoute
              path="/login"
              exact
              component={Login}
              restricted={true}
            />
            <PublicRoute
              path="/register"
              component={Register}
              restricted={true}
            />
            <PrivateRoute path="/contacts" exact component={Contacts} />
            {/* {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))} */}
            {/* <Redirect to="/" /> */}
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

// {
//   routes.map((route) => <Route key={route.path} {...route} />);
// }
