import{_ as t,a as n,b as e,c as r,i as s,s as a,d as c,S as o,q as l,r as i,u as f,v as u,w as v,x as h,y as p,t as g,f as d,g as m,h as w,j as E,k as b,l as y,m as D,o as I,z as V,A as $,n as k,B,C as S,D as R,E as x,F as z,G as P,H as A,I as T}from"./client.fdd6d4c4.js";import{I as j}from"./Icon.92f3ae40.js";function G(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function H(t,n,e){var r=t.slice();return r[1]=n[e],r}function M(t){var n,e=new j({props:{icon:t[1],label:t[1]}});return{c:function(){l(e.$$.fragment)},l:function(t){i(e.$$.fragment,t)},m:function(t,r){f(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.icon=t[1]),1&n&&(r.label=t[1]),e.$set(r)},i:function(t){n||(u(e.$$.fragment,t),n=!0)},o:function(t){v(e.$$.fragment,t),n=!1},d:function(t){h(e,t)}}}function F(t){var n,e,r=t[0].description+"";return{c:function(){n=p("div"),e=g(r),this.h()},l:function(t){n=d(t,"DIV",{class:!0});var s=m(n);e=w(s,r),s.forEach(E),this.h()},h:function(){b(n,"class","descr svelte-tnwy1z")},m:function(t,r){y(t,n,r),D(n,e)},p:function(t,n){1&n&&r!==(r=t[0].description+"")&&I(e,r)},d:function(t){t&&E(n)}}}function L(t){for(var n,e,r,s,a,c,o,l,i,f,h,x,z,P,A,T,j,G,L,O,J,q,N,W,C=t[0].title+"",_=t[0].author+"",K=t[0].dateString+"",Q=t[0].tags,U=[],X=0;X<Q.length;X+=1)U[X]=M(H(t,Q,X));var Y=function(t){return v(U[t],1,1,function(){U[t]=null})},Z=t[0].description&&F(t);return{c:function(){n=p("div"),e=p("a"),r=p("img"),c=V(),o=p("div"),l=p("div");for(var t=0;t<U.length;t+=1)U[t].c();i=V(),f=p("a"),h=p("h3"),x=g(C),z=V(),Z&&Z.c(),A=V(),T=p("footer"),j=p("span"),G=g("von "),L=g(_),O=V(),J=p("span"),q=g("- "),N=g(K),this.h()},l:function(t){n=d(t,"DIV",{class:!0});var s=m(n);e=d(s,"A",{class:!0,rel:!0,href:!0,role:!0});var a=m(e);r=d(a,"IMG",{src:!0,role:!0,alt:!0,class:!0}),a.forEach(E),c=$(s),o=d(s,"DIV",{class:!0});var u=m(o);l=d(u,"DIV",{"aria-label":!0,class:!0});for(var v=m(l),p=0;p<U.length;p+=1)U[p].l(v);v.forEach(E),i=$(u),f=d(u,"A",{rel:!0,href:!0});var g=m(f);h=d(g,"H3",{class:!0});var b=m(h);x=w(b,C),b.forEach(E),z=$(g),Z&&Z.l(g),g.forEach(E),A=$(u),T=d(u,"FOOTER",{class:!0});var y=m(T);j=d(y,"SPAN",{});var D=m(j);G=w(D,"von "),L=w(D,_),D.forEach(E),O=$(y),J=d(y,"SPAN",{});var I=m(J);q=w(I,"- "),N=w(I,K),I.forEach(E),y.forEach(E),u.forEach(E),s.forEach(E),this.h()},h:function(){r.src!==(s=t[0].thumbnail)&&b(r,"src",s),b(r,"role","presentation"),b(r,"alt","Post Thumbnail"),b(r,"class","svelte-tnwy1z"),b(e,"class","thumbnail svelte-tnwy1z"),b(e,"rel","prefetch"),b(e,"href",a=t[0].link),b(e,"role","presentation"),b(l,"aria-label","Tags"),b(l,"class","tags svelte-tnwy1z"),b(h,"class","svelte-tnwy1z"),b(f,"rel","prefetch"),b(f,"href",P=t[0].link),b(T,"class","svelte-tnwy1z"),b(o,"class","post-preview svelte-tnwy1z"),b(n,"class","excerpt svelte-tnwy1z")},m:function(t,s){y(t,n,s),D(n,e),D(e,r),D(n,c),D(n,o),D(o,l);for(var a=0;a<U.length;a+=1)U[a].m(l,null);D(o,i),D(o,f),D(f,h),D(h,x),D(f,z),Z&&Z.m(f,null),D(o,A),D(o,T),D(T,j),D(j,G),D(j,L),D(T,O),D(T,J),D(J,q),D(J,N),W=!0},p:function(t,n){var c=k(n,1)[0];if((!W||1&c&&r.src!==(s=t[0].thumbnail))&&b(r,"src",s),(!W||1&c&&a!==(a=t[0].link))&&b(e,"href",a),1&c){var o;for(Q=t[0].tags,o=0;o<Q.length;o+=1){var i=H(t,Q,o);U[o]?(U[o].p(i,c),u(U[o],1)):(U[o]=M(i),U[o].c(),u(U[o],1),U[o].m(l,null))}for(B(),o=Q.length;o<U.length;o+=1)Y(o);S()}(!W||1&c)&&C!==(C=t[0].title+"")&&I(x,C),t[0].description?Z?Z.p(t,c):((Z=F(t)).c(),Z.m(f,null)):Z&&(Z.d(1),Z=null),(!W||1&c&&P!==(P=t[0].link))&&b(f,"href",P),(!W||1&c)&&_!==(_=t[0].author+"")&&I(L,_),(!W||1&c)&&K!==(K=t[0].dateString+"")&&I(N,K)},i:function(t){if(!W){for(var n=0;n<Q.length;n+=1)u(U[n]);W=!0}},o:function(t){U=U.filter(Boolean);for(var n=0;n<U.length;n+=1)v(U[n]);W=!1},d:function(t){t&&E(n),R(U,t),Z&&Z.d()}}}function O(t,n,e){var r=n.post;return t.$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var J=function(n){t(l,o);var e=G(l);function l(t){var n;return r(this,l),n=e.call(this),s(c(n),t,O,L,a,{post:0}),n}return l}();function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function N(t,n,e){var r=t.slice();return r[1]=n[e],r}function W(t){var n,e=new J({props:{post:t[1]}});return{c:function(){l(e.$$.fragment)},l:function(t){i(e.$$.fragment,t)},m:function(t,r){f(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.post=t[1]),e.$set(r)},i:function(t){n||(u(e.$$.fragment,t),n=!0)},o:function(t){v(e.$$.fragment,t),n=!1},d:function(t){h(e,t)}}}function C(t){for(var n,e,r,s,a,c,o,l,i,f,h,I,x,z,A,T,j,G,H,M,F,L,O,J,q,C,_,K,Q,U,X,Y,Z,tt,nt,et,rt,st=t[0],at=[],ct=0;ct<st.length;ct+=1)at[ct]=W(N(t,st,ct));var ot=function(t){return v(at[t],1,1,function(){at[t]=null})};return{c:function(){n=p("meta"),e=V(),r=p("div"),s=p("div"),a=p("div"),c=p("img"),o=V(),l=p("div"),i=g("Blog zu Themen aus den Bereichen Javascript, Vue, Svelte, PHP,\n    Symfony und Softwareentwicklung allgemein."),f=V(),h=p("div"),I=p("div"),x=p("div"),z=p("b"),A=g("Becca Roberts"),T=V(),j=p("div"),G=g("Webdeveloper"),H=p("br"),M=g("  Designer"),F=V(),L=p("div"),O=p("img"),J=V(),q=p("div"),C=p("div"),_=p("b"),K=g("Lukas Ehnle"),Q=V(),U=p("div"),X=g("Fullstack Developer"),Y=V(),Z=p("div"),tt=p("img"),nt=V(),et=p("div");for(var t=0;t<at.length;t+=1)at[t].c();this.h()},l:function(t){var u=P('[data-svelte="svelte-gpw3rx"]',document.head);n=d(u,"META",{name:!0,content:!0}),u.forEach(E),e=$(t),r=d(t,"DIV",{class:!0});var v=m(r);s=d(v,"DIV",{class:!0});var p=m(s);a=d(p,"DIV",{class:!0});var g=m(a);c=d(g,"IMG",{src:!0,alt:!0}),o=$(g),l=d(g,"DIV",{class:!0});var b=m(l);i=w(b,"Blog zu Themen aus den Bereichen Javascript, Vue, Svelte, PHP,\n    Symfony und Softwareentwicklung allgemein."),b.forEach(E),g.forEach(E),f=$(p),h=d(p,"DIV",{class:!0});var y=m(h);I=d(y,"DIV",{class:!0});var D=m(I);x=d(D,"DIV",{class:!0});var V=m(x);z=d(V,"B",{class:!0});var k=m(z);A=w(k,"Becca Roberts"),k.forEach(E),T=$(V),j=d(V,"DIV",{});var B=m(j);G=w(B,"Webdeveloper"),H=d(B,"BR",{}),M=w(B,"  Designer"),B.forEach(E),V.forEach(E),F=$(D),L=d(D,"DIV",{class:!0});var S=m(L);O=d(S,"IMG",{src:!0,alt:!0}),S.forEach(E),D.forEach(E),J=$(y),q=d(y,"DIV",{class:!0});var R=m(q);C=d(R,"DIV",{class:!0});var N=m(C);_=d(N,"B",{class:!0});var W=m(_);K=w(W,"Lukas Ehnle"),W.forEach(E),Q=$(N),U=d(N,"DIV",{});var rt=m(U);X=w(rt,"Fullstack Developer"),rt.forEach(E),N.forEach(E),Y=$(R),Z=d(R,"DIV",{class:!0});var st=m(Z);tt=d(st,"IMG",{src:!0,alt:!0}),st.forEach(E),R.forEach(E),y.forEach(E),p.forEach(E),nt=$(v),et=d(v,"DIV",{class:!0});for(var ct=m(et),ot=0;ot<at.length;ot+=1)at[ot].l(ct);ct.forEach(E),v.forEach(E),this.h()},h:function(){document.title="OwlAbout Blog",b(n,"name","Description"),b(n,"content","Blog zu Themen aus den Bereichen Javascript, Vue, Svelte, PHP,\n    Symfony und Softwareentwicklung allgemein."),c.src!=="/app/logo-blog.svg"&&b(c,"src","/app/logo-blog.svg"),b(c,"alt","OwlAbout Blog Logo"),b(l,"class","descr"),b(a,"class","blog-info-container svelte-5wss4"),b(z,"class","name svelte-5wss4"),b(x,"class","author-desc svelte-5wss4"),O.src!=="/images/becca-fp.png"&&b(O,"src","/images/becca-fp.png"),b(O,"alt","Becca Roberts"),b(L,"class","author-thumbnail becca svelte-5wss4"),b(I,"class","author becca svelte-5wss4"),b(_,"class","name svelte-5wss4"),b(C,"class","author-desc svelte-5wss4"),tt.src!=="/images/lukas-fp.png"&&b(tt,"src","/images/lukas-fp.png"),b(tt,"alt","Lukas Ehnle"),b(Z,"class","author-thumbnail lukas svelte-5wss4"),b(q,"class","author lukas svelte-5wss4"),b(h,"class","authors svelte-5wss4"),b(s,"class","blog-intro svelte-5wss4"),b(et,"class","excerpts-container svelte-5wss4"),b(r,"class","container")},m:function(t,u){D(document.head,n),y(t,e,u),y(t,r,u),D(r,s),D(s,a),D(a,c),D(a,o),D(a,l),D(l,i),D(s,f),D(s,h),D(h,I),D(I,x),D(x,z),D(z,A),D(x,T),D(x,j),D(j,G),D(j,H),D(j,M),D(I,F),D(I,L),D(L,O),D(h,J),D(h,q),D(q,C),D(C,_),D(_,K),D(C,Q),D(C,U),D(U,X),D(q,Y),D(q,Z),D(Z,tt),D(r,nt),D(r,et);for(var v=0;v<at.length;v+=1)at[v].m(et,null);rt=!0},p:function(t,n){var e=k(n,1)[0];if(1&e){var r;for(st=t[0],r=0;r<st.length;r+=1){var s=N(t,st,r);at[r]?(at[r].p(s,e),u(at[r],1)):(at[r]=W(s),at[r].c(),u(at[r],1),at[r].m(et,null))}for(B(),r=st.length;r<at.length;r+=1)ot(r);S()}},i:function(t){if(!rt){for(var n=0;n<st.length;n+=1)u(at[n]);rt=!0}},o:function(t){at=at.filter(Boolean);for(var n=0;n<at.length;n+=1)v(at[n]);rt=!1},d:function(t){E(n),t&&E(e),t&&E(r),R(at,t)}}}function _(t){return K.apply(this,arguments)}function K(){return(K=x(z.mark(function t(n){var e,r;return z.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.next=3,this.fetch("index.json");case 3:return e=t.sent,t.next=6,e.json();case 6:if(r=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{posts:r});case 11:this.error(e.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function Q(t,n,e){var r=n.posts;return A(function(){T.set("de")}),t.$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}export default(function(n){t(l,o);var e=q(l);function l(t){var n;return r(this,l),n=e.call(this),s(c(n),t,Q,C,a,{posts:0}),n}return l}());export{_ as preload};
