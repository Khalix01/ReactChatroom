(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{104:function(e,t){},107:function(e,t,a){},108:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(58),o=a.n(s),m=a(19),l=a(1),i=a(9),u=(a(69),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return function(e){a&&l||(e.preventDefault(),alert("Username or Room ID is blank"))}(e)},to:"/ReactChatroom/chat?name=".concat(a,"&room=").concat(l)},r.a.createElement("button",{className:"button",type:"submit"},"Sign In"))))}),f=a(63),E=a(60),p=a.n(E),d=a(61),g=a.n(d),v=(a(107),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},"close")))}),h=(a(108),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"say hi",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"send",onClick:function(e){return n(e)}},"Send"))}),N=a(62),b=a.n(N),j=a(20),C=a.n(j),O=(a(154),function(e){var t=e.message,a=t.user,n=t.text,c=!1,s=!1,o=e.name.trim().toLowerCase();return a===o&&(c=!0),"admin"===a&&(s=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},o),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},C.a.emojify(n)))):s?r.a.createElement("div",{className:"adminMessage"},r.a.createElement("p",{className:"adminText colorLight"},C.a.emojify(n))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorDark"},C.a.emojify(n)),r.a.createElement("p",{className:"sentText pr-10"},a)))}),x=(a(155),function(e){var t=e.messages,a=e.name;return r.a.createElement(b.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(O,{message:e,name:a}))})))}),y=(a(156),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],m=s[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),E=u[0],d=u[1],N=Object(c.useState)(""),b=Object(i.a)(N,2),j=b[0],C=b[1],O=Object(c.useState)([]),y=Object(i.a)(O,2),k=y[0],S=y[1],I="https://react-chatroom-server.herokuapp.com/";Object(c.useEffect)((function(){var e=p.a.parse(t.search),a=e.name,c=e.room;return n=g()(I),m(a),d(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[I,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){S([].concat(Object(f.a)(k),[e]))}))}),[k]);return console.log(j,k),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{room:E}),r.a.createElement(x,{messages:k,name:o}),r.a.createElement(h,{message:j,setMessage:C,sendMessage:function(e){e.preventDefault(),j&&(console.log("here"),n.emit("sendMessage",j,(function(){return C("")})))}})))}),k=(a(157),a(158),function(){return r.a.createElement(m.a,null,r.a.createElement(l.a,{path:"/ReactChatroom/",exact:!0,component:u}),r.a.createElement(l.a,{path:"/ReactChatroom/chat",component:y}))});o.a.render(r.a.createElement(k,null),document.querySelector("#root"))},64:function(e,t,a){e.exports=a(159)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ad223904.chunk.js.map