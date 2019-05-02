require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Romain DARY`,
    siteUrl: `https://romain.dary.io`,
    description: `Personal Website.`,
    author: `@iam-merlin`,
    social: {
      website: "https://romain.dary.io",
      twitter: "https://twitter.com/iam_merlin",
      linkedin: "https://fr.linkedin.com/in/romaindary",
      github: "https://github.com/iam-merlin",
      instagram: "https://www.instagram.com/iam_merlin",
      medium: "https://medium.com/@iam_merlin",
      keybase: "https://keybase.io/merlindorin",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query {
            repository(owner:"iam-merlin", name:"website") {
              issues(last:20, states:OPEN, labels:["post"]) {
                edges {
                  node {
                    title
                    body
                    url
                    labels(first:5) {
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
        `,
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layout`)
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139414063-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Romain DARY Website`,
        short_name: `website`,
        start_url: `/`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        navigateFallbackWhitelist: [],
      },
    },
    `gatsby-plugin-sitemap`
  ],
}
