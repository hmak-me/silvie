(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(109),i=a(97),c=a(100),s=a(99);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(98),d=a(107);var u=function(){const{siteConfig:{title:e}}=Object(i.a)(),{pluginId:t}=Object(m.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(d.a)(t),n=Object(m.useActiveVersion)(t),{latestDocSuggestion:r,latestVersionSuggestion:c}=Object(m.useDocVersionSuggestions)(t);if(!c)return l.a.createElement(l.a.Fragment,null);const o=null!=r?r:(u=c).docs.find((e=>e.id===u.mainDocId));var u;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:o.path,onClick:()=>a(c.name)},"latest version"))," ","(",c.label,")."))};var g=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const c=document.getElementsByClassName(e);for(;a<c.length&&!i;){const e=c[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},E=a(54),v=a.n(E);const p="table-of-contents__link";function f({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:p,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children}))))):null}var b=function({headings:e}){return g(p,"table-of-contents__link--active",100),l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(f,{headings:e}))},h=a(95),N=a(55),_=a.n(N);t.default=function(e){const{siteConfig:t}=Object(i.a)(),{url:a,title:n,titleDelimiter:s}=t,{content:d}=e,{metadata:g}=d,{description:E,title:v,permalink:p,editUrl:f,lastUpdatedAt:N,lastUpdatedBy:w}=g,{frontMatter:{image:O,keywords:y,hide_title:k,hide_table_of_contents:j}}=d,{pluginId:C}=Object(m.useActivePlugin)({failfast:!0}),x=Object(m.useVersions)(C),I=Object(m.useActiveVersion)(C),L=x.length>1,A=v?`${v} ${s} ${n}`:n,S=Object(c.a)(O,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:S}),O&&l.a.createElement("meta",{property:"twitter:image",content:S}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),p&&l.a.createElement("meta",{property:"og:url",content:a+p}),p&&l.a.createElement("link",{rel:"canonical",href:a+p})),l.a.createElement("div",{className:Object(h.a)("container padding-vert--lg",_.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(h.a)("col",{[_.a.docItemCol]:!j})},l.a.createElement(u,null),l.a.createElement("div",{className:_.a.docItemContainer},l.a.createElement("article",null,L&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:_.a.docTitle},v)),l.a.createElement("div",{className:"markdown"},l.a.createElement(d,null))),(f||N||w)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},f&&l.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||w)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",N&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:_.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),w&&" "),w&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,w)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:g})))),!j&&d.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(b,{headings:d.rightToc})))))}}}]);