import React from "react"
import styled from "styled-components"

import Announcement from "../../svgs/announcement.svg";

const StyledAnnouncement = styled(Announcement)`
  width: 20px;
  fill: #014fb0;
  padding-right: 10px;
`

const Upvote = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #014fb0;
  margin-bottom: 80px;
  text-decoration: none;
`

export default (props) => (
  <Upvote {...props} href="https://github.com/iam-merlin/website/labels/post">
    <StyledAnnouncement/>
    <p>
      There is {props.posts.length} purposed article{props.posts.length > 1 ?  's' : ''}, vote for the next one...
    </p>
  </Upvote>
)
