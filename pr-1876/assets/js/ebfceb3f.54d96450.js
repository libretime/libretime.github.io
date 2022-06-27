"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[921],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||c[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],u={title:"How to setup a firewall using UFW"},i=void 0,s={unversionedId:"admin-manual/tutorials/setup-a-firewall-using-ufw",id:"admin-manual/tutorials/setup-a-firewall-using-ufw",title:"How to setup a firewall using UFW",description:"This tutorials will walk you though the steps required to setup a firewall using UFW.",source:"@site/../docs/admin-manual/tutorials/setup-a-firewall-using-ufw.md",sourceDirName:"admin-manual/tutorials",slug:"/admin-manual/tutorials/setup-a-firewall-using-ufw",permalink:"/pr-1876/docs/next/admin-manual/tutorials/setup-a-firewall-using-ufw",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/tutorials/setup-a-firewall-using-ufw.md",tags:[],version:"current",frontMatter:{title:"How to setup a firewall using UFW"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/pr-1876/docs/next/admin-manual/troubleshooting"},next:{title:"How to setup a static ip using Netplan",permalink:"/pr-1876/docs/next/admin-manual/tutorials/setup-a-static-ip-using-netplan"}},p={},c=[{value:"1. Install and enable <code>UFW</code>",id:"1-install-and-enable-ufw",level:2},{value:"2. Configure allowed ports",id:"2-configure-allowed-ports",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorials will walk you though the steps required to setup a firewall using ",(0,l.kt)("a",{parentName:"p",href:"https://doc.ubuntu-fr.org/ufw"},"UFW"),"."),(0,l.kt)("h2",{id:"1-install-and-enable-ufw"},"1. Install and enable ",(0,l.kt)("inlineCode",{parentName:"h2"},"UFW")),(0,l.kt)("p",null,"First you need to make sure UFW is installed and enabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ufw\nsudo ufw enable\n")),(0,l.kt)("h2",{id:"2-configure-allowed-ports"},"2. Configure allowed ports"),(0,l.kt)("p",null,"Next, you need to configure the firewall allowed ports:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 22,80,8000/tcp\n")),(0,l.kt)("p",null,"If you plan to use the live stream input endpoint, be sure to open the ",(0,l.kt)("inlineCode",{parentName:"p"},"8001")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"8002")," ports:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 8001,8002/tcp\n")))}d.isMDXComponent=!0}}]);