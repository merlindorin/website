import React                    from "react"
import { graphql, StaticQuery } from "gatsby"

import Title    from "../Title"
import Metadata from "../Metadata"
import Excerpt  from "../Excerpt"
import Tag      from "../Tag"
import Link     from "../Link"
import Entry    from "../Entry"

export default ({ readingTime, path, title, excerpt, date, tags = [] }) => <StaticQuery
  query={graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "romain-dary" }, type: { eq: "author"} }) {
        html
        frontmatter {
          path
          firstname
          lastname
          avatar {
            childImageSharp {
              resolutions(width: 24) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `}

  render={(
    {
      markdownRemark: {
        frontmatter: {
          path: authorPath,
          avatar,
          firstname,
          lastname,
        },
      },
    }) => (
    <Entry>
      {tags[0] ? (<Link to={`/tags/${tags[0].toLowerCase()}`} key={tags[0]}><Tag>{tags[0]}</Tag></Link>) : null}
      <Link to={path}><Title>{title}</Title></Link>
      <Metadata
        path={authorPath}
        img={avatar.childImageSharp.resolutions}
        firstname={firstname}
        lastname={lastname}
        published={date}
        time={readingTime.time}
      />
      <Excerpt>{excerpt}</Excerpt>
    </Entry>
  )}
/>
