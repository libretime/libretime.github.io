"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8371],{841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),s=(a(7294),a(3905));a(1839);const i={title:"Uninstall",sidebar_position:91},r=void 0,l={unversionedId:"admin-manual/uninstall",id:"version-3.0.0-alpha.13/admin-manual/uninstall",title:"Uninstall",description:"This guide provide some guidance to uninstall LibreTime from your system.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/uninstall.md",sourceDirName:"admin-manual",slug:"/admin-manual/uninstall",permalink:"/pr-1471/docs/admin-manual/uninstall",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/uninstall.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:91,frontMatter:{title:"Uninstall",sidebar_position:91},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/pr-1471/docs/admin-manual/troubleshooting"},next:{title:"How to setup a firewall using UFW",permalink:"/pr-1471/docs/admin-manual/tutorials/setup-a-firewall-using-ufw"}},o={},m=[],u={toc:m};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This guide provide some guidance to uninstall LibreTime from your system."),(0,s.kt)("p",null,"We recommend using ",(0,s.kt)("strong",{parentName:"p"},"disposable devices")," for your installations, so you can delete your old system and install on a fresh one easily without worrying about old files."),(0,s.kt)("p",null,"If you do not have a way use disposable devices, below are commands that should help you remove most of the LibreTime files from your system."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Use these commands at your ",(0,s.kt)("strong",{parentName:"p"},"own risk"),", we cannot guarantee that these commands are always up to date!")),(0,s.kt)("p",null,"Remove configuration directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /etc/airtime\nsudo rm -Rf /etc/libretime\n")),(0,s.kt)("p",null,"Remove logs directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /var/log/airtime\nsudo rm -Rf /var/log/libretime\n")),(0,s.kt)("p",null,"Remove runtime directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /var/lib/airtime\nsudo rm -Rf /var/lib/libretime\n")),(0,s.kt)("p",null,"Remove shared directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /usr/share/airtime\nsudo rm -Rf /usr/share/libretime\n")),(0,s.kt)("p",null,"Remove systemd services files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /{etc,usr/lib}/systemd/system/airtime*\nsudo rm -f /{etc,usr/lib}/systemd/system/libretime*\n")),(0,s.kt)("p",null,"Remove nginx configuration files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/nginx/sites-{available,enabled}/airtime*\nsudo rm -f /etc/nginx/sites-{available,enabled}/libretime*\n")),(0,s.kt)("p",null,"Remove php-fpm configuration files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/php/*/fpm/pool.d/airtime*\nsudo rm -f /etc/php/*/fpm/pool.d/libretime*\n")),(0,s.kt)("p",null,"Remove logrotate configuration files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/logrotate.d/airtime*\nsudo rm -f /etc/logrotate.d/libretime*\n")),(0,s.kt)("p",null,"Remove python packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 uninstall \\\n    libretime-analyzer \\\n    libretime-api \\\n    libretime-api-client \\\n    libretime-playout \\\n    libretime-shared \\\n    libretime-celery\n\n# Check if we forgot old python packages.\n# Remove packages that show up with this commands.\nsudo pip3 freeze | grep libretime\nsudo pip3 freeze | grep airtime\n")),(0,s.kt)("p",null,"Delete the postgresql database and user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres dropdb airtime\nsudo -u postgres dropdb libretime\n\nsudo -u postgres dropuser airtime\nsudo -u postgres dropuser libretime\n")),(0,s.kt)("p",null,"Delete the rabbitmq vhost and user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rabbitmqctl delete_vhost airtime\nsudo rabbitmqctl delete_vhost libretime\n\nsudo rabbitmqctl delete_user airtime\nsudo rabbitmqctl delete_user libretime\n")),(0,s.kt)("p",null,"Delete the file storage (you probably don't want that):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /srv/airtime\nsudo rm -Rf /srv/libretime\n")),(0,s.kt)("p",null,"Search for remaining files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo find / -name "libretime*"\nsudo find / -name "airtime*"\n')))}d.isMDXComponent=!0}}]);