/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header    from "./components/Header"
import Footer    from "./components/Footer"
import Wrapper   from "./components/Wrapper"

import "./styles/font.css"
import "./styles/reset.css"
import "./styles/styles.css"
import Container from "./components/Container"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            social {
              github
              linkedin
              medium
              instagram
              twitter
              keybase
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, social },
      },
    }) => (
      <Wrapper>
        <Header siteTitle={title} />
        <Container>
          {children}
        </Container>
        <Footer social={social} />
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
