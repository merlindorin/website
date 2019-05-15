import React                          from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import { fontSize as size } from "../constants"

import H2       from "../H2"
import Source   from "../Source"
import Metadata from "../Metadata"
import Tag      from "../Tag"

export default ({ readingTime, title, excerpt, source, date, tags = [] }) => {
  return (
    <StaticQuery query={graphql`
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
      `} render={({ markdownRemark: { frontmatter: { firstname, lastname, path, avatar } } }) => {
        console.log(source)
      return (
        <article>
          <div  style={{ position: "relative"}}>
          <Source href={source} style={{ position: "absolute", right: "0"}}>Source</Source>
          {tags[0] ? (<Link to={`/tags/${tags[0].toLowerCase()}`} key={tags[0]}><Tag>{tags[0]}</Tag></Link>) : null}
          </div>
          <H2 size={size.EXTRA}>{title}</H2>
          <Metadata
            path={path}
            img={avatar.childImageSharp.resolutions}
            firstname={firstname}
            lastname={lastname}
            published={date}
            time={readingTime.time}
          />
        </article>
      )
    }}/>
  )
}
