import React from "react"
import { graphql } from "gatsby"

import PostEntry from "../components/PostEntry"
import SEO       from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) =>
  edges.map(edge => (
    <PostEntry
      key={edge.node.id}
      {...edge.node.frontmatter}
      {...edge.node.fields}
    />
  ))

export default res => (
  <>
    <SEO title="Welcome" />
    <IndexPage {...res} />
  </>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            author
            excerpt
          }
          fields {
            readingTime {
              time
            }
          }
        }
      }
    }
  }
`
