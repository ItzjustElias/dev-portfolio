(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{59:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a);n(61);t.default=function(e){const{title:t}=e;return l.a.createElement("div",{className:"header"},t)}},68:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(145),i=n(46),r=n.n(i),o=n(108),s=n(59),m=n(21),u=n(26);const d={iconStyle:{height:75,width:75,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};t.default=function(e){var t;const{header:n}=e,[i,E]=Object(a.useState)(null);return Object(a.useEffect)(()=>{fetch(m.a.skills,{method:"GET"}).then(e=>e.json()).then(e=>E(e)).catch(e=>e)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{title:n}),i?l.a.createElement(r.a,null,l.a.createElement("div",{className:"section-content-container"},l.a.createElement(o.a,null,(h=i.intro,l.a.createElement("h4",{style:d.introTextContainer},l.a.createElement(c.a,{children:h}))),null===(t=i.skills)||void 0===t?void 0:t.map(e=>l.a.createElement("div",{key:e.title},l.a.createElement("br",null),l.a.createElement("h3",null,e.title),e.items.map(e=>l.a.createElement("div",{key:e.title,style:{display:"inline-block"}},l.a.createElement("img",{style:d.iconStyle,src:e.icon,alt:e.title}),l.a.createElement("p",null,e.title)))))))):l.a.createElement(u.default,null));var h}}}]);
//# sourceMappingURL=8.8dd22687.chunk.js.map