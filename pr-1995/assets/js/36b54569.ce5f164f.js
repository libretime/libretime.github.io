"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4650],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37533:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"Custom authentication",sidebar_position:40},u=void 0,l={unversionedId:"admin-manual/custom-authentication",id:"version-3.0.0-alpha.13/admin-manual/custom-authentication",title:"Custom authentication",description:"Setup FreeIPA authentication",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/custom-authentication.md",sourceDirName:"admin-manual",slug:"/admin-manual/custom-authentication",permalink:"/pr-1995/docs/admin-manual/custom-authentication",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/custom-authentication.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:40,frontMatter:{title:"Custom authentication",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Stream configuration",permalink:"/pr-1995/docs/admin-manual/stream-configuration"},next:{title:"Change default passwords",permalink:"/pr-1995/docs/admin-manual/default-passwords"}},p={},s=[{value:"Setup FreeIPA authentication",id:"setup-freeipa-authentication",level:2},{value:"Apache configuration",id:"apache-configuration",level:3},{value:"PAM configuration",id:"pam-configuration",level:3},{value:"LDAP configuration",id:"ldap-configuration",level:3},{value:"Enable FreeIPA authentication",id:"enable-freeipa-authentication",level:3}],m={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setup-freeipa-authentication"},"Setup FreeIPA authentication"),(0,o.kt)("p",null,"You can configure LibreTime to delegate all authentication to a FreeIPA server."),(0,o.kt)("p",null,"This allows you users to use their existing FreeIPA credentials. For this to\nwork you need to configure Apache to use ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_authnz_pam")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_intercept_form_submit"),"."),(0,o.kt)("h3",{id:"apache-configuration"},"Apache configuration"),(0,o.kt)("p",null,"After installing the needed modules you can set up Apache to intercept form logins and\ncheck them against pam."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"<Location /login>\n    InterceptFormPAMService http-libretime\n    InterceptFormLogin username\n    InterceptFormPassword password\n    InterceptFormLoginSkip admin\n    InterceptFormPasswordRedact on\n    InterceptFormLoginRealms INT.RABE.CH\n    Require pam-account http-libretime\n</Location>\n\n<Location />\n    <RequireAny>\n       <RequireAny>\n           Require pam-account http-libretime\n           Require all granted\n       </RequireAny>\n       <RequireAll>\n           Require expr %{REQUEST_URI} =~  /(index.php|login|favicon.ico|js|css|locale)/\n           Require all granted\n       </RequireAll>\n    </RequireAny>\n</Location>\n")),(0,o.kt)("h3",{id:"pam-configuration"},"PAM configuration"),(0,o.kt)("p",null,"The above configuration expects a PAM configuration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"http-libretime")," service."),(0,o.kt)("p",null,"To confiure this you need to create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/pam.d/http-libretime")," with the following contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"auth    required   pam_sss.so\naccount required   pam_sss.so\n")),(0,o.kt)("h3",{id:"ldap-configuration"},"LDAP configuration"),(0,o.kt)("p",null,"LibreTime needs direct access to LDAP so it can fetch additional information. It does so with\na ",(0,o.kt)("a",{parentName:"p",href:"https://www.freeipa.org/page/HowTo/LDAP#System_Accounts"},"system account")," that you need to\nset up beforehand."),(0,o.kt)("p",null,"You can configure everything pertaining to how LibreTime accesses LDAP in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml"),". The default file has the following values you need to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'#\n# ----------------------------------------------------------------------\n#                          L D A P\n# ----------------------------------------------------------------------\n#\n# hostname:       Hostname of LDAP server\n#\n# binddn:         Complete DN of user used to bind to LDAP\n#\n# password:       Password for binddn user\n#\n# account_domain: Domain part of username\n#\n# basedn:         base search DN\n#\n# filter_field:   Name of the uid field for searching\n#                 Usually uid, may be cn\n#\n# groupmap_*:     Map LibreTime user types to LDAP groups\n#                 Lets LibreTime assign user types based on the\n#                 group a given user is in.\n#\nldap:\n  hostname: ldap.example.org\n  binddn: "uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org"\n  password: hackme\n  account_domain: INT.EXAMPLE.ORG\n  basedn: "cn=users,cn=accounts,dc=int,dc=example,dc=org"\n  filter_field: uid\n  groupmap_guest: "cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_host: "cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_program_manager: "cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_admin: "cn=admins,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_superadmin: "cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n')),(0,o.kt)("h3",{id:"enable-freeipa-authentication"},"Enable FreeIPA authentication"),(0,o.kt)("p",null,"After everything is set up properly you can enable FreeIPA auth in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"general:\n  auth: LibreTime_Auth_Adaptor_FreeIpa\n")),(0,o.kt)("p",null,"You should now be able to use your FreeIPA credentials to log in to LibreTime."))}d.isMDXComponent=!0}}]);