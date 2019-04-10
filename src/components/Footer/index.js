import React from "react"

import Social from "../Social"
import Bullet from "../Bullet"

import Copyleft      from "./Copyleft"
import Disclaimer    from "./Disclaimer"
import PublishedWith from "./PublishedWith"
import Footer        from "./Footer"
import CopyleftIcon  from "./CopyleftIcon"
import HeartIcon     from "./HeartIcon"


export default ({ social: { github, linkedin, medium, instagram, twitter } }) => (
  <Footer>
    <Copyleft>
      <Disclaimer>
        MIT Licence <CopyleftIcon/> Romain DARY {new Date().getFullYear()}&nbsp;<Bullet>•</Bullet>&nbsp;Made
        With <HeartIcon/>
      </Disclaimer>
      <PublishedWith>Published with Gatsby.</PublishedWith>
    </Copyleft>
    <Social
      github={github}
      linkedin={linkedin}
      instagram={instagram}
      medium={medium}
      twitter={twitter}
    />
  </Footer>
)
