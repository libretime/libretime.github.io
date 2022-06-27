"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8859],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=c(a),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return a?n.createElement(u,o(o({ref:e},p),{},{components:a})):n.createElement(u,o({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},59266:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Playlists and smart blocks"},l=void 0,c={unversionedId:"user-manual/playlists",id:"version-3.0.0-alpha.12/user-manual/playlists",title:"Playlists and smart blocks",description:"Creating a new playlist",source:"@site/versioned_docs/version-3.0.0-alpha.12/user-manual/playlists.md",sourceDirName:"user-manual",slug:"/user-manual/playlists",permalink:"/pr-1876/fr/docs/user-manual/playlists",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/user-manual/playlists.md",tags:[],version:"3.0.0-alpha.12",frontMatter:{title:"Playlists and smart blocks"},sidebar:"tutorialSidebar",previous:{title:"Broadcasting live",permalink:"/pr-1876/fr/docs/user-manual/live-broadcast"},next:{title:"Playout history",permalink:"/pr-1876/fr/docs/user-manual/playout-history"}},p={},m=[{value:"Creating a new playlist",id:"creating-a-new-playlist",level:2},{value:"Adding content to a playlist",id:"adding-content-to-a-playlist",level:3},{value:"Auto loading playlists",id:"auto-loading-playlists",level:3},{value:"Creating a Smartblock",id:"creating-a-smartblock",level:2}],h={toc:m};function d(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-a-new-playlist"},"Creating a new playlist"),(0,i.kt)("p",null,"You can create a new playlist on the toolbar of the ",(0,i.kt)("strong",{parentName:"p"},"Playlists")," page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(10279).Z,width:"642",height:"587"})),(0,i.kt)("p",null,"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Description")," for the playlist, then click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button. Setting good quality metadata here will help you find the playlist using the search box later, so you should be as descriptive as possible."),(0,i.kt)("h3",{id:"adding-content-to-a-playlist"},"Adding content to a playlist"),(0,i.kt)("p",null,"With a playlist open, drag and drop items from the search results on the left into the playlist on the right. Jingles and voice tracks can be added before, after or between music items."),(0,i.kt)("p",null,"After adding files to the playlist, the total playlist time is displayed in the top right corner. The duration of an individual file is shown in each row of the playlist in a white font, and beneath this figure the time since the beginning of the playlist is displayed in a smaller light grey font. This elapsed time figure can be used as a time check for voice tracks, although this option may limit the re-usability of the voice track."),(0,i.kt)("p",null,"To audition a playlist file in your web browser, click the white triangle button on the left side of its row. (If the format of the file is not supported by your browser, the triangle in this button will be greyed out). If audition of the file format is supported, a pop-up window will open, with the playlist starting at the file you clicked."),(0,i.kt)("p",null,"Click the small white ",(0,i.kt)("strong",{parentName:"p"},"x")," icon on the right hand side of each row to remove a file from the playlist. You can also drag and drop files to re-order them, or click the ",(0,i.kt)("strong",{parentName:"p"},"Shuffle")," button to re-order files automatically."),(0,i.kt)("p",null,"When your playlist is complete, click the ",(0,i.kt)("strong",{parentName:"p"},"New")," button in the top left corner to create another playlist, click the close icon (a white cross in a black circle) in the top right corner, or browse to another page of the LibreTime interface."),(0,i.kt)("p",null,"If you want to edit the playlist content or metadata later, you can find it by ",(0,i.kt)("strong",{parentName:"p"},"Title"),", ",(0,i.kt)("strong",{parentName:"p"},"Creator"),", ",(0,i.kt)("strong",{parentName:"p"},"Last Modified")," date, ",(0,i.kt)("strong",{parentName:"p"},"Length"),", ",(0,i.kt)("strong",{parentName:"p"},"Owner")," or ",(0,i.kt)("strong",{parentName:"p"},"Year")," using one of the search tools on the Library page. Click the playlist in the search results list, and then click ",(0,i.kt)("strong",{parentName:"p"},"Edit")," from the pop-up menu. You can also ",(0,i.kt)("strong",{parentName:"p"},"Preview")," the entire playlist in a pop-up audition window, ",(0,i.kt)("strong",{parentName:"p"},"Duplicate")," or ",(0,i.kt)("strong",{parentName:"p"},"Delete")," one of your playlists from this menu."),(0,i.kt)("h3",{id:"auto-loading-playlists"},"Auto loading playlists"),(0,i.kt)("p",null,"LibreTime will schedule tracks from a selected playlist an hour before a show is scheduled to air. This is a great way to automatically schedule weekly shows which are received via. podcasts."),(0,i.kt)("h2",{id:"creating-a-smartblock"},"Creating a Smartblock"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(41835).Z,width:"642",height:"583"})),(0,i.kt)("p",null,"Smart blocks are automatically filled with media files from the LibreTime library, according to the criteria that you specify. This feature is intended to save staff time, compared to selecting items for a playlist manually, and can be used to schedule shows that operate in a consistent format."),(0,i.kt)("p",null,"To create a smart block, click the ",(0,i.kt)("strong",{parentName:"p"},"Smartblocks")," button on the left sidebar, and select ",(0,i.kt)("strong",{parentName:"p"},"New")," from the toolbar. Like a playlist, smart blocks can have a title and description, which you can edit. This helps you find relevant smart blocks in searches."),(0,i.kt)("p",null,"Fill out the smart block's ",(0,i.kt)("strong",{parentName:"p"},"Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Search Criteria"),", and ",(0,i.kt)("strong",{parentName:"p"},"Limit to")," sections. The search criteria can be any one of LibreTime's metadata categories, such as ",(0,i.kt)("strong",{parentName:"p"},"Title"),", ",(0,i.kt)("strong",{parentName:"p"},"Creator")," or ",(0,i.kt)("strong",{parentName:"p"},"Genre"),". The modifier depends on whether the metadata in question contains letters or numbers. For example, ",(0,i.kt)("strong",{parentName:"p"},"Title")," has modifiers including ",(0,i.kt)("em",{parentName:"p"},"contains")," and ",(0,i.kt)("em",{parentName:"p"},"starts with"),", whereas the modifiers for ",(0,i.kt)("strong",{parentName:"p"},"BPM")," include ",(0,i.kt)("em",{parentName:"p"},"is greater than")," and ",(0,i.kt)("em",{parentName:"p"},"is in the range"),"."),(0,i.kt)("p",null,"If you have a large number of files which meet the criteria that you specify, you may wish to limit the duration of the smart block using the ",(0,i.kt)("strong",{parentName:"p"},"Limit to")," field, so that it fits within the show you have in mind. Select ",(0,i.kt)("strong",{parentName:"p"},"hours"),", ",(0,i.kt)("strong",{parentName:"p"},"minutes")," or ",(0,i.kt)("strong",{parentName:"p"},"items")," from the drop-down menu, and click the ",(0,i.kt)("strong",{parentName:"p"},"Generate")," button again, if it is a static smart block. Then click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Smart Blocks by default will not overflow the length of a scheduled show. This is to prevent tracks from being cut-off because they exceed the time limit of a show. If you want a smartblock to schedule tracks until it is longer than the Time Limit you can check ",(0,i.kt)("strong",{parentName:"p"},'"Allow last track to exceed time limit"')," (helpful for avoiding dead air on autoscheduled shows)."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(84070).Z,width:"642",height:"583"})),(0,i.kt)("p",null,"You can also set the ",(0,i.kt)("strong",{parentName:"p"},"smart block type"),". A ",(0,i.kt)("strong",{parentName:"p"},"Static")," smart block will save the criteria and generate the block content immediately. This enables you to edit the contents of the block in the ",(0,i.kt)("strong",{parentName:"p"},"Library")," page before adding it to a show. A ",(0,i.kt)("strong",{parentName:"p"},"Dynamic")," smart block will only save the criteria, and the specific content will be generated at the time the block is added to a show. After that, the content of the show can be changed or re-ordered in the ",(0,i.kt)("strong",{parentName:"p"},"Now Playing")," page."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"plus button")," on the left to add OR criteria, such as ",(0,i.kt)("strong",{parentName:"p"},"Creator")," containing ",(0,i.kt)("em",{parentName:"p"},"beck")," OR ",(0,i.kt)("em",{parentName:"p"},"jimi"),". To add AND criteria, such as ",(0,i.kt)("strong",{parentName:"p"},"Creator")," containing ",(0,i.kt)("em",{parentName:"p"},"jimi")," AND BPM in the range ",(0,i.kt)("em",{parentName:"p"},"120")," to ",(0,i.kt)("em",{parentName:"p"},"130"),", click the ",(0,i.kt)("strong",{parentName:"p"},"plus button")," on the right. (The criteria are not case sensitive). Click ",(0,i.kt)("strong",{parentName:"p"},"Preview")," to see the results."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you see the message ",(0,i.kt)("strong",{parentName:"p"},"0 files meet the criteria"),", it might mean that the files in the Library have not been tagged with the correct metadata. See the chapter ",(0,i.kt)("a",{parentName:"p",href:"/pr-1876/fr/docs/user-manual/preparing-media"},"Preparing media")," for tips on tagging content."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(61519).Z,width:"642",height:"583"})),(0,i.kt)("p",null,"If you don't like the ordering which is generated, click the ",(0,i.kt)("strong",{parentName:"p"},"Shuffle")," button, or drag and drop the smart block contents into the order that you prefer. You can also remove items or add new items manually from the Library. Changes to static smart block contents are saved automatically when you add items, remove or re-order them, or click the ",(0,i.kt)("strong",{parentName:"p"},"Generate")," button. Click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button in the upper right corner to save any changes to smart block criteria."),(0,i.kt)("p",null,"By default, a smart block will not contain repeated items, which will limit the duration of the block if you do not have sufficient items meeting the specified criteria in your ",(0,i.kt)("strong",{parentName:"p"},"Library"),". To override the default behaviour, check the ",(0,i.kt)("strong",{parentName:"p"},"Allow Repeat Tracks")," box. The ",(0,i.kt)("strong",{parentName:"p"},"Sort tracks by")," menu offers the options of ",(0,i.kt)("strong",{parentName:"p"},"random"),", ",(0,i.kt)("strong",{parentName:"p"},"newest")," or ",(0,i.kt)("strong",{parentName:"p"},"oldest")," items first."),(0,i.kt)("p",null,"Smart blocks can be added to shows in the same way as a manually created playlist is added. Smart blocks can also be added to one or more playlists. In the case of a playlist containing a static smart block, click ",(0,i.kt)("strong",{parentName:"p"},"Expand Static Block")," to view the contents. For a dynamic smart block, you can review the criteria and duration limit by clicking ",(0,i.kt)("strong",{parentName:"p"},"Expand Dynamic Block"),"."),(0,i.kt)("p",null,"Once created, smart blocks can be found under the Smartblocks tab and refined at any time. They can be re-opened by right-clicking on the smart block and selecting ",(0,i.kt)("strong",{parentName:"p"},"Edit")," from the pop-up menu."))}d.isMDXComponent=!0},10279:function(t,e,a){e.Z=a.p+"assets/images/playlists-playlist-editor-273b207d62aff306d3483b040ca23386.png"},84070:function(t,e,a){e.Z=a.p+"assets/images/playlists-smartblock-advanced-1066b8c10c8c7a0879d41b625533fc3d.png"},61519:function(t,e,a){e.Z=a.p+"assets/images/playlists-smartblock-content-bedab362d5deb12cc1a39205ed04c1f7.png"},41835:function(t,e,a){e.Z=a.p+"assets/images/playlists-smartblock-options-e4a5b31c2dfcf68f72cfff599b83bff1.png"}}]);