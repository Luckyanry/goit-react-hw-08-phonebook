import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./Register.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("register");
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form className="Register-form" onSubmit={this.handleSubmit}>
          <input
            type="name"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button>Register</button>
          <p>
            If you have already an account, please{" "}
            <NavLink to="/login">logIn</NavLink>
          </p>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
