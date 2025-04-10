import{r as a}from"./react-C0JOplFJ.js";import{i as v,A as k,p as M,s as J,m as z,j as N,g as W,r as A,a as S}from"./@remix-run-DaH1AUis.js";/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}const I=a.createContext(null),V=a.createContext(null),b=a.createContext(null),R=a.createContext(null),x=a.createContext({outlet:null,matches:[],isDataRoute:!1}),O=a.createContext(null);function P(){return a.useContext(R)!=null}function j(){return P()||v(!1),a.useContext(R).location}function D(t){a.useContext(b).static||a.useLayoutEffect(t)}function se(){let{isDataRoute:t}=a.useContext(x);return t?ne():q()}function q(){P()||v(!1);let t=a.useContext(I),{basename:e,future:r,navigator:n}=a.useContext(b),{matches:i}=a.useContext(x),{pathname:u}=j(),l=JSON.stringify(W(i,r.v7_relativeSplatPath)),f=a.useRef(!1);return D(()=>{f.current=!0}),a.useCallback(function(p,s){if(s===void 0&&(s={}),!f.current)return;if(typeof p=="number"){n.go(p);return}let o=A(p,JSON.parse(l),u,s.relative==="path");t==null&&e!=="/"&&(o.pathname=o.pathname==="/"?e:N([e,o.pathname])),(s.replace?n.replace:n.push)(o,s.state,s)},[e,n,l,u,t])}function ue(){let{matches:t}=a.useContext(x),e=t[t.length-1];return e?e.params:{}}function G(t,e){return K(t,e)}function K(t,e,r,n){P()||v(!1);let{navigator:i}=a.useContext(b),{matches:u}=a.useContext(x),l=u[u.length-1],f=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let p=j(),s;if(e){var o;let c=typeof e=="string"?M(e):e;d==="/"||(o=c.pathname)!=null&&o.startsWith(d)||v(!1),s=c}else s=p;let h=s.pathname||"/",m=h;if(d!=="/"){let c=d.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(c.length).join("/")}let g=z(t,{pathname:m}),C=$(g&&g.map(c=>Object.assign({},c,{params:Object.assign({},f,c.params),pathname:N([d,i.encodeLocation?i.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?d:N([d,i.encodeLocation?i.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),u,r,n);return e&&C?a.createElement(R.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:k.Pop}},C):C}function Q(){let t=re(),e=S(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:i},r):null,null)}const X=a.createElement(Q,null);class Y extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?a.createElement(x.Provider,{value:this.props.routeContext},a.createElement(O.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(t){let{routeContext:e,match:r,children:n}=t,i=a.useContext(I);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(x.Provider,{value:e},n)}function $(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var u;if((u=r)!=null&&u.errors)t=r.matches;else return null}let l=t,f=(i=r)==null?void 0:i.errors;if(f!=null){let s=l.findIndex(o=>o.route.id&&(f==null?void 0:f[o.route.id]));s>=0||v(!1),l=l.slice(0,Math.min(l.length,s+1))}let d=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let s=0;s<l.length;s++){let o=l[s];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(p=s),o.route.id){let{loaderData:h,errors:m}=r,g=o.route.loader&&h[o.route.id]===void 0&&(!m||m[o.route.id]===void 0);if(o.route.lazy||g){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((s,o,h)=>{let m,g=!1,C=null,c=null;r&&(m=f&&o.route.id?f[o.route.id]:void 0,C=o.route.errorElement||X,d&&(p<0&&h===0?(ae("route-fallback"),g=!0,c=null):p===h&&(g=!0,c=o.route.hydrateFallbackElement||null)));let B=e.concat(l.slice(0,h+1)),L=()=>{let E;return m?E=C:g?E=c:o.route.Component?E=a.createElement(o.route.Component,null):o.route.element?E=o.route.element:E=s,a.createElement(Z,{match:o,routeContext:{outlet:s,matches:B,isDataRoute:r!=null},children:E})};return r&&(o.route.ErrorBoundary||o.route.errorElement||h===0)?a.createElement(Y,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:L(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):L()},null)}var _=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_||{}),T=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(T||{});function H(t){let e=a.useContext(I);return e||v(!1),e}function ee(t){let e=a.useContext(V);return e||v(!1),e}function te(t){let e=a.useContext(x);return e||v(!1),e}function w(t){let e=te(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function re(){var t;let e=a.useContext(O),r=ee(),n=w();return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function ne(){let{router:t}=H(_.UseNavigateStable),e=w(T.UseNavigateStable),r=a.useRef(!1);return D(()=>{r.current=!0}),a.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,y({fromRouteId:e},u)))},[t,e])}const F={};function ae(t,e,r){F[t]||(F[t]=!0)}function oe(t){v(!1)}function ce(t){let{basename:e="/",children:r=null,location:n,navigationType:i=k.Pop,navigator:u,static:l=!1,future:f}=t;P()&&v(!1);let d=e.replace(/^\/*/,"/"),p=a.useMemo(()=>({basename:d,navigator:u,static:l,future:y({v7_relativeSplatPath:!1},f)}),[d,f,u,l]);typeof n=="string"&&(n=M(n));let{pathname:s="/",search:o="",hash:h="",state:m=null,key:g="default"}=n,C=a.useMemo(()=>{let c=J(s,d);return c==null?null:{location:{pathname:c,search:o,hash:h,state:m,key:g},navigationType:i}},[d,s,o,h,m,g,i]);return C==null?null:a.createElement(b.Provider,{value:p},a.createElement(R.Provider,{children:r,value:C}))}function de(t){let{children:e,location:r}=t;return G(U(e),r)}new Promise(()=>{});function U(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,i)=>{if(!a.isValidElement(n))return;let u=[...e,i];if(n.type===a.Fragment){r.push.apply(r,U(n.props.children,u));return}n.type!==oe&&v(!1),!n.props.index||!n.props.children||v(!1);let l={id:n.props.id||u.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=U(n.props.children,u)),r.push(l)}),r}export{ce as R,ue as a,j as b,de as c,oe as d,se as u};
