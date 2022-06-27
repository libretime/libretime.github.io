"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5093],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||u;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,i=new Array(u);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<u;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90239:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),u=(r(67294),r(3905)),i=["components"],o={title:"Webstreams"},s=void 0,l={unversionedId:"user-manual/webstreams",id:"user-manual/webstreams",title:"Webstreams",description:"<iframe",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-manual/webstreams.md",sourceDirName:"user-manual",slug:"/user-manual/webstreams",permalink:"/pr-1876/fr/docs/next/user-manual/webstreams",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/webstreams.md",tags:[],version:"current",frontMatter:{title:"Webstreams"},sidebar:"tutorialSidebar",previous:{title:"G\xe9rer les comptes utilisateur.ice.s",permalink:"/pr-1876/fr/docs/next/user-manual/users"},next:{title:"Developer manual",permalink:"/pr-1876/fr/docs/next/developer-manual/"}},c={},p=[{value:"Ajouter un flux web",id:"ajouter-un-flux-web",level:2}],m={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Ha3X6aYdY04",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,u.kt)("h2",{id:"ajouter-un-flux-web"},"Ajouter un flux web"),(0,u.kt)("p",null,"Une URL de flux web et des m\xe9tadonn\xe9es peuvent \xeatre ajout\xe9es \xe0 la biblioth\xe8que LibreTime, afin qu'un flux distant puisse \xeatre recherch\xe9 et programm\xe9 pour \xeatre int\xe9gr\xe9 \xe0 une \xe9mission. Par exemple, au d\xe9but de l'heure, votre station peut extraire un reportage des journalistes travaillant dans un autre studio. Il s'agit d'un concept diff\xe9rent de celui des flux distants Master Source et Show Source qui sont pouss\xe9s dans le programme de diffusion de LibreTime."),(0,u.kt)("p",null,"Pour ajouter un flux Web, cliquez sur le bouton ",(0,u.kt)("strong",{parentName:"p"},"+ Nouveau")," sur le c\xf4t\xe9 gauche de la page Flux web. Comme une liste de lecture, les flux Web dans la biblioth\xe8que peuvent avoir un titre et une description, ce qui peut vous aider \xe0 les retrouver dans des recherches ult\xe9rieures."),(0,u.kt)("p",null,(0,u.kt)("img",{src:r(9031).Z,width:"632",height:"575"})),(0,u.kt)("p",null,"Le param\xe8tre ",(0,u.kt)("strong",{parentName:"p"},"Stream URL")," doit inclure le num\xe9ro de port (tel que 8000) et le point de montage (tel que remote_stream) du flux distant, en plus du nom du serveur de streaming. Une ",(0,u.kt)("strong",{parentName:"p"},"longueur par d\xe9faut")," pour le flux distant peut \xe9galement \xeatre d\xe9finie. Si le flux est ajout\xe9 \xe0 la fin d'une \xe9mission qui, de ce fait, est surbook\xe9e, il sera supprim\xe9 \xe0 la fin de l'\xe9mission."),(0,u.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"LibreTime v\xe9rifie le statut du flux web distant lors de l'\xe9dition des param\xe8tres du flux, donc un flux hors ligne entra\xeenera une erreur. Il existe de nombreux outils tels que ",(0,u.kt)("a",{parentName:"p",href:"https://danielnoethen.de/butt/"},"BUTT")," et ",(0,u.kt)("a",{parentName:"p",href:"https://www.mixxx.org"},"MIXXX")," qui peuvent \xeatre utilis\xe9s pour envoyer un flux de test \xe0 LibreTime peut le sauvegarder ; lisez plus ",(0,u.kt)("a",{parentName:"p",href:"/pr-1876/fr/docs/next/user-manual/live-broadcast"},"ici"),"."))))}d.isMDXComponent=!0},9031:function(e,t,r){t.Z=r.p+"assets/images/webstreams-webstream-df70a33364a43def4a2c8a8ff6335369.jpg"}}]);