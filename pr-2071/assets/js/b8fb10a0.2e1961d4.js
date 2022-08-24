"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54692:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(39960);const i=e=>{let{version:t,children:r}=e;return a.createElement(n.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},r)}},13418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),i=r(20304);const o={title:"LibreTime 3.0.0 alpha"},l=void 0,s={unversionedId:"releases/3.0.0-alpha.00",id:"version-3.0.0-alpha.13/releases/3.0.0-alpha.00",title:"LibreTime 3.0.0 alpha",description:"The first release from the LibreTime Community.",source:"@site/versioned_docs/version-3.0.0-alpha.13/releases/3.0.0-alpha.00.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.00",permalink:"/pr-2071/docs/releases/3.0.0-alpha.00",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/releases/3.0.0-alpha.00.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"LibreTime 3.0.0 alpha"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 1",permalink:"/pr-2071/docs/releases/3.0.0-alpha.01"},next:{title:"HD Audio modules",permalink:"/pr-2071/docs/appendix/hd-audio-modules"}},p={},u=[{value:"\ud83d\ude80 Features",id:"-features",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{date:"2017-03-15",version:"3.0.0-alpha",mdxType:"ReleaseHead"}),(0,n.kt)("p",null,"The first release from the LibreTime Community."),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Working installer for Debian and Ubuntu"),(0,n.kt)("li",{parentName:"ul"},"Automated Vagrant setup for developers on either Debian, Ubuntu or CentOS"),(0,n.kt)("li",{parentName:"ul"},"Removed visible legacy upstream branding"),(0,n.kt)("li",{parentName:"ul"},'Disable most legacy upstream "pro" SaaS integrations'),(0,n.kt)("li",{parentName:"ul"},'"pro" widgets for everyone'),(0,n.kt)("li",{parentName:"ul"},"AutoDJ support for shows"),(0,n.kt)("li",{parentName:"ul"},"Tons of bugfixes like working silan cue cuts and more")),(0,n.kt)("p",null,'Some features that went missing in legacy upstream "pro" branch have been back-ported while others are still waiting for such treatment.'),(0,n.kt)("p",null,"The attached debian package is considered unstable as it has not had any serious testing at all. It mainly demonstrates that we are able to build one."))}m.isMDXComponent=!0},20304:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905)),i=r(54692);const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,r.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,r.version)," release of LibreTime is available ",(0,n.kt)(i.Z,{version:r.version,mdxType:"TarballLink"},"here"),"."))}l.isMDXComponent=!0}}]);