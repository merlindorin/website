import React from "react"
import styled from "styled-components"

import Tag     from "./Tag"
import Tags    from "./Tags"
import TagLink from "./TagLink"

const Section = styled.section`
  margin-top: 80px;
`

export default ({ tags = [] }) => (
  <Section>
    <Tags>
      {tags.map((tag, k) => (
        <Tag><TagLink active={k === 0} to={`/tags/${tag.toLowerCase()}`} key={tag}>{tag}</TagLink></Tag>))}
    </Tags>
  </Section>
)
