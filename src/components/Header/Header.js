import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Header.css";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
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
          {/* <NavLink to="/contacts"> */}
          <UserMenu />
          {/* </NavLink> */}
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

export default Header;
