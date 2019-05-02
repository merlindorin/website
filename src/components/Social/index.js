import React  from "react"
import styled from "styled-components"

import TwitterIcon   from "../../svgs/twitter.svg"
import MediumIcon    from "../../svgs/medium.svg"
import GithubIcon    from "../../svgs/github.svg"
import LinkedinIcon  from "../../svgs/linkedin.svg"
import InstagramIcon from "../../svgs/instagram.svg"
import KeybaseIcon   from "../../svgs/keybase.svg"

const TwitterIconStyled = styled(TwitterIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`
const KeybaseStyled = styled(KeybaseIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`

const MediumIconStyled = styled(MediumIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`

const LinkedinIconStyled = styled(LinkedinIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`

const GithubIconStyled = styled(GithubIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`

const InstagramIconStyled = styled(InstagramIcon)`
  transition: none;
  fill: currentColor;
  stroke: none;
  width: 24px;
  height: 20px;
`

const Social = styled.section`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
`

const SocialLink = styled.a`
  display: block;
  margin-right: 15px;
  padding: 5px;
  color: #ccd1d9;
  
  span {
    text-indent:-9999px;
    font-size: 0;
    color: transparent; 
  }
`

export default ({ twitter, github, linkedin, instagram, medium, keybase, className }) => (
  <Social className={className}>
    {twitter
      ? <SocialLink title="twitter" href={twitter}><span>Twitter</span><TwitterIconStyled/></SocialLink>
      : null
    }
    {github
      ? <SocialLink title="github" href={github}><span>GitHub</span><GithubIconStyled/></SocialLink>
      : null
    }
    {linkedin
      ? <SocialLink title="linjedin" href={linkedin}><span>LinkedIn</span><LinkedinIconStyled/></SocialLink>
      : null
    }
    {instagram
      ? <SocialLink title="instagram" href={instagram}><span>Instagram</span><InstagramIconStyled/></SocialLink>
      : null
    }
    {medium
      ? <SocialLink title="medium" href={medium}><span>Medium</span><MediumIconStyled/></SocialLink>
      : null
    }
    {keybase
      ? <SocialLink title="keybase" href={keybase}><span>Keybase</span><KeybaseStyled/></SocialLink>
      : null
    }
  </Social>
)
