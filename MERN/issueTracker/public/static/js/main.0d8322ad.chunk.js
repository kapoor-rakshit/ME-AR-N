(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(72)},41:function(e,t,a){},43:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(32),r=a.n(l),c=(a(41),a(8)),u=a(9),i=a(13),o=a(12),m=a(14),d=a(82),h=a(84),E=a(85),v=a(69),p=a(83),f=(a(43),a(73)),b=a(74),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(b.a,null,s.a.createElement("h1",null,"Welcome to IssueTrackerApp"),s.a.createElement("p",null,"we are right here at home")))}}]),t}(n.Component),j=a(3),O=a(67),g=a(86),k=a(19),C=a.n(k),D=function(){function e(){Object(c.a)(this,e),this._issuesUrl="http://localhost:5000/issues"}return Object(u.a)(e,null,[{key:"readIssues",value:function(){C.a.request({method:"get",url:this._issuesUrl}).then(function(e){return e.data}).catch(function(e){throw e})}},{key:"readIssue",value:function(e){C.a.request({method:"get",url:this._issuesUrl+"/"+e}).then(function(e){return e.data}).catch(function(e){throw e})}},{key:"createIssue",value:function(e){C.a.request({method:"post",url:this._issuesUrl,data:e}).then(function(e){return e.data}).catch(function(e){throw e})}},{key:"updateIssue",value:function(e,t){C.a.request({method:"put",url:this._issuesUrl+"/"+e,data:t}).then(function(e){return e.data}).catch(function(e){throw e})}},{key:"deleteIssue",value:function(e){C.a.request({method:"delete",url:this._issuesUrl+"/"+e}).then(function(e){return e.data}).catch(function(e){throw e})}}]),e}(),I=a(75),S=a(76),w=a(77),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).createTable=function(){var e,t=[];for(e in a.state.issues){var n=[];n.push(s.a.createElement("td",null,s.a.createElement(I.a,{type:"checkbox",onChange:a.togglechk}))),n.push(s.a.createElement("td",null,e.desc)),n.push(s.a.createElement("td",null,e.seve)),n.push(s.a.createElement("td",null,e.stat)),n.push(s.a.createElement("td",null,e.datecr)),n.push(s.a.createElement("td",null,e.daters)),n.push(s.a.createElement("td",null,s.a.createElement(O.a,{to:"/issues/editissue/".concat(e._id)},s.a.createElement(S.a,{color:"primary"},"Update")))),n.push(s.a.createElement("td",null,s.a.createElement(S.a,{onClick:a.deleteIssue(e._id),color:"danger"},"Delete"))),t.push(s.a.createElement("tr",null,n))}return t},a.state={issues:[],descv:!0,sevev:!0,statv:!0,datecrv:!0,datersv:!0,selectall:!1,chkvar:!1},a.changeDesc=a.changeDesc.bind(Object(j.a)(Object(j.a)(a))),a.changeSeve=a.changeSeve.bind(Object(j.a)(Object(j.a)(a))),a.changeStat=a.changeStat.bind(Object(j.a)(Object(j.a)(a))),a.changeDatecr=a.changeDatecr.bind(Object(j.a)(Object(j.a)(a))),a.changeDaters=a.changeDaters.bind(Object(j.a)(Object(j.a)(a))),a.toggleall=a.toggleall.bind(Object(j.a)(Object(j.a)(a))),a.deleteMultiple=a.deleteMultiple.bind(Object(j.a)(Object(j.a)(a))),a.togglechk=a.togglechk.bind(Object(j.a)(Object(j.a)(a))),a.deleteIssue=a.deleteIssue.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({issues:D.readIssues()})}},{key:"changeDesc",value:function(){this.setState({descv:!this.state.descv})}},{key:"changeSeve",value:function(){this.setState({sevev:!this.state.sevev})}},{key:"changeStat",value:function(){this.setState({statv:!this.state.statv})}},{key:"changeDatecr",value:function(){this.setState({datecrv:!this.state.datecrv})}},{key:"changeDaters",value:function(){this.setState({datersv:!this.state.datersv})}},{key:"toggleall",value:function(){this.setState({selectall:!this.state.selectall})}},{key:"togglechk",value:function(){this.setState({chkvar:!this.state.chkvar})}},{key:"deleteIssue",value:function(e){D.deleteIssue(e),this.props.history.push("/issues")}},{key:"deleteMultiple",value:function(){this.props.history.push("/issues")}},{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-2"},"Search: ",s.a.createElement(I.a,{type:"text"}))),s.a.createElement("br",null),s.a.createElement(I.a,{type:"checkbox",onChange:this.changeDesc,defaultChecked:this.state.descv})," Description ",s.a.createElement("br",null),s.a.createElement(I.a,{type:"checkbox",onChange:this.changeSeve,defaultChecked:this.state.sevev})," Severity    ",s.a.createElement("br",null),s.a.createElement(I.a,{type:"checkbox",onChange:this.changeStat,defaultChecked:this.state.statv})," Status      ",s.a.createElement("br",null),s.a.createElement(I.a,{type:"checkbox",onChange:this.changeDatecr,defaultChecked:this.state.datecrv})," Date Created ",s.a.createElement("br",null),s.a.createElement(I.a,{type:"checkbox",onChange:this.changeDaters,defaultChecked:this.state.datersv})," Date Resolved / Expected ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(w.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement(I.a,{type:"checkbox",onChange:this.toggleall})),"        ",s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Severity"),s.a.createElement("th",null,"Status"),s.a.createElement("th",null,"Date Created"),s.a.createElement("th",null,"Date Resolved / Expected"),s.a.createElement("th",null),s.a.createElement("th",null,s.a.createElement(S.a,{onClick:this.deleteMultiple,color:"danger"},"Delete Multiple")),"             ")),s.a.createElement("tbody",null,this.createTable()))),s.a.createElement("br",null),s.a.createElement(O.a,{to:"/issues/addissue"},s.a.createElement(S.a,{color:"primary"},"New Issue"))))}}]),t}(n.Component),q=Object(g.a)(x),N=a(78),M=a(79),_=a(80),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).saveIssue=a.saveIssue.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"saveIssue",value:function(e){e.preventDefault();var t={};t.desc=this.refs.desc.value,t.seve=this.refs.seve.value,t.stat=this.refs.stat.value,t.datecr=this.refs.datecr.value,t.daters=this.refs.daters.value,D.createIssue(t),this.props.history.push("/issues")}},{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(b.a,null,s.a.createElement("h1",null,"Add Issue"),s.a.createElement(N.a,{onSubmit:this.saveIssue},s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"desc"},"Description"),s.a.createElement(I.a,{type:"text",className:"form-control",id:"desc",ref:"desc",required:!0,minLength:"3"})),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"severity"},"Severity"),s.a.createElement(I.a,{type:"select",className:"form-control",id:"severity",ref:"seve"},s.a.createElement("option",{value:"minor"},"Minor"),s.a.createElement("option",{value:"major"},"Major"),s.a.createElement("option",{value:"critical"},"Critical"))),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"status"},"Status"),s.a.createElement(I.a,{type:"select",className:"form-control",id:"status",ref:"stat"},s.a.createElement("option",{value:"open"},"Open"),s.a.createElement("option",{value:"in progress"},"In Progress"),s.a.createElement("option",{value:"closed"},"Closed"))),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"datecr"},"Date Created"),s.a.createElement(I.a,{className:"form-control",type:"date",id:"datecr",ref:"datecr",required:!0})),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"daters"},"Expected Resolution Date"),s.a.createElement(I.a,{className:"form-control",type:"date",id:"daters",ref:"daters",required:!0})),s.a.createElement(S.a,{type:"submit",color:"primary"},"Submit"),s.a.createElement("br",null),s.a.createElement("br",null))))}}]),t}(n.Component),R=Object(g.a)(U),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={issuedetails:{}},a.saveIssue=a.saveIssue.bind(Object(j.a)(Object(j.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({issuedetails:D.readIssue(this.props.match.params.id)})}},{key:"saveIssue",value:function(e){e.preventDefault();var t={};t.desc=this.refs.desc.value,t.seve=this.refs.seve.value,t.stat=this.refs.stat.value,t.datecr=this.refs.datecr.value,t.daters=this.refs.daters.value,D.updateIssue(this.props.match.params.id,t),this.props.history.push("/issues")}},{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(b.a,null,s.a.createElement("h1",null,"Edit Issue"),s.a.createElement(N.a,{onSubmit:this.saveIssue},s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"desc"},"Description"),s.a.createElement(I.a,{type:"text",class:"form-control",id:"desc",ref:"desc",value:this.state.issuedetails.desc,required:!0,minlength:"3"})),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"severity"},"Severity"),s.a.createElement(I.a,{type:"select",class:"form-control",id:"severity",value:this.state.issuedetails.seve,ref:"seve"},s.a.createElement("option",{value:"minor"},"Minor"),s.a.createElement("option",{value:"major"},"Major"),s.a.createElement("option",{value:"critical"},"Critical"))),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"status"},"Status"),s.a.createElement(I.a,{type:"select",class:"form-control",id:"status",value:this.state.issuedetails.stat,ref:"stat"},s.a.createElement("option",{value:"open"},"Open"),s.a.createElement("option",{value:"in progress"},"In Progress"),s.a.createElement("option",{value:"closed"},"Closed"))),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"datecr"},"Date Created"),s.a.createElement(I.a,{class:"form-control",type:"date",id:"datecr",value:this.state.issuedetails.datecr,ref:"datecr",required:!0})),s.a.createElement(M.a,null,s.a.createElement(_.a,{for:"daters"},"Expected Resolution Date"),s.a.createElement(I.a,{class:"form-control",type:"date",id:"daters",value:this.state.issuedetails.daters,ref:"daters",required:!0})),s.a.createElement(S.a,{type:"submit",color:"primary"},"Submit"),s.a.createElement("br",null),s.a.createElement("br",null))))}}]),t}(n.Component),B=Object(g.a)(T),W=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,null,s.a.createElement(b.a,null,s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"The requested page was not found."),s.a.createElement("p",null,s.a.createElement(O.a,{to:"/"},"Back to Home"))))}}]),t}(n.Component),A=a(81),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(A.a,null,s.a.createElement(d.a,{exact:!0,activeClassName:"active",to:"/"},"Home"),s.a.createElement(d.a,{activeClassName:"active",to:"/issues"},"Issues"))}}]),t}(n.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("div",null,s.a.createElement(H,null),s.a.createElement(E.a,null,s.a.createElement(v.a,{exact:!0,path:"/",component:y}),s.a.createElement(v.a,{exact:!0,path:"/issues",component:q}),s.a.createElement(v.a,{path:"/issues/addissue",component:R}),s.a.createElement(v.a,{path:"/issues/editissue/:id",component:B}),s.a.createElement(p.a,{from:"/addissue",to:"/issues/addissue"}),s.a.createElement(v.a,{component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);r.a.render(s.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.0d8322ad.chunk.js.map