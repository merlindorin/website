import React    from "react"
import styled   from "styled-components"
import { Link } from "gatsby"

import Logo from "../../svgs/rd-logo.svg"

const LogoBox = styled.div`
  width: 48px;
`;

const StyledLogo = styled(Logo)`
  fill: #ccd1db;
`

export default (props) => (
  <LogoBox {...props}>
    <Link title="homepage" to="/">
      <StyledLogo/>
    </Link>
  </LogoBox>
);
