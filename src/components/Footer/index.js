import React from "react"

import Social from "../Social"
import Bullet from "../Bullet"

import Copyright     from "./Copyright"
import Disclaimer    from "./Disclaimer"
import PublishedWith from "./PublishedWith"
import Footer        from "./Footer"
import CopyleftIcon  from "./CopyleftIcon"
import HeartIcon     from "./HeartIcon"
import CoffeeIcon    from "./CoffeeIcon"
import LicenceLink   from "./LicenceLink"
import styled        from "styled-components"

const StyledSocial = styled(Social)`
  align-content: center;
  
  @media only screen and (max-width: 640px) {
    padding: 40px 0;
    width: 100%;
    justify-content: center;
  }
`;

const StyledBullet = styled(Bullet)`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Col = styled.div`
  display: inline-block;
  
  @media only screen and (max-width: 640px) {
    display: block
  }
`


export default ({ social: { github, linkedin, medium, instagram, twitter, keybase } }) => (
  <Footer>
    <Copyright>
      <Disclaimer>
        <Col><LicenceLink to="/licence">MIT Licence</LicenceLink> <CopyleftIcon/> Romain DARY {new Date().getFullYear()} <StyledBullet>•</StyledBullet></Col>
        <Col>Made With <HeartIcon/> & <CoffeeIcon/></Col>
      </Disclaimer>
      <PublishedWith href="https://www.gatsbyjs.org" target="_blank">Published with Gatsby.</PublishedWith>
    </Copyright>
    <StyledSocial
      github={github}
      linkedin={linkedin}
      instagram={instagram}
      medium={medium}
      twitter={twitter}
      keybase={keybase}
    />
  </Footer>
)
