(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(2),a=(n(0),n(92));const o={id:"http",title:"HTTP Server",sidebar_label:"HTTP"},r={unversionedId:"http",id:"http",isDocsHomePage:!1,title:"HTTP Server",description:"HTTP server is the core part of any back-end framework, including Silvie. It uses an instance of",source:"@site/docs/http.md",slug:"/http",permalink:"/docs/http",editUrl:"https://github.com/silviejs/silviejs.github.io/tree/main/website/docs/http.md",version:"current",sidebar_label:"HTTP",sidebar:"docsSidebar",previous:{title:"Silvie CLI",permalink:"/docs/cli"},next:{title:"GraphQL Server",permalink:"/docs/graphql"}},l=[{value:"Port Decision",id:"port-decision",children:[]},{value:"HTTPS",id:"https",children:[]},{value:"HTTP/2",id:"http2",children:[]},{value:"CORS",id:"cors",children:[]},{value:"Cookie",id:"cookie",children:[{value:"Reading Cookies",id:"reading-cookies",children:[]},{value:"Setting Cookies",id:"setting-cookies",children:[]},{value:"Deleting Cookies",id:"deleting-cookies",children:[]}]},{value:"Session",id:"session",children:[{value:"Session Stores",id:"session-stores",children:[]},{value:"Access Session Data",id:"access-session-data",children:[]},{value:"Deleting Session Data",id:"deleting-session-data",children:[]}]},{value:"File Uploads",id:"file-uploads",children:[{value:"File Objects",id:"file-objects",children:[]},{value:"Single File Upload",id:"single-file-upload",children:[]},{value:"Multiple File Upload",id:"multiple-file-upload",children:[]},{value:"Array File Upload",id:"array-file-upload",children:[]},{value:"Allow Upload",id:"allow-upload",children:[]},{value:"Prevent Upload",id:"prevent-upload",children:[]}]},{value:"Request Bodies",id:"request-bodies",children:[{value:"Raw",id:"raw",children:[]},{value:"Text",id:"text",children:[]},{value:"JSON",id:"json",children:[]},{value:"URL Encoded",id:"url-encoded",children:[]}]},{value:"Serve Static Assets",id:"serve-static-assets",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HTTP server is the core part of any back-end framework, including Silvie. It uses an instance of\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://expressjs.com"}),"Express")," as its underlying web server."),Object(a.b)("h2",{id:"port-decision"},"Port Decision"),Object(a.b)("p",null,"Silvie goes through the following steps to choose a port number to run its HTTP server. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Look for the ",Object(a.b)("inlineCode",{parentName:"li"},"--port")," in command line args"),Object(a.b)("li",{parentName:"ol"},"Look for the ",Object(a.b)("inlineCode",{parentName:"li"},"-p")," in command line args"),Object(a.b)("li",{parentName:"ol"},"Look for the ",Object(a.b)("inlineCode",{parentName:"li"},"APP_PORT")," in ",Object(a.b)("inlineCode",{parentName:"li"},".env")," file"),Object(a.b)("li",{parentName:"ol"},"Look for the port number in HTTP configuration file")),Object(a.b)("p",null,"If port number could not be found in any of these steps, Silvie will take ",Object(a.b)("inlineCode",{parentName:"p"},"5000")," as its fallback port number."),Object(a.b)("h2",{id:"https"},"HTTPS"),Object(a.b)("p",null,"You can run your HTTP server on HTTPS protocol. Silvie uses Node.js default HTTPS module to serve the application over\nHTTPS. All you need to do is to enable ",Object(a.b)("strong",{parentName:"p"},"SSL")," and provide ",Object(a.b)("strong",{parentName:"p"},"Certificate Files")," in the\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#ssl"}),"SSL part of your HTTP Configuration"),"."),Object(a.b)("h2",{id:"http2"},"HTTP/2"),Object(a.b)("p",null,"HTTP/2 has a lot to offer. It speeds the content serving up, by responding to multiple requests in parallel in a single\nconnection, compressing the headers, etc. Silvie is using ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/spdy"}),"SPDY")," as the HTTP/2\nserver. All you need to do is enabling it by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"http2")," option to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in your HTTP configuration."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Please note that you need to configure SSL, in order to make HTTP/2 work as expected."))),Object(a.b)("h2",{id:"cors"},"CORS"),Object(a.b)("p",null,"CORS is the mechanism for a server to allow other origins than its own to request for restricted resources. This is done\nby a request called ",Object(a.b)("strong",{parentName:"p"},"preflight"),". A browser will make a preflight request with ",Object(a.b)("inlineCode",{parentName:"p"},"OPTIONS")," HTTP verb before requesting\nresources from other origins to see if it is permitted or not. Silvie uses ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cors"}),"cors"),"\npackage in combination with Express to achieve this behavior. You can read more about the CORS configuration options in\nthe ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#cors"}),"CORS part of HTTP Configuration")," file. "),Object(a.b)("h2",{id:"cookie"},"Cookie"),Object(a.b)("p",null,"Cookies become handy when you want to share data between client sessions. It is usually used to store authentication\ntokens, user interests, session identifiers, etc. Silvie utilizes\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cookie-parser"}),"cookie-parser")," package to work with cookies. All you need to do is to\nenable it and specify a secret for the cookie parser to secure the cookies. Find out more on\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#cookie"}),"Cookie part of HTTP Configuration")," file."),Object(a.b)("h3",{id:"reading-cookies"},"Reading Cookies"),Object(a.b)("p",null,"When there you got a Request instance in your scope. You can access your parsed cookies with ",Object(a.b)("inlineCode",{parentName:"p"},"cookies")," parameter of that\ninstance. It will be an object containing your cookies with their corresponding keys. "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route } from 'silvie/http/controller';\n\nclass GreetingController implements Controller {\n    @route('GET', '/greet')\n    greeterRoute(req, res) {\n        const { name } = req.cookies;\n    \n        if (name) {\n            res.send(`Wassup, got some cookies ${name}?`);\n        } else {\n            res.send(`Who am I talking to?`);        \n        }       \n    }\n}\n")),Object(a.b)("p",null,"So whenever a user who has cookies, goes to this route, we will respond with a message with their name. Otherwise, we\nreturn something else."),Object(a.b)("h3",{id:"setting-cookies"},"Setting Cookies"),Object(a.b)("p",null,"Saying we are doing some authentication for our login page. In some cases you need to return the authentication token in\nresponse cookies to be stored on the client side. You can create a cookie with ",Object(a.b)("inlineCode",{parentName:"p"},"cookie")," method of the response instance.\nThe cookie method will take three parameters: name, value and options. Which the value and options are optional\nparameters."),Object(a.b)("h4",{id:"name"},"name"),Object(a.b)("p",null,"The first parameter will specify the name of that cookie."),Object(a.b)("h4",{id:"value"},"[value]"),Object(a.b)("p",null,"The second parameter is the value to be set for the cookie. "),Object(a.b)("h4",{id:"options"},"[options]"),Object(a.b)("p",null,"Cookie options are a few to indicate how the cookie should be stored or accessed later. Here are the list of acceptable\noptions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxAge"),": This will specify the maxAge of the cookie in ",Object(a.b)("inlineCode",{parentName:"li"},"milliseconds"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"expires"),": This is a ",Object(a.b)("inlineCode",{parentName:"li"},"Date object")," indicating when the cookie has to be expired."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"path"),": A string that shows the path of the cookie. This is ",Object(a.b)("inlineCode",{parentName:"li"},"'/'")," by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"domain"),": A string to specify the domain of the cookie."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"secure"),": Weather to only send cookies over HTTPS or not. By default, this will be ",Object(a.b)("inlineCode",{parentName:"li"},"false")," for HTTP, and ",Object(a.b)("inlineCode",{parentName:"li"},"true")," for HTTPS requests. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"httpOnly"),": Weather to make the cookie only accessible from HTTP(S) requests and not from the client javascript."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sameSite"),": Specify if the cookie is a ",Object(a.b)("em",{parentName:"li"},"same site")," cookie. This is false by default, but you can set it to ",Object(a.b)("inlineCode",{parentName:"li"},"'strict'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'lax'")," or ",Object(a.b)("inlineCode",{parentName:"li"},"'none'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"signed"),": If this option will be true, it will add an extra cookie with ",Object(a.b)("inlineCode",{parentName:"li"},".sig")," suffix to your cookies, which contains a SHA1 hash of the ",Object(a.b)("inlineCode",{parentName:"li"},"cookie-name=cookie-value"),", in order to detect tampered cookies next time it is being received."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"overwrite"),": This option will determine if cookies with the same name should be overwritten in the same request or not.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route } from 'silvie/http/controller';\n\nclass AuthenticationController implements Controller {\n    @route('POST', '/login')\n    handleLogin(req, res) {\n        const { username, password } = req.body;        \n\n        // Authentication process\n\n        if (userIsValid) {\n            res.cookie('access_token', 'YOU_NEED_TO_GENERATE_A_TOKEN_FOR_THE_USER', {\n                maxAge: 7 * 24 * 60 * 60 * 1000, // expire after 7 days \n                secure: true,\n                sameSite: false,\n                httpOnly: true\n            });            \n\n            res.send('You are logged in');\n        } else {\n            res.send('Wrong username or password');\n        }       \n    }\n}\n")),Object(a.b)("h3",{id:"deleting-cookies"},"Deleting Cookies"),Object(a.b)("p",null,"Deleting cookies will have its own traditional way. You have to set the cookie again with an expiration date before the\ncurrent date. It is recommended to set the expires attribute to a ",Object(a.b)("inlineCode",{parentName:"p"},"0 Date Object"),". You also have to set the same cookie\nattributes for that you have used to create it. "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route } from 'silvie/http/controller';\n\nclass AuthenticationController implements Controller {\n    @route('GET', '/logout')\n    handleLogout(req, res) {\n        // Logut process\n\n        res.cookie('access_token', null, {\n            expires: new Date(0),\n            secure: true,\n            sameSite: false,\n            httpOnly: true\n        });            \n\n        res.send('You are logged out');\n    }\n}\n")),Object(a.b)("h2",{id:"session"},"Session"),Object(a.b)("p",null,"In most of back-end applications, working with sessions is an important thing that needs to be done. We are using\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express-session"}),"express-session")," package to handle the session management. You can learn\nmore about configuring the session feature in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#session"}),"Session part of HTTP Configuration")," file. "),Object(a.b)("h3",{id:"session-stores"},"Session Stores"),Object(a.b)("p",null,"There are multiple ways of storing session data on the server, to access them later on demand. Silvie supports ",Object(a.b)("inlineCode",{parentName:"p"},"File"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"Redis")," stores. "),Object(a.b)("p",null,"The sessions will be stored by their identifiers which is a UUID, generated the first time you try to\nwrite to the session. The UUID generator is ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/uuid"}),"uuid")," package, which we are using the\nv4 method to generate session identifiers."),Object(a.b)("h4",{id:"file-store"},"File Store"),Object(a.b)("p",null,"When you configure the session to use this kind of store, it will create a directory and emits a separate file for each\nsession. The files will be deleted automatically after their expiration date passed."),Object(a.b)("h4",{id:"redis-store"},"Redis Store"),Object(a.b)("p",null,"Redis is a fast in-memory data store. Usually, people use it as database cache, message brokers or temporary data\nstorage. Before you use the redis store as your session store, you need to make sure there is an accessible\n",Object(a.b)("strong",{parentName:"p"},"Redis Server"),". You can confirm this by the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"redis-cli ping\n# PONG\n")),Object(a.b)("p",null,"If you see the ",Object(a.b)("inlineCode",{parentName:"p"},"PONG")," message, you are all good to go."),Object(a.b)("h3",{id:"access-session-data"},"Access Session Data"),Object(a.b)("p",null,"Reading and write to session is so straight forward. The express-session will create an object containing all your\nsession key-value pairs. So if you want to set a value to your session, simply assign it to a property of that object\nand name it whatever you want, and later access it from just like reading a property from a regular object."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route } from 'silvie/http/controller';\n\nclass ViewCountController implements Controller {\n    @route('GET', '/view')\n    viewHandler(req, res) {\n        if (req.session.views) {\n            req.session.views += 1;\n            \n            res.send(`Your Views: ${req.session.views}`);\n        } else {\n            req.session.views = 1;\n            \n            res.send('First Visit');        \n        }\n    }\n}\n")),Object(a.b)("h3",{id:"deleting-session-data"},"Deleting Session Data"),Object(a.b)("p",null,"To delete a value from the session, just set it to ",Object(a.b)("inlineCode",{parentName:"p"},"null")," or use the ",Object(a.b)("inlineCode",{parentName:"p"},"delete")," operator."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"req.session.views = null;\ndelete req.session.views;\n")),Object(a.b)("h2",{id:"file-uploads"},"File Uploads"),Object(a.b)("p",null,"Handling file uploads integrated into Silvie HTTP server with ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/uuid"}),"multer")," package.\nMulter restricts file uploads to the structure you define for it, so the client won't be able to upload out of that\nstructure."),Object(a.b)("p",null,"Silvie created some wrapper functions as method decorators which can be imported from the base controller file located\nat ",Object(a.b)("inlineCode",{parentName:"p"},"silvie/http/controller"),"."),Object(a.b)("p",null,"When you configure file uploads for HTTP server, you should specify a temp path. Multer will upload the acceptable files\nthere, and then gives you a ",Object(a.b)("inlineCode",{parentName:"p"},"File")," object containing the path to that temporarily uploaded file and other file metadata."),Object(a.b)("h3",{id:"file-objects"},"File Objects"),Object(a.b)("p",null,"Uploaded files will be accessible by ",Object(a.b)("inlineCode",{parentName:"p"},"File")," instances. A file instance contains the following information about the\nuploaded file:  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"fieldname"),": The field name of the file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"originalname"),": The Original filename"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"encoding"),": File encoding"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"mimetype"),": File mime type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"destination"),": File path"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"filename"),": File name"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"path"),": Full file path"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"size"),": File size in bytes")),Object(a.b)("h3",{id:"single-file-upload"},"Single File Upload"),Object(a.b)("p",null,"To let user upload a single with a specific field name, you need to use ",Object(a.b)("inlineCode",{parentName:"p"},"singleUpload(fieldname)")," method. This method takes a\nsingle parameter which is the field name to accept the file with. Then you can access the uploaded file with ",Object(a.b)("inlineCode",{parentName:"p"},"req.file"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route, singleUpload } from 'silvie/http/controller';\n\nclass UploadController implements Controller {\n    @route('POST', '/single-upload')\n    @singleUpload('profile')\n    uploadUserProfile(req, res) {\n        // Use req.file to do the upload\n    }\n}\n")),Object(a.b)("h3",{id:"multiple-file-upload"},"Multiple File Upload"),Object(a.b)("p",null,"This will let user upload multiple files with different field names. The method for this kind of file upload is\n",Object(a.b)("inlineCode",{parentName:"p"},"multipleUpload(...fields)"),". This method will accept multiple parameters which each parameter is an object determining the ",Object(a.b)("inlineCode",{parentName:"p"},"name"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"maxCount")," for that field. If you don't specify a ",Object(a.b)("em",{parentName:"p"},"maxCount"),", it will use ",Object(a.b)("inlineCode",{parentName:"p"},"1")," as the default value. Then you can\naccess your files with ",Object(a.b)("inlineCode",{parentName:"p"},"req.files")," which indices of that object are the field names you provided before."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route, multipleUpload } from 'silvie/http/controller';\n\nclass UploadController implements Controller {\n    @route('POST', '/multiple-upload')\n    @multipleUpload({ name: 'facebook_profile' }, { name: 'post_thumbnails', maxCount: 10 })\n    uploadFacebookPosts(req, res) {\n        // Your files will be accessible from req.files\n\n        // req.files.facebook_profile\n        // req.files.post_thumbnails[0]\n        // req.files.post_thumbnails[1]\n        // ...\n    }\n}\n")),Object(a.b)("h3",{id:"array-file-upload"},"Array File Upload"),Object(a.b)("p",null,"Array file upload is useful when you have a multiple file select input in your application. This will allow user to\nupload more than one file with a single field name. Use ",Object(a.b)("inlineCode",{parentName:"p"},"arrayUpload(fieldname, [maxCount])")," method to achieve this. It\naccepts a ",Object(a.b)("inlineCode",{parentName:"p"},"fieldname")," and an optional ",Object(a.b)("inlineCode",{parentName:"p"},"maxCount")," parameter which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"1")," if not provided. Then it will give\naccess to uploaded files from ",Object(a.b)("inlineCode",{parentName:"p"},"req.files"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route, arrayUpload } from 'silvie/http/controller';\n\nclass UploadController implements Controller {\n    @route('POST', '/array-upload')\n    @arrayUpload('images', 20)\n    uploadImagesToGallery(req, res) {\n        // Your files will be accessible from req.files\n\n        // req.files[0]\n        // req.files[1]\n        // ...\n    }\n}\n")),Object(a.b)("h3",{id:"allow-upload"},"Allow Upload"),Object(a.b)("p",null,"This method is to allow file uploads without any restrictions. You just need to use ",Object(a.b)("inlineCode",{parentName:"p"},"allowUpload()")," method to allow any\nnumber of files with any field name to be uploaded to that route. Then you can access the uploaded files from\n",Object(a.b)("inlineCode",{parentName:"p"},"req.files"),". The files object entries might not be defined if the client uploads to a field name that is not known for\nthe server."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route, allowUploads } from 'silvie/http/controller';\n\nclass UploadController implements Controller {\n    @route('POST', '/uploads-anything')\n    @allowUploads()\n    uploadAnyFile(req, res) {\n        // This route will accept any uploaded file\n\n        // req.files.images -> Array\n        // req.files.profile -> File\n        // ...\n    }\n}\n")),Object(a.b)("h3",{id:"prevent-upload"},"Prevent Upload"),Object(a.b)("p",null,"If you want to prevent the client from uploading any files to a specific route, you should use ",Object(a.b)("inlineCode",{parentName:"p"},"preventUpload()")," method.\nSo if a request comes with a file attached to it, a ",Object(a.b)("inlineCode",{parentName:"p"},"LIMIT_UNEXPECTED_FILE")," error will be raised."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import Controller, { route, preventUpload } from 'silvie/http/controller';\n\nclass UploadController implements Controller {\n    @route('POST', '/no-uploads')\n    @preventUpload()\n    weDontAcceptFiles(req, res) {\n        // This route won't accept any file uploads\n    }\n}\n")),Object(a.b)("h2",{id:"request-bodies"},"Request Bodies"),Object(a.b)("p",null,"You are able to configure different types of request bodies to be parsed and use them in your request handlers with\n",Object(a.b)("inlineCode",{parentName:"p"},"req.body"),". The available body parsers are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"text"),": text/plain"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"raw"),": application/octet-stream"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"json"),": application/json"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"urlencoded"),": application/x-www-form-urlencoded")),Object(a.b)("p",null,"Each of these parsers will create a middleware on the Express application which only responds its associated mime type\nin the configuration file. You can change their default mime type in\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#body"}),"Body part of HTTP Configuration")," file."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Avoid registering too many body parsers in your application since they put a middleware in the way of requests, you may\nend up with performance issues."))),Object(a.b)("h3",{id:"raw"},"Raw"),Object(a.b)("p",null,"Raw body parser will parse the request body into a ",Object(a.b)("inlineCode",{parentName:"p"},"Buffer"),". "),Object(a.b)("h3",{id:"text"},"Text"),Object(a.b)("p",null,"Text body parser will parse the request body as a plain text string. "),Object(a.b)("h3",{id:"json"},"JSON"),Object(a.b)("p",null,"JSON body parser will parse the request body into an equivalent of that JSON string. It can be configured to only parse\nobjects and arrays with ",Object(a.b)("inlineCode",{parentName:"p"},"strict")," option. Otherwise, it will parse anything that ",Object(a.b)("inlineCode",{parentName:"p"},"JSON.parse")," accepts as a valid JSON\nstring.  "),Object(a.b)("h3",{id:"url-encoded"},"URL Encoded"),Object(a.b)("p",null,"URL Encoded parser will parse the request body into an object, containing all key value pairs of your URL encoded\nstring. This parser can also parse extended URL encoded strings with the ",Object(a.b)("inlineCode",{parentName:"p"},"extended")," option in the configuration file.\nExtended URL Encoded strings can contain nested data."),Object(a.b)("h2",{id:"serve-static-assets"},"Serve Static Assets"),Object(a.b)("p",null,"Silvie utilizes ",Object(a.b)("inlineCode",{parentName:"p"},"Express.static")," to serve static content. You need to tell Silvie about where the contents are and how\nthey need to be served. You should define your static content directories in the\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/configuration#statics"}),"Statics part of HTTP Configuration")," file, and their content will be served when the\napplication starts."))}c.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);