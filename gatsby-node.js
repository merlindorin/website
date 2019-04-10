/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

/**
 * @param createPage
 * @param graphql
 * @return {*}
 */
const createPostPage = (createPage, graphql) => {
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  return getPosts(graphql)
    .then(posts => posts
      .map(post => createPage({
          path: post.frontmatter.path,
          component: blogPostTemplate,
        }),
      ),
    )
}

/**
 * @param graphql
 * @return {*}
 */
const getTags = (graphql) => {
  return graphql(`
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { type: { eq: "tag"} } }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  slug
                  title
                  excerpt
                }
              }
            }
          }
        }
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node),
    )
    .then(tags => tags.map(tag => tag.frontmatter))
}

/**
 * @param graphql
 * @return {*}
 */
const getPostTags = (graphql) => {
  const tags = []

  return graphql(`
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { type: { eq: "post"} } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.tags.forEach(tag => tags.includes(tag.toLowerCase()) ? null : tags.push(tag.toLowerCase()))),
    )
    .then(() => tags)
}

/**
 * @param graphql
 * @return {*}
 */
const getPosts = (graphql) => {
  return graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: { frontmatter: { type: { eq: "post"} } }
          ) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  author
                  tags
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
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node),
    )
}

/**
 * @param tag
 * @param graphql
 * @return {*}
 */
const getTagPosts = (tag, graphql) => {
  return graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: { frontmatter: { type: { eq: "post"} tags: { in: ["${tag}"] } } }
        ) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  excerpt
                  author
                  tags
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
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node),
    )
}

/**
 * @param createPage
 * @param graphql
 * @return {*}
 */
const createTagPage = (createPage, graphql) => {
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  return getPostTags(graphql)
    .then(tags => Promise
      .all(tags
        .map(tag => getTagPosts(tag, graphql)
          .then(posts => createPage({
              path: `/tags/${tag}`,
              component: tagTemplate,
              context: { posts, tag },
            }),
          ),
        ),
      ),
    )
}

/**
 * @param author
 * @param graphql
 * @return {*}
 */
const getAuthorPosts = (author, graphql) => {
  return graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: { frontmatter: { type: { eq: "post"} author: { eq: "${author}"} } }
        ) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  path
                  title
                  excerpt
                  author
                  tags
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
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node),
    )
}

/**
 * @param graphql
 * @return {*}
 */
const getAuthors = (graphql) => {
  return graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            filter: { frontmatter: { type: { eq: "author"} } }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  slug
                }
              }
            }
          }
        }
      `)
    .then(res => res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.map(edge => edge.node),
    )
}

/**
 * @param createPage
 * @param graphql
 * @return {*}
 */
const createAuthorPage = (createPage, graphql) => {
  const authorTemplate = path.resolve(`src/templates/author.js`)

  return getAuthors(graphql)
    .then(authors => Promise
      .all(authors
        .map(author => getAuthorPosts(author.frontmatter.slug, graphql)
          .then(posts => createPage({
              path: author.frontmatter.path,
              component: authorTemplate,
              context: {
                posts,
              },
            }),
          ),
        ),
      ),
    )
}

/**
 * @param actions
 * @param graphql
 * @return {Promise<*>}
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return Promise.all([
    createAuthorPage(createPage, graphql),
    createPostPage(createPage, graphql),
    createTagPage(createPage, graphql),
  ])
}
