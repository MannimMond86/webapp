(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[66],{1782:function(e,a,t){},2086:function(e,a,t){"use strict";t.r(a);for(var n=t(131),l=t(132),c=t(134),r=t(133),o=t(0),u=t.n(o),i=t(212),s=t(109),m=t(1370),g=t(1369),d=m.a.Option,h=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Basic"},u.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",defaultValue:"lucy",style:{width:120},onChange:function(e){console.log("selected ".concat(e))}},u.a.createElement(d,{value:"jack"},"Jack"),u.a.createElement(d,{value:"lucy"},"Lucy"),u.a.createElement(d,{value:"disabled",disabled:!0},"Disabled"),u.a.createElement(d,{value:"Yiminghe"},"yiminghe")),u.a.createElement(m.a,{className:"gx-mb-3",defaultValue:"lucy",style:{width:120},allowClear:!0,disabled:!0},u.a.createElement(d,{value:"lucy"},"Lucy")))},f=t(1375),E=(t(1782),m.a.Option),y=[],p=10;p<36;p++)y.push(u.a.createElement(E,{key:p.toString(36)+p},p.toString(36)+p));function v(e){console.log("Selected: ".concat(e))}for(var C=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={size:"default"},e.handleSizeChange=function(a){e.setState({size:a.target.value})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.size;return u.a.createElement(g.a,{className:"gx-card",title:"Seclect Size"},u.a.createElement(f.default.Group,{className:"gx-mb-2",value:e,onChange:this.handleSizeChange},u.a.createElement(f.default.Button,{value:"large"},"Large"),u.a.createElement(f.default.Button,{value:"default"},"Default"),u.a.createElement(f.default.Button,{value:"small"},"Small")),u.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",size:e,defaultValue:"a1",onChange:v,style:{width:200}},y),u.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",mode:"tags",size:e,defaultValue:"a1",onChange:v,style:{width:200}},y),u.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",mode:"multiple",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:v,style:{width:"100%"}},y),u.a.createElement(m.a,{className:"gx-w-100",mode:"tags",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:v,style:{width:"100%"}},y))}}]),t}(u.a.Component),b=m.a.Option,w=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Search Field"},u.a.createElement(m.a,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e))},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},u.a.createElement(b,{value:"jack"},"Jack"),u.a.createElement(b,{value:"lucy"},"Lucy"),u.a.createElement(b,{value:"tom"},"Tom")))},S=m.a.Option,x=[],O=10;O<36;O++)x.push(u.a.createElement(S,{key:O.toString(36)+O},O.toString(36)+O));for(var k=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Select Tag"},u.a.createElement(m.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:function(e){console.log("selected ".concat(e))}},x))},j=m.a.Option,N=[],z=10;z<36;z++)N.push(u.a.createElement(j,{key:z.toString(36)+z},z.toString(36)+z));for(var V=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Select Multiple"},u.a.createElement(m.a,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:function(e){console.log("selected ".concat(e))}},N))},J=m.a.Option,L=m.a.OptGroup,P=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Select Option"},u.a.createElement(m.a,{defaultValue:"lucy",style:{width:200},onChange:function(e){console.log("selected ".concat(e))}},u.a.createElement(L,{label:"Manager"},u.a.createElement(J,{value:"jack"},"Jack"),u.a.createElement(J,{value:"lucy"},"Lucy")),u.a.createElement(L,{label:"Engineer"},u.a.createElement(J,{value:"Yiminghe"},"yiminghe"))))},B=m.a.Option,A=["Zhejiang","Jiangsu"],F={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},M=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={cities:F[A[0]],secondCity:F[A[0]][0]},e.handleProvinceChange=function(a){e.setState({cities:F[a],secondCity:F[a][0]})},e.onSecondCityChange=function(a){e.setState({secondCity:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=A.map((function(e){return u.a.createElement(B,{key:e},e)})),a=this.state.cities.map((function(e){return u.a.createElement(B,{key:e},e)}));return u.a.createElement(g.a,{className:"gx-card",title:"Select Coordinate"},u.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",defaultValue:A[0],style:{width:90},onChange:this.handleProvinceChange},e),u.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",value:this.state.secondCity,style:{width:90},onChange:this.onSecondCityChange},a))}}]),t}(u.a.Component),T=m.a.Option,Z=function(){return u.a.createElement(g.a,{className:"gx-card",title:"With Value"},u.a.createElement(m.a,{labelInValue:!0,defaultValue:{key:"lucy"},style:{width:120},onChange:function(e){console.log(e)}},u.a.createElement(T,{value:"jack"},"Jack (100)"),u.a.createElement(T,{value:"lucy"},"Lucy (101)")))},D=m.a.Option,G=[],W=10;W<36;W++)G.push(u.a.createElement(D,{key:W.toString(36)+W},W.toString(36)+W));var Y=function(){return u.a.createElement(g.a,{className:"gx-card",title:"Automatic Completion"},u.a.createElement(m.a,{mode:"tags",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e))},tokenSeparators:[","]},G))},H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(i.a,null,u.a.createElement(s.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(h,null),u.a.createElement(w,null),u.a.createElement(k,null),u.a.createElement(V,null),u.a.createElement(P,null)),u.a.createElement(s.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(M,null),u.a.createElement(Z,null),u.a.createElement(Y,null),u.a.createElement(C,null)))}}]),t}(o.Component);a.default=H}}]);