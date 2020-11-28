(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(100)),o={id:"mail",title:"Mail"},l={unversionedId:"mail",id:"mail",isDocsHomePage:!1,title:"Mail",description:"There are some cases that you need to communicate with your users through email. Silvie comes with a helper function to",source:"@site/docs/mail.md",slug:"/mail",permalink:"/docs/mail",editUrl:"https://github.com/silviejs/silviejs.github.io/tree/main/website/docs/mail.md",version:"current",sidebar:"docsSidebar",previous:{title:"Storage Helper",permalink:"/docs/storage"},next:{title:"Controllers",permalink:"/docs/controllers"}},c=[{value:"Send Mail",id:"send-mail",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are some cases that you need to communicate with your users through email. Silvie comes with a helper function to\nsend emails as easy as possible. This helper uses the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/nodemailer"}),"nodemailer")," package to\ncreate the mail transporter and send emails from your application. All you need to do is to configure your SMTP server\nand email account credentials in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration#mail"}),"mail configuration file")," and import the helper function\nfrom ",Object(i.b)("inlineCode",{parentName:"p"},"silvie/utils/mail"),"."),Object(i.b)("h2",{id:"send-mail"},"Send Mail"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"sendMail()")," function will take the email data, the receiver and the sender information. This function returns\nnothing, but you may get error messages in the console as if anything goes wrong."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mail")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"aliasName")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"to")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"subject")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"textBody")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"htmlBody?")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type"}),"<string",">"))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mail")," is the email address that you want to send the email from. This email address should be listed in the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration#accounts"}),"accounts section of mail configuration"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aliasName")," will be shown as the name of the sender in the receiver inbox, set it to ",Object(i.b)("inlineCode",{parentName:"p"},"null")," if you don't want this\nto happen."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"to")," parameter is the receiver email address."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"htmlBody")," is optional, but you can send an HTML email body by passing a string with HTML contents to this\nparameter. It is recommended to send both ",Object(i.b)("inlineCode",{parentName:"p"},"text")," and ",Object(i.b)("inlineCode",{parentName:"p"},"HTML")," versions of an email in case a client does not support HTML\ncontent in email, or HTML content has been disabled for some reason."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import sendMail from 'silvie/utils/mail';\n\nsendMail(\n    'no-reply@silviejs.org',\n    'Silvie JS',\n    'john@example.com',\n    'Contribution Notes',\n    'Hello, John.\\nNow, you are one of our great contributors.\\nThanks for contributing in the Silvie project.'\n);\n")),Object(i.b)("p",null,"The above code will send an email from ",Object(i.b)("inlineCode",{parentName:"p"},"no-reply@silviejs.org")," with an alias name ",Object(i.b)("inlineCode",{parentName:"p"},"Silvie JS"),", to ",Object(i.b)("inlineCode",{parentName:"p"},"john@example.com"),"\nwith the provided subject and body."))}p.isMDXComponent=!0}}]);