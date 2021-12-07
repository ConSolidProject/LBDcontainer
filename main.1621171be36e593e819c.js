(()=>{var e,t,r,n,o,i,s,a,f,u,l,c,d,h,p,v,b,m={62352:(e,t,r)=>{Promise.all([r.e(122),r.e(925),r.e(865),r.e(704),r.e(231),r.e(170),r.e(6)]).then(r.bind(r,46299))},17187:e=>{"use strict";var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(r,n){function o(r){e.removeListener(t,i),n(r)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),r([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,o)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){var o,i,s,u;if(a(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),void 0===s)s=i[t]=r,++e._eventsCount;else if("function"==typeof s?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=f(e))>0&&s.length>o&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=l.bind(n);return o.listener=r,n.wrapFn=o,o}function d(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):p(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function p(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function v(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){n.once&&e.removeEventListener(t,o),r(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return f(this)},i.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var f=i[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var u=f.length,l=p(f,u);for(r=0;r<u;++r)n(l[r],this,t)}return!0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,c(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,c(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,n,o,i,s;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},i.prototype.listenerCount=h,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},y={};function g(e){var t=y[e];if(void 0!==t)return t.exports;var r=y[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,g),r.loaded=!0,r.exports}g.m=m,g.c=y,g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var r in t)g.o(t,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((t,r)=>(g.f[r](e,t),t)),[])),g.u=e=>e+"."+{6:"b2a23dc7b7a604fb5d3a",42:"1d2c553fa37885cfff4f",82:"99e3c225e0d830620ac3",122:"85a010a99c33e013edc6",123:"d980f8811248b73589b2",148:"376680a846213d15f0d5",151:"d5a38bb627d729762207",170:"692a25ce47fd5c12adb1",172:"30abd8009fa96800929c",193:"d8030a364ec7f1edae32",205:"87ce1eaa4dc9a0674140",231:"2c653405bb5dfdc172ee",294:"579c22a88bfb525420ca",295:"ea26d41815ff22c774fd",305:"9b59480a4a477bd4c012",310:"f621b2969c66317949e6",361:"9879cf23bb5d15a1748c",413:"94f5d2cd15e87a8e0c6a",436:"1257633f909f615c4d7d",466:"be1e4de30804320e3630",473:"eb1181f72849f8df6abc",575:"3cbc4b596aca611d4d7a",614:"b09c561d23441e931273",657:"118b8f4767c849c162bd",704:"a0085b12fe17a99e6590",705:"d557bd42c23ac3371641",709:"b14b5a51f866eaf5cf33",726:"32fba226f48ea80ac7e1",727:"d0bce5c8543e472ae923",764:"5fc0135c3329c1472a81",767:"dc666ea9e90ef75c7486",804:"ba1a88420ae8dba77ba0",815:"370dc4ef08035f00e9d3",865:"6f5232e91325ef0b3f79",874:"192724a75c0f60493d22",925:"16deccb5946ac4a7b35d",935:"7803a35f8fc731d5cb75",956:"e69f055d528a57c2648b",957:"9b5fe0660b7caa032c27",977:"67ec3de605236dea9a2b"}[e]+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="lbdserver:",g.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var s,a;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,g.nc&&s.setAttribute("nonce",g.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[n];var c=(t,n)=>{s.onerror=s.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),a&&document.head.appendChild(s)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},t={};g.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];g.o(g.S,r)||(g.S[r]={});var i=g.S[r],s="lbdserver",a=(e,t,r,n)=>{var o=i[e]=i[e]||{},a=o[t];(!a||!a.loaded&&(!n!=!a.eager?n:s>a.from))&&(o[t]={get:r,from:s,eager:!!n})},f=[];return"default"===r&&(a("@comunica/actor-init-sparql","1.22.1",(()=>Promise.all([g.e(473),g.e(151),g.e(874),g.e(231),g.e(42),g.e(957),g.e(170),g.e(295)]).then((()=>()=>g(36875))))),a("@inrupt/solid-client-authn-browser","1.11.2",(()=>Promise.all([g.e(305),g.e(874),g.e(231)]).then((()=>()=>g(94305))))),a("@material-ui/core","4.12.3",(()=>Promise.all([g.e(709),g.e(122),g.e(865),g.e(704)]).then((()=>()=>g(23709))))),a("buffer","6.0.3",(()=>g.e(764).then((()=>()=>g(48764))))),a("events","3.3.0",(()=>()=>g(17187)),1),a("history","4.10.1",(()=>g.e(466).then((()=>()=>g(68466))))),a("history","4.10.1",(()=>g.e(172).then((()=>()=>g(59172))))),a("mem","8.1.1",(()=>g.e(956).then((()=>()=>g(10956))))),a("n3","1.11.1",(()=>Promise.all([g.e(473),g.e(657),g.e(874),g.e(42),g.e(726)]).then((()=>()=>g(51657))))),a("react-dom","17.0.2",(()=>Promise.all([g.e(935),g.e(865)]).then((()=>()=>g(73935))))),a("react-draggable","4.4.4",(()=>Promise.all([g.e(193),g.e(865),g.e(704),g.e(148)]).then((()=>()=>g(61193))))),a("react-query","3.24.4",(()=>Promise.all([g.e(767),g.e(865),g.e(704),g.e(413)]).then((()=>()=>g(88767))))),a("react-router-dom","5.3.0",(()=>Promise.all([g.e(865),g.e(361),g.e(727)]).then((()=>()=>g(73727))))),a("react-router","5.2.1",(()=>Promise.all([g.e(977),g.e(865),g.e(82),g.e(205)]).then((()=>()=>g(5977))))),a("react","17.0.2",(()=>g.e(294).then((()=>()=>g(67294))))),a("recoil","0.3.1",(()=>Promise.all([g.e(804),g.e(865),g.e(704)]).then((()=>()=>g(2804))))),a("url","0.11.0",(()=>g.e(575).then((()=>()=>g(8575))))),a("uuid","8.3.2",(()=>g.e(614).then((()=>()=>g(21614)))))),e[r]=f.length?Promise.all(f).then((()=>e[r]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var t=g.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],i=(typeof o)[0];if(n>=t.length)return"u"==i;var s=t[n],a=(typeof s)[0];if(i!=a)return"o"==i&&"n"==a||"s"==a||"u"==i;if("o"!=i&&"u"!=i&&o!=s)return o<s;n++}},o=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,r+="u"==(typeof(a=e[i]))[0]?"-":(n>0?".":"")+(n=2,a);return r}var s=[];for(i=1;i<e.length;i++){var a=e[i];s.push(0===a?"not("+f()+")":1===a?"("+f()+" || "+f()+")":2===a?s.pop()+" "+s.pop():o(a))}return f();function f(){return s.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,t)=>{if(0 in e){t=r(t);var n=e[0],o=n<0;o&&(n=-n-1);for(var s=0,a=1,f=!0;;a++,s++){var u,l,c=a<e.length?(typeof e[a])[0]:"";if(s>=t.length||"o"==(l=(typeof(u=t[s]))[0]))return!f||("u"==c?a>n&&!o:""==c!=o);if("u"==l){if(!f||"u"!=c)return!1}else if(f)if(c==l)if(a<=n){if(u!=e[a])return!1}else{if(o?u>e[a]:u<e[a])return!1;u!=e[a]&&(f=!1)}else if("s"!=c&&"n"!=c){if(o||a<=n)return!1;f=!1,a--}else{if(a<=n||l<c!=o)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,a--)}}var d=[],h=d.pop.bind(d);for(s=1;s<e.length;s++){var p=e[s];d.push(1==p?h()|h():2==p?h()&h():p?i(p,t):!h())}return!!h()},s=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&n(e,t)?t:e),0)},a=(e,t,r)=>"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+o(r)+")",f=(e,t,r,n)=>{var o=s(e,r);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(a(r,o,n)),l(e[r][o])},u=(e,t,r)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!i(r,t)||e&&!n(e,t)?e:t),0))&&o[t]},l=e=>(e.loaded=1,e.get()),d=(c=e=>function(t,r,n,o){var i=g.I(t);return i&&i.then?i.then(e.bind(e,t,g.S[t],r,n,o)):e(t,g.S[t],r,n,o)})(((e,t,r,n,o)=>t&&g.o(t,r)?f(t,0,r,n):o())),h=c(((e,t,r,n,o)=>{var i=t&&g.o(t,r)&&u(t,r,n);return i?l(i):o()})),p={},v={77865:()=>d("default","react",[1,17,0,1],(()=>g.e(294).then((()=>()=>g(67294))))),21704:()=>d("default","react-dom",[1,17,0,1],(()=>g.e(935).then((()=>()=>g(73935))))),72231:()=>h("default","uuid",[1,8,3,2],(()=>g.e(614).then((()=>()=>g(21614))))),99170:()=>h("default","n3",[1,1,11,1],(()=>Promise.all([g.e(473),g.e(657),g.e(874),g.e(42),g.e(726)]).then((()=>()=>g(51657))))),334:()=>h("default","react-router-dom",[1,5,2,0],(()=>Promise.all([g.e(361),g.e(815)]).then((()=>()=>g(73727))))),13090:()=>h("default","react-draggable",[1,4,4,3],(()=>g.e(193).then((()=>()=>g(61193))))),19705:()=>h("default","react-query",[1,3,18,1],(()=>g.e(767).then((()=>()=>g(88767))))),46078:()=>h("default","recoil",[2,0,3,1],(()=>g.e(804).then((()=>()=>g(2804))))),75073:()=>h("default","@inrupt/solid-client-authn-browser",[1,1,11,2],(()=>Promise.all([g.e(305),g.e(874)]).then((()=>()=>g(94305))))),81092:()=>h("default","@comunica/actor-init-sparql",[1,1,22,0],(()=>Promise.all([g.e(473),g.e(151),g.e(874),g.e(42),g.e(957),g.e(123)]).then((()=>()=>g(36875))))),86712:()=>d("default","@material-ui/core",[1,4,11,4],(()=>g.e(709).then((()=>()=>g(23709))))),90471:()=>h("default","mem",[1,8,1,1],(()=>g.e(956).then((()=>()=>g(10956))))),86874:()=>h("default","events",[1,3,3,0],(()=>()=>g(17187))),66042:()=>h("default","buffer",[1,6,0,3],(()=>g.e(764).then((()=>()=>g(48764))))),71957:()=>h("default","url",[2,0,11,0],(()=>g.e(310).then((()=>()=>g(8575))))),3403:()=>h("default","react-router",[1,5,2,0],(()=>Promise.all([g.e(977),g.e(82)]).then((()=>()=>g(5977))))),20779:()=>h("default","history",[1,5,0,0],(()=>g.e(705).then((()=>()=>g(68466))))),47082:()=>h("default","history",[1,5,0,0],(()=>g.e(436).then((()=>()=>g(59172)))))},b={6:[334,13090,19705,46078,75073,81092,86712,90471],42:[66042],82:[47082],170:[99170],231:[72231],361:[3403,20779],704:[21704],865:[77865],874:[86874],957:[71957]},g.f.consumes=(e,t)=>{g.o(b,e)&&b[e].forEach((e=>{if(g.o(p,e))return t.push(p[e]);var r=t=>{p[e]=0,g.m[e]=r=>{delete g.c[e],r.exports=t()}},n=t=>{delete p[e],g.m[e]=r=>{throw delete g.c[e],t}};try{var o=v[e]();o.then?t.push(p[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}))},(()=>{var e={179:0};g.f.j=(t,r)=>{var n=g.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(8(2|65|74)|170|231|361|42|704|957)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=g.p+g.u(t),s=new Error;g.l(i,(r=>{if(g.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,s,a]=r,f=0;if(i.some((t=>0!==e[t]))){for(n in s)g.o(s,n)&&(g.m[n]=s[n]);a&&a(g)}for(t&&t(r);f<i.length;f++)o=i[f],g.o(e,o)&&e[o]&&e[o][0](),e[i[f]]=0},r=self.webpackChunklbdserver=self.webpackChunklbdserver||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),g(g.s=62352)})();