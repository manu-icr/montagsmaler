(this.webpackJsonpdoodle=this.webpackJsonpdoodle||[]).push([[0],{11:function(e,t){e.exports={timer:20,round:10}},112:function(e,t,n){e.exports=n(205)},117:function(e,t,n){},122:function(e,t){},124:function(e,t){},14:function(e){e.exports=JSON.parse('{"welcome":["Welcome to Montagsmaler","This mini game was created as a part of the EPFL course and is derived from Google\'s Quick Draw or a casual paper game. \'Montagsmaler\' is German and stands for something like \'monday painter\'. The casual paper game is turn based but with the technological advances of today, we can play it alone, without friends. Wow!"],"gameIntroduction":"You are presented with a question\\nand have a limited amount of time\\nto draw said object. Good luck!","draw":"Draw [formatedQuestion] as fast as possible.","scoreGood":"You gained [points] points.\\nYou can be proud of yourself!","scoreBad":"You only gained [points]...\\nYou should try a bit harder next time","scoreWorst":"Did you actually try to play the game?\\nI\'m very disappointed :(","scoreBest":"Wow, you reached the maximal score.\\nThat\'s amazing! Since you cant get any better\\nyou should head back to work or go outside and play."}')},155:function(e,t){},156:function(e,t){},200:function(e,t,n){},204:function(e){e.exports=JSON.parse('["bird","book","car","cat","chair","flower","plane","sheep","ship","strawberry"]')},205:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(107),c=n.n(o);n(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(62),u=n(19),s=n(40),l=n(41),m=n(44),d=n(43),f=n(45),p=n(108),v=n.n(p),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.strings,n=e.typeSpeed,a={strings:t,typeSpeed:void 0===n?50:n,backSpeed:50,showCursor:!0,onComplete:function(e){e.cursor.style.display="none"}};this.typed=new v.a(this.el,a)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"type-wrap textBlock"},r.a.createElement("span",{ref:function(t){e.el=t}}))}}]),t}(r.a.Component),b=n(14);var E=function(){return r.a.createElement(h,{strings:b.welcome})},g=n(12),w=n(31),y=n(63),O=n.n(y),j=n(109);function k(e,t){var n,a=(n=e.current,w.b(n).resizeNearestNeighbor([28,28]).mean(2).expandDims(2).expandDims().toFloat().div(255));return t.then((function(e){return e.predict(a).data()})).then(function(){var e=Object(j.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a(t).data();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function x(e){for(var t=new Array(e),n=0;n<e;n+=1)t[n]=n;return t=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(t)}var C=r.a.forwardRef((function(e,t){var n,o,c=!1;return Object(a.useEffect)((function(){var e=t.current,n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,e.height,e.width)})),r.a.createElement("div",{className:"canvasContainer"},r.a.createElement("canvas",{height:"300px",width:"300px",ref:t,onMouseDown:function(){return c=!0},onMouseUp:function(){c=!1,n=void 0,o=void 0,k(t,e.model).then((function(t){var n=e.labels[t[0]];e.win(n)}))},onMouseMove:function(e){return function(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left,r=e.clientY-t.top;if(c){var i=function(e,t,n,a,r){var o=e.getContext("2d");return o.strokeStyle="#000000",o.lineWidth=12,o.lineJoin="round",o.beginPath(),o.moveTo(a,r),o.lineTo(t,n),o.closePath(),o.stroke(),[t,n]}(e.target,a,r,n,o),u=Object(g.a)(i,2);n=u[0],o=u[1]}}(e)}}),r.a.createElement("button",{className:"clearCanvas",onClick:function(e){var n=t.current;n.getContext("2d").fillRect(0,0,n.height,n.width)}},"Clear the canvas."))})),N=r.a.createContext(null),S=n(11),G=n.n(S);var I=function(e){return r.a.createElement(N.Consumer,null,(function(t){var n,a=t.points,o=t.round;return o>0&&r.a.createElement("div",{className:"gameText"},r.a.createElement("p",null,"Round ",o," of ",G.a.round),r.a.createElement("p",null,"Points: ",a),r.a.createElement("p",null,[b.draw.replace("[formatedQuestion]",(n=e.question,(n.match("^[aieouAIEOU].*")?"an ":"a ")+e.question.toUpperCase()))]))}))};function R(e,t){var n=Object(a.useState)(e),r=Object(g.a)(n,2),o=r[0],c=r[1],i=Object(a.useState)(!1),u=Object(g.a)(i,2),s=u[0],l=u[1];return Object(a.useEffect)((function(){var n=null;return s?n=setInterval((function(){o<1?(l(!1),t()):c(o<=0?e:o-1)}),1e3):s||0===o||clearInterval(n),function(){return clearInterval(n)}}),[s,o]),{count:o,setCount:c,isActive:s,setIsActive:l}}var M=function(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"add":return{count:e.count+parseInt(t.value)};case"reset":return{count:0};default:return e}},A=r.a.forwardRef((function(e,t){var n=R(e.max,e.timeUp);return r.a.useImperativeHandle(t,(function(){return{start:function(){n.setCount(e.max),n.setIsActive(!0)},stop:function(){n.setIsActive(!1)},toggle:function(){n.setIsActive(!n.isActive)},getRemaining:function(){return n.count}}})),n.isActive?r.a.createElement("div",null,"Time left: "+n.count.toString().padStart(e.max.toString().length,"0")):r.a.createElement("div",null)})),B=n(42),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={startGame:e.startGame,show:!0},n.relay=n.relay.bind(Object(B.a)(n)),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"relay",value:function(){this.setState({show:!1}),this.state.startGame()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.show&&r.a.createElement("div",null,r.a.createElement("div",{className:"top"},r.a.createElement(h,{strings:[b.gameIntroduction]})),r.a.createElement("div",{className:"bottom"},r.a.createElement("button",{className:"startGameButton",onClick:this.relay},"Start Game"))))}}]),t}(r.a.Component),U=(n(200),r.a.createRef());var D=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"left"},r.a.createElement(C,{ref:U,model:e.model,labels:e.labels,win:e.win})),r.a.createElement("div",{className:"right"},r.a.createElement(I,{question:e.question}),r.a.createElement(A,{max:G.a.timer,ref:e.timer,timeUp:e.timeUp}),r.a.createElement(W,{startGame:e.startGame}))))};var T=function(e){var t=Object(u.f)();return r.a.createElement("button",{className:e.className,type:"button",onClick:function(){return t.push("/"+e.goto)}},e.title)};var q=function(e){return r.a.createElement("div",null,r.a.createElement(N.Consumer,null,(function(e){var t=e.points,n=e.round;return t===-3*G.a.round&&r.a.createElement(h,{strings:[b.scoreWorst.replace("[points]",t)]})||t>-3*G.a.round&&t<0&&r.a.createElement(h,{strings:[b.scoreBad.replace("[points]",t)]})||t>0&&t<n*G.a.timer&&r.a.createElement(h,{strings:[b.scoreGood.replace("[points]",t)]})||t===n*G.a.timer&&r.a.createElement(h,{strings:[b.scoreBest]})})),r.a.createElement(T,{title:"Home",goto:""}),r.a.createElement("button",{className:"newGame",onClick:function(){return e.reset()}},"New Game"))},P=w.c("./model/model.json"),Y=n(204),J=r.a.createRef();var Q=function(){var e=Object(a.useReducer)(M,{count:0}),t=Object(g.a)(e,2),n=t[0],o=t[1],c=Object(a.useReducer)(M,{count:0}),i=Object(g.a)(c,2),u=i[0],s=i[1],l=Object(a.useState)({round:0,points:0}),m=Object(g.a)(l,2),d=m[0],f=m[1],p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Object(a.useMemo)((function(){return x(t)}),[t]),r=Object(a.useState)(null),o=Object(g.a)(r,2),c=o[0],i=o[1],u=Object(a.useState)(0),s=Object(g.a)(u,2),l=s[0],m=s[1];return Object(a.useEffect)((function(){i(e[n[l]])}),[l,e,n]),[c,function(){m(l===t?0:l+1)}]}(Y),v=Object(g.a)(p,2),h=v[0],b=v[1];function E(){s({type:"increment"}),u.count>=G.a.round||J.current.start()}return Object(a.useEffect)((function(){f({round:u.count,points:n.count})}),[n,u]),u.count<=G.a.round?r.a.createElement("div",null,r.a.createElement(N.Provider,{value:d},r.a.createElement(D,{model:P,labels:Y,timer:J,timeUp:function(){o({type:"add",value:-3}),b(),E()},win:function(e){u.count>0&&e===h&&(o({type:"add",value:J.current.getRemaining()}),b(),E())},question:h,startGame:E}))):r.a.createElement("div",null,r.a.createElement(N.Provider,{value:d},r.a.createElement(q,{reset:function(){o({type:"reset"}),s({type:"reset"}),f({round:0,points:0}),b()}})))};var z=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(E,null),r.a.createElement(T,{className:"newGame",title:"Start",goto:"game"})),r.a.createElement(u.a,{path:"/game"},r.a.createElement(Q,null)))))};c.a.render(r.a.createElement("div",null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.1f5a0e0f.chunk.js.map