(this["webpackJsonpfakeappi-test-react"]=this["webpackJsonpfakeappi-test-react"]||[]).push([[0],{37:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),o=a(3),i=(a(37),a(5)),l=a(10),j=a.n(l),d=a(14),b=a(15),u=a.n(b),O=a(2),p="USUARIO",m="MODAL",h="ERROR",x="LOADING",f="SESION",g=a(1);function v(e){return console.log("LOADING-----------",e),{type:x,payload:e}}function N(e){return function(){var t=Object(d.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()({url:"https://reqres.in/api/users?page=".concat(e),method:"get"});case 3:n=t.sent,a({type:p,payload:n.data}),a({type:f,payload:!0}),console.log("NUEVA DATA",n.data.data),a({type:x,payload:!1}),t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log("ERROR",t.t0),a({type:h,payload:"Ocurrio un error"}),a({type:x,payload:!1}),t.abrupt("return",Object(g.jsx)(O.a,{to:"/ingreso"}));case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}a(64);function y(){var e=Object(i.c)((function(e){return e.todos.modal})),t=Object(i.b)();function a(e){var a;return e.preventDefault(),t((a={mensaje:"",image:"",visible:!1,data:"data"},console.log("MODAL-----------",a),{type:m,payload:a})),console.log("cerrado","clik"),Object(g.jsx)(O.a,{to:"/ingreso",replace:!0})}return Object(g.jsxs)(n.Fragment,{children:[" ",""!==e?Object(g.jsxs)("div",{className:"modal",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:e.mensaje}),Object(g.jsx)("img",{src:e.image,alt:e.image,className:"card-image"})]}),Object(g.jsx)("button",{onClick:function(e){return a(e)},className:"button-4",children:"Cerrar"}),Object(g.jsx)("br",{})]}):""," "]})}function _(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),b=l[0],O=l[1],p=Object(n.useState)(!1),m=Object(o.a)(p,2),h=m[0],f=m[1],N=Object(n.useState)(!1),_=Object(o.a)(N,2),w=_[0],k=_[1],C=Object(n.useState)(""),S=Object(o.a)(C,2),A=(S[0],S[1],Object(i.b)()),R=Object(i.c)((function(e){return e.todos.loading})),E=Object(i.c)((function(e){return e.todos.modal}));Object(n.useEffect)((function(){A(v(!1))}),[]);return Object(g.jsxs)("div",{children:[" "," ",E.visible?Object(g.jsx)(y,{}):"",Object(g.jsx)("h1",{"data-testid":"create__title",children:"/crear/"}),Object(g.jsx)("br",{}),Object(g.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),console.log(r,b,"NAME JOB"),""===r?f(!0):""===b?k(!0):""!==b&&""!==r&&(console.log(h,w,"errorTrabajo"),A(v(!0)),A((t=r,a=b,function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("https://reqres.in/api/users",{name:t,job:a});case 3:e.sent,console.log("Creado usuario con exito"),n({type:x,payload:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),f(!1),k(!1))},children:[Object(g.jsx)("input",{type:"text",placeholder:"Nombre",className:"form__input",name:"create__name",onChange:function(e){return c(e.target.value)},"data-testid":"create__name"})," ",1==h?Object(g.jsx)("span",{"data-testid":"alert__text",children:"Nombre requerido"}):"",Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"text",placeholder:"Trabajo",className:"form__input",onChange:function(e){return O(e.target.value)},"data-testid":"create__job"})," ",1==w?Object(g.jsx)("span",{"data-testid":"alert__text",children:"Trabajo requerido"}):"",Object(g.jsx)("br",{}),Object(g.jsxs)("button",{type:"submit",className:"button-5",disabled:R,"data-testid":"create__btn",children:[" "," ",R?"Cargando...":"Crear"," "," "]})]})]})}var w=function(){return sessionStorage.getItem("token")||null},k=a.p+"static/media/ok2.8982d318.webp",C=a.p+"static/media/ok.7061a288.webp";a(65);var S=function(e){w();var t=window.location.pathname,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],l=Object(i.b)(),b=Object(n.useState)(""),p=Object(o.a)(b,2),h=p[0],x=p[1],N=Object(n.useState)(""),_=Object(o.a)(N,2),S=_[0],A=_[1],R=Object(n.useState)(!1),E=Object(o.a)(R,2),I=(E[0],E[1]),D=Object(n.useState)(""),L=Object(o.a)(D,2),T=L[0],q=L[1],P=Object(n.useState)(!1),H=Object(o.a)(P,2),F=H[0],G=H[1],M=Object(i.c)((function(e){return e.todos.sesion})),W=Object(i.c)((function(e){return e.todos.modal.visible})),B=function(e){var t,a;e.preventDefault(),x(""),A(""),""===T&&""===c?(x("Email es requerido"),A("Contrase\xf1a es requerida")):""===c?A("Contrase\xf1a es requerida"):""!==T&&""!==c&&(G(!0),l((t=T,a=c,function(){var e=Object(d.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("https://reqres.in/api/login",{email:t,password:a});case 3:if(!(r=e.sent).data.token){e.next=9;break}return n({type:"LOGIN",payload:!1}),sessionStorage.setItem("token",r.data.token),n({type:f,payload:!0}),e.abrupt("return",Object(g.jsx)(O.a,{to:"/usuarios",replace:!0}));case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("ERROR",e.t0),n({type:m,payload:{mensaje:"Login Error, validar datos",image:"https://www.pngall.com/wp-content/uploads/2/Sad-Boy-PNG-Pic.png",visible:!0,data:"Login con errores intente de nuevo"}});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())),l(v(!0)),setTimeout((function(){I(!0),O.a}),2e3))};return Object(g.jsxs)("div",{children:[" ",M&&"/ingreso"===t?Object(g.jsx)(O.a,{to:"/usuarios",replace:!0}):"",!0===W?Object(g.jsx)(y,{}):"",Object(g.jsx)("div",{className:"container",id:"container",children:Object(g.jsx)("div",{className:"center",id:"container",children:Object(g.jsx)("img",{src:k,className:"Ima"})})}),Object(g.jsxs)("div",{className:"container",id:"container",children:[Object(g.jsx)("div",{id:"izquierda",className:"izquierda",children:Object(g.jsx)("img",{src:C,className:"Ima2"})}),Object(g.jsxs)("div",{id:"right",className:"derecha",children:[Object(g.jsx)("h2",{children:"Comienza"}),Object(g.jsx)("p",{children:"La app permite iniciar sesi\xf3n y buscar usuarios."}),Object(g.jsx)("h1",{"data-testid":"login__title",children:"Login"}),Object(g.jsx)("br",{}),Object(g.jsxs)("form",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"email",className:"form__input",onChange:function(e){return q(e.target.value)},autoComplete:"new-password",placeholder:"Correo","data-testid":"login__email"})}),Object(g.jsxs)("span",{id:"email-error",className:"form-text error",style:{color:"red"},"data-testid":"alert__text",children:[h&&Object(g.jsxs)(g.Fragment,{children:[" ",h]})," "]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",className:"form__input","aria-describedby":"password-error",onChange:function(e){return s(e.target.value)},autoComplete:"new-password","data-testid":"login__password"})}),Object(g.jsxs)("span",{id:"password-error",className:"form-text error",style:{color:"red"},"data-testid":"alert__text",children:[S&&Object(g.jsxs)(g.Fragment,{children:[" ",S]})," "]}),Object(g.jsxs)("button",{type:"submit",className:"button-5",disabled:F,"data-testid":"login__btn-login",onClick:function(e){return B(e)},children:[F?"Cargando...":"Iniciar Sesi\xf3n"," "]})]})]})]})]})},A=a(4),R=a(28);a(67);function E(e){var t=e.columns,a=e.data,n=Object(R.useTable)({columns:t,data:a,initialState:{}}),r=n.getTableBodyProps,c=n.headerGroups,s=n.rows,o=n.prepareRow;return Object(g.jsx)("div",{children:Object(g.jsxs)("table",Object(A.a)(Object(A.a)({},r()),{},{"data-testid":"users__table",children:[Object(g.jsx)("thead",{children:c.map((function(e){return Object(g.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsx)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{style:{textAlign:"center"},className:"",children:e.render("Header")}))}))}))}))}),Object(g.jsx)("tbody",Object(A.a)(Object(A.a)({},r()),{},{children:s.map((function(e){return o(e),Object(g.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return"avatar"==e.column.id?Object(g.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{style:{textAlign:"center"},children:Object(g.jsx)("img",{src:e.value,alt:"Avatar",width:"120","data-testid":"user__img-"+e.row.values.id})})):Object(g.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}function I(e){w();var t=Object(i.c)((function(e){return e.todos.loading})),a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(1),j=Object(o.a)(l,2),d=j[0],b=j[1],u=Object(n.useState)(0),p=Object(o.a)(u,2),m=p[0],h=p[1],x=Object(i.b)(),f=Object(n.useState)(w()),y=Object(o.a)(f,2),_=(y[0],y[1],Object(i.c)((function(e){return e.todos.sesion}))),k=Object(i.c)((function(e){return e.todos.usuario})),C=Object(n.useMemo)((function(){return[{Header:"Id",accessor:"id"},{Header:"Avatar",accessor:"avatar"},{Header:"Correo electr\xf3nico",accessor:"email"},{Header:"Nombre",accessor:"first_name"},{Header:"Apellido",accessor:"last_name"}]}),[]);Object(n.useEffect)((function(){x(v(!0)),x(N(d)),void 0!==k&&(s(k.data),h(k.total_pages)),t||x(N(d))}),[d]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{"data-testid":"users__title",children:"/usuarios/"}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"button",className:"button-4",style:{float:"right",margin:10},onClick:function(e){e.preventDefault(),O.a},"data-testid":"users__btn-create",children:"Crear usuario"}),Object(g.jsx)("br",{}),void 0!=c?Object(g.jsx)(E,{columns:C,data:c,className:"table"}):";",!1===_?Object(g.jsx)(O.a,{to:"/ingreso",replace:!0}):";",Object(g.jsx)("div",{children:Object(g.jsx)("nav",{"aria-label":"Page navigation example",style:{float:"right"},children:Object(g.jsxs)("ul",{className:"pagination",children:[d>1?Object(g.jsx)("li",{className:"item",children:Object(g.jsx)("button",{className:"button-4",onClick:function(){return b(d-1>0?d-1:1)},children:"Anterior"})}):"",Object(g.jsx)("li",{className:"item",children:Object(g.jsxs)("button",{className:"button-4",onClick:function(){return b(1)},"data-testid":"users__btn-page-"+d,children:[d," "]})}),m>d?Object(g.jsx)("li",{className:"item",children:Object(g.jsx)("button",{className:"button-4",onClick:function(){return b(d+1)},children:"Siguiente"})}):""," "]})})})]})}a(68);function D(e){var t=e.children;return w()?t:Object(g.jsx)(O.a,{to:"/ingreso"})}function L(e){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{"data-testid":"error404__title",children:"/no encontramos esta p\xe1gina./"})})}var T=function(){return w(),Object(g.jsx)("div",{className:"main",children:Object(g.jsx)("div",{className:"main",children:Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsxs)(O.d,{children:[Object(g.jsx)(O.b,{path:"/usuarios",element:Object(g.jsx)(D,{children:Object(g.jsx)(I,{})})}),Object(g.jsx)(O.b,{path:"/crear",element:Object(g.jsx)(D,{children:Object(g.jsx)(_,{})})}),Object(g.jsx)(O.b,{path:"/",element:Object(g.jsx)(O.a,{replace:!0,to:"/ingreso"})}),Object(g.jsx)(O.b,{path:"/ingreso",element:null!==w()?Object(g.jsx)(O.a,{to:"/usuarios",replace:!0}):Object(g.jsx)(S,{})}),Object(g.jsx)(O.b,{path:"*",element:Object(g.jsx)(L,{})})]})})})})},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=a(8),F=a(29),G=a(12),M=a(9),W=a(32),B=a(30),U=a(31),z=a.n(U),J={usuario:[],modal:[],error:"",loading:!1,sesion:!1};var Q=Object(M.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(A.a)(Object(A.a)({},e),{},{usuario:t.payload});case f:return Object(A.a)(Object(A.a)({},e),{},{sesion:t.payload});case x:return Object(A.a)(Object(A.a)({},e),{},{loading:t.payload});case h:return Object(A.a)(Object(A.a)({},e),{},{error:t.payload});case m:return Object(A.a)(Object(A.a)({},e),{},{modal:t.payload});default:return e}}}),V={key:"root",storage:z.a},$=Object(G.a)(V,Q),K=Object(M.createStore)($,Object(B.composeWithDevTools)(Object(M.applyMiddleware)(W.a))),X=(a(71),a.p+"static/media/logo.5ae34a69.png"),Y=a(17),Z=function(e){var t=Object(i.b)(),a=w(),r=Object(n.useState)("Cerrar Sesi\xf3n"),c=Object(o.a)(r,2),s=c[0],l=c[1],j=Object(i.c)((function(e){return e.todos.sesion}));Object(n.useEffect)((function(){a&&O.a}),[]);var d=Object(n.useState)(!1),b=Object(o.a)(d,2),u=b[0],p=b[1];sessionStorage.getItem("token");return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:u?"main-container":"",onClick:function(){return p(!1)}}),Object(g.jsx)("nav",{className:"navbar",onClick:function(e){return e.stopPropagation()},children:Object(g.jsxs)("div",{className:"nav-container",children:[Object(g.jsx)("img",{src:X,alt:"logo",className:"logo"}),Object(g.jsx)("i",{className:"fa fa-code"}),Object(g.jsxs)("ul",{className:u?"nav-menu active":"nav-menu",children:[" ",Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(H.b,{className:"nav-item",to:"/usuarios","data-testid":"header__link-users",children:"usuarios"})}),!1===j?Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(H.b,{className:"nav-item",to:"/ingreso","data-testid":"header__link-login",children:"ingreso"})}):Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(H.b,{className:"nav-item",to:"/ingreso",onClick:function(e){var a;e.preventDefault(),sessionStorage.removeItem("token"),t((a=!1,console.log("SESION-----------",a),{type:f,payload:a})),l("Cerrando..."),setTimeout((function(){l("Cerrar Sesi\xf3n"),O.a}),1200)},"data-testid":"header__link-signout",children:s})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(H.b,{className:"nav-item",to:"/crear/","data-testid":"header__link-create",children:"crear"})})]}),Object(g.jsxs)("div",{className:"nav-icon",onClick:function(){return p(!u)},children:[" ",u?Object(g.jsx)(Y.b,{}):Object(g.jsx)(Y.a,{})," "]})]})})]})},ee=Object(G.b)(K);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{store:K,children:Object(g.jsx)(F.a,{persistor:ee,children:Object(g.jsxs)(H.a,{basename:"/FakeApi",children:[Object(g.jsx)(Z,{}),Object(g.jsx)(T,{})]})})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/FakeApi",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/FakeApi","/service-worker.js");q?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):P(e)}))}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.9dc6ce59.chunk.js.map