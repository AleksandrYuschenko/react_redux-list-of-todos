(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(3),r=c(15),l=c(0),o=(c(26),c(27),c(12)),i=c.n(o),d=(n.b,n.c),j=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(1),m=function(e){var t=e.todos,c=e.filter,s=c.query,a=c.status;return t.filter((function(e){var t=e.title.toLocaleLowerCase(),c=s.toLocaleLowerCase(),n="completed"===a,r=t.includes(c),l="all"===a||e.completed===n;return r&&l}))},O=function(){var e=d(m),t=Object(n.b)();return Object(h.jsxs)(h.Fragment,{children:[0===e.length&&Object(h.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:e.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(h.jsx)("td",{className:"is-vcentered",children:Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}):Object(h.jsx)("td",{className:"is-vcentered",children:" "}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:i()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){t(j(e))}(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"far fa-eye"})})})})]})}))})]})]})},x=c(5),f={query:"",status:"all"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/set-query":return Object(x.a)(Object(x.a)({},e),{},{query:t.payload});case"filter/set-status":return Object(x.a)(Object(x.a)({},e),{},{status:t.payload});default:return e}},v=function(e){return{type:"filter/set-query",payload:e}},y=function(){var e=Object(n.b)(),t=d((function(e){return e.filter})),c=t.status,s=t.query;return Object(h.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(function(e){return{type:"filter/set-status",payload:e}}(t.target.value))},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(t){return e(v(t.target.value))}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(v(""))}})})]})]})},N=c(4);function g(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(29);var T,k=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},w=function(){var e=Object(l.useState)(),t=Object(N.a)(e,2),c=t[0],s=t[1],a=d((function(e){return e.currentTodo})),r=Object(n.b)();return Object(l.useEffect)((function(){var e;a&&(e=a.userId,g("/users/".concat(e))).then((function(e){return s(e)}))}),[a]),a&&Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),!c&&Object(h.jsx)(k,{}),c&&Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(null),r(u())}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:a.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!a.completed&&Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"}),a.completed&&Object(h.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})};!function(e){e.SetTodos="todos/set_todos"}(T||(T={}));var S=function(e){return{type:T.SetTodos,payload:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===T.SetTodos?t.payload:e},C=function(){var e=Object(n.b)(),t=d((function(e){return e.todos}));return Object(l.useEffect)((function(){g("/todos").then((function(t){return e(S(t))}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"block",children:[!t.length&&Object(h.jsx)(k,{}),Object(h.jsx)(O,{})]})]})})}),Object(h.jsx)(w,{})]})},_=c(6),q=c(13),L=c(14),B=Object(_.combineReducers)({currentTodo:b,filter:p,todos:E}),D=Object(_.legacy_createStore)(B,Object(q.composeWithDevTools)(Object(_.applyMiddleware)(L.a))),I=(c(30),function(){return Object(h.jsx)(n.a,{store:D,children:Object(h.jsx)(r.a,{children:Object(h.jsx)(C,{})})})});a.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1cbefe9e.chunk.js.map