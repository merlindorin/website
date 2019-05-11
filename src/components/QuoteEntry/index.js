import styled from "styled-components"
import React  from "react"

import Entry from "../Entry"

const Quote = styled.div`
    font-family: "PT Serif","Times New Roman",serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 54px;
    color: #014fb0;
    text-align: center;
`

const Author = styled.div`
  font-size: 16px;
  color: grey;
`

export default ({ author, children }) => (
  <Entry>
    <Quote>“{children}”<Author>&mdash; {author}</Author>
    </Quote>
  </Entry>
)
