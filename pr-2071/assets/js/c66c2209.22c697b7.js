"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8386],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},d=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,d=r(n,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,l(l({ref:e},d),{},{components:t})):a.createElement(h,l({ref:e},d))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,l=new Array(i);l[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r.mdxType="string"==typeof n?n:o,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3671:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={title:"HD Audio modules"},l=void 0,r={unversionedId:"appendix/hd-audio-modules",id:"version-3.0.0-alpha.13/appendix/hd-audio-modules",title:"HD Audio modules",description:"This listing is provided to help ensure that the correct model parameter is passed to the ALSA kernel module for an Intel HDA soundcard, if one is fitted to your LibreTime server.",source:"@site/versioned_docs/version-3.0.0-alpha.13/appendix/hd-audio-modules.md",sourceDirName:"appendix",slug:"/appendix/hd-audio-modules",permalink:"/pr-2071/docs/appendix/hd-audio-modules",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/appendix/hd-audio-modules.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"HD Audio modules"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha",permalink:"/pr-2071/docs/releases/3.0.0-alpha.00"},next:{title:"Rights and royalties",permalink:"/pr-2071/docs/appendix/rights-royalties"}},s={},p=[],d={toc:p};function c(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This listing is provided to help ensure that the correct model parameter is passed to the ALSA kernel module for an Intel HDA soundcard, if one is fitted to your LibreTime server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Model name   Description\n  ----------    -----------\nALC880\n======\n  3stack    3-jack in back and a headphone out\n  3stack-digout 3-jack in back, a HP out and a SPDIF out\n  5stack    5-jack in back, 2-jack in front\n  5stack-digout 5-jack in back, 2-jack in front, a SPDIF out\n  6stack    6-jack in back, 2-jack in front\n  6stack-digout 6-jack with a SPDIF out\n\nALC260\n======\n  N/A\n\nALC262\n======\n  inv-dmic  Inverted internal mic workaround\n\nALC267/268\n==========\n  inv-dmic  Inverted internal mic workaround\n\nALC269/270/275/276/28x/29x\n======\n  laptop-amic       Laptops with analog-mic input\n  laptop-dmic       Laptops with digital-mic input\n  alc269-dmic       Enable ALC269(VA) digital mic workaround\n  alc271-dmic       Enable ALC271X digital mic workaround\n  inv-dmic      Inverted internal mic workaround\n  headset-mic       Indicates a combined headset (headphone+mic) jack\n  lenovo-dock       Enables docking station I/O for some Lenovos\n  dell-headset-multi    Headset jack, which can also be used as mic-in\n  dell-headset-dock Headset jack (without mic-in), and also dock I/O\n\nALC66x/67x/892\n==============\n  mario         Chromebook mario model fixup\n  asus-mode1        ASUS\n  asus-mode2        ASUS\n  asus-mode3        ASUS\n  asus-mode4        ASUS\n  asus-mode5        ASUS\n  asus-mode6        ASUS\n  asus-mode7        ASUS\n  asus-mode8        ASUS\n  inv-dmic      Inverted internal mic workaround\n  dell-headset-multi    Headset jack, which can also be used as mic-in\n\nALC680\n======\n  N/A\n\nALC88x/898/1150\n======================\n  acer-aspire-4930g Acer Aspire 4930G/5930G/6530G/6930G/7730G\n  acer-aspire-8930g Acer Aspire 8330G/6935G\n  acer-aspire       Acer Aspire others\n  inv-dmic      Inverted internal mic workaround\n  no-primary-hp     VAIO Z/VGC-LN51JGB workaround (for fixed speaker DAC)\n\nALC861/660\n==========\n  N/A\n\nALC861VD/660VD\n==============\n  N/A\n\nCMI9880\n=======\n  minimal   3-jack in back\n  min_fp    3-jack in back, 2-jack in front\n  full      6-jack in back, 2-jack in front\n  full_dig  6-jack in back, 2-jack in front, SPDIF I/O\n  allout    5-jack in back, 2-jack in front, SPDIF out\n  auto      auto-config reading BIOS (default)\n\nAD1882 / AD1882A\n================\n  3stack    3-stack mode\n  3stack-automute 3-stack with automute front HP (default)\n  6stack    6-stack mode\n\nAD1884A / AD1883 / AD1984A / AD1984B\n====================================\n  desktop   3-stack desktop (default)\n  laptop    laptop with HP jack sensing\n  mobile    mobile devices with HP jack sensing\n  thinkpad  Lenovo Thinkpad X300\n  touchsmart    HP Touchsmart\n\nAD1884\n======\n  N/A\n\nAD1981\n======\n  basic     3-jack (default)\n  hp        HP nx6320\n  thinkpad  Lenovo Thinkpad T60/X60/Z60\n  toshiba   Toshiba U205\n\nAD1983\n======\n  N/A\n\nAD1984\n======\n  basic     default configuration\n  thinkpad  Lenovo Thinkpad T61/X61\n  dell_desktop  Dell T3400\n\nAD1986A\n=======\n  6stack    6-jack, separate surrounds (default)\n  3stack    3-stack, shared surrounds\n  laptop    2-channel only (FSC V2060, Samsung M50)\n  laptop-eapd   2-channel with EAPD (ASUS A6J)\n  laptop-automute 2-channel with EAPD and HP-automute (Lenovo N100)\n  ultra     2-channel with EAPD (Samsung Ultra tablet PC)\n  samsung   2-channel with EAPD (Samsung R65)\n  samsung-p50   2-channel with HP-automute (Samsung P50)\n\nAD1988/AD1988B/AD1989A/AD1989B\n==============================\n  6stack    6-jack\n  6stack-dig    ditto with SPDIF\n  3stack    3-jack\n  3stack-dig    ditto with SPDIF\n  laptop    3-jack with hp-jack automute\n  laptop-dig    ditto with SPDIF\n  auto      auto-config reading BIOS (default)\n\nConexant 5045\n=============\n  laptop-hpsense    Laptop with HP sense (old model laptop)\n  laptop-micsense   Laptop with Mic sense (old model fujitsu)\n  laptop-hpmicsense Laptop with HP and Mic senses\n  benq      Benq R55E\n  laptop-hp530  HP 530 laptop\n  test      for testing/debugging purpose, almost all controls\n        can be adjusted.  Appearing only when compiled with\n        $CONFIG_SND_DEBUG=y\n\nConexant 5047\n=============\n  laptop    Basic Laptop config\n  laptop-hp Laptop config for some HP models (subdevice 30A5)\n  laptop-eapd   Laptop config with EAPD support\n  test      for testing/debugging purpose, almost all controls\n        can be adjusted.  Appearing only when compiled with\n        $CONFIG_SND_DEBUG=y\n\nConexant 5051\n=============\n  laptop    Basic Laptop config (default)\n  hp        HP Spartan laptop\n  hp-dv6736 HP dv6736\n  hp-f700   HP Compaq Presario F700\n  ideapad   Lenovo IdeaPad laptop\n  toshiba   Toshiba Satellite M300\n\nConexant 5066\n=============\n  laptop    Basic Laptop config (default)\n  hp-laptop HP laptops, e g G60\n  asus      Asus K52JU, Lenovo G560\n  dell-laptop   Dell laptops\n  dell-vostro   Dell Vostro\n  olpc-xo-1_5   OLPC XO 1.5\n  ideapad       Lenovo IdeaPad U150\n  thinkpad  Lenovo Thinkpad\n\nSTAC9200\n========\n  ref       Reference board\n  oqo       OQO Model 2\n  dell-d21  Dell (unknown)\n  dell-d22  Dell (unknown)\n  dell-d23  Dell (unknown)\n  dell-m21  Dell Inspiron 630m, Dell Inspiron 640m\n  dell-m22  Dell Latitude D620, Dell Latitude D820\n  dell-m23  Dell XPS M1710, Dell Precision M90\n  dell-m24  Dell Latitude 120L\n  dell-m25  Dell Inspiron E1505n\n  dell-m26  Dell Inspiron 1501\n  dell-m27  Dell Inspiron E1705/9400\n  gateway-m4    Gateway laptops with EAPD control\n  gateway-m4-2  Gateway laptops with EAPD control\n  panasonic Panasonic CF-74\n  auto      BIOS setup (default)\n\nSTAC9205/9254\n=============\n  ref       Reference board\n  dell-m42  Dell (unknown)\n  dell-m43  Dell Precision\n  dell-m44  Dell Inspiron\n  eapd      Keep EAPD on (e.g. Gateway T1616)\n  auto      BIOS setup (default)\n\nSTAC9220/9221\n=============\n  ref       Reference board\n  3stack    D945 3stack\n  5stack    D945 5stack + SPDIF\n  intel-mac-v1  Intel Mac Type 1\n  intel-mac-v2  Intel Mac Type 2\n  intel-mac-v3  Intel Mac Type 3\n  intel-mac-v4  Intel Mac Type 4\n  intel-mac-v5  Intel Mac Type 5\n  intel-mac-auto Intel Mac (detect type according to subsystem id)\n  macmini   Intel Mac Mini (equivalent with type 3)\n  macbook   Intel Mac Book (eq. type 5)\n  macbook-pro-v1 Intel Mac Book Pro 1st generation (eq. type 3)\n  macbook-pro   Intel Mac Book Pro 2nd generation (eq. type 3)\n  imac-intel    Intel iMac (eq. type 2)\n  imac-intel-20 Intel iMac (newer version) (eq. type 3)\n  ecs202    ECS/PC chips\n  dell-d81  Dell (unknown)\n  dell-d82  Dell (unknown)\n  dell-m81  Dell (unknown)\n  dell-m82  Dell XPS M1210\n  auto      BIOS setup (default)\n\nSTAC9202/9250/9251\n==================\n  ref       Reference board, base config\n  m1        Some Gateway MX series laptops (NX560XL)\n  m1-2      Some Gateway MX series laptops (MX6453)\n  m2        Some Gateway MX series laptops (M255)\n  m2-2      Some Gateway MX series laptops\n  m3        Some Gateway MX series laptops\n  m5        Some Gateway MX series laptops (MP6954)\n  m6        Some Gateway NX series laptops\n  auto      BIOS setup (default)\n\nSTAC9227/9228/9229/927x\n=======================\n  ref       Reference board\n  ref-no-jd Reference board without HP/Mic jack detection\n  3stack    D965 3stack\n  5stack    D965 5stack + SPDIF\n  5stack-no-fp  D965 5stack without front panel\n  dell-3stack   Dell Dimension E520\n  dell-bios Fixes with Dell BIOS setup\n  dell-bios-amic Fixes with Dell BIOS setup including analog mic\n  volknob   Fixes with volume-knob widget 0x24\n  auto      BIOS setup (default)\n\nSTAC92HD71B*\n============\n  ref       Reference board\n  dell-m4-1 Dell desktops\n  dell-m4-2 Dell desktops\n  dell-m4-3 Dell desktops\n  hp-m4     HP mini 1000\n  hp-dv5    HP dv series\n  hp-hdx    HP HDX series\n  hp-dv4-1222nr HP dv4-1222nr (with LED support)\n  auto      BIOS setup (default)\n\nSTAC92HD73*\n===========\n  ref       Reference board\n  no-jd     BIOS setup but without jack-detection\n  intel     Intel DG45* mobos\n  dell-m6-amic  Dell desktops/laptops with analog mics\n  dell-m6-dmic  Dell desktops/laptops with digital mics\n  dell-m6   Dell desktops/laptops with both type of mics\n  dell-eq   Dell desktops/laptops\n  alienware Alienware M17x\n  auto      BIOS setup (default)\n\nSTAC92HD83*\n===========\n  ref       Reference board\n  mic-ref   Reference board with power management for ports\n  dell-s14  Dell laptop\n  dell-vostro-3500  Dell Vostro 3500 laptop\n  hp-dv7-4000   HP dv-7 4000\n  hp_cNB11_intquad HP CNB models with 4 speakers\n  hp-zephyr HP Zephyr\n  hp-led    HP with broken BIOS for mute LED\n  hp-inv-led    HP with broken BIOS for inverted mute LED\n  auto      BIOS setup (default)\n\nSTAC9872\n========\n  vaio      VAIO laptop without SPDIF\n  auto      BIOS setup (default)\n\nCirrus Logic CS4206/4207\n========================\n  mbp55     MacBook Pro 5,5\n  imac27    IMac 27 Inch\n  auto      BIOS setup (default)\n\nCirrus Logic CS4208\n===================\n  mba6      MacBook Air 6,1 and 6,2\n  gpio0     Enable GPIO 0 amp\n  auto      BIOS setup (default)\n\nVIA VT17xx/VT18xx/VT20xx\n========================\n  auto      BIOS setup (default)\n")))}c.isMDXComponent=!0}}]);