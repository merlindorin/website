(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});n(34);var a=n(0),r=n.n(a),i=n(156),o=n(153),c=n(177),s=function(t){return t.data.allMarkdownRemark.edges.map(function(t){return r.a.createElement(i.a,Object.assign({key:t.node.id},t.node.frontmatter,t.node.fields))})};e.default=function(t){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Welcome"}),r.a.createElement(s,t))};var l="504806029"},155:function(t){t.exports={data:{markdownRemark:{html:"<p>My nice description</p>",frontmatter:{path:"/authors/romain-dary",firstname:"Romain",lastname:"DARY",avatar:{childImageSharp:{resolutions:{width:24,height:24,src:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg",srcSet:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg 1x,\n/static/742066026cbe6b91c6ab6d20218dea2c/16de6/avatar.jpg 1.5x,\n/static/742066026cbe6b91c6ab6d20218dea2c/f84fe/avatar.jpg 2x,\n/static/742066026cbe6b91c6ab6d20218dea2c/05380/avatar.jpg 3x"}}}}}}}},156:function(t,e,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(152),c=n(150),s=n.n(c),l=n(151);function d(){var t=s()(['\nfont-family: "PT Serif","Times New Roman",serif;\nfont-size: 38px;\nfont-weight: 700;\nline-height: 54px;\nposition: relative;\nmargin: 0 0 38px 0;\ncolor: #1b1c1f;\n']);return d=function(){return t},t}var u=l.a.h2(d()),p=n(159);function m(){var t=s()(["\nfont-size: 18px;\nline-height: 42px;\nmargin: 48px 0 0 0;\n"]);return m=function(){return t},t}var f=l.a.p(m()),g=function(t){var e=t.children;return i.a.createElement(f,null,e,"...")},b=n(157);function h(){var t=s()(["\n  text-decoration: none;\n"]);return h=function(){return t},t}var v=Object(l.a)(o.a)(h());function w(){var t=s()(["\n    position: relative;\n    margin: 0 0 68px 0;\n    padding: 0 0 68px 0;\n\n&::before {\n    position: absolute;\n    top: 38px;\n    left: -65px;\n    width: 6px;\n    height: 6px;\n    content: '';\n    transition: border 0.2s ease-out, background 0.2s ease-out;\n    border: 6px solid #f2f6fa;\n    border-radius: 12px;\n    background-color: #d2dbe5;\n}\n&::after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 44%;\n    height: 1px;\n    content: '';\n    background-color: #e8e8ef;\n}\n"]);return w=function(){return t},t}var x=l.a.article(w());e.a=function(t){var e=t.readingTime,n=t.path,r=t.title,c=t.excerpt,s=t.date,l=t.tags,d=void 0===l?[]:l;return i.a.createElement(o.b,{query:"3153017582",render:function(t){var a=t.markdownRemark.frontmatter,o=a.path,l=a.avatar,m=a.firstname,f=a.lastname;return i.a.createElement(x,null,d[0]?i.a.createElement(v,{to:"/tags/"+d[0].toLowerCase(),key:d[0]},i.a.createElement(b.a,null,d[0])):null,i.a.createElement(v,{to:n},i.a.createElement(u,null,r)),i.a.createElement(p.a,{path:o,img:l.childImageSharp.resolutions,firstname:m,lastname:f,published:s,time:e.time}),i.a.createElement(g,null,c))},data:a})}},177:function(t,e,n){"use strict";var a=n(178),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(182),l=n.n(s);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title,s=a.data.site,d=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d},178:function(t){t.exports={data:{site:{siteMetadata:{title:"Romain DARY",description:"Personal Website.",author:"@iam-merlin"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-512cc46374c393261823.js.map