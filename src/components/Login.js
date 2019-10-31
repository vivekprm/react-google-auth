import React, { Component } from "react";

export default class Login extends Component {
  onSuccess(response) {
    console.log(`On Success: ${response}`);
  }
  onFailure(err) {
    console.log(err);
  }
  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    const signedIn = isAuthenticated();
    if (!signedIn) {
      window.gapi.signin2.render("google-signin", {
        scope: "profile email",
        width: 250,
        height: 50,
        ux_mode: "redirect",
        redirect_uri: "http://localhost:3000/",
        longtitle: false,
        theme: "dark",
        onsuccess: this.onSuccess,
        onfailure: this.onFailure
      });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <div id="google-signin"></div>
      </div>
    );
  }
}
