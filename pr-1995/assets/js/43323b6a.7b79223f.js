"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8601],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Troubleshooting",sidebar_position:90},s=void 0,u={unversionedId:"admin-manual/troubleshooting",id:"version-3.0.0-alpha.13/admin-manual/troubleshooting",title:"Troubleshooting",description:"This guide walk you though the steps required to troubleshoot LibreTime.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/troubleshooting.md",sourceDirName:"admin-manual",slug:"/admin-manual/troubleshooting",permalink:"/pr-1995/docs/admin-manual/troubleshooting",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/troubleshooting.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:90,frontMatter:{title:"Troubleshooting",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Change default passwords",permalink:"/pr-1995/docs/admin-manual/default-passwords"},next:{title:"Uninstall",permalink:"/pr-1995/docs/admin-manual/uninstall"}},c={},p=[{value:"Services status",id:"services-status",level:2},{value:"Logs",id:"logs",level:2}],m={toc:p};function g(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide walk you though the steps required to troubleshoot LibreTime."),(0,o.kt)("h2",{id:"services-status"},"Services status"),(0,o.kt)("p",null,"When facing a problem with LibreTime the first reflex is to verify whether the services are running."),(0,o.kt)("p",null,"In the web interface, go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Status")," to see the state of the services."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78243).Z,width:"1500",height:"1122"})),(0,o.kt)("p",null,"Or directly from a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl --all --plain | egrep 'libretime|nginx|php.*-fpm'\n")),(0,o.kt)("p",null,"If a service isn't running, you should search for details using the tool running those services.\nOn a common setup, you should use the systemd service status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status libretime-celery\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be sure to replace the service name with the problematic one."))),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"The next place to search for details on potential errors are the log files."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," file contains most of the system logs combined. This log file may contain information that the application logger wasn't able to log, such as early startup errors. You can follow the logs using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tail -n 100 -f "/var/log/syslog"\n# Filter the logs\nsudo tail -n 100 -f "/var/log/syslog" | egrep \'libretime|nginx|php.*-fpm\'\n')),(0,o.kt)("p",null,"On a common setup, to access LibreTime specific logs you should search for the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/analyzer.log")," file contains logs from the analyzer,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/api.log")," file contains logs from the api,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/legacy.log")," file contains logs from the legacy app,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/liquidsoap.log")," file contains logs from liquidsoap,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/playout.log")," file contains logs from playout.")),(0,o.kt)("p",null,"For some LibreTime services, you can set a higher log level using the ",(0,o.kt)("inlineCode",{parentName:"p"},"LIBRETIME_LOG_LEVEL")," environment variable, or by running the service by hand and using a command line flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-analyzer --config /etc/libretime/config.yml --log-level debug\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/libretime.error.log")," file contains logs from the web server."))}g.isMDXComponent=!0},78243:function(e,t,n){t.Z=n.p+"assets/images/troubleshooting-status-page-61c938940393f94a08d1686476a54f4e.png"}}]);