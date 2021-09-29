(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(19),a=n.n(c),i=n(1),o=function(){return Object(r.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(r.jsx)("br",{}),Object(r.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},s=n(2),u=n.n(s),j=n(6),l=n(3),d=n(5),b=n.n(d),f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),o=Object(l.a)(a,2),s=o[0],d=o[1],f=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=" https://api.countrylayer.com/v2/name/".concat(s,"?access_key=7b84c7dfad9958c4919908535a89017b"),e.next=3,b.a.get(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,d(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",onChange:h}),n?Object(r.jsx)(p,{countries:n}):null]})},p=function(e){return e.countries.length>10?Object(r.jsx)("div",{children:"Too many matches, specify another filter"}):1===e.countries.length?Object(r.jsx)("div",{children:e.countries.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsxs)("div",{children:["capital ",e.capital]}),Object(r.jsxs)("div",{children:["population ",e.population]}),Object(r.jsx)("h4",{children:"Languages"}),Object(r.jsx)("ul",{children:e.languages.map((function(e,t){return Object(r.jsx)("li",{children:e.name},t)}))}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{height:"100",width:"100",alt:"flag",src:e.flag})})]},e.numericCode)}))}):Object(r.jsx)("div",{children:e.countries.map((function(e){return Object(r.jsxs)("div",{children:[" ",e.name]},e.numericCode)}))})},h=n(10),O="/api/notes",m=function(e){return e.then((function(e){return e.data}))},x=function(){var e=b.a.get(O);return m(e)},v=function(e){var t=b.a.post(O,e);return m(t)},g=function(e,t){var n=b.a.put("".concat(O,"/").concat(e),t);return m(n)},w=function(e){var t=e.note,n=e.toggleImportance,c=t.important?"make not important":"make important";return Object(r.jsxs)("li",{className:"note",children:[t.content,Object(r.jsx)("button",{onClick:n,children:c})]})},y=function(e){var t=e.message,n=e.type;return null==t?null:Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:n,children:t})})},k=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),o=Object(l.a)(a,2),s=o[0],u=o[1],j=Object(i.useState)(!0),d=Object(l.a)(j,2),b=d[0],f=d[1],p=Object(i.useState)(null),O=Object(l.a)(p,2),m=O[0],k=O[1];Object(i.useEffect)((function(){x().then((function(e){c(e.concat({id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0}))}))}),[]);var S=b?n:n.filter((function(e){return e.important}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{message:m,type:"error"}),Object(r.jsx)("div",{children:Object(r.jsxs)("button",{onClick:function(){return f(!b)},children:["show ",b?"important":"all"]})}),Object(r.jsx)("ul",{children:S.map((function(e){return Object(r.jsx)(w,{note:e,toggleImportance:function(){return function(e){var t=n.filter((function(t){return t.id===e})),r=Object(h.a)(Object(h.a)({},t),{},{important:!t.important});g(e,r).then((function(t){c(n.map((function(n){return n.id!==e?n:t})))})).catch((function(t){k("This note ".concat(t," was already delete")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(t){return t.id!==e})))}))}(e.id)}},e.id)}))}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={content:s,data:(new Date).toISOString(),important:Math.random()<.5,id:n.length+1};v(t).then((function(e){c(n.concat(t)),u("")}))},children:[Object(r.jsx)("input",{value:s,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"submit"})]})]})},S=n(20),T="/api/persons",C={createPerson:function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(T,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(T,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function P(e){var t=e.handleFilter;return Object(r.jsxs)("div",{children:["filter shown with: ",Object(r.jsx)("input",{onChange:t})]})}var I=function(e){var t=e.addPerson,n=e.handleInputName,c=e.number,a=e.name,i=e.handleInputNumber;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:a,onChange:n}),"number: ",Object(r.jsx)("input",{value:c,onChange:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},N=function(e){var t=e.personsToShow,n=e.deletePerson;return Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsxs)("div",{children:[e.name," - ",e.number,Object(r.jsx)("button",{onClick:function(){return n(e)},children:"delete"})]},e.name)}))})};function L(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),o=Object(l.a)(a,2),s=o[0],d=o[1],f=Object(i.useState)(""),p=Object(l.a)(f,2),h=p[0],O=p[1],m=Object(i.useState)(""),x=Object(l.a)(m,2),v=x[0],g=x[1],w=Object(i.useState)(null),k=Object(l.a)(w,2),T=k[0],L=k[1],D=Object(i.useState)(null),E=Object(l.a)(D,2),Z=E[0],A=E[1],H=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r={name:s,number:h},a=Object(S.a)(n),e.prev=3,a.s();case 5:if((i=a.n()).done){e.next=12;break}if(i.value.name!==s){e.next=10;break}return alert("".concat(s," is already added to phonebook")),e.abrupt("return");case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:return e.next=22,C.createPerson(r).then((function(e){c(n.concat(e.data)),L("Added ".concat(e.data.name)),d(""),O(""),setTimeout((function(){L(null)}),5e3)}));case 22:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('"Do you want to delete '.concat(t.name,'?"'))){e.next=5;break}return e.next=3,C.deletePerson(t.id).then((function(e){c(n.filter((function(e){return e.id!==t.id})))})).catch((function(e){A("Information of ".concat(t.name," has already been removed from server")),setTimeout((function(){A(null)}),5e3)}));case 3:e.next=6;break;case 5:console.log("don't delete this person");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){b.a.get("/api/persons").then((function(e){return c(e.data)}))}),[]);var B=v?n.filter((function(e){return e.name.toLocaleLowerCase().includes(v.toLocaleLowerCase())})):n;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(y,{message:T,type:"success"}),Object(r.jsx)(y,{message:Z,type:"error"}),Object(r.jsx)(P,{handleFilter:function(e){g(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Add a new person"}),Object(r.jsx)(I,{addPerson:H,handleInputName:function(e){d(e.target.value)},number:h,name:s,handleInputNumber:function(e){O(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)("div",{children:Object(r.jsx)(N,{personsToShow:B,deletePerson:J})})]})}var D=function(e){e.notex;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Notes"}),Object(r.jsx)(k,{}),Object(r.jsx)("h3",{children:"Countries Api"}),Object(r.jsx)(f,{}),Object(r.jsx)("div",{children:Object(r.jsx)(L,{})}),Object(r.jsx)("div",{children:Object(r.jsx)(o,{})})]})};n(46);a.a.render(Object(r.jsx)(D,{notex:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only JavaScript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d8d94799.chunk.js.map