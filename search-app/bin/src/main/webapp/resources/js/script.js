(function(){
window.google={kEI:"kTBRU7DjKenNsQTV8YHoCA",getEI:function(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||google.kEI},https:function(){return"https:"==window.location.protocol},kEXPI:"31215,3300077,3300112,3300133,3300137,3300164,3310649,3310683,3700062,4000116,4007661,4007830,4008067,4008133,4008142,4009033,4009352,4009565,4009641,4010806,4010858,4010899,4011228,4011258,4011679,4012373,4012504,4013374,4013414,4013591,4013723,4013747,4013787,4013823,4013941,4013967,4013979,4014016,4014092,4014431,4014515,4014636,4014671,4014813,4014828,4014991,4015119,4015155,4015234,4015260,4015444,4015519,4015550,4015635,4015638,4015640,4015642,4015644,4015646,4015772,4015809,4015812,4015899,4016004,4016007,4016013,4016127,4016309,4016323,4016363,4016367,4016371,4016425,4016452,4016456,4016466,4016479,4016487,4016623,4016703,4016730,4016767,4016824,4016851,4016855,4016886,4016887,4016902,4016933,4016940,4016952,4016969,4017177,4017202,4017227,8300015,8300017,8500165,8500223,8500240,8500252,8500255,8500264,8500271,8500283,8500306,8500314,8500332,10200002,10200012,10200014,10200029,10200038,10200040,10200048,10200053,10200055,10200066,10200083,10200120,10200134,10200136,10200155,10200157,10200159,10200178,10200211,10200221",kCSI:{e:"31215,3300077,3300112,3300133,3300137,3300164,3310649,3310683,3700062,4000116,4007661,4007830,4008067,4008133,4008142,4009033,4009352,4009565,4009641,4010806,4010858,4010899,4011228,4011258,4011679,4012373,4012504,4013374,4013414,4013591,4013723,4013747,4013787,4013823,4013941,4013967,4013979,4014016,4014092,4014431,4014515,4014636,4014671,4014813,4014828,4014991,4015119,4015155,4015234,4015260,4015444,4015519,4015550,4015635,4015638,4015640,4015642,4015644,4015646,4015772,4015809,4015812,4015899,4016004,4016007,4016013,4016127,4016309,4016323,4016363,4016367,4016371,4016425,4016452,4016456,4016466,4016479,4016487,4016623,4016703,4016730,4016767,4016824,4016851,4016855,4016886,4016887,4016902,4016933,4016940,4016952,4016969,4017177,4017202,4017227,8300015,8300017,8500165,8500223,8500240,8500252,8500255,8500264,8500271,8500283,8500306,8500314,8500332,10200002,10200012,10200014,10200029,10200038,10200040,10200048,10200053,10200055,10200066,10200083,10200120,10200134,10200136,10200155,10200157,10200159,10200178,10200211,10200221",ei:"kTBRU7DjKenNsQTV8YHoCA"},authuser:0,ml:function(){},kHL:"en",time:function(){return(new Date).getTime()},log:function(a,b,c,h,k){var d=
new Image,f=google.lc,e=google.li,g="";d.onerror=d.onload=d.onabort=function(){delete f[e]};f[e]=d;c||-1!=b.search("&ei=")||(g="&ei="+google.getEI(h));c=c||"/"+(k||"gen_204")+"?atyp=i&ct="+a+"&cad="+b+g+"&zx="+google.time();a=/^http:/i;a.test(c)&&google.https()?(google.ml(Error("GLMM"),!1,{src:c}),delete f[e]):(d.src=c,google.li=e+1)},lc:[],li:0,j:{en:1,b:!!location.hash&&!!location.hash.match("[#&]((q|fp)=|tbs=simg|tbs=sbi)"),
bv:21,pm:"p",u:"f9d8917"},y:{},x:function(a,b){google.y[a.id]=[a,b];return!1},load:function(a,b,c){google.x({id:a+l++},function(){google.load(a,b,c)})}};var l=0;
window.chrome||(window.chrome={});window.chrome.sv=2.00;window.chrome.searchBox||(window.chrome.searchBox={});var m=function(){var a=encodeURIComponent(window.chrome.searchBox.value);google.x({id:"psyapi"},function(a){return function(){google.nav.search({q:a,sourceid:"chrome-psyapi2"},!1,!0)}}(a))};window.chrome.searchBox.onsubmit=m;})();
(function(){google.sn="webhp";google.timers={};google.startTick=function(a,b){var f=google.time();google.timers[a]={t:{start:f},bfr:!!b};};google.tick=function(a,b,f){google.timers[a]||google.startTick(a);google.timers[a].t[b]=f||google.time()};google.startTick("load",!0);
try{google.pt=window.chrome&&window.chrome.csi&&Math.floor(window.chrome.csi().pageT);}catch(d){}})();
(function(){'use strict';var l=this,m=Date.now||function(){return+new Date};var u=function(c,b){return function(a){a||(a=window.event);return b.call(c,a)}},w="undefined"!=typeof navigator&&/Macintosh/.test(navigator.userAgent),x="undefined"!=typeof navigator&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),y={A:13,BUTTON:0,CHECKBOX:32,COMBOBOX:13,LINK:13,LISTBOX:13,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:13,RADIO:32,RADIOGROUP:32,RESET:0,SUBMIT:0,TAB:0,TABLIST:0,TREE:13,TREEITEM:13};var B=function(){this.s=[];this.i=[];this.o=[];this.v={};this.k=null;this.p=[];A(this,"_custom")},C="undefined"!=typeof navigator&&/iPhone|iPad|iPod/.test(navigator.userAgent),D=/\s*;\s*/,F=function(c,b){return function(a){var d,f,g=b;if("_custom"==g){if(!a.detail||!a.detail._type)return;g=a.detail._type}var e;e:{e=g;if("click"==e&&(w&&a.metaKey||!w&&a.ctrlKey||2==a.which||null==a.which&&4==a.button||a.shiftKey))e="clickmod";else{var k=a.which||a.keyCode||a.key;x&&3==k&&(k=13);var h=a.srcElement||a.target;d=(h.getAttribute("role")||h.type||h.tagName).toUpperCase();var p=13==k||32==k,n;if(n="keydown"==
a.type)n=(h.getAttribute("role")||h.type||h.tagName).toUpperCase(),n="TEXT"!=n&&"TEXTAREA"!=n&&"PASSWORD"!=n&&"SEARCH"!=n&&("COMBOBOX"!=n||"INPUT"!=h.tagName.toUpperCase())&&!h.isContentEditable&&!(a.ctrlKey||a.shiftKey||a.altKey||a.metaKey);var t="INPUT"==h.tagName.toUpperCase()&&!h.type;f=0==y[d]%k;k=!(d in y)&&13==k;h=!!a.originalTarget&&a.originalTarget!=h;n&&p&&((f||k)&&!t||h)&&(e="clickkey")}h=a.srcElement||a.target;p=E(e,a,h,"",null);for(n=h;n&&n!=this;n=n.__owner||n.parentNode){d=t=n;f=e;k=d.__jsaction;if(!k){k={};d.__jsaction=k;var q=void 0,q=null;"getAttribute"in d&&(q=d.getAttribute("jsaction"));if(q){d=q.split(D);for(var q=0,K=d?d.length:0;q<K;q++){var r=d[q];if(r){var v=r.indexOf(":"),z=-1!=v,L=z?r.substr(0,v).replace(/^\s+/,"").replace(/\s+$/,""):"click",r=z?r.substr(v+1).replace(/^\s+/,"").replace(/\s+$/,""):r;k[L]=r}}}}"clickkey"==f?f="click":"click"!=f||k.click||(f="clickonly");d=f;f=k[f]||"";p=E(d,a,h,f||"",t,p.timeStamp);if(f){(e="clickkey"==e)&&!(e=32==(a.which||a.keyCode||
a.key))&&(e=a.srcElement||a.target,e="BUTTON"==e.tagName.toUpperCase()||!!e.type);e&&(e=a,e.preventDefault?e.preventDefault():e.returnValue=!1);e=p;break e}}p.action="";p.actionElement=null;e=p}c.k&&(p=E(e.eventType,e.event,e.targetElement,e.action,e.actionElement,e.timeStamp),"clickonly"==p.eventType&&(p.eventType="click"),c.k(p,!0));if(e.actionElement)if("A"==e.actionElement.tagName&&"click"==g&&(a.preventDefault?a.preventDefault():a.returnValue=!1),c.k)c.k(e);else{var s;if((g=l.document)&&!g.createEvent&&
g.createEventObject)try{s=g.createEventObject(a)}catch(P){s=a}else s=a;e.event=s;c.p.push(e)}}},E=function(c,b,a,d,f,g){return{eventType:c,event:b,targetElement:a,action:d,actionElement:f,timeStamp:g||m()}},G=function(c,b){return function(a){var d=c,f=b,g=!1;"mouseenter"==d?d="mouseover":"mouseleave"==d&&(d="mouseout");if(a.addEventListener){if("focus"==d||"blur"==d||"error"==d||"load"==d)g=!0;a.addEventListener(d,f,g)}else a.attachEvent&&("focus"==d?d="focusin":"blur"==d&&(d="focusout"),f=u(a,f),a.attachEvent("on"+d,f));return{B:d,w:f,C:g}}},A=function(c,b){if(!c.v.hasOwnProperty(b)&&"mouseenter"!=b&&"mouseleave"!=b){var a=F(c,b),d=G(b,a);c.v[b]=a;c.s.push(d);for(a=0;a<c.i.length;++a){var f=c.i[a];f.k.push(d.call(null,f.i))}"click"==b&&A(c,"keydown")}};B.prototype.w=function(c){return this.v[c]};var O=function(c){var b=H,a=new I(c);e:{for(var d=0;d<b.i.length;d++)if(J(b.i[d].i,c)){c=!0;break e}c=!1}if(c)b.o.push(a);else{M(b,a);b.i.push(a);a=b.o.concat(b.i);c=[];for(var d=[],f=0;f<b.i.length;++f){var g=b.i[f];if(N(g,a)){c.push(g);for(var e=0;e<g.k.length;++e){var k=g.i,h=g.k[e];k.removeEventListener?k.removeEventListener(h.B,h.w,h.C):k.detachEvent&&k.detachEvent("on"+h.B,h.w)}g.k=[]}else d.push(g)}for(f=0;f<b.o.length;++f)g=b.o[f],N(g,a)?c.push(g):(d.push(g),M(b,g));b.i=d;b.o=c}},M=function(c,b){var a=b.i;C&&(a.style.cursor="pointer");for(a=0;a<c.s.length;++a)b.k.push(c.s[a].call(null,b.i))},I=function(c){this.i=c;this.k=[]},N=function(c,b){for(var a=0;a<b.length;++a)if(b[a].i!=c.i&&J(b[a].i,c.i))return!0;return!1},J=function(c,b){for(;c!=b&&b.parentNode;)b=b.parentNode;return c==b};var H=new B;O(window.document.documentElement);A(H,"click");A(H,"focus");A(H,"focusin");A(H,"blur");A(H,"focusout");A(H,"error");A(H,"load");A(H,"change");A(H,"input");A(H,"keyup");A(H,"keydown");A(H,"keypress");A(H,"mousedown");A(H,"mouseout");A(H,"mouseover");A(H,"mouseup");A(H,"speech");window.google.jsad=function(c){var b=H;b.k=c;b.p&&(0<b.p.length&&c(b.p),b.p=null)};window.google.jsac=function(c){O(c)};}).call(window);(function(){'use strict';var f=this,g=function(d,c){var a=d.split("."),b=f;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===c?b[e]?b=b[e]:b=b[e]={}:b[e]=c};var h=[],k=[];g("google.jsc.cc",h);g("google.jsc.xx",k);g("google.jsc.c",function(d,c,a){h.push([d,c,a])});g("google.jsc.d",function(d){for(var c=0,a;a=h[c];)d==a[1]?h.splice(c,1):c++});g("google.jsc.x",function(d){k.push(d)});}).call(window);google.arwt=function(a){a.href=document.getElementById(a.id.substring(1)).href;return!0};