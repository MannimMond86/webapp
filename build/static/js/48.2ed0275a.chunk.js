(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[48],{1670:function(e,t,n){"use strict";var r=n(0),a=n(75),o=n.n(a),c=n(216),s=n.n(c),i=n(218),l=n.n(i),u=n(219),p=n.n(u),f=n(217),m=n.n(f),y=n(121),g=n.n(y),b=n(122),d=n.n(b),E=n(259),h=n.n(E),v=n(65),w=n.n(v),x=n(89),O=n(1),S=n.n(O),T=n(64);function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(c,e);var t,n,a,o=C(c);function c(){var e;return I(this,c),(e=o.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return t=c,(n=[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,o=this.state,c=o.error,s=o.info,i=s&&s.componentStack?s.componentStack:null,l="undefined"===typeof t?(c||"").toString():t,u="undefined"===typeof n?i:n;return c?r.createElement(V,{type:"error",message:l,description:r.createElement("pre",null,u)}):a}}])&&j(t.prototype,n),a&&j(t,a),c}(r.Component),_=n(49);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},H={success:g.a,info:h.a,error:w.a,warning:d.a},J={success:s.a,info:p.a,error:m.a,warning:l.a},U=function(e){var t,n=e.description,a=e.prefixCls,c=e.message,s=e.banner,i=e.className,l=void 0===i?"":i,u=e.style,p=e.onMouseEnter,f=e.onMouseLeave,m=e.onClick,y=e.showIcon,g=e.closable,b=e.closeText,d=L(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","showIcon","closable","closeText"]),E=R(r.useState(!1),2),h=E[0],v=E[1],w=R(r.useState(!1),2),O=w[0],D=w[1],I=r.useRef(),j=r.useContext(T.b),N=j.getPrefixCls,C=j.direction,W=N("alert",a),k=function(e){var t;e.preventDefault();var n=I.current;n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),v(!0),null===(t=d.onClose)||void 0===t||t.call(d,e)},P=!!b||g,B=function(){var e=d.type;return void 0!==e?e:s?"warning":"info"}(),U=!(!s||void 0!==y)||y,V=S()(W,"".concat(W,"-").concat(B),(M(t={},"".concat(W,"-closing"),h),M(t,"".concat(W,"-with-description"),!!n),M(t,"".concat(W,"-no-icon"),!U),M(t,"".concat(W,"-banner"),!!s),M(t,"".concat(W,"-closable"),P),M(t,"".concat(W,"-rtl"),"rtl"===C),t),l),$=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(d);return O?null:r.createElement(x.default,{component:"",showProp:"data-show",transitionName:"".concat(W,"-slide-up"),onEnd:function(){var e;v(!1),D(!0),null===(e=d.afterClose)||void 0===e||e.call(d)}},r.createElement("div",A({ref:I,"data-show":!h,className:V,style:u,onMouseEnter:p,onMouseLeave:f,onClick:m},$),U?function(){var e=d.icon,t=(n?J:H)[B]||null;return e?Object(_.c)(e,r.createElement("span",{className:"".concat(W,"-icon")},e),(function(){return{className:S()("".concat(W,"-icon"),M({},e.props.className,e.props.className))}})):r.createElement(t,{className:"".concat(W,"-icon")})}():null,r.createElement("span",{className:"".concat(W,"-message")},c),r.createElement("span",{className:"".concat(W,"-description")},n),P?r.createElement("button",{type:"button",onClick:k,className:"".concat(W,"-close-icon"),tabIndex:0},b?r.createElement("span",{className:"".concat(W,"-close-text")},b):r.createElement(o.a,null)):null))};U.ErrorBoundary=P;var V=t.a=U},1786:function(e,t,n){},2099:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(212),c=n(109),s=n(1369),i=n(1670),l=(n(1786),function(){return a.a.createElement(s.a,{title:"Basic",className:"gx-card"},a.a.createElement(i.a,{message:"Success Text",type:"success"}))}),u=function(){return a.a.createElement(s.a,{title:"More Type",className:"gx-card"},a.a.createElement(i.a,{message:"Success Text",type:"success"}),a.a.createElement(i.a,{message:"Info Text",type:"info"}),a.a.createElement(i.a,{message:"Warning Text",type:"warning"}),a.a.createElement(i.a,{message:"Error Text",type:"error"}))},p=function(e){console.log(e,"I was closed.")},f=function(){return a.a.createElement(s.a,{title:"Closeable",className:"gx-card"},a.a.createElement(i.a,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:p}),a.a.createElement(i.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:p}))},m=function(){return a.a.createElement(s.a,{title:"Description",className:"gx-card"},a.a.createElement(i.a,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),a.a.createElement(i.a,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),a.a.createElement(i.a,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),a.a.createElement(i.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"}))},y=function(){return a.a.createElement(s.a,{title:"Icon",className:"gx-card"},a.a.createElement(i.a,{message:"Success Tips",type:"success",showIcon:!0}),a.a.createElement(i.a,{message:"Informational Notes",type:"info",showIcon:!0}),a.a.createElement(i.a,{message:"Warning",type:"warning",showIcon:!0}),a.a.createElement(i.a,{message:"Error",type:"error",showIcon:!0}),a.a.createElement(i.a,{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),a.a.createElement(i.a,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),a.a.createElement(i.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),a.a.createElement(i.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0}))},g=n(131),b=n(132),d=n(134),E=n(133),h=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={visiable:!0},e.handleClose=function(){e.setState({visiable:!1})},e}return Object(b.a)(n,[{key:"render",value:function(){return a.a.createElement(s.a,{title:"Smoothly Unmount",className:"gx-card"},this.state.visiable?a.a.createElement(i.a,{message:"Alert Message Text",type:"success",closable:!0,afterClose:this.handleClose}):null,a.a.createElement("p",null,"placeholder text here"))}}]),n}(a.a.Component),v=function(){return a.a.createElement(s.a,{title:"Banner",className:"gx-card"},a.a.createElement(i.a,{message:"Warning text",banner:!0}),a.a.createElement(i.a,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),a.a.createElement(i.a,{showIcon:!1,message:"Warning text without icon",banner:!0}),a.a.createElement(i.a,{type:"error",message:"Error text",banner:!0}))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(l,null),a.a.createElement(h,null),a.a.createElement(u,null),a.a.createElement(y,null)),a.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(m,null),a.a.createElement(v,null),a.a.createElement(f,null)))}}}]);