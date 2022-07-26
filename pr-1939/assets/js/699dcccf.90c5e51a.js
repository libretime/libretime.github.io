"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9612],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(h,o(o({ref:a},u),{},{components:t})):n.createElement(h,o({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33266:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],l={title:"Preparing media for upload"},s=void 0,p={unversionedId:"user-manual/preparing-media",id:"user-manual/preparing-media",title:"Preparing media for upload",description:"Before uploading media to an LibreTime server, there are a number of factors which should be considered. Getting your ingest workflow right will save you a lot of time later.",source:"@site/../docs/user-manual/preparing-media.md",sourceDirName:"user-manual",slug:"/user-manual/preparing-media",permalink:"/pr-1939/docs/next/user-manual/preparing-media",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/preparing-media.md",tags:[],version:"current",frontMatter:{title:"Preparing media for upload"},sidebar:"tutorialSidebar",previous:{title:"Podcasts",permalink:"/pr-1939/docs/next/user-manual/podcasts"},next:{title:"Scheduling shows",permalink:"/pr-1939/docs/next/user-manual/scheduling-shows"}},u={},d=[{value:"Metadata quality",id:"metadata-quality",level:2},{value:"Metadata in legacy character sets",id:"metadata-in-legacy-character-sets",level:2},{value:"Audio loudness",id:"audio-loudness",level:2},{value:"Silence in media files",id:"silence-in-media-files",level:2}],c={toc:d};function m(e){var a=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before uploading media to an LibreTime server, there are a number of factors which should be considered. Getting your ingest workflow right will save you a lot of time later."),(0,i.kt)("h2",{id:"metadata-quality"},"Metadata quality"),(0,i.kt)("p",null,"LibreTime automatically imports any metadata that is in the files' ID3 tags. If these tags are incorrect or are missing information, you will have to either edit the metadata manually. Files with metadata such as track title and artist information may be difficult to locate in larger libraries, or add to shows, playlists, or smart blocks."),(0,i.kt)("p",null,"There are a number of programs available which can be used to correct mistakes or incomplete information in ID3 tags. You can use a music library manager (like Apple Music, Rhythmbox, or Windows Media Player) to edit ID3 tags as well, but you may be required to import the files into your library, which may not always be convenient."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.xdlab.ru/en/"},"TagScanner")," (Windows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mp3tag.de/en/index.html"},"Mp3tag")," (Windows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://picard.musicbrainz.org/"},"MusicBrainz Picard")," (Mac, Windows, Linux)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.google.com/p/quodlibet/"},"Ex Falso")," (Linux)")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Tags From Path")," feature of Ex Falso is a particularly useful time saver if you have a large archive of untagged files. Sometimes there is useful creator or title information in the file name or directory path structure, which can be converted into an ID3 tag automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(36246).Z,width:"595",height:"653"})),(0,i.kt)("h2",{id:"metadata-in-legacy-character-sets"},"Metadata in legacy character sets"),(0,i.kt)("p",null,"LibreTime expects file tag metadata to be stored in the international ",(0,i.kt)("em",{parentName:"p"},"UTF-8")," character set. Programs such as ",(0,i.kt)("strong",{parentName:"p"},"Ex Falso")," (described above) encode metadata in UTF-8 by default. If you have an archive of files encoded with metadata in a legacy character set, such as the Cyrillic encoding ",(0,i.kt)("em",{parentName:"p"},"Windows-1251"),", you should convert these files before import."),(0,i.kt)("p",null,"The program ",(0,i.kt)("strong",{parentName:"p"},"mid3iconv")," (part of the ",(0,i.kt)("strong",{parentName:"p"},"python-mutagen")," package in Debian and Ubuntu) can be used to batch convert the metadata character set of files on the command line. You can install ",(0,i.kt)("strong",{parentName:"p"},"python-mutagen")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install python-mutagen"),"."),(0,i.kt)("p",null,"For example, to preview the conversion of tags from Windows-1251 (CP1251) character set to UTF-8 for a whole archive of MP3 files, you could use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.mp3" -print0 | xargs -0 mid3iconv -e CP1251 -d -p\n')),(0,i.kt)("p",null,"in the base directory of the archive. The ",(0,i.kt)("strong",{parentName:"p"},"-d")," option specifies that the new tag should be printed to the server console (debug mode), and the ",(0,i.kt)("strong",{parentName:"p"},"-p")," option specifies a preview run. This preview will enable you to confirm that the metadata is being read and converted correctly before writing the new tags."),(0,i.kt)("p",null,"To actually convert all of the tags and strip any legacy ID3v1 tag present from each file at the same time, you could use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.mp3" -print0 | xargs -0 mid3iconv -e CP1251 --remove-v1\n')),(0,i.kt)("p",null,"The name of the original character set follows the ",(0,i.kt)("strong",{parentName:"p"},"-e")," option. Other legacy character sets that mid3iconv can convert to UTF-8 include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"KOI8-R: Russian\nKOI8-U: Ukrainian\n\nGBK: Traditional Chinese\nGB2312: Simplified Chinese\n\nEUC-KR: Korean\nEUC-JP: Japanese\n\nCP1253: Greek\nCP1254: Turkish\nCP1255: Hebrew\nCP1256: Arabic\n")),(0,i.kt)("h2",{id:"audio-loudness"},"Audio loudness"),(0,i.kt)("p",null,"On file ingest, LibreTime analyzes each Ogg Vorbis, MP3, AAC or FLAC file's loudness, and stores a ",(0,i.kt)("em",{parentName:"p"},"ReplayGain")," value for that file in its database. At playout time, the ReplayGain value is provided to Liquidsoap so that gain can be automatically adjusted to provide an average output of -14 dBFS loudness (14 decibels below full scale). See ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ReplayGain"},"https://en.wikipedia.org/wiki/ReplayGain")," for more details of ReplayGain."),(0,i.kt)("p",null,"Because of this automatic gain adjustment, any files with average loudness higher than -14 dBFS will not sound louder than quieter files at playout time, but the lower crest factor in the louder files (their relatively low peak-to-average ratio) may be apparent in the output, making those files sound less dynamic. This may be an issue for contemporary popular music, which can average at -9 dBFS or louder before ReplayGain adjustment. (See ",(0,i.kt)("a",{parentName:"p",href:"https://www.soundonsound.com/sound-advice/dynamic-range-loudness-war"},"https://www.soundonsound.com/sound-advice/dynamic-range-loudness-war")," for a detailed analysis of the problem)."),(0,i.kt)("p",null,"Your station's producers should therefore aim for 14dB between peak and average loudness to maintain the crest factor of their prepared material (also known as ",(0,i.kt)("em",{parentName:"p"},"DR14")," on some dynamic range meters, such as the command-line DR14 T.meter available from ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/dr14tmeter/"},"https://sourceforge.net/projects/dr14tmeter/"),"). If the producers are working to a different loudness standard, the ReplayGain modifier in LibreTime's Stream Settings page can be adjusted to suit their material."),(0,i.kt)("p",null,"Large transient peaks in otherwise quiet files should be avoided, to guard against the need for peak limiting when ReplayGain is applied to those quieter files."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"vorbisgain")," command-line tool, available in the ",(0,i.kt)("strong",{parentName:"p"},"vorbisgain")," package in Debian/Ubuntu, can be used to indicate the ReplayGain of an individual Ogg Vorbis file before ingest into LibreTime. (A similar tool for MP3 files is available in the ",(0,i.kt)("strong",{parentName:"p"},"mp3gain")," package in Debian/Ubuntu)."),(0,i.kt)("p",null,"Here is an example of a very quiet file where the use of ReplayGain would make the output more than 17dB louder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vorbisgain -d Peter_Lawson-Three_Gymn.ogg\nAnalyzing files...\n\n    Gain   | Peak | Scale | New Peak | Track\n----------+------+-------+----------+------\n+17.39 dB | 4536 |  7.40 |    33585 | Peter_Lawson-Three_Gymn.ogg\n")),(0,i.kt)("p",null,"And here is an example of a very loud file, with lower crest factor, where the output will be more than 7dB quieter with ReplayGain applied:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vorbisgain -d Snoop_Dogg-Doggfather.ogg\nAnalyzing files...\n\n   Gain   | Peak  | Scale | New Peak | Track\n----------+-------+-------+----------+------\n -7.86 dB | 36592 |  0.40 |    14804 | Snoop_Dogg-Doggfather.ogg\n")),(0,i.kt)("p",null,"In the output from vorbisgain, ",(0,i.kt)("em",{parentName:"p"},"Peak")," is the maximum sample value of the file before any ReplayGain has been applied, where a value of 32,767 represents full scale when decoding to signed 16 bit samples. Note that lossy compressed files can have peaks greater than full scale, due to encoding artifacts. The ",(0,i.kt)("em",{parentName:"p"},"New Peak")," value for the Snoop Dogg file may be relatively low due to the hard limiting used in the mastering of that piece of music."),(0,i.kt)("h2",{id:"silence-in-media-files"},"Silence in media files"),(0,i.kt)("p",null,"Before importing media, it is good practice to check for any silent sections in the media files. While LibreTime compensates for leading and trailing silence with the use of automatic cue-in and cue-out points, it is best to trim these files to the intended length before upload. Two notable audio file editors for removing silent sections are ",(0,i.kt)("a",{parentName:"p",href:"https://www.audacityteam.org/"},"Audacity")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.ocenaudio.com/"},"Ocenaudio"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Gaps in playout or dead air can have legal repercussions for your station. Check with your station manager or local or state communications authority for more information."))),(0,i.kt)("p",null,"Quiet introductions or extended fades can also lead to apparent gaps in your broadcast playout. This is more common when playing back audio from ripped CDs or dubbed from tape or vinyl. Long periods of silence should be removed from files before uploading to LibreTime."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(52140).Z,width:"595",height:"327"})))}m.isMDXComponent=!0},52140:function(e,a,t){a.Z=t.p+"assets/images/preparing-media-screenshot126-debra_silence-703e48257e791a0e1d7d3f5feb0d70cc.png"},36246:function(e,a,t){a.Z=t.p+"assets/images/preparing-media-screenshot175-ex_falso-7b91a6c21a028df139a17205b87a6985.png"}}]);