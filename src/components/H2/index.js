import styled from "styled-components"

const sizeEnum = {
  small: 14,
  default: 22,
  big: 28,
  extra: 54,
}

export default styled.h2`
font-family: "PT Serif","Times New Roman",serif;
font-size: ${({size}) => sizeEnum[size] ? sizeEnum[size] : sizeEnum.default}px;
font-weight: 700;
line-height: 54px;
position: relative;
margin: 0 0 38px 0;
color: #1b1c1f;
`
