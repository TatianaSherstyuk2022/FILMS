"use strict";(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[186],{639:function(n,e,r){r.d(e,{a:function(){return c}});var t=r(643),a="Loader_spinner__iDFIv",u=r(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(t.Ll,{height:"80",width:"80",color:"blue",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},186:function(n,e,r){r.r(e);var t=r(439),a=r(689),u=r(791),c=r(390),i=r(639),s=r(184);e.default=function(){var n=(0,u.useState)(!1),e=(0,t.Z)(n,2),r=e[0],o=e[1],p=(0,a.UO)().movieId,f=(0,u.useState)([]),d=(0,t.Z)(f,2),l=d[0],v=d[1];return(0,u.useEffect)((function(){o(!0),(0,c.oO)(p).then((function(n){var e=n.results;return v(e)})).catch((function(n){console.log(n)})).finally(o(!1))}),[p]),l<1?(0,s.jsx)("div",{children:"Sorry, we don't have any reviews!"}):(0,s.jsxs)("div",{children:[r&&(0,s.jsx)(i.a,{}),l.map((function(n){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Author:"})," ",n.author]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Content:"})," ",n.content]}),(0,s.jsx)("hr",{})]},n.id)}))]})}},390:function(n,e,r){r.d(e,{Mc:function(){return o},OT:function(){return p},QY:function(){return s},oO:function(){return d},y:function(){return f}});var t=r(861),a=r(757),u=r.n(a),c=r(912),i="6761e5de3d20f3ac36b904d02ab8823a";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.f1d9f01b.chunk.js.map