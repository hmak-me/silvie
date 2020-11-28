(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(100)),o={id:"graphql",title:"GraphQL Server",sidebar_label:"GraphQL"},s={unversionedId:"graphql",id:"graphql",isDocsHomePage:!1,title:"GraphQL Server",description:"GraphQL is a query language for APIs. It provides an efficient way of communication between the",source:"@site/docs/graphql.md",slug:"/graphql",permalink:"/docs/graphql",editUrl:"https://github.com/silviejs/silviejs.github.io/tree/main/website/docs/graphql.md",version:"current",sidebar_label:"GraphQL",sidebar:"docsSidebar",previous:{title:"HTTP Server",permalink:"/docs/http"},next:{title:"Database Helper",permalink:"/docs/database"}},l=[{value:"Base Data Types",id:"base-data-types",children:[{value:"Query",id:"query",children:[]},{value:"Mutation",id:"mutation",children:[]},{value:"Upload",id:"upload",children:[]},{value:"File",id:"file",children:[]},{value:"JSON",id:"json",children:[]},{value:"JSONObject",id:"jsonobject",children:[]}]},{value:"Endpoint",id:"endpoint",children:[]},{value:"Middleware",id:"middleware",children:[]},{value:"Features",id:"features",children:[{value:"Playground",id:"playground",children:[]},{value:"Introspection",id:"introspection",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org"}),"GraphQL")," is a query language for APIs. It provides an efficient way of communication between the\nclient and the server. Silvie makes it easy to configure and use a GraphQL server in your back-end application. You just\nneed to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration#enabled"}),"enable the GraphQL")," in its configuration file."),Object(i.b)("p",null,"Silvie utilizes ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/apollo-server-express"}),"apollo-server-express"),"\npackage to serve a GraphQL server. "),Object(i.b)("h2",{id:"base-data-types"},"Base Data Types"),Object(i.b)("p",null,"Silvie configures GraphQL to be modular. You can define your schema definitions and resolvers in their own directories.\nWhen you are defining your type system in GraphQL you need to create several queries and mutations. Silvie defines a\nbase ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," and a base ",Object(i.b)("inlineCode",{parentName:"p"},"Mutation")," type, so you can extend them later. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("strong",{parentName:"p"},"Query")," and ",Object(i.b)("strong",{parentName:"p"},"Mutation")," types are enabled by default. But you need to enable ",Object(i.b)("strong",{parentName:"p"},"JSON")," or ",Object(i.b)("strong",{parentName:"p"},"Upload")," in the\nGraphQL configuration file."))),Object(i.b)("h3",{id:"query"},"Query"),Object(i.b)("p",null,"This type will contain your query method signatures. Queries are types of methods to fetch data and return with results."),Object(i.b)("h3",{id:"mutation"},"Mutation"),Object(i.b)("p",null,"This type will contain your mutation method definitions. Mutations are types of queries that might modify something on\nthe server. "),Object(i.b)("p",null,"Yes, you can also modify the server in a query, but it is a convention to use queries for fetching data and mutations\nfor changing data. "),Object(i.b)("h3",{id:"upload"},"Upload"),Object(i.b)("p",null,"If you enable file uploads in your GraphQL configuration file, Silvie will put\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-upload"}),"graphql-upload")," package next to Apollo to handle uploaded files and pass\nthem to your resolvers, then, ",Object(i.b)("inlineCode",{parentName:"p"},"Upload")," and ",Object(i.b)("inlineCode",{parentName:"p"},"File")," types will be added to the main schema definition."),Object(i.b)("h3",{id:"file"},"File"),Object(i.b)("p",null,"This type comes along with the ",Object(i.b)("inlineCode",{parentName:"p"},"Upload")," type. If your GraphQL server is exchanging files, this type will help you to\nindicate a typical file with its typical properties. This is how the default definition is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type File {\n    filename: String!\n    mimetype: String!\n    encoding: String!\n}\n")),Object(i.b)("h3",{id:"json"},"JSON"),Object(i.b)("p",null,"GraphQL is a type based system and everything needs to be typed. In the other hand, there are sometimes that you need to\nhave more flexibility on your data. Then you should enable ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," type in GraphQL configuration file. This type will\nsupport any valid JSON data.   "),Object(i.b)("h3",{id:"jsonobject"},"JSONObject"),Object(i.b)("p",null,"This type will be added with ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," type. ",Object(i.b)("inlineCode",{parentName:"p"},"JSONObject")," will only support a JSON object, which will throw an error when\nyou pass a non-object to variables of this kind. "),Object(i.b)("h2",{id:"endpoint"},"Endpoint"),Object(i.b)("p",null,"GraphQL will be mounted as a middleware on a URL of your HTTP server and parses the incoming queries and responds to\nthem. That URL is ",Object(i.b)("inlineCode",{parentName:"p"},"/graphql")," by default, but you can change it in the GraphQL configuration file."),Object(i.b)("h2",{id:"middleware"},"Middleware"),Object(i.b)("p",null,"There are some cases that you may need to process the request before sending it to GraphQL server. You can specify a\nmiddleware by its name in the GraphQL configuration file to put it before GraphQL server. Note that middleware must\nexist in your project."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"GraphQL has some features to ease the development process and makes testing your APIs easier than ever. "),Object(i.b)("h3",{id:"playground"},"Playground"),Object(i.b)("p",null,"The GraphQL playground is a web interface made for testing the queries and mutations. It will be served on the same\nendpoint that you specified for the GraphQL. It is accessible from a web browser."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is recommended to disable the playground on production, since it may expose all of your definitions and queries to\neveryone who visits that page, and this will be a security risk for those will low security measures in their codes."))),Object(i.b)("h3",{id:"introspection"},"Introspection"),Object(i.b)("p",null,"Introspection is a feature that comes with GraphQL to ask the GraphQL server what types and queries it supports. To\nlearn more about this, read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/introspection"}),"Introspection")," on GraphQL official website."))}p.isMDXComponent=!0}}]);