import React from "react";
import { authSelectors, authOperations } from "../../redux/auth";
import "./UserMenu.css";

const UserMenu = ({
  avatar = "https://i.ibb.co/Hg0JGFY/avatarko-anonim.jpg",
  email,
  onLogout,
}) => {
  return (
    <div className="avatar-wrapper">
      <div className="account-avatar">
        <img
          className="avatar avatar--hover"
          src={avatar}
          alt="User avatar"
          width="44"
          height="44"
        />
      </div>
      <span className="account-title">Welcome, {email}</span>
      <button className="logout-btn" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
