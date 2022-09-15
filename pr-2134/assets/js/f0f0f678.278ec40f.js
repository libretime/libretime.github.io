"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2079],{4056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={title:"Stream configuration",sidebar_position:30},r=void 0,s={unversionedId:"admin-manual/stream-configuration",id:"version-3.0.0-beta.0/admin-manual/stream-configuration",title:"Stream configuration",description:"LibreTime supports direct connection to two popular streaming media servers, the open source Icecast (https//www.shoutcast.com). Apart from the software license, the main difference between these two servers is that Icecast supports simultaneous MP3, AAC, Ogg Vorbis or Ogg Opus streaming from LibreTime, whereas SHOUTcast only supports MP3 and AAC streams. The royalty-free Ogg Vorbis format has the advantage of better sound quality than MP3 at lower bitrates, which has a direct impact on the amount of bandwidth that your station will require to serve the same number of listeners. Ogg Opus also benefits from good sound quality at low bitrates, with the added advantage of lower latency than other streaming formats. Opus is now an IETF standard and requires Icecast 2.4 or later to be installed on the streaming server.",source:"@site/versioned_docs/version-3.0.0-beta.0/admin-manual/stream-configuration.md",sourceDirName:"admin-manual",slug:"/admin-manual/stream-configuration",permalink:"/pr-2134/docs/admin-manual/stream-configuration",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.0/admin-manual/stream-configuration.md",tags:[],version:"3.0.0-beta.0",sidebarPosition:30,frontMatter:{title:"Stream configuration",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Library management",permalink:"/pr-2134/docs/admin-manual/library"},next:{title:"Custom authentication",permalink:"/pr-2134/docs/admin-manual/custom-authentication"}},c={},m=[{value:"Icecast",id:"icecast",level:2},{value:"UTF-8 metadata in Icecast MP3 streams",id:"utf-8-metadata-in-icecast-mp3-streams",level:3},{value:"Icecast handover configuration",id:"icecast-handover-configuration",level:3},{value:"Source configuration",id:"source-configuration",level:3},{value:"Promoting your station",id:"promoting-your-station",level:3}],l={toc:m};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LibreTime supports direct connection to two popular streaming media servers, the open source Icecast (",(0,o.kt)("a",{parentName:"p",href:"https://www.icecast.org/"},"https://www.icecast.org/"),") and the proprietary SHOUTcast (",(0,o.kt)("a",{parentName:"p",href:"https://www.shoutcast.com"},"https://www.shoutcast.com"),"). Apart from the software license, the main difference between these two servers is that Icecast supports simultaneous MP3, AAC, Ogg Vorbis or Ogg Opus streaming from LibreTime, whereas SHOUTcast only supports MP3 and AAC streams. The royalty-free Ogg Vorbis format has the advantage of better sound quality than MP3 at lower bitrates, which has a direct impact on the amount of bandwidth that your station will require to serve the same number of listeners. Ogg Opus also benefits from good sound quality at low bitrates, with the added advantage of lower latency than other streaming formats. Opus is now an ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6716"},"IETF standard")," and requires Icecast 2.4 or later to be installed on the streaming server."),(0,o.kt)("p",null,"Ogg Vorbis playback is supported in most modern web browsers (see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#opus"},"this MDN article")," for more information) and desktop players like ",(0,o.kt)("a",{parentName:"p",href:"https://www.videolan.org/vlc/"},"VLC"),"."),(0,o.kt)("p",null,"Streaming MP3 below a bitrate of 128kbps is not recommended for music, because of a perceptible loss of high audio frequencies in the broadcast playout. A 96kbps or 64kbps MP3 stream may be acceptable for voice broadcasts if there is a requirement for compatibility with legacy hardware playback devices which do not support Ogg Vorbis or Opus streams."),(0,o.kt)("p",null,"Because LibreTime supports simultaneous streaming in multiple formats, it is possible to offer one or more streams via your website, and another independent stream for direct connection from hardware players. You can test whether Ogg streams sound better at low bitrates for yourself, by using the ",(0,o.kt)("strong",{parentName:"p"},"LISTEN")," button in LibreTime's ",(0,o.kt)("strong",{parentName:"p"},"Master Panel")," to switch between streaming formats."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Setting a higher bitrate for your output stream will only benefit your listeners if you have high bitrate source material to play. LibreTime can convert bitrates down for lower-quality streams but ",(0,o.kt)("em",{parentName:"p"},"cannot")," convert up for higher-quality streams.")),(0,o.kt)("h2",{id:"icecast"},"Icecast"),(0,o.kt)("h3",{id:"utf-8-metadata-in-icecast-mp3-streams"},"UTF-8 metadata in Icecast MP3 streams"),(0,o.kt)("p",null,"When sending metadata about your stream to an Icecast server in non-Latin alphabets, you may find that Icecast does not display the characters correctly for an MP3 stream, even though they're displayed correctly for an Ogg Vorbis stream. In the following screenshot, Russian characters are being displayed incorrectly in the ",(0,o.kt)("em",{parentName:"p"},"Current Song")," field for the MP3 stream:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8124).Z,width:"595",height:"760"})),(0,o.kt)("p",null,"The solution is to specify that the metadata for the MP3 mount point you are using should be interpreted using UTF-8 encoding. You can do this by adding the following stanza to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"libretime.mp3")," is the name of your mount point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mount>\n  <mount-name>/libretime.mp3</mount-name>\n  <charset>UTF-8</charset>\n</mount>\n")),(0,o.kt)("p",null,"After saving the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, restart the Icecast server with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart icecast2"),"."),(0,o.kt)("h3",{id:"icecast-handover-configuration"},"Icecast handover configuration"),(0,o.kt)("p",null,"In a typical radio station configuration, the live output from the broadcast studio and the scheduled output from LibreTime are mixed together before being sent further along the broadcast chain, to a transmitter or streaming media server on the Internet. (This may not be the case if your LibreTime server is remote from the studio, and you are using the ",(0,o.kt)("strong",{parentName:"p"},"Show Source Mount Point")," or ",(0,o.kt)("strong",{parentName:"p"},"Master Source Mount Point")," to mix live and scheduled content. See the ",(0,o.kt)("em",{parentName:"p"},"Stream Settings")," chapter for details)."),(0,o.kt)("p",null,"If your Icecast server is hosted in a remote data centre, you may not have the option to handover the streaming media source manually, because you have no physical access to connect a broadcast mixer to the server. Disconnecting the stream and beginning another is less than ideal, because the audience's media players will also be disconnected when that happens."),(0,o.kt)("p",null,"The Icecast server has a ",(0,o.kt)("em",{parentName:"p"},"fallback-mount")," feature which can be used to move clients (media players used by listeners or viewers) from one source to another, as new sources become available. This makes it possible to handover from LibreTime output to a show from another source, and handover to LibreTime again once the other show has ended."),(0,o.kt)("p",null,"To enable fallback mounts, edit the main Icecast configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml"),") to define the mount points you will use, and the relationship between them."),(0,o.kt)("p",null,"The example mount section provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"icecast.xml")," file is commented out by default. Before or after the commented section, add three mount point definitions. The default mount point used by LibreTime is ",(0,o.kt)("inlineCode",{parentName:"p"},"/main")," which is shown in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/libretime/liquidsoap.cfg")," file. You must also define a mount point for the live source (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"/live.ogg"),") and a mount point for the public to connect to (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"/stream.ogg"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="/etc/icecast2/icecast.xml"',title:'"/etc/icecast2/icecast.xml"'},"<mount>\n     <mount-name>/main</mount-name>\n     <hidden>0</hidden>\n</mount>\n\n<mount>\n     <mount-name>/live.ogg</mount-name>\n     <fallback-mount>/main</fallback-mount>\n     <fallback-override>1</fallback-override>\n     <hidden>0</hidden>\n</mount>\n\n<mount>\n     <mount-name>/stream.ogg</mount-name>\n     <fallback-mount>/live.ogg</fallback-mount>\n     <fallback-override>1</fallback-override>\n     <hidden>0</hidden>\n</mount>\n")),(0,o.kt)("p",null,"These mount point definitions mean that a client connecting to a URL such as ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://icecast.example.com:8000/stream.ogg"},"http://icecast.example.com:8000/stream.ogg"))," will first fall back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount point if it is available. If not, the client will fall back in turn to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/main")," mount point for LibreTime playout."),(0,o.kt)("p",null,"Setting the value of ",(0,o.kt)("em",{parentName:"p"},"fallback-override")," to 1 (enabled) means that when the ",(0,o.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount point becomes available again, the client will be re-connected to it. If you wish to hide the ",(0,o.kt)("inlineCode",{parentName:"p"},"/main")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount points from the public Icecast web interface, set the value of ",(0,o.kt)("em",{parentName:"p"},"hidden")," in each of these definitions to 1."),(0,o.kt)("h3",{id:"source-configuration"},"Source configuration"),(0,o.kt)("p",null,"Connect the other source to the Icecast server with the same parameters defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/libretime/liquidsoap.cfg")," file, except for the mount point. This should one of the mount points you have defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/live.ogg")," in the example above."),(0,o.kt)("admonition",{title:"Streaming with Mixxx",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To configure Mixxx for streaming to Icecast, click ",(0,o.kt)("em",{parentName:"p"},"Options"),", ",(0,o.kt)("em",{parentName:"p"},"Preferences"),", then ",(0,o.kt)("em",{parentName:"p"},"Live Broadcasting"),". For server ",(0,o.kt)("em",{parentName:"p"},"Type"),", select the default of ",(0,o.kt)("em",{parentName:"p"},"Icecast 2")," when streaming to Debian or Ubuntu servers.")),(0,o.kt)("p",null,"By default, Icecast streams are buffered to guard against network problems, which causes latency for remote listeners. When monitoring the stream from a remote location, you may have to begin the live stream a few seconds before the previous stream ends to enable a smooth transition."),(0,o.kt)("h3",{id:"promoting-your-station"},"Promoting your station"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This section covers how to edit Icecast's configuration to broadcast your station's information to online radio station directories. If you aren't using Icecast (or don't want to edit the configuration file), many online directories will allow you to manually add your station to their listings.")),(0,o.kt)("p",null,"There are many online radio station directories you can add your station to for additional exposure."),(0,o.kt)("p",null,"On an Icecast server, you can uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"directory")," section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file to have\nyour station automatically listed on the ",(0,o.kt)("a",{parentName:"p",href:"https://dir.xiph.org/"},"Icecast directory website"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Uncomment this if you want directory listings --\x3e\n\n<directory>\n     <yp-url-timeout>15</yp-url-timeout>\n     <yp-url>https://dir.xiph.org/cgi-bin/yp-cgi</yp-url>\n</directory>\n")),(0,o.kt)("p",null,"The Indymedia stream directory at ",(0,o.kt)("a",{parentName:"p",href:"https://radio.indymedia.org"},"https://radio.indymedia.org")," links to grassroots independent radio projects around the world. You can add your station to their list with an additional ",(0,o.kt)("em",{parentName:"p"},"directory")," section, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<directory>\n  <yp-url-timeout>15</yp-url-timeout>\n  <yp-url>https://radio.indymedia.org/cgi-bin/yp-cgi</yp-url>\n</directory>\n")))}u.isMDXComponent=!0},8124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/icecast-screenshot223-icecast_utf-8_metadata-1e00a3fc1c444c8545eadc97e1463fcb.png"}}]);