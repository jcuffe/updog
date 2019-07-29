import Firebase from "firebase/app"
import ReactGA from "react-ga"

export const login = provider => dispatch => {
  dispatch({ type: "LOGIN" })

  ReactGA.event({
    category: "User",
    action: "Log in"
  })

  const providers = {
    google: new Firebase.auth.GoogleAuthProvider(),
    facebook: new Firebase.auth.FacebookAuthProvider()
  }

  Firebase.auth()
    .signInWithPopup(providers[provider])
    .then(user => dispatch(loginSuccess(user)))
    .catch(error => dispatch(loginFailure(error)))
}

export const logout = dispatch => {
  Firebase.auth().signOut()
  dispatch({ type: "LOGOUT" })
}

export const loginSuccess = user => ({ type: "LOGIN_SUCCESS", payload: user })
export const loginFailure = error => ({ type: "LOGIN_FAILURE", payload: error })

export const showModal = component => ({
  type: "SHOW_MODAL",
  payload: component
})
export const hideModal = { type: "HIDE_MODAL" }
