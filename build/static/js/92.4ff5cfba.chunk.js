(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[92],{1484:function(e,t,n){"use strict";var a=n(0),r=n(1),l=n.n(r),o=n(28),c=n(75),i=n.n(c),u=n(64);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},p=function(e){var t,n=a.useContext(u.b).getPrefixCls,r=e.prefixCls,o=e.className,c=e.checked,i=m(e,["prefixCls","className","checked"]),p=n("tag",r),b=l()(p,(f(t={},"".concat(p,"-checkable"),!0),f(t,"".concat(p,"-checkable-checked"),c),t),o);return delete i.onChange,a.createElement("span",s({},i,{className:b,onClick:function(t){var n=e.checked,a=e.onChange,r=e.onClick;a&&a(!n),r&&r(t)}}))},b=n(256),g=n(429);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,l=i}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=new RegExp("^(".concat(b.a.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(b.b.join("|"),")$")),j=function(e,t){var n,r=e.prefixCls,c=e.className,s=e.style,f=e.children,m=e.icon,p=e.color,b=e.onClose,v=e.closable,j=void 0!==v&&v,k=E(e,["prefixCls","className","style","children","icon","color","onClose","closable"]),w=a.useContext(u.b),x=w.getPrefixCls,S=w.direction,P=y(a.useState(!0),2),I=P[0],N=P[1];a.useEffect((function(){"visible"in k&&N(k.visible)}),[k.visible]);var T=function(){return!!p&&(O.test(p)||C.test(p))},V=d({backgroundColor:p&&!T()?p:void 0},s),A=T(),R=x("tag",r),B=l()(R,(h(n={},"".concat(R,"-").concat(p),A),h(n,"".concat(R,"-has-color"),p&&!A),h(n,"".concat(R,"-hidden"),!I),h(n,"".concat(R,"-rtl"),"rtl"===S),n),c),D=function(e){e.stopPropagation(),b&&b(e),e.defaultPrevented||"visible"in k||N(!1)},M="onClick"in k||f&&"a"===f.type,$=Object(o.default)(k,["visible"]),J=m||null,U=J?a.createElement(a.Fragment,null,J,a.createElement("span",null,f)):f,z=a.createElement("span",d({},$,{ref:t,className:B,style:V}),U,j?a.createElement(i.a,{onClick:D}):null);return M?a.createElement(g.a,null,z):z},k=a.forwardRef(j);k.displayName="Tag",k.CheckableTag=p;t.a=k},2130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(212),o=n(109),c=n(1369),i=n(1484),u=function(){return r.a.createElement(c.a,{title:"Basic",className:"gx-card"},r.a.createElement(i.a,null,"Tag 1"),r.a.createElement(i.a,null,r.a.createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Link")),r.a.createElement(i.a,{closable:!0,onClose:function(e){console.log(e)}},"Tag 2"),r.a.createElement(i.a,{closable:!0,onClose:function(e){e.preventDefault()}},"Prevent Default"))},s=function(){return r.a.createElement(c.a,{title:"Color Tag",className:"gx-card"},r.a.createElement("h4",{style:{marginBottom:16}},"Presets:"),r.a.createElement("div",null,r.a.createElement(i.a,{color:"magenta"},"magenta"),r.a.createElement(i.a,{color:"red"},"red"),r.a.createElement(i.a,{color:"volcano"},"volcano"),r.a.createElement(i.a,{color:"orange"},"orange"),r.a.createElement(i.a,{color:"gold"},"gold"),r.a.createElement(i.a,{color:"lime"},"lime"),r.a.createElement(i.a,{color:"green"},"green"),r.a.createElement(i.a,{color:"cyan"},"cyan"),r.a.createElement(i.a,{color:"blue"},"blue"),r.a.createElement(i.a,{color:"geekblue"},"geekblue"),r.a.createElement(i.a,{color:"purple"},"purple")),r.a.createElement("h4",{style:{margin:"16px 0"}},"Custom:"),r.a.createElement("div",null,r.a.createElement(i.a,{color:"#f50"},"#f50"),r.a.createElement(i.a,{color:"#2db7f5"},"#2db7f5"),r.a.createElement(i.a,{color:"#87d068"},"#87d068"),r.a.createElement(i.a,{color:"#108ee9"},"#108ee9")))},f=n(220),m=n(131),p=n(132),b=n(134),g=n(133),h=n(255),d=n(1371),y=n(675),v=n.n(y),E=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},e.handleClose=function(t){var n=e.state.tags.filter((function(e){return e!==t}));console.log(n),e.setState({tags:n})},e.showInput=function(){e.setState({inputVisible:!0},(function(){return e.input.focus()}))},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=e.state,n=t.inputValue,a=t.tags;n&&-1===a.indexOf(n)&&(a=[].concat(Object(f.a)(a),[n])),console.log(a),e.setState({tags:a,inputVisible:!1,inputValue:""})},e.saveInputRef=function(t){return e.input=t},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tags,a=t.inputVisible,l=t.inputValue;return r.a.createElement(c.a,{title:"Dynamic",className:"gx-card"},n.map((function(t,n){var a=t.length>20,l=r.a.createElement(i.a,{key:t,closable:0!==n,afterClose:function(){return e.handleClose(t)}},a?"".concat(t.slice(0,20),"..."):t);return a?r.a.createElement(h.a,{title:t,key:t},l):l})),a&&r.a.createElement(d.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:l,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&r.a.createElement(i.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},r.a.createElement(v.a,null)," New Tag"))}}]),n}(r.a.Component),O=n(51),C=i.a.CheckableTag,j=["Movies","Books","Music","Sports"],k=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],l=t[1];return r.a.createElement(c.a,{title:"Hot Tag",className:"gx-card"},r.a.createElement("h6",{style:{marginRight:8,display:"inline"}},"Categories:"),j.map((function(e){return r.a.createElement(C,{key:e,checked:n.indexOf(e)>-1,onChange:function(t){return function(e,t){var a=t?[].concat(Object(f.a)(n),[e]):n.filter((function(t){return t!==e}));l(a)}(e,t)}},e)})))};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(u,null),r.a.createElement(s,null)),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(E,null),r.a.createElement(k,null)))}}}]);