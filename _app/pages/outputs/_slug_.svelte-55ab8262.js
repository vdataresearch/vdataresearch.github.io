var ue=Object.defineProperty,me=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ie=(a,e,t)=>e in a?ue(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,U=(a,e)=>{for(var t in e||(e={}))fe.call(e,t)&&ie(a,t,e[t]);if(ne)for(var t of ne(e))ve.call(e,t)&&ie(a,t,e[t]);return a},G=(a,e)=>me(a,pe(e));import{_ as he,a as ge,b as be}from"../../chunks/index-1f30b1b2.js";import{_ as we,a as Ee,b as ke,c as $e,d as De,e as Ve,f as ye}from"../../chunks/index-900cd45e.js";import{S as Ie,i as xe,s as Se,e as u,t as B,k as j,c as m,a as p,h as M,d as i,m as H,b as h,g as X,T as l,j as Y,w as J,x as ce,y as K,o as N,p as je,q as Q,B as R,V as He,n as Ae}from"../../chunks/vendor-9afc8e62.js";import{s as Le}from"../../chunks/utils-a1fb3abe.js";import{H as Pe}from"../../chunks/Head-06b5fda6.js";import{p as qe}from"../../chunks/stores-6b5d310d.js";function de(a){let e,t,o,f,v,n,g=a[0].authors+"",E;return{c(){e=u("div"),t=u("h6"),o=u("small"),f=B("Authors"),v=j(),n=u("p"),E=B(g),this.h()},l(b){e=m(b,"DIV",{class:!0});var c=p(e);t=m(c,"H6",{class:!0});var $=p(t);o=m($,"SMALL",{});var w=p(o);f=M(w,"Authors"),w.forEach(i),$.forEach(i),v=H(c),n=m(c,"P",{});var k=p(n);E=M(k,g),k.forEach(i),c.forEach(i),this.h()},h(){h(t,"class","text-primary fw-bold"),h(e,"class","col-12 col-md-6")},m(b,c){X(b,e,c),l(e,t),l(t,o),l(o,f),l(e,v),l(e,n),l(n,E)},p(b,c){c&1&&g!==(g=b[0].authors+"")&&Y(E,g)},d(b){b&&i(e)}}}function Be(a){let e,t,o,f,v,n,g=a[0].title+"",E,b,c,$,w,k,A,z,C,L,P=a[1].map(_e).join()+"",O,F,V,y,D,r,I;e=new Pe({props:{path:a[2].url.pathname,title:a[0].title}});let d=a[0].authors&&de(a);var x=a[0].component;function Z(s){return{}}return x&&(r=new x(Z())),{c(){J(e.$$.fragment),t=j(),o=u("div"),f=u("div"),v=u("div"),n=u("h1"),E=B(g),b=j(),c=u("div"),d&&d.c(),$=j(),w=u("div"),k=u("h6"),A=u("small"),z=B("Work packages"),C=j(),L=u("p"),O=B(P),F=j(),V=u("div"),y=u("div"),D=u("div"),r&&J(r.$$.fragment),this.h()},l(s){ce(e.$$.fragment,s),t=H(s),o=m(s,"DIV",{class:!0});var _=p(o);f=m(_,"DIV",{class:!0});var S=p(f);v=m(S,"DIV",{class:!0});var q=p(v);n=m(q,"H1",{class:!0});var ee=p(n);E=M(ee,g),ee.forEach(i),q.forEach(i),S.forEach(i),b=H(_),c=m(_,"DIV",{class:!0});var T=p(c);d&&d.l(T),$=H(T),w=m(T,"DIV",{class:!0});var W=p(w);k=m(W,"H6",{class:!0});var te=p(k);A=m(te,"SMALL",{});var ae=p(A);z=M(ae,"Work packages"),ae.forEach(i),te.forEach(i),C=H(W),L=m(W,"P",{});var se=p(L);O=M(se,P),se.forEach(i),W.forEach(i),T.forEach(i),F=H(_),V=m(_,"DIV",{class:!0});var oe=p(V);y=m(oe,"DIV",{class:!0});var le=p(y);D=m(le,"DIV",{class:!0});var re=p(D);r&&ce(r.$$.fragment,re),re.forEach(i),le.forEach(i),oe.forEach(i),_.forEach(i),this.h()},h(){h(n,"class","display-5 fw-bold"),h(v,"class","col-12 col-md-7"),h(f,"class","row"),h(k,"class","text-primary fw-bold"),h(w,"class","col-12 col-md-6"),h(c,"class","row border-top border-bottom border-secondary pt-3 my-4"),h(D,"class","content pb-4 svelte-1peola3"),h(y,"class","col-12 col-md-7"),h(V,"class","row"),h(o,"class","container")},m(s,_){K(e,s,_),X(s,t,_),X(s,o,_),l(o,f),l(f,v),l(v,n),l(n,E),l(o,b),l(o,c),d&&d.m(c,null),l(c,$),l(c,w),l(w,k),l(k,A),l(A,z),l(w,C),l(w,L),l(L,O),l(o,F),l(o,V),l(V,y),l(y,D),r&&K(r,D,null),I=!0},p(s,[_]){const S={};if(_&4&&(S.path=s[2].url.pathname),_&1&&(S.title=s[0].title),e.$set(S),(!I||_&1)&&g!==(g=s[0].title+"")&&Y(E,g),s[0].authors?d?d.p(s,_):(d=de(s),d.c(),d.m(c,$)):d&&(d.d(1),d=null),(!I||_&2)&&P!==(P=s[1].map(_e).join()+"")&&Y(O,P),x!==(x=s[0].component)){if(r){Ae();const q=r;N(q.$$.fragment,1,0,()=>{R(q,1)}),je()}x?(r=new x(Z()),J(r.$$.fragment),Q(r.$$.fragment,1),K(r,D,null)):r=null}},i(s){I||(Q(e.$$.fragment,s),r&&Q(r.$$.fragment,s),I=!0)},o(s){N(e.$$.fragment,s),r&&N(r.$$.fragment,s),I=!1},d(s){R(e,s),s&&i(t),s&&i(o),d&&d.d(),r&&R(r)}}}const Ke=!0,Me=Object.entries({"/outputs/documenti-privacy/index.md":we,"/outputs/evento-auser/index.md":Ee,"/outputs/evento-bicocca/index.md":ke,"/outputs/evento-maggio/index.md":$e,"/outputs/evento-rotterdam/index.md":De,"/outputs/panel-STS/index.md":Ve,"/outputs/paper/index.md":ye}),Oe=Object.entries({"/work-packages/digital-data-and-value-creation-citizens-knowledge-awareness-and-opinions/index.md":he,"/work-packages/surveillance-capitalism-social-exclusion-and-discrimination/index.md":ge,"/work-packages/the-public-discourse-on-surveillance-capitalism/index.md":be}).map(([a,e])=>G(U({},e.metadata),{slug:a.replace(/(\/index)?\.md/,"").split("/").pop()}));async function Ne({params:a}){let e;for(const[t,o]of Me)if(Le(t)===a.slug){e=[t,o];break}return e?{props:{post:G(U({},e[1].metadata),{component:e[1].default}),wps:e[1].metadata.wp.map(t=>{const o=Oe.find(f=>f.slug===t);return{value:t,label:o.title}})}}:{status:404,error:new Error("Post could not be found")}}const _e=a=>a.label;function Te(a,e,t){let o;He(a,qe,n=>t(2,o=n));let{post:f}=e,{wps:v}=e;return a.$$set=n=>{"post"in n&&t(0,f=n.post),"wps"in n&&t(1,v=n.wps)},[f,v,o]}class Qe extends Ie{constructor(e){super();xe(this,e,Te,Be,Se,{post:0,wps:1})}}export{Qe as default,Ne as load,Ke as prerender};
