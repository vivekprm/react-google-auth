import React, { Component } from "react";
import { NavLink } from "react-router-dom";
let brandImg = require("../images/home.png");

export default class Nav extends Component {
  render() {
    const props = this.props;
    const { isAuthenticated, logout } = this.props.auth;
    function logoutHandler() {
      logout()
        .then(res => {
          console.log(res);
          props.history.push("/");
        })
        .catch(err => console.log(err));
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={brandImg} alt="brand" width="30" height="30" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {isAuthenticated() ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              {isAuthenticated() ? (
                <a href="#" className="nav-link" onClick={logoutHandler}>
                  Logout
                </a>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
