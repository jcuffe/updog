import styled from "styled-components"
import { Link } from "react-router-dom"

import colors from "./colors"

export const InternalLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`
export const HeaderLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.2rem;
`
