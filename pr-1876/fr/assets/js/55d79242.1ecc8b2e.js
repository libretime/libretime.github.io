"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3718],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),l=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return t?i.createElement(f,s(s({ref:n},d),{},{components:t})):i.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83800:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),s=["components"],o={title:"Pr\xe9paration des m\xe9dias pour le t\xe9l\xe9chargement"},u=void 0,l={unversionedId:"user-manual/preparing-media",id:"user-manual/preparing-media",title:"Pr\xe9paration des m\xe9dias pour le t\xe9l\xe9chargement",description:"Avant de t\xe9l\xe9charger des m\xe9dias sur un serveur LibreTime, il y a un certain nombre de facteurs \xe0 prendre en compte. Un bon flux d'ingestion vous fera gagner beaucoup de temps par la suite.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-manual/preparing-media.md",sourceDirName:"user-manual",slug:"/user-manual/preparing-media",permalink:"/pr-1876/fr/docs/next/user-manual/preparing-media",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/preparing-media.md",tags:[],version:"current",frontMatter:{title:"Pr\xe9paration des m\xe9dias pour le t\xe9l\xe9chargement"},sidebar:"tutorialSidebar",previous:{title:"Podcasts",permalink:"/pr-1876/fr/docs/next/user-manual/podcasts"},next:{title:"Programmation des \xe9missions",permalink:"/pr-1876/fr/docs/next/user-manual/scheduling-shows"}},d={},p=[{value:"Qualit\xe9 des m\xe9tadonn\xe9es",id:"qualit\xe9-des-m\xe9tadonn\xe9es",level:2},{value:"M\xe9tadonn\xe9es dans les anciens jeux de caract\xe8res",id:"m\xe9tadonn\xe9es-dans-les-anciens-jeux-de-caract\xe8res",level:3},{value:"Niveau Audio",id:"niveau-audio",level:2},{value:"Silence dans les fichiers multim\xe9dias",id:"silence-dans-les-fichiers-multim\xe9dias",level:2}],c={toc:p};function m(e){var n=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Avant de t\xe9l\xe9charger des m\xe9dias sur un serveur LibreTime, il y a un certain nombre de facteurs \xe0 prendre en compte. Un bon flux d'ingestion vous fera gagner beaucoup de temps par la suite."),(0,a.kt)("h2",{id:"qualit\xe9-des-m\xe9tadonn\xe9es"},"Qualit\xe9 des m\xe9tadonn\xe9es"),(0,a.kt)("p",null,"LibreTime importe automatiquement toutes les m\xe9tadonn\xe9es qui se trouvent dans les balises ID3 des fichiers. Si ces balises sont incorrectes ou s'il manque des informations, vous devrez soit \xe9diter les m\xe9tadonn\xe9es manuellement. Les fichiers contenant des m\xe9tadonn\xe9es telles que le titre de la piste et les informations sur l'artiste peuvent \xeatre difficiles \xe0 localiser dans les grandes biblioth\xe8ques, ou \xe0 ajouter aux \xe9missions, aux listes de lecture ou aux blocs intelligents."),(0,a.kt)("p",null,"Il existe un certain nombre de programmes qui peuvent \xeatre utilis\xe9s pour corriger les erreurs ou les informations incompl\xe8tes dans les balises ID3. Vous pouvez \xe9galement utiliser un gestionnaire de biblioth\xe8que musicale (comme Apple Music, Rhythmbox ou Windows Media Player) pour modifier les balises ID3, mais vous devrez peut-\xeatre importer les fichiers dans votre biblioth\xe8que, ce qui n'est pas toujours pratique."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.xdlab.ru/en/"},"TagScanner")," (Windows)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mp3tag.de/en/index.html"},"Mp3tag")," (Windows)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://picard.musicbrainz.org/"},"MusicBrainz Picard")," (Mac, Windows, Linux)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.google.com/p/quodlibet/"},"Ex Falso")," (Linux)")),(0,a.kt)("p",null,"La fonction \"Tags From Path\" d'Ex Falso est un gain de temps particuli\xe8rement utile si vous avez une grande archive de fichiers non \xe9tiquet\xe9s. Parfois, il y a des informations utiles sur le cr\xe9ateur ou le titre dans le nom du fichier ou la structure du chemin d'acc\xe8s au r\xe9pertoire, qui peuvent \xeatre converties automatiquement en balise ID3."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(43101).Z,width:"595",height:"653"})),(0,a.kt)("h3",{id:"m\xe9tadonn\xe9es-dans-les-anciens-jeux-de-caract\xe8res"},"M\xe9tadonn\xe9es dans les anciens jeux de caract\xe8res"),(0,a.kt)("p",null,"LibreTime s'attend \xe0 ce que les m\xe9tadonn\xe9es des balises de fichiers soient stock\xe9es dans le jeu de caract\xe8res international UTF-8. Des programmes tels qu'",(0,a.kt)("strong",{parentName:"p"},"Ex Falso")," (d\xe9crit ci-dessus) encodent les m\xe9tadonn\xe9es en UTF-8 par d\xe9faut. Si vous avez une archive de fichiers encod\xe9s avec des m\xe9tadonn\xe9es dans un jeu de caract\xe8res h\xe9rit\xe9, comme l'encodage cyrillique Windows-1251, vous devez convertir ces fichiers avant de les importer."),(0,a.kt)("p",null,"Le programme ",(0,a.kt)("strong",{parentName:"p"},"mid3iconv")," (qui fait partie du paquet ",(0,a.kt)("strong",{parentName:"p"},"python-mutagen")," dans Debian et Ubuntu) peut \xeatre utilis\xe9 pour convertir par lots le jeu de caract\xe8res des m\xe9tadonn\xe9es des fichiers sur la ligne de commande. Vous pouvez installer python-mutagen avec la commande sudo apt-get install python-mutagen."),(0,a.kt)("p",null,"Par exemple, pour pr\xe9visualiser la conversion des balises du jeu de caract\xe8res Windows-1251 (CP1251) en UTF-8 pour une archive enti\xe8re de fichiers MP3, vous pouvez utiliser la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.mp3" -print0 | xargs -0 mid3iconv -e CP1251 -d -p\n')),(0,a.kt)("p",null,"dans le r\xe9pertoire de base de l'archive. L'option -d sp\xe9cifie que la nouvelle balise doit \xeatre imprim\xe9e sur la console du serveur (mode d\xe9bogage), et l'option -p sp\xe9cifie une ex\xe9cution de pr\xe9visualisation. Cet aper\xe7u vous permettra de confirmer que les m\xe9tadonn\xe9es sont lues et converties correctement avant d'\xe9crire les nouvelles balises."),(0,a.kt)("p",null,"Pour convertir r\xe9ellement toutes les balises et supprimer toute balise ID3v1 pr\xe9sente dans chaque fichier en m\xeame temps, vous pouvez utiliser la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.mp3" -print0 | xargs -0 mid3iconv -e CP1251 --remove-v1\n')),(0,a.kt)("p",null,"Le nom du jeu de caract\xe8res original suit l'option ",(0,a.kt)("strong",{parentName:"p"},"-e"),". D'autres jeux de caract\xe8res h\xe9rit\xe9s que mid3iconv peut convertir en UTF-8 incluent :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KOI8-R: Russian\nKOI8-U: Ukrainian\n\nGBK: Traditional Chinese\nGB2312: Simplified Chinese\n\nEUC-KR: Korean\nEUC-JP: Japanese\n\nCP1253: Greek\nCP1254: Turkish\nCP1255: Hebrew\nCP1256: Arabic\n")),(0,a.kt)("h2",{id:"niveau-audio"},"Niveau Audio"),(0,a.kt)("p",null,"Lors de l'acquisition d'un fichier, LibreTime analyse l'intensit\xe9 sonore de chaque fichier Ogg Vorbis, MP3, AAC ou FLAC, et stocke une valeur ReplayGain pour ce fichier dans sa base de donn\xe9es. Au moment de la lecture, la valeur ReplayGain est fournie \xe0 Liquidsoap afin que le gain puisse \xeatre automatiquement ajust\xe9 pour fournir une sortie moyenne de -14 dBFS (14 d\xe9cibels sous la pleine \xe9chelle). Voir ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ReplayGain"},"https://en.wikipedia.org/wiki/ReplayGain")," pour plus de d\xe9tails sur ReplayGain."),(0,a.kt)("p",null,"En raison de cet ajustement automatique du gain, les fichiers dont l'intensit\xe9 sonore moyenne est sup\xe9rieure \xe0 -14 dBFS ne seront pas plus forts que les fichiers plus silencieux au moment de la lecture, mais le facteur de cr\xeate plus faible des fichiers les plus forts (leur rapport cr\xeate-moyenne relativement faible) peut \xeatre apparent dans la sortie, rendant ces fichiers moins dynamiques. Cela peut \xeatre un probl\xe8me pour la musique populaire contemporaine, qui peut atteindre une moyenne de -9 dBFS ou plus avant le r\xe9glage de ReplayGain. (Voir ",(0,a.kt)("a",{parentName:"p",href:"https://www.soundonsound.com/sound-advice/dynamic-range-loudness-war"},"https://www.soundonsound.com/sound-advice/dynamic-range-loudness-war")," pour une analyse d\xe9taill\xe9e du probl\xe8me)."),(0,a.kt)("p",null,"Les producteurs de votre station doivent donc viser un \xe9cart de 14 dB entre l'intensit\xe9 maximale et l'intensit\xe9 moyenne pour maintenir le facteur de cr\xeate de leur mat\xe9riel pr\xe9par\xe9 (\xe9galement connu sous le nom de DR14 sur certains mesureurs de gamme dynamique, tels que le T.meter DR14 en ligne de commande disponible sur ",(0,a.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/dr14tmeter/"},"https://sourceforge.net/projects/dr14tmeter/)"),"). Si les producteurs travaillent avec une norme d'intensit\xe9 sonore diff\xe9rente, le modificateur ReplayGain de la page Stream Settings de LibreTime peut \xeatre ajust\xe9 pour s'adapter \xe0 leur mat\xe9riel."),(0,a.kt)("p",null,"Il convient d'\xe9viter les pics transitoires importants dans les fichiers autrement silencieux, afin de se pr\xe9munir contre la n\xe9cessit\xe9 de limiter les pics lorsque ReplayGain est appliqu\xe9 \xe0 ces fichiers plus silencieux."),(0,a.kt)("p",null,"L'outil de ligne de commande vorbisgain, disponible dans le paquet ",(0,a.kt)("strong",{parentName:"p"},"vorbisgain")," de Debian/Ubuntu, peut \xeatre utilis\xe9 pour indiquer le ReplayGain d'un fichier Ogg Vorbis individuel avant de l'ing\xe9rer dans LibreTime. (Un outil similaire pour les fichiers MP3 est disponible dans le paquet ",(0,a.kt)("strong",{parentName:"p"},"mp3gain")," de Debian/Ubuntu)."),(0,a.kt)("p",null,"Voici un exemple d'un fichier tr\xe8s silencieux o\xf9 l'utilisation de ReplayGain rendrait la sortie plus forte de 17dB :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vorbisgain -d Peter_Lawson-Three_Gymn.ogg\nAnalyzing files...\n\n    Gain   | Peak | Scale | New Peak | Track\n----------+------+-------+----------+------\n+17.39 dB | 4536 |  7.40 |    33585 | Peter_Lawson-Three_Gymn.ogg\n")),(0,a.kt)("p",null,"Et voici un exemple d'un fichier tr\xe8s fort, avec un facteur de cr\xeate plus faible, o\xf9 la sortie sera plus de 7dB plus silencieuse avec ReplayGain appliqu\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vorbisgain -d Snoop_Dogg-Doggfather.ogg\nAnalyzing files...\n\n   Gain   | Peak  | Scale | New Peak | Track\n----------+-------+-------+----------+------\n -7.86 dB | 36592 |  0.40 |    14804 | Snoop_Dogg-Doggfather.ogg\n")),(0,a.kt)("p",null,"Dans la sortie de vorbisgain, Peak est la valeur maximale de l'\xe9chantillon du fichier avant l'application de ReplayGain, o\xf9 une valeur de 32 767 repr\xe9sente la pleine \xe9chelle lors du d\xe9codage en \xe9chantillons 16 bits sign\xe9s. Notez que les fichiers compress\xe9s avec perte peuvent avoir des pics sup\xe9rieurs \xe0 la pleine \xe9chelle, en raison d'artefacts d'encodage. La valeur New Peak pour le fichier Snoop Dogg peut \xeatre relativement faible en raison de la limitation dure utilis\xe9e dans le mastering de ce morceau de musique."),(0,a.kt)("h2",{id:"silence-dans-les-fichiers-multim\xe9dias"},"Silence dans les fichiers multim\xe9dias"),(0,a.kt)("p",null,"Avant d'importer des m\xe9dias, il est bon de v\xe9rifier s'il y a des sections silencieuses dans les fichiers m\xe9dias. Bien que LibreTime compense les silences de d\xe9but et de fin par l'utilisation de points de rep\xe8re automatiques, il est pr\xe9f\xe9rable de couper ces fichiers \xe0 la longueur voulue avant de les t\xe9l\xe9charger. Deux \xe9diteurs de fichiers audio permettant de supprimer les sections silencieuses sont Audacity et Ocenaudio."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Les interruptions de diffusion ou les temps morts peuvent avoir des r\xe9percussions juridiques pour votre station. V\xe9rifiez aupr\xe8s du directeur de votre station ou de l'autorit\xe9 de communication locale ou nationale pour plus d'informations."))),(0,a.kt)("p",null,"Les introductions silencieuses ou les fondus prolong\xe9s peuvent \xe9galement entra\xeener des lacunes apparentes dans votre diffusion. Ce ph\xe9nom\xe8ne est plus fr\xe9quent lors de la lecture de fichiers audio provenant de CD ripp\xe9s ou copi\xe9s \xe0 partir de bandes ou de vinyles. Les longues p\xe9riodes de silence doivent \xeatre supprim\xe9es des fichiers avant de les t\xe9l\xe9charger sur LibreTime."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(20155).Z,width:"595",height:"327"})))}m.isMDXComponent=!0},20155:function(e,n,t){n.Z=t.p+"assets/images/preparing-media-screenshot126-debra_silence-703e48257e791a0e1d7d3f5feb0d70cc.png"},43101:function(e,n,t){n.Z=t.p+"assets/images/preparing-media-screenshot175-ex_falso-7b91a6c21a028df139a17205b87a6985.png"}}]);