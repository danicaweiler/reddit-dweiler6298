(this["webpackJsonpreddit-webapp"]=this["webpackJsonpreddit-webapp"]||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),c=i(8),r=i.n(c),s=(i(13),i(14),i(0));var o=function(){return Object(s.jsx)("div",{})},d=i(3),l=i(4),u=i(2),h=i(6),b=i(5),j=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var n;return Object(d.a)(this,i),(n=e.call(this,t)).state={items:[]},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.favourite=n.favourite.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"handleSubmit",value:function(){var t=document.getElementById("sub").value;this.doSubmit(t)}},{key:"doSubmit",value:function(t){var e,i=this;void 0===(e=void 0===t||""===t?localStorage.getItem("search"):t)||null===e||"undefined"===e||"null"===e||fetch("https://www.reddit.com/r/"+e+"/hot.json?limit=10").then((function(t){return t.json()})).then((function(t){i.setState({isLoaded:!0,items:t.data.children}),localStorage.setItem("search",e)})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.SubReddit(),this.doSubmit()}},{key:"SubReddit",value:function(){this.setState({isLoaded:!0})}},{key:"favourite",value:function(t){var e=JSON.parse(localStorage.getItem("favourites"));if(null!=e)e.push(t);else{var i=0;null!==e&&(i=e.indexOf(t)),-1!==i&&(e=[t])}localStorage.setItem("favourites",JSON.stringify(e)),window.location.reload()}},{key:"render",value:function(){var t=this,e=this.state,i=e.error,n=e.isLoaded,a=e.items;return i?Object(s.jsxs)("div",{children:["Error: ",i.message]}):n?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsxs)("label",{htmlFor:"id",children:[" Subreddit:",Object(s.jsx)("input",{id:"sub",name:"sub",type:"text",className:"form-control"}),Object(s.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:this.handleSubmit,children:" Get "})]})})}),Object(s.jsx)("h1",{children:"Sub-Reddits"}),Object(s.jsx)("ul",{id:"sublist",children:a.map((function(e){return Object(s.jsxs)("li",{id:e.data.id,children:[Object(s.jsxs)("a",{id:e.data.id+"title",className:"title",href:e.data.url,children:[" ",e.data.title," "]}),Object(s.jsxs)("div",{id:e.data.id+"author",className:"author",children:[" ",e.data.author," "]}),Object(s.jsxs)("div",{id:e.data.id+"content",className:"content",children:[" ",e.data.self_text," "]}),Object(s.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return t.favourite(e.data.id)},children:" Favourite "})]},e.data.id)}))})]}):Object(s.jsx)("div",{children:"Loading..."})}}]),i}(a.a.Component),v=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var n;return Object(d.a)(this,i),(n=e.call(this,t)).remove=n.remove.bind(Object(u.a)(n)),n.state={items:[]},n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=JSON.parse(localStorage.getItem("favourites"));null!=e&&e.forEach((function(e){fetch("https://www.reddit.com/comments/"+e+".json").then((function(t){return t.json()})).then((function(e){var i=t.state.items;i.push(e[0].data),t.setState({isLoaded:!0,items:i})})).catch((function(t){console.log(t)}))}))}},{key:"Favourites",value:function(){}},{key:"render",value:function(){var t=this.state.items;return null!=t&&t.length>0?this.WithFavourites(t):this.NoFavourites()}},{key:"NoFavourites",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Favourites"}),Object(s.jsx)("p",{children:"None"})]},"emptyFav")}},{key:"WithFavourites",value:function(t){var e=this,i=this.state.items;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Favourites"}),Object(s.jsx)("ul",{children:i.map((function(t){return Object(s.jsxs)("li",{id:t.children[0].data.id,children:[Object(s.jsxs)("a",{id:t.children[0].data.id+"Ftitle",className:"title",href:t.children[0].data.url,children:[" ",t.children[0].data.title," "]}),Object(s.jsxs)("div",{id:t.children[0].data.id+"Fauthor",className:"author",children:[" ",t.children[0].data.author," "]}),Object(s.jsxs)("div",{id:t.children[0].data.id+"Fcontent",className:"content",children:[" ",t.children[0].data.self_text," "]}),Object(s.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.remove(t.children[0].data.id)},children:" Remove "})]},t.children[0].data.id)}))},"favs")]},"hasFavs")}},{key:"remove",value:function(t){console.log("Remove: "+t);var e=JSON.parse(localStorage.getItem("favourites"));if(null!=e){var i=e.indexOf(t);i>-1&&e.splice(i,1),localStorage.setItem("favourites",JSON.stringify(e)),window.location.reload()}}}]),i}(a.a.Component),m=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;i(t),n(t),a(t),c(t),r(t)}))};r.a.render(Object(s.jsxs)(a.a.StrictMode,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(j,{}),Object(s.jsx)(v,{})]}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.f765692a.chunk.js.map