"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"Upgrade",sidebar_position:80},s=void 0,p={unversionedId:"admin-manual/setup/upgrade",id:"version-3.0.0-alpha.12/admin-manual/setup/upgrade",title:"Upgrade",description:"This guide walk you though the steps required to upgrade LibreTime.",source:"@site/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/upgrade.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/upgrade",permalink:"/pr-1939/docs/admin-manual/setup/upgrade",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/upgrade.md",tags:[],version:"3.0.0-alpha.12",sidebarPosition:80,frontMatter:{title:"Upgrade",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Reverse proxy",permalink:"/pr-1939/docs/admin-manual/setup/reverse-proxy"},next:{title:"Migrate from Airtime",permalink:"/pr-1939/docs/admin-manual/setup/migrate-from-airtime"}},u={},c=[{value:"Make a backup",id:"make-a-backup",level:2},{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Apply upgrade instructions",id:"apply-upgrade-instructions",level:2},{value:"Apply migrations",id:"apply-migrations",level:2},{value:"Restart the services",id:"restart-the-services",level:2},{value:"Verify",id:"verify",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walk you though the steps required to upgrade LibreTime."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should always have proper backups and a rollback scenario in place before updating. If the update does not go smoothly, it may cause significant downtime, so you should always have a fallback system available during the update to ensure ",(0,i.kt)("strong",{parentName:"p"},"broadcast continuity"),"."))),(0,i.kt)("h2",{id:"make-a-backup"},"Make a backup"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/pr-1939/docs/admin-manual/backup"},"the backup guide")," to make an extra backup of your installation and prepare a rollback scenario in case of accidental data loss during the upgrade process."),(0,i.kt)("h2",{id:"install-the-new-version"},"Install the new version"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/pr-1939/docs/admin-manual/setup/install#download"},"the install guide")," to download and install the new version, and re-run the ",(0,i.kt)("inlineCode",{parentName:"p"},"./install")," script with the same arguments you used during the initial install."),(0,i.kt)("h2",{id:"apply-upgrade-instructions"},"Apply upgrade instructions"),(0,i.kt)("p",null,"Be sure to carefully read ",(0,i.kt)("strong",{parentName:"p"},"all")," the ",(0,i.kt)("a",{parentName:"p",href:"/pr-1939/docs/releases/"},"releases notes"),", from your current version to the targeted version, to apply upgrade or breaking changes instructions to your installation."),(0,i.kt)("h2",{id:"apply-migrations"},"Apply migrations"),(0,i.kt)("p",null,"Run the following command to apply the database migrations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"libretime-api migrate\n")),(0,i.kt)("h2",{id:"restart-the-services"},"Restart the services"),(0,i.kt)("p",null,"Restart all the services to make sure all the changes are applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl restart \\\n   libretime-analyzer \\\n   libretime-api \\\n   libretime-celery \\\n   libretime-playout \\\n   libretime-liquidsoap \\\n   apache2\n")),(0,i.kt)("h2",{id:"verify"},"Verify"),(0,i.kt)("p",null,"Verify that all the services are still running after the install process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status \\\n   libretime-analyzer \\\n   libretime-api \\\n   libretime-celery \\\n   libretime-playout \\\n   libretime-liquidsoap \\\n   apache2\n")),(0,i.kt)("p",null,"Verify for any error in the logs after the install process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tail -f -n 100 "/var/log/syslog" | grep "libretime-"\n')),(0,i.kt)("p",null,"Log into the interface and verify for any error after the install process."),(0,i.kt)("p",null,"If you encounter issues with the new interface, you may need to clear your web browser's cache."))}m.isMDXComponent=!0}}]);