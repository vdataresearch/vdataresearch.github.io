var ye=Object.defineProperty,we=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var se=(r,t,e)=>t in r?ye(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,X=(r,t)=>{for(var e in t||(t={}))Ie.call(t,e)&&se(r,e,t[e]);if(ae)for(var e of ae(t))Ve.call(t,e)&&se(r,e,t[e]);return r},Y=(r,t)=>we(r,Ee(t));import{_ as $e,a as De,b as Le}from"../../chunks/index-79c3c4ed.js";import{_ as Oe,a as Te,b as Ne,C as qe}from"../../chunks/CardOutput-ce2fbbcb.js";import{S as Me,i as Se,s as Ce,w as F,k as L,e as v,t as M,x as P,m as O,c as b,a as w,h as S,d as f,b as g,y as j,g as V,T as m,o as C,p as ge,q as H,B as U,V as He,n as ke,$ as oe,L as B,a0 as re,a1 as We,a2 as Ae,a3 as Be,I as x,a4 as ne,a5 as Fe,l as z,a6 as Pe,a7 as je,N as ie,j as R,a8 as Q,U as G,W as J}from"../../chunks/vendor-9afc8e62.js";import{H as Ue}from"../../chunks/Head-6f288903.js";import{p as ze}from"../../chunks/stores-6b5d310d.js";function ce(r,t,e){const a=r.slice();return a[12]=t[e],a}function ue(r,t,e){const a=r.slice();return a[16]=t[e],a[18]=e,a}function _e(r,t,e){const a=r.slice();return a[16]=t[e],a[18]=e,a}function fe(r,t,e){const a=r.slice();return a[16]=t[e],a[18]=e,a}function de(r,t,e){const a=r.slice();return a[16]=t[e],a[18]=e,a}function Qe(r){let t,e,a;return{c(){t=v("div"),e=v("h3"),a=M("No ouputs yet!"),this.h()},l(s){t=b(s,"DIV",{class:!0});var o=w(t);e=b(o,"H3",{class:!0});var l=w(e);a=S(l,"No ouputs yet!"),l.forEach(f),o.forEach(f),this.h()},h(){g(e,"class","text-muted fw-bold my-5"),g(t,"class","col-12")},m(s,o){V(s,t,o),m(t,e),m(e,a)},p:B,i:B,o:B,d(s){s&&f(t)}}}function Re(r){let t,e,a,s,o,l,n,c,i,d,y,E,$,p,_,u=[],I=new Map,q;l=new re({props:{query:"(min-width: 768px)",$$slots:{default:[Ke,({matches:h})=>({15:h}),({matches:h})=>h?32768:0]},$$scope:{ctx:r}}}),E=new re({props:{query:"(min-width: 768px)",$$slots:{default:[Ze,({matches:h})=>({15:h}),({matches:h})=>h?32768:0]},$$scope:{ctx:r}}});let T=r[5];const W=h=>h[12].title;for(let h=0;h<T.length;h+=1){let k=ce(r,T,h),D=W(k);I.set(D,u[h]=be(D,k))}return{c(){t=v("div"),e=v("div"),a=v("h4"),s=M("Filter by type"),o=L(),F(l.$$.fragment),n=L(),c=v("div"),i=v("h4"),d=M("Filter by work packages"),y=L(),F(E.$$.fragment),$=L(),p=v("div"),_=v("div");for(let h=0;h<u.length;h+=1)u[h].c();this.h()},l(h){t=b(h,"DIV",{class:!0});var k=w(t);e=b(k,"DIV",{class:!0});var D=w(e);a=b(D,"H4",{class:!0});var A=w(a);s=S(A,"Filter by type"),A.forEach(f),o=O(D),P(l.$$.fragment,D),D.forEach(f),n=O(k),c=b(k,"DIV",{class:!0});var N=w(c);i=b(N,"H4",{class:!0});var ee=w(i);d=S(ee,"Filter by work packages"),ee.forEach(f),y=O(N),P(E.$$.fragment,N),N.forEach(f),k.forEach(f),$=O(h),p=b(h,"DIV",{class:!0});var te=w(p);_=b(te,"DIV",{class:!0});var le=w(_);for(let K=0;K<u.length;K+=1)u[K].l(le);le.forEach(f),te.forEach(f),this.h()},h(){g(a,"class","text-muted fw-bold"),g(e,"class","mb-4"),g(i,"class","text-muted fw-bold"),g(c,"class","mb-4 pt-2 border-top border-secondary"),g(t,"class","col-md-3 col-12"),g(_,"class","row"),g(p,"class","col-12 col-md-9 border-start border-secondary")},m(h,k){V(h,t,k),m(t,e),m(e,a),m(a,s),m(e,o),j(l,e,null),m(t,n),m(t,c),m(c,i),m(i,d),m(c,y),j(E,c,null),V(h,$,k),V(h,p,k),m(p,_);for(let D=0;D<u.length;D+=1)u[D].m(_,null);q=!0},p(h,k){const D={};k&4227082&&(D.$$scope={dirty:k,ctx:h}),l.$set(D);const A={};if(k&4227092&&(A.$$scope={dirty:k,ctx:h}),E.$set(A),k&32){T=h[5],ke();for(let N=0;N<u.length;N+=1)u[N].r();u=Fe(u,k,W,1,h,T,I,_,Pe,be,null,ce);for(let N=0;N<u.length;N+=1)u[N].a();ge()}},i(h){if(!q){H(l.$$.fragment,h),H(E.$$.fragment,h);for(let k=0;k<T.length;k+=1)H(u[k]);q=!0}},o(h){C(l.$$.fragment,h),C(E.$$.fragment,h);for(let k=0;k<u.length;k+=1)C(u[k]);q=!1},d(h){h&&f(t),U(l),U(E),h&&f($),h&&f(p);for(let k=0;k<u.length;k+=1)u[k].d()}}}function Ge(r){let t,e,a,s,o=r[1],l=[];for(let n=0;n<o.length;n+=1)l[n]=he(fe(r,o,n));return{c(){t=v("div"),e=v("select");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"DIV",{});var c=w(t);e=b(c,"SELECT",{class:!0});var i=w(e);for(let d=0;d<l.length;d+=1)l[d].l(i);i.forEach(f),c.forEach(f),this.h()},h(){g(e,"class","form-select bg-secondary text-white Manrope-Variable fw-bold border-secondary"),r[3]===void 0&&x(()=>r[9].call(e))},m(n,c){V(n,t,c),m(t,e);for(let i=0;i<l.length;i+=1)l[i].m(e,null);Q(e,r[3]),a||(s=G(e,"change",r[9]),a=!0)},p(n,c){if(c&2){o=n[1];let i;for(i=0;i<o.length;i+=1){const d=fe(n,o,i);l[i]?l[i].p(d,c):(l[i]=he(d),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=o.length}c&10&&Q(e,n[3])},d(n){n&&f(t),J(l,n),a=!1,s()}}}function Je(r){let t,e=r[1],a=[];for(let s=0;s<e.length;s+=1)a[s]=pe(de(r,e,s));return{c(){t=v("div");for(let s=0;s<a.length;s+=1)a[s].c()},l(s){t=b(s,"DIV",{});var o=w(t);for(let l=0;l<a.length;l+=1)a[l].l(o);o.forEach(f)},m(s,o){V(s,t,o);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(s,o){if(o&10){e=s[1];let l;for(l=0;l<e.length;l+=1){const n=de(s,e,l);a[l]?a[l].p(n,o):(a[l]=pe(n),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=e.length}},d(s){s&&f(t),J(a,s)}}}function he(r){let t,e=r[16]+"",a,s,o;return{c(){t=v("option"),a=M(e),s=L(),this.h()},l(l){t=b(l,"OPTION",{});var n=w(t);a=S(n,e),s=O(n),n.forEach(f),this.h()},h(){t.__value=o=r[16],t.value=t.__value},m(l,n){V(l,t,n),m(t,a),m(t,s)},p(l,n){n&2&&e!==(e=l[16]+"")&&R(a,e),n&2&&o!==(o=l[16])&&(t.__value=o,t.value=t.__value)},d(l){l&&f(t)}}}function pe(r){let t,e,a,s,o,l,n,c=r[16]+"",i,d,y,E,$;return{c(){t=v("div"),e=v("input"),o=L(),l=v("label"),n=v("small"),i=M(c),y=L(),this.h()},l(p){t=b(p,"DIV",{class:!0});var _=w(t);e=b(_,"INPUT",{type:!0,class:!0,name:!0,id:!0}),o=O(_),l=b(_,"LABEL",{class:!0,for:!0});var u=w(l);n=b(u,"SMALL",{});var I=w(n);i=S(I,c),I.forEach(f),u.forEach(f),y=O(_),_.forEach(f),this.h()},h(){g(e,"type","radio"),g(e,"class","form-check-input"),g(e,"name","options-type"),g(e,"id",a=`option-type-${r[18]}`),e.__value=s=r[16],e.value=e.__value,r[8][0].push(e),g(l,"class","form-check-label Manrope-Variable fw-bold"),g(l,"for",d=`option-type-${r[18]}`),g(t,"class","form-check")},m(p,_){V(p,t,_),m(t,e),e.checked=e.__value===r[3],m(t,o),m(t,l),m(l,n),m(n,i),m(t,y),E||($=G(e,"change",r[7]),E=!0)},p(p,_){_&2&&s!==(s=p[16])&&(e.__value=s,e.value=e.__value),_&10&&(e.checked=e.__value===p[3]),_&2&&c!==(c=p[16]+"")&&R(i,c)},d(p){p&&f(t),r[8][0].splice(r[8][0].indexOf(e),1),E=!1,$()}}}function Ke(r){let t;function e(o,l){return o[15]?Je:Ge}let a=e(r),s=a(r);return{c(){s.c(),t=z()},l(o){s.l(o),t=z()},m(o,l){s.m(o,l),V(o,t,l)},p(o,l){a===(a=e(o))&&s?s.p(o,l):(s.d(1),s=a(o),s&&(s.c(),s.m(t.parentNode,t)))},d(o){s.d(o),o&&f(t)}}}function Xe(r){let t,e,a,s,o=r[2],l=[];for(let n=0;n<o.length;n+=1)l[n]=me(ue(r,o,n));return{c(){t=v("div"),e=v("select");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"DIV",{});var c=w(t);e=b(c,"SELECT",{class:!0});var i=w(e);for(let d=0;d<l.length;d+=1)l[d].l(i);i.forEach(f),c.forEach(f),this.h()},h(){g(e,"class","form-select bg-secondary text-white Manrope-Variable fw-bold border-secondary"),r[4]===void 0&&x(()=>r[11].call(e))},m(n,c){V(n,t,c),m(t,e);for(let i=0;i<l.length;i+=1)l[i].m(e,null);Q(e,r[4]),a||(s=G(e,"change",r[11]),a=!0)},p(n,c){if(c&4){o=n[2];let i;for(i=0;i<o.length;i+=1){const d=ue(n,o,i);l[i]?l[i].p(d,c):(l[i]=me(d),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=o.length}c&20&&Q(e,n[4])},d(n){n&&f(t),J(l,n),a=!1,s()}}}function Ye(r){let t,e=r[2],a=[];for(let s=0;s<e.length;s+=1)a[s]=ve(_e(r,e,s));return{c(){t=v("div");for(let s=0;s<a.length;s+=1)a[s].c()},l(s){t=b(s,"DIV",{});var o=w(t);for(let l=0;l<a.length;l+=1)a[l].l(o);o.forEach(f)},m(s,o){V(s,t,o);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(s,o){if(o&20){e=s[2];let l;for(l=0;l<e.length;l+=1){const n=_e(s,e,l);a[l]?a[l].p(n,o):(a[l]=ve(n),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=e.length}},d(s){s&&f(t),J(a,s)}}}function me(r){let t,e=r[16].label+"",a,s,o;return{c(){t=v("option"),a=M(e),s=L(),this.h()},l(l){t=b(l,"OPTION",{});var n=w(t);a=S(n,e),s=O(n),n.forEach(f),this.h()},h(){t.__value=o=r[16].value,t.value=t.__value},m(l,n){V(l,t,n),m(t,a),m(t,s)},p(l,n){n&4&&e!==(e=l[16].label+"")&&R(a,e),n&4&&o!==(o=l[16].value)&&(t.__value=o,t.value=t.__value)},d(l){l&&f(t)}}}function ve(r){let t,e,a,s,o,l,n,c=r[16].label+"",i,d,y,E,$;return{c(){t=v("div"),e=v("input"),o=L(),l=v("label"),n=v("small"),i=M(c),y=L(),this.h()},l(p){t=b(p,"DIV",{class:!0});var _=w(t);e=b(_,"INPUT",{type:!0,class:!0,name:!0,id:!0}),o=O(_),l=b(_,"LABEL",{class:!0,for:!0});var u=w(l);n=b(u,"SMALL",{});var I=w(n);i=S(I,c),I.forEach(f),u.forEach(f),y=O(_),_.forEach(f),this.h()},h(){g(e,"type","radio"),g(e,"class","form-check-input"),g(e,"name","options-wp"),g(e,"id",a=`option-wp-${r[18]}`),e.__value=s=r[16].value,e.value=e.__value,r[8][1].push(e),g(l,"class","form-check-label Manrope-Variable fw-bold"),g(l,"for",d=`option-wp-${r[18]}`),g(t,"class","form-check")},m(p,_){V(p,t,_),m(t,e),e.checked=e.__value===r[4],m(t,o),m(t,l),m(l,n),m(n,i),m(t,y),E||($=G(e,"change",r[10]),E=!0)},p(p,_){_&4&&s!==(s=p[16].value)&&(e.__value=s,e.value=e.__value),_&20&&(e.checked=e.__value===p[4]),_&4&&c!==(c=p[16].label+"")&&R(i,c)},d(p){p&&f(t),r[8][1].splice(r[8][1].indexOf(e),1),E=!1,$()}}}function Ze(r){let t;function e(o,l){return o[15]?Ye:Xe}let a=e(r),s=a(r);return{c(){s.c(),t=z()},l(o){s.l(o),t=z()},m(o,l){s.m(o,l),V(o,t,l)},p(o,l){a===(a=e(o))&&s?s.p(o,l):(s.d(1),s=a(o),s&&(s.c(),s.m(t.parentNode,t)))},d(o){s.d(o),o&&f(t)}}}function be(r,t){let e,a,s,o,l,n=B,c;return a=new qe({props:{output:t[12]}}),{key:r,first:null,c(){e=v("div"),F(a.$$.fragment),s=L(),this.h()},l(i){e=b(i,"DIV",{class:!0});var d=w(e);P(a.$$.fragment,d),s=O(d),d.forEach(f),this.h()},h(){g(e,"class","col-12 col-md-4 mb-4"),this.first=e},m(i,d){V(i,e,d),j(a,e,null),m(e,s),c=!0},p(i,d){t=i;const y={};d&32&&(y.output=t[12]),a.$set(y)},r(){l=e.getBoundingClientRect()},f(){We(e),n(),Ae(e,l)},a(){n(),n=Be(e,l,je,{duration:500})},i(i){c||(H(a.$$.fragment,i),i&&x(()=>{o||(o=ne(e,ie,{duration:500},!0)),o.run(1)}),c=!0)},o(i){C(a.$$.fragment,i),i&&(o||(o=ne(e,ie,{duration:500},!1)),o.run(0)),c=!1},d(i){i&&f(e),U(a),i&&o&&o.end()}}}function xe(r){let t,e,a,s,o,l,n,c,i,d,y,E;t=new Ue({props:{path:r[6].url.pathname,title:"Outputs"}});const $=[Re,Qe],p=[];function _(u,I){return u[0].length?0:1}return d=_(r),y=p[d]=$[d](r),{c(){F(t.$$.fragment),e=L(),a=v("div"),s=v("div"),o=v("div"),l=v("h1"),n=M("Outputs"),c=L(),i=v("div"),y.c(),this.h()},l(u){P(t.$$.fragment,u),e=O(u),a=b(u,"DIV",{class:!0});var I=w(a);s=b(I,"DIV",{class:!0});var q=w(s);o=b(q,"DIV",{class:!0});var T=w(o);l=b(T,"H1",{class:!0});var W=w(l);n=S(W,"Outputs"),W.forEach(f),T.forEach(f),q.forEach(f),c=O(I),i=b(I,"DIV",{class:!0});var h=w(i);y.l(h),h.forEach(f),I.forEach(f),this.h()},h(){g(l,"class","display-1 fw-bold my-3 pb-3 border-bottom border-secondary"),g(o,"class","col-12"),g(s,"class","row"),g(i,"class","row pb-3"),g(a,"class","container")},m(u,I){j(t,u,I),V(u,e,I),V(u,a,I),m(a,s),m(s,o),m(o,l),m(l,n),m(a,c),m(a,i),p[d].m(i,null),E=!0},p(u,[I]){const q={};I&64&&(q.path=u[6].url.pathname),t.$set(q);let T=d;d=_(u),d===T?p[d].p(u,I):(ke(),C(p[T],1,1,()=>{p[T]=null}),ge(),y=p[d],y?y.p(u,I):(y=p[d]=$[d](u),y.c()),H(y,1),y.m(i,null))},i(u){E||(H(t.$$.fragment,u),H(y),E=!0)},o(u){C(t.$$.fragment,u),C(y),E=!1},d(u){U(t,u),u&&f(e),u&&f(a),p[d].d()}}}const it=!0,Z=Object.entries({"/outputs/evento-maggio/index.md":Oe,"/outputs/my-article-title/index.md":Te,"/outputs/my-super-book/index.md":Ne}).map(([r,t])=>Y(X({},t.metadata),{component:t.default})),et=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":$e,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":De,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Le}).map(([r,t])=>Y(X({},t.metadata),{slug:r.replace(/(\/index)?\.md/,"").split("/").pop()}));async function ct({params:r,fetch:t}){return{props:{outputsList:Z,filterType:["all",...new Set(Z.map(e=>e.type))],filterWp:[{value:"all",label:"all"},[...new Set(Z.map(e=>e.wp).flat())].map(e=>{const a=et.find(s=>s.slug===e);return{value:e,label:a.title}})].flat()}}}function tt(r,t,e){let a,s;He(r,ze,_=>e(6,s=_));let{outputsList:o}=t,{filterType:l}=t,{filterWp:n}=t,c=l[0],i=n[0].value;const d=[[],[]];function y(){c=this.__value,e(3,c),e(1,l)}function E(){c=oe(this),e(3,c),e(1,l)}function $(){i=this.__value,e(4,i),e(2,n)}function p(){i=oe(this),e(4,i),e(2,n)}return r.$$set=_=>{"outputsList"in _&&e(0,o=_.outputsList),"filterType"in _&&e(1,l=_.filterType),"filterWp"in _&&e(2,n=_.filterWp)},r.$$.update=()=>{r.$$.dirty&25&&e(5,a=o.filter(_=>(c==="all"?!0:_.type===c)&&(i==="all"?!0:_.wp.includes(i))))},[o,l,n,c,i,a,s,y,d,E,$,p]}class ut extends Me{constructor(t){super();Se(this,t,tt,xe,Ce,{outputsList:0,filterType:1,filterWp:2})}}export{ut as default,ct as load,it as prerender};
