var lt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var Je=(n,e,t)=>e in n?lt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))ot.call(e,t)&&Je(n,t,e[t]);if(Fe)for(var t of Fe(e))nt.call(e,t)&&Je(n,t,e[t]);return n},oe=(n,e)=>at(n,st(e));import{_ as rt,a as it,b as ct,c as _t,d as dt,e as ut,f as mt,g as ft,h as ht,i as pt,j as gt,k as vt}from"../../chunks/index-1321304b.js";import{_ as bt,a as xt,b as wt,c as kt,d as Et,e as Dt,f as It,g as Vt,h as yt,i as Lt,j as $t,k as Ot,l as St,m as Ht,n as Tt,o as jt,C as Ct}from"../../chunks/CardTeam-e3f1daa6.js";import{_ as zt,a as At,b as Bt}from"../../chunks/index-926966d2.js";import{S as Mt,i as qt,s as Gt,e as f,t as M,c as h,a as p,h as q,d as c,g as G,T as i,j as et,w as ne,k as V,x as he,m as y,b,y as re,q as E,o as L,B as ie,p as me,W as Le,V as Nt,n as fe,L as ye}from"../../chunks/vendor-9afc8e62.js";import{H as Ut}from"../../chunks/Head-cffaf879.js";import{p as Wt}from"../../chunks/stores-6b5d310d.js";import{C as Pt}from"../../chunks/CardOutput-5cc8fb74.js";function Ke(n,e,t){const a=n.slice();return a[6]=e[t],a}function Qe(n,e,t){const a=n.slice();return a[9]=e[t],a}function Re(n,e,t){const a=n.slice();return a[12]=e[t],a}function Xe(n){let e,t=n[12]+"",a;return{c(){e=f("li"),a=M(t)},l(l){e=h(l,"LI",{});var r=p(e);a=q(r,t),r.forEach(c)},m(l,r){G(l,e,r),i(e,a)},p(l,r){r&16&&t!==(t=l[12]+"")&&et(a,t)},d(l){l&&c(e)}}}function Ye(n){let e,t,a,l;return t=new Ct({props:{person:n[9]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-4")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&4&&(m.person=r[9]),t.$set(m)},i(r){l||(E(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function Ft(n){let e,t;return{c(){e=f("p"),t=M("No outputs yet!"),this.h()},l(a){e=h(a,"P",{class:!0});var l=p(e);t=q(l,"No outputs yet!"),l.forEach(c),this.h()},h(){b(e,"class","text-muted")},m(a,l){G(a,e,l),i(e,t)},p:ye,i:ye,o:ye,d(a){a&&c(e)}}}function Jt(n){let e,t,a=n[3],l=[];for(let s=0;s<a.length;s+=1)l[s]=Ze(Ke(n,a,s));const r=s=>L(l[s],1,1,()=>{l[s]=null});return{c(){e=f("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0});var m=p(e);for(let u=0;u<l.length;u+=1)l[u].l(m);m.forEach(c),this.h()},h(){b(e,"class","row")},m(s,m){G(s,e,m);for(let u=0;u<l.length;u+=1)l[u].m(e,null);t=!0},p(s,m){if(m&8){a=s[3];let u;for(u=0;u<a.length;u+=1){const g=Ke(s,a,u);l[u]?(l[u].p(g,m),E(l[u],1)):(l[u]=Ze(g),l[u].c(),E(l[u],1),l[u].m(e,null))}for(fe(),u=a.length;u<l.length;u+=1)r(u);me()}},i(s){if(!t){for(let m=0;m<a.length;m+=1)E(l[m]);t=!0}},o(s){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)L(l[m]);t=!1},d(s){s&&c(e),Le(l,s)}}}function Ze(n){let e,t,a,l;return t=new Pt({props:{output:n[6]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(r){e=h(r,"DIV",{class:!0});var s=p(e);he(t.$$.fragment,s),a=y(s),s.forEach(c),this.h()},h(){b(e,"class","col-12 col-md-3 mb-3")},m(r,s){G(r,e,s),re(t,e,null),i(e,a),l=!0},p(r,s){const m={};s&8&&(m.output=r[6]),t.$set(m)},i(r){l||(E(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&c(e),ie(t)}}}function Kt(n){let e,t,a,l,r,s,m,u,g,O,N,Z,pe,ge,x,ve,S,U,ee,be,xe,W,we,H,P,F,te,ke,Ee,J,C,De,T,K,Q,le,Ie,Ve,z,D,I,ae;e=new Ut({props:{path:n[5].url.pathname,title:n[1]}});var R=n[0];function $e(o){return{}}R&&(x=new R($e()));let X=n[4],w=[];for(let o=0;o<X.length;o+=1)w[o]=Xe(Re(n,X,o));let A=n[2],v=[];for(let o=0;o<A.length;o+=1)v[o]=Ye(Qe(n,A,o));const tt=o=>L(v[o],1,1,()=>{v[o]=null}),Oe=[Jt,Ft],j=[];function Se(o,d){return o[3].length?0:1}return D=Se(n),I=j[D]=Oe[D](n),{c(){ne(e.$$.fragment),t=V(),a=f("div"),l=f("div"),r=f("div"),s=f("h1"),m=M(n[1]),u=V(),g=f("div"),O=f("div"),N=f("h6"),Z=f("small"),pe=M("Description"),ge=V(),x&&ne(x.$$.fragment),ve=V(),S=f("div"),U=f("h6"),ee=f("small"),be=M("Goals"),xe=V(),W=f("ul");for(let o=0;o<w.length;o+=1)w[o].c();we=V(),H=f("div"),P=f("div"),F=f("h6"),te=f("small"),ke=M("Team member"),Ee=V(),J=f("div"),C=f("div");for(let o=0;o<v.length;o+=1)v[o].c();De=V(),T=f("div"),K=f("div"),Q=f("h6"),le=f("small"),Ie=M("Outputs"),Ve=V(),z=f("div"),I.c(),this.h()},l(o){he(e.$$.fragment,o),t=y(o),a=h(o,"DIV",{class:!0});var d=p(a);l=h(d,"DIV",{class:!0});var k=p(l);r=h(k,"DIV",{class:!0});var Y=p(r);s=h(Y,"H1",{class:!0});var _=p(s);m=q(_,n[1]),_.forEach(c),Y.forEach(c),k.forEach(c),u=y(d),g=h(d,"DIV",{class:!0});var $=p(g);O=h($,"DIV",{class:!0});var ce=p(O);N=h(ce,"H6",{class:!0});var He=p(N);Z=h(He,"SMALL",{});var Te=p(Z);pe=q(Te,"Description"),Te.forEach(c),He.forEach(c),ge=y(ce),x&&he(x.$$.fragment,ce),ce.forEach(c),ve=y($),S=h($,"DIV",{class:!0});var _e=p(S);U=h(_e,"H6",{class:!0});var je=p(U);ee=h(je,"SMALL",{});var Ce=p(ee);be=q(Ce,"Goals"),Ce.forEach(c),je.forEach(c),xe=y(_e),W=h(_e,"UL",{});var ze=p(W);for(let B=0;B<w.length;B+=1)w[B].l(ze);ze.forEach(c),_e.forEach(c),$.forEach(c),we=y(d),H=h(d,"DIV",{class:!0});var de=p(H);P=h(de,"DIV",{class:!0});var Ae=p(P);F=h(Ae,"H6",{class:!0});var Be=p(F);te=h(Be,"SMALL",{});var Me=p(te);ke=q(Me,"Team member"),Me.forEach(c),Be.forEach(c),Ae.forEach(c),Ee=y(de),J=h(de,"DIV",{class:!0});var qe=p(J);C=h(qe,"DIV",{class:!0});var Ge=p(C);for(let B=0;B<v.length;B+=1)v[B].l(Ge);Ge.forEach(c),qe.forEach(c),de.forEach(c),De=y(d),T=h(d,"DIV",{class:!0});var ue=p(T);K=h(ue,"DIV",{class:!0});var Ne=p(K);Q=h(Ne,"H6",{class:!0});var Ue=p(Q);le=h(Ue,"SMALL",{});var We=p(le);Ie=q(We,"Outputs"),We.forEach(c),Ue.forEach(c),Ne.forEach(c),Ve=y(ue),z=h(ue,"DIV",{class:!0});var Pe=p(z);I.l(Pe),Pe.forEach(c),ue.forEach(c),d.forEach(c),this.h()},h(){b(s,"class","display-5 fw-bold"),b(r,"class","col-12 col-md-7"),b(l,"class","row"),b(N,"class","text-primary fw-bold"),b(O,"class","col-12 col-md-5"),b(U,"class","text-primary fw-bold"),b(S,"class","col-12 offset-md-1 col-md-5"),b(g,"class","row border-top border-secondary py-3 py-md-5 mt-4"),b(F,"class","text-primary fw-bold"),b(P,"class","col-5"),b(C,"class","row"),b(J,"class","col-12 mt-2"),b(H,"class","row border-top border-secondary pt-4 "),b(Q,"class","text-primary fw-bold"),b(K,"class","col-5"),b(z,"class","col-12 mt-2"),b(T,"class","row border-top border-secondary pt-4 pb-2"),b(a,"class","container")},m(o,d){re(e,o,d),G(o,t,d),G(o,a,d),i(a,l),i(l,r),i(r,s),i(s,m),i(a,u),i(a,g),i(g,O),i(O,N),i(N,Z),i(Z,pe),i(O,ge),x&&re(x,O,null),i(g,ve),i(g,S),i(S,U),i(U,ee),i(ee,be),i(S,xe),i(S,W);for(let k=0;k<w.length;k+=1)w[k].m(W,null);i(a,we),i(a,H),i(H,P),i(P,F),i(F,te),i(te,ke),i(H,Ee),i(H,J),i(J,C);for(let k=0;k<v.length;k+=1)v[k].m(C,null);i(a,De),i(a,T),i(T,K),i(K,Q),i(Q,le),i(le,Ie),i(T,Ve),i(T,z),j[D].m(z,null),ae=!0},p(o,[d]){const k={};if(d&32&&(k.path=o[5].url.pathname),d&2&&(k.title=o[1]),e.$set(k),(!ae||d&2)&&et(m,o[1]),R!==(R=o[0])){if(x){fe();const _=x;L(_.$$.fragment,1,0,()=>{ie(_,1)}),me()}R?(x=new R($e()),ne(x.$$.fragment),E(x.$$.fragment,1),re(x,O,null)):x=null}if(d&16){X=o[4];let _;for(_=0;_<X.length;_+=1){const $=Re(o,X,_);w[_]?w[_].p($,d):(w[_]=Xe($),w[_].c(),w[_].m(W,null))}for(;_<w.length;_+=1)w[_].d(1);w.length=X.length}if(d&4){A=o[2];let _;for(_=0;_<A.length;_+=1){const $=Qe(o,A,_);v[_]?(v[_].p($,d),E(v[_],1)):(v[_]=Ye($),v[_].c(),E(v[_],1),v[_].m(C,null))}for(fe(),_=A.length;_<v.length;_+=1)tt(_);me()}let Y=D;D=Se(o),D===Y?j[D].p(o,d):(fe(),L(j[Y],1,1,()=>{j[Y]=null}),me(),I=j[D],I?I.p(o,d):(I=j[D]=Oe[D](o),I.c()),E(I,1),I.m(z,null))},i(o){if(!ae){E(e.$$.fragment,o),x&&E(x.$$.fragment,o);for(let d=0;d<A.length;d+=1)E(v[d]);E(I),ae=!0}},o(o){L(e.$$.fragment,o),x&&L(x.$$.fragment,o),v=v.filter(Boolean);for(let d=0;d<v.length;d+=1)L(v[d]);L(I),ae=!1},d(o){ie(e,o),o&&c(t),o&&c(a),x&&ie(x),Le(w,o),Le(v,o),j[D].d()}}}const Qt=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":zt,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":At,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Bt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})).sort((n,e)=>n.index-e.index),Rt=Object.entries({"/team/alessandra-gaia/index.md":bt,"/team/alessandro-caliandro/index.md":xt,"/team/annavittoria-sarli/index.md":wt,"/team/chiara-respi/index.md":kt,"/team/dario-pizzul/index.md":Et,"/team/emanuela-sala/index.md":Dt,"/team/emma-garavaglia/index.md":It,"/team/flavio-ceravolo/index.md":Vt,"/team/guido-anselmi/index.md":yt,"/team/guido-legnante/index.md":Lt,"/team/guido-tarricone/index.md":$t,"/team/laura-zanfrini/index.md":Ot,"/team/marco-gui/index.md":St,"/team/marta-cereda/index.md":Ht,"/team/paolo-gomarasca/index.md":Tt,"/team/piercarlo-dondi/index.md":jt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})),Xt=Object.entries({"/outputs/cal-for-contributions/index.md":rt,"/outputs/co-working/index.md":it,"/outputs/documenti-privacy/index.md":ct,"/outputs/evento-auser/index.md":_t,"/outputs/evento-bicocca/index.md":dt,"/outputs/evento-maggio/index.md":ut,"/outputs/evento-rotterdam/index.md":mt,"/outputs/panel-STS/index.md":ft,"/outputs/paper/index.md":ht,"/outputs/research-centres-initiative/index.md":pt,"/outputs/rotterdam-conference/index.md":gt,"/outputs/summer-school/index.md":vt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default}));async function rl({params:n,fetch:e}){const{slug:t}=n,a=Qt.find(s=>t===s.slug);if(!a)return{status:404,error:"Work packages not found"};const l=Rt.filter(s=>a.team.includes(s.slug)),r=Xt.filter(s=>s.wp?s.wp.includes(a.slug):!1);return{props:oe(se({},a),{team:l,outputs:r})}}function Yt(n,e,t){let a;Nt(n,Wt,g=>t(5,a=g));let{component:l}=e,{title:r}=e,{team:s}=e,{outputs:m}=e,{goals:u}=e;return n.$$set=g=>{"component"in g&&t(0,l=g.component),"title"in g&&t(1,r=g.title),"team"in g&&t(2,s=g.team),"outputs"in g&&t(3,m=g.outputs),"goals"in g&&t(4,u=g.goals)},[l,r,s,m,u,a]}class il extends Mt{constructor(e){super();qt(this,e,Yt,Kt,Gt,{component:0,title:1,team:2,outputs:3,goals:4})}}export{il as default,rl as load};
