"use strict";(self.webpackChunklbdserver=self.webpackChunklbdserver||[]).push([[246],{25246:(e,t,n)=>{n.r(t);var r=n(77865),o=n.n(r),a=n(21704),i=n.n(a),l=n(29439),c=n(15861),s=n(87757),u=n.n(s),p=n(90471),d=n.n(p);n(334);var m=d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("scope, module",t,n),e.next=3,window[t].get(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),f=d()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){console.log("Dynamic Script Loaded: ".concat(e.url)),t()},r.onerror=function(){console.error("Dynamic Script Error: ".concat(e.url)),n()}}catch(e){console.log("error",e),n(e)}}))}));d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,f(r);case 4:return e.next=6,m(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());var g=n(46078);n(99170);var h=n(75073),y=(n(72231).v4,n(99170)),v=(0,g.atom)({key:"store",default:new y.Store}),E=(0,g.atom)({key:"openOptions",default:!0}),b=((0,g.atom)({key:"session",default:new h.Session}),(0,g.atom)({key:"projects",default:[]})),w=(0,g.atom)({key:"activeResources",default:[]}),x=(0,g.atom)({key:"selectedElements",default:[]}),j=(0,g.atom)({key:"selectionId",default:""}),k=(0,g.atom)({key:"trigger",default:1});const S=(0,g.atom)({key:"config",default:{tabs:{url:"https://consolidproject.github.io/pluginAggregatorTabs/remoteEntry.js",scope:"tabs",label:"tabs",module:"./index",dimensions:{x:0,y:0,h:900,w:600},children:{resourcemanager:{url:"https://consolidproject.github.io/pluginResourceManager/remoteEntry.js",scope:"resourcemanager",module:"./index",icon:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"},projectquery:{url:"http://localhost:8083/remoteEntry.js",scope:"projectquery",module:"./index",icon:"M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z"}}},viewer:{url:"https://consolidproject.github.io/pluginViewer/remoteEntry.js",scope:"viewer",module:"./index",dimensions:{x:600,y:0,h:450,w:660}},imageannotator:{url:"http://localhost:8084/remoteEntry.js",scope:"imageannotator",module:"./index",dimensions:{x:600,y:450,h:450,w:660}}}});var T=n(86712),Z=n(64566),C=n(53662),D=n(72231),O=n(93433);const P=function(e){var t=e.project,n=e.projects,r=e.setProjects,a=e.store,i=e.setTrigger;function l(){return(l=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.includes(t)){e.next=5;break}r((function(e){return e.filter((function(e){return e!=t}))})),i((function(e){return e+1})),e.next=10;break;case 5:return r((function(e){return[].concat((0,O.Z)(e),[t])})),e.next=8,(0,C.loadProjectMetadata)(t,a,(0,h.getDefaultSession)());case 8:console.log("done"),i((function(e){return e+1}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o().createElement("div",null,o().createElement(T.Card,{style:{marginTop:5,marginBottom:5},variant:"outlined"},o().createElement(T.CardContent,null,o().createElement(T.Typography,{component:"p"},t),o().createElement(T.FormGroup,null,o().createElement(T.FormControlLabel,{control:o().createElement(T.Switch,{color:"primary",checked:n.includes(t),onChange:function(e){return function(){return l.apply(this,arguments)}()}}),label:"Active"})))))},A=function(e){var t=e.store,n=e.projects,a=e.setProjects,i=e.trigger,s=e.setTrigger,p=(0,r.useState)("http://localhost:5000/jeroen/lbd/"),d=(0,l.Z)(p,2),m=(d[0],d[1],(0,r.useState)([])),f=(0,l.Z)(m,2),g=f[0],y=f[1],v=(0,r.useState)("https://pod.lbdserver.org/pieter/profile/card#me; https://pod.lbdserver.org/jakob/profile/card#me"),E=(0,l.Z)(v,2),b=E[0],w=E[1],x=(0,r.useState)([]),j=(0,l.Z)(x,2),k=j[0];function S(e,t){return Z.apply(this,arguments)}function Z(){return Z=(0,c.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.getProjectsFromAggregator)(t,(0,h.getDefaultSession)());case 2:r=e.sent,console.log("projects",r),n(r);case 5:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function O(){return(O=(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=b.split(";").map((function(e){return e.replace(/\s+/g,"")}))).push((0,h.getDefaultSession)().info.webId),e.next=4,(0,C.createProject)((0,D.v4)(),t,(0,h.getDefaultSession)());case 4:return e.next=6,A();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return R.apply(this,arguments)}function R(){return(R=(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.getLBDlocation)((0,h.getDefaultSession)().info.webId,(0,h.getDefaultSession)());case 2:return t=e.sent,e.next=5,S(t,y);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return j[1],(0,r.useEffect)((function(){}),[i]),o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},(0,h.getDefaultSession)().info.isLoggedIn?o().createElement("div",null,o().createElement("div",null,o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},'Your projects are saved in a subdirectory of your POD "/lbd/" (Linked Building Data). If you already host some projects, you can activate them here.'),o().createElement(T.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A());case 1:case"end":return e.stop()}}),e)}))),style:{marginTop:5,marginBottom:5}},"Get my projects"),g.map((function(e){return o().createElement(P,{key:e,project:e,projects:n,setProjects:a,store:t,setTrigger:s})}))),o().createElement("div",null,o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Otherwise, you may create a project. If you want to invite others to your project, you may add their webIds below."," "),o().createElement("br",null),o().createElement(T.TextField,{id:"standard-multiline-flexible",label:"Stakeholders (separate by ';')",multiline:!0,fullWidth:!0,rowsMax:10,value:b.toString(),onChange:function(e){return w(e.target.value)},style:{marginTop:10,marginBottom:10}})," ",o().createElement(T.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return function(){return O.apply(this,arguments)}()}},"Create new project")),o().createElement("div",null,o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Or join a project for which you were invited for collaboration:"),k?o().createElement("div",null):o().createElement(o().Fragment,null),o().createElement("br",null))):o().createElement("div",null,o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Register/Log in to create your own project."))))};function R(){return I.apply(this,arguments)}function I(){return(I=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,h.getDefaultSession)().info.isLoggedIn){e.next=13;break}if(!new URLSearchParams(window.location.search).get("code")){e.next=10;break}return console.log("checking code param"),e.next=8,(0,h.handleIncomingRedirect)();case 8:e.next=13;break;case 10:return console.log("checking previous session data"),e.next=13,(0,h.handleIncomingRedirect)({restorePreviousSession:!0});case 13:return e.abrupt("return",(0,h.getDefaultSession)());case 16:e.prev=16,e.t0=e.catch(0),console.log("error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}const L=function(e){e.trigger;var t=e.setTrigger,n=(0,r.useState)("https://pod.lbdserver.org"),a=(0,l.Z)(n,2),i=a[0],s=a[1],p=(0,r.useState)(!1),d=(0,l.Z)(p,2),m=(d[0],d[1]);(0,r.useEffect)((function(){R().then((function(e){return t((function(e){return e+1}))}))}),[]);var f=function(){var e=(0,c.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m(!0),(0,h.getDefaultSession)().info.isLoggedIn){e.next=5;break}return e.next=5,(0,h.login)({oidcIssuer:i,redirectUrl:window.location.href,clientName:"lbdserver"});case 5:m(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,c.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),r=(0,h.getDefaultSession)(),e.next=5,r.logout();case 5:return e.next=7,R();case 7:e.sent,t((function(e){return e+1})),m(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0),m(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"The LBDserver demo projects can be read and queried publicly. However, in most cases projects will not be open to the public - authentication is required. You can get a federated Web identity at the Solid Identity Provider of your choice. You can also ",o().createElement("a",{target:"_blank",href:"https://github.com/solid/community-server"},"set up such Identity Provider yourself"),'. Having a Web Identity and a personalised online data vault ("Pod"), you can start creating your own federated LBDserver projects.'),o().createElement("br",null),(0,h.getDefaultSession)().info.isLoggedIn?o().createElement("div",null,o().createElement(T.Typography,{variant:"body1"},"Your are logged in as:"),o().createElement("a",{href:(0,h.getDefaultSession)().info.webId},(0,h.getDefaultSession)().info.webId),o().createElement(T.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:g,style:{marginTop:20}},"Sign out")):o().createElement("div",null,o().createElement("form",{onSubmit:function(e){return e.preventDefault()},noValidate:!0},o().createElement(T.TextField,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:i,onChange:function(e){return s(e.target.value)},id:"idp",label:"Identity Provider",name:"idp",autoFocus:!0}),o().createElement(T.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:f},"Sign in")))))},F=function(e){var t=e.trigger,n=e.projects,a=e.setProjects,i=e.store,s=e.setTrigger,p=(0,r.useState)("https://pod.lbdserver.org/some-aggregator/lbd/"),d=(0,l.Z)(p,2),m=d[0],f=d[1],g=(0,r.useState)([]),y=(0,l.Z)(g,2),v=y[0],E=y[1],b=(0,r.useState)([]),w=(0,l.Z)(b,2);function x(e,t){return j.apply(this,arguments)}function j(){return j=(0,c.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.getProjectsFromAggregator)(t,(0,h.getDefaultSession)());case 2:r=e.sent,console.log("projects",r),n(r);case 5:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}return w[0],w[1],(0,r.useEffect)((function(){}),[t]),o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Projects can be found via aggregators, which basically contain pointers to existing projects. Aggregators are basically LDP (Linked Data Platform) containers. If you have a dedicated LBDserver project folder configured in your Solid Pod: that is an aggregator. Other aggregators could group projects based on location, typology etc."),o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Activate a project from a public aggregator:"),o().createElement("br",null),o().createElement(T.TextField,{id:"aggregatorField",label:"aggregator",fullWidth:!0,variant:"outlined",value:m,onChange:function(e){return f(e.target.value)}}),o().createElement(T.Button,{fullWidth:!0,variant:"contained",color:"primary",onClick:(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(m,E);case 2:case"end":return e.stop()}}),e)}))),style:{marginTop:20}},"GET PROJECTS"),v.map((function(e){return o().createElement(P,{key:e,project:e,projects:n,store:i,setProjects:a,setTrigger:s})}))))};var B,z=n(4942),W=n(19400);const H=function(e){var t=e.config,n=e.setConfig,a=(e.trigger,e.setTrigger,(0,r.useState)(t)),i=(0,l.Z)(a,2),s=i[0],p=i[1],d=(0,r.useState)("https://pod.lbdserver.org/jeroen/public/remoteConfig.json"),m=(0,l.Z)(d,2),f=m[0],g=m[1],y=(0,r.useState)(["https://pod.lbdserver.org/jeroen/public/remoteConfig.json","https://pod.lbdserver.org/jeroen/public/remoteConfig1.json"]),v=(0,l.Z)(y,2),E=v[0];function b(){return(b=(0,c.Z)(u().mark((function e(t){var r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=(0,h.getDefaultSession)(),e.next=4,r.fetch(f);case 4:return o=e.sent,e.next=7,o.json();case 7:a=e.sent,p((function(){return a})),n((function(){return a}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return v[1],o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"To boost reuse of modules and integrate tools from various front-end frameworks (React, Angular, Vue, ...), we make use of ",o().createElement("a",{target:"_blank",href:"https://webpack.js.org/concepts/module-federation/"},"Webpack 5's Module Federation"),' feature. This allows remote modules ("micro-front-ends") to function both as standalone apps and be bundled in a container application to address larger use cases. The container application is responsible for the exchange of important information, such as the active project, selected (document) resources or selected "artefacts". An important aspect of the LBDserver is to enable third party developers, researchers, students etc. to easily bootstrap their own plugins and wire them together with existing ones. You may find a template for your own (React) plugin at ',o().createElement("a",{target:"_blank",href:"https://github.com/ConSolidProject/pluginTemplate"},"https://github.com/ConSolidProject/pluginTemplate"),", as well as information on how to get started with developing your own plugin. To make full use of the LBDserver backend framework as well, it is important to know the ",o().createElement("a",{target:"_blank",href:"https://lbdserver.org/wiki/backend"},"peculiarities of LBDserver data storage and -linking"),"."),o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},'Below, you can see the configuration that is loaded by default. You may test the configuration options by fetching another configuration via its URL. For example, one that is stored on an office pod, or by a specialised service that has configurations for specific use cases ... In this container, configurations are "hot-loaded", which means they can be changed in real-time during your browser session.'),o().createElement("br",null),o().createElement(T.Select,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",fullWidth:!0,value:f,onChange:function(e){return g(e.target.value)}},E.map((function(e){return o().createElement(T.MenuItem,{key:e,value:e},e)}))),o().createElement(T.Button,{style:{marginTop:20,marginBottom:15},variant:"contained",fullWidth:!0,color:"primary",onClick:function(e){return b.apply(this,arguments)}},"FETCH"),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"Current configuration:"),o().createElement("div",null,o().createElement(W.JSONViewer,{data:s,collapsible:!0,styles:q}))))};var q={dualView:{display:"flex"},jsonViewer:(B={borderLeft:"1px dashed white",lineHeight:1.25,width:"50%"},(0,z.Z)(B,"borderLeft","1px solid lightgrey"),(0,z.Z)(B,"margin",10),B),jsonEditor:{width:"50%",fontSize:12,fontFamily:"Lucida Console, monospace",lineHeight:1.25},root:{fontSize:12,fontFamily:"Lucida Console, monospace",lineHeight:1,backgroundColor:"Bisque",borderRadius:"10px",padding:10},label:{color:"DeepPink",marginTop:3},value:{marginLeft:10},row:{display:"flex"},withChildrenLabel:{color:"DeepPink"},select:{borderRadius:3,borderColor:"grey",backgroundColor:"DimGray",color:"khaki"},input:{borderRadius:3,border:"1px solid #272822",padding:2,fontFamily:"Lucida Console, monospace",fontSize:12,backgroundColor:"gray",color:"khaki",width:"200%"},addButton:{cursor:"pointer",color:"LightGreen",marginLeft:15,fontSize:12},removeButton:{cursor:"pointer",color:"magenta",marginLeft:15,fontSize:12},saveButton:{cursor:"pointer",color:"green",marginLeft:15,fontSize:12},builtin:{color:"green",fontSize:12},text:{color:"black",fontSize:12},number:{color:"purple",fontSize:12},property:{color:"DeepPink",fontSize:12},collapseIcon:{cursor:"pointer",fontSize:10,color:"teal"}};const M=function(e){var t=e.config,n=(e.setConfig,e.trigger,e.setTrigger,(0,r.useState)(t)),a=(0,l.Z)(n,2),i=(a[0],a[1],(0,r.useState)("http://localhost:5000/jeroen/public/remoteConfig1.json")),c=(0,l.Z)(i,2);return c[0],c[1],o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"As this is just a demo app, there is still a whole lot of work to do here. Just some ideas you might want to collaborate in:"),o().createElement("ul",null,o().createElement("li",null,"Create new/better plugins for visualisation, checking, querying etc."),o().createElement("li",null,"Develop a template for plugins built using Angular, Vue or another front-end framework "),o().createElement("li",null,"A plugin store / configuration builder"),o().createElement("li",null,"Develop backend services to automate and streamline information exchange."),o().createElement("li",null,"...")),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"If you're interested, please contact me at jeroen.werbrouck [ at ] ugent.be")))},V=function(e){var t=e.config,n=(e.setConfig,e.trigger,e.setTrigger,(0,r.useState)(t)),a=(0,l.Z)(n,2),i=(a[0],a[1],(0,r.useState)("http://localhost:5000/jeroen/public/remoteConfig1.json")),c=(0,l.Z)(i,2);return c[0],c[1],o().createElement(o().Fragment,null,o().createElement(T.Container,{component:"main"},o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},'As you know by now, LBDserver projects are federated aggregations of heterogeneous datasets. Such datasets can be either RDF-based or non-RDF. RDF datasets can be easily connected on a sub-document level, as they natively rely on URIs as resource identifiers. Other datasets require some more work to lift internal identifiers to a "higher" context. To do this, we roughly depart from a federated version of the ICDD specification (ISO 21597), using "Linkelements" that connect identifiers and their corresponding documents to abstract representations of a certain concept ("artefacts"). The more documents connect their representations of an object to this "artefact", the richer it becomes semantically. Individual stakeholders can indicate equality between their local artefacts and those of other stakeholders using an owl:sameAs pointer, effectively declaring aliases that allow to query the federated project while still maintaining a local "artefact registry".'),o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},'When something is selected in an LBDserver module, a selectionset is made including the "original" artefact and its aliases in the project. This selection set is shared with other modules in the configuration, which can then use it to identify which linkelements (documents and identifiers) are relevant to them to display. For example, a glTF viewer module will only be interested in those link elements associated with a document with mime type "model/gltf+json".')))},G=function(e){var t=e.openOptions,n=e.setOpenOptions,a=e.trigger,i=e.setTrigger,c=e.setProjects,s=e.projects,u=e.store,p=e.config,d=e.setConfig,m=e.drawerWidth,f=(0,r.useState)(!0),g=(0,l.Z)(f,2),h=g[0],y=g[1],v=(0,r.useState)(!1),E=(0,l.Z)(v,2),b=E[0],w=E[1],x=(0,r.useState)(!1),j=(0,l.Z)(x,2),k=j[0],S=j[1],C=(0,r.useState)(!1),D=(0,l.Z)(C,2),O=D[0],P=D[1],R=(0,r.useState)(!1),I=(0,l.Z)(R,2),B=I[0],z=I[1],W=(0,r.useState)(!1),q=(0,l.Z)(W,2),G=q[0],U=q[1],Y=(0,T.makeStyles)({paper:{width:m,backgroundColor:"bisque"}})();return o().createElement("div",null,o().createElement(o().Fragment,null,o().createElement(T.Drawer,{anchor:"right",open:t,onClose:function(){return n(!t)},classes:{paper:Y.paper}},o().createElement("div",{style:{margin:20}},o().createElement(T.Typography,{variant:"h6"},"Welcome to the LBDserver plugin demo"),o().createElement("hr",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},'The LBDserver project is an ongoing research project that studies the organisation of heterogeneous, federated AECO projects. It proposes a data structure for connecting project-specific and contextual data on the Web, and provides the infrastructure for creating a "shopping cart" of GUI plugins for interacting with this data. These plugins can be used standalone as well as be configured alongside with other plugins to enable more fluent visualisation, querying and checking of the project.'),o().createElement("br",null),o().createElement(T.Typography,{style:{textAlign:"justify"},variant:"body1"},"This application illustrates the main concepts of the LBDserver. It is a rough prototype and only serves demonstration purposes."),o().createElement("br",null),o().createElement(T.Typography,{variant:"body1"},"You can visit"," ",o().createElement("a",{target:"_blank",href:"https://lbdserver.org"},"https://lbdserver.org")," ","for more information. When citing this research, please refer to one of the following papers: [...]")),o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:h,onChange:function(){return y(!h)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"AUTHENTICATION")),o().createElement(T.AccordionDetails,null,o().createElement(L,{trigger:a,setTrigger:i})))),o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:b,onChange:function(){return w(!b)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"DEMO PROJECTS")),o().createElement(T.AccordionDetails,null,o().createElement(F,{trigger:a,projects:s,setProjects:c,store:u,setTrigger:i})))),o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:k,onChange:function(){return S(!k)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"MY PROJECTS")),o().createElement(T.AccordionDetails,null,o().createElement(A,{trigger:a,projects:s,setProjects:c,store:u,setTrigger:i})))),p?o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:O,onChange:function(){return P(!O)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"MODULE FEDERATION")),o().createElement(T.AccordionDetails,null,o().createElement(H,{trigger:a,config:p,setConfig:d,setTrigger:i})))):o().createElement(o().Fragment,null),o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:G,onChange:function(){return U(!G)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"DATA HANDLING")),o().createElement(T.AccordionDetails,null,o().createElement(V,null)))),o().createElement("div",null,o().createElement(T.Accordion,{style:N,expanded:B,onChange:function(){return z(!B)}},o().createElement(T.AccordionSummary,{expandIcon:o().createElement(Z.Z,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o().createElement(T.Typography,null,"FUTURE WORK")),o().createElement(T.AccordionDetails,null,o().createElement(M,null)))))))};var N={marginLeft:10,marginRight:10,marginTop:5,marginBottom:5},U=d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window[t].get(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Y=d()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){t()},r.onerror=function(){n()}}catch(e){console.log("error",e),n(e)}}))}));d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,Y(r);case 4:return e.next=6,U(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());var _=n(13090),J=n.n(_);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,z.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window[t].get(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),$=d()((function(e){return new Promise((function(t,n){try{e.url||(console.log("no url provided"),n());var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,document.head.appendChild(r),r.onload=function(){t()},r.onerror=function(){n()}}catch(e){console.log("error",e),n(e)}}))})),ee=d()(function(){var e=(0,c.Z)(u().mark((function e(t,n){var r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.system,e.prev=1,e.next=4,$(r);case 4:return e.next=6,X(r.scope,r.module);case 6:return o=e.sent,e.abrupt("return",o()[n]);case 10:e.prev=10,e.t0=e.catch(1),console.log("error in getFromRemote",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}());const te=o().memo((function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(null),a=(0,l.Z)(n,2),i=a[0],s=a[1];(0,r.useEffect)((function(){p(e)}));var p=function(){var n=(0,c.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee(e,"default");case 3:(0,n.sent)(t.current,K({},e)),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(0),s(n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return o().createElement("div",null,i?o().createElement("div",null,o().createElement("h3",null,"Error loading remote component"),o().createElement("p",null,i),o().createElement("p",null,"Check console for more information")):o().createElement("div",{ref:t},"Loading"))}));var ne=n(15832),re=n(44080),oe=n(77315),ae=n(35025);n(15671),n(43144),n(60136),n(82963),n(61120);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,z.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e){var t=(0,g.useRecoilValue)(S),n=(0,r.useState)(Object.keys(t)),a=(0,l.Z)(n,2),i=a[0],c=a[1];return(0,r.useEffect)((function(){console.log("modules",t),c(Object.keys(t))}),[t]),o().createElement("div",{style:{marginTop:64,marginLeft:-10}},i.map((function(e){if(t[e]&&t[e].dimensions)return o().createElement(ue,{key:e,id:e,mod:t[e]})})))}o().Component;var se=d()((function(e){return(0,g.atom)({key:"boxState_".concat(e.url),default:{x:e.dimensions.x,y:e.dimensions.y,w:e.dimensions.w,h:e.dimensions.h,fixed:!0}})})),ue=function(e){var t=e.id,n=e.mod,a=(0,g.useRecoilState)(se(n)),i=(0,l.Z)(a,2),c=i[0],s=i[1],u=(0,r.useState)(!1),p=(0,l.Z)(u,2),d=(p[0],p[1],(0,r.useRef)());return o().createElement(J(),{nodeRef:d,position:{x:c.x,y:c.y},onDrag:function(e,t){s(le(le({},c),{},{x:t.x,y:t.y}))},disabled:c.fixed},o().createElement("div",{id:"module".concat(t),ref:d,className:"box",style:{width:c.w,height:c.h,display:"flex",position:"absolute",background:"white",border:"1px LightGray solid"}},n.dimensions.fixed?o().createElement(o().Fragment,null):o().createElement("div",null,o().createElement(T.IconButton,{color:"primary",style:{position:"absolute",right:0,bottom:0,zIndex:1},onClick:function(){s(le(le({},c),{},{x:n.dimensions.x,y:n.dimensions.y,fixed:!0,minimized:!1}))}},o().createElement(ne.Z,null)),o().createElement(T.IconButton,{color:"primary",style:{position:"absolute",right:80,bottom:0,zIndex:1},onClick:function(){c.minimized?s(le(le({},c),{},{minimized:!1,w:n.w,h:n.h})):s(le(le({},c),{},{minimized:!0,w:300,h:50,y:Math.max(c.y,0)}))}},c.minimized?o().createElement(Z.Z,null):o().createElement(ae.Z,null)),o().createElement(T.IconButton,{color:"primary",style:{position:"absolute",right:40,bottom:0,zIndex:1},onClick:function(){return s(le(le({},c),{},{fixed:!c.fixed}))}},c.fixed?o().createElement(re.Z,null):o().createElement(oe.Z,null))),c.minimized?o().createElement(T.Typography,{style:{marginLeft:10,marginTop:15}},t.toUpperCase()):o().createElement("div",null,o().createElement(r.Suspense,{fallback:o().createElement("p",null,"loading ...")},o().createElement(pe,{mod:n})))))},pe=function(e){var t=e.mod,n=(0,g.useRecoilValue)(v),a=(0,g.useRecoilValue)(S),i=(0,g.useRecoilState)(w),c=(0,l.Z)(i,2),s=c[0],u=c[1],p=(0,g.useRecoilState)(x),d=(0,l.Z)(p,2),m=d[0],f=d[1],y=(0,g.useRecoilState)(b),E=(0,l.Z)(y,2),T=E[0],Z=E[1],C=(0,g.useRecoilState)(j),D=(0,l.Z)(C,2),O=D[0],P=D[1],A=(0,g.useRecoilState)(k),R=(0,l.Z)(A,2),I=R[0],L=R[1],F=(0,r.useState)(1),B=(0,l.Z)(F,2),z=B[0],W=B[1];(0,r.useEffect)((function(){W((function(e){return e+1}))}),[a]);var H={trigger:I,setTrigger:L,projects:T,setProjects:Z,store:n,activeResources:s,setActiveResources:u,selectedElements:m,setSelectedElements:f,selectionId:O,setSelectionId:P,session:(0,h.getDefaultSession)()};return o().createElement(te,{key:z,system:{module:t.module,url:t.url,scope:t.scope},sharedProps:H,module:t,config:a})},de=n(99170).DataFactory;de.namedNode,de.literal,de.defaultGraph,de.quad;const me=function(e){return e.sharedProps,o().createElement("div",null,o().createElement(ce,null))};var fe=n(45258),ge=n(28358),he=n(22318),ye=n(17812),ve=n(60424);function Ee(){var e=(0,g.useRecoilState)(E),t=(0,l.Z)(e,2),n=t[0],r=t[1];return o().createElement(o().Fragment,null,o().createElement(fe.Z,null,o().createElement(ge.Z,null,o().createElement(he.Z,{variant:"h6",color:"inherit",noWrap:!0,to:"/",style:{color:"white",textDecoration:"none"}},"LBDserver"),o().createElement("div",{style:{flexGrow:1}}),o().createElement(ye.Z,{variant:"outlined",color:"primary",key:"setup",style:{color:"white",fontWeight:"normal"},onClick:function(){return r(!n)}},o().createElement(ve.Z,null)))))}var be=n(55961),we=n(5034),xe=n(26975),je=(n(72231),(0,we.Z)({productionPrefix:"main",seed:"main"})),ke=n(99170).DataFactory;ke.namedNode,ke.literal,ke.defaultGraph,ke.quad,(0,be.createBrowserHistory)();const Se=function(){var e=(0,g.useRecoilValue)(v),t=(0,g.useRecoilState)(w),n=(0,l.Z)(t,2),a=(n[0],n[1],(0,g.useRecoilState)(x)),i=(0,l.Z)(a,2),c=(i[0],i[1],(0,g.useRecoilState)(b)),s=(0,l.Z)(c,2),u=s[0],p=s[1],d=(0,g.useRecoilState)(j),m=(0,l.Z)(d,2),f=(m[0],m[1],(0,g.useRecoilState)(k)),y=(0,l.Z)(f,2),Z=y[0],C=y[1],D=(0,g.useRecoilState)(E),O=(0,l.Z)(D,2),P=O[0],A=O[1],R=(0,g.useRecoilState)(S),I=(0,l.Z)(R,2),L=I[0],F=I[1];return(0,r.useEffect)((function(){console.log("config changed")}),[L]),(0,r.useEffect)((function(){u.length>0&&loadProjectMetadata(u[0],e,(0,h.getDefaultSession)()).then((function(){return console.log("loaded")}))}),[]),o().createElement(xe.ZP,{generateClassName:je},o().createElement(Ee,{name:"LBDserver"}),u.length>0?o().createElement(me,null):o().createElement("div",{style:{marginTop:100,justifyContent:"center"}},o().createElement(T.Typography,{variant:"h5"},"Please select a project via the sidebar")),o().createElement(G,{openOptions:P,setOpenOptions:A,trigger:Z,setTrigger:C,projects:u,setProjects:p,store:e,config:L,setConfig:F,drawerWidth:"40%"}))};var Te=n(19705);i().render(o().createElement(Te.QueryClientProvider,{client:new Te.QueryClient},o().createElement(g.RecoilRoot,null,o().createElement(Se,null))),document.querySelector("#root"))}}]);