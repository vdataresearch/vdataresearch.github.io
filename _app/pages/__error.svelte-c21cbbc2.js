import{S as V,i as w,s as G,e as f,t as y,k as S,c as u,a as m,h as g,d as i,m as $,b as d,g as j,H as s,j as q,L as I}from"../chunks/vendor-d0bbb509.js";function A(o){let t,r,e,a,v,p,l,x,c,E;return{c(){t=f("div"),r=f("div"),e=f("div"),a=f("h1"),v=y(o[0]),p=S(),l=f("h4"),x=y("Go back to "),c=f("a"),E=y("home"),this.h()},l(n){t=u(n,"DIV",{class:!0});var h=m(t);r=u(h,"DIV",{class:!0});var k=m(r);e=u(k,"DIV",{class:!0});var _=m(e);a=u(_,"H1",{class:!0});var D=m(a);v=g(D,o[0]),D.forEach(i),p=$(_),l=u(_,"H4",{class:!0});var b=m(l);x=g(b,"Go back to "),c=u(b,"A",{class:!0,href:!0});var H=m(c);E=g(H,"home"),H.forEach(i),b.forEach(i),_.forEach(i),k.forEach(i),h.forEach(i),this.h()},h(){d(a,"class","text-center fw-bold my-5 text-muted"),d(c,"class","text-decoration-none"),d(c,"href","/"),d(l,"class","text-center my-5"),d(e,"class","col-12"),d(r,"class","row"),d(t,"class","container")},m(n,h){j(n,t,h),s(t,r),s(r,e),s(e,a),s(a,v),s(e,p),s(e,l),s(l,x),s(l,c),s(c,E)},p(n,[h]){h&1&&q(v,n[0])},i:I,o:I,d(n){n&&i(t)}}}function z({error:o,status:t}){return{props:{title:`${t}: ${o.message}`}}}function C(o,t,r){let{title:e}=t;return o.$$set=a=>{"title"in a&&r(0,e=a.title)},[e]}class B extends V{constructor(t){super();w(this,t,C,A,G,{title:0})}}export{B as default,z as load};
