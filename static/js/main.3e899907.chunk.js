(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(5),a=n.n(c),s=n(23),i=n.n(s),r=(n(28),n(22)),o=(n(29),n(39)),u=n(38),l=n(33),b=n(37),j=n(34),f=n(35),d=n(20),h=n(36),O=n(2),p=function(t){var e=t.watchOn,n=t.handleReset,c=t.handleStart,a=t.waitButton,s=t.handleResetAndStart;return Object(O.jsxs)("div",{className:"btnGroup",children:[e?Object(O.jsx)("button",{className:"btn",onClick:n,children:"Stop"}):Object(O.jsx)("button",{className:"btn",onClick:c,children:"Start"}),Object(O.jsx)("button",{className:"btn",onClick:s,children:"reset"}),Object(O.jsx)("button",{className:"btn",ref:a,children:"wait"})]})},m=function(t){var e=t.time,n=function(t){return t<10?"0".concat(t):"".concat(t)},c=n(Math.floor(e%60)).slice(-2),a=n(Math.floor(e/60)%60).slice(-2),s=n(Math.floor(e/3600%24)).slice(-2);return Object(O.jsxs)("div",{className:"displayBlock",children:[Object(O.jsx)("span",{className:"display",children:s}),"\xa0:\xa0",Object(O.jsx)("span",{className:"display",children:a}),"\xa0:\xa0",Object(O.jsx)("span",{className:"display",children:c})]})};var x=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),x=i[0],v=i[1],w=Object(c.useRef)();return Object(c.useEffect)((function(){var t=new o.a;return Object(u.a)(1e3).pipe(Object(l.a)(t)).subscribe((function(){x&&a((function(t){return t+1}))})),function(){t.next(),t.complete()}}),[x]),Object(c.useEffect)((function(){if(w&&w.current){var t=Object(b.a)(w.current,"click");t.pipe(Object(j.a)(t.pipe(Object(f.a)(300))),Object(d.a)((function(t){return t.length})),Object(h.a)((function(t){return t>=2}))).subscribe((function(t){v(!1)}))}}),[w]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(m,{time:n}),Object(O.jsx)(p,{watchOn:x,handleReset:function(){a(0),v(!1)},handleStart:function(){v((function(t){return!t}))},handleResetAndStart:function(){a(0),v(!1),v(!0)},waitButton:w})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.3e899907.chunk.js.map