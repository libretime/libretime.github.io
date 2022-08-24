(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4614],{67428:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),a=n(93456);const o={title:"Reverse proxy",sidebar_position:30},s=void 0,p={unversionedId:"admin-manual/setup/reverse-proxy",id:"admin-manual/setup/reverse-proxy",title:"Reverse proxy",description:"This guide walk you though the steps required to setup a reverse proxy in front of LibreTime.",source:"@site/../docs/admin-manual/setup/reverse-proxy.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/reverse-proxy",permalink:"/pr-2071/docs/next/admin-manual/setup/reverse-proxy",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/reverse-proxy.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Reverse proxy",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/pr-2071/docs/next/admin-manual/setup/configuration"},next:{title:"Upgrade",permalink:"/pr-2071/docs/next/admin-manual/setup/upgrade"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install a reverse proxy",id:"install-a-reverse-proxy",level:2},{value:"Apache",id:"apache",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Icecast",id:"icecast",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walk you though the steps required to setup a reverse proxy in front of LibreTime."),(0,i.kt)("p",null,"Setting a reverse proxy in front of LibreTime is recommended, it prevents LibreTime to be\nopen to the Internet, adds security by enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," and let's you manage your certificates in\na single place."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The current input and output streams are Icecast based protocols and does not support being behind a reverse proxy. ",(0,i.kt)("strong",{parentName:"p"},"Do not attempt")," to ",(0,i.kt)("a",{parentName:"p",href:"#icecast"},"reverse proxy Icecast")," or the Liquidsoap harbor inputs."),(0,i.kt)("p",{parentName:"admonition"},"Modern protocols such as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_Live_Streaming"},"HLS")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_Reliable_Transport"},"SRT")," will be implement in the future to fix those limitations.")),(0,i.kt)("p",null,"Below is a schema that illustrate the goals when setting up a reverse proxy in front of LibreTime:"),(0,i.kt)(a.Mermaid,{config:{},chart:"flowchart TD\n    internet[Internet]\n\n    subgraph internal[Your system or private network]\n        libretime[LibreTime service, listen on :8080]\n\n        icecast[Icecast service, listen on :8000]\n        liquidsoap[Liquidsoap service, listen on :8001 and 8002]\n\n        subgraph proxy[Your reverse proxy]\n            front_http[Listen on :80]\n            front_https[Listen on :443]\n            front_http -.-> |Redirect to https| front_https\n\n            router[Router]\n            front_https --\x3e |Terminate https| router\n        end\n\n        router --\x3e |If hostname is radio.example.com| libretime\n    end\n\n    internet ==> front_http\n    internet ==> front_https\n\n    internet ==> icecast\n    internet ==> liquidsoap",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You need a domain name (",(0,i.kt)("inlineCode",{parentName:"p"},"radio.example.com"),") and a ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," certificate for that domain. You can get certificates from Let's Encrypt by using ",(0,i.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"Certbot"),"."),(0,i.kt)("p",null,"You need to identify the location of the services that should be exposed to the public:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the LibreTime web server (usually ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:8080"),", for documentation clarity we use ",(0,i.kt)("inlineCode",{parentName:"li"},"libretime:8080"),").")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If LibreTime is running on the same host as the reverse proxy, you need to change the LibreTime web server default listening port because the reverse proxy needs to listen on the ",(0,i.kt)("inlineCode",{parentName:"p"},"80"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"443")," ports.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be sure that your firewall and network allows communications from the reverse proxy to the services. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ping"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"telnet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," to check that communication is working.")),(0,i.kt)("h2",{id:"install-a-reverse-proxy"},"Install a reverse proxy"),(0,i.kt)("h3",{id:"apache"},"Apache"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You follow one of these guides to configure Apache with a Let's Encrypt certificate."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04"},"How To Secure Apache with Let's Encrypt on Ubuntu 20.04")))),(0,i.kt)("p",null,"\ud83d\udea7"),(0,i.kt)("h3",{id:"nginx"},"Nginx"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You follow one of these guides to configure Nginx with a Let's Encrypt certificate."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04"},"How To Secure Nginx with Let's Encrypt on Ubuntu 20.04")))),(0,i.kt)("p",null,"Once you installed nginx and retrieved the required certificates, you can configure the reverse proxy to work with LibreTime."),(0,i.kt)("p",null,"Paste the following configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/libretime.conf")," and be sure to replace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radio.example.com")," with your own station url,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libretime:8080")," with the location of your LibreTime web server;")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name radio.example.com;\n    location / {\n        rewrite ^ https://$server_name$request_uri? permanent;\n    }\n}\n\nserver {\n    listen 443 ssl;\n    server_name radio.example.com;\n\n    ssl_certificate /etc/letsencrypt/live/radio.example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/radio.example.com/privkey.pem;\n\n    location / {\n        proxy_set_header Host              $host;\n        proxy_set_header X-Real-IP         $remote_addr;\n        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Host  $host;\n        proxy_set_header X-Forwarded-Port  $server_port;\n\n        proxy_pass http://libretime:8080/;\n    }\n}\n")),(0,i.kt)("p",null,"Enable the nginx configuration and restart nginx using the commands below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/libretime.conf /etc/nginx/sites-enabled/\nsudo systemctl restart nginx\n")),(0,i.kt)("h2",{id:"icecast"},"Icecast"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you attempt to listen an insecure Icecast stream on a secure website, a\n",(0,i.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox"},"mixed content error"),"\nwill be raised by your browser and should prevent your player from listening to the stream."),(0,i.kt)("p",{parentName:"admonition"},"You follow one of these guides to configure a secure Icecast server with a Let's Encrypt certificate."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mediarealm.com.au/articles/icecast-https-ssl-setup-lets-encrypt/"},"Icecast HTTPS/SSL with Let\u2019s Encrypt")))))}m.isMDXComponent=!0},11748:(e,t,n)=>{var r={"./locale":89234,"./locale.js":89234};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=11748}}]);