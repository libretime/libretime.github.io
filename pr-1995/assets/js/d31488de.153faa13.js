"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8442],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?i.createElement(h,r(r({ref:t},p),{},{components:a})):i.createElement(h,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54692:function(e,t,a){var i=a(67294),n=a(39960);t.Z=function(e){var t=e.version,a=e.children;return i.createElement(n.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},a)}},39863:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var i=a(83117),n=a(80102),o=(a(67294),a(3905)),r=a(20304),l=["components"],s={title:"LibreTime 3.0.0 alpha 7"},u=void 0,p={unversionedId:"releases/3.0.0-alpha.07",id:"version-3.0.0-alpha.13/releases/3.0.0-alpha.07",title:"LibreTime 3.0.0 alpha 7",description:"Contributors",source:"@site/versioned_docs/version-3.0.0-alpha.13/releases/3.0.0-alpha.07.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.07",permalink:"/pr-1995/docs/releases/3.0.0-alpha.07",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/releases/3.0.0-alpha.07.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"LibreTime 3.0.0 alpha 7"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 8",permalink:"/pr-1995/docs/releases/3.0.0-alpha.08"},next:{title:"LibreTime 3.0.0 alpha 6",permalink:"/pr-1995/docs/releases/3.0.0-alpha.06"}},d={},m=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Deprecation of Debian 8 (Jessie)",id:"deprecation-of-debian-8-jessie",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Installer Issues",id:"installer-issues",level:3},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3}],c={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{date:"2019-04-22",version:"3.0.0-alpha.7",mdxType:"ReleaseHead"}),(0,o.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,o.kt)("p",null,"The LibreTime project wants to thank the following contributors for contributing to this release:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@robbt"),(0,o.kt)("li",{parentName:"ul"},"@frecuencialibre"),(0,o.kt)("li",{parentName:"ul"},"@detobate"),(0,o.kt)("li",{parentName:"ul"},"@greenjon"),(0,o.kt)("li",{parentName:"ul"},"@xabispacebiker"),(0,o.kt)("li",{parentName:"ul"},"@mikeopensauce"),(0,o.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,o.kt)("li",{parentName:"ul"},"@hairmare"),(0,o.kt)("li",{parentName:"ul"},"@ryanrain")),(0,o.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set default focus to search field on library page."),(0,o.kt)("li",{parentName:"ul"},"PHP 7.2 and 7.3 compatibility (for Ubuntu 18.04.1 LTS (Bionic Beaver) and other modern distros)"),(0,o.kt)("li",{parentName:"ul"},'"Podcast Album Override" is now "Podcast Metadata Override " and additionally overrides the track title with the title from the RSS feed. The artist field is set to the podcast name in LibreTime.'),(0,o.kt)("li",{parentName:"ul"},"Allowed users to customize the title of podcasts"),(0,o.kt)("li",{parentName:"ul"},"Disabled the creation of smartblocks and playlists for new podcasts by default and added a generate button under the edit podcast tab"),(0,o.kt)("li",{parentName:"ul"},"Better libvirt integration in Vagrant setup."),(0,o.kt)("li",{parentName:"ul"},"Debian 11 (Buster) support"),(0,o.kt)("li",{parentName:"ul"},"Add columns for uploaded and genre to default library view, sorts it by uploaded and removes album column by default"),(0,o.kt)("li",{parentName:"ul"},"Add more details to the information returned by the API ",(0,o.kt)("inlineCode",{parentName:"li"},"onAirLightAction")," call"),(0,o.kt)("li",{parentName:"ul"},"Update Spanish translations"),(0,o.kt)("li",{parentName:"ul"},"Allow admins to edit the owner of a track"),(0,o.kt)("li",{parentName:"ul"},"Added system-wide intro and outro playlists for autoloading playlists"),(0,o.kt)("li",{parentName:"ul"},"Added show-source info to live-info-v2 API"),(0,o.kt)("li",{parentName:"ul"},"Update much of the documentation"),(0,o.kt)("li",{parentName:"ul"},"Allow program managers to view listeners statistics")),(0,o.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix DOS line-endings in vendorized PHP dependencies for packaging."),(0,o.kt)("li",{parentName:"ul"},"Fix overlapping show names if show does not fit in calendar."),(0,o.kt)("li",{parentName:"ul"},"Fall back to treating file as MP3 if it isn't recognized by mutagen."),(0,o.kt)("li",{parentName:"ul"},"Remove defunct support-setting page."),(0,o.kt)("li",{parentName:"ul"},"Remove legacy AAC code, fix AAC support for SHOUTcast."),(0,o.kt)("li",{parentName:"ul"},"Display Settings menu for all users."),(0,o.kt)("li",{parentName:"ul"},'Make "Time Remaining" Smartblock work in Playlist.'),(0,o.kt)("li",{parentName:"ul"},"Fix non-audio enclosure crash when importing badly formed podcast feeds"),(0,o.kt)("li",{parentName:"ul"},"Fix flac files not playing out"),(0,o.kt)("li",{parentName:"ul"},"Fix 500 error when making API call ",(0,o.kt)("inlineCode",{parentName:"li"},"onAirLightAction")),(0,o.kt)("li",{parentName:"ul"},"Fix warning message shown in ",(0,o.kt)("inlineCode",{parentName:"li"},"schedule")," API call"),(0,o.kt)("li",{parentName:"ul"},"Fix bug where many empty playlists were created when using autoloading"),(0,o.kt)("li",{parentName:"ul"},"Passed show variable to smartblocks loaded via playlist to fix time remaining smartblocks with autoloading playlists."),(0,o.kt)("li",{parentName:"ul"},"Restore top right user setting link and logout link to UI"),(0,o.kt)("li",{parentName:"ul"},"Fix an unnecessary type conversion to seconds that caused errors with PHP 7.2"),(0,o.kt)("li",{parentName:"ul"},"Fix import errors on podcast episodes with long descriptions"),(0,o.kt)("li",{parentName:"ul"},"Fix issue with multiple time remaining smartblocks in a single playlist not detecting remaining time correctly"),(0,o.kt)("li",{parentName:"ul"},"Fix occasional empty administration page due to null previous file reference")),(0,o.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,o.kt)("h3",{id:"deprecation-of-debian-8-jessie"},"Deprecation of Debian 8 (Jessie)"),(0,o.kt)("p",null,"This info is an early warning that we are deprecating a major os version."),(0,o.kt)("p",null,"Debian 9 (Stretch) is now available and Jessie is EOL since June 2018."),(0,o.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,o.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,o.kt)("h3",{id:"installer-issues"},"Installer Issues"),(0,o.kt)("p",null,"The installer is generally a bit unstable, we hope to be able to offer some reasonable packages at some point. Some of the GUI driven parts before the first login are also in a somewhat questionable state, ymmv."),(0,o.kt)("p",null,"For now the installer distro selection is pretty good at auto-detecting your os and usually does an ok job depending on your distro. You should usually not need to pass a --distribution and --release parameter, those are still supported for the time being but their use is not recommended."),(0,o.kt)("p",null,"The UI works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,o.kt)("p",null,"If you want to skip the installer GUI completely you can configure LibreTime using ",(0,o.kt)("inlineCode",{parentName:"p"},"airtime_mvc/build/airtime.example.conf")," as an template. Due to some python/PHP differences you must remove all comments from the example to use it \ud83d\ude1e. You'll also have to create some folder structures manually and check if the music dir got properly created directly in the database. Referencing a second ",(0,o.kt)("inlineCode",{parentName:"p"},"install -fiap")," install on a non productive system for reference can help with this type of bootstrap."),(0,o.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you do not run into the problems described in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,o.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,o.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan (0.3.2) on some Debian based Platforms (ie. Ubuntu). This affects Ubuntu 16.04, Debian Jessie and Debian Stretch. CentOS does not have upstream packages and you may either install from source or use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,o.kt)("p",null,"Check your version of silan by running ",(0,o.kt)("inlineCode",{parentName:"p"},"silan --version"),". This should report ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.3")," or higher. If not please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation")," wiki page for more details & workarounds."),(0,o.kt)("p",null,"To date silan 0.3.3 or higher is in Debian testing & Ubuntu Bionic. You can check the upstream progress the ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.net/ubuntu/+source/silan"},"Ubuntu launchpad"),". This section will get removed once the package is in stable."),(0,o.kt)("p",null,"tldr: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation"))),(0,o.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,o.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,o.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,o.kt)("p",null,"#352 reports that liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on Debian Stretch installs. One fix for the issue is to install liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps."),(0,o.kt)("p",null,"You can check your liquidsoap version by running ",(0,o.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,o.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,o.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,o.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,o.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.7/\ncurl -L https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,o.kt)("p",null,"Git users can pull from the branch at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,o.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,o.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,o.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,o.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,o.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,o.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,o.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,o.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,o.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,o.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,o.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,o.kt)("p",null,"Some translations might miss the tarball. They didn't get lost, but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we probably want to support bidirectional translation syncing with zanata."))}h.isMDXComponent=!0},20304:function(e,t,a){a.d(t,{ZP:function(){return u}});var i=a(83117),n=a(80102),o=(a(67294),a(3905)),r=a(54692),l=["components"],s={toc:[]};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This version was released the ",(0,o.kt)("strong",null,a.date),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please report new issues and/or feature requests in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,o.kt)("p",{parentName:"div"},"Join our ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,o.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion."))),(0,o.kt)("p",null,"The full tarball for the ",(0,o.kt)("code",null,a.version)," release of LibreTime is available ",(0,o.kt)(r.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}u.isMDXComponent=!0}}]);