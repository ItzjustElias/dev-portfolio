(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{134:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l);n(61);t.default=function(e){const{title:t}=e;return a.a.createElement("div",{className:"header"},t)}},69:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),i=n(128),c=n(108),r=n(145),o=n(15),s=n(46),m=n.n(s),u=n(59),d=n(21),y=n(26);n(134);const E={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};t.default=function(e){const t=Object(l.useContext)(o.a),{header:n}=e,[s,p]=Object(l.useState)(null);return Object(l.useEffect)(()=>{fetch(d.a.experiences,{method:"GET"}).then(e=>e.json()).then(e=>p(e.experiences)).catch(e=>e)},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.default,{title:n}),s?a.a.createElement("div",{className:"section-content-container"},a.a.createElement(c.a,null,a.a.createElement(i.Timeline,{lineColor:t.timelineLineColor},s.map(e=>a.a.createElement(m.a,null,a.a.createElement(i.TimelineItem,{key:e.title+e.dateText,dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:E.itemStyle,bodyContainerStyle:{color:t.color}},a.a.createElement("h2",{className:"item-title"},e.title),a.a.createElement("div",{style:E.subtitleContainerStyle},a.a.createElement("h4",{style:{...E.subtitleStyle,color:t.accentColor}},e.subtitle),e.workType&&a.a.createElement("h5",{style:E.inlineChild},"\xa0\xb7"," ",e.workType)),a.a.createElement("ul",{style:E.ulStyle},e.workDescription.map(e=>a.a.createElement("div",{key:e},a.a.createElement("li",null,a.a.createElement(r.a,{children:e,components:{p:"span"}})),a.a.createElement("br",null)))))))))):a.a.createElement(y.default,null))}}}]);
//# sourceMappingURL=5.efab1fc1.chunk.js.map