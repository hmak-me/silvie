(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(2),o=(r(0),r(92));const l={id:"controllers",title:"Controllers"},a={unversionedId:"controllers",id:"controllers",isDocsHomePage:!1,title:"Controllers",description:"Silvie HTTP has been built on MVC structure. So you need to create controllers in order to respond to user requests.",source:"@site/docs/controllers.md",slug:"/controllers",permalink:"/docs/controllers",editUrl:"https://github.com/silviejs/silviejs.github.io/tree/main/website/docs/controllers.md",version:"current",sidebar:"docsSidebar",previous:{title:"Routing",permalink:"/docs/routing"},next:{title:"Middlewares",permalink:"/docs/middlewares"}},s=[{value:"Creating a Controller",id:"creating-a-controller",children:[]},{value:"Loading Controllers",id:"loading-controllers",children:[]},{value:"Route Handlers",id:"route-handlers",children:[]}],c={rightToc:s};function i({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Silvie HTTP has been built on MVC structure. So you need to create controllers in order to respond to user requests.\nA controller is just an inherited class from the base ",Object(o.b)("inlineCode",{parentName:"p"},"Controller")," class. The base Controller class has no default\nbehavior by itself. It is just used to detect controllers later at runtime."),Object(o.b)("h2",{id:"creating-a-controller"},"Creating a Controller"),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli#make"}),"create a new controller with Silvie CLI"),". This command will create a controller named\n",Object(o.b)("inlineCode",{parentName:"p"},"ProductsController")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/controllers")," directory of your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"silvie make controller ProductsController\n")),Object(o.b)("p",null,"A basic controller will look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller from 'silvie/lib/http/controller';\n\nexport default class BasicController implements Controller {\n    // Route Handlers\n}\n")),Object(o.b)("p",null,"It is a default exported class inherited from ",Object(o.b)("inlineCode",{parentName:"p"},"Controller"),". You need to create route handlers in the class body."),Object(o.b)("h2",{id:"loading-controllers"},"Loading Controllers"),Object(o.b)("p",null,"Controllers need to load at runtime. You need to load them all in the project bootstrap file, before calling the core\nbootstrap function. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import 'controllers';\n")),Object(o.b)("p",null,"This type of import utilizes ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/babel-plugin-wildcard-import"}),"babel-plugin-wildcard-import"),"\nto import all files in a directory. Just importing the controllers will cause the method decorators to execute and\nregister the route handlers in the application."),Object(o.b)("h2",{id:"route-handlers"},"Route Handlers"),Object(o.b)("p",null,"A route handler is a non-static method defined in a controller class, since they will be used as callback methods,\nthey have two parameters which will be passed by the express server."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"req"),": ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://expressjs.com/en/5x/api.html#req"}),"<Request",">")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"res"),": ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://expressjs.com/en/5x/api.html#res"}),"<Response",">"))),Object(o.b)("p",null,"You can process the full request object with ",Object(o.b)("inlineCode",{parentName:"p"},"req")," and respond to the user with ",Object(o.b)("inlineCode",{parentName:"p"},"res"),". For more information about what\nthese objects are capable of, read the documentation for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/5x/api.html#req"}),"Request")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/5x/api.html#res"}),"Response"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route } from 'silvie/lib/http/controller';\nimport Post from 'models/post';\n\nexport default class BasicController implements Controller {\n    @route('GET', '/posts')\n    getPosts(req: any, res: any): void {\n        if (req.secure) {\n            Post.all().then((posts) => {\n                res.send(posts);\n            }).catch((error) => {\n                res.status(500).send('Something bad happened in the server.');\n            });\n        } else {\n            res.status(400).send('You need to use HTTPS to access this content.');\n        }\n    }\n}\n")),Object(o.b)("p",null,"The example above, will send a ",Object(o.b)("inlineCode",{parentName:"p"},"400")," status code if the connection was not a TLS connection, and might send a ",Object(o.b)("inlineCode",{parentName:"p"},"500"),"\nstatus code when it fails to fetch posts from the database. Otherwise, it will send all posts to the user."))}i.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||l;return r?o.a.createElement(m,s(s({ref:t},i),{},{components:r})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);