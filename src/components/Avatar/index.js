import styled    from "styled-components"
import PropTypes from "prop-types"

const Avatar = styled.img`
  display: inline-block;
  margin: 0 9px 0 6px;
  vertical-align: -6px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height * 2}px;
`

Avatar.propTypes = {
  size: PropTypes.number,
  img: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }),
}

export default Avatar
