import React     from "react"
import styled    from "styled-components"
import PropTypes from "prop-types"

const Content     = styled.div`
padding-top: 48px;

hr {
    width: 100%;
    height: 1px;
    margin: 58px 0;
    border: 0;
    background: #d8d8d8
}

em {
  font-style: italic;
}

@media (max-width: 720px) {
    hr {
        margin:48px 0
    }
}

@media (max-width: 480px) {
    hr {
        margin:38px 0
    }
}

p {
    font-size: 18px;
    line-height: 38px;
    margin: 0 0 24px 0;
    color: #535763
}

@media (max-width: 720px) {
    p {
        font-size:17px;
        line-height: 34px;
        margin: 28px 0
    }
}

@media (max-width: 480px) {
    p {
        font-size:16px;
        line-height: 30px;
        margin: 22px 0
    }
}

h1,h2 {
    font-size: 33px;
    font-weight: 700;
    line-height: 43px;
    margin: 48px 0 24px;
    color: #212228
}

@media (max-width: 720px) {
    h1,h2 {
        font-size:28px;
        line-height: 38px;
        margin: 38px 0 19px;
    }
}

@media (max-width: 480px) {
    h1,h2 {
        font-size:26px;
        line-height: 38px;
        margin: 30px 0 15px;
    }
}

h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    margin: 24px 0 12px;
    color: #212228
}

@media (max-width: 720px) {
    h3 {
        font-size:24px;
        line-height: 34px;
        margin: 20px 0 10px;
    }
}

@media (max-width: 480px) {
    h3 {
        font-size:22px;
        line-height: 32px;
        margin: 15px 0 7px;
    }
}

h4 {
    font-family: "Muli","Arial",Sans-Serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    margin: 24px 0 12px;
    color: #a6a9b3
}

@media (max-width: 720px) {
    h4 {
        font-size:21px;
        line-height: 31px;
        margin: 20px 0 10px;
    }
}

@media (max-width: 480px) {
    h4 {
        font-size:19px;
        line-height: 29px;
        margin: 15px 0 7px;
    }
}

h5,h6 {
    font-family: "Muli","Arial",Sans-Serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin: 24px 0 12px;
    color: #a6a9b3
}

@media (max-width: 720px) {
    h5,h6 {
        font-size:20px;
        line-height: 30px;
        margin: 20px 0 10px;
    }
}

@media (max-width: 480px) {
    h5,h6 {
        font-size:18px;
        line-height: 28px;
        margin: 15px 0 7px;
    }
}

p a, ul a {
  text-decoration: none;
  
  &::after {
      position: absolute;
      content: '';
      border-bottom: 1px dashed #e7ecf1;
      width: 100%;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 5px;
    }
    
    :hover {
      color: #014fb0;
      
      &::after {
        border-bottom-color: #014fb0;
      }
    }
}

a {
    font-weight: 600;
    color: #535763;
    -webkit-text-decoration-color: #e7ecf1;
    text-decoration-color: #e7ecf1;
    position: relative; 
}

a:hover {
    -webkit-text-decoration-color: #014fb0;
    text-decoration-color: #014fb0
}

code {
    font-family: "PT Mono","Monaco","Courier New",sans-serif;
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    margin: 0 5px;
    padding: 0 8px;
    color: #2c3034;
    background: #f4f4f6
}

@media (max-width: 720px) {
    code {
        font-size:15px
    }
}

@media (max-width: 480px) {
    code {
        font-size:14px
    }
}

mark {
    color: #19191b;
    background-color: #d4e7ff
}

img {
    display: block;
    max-width: 120%;
    margin: 58px 0;
    margin-right: -10%;
    margin-left: -10%;
    border-radius: 2px
}

@media (max-width: 1040px) {
    img {
        max-width:100vw;
        margin-left: calc((100vw - 100%) / -2);
        border-radius: 0
    }
}

@media (max-width: 720px) {
    img {
        margin-top:48px;
        margin-bottom: 48px
    }
}

@media (max-width: 480px) {
    img {
        margin-top:38px;
        margin-bottom: 38px
    }
}

figure {
    max-width: 120%;
    margin: 58px 0;
    margin-right: -10%;
    margin-left: -10%;
    padding: 0
}

figure img {
    max-width: 100%;
    height: auto;
    margin: 0 0 44px
}

@media (max-width: 1040px) {
    figure img {
        max-width:100vw;
        margin-left: calc((100vw - 100%) / -2);
        border-radius: 0
    }
}

@media (max-width: 720px) {
    figure {
        margin-top:48px;
        margin-bottom: 48px
    }
}

@media (max-width: 480px) {
    figure {
        margin-top:38px;
        margin-bottom: 38px
    }

    figure img {
        margin-bottom: 24px
    }
}

.kg-image-card {
    max-width: 100%;
    margin: 58px 0;
    margin-right: 0;
    margin-left: 0;
    padding: 0
}

.kg-image-card.kg-width-full img {
    width: 100vw
}

@media (max-width: 720px) {
    .kg-image-card {
        margin-top:48px;
        margin-bottom: 48px
    }
}

@media (max-width: 480px) {
    .kg-image-card {
        margin-top:38px;
        margin-bottom: 38px
    }
}

.kg-width-wide {
    max-width: 120%;
    margin-right: -10%;
    margin-left: -10%
}

@media (max-width: 1040px) {
    .kg-width-wide {
        max-width:100vw;
        margin-left: calc((100vw - 100%) / -2);
        border-radius: 0
    }
}

.kg-width-full {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc((100vw - 100%) / -2)
}

figcaption {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 0;
    color: #a6a9b3
}

figcaption a {
    color: #a6a9b3
}

@media (max-width: 480px) {
    figcaption {
        font-size:14px
    }
}

blockquote {
    font-size: 26px;
    font-weight: 600;
    font-style: italic;
    line-height: 44px;
    max-width: 660px;
    margin: 58px 0 58px 54px;
    padding: 10px 0 10px 54px;
    color: #34373e;
    border-left: 5px solid #e8eef3
}

blockquote p {
    font-size: 26px;
    font-weight: 600;
    font-style: italic;
    line-height: 44px;
    margin: 15px 0;
    color: #34373e
}

blockquote footer,blockquote cite {
    font-size: 17px;
    font-weight: 600;
    font-style: normal;
    line-height: 38px;
    color: #a0a7ac
}

blockquote footer a,blockquote cite a {
    text-decoration: none;
    color: #a0a7ac
}

@media (max-width: 720px) {
    blockquote {
        font-size:20px;
        line-height: 34px;
        margin: 48px 0 48px 32px;
        padding: 10px 0 10px 32px
    }

    blockquote p {
        font-size: 20px;
        line-height: 34px;
        margin: 0 0 10px
    }

    blockquote footer,blockquote cite {
        font-size: 15px;
        line-height: 32px
    }
}

@media (max-width: 480px) {
    blockquote {
        font-size:18px;
        line-height: 32px;
        margin: 38px 0 38px 22px;
        padding: 10px 0 10px 28px
    }

    blockquote p {
        font-size: 18px;
        line-height: 32px;
        margin: 0 0 10px
    }
}

ul {
    margin:38px 0 38px 34px;
}

@media (max-width: 720px) {
    ul {
        margin:30px 0 30px 24px
    }
}

@media (max-width: 480px) {
    ul {
        margin:30px 0 30px 24px
    }
}

strong {
  font-weight: bold;
  color: #222222;
}

li,ol {
  font-size: 18px;
  line-height: 30px;
  max-width: 660px;
  margin-bottom: 18px;
  color: #535763;
}

li {
  &::before {
    content: "•";
    color: #014fb0;
    margin-right: 10px;
  }
}

@media (max-width: 720px) {
    li,ol {
        margin-bottom:22px
    }
}

@media (max-width: 720px) {
    li,ol {
        font-size:17px;
        line-height: 34px
    }
}

@media (max-width: 480px) {
    li,ol {
        font-size:16px;
        line-height: 30px
    }
}

dl {
    margin: 48px 0 48px 34px;
    padding: 0
}

@media (max-width: 720px) {
    dl {
        margin:38px 0 38px 0
    }
}

@media (max-width: 480px) {
    dl {
        font-size:16px;
        margin: 28px 0 28px 0
    }
}

dt {
    font-weight: 600;
    margin: 24px 0 18px;
    padding: 0;
    color: #403f44
}

@media (max-width: 720px) {
    dt {
        margin:22px 0 16px
    }
}

dd {
    font-size: 17px;
    line-height: 34px;
    max-width: 640px;
    margin: 24px 0 34px 34px;
    padding: 0 0 0 34px;
    color: #535763;
    border-left: 2px solid #eee
}

@media (max-width: 720px) {
    dd {
        margin:18px 0 28px 24px
    }
}

@media (max-width: 720px) {
    dd {
        font-size:16px;
        line-height: 32px;
        padding: 0 0 0 28px
    }
}

@media (max-width: 480px) {
    dd {
        font-size:15px;
        line-height: 28px
    }
}

pre {
    max-width: 120%;
    margin: 58px 0;
    margin-right: -10%;
    margin-left: -10%;
    padding: 57px 80px;
    border-radius: 2px;
    background: #0f0f10
}

@media (max-width: 1040px) {
    pre {
        width:100vw;
        max-width: 100vw;
        margin-left: calc((100vw - 100%) / -2);
        border-radius: 0
    }
}

@media (max-width: 720px) {
    pre {
        margin-top:48px;
        margin-bottom: 48px;
        padding: 48px 7.5%
    }
}

@media (max-width: 480px) {
    pre {
        margin-top:38px;
        margin-bottom: 38px;
        padding: 38px 7.5%
    }
}

pre code {
    font-family: "PT Mono","Monaco","Courier New",sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 32px;
    overflow-x: auto;
    color: #f1f4f6;
    background: transparent
}

@media (max-width: 720px) {
    pre code {
        font-size:14px;
        line-height: 30px
    }
}

@media (max-width: 480px) {
    pre code {
        font-size:13px;
        line-height: 28px
    }
}

table {
    font-family: "Muli","Arial",sans-serif;
    font-size: 15px;
    font-weight: 600;
    position: relative;
    width: 120%;
    max-width: 120%;
    height: auto;
    margin: 50px 0;
    margin-right: -10%;
    margin-left: -10%;
    border-collapse: collapse;
    border-radius: 2px
}

@media (max-width: 1060px) {
    table {
        width:100%;
        margin: 40px 0
    }
}

@media (max-width: 720px) {
    table {
        left:0;
        width: 100%;
        margin: 40px 0
    }
}

@media (max-width: 460px) {
    table {
        margin:35px 0
    }
}

@media (max-width: 680px) {
    table {
        border:0
    }

    table caption {
        font-size: 13px
    }

    table thead {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        border: none
    }

    table tr {
        display: block;
        height: auto;
        margin-bottom: 30px;
        border-bottom: 3px solid #ddd
    }

    table tr td:first-child {
        padding: 7px 0
    }

    table tr:last-child {
        margin-bottom: 0
    }

    table td {
        font-size: 15px;
        display: block;
        padding: 10px 0;
        text-align: right;
        border-bottom: 1px solid #ddd
    }

    table td:before {
        font-weight: 700;
        float: left;
        content: attr(data-label)
    }

    table td:last-child {
        border-bottom: 0
    }
}

tr {
    height: 75px
}

tr>td:first-child,tr>th:first-child {
    padding-left: 30px
}

th {
    font-size: 15px;
    font-weight: 600;
    color: #171718;
    background: #f4f5f9
}

td,th {
    padding: 8px;
    text-align: left
}

td {
    font-size: 15px;
    font-weight: 400;
    color: #464646;
    border-bottom: 2px solid #fafafb
}

iframe,twitterwidget {
    margin: 0 auto
}

.fluid-width-video-wrapper {
    margin: 58px 0
}

@media (max-width: 720px) {
    .fluid-width-video-wrapper {
        margin:48px 0
    }
}

@media (max-width: 480px) {
    .fluid-width-video-wrapper {
        margin:38px 0
    }
}
`
const HtmlContent = ({ content }) => (<Content dangerouslySetInnerHTML={{ __html: content }}/>)

HtmlContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default HtmlContent
