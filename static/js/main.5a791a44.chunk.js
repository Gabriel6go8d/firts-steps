(this["webpackJsonpfirts-steps"]=this["webpackJsonpfirts-steps"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){e.exports=a(49)},40:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=(a(40),a(4)),s=a(54),i=a(55),m=a(16),u=a.n(m);var b=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg"},c.a.createElement(s.a.Brand,{onClick:function(){return e.action("home")},style:{cursor:"pointer"}},c.a.createElement("img",{src:u.a,className:"App-logo myLogo",alt:"logo"}),"Firts Steps"),c.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(i.a,{className:"mr-auto",activeKey:e.active},c.a.createElement(i.a.Link,{eventKey:1,onClick:function(){return e.action("home")}},"Calculator"),c.a.createElement(i.a.Link,{eventKey:2,onClick:function(){return e.action("about")}},"About This")))))};var d=function(){return c.a.createElement("div",{className:"container-fluid mt-5 footer",style:{backgroundColor:"#343A40"}},c.a.createElement("div",{className:"row justify-content-around text-center text-white"},c.a.createElement("div",{className:"col-3 mt-3 mb-3"},c.a.createElement("h3",null,"Firts Steps in React")),c.a.createElement("div",{className:"col-3 mt-2 mb-2"}),c.a.createElement("div",{className:"col-3 mt-2 mb-2"},c.a.createElement("p",null,"Author: Gabriel Gutierrez"),c.a.createElement("a",{href:"mailto:gabrie.ares93@gmail.com"},"Send me a Email"))))};var E=function(){return c.a.createElement("div",{className:"container text-white mt-5"},c.a.createElement("h4",null,"My First Project"),c.a.createElement("p",null,"Author: Gabriel Gutierrez"),c.a.createElement("p",null,"Email: ",c.a.createElement("a",{href:"mailto:gabrie.ares93@gmail.com"},"gabriel.ares93@gmail.com")),c.a.createElement("p",null,"Portafolio ",c.a.createElement("a",{href:"https://gabriel6go8d.github.io/curriculum-vitae/"},"https://gabriel6go8d.github.io/curriculum-vitae/")),c.a.createElement("p",null,"This Project Code: ",c.a.createElement("a",{href:"https://github.com/Gabriel6go8d/firts-steps"},"https://github.com/Gabriel6go8d/firts-steps")),c.a.createElement("p",{className:"mt-3"},"Used Tecnologies: "),c.a.createElement("p",null,"HTML5  CSS3  Javascript  React  Bootstarp"),c.a.createElement("p",{className:"mt-3"},"What I Learn?"),c.a.createElement("p",null,"In this little project I learned the basics of React, the Layout and Components, how to use Components dinamicaly, useStates and React Hooks. Also it worked as practice for Bootstrap, making the page responsive while displaying good stylish components. I learn how to create new Repositories in GitHub and how to deploy my projects on the gh-Pages, make the first commit ever and prepare the way for the future. "))};var f=function(e,t){var a=Object(n.useState)(e),c=Object(o.a)(a,2),l=c[0],r=c[1];return[l,function(){console.log(t),r((function(e){return e+t}))},function(){r((function(e){return e-t}))},function(){r(e)}]};var g=function(){var e=f(0,1),t=Object(o.a)(e,4),a=t[0],n=t[1],l=t[2],r=t[3];return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mt-5 text-center"},c.a.createElement("h3",{className:"text-white"},"Count: ",a),c.a.createElement("button",{className:"btn btn-danger col",onClick:r},"Reset"),c.a.createElement("button",{className:"btn btn-success col mt-2 mb-2",onClick:n},"Increment"),c.a.createElement("button",{className:"btn btn-primary col",onClick:l},"Decrement"))};a(20),a(26);var p=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],r=f(1e3,1e3),s=Object(o.a)(r,4),i=s[0],m=s[1],u=s[2],b=s[3],d=function(){l((function(e){return e+1}))};return Object(n.useEffect)((function(){var e=setInterval(d,i);return console.log("bad behavior"),function(){clearInterval(e)}}),[i]),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mt-5 text-center"},c.a.createElement("h3",{className:"text-white"},"Count ",i/1e3," Seconds"),c.a.createElement("h3",{className:"text-white"},"Actual Time: "),c.a.createElement("h3",{className:"text-white odometer"},a),c.a.createElement("button",{className:"btn btn-danger col",onClick:b},"Reset"),c.a.createElement("button",{className:"btn btn-success col mt-2 mb-2",onClick:m},"+1 seg"),c.a.createElement("button",{className:"btn btn-primary col",onClick:u},"-1 seg"))};var v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(1e3),s=Object(o.a)(r,2),i=s[0],m=s[1],u=f(i,i),b=Object(o.a)(u,4),d=b[0],E=b[1],g=b[3],p=function(){l((function(e){return e+1}))};return Object(n.useEffect)((function(){var e=setInterval(p,d);return console.log("bad behavior"),function(){clearInterval(e)}}),[d]),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mt-5 text-center"},c.a.createElement("h3",{className:"text-white"},"Count ",d/1e3," Seconds"),c.a.createElement("h3",{className:"text-white"},"Actual Time: "),c.a.createElement("h3",{className:"text-white odometer"},a),c.a.createElement("input",{type:"number",className:"col",onChange:function(e){m(1e3*parseInt(e.target.value))}}),c.a.createElement("button",{className:"btn btn-success col mt-2 mb-2",onClick:E},"Increment Timer Interval"),c.a.createElement("button",{className:"btn btn-primary col",onClick:g},"Set Timer Interval"))};var h=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],m=s[1];return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mt-5 text-center"},c.a.createElement("img",{src:u.a,className:"App-logo col",alt:"logo",style:{height:"100px"}}),c.a.createElement("h1",{className:"text-white odometer col"},i),c.a.createElement("button",{className:"btn btn-primary btn-lg col",onClick:function(){m(200*a),l((function(e){return e+1}))}},"click"))};var N=function(){return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-8"},c.a.createElement("div",{className:"row mt-5 justify-content-between"},c.a.createElement(g,null),c.a.createElement(p,null),c.a.createElement(v,null),c.a.createElement(h,null)))},k=a(53);var y=function(){function e(e){var t=0,a=0;try{t=e.split("(").length-1}catch(n){}try{a=e.split(")").length-1}catch(c){}return t-a}var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1],b=["+","*","/","%","^","-"],d=Object(n.useRef)(null),E=Object(n.useRef)(null),f=Object(n.useRef)(null),g=Object(n.useRef)(null),p=Object(n.useRef)(null),v=Object(n.useRef)(null),h=Object(n.useRef)(null),N=Object(n.useRef)(null),y=Object(n.useRef)(null);Object(n.useEffect)((function(){""===l?(E.current.disabled=!0,f.current.disabled=!0,g.current.disabled=!0,p.current.disabled=!0,v.current.disabled=!0,h.current.disabled=!0,N.current.disabled=!0):(E.current.disabled=!1,f.current.disabled=!1,g.current.disabled=!1,p.current.disabled=!1,v.current.disabled=!1,h.current.disabled=!1,N.current.disabled=!1);try{var e=l.split("+");e[e.length-1].includes(".")?d.current.disabled=!0:d.current.disabled=!1}catch(t){}["+","*","/","%","^","-","("].includes(l.slice(-1))||""===l?y.current.innerHTML="(":y.current.innerHTML=")"}),[l]);var j=function(t){var a=parseInt(t.target.id.split("-")[1]),n=0,c=!1,o=!1;if(a<11)10===a?n=".":(n=a,c=!0);else switch(12<a&&a<18&&l.length>1&&b.includes(l.slice(-1))&&(o=!0),a){case 11:if(")"===y.current.innerHTML){if(0===e(l))return void r("(".concat(l,")"));n=")"}else n="(";break;case 12:n="+";break;case 13:n="-";break;case 14:n="*";break;case 15:n="/";break;case 16:n="%";break;case 17:n="^";break;case 18:r(l.slice(0,-1));var s=e(l.slice(0,-1)),i="";i=b.includes(l.slice(-2).slice(0,1))?l.slice(0,-2):l.slice(0,-1);for(var m=0;m<s;m++)i="".concat(i,")");return void u(Object(k.a)(i));case 19:return r(""),void u("");default:console.log("error")}var d="".concat(l).concat(n);if(r(o?"".concat(l.slice(0,-1)).concat(n):d),c){for(var E=e(d),f=0;f<E;f++)d="".concat(d,")");u(Object(k.a)(d))}};return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3 mt-5"},c.a.createElement("div",{className:"calculator_text"},c.a.createElement("h1",{className:"calculator_result"},m),c.a.createElement("h4",{className:"calculator_count"},l)),c.a.createElement("div",{className:"row justify-content-between m-0 p-0"},c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-danger col-2",id:"bu-19",ref:N},"CE"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-16",ref:h},"%"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-17",ref:v},"^"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-danger col-2",id:"bu-18",ref:p},"DEL")),c.a.createElement("div",{className:"row justify-content-between m-0 p-0 mt-2"},c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-7"},"7"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-8"},"8"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-9"},"9"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-15",ref:g},"/")),c.a.createElement("div",{className:"row justify-content-between m-0 p-0 mt-2"},c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-4"},"4"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-5"},"5"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-6"},"6"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-14",ref:f},"*")),c.a.createElement("div",{className:"row justify-content-between m-0 p-0 mt-2"},c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-1"},"1"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-2"},"2"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-3"},"3"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-13"},"-")),c.a.createElement("div",{className:"row justify-content-between m-0 p-0 mt-2"},c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-10",ref:d},"."),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-0"},"0"),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-11",ref:y},"("),c.a.createElement("button",{onClick:j,className:"btn btn-lg btn-primary col-2",id:"bu-12",ref:E},"+")))};var j=function(){return c.a.createElement("div",{className:"row m-0 p-0 justify-content-around"},c.a.createElement(y,null),c.a.createElement(N,null))};var w=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(c.a.createElement(j,null)),s=Object(o.a)(r,2),i=s[0],m=s[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"allContent"},c.a.createElement(b,{action:function(e){document.getElementById("showArea").classList.add("showAreaHide"),setTimeout((function(){"home"===e?(m(c.a.createElement(j,null)),l(1)):"about"===e&&(m(c.a.createElement(E,null)),l(2)),document.getElementById("showArea").classList.remove("showAreaHide")}),400)},active:a}),c.a.createElement("div",{className:"showArea",id:"showArea"},i),c.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5a791a44.chunk.js.map