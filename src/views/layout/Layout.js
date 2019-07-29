// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { LayoutWrapper, Header, Footer } from "../../styles/layout"
import { HeaderLink } from "../../styles/links"
import Spinner from "../../styles/spinner"
import { showModal } from "../../state/actions"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderLink to="/">Firefly</HeaderLink>

        <div style={{ float: "right" }}>
          <HeaderLink to="/search">
            <span role="img" aria-label="search">
              🔎
            </span>
          </HeaderLink>{" "}
          <HeaderAuth />
        </div>
      </Header>

      {children}

      <Footer>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </Footer>
    </LayoutWrapper>
  )
}

const HeaderAuth = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  if (auth.user) {
    return (
      <HeaderLink to={`/account`}>
        <span role="img" aria-label="account">
          👤
        </span>
      </HeaderLink>
    )
  }
  if (auth.isLoading) {
    return <Spinner />
  }
  return <button onClick={() => dispatch(showModal("auth"))}>Signup</button>
}

export default Layout
