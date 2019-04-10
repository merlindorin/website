import styled from "styled-components"

export default styled.article`
    position: relative;
    margin: 0 0 68px 0;
    padding: 0 0 68px 0;

&::before {
    position: absolute;
    top: 38px;
    left: -65px;
    width: 6px;
    height: 6px;
    content: '';
    transition: border 0.2s ease-out, background 0.2s ease-out;
    border: 6px solid #f2f6fa;
    border-radius: 12px;
    background-color: #d2dbe5;
}
&::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 44%;
    height: 1px;
    content: '';
    background-color: #e8e8ef;
}
`
