import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)`
  display: block;
  padding: 13px 26px;
  text-decoration: none;
  border-radius: 40px;
  color: ${({ active }) => active ? "#fff" : "#373839"};
  background: ${({ active }) => active ? "#014fb0" : "#f4f6f8"};
`
