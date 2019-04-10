import styled from "styled-components"

const sizeEnum = {
  small: 13,
  default: 20,
  big: 24,
}

export default styled.h3`
font-family: "PT Serif","Times New Roman",serif;
font-size: ${({size}) => sizeEnum[size] ? sizeEnum[size] : sizeEnum.default}px;
font-weight: 700;
position: relative;
margin: 0 0 38px 0;
color: #3b3c3f;
`
