import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  align-items: center;
  
  @media only screen and (max-width: 640px) {
    padding: 0 40px;
  }
`

export default Wrapper
