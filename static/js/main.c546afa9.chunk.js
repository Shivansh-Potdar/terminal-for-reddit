(this["webpackJsonpreddit-terminal"]=this["webpackJsonpreddit-terminal"]||[]).push([[0],{101:function(e,t){},106:function(e,t,n){"use strict";n.r(t);var r=n(21),c=n(22),i=n(24),o=n(23),s=n(36),d=n.n(s),a=n(52),u=n(54),l=n(0),j=n(7),h=n.n(j),f=n(25),m=n.n(f),p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={hidden:!0},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({hidden:!1})}),this.props.waitBeforeShow)}},{key:"render",value:function(){return this.state.hidden?"":this.props.children}}]),n}(h.a.Component),b=n(53),O=n.n(b);function x(e){var t=h.a.useState(""),n=Object(u.a)(t,2),r=(n[0],n[1]);return Object(j.useEffect)((function(){var e=function(e){if(("Enter"===e.code||"NumpadEnter"===e.code)&&(alert("Please wait for posts to load"),e.preventDefault(),r((function(e){return e+document.getElementById("commandLine").value})),"-begin"===document.getElementById("commandLine").value)){var t=Object(l.jsx)(v,{});m.a.render(t,document.getElementById("command-result"))}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:["C://desktop/users/commands/",Object(l.jsx)("input",{type:"text",id:"commandLine",placeholder:e.plc})]})})}function v(){var e=[];function t(){return n.apply(this,arguments)}function n(){return(n=Object(a.a)(d.a.mark((function t(){var n,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new O.a({userAgent:"A random string.",clientId:"uYcds9ym9IRLBg",clientSecret:"jFkboj6UTkmpVUaSmPNnfK9S5Ppi7w",refreshToken:"244083766827-hzwx_uMei4nOCtE9Y-TnypmVa_COqA"}),t.next=3,n.getSubreddit(document.getElementById("rslashval").value);case 3:return r=t.sent,t.next=6,r.getNew({time:"week",limit:5});case 6:return t.sent,t.next=9,r.getTop({time:"week",limit:50});case 9:c=t.sent,i=[],[],c.forEach((function(e){i.push({link:e.url,title:e.title,text:e.selftext,score:e.score,id:e.id})})),console.log(i),e.push(i),m.a.render(i.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("p",{children:['"Title: "',e.title]}),Object(l.jsxs)("p",{children:['"Score: "',e.score]}),Object(l.jsxs)("p",{children:['"Text: "',e.text]})]},t)})),document.getElementById("root-ul"));case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(console.log("Enter key was pressed. Run your function."),e.preventDefault(),t())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t]),Object(l.jsx)("div",{children:Object(l.jsxs)(p,{waitBeforeShow:500,children:[Object(l.jsx)("div",{children:"Loading form...."}),Object(l.jsx)(p,{waitBeforeShow:450,children:Object(l.jsx)("p",{children:Object(l.jsxs)(p,{waitBeforeShow:200,children:["3..",Object(l.jsxs)(p,{waitBeforeShow:250,children:["2...",Object(l.jsxs)(p,{waitBeforeShow:275,children:["1....",Object(l.jsxs)(p,{waitBeforeShow:500,children:[Object(l.jsxs)("form",{children:["C://desktop/users/r/",Object(l.jsx)("input",{type:"text",id:"rslashval",placeholder:"subreddit name"})]}),Object(l.jsx)("ul",{id:"root-ul"})]})]})]})]})})})]})})}var w=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"commands",children:[Object(l.jsx)("h1",{children:"Reddit Terminal"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"type -begin"}),Object(l.jsx)("li",{children:"get the top posts of subreddit"}),Object(l.jsx)("li",{children:"or get new posts"}),Object(l.jsx)("li",{children:"do not forget only post text can be read"})]}),Object(l.jsx)(x,{plc:"command"})]})}}]),n}(h.a.Component);m.a.render(Object(l.jsx)(w,{name:"Shivansh"}),document.getElementById("root"))},41:function(e,t){},45:function(e,t){},68:function(e,t){},77:function(e,t){},85:function(e,t){},91:function(e,t){},93:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.c546afa9.chunk.js.map