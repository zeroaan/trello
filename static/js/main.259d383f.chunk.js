(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{80:function(n,t,e){},81:function(n,t,e){"use strict";e.r(t);var r=e(2),o=e(0),a=e(22),i=e.n(a),c=e(9),d=e(20),b=e(54),s=e(6),u=e(8),l="CHANGE_BOARD_NAME",p="ADD_BOARD",x="STAR_BOARD",j="DELETE_BOARD",f="CHANGE_LIST_TITLE",O="ADD_LIST",h="COPY_LIST",g="DELETE_LIST",v="SORT_LIST",m="ADD_CARD",I="EDIT_CARD",k="DELETE_CARD",w={boardId:2,listId:6,cardId:18,starCount:1,boards:[{id:0,star:!0,boardName:"first board",lists:[{id:"list-".concat(0),title:"To do",cards:[{id:"card-".concat(0),text:"doing"},{id:"card-".concat(1),text:"test a game"},{id:"card-".concat(2),text:"post"},{id:"card-".concat(3),text:"hello"}]},{id:"list-".concat(1),title:"Doing",cards:[{id:"card-".concat(4),text:"go to school"},{id:"card-".concat(5),text:"watch"}]},{id:"list-".concat(2),title:"Complete",cards:[{id:"card-".concat(6),text:"pratice"},{id:"card-".concat(7),text:"finish"},{id:"card-".concat(8),text:"complete"}]}]},{id:1,star:!1,boardName:"second board",lists:[{id:"list-".concat(3),title:"To do",cards:[{id:"card-".concat(9),text:"wow"},{id:"card-".concat(10),text:"my second board"},{id:"card-".concat(11),text:"front"}]},{id:"list-".concat(4),title:"Doing",cards:[{id:"card-".concat(12),text:"buy coffee"},{id:"card-".concat(13),text:"movie"},{id:"card-".concat(14),text:"go to park"},{id:"card-".concat(15),text:"learn math"}]},{id:"list-".concat(5),title:"Complete",cards:[{id:"card-".concat(16),text:"go to the gym"},{id:"card-".concat(17),text:"computer"}]}]}]},C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:for(var e=Object(u.a)(n.boards),r=0;r<e.length;){if(e[r].id===t.boardId){e[r].boardName=t.newBoardName;break}r+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(e)});case p:var o=[].concat(Object(u.a)(n.boards),[{id:n.boardId,star:!1,boardName:t.newBoardName,lists:[{id:"list-".concat(n.listId),title:"To do",cards:[]},{id:"list-".concat(n.listId+1),title:"Doing",cards:[]},{id:"list-".concat(n.listId+2),title:"Complete",cards:[]}]}]);return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(o),boardId:n.boardId+1,listId:n.listId+3});case x:for(var a=Object(u.a)(n.boards),i=0,c=0;c<a.length;)a[c].id===t.boardId&&(a[c].star=!a[c].star),!0===a[c].star&&(i+=1),c+=1;return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(a),starCount:i});case j:for(var d=Object(u.a)(n.boards),b=n.starCount,C=0;C<d.length;)d[C].id===t.boardId&&(!0===d[C].star&&(b-=1),d.splice(C,1)),C+=1;return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(d),starCount:b});case f:for(var y=Object(u.a)(n.boards),S=0;S<y.length;){if(y[S].id===t.boardId){y[S].lists[t.index].title=t.newTitle;break}S+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(y)});case O:for(var z=Object(u.a)(n.boards),E=0;E<z.length;){if(z[E].id===t.boardId){z[E].lists=[].concat(Object(u.a)(z[E].lists),[{id:"list-".concat(n.listId),title:t.title,cards:[]}]);break}E+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(z),listId:n.listId+1});case h:for(var N=Object(u.a)(n.boards),D=n.cardId,L=0;L<N.length;){if(N[L].id===t.boardId){var T=Object(u.a)(N[L].lists[t.index].cards);D+=T.length;for(var _=0;_<T.length;)T[_]=Object(s.a)(Object(s.a)({},T[_]),{},{id:"card-".concat(n.cardId+_)}),_+=1;N[L].lists.splice(t.index+1,0,{id:"list-".concat(n.listId),title:t.title,cards:Object(u.a)(T)});break}L+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(N),listId:n.listId+1,cardId:D});case g:for(var B=Object(u.a)(n.boards),A=0;A<B.length;){if(B[A].id===t.boardId){B[A].lists.splice(t.index,1);break}A+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(B)});case v:for(var R=Object(u.a)(n.boards),F=0;F<R.length;){if(R[F].id===t.boardId){if(t.droppableIdStart===t.droppableIdEnd){var J=R[F].lists.find((function(n){return t.droppableIdStart===n.id}));if(J){var H,P=J.cards.splice(t.droppableIndexStart,1);(H=J.cards).splice.apply(H,[t.droppableIndexEnd,0].concat(Object(u.a)(P)))}}if(t.droppableIdStart!==t.droppableIdEnd){var X=R[F].lists.find((function(n){return t.droppableIdStart===n.id})),M=R[F].lists.find((function(n){return t.droppableIdEnd===n.id}));if(X&&M){var G,U=X.cards.splice(t.droppableIndexStart,1);(G=M.cards).splice.apply(G,[t.droppableIndexEnd,0].concat(Object(u.a)(U)))}}break}F+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(R)});case m:for(var V=Object(u.a)(n.boards),Y=0;Y<V.length;){if(V[Y].id===t.boardId){V[Y].lists[t.index].cards=[].concat(Object(u.a)(V[Y].lists[t.index].cards),[{id:"card-".concat(n.cardId),text:t.card}]);break}Y+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(V),cardId:n.cardId+1});case I:for(var q=Object(u.a)(n.boards),K=0;K<q.length;){if(q[K].id===t.boardId){q[K].lists[t.listIndex].cards[t.index].text=t.newCard;break}K+=1}return Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(q)});case k:for(var Q=Object(u.a)(n.boards),W=0;W<Q.length;){if(Q[W].id===t.boardId){Q[W].lists[t.listIndex].cards.splice(t.index,1);break}W+=1}return console.log(Q),Object(s.a)(Object(s.a)({},n),{},{boards:Object(u.a)(Q)});default:return n}},y=Object(d.c)({trello:C}),S=Object(d.a)(b.a)(d.e)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),z=e(28),E=e(10),N=e(3),D=e(4),L=e(11),T=e(100),_=e(23),B=e.n(_);function A(){var n=Object(N.a)(["\n  position: relative;\n  top: -50px;\n  left: 180px;\n  cursor: pointer;\n  color: rgb(108, 120, 141);\n  font-size: 28px;\n"]);return A=function(){return n},n}function R(){var n=Object(N.a)(["\n  position: relative;\n  top: 60px;\n  left: 115px;\n  outline: none;\n  border: none;\n  z-index: 1200;\n  border-radius: 5px;\n  background-color: rgb(90, 172, 68);\n  margin-top: 10px;\n  color: white;\n  padding: 8px 16px;\n  font-size: 15px;\n  cursor: pointer;\n"]);return R=function(){return n},n}function F(){var n=Object(N.a)(["\n  position: relative;\n  top: 50px;\n  left: 40px;\n  font-size: 15px;\n  outline: none;\n  border: 2px solid rgb(0, 121, 191);\n  border-radius: 5px;\n  width: 256px;\n  height: 17px;\n  padding: 10px 10px;\n  resize: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return F=function(){return n},n}function J(){var n=Object(N.a)(["\n  position: relative;\n  top: 25px;\n  left: 43px;\n"]);return J=function(){return n},n}function H(){var n=Object(N.a)(["\n  background-color: rgb(235, 236, 240);\n  width: 370px;\n  height: 200px;\n  margin: auto;\n  position: relative;\n  top: 230px;\n"]);return H=function(){return n},n}function P(){var n=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1100;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return P=function(){return n},n}var X=D.a.div(P()),M=Object(D.a)(T.a)(H()),G=D.a.h3(J()),U=D.a.input(F()),V=D.a.button(R()),Y=Object(D.a)(B.a)(A()),q=function(n){var t=n.setCreateBoard,e=Object(E.f)(),a=Object(c.c)(),i=Object(c.d)((function(n){return n.trello})).boardId,d=Object(o.useState)(""),b=Object(L.a)(d,2),s=b[0],u=b[1],l=function(){t(!1)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(X,{children:Object(r.jsxs)(M,{children:[Object(r.jsx)(G,{children:"New Board"}),Object(r.jsx)(U,{placeholder:"Input Board Name ...",value:s,onChange:function(n){var t=n.target.value;u(t)},maxLength:15,autoFocus:!0}),Object(r.jsx)(V,{onClick:function(){""!==s&&(l(),a({type:p,newBoardName:s}),e.push("/board/".concat(i)))},children:"Create a Board"}),Object(r.jsx)(Y,{onClick:l})]})})})},K=e(40),Q=e(106),W=e(109),Z=e(103),$=e(104),nn=e(105),tn=e(58),en=e.n(tn),rn=e(59),on=e.n(rn),an=e(102),cn=Object(an.a)({appbar:{backgroundColor:"rgba(0, 0, 0, 0.1)",boxShadow:"none"},toolbar:{display:"flex",justifyContent:"space-between",minHeight:"48px"},flexbox:{display:"flex"},homeLink:{textDecoration:"none",padding:"5px"},homeiconbutton:{width:"30px",height:"30px",color:"white","&:hover":{background:"none"}},homebutton:{backgroundColor:"rgba(154,160,163, 0.9)",height:"35px",textTransform:"none",color:"white","&:hover":{backgroundColor:"rgba(140,147,150, 0.9)"}},typography:{fontFamily:'"Jua", sans-serif',position:"relative",right:"20px",userSelect:"none"},addiconbutton:{margin:"0px 15px",backgroundColor:"rgba(154,160,163, 0.9)",width:"35px",height:"35px",borderRadius:"5px","&:hover":{backgroundColor:"rgba(140,147,150, 0.9)"}},avatar:{backgroundColor:"rgb(223,225,230)",color:"black",width:"35px",height:"35px",cursor:"pointer"}}),dn=function(){var n=cn(),t=Object(o.useState)(!1),e=Object(L.a)(t,2),a=e[0],i=e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Z.a,{className:n.appbar,children:Object(r.jsxs)($.a,{className:n.toolbar,children:[Object(r.jsxs)("div",{className:n.flexbox,children:[Object(r.jsx)(z.b,{to:"/",className:n.homeLink,children:Object(r.jsx)(nn.a,{className:n.homeiconbutton,children:Object(r.jsx)(en.a,{})})}),Object(r.jsx)(z.b,{to:"/",className:n.homeLink,children:Object(r.jsx)(Q.a,{className:n.homebutton,children:"Boards"})})]}),Object(r.jsx)(K.a,{className:n.typography,variant:"h6",children:"Trello"}),Object(r.jsxs)("div",{className:n.flexbox,children:[Object(r.jsx)(nn.a,{className:n.addiconbutton,color:"inherit",onClick:function(){i(!0)},children:Object(r.jsx)(on.a,{})}),Object(r.jsx)(W.a,{className:n.avatar,children:"A"})]}),a?Object(r.jsx)(q,{setCreateBoard:i}):null]})})})};function bn(){var n=Object(N.a)(["\n  position: relative;\n  left: -7px;\n  height: 80px;\n  text-decoration: none;\n  color: black;\n  font-size: 17px;\n  margin: 6px 8px;\n  &:hover {\n    color: black;\n  }\n"]);return bn=function(){return n},n}function sn(){var n=Object(N.a)(["\n  border-radius: 3px;\n  background-color: white;\n  min-width: 145px;\n  max-width: 145px;\n  min-height: 80px;\n  max-height: 80px;\n  padding: 15px;\n  transition: all 0.3s ease;\n  &:hover {\n    backgroundcolor: rgb(231, 233, 237);\n  }\n"]);return sn=function(){return n},n}function un(){var n=Object(N.a)(["\n  margin-top: 10px;\n  width: 730px;\n  height: 150px;\n  display: flex;\n  flex-flow: nowrap;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    height: 11px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: rgb(191, 196, 206);\n    border-radius: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: rgb(218, 219, 226);\n    border-radius: 10px;\n  }\n"]);return un=function(){return n},n}var ln=D.a.div(un()),pn=D.a.div(sn()),xn=Object(D.a)(z.b)(bn()),jn=function(n){var t=n.star,e=Object(c.d)((function(n){return n.trello})).boards;return t?Object(r.jsx)(ln,{children:e.map((function(n,t){return!0===n.star?Object(r.jsx)(xn,{to:"/board/".concat(n.id),children:Object(r.jsx)(pn,{children:n.boardName})},t):null}))}):Object(r.jsx)(ln,{children:e.map((function(n,t){return Object(r.jsx)(xn,{to:"/board/".concat(n.id),children:Object(r.jsx)(pn,{children:n.boardName})},t)}))})};function fn(){var n=Object(N.a)(["\n  margin: 20px;\n"]);return fn=function(){return n},n}function On(){var n=Object(N.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return On=function(){return n},n}var hn=D.a.div(On()),gn=D.a.div(fn()),vn=function(){var n=Object(c.d)((function(n){return n.trello})).starCount;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dn,{}),Object(r.jsxs)(hn,{children:[Object(r.jsxs)(gn,{children:[Object(r.jsx)("h3",{children:"My Boards"}),Object(r.jsx)(jn,{})]}),0===n?null:Object(r.jsxs)(gn,{children:[Object(r.jsx)("h3",{children:"Starred Boards"}),Object(r.jsx)(jn,{star:!0})]})]})]})},mn=e(30),In=e(62),kn=e(60),wn=e.n(kn);function Cn(){var n=Object(N.a)(["\n  position: absolute;\n  top: 80px;\n  left: 85px;\n  outline: none;\n  border: none;\n  z-index: 1200;\n  border-radius: 5px;\n  background-color: rgb(250, 60, 84);\n  margin-top: 10px;\n  color: white;\n  padding: 8px 15px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return Cn=function(){return n},n}function yn(){var n=Object(N.a)(["\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  outline: none;\n  border: none;\n  z-index: 1200;\n  border-radius: 5px;\n  background-color: rgb(90, 172, 68);\n  margin-top: 10px;\n  color: white;\n  padding: 8px 21px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(N.a)(["\n  position: absolute;\n  top: 93px;\n  left: 245px;\n  cursor: pointer;\n  color: black;\n  font-size: 25px;\n  z-index: 1200;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(N.a)(["\n  position: absolute;\n  top: -12px;\n  left: 0;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  width: 252px;\n  height: 60px;\n  padding: 12px 12px;\n  margin-top: 12px;\n  resize: none;\n  z-index: 1200;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return zn=function(){return n},n}function En(){var n=Object(N.a)(["\n  height: 82px;\n"]);return En=function(){return n},n}function Nn(){var n=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1100;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return Nn=function(){return n},n}function Dn(){var n=Object(N.a)(["\n  color: rgb(131, 140, 145);\n  display: none;\n  padding: 10px;\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  font-size: 16px;\n  border-radius: 5px;\n  &:hover {\n    color: black;\n    background-color: rgb(235, 236, 240);\n  }\n"]);return Dn=function(){return n},n}function Ln(){var n=Object(N.a)(["\n  max-width: 250px;\n  word-break: break-word;\n"]);return Ln=function(){return n},n}function Tn(){var n=Object(N.a)(["\n  min-height: 22px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  cursor: pointer;\n  &:hover {\n    backgroundcolor: rgb(244, 245, 247);\n  }\n  &.dragging {\n    opacity: 0.4;\n  }\n  &:hover svg {\n    display: block;\n  }\n"]);return Tn=function(){return n},n}var _n=Object(D.a)(In.a)(Tn()),Bn=D.a.p(Ln()),An=Object(D.a)(wn.a)(Dn()),Rn=D.a.div(Nn()),Fn=D.a.div(En()),Jn=D.a.textarea(zn()),Hn=Object(D.a)(B.a)(Sn()),Pn=D.a.button(yn()),Xn=D.a.button(Cn()),Mn=function(n){var t=n.edit,e=n.setCardEditBox,a=n.list,i=n.index,d=n.listIndex,b=n.boardId,s=Object(c.c)(),u=Object(o.useState)(a),l=Object(L.a)(u,2),p=l[0],x=l[1];Object(o.useEffect)((function(){x(a)}),[a]);var j=function(){e(!0)},f=function(){e(!1)},O=function(n){var t=n.target.value;x(t)},h=function(){""!==p&&s(function(n,t,e,r){return{type:I,newCard:n,index:t,listIndex:e,boardId:r}}(p,i,d,b)),f()},g=function(){s(function(n,t,e){return{type:k,index:n,listIndex:t,boardId:e}}(i,d,b)),f()};return t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Rn,{onClick:f}),Object(r.jsx)(Fn,{}),Object(r.jsx)(Jn,{placeholder:"Input card ...",value:p,onChange:O,autoFocus:!0}),Object(r.jsx)(Hn,{onClick:f}),Object(r.jsx)(Pn,{onClick:h,children:"Save"}),Object(r.jsx)(Xn,{onClick:g,children:"Delete"})]}):Object(r.jsxs)(_n,{children:[Object(r.jsx)(Bn,{children:a}),Object(r.jsx)(An,{onClick:j})]})};function Gn(){var n=Object(N.a)(["\n  margin-bottom: 8px;\n"]);return Gn=function(){return n},n}var Un=D.a.div(Gn()),Vn=function(n){var t=n.list,e=n.cardId,a=n.index,i=n.listIndex,c=n.boardId,d=Object(o.useState)(!1),b=Object(L.a)(d,2),u=b[0],l=b[1];return Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsx)(mn.b,{draggableId:String(e),index:a,children:function(n){return Object(r.jsx)(Un,Object(s.a)(Object(s.a)(Object(s.a)({},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:Object(r.jsx)(Mn,{list:t,setCardEditBox:l,index:a,listIndex:i,boardId:c})}))}},String(e)),u?Object(r.jsx)(Mn,{edit:!0,list:t,setCardEditBox:l,index:a,listIndex:i,boardId:c}):null]})},Yn=e(107);function qn(){var n=Object(N.a)(["\n  margin: 13px 10px 0px 13px;\n  padding: 2px 11px;\n  font-size: 18px;\n  outline: none;\n  border: 2px solid rgb(0, 121, 191);\n  border-radius: 5px;\n  width: 210px;\n  height: 25px;\n"]);return qn=function(){return n},n}function Kn(){var n=Object(N.a)(["\n  margin: 13px 10px 0px 10px;\n  font-size: 18px;\n  width: 205px;\n  height: 1px;\n  cursor: pointer;\n"]);return Kn=function(){return n},n}var Qn=Object(D.a)(Yn.a)(Kn()),Wn=D.a.input(qn()),Zn=function(n){var t=n.title,e=n.index,a=n.boardId,i=Object(c.c)(),d=Object(o.useState)(!1),b=Object(L.a)(d,2),s=b[0],u=b[1],l=Object(o.useState)(t),p=Object(L.a)(l,2),x=p[0],j=p[1];Object(o.useEffect)((function(){j(t)}),[t]);var O=function(){u(!0)},h=function(n){n.preventDefault(),v()},g=function(n){var t=n.target.value;j(t)},v=function(){""!==x&&i(function(n,t,e){return{type:f,newTitle:n,index:t,boardId:e}}(x,e,a)),u(!1)};return s?Object(r.jsx)("form",{onSubmit:h,children:Object(r.jsx)(Wn,{value:x,onChange:g,onBlur:v,maxLength:15,autoFocus:!0})}):Object(r.jsx)(Qn,{title:t,disableTypography:!0,onClick:O})};function $n(){var n=Object(N.a)(["\n  position: relative;\n  top: 10px;\n  width: 170px;\n  margin: auto;\n  border: 1px solid rgb(218, 219, 226);\n  background-color: rgb(218, 219, 226);\n"]);return $n=function(){return n},n}function nt(){var n=Object(N.a)(["\n  position: absolute;\n  top: 12px;\n  right: 9px;\n  font-size: 17px;\n  cursor: pointer;\n"]);return nt=function(){return n},n}function tt(){var n=Object(N.a)(['\n  font-family: "Jua", sans-serif;\n  position: relative;\n  top: 8px;\n  text-align: center;\n']);return tt=function(){return n},n}function et(){var n=Object(N.a)(["\n  z-index: 100;\n  position: absolute;\n  top: 13px;\n  right: -160px;\n  width: 200px;\n  height: 165px;\n  border: 1px solid rgb(218, 219, 226);\n"]);return et=function(){return n},n}function rt(){var n=Object(N.a)(["\n  margin: 0px 47px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: rgb(250, 60, 84);\n  color: white;\n  padding: 6px 16px;\n  font-size: 15px;\n  cursor: pointer;\n"]);return rt=function(){return n},n}function ot(){var n=Object(N.a)(["\n  margin: 35px 0 20px 0;\n"]);return ot=function(){return n},n}function at(){var n=Object(N.a)(["\n  position: relative;\n  left: 48px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: rgb(90, 172, 68);\n  color: white;\n  padding: 6px 13px;\n  font-size: 15px;\n  cursor: pointer;\n"]);return at=function(){return n},n}function it(){var n=Object(N.a)(["\n  font-size: 15px;\n  outline: none;\n  border: 2px solid rgb(0, 121, 191);\n  border-radius: 5px;\n  width: 145px;\n  height: 12px;\n  padding: 10px 10px;\n  margin: 8px 0px;\n  resize: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return it=function(){return n},n}function ct(){var n=Object(N.a)(["\n  margin: 20px 15px;\n"]);return ct=function(){return n},n}function dt(){var n=Object(N.a)(["\n  width: 179px;\n"]);return dt=function(){return n},n}function bt(){var n=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 15px;\n"]);return bt=function(){return n},n}var st=D.a.div(bt()),ut=Object(D.a)(Q.a)(dt()),lt=D.a.div(ct()),pt=D.a.input(it()),xt=D.a.button(at()),jt=D.a.p(ot()),ft=D.a.button(rt()),Ot=Object(D.a)(In.a)(et()),ht=Object(D.a)(K.a)(tt()),gt=Object(D.a)(B.a)(nt()),vt=D.a.hr($n()),mt=function(n){var t=n.setActionOpen,e=n.index,a=n.boardId,i=Object(c.c)(),d=Object(o.useState)(""),b=Object(L.a)(d,2),s=b[0],u=b[1],l=Object(o.useState)(!1),p=Object(L.a)(l,2),x=p[0],j=p[1],f=Object(o.useState)(!1),O=Object(L.a)(f,2),v=O[0],m=O[1],I=function(){t(!1)},k=function(){I()},w=function(){j(!0)},C=function(){m(!0)},y=function(n){var t=n.target.value;u(t)},S=function(){""!==s&&(I(),i(function(n,t,e){return{type:h,title:n,index:t,boardId:e}}(s,e,a)),u(""))},z=function(){I(),i(function(n,t){return{type:g,index:n,boardId:t}}(e,a))},E=x?"Copy List":v?"Delete List":"List Actions";return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Ot,{onMouseLeave:I,children:[Object(r.jsx)(ht,{variant:"subtitle1",children:E}),Object(r.jsx)(gt,{onClick:I}),Object(r.jsx)(vt,{}),x?Object(r.jsxs)(lt,{children:[Object(r.jsx)("p",{children:"Name"}),Object(r.jsx)(pt,{placeholder:"Input List title ...",value:s,onChange:y,maxLength:15,autoFocus:!0}),Object(r.jsx)(xt,{onClick:S,children:"Create"})]}):v?Object(r.jsxs)(lt,{children:[Object(r.jsx)(jt,{children:"\uc0ad\uc81c \ud6c4 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)(ft,{onClick:z,children:"Delete"})]}):Object(r.jsxs)(st,{children:[Object(r.jsx)(ut,{onClick:k,disableRipple:!0,children:"Add Card"}),Object(r.jsx)(ut,{onClick:w,disableRipple:!0,children:"Copy List"}),Object(r.jsx)(ut,{onClick:C,disableRipple:!0,children:"Delete This List"})]})]})})};function It(){var n=Object(N.a)(["\n  position: relative;\n  top: 5px;\n  left: 8px;\n  cursor: pointer;\n  color: rgb(108, 120, 141);\n  font-size: 25px;\n"]);return It=function(){return n},n}function kt(){var n=Object(N.a)(["\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: rgb(90, 172, 68);\n  margin-top: 5px;\n  color: white;\n  padding: 6px 10px;\n  font-size: 16px;\n  cursor: pointer;\n"]);return kt=function(){return n},n}function wt(){var n=Object(N.a)(["\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  font-size: 16px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  width: 256px;\n  padding: 10px 10px;\n  resize: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return wt=function(){return n},n}function Ct(){var n=Object(N.a)(["\n  padding: 8px;\n  border-radius: 5px;\n"]);return Ct=function(){return n},n}function yt(){var n=Object(N.a)(["\n  padding: 8px;\n  width: 278px;\n  text-transform: none;\n  border-radius: 5px;\n"]);return yt=function(){return n},n}var St=Object(D.a)(Q.a)(yt()),zt=D.a.div(Ct()),Et=D.a.textarea(wt()),Nt=D.a.button(kt()),Dt=Object(D.a)(B.a)(It()),Lt=function(n){var t=n.list,e=n.index,a=n.boardId,i=t?"Input list...":"Input card...",d=t?"+ Add a List":"+ Add a Card",b=t?"20px":"60px",s=t?"Add List":"Add Card",u=t?"white":"black",l=t?"rgb(235,236,240)":"inherit",p=Object(c.c)(),x=Object(o.useState)(!1),j=Object(L.a)(x,2),f=j[0],h=j[1],g=Object(o.useState)(""),v=Object(L.a)(g,2),I=v[0],k=v[1],w=Object(o.useRef)(null),C=function(){h(!0)},y=function(){h(!1),k("")},S=function(n){var t=n.target.value;k(t),console.log(t)},z=function(){""!==I&&(t?(p(function(n,t){return{type:O,title:n,boardId:t}}(I,a)),y()):p(function(n,t,e){return{type:m,card:n,index:t,boardId:e}}(I,e,a)),k("")),w.current&&w.current.focus()};return f?Object(r.jsxs)(zt,{style:{backgroundColor:l},children:[Object(r.jsx)(Et,{style:{height:b},ref:w,placeholder:i,value:I,onChange:S,autoFocus:!0}),Object(r.jsx)(Nt,{onClick:z,children:s}),Object(r.jsx)(Dt,{onClick:y})]}):Object(r.jsx)(St,{style:{color:u},onClick:C,disableRipple:!0,children:d})},Tt=e(108);function _t(){var n=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 278px;\n  margin: auto;\n  margin-bottom: 6px;\n"]);return _t=function(){return n},n}function Bt(){var n=Object(N.a)(["\n  margin-top: 10px;\n  padding: 0 12px;\n  overflow: auto;\n  max-height: 375px;\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: rgb(191, 196, 206);\n    border-radius: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: rgb(218, 219, 226);\n    border-radius: 10px;\n  }\n"]);return Bt=function(){return n},n}function At(){var n=Object(N.a)(["\n  font-size: 18px;\n  position: absolute;\n  top: 15px;\n  right: 12px;\n  font-weight: bold;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  border-radius: 50px;\n  background-color: rgb(235, 236, 240);\n"]);return At=function(){return n},n}function Rt(){var n=Object(N.a)(["\n  flex-shrink: 0;\n  position: relative;\n  background-color: rgb(235, 236, 240);\n  width: 300px;\n  height: 100%;\n  margin: 0 0 0 16px;\n  overflow: visible;\n"]);return Rt=function(){return n},n}var Ft=Object(D.a)(T.a)(Rt()),Jt=D.a.button(At()),Ht=Object(D.a)(Tt.a)(Bt()),Pt=D.a.div(_t()),Xt=function(n){var t=n.title,e=n.list,a=n.index,i=n.boardId,c=n.listId,d=Object(o.useState)(!1),b=Object(L.a)(d,2),u=b[0],l=b[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Zn,{title:t,index:a,boardId:i}),Object(r.jsx)(Jt,{onClick:function(){return l(!0)},children:"\u22ef"}),u?Object(r.jsx)(mt,{setActionOpen:l,index:a,boardId:i}):null,Object(r.jsx)(mn.c,{droppableId:String(c),children:function(n){return Object(r.jsxs)(Ht,Object(s.a)(Object(s.a)({},n.droppableProps),{},{ref:n.innerRef,children:[e.map((function(n,t){return Object(r.jsx)(Vn,{list:n.text,cardId:n.id,index:t,listIndex:a,boardId:i},t)})),n.placeholder]}))}}),Object(r.jsx)(Pt,{children:Object(r.jsx)(Lt,{index:a,boardId:i})})]})})};function Mt(){var n=Object(N.a)(["\n  margin: 0 16px;\n  background-color: rgba(154, 160, 163, 0.9);\n  width: 35px;\n  height: 35px;\n  textt-tansform: none;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 16px;\n  &:hover {\n    background-color: rgba(171, 177, 180, 0.9);\n  }\n"]);return Mt=function(){return n},n}var Gt=D.a.button(Mt()),Ut=function(n){var t=n.boardStar,e=n.boardId,o=Object(c.c)(),a=t?"yellow":"white";return Object(r.jsx)(Gt,{style:{color:a},onClick:function(){o(function(n){return{type:x,boardId:n}}(e))},children:"\u2606"})};function Vt(){var n=Object(N.a)(["\n  padding: 0 12px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  width: 230px;\n  height: 34px;\n  font-size: 18px;\n  white-space: pre;\n"]);return Vt=function(){return n},n}function Yt(){var n=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  left: 60px;\n"]);return Yt=function(){return n},n}function qt(){var n=Object(N.a)(['\n  position: absolute;\n  top: 0;\n  left: 60px;\n  padding: 4px 12px 2px 12px;\n  flex: 0 1 auto;\n  color: white;\n  border-radius: 5px;\n  font-family: "Jua", sans-serif;\n  cursor: pointer;\n  font-size: 18px;\n  white-space: pre;\n  &:hover {\n    background-color: rgba(154, 160, 163, 0.9);\n  }\n']);return qt=function(){return n},n}var Kt=Object(D.a)(K.a)(qt()),Qt=D.a.form(Yt()),Wt=D.a.input(Vt()),Zt=function(n){var t=n.boardName,e=n.boardId,a=Object(c.c)(),i=Object(o.useState)(!1),d=Object(L.a)(i,2),b=d[0],s=d[1],u=Object(o.useState)(t),p=Object(L.a)(u,2),x=p[0],j=p[1],f=function(n){var t=n.target.value;j(t)},O=function(n){n.preventDefault(),h()},h=function(){""!==x&&(a(function(n,t){return{type:l,newBoardName:n,boardId:t}}(x,e)),s(!1))};return b?Object(r.jsx)(Qt,{onSubmit:O,children:Object(r.jsx)(Wt,{value:x,onChange:f,onBlur:h,maxLength:15,autoFocus:!0})}):Object(r.jsx)(Kt,{variant:"h6",onClick:function(){return s(!0)},children:t})},$t=e(61),ne=e.n($t);function te(){var n=Object(N.a)(["\n  position: relative;\n  top: -35px;\n  left: 165px;\n  cursor: pointer;\n  color: rgb(108, 120, 141);\n  font-size: 28px;\n"]);return te=function(){return n},n}function ee(){var n=Object(N.a)(["\n  position: relative;\n  top: 70px;\n  left: 110px;\n  outline: none;\n  border: none;\n  z-index: 1200;\n  border-radius: 5px;\n  background-color: rgb(250, 60, 84);\n  margin-top: 10px;\n  color: white;\n  padding: 8px 16px;\n  font-size: 15px;\n  cursor: pointer;\n"]);return ee=function(){return n},n}function re(){var n=Object(N.a)(["\n  position: relative;\n  top: 50px;\n  left: 83px;\n  font-size: 20px;\n  color: black;\n"]);return re=function(){return n},n}function oe(){var n=Object(N.a)(["\n  position: relative;\n  top: 25px;\n  left: 43px;\n"]);return oe=function(){return n},n}function ae(){var n=Object(N.a)(["\n  background-color: rgb(235, 236, 240);\n  width: 370px;\n  height: 200px;\n  margin: auto;\n  position: relative;\n  top: 230px;\n"]);return ae=function(){return n},n}function ie(){var n=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1100;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return ie=function(){return n},n}function ce(){var n=Object(N.a)(["\n  position: absolute;\n  right: 20px;\n  background-color: rgba(154, 160, 163, 0.9);\n  width: 35px;\n  height: 35px;\n  text-transform: none;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(171, 177, 180, 0.9);\n  }\n"]);return ce=function(){return n},n}var de=D.a.button(ce()),be=D.a.div(ie()),se=Object(D.a)(T.a)(ae()),ue=D.a.h3(oe()),le=D.a.p(re()),pe=D.a.button(ee()),xe=Object(D.a)(B.a)(te()),je=function(n){var t=n.boardId,e=Object(E.f)(),a=Object(c.c)(),i=Object(o.useState)(!1),d=Object(L.a)(i,2),b=d[0],s=d[1],u=function(){a(function(n){return{type:j,boardId:n}}(t)),e.push("/")},l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(de,{onClick:function(){return s(!0)},children:Object(r.jsx)(ne.a,{style:{fontSize:"20px",color:"white"}})})})};return b?Object(r.jsxs)(r.Fragment,{children:[l(),Object(r.jsx)(be,{children:Object(r.jsxs)(se,{children:[Object(r.jsx)(ue,{children:"Delete Board"}),Object(r.jsx)(le,{children:"\uc0ad\uc81c \ud6c4 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)(pe,{onClick:u,children:"Delete This Board"}),Object(r.jsx)(xe,{onClick:function(){return s(!1)}})]})})]}):l()};function fe(){var n=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 290px;\n  height: 100%;\n  background-color: rgba(154, 160, 163, 0.9);\n  border-radius: 5px;\n  margin: 0 16px;\n"]);return fe=function(){return n},n}function Oe(){var n=Object(N.a)(["\n  display: flex;\n  margin-bottom: 12px;\n"]);return Oe=function(){return n},n}function he(){var n=Object(N.a)(["\n  max-width: 98vw;\n  max-height: 90vh;\n  position: relative;\n  top: 58px;\n  left: 1vw;\n"]);return he=function(){return n},n}var ge=D.a.div(he()),ve=D.a.div(Oe()),me=D.a.div(fe()),Ie=function(){var n=Object(E.g)(),t=Number(n.params.boardId),e=Object(c.c)(),a=Object(c.d)((function(n){return n.trello})).boards,i=[],d="",b=!1;a.forEach((function(n,e){n.id===t&&(i=a[e].lists,d=a[e].boardName,b=a[e].star)}));var s=Object(o.useState)(d),u=Object(L.a)(s,2),l=u[0],p=u[1];Object(o.useEffect)((function(){p(d)}),[d]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dn,{}),Object(r.jsxs)(ge,{children:[Object(r.jsxs)(ve,{children:[Object(r.jsx)(Ut,{boardStar:b,boardId:t}),Object(r.jsx)(Zt,{boardName:l,boardId:t}),Object(r.jsx)(je,{boardId:t})]}),Object(r.jsx)(mn.a,{onDragEnd:function(n){var r=n.destination,o=n.source,a=n.draggableId;r&&e(function(n,t,e,r,o,a){return{type:v,boardId:n,droppableIdStart:t,droppableIdEnd:e,droppableIndexStart:r,droppableIndexEnd:o,draggableId:a}}(t,o.droppableId,r.droppableId,o.index,r.index,a))},children:Object(r.jsxs)(ve,{children:[void 0===i?null:Object(r.jsx)(r.Fragment,{children:i.map((function(n,e){return Object(r.jsx)(Xt,{title:n.title,list:n.cards,index:e,boardId:t,listId:n.id},e)}))}),Object(r.jsx)(me,{children:Object(r.jsx)(Lt,{list:!0,index:0,boardId:t})})]})})]})]})},ke=(e(80),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(z.a,{basename:"/trello",children:Object(r.jsxs)(E.c,{children:[Object(r.jsx)(E.a,{exact:!0,path:"/",component:vn}),Object(r.jsx)(E.a,{exact:!0,path:"/board/:boardId",component:Ie})]})})})});i.a.render(Object(r.jsx)(c.a,{store:S,children:Object(r.jsx)(ke,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.259d383f.chunk.js.map