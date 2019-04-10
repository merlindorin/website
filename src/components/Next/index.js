import React    from "react"
import styled   from "styled-components"
import NextIcon from "../../svgs/next.svg"

const Next = styled(NextIcon)`
width: 48px;
fill: #ccd1db;
`

const Center = styled.div`
text-align: center;
margin-bottom: 100px;
`

export default () => (
  <Center>
    <Next/>
  </Center>
)
