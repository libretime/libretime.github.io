"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={title:"Widgets"},s=void 0,o={unversionedId:"developer-manual/widgets",id:"version-3.0.0-alpha.13/developer-manual/widgets",title:"Widgets",description:"Bring your LibreTime broadcast to your website with embeddable widgets! LibreTime comes with two widgets: a streaming player and a schedule. Both widgets use iframes to display and can be placed wherever embeddable code can on a website.",source:"@site/versioned_docs/version-3.0.0-alpha.13/developer-manual/widgets.md",sourceDirName:"developer-manual",slug:"/developer-manual/widgets",permalink:"/pr-2071/docs/developer-manual/widgets",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/developer-manual/widgets.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"Widgets"},sidebar:"tutorialSidebar",previous:{title:"LibreTime API usage",permalink:"/pr-2071/docs/developer-manual/legacy-api"},next:{title:"Releases",permalink:"/pr-2071/docs/releases/"}},l={},d=[{value:"Getting started",id:"getting-started",level:2},{value:"Streaming player widget",id:"streaming-player-widget",level:2},{value:"Show schedule widget",id:"show-schedule-widget",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bring your LibreTime broadcast to your website with embeddable widgets! LibreTime comes with two widgets: a streaming player and a schedule. Both widgets use iframes to display and can be placed wherever embeddable code can on a website."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Before using the widgets, make sure LibreTime's Public API is enabled in ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"General"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(50439).Z,width:"951",height:"590"})),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"LibreTime widgets cannot function through VPNs or SSH tunneling. The instance must be accessible from the internet for the widgets to work.")),(0,i.kt)("h2",{id:"streaming-player-widget"},"Streaming player widget"),(0,i.kt)("p",null,"The streaming player widget inserts your LibreTime stream into your website. One example is from ",(0,i.kt)("a",{parentName:"p",href:"https://wcrsfm.org/"},"WRCS Community Radio")," in Columbus, Ohio, USA."),(0,i.kt)("iframe",{frameborder:"0",width:"400",height:"235",src:"http://broadcast.wcrsfm.org/embed/player?stream=auto&title=Now Playing"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(44110).Z,width:"951",height:"455"})),(0,i.kt)("p",null,"From ",(0,i.kt)("strong",{parentName:"p"},"Widgets")," > ",(0,i.kt)("strong",{parentName:"p"},"Player"),", enter a title for your streaming widget and select what stream you'd like to use. All selectible streams must first be configured in ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"Streams")," (see ",(0,i.kt)("a",{parentName:"p",href:"/pr-2071/docs/user-manual/settings"},"Settings"),"). ",(0,i.kt)("strong",{parentName:"p"},"Auto detect")," should be fine for most."),(0,i.kt)("h2",{id:"show-schedule-widget"},"Show schedule widget"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(95186).Z,width:"951",height:"590"})),(0,i.kt)("p",null,"The show schedule widget displays the upcoming shows for the next seven days. There are no customizable settings for this widget."))}c.isMDXComponent=!0},44110:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/widgets-widgets_player-c98361905301cd0b46566978d650535b.png"},95186:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/widgets-widgets_schedule-188d93834739d3c27be03b53e1140390.png"},50439:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/widgets-widgets_settings-589a52eabb98d52581022a6de485e8c6.png"}}]);