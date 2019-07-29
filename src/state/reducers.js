import { combineReducers } from "redux"

const authState = {
  isLoading: false,
  user: null,
  error: null
}

const auth = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoading: true }
    case "LOGIN_SUCCESS":
      return { isLoading: false, user: action.payload, error: null }
    case "LOGIN_ERROR":
      return { isLoading: false, user: null, error: action.payload }
    case "LOGOUT":
      return authState
    default:
      return state
  }
}

const modalState = {
  showModal: false,
  component: ""
}

const modal = (state = modalState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { showModal: true, component: action.payload }
    case "HIDE_MODAL":
      return modalState
    default:
      return state
  }
}

export default combineReducers({ auth, modal })
