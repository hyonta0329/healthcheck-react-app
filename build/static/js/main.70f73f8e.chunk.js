(this["webpackJsonpreact-router-v4-tutorial"]=this["webpackJsonpreact-router-v4-tutorial"]||[]).push([[0],{110:function(e,t,n){e.exports=n(606)},49:function(e,t){},606:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(104),s=n.n(l),i=n(27),c=n(18),r=n(8),u=n(7),m=n(10),d=n(9),h=n(12),k=(n(115),n(42)),g=new(n(105).Dispatcher),p=n(20),v=n.n(p);function b(e,t){var n=0;return e.Created>t.Created?n=-1:e.Created<t.Created&&(n=1),n}function E(e,t){var n="https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+t;v.a.ajax({contentType:"application/json",type:"GET",url:n,processdata:!1,dataType:"json",headers:{Authorization:e},success:function(e){console.log(e.body.Items[0].TaskID);var t="";(t=e.body.Items.filter((function(e){return"health"==e.timezone}))).sort(b),console.log(t),console.log(Object.keys(t).length),g.dispatch({type:"GET_TICKETS",tickets:t})}})}function T(e,t){g.dispatch({type:"FETCH_TOKEN"}),setTimeout((function(){g.dispatch({type:"RECEIVE_TOKEN",token:e,username:t})}),1e3)}var f=new(function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).token="This is old token",e.username="no username",e.tickets=[{title:"-",Created:"---",Comment:"---"}],e.LatestTicket=[],e}return Object(u.a)(n,[{key:"createTodo",value:function(e){var t=Date.now();this.todos.push({id:t,text:e,complete:!1}),this.emit("change")}},{key:"receiveToken",value:function(e,t){this.token=e,this.username=t,this.emit("change")}},{key:"receiveTickets",value:function(e){this.tickets=e,this.emit("change")}},{key:"receiveLatestTicket",value:function(e){this.LatestTicket=e[0],this.emit("change")}},{key:"getAll",value:function(){return{token:this.token,username:this.username}}},{key:"getAllWithTickets",value:function(){return{token:this.token,username:this.username,tickets:this.tickets}}},{key:"getLatestTicket",value:function(){return{LatestTicket:this.LatestTicket}}},{key:"handleActions",value:function(e){switch(e.type){case"CREATE_TODO":this.createTodo(e.text);case"RECEIVE_TOKEN":this.receiveToken(e.token,e.username),console.log(e.token);case"GET_TICKETS":this.receiveTickets(e.tickets),console.log(e.tickets);case"PUT_TICKET":this.receiveTickets(e.tickets),console.log(e.tickets)}}}]),n}(n(58).EventEmitter));g.register(f.handleActions.bind(f)),window.dispatcher=g;var y=f,C=new k.c({UserPoolId:"us-east-2_J3czsOpsv",ClientId:"3atuib3usf88b9cd72qbs1jvod"}),j="";var O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={token:"this is old token",username:"this is old username"},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username})}},{key:"reloadToken",value:function(e,t){T(e,t)}},{key:"reloadTickets",value:function(e,t){E(e,t),console.log(this.state.tickets)}},{key:"handleChangeUsername",value:function(e){var t=e.target.value;this.props.changeUsername(t)}},{key:"handleChangePassword",value:function(e){var t=e.target.value;this.props.changePassword(t)}},{key:"handleChangeToken",value:function(e){this.props.changeToken("new token")}},{key:"handleLogin",value:function(e){var t=this,n=this.props.username,a=this.props.password;!function(e,t){var n=new k.a({Username:e,Password:t});new k.b({Username:e,Pool:C}).authenticateUser(n,{onSuccess:function(e){j=e.getIdToken().getJwtToken(),window.alert("\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f");new Date},onFailure:function(e){return e}})}(n,a);setTimeout((function(){t.props.changeToken(j),t.setState({token:j,username:n}),t.reloadToken(j,n),t.reloadTickets(j,n)}),3e3)}},{key:"render",value:function(){this.state.token,this.state.username;return o.a.createElement("div",null,o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"wrapper"},o.a.createElement("h2",{class:"form-signin-heading",style:{color:"#663300"}},"\u3053\u3093\u306b\u3061\u306f\uff01\uff01\uff01"),o.a.createElement("hr",{class:"colorgraph"}),o.a.createElement("input",{class:"form-control",placeholder:"Email",value:this.props.username,onChange:this.handleChangeUsername.bind(this)}),o.a.createElement("input",{type:"password",placeholder:"Password",class:"form-control",value:this.props.password,onChange:this.handleChangePassword.bind(this)}),o.a.createElement("br",null),o.a.createElement("input",{class:"btn btn-lg btn btn-pale btn-block",type:"button",value:"\u30ed\u30b0\u30a4\u30f3\u3059\u308b",onClick:this.handleLogin.bind(this)}))))}}]),n}(o.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={total:5,items:[{id:0,created:"-",temp:"-",comment:"-"}],token:y.getAll().token,username:y.getAll().username,tickets:[],LatestTicket:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets,LatestTicket:y.getLatestTicket().LatestTicket})}},{key:"putTicket",value:function(e,t){var n=document.getElementById("int"),a=document.getElementById("float");!function(e,t,n,a){var o=new Date,l=o.getFullYear(),s=o.getMonth()+1,i=o.getHours()+":"+o.getMinutes();console.log(i),1===s.length?s="0"+s:console.log("zero");var c=l+"-"+s+"-"+o.getDate()+"-"+i;v.a.ajax({contentType:"application/json",type:"POST",url:"https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+n,processdata:!1,dataType:"json",data:JSON.stringify({created:c,username:n,title:e,Issuetype:"health",Status:"NS",timezone:"health",Due:i.toString(),Comment:t,EstTime:"None",Priority:"None"}),headers:{Authorization:a},success:function(e){console.log(e),window.alert("\u304a\u306d\u3064\u304c\u6b63\u5e38\u306b\u767b\u9332\u3055\u308c\u307e\u3057\u305f"),E(a,n)},error:function(e){console.log("error",e)}})}(n.value+"."+a.value,document.getElementById("comment_ticket").value,e,t),console.log(this.state.tickets)}},{key:"handleChange",value:function(e){var t=document.getElementById("int"),n=document.getElementById("float"),a=t.value+"."+n.value,o=new Date,l=o.getFullYear(),s=o.getMonth()+1;console.log(s);var i=o.getMinutes(),c="";i<10?c=c+"0"+i.toString():c+=i.toString();var r=o.getHours()+":"+o.getMinutes();console.log(r),s<10?("0"+s.toString(),console.log(s)):console.log("zero");var u=l+"/"+s+"/"+o.getDate()+" "+r;this.props.changeTemp(a),this.props.changeTime(u)}},{key:"render",value:function(){var e=this.state.token,t=this.state.username;return o.a.createElement("div",{class:"homeobject"},o.a.createElement("div",{class:"rounded border border-info",id:"homeobject"},o.a.createElement("h4",{class:"text-light bg-dark"},"\xa0\u304a\u306d\u3064\u3092\u306f\u304b\u308b"),o.a.createElement("table",{class:"table"},o.a.createElement("tr",null,o.a.createElement("td",null,"\u304a\u306d\u3064: "),o.a.createElement("td",null,o.a.createElement("select",{name:"int",id:"int"},o.a.createElement("option",{value:"36"},"36"),o.a.createElement("option",{value:"37"},"37"),o.a.createElement("option",{value:"38"},"38"),o.a.createElement("option",{value:"39"},"39"))," .",o.a.createElement("select",{name:"float",id:"float"},o.a.createElement("option",{value:"0"},"0"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9")))),o.a.createElement("tr",null,o.a.createElement("td",null,"\u3053\u3081\u3093\u3068: "),o.a.createElement("td",null,o.a.createElement("input",{type:"text",id:"comment_ticket"}))),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("input",{class:"btn btn btn-pale",type:"button",value:"OK",onClick:this.putTicket.bind(this,t,e)})))))}}]),n}(o.a.Component),w=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={total:5,items:[{id:0,created:"-",temp:"-",comment:"-"}],token:y.getAll().token,username:y.getAll().username,tickets:[]},e}return Object(u.a)(n,[{key:"deleteissue",value:function(e,t,n){console.log("step1");window.confirm("Are you sure to delete this task?")?v.a.ajax({contentType:"application/json",type:"POST",url:"https://hmml9crysl.execute-api.us-east-2.amazonaws.com/prod/update-delete-mobtask",processdata:!1,dataType:"json",data:JSON.stringify({TaskID:t,OperationType:"delete"}),headers:{Authorization:e},success:function(t){console.log(t),E(e,n)},error:function(e){console.log("error",e)}}):window.alert("cancelled")}},{key:"dummydelete",value:function(e,t){console.log("dummy - token is "+e),console.log("dummy - deletedissueid is "+t)}}]),Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"getTickets",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"reloadToken",value:function(e,t){T(e,t)}},{key:"reloadTickets",value:function(e,t){E(e,t),console.log(this.state.tickets)}},{key:"render",value:function(){var e=this,t=this.state.token;return o.a.createElement("div",null,o.a.createElement("table",{class:"table",id:"table1"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"\u3044\u3064\u306f\u304b\u3063\u305f"),o.a.createElement("th",null,"\u304a\u306d\u3064"),o.a.createElement("th",null,"\u3053\u3081\u3093\u3068"),o.a.createElement("th",null,"\u64cd\u4f5c"))),o.a.createElement("tbody",{id:"healthtable"},this.props.tickets.map((function(n,a){return o.a.createElement("tr",null,o.a.createElement("td",null,n.Created),o.a.createElement("td",null,n.title),o.a.createElement("td",null,n.Comment),o.a.createElement("td",null,o.a.createElement("input",{type:"button",class:"btn btn btn-pale",id:n.TaskID,value:"-",onClick:e.deleteissue.bind(e,t,n.TaskID,e.props.username)})))})))))}}]),n}(o.a.Component);n(509),n(510),n(20);var S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={total:5,items:[{id:0,created:"-",temp:"-",comment:"-"}],token:y.getAll().token,username:y.getAll().username,tickets:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"getTickets",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"reloadToken",value:function(e,t){T(e,t)}},{key:"reloadTickets",value:function(e,t){E(e,t),console.log(this.state.tickets)}},{key:"addItems",value:function(){this.setState({items:[{id:1,created:"2020-2-3 11:59",temp:"35.0",comment:"aaa"},{id:2,created:"2020-2-3 12:59",temp:"36.0",comment:"aaa"},{id:3,created:"2020-2-3 13:59",temp:"37.0",comment:"aaa"},{id:4,created:"2020-2-3 14:59",temp:"38.0",comment:"aaa"},{id:5,created:"2020-2-3 15:59",temp:"39.0",comment:"aaa"}]}),console.log(this.state)}},{key:"addMoreItems",value:function(){this.setState({items:this.state.items.concat([{id:1,created:"2020-2-3 11:59",temp:"37.0",comment:"aaa"},{id:2,created:"2020-2-3 11:52",temp:"37.0",comment:"aaa"},{id:3,created:"2020-2-3 11:59",temp:"38.0",comment:"aaa"}])}),console.log(this.state)}},{key:"render",value:function(){var e=this.state.token,t=this.state.username;return o.a.createElement("div",null,o.a.createElement("div",null),o.a.createElement("ul",{class:"grid-container"},o.a.createElement("li",{class:"grid-box box-big"},o.a.createElement("div",{class:"rounded border border-info",id:"homeobject"},o.a.createElement("h4",{class:"text-light bg-dark"},"\xa0\u3053\u308c\u307e\u3067\u306e\u304a\u306d\u3064"),o.a.createElement("br",null),o.a.createElement("input",{class:"btn btn-lg btn btn-pale btn-block",type:"button",value:"\u30ea\u30b9\u30c8\u3092\u66f4\u65b0\u3059\u308b",onClick:this.reloadTickets.bind(this,e,t)}),o.a.createElement("br",null),o.a.createElement(w,{items:this.state.items,total:this.state.total,tickets:this.state.tickets,username:t})))))}}]),n}(o.a.Component),x=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={total:5,items:[{id:0,created:"-",temp:"-",comment:"-"}],token:y.getAll().token,username:y.getAll().username,tickets:[{title:"-",Created:"---",Comment:"---"}]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"getTickets",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets})}},{key:"reloadToken",value:function(e,t){T(e,t)}},{key:"reloadTickets",value:function(e,t){E(e,t),console.log(this.state.tickets)}},{key:"render",value:function(){var e=0,t=new Date,n=t.getFullYear(),a=t.getMonth()+1;console.log(a.toString()),1===a.toString().length?(a="0"+a,console.log("plus zero")):console.log("zero");var l=n+"-"+a+"-"+t.getDate();console.log(l.toString());var s={title:"-",Created:"---",Comment:"---"};return"undefined"!==typeof this.state.tickets&&((s=this.state.tickets[0]).Created.substr(0,10),e=this.state.tickets.filter((function(e){return-1!=e.Created.indexOf(l)})).length),console.log(s),o.a.createElement("div",{class:"homeobject"},o.a.createElement("div",{class:"rounded border border-info",id:"homeobject"},o.a.createElement("h4",{class:"text-light bg-dark"},"\xa0\u3055\u3044\u304d\u3093\u306e\u304a\u306d\u3064"),o.a.createElement("table",{class:"table"},o.a.createElement("tr",null,o.a.createElement("td",null,"\u76f4\u8fd1\u306e\u304a\u306d\u3064: "),o.a.createElement("td",null,s.title)),o.a.createElement("tr",null,o.a.createElement("td",null,"\u3044\u3064\u306f\u304b\u3063\u305f: "),o.a.createElement("td",null,s.Created)),o.a.createElement("tr",null,o.a.createElement("td",null,"\u304d\u3087\u3046\u4f55\u56de\u306f\u304b\u3063\u305f: "),o.a.createElement("td",null,e))),o.a.createElement(i.b,{to:"/list"},"\xa0\xa0\xa0>>>>\u3059\u3079\u3066\u306e\u304a\u306d\u3064\u3092\u898b\u308b"),o.a.createElement(c.a,{path:"/list",component:S})))}}]),n}(o.a.Component),D=n(108),I=Date.parse("2020-01-25 15:20:55");console.log(I);var L=parseFloat("37.7");console.log(L);var M=[{title:"37.0",Created:"2020-01-25 15:20:55"},{title:"36.0",Created:"2020-02-14 15:20:55"},{title:"35.0",Created:"2020-02-25 15:20:55"},{title:"36.0",Created:"2020-02-28 15:20:55"},{title:"37.0",Created:"2020-03-23 15:20:55"},{title:"36.0",Created:"2020-04-05 15:20:55"},{title:"37.0",Created:"2020-04-25 15:20:55"}],U=[];for(var W in M){console.log(W),console.log(M[W].title),console.log(M[W].Created),console.log("----");var P=parseFloat(M[W].title),z=Date.parse(M[W].Created);U.push({x:z,y:P})}var B=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getToken=e.getToken.bind(Object(h.a)(e)),e.state={total:5,items:[{id:0,created:"-",temp:"-",comment:"-"}],token:y.getAll().token,username:y.getAll().username,tickets:[],LatestTicket:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){y.on("change",this.getToken),console.log("count",y.listenerCount("change"))}},{key:"componentWillUnmount",value:function(){y.removeListener("change",this.getToken)}},{key:"getToken",value:function(){this.setState({token:y.getAll().token,username:y.getAll().username,tickets:y.getAllWithTickets().tickets,LatestTicket:y.getLatestTicket().LatestTicket})}},{key:"render",value:function(){var e=this.state.tickets,t=[];for(var n in e){console.log(n),console.log(e[n].title),console.log(e[n].Created),console.log("----");var a=parseFloat(e[n].title),l=Date.parse(e[n].Created);t.push({x:l,y:a})}var s={labels:["2020-01","2020-02","2020-03","2020-04","2020-05"],datasets:[{label:"\u304a\u306d\u3064",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"square",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#eee",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:1,pointRadius:1,pointHitRadius:10,data:t}]};return console.log(t),o.a.createElement("div",{class:"rounded border border-info"},o.a.createElement("h4",{class:"text-light bg-dark"},"\xa0\u304a\u306d\u3064\u30b0\u30e9\u30d5"),o.a.createElement(D.a,{data:s,options:{title:{display:!0,text:"\u304a\u306d\u3064\u30b0\u30e9\u30d5"},scales:{xAxes:[{type:"time",time:{format:"YYYY-MM",unit:"week",displayFormats:{month:"YYYY-MM"},tooltipFormat:"ll"},scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{scaleLabel:{display:!0,labelString:"points"},ticks:{beginAtZero:!0,min:36,max:38.5}}]}}}))}}]),n}(o.a.Component);var Y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={username:"",temp:"-",time:"???",password:"",token:"no token",todayscount:0},e}return Object(u.a)(n,[{key:"changeUsername",value:function(e){this.setState({username:e})}},{key:"changePassword",value:function(e){this.setState({password:e})}},{key:"changeToken",value:function(e){this.setState({token:e})}},{key:"changeTemp",value:function(e){this.setState({temp:e})}},{key:"changeTime",value:function(e){this.setState({time:e})}},{key:"CognitoLogin",value:function(){}},{key:"GetItems",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{changeUsername:this.changeUsername.bind(this),changePassword:this.changePassword.bind(this),changeToken:this.changeToken.bind(this),username:this.state.username,password:this.state.password,token:this.state.token}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("ul",{class:"grid-container"},o.a.createElement("li",{class:"grid-box"},o.a.createElement(A,{changeTemp:this.changeTemp.bind(this),changeTime:this.changeTime.bind(this),temp:this.state.temp})),o.a.createElement("li",{class:"grid-box"},o.a.createElement(x,{latesttemp:this.state.temp,latesttime:this.state.time,todayscount:this.state.todayscount})),o.a.createElement("br",null),o.a.createElement("li",{class:"grid-box box-big"},o.a.createElement(B,null))))}}]),n}(o.a.Component),F=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement("ul",{class:"sidebarMenuInner"},o.a.createElement("li",{class:"nav-item"},o.a.createElement(i.b,{to:"/"},"\u307b\u30fc\u3080")),o.a.createElement("li",{class:"nav-item"},o.a.createElement(i.b,{to:"/list"},"\u3044\u3061\u3089\u3093"))),o.a.createElement("hr",null),o.a.createElement(c.a,{exact:!0,path:"/",component:Y}),o.a.createElement(c.a,{path:"/list",component:S})))};s.a.render(o.a.createElement(F,null),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.70f73f8e.chunk.js.map