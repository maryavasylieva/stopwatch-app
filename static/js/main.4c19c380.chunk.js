(this["webpackJsonpstopwatch-app"]=this["webpackJsonpstopwatch-app"]||[]).push([[0],{26:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a,s,l,b,d,u=t(0),p=t.n(u),j=t(18),x=t.n(j),f=(t(26),t(4)),h=t(5),O=t(9),g=t(34),m=t(33),v=function(n){var e="0".concat(n%60).slice(-2),t="".concat(Math.floor(n/60)),c="0".concat(t%60).slice(-2),i="0".concat(Math.floor(n/3600)).slice(-2);return{hours:"".concat(i),minutes:"".concat(c),seconds:"".concat(e)}},k=t(1),w=h.a.div(c||(c=Object(f.a)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: #080808;\n  border-radius: 5px;\n  padding: 34px 54px;\n  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.15),\n    0 15px 90px 30px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n"]))),y=h.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),S=h.a.div(r||(r=Object(f.a)(['\n  text-align: center;\n  margin-right: 40px;\n  margin-left: 40px;\n  min-width: 90px;\n  position: relative;\n  &:not(:last-child):before,\n  &:not(:last-child):after {\n    content: "";\n    background-color: rgba(255, 255, 255, 0.3);\n    height: 5px;\n    width: 5px;\n    border-radius: 50%;\n    display: block;\n    position: absolute;\n    right: -42px;\n  }\n  &:not(:last-child):before {\n    top: 35%;\n  }\n  &:not(:last-child):after {\n    top: 50%;\n  }\n']))),C=h.a.span(o||(o=Object(f.a)(['\n  font-family: "Titillium Web", sans-serif;\n  font-size: 50px;\n  &:before {\n    color: #fff;\n    font-size: 4.2rem;\n    text-transform: uppercase;\n  }\n']))),T=h.a.p(a||(a=Object(f.a)(['\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  font-family: "Titillium Web", sans-serif;\n  font-size: 12px;\n  margin-top: 10px;\n']))),z=h.a.div(s||(s=Object(f.a)(["\n  text-align: center;\n  margin-top: 20px;\n"]))),W=h.a.button(l||(l=Object(f.a)(['\n  background-color: #eb776e;\n  font-family: "Titillium Web", sans-serif;\n  border: none;\n  color: white;\n  margin: 0 5px 0 0;\n  padding: 13px 34px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  &:last-child {\n    margin: 0 0 0 0;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    background-color: #f18f88;\n  }\n']))),F=function(){var n=Object(u.useState)(0),e=Object(O.a)(n,2),t=e[0],c=e[1],i=Object(u.useState)(!1),r=Object(O.a)(i,2),o=r[0],a=r[1],s=Object(u.useState)(!1),l=Object(O.a)(s,2),b=l[0],d=l[1],p=Object(u.useState)(""),j=Object(O.a)(p,2),x=j[0],f=j[1],h=Object(u.useState)(0),F=Object(O.a)(h,2),I=(F[0],F[1]),M=Object(g.a)(1e3).pipe(Object(m.a)((function(n){return n+1})));return Object(k.jsxs)(w,{children:[Object(k.jsxs)(y,{children:[Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{children:v(t).hours}),Object(k.jsx)(T,{children:"hours"})]}),Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{children:v(t).minutes}),Object(k.jsx)(T,{children:"minutes"})]}),Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{children:v(t).seconds}),Object(k.jsx)(T,{children:"seconds"})]})]}),Object(k.jsxs)(z,{children:[Object(k.jsx)(W,{onClick:function(){if(!x){var n=M.subscribe((function(n){return c(n+t)}));f(n),a(!0)}},children:"Start"}),Object(k.jsx)(W,{onClick:function(){x&&x.unsubscribe(),c(0),f(""),a(!1)},disabled:!o,children:"Stop"}),Object(k.jsx)(W,{onDoubleClick:function(){if(b){d(!1);var n=setTimeout((function(){d(!0),clearInterval(n)}),300)}else x&&x.unsubscribe(),I(t),f("")},disabled:!o,children:"Wait"}),Object(k.jsx)(W,{onClick:function(){x&&x.unsubscribe();var n=Object(g.a)(1e3).subscribe((function(n){return c(n)}));f(n)},disabled:!o,children:"Reset"})]})]})};var I=h.a.div(b||(b=Object(f.a)(["\n  width: 100%;\n  color: white;\n"]))),M=h.a.h1(d||(d=Object(f.a)(['\n  font-family: "Titillium Web", sans-serif;\n  font-size: 40px;\n  letter-spacing: 4px;\n  text-align: center;\n']))),B=function(){return Object(k.jsxs)(I,{children:[Object(k.jsx)(M,{children:"Stopwatch"}),Object(k.jsx)(F,{})]})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))};x.a.render(Object(k.jsx)(p.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),D()}},[[30,1,2]]]);
//# sourceMappingURL=main.4c19c380.chunk.js.map