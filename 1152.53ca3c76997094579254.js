"use strict";(self.webpackChunklbdserver=self.webpackChunklbdserver||[]).push([[1152],{91152:(e,t,n)=>{n.r(t);var r=n(77865),o=n.n(r),c=n(21704),a=n.n(c),i=n(29439),l=n(15861),s=n(87757),u=n.n(s),m=n(90471),p=n.n(m);n(334);var d=p()(function(){var e=(0,l.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("scope, module",t,n),e.next=3,window[t].get(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),f=p()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){console.log("Dynamic Script Loaded: ".concat(e.url)),t()},r.onerror=function(){console.error("Dynamic Script Error: ".concat(e.url)),n()}}catch(e){console.log("error",e),n(e)}}))}));p()(function(){var e=(0,l.Z)(u().mark((function e(t,n){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,f(r);case 4:return e.next=6,d(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());var y=n(46078);n(99170);var g=n(75073),v=(n(72231).v4,n(99170)),h=(0,y.atom)({key:"store",default:new v.Store}),E=(0,y.atom)({key:"openOptions",default:!0}),b=((0,y.atom)({key:"session",default:new g.Session}),(0,y.atom)({key:"projects",default:[]})),w=(0,y.atom)({key:"activeResources",default:[]}),x=(0,y.atom)({key:"selectedElements",default:[]}),j=(0,y.atom)({key:"selectionId",default:""}),O=(0,y.atom)({key:"trigger",default:1});const Z=(0,y.atom)({key:"config",default:{tabs:{url:"https://consolidproject.github.io/pluginAggregatorTabs/remoteEntry.js",scope:"tabs",label:"tabs",module:"./index",dimensions:{x:0,y:0,h:900,w:600},children:{resourcemanager:{url:"https://consolidproject.github.io/pluginResourceManager/remoteEntry.js",scope:"resourcemanager",module:"./index",icon:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"},projectquery:{url:"https://consolidproject.github.io/pluginQuery/remoteEntry.js",scope:"projectquery",module:"./index",icon:"M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z"}}},viewer:{url:"https://consolidproject.github.io/pluginViewer/remoteEntry.js",scope:"viewer",module:"./index",dimensions:{x:600,y:0,h:450,w:660}},imageannotator:{url:"https://consolidproject.github.io/pluginImageViewer/remoteEntry.js",scope:"imageannotator",module:"./index",dimensions:{x:600,y:450,h:450,w:660}}}});var k=n(71342),S=n(4942),R=n(13090),P=n.n(R);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=p()(function(){var e=(0,l.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window[t].get(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=p()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){t()},r.onerror=function(){n()}}catch(e){console.log("error",e),n(e)}}))})),L=p()(function(){var e=(0,l.Z)(u().mark((function e(t,n){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,I(r);case 4:return e.next=6,C(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());const H=o().memo((function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(null),c=(0,i.Z)(n,2),a=c[0],s=c[1];(0,r.useEffect)((function(){m(e)}));var m=function(){var n=(0,l.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L(e,"default");case 3:(0,n.sent)(t.current,D({},e)),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(0),s(n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return o().createElement("div",null,a?o().createElement("div",null,o().createElement("h3",null,"Error loading remote component"),o().createElement("p",null,a),o().createElement("p",null,"Check console for more information")):o().createElement("div",{ref:t},"Loading"))}));var V=n(86712),T=n(15832),M=n(44080),B=n(77315),F=n(35025),q=n(64566);n(15671),n(43144),n(60136),n(82963),n(61120);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e){var t=(0,y.useRecoilValue)(Z),n=(0,r.useState)(Object.keys(t)),c=(0,i.Z)(n,2),a=c[0],l=c[1];return(0,r.useEffect)((function(){console.log("modules",t),l(Object.keys(t))}),[t]),o().createElement("div",{style:{marginTop:64,marginLeft:-10}},a.map((function(e){if(t[e]&&t[e].dimensions)return o().createElement(A,{key:e,id:e,mod:t[e]})})))}o().Component;var W=p()((function(e){return(0,y.atom)({key:"boxState_".concat(e.url),default:{x:e.dimensions.x,y:e.dimensions.y,w:e.dimensions.w,h:e.dimensions.h,fixed:!0}})})),A=function(e){var t=e.id,n=e.mod,c=(0,y.useRecoilState)(W(n)),a=(0,i.Z)(c,2),l=a[0],s=a[1],u=(0,r.useState)(!1),m=(0,i.Z)(u,2),p=(m[0],m[1],(0,r.useRef)());return o().createElement(P(),{nodeRef:p,position:{x:l.x,y:l.y},onDrag:function(e,t){s(N(N({},l),{},{x:t.x,y:t.y}))},disabled:l.fixed},o().createElement("div",{id:"module".concat(t),ref:p,className:"box",style:{width:l.w,height:l.h,display:"flex",position:"absolute",background:"white",border:"1px LightGray solid"}},n.dimensions.fixed?o().createElement(o().Fragment,null):o().createElement("div",null,o().createElement(V.IconButton,{color:"primary",style:{position:"absolute",right:0,bottom:0,zIndex:1},onClick:function(){s(N(N({},l),{},{x:n.dimensions.x,y:n.dimensions.y,fixed:!0,minimized:!1}))}},o().createElement(T.Z,null)),o().createElement(V.IconButton,{color:"primary",style:{position:"absolute",right:80,bottom:0,zIndex:1},onClick:function(){l.minimized?s(N(N({},l),{},{minimized:!1,w:n.w,h:n.h})):s(N(N({},l),{},{minimized:!0,w:300,h:50,y:Math.max(l.y,0)}))}},l.minimized?o().createElement(q.default,null):o().createElement(F.Z,null)),o().createElement(V.IconButton,{color:"primary",style:{position:"absolute",right:40,bottom:0,zIndex:1},onClick:function(){return s(N(N({},l),{},{fixed:!l.fixed}))}},l.fixed?o().createElement(M.Z,null):o().createElement(B.Z,null))),l.minimized?o().createElement(V.Typography,{style:{marginLeft:10,marginTop:15}},t.toUpperCase()):o().createElement("div",null,o().createElement(r.Suspense,{fallback:o().createElement("p",null,"loading ...")},o().createElement(U,{mod:n})))))},U=function(e){var t=e.mod,n=(0,y.useRecoilValue)(h),c=(0,y.useRecoilValue)(Z),a=(0,y.useRecoilState)(w),l=(0,i.Z)(a,2),s=l[0],u=l[1],m=(0,y.useRecoilState)(x),p=(0,i.Z)(m,2),d=p[0],f=p[1],v=(0,y.useRecoilState)(b),E=(0,i.Z)(v,2),k=E[0],S=E[1],R=(0,y.useRecoilState)(j),P=(0,i.Z)(R,2),z=P[0],D=P[1],C=(0,y.useRecoilState)(O),I=(0,i.Z)(C,2),L=I[0],V=I[1],T=(0,r.useState)(1),M=(0,i.Z)(T,2),B=M[0],F=M[1];(0,r.useEffect)((function(){F((function(e){return e+1}))}),[c]);var q={trigger:L,setTrigger:V,projects:k,setProjects:S,store:n,activeResources:s,setActiveResources:u,selectedElements:d,setSelectedElements:f,selectionId:z,setSelectionId:D,session:(0,g.getDefaultSession)()};return o().createElement(H,{key:B,system:{module:t.module,url:t.url,scope:t.scope},sharedProps:q,module:t,config:c})},_=n(99170).DataFactory;_.namedNode,_.literal,_.defaultGraph,_.quad;const J=function(e){return e.sharedProps,o().createElement("div",null,o().createElement(Q,null))};var K=n(45258),X=n(28358),Y=n(22318),$=n(17812),ee=n(60424);function te(){var e=(0,y.useRecoilState)(E),t=(0,i.Z)(e,2),n=t[0],r=t[1];return o().createElement(o().Fragment,null,o().createElement(K.Z,null,o().createElement(X.Z,null,o().createElement(Y.Z,{variant:"h6",color:"inherit",noWrap:!0,to:"/",style:{color:"white",textDecoration:"none"}},"LBDserver"),o().createElement("div",{style:{flexGrow:1}}),o().createElement($.Z,{variant:"outlined",color:"primary",key:"setup",style:{color:"white",fontWeight:"normal"},onClick:function(){return r(!n)}},o().createElement(ee.Z,null)))))}var ne=n(55961),re=n(5034),oe=n(26975),ce=(n(72231),(0,re.Z)({productionPrefix:"main",seed:"main"})),ae=n(99170).DataFactory;ae.namedNode,ae.literal,ae.defaultGraph,ae.quad,(0,ne.createBrowserHistory)();const ie=function(){var e=(0,y.useRecoilValue)(h),t=(0,y.useRecoilState)(w),n=(0,i.Z)(t,2),c=(n[0],n[1],(0,y.useRecoilState)(x)),a=(0,i.Z)(c,2),l=(a[0],a[1],(0,y.useRecoilState)(b)),s=(0,i.Z)(l,2),u=s[0],m=s[1],p=(0,y.useRecoilState)(j),d=(0,i.Z)(p,2),f=(d[0],d[1],(0,y.useRecoilState)(O)),v=(0,i.Z)(f,2),S=v[0],R=v[1],P=(0,y.useRecoilState)(E),z=(0,i.Z)(P,2),D=z[0],C=z[1],I=(0,y.useRecoilState)(Z),L=(0,i.Z)(I,2),H=L[0],T=L[1];return(0,r.useEffect)((function(){console.log("config changed")}),[H]),(0,r.useEffect)((function(){u.length>0&&loadProjectMetadata(u[0],e,(0,g.getDefaultSession)()).then((function(){return console.log("loaded")}))}),[]),o().createElement(oe.ZP,{generateClassName:ce},o().createElement(te,{name:"LBDserver"}),u.length>0?o().createElement(J,null):o().createElement("div",{style:{marginTop:100,justifyContent:"center"}},o().createElement(V.Typography,{variant:"h5"},"Please select a project via the sidebar")),o().createElement(k.Options,{openOptions:D,setOpenOptions:C,trigger:S,setTrigger:R,projects:u,setProjects:m,store:e,config:H,setConfig:T,drawerWidth:"40%"}))};var le=n(19705);a().render(o().createElement(le.QueryClientProvider,{client:new le.QueryClient},o().createElement(y.RecoilRoot,null,o().createElement(ie,null))),document.querySelector("#root"))}}]);