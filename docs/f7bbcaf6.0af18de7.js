(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||s;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),s=(r(0),r(100)),o={id:"resolvers",title:"Resolvers"},i={unversionedId:"resolvers",id:"resolvers",isDocsHomePage:!1,title:"Resolvers",description:"A resolver is a method that tries to return data for different schema parts such as queries, mutations and computed",source:"@site/docs/resolvers.md",slug:"/resolvers",permalink:"/docs/resolvers",editUrl:"https://github.com/silviejs/silviejs.github.io/tree/main/website/docs/resolvers.md",version:"current",sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/docs/schemas"},next:{title:"Data Loaders",permalink:"/docs/data-loaders"}},l=[{value:"Creating resolvers",id:"creating-resolvers",children:[]},{value:"Loading Resolvers",id:"loading-resolvers",children:[]},{value:"Resolver Methods",id:"resolver-methods",children:[{value:"Query Resolvers",id:"query-resolvers",children:[]},{value:"Mutation Resolvers",id:"mutation-resolvers",children:[]},{value:"Property Resolvers",id:"property-resolvers",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A resolver is a method that tries to return data for different schema parts such as queries, mutations and computed\nfields. A resolver file is a ",Object(s.b)("inlineCode",{parentName:"p"},".ts")," file that returns an object aka ",Object(s.b)("inlineCode",{parentName:"p"},"Root Object"),". The root object is an object that was\nsplit into separate resolver files. The fractions will be deep merged into a single object before being passed to the\nGraphQL server."),Object(s.b)("p",null,"The root-level properties of this object should be the type names (e.g. Query, Mutation, Book, etc), which each of them\nare objects containing methods for their corresponding query or mutation or field names."),Object(s.b)("h2",{id:"creating-resolvers"},"Creating resolvers"),Object(s.b)("p",null,"Resolvers can be made manually by creating a ",Object(s.b)("inlineCode",{parentName:"p"},".ts")," file manually, or by ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli#make"}),"using the make command in Silvie CLI"),".\nThis command will create a ",Object(s.b)("inlineCode",{parentName:"p"},"user.ts")," file in the ",Object(s.b)("inlineCode",{parentName:"p"},"src/graphql/resolvers")," directory of your project."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"silvie make resolver user\n")),Object(s.b)("p",null,"The make command assumes that you are making a resolver to handle the ",Object(s.b)("inlineCode",{parentName:"p"},"User Model"),", so it will import the ",Object(s.b)("inlineCode",{parentName:"p"},"User Class"),",\nand adds two base methods to fetch them from the database. The contents of the file will be:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import User from 'models/user';\n\nclass UserResolver {\n    static user(obj, { id }): Promise<User> {\n        return User.find(id) as Promise<User>;\n    }\n\n    static users(): Promise<User[]> {\n        return User.all() as Promise<User[]>;\n    }\n}\n\nexport default {\n    Query: {\n        user: UserResolver.user,\n        users: UserResolver.users,\n    },\n};\n")),Object(s.b)("p",null,"The resolvers defined as static class methods, then assigned to object properties and exported. This approach will let\nyou build your resolver in an object oriented manner. "),Object(s.b)("p",null,"However, you can always define your resolvers directly into the default exported object."),Object(s.b)("h2",{id:"loading-resolvers"},"Loading Resolvers"),Object(s.b)("p",null,"The resolvers should be loaded at runtime. This is done by importing them all from their directory and passing them to\nthe main Silvie bootstrap function. They need to be assigned to the ",Object(s.b)("inlineCode",{parentName:"p"},"resolver")," property of the bootstrap\nparameter."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import bootstrap from 'silvie/bootstrap';\n\nimport schemas from 'graphql/schemas';\nimport resolvers from 'graphql/resolvers';\nimport dataLoaders from 'graphql/dataloaders';\n\nbootstrap({ schemas, resolvers, dataLoaders });\n")),Object(s.b)("h2",{id:"resolver-methods"},"Resolver Methods"),Object(s.b)("p",null,"A resolver is a method that will accept 4 parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"obj"),": The parent object"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"params"),": The parameters that was passed to the query or mutation"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"context"),": Context of GraphQL server which is being shared across all resolvers"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"info"),": Field-specific information that is related to the current query and schema details")),Object(s.b)("p",null,"It returns some data to be set as the result of the query. "),Object(s.b)("p",null,"Assuming, we have created a schema as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n    id: Int!\n\n    firstname: String!\n    lastname: String!\n    fullname: String!\n\n    age: Int!\n}\n\nextend type Query {\n    user(id: Int!): User\n    users: [User]\n}\n\nextend type Mutation {\n    createUser(firstname: String!, lastname: String!, age: Int!): Boolean!\n}\n")),Object(s.b)("p",null,"So we have created a ",Object(s.b)("inlineCode",{parentName:"p"},"User")," type with some basic properties.\nThen we extended the ",Object(s.b)("inlineCode",{parentName:"p"},"Query")," type to add a query to fetch a user by its id, and a query to fetch all users at once.\nWe also have extended the ",Object(s.b)("inlineCode",{parentName:"p"},"Mutation")," type to create a mutation to create a new user. "),Object(s.b)("p",null,"The following code examples will show you how you will define a resolver for each one."),Object(s.b)("h3",{id:"query-resolvers"},"Query Resolvers"),Object(s.b)("p",null,"First you need to create a ",Object(s.b)("inlineCode",{parentName:"p"},"user")," resolver to resolve a single user:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{4-6,11}","{4-6,11}":!0}),"import User from 'models/user';\n\nclass UserResolver {\n    static user(obj, { id: number }): Promise<User> {\n        return User.find(id) as Promise<User>;\n    }\n}\n\nexport default {\n    Query: {\n        user: UserResolver.user,\n    }\n}\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"When the client queries for a specific ",Object(s.b)("inlineCode",{parentName:"p"},"user"),", this resolver will be called and returns the user instance if it finds it.\nOtherwise, it will return null."))),Object(s.b)("p",null,"Then you need to create a method to fetch all users:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{6-8,15}","{6-8,15}":!0}),"import User from 'models/user';\n\nclass UserResolver {\n    // ...\n\n    static users(): Promise<User[]> {\n        return User.all() as Promise<User[]>;\n    }\n}\n\nexport default {\n    Query: {\n        // ...\n\n        users: UserResolver.users\n    }\n}\n")),Object(s.b)("p",null,"Well, this will try to fetch all users from the database and returns an array of users whenever the client asks for the\n",Object(s.b)("inlineCode",{parentName:"p"},"users")," query."),Object(s.b)("h3",{id:"mutation-resolvers"},"Mutation Resolvers"),Object(s.b)("p",null,"Then you need to add a ",Object(s.b)("inlineCode",{parentName:"p"},"Mutation")," part to the exporting object and assign your mutation resolvers to it. Let's create a\nmethod to for the ",Object(s.b)("inlineCode",{parentName:"p"},"createUser")," mutation."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{6-23,29-31}","{6-23,29-31}":!0}),"import User from 'models/user';\n\nclass UserResolver {\n    // ...\n\n    static async createUser(\n        obj, \n        { \n            firstname: string; \n            lastname: string; \n            age: int;\n        }\n    ): Promise<boolean> {\n        // Do some validation\n\n        const user = await User.create({\n            firstname,\n            lastname,\n            age\n        });\n\n        return !!user;\n    }\n}\n\nexport default {\n    // ...\n\n    Mutation: {\n        createUser: UserResolver.createUser\n    }\n}\n")),Object(s.b)("h3",{id:"property-resolvers"},"Property Resolvers"),Object(s.b)("p",null,"You may have noticed a ",Object(s.b)("inlineCode",{parentName:"p"},"fullname")," property on the User type. That is a computed property which we are handling by a\nresolver on the User type. "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{6-8,14-16}","{6-8,14-16}":!0}),"import User from 'models/user';\n\nclass UserResolver {\n    // ...\n\n    static async fullname({ firstname, lastname }): Promise<string> {\n        return `${firstname} ${lastname}`;\n    }\n}\n\nexport default {\n    // ...\n\n    User: {\n        fullname: UserResolver.fullname\n    }\n}\n")),Object(s.b)("p",null,"Note that we are using the first parameter of the resolver as it is being used on every user that needs the ",Object(s.b)("inlineCode",{parentName:"p"},"fullname"),"\nproperty. We just take the ",Object(s.b)("inlineCode",{parentName:"p"},"firstname")," and ",Object(s.b)("inlineCode",{parentName:"p"},"lastname")," of the user, and return them joined by a white space."))}p.isMDXComponent=!0}}]);