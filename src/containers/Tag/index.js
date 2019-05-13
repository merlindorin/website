import React     from "react"
import PropTypes from "prop-types"

import Html   from "../../components/PostContent"
import H1     from "../../components/H1"
import Avatar from "../../components/Avatar"

const TagPage = ({ title, description, image }) => (
  <>
    <H1 capitalize>{title}</H1>
    <Html content={description}/>
  </>
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
