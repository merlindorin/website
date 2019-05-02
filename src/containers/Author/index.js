import React     from "react"
import PropTypes from "prop-types"

import { fontSize as size } from "../../components/constants"

import PostEntry from "../../components/PostEntry"
import Social    from "../../components/Social"
import H1        from "../../components/H1"
import H2        from "../../components/H2"
import Next      from "../../components/Next"
import Avatar    from "../../components/Avatar"

import Info from "./Info"
import Url  from "./Url"
import Bio  from "./Bio"

const Entries = ({ entries }) => entries.map(entry => <PostEntry
  key={entry.frontmatter.title} {...entry.frontmatter} {...entry.fields} />)

const AuthorPage = (
  {
    avatar,
    firstname,
    lastname,
    bio,
    title,
    social = {},
    entries = [],
  },
) => {
  return (
    <>
      <Avatar alt={`${firstname} ${lastname}`} {...avatar} />
      <Info>
        <H2 size={size.EXTRA}>{title}</H2>
        <H1 size={size.DEFAULT}>{firstname} {lastname}</H1>
        <Url href={social.website}>{social.website}</Url>
        <Bio dangerouslySetInnerHTML={{ __html: bio }}/>
        <Social
          twitter={social.twitter}
          linkedin={social.linkedin}
          github={social.github}
          instagram={social.instagram}
          medium={social.medium}
          keybase={social.keybase}
        />
      </Info>
      <Next/>
      <Entries entries={entries}/>
    </>)
}

AuthorPage.propTypes = {
  avatar: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }),
  social: PropTypes.shape({
    website: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    medium: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
}

export default AuthorPage
