(this["webpackJsonpstopwatch-app"]=this["webpackJsonpstopwatch-app"]||[]).push([[0],{26:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var c,i,a,r,o=e(0),s=e.n(o),b=e(18),u=e.n(b),j=(e(26),e(6)),l=e(8),O=e(9),d=e(34),p=e(33),f=e(1),h=l.a.div(c||(c=Object(j.a)(['\n  font-family: "Raleway", sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n']))),x=l.a.div(i||(i=Object(j.a)(["\n  text-align: center;\n  margin-top: 40px;\n"]))),g=l.a.button(a||(a=Object(j.a)(["\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  margin: 0 5px 0 0;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  &:last-child {\n    margin: 0 0 0 0;\n  }\n"]))),v=function(){var n=Object(o.useState)(!1),t=Object(O.a)(n,2),e=(t[0],t[1]),c=Object(o.useState)(0),i=Object(O.a)(c,2),a=i[0],r=i[1],s=Object(o.useState)(""),b=Object(O.a)(s,2),u=b[0],j=b[1],l=Object(o.useState)(!1),v=Object(O.a)(l,2),S=v[0],m=v[1],k=Object(o.useState)(0),w=Object(O.a)(k,2),C=(w[0],w[1]),F=Object(d.a)(1e3).pipe(Object(p.a)((function(n){return n+1})));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{children:function(){var n="0".concat(a%60).slice(-2),t="".concat(Math.floor(a/60)),e="0".concat(t%60).slice(-2),c="0".concat(Math.floor(a/3600)).slice(-2);return"".concat(c," : ").concat(e," : ").concat(n)}()}),Object(f.jsxs)(x,{children:[Object(f.jsx)(g,{onClick:function(){var n=F.subscribe((function(n){return r(n+a)}));j(n),e(!0)},children:"Start"}),Object(f.jsx)(g,{onClick:function(){u.unsubscribe(),r(0)},children:"Stop"}),Object(f.jsx)(g,{onDoubleClick:function(){if(S){m(!1);var n=setTimeout((function(){m(!0),clearInterval(n)}),300)}else u&&u.unsubscribe(),C(a)},children:"Wait"}),Object(f.jsx)(g,{onClick:function(){u&&u.unsubscribe();var n=Object(d.a)(1e3).subscribe((function(n){return r(n)}));j(n)},children:"Reset"})]})]})};var S=l.a.h1(r||(r=Object(j.a)(["\n  text-align: center;\n"]))),m=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{children:Object(f.jsx)(S,{children:"Stopwatch"})}),Object(f.jsx)(v,{})]})},k=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),c(n),i(n),a(n),r(n)}))};u.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),k()}},[[30,1,2]]]);
//# sourceMappingURL=main.0e5add6f.chunk.js.map