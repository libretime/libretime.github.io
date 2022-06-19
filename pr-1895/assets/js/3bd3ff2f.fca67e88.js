"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9311],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54692:function(e,t,r){var n=r(67294),a=r(39960);t.Z=function(e){var t=e.version,r=e.children;return n.createElement(a.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},r)}},61735:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(39772),l=["components"],s={title:"LibreTime 3.0.0 alpha 12"},p=void 0,u={unversionedId:"releases/3.0.0-alpha.12",id:"version-3.0.0-alpha.12/releases/3.0.0-alpha.12",title:"LibreTime 3.0.0 alpha 12",description:"Contributors",source:"@site/versioned_docs/version-3.0.0-alpha.12/releases/3.0.0-alpha.12.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.12",permalink:"/pr-1895/docs/releases/3.0.0-alpha.12",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/releases/3.0.0-alpha.12.md",tags:[],version:"3.0.0-alpha.12",frontMatter:{title:"LibreTime 3.0.0 alpha 12"},sidebar:"tutorialSidebar",previous:{title:"Unreleased",permalink:"/pr-1895/docs/releases/unreleased"},next:{title:"LibreTime 3.0.0 alpha 11",permalink:"/pr-1895/docs/releases/3.0.0-alpha.11"}},c={},m=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udcdd Colophon",id:"-colophon",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{date:"2022-03-29",version:"3.0.0-alpha.12",mdxType:"ReleaseHead"}),(0,i.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,i.kt)("p",null,"The LibreTime project wants to thank the following contributors for authoring PRs to this release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@jooola"),(0,i.kt)("li",{parentName:"ul"},"@paddatrapper")),(0,i.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"playout:")," add locales to libretime-playout-notify calls (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1715"},"#1715"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"worker:")," enable logfile variable expansion in ExecStart (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1717"},"#1717"),")")),(0,i.kt)("h2",{id:"-colophon"},"\ud83d\udcdd Colophon"),(0,i.kt)("p",null,"This release mainly fixes bugs present in the ",(0,i.kt)("a",{parentName:"p",href:"/pr-1895/docs/releases/3.0.0-alpha.11"},"3.0.0-alpha.11 release"),"."))}f.isMDXComponent=!0},39772:function(e,t,r){r.d(t,{ZP:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=r(54692),l=["components"],s={toc:[]};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This version was released the ",(0,i.kt)("strong",null,r.date),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please report new issues and/or feature requests in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,i.kt)("p",{parentName:"div"},"Join our ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,i.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion."))),(0,i.kt)("p",null,"The full tarball for the ",(0,i.kt)("code",null,r.version)," release of LibreTime is available ",(0,i.kt)(o.Z,{version:r.version,mdxType:"TarballLink"},"here"),"."))}p.isMDXComponent=!0}}]);