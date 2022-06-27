"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7697],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||i;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44180:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],c={title:"Custom authentication",sidebar_position:40},u=void 0,p={unversionedId:"admin-manual/custom-authentication",id:"version-3.0.0-alpha.12/admin-manual/custom-authentication",title:"Custom authentication",description:"Setup FreeIPA authentication",source:"@site/versioned_docs/version-3.0.0-alpha.12/admin-manual/custom-authentication.md",sourceDirName:"admin-manual",slug:"/admin-manual/custom-authentication",permalink:"/pr-1876/docs/admin-manual/custom-authentication",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/admin-manual/custom-authentication.md",tags:[],version:"3.0.0-alpha.12",sidebarPosition:40,frontMatter:{title:"Custom authentication",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Icecast configuration",permalink:"/pr-1876/docs/admin-manual/icecast"},next:{title:"Change default passwords",permalink:"/pr-1876/docs/admin-manual/default-passwords"}},s={},l=[{value:"Setup FreeIPA authentication",id:"setup-freeipa-authentication",level:2},{value:"Apache configuration",id:"apache-configuration",level:3},{value:"PAM configuration",id:"pam-configuration",level:3},{value:"LDAP configuration",id:"ldap-configuration",level:3},{value:"Enable FreeIPA authentication",id:"enable-freeipa-authentication",level:3}],d={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"setup-freeipa-authentication"},"Setup FreeIPA authentication"),(0,i.kt)("p",null,"You can configure LibreTime to delegate all authentication to a FreeIPA server."),(0,i.kt)("p",null,"This allows you users to use their existing FreeIPA credentials. For this to\nwork you need to configure Apache to use ",(0,i.kt)("inlineCode",{parentName:"p"},"mod_authnz_pam")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mod_intercept_form_submit"),"."),(0,i.kt)("h3",{id:"apache-configuration"},"Apache configuration"),(0,i.kt)("p",null,"After installing the needed modules you can set up Apache to intercept form logins and\ncheck them against pam."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apacheconf"},"<Location /login>\n    InterceptFormPAMService http-libretime\n    InterceptFormLogin username\n    InterceptFormPassword password\n    InterceptFormLoginSkip admin\n    InterceptFormPasswordRedact on\n    InterceptFormLoginRealms INT.RABE.CH\n    Require pam-account http-libretime\n</Location>\n\n<Location />\n    <RequireAny>\n       <RequireAny>\n           Require pam-account http-libretime\n           Require all granted\n       </RequireAny>\n       <RequireAll>\n           Require expr %{REQUEST_URI} =~  /(index.php|login|favicon.ico|js|css|locale)/\n           Require all granted\n       </RequireAll>\n    </RequireAny>\n</Location>\n")),(0,i.kt)("h3",{id:"pam-configuration"},"PAM configuration"),(0,i.kt)("p",null,"The above configuration expects a PAM configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"http-libretime")," service."),(0,i.kt)("p",null,"To confiure this you need to create the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/pam.d/http-libretime")," with the following contents."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"auth    required   pam_sss.so\naccount required   pam_sss.so\n")),(0,i.kt)("h3",{id:"ldap-configuration"},"LDAP configuration"),(0,i.kt)("p",null,"LibreTime needs direct access to LDAP so it can fetch additional information. It does so with\na ",(0,i.kt)("a",{parentName:"p",href:"https://www.freeipa.org/page/HowTo/LDAP#System_Accounts"},"system account")," that you need to\nset up beforehand."),(0,i.kt)("p",null,"You can configure everything pertaining to how LibreTime accesses LDAP in\n",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf"),". The default file has the following values you need to change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"#\n# ----------------------------------------------------------------------\n#                          L D A P\n# ----------------------------------------------------------------------\n#\n# hostname:       Hostname of LDAP server\n#\n# binddn:         Complete DN of user used to bind to LDAP\n#\n# password:       Password for binddn user\n#\n# account_domain: Domain part of username\n#\n# basedn:         base search DN\n#\n# filter_field:   Name of the uid field for searching\n#                 Usually uid, may be cn\n#\n# groupmap_*:     Map LibreTime user types to LDAP groups\n#                 Lets LibreTime assign user types based on the\n#                 group a given user is in.\n#\n[ldap]\nhostname = ldap.example.org\nbinddn = 'uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org'\npassword = hackme\naccount_domain = INT.EXAMPLE.ORG\nbasedn = 'cn=users,cn=accounts,dc=int,dc=example,dc=org'\nfilter_field = uid\ngroupmap_guest = 'cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_host = 'cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_program_manager = 'cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_admin = 'cn=admins,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\ngroupmap_superadmin = 'cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org'\n")),(0,i.kt)("h3",{id:"enable-freeipa-authentication"},"Enable FreeIPA authentication"),(0,i.kt)("p",null,"After everything is set up properly you can enable FreeIPA auth in ",(0,i.kt)("inlineCode",{parentName:"p"},"airtime.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[general]\nauth = LibreTime_Auth_Adaptor_FreeIpa\n")),(0,i.kt)("p",null,"You should now be able to use your FreeIPA credentials to log in to LibreTime."))}m.isMDXComponent=!0}}]);