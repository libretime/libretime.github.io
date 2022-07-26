"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1599],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93852:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],u={title:"Backup",sidebar_position:10},s=void 0,l={unversionedId:"admin-manual/backup",id:"admin-manual/backup",title:"Backup",description:"Create a backup",source:"@site/../docs/admin-manual/backup.md",sourceDirName:"admin-manual",slug:"/admin-manual/backup",permalink:"/pr-1939/docs/next/admin-manual/backup",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/backup.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Backup",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migrate from Airtime",permalink:"/pr-1939/docs/next/admin-manual/setup/migrate-from-airtime"},next:{title:"Setting the server time",permalink:"/pr-1939/docs/next/admin-manual/server-time"}},c={},p=[{value:"Create a backup",id:"create-a-backup",level:2},{value:"Backup the configuration",id:"backup-the-configuration",level:3},{value:"Backup the database",id:"backup-the-database",level:3},{value:"Backup the storage",id:"backup-the-storage",level:3},{value:"Restore a backup",id:"restore-a-backup",level:2},{value:"Restore the configuration",id:"restore-the-configuration",level:3},{value:"Restore the database",id:"restore-the-database",level:3},{value:"Restore the storage",id:"restore-the-storage",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-backup"},"Create a backup"),(0,o.kt)("p",null,"This guide walk you though the steps required to create a full backup of your installation."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to ",(0,o.kt)("strong",{parentName:"p"},"automate")," and ",(0,o.kt)("strong",{parentName:"p"},"test")," the backup process and to have it run regularly. Having an ",(0,o.kt)("strong",{parentName:"p"},"automated")," and ",(0,o.kt)("strong",{parentName:"p"},"tested")," restoring process is also recommended."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Feel free to pick the backup software of your choice, but know that rsync and similar tools are not backup tools. You could use ",(0,o.kt)("a",{parentName:"p",href:"https://restic.net/"},"restic")," or ",(0,o.kt)("a",{parentName:"p",href:"https://borgbackup.readthedocs.io/"},"borg"),"."))),(0,o.kt)("h3",{id:"backup-the-configuration"},"Backup the configuration"),(0,o.kt)("p",null,"On common setups, you need to backup the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/libretime")," folder."),(0,o.kt)("h3",{id:"backup-the-database"},"Backup the database"),(0,o.kt)("p",null,"You need to backup the PostgreSQL database, which holds the entire data of your installation."),(0,o.kt)("p",null,"Here is an example to dump your PostgreSQL database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_dump --file=libretime.sql libretime\n")),(0,o.kt)("p",null,"Please read the ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_dump")," usage for additional details."),(0,o.kt)("h3",{id:"backup-the-storage"},"Backup the storage"),(0,o.kt)("p",null,"You need to backup the entire file storage, which holds all the files of your installation."),(0,o.kt)("p",null,"The path to your storage was defined during the installation process."),(0,o.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,o.kt)("h3",{id:"restore-the-configuration"},"Restore the configuration"),(0,o.kt)("p",null,"Copy the backed configuration files back to the configuration folder."),(0,o.kt)("h3",{id:"restore-the-database"},"Restore the database"),(0,o.kt)("p",null,"\ud83d\udea7"),(0,o.kt)("h3",{id:"restore-the-storage"},"Restore the storage"),(0,o.kt)("p",null,"\ud83d\udea7"))}m.isMDXComponent=!0}}]);