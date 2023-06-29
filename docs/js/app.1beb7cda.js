(()=>{"use strict";var e={7335:(e,t,r)=>{var o=r(1957),n=r(213),a=r(499),c=r(9835);function i(e,t){const r=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(r)}var s=r(1639);const l={},u=(0,s.Z)(l,[["render",i]]),p=u;var d=r(3340),f=r(3746);const h=(0,d.h)((()=>{const e=(0,f.WB)();return e}));var m=r(8339);const v=[{path:"/",component:()=>Promise.all([r.e(736),r.e(821)]).then(r.bind(r,6821)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(743)]).then(r.bind(r,6743))},{path:"/meta",component:()=>r.e(787).then(r.bind(r,3787)),meta:{title:"Meta Page test",metaTags:[{property:"og:description",content:"Please make this work!!!!!!!!!!!"},{property:"og:image",content:"https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg"}]}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(342)]).then(r.bind(r,9342))}],b=v,g=(0,d.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t.beforeEach(((e,t,r)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),n=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),a=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=String(o.meta.title):a&&(document.title=String(a.meta.title)),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>{var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),!n)return r();n.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()})),t}));async function y(e,t){const r=e(p);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const c=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=c})),{app:r,store:o,router:c}}var w=r(9231);const _={config:{},plugins:{Meta:w.ZP}};r(6890);let k="function"===typeof p.preFetch?p.preFetch:void 0!==p.__c&&"function"===typeof p.__c.preFetch&&p.__c.preFetch;function O(e,t){const r=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;if(!r)return[];const o=r.matched.filter((e=>void 0!==e.components));return 0===o.length?[]:Array.prototype.concat.apply([],o.map((e=>Object.keys(e.components).map((t=>{const r=e.components[t];return{path:e.path,c:r}})))))}function j({router:e,store:t,publicPath:r}){e.beforeResolve(((o,n,a)=>{const c=window.location.href.replace(window.location.origin,""),i=O(o,e),s=O(n,e);let l=!1;const u=i.filter(((e,t)=>l||(l=!s[t]||s[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==k&&(u.unshift(k),k=!1),0===u.length)return a();let p=!1;const d=e=>{p=!0,a(e)},f=()=>{!1===p&&a()};u.reduce(((e,a)=>e.then((()=>!1===p&&a({store:t,currentRoute:o,previousRoute:n,redirect:d,urlPath:c,publicPath:r})))),Promise.resolve()).then(f).catch((e=>{console.error(e),f()}))}))}async function P({app:e,router:t,store:r}){e.use(t),j({router:t,store:r}),e.mount("#q-app")}y(o.ri,_).then(P)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var c=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],i=!0,s=0;s<o.length;s++)(!1&a||c>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{342:"9a9d0bab",743:"ba127182",787:"38924714",821:"f33cdcc4"}[e]+".js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crawlers-dev:";r.l=(o,n,a,c)=>{if(e[o])e[o].push(n);else{var i,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){i=p;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var c=r.p+r.u(t),i=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,n[1](i)}};r.l(c,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[c,i,s]=o,l=0;if(c.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var u=s(r)}for(t&&t(o);l<c.length;l++)a=c[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkcrawlers_dev"]=globalThis["webpackChunkcrawlers_dev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(7335)));o=r.O(o)})();