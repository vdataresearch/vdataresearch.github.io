var pe=Object.defineProperty,ve=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var x=(l,t,e)=>t in l?pe(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,U=(l,t)=>{for(var e in t||(t={}))be.call(t,e)&&x(l,e,t[e]);if($)for(var e of $(t))ge.call(t,e)&&x(l,e,t[e]);return l},z=(l,t)=>ve(l,me(t));import{_ as ke,a as ye,b as we}from"../../chunks/index-786a0470.js";import{_ as Ee,a as Ie,C as Ve}from"../../chunks/CardOutput-894424b0.js";import{S as De,i as Le,s as Oe,w as oe,k as A,e as y,t as C,x as ie,m as B,c as w,a as V,h as q,d,b as v,y as ne,g as M,H as f,o as j,p as ce,q as N,B as ue,I as Te,n as _e,L as K,T as fe,j as de,K as G}from"../../chunks/vendor-d0bbb509.js";import{H as He}from"../../chunks/Head-f174fb86.js";import{p as Se}from"../../chunks/stores-6bf813ae.js";function ee(l,t,e){const r=l.slice();return r[10]=t[e],r}function te(l,t,e){const r=l.slice();return r[13]=t[e],r[15]=e,r}function le(l,t,e){const r=l.slice();return r[13]=t[e],r[15]=e,r}function We(l){let t,e,r;return{c(){t=y("div"),e=y("h3"),r=C("No ouputs yet!"),this.h()},l(n){t=w(n,"DIV",{class:!0});var i=V(t);e=w(i,"H3",{class:!0});var o=V(e);r=q(o,"No ouputs yet!"),o.forEach(d),i.forEach(d),this.h()},h(){v(e,"class","text-muted fw-bold my-5"),v(t,"class","col-12")},m(n,i){M(n,t,i),f(t,e),f(e,r)},p:K,i:K,o:K,d(n){n&&d(t)}}}function Ae(l){let t,e,r,n,i,o,m,h,p,D,b,O,k,c,u,_,g=l[1],L=[];for(let s=0;s<g.length;s+=1)L[s]=ae(le(l,g,s));let H=l[2],T=[];for(let s=0;s<H.length;s+=1)T[s]=se(te(l,H,s));let F=l[5],E=[];for(let s=0;s<F.length;s+=1)E[s]=re(ee(l,F,s));const he=s=>j(E[s],1,1,()=>{E[s]=null});return{c(){t=y("div"),e=y("div"),r=y("h4"),n=C("Filter by type"),i=A(),o=y("div");for(let s=0;s<L.length;s+=1)L[s].c();m=A(),h=y("div"),p=y("h4"),D=C("Filter by work packages"),b=A(),O=y("div");for(let s=0;s<T.length;s+=1)T[s].c();k=A(),c=y("div"),u=y("div");for(let s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){t=w(s,"DIV",{class:!0});var I=V(t);e=w(I,"DIV",{class:!0});var a=V(e);r=w(a,"H4",{class:!0});var S=V(r);n=q(S,"Filter by type"),S.forEach(d),i=B(a),o=w(a,"DIV",{});var Q=V(o);for(let W=0;W<L.length;W+=1)L[W].l(Q);Q.forEach(d),a.forEach(d),m=B(I),h=w(I,"DIV",{class:!0});var P=V(h);p=w(P,"H4",{class:!0});var R=V(p);D=q(R,"Filter by work packages"),R.forEach(d),b=B(P),O=w(P,"DIV",{});var X=V(O);for(let W=0;W<T.length;W+=1)T[W].l(X);X.forEach(d),P.forEach(d),I.forEach(d),k=B(s),c=w(s,"DIV",{class:!0});var Y=V(c);u=w(Y,"DIV",{class:!0});var Z=V(u);for(let W=0;W<E.length;W+=1)E[W].l(Z);Z.forEach(d),Y.forEach(d),this.h()},h(){v(r,"class","text-muted fw-bold"),v(e,"class","mb-4"),v(p,"class","text-muted fw-bold"),v(h,"class","mb-4 pt-2 border-top border-secondary"),v(t,"class","col-3"),v(u,"class","row"),v(c,"class","col-9 border-start border-secondary")},m(s,I){M(s,t,I),f(t,e),f(e,r),f(r,n),f(e,i),f(e,o);for(let a=0;a<L.length;a+=1)L[a].m(o,null);f(t,m),f(t,h),f(h,p),f(p,D),f(h,b),f(h,O);for(let a=0;a<T.length;a+=1)T[a].m(O,null);M(s,k,I),M(s,c,I),f(c,u);for(let a=0;a<E.length;a+=1)E[a].m(u,null);_=!0},p(s,I){if(I&10){g=s[1];let a;for(a=0;a<g.length;a+=1){const S=le(s,g,a);L[a]?L[a].p(S,I):(L[a]=ae(S),L[a].c(),L[a].m(o,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=g.length}if(I&20){H=s[2];let a;for(a=0;a<H.length;a+=1){const S=te(s,H,a);T[a]?T[a].p(S,I):(T[a]=se(S),T[a].c(),T[a].m(O,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=H.length}if(I&32){F=s[5];let a;for(a=0;a<F.length;a+=1){const S=ee(s,F,a);E[a]?(E[a].p(S,I),N(E[a],1)):(E[a]=re(S),E[a].c(),N(E[a],1),E[a].m(u,null))}for(_e(),a=F.length;a<E.length;a+=1)he(a);ce()}},i(s){if(!_){for(let I=0;I<F.length;I+=1)N(E[I]);_=!0}},o(s){E=E.filter(Boolean);for(let I=0;I<E.length;I+=1)j(E[I]);_=!1},d(s){s&&d(t),G(L,s),G(T,s),s&&d(k),s&&d(c),G(E,s)}}}function ae(l){let t,e,r,n,i,o,m,h=l[13]+"",p,D,b,O,k;return{c(){t=y("div"),e=y("input"),i=A(),o=y("label"),m=y("small"),p=C(h),b=A(),this.h()},l(c){t=w(c,"DIV",{class:!0});var u=V(t);e=w(u,"INPUT",{type:!0,class:!0,name:!0,id:!0}),i=B(u),o=w(u,"LABEL",{class:!0,for:!0});var _=V(o);m=w(_,"SMALL",{});var g=V(m);p=q(g,h),g.forEach(d),_.forEach(d),b=B(u),u.forEach(d),this.h()},h(){v(e,"type","radio"),v(e,"class","form-check-input"),v(e,"name","options-type"),v(e,"id",r=`option-type-${l[15]}`),e.__value=n=l[13],e.value=e.__value,l[8][0].push(e),v(o,"class","form-check-label Manrope-Variable fw-bold"),v(o,"for",D=`option-type-${l[15]}`),v(t,"class","form-check")},m(c,u){M(c,t,u),f(t,e),e.checked=e.__value===l[3],f(t,i),f(t,o),f(o,m),f(m,p),f(t,b),O||(k=fe(e,"change",l[7]),O=!0)},p(c,u){u&2&&n!==(n=c[13])&&(e.__value=n,e.value=e.__value),u&8&&(e.checked=e.__value===c[3]),u&2&&h!==(h=c[13]+"")&&de(p,h)},d(c){c&&d(t),l[8][0].splice(l[8][0].indexOf(e),1),O=!1,k()}}}function se(l){let t,e,r,n,i,o,m,h=l[13].label+"",p,D,b,O,k;return{c(){t=y("div"),e=y("input"),i=A(),o=y("label"),m=y("small"),p=C(h),b=A(),this.h()},l(c){t=w(c,"DIV",{class:!0});var u=V(t);e=w(u,"INPUT",{type:!0,class:!0,name:!0,id:!0}),i=B(u),o=w(u,"LABEL",{class:!0,for:!0});var _=V(o);m=w(_,"SMALL",{});var g=V(m);p=q(g,h),g.forEach(d),_.forEach(d),b=B(u),u.forEach(d),this.h()},h(){v(e,"type","radio"),v(e,"class","form-check-input"),v(e,"name","options-wp"),v(e,"id",r=`option-wp-${l[15]}`),e.__value=n=l[13].value,e.value=e.__value,l[8][1].push(e),v(o,"class","form-check-label Manrope-Variable fw-bold"),v(o,"for",D=`option-wp-${l[15]}`),v(t,"class","form-check")},m(c,u){M(c,t,u),f(t,e),e.checked=e.__value===l[4],f(t,i),f(t,o),f(o,m),f(m,p),f(t,b),O||(k=fe(e,"change",l[9]),O=!0)},p(c,u){u&4&&n!==(n=c[13].value)&&(e.__value=n,e.value=e.__value),u&16&&(e.checked=e.__value===c[4]),u&4&&h!==(h=c[13].label+"")&&de(p,h)},d(c){c&&d(t),l[8][1].splice(l[8][1].indexOf(e),1),O=!1,k()}}}function re(l){let t,e,r,n;return e=new Ve({props:{output:l[10]}}),{c(){t=y("div"),oe(e.$$.fragment),r=A(),this.h()},l(i){t=w(i,"DIV",{class:!0});var o=V(t);ie(e.$$.fragment,o),r=B(o),o.forEach(d),this.h()},h(){v(t,"class","col-4")},m(i,o){M(i,t,o),ne(e,t,null),f(t,r),n=!0},p(i,o){const m={};o&32&&(m.output=i[10]),e.$set(m)},i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){i&&d(t),ue(e)}}}function Be(l){let t,e,r,n,i,o,m,h,p,D,b,O;t=new He({props:{path:l[6].url.pathname,title:"Outputs"}});const k=[Ae,We],c=[];function u(_,g){return _[0].length?0:1}return D=u(l),b=c[D]=k[D](l),{c(){oe(t.$$.fragment),e=A(),r=y("div"),n=y("div"),i=y("div"),o=y("h1"),m=C("Outputs"),h=A(),p=y("div"),b.c(),this.h()},l(_){ie(t.$$.fragment,_),e=B(_),r=w(_,"DIV",{class:!0});var g=V(r);n=w(g,"DIV",{class:!0});var L=V(n);i=w(L,"DIV",{class:!0});var H=V(i);o=w(H,"H1",{class:!0});var T=V(o);m=q(T,"Outputs"),T.forEach(d),H.forEach(d),L.forEach(d),h=B(g),p=w(g,"DIV",{class:!0});var F=V(p);b.l(F),F.forEach(d),g.forEach(d),this.h()},h(){v(o,"class","display-1 fw-bold my-3 pb-3 border-bottom border-secondary"),v(i,"class","col-12"),v(n,"class","row"),v(p,"class","row pb-3"),v(r,"class","container")},m(_,g){ne(t,_,g),M(_,e,g),M(_,r,g),f(r,n),f(n,i),f(i,o),f(o,m),f(r,h),f(r,p),c[D].m(p,null),O=!0},p(_,[g]){const L={};g&64&&(L.path=_[6].url.pathname),t.$set(L);let H=D;D=u(_),D===H?c[D].p(_,g):(_e(),j(c[H],1,1,()=>{c[H]=null}),ce(),b=c[D],b?b.p(_,g):(b=c[D]=k[D](_),b.c()),N(b,1),b.m(p,null))},i(_){O||(N(t.$$.fragment,_),N(b),O=!0)},o(_){j(t.$$.fragment,_),j(b),O=!1},d(_){ue(t,_),_&&d(e),_&&d(r),c[D].d()}}}const ze=!0,J=Object.entries({"/outputs/article/index.md":Ee,"/outputs/book/index.md":Ie}).map(([l,t])=>z(U({},t.metadata),{component:t.default})),Fe=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":ke,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":ye,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":we}).map(([l,t])=>z(U({},t.metadata),{slug:l.replace(/(\/index)?\.md/,"").split("/").pop()}));async function Ke({params:l,fetch:t}){return{props:{outputsList:J,filterType:["all",...J.map(e=>e.type)],filterWp:[{value:"all",label:"all"},[...new Set(J.map(e=>e.wp).flat())].map(e=>{const r=Fe.find(n=>n.slug===e);return{value:e,label:r.title}})].flat()}}}function Me(l,t,e){let r,n;Te(l,Se,k=>e(6,n=k));let{outputsList:i}=t,{filterType:o}=t,{filterWp:m}=t,h=o[0],p=m[0].value;const D=[[],[]];function b(){h=this.__value,e(3,h)}function O(){p=this.__value,e(4,p)}return l.$$set=k=>{"outputsList"in k&&e(0,i=k.outputsList),"filterType"in k&&e(1,o=k.filterType),"filterWp"in k&&e(2,m=k.filterWp)},l.$$.update=()=>{l.$$.dirty&25&&e(5,r=i.filter(k=>(h==="all"?!0:k.type===h)&&(p==="all"?!0:k.wp.includes(p))))},[i,o,m,h,p,r,n,b,D,O]}class Ge extends De{constructor(t){super();Le(this,t,Me,Be,Oe,{outputsList:0,filterType:1,filterWp:2})}}export{Ge as default,Ke as load,ze as prerender};