(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6815:function(e,t,n){Promise.resolve().then(n.t.bind(n,4671,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,3300)),Promise.resolve().then(n.bind(n,9103))},3300:function(e,t,n){"use strict";n.d(t,{CategoryProvider:function(){return r},b:function(){return l}});var o=n(7437),c=n(2265);let a=(0,c.createContext)(void 0),r=e=>{let{children:t}=e,[n,r]=(0,c.useState)(null),[l,s]=(0,c.useState)(null);return(0,o.jsx)(a.Provider,{value:{selectedCategory:n,setSelectedCategory:r,selectedSubCategory:l,setSelectedSubCategory:s},children:t})},l=()=>{let e=(0,c.useContext)(a);if(void 0===e)throw Error("useCategory must be used within a CategoryProvider");return e}},9103:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var o=n(7437),c=n(9512);function a(e){let{children:t,...n}=e;return(0,o.jsx)(c.f,{...n,children:t})}},3054:function(){},4671:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return u}});var o=n(2265),c=["light","dark"],a="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=o.createContext(void 0),s={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=o.useContext(l))?e:s},u=e=>o.useContext(l)?e.children:o.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:u=d,defaultTheme:m=r?"system":"light",attribute:g="data-theme",value:b,children:S,nonce:C}=e,[w,p]=o.useState(()=>f(i,m)),[_,k]=o.useState(()=>f(i)),E=b?Object.values(b):u,T=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=y());let o=b?b[t]:t,a=n?v():null,l=document.documentElement;if("class"===g?(l.classList.remove(...E),o&&l.classList.add(o)):o?l.setAttribute(g,o):l.removeAttribute(g),s){let e=c.includes(m)?m:null,n=c.includes(t)?t:e;l.style.colorScheme=n}null==a||a()},[]),x=o.useCallback(e=>{let t="function"==typeof e?e(e):e;p(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),L=o.useCallback(e=>{k(y(e)),"system"===w&&r&&!t&&T("system")},[w,t]);o.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),o.useEffect(()=>{let e=e=>{e.key===i&&x(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),o.useEffect(()=>{T(null!=t?t:w)},[t,w]);let N=o.useMemo(()=>({theme:w,setTheme:x,forcedTheme:t,resolvedTheme:"system"===w?_:w,themes:r?[...u,"system"]:u,systemTheme:r?_:void 0}),[w,x,t,_,r,u]);return o.createElement(l.Provider,{value:N},o.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:u,defaultTheme:m,attribute:g,value:b,children:S,attrs:E,nonce:C}),S)},h=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:u,attrs:d,nonce:m}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),v=s?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=u?u[e]:e,a=t?e+"|| ''":"'".concat(o,"'"),l="";return s&&n&&!t&&c.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||o?l+="c.add(".concat(a,")"):l+="null":o&&(l+="d[s](n,".concat(a,")")),l},g=t?"!function(){".concat(f).concat(y(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})}),f=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[93,971,23,744],function(){return e(e.s=6815)}),_N_E=e.O()}]);