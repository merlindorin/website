import React from "react"
import { graphql } from "gatsby"

import TagPage from "../components/TagPage"
import PostEntry from "../components/PostEntry"
import Layout from "../components/Layout"

const Entries = ({ entries }) => {
  return entries.map(entry => (
    <PostEntry key={entry.id} {...entry.frontmatter} {...entry.fields} />
  ))
}

export default function Template(all) {
  const { data, pageContext } = all
  const entries = pageContext.posts
  const { markdownRemark } = data

  let title = markdownRemark
    ? markdownRemark.frontmatter.title
    : pageContext.tag
  let html = markdownRemark ? markdownRemark.html : ""
  let resolutions = markdownRemark
    ? markdownRemark.frontmatter.icon.childImageSharp.resolutions
    : null

  return (
    <Layout>
      <TagPage
        title={title}
        description={html}
        entries={entries}
        image={resolutions}
      />
      <Entries entries={entries} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, type: { eq: "tag" } }) {
      html
      frontmatter {
        title
        icon {
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
