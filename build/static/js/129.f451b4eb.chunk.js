(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[129],{2101:function(t,e,n){"use strict";n.r(e);var i=n(131),a=n(132),o=n(134),c=n(133),l=n(0),r=n.n(l),s=n(212),f=n(109),m=n(649),u=n(1369),h=n(120),p=function(){m.a.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},E=function(){return r.a.createElement(u.a,{title:"Basic",className:"gx-card"},r.a.createElement(h.a,{type:"primary",onClick:p},"Open the notification box"))},N=function(){m.a.open({message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0})},d=function(){return r.a.createElement(u.a,{title:"Duration",className:"gx-card"},r.a.createElement(h.a,{type:"primary",onClick:N},"Open the notification box"))},g=function(t){m.a[t]({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},y=function(){return r.a.createElement(u.a,{title:"With Icon",className:"gx-card"},r.a.createElement(h.a,{onClick:function(){return g("success")}},"Success"),r.a.createElement(h.a,{onClick:function(){return g("info")}},"Info"),r.a.createElement(h.a,{onClick:function(){return g("warning")}},"Warning"),r.a.createElement(h.a,{onClick:function(){return g("error")}},"Error"))},T=function(){console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")},b=function(){var t="open".concat(Date.now()),e=r.a.createElement(h.a,{type:"primary",size:"small",onClick:function(){return m.a.close(t)}},"Confirm");m.a.open({message:"Notification Title",description:'A function will be be called after the Notification is closed (automatically after the "duration" time of manually).',btn:e,key:t,onClose:T})},k=function(){return r.a.createElement(u.a,{title:"Custom Close",className:"gx-card"},r.a.createElement(h.a,{type:"primary",onClick:b},"Open the notification box"))},x=n(1376),C=function(){m.a.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.",icon:r.a.createElement(x.a,{type:"smile-circle",style:{color:"#108ee9"}})})},w=function(){return r.a.createElement(u.a,{title:"Customize Icon",className:"gx-card"},r.a.createElement(h.a,{type:"primary",onClick:C},"Open the notification box"))},O=n(1370),v=O.a.Option,I=["topLeft","topRight","bottomLeft","bottomRight"],j=function(){m.a.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification."})},L=function(){return r.a.createElement(u.a,{title:"Placement",className:"gx-card"},r.a.createElement(O.a,{className:"gx-mb-2 gx-mr-2 gx-vertical-align-top",defaultValue:"topLeft",style:{width:120},onChange:function(t){m.a.config({placement:t})}},I.map((function(t){return r.a.createElement(v,{key:t,value:t},t)}))),r.a.createElement(h.a,{type:"primary",className:"gx-mb-2",onClick:j},"Open the notification box"))},z=function(){m.a.open({message:"Notification Title",description:"This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.",style:{width:600,marginLeft:-265}})},D=function(){return r.a.createElement(u.a,{title:"Placement",className:"gx-card"},r.a.createElement(h.a,{type:"primary",onClick:z},"Open the notification box"))},J=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(E,null),r.a.createElement(d,null),r.a.createElement(y,null),r.a.createElement(k,null)),r.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(D,null)))}}]),n}(l.Component);e.default=J}}]);