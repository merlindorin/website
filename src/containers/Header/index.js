import React   from "react"
import styled  from "styled-components"

import LogoBox       from "./LogoBox"
import NavigationBox from "./NavigationBox"


const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  padding: 60px;
  justify-content: space-between;
  
  @media only screen and (max-width: 640px) {
    padding: 40px 0 80px 0;
  }
`;

export default (props) => (
  <HeaderBox {...props}>
    <LogoBox/>
    <NavigationBox/>
  </HeaderBox>
);
