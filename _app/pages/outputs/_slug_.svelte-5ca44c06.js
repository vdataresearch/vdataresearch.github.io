var ue=Object.defineProperty,me=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ne=(a,e,t)=>e in a?ue(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,J=(a,e)=>{for(var t in e||(e={}))pe.call(e,t)&&ne(a,t,e[t]);if(re)for(var t of re(e))he.call(e,t)&&ne(a,t,e[t]);return a},K=(a,e)=>me(a,fe(e));import{_ as ve,a as ge,b as be}from"../../chunks/index-926966d2.js";import{_ as we,a as ke,b as Ee,c as xe,d as $e,e as ye,f as De,g as Ve,h as Ie,i as Se,j as He,k as je}from"../../chunks/index-1321304b.js";import{S as Ae,i as Le,s as Pe,e as h,t as B,k as A,c as v,a as g,h as M,d as c,m as L,b,g as z,T as r,j as Z,w as N,x as ie,y as Q,o as R,p as We,q as X,B as Y,W as qe,V as Be,n as Me}from"../../chunks/vendor-9afc8e62.js";import{s as Oe}from"../../chunks/utils-a1fb3abe.js";import{H as Te}from"../../chunks/Head-cffaf879.js";import{p as ze}from"../../chunks/stores-6b5d310d.js";function ce(a,e,t){const l=a.slice();return l[3]=e[t],l}function _e(a){let e,t,l,o,n,_,k=a[0].authors+"",$;return{c(){e=h("div"),t=h("h6"),l=h("small"),o=B("Authors"),n=A(),_=h("p"),$=B(k),this.h()},l(E){e=v(E,"DIV",{class:!0});var d=g(e);t=v(d,"H6",{class:!0});var D=g(t);l=v(D,"SMALL",{});var w=g(l);o=M(w,"Authors"),w.forEach(c),D.forEach(c),n=L(d),_=v(d,"P",{});var y=g(_);$=M(y,k),y.forEach(c),d.forEach(c),this.h()},h(){b(t,"class","text-primary fw-bold"),b(e,"class","col-12 col-md-6")},m(E,d){z(E,e,d),r(e,t),r(t,l),r(l,o),r(e,n),r(e,_),r(_,$)},p(E,d){d&1&&k!==(k=E[0].authors+"")&&Z($,k)},d(E){E&&c(e)}}}function de(a){let e,t=a[3].label+"",l;return{c(){e=h("p"),l=B(t),this.h()},l(o){e=v(o,"P",{class:!0});var n=g(e);l=M(n,t),n.forEach(c),this.h()},h(){b(e,"class","my-1")},m(o,n){z(o,e,n),r(e,l)},p(o,n){n&2&&t!==(t=o[3].label+"")&&Z(l,t)},d(o){o&&c(e)}}}function Ce(a){let e,t,l,o,n,_,k=a[0].title+"",$,E,d,D,w,y,P,C,F,U,I,S,V,i,W;e=new Te({props:{path:a[2].url.pathname,title:a[0].title}});let f=a[0].authors&&_e(a),H=a[1],p=[];for(let s=0;s<H.length;s+=1)p[s]=de(ce(a,H,s));var j=a[0].component;function ee(s){return{}}return j&&(i=new j(ee())),{c(){N(e.$$.fragment),t=A(),l=h("div"),o=h("div"),n=h("div"),_=h("h1"),$=B(k),E=A(),d=h("div"),f&&f.c(),D=A(),w=h("div"),y=h("h6"),P=h("small"),C=B("Work packages"),F=A();for(let s=0;s<p.length;s+=1)p[s].c();U=A(),I=h("div"),S=h("div"),V=h("div"),i&&N(i.$$.fragment),this.h()},l(s){ie(e.$$.fragment,s),t=L(s),l=v(s,"DIV",{class:!0});var m=g(l);o=v(m,"DIV",{class:!0});var x=g(o);n=v(x,"DIV",{class:!0});var u=g(n);_=v(u,"H1",{class:!0});var q=g(_);$=M(q,k),q.forEach(c),u.forEach(c),x.forEach(c),E=L(m),d=v(m,"DIV",{class:!0});var O=g(d);f&&f.l(O),D=L(O),w=v(O,"DIV",{class:!0});var T=g(w);y=v(T,"H6",{class:!0});var te=g(y);P=v(te,"SMALL",{});var se=g(P);C=M(se,"Work packages"),se.forEach(c),te.forEach(c),F=L(T);for(let G=0;G<p.length;G+=1)p[G].l(T);T.forEach(c),O.forEach(c),U=L(m),I=v(m,"DIV",{class:!0});var ae=g(I);S=v(ae,"DIV",{class:!0});var le=g(S);V=v(le,"DIV",{class:!0});var oe=g(V);i&&ie(i.$$.fragment,oe),oe.forEach(c),le.forEach(c),ae.forEach(c),m.forEach(c),this.h()},h(){b(_,"class","display-5 fw-bold"),b(n,"class","col-12 col-md-7"),b(o,"class","row"),b(y,"class","text-primary fw-bold"),b(w,"class","col-12 col-md-6"),b(d,"class","row border-top border-bottom border-secondary pt-3 my-4"),b(V,"class","content pb-4 svelte-1peola3"),b(S,"class","col-12 col-md-7"),b(I,"class","row"),b(l,"class","container")},m(s,m){Q(e,s,m),z(s,t,m),z(s,l,m),r(l,o),r(o,n),r(n,_),r(_,$),r(l,E),r(l,d),f&&f.m(d,null),r(d,D),r(d,w),r(w,y),r(y,P),r(P,C),r(w,F);for(let x=0;x<p.length;x+=1)p[x].m(w,null);r(l,U),r(l,I),r(I,S),r(S,V),i&&Q(i,V,null),W=!0},p(s,[m]){const x={};if(m&4&&(x.path=s[2].url.pathname),m&1&&(x.title=s[0].title),e.$set(x),(!W||m&1)&&k!==(k=s[0].title+"")&&Z($,k),s[0].authors?f?f.p(s,m):(f=_e(s),f.c(),f.m(d,D)):f&&(f.d(1),f=null),m&2){H=s[1];let u;for(u=0;u<H.length;u+=1){const q=ce(s,H,u);p[u]?p[u].p(q,m):(p[u]=de(q),p[u].c(),p[u].m(w,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=H.length}if(j!==(j=s[0].component)){if(i){Me();const u=i;R(u.$$.fragment,1,0,()=>{Y(u,1)}),We()}j?(i=new j(ee()),N(i.$$.fragment),X(i.$$.fragment,1),Q(i,V,null)):i=null}},i(s){W||(X(e.$$.fragment,s),i&&X(i.$$.fragment,s),W=!0)},o(s){R(e.$$.fragment,s),i&&R(i.$$.fragment,s),W=!1},d(s){Y(e,s),s&&c(t),s&&c(l),f&&f.d(),qe(p,s),i&&Y(i)}}}const Ze=!0,Fe=Object.entries({"/outputs/cal-for-contributions/index.md":we,"/outputs/co-working/index.md":ke,"/outputs/documenti-privacy/index.md":Ee,"/outputs/evento-auser/index.md":xe,"/outputs/evento-bicocca/index.md":$e,"/outputs/evento-maggio/index.md":ye,"/outputs/evento-rotterdam/index.md":De,"/outputs/panel-STS/index.md":Ve,"/outputs/paper/index.md":Ie,"/outputs/research-centres-initiative/index.md":Se,"/outputs/rotterdam-conference/index.md":He,"/outputs/summer-school/index.md":je}),Ue=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":ve,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":ge,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":be}).map(([a,e])=>K(J({},e.metadata),{slug:a.replace(/(\/index)?\.md/,"").split("/").pop()}));async function et({params:a}){let e;for(const[t,l]of Fe)if(Oe(t)===a.slug){e=[t,l];break}return e?{props:{post:K(J({},e[1].metadata),{component:e[1].default}),wps:e[1].metadata.wp.map(t=>{const l=Ue.find(o=>o.slug===t);return{value:t,label:l.title}})}}:{status:404,error:new Error("Post could not be found")}}function Ge(a,e,t){let l;Be(a,ze,_=>t(2,l=_));let{post:o}=e,{wps:n}=e;return a.$$set=_=>{"post"in _&&t(0,o=_.post),"wps"in _&&t(1,n=_.wps)},[o,n,l]}class tt extends Ae{constructor(e){super();Le(this,e,Ge,Ce,Pe,{post:0,wps:1})}}export{tt as default,et as load,Ze as prerender};
