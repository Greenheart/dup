const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};ye();function rt(){}function Jt(t){return t()}function Pt(){return Object.create(null)}function Y(t){t.forEach(Jt)}function we(t){return typeof t=="function"}function pe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function be(t){return Object.keys(t).length===0}function M(t,e){t.appendChild(e)}function Gt(t,e,r){t.insertBefore(e,r||null)}function St(t){t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function Yt(t){return document.createTextNode(t)}function W(){return Yt(" ")}function x(t,e,r,i){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r,i)}function I(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Ee(t){return Array.from(t.childNodes)}function Ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e==null?"":e}function $(t,e,r){t.classList[r?"add":"remove"](e)}let J;function V(t){J=t}function _e(){if(!J)throw new Error("Function called outside component initialization");return J}function Te(t){_e().$$.on_mount.push(t)}const H=[],pt=[],nt=[],Rt=[],Be=Promise.resolve();let bt=!1;function Se(){bt||(bt=!0,Be.then(qt))}function Et(t){nt.push(t)}const ft=new Set;let X=0;function qt(){const t=J;do{for(;X<H.length;){const e=H[X];X++,V(e),Ae(e.$$)}for(V(null),H.length=0,X=0;pt.length;)pt.pop()();for(let e=0;e<nt.length;e+=1){const r=nt[e];ft.has(r)||(ft.add(r),r())}nt.length=0}while(H.length);for(;Rt.length;)Rt.pop()();bt=!1,ft.clear(),V(t)}function Ae(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Et)}}const Ie=new Set;function Qt(t,e){t&&t.i&&(Ie.delete(t),t.i(e))}function Ne(t,e){t.d(1),e.delete(t.key)}function Me(t,e,r,i,n,o,s,u,c,a,l,b){let g=t.length,f=o.length,w=g;const E={};for(;w--;)E[t[w].key]=w;const B=[],d=new Map,m=new Map;for(w=f;w--;){const h=b(n,o,w),C=r(h);let T=s.get(C);T?i&&T.p(h,e):(T=a(C,h),T.c()),d.set(C,B[w]=T),C in E&&m.set(C,Math.abs(w-E[C]))}const y=new Set,p=new Set;function _(h){Qt(h,1),h.m(u,l),s.set(h.key,h),l=h.first,f--}for(;g&&f;){const h=B[f-1],C=t[g-1],T=h.key,S=C.key;h===C?(l=h.first,g--,f--):d.has(S)?!s.has(T)||y.has(T)?_(h):p.has(S)?g--:m.get(T)>m.get(S)?(p.add(T),_(h)):(y.add(S),g--):(c(C,s),g--)}for(;g--;){const h=t[g];d.has(h.key)||c(h,s)}for(;f;)_(B[f-1]);return B}function ve(t,e,r,i){const{fragment:n,on_mount:o,on_destroy:s,after_update:u}=t.$$;n&&n.m(e,r),i||Et(()=>{const c=o.map(Jt).filter(we);s?s.push(...c):Y(c),t.$$.on_mount=[]}),u.forEach(Et)}function Pe(t,e){const r=t.$$;r.fragment!==null&&(Y(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Le(t,e){t.$$.dirty[0]===-1&&(H.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,r,i,n,o,s,u=[-1]){const c=J;V(t);const a=t.$$={fragment:null,ctx:null,props:o,update:rt,not_equal:n,bound:Pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Pt(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let l=!1;if(a.ctx=r?r(t,e.props||{},(b,g,...f)=>{const w=f.length?f[0]:g;return a.ctx&&n(a.ctx[b],a.ctx[b]=w)&&(!a.skip_bound&&a.bound[b]&&a.bound[b](w),l&&Le(t,b)),g}):[],a.update(),l=!0,Y(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const b=Ee(e.target);a.fragment&&a.fragment.l(b),b.forEach(St)}else a.fragment&&a.fragment.c();e.intro&&Qt(t.$$.fragment),ve(t,e.target,e.anchor,e.customElement),qt()}V(c)}class ke{$destroy(){Pe(this,1),this.$destroy=rt}$on(e,r){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q={},$e=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Wt={},A={};let At;const De=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};A.getSymbolTotalCodewords=function(e){return De[e]};A.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};A.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');At=e};A.isKanjiModeEnabled=function(){return typeof At<"u"};A.toSJIS=function(e){return At(e)};var st={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},t.from=function(i,n){if(t.isValid(i))return i;try{return e(i)}catch{return n}}})(st);function xt(){this.buffer=[],this.length=0}xt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Fe=xt;function Q(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Q.prototype.set=function(t,e,r,i){const n=t*this.size+e;this.data[n]=r,i&&(this.reservedBit[n]=!0)};Q.prototype.get=function(t,e){return this.data[t*this.size+e]};Q.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};Q.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Ue=Q,Xt={};(function(t){const e=A.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const n=Math.floor(i/7)+2,o=e(i),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,u=[o-7];for(let c=1;c<n-1;c++)u[c]=u[c-1]-s;return u.push(6),u.reverse()},t.getPositions=function(i){const n=[],o=t.getRowColCoords(i),s=o.length;for(let u=0;u<s;u++)for(let c=0;c<s;c++)u===0&&c===0||u===0&&c===s-1||u===s-1&&c===0||n.push([o[u],o[c]]);return n}})(Xt);var Zt={};const je=A.getSymbolSize,kt=7;Zt.getPositions=function(e){const r=je(e);return[[0,0],[r-kt,0],[0,r-kt]]};var te={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},t.from=function(n){return t.isValid(n)?parseInt(n,10):void 0},t.getPenaltyN1=function(n){const o=n.size;let s=0,u=0,c=0,a=null,l=null;for(let b=0;b<o;b++){u=c=0,a=l=null;for(let g=0;g<o;g++){let f=n.get(b,g);f===a?u++:(u>=5&&(s+=e.N1+(u-5)),a=f,u=1),f=n.get(g,b),f===l?c++:(c>=5&&(s+=e.N1+(c-5)),l=f,c=1)}u>=5&&(s+=e.N1+(u-5)),c>=5&&(s+=e.N1+(c-5))}return s},t.getPenaltyN2=function(n){const o=n.size;let s=0;for(let u=0;u<o-1;u++)for(let c=0;c<o-1;c++){const a=n.get(u,c)+n.get(u,c+1)+n.get(u+1,c)+n.get(u+1,c+1);(a===4||a===0)&&s++}return s*e.N2},t.getPenaltyN3=function(n){const o=n.size;let s=0,u=0,c=0;for(let a=0;a<o;a++){u=c=0;for(let l=0;l<o;l++)u=u<<1&2047|n.get(a,l),l>=10&&(u===1488||u===93)&&s++,c=c<<1&2047|n.get(l,a),l>=10&&(c===1488||c===93)&&s++}return s*e.N3},t.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let c=0;c<s;c++)o+=n.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function r(i,n,o){switch(i){case t.Patterns.PATTERN000:return(n+o)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(n+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return n*o%2+n*o%3===0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(n,o){const s=o.size;for(let u=0;u<s;u++)for(let c=0;c<s;c++)o.isReserved(c,u)||o.xor(c,u,r(n,c,u))},t.getBestMask=function(n,o){const s=Object.keys(t.Patterns).length;let u=0,c=1/0;for(let a=0;a<s;a++){o(a),t.applyMask(a,n);const l=t.getPenaltyN1(n)+t.getPenaltyN2(n)+t.getPenaltyN3(n)+t.getPenaltyN4(n);t.applyMask(a,n),l<c&&(c=l,u=a)}return u}})(te);var ut={};const L=st,tt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],et=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ut.getBlocksCount=function(e,r){switch(r){case L.L:return tt[(e-1)*4+0];case L.M:return tt[(e-1)*4+1];case L.Q:return tt[(e-1)*4+2];case L.H:return tt[(e-1)*4+3];default:return}};ut.getTotalCodewordsCount=function(e,r){switch(r){case L.L:return et[(e-1)*4+0];case L.M:return et[(e-1)*4+1];case L.Q:return et[(e-1)*4+2];case L.H:return et[(e-1)*4+3];default:return}};var ee={},ct={};const K=new Uint8Array(512),ot=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)K[r]=e,ot[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)K[r]=K[r-255]})();ct.log=function(e){if(e<1)throw new Error("log("+e+")");return ot[e]};ct.exp=function(e){return K[e]};ct.mul=function(e,r){return e===0||r===0?0:K[ot[e]+ot[r]]};(function(t){const e=ct;t.mul=function(i,n){const o=new Uint8Array(i.length+n.length-1);for(let s=0;s<i.length;s++)for(let u=0;u<n.length;u++)o[s+u]^=e.mul(i[s],n[u]);return o},t.mod=function(i,n){let o=new Uint8Array(i);for(;o.length-n.length>=0;){const s=o[0];for(let c=0;c<n.length;c++)o[c]^=e.mul(n[c],s);let u=0;for(;u<o.length&&o[u]===0;)u++;o=o.slice(u)}return o},t.generateECPolynomial=function(i){let n=new Uint8Array([1]);for(let o=0;o<i;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}})(ee);const ne=ee;function It(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}It.prototype.initialize=function(e){this.degree=e,this.genPoly=ne.generateECPolynomial(this.degree)};It.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const i=ne.mod(r,this.genPoly),n=this.degree-i.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(i,n),o}return i};var Oe=It,re={},R={},Nt={};Nt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var v={};const oe="[0-9]+",ze="[A-Z $%*+\\-./:]+";let G="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";G=G.replace(/u/g,"\\u");const He="(?:(?![A-Z0-9 $%*+\\-./:]|"+G+`)(?:.|[\r
]))+`;v.KANJI=new RegExp(G,"g");v.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");v.BYTE=new RegExp(He,"g");v.NUMERIC=new RegExp(oe,"g");v.ALPHANUMERIC=new RegExp(ze,"g");const Ve=new RegExp("^"+G+"$"),Ke=new RegExp("^"+oe+"$"),Je=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");v.testKanji=function(e){return Ve.test(e)};v.testNumeric=function(e){return Ke.test(e)};v.testAlphanumeric=function(e){return Je.test(e)};(function(t){const e=Nt,r=v;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return r.testNumeric(o)?t.NUMERIC:r.testAlphanumeric(o)?t.ALPHANUMERIC:r.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function i(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(o,s){if(t.isValid(o))return o;try{return i(o)}catch{return s}}})(R);(function(t){const e=A,r=ut,i=st,n=R,o=Nt,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=e.getBCHDigit(s);function c(g,f,w){for(let E=1;E<=40;E++)if(f<=t.getCapacity(E,w,g))return E}function a(g,f){return n.getCharCountIndicator(g,f)+4}function l(g,f){let w=0;return g.forEach(function(E){w+=a(E.mode,f)+E.getBitsLength()}),w}function b(g,f){for(let w=1;w<=40;w++)if(l(g,w)<=t.getCapacity(w,f,n.MIXED))return w}t.from=function(f,w){return o.isValid(f)?parseInt(f,10):w},t.getCapacity=function(f,w,E){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof E>"u"&&(E=n.BYTE);const B=e.getSymbolTotalCodewords(f),d=r.getTotalCodewordsCount(f,w),m=(B-d)*8;if(E===n.MIXED)return m;const y=m-a(E,f);switch(E){case n.NUMERIC:return Math.floor(y/10*3);case n.ALPHANUMERIC:return Math.floor(y/11*2);case n.KANJI:return Math.floor(y/13);case n.BYTE:default:return Math.floor(y/8)}},t.getBestVersionForData=function(f,w){let E;const B=i.from(w,i.M);if(Array.isArray(f)){if(f.length>1)return b(f,B);if(f.length===0)return 1;E=f[0]}else E=f;return c(E.mode,E.getLength(),B)},t.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;e.getBCHDigit(w)-u>=0;)w^=s<<e.getBCHDigit(w)-u;return f<<12|w}})(re);var ie={};const Ct=A,se=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Ge=1<<14|1<<12|1<<10|1<<4|1<<1,$t=Ct.getBCHDigit(se);ie.getEncodedBits=function(e,r){const i=e.bit<<3|r;let n=i<<10;for(;Ct.getBCHDigit(n)-$t>=0;)n^=se<<Ct.getBCHDigit(n)-$t;return(i<<10|n)^Ge};var ue={};const Ye=R;function D(t){this.mode=Ye.NUMERIC,this.data=t.toString()}D.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(e){let r,i,n;for(r=0;r+3<=this.data.length;r+=3)i=this.data.substr(r,3),n=parseInt(i,10),e.put(n,10);const o=this.data.length-r;o>0&&(i=this.data.substr(r),n=parseInt(i,10),e.put(n,o*3+1))};var qe=D;const Qe=R,dt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function F(t){this.mode=Qe.ALPHANUMERIC,this.data=t}F.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let i=dt.indexOf(this.data[r])*45;i+=dt.indexOf(this.data[r+1]),e.put(i,11)}this.data.length%2&&e.put(dt.indexOf(this.data[r]),6)};var We=F,xe=function(e){for(var r=[],i=e.length,n=0;n<i;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319&&i>n+1){var s=e.charCodeAt(n+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,n+=1)}if(o<128){r.push(o);continue}if(o<2048){r.push(o>>6|192),r.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){r.push(o>>12|224),r.push(o>>6&63|128),r.push(o&63|128);continue}if(o>=65536&&o<=1114111){r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(o&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const Xe=xe,Ze=R;function U(t){this.mode=Ze.BYTE,typeof t=="string"&&(t=Xe(t)),this.data=new Uint8Array(t)}U.getBitsLength=function(e){return e*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var tn=U;const en=R,nn=A;function j(t){this.mode=en.KANJI,this.data=t}j.getBitsLength=function(e){return e*13};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=nn.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var rn=j,ce={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,i,n){var o={},s={};s[i]=0;var u=e.PriorityQueue.make();u.push(i,0);for(var c,a,l,b,g,f,w,E,B;!u.empty();){c=u.pop(),a=c.value,b=c.cost,g=r[a]||{};for(l in g)g.hasOwnProperty(l)&&(f=g[l],w=b+f,E=s[l],B=typeof s[l]>"u",(B||E>w)&&(s[l]=w,u.push(l,w),o[l]=a))}if(typeof n<"u"&&typeof s[n]>"u"){var d=["Could not find a path from ",i," to ",n,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(r,i){for(var n=[],o=i;o;)n.push(o),r[o],o=r[o];return n.reverse(),n},find_path:function(r,i,n){var o=e.single_source_shortest_paths(r,i,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(r){var i=e.PriorityQueue,n={},o;r=r||{};for(o in i)i.hasOwnProperty(o)&&(n[o]=i[o]);return n.queue=[],n.sorter=r.sorter||i.default_sorter,n},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var n={value:r,cost:i};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(ce);(function(t){const e=R,r=qe,i=We,n=tn,o=rn,s=v,u=A,c=ce.exports;function a(d){return unescape(encodeURIComponent(d)).length}function l(d,m,y){const p=[];let _;for(;(_=d.exec(y))!==null;)p.push({data:_[0],index:_.index,mode:m,length:_[0].length});return p}function b(d){const m=l(s.NUMERIC,e.NUMERIC,d),y=l(s.ALPHANUMERIC,e.ALPHANUMERIC,d);let p,_;return u.isKanjiModeEnabled()?(p=l(s.BYTE,e.BYTE,d),_=l(s.KANJI,e.KANJI,d)):(p=l(s.BYTE_KANJI,e.BYTE,d),_=[]),m.concat(y,p,_).sort(function(C,T){return C.index-T.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function g(d,m){switch(m){case e.NUMERIC:return r.getBitsLength(d);case e.ALPHANUMERIC:return i.getBitsLength(d);case e.KANJI:return o.getBitsLength(d);case e.BYTE:return n.getBitsLength(d)}}function f(d){return d.reduce(function(m,y){const p=m.length-1>=0?m[m.length-1]:null;return p&&p.mode===y.mode?(m[m.length-1].data+=y.data,m):(m.push(y),m)},[])}function w(d){const m=[];for(let y=0;y<d.length;y++){const p=d[y];switch(p.mode){case e.NUMERIC:m.push([p,{data:p.data,mode:e.ALPHANUMERIC,length:p.length},{data:p.data,mode:e.BYTE,length:p.length}]);break;case e.ALPHANUMERIC:m.push([p,{data:p.data,mode:e.BYTE,length:p.length}]);break;case e.KANJI:m.push([p,{data:p.data,mode:e.BYTE,length:a(p.data)}]);break;case e.BYTE:m.push([{data:p.data,mode:e.BYTE,length:a(p.data)}])}}return m}function E(d,m){const y={},p={start:{}};let _=["start"];for(let h=0;h<d.length;h++){const C=d[h],T=[];for(let S=0;S<C.length;S++){const N=C[S],O=""+h+S;T.push(O),y[O]={node:N,lastCount:0},p[O]={};for(let lt=0;lt<_.length;lt++){const P=_[lt];y[P]&&y[P].node.mode===N.mode?(p[P][O]=g(y[P].lastCount+N.length,N.mode)-g(y[P].lastCount,N.mode),y[P].lastCount+=N.length):(y[P]&&(y[P].lastCount=N.length),p[P][O]=g(N.length,N.mode)+4+e.getCharCountIndicator(N.mode,m))}}_=T}for(let h=0;h<_.length;h++)p[_[h]].end=0;return{map:p,table:y}}function B(d,m){let y;const p=e.getBestModeForData(d);if(y=e.from(m,p),y!==e.BYTE&&y.bit<p.bit)throw new Error('"'+d+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(p));switch(y===e.KANJI&&!u.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new r(d);case e.ALPHANUMERIC:return new i(d);case e.KANJI:return new o(d);case e.BYTE:return new n(d)}}t.fromArray=function(m){return m.reduce(function(y,p){return typeof p=="string"?y.push(B(p,null)):p.data&&y.push(B(p.data,p.mode)),y},[])},t.fromString=function(m,y){const p=b(m,u.isKanjiModeEnabled()),_=w(p),h=E(_,y),C=c.find_path(h.map,"start","end"),T=[];for(let S=1;S<C.length-1;S++)T.push(h.table[C[S]].node);return t.fromArray(f(T))},t.rawSplit=function(m){return t.fromArray(b(m,u.isKanjiModeEnabled()))}})(ue);const at=A,gt=st,on=Fe,sn=Ue,un=Xt,cn=Zt,_t=te,Tt=ut,an=Oe,it=re,ln=ie,fn=R,ht=ue;function dn(t,e){const r=t.size,i=cn.getPositions(e);for(let n=0;n<i.length;n++){const o=i[n][0],s=i[n][1];for(let u=-1;u<=7;u++)if(!(o+u<=-1||r<=o+u))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(u>=0&&u<=6&&(c===0||c===6)||c>=0&&c<=6&&(u===0||u===6)||u>=2&&u<=4&&c>=2&&c<=4?t.set(o+u,s+c,!0,!0):t.set(o+u,s+c,!1,!0))}}function gn(t){const e=t.size;for(let r=8;r<e-8;r++){const i=r%2===0;t.set(r,6,i,!0),t.set(6,r,i,!0)}}function hn(t,e){const r=un.getPositions(e);for(let i=0;i<r.length;i++){const n=r[i][0],o=r[i][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?t.set(n+s,o+u,!0,!0):t.set(n+s,o+u,!1,!0)}}function mn(t,e){const r=t.size,i=it.getEncodedBits(e);let n,o,s;for(let u=0;u<18;u++)n=Math.floor(u/3),o=u%3+r-8-3,s=(i>>u&1)===1,t.set(n,o,s,!0),t.set(o,n,s,!0)}function mt(t,e,r){const i=t.size,n=ln.getEncodedBits(e,r);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(i-15+o,8,s,!0),o<8?t.set(8,i-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(i-8,8,1,!0)}function yn(t,e){const r=t.size;let i=-1,n=r-1,o=7,s=0;for(let u=r-1;u>0;u-=2)for(u===6&&u--;;){for(let c=0;c<2;c++)if(!t.isReserved(n,u-c)){let a=!1;s<e.length&&(a=(e[s]>>>o&1)===1),t.set(n,u-c,a),o--,o===-1&&(s++,o=7)}if(n+=i,n<0||r<=n){n-=i,i=-i;break}}}function wn(t,e,r){const i=new on;r.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),fn.getCharCountIndicator(c.mode,t)),c.write(i)});const n=at.getSymbolTotalCodewords(t),o=Tt.getTotalCodewordsCount(t,e),s=(n-o)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const u=(s-i.getLengthInBits())/8;for(let c=0;c<u;c++)i.put(c%2?17:236,8);return pn(i,t,e)}function pn(t,e,r){const i=at.getSymbolTotalCodewords(e),n=Tt.getTotalCodewordsCount(e,r),o=i-n,s=Tt.getBlocksCount(e,r),u=i%s,c=s-u,a=Math.floor(i/s),l=Math.floor(o/s),b=l+1,g=a-l,f=new an(g);let w=0;const E=new Array(s),B=new Array(s);let d=0;const m=new Uint8Array(t.buffer);for(let C=0;C<s;C++){const T=C<c?l:b;E[C]=m.slice(w,w+T),B[C]=f.encode(E[C]),w+=T,d=Math.max(d,T)}const y=new Uint8Array(i);let p=0,_,h;for(_=0;_<d;_++)for(h=0;h<s;h++)_<E[h].length&&(y[p++]=E[h][_]);for(_=0;_<g;_++)for(h=0;h<s;h++)y[p++]=B[h][_];return y}function bn(t,e,r,i){let n;if(Array.isArray(t))n=ht.fromArray(t);else if(typeof t=="string"){let a=e;if(!a){const l=ht.rawSplit(t);a=it.getBestVersionForData(l,r)}n=ht.fromString(t,a||40)}else throw new Error("Invalid data");const o=it.getBestVersionForData(n,r);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=wn(e,r,n),u=at.getSymbolSize(e),c=new sn(u);return dn(c,e),gn(c),hn(c,e),mt(c,r,0),e>=7&&mn(c,e),yn(c,s),isNaN(i)&&(i=_t.getBestMask(c,mt.bind(null,c,r))),_t.applyMask(i,c),mt(c,r,i),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:i,segments:n}}Wt.create=function(e,r){if(typeof e>"u"||e==="")throw new Error("No input text");let i=gt.M,n,o;return typeof r<"u"&&(i=gt.from(r.errorCorrectionLevel,gt.M),n=it.from(r.version),o=_t.from(r.maskPattern),r.toSJISFunc&&at.setToSJISFunction(r.toSJISFunc)),bn(e,n,i,o)};var ae={},Mt={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(o){return[o,o]}))),i.length===6&&i.push("F","F");const n=parseInt(i.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const n=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,o=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,n){return n.width&&n.width>=i+n.margin*2?n.width/(i+n.margin*2):n.scale},t.getImageWidth=function(i,n){const o=t.getScale(i,n);return Math.floor((i+n.margin*2)*o)},t.qrToImageData=function(i,n,o){const s=n.modules.size,u=n.modules.data,c=t.getScale(s,o),a=Math.floor((s+o.margin*2)*c),l=o.margin*c,b=[o.color.light,o.color.dark];for(let g=0;g<a;g++)for(let f=0;f<a;f++){let w=(g*a+f)*4,E=o.color.light;if(g>=l&&f>=l&&g<a-l&&f<a-l){const B=Math.floor((g-l)/c),d=Math.floor((f-l)/c);E=b[u[B*s+d]?1:0]}i[w++]=E.r,i[w++]=E.g,i[w++]=E.b,i[w]=E.a}}})(Mt);(function(t){const e=Mt;function r(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,u){let c=u,a=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(a=i()),c=e.getOptions(c);const l=e.getImageWidth(o.modules.size,c),b=a.getContext("2d"),g=b.createImageData(l,l);return e.qrToImageData(g.data,o,c),r(b,a,l),b.putImageData(g,0,0),a},t.renderToDataURL=function(o,s,u){let c=u;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const a=t.render(o,s,c),l=c.type||"image/png",b=c.rendererOpts||{};return a.toDataURL(l,b.quality)}})(ae);var le={};const En=Mt;function Dt(t,e){const r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function yt(t,e,r){let i=t+e;return typeof r<"u"&&(i+=" "+r),i}function Cn(t,e,r){let i="",n=0,o=!1,s=0;for(let u=0;u<t.length;u++){const c=Math.floor(u%e),a=Math.floor(u/e);!c&&!o&&(o=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(i+=o?yt("M",c+r,.5+a+r):yt("m",n,0),n=0,o=!1),c+1<e&&t[u+1]||(i+=yt("h",s),s=0)):n++}return i}le.render=function(e,r,i){const n=En.getOptions(r),o=e.modules.size,s=e.modules.data,u=o+n.margin*2,c=n.color.light.a?"<path "+Dt(n.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",a="<path "+Dt(n.color.dark,"stroke")+' d="'+Cn(s,o,n.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',b=n.width?'width="'+n.width+'" height="'+n.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+b+l+' shape-rendering="crispEdges">'+c+a+`</svg>
`;return typeof i=="function"&&i(null,g),g};const _n=$e,Bt=Wt,fe=ae,Tn=le;function vt(t,e,r,i,n){const o=[].slice.call(arguments,1),s=o.length,u=typeof o[s-1]=="function";if(!u&&!_n())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(n=r,r=e,e=i=void 0):s===3&&(e.getContext&&typeof n>"u"?(n=i,i=void 0):(n=i,i=r,r=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=e,e=i=void 0):s===2&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(c,a){try{const l=Bt.create(r,i);c(t(l,e,i))}catch(l){a(l)}})}try{const c=Bt.create(r,i);n(null,t(c,e,i))}catch(c){n(c)}}q.create=Bt.create;q.toCanvas=vt.bind(null,fe.render);q.toDataURL=vt.bind(null,fe.renderToDataURL);q.toString=vt.bind(null,function(t,e,r){return Tn.render(t,r)});function Bn(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var de=Bn,Sn=typeof Z=="object"&&Z&&Z.Object===Object&&Z,An=Sn,In=An,Nn=typeof self=="object"&&self&&self.Object===Object&&self,Mn=In||Nn||Function("return this")(),ge=Mn,vn=ge,Pn=function(){return vn.Date.now()},Ln=Pn,Rn=/\s/;function kn(t){for(var e=t.length;e--&&Rn.test(t.charAt(e)););return e}var $n=kn,Dn=$n,Fn=/^\s+/;function Un(t){return t&&t.slice(0,Dn(t)+1).replace(Fn,"")}var jn=Un,On=ge,zn=On.Symbol,he=zn,Ft=he,me=Object.prototype,Hn=me.hasOwnProperty,Vn=me.toString,z=Ft?Ft.toStringTag:void 0;function Kn(t){var e=Hn.call(t,z),r=t[z];try{t[z]=void 0;var i=!0}catch{}var n=Vn.call(t);return i&&(e?t[z]=r:delete t[z]),n}var Jn=Kn,Gn=Object.prototype,Yn=Gn.toString;function qn(t){return Yn.call(t)}var Qn=qn,Ut=he,Wn=Jn,xn=Qn,Xn="[object Null]",Zn="[object Undefined]",jt=Ut?Ut.toStringTag:void 0;function tr(t){return t==null?t===void 0?Zn:Xn:jt&&jt in Object(t)?Wn(t):xn(t)}var er=tr;function nr(t){return t!=null&&typeof t=="object"}var rr=nr,or=er,ir=rr,sr="[object Symbol]";function ur(t){return typeof t=="symbol"||ir(t)&&or(t)==sr}var cr=ur,ar=jn,Ot=de,lr=cr,zt=0/0,fr=/^[-+]0x[0-9a-f]+$/i,dr=/^0b[01]+$/i,gr=/^0o[0-7]+$/i,hr=parseInt;function mr(t){if(typeof t=="number")return t;if(lr(t))return zt;if(Ot(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ot(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=ar(t);var r=dr.test(t);return r||gr.test(t)?hr(t.slice(2),r?2:8):fr.test(t)?zt:+t}var yr=mr,wr=de,wt=Ln,Ht=yr,pr="Expected a function",br=Math.max,Er=Math.min;function Cr(t,e,r){var i,n,o,s,u,c,a=0,l=!1,b=!1,g=!0;if(typeof t!="function")throw new TypeError(pr);e=Ht(e)||0,wr(r)&&(l=!!r.leading,b="maxWait"in r,o=b?br(Ht(r.maxWait)||0,e):o,g="trailing"in r?!!r.trailing:g);function f(h){var C=i,T=n;return i=n=void 0,a=h,s=t.apply(T,C),s}function w(h){return a=h,u=setTimeout(d,e),l?f(h):s}function E(h){var C=h-c,T=h-a,S=e-C;return b?Er(S,o-T):S}function B(h){var C=h-c,T=h-a;return c===void 0||C>=e||C<0||b&&T>=o}function d(){var h=wt();if(B(h))return m(h);u=setTimeout(d,E(h))}function m(h){return u=void 0,g&&i?f(h):(i=n=void 0,s)}function y(){u!==void 0&&clearTimeout(u),a=0,i=c=n=u=void 0}function p(){return u===void 0?s:m(wt())}function _(){var h=wt(),C=B(h);if(i=arguments,n=this,c=h,C){if(u===void 0)return w(c);if(b)return clearTimeout(u),u=setTimeout(d,e),f(c)}return u===void 0&&(u=setTimeout(d,e)),s}return _.cancel=y,_.flush=p,_}var _r=Cr;function Vt(t,e,r){const i=t.slice();return i[10]=e[r],i[12]=r,i}function Kt(t,e){let r,i=e[10]+"",n;return{key:t,first:null,c(){r=k("span"),n=Yt(i),I(r,"class","svelte-jqchu0"),$(r,"n",e[3](e[10])),$(r,"s",e[4](e[10])),this.first=r},m(o,s){Gt(o,r,s),M(r,n)},p(o,s){e=o,s&1&&i!==(i=e[10]+"")&&Ce(n,i),s&9&&$(r,"n",e[3](e[10])),s&17&&$(r,"s",e[4](e[10]))},d(o){o&&St(r)}}}function Tr(t){let e,r,i,n,o,s,u=[],c=new Map,a,l,b,g,f,w,E=t[0];const B=d=>`${d[10]}:${d[12]}`;for(let d=0;d<E.length;d+=1){let m=Vt(t,E,d),y=B(m);c.set(y,u[d]=Kt(y,m))}return{c(){e=k("main"),r=k("p"),r.textContent="Text to format:",i=W(),n=k("textarea"),o=W(),s=k("p");for(let d=0;d<u.length;d+=1)u[d].c();a=W(),l=k("canvas"),b=W(),g=k("a"),g.textContent="Code on GitHub",I(r,"class","svelte-jqchu0"),I(n,"autocomplete","off"),I(n,"spellcheck","false"),I(n,"class","svelte-jqchu0"),I(s,"class","f svelte-jqchu0"),I(l,"class","svelte-jqchu0"),$(l,"h",!t[2]||!t[0]),I(g,"href","https://github.com/Greenheart/dup"),I(g,"target","_blank"),I(g,"rel","noopener"),I(g,"class","svelte-jqchu0"),I(e,"class","svelte-jqchu0")},m(d,m){Gt(d,e,m),M(e,r),M(e,i),M(e,n),Lt(n,t[0]),M(e,o),M(e,s);for(let y=0;y<u.length;y+=1)u[y].m(s,null);M(e,a),M(e,l),t[8](l),M(e,b),M(e,g),f||(w=[x(n,"input",t[6]),x(n,"keydown",t[5]),x(n,"paste",t[5]),x(s,"click",t[7])],f=!0)},p(d,[m]){m&1&&Lt(n,d[0]),m&25&&(E=d[0],u=Me(u,m,B,1,d,E,c,s,Ne,Kt,null,Vt)),m&5&&$(l,"h",!d[2]||!d[0])},i:rt,o:rt,d(d){d&&St(e);for(let m=0;m<u.length;m+=1)u[m].d();t[8](null),f=!1,Y(w)}}}const Br="0123456789";function Sr(t,e,r){const i="!#$%&()*+,-./:;<=>?@[\\]^_{|}~ ",n=f=>Br.includes(f),o=f=>i.includes(f);let s="",u,c=!1;const a=_r(()=>{!s||q.toCanvas(u,s,()=>{r(2,c=!0)})},50);Te(()=>{a()});function l(){s=this.value,r(0,s)}const b=()=>{window.getSelection().selectAllChildren(document.querySelector(".f"))};function g(f){pt[f?"unshift":"push"](()=>{u=f,r(1,u)})}return[s,u,c,n,o,a,l,b,g]}class Ar extends ke{constructor(e){super(),Re(this,e,Sr,Tr,pe,{})}}new Ar({target:document.getElementById("app")});
