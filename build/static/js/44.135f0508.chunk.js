(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[44],{1446:function(e,a,t){"use strict";var r=t(15),l=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),c=r(t(1451)),s=r(t(34)),o=function(e,a){return n.createElement(s.default,Object.assign({},e,{ref:a,icon:c.default}))};o.displayName="UserOutlined";var i=n.forwardRef(o);a.default=i},1451:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"}},1466:function(e,a,t){"use strict";var r=t(15),l=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),c=r(t(1467)),s=r(t(34)),o=function(e,a){return n.createElement(s.default,Object.assign({},e,{ref:a,icon:c.default}))};o.displayName="LockOutlined";var i=n.forwardRef(o);a.default=i},1467:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"}},2040:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(1402),c=t(1371),s=t(1373),o=t(120),i=t(3),m=t(1446),u=t.n(m),d=t(1466),f=t.n(d),g=t(301),p=t.n(g),E=t(302),b=t.n(E),h=t(303),v=t.n(h),x=t(304),w=t.n(x),y=t(21),O=t(29),j=n.a.Item;a.default=function(){var e=Object(y.d)();return l.a.createElement("div",{className:"gx-login-container"},l.a.createElement("div",{className:"gx-login-content"},l.a.createElement("div",{className:"gx-login-header gx-text-center"},l.a.createElement("h1",{className:"gx-login-title"},"Sign Up")),l.a.createElement(n.a,{initialValues:{remember:!0},name:"basic",onFinish:function(a){console.log("finish",a),e(Object(O.c)()),e(Object(O.k)(a))},onFinishFailed:function(e){console.log("Failed:",e)},className:"gx-signin-form gx-form-row0"},l.a.createElement(j,{rules:[{required:!0,message:"Please input your username!'}"}],name:"uaername"},l.a.createElement(c.a,{prefix:l.a.createElement(u.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"})),l.a.createElement(j,{rules:[{required:!0,message:"Please input your E-mail!"}],name:"email"},l.a.createElement(c.a,{prefix:l.a.createElement(u.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),l.a.createElement(j,{rules:[{required:!0,message:"Please input your Password!"}],name:"password"},l.a.createElement(c.a,{prefix:l.a.createElement(f.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})),l.a.createElement(j,{rules:[{required:!0,message:"Please input your Password!"}],name:"confirm-password"},l.a.createElement(c.a,{prefix:l.a.createElement(f.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password"})),l.a.createElement(j,{name:"remember",valuePropName:"checked"},l.a.createElement(s.a,null,"Remember me"),l.a.createElement(i.a,{className:"gx-login-form-forgot",to:"/custom-views/user-auth/forgot-password"},"Forgot password")),l.a.createElement(j,{className:"gx-text-center"},l.a.createElement(o.a,{type:"primary",htmlType:"submit"},"Sign Up"))),l.a.createElement("div",{className:"gx-flex-row"},l.a.createElement("span",{className:"gx-mb-2 gx-mr-3"},"or Sign up using: "),l.a.createElement("ul",{className:"gx-social-link"},l.a.createElement("li",null,l.a.createElement(p.a,{onClick:function(){e(Object(O.c)()),e(Object(O.i)())}})),l.a.createElement("li",null,l.a.createElement(b.a,{onClick:function(){e(Object(O.c)()),e(Object(O.e)())}})),l.a.createElement("li",null,l.a.createElement(v.a,{onClick:function(){e(Object(O.c)()),e(Object(O.g)())}})),l.a.createElement("li",null,l.a.createElement(w.a,{onClick:function(){e(Object(O.c)()),e(Object(O.q)())}}))))))}}}]);