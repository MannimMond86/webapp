(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[127],{2131:function(e,t,a){"use strict";a.r(t);for(var n=a(131),r=a(132),c=a(134),o=a(133),s=a(0),l=a.n(s),i=a(212),h=a(109),u=a(220),g=a(1369),d=a(2106),m=[],f=0;f<20;f++)m.push({key:f.toString(),title:"content".concat(f+1),description:"description of content".concat(f+1),disabled:f%3<1});var y=m.filter((function(e){return+e.key%3>1})).map((function(e){return e.key})),p=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={targetKeys:y,selectedKeys:[]},e.handleChange=function(t,a,n){e.setState({targetKeys:t}),console.log("targetKeys: ",y),console.log("direction: ",a),console.log("moveKeys: ",n)},e.handleSelectChange=function(t,a){e.setState({selectedKeys:[].concat(Object(u.a)(t),Object(u.a)(a))}),console.log("sourceSelectedKeys: ",t),console.log("targetSelectedKeys: ",a)},e.handleScroll=function(e,t){console.log("direction:",e),console.log("target:",t.target)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state;return l.a.createElement(g.a,{className:"gx-card",title:"Basic"},l.a.createElement(d.a,{dataSource:m,titles:["Source","Target"],targetKeys:e.targetKeys,selectedKeys:e.selectedKeys,onChange:this.handleChange,onSelectChange:this.handleSelectChange,onScroll:this.handleScroll,render:function(e){return e.title}}))}}]),a}(l.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={mockData:[],targetKeys:[]},e.getMock=function(){for(var t=[],a=[],n=0;n<20;n++){var r={key:n.toString(),title:"content".concat(n+1),description:"description of content".concat(n+1),chosen:2*Math.random()>1};r.chosen&&t.push(r.key),a.push(r)}e.setState({mockData:a,targetKeys:t})},e.filterOption=function(e,t){return t.description.indexOf(e)>-1},e.handleChange=function(t){e.setState({targetKeys:t})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMock()}},{key:"render",value:function(){return l.a.createElement(g.a,{className:"gx-card",title:"Search"},l.a.createElement(d.a,{dataSource:this.state.mockData,showSearch:!0,filterOption:this.filterOption,targetKeys:this.state.targetKeys,onChange:this.handleChange,render:function(e){return e.title}}))}}]),a}(l.a.Component),v=a(120),S=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={mockData:[],targetKeys:[]},e.getMock=function(){for(var t=[],a=[],n=0;n<20;n++){var r={key:n.toString(),title:"content".concat(n+1),description:"description of content".concat(n+1),chosen:2*Math.random()>1};r.chosen&&t.push(r.key),a.push(r)}e.setState({mockData:a,targetKeys:t})},e.handleChange=function(t){e.setState({targetKeys:t})},e.renderFooter=function(){return l.a.createElement(v.a,{size:"small",style:{float:"right",margin:5},onClick:e.getMock},"reload")},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMock()}},{key:"render",value:function(){return l.a.createElement(g.a,{className:"gx-card",title:"Advance"},l.a.createElement(d.a,{className:"gx-ant-transfer-width",dataSource:this.state.mockData,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:this.state.targetKeys,onChange:this.handleChange,render:function(e){return"".concat(e.title,"-").concat(e.description)},footer:this.renderFooter}))}}]),a}(l.a.Component),K=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={mockData:[],targetKeys:[]},e.getMock=function(){for(var t=[],a=[],n=0;n<20;n++){var r={key:n.toString(),title:"content".concat(n+1),description:"description of content".concat(n+1),chosen:2*Math.random()>1};r.chosen&&t.push(r.key),a.push(r)}e.setState({mockData:a,targetKeys:t})},e.handleChange=function(t,a,n){console.log(t,a,n),e.setState({targetKeys:t})},e.renderItem=function(e){return{label:l.a.createElement("span",{className:"custom-item"},e.title," - ",e.description),value:e.title}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMock()}},{key:"render",value:function(){return l.a.createElement(g.a,{className:"gx-card",title:"CustomData"},l.a.createElement(d.a,{className:"gx-ant-transfer-width",dataSource:this.state.mockData,listStyle:{width:300,height:300},targetKeys:this.state.targetKeys,onChange:this.handleChange,render:this.renderItem}))}}]),a}(l.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(h.a,{lg:24,md:24,sm:24,xs:24},l.a.createElement(S,null)),l.a.createElement(h.a,{lg:24,md:24,sm:24,xs:24},l.a.createElement(K,null)),l.a.createElement(h.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(p,null)),l.a.createElement(h.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(k,null)))}}]),a}(s.Component);t.default=b}}]);