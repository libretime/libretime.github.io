(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7174],{42191:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),s=a(93456),o=["components"],l={title:"Architecture"},c=void 0,u={unversionedId:"developer-manual/design/architecture",id:"developer-manual/design/architecture",title:"Architecture",description:"This document explains the design details and goals for the architecture of LibreTime. It describes the result of a discussion that happened on Github.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developer-manual/design/architecture.md",sourceDirName:"developer-manual/design",slug:"/developer-manual/design/architecture",permalink:"/pr-1876/fr/docs/next/developer-manual/design/architecture",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/design/architecture.md",tags:[],version:"current",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Developer manual",permalink:"/pr-1876/fr/docs/next/developer-manual/"},next:{title:"Database schema creation and migrations",permalink:"/pr-1876/fr/docs/next/developer-manual/design/database-migrations"}},d={},p=[{value:"Previous architecture",id:"previous-architecture",level:2},{value:"New architecture",id:"new-architecture",level:2},{value:"Create the schedule",id:"create-the-schedule",level:3},{value:"Play the schedule",id:"play-the-schedule",level:3},{value:"One setup per radio station",id:"one-setup-per-radio-station",level:3},{value:"Separation of concerns",id:"separation-of-concerns",level:3}],h={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explains the design details and goals for the architecture of LibreTime. It describes the result of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/1610"},"discussion that happened on Github"),"."),(0,r.kt)("h2",{id:"previous-architecture"},"Previous architecture"),(0,r.kt)("p",null,"The previous architecture of LibreTime (based on AirTime) was missing a proper separation of concerns. It was build around a legacy MVC app written in PHP, and services in Python to accomplish specific tasks."),(0,r.kt)("h2",{id:"new-architecture"},"New architecture"),(0,r.kt)("p",null,"Below is the new architecture goal of LibreTime, with a proper separation of concerns."),(0,r.kt)(s.Mermaid,{config:{},chart:"flowchart TD\n    users([Users])\n    public([Public])\n\n    subgraph create_schedule[Create the schedule]\n        webapp[Web app]\n        subgraph core[Backend]\n            message_api[Message API]\n            api[Web API]\n            worker[Worker]\n        end\n    end\n\n    subgraph play_schedule[Play the schedule]\n        playout[Playout]\n        liquidsoap[[Liquidsoap]]\n        icecast[[Icecast]]\n        hls[[HLS]]\n    end\n\n    message_queue[[Message Queue]]\n    database[[Database]]\n    storage[[Storage]]\n\n    users --\x3e |Edit| webapp\n\n    webapp --\x3e api\n    api --\x3e database\n    api --\x3e storage\n    api --\x3e message_queue\n\n    message_queue <--\x3e worker\n    worker --\x3e database\n    worker --\x3e storage\n\n    message_queue <--\x3e message_api\n    message_api --\x3e database\n\n    message_queue <--\x3e playout\n    playout <-. via message queue .-> message_api\n    playout --\x3e |e.g. download file| api\n    playout <--\x3e liquidsoap\n    liquidsoap --\x3e icecast\n    liquidsoap --\x3e hls\n\n    public --\x3e webapp\n    public --\x3e |Listen| icecast\n    public --\x3e |Listen| hls",mdxType:"Mermaid"}),(0,r.kt)("p",null,"The LibreTime architecture is split into 2 main monolithic blocks ",(0,r.kt)("inlineCode",{parentName:"p"},"Create the schedule")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Play the schedule"),". Both blocks must be able to scale horizontally."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A microservice architecture was rejected as it will not fix or improve any aspect of LibreTime."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document tries to focus on creating and playing a schedule, it does not consider features such as monitoring, logging or archiving."))),(0,r.kt)("h3",{id:"create-the-schedule"},"Create the schedule"),(0,r.kt)("p",null,"This block contains the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a web API,"),(0,r.kt)("li",{parentName:"ul"},"a worker to run background tasks,"),(0,r.kt)("li",{parentName:"ul"},"a message API to communicate with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Play the schedule")," block, and other services,"),(0,r.kt)("li",{parentName:"ul"},"a web app to interface with the users.")),(0,r.kt)("p",null,"The web API, the worker and the message API rely on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django framework")," to handle database, message queue and storage access."),(0,r.kt)("h3",{id:"play-the-schedule"},"Play the schedule"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"Play the schedule")," has its own requirements in terms of logic and uptime, it is handled separately from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create the schedule")," block. This block needs to be able to be duplicated in a high availability context."),(0,r.kt)("p",null,"This block contains the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Playout app that communicates with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Play the schedule")," block to gather the schedule,"),(0,r.kt)("li",{parentName:"ul"},"a Liquisoap app that plays and mixes the scheduled items, and dispatch them to the delivery services,"),(0,r.kt)("li",{parentName:"ul"},"an Icecast server that delivers a legacy audio stream to the public,"),(0,r.kt)("li",{parentName:"ul"},"a HLS stream that delivers a modern audio stream to the public.")),(0,r.kt)("h3",{id:"one-setup-per-radio-station"},"One setup per radio station"),(0,r.kt)("p",null,"LibreTime is not meant to be used in a multi-tenant architecture, and an entire LibreTime installation should be dedicated to a single radio station. Previous SAAS or multi-tenant features from Airtime should be deprecated or removed."),(0,r.kt)("h3",{id:"separation-of-concerns"},"Separation of concerns"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Create the schedule")," block must only prepare a schedule, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Play the schedule")," must only play that schedule. A strong separation of concerns is required between the 2 blocks to allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"Play the schedule")," block to meet its uptime requirements while not depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create the schedule")," in case of a failure. Development will be simplified if both blocks share a single and properly defined protocol."))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);