import React     from "react"
import PropTypes from "prop-types"

import { fontSize as size } from "../constants"

import Layout    from "../Layout"
import PostEntry from "../PostEntry"
import Social    from "../Social"
import H1        from "../H1"
import H2        from "../H2"
import Next      from "../Next"
import Avatar    from "../Avatar"

import Section from "./Section"
import Info    from "./Info"
import Url     from "./Url"
import Bio     from "./Bio"

const Entries = ({ entries }) => entries.map(entry => <PostEntry key={entry.frontmatter.title} {...entry.frontmatter}  {...entry.fields} />)

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
    <Layout>
      <Section>
        <Avatar {...avatar}/>
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
          />
        </Info>
      </Section>
      <Next/>
      <Entries entries={entries}/>
    </Layout>)
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
