var P=Object.defineProperty,Q=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var H=(n,e,l)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,j=(n,e)=>{for(var l in e||(e={}))U.call(e,l)&&H(n,l,e[l]);if(L)for(var l of L(e))X.call(e,l)&&H(n,l,e[l]);return n},z=(n,e)=>Q(n,R(e));import{_ as Y,a as Z,b as ee,c as te,d as ae,e as le,f as se,g as oe,h as ne,i as re,j as ie,k as ce,l as _e,m as me,n as de,C as fe}from"../../chunks/CardTeam-ad7607d3.js";import{a9 as he,S as ue,i as ge,s as pe,e as b,t as O,k as D,c as x,a as $,h as W,d as u,m as I,b as E,g as T,T as g,j as ve,q as k,w as A,x as F,y as G,o as w,B as J,p as K,W as M,V as be,n as N}from"../../chunks/vendor-9afc8e62.js";import{H as xe}from"../../chunks/Head-6f288903.js";import{p as $e}from"../../chunks/stores-6b5d310d.js";function B(n,e,l){const s=n.slice();return s[2]=e[l],s}function C(n,e,l){const s=n.slice();return s[5]=e[l],s}function q(n){let e,l,s;return l=new fe({props:{person:n[5]}}),{c(){e=b("div"),A(l.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0});var _=$(e);F(l.$$.fragment,_),_.forEach(u),this.h()},h(){E(e,"class","col-12 col-md-4")},m(r,_){T(r,e,_),G(l,e,null),s=!0},p(r,_){const f={};_&1&&(f.person=r[5]),l.$set(f)},i(r){s||(k(l.$$.fragment,r),s=!0)},o(r){w(l.$$.fragment,r),s=!1},d(r){r&&u(e),J(l)}}}function S(n){let e,l,s,r=n[2][0]+"",_,f,v,p,h=n[2][1],o=[];for(let i=0;i<h.length;i+=1)o[i]=q(C(n,h,i));const c=i=>w(o[i],1,1,()=>{o[i]=null});return{c(){e=b("div"),l=b("div"),s=b("h2"),_=O(r),f=D();for(let i=0;i<o.length;i+=1)o[i].c();v=D(),this.h()},l(i){e=x(i,"DIV",{class:!0});var t=$(e);l=x(t,"DIV",{class:!0});var a=$(l);s=x(a,"H2",{class:!0});var d=$(s);_=W(d,r),d.forEach(u),a.forEach(u),f=I(t);for(let m=0;m<o.length;m+=1)o[m].l(t);v=I(t),t.forEach(u),this.h()},h(){E(s,"class","fw-bold mt-3 mt-md-0 mb-5"),E(l,"class","col-12 col-md-4"),E(e,"class","row border-top border-secondary pt-3")},m(i,t){T(i,e,t),g(e,l),g(l,s),g(s,_),g(e,f);for(let a=0;a<o.length;a+=1)o[a].m(e,null);g(e,v),p=!0},p(i,t){if((!p||t&1)&&r!==(r=i[2][0]+"")&&ve(_,r),t&1){h=i[2][1];let a;for(a=0;a<h.length;a+=1){const d=C(i,h,a);o[a]?(o[a].p(d,t),k(o[a],1)):(o[a]=q(d),o[a].c(),k(o[a],1),o[a].m(e,v))}for(N(),a=h.length;a<o.length;a+=1)c(a);K()}},i(i){if(!p){for(let t=0;t<h.length;t+=1)k(o[t]);p=!0}},o(i){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)w(o[t]);p=!1},d(i){i&&u(e),M(o,i)}}}function Ee(n){let e,l,s,r,_,f,v,p,h;e=new xe({props:{path:n[1].url.pathname,title:"Team"}});let o=n[0],c=[];for(let t=0;t<o.length;t+=1)c[t]=S(B(n,o,t));const i=t=>w(c[t],1,1,()=>{c[t]=null});return{c(){A(e.$$.fragment),l=D(),s=b("div"),r=b("div"),_=b("div"),f=b("h1"),v=O("Team"),p=D();for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){F(e.$$.fragment,t),l=I(t),s=x(t,"DIV",{class:!0});var a=$(s);r=x(a,"DIV",{class:!0});var d=$(r);_=x(d,"DIV",{class:!0});var m=$(_);f=x(m,"H1",{class:!0});var V=$(f);v=W(V,"Team"),V.forEach(u),m.forEach(u),d.forEach(u),p=I(a);for(let y=0;y<c.length;y+=1)c[y].l(a);a.forEach(u),this.h()},h(){E(f,"class","display-1 fw-bold my-3"),E(_,"class","col-12"),E(r,"class","row"),E(s,"class","container")},m(t,a){G(e,t,a),T(t,l,a),T(t,s,a),g(s,r),g(r,_),g(_,f),g(f,v),g(s,p);for(let d=0;d<c.length;d+=1)c[d].m(s,null);h=!0},p(t,[a]){const d={};if(a&2&&(d.path=t[1].url.pathname),e.$set(d),a&1){o=t[0];let m;for(m=0;m<o.length;m+=1){const V=B(t,o,m);c[m]?(c[m].p(V,a),k(c[m],1)):(c[m]=S(V),c[m].c(),k(c[m],1),c[m].m(s,null))}for(N(),m=o.length;m<c.length;m+=1)i(m);K()}},i(t){if(!h){k(e.$$.fragment,t);for(let a=0;a<o.length;a+=1)k(c[a]);h=!0}},o(t){w(e.$$.fragment,t),c=c.filter(Boolean);for(let a=0;a<c.length;a+=1)w(c[a]);h=!1},d(t){J(e,t),t&&u(l),t&&u(s),M(c,t)}}}const Le=!0,ke=Object.entries({"/team/alessandra-gaia/index.md":Y,"/team/alessandro-caliandro/index.md":Z,"/team/chiara-respi/index.md":ee,"/team/dario-pizzul/index.md":te,"/team/emanuela-sala/index.md":ae,"/team/emma-garavaglia/index.md":le,"/team/flavio-ceravolo/index.md":se,"/team/guido-anselmi/index.md":oe,"/team/guido-legnante/index.md":ne,"/team/guido-tarricone/index.md":re,"/team/laura-zanfrini/index.md":ie,"/team/marco-gui/index.md":ce,"/team/marta-cereda/index.md":_e,"/team/paolo-gomarasca/index.md":me,"/team/piercarlo-dondi/index.md":de}).map(([n,e])=>z(j({},e.metadata),{component:e.default}));async function He({params:n,fetch:e}){return{props:{teamList:he(ke,l=>l.affiliation)}}}function we(n,e,l){let s;be(n,$e,_=>l(1,s=_));let{teamList:r}=e;return n.$$set=_=>{"teamList"in _&&l(0,r=_.teamList)},[r,s]}class je extends ue{constructor(e){super();ge(this,e,we,Ee,pe,{teamList:0})}}export{je as default,He as load,Le as prerender};
