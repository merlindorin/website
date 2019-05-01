/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React                    from "react"
import PropTypes                from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header  from "./containers/Header"
import Main    from "./containers/Main"
import Footer  from "./containers/Footer"

import Wrapper from "./components/Wrapper"

import "./styles/font.css"
import "./styles/reset.css"
import "./styles/styles.css"

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
        <Header siteTitle={title}/>
        <Main children={children}/>
        <Footer social={social}/>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
