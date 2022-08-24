"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Webstreams"},s=void 0,i={unversionedId:"user-manual/webstreams",id:"user-manual/webstreams",title:"Webstreams",description:"<iframe",source:"@site/../docs/user-manual/webstreams.md",sourceDirName:"user-manual",slug:"/user-manual/webstreams",permalink:"/pr-2071/docs/next/user-manual/webstreams",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/webstreams.md",tags:[],version:"current",frontMatter:{title:"Webstreams"},sidebar:"tutorialSidebar",previous:{title:"Managing users",permalink:"/pr-2071/docs/next/user-manual/users"},next:{title:"Developer manual",permalink:"/pr-2071/docs/next/developer-manual/"}},m={},l=[{value:"Adding a webstream",id:"adding-a-webstream",level:2}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Ha3X6aYdY04",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"adding-a-webstream"},"Adding a webstream"),(0,n.kt)("p",null,"A web stream URL and metadata can be added to the LibreTime library, so that a remote stream can be searched for and scheduled to be ",(0,n.kt)("em",{parentName:"p"},"pulled")," into a show. For example, at the top of the hour your station may pull a news report from journalists working in another studio. This is a different concept from ",(0,n.kt)("strong",{parentName:"p"},"Master Source")," and ",(0,n.kt)("strong",{parentName:"p"},"Show Source")," remote streams which are ",(0,n.kt)("em",{parentName:"p"},"pushed")," into the LibreTime playout schedule."),(0,n.kt)("p",null,"To add a web stream, click the ",(0,n.kt)("strong",{parentName:"p"},"+ New")," button on the left side of the Webstreams page. Like a playlist, web streams in the Library can have a title and ",(0,n.kt)("strong",{parentName:"p"},"Description"),", which may help you find them in searches later."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(71796).Z,width:"632",height:"575"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Stream URL")," setting must include the ",(0,n.kt)("em",{parentName:"p"},"port number")," (such as 8000) and ",(0,n.kt)("em",{parentName:"p"},"mount point")," (such as remote_stream) of the remote stream, in addition to the streaming server name. A ",(0,n.kt)("strong",{parentName:"p"},"Default Length")," for the remote stream can also be set. If the stream is added at the end of a show which becomes overbooked as a result, it will be faded out when the show ends."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"LibreTime checks the remote webstream's status upon editing stream settings, so an offline stream will result in an error. There are many tools such as ",(0,n.kt)("a",{parentName:"p",href:"https://danielnoethen.de/butt/"},"BUTT")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.mixxx.org"},"MIXXX")," that can be used to send a test stream to LibreTime can save it; read more ",(0,n.kt)("a",{parentName:"p",href:"/pr-2071/docs/next/user-manual/live-broadcast"},"here"),".")))}c.isMDXComponent=!0},71796:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/webstreams-webstream-df70a33364a43def4a2c8a8ff6335369.jpg"}}]);