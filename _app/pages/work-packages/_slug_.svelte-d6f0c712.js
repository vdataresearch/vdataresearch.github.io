var lt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var Je=(n,e,t)=>e in n?lt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))ot.call(e,t)&&Je(n,t,e[t]);if(Fe)for(var t of Fe(e))nt.call(e,t)&&Je(n,t,e[t]);return n},oe=(n,e)=>at(n,st(e));import{_ as it,a as rt,b as _t,c as ct,d as dt,e as ut,f as mt,g as ft,h as pt,i as gt,j as ht,k as vt,l as bt,m as xt,n as wt,o as kt,p as Et,q as Dt,r as It,s as Vt,t as yt,u as Lt,v as $t,w as zt,x as Ot,y as St,z as Ht}from"../../chunks/index-8bfbb91b.js";import{_ as Tt,a as jt,b as Ct,c as At,d as Bt,e as Mt,f as qt,g as Gt,h as Nt,i as Ut,j as Wt,k as Pt,l as Ft,m as Jt,n as Kt,o as Qt,C as Rt}from"../../chunks/CardTeam-e3f1daa6.js";import{_ as Xt,a as Yt,b as Zt}from"../../chunks/index-926966d2.js";import{S as el,i as tl,s as ll,e as f,t as M,c as p,a as g,h as q,d as _,g as G,T as r,j as et,w as ne,k as V,x as pe,m as y,b,y as ie,q as E,o as L,B as re,p as me,W as Le,V as al,n as fe,L as ye}from"../../chunks/vendor-9afc8e62.js";import{H as sl}from"../../chunks/Head-cffaf879.js";import{p as ol}from"../../chunks/stores-6b5d310d.js";import{C as nl}from"../../chunks/CardOutput-5cc8fb74.js";function Ke(n,e,t){const a=n.slice();return a[6]=e[t],a}function Qe(n,e,t){const a=n.slice();return a[9]=e[t],a}function Re(n,e,t){const a=n.slice();return a[12]=e[t],a}function Xe(n){let e,t=n[12]+"",a;return{c(){e=f("li"),a=M(t)},l(l){e=p(l,"LI",{});var i=g(e);a=q(i,t),i.forEach(_)},m(l,i){G(l,e,i),r(e,a)},p(l,i){i&16&&t!==(t=l[12]+"")&&et(a,t)},d(l){l&&_(e)}}}function Ye(n){let e,t,a,l;return t=new Rt({props:{person:n[9]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(i){e=p(i,"DIV",{class:!0});var s=g(e);pe(t.$$.fragment,s),a=y(s),s.forEach(_),this.h()},h(){b(e,"class","col-12 col-md-4")},m(i,s){G(i,e,s),ie(t,e,null),r(e,a),l=!0},p(i,s){const m={};s&4&&(m.person=i[9]),t.$set(m)},i(i){l||(E(t.$$.fragment,i),l=!0)},o(i){L(t.$$.fragment,i),l=!1},d(i){i&&_(e),re(t)}}}function il(n){let e,t;return{c(){e=f("p"),t=M("No outputs yet!"),this.h()},l(a){e=p(a,"P",{class:!0});var l=g(e);t=q(l,"No outputs yet!"),l.forEach(_),this.h()},h(){b(e,"class","text-muted")},m(a,l){G(a,e,l),r(e,t)},p:ye,i:ye,o:ye,d(a){a&&_(e)}}}function rl(n){let e,t,a=n[3],l=[];for(let s=0;s<a.length;s+=1)l[s]=Ze(Ke(n,a,s));const i=s=>L(l[s],1,1,()=>{l[s]=null});return{c(){e=f("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var m=g(e);for(let u=0;u<l.length;u+=1)l[u].l(m);m.forEach(_),this.h()},h(){b(e,"class","row")},m(s,m){G(s,e,m);for(let u=0;u<l.length;u+=1)l[u].m(e,null);t=!0},p(s,m){if(m&8){a=s[3];let u;for(u=0;u<a.length;u+=1){const h=Ke(s,a,u);l[u]?(l[u].p(h,m),E(l[u],1)):(l[u]=Ze(h),l[u].c(),E(l[u],1),l[u].m(e,null))}for(fe(),u=a.length;u<l.length;u+=1)i(u);me()}},i(s){if(!t){for(let m=0;m<a.length;m+=1)E(l[m]);t=!0}},o(s){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)L(l[m]);t=!1},d(s){s&&_(e),Le(l,s)}}}function Ze(n){let e,t,a,l;return t=new nl({props:{output:n[6]}}),{c(){e=f("div"),ne(t.$$.fragment),a=V(),this.h()},l(i){e=p(i,"DIV",{class:!0});var s=g(e);pe(t.$$.fragment,s),a=y(s),s.forEach(_),this.h()},h(){b(e,"class","col-12 col-md-3 mb-3")},m(i,s){G(i,e,s),ie(t,e,null),r(e,a),l=!0},p(i,s){const m={};s&8&&(m.output=i[6]),t.$set(m)},i(i){l||(E(t.$$.fragment,i),l=!0)},o(i){L(t.$$.fragment,i),l=!1},d(i){i&&_(e),re(t)}}}function _l(n){let e,t,a,l,i,s,m,u,h,z,N,Z,ge,he,x,ve,O,U,ee,be,xe,W,we,S,P,F,te,ke,Ee,J,j,De,H,K,Q,le,Ie,Ve,C,D,I,ae;e=new sl({props:{path:n[5].url.pathname,title:n[1]}});var R=n[0];function $e(o){return{}}R&&(x=new R($e()));let X=n[4],w=[];for(let o=0;o<X.length;o+=1)w[o]=Xe(Re(n,X,o));let A=n[2],v=[];for(let o=0;o<A.length;o+=1)v[o]=Ye(Qe(n,A,o));const tt=o=>L(v[o],1,1,()=>{v[o]=null}),ze=[rl,il],T=[];function Oe(o,d){return o[3].length?0:1}return D=Oe(n),I=T[D]=ze[D](n),{c(){ne(e.$$.fragment),t=V(),a=f("div"),l=f("div"),i=f("div"),s=f("h1"),m=M(n[1]),u=V(),h=f("div"),z=f("div"),N=f("h6"),Z=f("small"),ge=M("Description"),he=V(),x&&ne(x.$$.fragment),ve=V(),O=f("div"),U=f("h6"),ee=f("small"),be=M("Goals"),xe=V(),W=f("ul");for(let o=0;o<w.length;o+=1)w[o].c();we=V(),S=f("div"),P=f("div"),F=f("h6"),te=f("small"),ke=M("Team member"),Ee=V(),J=f("div"),j=f("div");for(let o=0;o<v.length;o+=1)v[o].c();De=V(),H=f("div"),K=f("div"),Q=f("h6"),le=f("small"),Ie=M("Outputs"),Ve=V(),C=f("div"),I.c(),this.h()},l(o){pe(e.$$.fragment,o),t=y(o),a=p(o,"DIV",{class:!0});var d=g(a);l=p(d,"DIV",{class:!0});var k=g(l);i=p(k,"DIV",{class:!0});var Y=g(i);s=p(Y,"H1",{class:!0});var c=g(s);m=q(c,n[1]),c.forEach(_),Y.forEach(_),k.forEach(_),u=y(d),h=p(d,"DIV",{class:!0});var $=g(h);z=p($,"DIV",{class:!0});var _e=g(z);N=p(_e,"H6",{class:!0});var Se=g(N);Z=p(Se,"SMALL",{});var He=g(Z);ge=q(He,"Description"),He.forEach(_),Se.forEach(_),he=y(_e),x&&pe(x.$$.fragment,_e),_e.forEach(_),ve=y($),O=p($,"DIV",{class:!0});var ce=g(O);U=p(ce,"H6",{class:!0});var Te=g(U);ee=p(Te,"SMALL",{});var je=g(ee);be=q(je,"Goals"),je.forEach(_),Te.forEach(_),xe=y(ce),W=p(ce,"UL",{});var Ce=g(W);for(let B=0;B<w.length;B+=1)w[B].l(Ce);Ce.forEach(_),ce.forEach(_),$.forEach(_),we=y(d),S=p(d,"DIV",{class:!0});var de=g(S);P=p(de,"DIV",{class:!0});var Ae=g(P);F=p(Ae,"H6",{class:!0});var Be=g(F);te=p(Be,"SMALL",{});var Me=g(te);ke=q(Me,"Team member"),Me.forEach(_),Be.forEach(_),Ae.forEach(_),Ee=y(de),J=p(de,"DIV",{class:!0});var qe=g(J);j=p(qe,"DIV",{class:!0});var Ge=g(j);for(let B=0;B<v.length;B+=1)v[B].l(Ge);Ge.forEach(_),qe.forEach(_),de.forEach(_),De=y(d),H=p(d,"DIV",{class:!0});var ue=g(H);K=p(ue,"DIV",{class:!0});var Ne=g(K);Q=p(Ne,"H6",{class:!0});var Ue=g(Q);le=p(Ue,"SMALL",{});var We=g(le);Ie=q(We,"Outputs"),We.forEach(_),Ue.forEach(_),Ne.forEach(_),Ve=y(ue),C=p(ue,"DIV",{class:!0});var Pe=g(C);I.l(Pe),Pe.forEach(_),ue.forEach(_),d.forEach(_),this.h()},h(){b(s,"class","display-5 fw-bold"),b(i,"class","col-12 col-md-7"),b(l,"class","row"),b(N,"class","text-primary fw-bold"),b(z,"class","col-12 col-md-5"),b(U,"class","text-primary fw-bold"),b(O,"class","col-12 offset-md-1 col-md-5"),b(h,"class","row border-top border-secondary py-3 py-md-5 mt-4"),b(F,"class","text-primary fw-bold"),b(P,"class","col-5"),b(j,"class","row"),b(J,"class","col-12 mt-2"),b(S,"class","row border-top border-secondary pt-4 "),b(Q,"class","text-primary fw-bold"),b(K,"class","col-5"),b(C,"class","col-12 mt-2"),b(H,"class","row border-top border-secondary pt-4 pb-2"),b(a,"class","container")},m(o,d){ie(e,o,d),G(o,t,d),G(o,a,d),r(a,l),r(l,i),r(i,s),r(s,m),r(a,u),r(a,h),r(h,z),r(z,N),r(N,Z),r(Z,ge),r(z,he),x&&ie(x,z,null),r(h,ve),r(h,O),r(O,U),r(U,ee),r(ee,be),r(O,xe),r(O,W);for(let k=0;k<w.length;k+=1)w[k].m(W,null);r(a,we),r(a,S),r(S,P),r(P,F),r(F,te),r(te,ke),r(S,Ee),r(S,J),r(J,j);for(let k=0;k<v.length;k+=1)v[k].m(j,null);r(a,De),r(a,H),r(H,K),r(K,Q),r(Q,le),r(le,Ie),r(H,Ve),r(H,C),T[D].m(C,null),ae=!0},p(o,[d]){const k={};if(d&32&&(k.path=o[5].url.pathname),d&2&&(k.title=o[1]),e.$set(k),(!ae||d&2)&&et(m,o[1]),R!==(R=o[0])){if(x){fe();const c=x;L(c.$$.fragment,1,0,()=>{re(c,1)}),me()}R?(x=new R($e()),ne(x.$$.fragment),E(x.$$.fragment,1),ie(x,z,null)):x=null}if(d&16){X=o[4];let c;for(c=0;c<X.length;c+=1){const $=Re(o,X,c);w[c]?w[c].p($,d):(w[c]=Xe($),w[c].c(),w[c].m(W,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=X.length}if(d&4){A=o[2];let c;for(c=0;c<A.length;c+=1){const $=Qe(o,A,c);v[c]?(v[c].p($,d),E(v[c],1)):(v[c]=Ye($),v[c].c(),E(v[c],1),v[c].m(j,null))}for(fe(),c=A.length;c<v.length;c+=1)tt(c);me()}let Y=D;D=Oe(o),D===Y?T[D].p(o,d):(fe(),L(T[Y],1,1,()=>{T[Y]=null}),me(),I=T[D],I?I.p(o,d):(I=T[D]=ze[D](o),I.c()),E(I,1),I.m(C,null))},i(o){if(!ae){E(e.$$.fragment,o),x&&E(x.$$.fragment,o);for(let d=0;d<A.length;d+=1)E(v[d]);E(I),ae=!0}},o(o){L(e.$$.fragment,o),x&&L(x.$$.fragment,o),v=v.filter(Boolean);for(let d=0;d<v.length;d+=1)L(v[d]);L(I),ae=!1},d(o){re(e,o),o&&_(t),o&&_(a),x&&re(x),Le(w,o),Le(v,o),T[D].d()}}}const cl=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":Xt,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":Yt,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":Zt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})).sort((n,e)=>n.index-e.index),dl=Object.entries({"/team/alessandra-gaia/index.md":Tt,"/team/alessandro-caliandro/index.md":jt,"/team/annavittoria-sarli/index.md":Ct,"/team/chiara-respi/index.md":At,"/team/dario-pizzul/index.md":Bt,"/team/emanuela-sala/index.md":Mt,"/team/emma-garavaglia/index.md":qt,"/team/flavio-ceravolo/index.md":Gt,"/team/guido-anselmi/index.md":Nt,"/team/guido-legnante/index.md":Ut,"/team/guido-tarricone/index.md":Wt,"/team/laura-zanfrini/index.md":Pt,"/team/marco-gui/index.md":Ft,"/team/marta-cereda/index.md":Jt,"/team/paolo-gomarasca/index.md":Kt,"/team/piercarlo-dondi/index.md":Qt}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default})),ul=Object.entries({"/outputs/cal-for-contributions/index.md":it,"/outputs/co-working/index.md":rt,"/outputs/digital week/index.md":_t,"/outputs/documenti-privacy/index.md":ct,"/outputs/evento-auser/index.md":dt,"/outputs/evento-bicocca/index.md":ut,"/outputs/evento-maggio/index.md":mt,"/outputs/evento-rotterdam/index.md":ft,"/outputs/glasgow/index.md":pt,"/outputs/guildor/index.md":gt,"/outputs/guildor video/index.md":ht,"/outputs/guildor video 2/index.md":vt,"/outputs/italian-experts-perspective/index.md":bt,"/outputs/panel-STS/index.md":xt,"/outputs/paper/index.md":wt,"/outputs/paper 3/index.md":kt,"/outputs/paper 4/index.md":Et,"/outputs/paper 5/index.md":Dt,"/outputs/paper 6/index.md":It,"/outputs/paper 7/index.md":Vt,"/outputs/paper2/index.md":yt,"/outputs/research-centres-initiative/index.md":Lt,"/outputs/resistance/index.md":$t,"/outputs/rotterdam-conference/index.md":zt,"/outputs/summer-school/index.md":Ot,"/outputs/visualizing-italian-citizens-trust/index.md":St,"/outputs/visualizing-surveillance-capitalism-through-twitter/index.md":Ht}).map(([n,e])=>oe(se({},e.metadata),{slug:n.replace(/(\/index)?\.md/,"").split("/").pop(),component:e.default}));async function kl({params:n,fetch:e}){const{slug:t}=n,a=cl.find(s=>t===s.slug);if(!a)return{status:404,error:"Work packages not found"};const l=dl.filter(s=>a.team.includes(s.slug)),i=ul.filter(s=>s.wp?s.wp.includes(a.slug):!1);return{props:oe(se({},a),{team:l,outputs:i})}}function ml(n,e,t){let a;al(n,ol,h=>t(5,a=h));let{component:l}=e,{title:i}=e,{team:s}=e,{outputs:m}=e,{goals:u}=e;return n.$$set=h=>{"component"in h&&t(0,l=h.component),"title"in h&&t(1,i=h.title),"team"in h&&t(2,s=h.team),"outputs"in h&&t(3,m=h.outputs),"goals"in h&&t(4,u=h.goals)},[l,i,s,m,u,a]}class El extends el{constructor(e){super();tl(this,e,ml,_l,ll,{component:0,title:1,team:2,outputs:3,goals:4})}}export{El as default,kl as load};
