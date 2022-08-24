"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Managing users"},i=void 0,o={unversionedId:"user-manual/users",id:"user-manual/users",title:"Managing users",description:"It is strongly recommended not to use the default admin account in production, especially if your LibreTime server is accessible from the internet.",source:"@site/../docs/user-manual/users.md",sourceDirName:"user-manual",slug:"/user-manual/users",permalink:"/pr-2071/docs/next/user-manual/users",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/users.md",tags:[],version:"current",frontMatter:{title:"Managing users"},sidebar:"tutorialSidebar",previous:{title:"System status",permalink:"/pr-2071/docs/next/user-manual/status"},next:{title:"Webstreams",permalink:"/pr-2071/docs/next/user-manual/webstreams"}},l={},u=[{value:"User account types",id:"user-account-types",level:2},{value:"Guests",id:"guests",level:3},{value:"DJs",id:"djs",level:3},{value:"Program managers",id:"program-managers",level:3},{value:"Administrators",id:"administrators",level:3},{value:"Editing or deleting user accounts",id:"editing-or-deleting-user-accounts",level:2}],c={toc:u};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is strongly recommended not to use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," account in production, especially if your LibreTime server is accessible from the internet.")),(0,a.kt)("h2",{id:"user-account-types"},"User account types"),(0,a.kt)("p",null,"To add further user accounts to the system, one for each of your station staff that need access to Airtime, click the ",(0,a.kt)("strong",{parentName:"p"},"New User")," button with the plus icon. Enter a user name, password and contact details, and then select the ",(0,a.kt)("strong",{parentName:"p"},"User Type")," from the drop down menu, which can be ",(0,a.kt)("em",{parentName:"p"},"Admin"),", ",(0,a.kt)("em",{parentName:"p"},"Program Manager"),", ",(0,a.kt)("em",{parentName:"p"},"DJ"),", or ",(0,a.kt)("em",{parentName:"p"},"Guest"),"."),(0,a.kt)("h3",{id:"guests"},"Guests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can view shows and the playout log on the Calendar and Dashboard, respectively"),(0,a.kt)("li",{parentName:"ul"},"Listen to the output stream without leaving the interface")),(0,a.kt)("h3",{id:"djs"},"DJs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything Guests can do, plus"),(0,a.kt)("li",{parentName:"ul"},"Upload media (music, PSAs, underwriting, shows, etc.) to their own library (DJs cannot view other libraries)"),(0,a.kt)("li",{parentName:"ul"},"Edit metadata, delete, and schedule media in their own library to shows they're assigned to"),(0,a.kt)("li",{parentName:"ul"},"Preview uploaded media ",(0,a.kt)("em",{parentName:"li"},"without")," affecting the live playout"),(0,a.kt)("li",{parentName:"ul"},"Create Playlists, Smart Blocks, and connect Podcasts and Webstreams to LibreTime")),(0,a.kt)("h3",{id:"program-managers"},"Program managers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything DJs can do, plus"),(0,a.kt)("li",{parentName:"ul"},"Manage other users' libraries in addition to their own"),(0,a.kt)("li",{parentName:"ul"},"Create, edit, and delete color-coded shows on the Calendar and assign them to DJs (if needed)"),(0,a.kt)("li",{parentName:"ul"},"Shows can be scheduled to repeat, with the option of linking content between the shows (helpful if a DJ livestreams in each week)"),(0,a.kt)("li",{parentName:"ul"},"View listener statistics"),(0,a.kt)("li",{parentName:"ul"},"Export playout logs for analysis or reporting for music royalties")),(0,a.kt)("h3",{id:"administrators"},"Administrators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything Program Managers can do, plus"),(0,a.kt)("li",{parentName:"ul"},"Manage all user accounts, including the ability to reset passwords"),(0,a.kt)("li",{parentName:"ul"},"Configure Track Types for easy sorting of uploaded content"),(0,a.kt)("li",{parentName:"ul"},"Change system settings")),(0,a.kt)("h2",{id:"editing-or-deleting-user-accounts"},"Editing or deleting user accounts"),(0,a.kt)("p",null,"To edit a user account, click on that user's row in the table, change the user's details in the box on the\nright side, and then click the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button. To remove a user account, click the small ",(0,a.kt)("strong",{parentName:"p"},"x")," icon to the right\nside of its row in the table. You cannot delete your own user account, and usernames cannot be changed once created."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48876).Z,width:"505",height:"461"})),(0,a.kt)("p",null,"Users can update their own password, and their contact, language and time zone details, by clicking their username on the\nright side of the main menu bar, next to the ",(0,a.kt)("strong",{parentName:"p"},"Logout")," link."))}d.isMDXComponent=!0},48876:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/users-user-edit-b58c2b2b0dd8adbb449e40d7375bee1f.png"}}]);