"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3807],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(m,".").concat(p)]||d[p]||c[p]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Administrator manual"},m=void 0,u={unversionedId:"admin-manual/README",id:"admin-manual/README",title:"Administrator manual",description:"Welcome to the LibreTime administrator manual, you should find guides and references to setup and configure LibreTime.",source:"@site/../docs/admin-manual/README.md",sourceDirName:"admin-manual",slug:"/admin-manual/",permalink:"/pr-1976/docs/next/admin-manual/",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/README.md",tags:[],version:"current",frontMatter:{title:"Administrator manual"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/pr-1976/docs/next/"},next:{title:"Install",permalink:"/pr-1976/docs/next/admin-manual/setup/install"}},s={},c=[{value:"Install and configure",id:"install-and-configure",level:2},{value:"Advanced",id:"advanced",level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the ",(0,i.kt)("strong",{parentName:"p"},"LibreTime administrator manual"),", you should find guides and references to setup and configure LibreTime."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation assumes that you:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"have basic understanding of command line interfaces,"),(0,i.kt)("li",{parentName:"ul"},"have a basic understanding of networking.")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before following any steps, be sure that your system is up-to-date."))),(0,i.kt)("h2",{id:"install-and-configure"},"Install and configure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/setup/install"},"\ud83d\ude80 Install LibreTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/setup/upgrade"},"\u2b06\ufe0f Upgrade from a previous install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/setup/migrate-from-airtime"},"\ud83d\udeec Migrate from Airtime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/setup/configuration"},"\u2699\ufe0f Configure your installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/setup/reverse-proxy"},"\ud83d\udd12 Put your installation behind a reverse proxy"))),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/backup"},"\u26a0\ufe0f Setup automated backups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-1976/docs/next/admin-manual/custom-authentication"},"\u2714\ufe0f Use a custom authentication system"))))}p.isMDXComponent=!0}}]);