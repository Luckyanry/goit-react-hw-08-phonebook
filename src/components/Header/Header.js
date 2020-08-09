import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import UserMenu from "../UserMenu/UserMenu";
import "./Header.css";

const Header = ({ isAuthenticated }) => {
  return (
    <div className="Header">
      <AppBar position="static">
        <Toolbar>
          <NavLink
            exact
            to="/"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Registration
          </NavLink>

          {isAuthenticated && <UserMenu />}

          {/* <NavLink
            to="/contacts"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Contacts
          </NavLink> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
