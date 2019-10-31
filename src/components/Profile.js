import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profileLoaded: false
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.profile = this.props.auth.getProfile();
      this.setState({
        profileLoaded: true
      });
      console.log(this.profile);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    if (!this.state.profileLoaded) {
      return "Loading...";
    }
    return (
      <>
        <h1>Profile</h1>
        <p>{this.profile.w3.ig}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={this.profile.w3.Paa}
          alt="profile-pic"
        />
        <pre>{JSON.stringify(this.profile, null, 2)}</pre>
      </>
    );
  }
}
