class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
  }

  isAuthenticated() {
    return window.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  getProfile() {
    return window.gapi.auth2.getAuthInstance().currentUser.get();
  }

  logout() {
    return window.gapi.auth2.getAuthInstance().signOut();
  }
}
export default Auth;
