var P=Object.defineProperty,Q=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(n,e,l)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,j=(n,e)=>{for(var l in e||(e={}))U.call(e,l)&&T(n,l,e[l]);if(L)for(var l of L(e))W.call(e,l)&&T(n,l,e[l]);return n},z=(n,e)=>Q(n,R(e));import{_ as X,a as Z,b as ee,c as te,d as ae,e as le,f as se,g as oe,h as ne,i as re,j as ie,k as _e,l as ce,m as me,n as de,o as fe,C as he}from"../../chunks/CardTeam-8a8bc63f.js";import{Y as ue,S as ge,i as pe,s as ve,e as b,t as K,k as D,c as x,a as $,h as O,d as u,m as V,b as E,g as y,H as g,j as be,q as k,w as Y,x as A,y as F,o as w,B as G,p as J,K as M,I as xe,n as N}from"../../chunks/vendor-d0bbb509.js";import{H as $e}from"../../chunks/Head-f174fb86.js";import{p as Ee}from"../../chunks/stores-6bf813ae.js";function B(n,e,l){const s=n.slice();return s[2]=e[l],s}function C(n,e,l){const s=n.slice();return s[5]=e[l],s}function q(n){let e,l,s;return l=new he({props:{person:n[5]}}),{c(){e=b("div"),Y(l.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0});var c=$(e);A(l.$$.fragment,c),c.forEach(u),this.h()},h(){E(e,"class","col-4")},m(r,c){y(r,e,c),F(l,e,null),s=!0},p(r,c){const f={};c&1&&(f.person=r[5]),l.$set(f)},i(r){s||(k(l.$$.fragment,r),s=!0)},o(r){w(l.$$.fragment,r),s=!1},d(r){r&&u(e),G(l)}}}function S(n){let e,l,s,r=n[2][0]+"",c,f,v,p,h=n[2][1],o=[];for(let i=0;i<h.length;i+=1)o[i]=q(C(n,h,i));const _=i=>w(o[i],1,1,()=>{o[i]=null});return{c(){e=b("div"),l=b("div"),s=b("h2"),c=K(r),f=D();for(let i=0;i<o.length;i+=1)o[i].c();v=D(),this.h()},l(i){e=x(i,"DIV",{class:!0});var t=$(e);l=x(t,"DIV",{class:!0});var a=$(l);s=x(a,"H2",{class:!0});var d=$(s);c=O(d,r),d.forEach(u),a.forEach(u),f=V(t);for(let m=0;m<o.length;m+=1)o[m].l(t);v=V(t),t.forEach(u),this.h()},h(){E(s,"class","fw-bold"),E(l,"class","col-4"),E(e,"class","row border-top border-secondary pt-3")},m(i,t){y(i,e,t),g(e,l),g(l,s),g(s,c),g(e,f);for(let a=0;a<o.length;a+=1)o[a].m(e,null);g(e,v),p=!0},p(i,t){if((!p||t&1)&&r!==(r=i[2][0]+"")&&be(c,r),t&1){h=i[2][1];let a;for(a=0;a<h.length;a+=1){const d=C(i,h,a);o[a]?(o[a].p(d,t),k(o[a],1)):(o[a]=q(d),o[a].c(),k(o[a],1),o[a].m(e,v))}for(N(),a=h.length;a<o.length;a+=1)_(a);J()}},i(i){if(!p){for(let t=0;t<h.length;t+=1)k(o[t]);p=!0}},o(i){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)w(o[t]);p=!1},d(i){i&&u(e),M(o,i)}}}function ke(n){let e,l,s,r,c,f,v,p,h;e=new $e({props:{path:n[1].url.pathname,title:"Team"}});let o=n[0],_=[];for(let t=0;t<o.length;t+=1)_[t]=S(B(n,o,t));const i=t=>w(_[t],1,1,()=>{_[t]=null});return{c(){Y(e.$$.fragment),l=D(),s=b("div"),r=b("div"),c=b("div"),f=b("h1"),v=K("Team"),p=D();for(let t=0;t<_.length;t+=1)_[t].c();this.h()},l(t){A(e.$$.fragment,t),l=V(t),s=x(t,"DIV",{class:!0});var a=$(s);r=x(a,"DIV",{class:!0});var d=$(r);c=x(d,"DIV",{class:!0});var m=$(c);f=x(m,"H1",{class:!0});var I=$(f);v=O(I,"Team"),I.forEach(u),m.forEach(u),d.forEach(u),p=V(a);for(let H=0;H<_.length;H+=1)_[H].l(a);a.forEach(u),this.h()},h(){E(f,"class","display-1 fw-bold my-3"),E(c,"class","col-12"),E(r,"class","row"),E(s,"class","container")},m(t,a){F(e,t,a),y(t,l,a),y(t,s,a),g(s,r),g(r,c),g(c,f),g(f,v),g(s,p);for(let d=0;d<_.length;d+=1)_[d].m(s,null);h=!0},p(t,[a]){const d={};if(a&2&&(d.path=t[1].url.pathname),e.$set(d),a&1){o=t[0];let m;for(m=0;m<o.length;m+=1){const I=B(t,o,m);_[m]?(_[m].p(I,a),k(_[m],1)):(_[m]=S(I),_[m].c(),k(_[m],1),_[m].m(s,null))}for(N(),m=o.length;m<_.length;m+=1)i(m);J()}},i(t){if(!h){k(e.$$.fragment,t);for(let a=0;a<o.length;a+=1)k(_[a]);h=!0}},o(t){w(e.$$.fragment,t),_=_.filter(Boolean);for(let a=0;a<_.length;a+=1)w(_[a]);h=!1},d(t){G(e,t),t&&u(l),t&&u(s),M(_,t)}}}const Te=!0,we=Object.entries({"/team/alessandra-gaia/index.md":X,"/team/alessandro-caliandro/index.md":Z,"/team/chiara-respi/index.md":ee,"/team/dario-pizzul/index.md":te,"/team/diego-boerchi/index.md":ae,"/team/emanuela-sala/index.md":le,"/team/emma-garavaglia/index.md":se,"/team/flavio-ceravolo/index.md":oe,"/team/guido-anselmi/index.md":ne,"/team/guido-legnante/index.md":re,"/team/guido-tarricone/index.md":ie,"/team/laura-zanfrini/index.md":_e,"/team/marco-gui/index.md":ce,"/team/marta-cereda/index.md":me,"/team/paolo-gomarasca/index.md":de,"/team/piercarlo-dondi/index.md":fe}).map(([n,e])=>z(j({},e.metadata),{component:e.default}));async function je({params:n,fetch:e}){return{props:{teamList:ue(we,l=>l.affiliation)}}}function Ie(n,e,l){let s;xe(n,Ee,c=>l(1,s=c));let{teamList:r}=e;return n.$$set=c=>{"teamList"in c&&l(0,r=c.teamList)},[r,s]}class ze extends ge{constructor(e){super();pe(this,e,Ie,ke,ve,{teamList:0})}}export{ze as default,je as load,Te as prerender};