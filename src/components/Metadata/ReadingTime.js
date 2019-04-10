import React  from "react"
import styled from "styled-components"
import Clock  from "../../svgs/clock.svg"

const StyledClock = styled(Clock)`
vertical-align: sub;
padding: 0 5px 0 20px;
fill: #014fb0;
width: 20px;
`

const Time = styled.time`
font-weight: 600;
color: #014fb0;
`

const ReadingTime = ({ duration }) => (
  <Time>
    <StyledClock/>
    ~ {Math.round(duration / 1000 / 60)} min
  </Time>
)


export default ReadingTime
