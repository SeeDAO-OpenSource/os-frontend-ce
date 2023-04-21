import EventEmitter from "events"
import auth0 from "auth0-js"
import config from "../../config.json"

const userlogin = "islogged"
const loginExpiryKey = "tokenExpiry"
const Userinfo = "userinfo"
const localStorageKey = "loggedIn"
const auth1 = new auth0.WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  responseType: "id_token",
  redirectUri: window.location.origin + process.env.BASE_URL + "callback",
  scope: "openid profile" // define the scopes you want to use
})

class Auth extends EventEmitter {
  authToken = null
  userProfile = null
  tokenExpiry = null
  // Login With Firebase
  localLogin(authResult) {
    this.tokenExpiry = new Date()
    localStorage.setItem(loginExpiryKey, this.tokenExpiry)
    localStorage.setItem(userlogin, "true")
    localStorage.setItem(
      Userinfo,
      JSON.stringify({
        displayName: authResult.user.displayName,
        email: authResult.user.email,
        photoURL: authResult.user.photoURL
      })
    )
  }

  Logout() {
    localStorage.removeItem(loginExpiryKey)
    localStorage.removeItem(userlogin)
    localStorage.removeItem(Userinfo)
  }

  isAuthenticated() {
    return (
      new Date(Date.now()) !== new Date(localStorage.getItem(loginExpiryKey)) &&
      localStorage.getItem(userlogin) === "true"
    )
  }

  // login with Auth0
  login() {
    auth1.authorize()
  }

  // Handle Auth0 Callback
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      auth1.parseHash((err, authResult) => {
        if (authResult.idToken) {
          this.localAuthLogin(authResult)
          resolve(authResult)
        } else if (err) {
          return reject(err)
        }
      })
    })
  }

  localAuthLogin(authResult) {
    this.idToken = authResult.idToken
    this.userProfile = authResult.idTokenPayload
    this.tokenExpiry = new Date(this.userProfile.exp * 1000)
    localStorage.setItem(loginExpiryKey, this.tokenExpiry)
    localStorage.setItem(localStorageKey, "true")
    localStorage.setItem(
      Userinfo,
      JSON.stringify({
        displayName: this.userProfile.name,
        email: this.userProfile.email,
        photoURL: this.userProfile.picture,
        providerId: this.userProfile.sub.substr(
          0,
          this.userProfile.sub.indexOf("|")
        ),
        uid: this.userProfile.sub
      })
    )
  }

  logOut() {
    localStorage.removeItem(localStorageKey)
    localStorage.removeItem(loginExpiryKey)
    localStorage.removeItem(Userinfo)
    this.idToken = null
    this.tokenExpiry = null
    this.profile = null
    auth1.logout({
      returnTo: window.location.origin + process.env.BASE_URL
    })
  }

  isAuthenticatedUser() {
    return (
      new Date(Date.now()) < new Date(localStorage.getItem(loginExpiryKey)) &&
      localStorage.getItem(localStorageKey) === "true"
    )
  }
}

export default new Auth()
