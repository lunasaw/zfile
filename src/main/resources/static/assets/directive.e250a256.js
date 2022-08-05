import{ad as S,r as w,W as T,aq as I,al as f,e as N,Q as V,R as E,h as P,T as O,Z as k,m as _,a5 as A,at as R,S as j}from"./index.552205f5.js";import{u as $,a1 as b,B as Z,H as q,a2 as m,$ as C}from"./base.d698891e.js";function H(t){let e;const l=$("loading"),a=w(!1),s=T({...t,originalPosition:"",originalOverflow:"",visible:!1});function n(o){s.text=o}function u(){const o=s.parent;if(!o.vLoadingAddClassList){let i=o.getAttribute("loading-number");i=Number.parseInt(i)-1,i?o.setAttribute("loading-number",i.toString()):(b(o,l.bm("parent","relative")),o.removeAttribute("loading-number")),b(o,l.bm("parent","hidden"))}d(),v.unmount()}function d(){var o,i;(i=(o=r.$el)==null?void 0:o.parentNode)==null||i.removeChild(r.$el)}function p(){var o;if(t.beforeClose&&!t.beforeClose())return;const i=s.parent;i.vLoadingAddClassList=void 0,a.value=!0,clearTimeout(e),e=window.setTimeout(()=>{a.value&&(a.value=!1,u())},400),s.visible=!1,(o=t.closed)==null||o.call(t)}function c(){!a.value||(a.value=!1,u())}const v=I({name:"ElLoading",setup(){return()=>{const o=s.spinner||s.svg,i=f("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"25 25 50 50",...o?{innerHTML:o}:{}},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),B=s.text?f("p",{class:l.b("text")},[s.text]):void 0;return f(O,{name:l.b("fade"),onAfterLeave:c},{default:N(()=>[V(P("div",{style:{backgroundColor:s.background||""},class:[l.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[f("div",{class:l.b("spinner")},[i,B])]),[[E,s.visible]])])})}}}),r=v.mount(document.createElement("div"));return{...S(s),setText:n,removeElLoadingChild:d,close:p,handleAfterLeave:c,vm:r,get $el(){return r.$el}}}let g;const z=function(t={}){if(!Z)return;const e=D(t);if(e.fullscreen&&g)return g;const l=H({...e,closed:()=>{var s;(s=e.closed)==null||s.call(e),e.fullscreen&&(g=void 0)}});F(e,e.parent,l),L(e,e.parent,l),e.parent.vLoadingAddClassList=()=>L(e,e.parent,l);let a=e.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",e.parent.setAttribute("loading-number",a),e.parent.appendChild(l.$el),k(()=>l.visible.value=e.visible),e.fullscreen&&(g=l),l},D=t=>{var e,l,a,s;let n;return _(t.target)?n=(e=document.querySelector(t.target))!=null?e:document.body:n=t.target||document.body,{parent:n===document.body||t.body?document.body:n,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:n===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(a=t.lock)!=null?a:!1,customClass:t.customClass||"",visible:(s=t.visible)!=null?s:!0,target:n}},F=async(t,e,l)=>{const{nextZIndex:a}=q(),s={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),s.zIndex=a();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await k();for(const n of["top","left"]){const u=n==="top"?"scrollTop":"scrollLeft";s[n]=`${t.target.getBoundingClientRect()[n]+document.body[u]+document.documentElement[u]-Number.parseInt(m(document.body,`margin-${n}`),10)}px`}for(const n of["height","width"])s[n]=`${t.target.getBoundingClientRect()[n]}px`}else l.originalPosition.value=m(e,"position");for(const[n,u]of Object.entries(s))l.$el.style[n]=u},L=(t,e,l)=>{const a=$("loading");l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?C(e,a.bm("parent","relative")):b(e,a.bm("parent","relative")),t.fullscreen&&t.lock?C(e,a.bm("parent","hidden")):b(e,a.bm("parent","hidden"))},y=Symbol("ElLoading"),h=(t,e)=>{var l,a,s,n;const u=e.instance,d=r=>A(e.value)?e.value[r]:void 0,p=r=>{const o=_(r)&&(u==null?void 0:u[r])||r;return o&&w(o)},c=r=>p(d(r)||t.getAttribute(`element-loading-${R(r)}`)),x=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,v={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:x,target:(a=d("target"))!=null?a:x?void 0:t,body:(s=d("body"))!=null?s:e.modifiers.body,lock:(n=d("lock"))!=null?n:e.modifiers.lock};t[y]={options:v,instance:z(v)}},K=(t,e)=>{for(const l of Object.keys(e))j(e[l])&&(e[l].value=t[l])},W={mounted(t,e){e.value&&h(t,e)},updated(t,e){const l=t[y];e.oldValue!==e.value&&(e.value&&!e.oldValue?h(t,e):e.value&&e.oldValue?A(e.value)&&K(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[y])==null||e.instance.close()}};export{z as L,W as v};
