(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[116],{2107:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(1380),i=t(2135),s=t(2189),m=t(2147),o=t(2061),u=t(2155),g=t(2062),h=t(131),d=t(132),E=t(134),p=t(133),f=t(1993),v=t.n(f),b=function(e){return e?"".concat(window.location.pathname,"?").concat(v.a.stringify(e)):""},x=(t(1996),t(2146)),N=t(2057),y=Object(N.a)((function(e){var a=e.currentRefinement,t=e.refine;return l.a.createElement("div",{className:"gx-search-bar gx-lt-icon-search-bar"},l.a.createElement("div",{className:"gx-form-group"},l.a.createElement("input",{type:"search",placeholder:"Search here...",value:a,onChange:function(e){return t(e.target.value)},autoComplete:"off",className:"ant-input form-control",id:"q"}),l.a.createElement("span",{className:"gx-search-icon gx-pointer"},l.a.createElement("i",{className:"icon icon-search"}))))})),S=function(){return l.a.createElement("div",{className:"gx-algolia-header"},l.a.createElement(y,null),l.a.createElement("div",{className:"gx-algolia-sort-by"},l.a.createElement("label",null,"Sort by"),l.a.createElement(x.a,{items:[{value:"ikea",label:"Featured"},{value:"ikea_price_asc",label:"Price asc."},{value:"ikea_price_desc",label:"Price desc."}],defaultRefinement:"ikea"})))},k=t(2152),w=t(2153),R=t(2059),C=t(2154),_=t(2187),j=t(2188),L=c.a.Sider,O=function(){return l.a.createElement(L,{className:"gx-algolia-sidebar"},l.a.createElement("div",{className:"gx-algolia-sidebar-content"},l.a.createElement(k.a,{translations:{reset:"Clear all filters"}}),l.a.createElement("div",{className:"gx-algolia-category-item"},l.a.createElement("div",{className:"gx-algolia-category-title"},"Show results for"),l.a.createElement(w.a,{attributes:["category","sub_category","sub_sub_category"]})),l.a.createElement("div",{className:"gx-algolia-category-item"},l.a.createElement("div",{className:"gx-algolia-category-title"},"Refine By"),l.a.createElement(R.a,{header:l.a.createElement("span",null,"Type")},l.a.createElement(C.a,{className:"gx-algolia-refinementList",attribute:"type",operator:"or",limit:5,searchable:!0})),l.a.createElement(R.a,{header:l.a.createElement("span",null,"Materials")},l.a.createElement(C.a,{className:"gx-algolia-refinementList",attribute:"materials",operator:"or",limit:5,searchable:!0})),l.a.createElement(R.a,{header:l.a.createElement("span",null,"Rating")},l.a.createElement(_.a,{className:"gx-algolia-refinementList",attribute:"rating",max:5})),l.a.createElement(R.a,{header:l.a.createElement("span",null,"Price")},l.a.createElement(j.a,{className:"gx-algolia-refinementList",attribute:"price"}))),l.a.createElement("div",{className:"thank-you"},"Data courtesy of ",l.a.createElement("a",{href:"http://www.ikea.com/"},"ikea.com"))))},M=function(e){var a=e.children;return l.a.createElement("div",{className:"gx-algolia-footer"},a)},P=t(212),q=t(109),I=t(2030),T=function(e){var a=e.item;console.log(a);for(var t=[],n=0;n<5;n++){var r=n>=a.rating?"--empty":"",c=n>=a.rating?"Empty":"";t.push(l.a.createElement("svg",{key:n,className:"ais-RatingMenu-starIcon ais-RatingMenu-starIcon".concat(r),"aria-hidden":"true",width:"24",height:"24"},l.a.createElement("use",{xlinkHref:"#ais-RatingMenu-star".concat(c,"Symbol")})))}return l.a.createElement("div",{className:"gx-product-item gx-product-vertical"},l.a.createElement("div",{className:"gx-product-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/hilnmyskv/image/fetch/h_300,q_100,f_auto/".concat(a.image),alt:""})),l.a.createElement("div",{className:"gx-product-body"},l.a.createElement("div",{className:"gx-product-name"},l.a.createElement(I.a,{attribute:"name",hit:a})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(I.a,{attribute:"type",hit:a})),l.a.createElement("div",{className:"ais-RatingMenu-link"},t),l.a.createElement("div",{className:"gx-product-price"},"$",a.price)))},U=function(e){var a=e.hits;return l.a.createElement("div",{id:"product"},l.a.createElement(P.a,null,a.map((function(e){return l.a.createElement(q.a,{xl:8,lg:12,md:12,sm:12,xs:24},l.a.createElement(T,{item:e,key:e.objectID}))}))))},D=t(2006),H=t.n(D),J=c.a.Content,B=H()("latency","6be0576ff61c053d5f9a3225e2a90f76"),F=Object(o.a)((function(e){var a=e.searchState,t=e.searchResult;return t&&0===t.nbHits?l.a.createElement("div",{className:"gx-algolia-content-inner"},l.a.createElement("div",{className:"gx-algolia-no-results"},"No results found matching"," ",l.a.createElement("span",{className:"gx-algolia-query"},a.query))):l.a.createElement("div",{className:"gx-algolia-content-inner"},l.a.createElement(u.a,null),l.a.createElement($,null))})),$=Object(g.a)(U);a.default=(n=function(e){return l.a.createElement(i.a,{className:"gx-main-content",indexName:"ikea",searchState:e.searchState,createURL:e.createURL,searchClient:B,onSearchStateChange:e.onSearchStateChange},l.a.createElement(s.a,{hitsPerPage:16}),l.a.createElement(c.a,{className:"gx-algolia-layout-has-sider"},l.a.createElement(O,null),l.a.createElement("div",{className:"gx-algolia-main"},l.a.createElement(S,null),l.a.createElement(J,{className:"gx-algolia-content"},l.a.createElement(F,null)),l.a.createElement(M,null,l.a.createElement(m.a,{showLast:!0})))))},function(e){Object(E.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(h.a)(this,t),(e=a.call(this)).onSearchStateChange=function(a){clearTimeout(e.debouncedSetState),e.debouncedSetState=setTimeout((function(){window.history.pushState(a,null,b(a))}),700),e.setState({searchState:a})},e.state={searchState:v.a.parse(window.location.search.slice(1))},window.addEventListener("popstate",(function(a){var t=a.state;return e.setState({searchState:t})})),e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(n,Object.assign({},this.props,{searchState:this.state.searchState,onSearchStateChange:this.onSearchStateChange,createURL:b}))}}]),t}(r.Component))}}]);