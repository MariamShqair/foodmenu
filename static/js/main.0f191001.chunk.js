(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/burger.fd01b5c4.jpg"},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=(a(15),a(7)),u=a(3),m=a(4),o=a(6),s=a(5),d=a(8),h=(a(17),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={quant:{},dishes:[{id:.6537933286474382,name:"checken burger",price:22},{id:.6537938286474382,name:"frid potato",price:2}],orders:[],totalPrice:0},a.AddDish=function(e){e.preventDefault();var t={};t.id=Math.random(),t.name=e.target.name.value,t.price=+e.target.price.value;var n=a.state.dishes;n.push(t),a.setState({dishes:n})},a.AddOrder=function(e){for(var t=a.state.orders,n=!1,r=0;r<t.length;r++)t[r].name===e.name&&(n=!0);n||t.push(Object(i.a)({},e,{quant:1})),a.setState({orders:t})},a.addQuantity=function(e,t){e.preventDefault();var n=a.state,r=n.orders,l=n.dishes;if(""!==e.target.quant.value)for(var c=0;c<l.length;c++)l[c].name===t.name&&(r[r.indexOf(t)].price=l[c].price*+e.target.quant.value,r[r.indexOf(t)].quant=+e.target.quant.value);a.setState({orders:r})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.totalPrice;return n=t.orders.map(function(e){return e.price}).reduce(function(e,t){return e+t},0),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",null,"HOME")),r.a.createElement("li",null,r.a.createElement("a",null,"ORDER PAGE")),r.a.createElement("li",null,r.a.createElement("a",null,"LOGIN"))),r.a.createElement("h1",null,"Welcome to chello restaurant")),r.a.createElement("div",{className:"addDish"},r.a.createElement("h1",null,"Add Dish"),r.a.createElement("form",{className:"form",onSubmit:this.AddDish},r.a.createElement("input",{name:"name",type:"text",placeholder:"name"}),r.a.createElement("input",{name:"price",type:"text",placeholder:"price"}),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement("div",{className:"orderMenuPrice"},r.a.createElement("div",{className:"Menu"},r.a.createElement("h1",null,"Menu "),this.state.dishes.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("h3",null,t.name),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a(20)})),r.a.createElement("button",{onClick:function(){return e.AddOrder(t)}},"Add to order"))})),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Orders List"),this.state.orders.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("h3",null,t.name),r.a.createElement("form",{onSubmit:function(a){return e.addQuantity(a,t)}},r.a.createElement("input",{name:"quant",type:"text",placeholder:"quantity"}),r.a.createElement("button",{type:"submit"},"Submit")))})),r.a.createElement("div",{className:"totalPrice"},r.a.createElement("h1",null,"Total Price"),this.state.orders.map(function(e,t){return r.a.createElement("div",{className:"order",key:t},r.a.createElement("h3",null,"Name : ",e.name),r.a.createElement("h3",null,"Quantity : ",e.quant),r.a.createElement("h3",null,"Price : ",e.price))}),r.a.createElement("h3",null,n))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.0f191001.chunk.js.map