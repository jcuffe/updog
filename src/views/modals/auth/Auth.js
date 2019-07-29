import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { largeModalStyle } from "../../../styles/modals"
import { hideModal } from "../../../state/actions"
import SocialLogin from "./SocialLogin"
import ReactModal from "react-modal"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  return (
    <ReactModal
      isOpen={modal.showModal && modal.component == "auth"}
      onRequestClose={() => dispatch(hideModal)}
      className={`${largeModalStyle}`}
    >
      <SocialLogin isLogin={true}>
        <SocialLogin.Button provider="google" />
        <SocialLogin.Button provider="facebook" />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <SocialLogin.Button provider="email" disabled />
      </SocialLogin>
    </ReactModal>
  )
}

export default Auth
