import React from "react"

import Tag     from "./Tag"
import Tags    from "./Tags"
import TagLink from "./TagLink"


export default ({ tags = [] }) => (
  <section>
    <Tags>
      {tags.map((tag, k) => (
        <Tag><TagLink active={k === 0} to={`/tags/${tag.toLowerCase()}`} key={tag}>{tag}</TagLink></Tag>))}
    </Tags>
  </section>
)
