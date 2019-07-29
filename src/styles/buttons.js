import styled from "styled-components"
import { css, merge } from "glamor"

export const Button = styled.button`
  &::before {
    content: "${props => props.text}";
  }
`

const loginStyle = css({
  display: "flex",
  justifyContent: "center",
  padding: 8,
  width: "100%",
  fontWeight: 700,
  "& svg": { marginRight: 10, height: 25 },
  "& span": { position: "relative", display: "flex", alignItems: "center" }
})

export const fbLoginStyle = merge(
  loginStyle,
  css({
    border: 0,
    borderRadius: 5,
    backgroundColor: "#3A559F",
    color: "#FFF",
    "& svg": {
      enableBackground: "new 1 1 454 454",
      borderRadius: 2,
      "& path": { fill: "#FFF" }
    }
  })
)

export const googleLoginStyle = merge(
  loginStyle,
  css({
    backgroundColor: "#FFF",
    border: "1px solid black",
    "& svg": {
      enableBackground: "new 0 0 512 512"
    }
  })
)

export const emailPasswordLoginStyle = merge(
  loginStyle,
  css({
    backgroundColor: "orange",
    padding: 6,
    color: "#FFF",
    "& svg": { height: 29 }
  })
)
