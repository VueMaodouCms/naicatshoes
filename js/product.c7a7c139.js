(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"057f":function(e,t,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(e){try{return a(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==i.call(e)?o(e):a(r(e))}},"746f":function(e,t,n){var r=n("428f"),a=n("5135"),i=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});a(t,e)||s(t,e,{value:i.f(e)})}},a4d3:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),s=n("c430"),o=n("83ab"),c=n("4930"),p=n("fdbf"),u=n("d039"),d=n("5135"),l=n("e8b5"),f=n("861d"),g=n("825a"),b=n("7b0b"),m=n("fc6a"),A=n("c04e"),v=n("5c6c"),h=n("7c73"),S=n("df75"),y=n("241c"),w=n("057f"),D=n("7418"),N=n("06cf"),E=n("9bf2"),O=n("d1e7"),j=n("9112"),L=n("6eeb"),C=n("5692"),_=n("f772"),I=n("d012"),k=n("90e3"),x=n("b622"),P=n("e538"),B=n("746f"),R=n("d44e"),W=n("69f3"),T=n("b727").forEach,M=_("hidden"),K="Symbol",U="prototype",V=x("toPrimitive"),J=W.set,z=W.getterFor(K),F=Object[U],G=a.Symbol,H=i("JSON","stringify"),Y=N.f,$=E.f,X=w.f,Q=O.f,q=C("symbols"),Z=C("op-symbols"),ee=C("string-to-symbol-registry"),te=C("symbol-to-string-registry"),ne=C("wks"),re=a.QObject,ae=!re||!re[U]||!re[U].findChild,ie=o&&u((function(){return 7!=h($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Y(F,t);r&&delete F[t],$(e,t,n),r&&e!==F&&$(F,t,r)}:$,se=function(e,t){var n=q[e]=h(G[U]);return J(n,{type:K,tag:e,description:t}),o||(n.description=t),n},oe=p?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof G},ce=function(e,t,n){e===F&&ce(Z,t,n),g(e);var r=A(t,!0);return g(n),d(q,r)?(n.enumerable?(d(e,M)&&e[M][r]&&(e[M][r]=!1),n=h(n,{enumerable:v(0,!1)})):(d(e,M)||$(e,M,v(1,{})),e[M][r]=!0),ie(e,r,n)):$(e,r,n)},pe=function(e,t){g(e);var n=m(t),r=S(n).concat(ge(n));return T(r,(function(t){o&&!de.call(n,t)||ce(e,t,n[t])})),e},ue=function(e,t){return void 0===t?h(e):pe(h(e),t)},de=function(e){var t=A(e,!0),n=Q.call(this,t);return!(this===F&&d(q,t)&&!d(Z,t))&&(!(n||!d(this,t)||!d(q,t)||d(this,M)&&this[M][t])||n)},le=function(e,t){var n=m(e),r=A(t,!0);if(n!==F||!d(q,r)||d(Z,r)){var a=Y(n,r);return!a||!d(q,r)||d(n,M)&&n[M][r]||(a.enumerable=!0),a}},fe=function(e){var t=X(m(e)),n=[];return T(t,(function(e){d(q,e)||d(I,e)||n.push(e)})),n},ge=function(e){var t=e===F,n=X(t?Z:m(e)),r=[];return T(n,(function(e){!d(q,e)||t&&!d(F,e)||r.push(q[e])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=k(e),n=function(e){this===F&&n.call(Z,e),d(this,M)&&d(this[M],t)&&(this[M][t]=!1),ie(this,t,v(1,e))};return o&&ae&&ie(F,t,{configurable:!0,set:n}),se(t,e)},L(G[U],"toString",(function(){return z(this).tag})),L(G,"withoutSetter",(function(e){return se(k(e),e)})),O.f=de,E.f=ce,N.f=le,y.f=w.f=fe,D.f=ge,P.f=function(e){return se(x(e),e)},o&&($(G[U],"description",{configurable:!0,get:function(){return z(this).description}}),s||L(F,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),T(S(ne),(function(e){B(e)})),r({target:K,stat:!0,forced:!c},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var n=G(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ue,defineProperty:ce,defineProperties:pe,getOwnPropertyDescriptor:le}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:ge}),r({target:"Object",stat:!0,forced:u((function(){D.f(1)}))},{getOwnPropertySymbols:function(e){return D.f(b(e))}}),H){var be=!c||u((function(){var e=G();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));r({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,n){var r,a=[e],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=t,(f(t)||void 0!==e)&&!oe(e))return l(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!oe(t))return t}),a[1]=t,H.apply(null,a)}})}G[U][V]||j(G[U],V,G[U].valueOf),R(G,K),I[M]=!0},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),s=n("50c4"),o=n("65f0"),c=[].push,p=function(e){var t=1==e,n=2==e,p=3==e,u=4==e,d=6==e,l=5==e||d;return function(f,g,b,m){for(var A,v,h=i(f),S=a(h),y=r(g,b,3),w=s(S.length),D=0,N=m||o,E=t?N(f,w):n?N(f,0):void 0;w>D;D++)if((l||D in S)&&(A=S[D],v=y(A,D,h),e))if(t)E[D]=v;else if(v)switch(e){case 3:return!0;case 5:return A;case 6:return D;case 2:c.call(E,A)}else if(u)return!1;return d?-1:p||u?u:E}};e.exports={forEach:p(0),map:p(1),filter:p(2),some:p(3),every:p(4),find:p(5),findIndex:p(6)}},d2f1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"product"}},[n("b-container",{attrs:{id:"main"}},[n("b-row",[e._l(e.items,(function(t){return n("b-col",{staticClass:"mb-5 p-1 d-flex flex-wrap justify-content-center bg1",attrs:{cols:"4",sm:"2"},on:{click:function(n){return e.select(t.brand)}}},[n("b-link",{staticClass:"items"},[n("img",{style:{objectFit:"cover",maxWidth:"100%"},attrs:{src:t.src}})])],1)})),e._l(e.products,(function(t){return e.judge===t.brand?n("b-col",{staticClass:"mb-5 p-1 d-flex flex-wrap justify-content-center align-items-center imghover",attrs:{cols:"3"}},[n("img",{staticClass:"mb-3 p-0 d-flex flex-wrap justify-content-center",attrs:{src:t.src},on:{click:function(e){t.popupActivo=!0}}}),n("p",{staticClass:"text-center"},[e._v(e._s(t.name))]),n("p",{staticClass:"text-center"},[e._v("NT$"+e._s(t.price))])]):e._e()})),e._l(e.paginatedprodcut,(function(t,r){return"ALL"===e.judge?n("b-col",{staticClass:"mb-5 p-1 d-flex flex-wrap justify-content-center align-items-center imghover",attrs:{cols:"3"}},[n("img",{staticClass:"mb-3 p-0 d-flex flex-wrap justify-content-center",attrs:{src:t.src},on:{click:function(e){t.popupActivo=!0}}}),n("p",{staticClass:"text-center"},[e._v(e._s(t.name))]),n("p",{staticClass:"text-center"},[e._v("NT$"+e._s(t.price))])]):e._e()})),"ALL"===e.judge?n("b-col",{staticClass:"mb-5"},[n("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,align:"center","number-of-pages":e.numberOfPages},on:{change:e.onPageChanged},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1):e._e()],2)],1),e._l(e.products,(function(t){return n("vs-popup",{attrs:{active:t.popupActivo},on:{"update:active":function(n){return e.$set(t,"popupActivo",n)}}},[n("img",{style:{objectFit:"cover",maxWidth:"100%"},attrs:{src:t.src}}),n("h5",{staticClass:"text-center"},[e._v(e._s(t.name))]),n("h3",{staticClass:"text-center"},[e._v("NT$"+e._s(t.price))]),n("h5",[e._v("尺寸")]),n("div",{staticClass:"d-flex flex-wrap"},e._l(e.sizes,(function(t){return n("b-button",{staticClass:"mx-2 mb-2",attrs:{variant:"outline-dark"},on:{click:function(e){return e.target.classList.toggle("active")}}},[e._v(e._s(t.us))])})),1),n("div",{staticClass:"d-flex justify-content-center"},[n("b-button",{attrs:{variant:"primary"},on:{click:function(n){return e.addCart(t)}}},[e._v("加入購物車")])],1)])}))],2)},a=[],i=(n("a4d3"),n("e01a"),n("d81d"),n("fb6a"),n("b0c0"),{data:function(){return{judge:"ALL",isActive:!0,products:[{src:"shoesimg/nike/dunk-low-brazil-release-date.jpg",brand:"NIKE",name:"nike sb dunk-low-brazil-release-date",price:3680,popupActivo:!1},{src:"shoesimg/nike/dunk-low-champ-colors-release-date.jpg",brand:"NIKE",name:"nike sb dunk-low-champ-colors",price:3680,popupActivo:!1},{src:"shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg",brand:"NIKE",name:"nike-x-travis-scott-air-max-270",price:16e3,popupActivo:!1},{src:"shoesimg/nike/Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋.png",brand:"NIKE",name:"Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋",price:22e3,popupActivo:!1},{src:"shoesimg/nike/OFF-WHITE X NIKE AIR MAX 90 “BLACK”.png",brand:"NIKE",name:"OFF-WHITE X NIKE AIR MAX 90 “BLACK”",price:11e3,popupActivo:!1},{src:"shoesimg/nike/Off-White x Nike Vapor Street 黑紫 釘鞋 女款.png",brand:"NIKE",name:"Off-White x Nike Vapor Street 黑紫 釘鞋",price:1e4,popupActivo:!1},{src:"shoesimg/nike/space-hippie-03-this-is-trash-release-date.jpg",brand:"NIKE",name:"space-hippie-03-this-is-trash-release-date",price:7e3,popupActivo:!1},{src:"shoesimg/nike/air-jordan-1-white-royal-release-date.jpg",brand:"JORDAN",name:"air-jordan-1-white-royal-release-date",price:6800,popupActivo:!1},{src:"shoesimg/nike/air-jordan-5-fire-red-release-date.jpg",brand:"JORDAN",name:"air jordan 5 fire red release-date",price:6300,popupActivo:!1},{src:"shoesimg/nike/Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠.png",brand:"JORDAN",name:"Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠",price:23e3,popupActivo:!1},{src:"shoesimg/nike/Travis Scott x Jordan 1 聯名款 倒鈎.png",brand:"JORDAN",name:"Travis Scott x Jordan 1 聯名款 倒鈎",price:35e3,popupActivo:!1},{src:"shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg",brand:"JORDAN",name:"air-jordan-7-retro-se-款-Hn4sV0",price:6300,popupActivo:!1},{src:"shoesimg/adidas/CONTINENTAL 80 經典鞋.jpg",brand:"ADIDAS",name:"ADIDAS CONTINENTAL 80 經典鞋",price:3090,popupActivo:!1},{src:"shoesimg/adidas/NMD_R1 PRIMEKNIT 經典鞋.jpg",brand:"ADIDAS",name:"ADIDAS NMD_R1 PRIMEKNIT 經典鞋",price:4e3,popupActivo:!1},{src:"shoesimg/adidas/ALPHAEDGE 4D SPACERACE 跑鞋.jpg",brand:"ADIDAS",name:"ADIDAS ALPHAEDGE 4D SPACERACE 跑鞋",price:3800,popupActivo:!1},{src:"shoesimg/adidas/NMD_R1 V2 經典鞋.jpg",brand:"ADIDAS",name:"ADIDAS NMD_R1 V2 經典鞋",price:4390,popupActivo:!1},{src:"shoesimg/adidas/ULTRABOOST 跑鞋.jpg",brand:"ADIDAS",name:"ADIDAS ULTRABOOST 跑鞋",price:3400,popupActivo:!1},{src:"shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png",brand:"ADIDAS",name:"ADIDAS Yeezy Boost 700 Wave Runner",price:11e3,popupActivo:!1},{src:"shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png",brand:"ADIDAS",name:"ADIDAS Yeezy Boost 700 nertia 慣性 灰橘E",price:1e4,popupActivo:!1},{src:"shoesimg/adidas/Yeezy Boost 350 V2 Cloud White.jpg",brand:"ADIDAS",name:"ADIDAS Yeezy Boost 350 V2 Cloud White",price:12800,popupActivo:!1},{src:"shoesimg/adidas/Yeezy Boost 700 V2 Vanta sneakers.jpg",brand:"ADIDAS",name:"ADIDAS Yeezy Boost 700 V2 Vanta sneakers",price:9e3,popupActivo:!1},{src:"shoesimg/new balance/new balance_灰色_M990GL5-2E楦_(美製鞋).jpg",brand:"NEWBALANCE",name:"new balance M990",price:7850,popupActivo:!1},{src:"shoesimg/new balance/new balance_白色_ML850YSF-D楦.jpg",brand:"NEWBALANCE",name:"new balance ML850",price:2600,popupActivo:!1},{src:"shoesimg/new balance/new balance_米白_ML373AC2-D楦.jpg",brand:"NEWBALANCE",name:"new balance ML373",price:2300,popupActivo:!1},{src:"shoesimg/new balance/new balance_淺綠_MS327SFA-D楦.jpg",brand:"NEWBALANCE",name:"new balance MS327",price:3100,popupActivo:!1},{src:"shoesimg/new balance/new balance_黑色_M992BL-D楦.jpg",brand:"NEWBALANCE",name:"new balance M992BL",price:7850,popupActivo:!1},{src:"shoesimg/new balance/new balance_粉藍_WL574SUO-B楦.jpg",brand:"NEWBALANCE",name:"new balance WL574",price:2600,popupActivo:!1},{src:"shoesimg/new balance/new balance_藍色_CM997HAK-D楦.jpg",brand:"NEWBALANCE",name:"new balance CM997",price:2300,popupActivo:!1},{src:"shoesimg/new balance/new balance_灰色_WL996WS-B楦.png",brand:"NEWBALANCE",name:"new balance WL996",price:2500,popupActivo:!1},{src:"shoesimg/vans/BIG CHECK OLD SKOOL.png",brand:"VANS",name:"vans BIG CHECK OLD SKOOL",price:2200,popupActivo:!1},{src:"shoesimg/vans/OLD SKOOL PLATFORM.png",brand:"VANS",name:"vans OLD SKOOL PLATFORM",price:2200,popupActivo:!1},{src:"shoesimg/vans/ULTRARANGE EXO.png",brand:"VANS",name:"vans ULTRARANGE EXO",price:2200,popupActivo:!1}],paginatedprodcut:this.products,perPage:12,currentPage:1,items:[{src:"shoesimg/商標/ALL.png",brand:"ALL"},{src:"shoesimg/商標/nike-logo.png",brand:"NIKE"},{src:"shoesimg/商標/jordan-logo.png",brand:"JORDAN"},{src:"shoesimg/商標/adidas-logo.png",brand:"ADIDAS"},{src:"shoesimg/商標/vans-logo.png",brand:"VANS"},{src:"shoesimg/商標/newbalance-logo.png",brand:"NEWBALANCE"}],sizes:[{us:"US 6"},{us:"US 6.5"},{us:"US 7"},{us:"US 7.5"},{us:"US 8"},{us:"US 8.5"},{us:"US 9"},{us:"US 9.5"},{us:"US 10"},{us:"US 10.5"},{us:"US 11"},{us:"US 11.5"},{us:"US 12"},{us:"US 12.5"}]}},methods:{select:function(e){this.judge=e,console.log(e)},paginate:function(e,t){var n=this.products;this.paginatedprodcut=n.slice(t*e,(t+1)*e)},onPageChanged:function(e){this.paginate(this.perPage,e-1)},addCart:function(e){e.popupActivo=!1,this.$store.commit("addCart",e)}},computed:{rows:function(){return this.products.length},numberOfPages:function(){return parseInt(this.rows/this.perPage)+1}},mounted:function(){var e=this;this.paginate(this.perPage,0),this.axios.get("http://localhost:3000/product").then((function(t){e.product=t.data.result.map((function(e){return{_id:e._id,name:e.name,price:e.price,count:e.count,brand:e.brand,description:e.description,src:"https://naicatshoes.herokuapp.com/product/"+e.image,popupActivo:!1}}))})).catch((function(e){console.log(e.response.data.message)}))}}),s=i,o=n("2877"),c=Object(o["a"])(s,r,a,!1,null,null,null);t["default"]=c.exports},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,i=n("1dde"),s=n("ae40"),o=i("map"),c=s("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),s=n("5135"),o=n("861d"),c=n("9bf2").f,p=n("e893"),u=i.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},l=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof l?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};p(l,u);var f=l.prototype=u.prototype;f.constructor=l;var g=f.toString,b="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=g.call(e);if(s(d,e))return"";var n=b?t.slice(7,-1):t.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}},e538:function(e,t,n){var r=n("b622");t.f=r},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),c=n("fc6a"),p=n("8418"),u=n("b622"),d=n("1dde"),l=n("ae40"),f=d("slice"),g=l("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),m=[].slice,A=Math.max;r({target:"Array",proto:!0,forced:!f||!g},{slice:function(e,t){var n,r,u,d=c(this),l=o(d.length),f=s(e,l),g=s(void 0===t?l:t,l);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,f,g);for(r=new(void 0===n?Array:n)(A(g-f,0)),u=0;f<g;f++,u++)f in d&&p(r,u,d[f]);return r.length=u,r}})}}]);
//# sourceMappingURL=product.c7a7c139.js.map