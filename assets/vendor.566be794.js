function B(){}function P(e){return e()}function q(){return Object.create(null)}function k(e){e.forEach(P)}function H(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function I(e){return Object.keys(e).length===0}function te(e,t){e.appendChild(t)}function ne(e,t,n){e.insertBefore(t,n||null)}function J(e){e.parentNode.removeChild(e)}function se(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function ce(){return K(" ")}function ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function oe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ae(e,t){e.value=t==null?"":t}function fe(e,t,n){e.classList[n?"add":"remove"](t)}let M;function p(e){M=e}const $=[],z=[],x=[],D=[],R=Promise.resolve();let C=!1;function U(){C||(C=!0,R.then(F))}function L(e){x.push(e)}const N=new Set;let v=0;function F(){const e=M;do{for(;v<$.length;){const t=$[v];v++,p(t),V(t.$$)}for(p(null),$.length=0,v=0;z.length;)z.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];N.has(n)||(N.add(n),n())}x.length=0}while($.length);for(;D.length;)D.pop()();C=!1,N.clear(),p(e)}function V(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const W=new Set;function G(e,t){e&&e.i&&(W.delete(e),e.i(t))}function le(e,t){e.d(1),t.delete(e.key)}function ue(e,t,n,i,f,g,r,y,l,s,m,u){let o=e.length,d=g.length,a=o;const E={};for(;a--;)E[e[a].key]=a;const w=[],S=new Map,j=new Map;for(a=d;a--;){const c=u(f,g,a),h=n(c);let _=r.get(h);_?i&&_.p(c,t):(_=s(h,c),_.c()),S.set(h,w[a]=_),h in E&&j.set(h,Math.abs(a-E[h]))}const O=new Set,T=new Set;function A(c){G(c,1),c.m(y,m),r.set(c.key,c),m=c.first,d--}for(;o&&d;){const c=w[d-1],h=e[o-1],_=c.key,b=h.key;c===h?(m=c.first,o--,d--):S.has(b)?!r.has(_)||O.has(_)?A(c):T.has(b)?o--:j.get(_)>j.get(b)?(T.add(_),A(c)):(O.add(b),o--):(l(h,r),o--)}for(;o--;){const c=e[o];S.has(c.key)||l(c,r)}for(;d;)A(w[d-1]);return w}function X(e,t,n,i){const{fragment:f,on_mount:g,on_destroy:r,after_update:y}=e.$$;f&&f.m(t,n),i||L(()=>{const l=g.map(P).filter(H);r?r.push(...l):k(l),e.$$.on_mount=[]}),y.forEach(L)}function Y(e,t){const n=e.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&($.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,i,f,g,r,y=[-1]){const l=M;p(e);const s=e.$$={fragment:null,ctx:null,props:g,update:B,not_equal:f,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:q(),dirty:y,skip_bound:!1,root:t.target||l.$$.root};r&&r(s.root);let m=!1;if(s.ctx=n?n(e,t.props||{},(u,o,...d)=>{const a=d.length?d[0]:o;return s.ctx&&f(s.ctx[u],s.ctx[u]=a)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](a),m&&Z(e,u)),o}):[],s.update(),m=!0,k(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const u=Q(t.target);s.fragment&&s.fragment.l(u),u.forEach(J)}else s.fragment&&s.fragment.c();t.intro&&G(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),F()}p(l)}class he{$destroy(){Y(this,1),this.$destroy=B}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const f=i.indexOf(n);f!==-1&&i.splice(f,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{he as S,oe as a,fe as b,ne as c,te as d,se as e,re as f,J as g,ce as h,de as i,ae as j,le as k,ie as l,B as n,ee as s,K as t,ue as u};