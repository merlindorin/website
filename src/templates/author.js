import React from "react"
import { graphql } from "gatsby"

import Author from "../components/Author"

export default function Template(all) {
  const { data, pageContext } = all
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { firstname, lastname, avatar, title, social } = frontmatter
  const {
    childImageSharp: { resolutions },
  } = avatar
  const { posts } = pageContext

  return (
    <Author
      bio={html}
      title={title}
      firstname={firstname}
      lastname={lastname}
      avatar={resolutions}
      social={social}
      entries={posts}
    />
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, type: { eq: "author" } }
    ) {
      html
      frontmatter {
        firstname
        lastname
        title
        social {
          website
          twitter
          linkedin
          github
          instagram
          medium
        }
        avatar {
          childImageSharp {
            resolutions(width: 96) {
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
`
