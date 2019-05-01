import styled from "styled-components"
import React  from "react"

const Bullet = styled.span`
  font-size: 12px;
  display: inline-block;
  margin: 0 3px;
  vertical-align: 2px;
`

export default (props) => (
  <Bullet {...props}>•</Bullet>
)
