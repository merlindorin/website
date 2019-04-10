import React  from "react"
import styled from "styled-components"

const P = styled.p`
font-size: 18px;
line-height: 42px;
margin: 48px 0 0 0;
`;

export default ({ children }) => (
  <P>{children}...</P>
)
