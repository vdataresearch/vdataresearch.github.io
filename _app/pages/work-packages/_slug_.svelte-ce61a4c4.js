var lt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var Fe=(n,e,t)=>e in n?lt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))ot.call(e,t)&&Fe(n,t,e[t]);if(We)for(var t of We(e))nt.call(e,t)&&Fe(n,t,e[t]);return n},oe=(n,e)=>at(n,st(e));import{_ as rt,a as it,C as ct}from"../../chunks/CardOutput-40eeded4.js";import{_ as dt,a as _t,b as ut,c as mt,d as ft,e as ht,f as pt,g as gt,h as vt,i as bt,j as wt,k as Et,l as kt,m as xt,n as Dt,o as It,C as Vt}from"../../chunks/CardTeam-b0716055.js";import{_ as yt,a as Lt,b as Ht}from"../../chunks/index-2adbe4f0.js";import{S as Ot,i as $t,s as St,e as f,t as M,c as h,a as p,h as q,d as c,g as G,H as i,j as et,w as ne,k as V,x as he,m as y,b,y as re,q as x,o as L,B as ie,p as me,K as Le,I as jt,n as fe,L as ye}from"../../chunks/vendor-c8cbfa9c.js";import{H as Ct}from"../../chunks/Head-72224a36.js";import{p as Tt}from"../../chunks/stores-92831895.js";function Je(n,e,t){const a=n.slice();return a[6]=e[t],a}function Qe(n,e,t){const a=n.slice();return a[9]=e[t],a}function Re(n,e,t){const a=n.slice();return a[12]=e[t],a}function Xe(n){let e,t=n[12]+"",a;return{c(){e=f("li"),a=M(t)},l(l){e=h(l,"LI",{});var r=p(e);a=q(r,t),r.forEach(c)},m(l,r){G(l,e,r),i(e,a)},p(l,r){r&16&&t!==(t=l[12]+"")&&et(a,t)},d(l){l&&c(e)}}}function Ye(n){let e,t,a,l;return t=new Vt({props:{person:n[9]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-4")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&4&&(m.person=r[9]),t.$set(m)},i(r){l||(x(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function zt(n){let e,t;return{c(){e=f("p"),t=M("No outputs yet!"),this.h()},l(a){e=h(a,"P",{class:!0});var l=p(e);t=q(l,"No outputs yet!"),l.forEach(c),this.h()},h(){b(e,"class","text-muted")},m(a,l){G(a,e,l),i(e,t)},p:ye,i:ye,o:ye,d(a){a&&c(e)}}}function At(n){let e,t,a=n[3],l=[];for(let s=0;s<a.length;s+=1)l[s]=Ze(Je(n,a,s));const r=s=>L(l[s],1,1,()=>{l[s]=null});return{c(){e=f("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0});var m=p(e);for(let u=0;u<l.length;u+=1)l[u].l(m);m.forEach(c),this.h()},h(){b(e,"class","row")},m(s,m){G(s,e,m);for(let u=0;u<l.length;u+=1)l[u].m(e,null);t=!0},p(s,m){if(m&8){a=s[3];let u;for(u=0;u<a.length;u+=1){const g=Je(s,a,u);l[u]?(l[u].p(g,m),x(l[u],1)):(l[u]=Ze(g),l[u].c(),x(l[u],1),l[u].m(e,null))}for(fe(),u=a.length;u<l.length;u+=1)r(u);me()}},i(s){if(!t){for(let m=0;m<a.length;m+=1)x(l[m]);t=!0}},o(s){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)L(l[m]);t=!1},d(s){s&&c(e),Le(l,s)}}}function Ze(n){let e,t,a,l;return t=new ct({props:{output:n[6]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-3 mb-3")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&8&&(m.output=r[6]),t.$set(m)},i(r){l||(x(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function Bt(n){let e,t,a,l,r,s,m,u,g,O,N,Z,pe,ge,w,ve,$,U,ee,be,we,K,Ee,S,P,W,te,ke,xe,F,T,De,j,J,Q,le,Ie,Ve,z,D,I,ae;e=new Ct({props:{path:n[5].url.pathname,title:n[1]}});var R=n[0];function He(o){return{}}R&&(w=new R(He()));let X=n[4],E=[];for(let o=0;o<X.length;o+=1)E[o]=Xe(Re(n,X,o));let A=n[2],v=[];for(let o=0;o<A.length;o+=1)v[o]=Ye(Qe(n,A,o));const tt=o=>L(v[o],1,1,()=>{v[o]=null}),Oe=[At,zt],C=[];function $e(o,_){return o[3].length?0:1}return D=$e(n),I=C[D]=Oe[D](n),{c(){ne(e.$$.fragment),t=V(),a=f("div"),l=f("div"),r=f("div"),s=f("h1"),m=M(n[1]),u=V(),g=f("div"),O=f("div"),N=f("h6"),Z=f("small"),pe=M("Description"),ge=V(),w&&ne(w.$$.fragment),ve=V(),$=f("div"),U=f("h6"),ee=f("small"),be=M("Goals"),we=V(),K=f("ul");for(let o=0;o<E.length;o+=1)E[o].c();Ee=V(),S=f("div"),P=f("div"),W=f("h6"),te=f("small"),ke=M("Team member"),xe=V(),F=f("div"),T=f("div");for(let o=0;o<v.length;o+=1)v[o].c();De=V(),j=f("div"),J=f("div"),Q=f("h6"),le=f("small"),Ie=M("Outputs"),Ve=V(),z=f("div"),I.c(),this.h()},l(o){he(e.$$.fragment,o),t=y(o),a=h(o,"DIV",{class:!0});var _=p(a);l=h(_,"DIV",{class:!0});var k=p(l);r=h(k,"DIV",{class:!0});var Y=p(r);s=h(Y,"H1",{class:!0});var d=p(s);m=q(d,n[1]),d.forEach(c),Y.forEach(c),k.forEach(c),u=y(_),g=h(_,"DIV",{class:!0});var H=p(g);O=h(H,"DIV",{class:!0});var ce=p(O);N=h(ce,"H6",{class:!0});var Se=p(N);Z=h(Se,"SMALL",{});var je=p(Z);pe=q(je,"Description"),je.forEach(c),Se.forEach(c),ge=y(ce),w&&he(w.$$.fragment,ce),ce.forEach(c),ve=y(H),$=h(H,"DIV",{class:!0});var de=p($);U=h(de,"H6",{class:!0});var Ce=p(U);ee=h(Ce,"SMALL",{});var Te=p(ee);be=q(Te,"Goals"),Te.forEach(c),Ce.forEach(c),we=y(de),K=h(de,"UL",{});var ze=p(K);for(let B=0;B<E.length;B+=1)E[B].l(ze);ze.forEach(c),de.forEach(c),H.forEach(c),Ee=y(_),S=h(_,"DIV",{class:!0});var _e=p(S);P=h(_e,"DIV",{class:!0});var Ae=p(P);W=h(Ae,"H6",{class:!0});var Be=p(W);te=h(Be,"SMALL",{});var Me=p(te);ke=q(Me,"Team member"),Me.forEach(c),Be.forEach(c),Ae.forEach(c),xe=y(_e),F=h(_e,"DIV",{class:!0});var qe=p(F);T=h(qe,"DIV",{class:!0});var Ge=p(T);for(let B=0;B<v.length;B+=1)v[B].l(Ge);Ge.forEach(c),qe.forEach(c),_e.forEach(c),De=y(_),j=h(_,"DIV",{class:!0});var ue=p(j);J=h(ue,"DIV",{class:!0});var Ne=p(J);Q=h(Ne,"H6",{class:!0});var Ue=p(Q);le=h(Ue,"SMALL",{});var Ke=p(le);Ie=q(Ke,"Outputs"),Ke.forEach(c),Ue.forEach(c),Ne.forEach(c),Ve=y(ue),z=h(ue,"DIV",{class:!0});var Pe=p(z);I.l(Pe),Pe.forEach(c),ue.forEach(c),_.forEach(c),this.h()},h(){b(s,"class","display-5 fw-bold"),b(r,"class","col-12 col-md-7"),b(l,"class","row"),b(N,"class","text-primary fw-bold"),b(O,"class","col-12 col-md-5"),b(U,"class","text-primary fw-bold"),b($,"class","col-12 offset-md-1 col-md-5"),b(g,"class","row border-top border-secondary py-3 py-md-5 mt-4"),b(W,"class","text-primary fw-bold"),b(P,"class","col-5"),b(T,"class","row"),b(F,"class","col-12 mt-2"),b(S,"class","row border-top border-secondary pt-4 "),b(Q,"class","text-primary fw-bold"),b(J,"class","col-5"),b(z,"class","col-12 mt-2"),b(j,"class","row border-top border-secondary pt-4 pb-2"),b(a,"class","container")},m(o,_){re(e,o,_),G(o,t,_),G(o,a,_),i(a,l),i(l,r),i(r,s),i(s,m),i(a,u),i(a,g),i(g,O),i(O,N),i(N,Z),i(Z,pe),i(O,ge),w&&re(w,O,null),i(g,ve),i(g,$),i($,U),i(U,ee),i(ee,be),i($,we),i($,K);for(let k=0;k<E.length;k+=1)E[k].m(K,null);i(a,Ee),i(a,S),i(S,P),i(P,W),i(W,te),i(te,ke),i(S,xe),i(S,F),i(F,T);for(let k=0;k<v.length;k+=1)v[k].m(T,null);i(a,De),i(a,j),i(j,J),i(J,Q),i(Q,le),i(le,Ie),i(j,Ve),i(j,z),C[D].m(z,null),ae=!0},p(o,[_]){const k={};if(_&32&&(k.path=o[5].url.pathname),_&2&&(k.title=o[1]),e.$set(k),(!ae||_&2)&&et(m,o[1]),R!==(R=o[0])){if(w){fe();const d=w;L(d.$$.fragment,1,0,()=>{ie(d,1)}),me()}R?(w=new R(He()),ne(w.$$.fragment),x(w.$$.fragment,1),re(w,O,null)):w=null}if(_&16){X=o[4];let d;for(d=0;d<X.length;d+=1){const H=Re(o,X,d);E[d]?E[d].p(H,_):(E[d]=Xe(H),E[d].c(),E[d].m(K,null))}for(;d<E.length;d+=1)E[d].d(1);E.length=X.length}if(_&4){A=o[2];let d;for(d=0;d<A.length;d+=1){const H=Qe(o,A,d);v[d]?(v[d].p(H,_),x(v[d],1)):(v[d]=Ye(H),v[d].c(),x(v[d],1),v[d].m(T,null))}for(fe(),d=A.length;d<v.length;d+=1)tt(d);me()}let Y=D;D=$e(o),D===Y?C[D].p(o,_):(fe(),L(C[Y],1,1,()=>{C[Y]=null}),me(),I=C[D],I?I.p(o,_):(I=C[D]=Oe[D](o),I.c()),x(I,1),I.m(z,null))},i(o){if(!ae){x(e.$$.fragment,o),w&&x(w.$$.fragment,o);for(let _=0;_<A.length;_+=1)x(v[_]);x(I),ae=!0}},o(o){L(e.$$.fragment,o),w&&L(w.$$.fragment,o),v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)L(v[_]);L(I),ae=!1},d(o){ie(e,o),o&&c(t),o&&c(a),w&&ie(w),Le(E,o),Le(v,o),C[D].d()}}}const Mt=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":yt,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":Lt,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Ht}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})).sort((n,e)=>n.index-e.index),qt=Object.entries({"/team/alessandra-gaia/index.md":dt,"/team/alessandro-caliandro/index.md":_t,"/team/chiara-respi/index.md":ut,"/team/dario-pizzul/index.md":mt,"/team/diego-boerchi/index.md":ft,"/team/emanuela-sala/index.md":ht,"/team/emma-garavaglia/index.md":pt,"/team/flavio-ceravolo/index.md":gt,"/team/guido-anselmi/index.md":vt,"/team/guido-legnante/index.md":bt,"/team/guido-tarricone/index.md":wt,"/team/laura-zanfrini/index.md":Et,"/team/marco-gui/index.md":kt,"/team/marta-cereda/index.md":xt,"/team/paolo-gomarasca/index.md":Dt,"/team/piercarlo-dondi/index.md":It}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})),Gt=Object.entries({"/outputs/article/index.md":rt,"/outputs/book/index.md":it}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default}));async function Rt({params:n,fetch:e}){const{slug:t}=n,a=Mt.find(s=>t===s.slug);if(!a)return{status:404,error:"Work packages not found"};const l=qt.filter(s=>a.team.includes(s.slug)),r=Gt.filter(s=>s.wp?s.wp.includes(a.slug):!1);return{props:oe(se({},a),{team:l,outputs:r})}}function Nt(n,e,t){let a;jt(n,Tt,g=>t(5,a=g));let{component:l}=e,{title:r}=e,{team:s}=e,{outputs:m}=e,{goals:u}=e;return n.$$set=g=>{"component"in g&&t(0,l=g.component),"title"in g&&t(1,r=g.title),"team"in g&&t(2,s=g.team),"outputs"in g&&t(3,m=g.outputs),"goals"in g&&t(4,u=g.goals)},[l,r,s,m,u,a]}class Xt extends Ot{constructor(e){super();$t(this,e,Nt,Bt,St,{component:0,title:1,team:2,outputs:3,goals:4})}}export{Xt as default,Rt as load};
