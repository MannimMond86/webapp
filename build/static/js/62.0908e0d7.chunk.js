(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[62],{1676:function(e,t,n){},2116:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(212),o=n(109),i=(n(1676),n(1369)),c=n(152),u=n.n(c),s=n(709),f=n.n(s),d=n(1),m=n.n(d),p=n(64);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,e);var t,n,r,a=k(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).saveSlick=function(e){t.slick=e},t.onWindowResized=function(){t.props.autoplay&&t.slick&&t.slick.innerSlider&&t.slick.innerSlider.autoPlay&&t.slick.innerSlider.autoPlay()},t.renderCarousel=function(e){var n,r,a=e.getPrefixCls,o=e.direction,i=E({},t.props);"fade"===i.effect&&(i.fade=!0);var c=a("carousel",i.prefixCls),u=t.getDotPosition();i.vertical="left"===u||"right"===u;var s=!!i.dots,d=m()("slick-dots","".concat("slick-dots","-").concat(u||"bottom"),"boolean"!==typeof i.dots&&(null===(r=i.dots)||void 0===r?void 0:r.className)),p=m()(c,(v(n={},"".concat(c,"-rtl"),"rtl"===o),v(n,"".concat(c,"-vertical"),i.vertical),n));return l.createElement("div",{className:p},l.createElement(f.a,E({ref:t.saveSlick},i,{dots:s,dotsClass:d})))},t.onWindowResized=u()(t.onWindowResized,500,{leading:!1}),t}return t=o,(n=[{key:"componentDidMount",value:function(){this.props.autoplay&&window.addEventListener("resize",this.onWindowResized),this.innerSlider=this.slick&&this.slick.innerSlider}},{key:"componentDidUpdate",value:function(e){l.Children.count(this.props.children)!==l.Children.count(e.children)&&this.goTo(this.props.initialSlide||0,!1)}},{key:"componentWillUnmount",value:function(){this.props.autoplay&&(window.removeEventListener("resize",this.onWindowResized),this.onWindowResized.cancel())}},{key:"getDotPosition",value:function(){var e=this.props.dotPosition;return void 0===e?"bottom":e}},{key:"next",value:function(){this.slick.slickNext()}},{key:"prev",value:function(){this.slick.slickPrev()}},{key:"goTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.slick.slickGoTo(e,t)}},{key:"render",value:function(){return l.createElement(p.a,null,this.renderCarousel)}}])&&y(t.prototype,n),r&&y(t,r),o}(l.Component);P.defaultProps={dots:!0,arrows:!1,draggable:!1};var S=function(){return r.a.createElement(i.a,{className:"gx-card",title:"Basic"},r.a.createElement(P,{afterChange:function(e,t,n){console.log(e,t,n)}},r.a.createElement("div",null,r.a.createElement("h3",null,"1")),r.a.createElement("div",null,r.a.createElement("h3",null,"2")),r.a.createElement("div",null,r.a.createElement("h3",null,"3")),r.a.createElement("div",null,r.a.createElement("h3",null,"4"))))},O=function(){return r.a.createElement(i.a,{className:"gx-card",title:"Vertical"},r.a.createElement(P,{dotPosition:"right",className:"gx-vertical-slide"},r.a.createElement("div",null,r.a.createElement("h3",null,"1")),r.a.createElement("div",null,r.a.createElement("h3",null,"2")),r.a.createElement("div",null,r.a.createElement("h3",null,"3")),r.a.createElement("div",null,r.a.createElement("h3",null,"4"))))},x=function(){return r.a.createElement(i.a,{className:"gx-card",title:"Fade In"},r.a.createElement(P,{effect:"fade"},r.a.createElement("div",null,r.a.createElement("h3",null,"1")),r.a.createElement("div",null,r.a.createElement("h3",null,"2")),r.a.createElement("div",null,r.a.createElement("h3",null,"3")),r.a.createElement("div",null,r.a.createElement("h3",null,"4"))))},R=function(){return r.a.createElement(i.a,{className:"gx-card",title:"Scroll Automatically"},r.a.createElement(P,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("h3",null,"1")),r.a.createElement("div",null,r.a.createElement("h3",null,"2")),r.a.createElement("div",null,r.a.createElement("h3",null,"3")),r.a.createElement("div",null,r.a.createElement("h3",null,"4"))))};t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(S,null),r.a.createElement(O,null)),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(x,null),r.a.createElement(R,null)))}}}]);