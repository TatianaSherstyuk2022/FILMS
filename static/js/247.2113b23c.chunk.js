"use strict";(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[247],{247:function(n,e,t){t.r(e);var r=t(439),a=t(791),c=t(689),u=t(390),i=t(639),s=t(184);e.default=function(){var n,e=(0,a.useState)(!1),t=(0,r.Z)(e,2),o=t[0],p=t[1],f=(0,c.UO)().movieId,d=(0,a.useState)(),l=(0,r.Z)(d,2),h=l[0],v=l[1];return(0,a.useEffect)((function(){p(!0),(0,u.y)(f).then((function(n){var e=n.cast;return v(e)})).catch((function(n){console.log(n)})).finally(p(!1))}),[f]),(0,s.jsxs)("div",{children:[o&&(0,s.jsx)(i.a,{}),h&&h.map((function(e){return n=e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{width:"30px",src:n,alt:e.name}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Name:"})," ",e.name]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Character:"})," ",e.character]})]},e.id)}))]})}},639:function(n,e,t){t.d(e,{a:function(){return u}});var r=t(643),a="Loader_spinner__iDFIv",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.Ll,{height:"80",width:"80",color:"blue",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},390:function(n,e,t){t.d(e,{Mc:function(){return o},OT:function(){return p},QY:function(){return s},oO:function(){return d},y:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(912),i="6761e5de3d20f3ac36b904d02ab8823a";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.2113b23c.chunk.js.map