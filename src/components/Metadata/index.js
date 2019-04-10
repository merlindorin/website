import React       from "react"
import PropTypes   from "prop-types"
import { Link }    from "gatsby"

import Wrapper     from "./Wrapper"
import Author      from "./Author"
import Published   from "./Published"
import PublishDate from "./PublishDate"

import Avatar      from "../Avatar"
import styled      from "styled-components"
import ReadingTime from "./ReadingTime"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #014fb0;
`

const Metadata = (
  {
    path,
    time,
    img,
    firstname,
    lastname,
    published,
  },
) => (
  <Wrapper>
    <Author>Posted by
      <StyledLink to={path}>
        <Avatar {...img} />
        {firstname}&nbsp;{lastname}
      </StyledLink>
      <Published>
        &nbsp;on&nbsp;
        <PublishDate dateTime={published}>{published}</PublishDate>
      </Published>
      <ReadingTime duration={time}/>
    </Author>
  </Wrapper>
)

Metadata.propTypes = {
  path: PropTypes.string.isRequired,
  img: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }),
  time: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
}

export default Metadata
