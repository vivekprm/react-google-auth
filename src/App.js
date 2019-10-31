import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {
  constructor(props) {
    super(props);
    let authObj = new Auth(this.props.history);
    this.state = {
      auth: authObj,
      authLoadComplete: false
    };
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "763740455354-9aojlgqpamco9555g36vpkl06q9ngatc.apps.googleusercontent.com"
        })
        .then(() => {
          this.setState({
            authLoadComplete: true
          });
        });
    });
  }
  render() {
    const { auth } = this.state;
    if (!this.state.authLoadComplete) return "Loading...";
    return (
      <>
        <Route render={props => <Nav auth={auth} {...props} />} />
        <div className="container-fluid">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home auth={auth} {...props} />}
            />
            <Route
              path="/profile"
              render={props => <Profile auth={auth} {...props} />}
            />
            <Route
              path="/login"
              render={props => <Login auth={auth} {...props} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
