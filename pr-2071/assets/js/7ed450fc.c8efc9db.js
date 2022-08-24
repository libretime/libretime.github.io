"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return a?i.createElement(h,l(l({ref:t},m),{},{components:a})):i.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54692:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294),r=a(39960);const n=e=>{let{version:t,children:a}=e;return i.createElement(r.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},a)}},9925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=a(87462),r=(a(67294),a(3905)),n=a(92973);const l={title:"LibreTime 3.0.0 alpha 13"},o=void 0,s={unversionedId:"releases/3.0.0-alpha.13",id:"releases/3.0.0-alpha.13",title:"LibreTime 3.0.0 alpha 13",description:"Contributors",source:"@site/../docs/releases/3.0.0-alpha.13.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.13",permalink:"/pr-2071/docs/next/releases/3.0.0-alpha.13",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.13.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 13"},sidebar:"tutorialSidebar",previous:{title:"Unreleased",permalink:"/pr-2071/docs/next/releases/unreleased"},next:{title:"LibreTime 3.0.0 alpha 12",permalink:"/pr-2071/docs/next/releases/3.0.0-alpha.12"}},p={},m=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Allowed CORS origins configuration location",id:"allowed-cors-origins-configuration-location",level:3},{value:"\u2b06\ufe0f Before upgrading",id:"\ufe0f-before-upgrading",level:2},{value:"Repair broken track types",id:"repair-broken-track-types",level:3},{value:"New configuration file",id:"new-configuration-file",level:3},{value:"Nginx, Apache and PHP",id:"nginx-apache-and-php",level:3},{value:"Shared files path",id:"shared-files-path",level:3},{value:"Systemd services path",id:"systemd-services-path",level:3},{value:"Replaced uWSGI with Gunicorn",id:"replaced-uwsgi-with-gunicorn",level:3},{value:"Logrotate config filepath",id:"logrotate-config-filepath",level:3},{value:"Worker user",id:"worker-user",level:3},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"New installer",id:"new-installer",level:3},{value:"LibreTime user",id:"libretime-user",level:3}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.ZP,{date:"2022-07-15",version:"3.0.0-alpha.13",mdxType:"ReleaseHead"}),(0,r.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,r.kt)("p",null,"The LibreTime project wants to thank the following contributors for authoring PRs to this release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@jooola"),(0,r.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,r.kt)("li",{parentName:"ul"},"rinka"),(0,r.kt)("li",{parentName:"ul"},"Maxime Leroy"),(0,r.kt)("li",{parentName:"ul"},"Mykola")),(0,r.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove unused python3-venv package (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1728"},"#1728"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," split api into multiple apps (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1626"},"#1626"),")"),(0,r.kt)("li",{parentName:"ul"},"improve apache configuration (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1784"},"#1784"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," replace uwsgi with gunicorn (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1785"},"#1785"),")"),(0,r.kt)("li",{parentName:"ul"},"replace exploded base","_","*"," with public_url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," compress logs with gz (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1827"},"#1827"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," remove unused abstract app (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1828"},"#1828"),")"),(0,r.kt)("li",{parentName:"ul"},"replace click envar with auto_envvar_prefix (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1829"},"#1829"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," allow to disable log rotate/retention"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," change logrotate config deploy path"),(0,r.kt)("li",{parentName:"ul"},"rotate logs using libretime user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," improve rabbitmq check (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1839"},"#1839"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," don't run with a dedicated user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," remove unused liquidsoap_prepare_terminate.py (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1854"},"#1854"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," check services using systemctl (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1856"},"#1856"),")"),(0,r.kt)("li",{parentName:"ul"},"change config file format to yaml"),(0,r.kt)("li",{parentName:"ul"},"change config filename to config.yml"),(0,r.kt)("li",{parentName:"ul"},"change config dir path to /etc/libretime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," rewrite install script"),(0,r.kt)("li",{parentName:"ul"},"replace php migration with django migration"),(0,r.kt)("li",{parentName:"ul"},"drop cc_locale table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," create set_icecast_passwords command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," post install setup instructions"),(0,r.kt)("li",{parentName:"ul"},"add systemd libretime.target"),(0,r.kt)("li",{parentName:"ul"},"move allowed cors url to configuration file"),(0,r.kt)("li",{parentName:"ul"},"remove php web installer"),(0,r.kt)("li",{parentName:"ul"},"move storage path setting to configuration file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," rename shared files path to /usr/share/libretime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," add config trailing slash sanitizer (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1870"},"#1870"),")"),(0,r.kt)("li",{parentName:"ul"},"rename default stream mount point to main"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," rename user model fields (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1902"},"#1902"),")"),(0,r.kt)("li",{parentName:"ul"},"remove unused cc_sess table (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1907"},"#1907"),")"),(0,r.kt)("li",{parentName:"ul"},"remove unused cc_perms table (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1909"},"#1909"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," rename podcasts models fields (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1910"},"#1910"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," move compute_md5 to shared library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," create bulk_import command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," compute md5 during early upload"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," rename track type to library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," add Ukrainian language"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," don't guess cors url from server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," load .env file to persistent install config"),(0,r.kt)("li",{parentName:"ul"},"use dedicated 'libretime' user"),(0,r.kt)("li",{parentName:"ul"},"replace apache2 with nginx + php-fpm"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," listen on unix socket with gunicorn"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," use uvicorn as asgi server with gunicorn"),(0,r.kt)("li",{parentName:"ul"},"set default locale to en_US"),(0,r.kt)("li",{parentName:"ul"},"remove unused cc_country table")),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add gettext for legacy locale generation (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1720"},"#1720"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," install software-properties-common when required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," always install fresh packages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," prevent timing attacke on api key (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1771"},"#1771"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," load vendors during config init"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," bypass config validation during django migration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," the ini config parser requires a .conf ext"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," disable playout-notify log rotation"),(0,r.kt)("li",{parentName:"ul"},"don't set log folder permissions recursively"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," allow list settings (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1837"},"#1837"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," station url always has a trailing slash (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1838"},"#1838"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," check if libretime-api is running (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1841"},"#1841"),")"),(0,r.kt)("li",{parentName:"ul"},"don't add track types only on migration"),(0,r.kt)("li",{parentName:"ul"},"correct cc_file.artwork column size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," remove not null constraint when using default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," missing build-essential to build psycopg2"),(0,r.kt)("li",{parentName:"ul"},"drop unused sequences"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," allow updating default_icecast_password (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1872"},"#1872"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cmfcmf"},"@cmfcmf"),"/docusaurus-search-local to ^0.11.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1873"},"#1873"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," remove file directory metadata (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1887"},"#1887"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," update model fields in set_icecast_passwords (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1903"},"#1903"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," cascade when dropping table (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1908"},"#1908"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," station-metadata api endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," don't log 'could not obtain lock' exception (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1943"},"#1943"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," check empty before iteration on files"),(0,r.kt)("li",{parentName:"ul"},"use constrained foreign key for files track_type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency mermaid to v9.1.2 ","[security]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1948"},"#1948"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," update version file unless tarball (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1950"},"#1950"),")"),(0,r.kt)("li",{parentName:"ul"},"prevent data loose on track_types_id migration (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1949"},"#1949"),")"),(0,r.kt)("li",{parentName:"ul"},"use track_type_id in smartblock criteria"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," no invalid track type in smartblock criteria")),(0,r.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,r.kt)("h3",{id:"allowed-cors-origins-configuration-location"},"Allowed CORS origins configuration location"),(0,r.kt)("p",null,"The allowed CORS origins configuration moved from the database to the configuration file. The field in the general preference form is deprecated and will be removed in the next release. Be sure to move your allowed CORS origins configuration to the ",(0,r.kt)("a",{parentName:"p",href:"/pr-2071/docs/next/admin-manual/setup/configuration"},"configuration file"),"."),(0,r.kt)("h2",{id:"\ufe0f-before-upgrading"},"\u2b06\ufe0f Before upgrading"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please run this ",(0,r.kt)("strong",{parentName:"p"},"before the upgrade procedure"),"!")),(0,r.kt)("h3",{id:"repair-broken-track-types"},"Repair broken track types"),(0,r.kt)("p",null,"The database files track type field was previously not constrained and this might have lead to files referencing a now renamed or missing track type. To preserve as much data as possible during the database migration process, you need to check whether some files have broken or missing track type references and fix them accordingly. To list broken track type references, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u www-data libretime-api dbshell --command=\"\n    SELECT f.id, f.track_type, f.track_title, f.artist_name, f.filepath\n    FROM cc_files f\n    WHERE NOT EXISTS (\n        SELECT FROM cc_track_types tt\n        WHERE tt.code = f.track_type\n    )\n    AND f.track_type IS NOT NULL\n    AND f.track_type <> '';\"\n")),(0,r.kt)("p",null,"If the above command outputs the following, no file needs fixing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," id | track_type | track_title | artist_name | filepath\n----+------------+-------------+-------------+----------\n(0 rows)\n")),(0,r.kt)("p",null,"In addition, the database smart block criteria value was previously referencing track types using codes, and should now reference track types using ids. You need to check whether some smart block have broken track type references and fix them accordingly. To list broken track type references, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u www-data libretime-api dbshell --command=\"\n    SELECT b.name, c.criteria, c.modifier, c.value\n    FROM cc_blockcriteria c, cc_block b\n    WHERE c.block_id = b.id\n    AND NOT EXISTS (\n        SELECT FROM cc_track_types tt\n        WHERE tt.code = c.value\n    )\n    AND criteria = 'track_type';\"\n")),(0,r.kt)("p",null,"If the above command outputs the following, no smart block needs fixing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," name | criteria | modifier | value\n------+----------+----------+-------\n(0 rows)\n")),(0,r.kt)("h3",{id:"new-configuration-file"},"New configuration file"),(0,r.kt)("p",null,"The configuration file name changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"airtime.conf")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml"),". Please rename your configuration file using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv /etc/airtime/airtime.conf /etc/airtime/config.yml\n")),(0,r.kt)("p",null,"The configuration directory changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/airtime")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libretime"),". Please rename your configuration directory using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv /etc/airtime /etc/libretime\n")),(0,r.kt)("p",null,"The configuration file format changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," and the configuration schema changed. Please rewrite your ",(0,r.kt)("a",{parentName:"p",href:"/pr-2071/docs/next/admin-manual/setup/configuration"},"configuration file")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/"},"yaml format"),". An example configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"installer/config.yml")," is present in the sources."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"general")," section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.protocol"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"general.base_url"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"general.base_port"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"general.base_dir")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"general.force_ssl")," entries were replaced with a single ",(0,r.kt)("inlineCode",{parentName:"li"},"general.public_url")," entry, be sure to use a valid url with the new configuration entry.")),(0,r.kt)("p",null,"A new ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," section has been added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.path")," entry was added to move the storage configuration from the database to the configuration file, be sure to edit your configuration with the path to your storage. The default storage path value is ",(0,r.kt)("inlineCode",{parentName:"li"},"/srv/libretime"),".")),(0,r.kt)("h3",{id:"nginx-apache-and-php"},"Nginx, Apache and PHP"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," web server has been replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"php-fpm"),", be sure to uninstall ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2")," and clean related configuration files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/apache2/sites-*/{airtime,libretime}*\nsudo rm -f /etc/php/*/apache2/conf.d/{airtime,libretime}*\n\nsudo apt purge 'apache2' 'libapache2-mod-php*'\n\nsudo find /var/lib/php/sessions -name 'sess_*' -delete\n")),(0,r.kt)("h3",{id:"shared-files-path"},"Shared files path"),(0,r.kt)("p",null,"The shared files path changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/airtime")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/libretime"),". The directory must be renamed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv /usr/share/airtime /usr/share/libretime\n")),(0,r.kt)("h3",{id:"systemd-services-path"},"Systemd services path"),(0,r.kt)("p",null,"The systemd services path changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/libretime*")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/libretime*"),". The services must be moved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv /etc/systemd/system/libretime* /usr/lib/systemd/system/\nsudo systemctl daemon-reload\n")),(0,r.kt)("h3",{id:"replaced-uwsgi-with-gunicorn"},"Replaced uWSGI with Gunicorn"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uwsgi-docs.readthedocs.io"},"uWSGI")," was replaced by ",(0,r.kt)("a",{parentName:"p",href:"https://gunicorn.org/"},"Gunicorn"),", the packages and configuration file should be removed from the system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Remove the configuration file\nsudo rm -f /etc/{airtime,libretime}/libretime-api.ini\n\n# Remove the packages\nsudo apt purge \\\n    uwsgi \\\n    uwsgi-plugin-python3\n")),(0,r.kt)("h3",{id:"logrotate-config-filepath"},"Logrotate config filepath"),(0,r.kt)("p",null,"The legacy logrotate config filepath was changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/airtime-php")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/libretime-legacy"),". The old configuration file must be removed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Remove the configuration file\nsudo rm -f /etc/logrotate.d/airtime-php\n")),(0,r.kt)("h3",{id:"worker-user"},"Worker user"),(0,r.kt)("p",null,"The worker service no longer uses a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"celery")," user to run. The old ",(0,r.kt)("inlineCode",{parentName:"p"},"celery")," user can be removed from the system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Remove the celery user\nsudo deluser celery\n")),(0,r.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,r.kt)("h3",{id:"new-installer"},"New installer"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please be careful when running this new installer, it might not be bug free.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/pr-2071/docs/next/admin-manual/setup/install#run-the-installer"},"bash installer")," has been rewritten, the flags and options changed, please run ",(0,r.kt)("inlineCode",{parentName:"p"},"./install --help")," to get more details."),(0,r.kt)("h3",{id:"libretime-user"},"LibreTime user"),(0,r.kt)("p",null,"The LibreTime services now run using a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"libretime")," user instead of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"www-data")," user. Be sure to change the ownership of the LibreTime files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Configuration directory\nsudo chown -R libretime:libretime /etc/libretime\n# Logs directory\nsudo chown -R libretime:libretime /var/log/libretime\n# Runtime directory\nsudo chown -R libretime:libretime /var/lib/libretime\n# Storage directory\nsudo chown -R libretime:libretime /srv/libretime\n")))}c.isMDXComponent=!0},92973:(e,t,a)=>{a.d(t,{ZP:()=>o});var i=a(87462),r=(a(67294),a(3905)),n=a(54692);const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This version was released the ",(0,r.kt)("strong",null,a.date),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,r.kt)("p",{parentName:"admonition"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,r.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,r.kt)("p",null,"The full tarball for the ",(0,r.kt)("code",null,a.version)," release of LibreTime is available ",(0,r.kt)(n.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}o.isMDXComponent=!0}}]);