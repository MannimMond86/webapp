(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[112],{1866:function(e,t,a){e.exports=a.p+"static/media/marker.a30f29ac.png"},2182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1369),c=a(16),i=a(131),o=a(132),s=a(215),m=a(134),h=a(133),u=a(1435),d=window.google,k=Object(u.withGoogleMap)((function(e){return r.a.createElement(u.GoogleMap,{defaultZoom:15,center:e.center},e.markers.map((function(t,n){return r.a.createElement(u.Marker,{defaultIcon:a(1866),key:n,position:t.position,onClick:function(){return e.onMarkerClick(t)}},t.showInfo&&r.a.createElement(u.InfoWindow,{onCloseClick:function(){return e.onMarkerClose(t)}},r.a.createElement("div",null,t.infoContent)))})))})),p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={center:{lat:47.646935,lng:-122.303763},markers:[{position:new d.maps.LatLng(47.646145,-122.303763),showInfo:!1,infoContent:r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0\r .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5\r 3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11\r 5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0\r 1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"}))),r.a.createElement("div",{className:"ml-1"},r.a.createElement("p",null,"UW Medical Center"),r.a.createElement("p",null,"1959 NE Pacific St"),r.a.createElement("p",null,"Seattle, WA 98195")))},{position:new d.maps.LatLng(47.647935,-122.303763),showInfo:!1,infoContent:r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672\r 13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5\r 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16\r 8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368\r 2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"}))),r.a.createElement("div",{className:"ml-1"},r.a.createElement("p",null,"University of Washington Intramural Activities (IMA) Building"),r.a.createElement("p",null,"3924 Montlake Blvd NE"),r.a.createElement("p",null,"Seattle, WA 98195")))}]},e.handleMarkerClick=e.handleMarkerClick.bind(Object(s.a)(e)),e.handleMarkerClose=e.handleMarkerClose.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleMarkerClick",value:function(e){this.setState({markers:this.state.markers.map((function(t){return t===e?Object(c.a)(Object(c.a)({},t),{},{showInfo:!0}):t}))})}},{key:"handleMarkerClose",value:function(e){this.setState({markers:this.state.markers.map((function(t){return t===e?Object(c.a)(Object(c.a)({},t),{},{showInfo:!1}):t}))})}},{key:"render",value:function(){return r.a.createElement(k,{loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"550px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:this.state.center,markers:this.state.markers,onMarkerClick:this.handleMarkerClick,onMarkerClose:this.handleMarkerClose})}}]),a}(n.Component),f=a(2);t.default=function(){return r.a.createElement(l.a,{className:"gx-card",title:r.a.createElement(f.a,{id:"sidebar.map.popupInfo"})},r.a.createElement(p,null))}}}]);