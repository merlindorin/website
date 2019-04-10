import styled from "styled-components"

const sizeEnum = {
  small: 16,
  default: 24,
  big: 32,
}

export const size = Object.keys(sizeEnum)

export default styled.h1`
  font-family: "Muli","Arial",sans-serif;
  font-size: ${({ size }) => sizeEnum[size] ? sizeEnum[size] : sizeEnum.default}px;
  font-weight: 700;
  margin: 0 0 16px;
  color: #18191c;
  text-transform: ${({ capitalize }) => capitalize ? "capitalize" : "none"};
`
