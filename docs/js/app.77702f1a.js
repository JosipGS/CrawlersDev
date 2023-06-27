(()=>{"use strict";var e={8213:(e,r,t)=>{var o=t(1957),n=t(213),a=t(499),i=t(9835);function s(e,r){const t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(t)}var l=t(1639);const u={},c=(0,l.Z)(u,[["render",s]]),d=c;var p=t(3340),f=t(3746);const v=(0,p.h)((()=>{const e=(0,f.WB)();return e}));var h=t(8339);const b=[{path:"/",component:()=>Promise.all([t.e(736),t.e(821)]).then(t.bind(t,6821)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(743)]).then(t.bind(t,6743))},{path:"/meta",component:()=>Promise.all([t.e(736),t.e(182)]).then(t.bind(t,8182))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(342)]).then(t.bind(t,9342))}],m=b,g=(0,p.BC)((function(){const e=h.r5,r=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return r}));async function y(e,r){const t=e(d);t.use(n.Z,r);const o="function"===typeof v?await v({}):v;t.use(o);const i=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=i})),{app:t,store:o,router:i}}var w=t(9231);const O={config:{},plugins:{Meta:w.ZP}};async function j({app:e,router:r,store:t}){e.use(r),e.mount("#q-app")}y(o.ri,O).then(j)}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{182:"5716deba",342:"090840e1",743:"ac804b2b",821:"1831bd0e"}[e]+".js"})(),(()=>{t.miniCssF=e=>{}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="crawlers-dev:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[n];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),s=new Error,l=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};t.l(i,l,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,s,l]=o,u=0;if(i.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(l)var c=l(t)}for(r&&r(o);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=globalThis["webpackChunkcrawlers_dev"]=globalThis["webpackChunkcrawlers_dev"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(8213)));o=t.O(o)})();