(this.webpackJsonphashstack=this.webpackJsonphashstack||[]).push([[8],{891:function(e,t,n){"use strict";n.r(t);var s=n(15),c=n(21),a=n(1),o=n.n(a),i=n(2),r=n.n(i),l=n(12),d=n(16),j=n(131),u=n(181),b=n(22),O=n(29),h=(n(295),n(3));O.a.configure({autoClose:4e3});var m=function(e){var t=Object(i.useState)(),n=Object(c.a)(t,2),a=n[0],r=n[1],m=Object(i.useState)(!1),p=Object(c.a)(m,2),x=p[0],v=p[1],f=Object(i.useState)(0),g=Object(c.a)(f,2),N=g[0],k=g[1],w=Object(i.useState)(!1),T=Object(c.a)(w,2),M=T[0],y=T[1],C=Object(i.useContext)(j.a),I=C.chainId,E=C.account,S=Object(i.useContext)(u.a).web3Wrapper,D=Object(i.useState)(null),B=Object(c.a)(D,2),H=B[0],P=B[1];var R=function(){var t=Object(s.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!x),document.body.classList.add("no_padding"),t.next=4,null===S||void 0===S?void 0:S.getMockBep20Instance().balanceOf(d.i[e.asset],E);case 4:n=t.sent,P(Object(b.a)(Number(n)));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=Object(s.a)(o.a.mark((function t(){var n,s,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,null===S||void 0===S?void 0:S.getMockBep20Instance().approve(d.i[e.asset],N,d.j[I].DecimalsMap[e.asset]);case 4:return n=t.sent,t.next=7,n.wait();case 7:return console.log("Approve Transaction sent: ",n),s=a,t.next=11,null===S||void 0===S?void 0:S.getDepositInstance().depositRequest(d.i[e.asset],d.c[s],N,d.j[I].DecimalsMap[e.asset]);case 11:return c=t.sent,t.next=14,c.wait();case 14:i=t.sent,L(i.events),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),y(!1),O.a.error("".concat(Object(b.b)(t.t0)),{position:O.a.POSITION.BOTTOM_RIGHT,closeOnClick:!0});case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}(),L=function(e){var t;e.forEach((function(e){"DepositAdded"!=e.event&&"NewDeposit"!=e.event||(e.event,t=e.args.amount.toBigInt())})),y(!1);var n=Object(b.a)(t,8);O.a.success("Deposited amount: ".concat(n),{position:O.a.POSITION.BOTTOM_RIGHT,closeOnClick:!0})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-dark btn-sm w-xs",onClick:R,children:"Deposit"}),Object(h.jsx)(l.n,{isOpen:x,toggle:function(){R()},centered:!0,children:Object(h.jsx)("div",{className:"modal-body",children:E?Object(h.jsxs)(l.h,{children:[Object(h.jsxs)("div",{className:"row mb-4",children:[Object(h.jsx)(l.f,{sm:8,children:Object(h.jsxs)("h5",{children:[" ",e.asset]})}),Object(h.jsx)(l.f,{sm:4,children:Object(h.jsxs)("div",{align:"right",children:["Balance : ",H||" Loading"]})})]}),Object(h.jsx)(l.i,{children:Object(h.jsx)("div",{className:"row mb-4",children:Object(h.jsxs)(l.f,{sm:12,children:[Object(h.jsxs)(l.l,{style:{border:0==N||N>=d.h[e.asset]?"1px solid #556EE6":""},children:[Object(h.jsx)(l.k,{type:"number",className:"form-control",id:"amount",placeholder:"Minimum amount = ".concat(d.h[e.asset]),onChange:function(e){k(Number(e.target.value))},value:0!==N?N:"Minimum amount = ".concat(d.h[e.asset]),invalid:0!==N&&N<d.h[e.asset]}),Object(h.jsx)(l.a,{outline:!0,type:"button",className:"btn btn-md w-xs",onClick:function(){H&&k(H)},disabled:!H,style:{background:"#2e3444",border:"#2e3444"},children:Object(h.jsx)("span",{style:{borderBottom:"2px dotted #fff"},children:"Max"})})]}),0!=N&&N<d.h[e.asset]&&Object(h.jsx)(l.j,{children:"Please enter amount more than minimum amount = ".concat(d.h[e.asset])})]})})}),Object(h.jsx)("div",{className:"row mb-4",children:Object(h.jsx)(l.f,{sm:12,children:Object(h.jsxs)("select",{className:"form-select",placeholder:"Commitment",onChange:function(e){r(e.target.value)},children:[Object(h.jsx)("option",{hidden:!0,children:"Commitment"}),Object(h.jsx)("option",{value:"NONE",children:"None"}),Object(h.jsx)("option",{value:"TWOWEEKS",children:"Two Weeks"}),Object(h.jsx)("option",{value:"ONEMONTH",children:"One Month"}),Object(h.jsx)("option",{value:"THREEMONTHS",children:"Three Months"})]})})}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)(l.a,{color:"primary",className:"w-md",disabled:void 0===a||M||N<d.h[e.asset],onClick:W,children:M?Object(h.jsx)(l.s,{children:"Loading..."}):"Deposit"})})]}):Object(h.jsx)("h2",{children:"Please connect your wallet"})})})]})};t.default=m=r.a.memo(m)}}]);
//# sourceMappingURL=8.bba57c06.chunk.js.map