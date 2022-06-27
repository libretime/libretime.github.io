"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7563],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54692:function(e,t,n){var a=n(67294),r=n(39960);t.Z=function(e){var t=e.version,n=e.children;return a.createElement(r.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},n)}},13079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(20600),o=["components"],l={title:"LibreTime 3.0.0 alpha 1"},u=void 0,p={unversionedId:"releases/3.0.0-alpha.01",id:"releases/3.0.0-alpha.01",title:"LibreTime 3.0.0 alpha 1",description:"Features",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/releases/3.0.0-alpha.01.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.01",permalink:"/pr-1876/fr/docs/next/releases/3.0.0-alpha.01",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.01.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 1"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 2",permalink:"/pr-1876/fr/docs/next/releases/3.0.0-alpha.02"},next:{title:"LibreTime 3.0.0 alpha",permalink:"/pr-1876/fr/docs/next/releases/3.0.0-alpha.00"}},m={},d=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Silan from OBS build (https://github.com/libretime/libretime/issues/177#issuecomment-299195796)",id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796",level:4},{value:"Legacy upstream silan packages (https://github.com/libretime/libretime/issues/197)",id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197",level:4}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.ZP,{date:"2017-04-20",version:"3.0.0-alpha.1",mdxType:"ReleaseHead"}),(0,i.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make overriding of album tag in downloaded Podcasts configurable"),(0,i.kt)("li",{parentName:"ul"},"Configurable master and show sources in settings"),(0,i.kt)("li",{parentName:"ul"},"Version check on main interface against Github"),(0,i.kt)("li",{parentName:"ul"},"updated i18n strings (complete ru_RU translation)"),(0,i.kt)("li",{parentName:"ul"},'Allow closing "Scheduled Shows" tab in Showbuilder'),(0,i.kt)("li",{parentName:"ul"},"FreeIPA Auth Adaptor")),(0,i.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"restart=always")," in systemd installs"),(0,i.kt)("li",{parentName:"ul"},"Do not depend on hardcoded admin password for autoplaylist feature"),(0,i.kt)("li",{parentName:"ul"},"more legacy upstream branding removal"),(0,i.kt)("li",{parentName:"ul"},"restore table settings (ie. columns and sort) on login"),(0,i.kt)("li",{parentName:"ul"},"translatable radio page"),(0,i.kt)("li",{parentName:"ul"},"line-in recording almost works again"),(0,i.kt)("li",{parentName:"ul"},"no more oopsing on week info API")),(0,i.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ubuntu")," Vagrant box has been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"ubuntu-xenial")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ubuntu-trusty"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"debian")," box has been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"debian-jessie")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"debian-wheezy"),". Users of the old boxes should switch to a new box so we can drop the old box after this release.")),(0,i.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,i.kt)("p",null,"The following issues need a workaround for the time being. Please search the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,i.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,i.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on all Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except CentOS which does not have upstream packages and you may either install from source or use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,i.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,i.kt)("p",null,"You can check the version of silan by running with ",(0,i.kt)("inlineCode",{parentName:"p"},"silan --version")," which should report ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.3")," or with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo dpkg -s silan | awk '/Version/ {print $2}'")," that will show the exact package version you installed. Please include this information if you file bugs concerning silan."),(0,i.kt)("p",null,"There are multiple workarounds to this issue and ",(0,i.kt)("a",{parentName:"p",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=855319"},"a bug against the upstream")," has been opened with Debian. Until this is sorted you should pre-install silan from a source you trust. If your distro has not updated to 0.3.3 yet you can also help by asking your distros maintainers for a bump."),(0,i.kt)("p",null,"The following solutions have been reported to work."),(0,i.kt)("h4",{id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796"},"Silan from OBS build (",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"},"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"),")"),(0,i.kt)("p",null,"Works for all relevant Debian and Ubuntu distros and installs silan ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\n# install package signing key from obs\nwget -qO- https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0/Release.key \\\n  | apt-key add -\n\n# add OBS repo to sources list (pick the distro you need)\n\n# Debian Wheezy\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Debian Jessie\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_8.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Trusty\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_14.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Xenial\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_16.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n\n# update local package database\napt-get update\n\n# install silan 0.3.3 from obs packages\napt-get install silan\n")),(0,i.kt)("h4",{id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197"},"Legacy upstream silan packages (",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/197"},"https://github.com/libretime/libretime/issues/197"),")"),(0,i.kt)("p",null,"Legacy Upstream hosts patched packages for Ubuntu Trusty on ",(0,i.kt)("inlineCode",{parentName:"p"},"apt.sourcefabric.org"),". They install as ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.2~trusty~sfo-1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\nsudo tee -a /etc/apt/sources.list <<EOD\ndeb https://apt.sourcefabric.org/ trusty main\nEOD\n\nsudo apt-get update\nsudo apt-get install sourcefabric-keyring\nsudo apt-get update\nsudo apt-get install --reinstall silan=0.3.2~trusty~sfo-1\n")))}h.isMDXComponent=!0},20600:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(54692),o=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This version was released the ",(0,i.kt)("strong",null,n.date),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please report new issues and/or feature requests in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,i.kt)("p",{parentName:"div"},"Join our ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,i.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion."))),(0,i.kt)("p",null,"The full tarball for the ",(0,i.kt)("code",null,n.version)," release of LibreTime is available ",(0,i.kt)(s.Z,{version:n.version,mdxType:"TarballLink"},"here"),"."))}u.isMDXComponent=!0}}]);