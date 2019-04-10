import React     from "react"
import PropTypes from "prop-types"

import Html    from "../PostContent"
import H1      from "../H1"
import Section from "../Section"
import Avatar  from "../Avatar"

const TagPage = ({ title, description, image }) => (
  <Section>
    <Avatar {...image} />
    <H1 capitalize>{title}</H1>
    <Html content={description}/>
  </Section>
)

TagPage.propTypes = {
  image: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default TagPage
