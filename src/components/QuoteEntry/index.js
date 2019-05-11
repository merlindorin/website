import styled from "styled-components"
import React  from "react"

import Entry from "../Entry"

const Quote = styled.div`
  text-align: center;
  line-height: 54px;
  
  p {
    font-family: "PT Serif","Times New Roman",serif;
    font-size: 28px;
    font-weight: 700;
    color: #014fb0;
    
    &::before {
      content: "“ ";
    }
    &::after {
      content: " ”";
    }
    
  }
`

const Author = styled.div`
  font-size: 16px;
  color: grey;
`

export default ({ author, html }) => (
  <Entry>
    <Quote>
      <span dangerouslySetInnerHTML={{__html: html}} />
      <Author>&mdash; {author}</Author>
    </Quote>
  </Entry>
)
