"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6218],{3321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=a(7462),r=(a(7294),a(3905));a(1839);const i={title:"Upgrade",sidebar_position:80},n=void 0,l={unversionedId:"admin-manual/setup/upgrade",id:"admin-manual/setup/upgrade",title:"Upgrade",description:"This guide walk you though the steps required to upgrade LibreTime.",source:"@site/../docs/admin-manual/setup/upgrade.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/upgrade",permalink:"/pr-1471/docs/next/admin-manual/setup/upgrade",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/upgrade.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Upgrade",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Reverse proxy",permalink:"/pr-1471/docs/next/admin-manual/setup/reverse-proxy"},next:{title:"Migrate from Airtime",permalink:"/pr-1471/docs/next/admin-manual/setup/migrate-from-airtime"}},o={},p=[{value:"Stop the services",id:"stop-the-services",level:2},{value:"Make a backup",id:"make-a-backup",level:2},{value:"Apply upgrade instructions",id:"apply-upgrade-instructions",level:2},{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Apply migrations",id:"apply-migrations",level:2},{value:"Restart the services",id:"restart-the-services",level:2},{value:"Verify",id:"verify",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide walk you though the steps required to upgrade LibreTime."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should always have proper backups and a rollback scenario in place before updating. If the update does not go smoothly, it may cause significant downtime, so you should always have a fallback system available during the update to ensure ",(0,r.kt)("strong",{parentName:"p"},"broadcast continuity"),".")),(0,r.kt)("h2",{id:"stop-the-services"},"Stop the services"),(0,r.kt)("p",null,"Run the following commands to stop the services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop libretime.target\n# Or\nsudo systemctl stop libretime-analyzer.service\nsudo systemctl stop libretime-api.service\nsudo systemctl stop libretime-liquidsoap.service\nsudo systemctl stop libretime-playout.service\nsudo systemctl stop libretime-worker.service\n")),(0,r.kt)("h2",{id:"make-a-backup"},"Make a backup"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/pr-1471/docs/next/admin-manual/backup"},"the backup guide")," to make an extra backup of your installation and prepare a rollback scenario in case of accidental data loss during the upgrade process."),(0,r.kt)("h2",{id:"apply-upgrade-instructions"},"Apply upgrade instructions"),(0,r.kt)("p",null,"Be sure to carefully read ",(0,r.kt)("strong",{parentName:"p"},"all")," the ",(0,r.kt)("a",{parentName:"p",href:"/pr-1471/docs/next/releases/"},"releases notes"),", from your current version to the targeted version, to apply upgrade or breaking changes instructions to your installation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You might need to run steps before and after the install procedure. Be sure to follow these steps thoroughly.")),(0,r.kt)("h2",{id:"install-the-new-version"},"Install the new version"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/pr-1471/docs/next/admin-manual/setup/install#download"},"the install guide")," to download and install the new version, and re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"./install")," script with the same arguments you used during the initial install."),(0,r.kt)("h2",{id:"apply-migrations"},"Apply migrations"),(0,r.kt)("p",null,"Run the following command to apply the database migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api migrate\n")),(0,r.kt)("h2",{id:"restart-the-services"},"Restart the services"),(0,r.kt)("p",null,"Restart all the services to make sure all the changes are applied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart libretime.target\n")),(0,r.kt)("h2",{id:"verify"},"Verify"),(0,r.kt)("p",null,"Verify that all the services are still running after the install process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl --all --plain | egrep 'libretime|nginx|php.*-fpm'\n")),(0,r.kt)("p",null,"Verify for any error in the logs after the install process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tail -f -n 100 "/var/log/syslog" | grep "libretime-"\n')),(0,r.kt)("p",null,"Log into the interface and verify for any error after the install process."),(0,r.kt)("p",null,"If you encounter issues with the new interface, you may need to clear your web browser's cache."))}d.isMDXComponent=!0}}]);