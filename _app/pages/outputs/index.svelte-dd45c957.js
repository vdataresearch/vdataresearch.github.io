var ye=Object.defineProperty,we=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var oe=(i,t,e)=>t in i?ye(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,K=(i,t)=>{for(var e in t||(t={}))Ie.call(t,e)&&oe(i,e,t[e]);if(ae)for(var e of ae(t))Ve.call(t,e)&&oe(i,e,t[e]);return i},X=(i,t)=>we(i,Ee(t));import{_ as $e,a as De,b as Le}from"../../chunks/index-926966d2.js";import{_ as Oe,a as Te,b as Se,c as qe,d as xe,e as Ne,f as Me,g as ze,h as Ce,i as He,j as We,k as Ae,l as Fe,m as Pe,n as je,o as Be,p as Ue,q as Qe,r as Re,s as Ge,t as Je,u as Ke,v as Xe,w as Ye,x as Ze,y as et,z as tt,A as lt}from"../../chunks/index-cb436541.js";import{S as at,i as ot,s as st,w as A,k as L,e as v,t as x,x as F,m as O,c as g,a as w,h as N,d,b,y as P,g as V,T as m,o as M,p as be,q as z,B as j,V as it,n as ke,$ as se,L as W,a0 as ie,a1 as nt,a2 as rt,a3 as _t,I as Z,a4 as ne,a5 as ut,l as B,a6 as ct,a7 as dt,N as re,j as Q,a8 as U,U as R,W as G}from"../../chunks/vendor-9afc8e62.js";import{s as ft}from"../../chunks/utils-a1fb3abe.js";import{C as pt}from"../../chunks/CardOutput-5cc8fb74.js";import{H as ht}from"../../chunks/Head-cffaf879.js";import{p as mt}from"../../chunks/stores-6b5d310d.js";function _e(i,t,e){const a=i.slice();return a[12]=t[e],a}function ue(i,t,e){const a=i.slice();return a[16]=t[e],a[18]=e,a}function ce(i,t,e){const a=i.slice();return a[16]=t[e],a[18]=e,a}function de(i,t,e){const a=i.slice();return a[16]=t[e],a[18]=e,a}function fe(i,t,e){const a=i.slice();return a[16]=t[e],a[18]=e,a}function vt(i){let t,e,a;return{c(){t=v("div"),e=v("h3"),a=x("No ouputs yet!"),this.h()},l(o){t=g(o,"DIV",{class:!0});var s=w(t);e=g(s,"H3",{class:!0});var l=w(e);a=N(l,"No ouputs yet!"),l.forEach(d),s.forEach(d),this.h()},h(){b(e,"class","text-muted fw-bold my-5"),b(t,"class","col-12")},m(o,s){V(o,t,s),m(t,e),m(e,a)},p:W,i:W,o:W,d(o){o&&d(t)}}}function gt(i){let t,e,a,o,s,l,n,_,r,f,y,E,$,h,c,u=[],I=new Map,q;l=new ie({props:{query:"(min-width: 768px)",$$slots:{default:[yt,({matches:p})=>({15:p}),({matches:p})=>p?32768:0]},$$scope:{ctx:i}}}),E=new ie({props:{query:"(min-width: 768px)",$$slots:{default:[It,({matches:p})=>({15:p}),({matches:p})=>p?32768:0]},$$scope:{ctx:i}}});let T=i[5];const C=p=>p[12].title;for(let p=0;p<T.length;p+=1){let k=_e(i,T,p),D=C(k);I.set(D,u[p]=ge(D,k))}return{c(){t=v("div"),e=v("div"),a=v("h4"),o=x("Filter by type"),s=L(),A(l.$$.fragment),n=L(),_=v("div"),r=v("h4"),f=x("Filter by work packages"),y=L(),A(E.$$.fragment),$=L(),h=v("div"),c=v("div");for(let p=0;p<u.length;p+=1)u[p].c();this.h()},l(p){t=g(p,"DIV",{class:!0});var k=w(t);e=g(k,"DIV",{class:!0});var D=w(e);a=g(D,"H4",{class:!0});var H=w(a);o=N(H,"Filter by type"),H.forEach(d),s=O(D),F(l.$$.fragment,D),D.forEach(d),n=O(k),_=g(k,"DIV",{class:!0});var S=w(_);r=g(S,"H4",{class:!0});var ee=w(r);f=N(ee,"Filter by work packages"),ee.forEach(d),y=O(S),F(E.$$.fragment,S),S.forEach(d),k.forEach(d),$=O(p),h=g(p,"DIV",{class:!0});var te=w(h);c=g(te,"DIV",{class:!0});var le=w(c);for(let J=0;J<u.length;J+=1)u[J].l(le);le.forEach(d),te.forEach(d),this.h()},h(){b(a,"class","text-muted fw-bold"),b(e,"class","mb-4"),b(r,"class","text-muted fw-bold"),b(_,"class","mb-4 pt-2 border-top border-secondary"),b(t,"class","col-md-3 col-12"),b(c,"class","row"),b(h,"class","col-12 col-md-9 border-start border-secondary")},m(p,k){V(p,t,k),m(t,e),m(e,a),m(a,o),m(e,s),P(l,e,null),m(t,n),m(t,_),m(_,r),m(r,f),m(_,y),P(E,_,null),V(p,$,k),V(p,h,k),m(h,c);for(let D=0;D<u.length;D+=1)u[D].m(c,null);q=!0},p(p,k){const D={};k&4227082&&(D.$$scope={dirty:k,ctx:p}),l.$set(D);const H={};if(k&4227092&&(H.$$scope={dirty:k,ctx:p}),E.$set(H),k&32){T=p[5],ke();for(let S=0;S<u.length;S+=1)u[S].r();u=ut(u,k,C,1,p,T,I,c,ct,ge,null,_e);for(let S=0;S<u.length;S+=1)u[S].a();be()}},i(p){if(!q){z(l.$$.fragment,p),z(E.$$.fragment,p);for(let k=0;k<T.length;k+=1)z(u[k]);q=!0}},o(p){M(l.$$.fragment,p),M(E.$$.fragment,p);for(let k=0;k<u.length;k+=1)M(u[k]);q=!1},d(p){p&&d(t),j(l),j(E),p&&d($),p&&d(h);for(let k=0;k<u.length;k+=1)u[k].d()}}}function bt(i){let t,e,a,o,s=i[1],l=[];for(let n=0;n<s.length;n+=1)l[n]=pe(de(i,s,n));return{c(){t=v("div"),e=v("select");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=g(n,"DIV",{});var _=w(t);e=g(_,"SELECT",{class:!0});var r=w(e);for(let f=0;f<l.length;f+=1)l[f].l(r);r.forEach(d),_.forEach(d),this.h()},h(){b(e,"class","form-select bg-secondary text-white Manrope-Variable fw-bold border-secondary"),i[3]===void 0&&Z(()=>i[9].call(e))},m(n,_){V(n,t,_),m(t,e);for(let r=0;r<l.length;r+=1)l[r].m(e,null);U(e,i[3]),a||(o=R(e,"change",i[9]),a=!0)},p(n,_){if(_&2){s=n[1];let r;for(r=0;r<s.length;r+=1){const f=de(n,s,r);l[r]?l[r].p(f,_):(l[r]=pe(f),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}_&10&&U(e,n[3])},d(n){n&&d(t),G(l,n),a=!1,o()}}}function kt(i){let t,e=i[1],a=[];for(let o=0;o<e.length;o+=1)a[o]=he(fe(i,e,o));return{c(){t=v("div");for(let o=0;o<a.length;o+=1)a[o].c()},l(o){t=g(o,"DIV",{});var s=w(t);for(let l=0;l<a.length;l+=1)a[l].l(s);s.forEach(d)},m(o,s){V(o,t,s);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(o,s){if(s&10){e=o[1];let l;for(l=0;l<e.length;l+=1){const n=fe(o,e,l);a[l]?a[l].p(n,s):(a[l]=he(n),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=e.length}},d(o){o&&d(t),G(a,o)}}}function pe(i){let t,e=i[16]+"",a,o,s;return{c(){t=v("option"),a=x(e),o=L(),this.h()},l(l){t=g(l,"OPTION",{});var n=w(t);a=N(n,e),o=O(n),n.forEach(d),this.h()},h(){t.__value=s=i[16],t.value=t.__value},m(l,n){V(l,t,n),m(t,a),m(t,o)},p(l,n){n&2&&e!==(e=l[16]+"")&&Q(a,e),n&2&&s!==(s=l[16])&&(t.__value=s,t.value=t.__value)},d(l){l&&d(t)}}}function he(i){let t,e,a,o,s,l,n,_=i[16]+"",r,f,y,E,$;return{c(){t=v("div"),e=v("input"),s=L(),l=v("label"),n=v("small"),r=x(_),y=L(),this.h()},l(h){t=g(h,"DIV",{class:!0});var c=w(t);e=g(c,"INPUT",{type:!0,class:!0,name:!0,id:!0}),s=O(c),l=g(c,"LABEL",{class:!0,for:!0});var u=w(l);n=g(u,"SMALL",{});var I=w(n);r=N(I,_),I.forEach(d),u.forEach(d),y=O(c),c.forEach(d),this.h()},h(){b(e,"type","radio"),b(e,"class","form-check-input"),b(e,"name","options-type"),b(e,"id",a=`option-type-${i[18]}`),e.__value=o=i[16],e.value=e.__value,i[8][0].push(e),b(l,"class","form-check-label Manrope-Variable fw-bold text-capitalize"),b(l,"for",f=`option-type-${i[18]}`),b(t,"class","form-check")},m(h,c){V(h,t,c),m(t,e),e.checked=e.__value===i[3],m(t,s),m(t,l),m(l,n),m(n,r),m(t,y),E||($=R(e,"change",i[7]),E=!0)},p(h,c){c&2&&o!==(o=h[16])&&(e.__value=o,e.value=e.__value),c&10&&(e.checked=e.__value===h[3]),c&2&&_!==(_=h[16]+"")&&Q(r,_)},d(h){h&&d(t),i[8][0].splice(i[8][0].indexOf(e),1),E=!1,$()}}}function yt(i){let t;function e(s,l){return s[15]?kt:bt}let a=e(i),o=a(i);return{c(){o.c(),t=B()},l(s){o.l(s),t=B()},m(s,l){o.m(s,l),V(s,t,l)},p(s,l){a===(a=e(s))&&o?o.p(s,l):(o.d(1),o=a(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){o.d(s),s&&d(t)}}}function wt(i){let t,e,a,o,s=i[2],l=[];for(let n=0;n<s.length;n+=1)l[n]=me(ue(i,s,n));return{c(){t=v("div"),e=v("select");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=g(n,"DIV",{});var _=w(t);e=g(_,"SELECT",{class:!0});var r=w(e);for(let f=0;f<l.length;f+=1)l[f].l(r);r.forEach(d),_.forEach(d),this.h()},h(){b(e,"class","form-select bg-secondary text-white Manrope-Variable fw-bold border-secondary"),i[4]===void 0&&Z(()=>i[11].call(e))},m(n,_){V(n,t,_),m(t,e);for(let r=0;r<l.length;r+=1)l[r].m(e,null);U(e,i[4]),a||(o=R(e,"change",i[11]),a=!0)},p(n,_){if(_&4){s=n[2];let r;for(r=0;r<s.length;r+=1){const f=ue(n,s,r);l[r]?l[r].p(f,_):(l[r]=me(f),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}_&20&&U(e,n[4])},d(n){n&&d(t),G(l,n),a=!1,o()}}}function Et(i){let t,e=i[2],a=[];for(let o=0;o<e.length;o+=1)a[o]=ve(ce(i,e,o));return{c(){t=v("div");for(let o=0;o<a.length;o+=1)a[o].c()},l(o){t=g(o,"DIV",{});var s=w(t);for(let l=0;l<a.length;l+=1)a[l].l(s);s.forEach(d)},m(o,s){V(o,t,s);for(let l=0;l<a.length;l+=1)a[l].m(t,null)},p(o,s){if(s&20){e=o[2];let l;for(l=0;l<e.length;l+=1){const n=ce(o,e,l);a[l]?a[l].p(n,s):(a[l]=ve(n),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=e.length}},d(o){o&&d(t),G(a,o)}}}function me(i){let t,e=i[16].label+"",a,o,s;return{c(){t=v("option"),a=x(e),o=L(),this.h()},l(l){t=g(l,"OPTION",{});var n=w(t);a=N(n,e),o=O(n),n.forEach(d),this.h()},h(){t.__value=s=i[16].value,t.value=t.__value},m(l,n){V(l,t,n),m(t,a),m(t,o)},p(l,n){n&4&&e!==(e=l[16].label+"")&&Q(a,e),n&4&&s!==(s=l[16].value)&&(t.__value=s,t.value=t.__value)},d(l){l&&d(t)}}}function ve(i){let t,e,a,o,s,l,n,_=i[16].label+"",r,f,y,E,$;return{c(){t=v("div"),e=v("input"),s=L(),l=v("label"),n=v("small"),r=x(_),y=L(),this.h()},l(h){t=g(h,"DIV",{class:!0});var c=w(t);e=g(c,"INPUT",{type:!0,class:!0,name:!0,id:!0}),s=O(c),l=g(c,"LABEL",{class:!0,for:!0});var u=w(l);n=g(u,"SMALL",{});var I=w(n);r=N(I,_),I.forEach(d),u.forEach(d),y=O(c),c.forEach(d),this.h()},h(){b(e,"type","radio"),b(e,"class","form-check-input"),b(e,"name","options-wp"),b(e,"id",a=`option-wp-${i[18]}`),e.__value=o=i[16].value,e.value=e.__value,i[8][1].push(e),b(l,"class","form-check-label Manrope-Variable fw-bold text-capitalize"),b(l,"for",f=`option-wp-${i[18]}`),b(t,"class","form-check")},m(h,c){V(h,t,c),m(t,e),e.checked=e.__value===i[4],m(t,s),m(t,l),m(l,n),m(n,r),m(t,y),E||($=R(e,"change",i[10]),E=!0)},p(h,c){c&4&&o!==(o=h[16].value)&&(e.__value=o,e.value=e.__value),c&20&&(e.checked=e.__value===h[4]),c&4&&_!==(_=h[16].label+"")&&Q(r,_)},d(h){h&&d(t),i[8][1].splice(i[8][1].indexOf(e),1),E=!1,$()}}}function It(i){let t;function e(s,l){return s[15]?Et:wt}let a=e(i),o=a(i);return{c(){o.c(),t=B()},l(s){o.l(s),t=B()},m(s,l){o.m(s,l),V(s,t,l)},p(s,l){a===(a=e(s))&&o?o.p(s,l):(o.d(1),o=a(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){o.d(s),s&&d(t)}}}function ge(i,t){let e,a,o,s,l,n=W,_;return a=new pt({props:{output:t[12]}}),{key:i,first:null,c(){e=v("div"),A(a.$$.fragment),o=L(),this.h()},l(r){e=g(r,"DIV",{class:!0});var f=w(e);F(a.$$.fragment,f),o=O(f),f.forEach(d),this.h()},h(){b(e,"class","col-12 col-md-4 mb-4"),this.first=e},m(r,f){V(r,e,f),P(a,e,null),m(e,o),_=!0},p(r,f){t=r;const y={};f&32&&(y.output=t[12]),a.$set(y)},r(){l=e.getBoundingClientRect()},f(){nt(e),n(),rt(e,l)},a(){n(),n=_t(e,l,dt,{duration:500})},i(r){_||(z(a.$$.fragment,r),r&&Z(()=>{s||(s=ne(e,re,{duration:500},!0)),s.run(1)}),_=!0)},o(r){M(a.$$.fragment,r),r&&(s||(s=ne(e,re,{duration:500},!1)),s.run(0)),_=!1},d(r){r&&d(e),j(a),r&&s&&s.end()}}}function Vt(i){let t,e,a,o,s,l,n,_,r,f,y,E;t=new ht({props:{path:i[6].url.pathname,title:"Outputs"}});const $=[gt,vt],h=[];function c(u,I){return u[0].length?0:1}return f=c(i),y=h[f]=$[f](i),{c(){A(t.$$.fragment),e=L(),a=v("div"),o=v("div"),s=v("div"),l=v("h1"),n=x("Outputs"),_=L(),r=v("div"),y.c(),this.h()},l(u){F(t.$$.fragment,u),e=O(u),a=g(u,"DIV",{class:!0});var I=w(a);o=g(I,"DIV",{class:!0});var q=w(o);s=g(q,"DIV",{class:!0});var T=w(s);l=g(T,"H1",{class:!0});var C=w(l);n=N(C,"Outputs"),C.forEach(d),T.forEach(d),q.forEach(d),_=O(I),r=g(I,"DIV",{class:!0});var p=w(r);y.l(p),p.forEach(d),I.forEach(d),this.h()},h(){b(l,"class","display-1 fw-bold my-3 pb-3 border-bottom border-secondary"),b(s,"class","col-12"),b(o,"class","row"),b(r,"class","row pb-3"),b(a,"class","container")},m(u,I){P(t,u,I),V(u,e,I),V(u,a,I),m(a,o),m(o,s),m(s,l),m(l,n),m(a,_),m(a,r),h[f].m(r,null),E=!0},p(u,[I]){const q={};I&64&&(q.path=u[6].url.pathname),t.$set(q);let T=f;f=c(u),f===T?h[f].p(u,I):(ke(),M(h[T],1,1,()=>{h[T]=null}),be(),y=h[f],y?y.p(u,I):(y=h[f]=$[f](u),y.c()),z(y,1),y.m(r,null))},i(u){E||(z(t.$$.fragment,u),z(y),E=!0)},o(u){M(t.$$.fragment,u),M(y),E=!1},d(u){j(t,u),u&&d(e),u&&d(a),h[f].d()}}}const zt=!0,Y=Object.entries({"/outputs/cal-for-contributions/index.md":Oe,"/outputs/co-working/index.md":Te,"/outputs/digital week/index.md":Se,"/outputs/documenti-privacy/index.md":qe,"/outputs/evento-auser/index.md":xe,"/outputs/evento-bicocca/index.md":Ne,"/outputs/evento-maggio/index.md":Me,"/outputs/evento-rotterdam/index.md":ze,"/outputs/glasgow/index.md":Ce,"/outputs/guildor/index.md":He,"/outputs/guildor video/index.md":We,"/outputs/guildor video 2/index.md":Ae,"/outputs/italian-experts-perspective/index.md":Fe,"/outputs/panel-STS/index.md":Pe,"/outputs/paper/index.md":je,"/outputs/paper 2/index.md":Be,"/outputs/paper 3/index.md":Ue,"/outputs/paper 4/index.md":Qe,"/outputs/paper 5/index.md":Re,"/outputs/paper 6/index.md":Ge,"/outputs/paper 7/index.md":Je,"/outputs/paper 8/index.md":Ke,"/outputs/research-centres-initiative/index.md":Xe,"/outputs/resistance/index.md":Ye,"/outputs/rotterdam-conference/index.md":Ze,"/outputs/summer-school/index.md":et,"/outputs/visualizing-italian-citizens-trust/index.md":tt,"/outputs/visualizing-surveillance-capitalism-through-twitter/index.md":lt}).map(([i,t])=>X(K({},t.metadata),{slug:ft(i),component:t.default})),$t=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":$e,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":De,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Le}).map(([i,t])=>X(K({},t.metadata),{slug:i.replace(/(\/index)?\.md/,"").split("/").pop()}));async function Ct({params:i,fetch:t}){return{props:{outputsList:Y,filterType:["all",...new Set(Y.map(e=>e.type))],filterWp:[{value:"all",label:"all"},[...new Set(Y.map(e=>e.wp).flat())].map(e=>{const a=$t.find(o=>o.slug===e);return{value:e,label:a.title}})].flat()}}}function Dt(i,t,e){let a,o;it(i,mt,c=>e(6,o=c));let{outputsList:s}=t,{filterType:l}=t,{filterWp:n}=t,_=l[0],r=n[0].value;const f=[[],[]];function y(){_=this.__value,e(3,_),e(1,l)}function E(){_=se(this),e(3,_),e(1,l)}function $(){r=this.__value,e(4,r),e(2,n)}function h(){r=se(this),e(4,r),e(2,n)}return i.$$set=c=>{"outputsList"in c&&e(0,s=c.outputsList),"filterType"in c&&e(1,l=c.filterType),"filterWp"in c&&e(2,n=c.filterWp)},i.$$.update=()=>{i.$$.dirty&25&&e(5,a=s.filter(c=>(_==="all"?!0:c.type===_)&&(r==="all"?!0:c.wp.includes(r))))},[s,l,n,_,r,a,o,y,f,E,$,h]}class Ht extends at{constructor(t){super();ot(this,t,Dt,Vt,st,{outputsList:0,filterType:1,filterWp:2})}}export{Ht as default,Ct as load,zt as prerender};
