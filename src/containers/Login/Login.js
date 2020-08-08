import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authOperations } from "../../redux/auth";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form className="Login-form" onSubmit={this.handleSubmit}>
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
          <button>LogIn</button>
          <p>
            If you have not yet account, please{" "}
            <NavLink to="/register">register</NavLink>
          </p>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
