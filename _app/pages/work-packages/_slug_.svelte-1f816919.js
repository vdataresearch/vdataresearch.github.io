var lt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var Je=(n,e,t)=>e in n?lt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))ot.call(e,t)&&Je(n,t,e[t]);if(Fe)for(var t of Fe(e))nt.call(e,t)&&Je(n,t,e[t]);return n},oe=(n,e)=>at(n,st(e));import{_ as rt,a as it,C as ct}from"../../chunks/CardOutput-139ebd5f.js";import{_ as dt,a as _t,b as ut,c as mt,d as ft,e as ht,f as pt,g as gt,h as vt,i as bt,j as wt,k as Et,l as kt,m as xt,n as Dt,C as It}from"../../chunks/CardTeam-806a0c6f.js";import{_ as Vt,a as yt,b as Lt}from"../../chunks/index-79c3c4ed.js";import{S as Ot,i as Ht,s as St,e as f,t as M,c as h,a as p,h as q,d as c,g as G,T as i,j as et,w as ne,k as V,x as he,m as y,b,y as re,q as x,o as L,B as ie,p as me,W as Le,V as Tt,n as fe,L as ye}from"../../chunks/vendor-9afc8e62.js";import{H as $t}from"../../chunks/Head-6f288903.js";import{p as jt}from"../../chunks/stores-6b5d310d.js";function Ke(n,e,t){const a=n.slice();return a[6]=e[t],a}function Qe(n,e,t){const a=n.slice();return a[9]=e[t],a}function Re(n,e,t){const a=n.slice();return a[12]=e[t],a}function Xe(n){let e,t=n[12]+"",a;return{c(){e=f("li"),a=M(t)},l(l){e=h(l,"LI",{});var r=p(e);a=q(r,t),r.forEach(c)},m(l,r){G(l,e,r),i(e,a)},p(l,r){r&16&&t!==(t=l[12]+"")&&et(a,t)},d(l){l&&c(e)}}}function Ye(n){let e,t,a,l;return t=new It({props:{person:n[9]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-4")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&4&&(m.person=r[9]),t.$set(m)},i(r){l||(x(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function Ct(n){let e,t;return{c(){e=f("p"),t=M("No outputs yet!"),this.h()},l(a){e=h(a,"P",{class:!0});var l=p(e);t=q(l,"No outputs yet!"),l.forEach(c),this.h()},h(){b(e,"class","text-muted")},m(a,l){G(a,e,l),i(e,t)},p:ye,i:ye,o:ye,d(a){a&&c(e)}}}function zt(n){let e,t,a=n[3],l=[];for(let s=0;s<a.length;s+=1)l[s]=Ze(Ke(n,a,s));const r=s=>L(l[s],1,1,()=>{l[s]=null});return{c(){e=f("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0});var m=p(e);for(let u=0;u<l.length;u+=1)l[u].l(m);m.forEach(c),this.h()},h(){b(e,"class","row")},m(s,m){G(s,e,m);for(let u=0;u<l.length;u+=1)l[u].m(e,null);t=!0},p(s,m){if(m&8){a=s[3];let u;for(u=0;u<a.length;u+=1){const g=Ke(s,a,u);l[u]?(l[u].p(g,m),x(l[u],1)):(l[u]=Ze(g),l[u].c(),x(l[u],1),l[u].m(e,null))}for(fe(),u=a.length;u<l.length;u+=1)r(u);me()}},i(s){if(!t){for(let m=0;m<a.length;m+=1)x(l[m]);t=!0}},o(s){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)L(l[m]);t=!1},d(s){s&&c(e),Le(l,s)}}}function Ze(n){let e,t,a,l;return t=new ct({props:{output:n[6]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-3 mb-3")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&8&&(m.output=r[6]),t.$set(m)},i(r){l||(x(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function At(n){let e,t,a,l,r,s,m,u,g,H,N,Z,pe,ge,w,ve,S,U,ee,be,we,W,Ee,T,P,F,te,ke,xe,J,C,De,$,K,Q,le,Ie,Ve,z,D,I,ae;e=new $t({props:{path:n[5].url.pathname,title:n[1]}});var R=n[0];function Oe(o){return{}}R&&(w=new R(Oe()));let X=n[4],E=[];for(let o=0;o<X.length;o+=1)E[o]=Xe(Re(n,X,o));let A=n[2],v=[];for(let o=0;o<A.length;o+=1)v[o]=Ye(Qe(n,A,o));const tt=o=>L(v[o],1,1,()=>{v[o]=null}),He=[zt,Ct],j=[];function Se(o,_){return o[3].length?0:1}return D=Se(n),I=j[D]=He[D](n),{c(){ne(e.$$.fragment),t=V(),a=f("div"),l=f("div"),r=f("div"),s=f("h1"),m=M(n[1]),u=V(),g=f("div"),H=f("div"),N=f("h6"),Z=f("small"),pe=M("Description"),ge=V(),w&&ne(w.$$.fragment),ve=V(),S=f("div"),U=f("h6"),ee=f("small"),be=M("Goals"),we=V(),W=f("ul");for(let o=0;o<E.length;o+=1)E[o].c();Ee=V(),T=f("div"),P=f("div"),F=f("h6"),te=f("small"),ke=M("Team member"),xe=V(),J=f("div"),C=f("div");for(let o=0;o<v.length;o+=1)v[o].c();De=V(),$=f("div"),K=f("div"),Q=f("h6"),le=f("small"),Ie=M("Outputs"),Ve=V(),z=f("div"),I.c(),this.h()},l(o){he(e.$$.fragment,o),t=y(o),a=h(o,"DIV",{class:!0});var _=p(a);l=h(_,"DIV",{class:!0});var k=p(l);r=h(k,"DIV",{class:!0});var Y=p(r);s=h(Y,"H1",{class:!0});var d=p(s);m=q(d,n[1]),d.forEach(c),Y.forEach(c),k.forEach(c),u=y(_),g=h(_,"DIV",{class:!0});var O=p(g);H=h(O,"DIV",{class:!0});var ce=p(H);N=h(ce,"H6",{class:!0});var Te=p(N);Z=h(Te,"SMALL",{});var $e=p(Z);pe=q($e,"Description"),$e.forEach(c),Te.forEach(c),ge=y(ce),w&&he(w.$$.fragment,ce),ce.forEach(c),ve=y(O),S=h(O,"DIV",{class:!0});var de=p(S);U=h(de,"H6",{class:!0});var je=p(U);ee=h(je,"SMALL",{});var Ce=p(ee);be=q(Ce,"Goals"),Ce.forEach(c),je.forEach(c),we=y(de),W=h(de,"UL",{});var ze=p(W);for(let B=0;B<E.length;B+=1)E[B].l(ze);ze.forEach(c),de.forEach(c),O.forEach(c),Ee=y(_),T=h(_,"DIV",{class:!0});var _e=p(T);P=h(_e,"DIV",{class:!0});var Ae=p(P);F=h(Ae,"H6",{class:!0});var Be=p(F);te=h(Be,"SMALL",{});var Me=p(te);ke=q(Me,"Team member"),Me.forEach(c),Be.forEach(c),Ae.forEach(c),xe=y(_e),J=h(_e,"DIV",{class:!0});var qe=p(J);C=h(qe,"DIV",{class:!0});var Ge=p(C);for(let B=0;B<v.length;B+=1)v[B].l(Ge);Ge.forEach(c),qe.forEach(c),_e.forEach(c),De=y(_),$=h(_,"DIV",{class:!0});var ue=p($);K=h(ue,"DIV",{class:!0});var Ne=p(K);Q=h(Ne,"H6",{class:!0});var Ue=p(Q);le=h(Ue,"SMALL",{});var We=p(le);Ie=q(We,"Outputs"),We.forEach(c),Ue.forEach(c),Ne.forEach(c),Ve=y(ue),z=h(ue,"DIV",{class:!0});var Pe=p(z);I.l(Pe),Pe.forEach(c),ue.forEach(c),_.forEach(c),this.h()},h(){b(s,"class","display-5 fw-bold"),b(r,"class","col-12 col-md-7"),b(l,"class","row"),b(N,"class","text-primary fw-bold"),b(H,"class","col-12 col-md-5"),b(U,"class","text-primary fw-bold"),b(S,"class","col-12 offset-md-1 col-md-5"),b(g,"class","row border-top border-secondary py-3 py-md-5 mt-4"),b(F,"class","text-primary fw-bold"),b(P,"class","col-5"),b(C,"class","row"),b(J,"class","col-12 mt-2"),b(T,"class","row border-top border-secondary pt-4 "),b(Q,"class","text-primary fw-bold"),b(K,"class","col-5"),b(z,"class","col-12 mt-2"),b($,"class","row border-top border-secondary pt-4 pb-2"),b(a,"class","container")},m(o,_){re(e,o,_),G(o,t,_),G(o,a,_),i(a,l),i(l,r),i(r,s),i(s,m),i(a,u),i(a,g),i(g,H),i(H,N),i(N,Z),i(Z,pe),i(H,ge),w&&re(w,H,null),i(g,ve),i(g,S),i(S,U),i(U,ee),i(ee,be),i(S,we),i(S,W);for(let k=0;k<E.length;k+=1)E[k].m(W,null);i(a,Ee),i(a,T),i(T,P),i(P,F),i(F,te),i(te,ke),i(T,xe),i(T,J),i(J,C);for(let k=0;k<v.length;k+=1)v[k].m(C,null);i(a,De),i(a,$),i($,K),i(K,Q),i(Q,le),i(le,Ie),i($,Ve),i($,z),j[D].m(z,null),ae=!0},p(o,[_]){const k={};if(_&32&&(k.path=o[5].url.pathname),_&2&&(k.title=o[1]),e.$set(k),(!ae||_&2)&&et(m,o[1]),R!==(R=o[0])){if(w){fe();const d=w;L(d.$$.fragment,1,0,()=>{ie(d,1)}),me()}R?(w=new R(Oe()),ne(w.$$.fragment),x(w.$$.fragment,1),re(w,H,null)):w=null}if(_&16){X=o[4];let d;for(d=0;d<X.length;d+=1){const O=Re(o,X,d);E[d]?E[d].p(O,_):(E[d]=Xe(O),E[d].c(),E[d].m(W,null))}for(;d<E.length;d+=1)E[d].d(1);E.length=X.length}if(_&4){A=o[2];let d;for(d=0;d<A.length;d+=1){const O=Qe(o,A,d);v[d]?(v[d].p(O,_),x(v[d],1)):(v[d]=Ye(O),v[d].c(),x(v[d],1),v[d].m(C,null))}for(fe(),d=A.length;d<v.length;d+=1)tt(d);me()}let Y=D;D=Se(o),D===Y?j[D].p(o,_):(fe(),L(j[Y],1,1,()=>{j[Y]=null}),me(),I=j[D],I?I.p(o,_):(I=j[D]=He[D](o),I.c()),x(I,1),I.m(z,null))},i(o){if(!ae){x(e.$$.fragment,o),w&&x(w.$$.fragment,o);for(let _=0;_<A.length;_+=1)x(v[_]);x(I),ae=!0}},o(o){L(e.$$.fragment,o),w&&L(w.$$.fragment,o),v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)L(v[_]);L(I),ae=!1},d(o){ie(e,o),o&&c(t),o&&c(a),w&&ie(w),Le(E,o),Le(v,o),j[D].d()}}}const Bt=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":Vt,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":yt,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Lt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})).sort((n,e)=>n.index-e.index),Mt=Object.entries({"/team/alessandra-gaia/index.md":dt,"/team/alessandro-caliandro/index.md":_t,"/team/chiara-respi/index.md":ut,"/team/dario-pizzul/index.md":mt,"/team/emanuela-sala/index.md":ft,"/team/emma-garavaglia/index.md":ht,"/team/flavio-ceravolo/index.md":pt,"/team/guido-anselmi/index.md":gt,"/team/guido-legnante/index.md":vt,"/team/guido-tarricone/index.md":bt,"/team/laura-zanfrini/index.md":wt,"/team/marco-gui/index.md":Et,"/team/marta-cereda/index.md":kt,"/team/paolo-gomarasca/index.md":xt,"/team/piercarlo-dondi/index.md":Dt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})),qt=Object.entries({"/outputs/evento-maggio/index.md":rt,"/outputs/my-super-book/index.md":it}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default}));async function Qt({params:n,fetch:e}){const{slug:t}=n,a=Bt.find(s=>t===s.slug);if(!a)return{status:404,error:"Work packages not found"};const l=Mt.filter(s=>a.team.includes(s.slug)),r=qt.filter(s=>s.wp?s.wp.includes(a.slug):!1);return{props:oe(se({},a),{team:l,outputs:r})}}function Gt(n,e,t){let a;Tt(n,jt,g=>t(5,a=g));let{component:l}=e,{title:r}=e,{team:s}=e,{outputs:m}=e,{goals:u}=e;return n.$$set=g=>{"component"in g&&t(0,l=g.component),"title"in g&&t(1,r=g.title),"team"in g&&t(2,s=g.team),"outputs"in g&&t(3,m=g.outputs),"goals"in g&&t(4,u=g.goals)},[l,r,s,m,u,a]}class Rt extends Ot{constructor(e){super();Ht(this,e,Gt,At,St,{component:0,title:1,team:2,outputs:3,goals:4})}}export{Rt as default,Qt as load};