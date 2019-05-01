import React  from "react"
import styled from "styled-components"

import Social from "../../components/Social"
import Bullet from "../../components/Bullet"

import Footer     from "./Footer"
import Copyright     from "./Copyright"
import Disclaimer    from "./Disclaimer"
import PublishedWith from "./PublishedWith"
import CopyleftIcon  from "./CopyleftIcon"
import HeartIcon     from "./HeartIcon"
import CoffeeIcon    from "./CoffeeIcon"
import LicenceLink   from "./LicenceLink"

const StyledFooter = styled(Footer)`
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`

const StyledSocial = styled(Social)`
  @media only screen and (max-width: 1024px) {
    padding: 40px 0;
    justify-content: center;
  }
`

const StyledBullet = styled(Bullet)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const Spliter = styled.div`
  display: inline-block;
  
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`

const StyledCopyright = styled(Copyright)`
  @media only screen and (max-width: 1024px) {
    flex: 1;
    text-align: center;
  }
`

export default ({ social: { github, linkedin, medium, instagram, twitter, keybase } }) => (
  <StyledFooter>
    <StyledCopyright>
      <Disclaimer>
        <LicenceLink to="/licence">MIT Licence</LicenceLink>
        <CopyleftIcon/> Romain DARY {new Date().getFullYear()}
        <StyledBullet/>
        <Spliter/>
        Made With <HeartIcon/> & <CoffeeIcon/>
      </Disclaimer>
      <PublishedWith href="https://www.gatsbyjs.org" target="_blank">Published with Gatsby.</PublishedWith>
    </StyledCopyright>
    <StyledSocial
      github={github}
      linkedin={linkedin}
      instagram={instagram}
      medium={medium}
      twitter={twitter}
      keybase={keybase}
    />
  </StyledFooter>
)
