(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{251:function(e,t){},253:function(e,t){},261:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),o=r.n(n),s=r(12),i=r.n(s),c=r(18),l=r(16),d=r(21),u=r(20),m=(r(204),r(25)),b=r(93),p=r.n(b),h=r(106),j=r(17),f=r(68),g=r(14),O=r(138),v=r(58),x=window.location.origin+"/api/",k="/",y="/login",R="/register",w="/video/:roomId",S="Lobby",F="Login",_="Register",N="Logout";var C=function(e){var t=e.component,r=e.authenticationProps,n=Object(v.a)(e,["component","authenticationProps"]);return Object(a.jsx)(g.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return r.isUserLoggedIn?Object(a.jsx)(g.a,{to:k,exact:!0}):Object(a.jsx)(t,Object(m.a)(Object(m.a)({redirectPath:k},e),r))}}))},I=r(34),T=r(267),A=r(269),M=r(262),D=r(268),E=r(5),L=r(324),B=r(321);var U=function(e){var t=e.severity,r=e.feedbackMsg,n=e.isFeedbackOpen,o=e.closeFeedback;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:n,autoHideDuration:6e3,onClose:o,children:Object(a.jsx)(B.a,{onClose:o,severity:t,children:r})})})},P=r(310);var V=function(e){var t=e.name,r=e.label,n=e.type,o=void 0===n?"text":n,s=e.MUComponent,i=void 0===s?P.a:s,c=Object(v.a)(e,["name","label","type","MUComponent"]);return Object(a.jsx)("div",{children:Object(a.jsx)(I.b,Object(m.a)(Object(m.a)({name:t,label:r,type:o},c),{},{helperText:Object(a.jsx)(I.a,{name:t}),as:i}))})},z=r(326),W=r(266),q=r(270),H=r(272);function Y(e){var t=e.label,r=e.children,n=e.value,o=e.name,s=e.errorString,i=e.onChange,c=e.onBlur;return Object(a.jsxs)(W.a,{fullWidth:!0,children:[Object(a.jsx)(H.a,{children:t}),Object(a.jsx)(q.a,{value:n,name:o,onChange:i,onBlur:c,children:r}),Object(a.jsx)(T.a,{children:s})]})}var J=function(e){var t=e.name,r=e.label,n=e.items,o=void 0===n?[]:n;return Object(a.jsx)(I.b,{name:t,label:r,errorString:Object(a.jsx)(I.a,{name:t}),as:Y,children:o.map((function(e){return Object(a.jsx)(z.a,{value:e.value,children:e.label},e.value)}))})},G=r(313),X=r(312);var K=function(){return Object(a.jsx)(X.a,{style:{textAlign:"center"},children:Object(a.jsx)(G.a,{})})},Q=r(314);var Z=function(e){var t=e.innerText,r=e.linkTo;return Object(a.jsx)(Q.a,{component:f.b,to:r,children:t})},$=o.a.createContext({isDataArrived:!1,userId:null,userFullName:"",isUserLoggedIn:!1});var ee=function(e){return Object(a.jsx)($.Provider,{value:e.userData,children:e.children})},te=r(173),re=r.n(te);var ae=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),a=0;a<r.length;a++){var n=r[a].trim();if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}return t}("csrftoken"),ne=re.a.create({baseURL:x,timeout:5e3,headers:{"Content-Type":"application/json",accept:"application/json","X-CSRFToken":ae,Authorization:"Bearer "+localStorage.getItem("access_token")}}),oe=ne,se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return delete e.defaults.headers.Authorization,""!==t?e.get("rooms/?search=".concat(t)):e.get("rooms/")},ie=function(e,t){return e.post("token/verify/",{token:t})},ce=function(){var e=localStorage.getItem("access_token");ie(ne,e).then((function(t){200===t.status&&(ne.defaults.headers.Authorization="Bearer "+e)})).catch((function(e){var t=localStorage.getItem("refresh_token");400!==e.response.status&&401!==e.response.status||!t||ne.post("token/refresh/",{refresh:t}).then((function(e){var t=e.status,r=e.data;200===t&&(localStorage.setItem("access_token",r.access),ne.defaults.headers.Authorization="Bearer "+r.access)})).catch((function(e){console.log(e.message)}))}))},le=r(31),de=le.a().shape({email:le.c().email().required(),password:le.c().required()}),ue=le.a().shape({email:le.c().email().required(),firstName:le.c().required().label("First Name"),lastName:le.c().required().label("Last Name"),password:le.c().min(8).required(),confirmation:le.c().oneOf([le.b("password"),null],"Passwords must match").required()}),me=le.a().shape({title:le.c().required(),description:le.c(),typeOf:le.c().required().oneOf(["OTA","IO"])}),be=r(30),pe=function(e){return{formPaper:Object(be.a)({margin:"2rem auto",width:"80%",padding:e.spacing(3),textAlign:"center",borderRadius:"1rem"},e.breakpoints.up("md"),{margin:"4rem auto",width:"40%"}),fullName:Object(be.a)({display:"flex","flex-direction":"column","justify-content":"space-between"},e.breakpoints.up("md"),{"flex-direction":"row","justify-content":"space-evenly"}),formButton:{margin:"1.5rem 0",color:"#fff","background-image":"linear-gradient(to right, rgba(46,49,146,1) 13%, rgba(27,255,255,1) 96%)",transition:"0.5s","background-size":" 200% auto","&:hover":{"background-position":"right center"},"&:disabled":{background:"#829baf",color:"#e3f2fd"}}}},he=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={serverErrors:""},a.onSubmitLoginForm=a.onSubmitLoginForm.bind(Object(j.a)(a)),a}return Object(l.a)(r,[{key:"onSubmitLoginForm",value:function(e){var t=this,r={email:e.email,password:e.password},a=this.props,n=a.history,o=a.redirectPath,s=a.authenticateUser,i=a.printFeedback;oe.post("token/",r).then((function(e){var t=e.data;oe.defaults.headers.Authorization="Bearer "+t.access,localStorage.setItem("access_token",t.access),localStorage.setItem("refresh_token",t.refresh),s(),n.push(o),i({type:"success",feedbackMsg:"You are logged in"})})).catch((function(e){console.log(e.message),e.response&&t.setState({serverErrors:Object.values(e.response.data)})}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(a.jsx)(M.a,{className:t.formPaper,elevation:3,children:Object(a.jsx)(I.d,{initialValues:{email:"",password:""},onSubmit:this.onSubmitLoginForm,validationSchema:de,children:function(r){var n=r.dirty,o=r.isValid,s=r.errors,i=r.touched;return Object(a.jsxs)(I.c,{children:[Object(a.jsx)(D.a,{align:"center",variant:"h3",children:"Login"}),Object(a.jsx)(V,{name:"email",label:"Email",type:"email",fullWidth:!0,required:!0,error:s.email&&i.email}),Object(a.jsx)(V,{name:"password",label:"Password",type:"password",fullWidth:!0,required:!0,error:s.password&&i.password}),e.state.serverErrors?e.state.serverErrors.map((function(e,t){return Object(a.jsx)(T.a,{error:!0,children:e},t)})):null,Object(a.jsx)(A.a,{fullWidth:!0,className:t.formButton,type:"submit",variant:"contained",color:"primary",disabled:!n||!o,children:"Login"}),Object(a.jsxs)(D.a,{display:"block",variant:"caption",children:["not a member?",Object(a.jsx)(Z,{linkTo:"/register",innerText:"Register"})]})]})}})})}}]),r}(n.Component),je=Object(E.a)(pe)(he),fe=["Your password can\u2019t be too similar to your other personal information.","Your password must contain at least 8 characters.","Your password can\u2019t be a commonly used password. ","Your password can\u2019t be entirely numeric."],ge=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={serverErrors:""},a.onSubmitRegisterForm=a.onSubmitRegisterForm.bind(Object(j.a)(a)),a}return Object(l.a)(r,[{key:"onSubmitRegisterForm",value:function(e){var t=this,r={email:e.email,firstName:e.firstName,lastName:e.lastName,password:e.password},a=this.props,n=a.history,o=a.redirectPath,s=a.authenticateUser,i=a.printFeedback;oe.post("user/create/",r).then((function(e){var t=e.data.tokens;oe.defaults.headers.Authorization="Bearer "+t.access,localStorage.setItem("access_token",t.access),localStorage.setItem("refresh_token",t.refresh),s(),n.push(o),i({type:"success",feedbackMsg:"You are registered and logged in"})})).catch((function(e){console.log(e.message),e.response&&t.setState({serverErrors:Object.values(e.response.data)})}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(a.jsx)(M.a,{className:t.formPaper,elevation:3,children:Object(a.jsx)(I.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmation:""},onSubmit:this.onSubmitRegisterForm,validationSchema:ue,children:function(r){var n=r.dirty,o=r.isValid,s=r.errors,i=r.touched;return Object(a.jsxs)(I.c,{children:[Object(a.jsx)(D.a,{align:"center",variant:"h3",children:"Register"}),Object(a.jsxs)("div",{className:t.fullName,children:[Object(a.jsx)(V,{fullWidth:!0,name:"firstName",label:"First Name",type:"text",required:!0,error:s.firstName&&i.firstName}),Object(a.jsx)(V,{fullWidth:!0,name:"lastName",label:"Last Name",type:"text",required:!0,error:s.lastName&&i.lastName})]}),Object(a.jsx)(V,{name:"email",label:"Email",type:"email",fullWidth:!0,required:!0,error:s.email&&i.email}),Object(a.jsx)(V,{name:"password",label:"Password",type:"password",fullWidth:!0,required:!0,error:s.password&&i.password}),fe.map((function(e,t){return Object(a.jsx)(T.a,{children:e},t)})),Object(a.jsx)(V,{name:"confirmation",label:"Confirm Password",type:"password",fullWidth:!0,required:!0,error:s.confirmation&&i.confirmation}),Object(a.jsx)(T.a,{children:"Enter the same password as before, for verification."}),e.state.serverErrors?e.state.serverErrors.map((function(e,t){return Object(a.jsx)(T.a,{error:!0,children:e},t)})):null,Object(a.jsx)(A.a,{fullWidth:!0,className:t.formButton,type:"submit",variant:"contained",color:"primary",disabled:!n||!o,children:"Register"}),Object(a.jsxs)(D.a,{display:"block",variant:"caption",children:["already have an account?",Object(a.jsx)(Z,{linkTo:"/login",innerText:"Log In"})]})]})}})})}}]),r}(n.Component),Oe=Object(E.a)(pe)(ge),ve=r(322),xe=r(317),ke=r(325),ye=r(315),Re=r(316),we=r(175),Se=r.n(we),Fe=function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},gridContainer:Object(be.a)({width:"100%",display:"grid","grid-template-columns":"repeat(1, 1fr)","grid-template-rows":"auto",gap:"1rem","justify-content":"center","grid-template-areas":'\n    "description"\n    "buttons"\n    "copy_btn";'},e.breakpoints.up("md"),{"grid-template-columns":"3fr, 1fr","grid-template-areas":'\n    "description buttons"\n    "copy_btn copy_btn"'}),gridItemA:{width:"100%","grid-area":"description"},gridItemB:{width:"100%","grid-area":"buttons"},gridItemC:{"grid-area":"copy_btn"},enterBtn:{"background-image":"linear-gradient(to right, rgba(46,49,146,1) 13%, rgba(27,255,255,1) 96%)",transition:"0.5s","background-size":" 200% auto","&:hover":{"background-position":"right center"}}}},_e=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).copyRoomUrl=function(e){document.getElementById("room-data-base".concat(e)).select(),document.execCommand("copy"),a.props.printFeedback({type:"success",feedbackMsg:"Link copied"})},a.renderRoomType=a.renderRoomType.bind(Object(j.a)(a)),a}return Object(l.a)(r,[{key:"renderRoomType",value:function(e){switch(e){case"OTA":return"Open to All";case"IO":return"Invite only";default:return"unrecognized room type"}}},{key:"render",value:function(){var e=this,t=this.props,r=t.apiData,n=r.id,o=r.title,s=r.description,i=r.typeOf,c=r.createdOn,l=r.roomId,d=r.user,u=t.classes,m=t.deleteRoom,b=t.enterRoom,p=this.context.userId;return Object(a.jsxs)(ke.a,{children:[Object(a.jsxs)(ye.a,{expandIcon:Object(a.jsx)(Se.a,{}),children:[Object(a.jsx)(D.a,{className:u.heading,children:o}),Object(a.jsx)(D.a,{className:u.secondaryHeading,children:this.renderRoomType(i)})]}),Object(a.jsx)(Re.a,{children:Object(a.jsxs)("div",{className:u.gridContainer,children:[Object(a.jsxs)("div",{className:u.gridItemA,children:[Object(a.jsx)(D.a,{style:{fontWeight:"bolder"},gutterBottom:!0,variant:"h5",children:o}),Object(a.jsxs)(D.a,{variant:"caption",style:{color:"gray"},children:["created on ",c]}),Object(a.jsx)(D.a,{variant:"body1",children:s})]}),Object(a.jsx)("div",{className:u.gridItemB,children:Object(a.jsxs)(xe.a,{fullWidth:!0,size:"small",orientation:"vertical",variant:"contained",children:[p===d?Object(a.jsx)(A.a,{style:{transition:"0.5s"},color:"secondary",onClick:function(){return m(n)},children:"Delete Room"}):null,"IO"!==i||p===d?Object(a.jsx)(A.a,{className:u.enterBtn,onClick:function(){return b(l)},color:"primary",children:"Enter Room"}):null]})}),Object(a.jsx)("div",{className:u.gridItemC,children:p===d&&"IO"===i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.a,{variant:"outlined",fullWidth:!0,size:"small",id:"room-data-base".concat(n),defaultValue:window.location.origin+"/video/".concat(l)}),Object(a.jsx)(A.a,{style:{transition:"0.5s"},fullWidth:!0,color:"secondary",size:"small",onClick:function(){return e.copyRoomUrl(n)},children:"Copy room link"})]}):null})]})})]})}}]),r}(n.Component);_e.contextType=$;var Ne=Object(E.a)(Fe)(_e),Ce=function(e){return{formPaper:Object(be.a)({padding:"2rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%"},e.breakpoints.up("md"),{width:"40%"}),createRoomBtn:{margin:"1rem 0",color:"#fff","background-image":"linear-gradient(to right, rgba(46,49,146,1) 13%, rgba(27,255,255,1) 96%)",transition:"0.5s","background-size":" 200% auto","&:hover":{"background-position":"right center"},"&:disabled":{background:"#829baf",color:"#e3f2fd"}}}},Ie=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).roomTypes=[{value:"OTA",label:"Open to all"},{value:"IO",label:"Invite only"}],a}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t={user:this.context.userId,title:"",description:"",typeOf:"OTA"},r=this.props,n=r.classes,o=r.onRoomFormSubmit;return Object(a.jsx)(M.a,{className:n.formPaper,elevation:3,children:Object(a.jsx)(I.d,{initialValues:t,onSubmit:o,validationSchema:me,children:function(t){var r=t.isValid,o=t.dirty,s=t.errors,i=t.touched;return Object(a.jsxs)(I.c,{children:[Object(a.jsx)(D.a,{align:"center",variant:"h4",children:"New Room"}),Object(a.jsx)(V,{name:"title",label:"Title",type:"text",required:!0,fullWidth:!0,error:s.title}),Object(a.jsx)(V,{name:"description",label:"Event description",type:"text",fullWidth:!0,error:s.description,multiline:!0,rows:4}),Object(a.jsx)(J,{name:"typeOf",label:"Room type",items:e.roomTypes,error:s.typeOf||i.typeOf,required:!0}),Object(a.jsx)(A.a,{fullWidth:!0,disabled:!o||!r,className:n.createRoomBtn,variant:"contained",type:"submit",children:"Create Room"})]})}})})}}]),r}(n.Component);Ie.contextType=$;var Te=Object(E.a)(Ce)(Ie),Ae=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).onRoomFormSubmit=function(){var e=Object(h.a)(p.a.mark((function e(t,r){var a,o,s,i,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.resetForm,o={user:t.user,title:t.title,description:t.description,typeOf:t.typeOf},s=n.props,i=s.printFeedback,c=s.closeRoomForm,e.next=5,ce();case 5:return e.next=7,oe.post("rooms/",o).then((function(){a(),c(),i({type:"success",feedbackMsg:"Room created"}),n.props.loadRooms()})).catch((function(e){if(e.response){var t=e.response.status;401!==t&&400!==t||(c(),i({type:"error",feedbackMsg:"You are not logged in."}))}console.log(e.message)}));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),n.deleteRoom=function(e){var t=n.props.printFeedback;oe.delete("rooms/"+e).then((function(e){n.props.loadRooms(),t({type:"success",feedbackMsg:"Room deleted"})})).catch((function(e){return console.log(e.message)}))},n.enterRoom=function(e){n.props.history.push("/video/".concat(e))},n.render=function(){var e=n.props,t=e.closeRoomForm,r=e.isRoomFormOpen,s=e.roomListData,i=e.loadingRooms,c=e.printFeedback,l=n.context,d=l.isUserLoggedIn,u=l.isDataArrived;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ve.a,{disableAutoFocus:!0,open:r,onClose:t,children:Object(a.jsx)(Te,{onRoomFormSubmit:n.onRoomFormSubmit})}),!d&&u?Object(a.jsx)("div",{style:{textAlign:"center",margin:"1rem 0"},children:Object(a.jsxs)(D.a,{children:[" Please ",Object(a.jsx)(Z,{linkTo:"/login",innerText:"Login"})," Or ",Object(a.jsx)(Z,{linkTo:"/register",innerText:"Register"})," to create or enter room"]})}):null,Object(a.jsx)("div",{style:{marginTop:"1rem"},children:i?Object(a.jsx)(K,{}):s.length>0?s.map((function(e){return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)(Ne,{deleteRoom:n.deleteRoom,enterRoom:n.enterRoom,apiData:e,printFeedback:c})},e.id)})):Object(a.jsx)(B.a,{severity:"info",children:"No Rooms Yet!!"})})]})},n.deleteRoom=n.deleteRoom.bind(Object(j.a)(n)),n.enterRoom=n.enterRoom.bind(Object(j.a)(n)),n.onRoomFormSubmit=n.onRoomFormSubmit.bind(Object(j.a)(n)),n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.props.loadRooms()}}]),r}(n.Component);Ae.contextType=$;var Me=Ae;var De=function(e){var t=e.lobbyProps,r=Object(v.a)(e,["lobbyProps"]);return Object(a.jsx)(g.b,Object(m.a)(Object(m.a)({},r),{},{render:function(e){return Object(a.jsx)(Me,Object(m.a)(Object(m.a)({},t),e))}}))},Ee=r(318),Le=r(319),Be=r(263),Ue=r(179),Pe=r.n(Ue),Ve=r(185),ze=r(186),We=r(176),qe=r.n(We),He=r(178),Ye=r.n(He),Je=r(323),Ge=r(141),Xe=function(e){return{root:{flexGrow:1},appBar:{background:"linear-gradient(10deg, rgba(46,49,146,1) 13%, rgba(27,255,255,1) 96%)"},pageTitle:{marginRight:e.spacing(2)},search:Object(be.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ge.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ge.fade)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(be.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),menuButton:{marginRight:e.spacing(2)},username:Object(be.a)({marginRight:e.spacing(2),marginLeft:e.spacing(1),display:"none"},e.breakpoints.up("sm"),{display:"block"})}},Ke=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).changePageTitle=function(){var e,t=a.props.location.pathname,r=S,n=F,o=_;switch(t){case k:e=r;break;case y:e=n;break;case R:e=o;break;default:e="404"}return t.match("/video/")&&(e="Room"),a.setState({pageTitle:e}),e},a.handleMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.menuAction=function(e){var t=a.props,r=t.history,n=t.authenticateUser,o=t.printFeedback,s=e.currentTarget.dataset.menu,i=k,c=y,l=R;if(s&&r)switch(s){case S:r.push(i);break;case F:r.push(c);break;case _:r.push(l);break;case N:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),n(),o({type:"success",feedbackMsg:"Logged out successfully"}),r.push(i)}a.setState({anchorEl:null})},a.showComponents=function(){a.changePageTitle(),"/"!==a.props.location.pathname?a.setState({isComponentShown:!1}):a.setState({isComponentShown:!0})},a.componentDidMount=function(){a.showComponents()},a.state={anchorEl:null,pageTitle:a.changePageTitle(),isComponentShown:!1},a}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&(this.showComponents(),this.changePageTitle())}},{key:"render",value:function(){var e=this,t=this.props,r=t.classes,n=t.openRoomForm,o=t.search,s=t.handleSearchChanges,i=this.state,c=i.anchorEl,l=i.pageTitle,d=i.isComponentShown,u=this.context,m=u.userFullName,b=u.isUserLoggedIn,p=b?[S,N]:[S,F,_];return Object(a.jsx)("div",{className:r.root,children:Object(a.jsx)(Ee.a,{className:r.appBar,position:"static",children:Object(a.jsxs)(Le.a,{children:[Object(a.jsx)(D.a,{className:r.pageTitle,variant:"h6",children:l}),d?Object(a.jsxs)("div",{className:r.search,children:[Object(a.jsx)("div",{className:r.searchIcon,children:Object(a.jsx)(qe.a,{})}),Object(a.jsx)(ze.a,{value:o,onChange:s,placeholder:"Search room title\u2026",classes:{root:r.inputRoot,input:r.inputInput}})]}):null,Object(a.jsx)("div",{className:r.root}),d?Object(a.jsx)(Je.a,{title:"Create Room",children:Object(a.jsx)(Be.a,{onClick:n,color:"inherit",children:Object(a.jsx)(Ye.a,{})})}):null,Object(a.jsx)(D.a,{className:r.username,variant:"subtitle1",children:m&&""!==m?m:"Anonymous"}),Object(a.jsx)(Je.a,{title:"Menu",children:Object(a.jsx)(Be.a,{onClick:this.handleMenuOpen,edge:"start",color:"inherit",children:Object(a.jsx)(Pe.a,{})})}),Object(a.jsx)(Ve.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:Boolean(c),onClose:this.menuAction,children:p.map((function(t,r){return Object(a.jsx)(z.a,{"data-menu":t,onClick:e.menuAction,children:t},r)}))})]})})})}}]),r}(n.Component);Ke.contextType=$;var Qe=Object(g.g)(Object(E.a)(Xe)(Ke)),Ze=r(143),$e=r(142),et=r.n($e),tt=r(320),rt=r(183),at=r.n(rt),nt=r(182),ot=r.n(nt),st=r(181),it=r.n(st),ct=r(180),lt=r.n(ct),dt=r(184),ut=r.n(dt),mt=function(e){return{floatingButtons:{zIndex:1,position:"fixed",bottom:0,left:"50%",transform:"translate(-50%, -50%)"},floatingButton:{margin:"0 0.5rem"},videoGrid:Object(be.a)({marginTop:"1rem",marginBottom:"15rem",width:"100%",display:"grid","grid-template-columns":"repeat(2, 1fr)","grid-template-rows":"auto",gap:"0.3rem"},e.breakpoints.up("md"),{marginBottom:"20rem","grid-template-columns":"repeat(4, 1fr)"}),remoteVideoDiv:{overflow:"hidden",borderRadius:"0.5rem",background:"gray",position:"relative"},localVideoDiv:Object(be.a)({zIndex:2,borderRadius:"0.5rem",position:"fixed",bottom:40,left:"50%",transform:"translate(-50%, -50%)",width:"150px",height:"100px",background:"black"},e.breakpoints.up("md"),{bottom:30,width:"200px",height:"150px"}),video:{borderRadius:"0.5rem",objectFit:"cover",width:"100%",height:"100%"},userDetail:{textAlign:"center",width:"100%",borderRadius:"0.5rem",transition:"0.3s",position:"absolute",background:"rgba(177, 202, 248, 0.459)",padding:"0.3rem 1rem",bottom:-20,left:"50%",transform:"translate(-50%, -50%)"},alert:{marginTop:"1rem"}}},bt=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).mouseHoverIn=function(){a.setState({isMouseHovering:!0})},a.mouseHoverOut=function(){a.setState({isMouseHovering:!1})},a.componentDidMount=function(){var e=a.props,t=e.peer,r=e.user_id;t&&r&&t.on("stream",(function(e){document.getElementById("remote-".concat(r)).srcObject=e}))},a.state={isMouseHovering:!1},a}return Object(l.a)(r,[{key:"render",value:function(){var e,t,r=this.props,n=r.user_full_name,o=r.id,s=r.classes,i=r.isLocalUser;return i?e=s.localVideoDiv:(e=s.remoteVideoDiv,t=this.state.isMouseHovering?{opacity:1}:{opacity:0}),Object(a.jsxs)("div",{onMouseOver:this.mouseHoverIn,onMouseOut:this.mouseHoverOut,className:e,children:[Object(a.jsx)("video",{className:s.video,id:o,autoPlay:!0,muted:i}),i?null:Object(a.jsx)("div",{style:t,className:s.userDetail,children:Object(a.jsx)(D.a,{variant:"overline",children:n||"Anonymous"})})]})}}]),r}(n.Component),pt=Object(E.a)(mt)(bt),ht=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).muteVideo=function(){var e=document.getElementById("localVideo").srcObject;e.getVideoTracks()[0]&&(e.getVideoTracks()[0].enabled=!e.getVideoTracks()[0].enabled,a.setState({isVideoMuted:!e.getVideoTracks()[0].enabled}))},a.muteAudio=function(){var e=document.getElementById("localVideo").srcObject;e.getAudioTracks()[0]&&(e.getAudioTracks()[0].enabled=!e.getAudioTracks()[0].enabled,a.setState({isAudioMuted:!e.getAudioTracks()[0].enabled}))},a.leaveRoom=function(){a.props.history.push(k)},a.CreatePeer=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new et.a({initiator:!0,trickle:!1,stream:r});return n.on("signal",(function(r){a.state.websocket.send(JSON.stringify({type:"sending_offer",from:e,to:t,offer:r}))})),n},a.addPeer=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=new et.a({initiator:!1,trickle:!1,stream:n});return o.signal(r),o.on("signal",(function(r){a.state.websocket.send(JSON.stringify({type:"sending_answer",from:e,to:t,answer:r}))})),o},a.sendSignalsToAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[];a.state.usersConnected.forEach((function(n){if(n.user_id!==e){var o=a.CreatePeer(e,n.user_id,t);r.push({user_id:n.user_id,user_full_name:n.user_full_name,peer:o})}})),a.setState({peersEstablished:r})},a.componentDidMount=function(){var e=a.props,t=e.printFeedback,r=e.match.params;if(!navigator.mediaDevices)return a.setState({isVideoRoomAccessible:!1}),void t({type:"error",feedbackMsg:"this video room is not accessible because the site is not running on secure protocol, i.e. 'HTTPS'"});var n=a.context,o=n.userId,s=n.userFullName,i=new WebSocket(("https:"===window.location.protocol?"wss://":"ws://")+window.location.host+"/video/"+"".concat(r.roomId,"/"));a.setState({websocket:i}),i.onopen=function(){a.setState({contentLoading:!0}),i.send(JSON.stringify({type:"new_user_joined",from:o,user_full_name:s,token:localStorage.getItem("access_token")}))},i.onmessage=function(e){var r=JSON.parse(e.data);switch(r.type){case"new_user_joined":if(a.setState({usersConnected:r.users_connected}),o===r.from&&navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){a.setState({stream:e}),document.getElementById("localVideo").srcObject=e,a.sendSignalsToAll(o,e)})).catch((function(e){a.setState({isVideoRoomAccessible:!1}),t({type:"error",feedbackMsg:"you need to enable media devices inorder to use access this room"}),console.log(e.message)})),o!==r.from){var n=a.state.usersConnected.find((function(e){return e.user_id===r.from}));t({type:"success",feedbackMsg:"".concat(n.user_full_name," joined this room")}),console.log("User No. ".concat(r.from," joined this room"))}break;case"sending_offer":if(r.to===o){console.log("offer_received");var s=a.addPeer(o,r.from,r.offer,a.state.stream);a.setState((function(e){var t=e.peersEstablished,n=a.state.usersConnected.find((function(e){return e.user_id===r.from})),o=[].concat(Object(Ze.a)(t),[{user_id:r.from,user_full_name:n.user_full_name,peer:s}]),i=a.state.peersEstablished.find((function(e){return e.user_id===r.from}));if(i){var c=a.state.peersEstablished.filter((function(e){return i.user_id!==e.user_id}));o=[].concat(Object(Ze.a)(c),[{user_id:r.from,user_full_name:n.user_full_name,peer:s}])}return{peersEstablished:o}}))}break;case"sending_answer":if(r.to===o)console.log("answer_received"),a.state.peersEstablished.find((function(e){return e.user_id===r.from})).peer.signal(r.answer);break;case"disconnected":if(r.from!==o){var i=a.state.usersConnected.find((function(e){return e.user_id===r.from}));if(i){console.log("User No. ".concat(r.from," disconnected")),t({type:"error",feedbackMsg:"".concat(i.user_full_name," left")});var c=a.state.peersEstablished.find((function(e){return e.user_id===r.from}));if(c){c.peer.destroy();var l=a.state.peersEstablished.filter((function(e){return c.user_id!==e.user_id}));a.setState({peersEstablished:l})}}}}}},a.componentWillUnmount=function(){var e=a.state,t=e.websocket,r=e.peersEstablished,n=e.stream;t&&a.state.websocket.close(),r.forEach((function(e){e.peer.destroy()})),n&&n.getTracks().forEach((function(e){e.stop()})),a.setState({websocket:null,stream:null,usersConnected:[],peersEstablished:[],isVideoMuted:!0,isAudioMuted:!0})},a.state={websocket:null,stream:null,usersConnected:[],peersEstablished:[],isVideoMuted:!1,isAudioMuted:!1,contentLoading:!0,isVideoRoomAccessible:!0},a}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.isVideoRoomAccessible,r=e.isVideoMuted,n=e.isAudioMuted,o=e.peersEstablished,s=this.context.userFullName,i=this.props.classes;return Object(a.jsx)("div",{children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:i.floatingButtons,children:[Object(a.jsx)(Je.a,{title:"Video ON/OFF",children:Object(a.jsx)(tt.a,{className:i.floatingButton,onClick:this.muteVideo,color:"inherit",children:r?Object(a.jsx)(lt.a,{}):Object(a.jsx)(it.a,{})})}),Object(a.jsx)(Je.a,{title:"Audio ON/OFF",children:Object(a.jsx)(tt.a,{className:i.floatingButton,onClick:this.muteAudio,color:"inherit",children:n?Object(a.jsx)(ot.a,{}):Object(a.jsx)(at.a,{})})}),Object(a.jsx)(Je.a,{title:"Leave Room",children:Object(a.jsx)(tt.a,{onClick:this.leaveRoom,className:i.floatingButton,color:"secondary",children:Object(a.jsx)(ut.a,{})})})]}),Object(a.jsx)(pt,{isLocalUser:!0,id:"localVideo",user_full_name:s}),Object(a.jsx)("div",{className:i.videoGrid,children:o.length>0?o.map((function(e,t){return Object(a.jsx)(pt,{id:"remote-".concat(e.user_id),user_id:e.user_id,user_full_name:e.user_full_name,peer:e.peer},t)})):Object(a.jsx)(B.a,{severity:"info",children:"No one joined yet!!"})})]}):Object(a.jsx)(B.a,{className:i.alert,severity:"error",children:"This room is not accessible. Please make sure you enabled your media devices"})})}}]),r}(n.Component);ht.contextType=$;var jt=Object(E.a)(mt)(ht);var ft=function(e){var t=e.userData,r=e.printFeedback,n=Object(v.a)(e,["userData","printFeedback"]),o=t.isUserLoggedIn,s=t.isDataArrived;return Object(a.jsx)(g.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return s&&!o?Object(a.jsx)(g.a,{to:y,exact:!0}):s&&o?Object(a.jsx)(jt,Object(m.a)({userData:t,printFeedback:r},e)):Object(a.jsx)(K,{})}}))},gt=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).loadRooms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.setState({loadingRooms:!0}),se(oe,e).then((function(e){var t=localStorage.getItem("access_token");oe.defaults.headers.Authorization="Bearer "+t,a.setState((function(){return{roomListData:e.data,loadingRooms:!1}}))})).catch((function(e){a.setState((function(){return{loadingRooms:!1}})),a.printFeedback({type:"error",feedbackMsg:e.message}),console.log(e.message)}))},a.handleSearchChanges=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({search:t.target.value});case 2:return e.next=4,a.loadRooms(a.state.search);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.printFeedback=function(e){var t=e.type,r=e.feedbackMsg;switch(t){case"success":a.setState({severity:"success",feedbackMsg:r,isFeedbackOpen:!0});break;case"error":a.setState({severity:"error",feedbackMsg:r,isFeedbackOpen:!0})}},a.closeFeedback=function(e,t){"clickaway"!==t&&a.setState({isFeedbackOpen:!1})},a.authenticateUser=function(){var e=localStorage.getItem("refresh_token");ie(oe,e).then((function(t){if(200===t.status){var r=Object(O.a)(e).user_id,n=Object(O.a)(e).full_name;a.setState({userData:{isDataArrived:!0,userId:r,userFullName:n,isUserLoggedIn:!0}}),ce()}})).catch((function(e){console.log(e.message),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),a.setState({userData:{isDataArrived:!0,userId:null,userFullName:"",isUserLoggedIn:!1}})}))},a.componentDidMount=function(){a.authenticateUser()},a.state={userData:{isDataArrived:!1,userId:null,userFullName:"",isUserLoggedIn:!1},isRoomFormOpen:!1,severity:"",feedbackMsg:"",isFeedbackOpen:!1,roomListData:[],loadingRooms:!0,search:""},a.loadRooms=a.loadRooms.bind(Object(j.a)(a)),a.handleSearchChanges=a.handleSearchChanges.bind(Object(j.a)(a)),a.closeRoomForm=a.closeRoomForm.bind(Object(j.a)(a)),a.openRoomForm=a.openRoomForm.bind(Object(j.a)(a)),a.printFeedback=a.printFeedback.bind(Object(j.a)(a)),a.closeFeedback=a.closeFeedback.bind(Object(j.a)(a)),a.authenticateUser=a.authenticateUser.bind(Object(j.a)(a)),a}return Object(l.a)(r,[{key:"closeRoomForm",value:function(){this.setState({isRoomFormOpen:!1})}},{key:"openRoomForm",value:function(){this.setState({isRoomFormOpen:!0})}},{key:"render",value:function(){var e=k,t=y,r=R,n=w,o=this.state,s=o.userData,i=o.isRoomFormOpen,c=o.roomListData,l=o.loadingRooms,d=o.search,u=o.severity,b=o.feedbackMsg,p=o.isFeedbackOpen,h={isUserLoggedIn:s.isUserLoggedIn,printFeedback:this.printFeedback,authenticateUser:this.authenticateUser},j={userData:s,loadingRooms:l,roomListData:c,loadRooms:this.loadRooms,printFeedback:this.printFeedback,closeRoomForm:this.closeRoomForm,isRoomFormOpen:i},O={search:d,handleSearchChanges:this.handleSearchChanges,authenticateUser:this.authenticateUser,openRoomForm:this.openRoomForm,printFeedback:this.printFeedback};return s.isDataArrived?Object(a.jsx)(ee,{userData:s,children:Object(a.jsxs)(f.a,{basename:"/app",children:[Object(a.jsx)(Qe,Object(m.a)({},O)),Object(a.jsx)(U,{closeFeedback:this.closeFeedback,isFeedbackOpen:p,severity:u,feedbackMsg:b}),Object(a.jsxs)(g.d,{children:[Object(a.jsx)(De,{exact:!0,path:e,lobbyProps:j}),Object(a.jsx)(C,{exact:!0,path:t,component:je,authenticationProps:h}),Object(a.jsx)(C,{exact:!0,path:r,component:Oe,authenticationProps:h}),Object(a.jsx)(ft,{exact:!0,path:n,userData:s,printFeedback:this.printFeedback})]})]})}):Object(a.jsx)(K,{})}}]),r}(n.Component),Ot=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(a.jsx)(X.a,{children:Object(a.jsx)(gt,{})})}}]),r}(o.a.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(Ot,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.6a32eae0.chunk.js.map