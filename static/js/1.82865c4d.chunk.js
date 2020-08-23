webpackJsonp([1],{144:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),i=t(46),o=t(163),l=t(251),A=t.n(l),u=t(10),c=t(18),s=t(47),d=t(178),p=t(5),b=t(6),g=function(){function e(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(e){var n=Object(r.useState)({email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,element_name:"email"},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1,element_name:"password"}}),t=g(n,2),l=t[0],u=t[1],p=Object(r.useState)(!1),m=g(p,2),h=m[0],f=m[1],x=Object(r.useState)(!0),C=g(x,2),v=C[0],B=C[1],_=function(e,n){var t=Object.assign({},l),r=Object.assign({},t[n]);r.value=e.target.value,r.valid=Object(d.a)(r.value,r.validation),r.touched=!0,t[n]=r;var a=!0;for(var i in t)a=t[i].valid&&a;u(t),f(a)},I=function(n){n.preventDefault(),e.onAuth(l.email.value,l.password.value,v)},w=function(){B(!v)},E=[];for(var k in l)E.push({id:k,config:l[k]});var y=E.map(function(e){return a.a.createElement(o.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(n){return _(n,e.id)},field:e.config.element_name})});e.loading&&(y=a.a.createElement(c.a,null));var z=null;e.error&&(z="EMAIL_EXISTS"===e.error.message?a.a.createElement("h4",null,"Sorry you can't signup with this E-mail, it's already taken!"):"INVALID_PASSWORD"===e.error.message?a.a.createElement("h4",null,"Wrong password!"):a.a.createElement("h4",null,e.error.message));var j=null,D=0;for(var O in e.ingredients)D+=e.ingredients[O];return e.isAuth&&D>0?j=a.a.createElement(b.c,{to:"/checkout"}):e.isAuth&&0===D&&(j=a.a.createElement(b.c,{to:"/"})),a.a.createElement(s.a,null,a.a.createElement("div",{className:A.a.Auth},z,a.a.createElement("form",{onSubmit:I},y,a.a.createElement(i.a,{btnType:"Success",disabled:!h},"Submit")),a.a.createElement(i.a,{btnType:"Danger",clicked:w},"Switch to ",v?"Sign In":"Sign Up"),j))},h=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,ingredients:e.burgerBuilder.ingredients}},f=function(e){return{onAuth:function(n,t,r){return e(u.b(n,t,r))}}};n.default=Object(p.b)(h,f)(m)},163:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(164),o=t.n(i),l=function(e){var n=null,t=null,r=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(r.push(o.a.Invalid),t=a.a.createElement("p",{className:o.a.Message},"*please enter a valid ",e.field," ")),e.elementType){case"input":n=a.a.createElement("input",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=a.a.createElement("textarea",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=a.a.createElement("select",{className:r.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=a.a.createElement("input",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:o.a.Input},a.a.createElement("label",{className:o.a.Label},e.label),n,t)};n.a=l},164:function(e,n,t){var r=t(165);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(141)(r,a);r.locals&&(e.exports=r.locals)},165:function(e,n,t){n=e.exports=t(140)(!0),n.push([e.i,".Input__Input__dD5HK{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__OCIfi{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__149sI{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__149sI:focus{outline:none;background-color:#ccc}.Input__Invalid__7CbvU{border:1px solid red;background-color:#fda49a}.Input__Message__2ne16{width:100%;outline:none;background-color:#fff;font:inherit;padding:2px 5px;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;color:red;font-size:10px}","",{version:3,sources:["D:/OneDrive - Concordia University - Canada/webdev course/React/first/Burger Builder-hooks/src/components/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B,AAED,uBAEI,WAAW,AACX,aAAc,AACd,sBAAwB,AACxB,aAAc,AACd,gBAAiB,AACjB,cAAe,AACf,8BAA+B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,UAAU,AACV,cAAgB,CAInB",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}\r\n\r\n.Message{\r\n\r\n    width:100%;\r\n    outline: none;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 2px 5px;\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    text-align: left;\r\n    color:red;\r\n    font-size: 10px;\r\n\r\n\r\n\r\n}\r\n"],sourceRoot:""}]),n.locals={Input:"Input__Input__dD5HK",Label:"Input__Label__OCIfi",InputElement:"Input__InputElement__149sI",Invalid:"Input__Invalid__7CbvU",Message:"Input__Message__2ne16"}},178:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e,n){var t=!0;if(!n)return!0;if(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),n.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&t}if(n.isNumeric){t=/^\d+$/.test(e)&&t}return t}},251:function(e,n,t){var r=t(252);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(141)(r,a);r.locals&&(e.exports=r.locals)},252:function(e,n,t){n=e.exports=t(140)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["D:/OneDrive - Concordia University - Canada/webdev course/React/first/Burger Builder-hooks/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAa,AACb,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yBACE,mBACE,WAAY,CACb,CACF",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border :1px solid #eee;\r\n    padding:10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n  \r\n  @media (min-width:600px){\r\n    .Auth{\r\n      width:500px;\r\n    }\r\n  }\r\n  "],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.82865c4d.chunk.js.map