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


export default ({ social: { github, linkedin, medium, instagram, twitter, keybase } }) => (
  <Footer>
    <Copyright>
      <Disclaimer>
        <LicenceLink to="/licence">MIT Licence</LicenceLink> <CopyleftIcon/> Romain DARY {new Date().getFullYear()}&nbsp;<Bullet>•</Bullet>&nbsp;Made
        With <HeartIcon/> & <CoffeeIcon/>
      </Disclaimer>
      <PublishedWith href="https://www.gatsbyjs.org" target="_blank">Published with Gatsby.</PublishedWith>
    </Copyright>
    <Social
      github={github}
      linkedin={linkedin}
      instagram={instagram}
      medium={medium}
      twitter={twitter}
      keybase={keybase}
    />
  </Footer>
)
