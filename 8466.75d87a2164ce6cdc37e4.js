"use strict";(self.webpackChunklbdserver=self.webpackChunklbdserver||[]).push([[8466,6705],{68466:(n,t,e)=>{e.r(t),e.d(t,{createBrowserHistory:()=>P,createHashHistory:()=>L,createMemoryHistory:()=>C,createLocation:()=>d,locationsAreEqual:()=>v,parsePath:()=>h,createPath:()=>l});var o=e(87462),r=e(78273),i=e(95429),a=e(2177);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function f(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function s(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function h(n){var t=n||"/",e="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}function l(n){var t=n.pathname,e=n.search,o=n.hash,r=t||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function d(n,t,e,i){var a;"string"==typeof n?(a=h(n)).state=t:(void 0===(a=(0,o.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(a.key=e),i?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,r.Z)(a.pathname,i.pathname)):a.pathname=i.pathname:a.pathname||(a.pathname="/"),a}function v(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&(0,i.Z)(n.state,t.state)}function p(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,r){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function g(n,t){t(window.confirm(n))}var y="popstate",m="hashchange";function O(){try{return window.history.state||{}}catch(n){return{}}}function P(n){void 0===n&&(n={}),w||(0,a.Z)(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=n,h=u.forceRefresh,v=void 0!==h&&h,P=u.getUserConfirmation,b=void 0===P?g:P,x=u.keyLength,k=void 0===x?6:x,A=n.basename?s(c(n.basename)):"";function T(n){var t=n||{},e=t.key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return A&&(i=f(i,A)),d(i,o,e)}function L(){return Math.random().toString(36).substr(2,k)}var E=p();function C(n){(0,o.Z)(G,n),G.length=e.length,E.notifyListeners(G.location,G.action)}function Z(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||U(T(n.state))}function S(){U(T(O()))}var H=!1;function U(n){H?(H=!1,C()):E.confirmTransitionTo(n,"POP",b,(function(t){t?C({action:"POP",location:n}):function(n){var t=G.location,e=I.indexOf(t.key);-1===e&&(e=0);var o=I.indexOf(n.key);-1===o&&(o=0);var r=e-o;r&&(H=!0,M(r))}(n)}))}var j=T(O()),I=[j.key];function R(n){return A+l(n)}function M(n){e.go(n)}var B=0;function F(n){1===(B+=n)&&1===n?(window.addEventListener(y,Z),i&&window.addEventListener(m,S)):0===B&&(window.removeEventListener(y,Z),i&&window.removeEventListener(m,S))}var q=!1,G={length:e.length,action:"POP",location:j,createHref:R,push:function(n,t){var o="PUSH",i=d(n,t,L(),G.location);E.confirmTransitionTo(i,o,b,(function(n){if(n){var t=R(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,t),v)window.location.href=t;else{var u=I.indexOf(G.location.key),f=I.slice(0,u+1);f.push(i.key),I=f,C({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=d(n,t,L(),G.location);E.confirmTransitionTo(i,o,b,(function(n){if(n){var t=R(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,t),v)window.location.replace(t);else{var u=I.indexOf(G.location.key);-1!==u&&(I[u]=i.key),C({action:o,location:i})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return q||(F(1),q=!0),function(){return q&&(q=!1,F(-1)),t()}},listen:function(n){var t=E.appendListener(n);return F(1),function(){F(-1),t()}}};return G}var b="hashchange",x={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function k(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function A(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function T(n){window.location.replace(k(window.location.href)+"#"+n)}function L(n){void 0===n&&(n={}),w||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,i=void 0===r?g:r,u=e.hashType,h=void 0===u?"slash":u,v=n.basename?s(c(n.basename)):"",y=x[h],m=y.encodePath,O=y.decodePath;function P(){var n=O(A());return v&&(n=f(n,v)),d(n)}var L=p();function E(n){(0,o.Z)(q,n),q.length=t.length,L.notifyListeners(q.location,q.action)}var C=!1,Z=null;function S(){var n,t,e=A(),o=m(e);if(e!==o)T(o);else{var r=P(),a=q.location;if(!C&&(t=r,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(Z===l(r))return;Z=null,function(n){if(C)C=!1,E();else{L.confirmTransitionTo(n,"POP",i,(function(t){t?E({action:"POP",location:n}):function(n){var t=q.location,e=I.lastIndexOf(l(t));-1===e&&(e=0);var o=I.lastIndexOf(l(n));-1===o&&(o=0);var r=e-o;r&&(C=!0,R(r))}(n)}))}}(r)}}var H=A(),U=m(H);H!==U&&T(U);var j=P(),I=[l(j)];function R(n){t.go(n)}var M=0;function B(n){1===(M+=n)&&1===n?window.addEventListener(b,S):0===M&&window.removeEventListener(b,S)}var F=!1,q={length:t.length,action:"POP",location:j,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=k(window.location.href)),e+"#"+m(v+l(n))},push:function(n,t){var e="PUSH",o=d(n,void 0,void 0,q.location);L.confirmTransitionTo(o,e,i,(function(n){if(n){var t=l(o),r=m(v+t);if(A()!==r){Z=t,function(n){window.location.hash=n}(r);var i=I.lastIndexOf(l(q.location)),a=I.slice(0,i+1);a.push(t),I=a,E({action:e,location:o})}else E()}}))},replace:function(n,t){var e="REPLACE",o=d(n,void 0,void 0,q.location);L.confirmTransitionTo(o,e,i,(function(n){if(n){var t=l(o),r=m(v+t);A()!==r&&(Z=t,T(r));var i=I.indexOf(l(q.location));-1!==i&&(I[i]=t),E({action:e,location:o})}}))},go:R,goBack:function(){R(-1)},goForward:function(){R(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return F||(B(1),F=!0),function(){return F&&(F=!1,B(-1)),t()}},listen:function(n){var t=L.appendListener(n);return B(1),function(){B(-1),t()}}};return q}function E(n,t,e){return Math.min(Math.max(n,t),e)}function C(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,i=void 0===r?["/"]:r,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,f=void 0===u?6:u,s=p();function h(n){(0,o.Z)(O,n),O.length=O.entries.length,s.notifyListeners(O.location,O.action)}function v(){return Math.random().toString(36).substr(2,f)}var w=E(c,0,i.length-1),g=i.map((function(n){return d(n,void 0,"string"==typeof n?v():n.key||v())})),y=l;function m(n){var t=E(O.index+n,0,O.entries.length-1),o=O.entries[t];s.confirmTransitionTo(o,"POP",e,(function(n){n?h({action:"POP",location:o,index:t}):h()}))}var O={length:g.length,action:"POP",location:g[w],index:w,entries:g,createHref:y,push:function(n,t){var o="PUSH",r=d(n,t,v(),O.location);s.confirmTransitionTo(r,o,e,(function(n){if(n){var t=O.index+1,e=O.entries.slice(0);e.length>t?e.splice(t,e.length-t,r):e.push(r),h({action:o,location:r,index:t,entries:e})}}))},replace:function(n,t){var o="REPLACE",r=d(n,t,v(),O.location);s.confirmTransitionTo(r,o,e,(function(n){n&&(O.entries[O.index]=r,h({action:o,location:r}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(n){var t=O.index+n;return t>=0&&t<O.entries.length},block:function(n){return void 0===n&&(n=!1),s.setPrompt(n)},listen:function(n){return s.appendListener(n)}};return O}},78273:(n,t,e)=>{function o(n){return"/"===n.charAt(0)}function r(n,t){for(var e=t,o=e+1,r=n.length;o<r;e+=1,o+=1)n[e]=n[o];n.pop()}e.d(t,{Z:()=>i});const i=function(n,t){void 0===t&&(t="");var e,i=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&o(n),u=t&&o(t),f=c||u;if(n&&o(n)?a=i:i.length&&(a.pop(),a=a.concat(i)),!a.length)return"/";if(a.length){var s=a[a.length-1];e="."===s||".."===s||""===s}else e=!1;for(var h=0,l=a.length;l>=0;l--){var d=a[l];"."===d?r(a,l):".."===d?(r(a,l),h++):h&&(r(a,l),h--)}if(!f)for(;h--;h)a.unshift("..");!f||""===a[0]||a[0]&&o(a[0])||a.unshift("");var v=a.join("/");return e&&"/"!==v.substr(-1)&&(v+="/"),v}},2177:(n,t,e)=>{e.d(t,{Z:()=>o});const o=function(n,t){if(!n)throw new Error("Invariant failed")}},95429:(n,t,e)=>{function o(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}e.d(t,{Z:()=>r});const r=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,o){return n(t,e[o])}));if("object"==typeof t||"object"==typeof e){var r=o(t),i=o(e);return r!==t||i!==e?n(r,i):Object.keys(Object.assign({},t,e)).every((function(o){return n(t[o],e[o])}))}return!1}},87462:(n,t,e)=>{function o(){return o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},o.apply(this,arguments)}e.d(t,{Z:()=>o})}}]);