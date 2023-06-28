(()=>{"use strict";var e={8213:(e,t,r)=>{var o=r(1957),n=r(213),a=r(499),i=r(9835);function s(e,t){const r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(r)}var l=r(1639);const c={},u=(0,l.Z)(c,[["render",s]]),d=u;var p=r(3340),m=r(3746);const f=(0,p.h)((()=>{const e=(0,m.WB)();return e}));var v=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(821)]).then(r.bind(r,6821)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(743)]).then(r.bind(r,6743))},{path:"/meta",component:()=>Promise.all([r.e(736),r.e(182)]).then(r.bind(r,8182)),meta:{title:"Meta Page test",metaTags:[{name:"description",content:"Please make this work!!!!!!!!!!!"},{property:"og:description",content:"Please make this work!!!!!!!!!!!"}]}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(342)]).then(r.bind(r,9342))}],b=h,g=(0,p.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t.beforeEach(((e,t,r)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),n=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),a=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=String(o.meta.title):a&&(document.title=String(a.meta.title)),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>{var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),!n)return r();n.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()})),t}));async function y(e,t){const r=e(d);r.use(n.Z,t);const o="function"===typeof f?await f({}):f;r.use(o);const i=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}var w=r(9231);const k={config:{},plugins:{Meta:w.ZP}};async function O({app:e,router:t,store:r}){e.use(t),e.mount("#q-app")}y(o.ri,k).then(O)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{182:"5716deba",342:"090840e1",743:"ac804b2b",821:"499a1f27"}[e]+".js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crawlers-dev:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkcrawlers_dev"]=globalThis["webpackChunkcrawlers_dev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(8213)));o=r.O(o)})();