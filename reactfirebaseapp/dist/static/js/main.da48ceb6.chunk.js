(this.webpackJsonpreactfirebaseapp=this.webpackJsonpreactfirebaseapp||[]).push([[0],{213:function(e,t,a){e.exports=a(404)},218:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(210),i=a.n(c),l=(a(218),a(7)),o=a(4),s=a(9),u=a(37),m=a.n(u);var d=Object(s.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn-floating pink lighten-1 center"},e.profile.initials)))}));var h=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Log In")))};var p=Object(s.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(d,{profile:a}):r.a.createElement(h,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),f=a(25),E=a(26),b=a(29),g=a(28);var v=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Notifications"))},N=a(89),j=a.n(N);var O=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",{className:"red-text darken-4"},t.content),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate()).calendar())))};var y=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(O,{project:e}))})))},C=a(17),S=a(24),w=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(y,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-1"},r.a.createElement(v,null)))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(n.Component),F=Object(C.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(S.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]))(w);var I=Object(C.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(S.firestoreConnect)([{collection:"projects"}]))((function(e){e.match.params.id;var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,j()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",null,"Loading project..."):r.a.createElement(o.a,{to:"/signin"})})),R=a(27),k=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"LogIn"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),x=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){e(function(e){return function(t,a,n){n.getFirebase;m.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){return t({type:"LOGIN_ERROR",err:e})}))}}(t))}}}))(k),P=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SignUp"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,"SignUp failed"):null))))}}]),a}(n.Component),U=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(P),A=a(18),L=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(E.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(n.Component),T=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(A.a)(Object(A.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(L);var _=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:F}),r.a.createElement(o.b,{path:"/project/:id",component:I}),r.a.createElement(o.b,{path:"/signin",component:x}),r.a.createElement(o.b,{path:"/signup",component:U}),r.a.createElement(o.b,{path:"/create",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={authError:null};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),Object(A.a)(Object(A.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(A.a)(Object(A.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(A.a)(Object(A.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup failed"),Object(A.a)(Object(A.a)({},e),{},{authError:t.err.message});default:return e}},z={projects:[{id:1,title:"The Croods 3",content:"The whole world is about to change once again. Once again the Croods set out on an adventurous journey!!! Fun, adventure and stupidity! The Croods againgst the Mother Earth!!!"},{id:2,title:"Ferdinand II",content:"Ferdinad and his friends set out on a new adventure! Fun, adventure and romance begins!!! Will Ferdinand finally find his true love???"},{id:3,title:"How to Train Your Dragon 4",content:"Tothless and Hiccup fly out once again on a flying adventure!!! Love, friendship and........Dragonssss!!!"},{id:4,title:"Ratatouille III",content:"Chef Remy cooks another delicious adventure of flavours, taste and adventure!!! Spices of thrill adventure and fun and many many many more undiscovered savours!!!"},{id:5,title:"Cars 4",content:"Lightning is back on tracks!!! The heart-throbbing laps starts once again!!! Once a rookie, once a legend!!! Days bygone!!! Now the rookie is back to gobsmack everyone!!!"}]};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;default:return e}},B=a(58),M=Object(C.c)({auth:D,project:J,firestore:B.firestoreReducer,firebase:S.firebaseReducer}),W=a(212);a(399),a(402);m.a.initializeApp({apiKey:"AIzaSyA3GVL4mcbSsNeBOvwdr0iiwE5QmH1x9dc",authDomain:"silvenleaf-reactfirebaseapp.firebaseapp.com",databaseURL:"https://silvenleaf-reactfirebaseapp.firebaseio.com",projectId:"silvenleaf-reactfirebaseapp",storageBucket:"silvenleaf-reactfirebaseapp.appspot.com",messagingSenderId:"228804134327",appId:"1:228804134327:web:e7c754ed24960721f05432",measurementId:"G-TMJ3JFRM8N"});var H=m.a,K=Object(C.e)(M,Object(C.d)(Object(C.a)(W.a.withExtraArgument({getFirebase:S.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(m.a,H),Object(S.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:K},r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.da48ceb6.chunk.js.map