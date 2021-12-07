"use strict";(self.webpackChunklbdserver=self.webpackChunklbdserver||[]).push([[6],{46299:(e,t,n)=>{n.r(t);var r=n(77865),o=n.n(r),a=n(21704),i=n.n(a),c=n(29439),l=n(46078),s=n(75073),u=(n(72231).v4,n(99170)),p=(0,l.atom)({key:"store",default:new u.Store}),m=(0,l.atom)({key:"openOptions",default:!0}),d=((0,l.atom)({key:"session",default:new s.Session}),(0,l.atom)({key:"projects",default:["http://localhost:5000/arch/lbd/testproject/"]})),f=(0,l.atom)({key:"datasets",default:[]}),g=(0,l.atom)({key:"selectedElements",default:[]}),y=(0,l.atom)({key:"selectionId",default:""}),h=(0,l.atom)({key:"trigger",default:1});const v=(0,l.atom)({key:"config",default:{tabs:{url:"https://consolidproject.github.io/pluginAggregatorTabs/remoteEntry.js",scope:"tabs",label:"tabs",module:"./index",dimensions:{x:0,y:0,h:800,w:600},children:{resourcemanager:{url:"http://localhost:8081/remoteEntry.js",scope:"resourcemanager",module:"./index",icon:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"},projectquery:{url:"http://localhost:8083/remoteEntry.js",scope:"projectquery",module:"./index",icon:"M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z"}}},viewer:{url:"http://localhost:8082/remoteEntry.js",scope:"viewer",label:"viewer",module:"./index",dimensions:{x:600,y:0,h:800,w:800}}}});var E=n(86712),b=n(64566),w=n(15861),x=n(87757),j=n.n(x),S=n(72231),k=n(93433),Z=n(1487),O=n(19705);const D=function(e){var t=e.project,n=e.projects,r=e.setProjects,a=e.setDatasets,i=(0,O.useQuery)(t,(0,w.Z)(j().mark((function e(){var n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.queryComunica)("select ?i where {?p <https://lbdserver.org/vocabulary#hasProjectId> ?i}",[t+"/local/"],{results:!0,single:!0,variable:"i"},(0,s.getDefaultSession)());case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),c=(i.isLoading,i.isError,i.data);function l(){return(l=(0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.includes(t)?(r((function(e){return e.filter((function(e){return e!=t}))})),a([])):r((function(e){return[].concat((0,k.Z)(e),[t])}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.error,o().createElement("div",null,o().createElement(E.Card,{style:{marginTop:5,marginBottom:5},variant:"outlined"},o().createElement(E.CardContent,null,o().createElement(E.Typography,{component:"p"},c),o().createElement(E.FormGroup,null,o().createElement(E.FormControlLabel,{control:o().createElement(E.Switch,{color:"primary",checked:n.includes(t),onChange:function(e){return function(){return l.apply(this,arguments)}()}}),label:"Active"})))))},T=function(e){var t=e.projects,n=e.setProjects,a=e.setDatasets,i=e.trigger,l=e.setTrigger,u=(0,r.useState)("https://pod.lbdserver.org/jeroen/lbd/"),p=(0,c.Z)(u,2),m=(p[0],p[1],(0,r.useState)([])),d=(0,c.Z)(m,2),f=d[0],g=d[1],y=(0,r.useState)(""),h=(0,c.Z)(y,2),v=h[0],b=h[1],x=(0,r.useState)(""),k=(0,c.Z)(x,2),O=k[0],T=k[1],P=(0,r.useState)([]),I=(0,c.Z)(P,2),R=I[0];function L(){return(L=(0,w.Z)(j().mark((function e(){var t,n,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=v.split(";").map((function(e){return e.replace(/\s+/g,"")}))).push((0,s.getDefaultSession)().info.webId),n=O.length>0?O:(0,S.v4)(),e.next=5,(0,Z.$L)(n,t,{},(0,s.getDefaultSession)());case 5:return e.next=7,(0,Z.getProjects)((0,s.getDefaultSession)().info.webId,(0,s.getDefaultSession)());case 7:r=e.sent,console.log("proj",r),g(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=(0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return I[1],(0,r.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[i]),o().createElement(o().Fragment,null,o().createElement(E.Container,{component:"main"},(0,s.getDefaultSession)().info.isLoggedIn?o().createElement("div",null,o().createElement("div",null,o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},'Your projects are saved in a subdirectory of your POD "/lbd/" (Linked Building Data). If you already host some projects, you can activate them here.'),o().createElement(E.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:(0,w.Z)(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.getProjects)((0,s.getDefaultSession)().info.webId,(0,s.getDefaultSession)());case 2:t=e.sent,console.log("projects",t),g(t);case 5:case"end":return e.stop()}}),e)}))),style:{marginTop:5,marginBottom:5}},"Get my projects"),f.map((function(e){return o().createElement(D,{setDatasets:a,key:e,project:e,projects:t,setProjects:n,setTrigger:l})}))),o().createElement("div",null,o().createElement("br",null),o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},"Otherwise, you may create a project. If you want to invite others to your project, you may add their webIds below."," "),o().createElement("br",null),o().createElement(E.TextField,{id:"standard-multiline-flexible",label:"Stakeholders (separate by ';')",multiline:!0,fullWidth:!0,maxRows:10,value:v.toString(),onChange:function(e){return b(e.target.value)},style:{marginTop:10,marginBottom:10}})," ",o().createElement(E.TextField,{id:"standard-multiline-flexible",label:"Optional GUID of project to join",fullWidth:!0,value:O,onChange:function(e){return T(e.target.value)},style:{marginTop:10,marginBottom:10}})," ",o().createElement(E.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return function(){return L.apply(this,arguments)}()}},"Create new project")),o().createElement("div",null,o().createElement("br",null),o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},"Or join a project for which you were invited for collaboration:"),R?o().createElement("div",null,R.map((function(e){return o().createElement(C,{sender:e.sender,reference:e.ref,invite:e.source,callback:Z.getProjects})}))):o().createElement("p",null,"No pending invites"),o().createElement("br",null))):o().createElement("div",null,o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},"Register/Log in to create your own project."))))};var C=function(e){var t=e.sender,n=e.reference,a=e.invite,i=(0,r.useState)(!1),l=(0,c.Z)(i,2),u=l[0],p=l[1],m=(0,r.useState)(!1),d=(0,c.Z)(m,2),f=d[0],g=d[1];function y(){return(y=(0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,joinProject(n,a,(0,s.getDefaultSession)());case 4:p(!1),callback(),g(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),p(!1),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return f?o().createElement(o().Fragment,null):o().createElement("div",{style:{backgroundColor:"bisque"}},o().createElement(E.Card,{style:{marginTop:5,marginBottom:5},variant:"outlined"},o().createElement(E.CardContent,null,o().createElement(E.Typography,{variant:"h6",component:"h6",style:{fontSize:"14px"}},"Sender: ",t),o().createElement(E.Typography,{component:"p",style:{fontSize:"10px"}},"Reference: ",n),o().createElement(E.Button,{disabled:u,onClick:function(){return y.apply(this,arguments)},variant:"contained",color:"primary"},"Join"))))};function P(){return I.apply(this,arguments)}function I(){return(I=(0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,s.getDefaultSession)().info.isLoggedIn){e.next=13;break}if(!new URLSearchParams(window.location.search).get("code")){e.next=10;break}return console.log("checking code param"),e.next=8,(0,s.handleIncomingRedirect)();case 8:e.next=13;break;case 10:return console.log("checking previous session data"),e.next=13,(0,s.handleIncomingRedirect)({restorePreviousSession:!0});case 13:return e.abrupt("return",(0,s.getDefaultSession)());case 16:e.prev=16,e.t0=e.catch(0),console.log("error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}n(334);const R=function(e){e.trigger;var t=e.setTrigger,n=(0,r.useState)("http://localhost:5000"),a=(0,c.Z)(n,2),i=a[0],l=a[1],u=(0,r.useState)(!1),p=(0,c.Z)(u,2),m=(p[0],p[1]);(0,r.useEffect)((function(){P().then((function(e){return t((function(e){return e+1}))}))}),[]);var d=function(){var e=(0,w.Z)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m(!0),(0,s.getDefaultSession)().info.isLoggedIn){e.next=5;break}return e.next=5,(0,s.login)({oidcIssuer:i,redirectUrl:window.location.href,clientName:"lbdserver"});case 5:m(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,w.Z)(j().mark((function e(n){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),r=(0,s.getDefaultSession)(),e.next=5,r.logout();case 5:return e.next=7,P();case 7:e.sent,t((function(e){return e+1})),m(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0),m(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return o().createElement(o().Fragment,null,o().createElement(E.Container,{component:"main"},o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},"The LBDserver demo projects can be read and queried publicly. However, in most cases projects will not be open to the public - authentication is required. You can get a federated Web identity at the Solid Identity Provider of your choice. You can also ",o().createElement("a",{target:"_blank",href:"https://github.com/solid/community-server"},"set up such Identity Provider yourself"),'. Having a Web Identity and a personalised online data vault ("Pod"), you can start creating your own federated LBDserver projects.'),o().createElement("br",null),(0,s.getDefaultSession)().info.isLoggedIn?o().createElement("div",null,o().createElement(E.Typography,{variant:"body1"},"Your are logged in as:"),o().createElement("a",{href:(0,s.getDefaultSession)().info.webId},(0,s.getDefaultSession)().info.webId),o().createElement(E.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:f,style:{marginTop:20}},"Sign out")):o().createElement("div",null,o().createElement("form",{onSubmit:function(e){return e.preventDefault()},noValidate:!0},o().createElement(E.TextField,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:i,onChange:function(e){return l(e.target.value)},id:"idp",label:"Identity Provider",name:"idp",autoFocus:!0}),o().createElement(E.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:d},"Sign in")))))};var L,B=n(4942);n(19400),L={borderLeft:"1px dashed white",lineHeight:1.25,width:"50%"},(0,B.Z)(L,"borderLeft","1px solid lightgrey"),(0,B.Z)(L,"margin",10);const z=function(e){var t=e.openOptions,n=e.setOpenOptions,a=e.trigger,i=e.setTrigger,l=e.setProjects,s=e.projects,u=e.setDatasets,p=(e.config,e.setConfig,e.drawerWidth),m=(0,r.useState)(!0),d=(0,c.Z)(m,2),f=d[0],g=d[1],y=(0,r.useState)(!1),h=(0,c.Z)(y,2),v=(h[0],h[1],(0,r.useState)(!1)),w=(0,c.Z)(v,2),x=w[0],j=w[1],S=(0,r.useState)(!1),k=(0,c.Z)(S,2),Z=(k[0],k[1],(0,r.useState)(!1)),O=(0,c.Z)(Z,2),D=(O[0],O[1],(0,r.useState)(!1)),C=(0,c.Z)(D,2),P=(C[0],C[1],(0,E.makeStyles)({paper:{width:p,backgroundColor:"bisque"}})());return o().createElement("div",null,o().createElement(o().Fragment,null,o().createElement(E.Drawer,{anchor:"right",open:t,onClose:function(){return n(!t)},classes:{paper:P.paper}},o().createElement("div",{style:{margin:20}},o().createElement(E.Typography,{variant:"h6"},"Welcome to the LBDserver plugin demo"),o().createElement("hr",null),o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},'The LBDserver project is an ongoing research project that studies the organisation of heterogeneous, federated AECO projects. It proposes a data structure for connecting project-specific and contextual data on the Web, and provides the infrastructure for creating a "shopping cart" of GUI plugins for interacting with this data. These plugins can be used standalone as well as be configured alongside with other plugins to enable more fluent visualisation, querying and checking of the project.'),o().createElement("br",null),o().createElement(E.Typography,{style:{textAlign:"justify"},variant:"body1"},"This application illustrates the main concepts of the LBDserver. It is a rough prototype and only serves demonstration purposes."),o().createElement("br",null),o().createElement(E.Typography,{variant:"body1"},"You can visit"," ",o().createElement("a",{target:"_blank",href:"https://lbdserver.org"},"https://lbdserver.org")," ","for more information. When citing this research, please refer to one of the following papers: [...]")),o().createElement("div",null,o().createElement(E.Accordion,{style:A,expanded:f,onChange:function(){return g(!f)}},o().createElement(E.AccordionSummary,{expandIcon:o().createElement(b.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(E.Typography,null,"AUTHENTICATION")),o().createElement(E.AccordionDetails,null,o().createElement(R,{trigger:a,setTrigger:i})))),o().createElement("div",null,o().createElement(E.Accordion,{style:A,expanded:x,onChange:function(){return j(!x)}},o().createElement(E.AccordionSummary,{expandIcon:o().createElement(b.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(E.Typography,null,"MY PROJECTS")),o().createElement(E.AccordionDetails,null,o().createElement(T,{trigger:a,setDatasets:u,projects:s,setProjects:l,setTrigger:i})))))))};var A={marginLeft:10,marginRight:10,marginTop:5,marginBottom:5},W=n(90471),F=n.n(W),H=F()(function(){var e=(0,w.Z)(j().mark((function e(t,n){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window[t].get(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=F()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){t()},r.onerror=function(){n()}}catch(e){console.log("error",e),n(e)}}))}));F()(function(){var e=(0,w.Z)(j().mark((function e(t,n){var r,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,q(r);case 4:return e.next=6,H(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());var V=n(13090),G=n.n(V);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,B.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=F()(function(){var e=(0,w.Z)(j().mark((function e(t,n){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window[t].get(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Y=F()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){t()},r.onerror=function(){n()}}catch(e){console.log("error",e),n(e)}}))})),Q=F()(function(){var e=(0,w.Z)(j().mark((function e(t,n){var r,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,Y(r);case 4:return e.next=6,U(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());const _=o().memo((function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(null),a=(0,c.Z)(n,2),i=a[0],l=a[1];(0,r.useEffect)((function(){s(e)}));var s=function(){var n=(0,w.Z)(j().mark((function n(){return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q(e,"default");case 3:(0,n.sent)(t.current,N({},e)),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(0),l(n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return o().createElement("div",null,i?o().createElement("div",null,o().createElement("h3",null,"Error loading remote component"),o().createElement("p",null,i),o().createElement("p",null,"Check console for more information")):o().createElement("div",{ref:t},"Loading"))}));var J=n(15832),$=n(44080),K=n(77315),X=n(35025);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,B.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e){var t=(0,l.useRecoilValue)(v),n=(0,r.useState)(Object.keys(t)),a=(0,c.Z)(n,2),i=a[0],s=a[1];return(0,r.useEffect)((function(){console.log("modules",t),s(Object.keys(t))}),[t]),o().createElement("div",{style:{marginTop:64,marginLeft:-10}},i.map((function(e){if(t[e]&&t[e].dimensions)return o().createElement(oe,{key:e,id:e,mod:t[e]})})))}var re=F()((function(e){return(0,l.atom)({key:"boxState_".concat(e.url),default:{x:e.dimensions.x,y:e.dimensions.y,w:e.dimensions.w,h:e.dimensions.h,fixed:!0}})})),oe=function(e){var t=e.id,n=e.mod,a=(0,l.useRecoilState)(re(n)),i=(0,c.Z)(a,2),s=i[0],u=i[1],p=(0,r.useState)(!1),m=(0,c.Z)(p,2),d=(m[0],m[1],(0,r.useRef)());return o().createElement(G(),{nodeRef:d,position:{x:s.x,y:s.y},onDrag:function(e,t){u(te(te({},s),{},{x:t.x,y:t.y}))},disabled:s.fixed},o().createElement("div",{id:"module".concat(t),ref:d,className:"box",style:{width:s.w,height:s.h,display:"flex",position:"absolute",background:"white",border:"1px LightGray solid"}},n.dimensions.fixed?o().createElement(o().Fragment,null):o().createElement("div",null,o().createElement(E.IconButton,{color:"primary",style:{position:"absolute",right:0,bottom:0,zIndex:1},onClick:function(){u(te(te({},s),{},{x:n.dimensions.x,y:n.dimensions.y,fixed:!0,minimized:!1}))}},o().createElement(J.Z,null)),o().createElement(E.IconButton,{color:"primary",style:{position:"absolute",right:80,bottom:0,zIndex:1},onClick:function(){s.minimized?u(te(te({},s),{},{minimized:!1,w:n.w,h:n.h})):u(te(te({},s),{},{minimized:!0,w:300,h:50,y:Math.max(s.y,0)}))}},s.minimized?o().createElement(b.Z,null):o().createElement(X.Z,null)),o().createElement(E.IconButton,{color:"primary",style:{position:"absolute",right:40,bottom:0,zIndex:1},onClick:function(){return u(te(te({},s),{},{fixed:!s.fixed}))}},s.fixed?o().createElement($.Z,null):o().createElement(K.Z,null))),s.minimized?o().createElement(E.Typography,{style:{marginLeft:10,marginTop:15}},t.toUpperCase()):o().createElement("div",null,o().createElement(r.Suspense,{fallback:o().createElement("p",null,"loading ...")},o().createElement(ae,{mod:n})))))},ae=function(e){var t=e.mod,n=(0,l.useRecoilValue)(p),a=(0,l.useRecoilValue)(v),i=(0,l.useRecoilState)(f),u=(0,c.Z)(i,2),m=u[0],E=u[1],b=(0,l.useRecoilState)(g),w=(0,c.Z)(b,2),x=w[0],j=w[1],S=(0,l.useRecoilState)(d),k=(0,c.Z)(S,2),Z=k[0],O=k[1],D=(0,l.useRecoilState)(y),T=(0,c.Z)(D,2),C=T[0],P=T[1],I=(0,l.useRecoilState)(h),R=(0,c.Z)(I,2),L=R[0],B=R[1],z=(0,r.useState)(1),A=(0,c.Z)(z,2),W=A[0],F=A[1];(0,r.useEffect)((function(){F((function(e){return e+1}))}),[a]);var H={trigger:L,setTrigger:B,projects:Z,setProjects:O,store:n,datasets:m,setDatasets:E,selectedElements:x,setSelectedElements:j,selectionId:C,setSelectionId:P,session:(0,s.getDefaultSession)()};return o().createElement(_,{key:W,system:{module:t.module,url:t.url,scope:t.scope},sharedProps:H,module:t,config:a})},ie=n(45258),ce=n(28358),le=n(22318),se=n(17812),ue=n(60424);function pe(){var e=(0,l.useRecoilState)(m),t=(0,c.Z)(e,2),n=t[0],r=t[1];return o().createElement(o().Fragment,null,o().createElement(ie.Z,null,o().createElement(ce.Z,null,o().createElement(le.Z,{variant:"h6",color:"inherit",noWrap:!0,to:"/",style:{color:"white",textDecoration:"none"}},"LBDserver"),o().createElement("div",{style:{flexGrow:1}}),o().createElement(se.Z,{variant:"outlined",color:"primary",key:"setup",style:{color:"white",fontWeight:"normal"},onClick:function(){return r(!n)}},o().createElement(ue.Z,null)))))}var me=n(5034),de=n(26975),fe=new O.QueryClient,ge=(0,me.Z)({productionPrefix:"main",seed:"main"});const ye=function(){var e=(0,l.useRecoilState)(d),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,l.useRecoilState)(h),i=(0,c.Z)(a,2),s=i[0],u=i[1],p=(0,l.useRecoilState)(m),g=(0,c.Z)(p,2),y=g[0],b=g[1],w=(0,l.useRecoilState)(v),x=(0,c.Z)(w,2),j=x[0],S=x[1],k=(0,l.useRecoilState)(f),Z=(0,c.Z)(k,2),D=(Z[0],Z[1]);return o().createElement(de.ZP,{generateClassName:ge},o().createElement(O.QueryClientProvider,{client:fe},o().createElement(pe,{name:"LBDserver"}),Object.keys(n).length>0?o().createElement(ne,null):o().createElement("div",{style:{marginTop:100,justifyContent:"center"}},o().createElement(E.Typography,{variant:"h5"},"Please select a project via the sidebar")),o().createElement(z,{openOptions:y,setOpenOptions:b,trigger:s,setTrigger:u,setDatasets:D,projects:n,setProjects:r,config:j,setConfig:S,drawerWidth:"40%"})))};i().render(o().createElement(O.QueryClientProvider,{client:new O.QueryClient},o().createElement(l.RecoilRoot,null,o().createElement(ye,null))),document.querySelector("#root"))}}]);