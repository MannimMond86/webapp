(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[72],{1445:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=function(e){var a=e.title,t=e.extra,l=e.styleName;return n.a.createElement("h2",{className:"gx-entry-title ".concat(l)},a,n.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"},t))};s.defaultProps={styleName:""},a.a=s},1487:function(e,a,t){"use strict";var l=t(51),n=t(0),s=t.n(n),m=t(1511),c=t(1379),r=t(1445),i=t(79),g=function(e){var a=e.task;return s.a.createElement(i.a,null,s.a.createElement("p",{className:"gx-mb-0"},a.title),a.imageList.length>0?s.a.createElement("ul",{className:"gx-list-inline gx-mb-3 gx-mt-2"},a.imageList.map((function(e,t){return 2===t?s.a.createElement("li",{className:"gx-mb-1",key:t},s.a.createElement("span",{className:"gx-link gx-img-more"}," +",a.imageList.length-2," More")):t>2?null:s.a.createElement("li",{className:"gx-mb-1",key:t},s.a.createElement(c.a,{shape:"square",className:"gx-size-40",src:e}))}))):null)},o=m.a.Item;function x(e,a){if(""===e.avatar){var t=e.name.split(" ");if(1===e.name.split(" ").length){var l=t[0].charAt(0).toUpperCase();return s.a.createElement(c.a,{shape:a,className:"gx-size-40 gx-bg-primary"},l)}var n=t[0].charAt(0).toUpperCase()+t[1].charAt(0).toUpperCase();return s.a.createElement(c.a,{shape:a,className:"gx-size-40 gx-bg-cyan"},n)}return s.a.createElement(c.a,{shape:a,className:"gx-size-40",src:e.avatar})}a.a=function(e){var a=Object(n.useState)(3),t=Object(l.a)(a,2),c=t[0],i=t[1],u=Object(n.useState)(e.shape),d=Object(l.a)(u,2),E=d[0],f=d[1];Object(n.useEffect)((function(){f(e.shape),window.innerWidth<575&&i(1)}),[e.shape]);return s.a.createElement("div",{className:"gx-entry-sec"},s.a.createElement(r.a,{title:"Recent Activities"}),e.recentList.slice(0,c).map((function(e,a){return s.a.createElement("div",{className:"gx-timeline-info",key:"activity"+a},s.a.createElement("h4",{className:"gx-timeline-info-day"},e.day),s.a.createElement(m.a,null,e.tasks.map((function(e,a){return s.a.createElement(o,{key:"timeline"+a,mode:"alternate",dot:x(e,E)},s.a.createElement(g,{task:e}))}))))})),s.a.createElement("span",{className:"gx-link gx-btn-link",onClick:function(){i(c+1)}},"Load More"))}},2071:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(212),m=t(109),c=t(51),r=t(120),i=t(21),g=t(79),o=function(e){var a=Object(l.useState)(!1),t=Object(c.a)(a,2),s=t[0],m=t[1],o=Object(i.e)((function(e){return e.auth.authUser})),x=e.user,u=e.userInfo,d=x.id,E=x.name,f=x.image,p=x.address,N=u.followers,v=u.following,b=u.frinds;return n.a.createElement(g.a,null,n.a.createElement("div",{className:"gx-profileon"},n.a.createElement("div",{className:"gx-profileon-thumb gx-profileon-thumb-htctrcrop"},n.a.createElement("img",{src:f,alt:""})),n.a.createElement("div",{className:"gx-profileon-content"},n.a.createElement("p",{className:"gx-profileon-title"},E),n.a.createElement("span",{className:"gx-fs-sm"},p))),n.a.createElement("div",{className:"gx-follower gx-text-center"},n.a.createElement("ul",{className:"gx-follower-list"},n.a.createElement("li",null,n.a.createElement("span",{className:"gx-follower-title"},N),n.a.createElement("span",null,"Followers")),n.a.createElement("li",null,n.a.createElement("span",{className:"gx-follower-title"},v),n.a.createElement("span",null,"Following")),n.a.createElement("li",null,n.a.createElement("span",{className:"gx-follower-title"},b),n.a.createElement("span",null,"project")))),n.a.createElement("div",{className:"gx-mb-xl-4 gx-mb-3"},n.a.createElement("p",null,"You are following ",E),o===d?null:n.a.createElement(r.a,{className:"gx-btn-sm gx-mb-0",type:"primary",onClick:function(){m((function(e){return{isFollow:!e.isFollow}}))}},!0===s?"Follow":"Unfollow")))},x=t(220),u=t(16),d=t(1369),E=t(1379),f=t(652),p=t.n(f),N=function(e){var a=e.date,t=p()(a,"ddd MMM DD YYYY kk:mm:ss Z"),l=p()(new Date),s=p.a.duration(l.diff(t)),m=0|s.asMinutes(),c=0|s.asHours();switch(!0){case 0===m:return n.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},"Just now");case m<60:return n.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},m," min");case c<24:return n.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},c," hours");default:return n.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},t.format("DD MMM, YYYY"))}},v=function(e){var a=Object(l.useState)(!1),t=Object(c.a)(a,2),s=t[0],m=t[1],i=Object(l.useState)({id:0,user:{},isLike:!0,likeCount:0,date:"",commentList:[],comment:""}),g=Object(c.a)(i,2),o=g[0],x=g[1];Object(l.useEffect)((function(){x(e.commentData)}),[e.commentData]);var d=function(){m((function(e){return{isComment:!e.isComment}}))},f=o.user,p=o.isLike,v=o.date,b=o.comment;return n.a.createElement("div",{className:"gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3"},n.a.createElement(E.a,{className:"gx-mr-3 gx-size-40",src:f.image}),n.a.createElement("div",{className:"gx-media-body"},n.a.createElement("h5",{className:"gx-wall-user-title"},f.name),n.a.createElement(N,{date:v}),n.a.createElement("p",{className:"gx-mt-2"},b),n.a.createElement("div",{className:"gx-flex-row"},n.a.createElement(r.a,{type:"primary",size:"small",onClick:function(){x(Object(u.a)(Object(u.a)({},o),{},{isLike:!o.isLike,likeCount:!0===o.isLike?o.likeCount-1:o.likeCount+1}))}},!0===p?"Like":"UnLike"),n.a.createElement(r.a,{className:"gx-btn-primary-light",size:"small",onClick:d},"Comment")),!0===s?n.a.createElement("div",{className:"gx-media"},n.a.createElement(E.a,{className:"gx-mr-3 gx-size-30",src:f.image}),n.a.createElement("div",{className:"gx-media-body"},n.a.createElement("input",{id:"required",className:"gx-border-0 ant-input",placeholder:"Type Comments",onKeyPress:function(e){"Enter"===e.key&&d()}}))):null))},b=t(1483),y=t(285),h=t.n(y),k=(t(438),t(439),function(e){var a=function(){e.handleToggle()},t=e.mediaList;switch(t.length){case 1:return n.a.createElement("div",{className:"gx-gallery-item",onClick:a},n.a.createElement("img",{className:"gx-img-fluid",src:t[0].image,alt:"post"}));case 2:return n.a.createElement("div",{className:"gx-gallery-grid gx-gallery-2",onClick:a},n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{className:"gx-img-fluid",src:t[0].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{className:"gx-img-fluid",src:t[1].image,alt:"post"})));case 3:return n.a.createElement("div",{className:"gx-gallery-grid gx-gallery-3",onClick:a},n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{className:"gx-img-fluid",src:t[0].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{className:"gx-img-fluid",src:t[1].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{className:"gx-img-fluid",src:t[2].image,alt:"post"})));case 4:return n.a.createElement("div",{className:"gx-gallery-grid gx-gallery-4",onClick:a},n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[0].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[1].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[2].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[3].image,alt:"post"})));default:return n.a.createElement("div",{className:"gx-gallery-grid gx-gallery-4-more",onClick:a},n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[0].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[1].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item thumb"},n.a.createElement("img",{src:t[2].image,alt:"post"})),n.a.createElement("div",{className:"gx-gallery-item"},n.a.createElement("img",{src:t[3].image,alt:"post"}),n.a.createElement("div",{className:"gx-gallery-item-content"},n.a.createElement("h1",{className:"gx-text-white"},"+ ",t.length-3))))}});function w(e){var a={arrows:!0,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,className:"slides"};return n.a.createElement(g.a,null,n.a.createElement("h4",null,"Slide Show"),n.a.createElement(h.a,a,e.mediaList.map((function(e,a){return n.a.createElement("div",{key:a},n.a.createElement("img",{alt:"example",style:{width:"100%"},src:e.image}))}))))}var L=function(e){var a=Object(l.useState)(),t=Object(c.a)(a,2),s=t[0],m=t[1],r=function(){m((function(e){return{previewVisible:!e.previewVisible}}))};return n.a.createElement(g.a,null,n.a.createElement(k,{mediaList:e.mediaList,handleToggle:r}),n.a.createElement(b.a,{visible:s,footer:null,onCancel:r},n.a.createElement(w,{mediaList:e.mediaList})))},j=function(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),s=t[0],m=t[1],r=Object(l.useState)({id:0,text:"",user:{},date:"",mediaList:[],viewCount:0,likeCount:0,isLike:!1,commentList:[]}),i=Object(c.a)(r,2),g=i[0],o=i[1];Object(l.useEffect)((function(){o(e.postData)}),[e.postData]);var x=g.user,f=g.date,p=g.mediaList,b=g.viewCount,y=g.likeCount,h=g.isLike,k=g.commentList,w=g.text;return n.a.createElement(d.a,{className:"gx-card"},n.a.createElement("div",{className:"gx-wall-content"},n.a.createElement("div",{className:"gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center"},n.a.createElement(E.a,{className:"gx-mr-3 gx-mb-2 gx-size-50",src:x.image}),n.a.createElement("div",{className:"gx-media-body"},n.a.createElement("h5",{className:"gx-wall-user-title"},x.name),n.a.createElement(N,{date:f}))),n.a.createElement("p",null,w),n.a.createElement("div",{className:"gx-wall-medialist"},p.length>0?n.a.createElement(L,{mediaList:p}):null),n.a.createElement("div",{className:"gx-flex-row gx-mb-2 gx-mb-xl-3"},n.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"},n.a.createElement("i",{className:"icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),n.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},b>0?b+" Views":"Views")),n.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey",onClick:function(){o(Object(u.a)(Object(u.a)({},g),{},{isLike:!g.isLike,likeCount:!0===g.isLike?g.likeCount-1:g.likeCount+1}))}},!0===h?n.a.createElement("i",{className:"icon icon-like gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle",style:{color:"blue"}}):n.a.createElement("i",{className:"icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),n.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},y>0?y+" Likes":"Likes")),n.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"},n.a.createElement("i",{className:"icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),n.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},k.length>0?k.length+" Comments":"Comments"))),n.a.createElement("div",{className:"gx-wall-comment-box"},k.map((function(e,a){return n.a.createElement(v,{key:a,index:a,commentData:e})}))),n.a.createElement("div",{className:"gx-wall-comment-box"},n.a.createElement("div",{className:"gx-media gx-mb-2"},n.a.createElement(E.a,{className:"gx-mr-3 gx-size-36",src:x.image}),n.a.createElement("div",{className:"gx-media-body"},n.a.createElement("textarea",{id:"required",className:"gx-border-0 ant-input",onChange:function(e){m(e.target.value)},onKeyPress:function(a){return function(a){if("Enter"===a.key){var t={user:e.user,comment:s,date:(new Date).toString(),likeCount:0,isLike:!0,commentList:[]},l=g.commentList;l.push(t),o(Object(u.a)(Object(u.a)({},g),{},{commentList:l})),m("")}}(a)},value:s,placeholder:"Type Comments"}))))))},C=t(1371),O=t(2125),S=t(1540),D=t(1376),z=C.a.TextArea,M=function(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),s=t[0],m=t[1],i=Object(l.useState)(!1),g=Object(c.a)(i,2),o=g[0],x=g[1],u=Object(l.useState)(""),f=Object(c.a)(u,2),p=f[0],N=f[1],v=Object(l.useState)([]),y=Object(c.a)(v,2),h=y[0],k=y[1],w=Object(l.useState)(!1),L=Object(c.a)(w,2),j=L[0],C=L[1],M=0===h.length&&""===s,T=n.a.createElement("div",null,n.a.createElement(D.a,{type:"plus"}),n.a.createElement("div",{className:"ant-upload-text"},"Upload"));return n.a.createElement(d.a,{className:"gx-card"},n.a.createElement("div",{className:"gx-media gx-mb-2"},n.a.createElement(E.a,{className:"gx-size-50 gx-mr-3",src:e.user.image}),n.a.createElement("div",{className:"gx-media-body"},n.a.createElement(z,{className:"gx-border-0",id:"exampleTextarea",value:s,multiline:"true",rows:4,onChange:function(e){m(e.target.value)},placeholder:"Whats in your mind?",margin:"none"}))),n.a.createElement("div",{className:"gx-clearfix"},!0===j?n.a.createElement(O.a,{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:h,onPreview:function(e){N(e.url||e.thumbUrl),o(!0)},onChange:function(e){var a=e.fileList;k(a)}},h.length>=8?null:T):null,n.a.createElement(b.a,{visible:o,footer:null,onCancel:function(){x(!1)}},n.a.createElement("img",{alt:"example",style:{width:"100%"},src:p}))),n.a.createElement(S.a,null),n.a.createElement("div",{className:"ant-row-flex"},n.a.createElement("div",{className:"gx-pointer",onClick:function(){C(!j)}},n.a.createElement("i",{className:"icon icon-camera gx-mr-2 gx-fs-xl gx-d-inline-flex gx-vertical-align-middle"}),n.a.createElement("span",{className:"gx-fs-sm"}," Add Photos/Album ")),n.a.createElement(r.a,{type:"primary",size:"small",className:"gx-ml-auto gx-mb-0",disabled:M?"disabled":"",onClick:function(){e.addPost(s,h),m(""),x(!1),N(""),k([]),C(!1)}},"SEND")))},T=function(e){var a=Object(l.useState)(e.postList),t=Object(c.a)(a,2),s=t[0],m=t[1],r=Object(l.useState)(e.user),i=Object(c.a)(r,2),g=i[0],o=i[1];Object(l.useEffect)((function(){o(e.user)}),[e.user]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(M,{addPost:function(e,a){console.log("click ho gya");var t={id:1343300*Math.random(),text:e,user:g,date:(new Date).toString(),mediaList:a.map((function(e){return{image:e.thumbUrl}})),viewCount:0,likeCount:0,isLike:!1,commentCount:0,commentList:[]};m([t].concat(Object(x.a)(s)))},user:g}),s.map((function(e){return n.a.createElement(j,{key:e.id,index:e.id,postData:e,user:g})})))},U=t(1445),Y=function(e){var a=e.interestList;return n.a.createElement("div",{className:"gx-entry-sec"},n.a.createElement(U.a,{title:"Interests"}),n.a.createElement("ul",{className:"gx-list-inline"},a.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("span",{className:"gx-link gx-btn gx-btn-white gx-mb-10"},e.interest))}))))},A=function(e){var a=e.photoList,t=e.title;return n.a.createElement("div",{className:"gx-entry-sec"},n.a.createElement(U.a,{title:t}),n.a.createElement("ul",{className:"gx-gallery-list"},a.map((function(e,a){return n.a.createElement("li",{key:a},n.a.createElement("img",{alt:"...",src:e.image}))}))))},P=t(1404);function F(e){var a=e.isType;return"online"===a?n.a.createElement(P.a,{status:"success"}):"away"===a?n.a.createElement(P.a,{status:"warning"}):n.a.createElement(P.a,{count:0,status:"error"})}var q=function(e){var a=e.friendList;return n.a.createElement("div",{className:"gx-entry-sec"},n.a.createElement(U.a,{title:n.a.createElement("span",null,"Friends - 530 ",n.a.createElement("span",{className:"gx-text-grey"},"(27 Mutual)"))}),n.a.createElement("ul",{className:"gx-fnd-list"},a.map((function(e,a){return n.a.createElement("li",{className:"gx-mb-2",key:a},n.a.createElement("div",{className:"gx-user-fnd"},n.a.createElement("img",{alt:"...",src:e.image}),n.a.createElement("div",{className:"gx-user-fnd-content"},n.a.createElement(F,{isType:e.status}),n.a.createElement("h6",null,e.name))))}))))},I=t(63),V=t(1487),J=t(1559),K=function(e){var a=e.communitiesList;return n.a.createElement("div",{className:"gx-entry-sec"},n.a.createElement(U.a,{title:"Communities"}),n.a.createElement("ul",{className:"gx-gallery-list"},a.map((function(e,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"gx-gallery-thumb"},n.a.createElement("img",{alt:"...",src:e.image}),n.a.createElement("div",{className:"gx-gallery-thumb-content"},n.a.createElement("h6",null,e.title))))}))))};a.default=function(){return n.a.createElement("div",{className:"gx-main-content"},n.a.createElement(s.a,null,n.a.createElement(m.a,{xl:6,lg:8,md:8,sm:10,xs:24,className:"gx-d-none gx-d-sm-block"},n.a.createElement(I.a,{className:"gx-wall-scroll"},n.a.createElement(o,{user:J.g,userInfo:J.h}),n.a.createElement(Y,{interestList:J.c}),n.a.createElement(q,{friendList:J.b}),n.a.createElement(A,{photoList:J.d,title:"Photos"}),n.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4"},"Go to gallery ",n.a.createElement("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})))),n.a.createElement(m.a,{xl:12,lg:8,md:16,sm:14,xs:24},n.a.createElement(I.a,{className:"gx-wall-scroll"},n.a.createElement("div",{className:"gx-wall-postlist"},n.a.createElement(T,{postList:J.e,user:J.g})))),n.a.createElement(m.a,{xl:6,lg:8,md:6,sm:24,xs:24,className:"gx-d-none gx-d-lg-block"},n.a.createElement(I.a,{className:"gx-wall-scroll"},n.a.createElement(K,{communitiesList:J.a}),n.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4"},"See All Communities ",n.a.createElement("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})),n.a.createElement(V.a,{recentList:J.f,shape:"square"})))))}}}]);