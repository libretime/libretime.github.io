"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2801],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"Configuration",sidebar_position:20},l=void 0,c={unversionedId:"admin-manual/setup/configuration",id:"version-3.0.0-alpha.12/admin-manual/setup/configuration",title:"Configuration",description:"To configure LibreTime, you need to edit the /etc/airtime/airtime.conf file. This page describe the available options to configure your installation.",source:"@site/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/configuration.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/configuration",permalink:"/pr-1939/docs/admin-manual/setup/configuration",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/configuration.md",tags:[],version:"3.0.0-alpha.12",sidebarPosition:20,frontMatter:{title:"Configuration",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/pr-1939/docs/admin-manual/setup/install"},next:{title:"Reverse proxy",permalink:"/pr-1939/docs/admin-manual/setup/reverse-proxy"}},u={},p=[{value:"General",id:"general",level:2},{value:"Database",id:"database",level:2},{value:"RabbitMQ",id:"rabbitmq",level:2},{value:"Playout",id:"playout",level:2},{value:"LDAP",id:"ldap",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To configure LibreTime, you need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file. This page describe the available options to configure your installation."),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"general")," section configure anything related to the legacy and API services."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[general]\n# The internal API authentication key, this field is required\napi_key = some_random_generated_secret!\n\n# The public url scheme\n# Mutually exclusive with force_ssl\nprotocol =\n# The public url hostname, default is localhost\nbase_url = localhost\n# The public url port\nbase_port =\n# The public url base path, default is /\nbase_dir = /\n# Force https for generated urls, default is false\nforce_ssl = false\n\n# How many hours ahead Playout should cache scheduled media files, default is 1\ncache_ahead_hours = 1\n\n# Authentication adaptor to use for the legacy service, default is local\n# Specify a class like LibreTime_Auth_Adaptor_FreeIpa to replace the built-in adaptor\nauth = local\n")),(0,i.kt)("p",null,"In order to apply the changes made in this section, please restart the following services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"libretime-api\nlibretime-analyzer\nlibretime-celery\nlibretime-playout\n")),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," section configure the PostgreSQL connection."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before editing this section be sure to update the PostgreSQL server with the desired values."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[database]\n# The hostname of the PostgreSQL server, default is localhost\nhost = localhost\n# The port of the PostgreSQL server, default is 5432\nport = 5432\n# The name of the PostgreSQL database, default is libretime\nname = libretime\n# The username of the PostgreSQL user, default is libretime\nuser = libretime\n# The password of the PostgreSQL user, default is libretime\npassword = some_random_generated_secret!\n")),(0,i.kt)("p",null,"In order to apply the changes made in this section, please restart the following services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"libretime-api\n")),(0,i.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rabbitmq")," section configure the RabbitMQ connection."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before editing this section be sure to update the RabbitMQ server with the desired values."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[rabbitmq]\n# The hostname of the RabbitMQ server, default is localhost\nhost = localhost\n# The port of the RabbitMQ server, default is 5672\nport = 5672\n# The virtual host of RabbitMQ server, default is /libretime\nvhost = /libretime\n# The username of the RabbitMQ user, default is libretime\nuser = libretime\n# The password of the RabbitMQ user, default is libretime\npassword = some_random_generated_secret!\n")),(0,i.kt)("p",null,"In order to apply the changes made in this section, please restart the following services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"libretime-api\nlibretime-analyzer\nlibretime-celery\nlibretime-playout\n")),(0,i.kt)("h2",{id:"playout"},"Playout"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"playout")," section configure anything related to the playout service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[playout]\n# Liquidsoap connection host, default is localhost\nliquidsoap_host = localhost\n# Liquidsoap connection port, default is 1234\nliquidsoap_port = 1234\n\n# The format for recordings, allowed values are ogg,mp3, default is ogg\nrecord_file_format = ogg\n# The bitrate for recordings, default is 256\nrecord_bitrate = 256\n# The samplerate for recordings, default is 44100\nrecord_samplerate = 44100\n# The number of channels for recordings, default is 2\nrecord_channels = 2\n# The sample size for recordings, default is 16\nrecord_sample_size = 16\n")),(0,i.kt)("p",null,"In order to apply the changes made in this section, please restart the following services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"libretime-playout\n")),(0,i.kt)("h2",{id:"ldap"},"LDAP"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap")," section provide additional configuration for the authentication mechanism defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"general.auth"),", please see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-1939/docs/admin-manual/custom-authentication"},"custom authentication documentation")," for more details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[ldap]\n# Hostname of LDAP server\nhostname = ldap.example.org\n# Complete DN of user used to bind to LDAP\nbinddn = 'uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org'\n# Password for binddn user\npassword = hackme\n# Domain part of username\naccount_domain = INT.EXAMPLE.ORG\n# Base search DN\nbasedn = 'cn=users,cn=accounts,dc=int,dc=example,dc=org'\n# Name of the uid field for searching. Usually uid, may be cn\nfilter_field = uid\n\n# Map user types to LDAP groups. Assign user types based on the group of a given user\n# Key format is groupmap_*\ngroupmap_superadmin = 'cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_admin = 'cn=admin,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_program_manager = 'cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_host = 'cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_guest = 'cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\n")))}m.isMDXComponent=!0}}]);