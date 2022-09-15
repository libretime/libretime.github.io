"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8828],{7632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));a(1839);const i={title:"Change default passwords",sidebar_position:80},o=void 0,r={unversionedId:"admin-manual/default-passwords",id:"version-3.0.0-beta.0/admin-manual/default-passwords",title:"Change default passwords",description:"LibreTime",source:"@site/versioned_docs/version-3.0.0-beta.0/admin-manual/default-passwords.md",sourceDirName:"admin-manual",slug:"/admin-manual/default-passwords",permalink:"/pr-2134/docs/admin-manual/default-passwords",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.0/admin-manual/default-passwords.md",tags:[],version:"3.0.0-beta.0",sidebarPosition:80,frontMatter:{title:"Change default passwords",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Custom authentication",permalink:"/pr-2134/docs/admin-manual/custom-authentication"},next:{title:"Troubleshooting",permalink:"/pr-2134/docs/admin-manual/troubleshooting"}},l={},d=[{value:"LibreTime",id:"libretime",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Icecast",id:"icecast",level:2},{value:"RabbitMQ",id:"rabbitmq",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"libretime"},"LibreTime"),(0,s.kt)("p",null,"To change the password of the current user:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Log in to LibreTime"),(0,s.kt)("li",{parentName:"ol"},"Click on the username in the upper right corner (next to Log Out)"),(0,s.kt)("li",{parentName:"ol"},"Enter the new password twice and click ",(0,s.kt)("strong",{parentName:"li"},"Save"))),(0,s.kt)("p",null,"To change the password for a different user (requires ",(0,s.kt)("em",{parentName:"p"},"Administrator")," privileges):"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Log in to LibreTime"),(0,s.kt)("li",{parentName:"ol"},"Go to ",(0,s.kt)("strong",{parentName:"li"},"Settings")," > ",(0,s.kt)("strong",{parentName:"li"},"Manage Users")),(0,s.kt)("li",{parentName:"ol"},"Select the user, enter the new password twice, and click ",(0,s.kt)("strong",{parentName:"li"},"Save"))),(0,s.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,s.kt)("p",null,"Two of the most important passwords that should be changed ",(0,s.kt)("em",{parentName:"p"},"immediately")," after installation\nare the passwords used by the PostgreSQL database.\nIt is strongly recommended that you do this before exposing your server to the internet beyond your internal network."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Login to PostgreSQL with ",(0,s.kt)("inlineCode",{parentName:"li"},"sudo -u postgres psql"),". The PostgreSQL shell - ",(0,s.kt)("inlineCode",{parentName:"li"},"postgres=#")," - means that you have logged in successfully."),(0,s.kt)("li",{parentName:"ol"},"Change the admin password with ",(0,s.kt)("inlineCode",{parentName:"li"},"ALTER USER postgres PASSWORD 'myPassword';"),", where ",(0,s.kt)("inlineCode",{parentName:"li"},"myPassword")," is the new password.\nMake sure to include the semicolon at the end! A response of ",(0,s.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")," means that the command ran successfully."),(0,s.kt)("li",{parentName:"ol"},"Change the password for the ",(0,s.kt)("em",{parentName:"li"},"airtime")," user with ",(0,s.kt)("inlineCode",{parentName:"li"},"ALTER USER airtime WITH PASSWORD 'new_password';"),"\nA response of ",(0,s.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")," means that the command ran successfully."),(0,s.kt)("li",{parentName:"ol"},"If all is successful, logout of PostgreSQL with ",(0,s.kt)("inlineCode",{parentName:"li"},"\\q"),", go back to ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/libretime/config.yml")," to edit the password\nin the config file, and restart all services mentioned in the previous section.")),(0,s.kt)("h2",{id:"icecast"},"Icecast"),(0,s.kt)("p",null,"Random passwords are generated for Icecast during the installation. To look up and change the passwords, edit ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml"),"."),(0,s.kt)("p",null,"Replace the admin and ",(0,s.kt)("em",{parentName:"p"},"changeme")," fields below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<authentication>\n    \x3c!-- Sources log in with username 'source' --\x3e\n    <source-password>changeme</source-password>\n    \x3c!-- Relays log in with username 'relay' --\x3e\n    <relay-password>changeme</relay-password>\n    \x3c!-- Admin logs in with the username given below --\x3e\n    <admin-user>admin</admin-user>\n    <admin-password>changeme</admin-password>\n  </authentication>\n")),(0,s.kt)("p",null,"Then, restart your icecast2 service with ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart icecast2"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: If you change the source password, you may need to manually configure LibreTime to use the new password: go to ",(0,s.kt)("strong",{parentName:"p"},"Settings")," > ",(0,s.kt)("strong",{parentName:"p"},"Streams"),", set the streaming server to ",(0,s.kt)("strong",{parentName:"p"},"Custom")," and fill out the ",(0,s.kt)("strong",{parentName:"p"},"Additional Options")," below Stream 1.")),(0,s.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,s.kt)("p",null,"To change the default password for RabbitMQ, run the following command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rabbitmqctl change_password airtime newpassword\n")),(0,s.kt)("p",null,"and then update the ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," file with the new password."))}p.isMDXComponent=!0}}]);