"use strict";(self.webpackChunklbdserver=self.webpackChunklbdserver||[]).push([[815],{73727:(e,t,r)=>{r.r(t),r.d(t,{MemoryRouter:()=>n.MemoryRouter,Prompt:()=>n.Prompt,Redirect:()=>n.Redirect,Route:()=>n.Route,Router:()=>n.Router,StaticRouter:()=>n.StaticRouter,Switch:()=>n.Switch,generatePath:()=>n.generatePath,matchPath:()=>n.matchPath,useHistory:()=>n.useHistory,useLocation:()=>n.useLocation,useParams:()=>n.useParams,useRouteMatch:()=>n.useRouteMatch,withRouter:()=>n.withRouter,BrowserRouter:()=>f,HashRouter:()=>h,Link:()=>d,NavLink:()=>g});var n=r(3403),o=r(94578),a=r(77865),i=r.n(a),c=r(20779),u=(r(45697),r(87462)),s=r(63366),l=r(2177),f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=(0,c.createBrowserHistory)(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(n.Router,{history:this.history,children:this.props.children})},t}(i().Component),h=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=(0,c.createHashHistory)(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(n.Router,{history:this.history,children:this.props.children})},t}(i().Component),p=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?(0,c.createLocation)(e,null,null,t):e},y=function(e){return e},m=i().forwardRef;void 0===m&&(m=y);var R=m((function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,a=(0,s.Z)(e,["innerRef","navigate","onClick"]),c=a.target,l=(0,u.Z)({},a,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return l.ref=y!==m&&t||r,i().createElement("a",l)})),d=m((function(e,t){var r=e.component,o=void 0===r?R:r,a=e.replace,f=e.to,h=e.innerRef,d=(0,s.Z)(e,["component","replace","to","innerRef"]);return i().createElement(n.__RouterContext.Consumer,null,(function(e){e||(0,l.Z)(!1);var r=e.history,n=v(p(f,e.location),e.location),s=n?r.createHref(n):"",R=(0,u.Z)({},d,{href:s,navigate:function(){var t=p(f,e.location),n=(0,c.createPath)(e.location)===(0,c.createPath)(v(t));(a||n?r.replace:r.push)(t)}});return y!==m?R.ref=t||h:R.innerRef=h,i().createElement(o,R)}))})),w=function(e){return e},C=i().forwardRef;void 0===C&&(C=w);var g=C((function(e,t){var r=e["aria-current"],o=void 0===r?"page":r,a=e.activeClassName,c=void 0===a?"active":a,f=e.activeStyle,h=e.className,y=e.exact,m=e.isActive,R=e.location,g=e.sensitive,P=e.strict,Z=e.style,k=e.to,E=e.innerRef,H=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(n.__RouterContext.Consumer,null,(function(e){e||(0,l.Z)(!1);var r=R||e.location,a=v(p(k,r),r),s=a.pathname,N=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=N?(0,n.matchPath)(r.pathname,{path:N,exact:y,sensitive:g,strict:P}):null,b=!!(m?m(S,r):S),x="function"==typeof h?h(b):h,A="function"==typeof Z?Z(b):Z;b&&(x=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(x,c),A=(0,u.Z)({},A,f));var L=(0,u.Z)({"aria-current":b&&o||null,className:x,style:A,to:a},H);return w!==C?L.ref=t||E:L.innerRef=E,i().createElement(d,L)}))}))},2177:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e,t){if(!e)throw new Error("Invariant failed")}}}]);