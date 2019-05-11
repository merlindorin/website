import React       from "react"
import { graphql } from "gatsby"
import UpVote      from "../components/UpVote"
import Index       from "./../containers/Index"

import PostEntry  from "../components/PostEntry"
import QuoteEntry from "../components/QuoteEntry"
import Entry      from "../components/Entry"
import SEO        from "../components/seo"
import styled     from "styled-components"

const StyledUpVote = styled(UpVote)`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const postEntries = (edges) => edges.map(edge => {
  if (edge.node.frontmatter.type === 'post') {
    return (
      <PostEntry
        key={edge.node.id}
        {...edge.node.frontmatter}
        {...edge.node.fields}
      />
    )
  }

  if (edge.node.frontmatter.type === 'quote') {
    return (
      <QuoteEntry author={edge.node.frontmatter.author} html={edge.node.html} />
    )
  }
})

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
      filter: { frontmatter: { type: {in: ["post", "quote"] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            type
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
