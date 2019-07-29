import React, { createContext, useCallback, useContext, useState } from "react"
import { useDispatch } from "react-redux"
import {
  fbLoginStyle,
  googleLoginStyle,
  emailPasswordLoginStyle
} from "../../../styles/buttons"
import { socialLoginStyle } from "../../../styles/modals/auth"
import { FacebookIcon, GoogleIcon, EmailPasswordIcon } from "../../svg/Icons"
import { login, hideModal } from "../../../state/actions"

const SocialLoginContext = createContext(null)

const buttons = {
  google: { Icon: GoogleIcon, css: googleLoginStyle, name: "Google" },
  facebook: { Icon: FacebookIcon, css: fbLoginStyle, name: "Facebook" },
  email: {
    Icon: EmailPasswordIcon,
    css: emailPasswordLoginStyle,
    name: "email"
  }
}

const Button = props => {
  const { Icon, css, name } = buttons[props.provider]
  const { report, isLogin } = useContext(SocialLoginContext)
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(login(props.provider))
    dispatch(hideModal)
  }
  return (
    <button {...css} onClick={handleLogin}>
      <span ref={report}>
        <Icon />
        {isLogin ? "Log in" : "Sign up"} with {name}
      </span>
    </button>
  )
}

const SocialLogin = ({ children, isLogin }) => {
  const [longestChild, setLongestChild] = useState(0)
  const report = useCallback(
    ref => {
      if (ref) {
        if (ref.offsetWidth > longestChild) {
          setLongestChild(ref.offsetWidth)
        }
        const offset = (ref.offsetWidth - longestChild) / 2
        ref.style = `left: ${offset}px`
      }
    },
    [longestChild]
  )
  return (
    <SocialLoginContext.Provider value={{ report, isLogin }}>
      <div className={`${socialLoginStyle}`}>{children}</div>
    </SocialLoginContext.Provider>
  )
}

SocialLogin.Button = Button

export default SocialLogin
