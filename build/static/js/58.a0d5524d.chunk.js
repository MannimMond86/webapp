(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[58],{1454:function(e,t,n){"use strict";function r(e){return null!==e&&void 0!==e&&e===e.window}function l(e,t){if("undefined"===typeof window)return 0;var n=t?"scrollTop":"scrollLeft",l=0;return r(e)?l=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?l=e.documentElement[n]:e&&(l=e[n]),e&&!r(e)&&"number"!==typeof l&&(l=(e.ownerDocument||e).documentElement[n]),l}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}))},1475:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(40),l=n.n(r);function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t,n=function(n){return function(){t=null,e.apply(void 0,a(n))}},r=function(){if(null==t){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];t=l()(n(r))}};return r.cancel=function(){return l.a.cancel(t)},r}function o(){return function(e,t,n){var r=n.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(t))return r;var n=u(r.bind(this));return l=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),l=!1,n}}}}},1485:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),l=n.n(r),a=n(1454);function c(e,t,n,r){var l=n-t;return(e/=r/2)<1?l/2*e*e*e+t:l/2*((e-=2)*e*e+2)+t}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,r=void 0===n?function(){return window}:n,u=t.callback,o=t.duration,i=void 0===o?450:o,m=r(),b=Object(a.a)(m,!0),E=Date.now(),f=function t(){var n=Date.now()-E,r=c(n>i?i:n,b,e,i);Object(a.b)(m)?m.scrollTo(window.pageXOffset,r):m instanceof HTMLDocument||"HTMLDocument"===m.constructor.name?m.documentElement.scrollTop=r:m.scrollTop=r,n<i?l()(t):"function"===typeof u&&u()};l()(f)}},2140:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(212),c=n(109),u=n(1369),o=n(89),i=n(149),m=n(1),b=n.n(m),E=n(28),f=n(708),s=n.n(f),d=n(1475),p=n(64),v=n(1454),y=n(1485);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){l=!0,a=o}finally{try{r||null==u.return||u.return()}finally{if(l)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=h(r.useState(!1),2),n=t[0],l=t[1],a=r.createRef(),c=r.useRef(),u=function(){return a.current&&a.current.ownerDocument?a.current.ownerDocument:window},m=Object(d.a)((function(t){var n=e.visibilityHeight,r=Object(v.a)(t.target,!0);l(r>n)}));r.useEffect((function(){return function(){var t=(e.target||u)();c.current=Object(i.a)(t,"scroll",(function(e){m(e)})),m({target:t})}(),function(){c.current&&c.current.remove(),m.cancel()}}),[e.target]);var f,w,O,j=r.useContext(p.b),x=j.getPrefixCls,A=j.direction,S=e.prefixCls,C=e.className,N=void 0===C?"":C,k=x("back-top",S),D=b()(k,N,(f={},w="".concat(k,"-rtl"),O="rtl"===A,w in f?Object.defineProperty(f,w,{value:O,enumerable:!0,configurable:!0,writable:!0}):f[w]=O,f)),T=Object(E.default)(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return r.createElement("div",g({},T,{className:D,onClick:function(t){var n=e.onClick,r=e.target;Object(y.a)(0,{getContainer:r||u}),"function"===typeof n&&n(t)},ref:a}),function(t){var l=t.prefixCls,a=e.children,c=r.createElement("div",{className:"".concat(l,"-content")},r.createElement("div",{className:"".concat(l,"-icon")},r.createElement(s.a,null)));return r.createElement(o.default,{component:"",transitionName:"fade"},("visible"in e?e.visible:n)?r.createElement("div",null,a||c):null)}({prefixCls:k}))};O.defaultProps={visibilityHeight:400};var j=r.memo(O),x=function(){return l.a.createElement(u.a,{title:"Basic",className:"gx-card"},l.a.createElement(j,null),"Scroll down to see the bottom-right",l.a.createElement("strong",{className:"gx-text-grey"}," gray "),"button.")},A=function(){return l.a.createElement(u.a,{id:"components-back-top-demo-custom",title:"Custom",className:"gx-card"},l.a.createElement(j,null,l.a.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",l.a.createElement("strong",{className:"gx-text-primary"}," blue "),"button.")};t.default=function(){return l.a.createElement(a.a,null,l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(x,null)),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(A,null)),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}}]);