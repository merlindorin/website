import React       from "react"
import { graphql } from "gatsby"
import UpVote      from "../components/UpVote"
import Index       from "./../containers/Index"

import PostEntry from "../components/PostEntry"
import SEO       from "../components/seo"
import styled    from "styled-components"

const StyledUpVote = styled(UpVote)`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const postEntries = (edges) => edges.map(edge => (
  <PostEntry
    key={edge.node.id}
    {...edge.node.frontmatter}
    {...edge.node.fields}
  />
))

export default res => (
  <>
    <SEO title="Welcome"/>
    <IndexPage {...res} />
  </>
)

const IndexPage = (
  {
    data: {
      githubData: { data: { repository: { issues: { edges: posts } } } },
      allMarkdownRemark: { edges },
    },
  },
) => (
  <Index>
    <StyledUpVote posts={posts}/>
    {postEntries(edges)}
  </Index>
)

export const pageQuery = graphql`
  query {
    githubData {
      data {
        repository {
          issues {
            edges {
              node {
                title
                body
                url
                labels {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
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
