(this.webpackJsonptwitter_clone=this.webpackJsonptwitter_clone||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),a=n.n(c),i=n(28),s=n.n(i),u=n(22),o=n(9),j=n(18),l=n(5),b=n(8),d=n.n(b),p=n(15),O=n(19);n(36),n(44),n(45);O.a.initializeApp({apiKey:"AIzaSyD9QemC7kVCuu4iYb9M7Gis3E2nYWvsaL4",authDomain:"twitter-clone-55fc5.firebaseapp.com",projectId:"twitter-clone-55fc5",storageBucket:"twitter-clone-55fc5.appspot.com",messagingSenderId:"94857826083",appId:"1:94857826083:web:0ad3622c63f97870334696"});var h=O.a.auth(),f=O.a,x=O.a.firestore(),m=O.a.storage(),v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),u=s[0],j=s[1],l=Object(c.useState)(!0),b=Object(o.a)(l,2),O=b[0],x=b[1],m=Object(c.useState)(""),v=Object(o.a)(m,2),g=v[0],w=v[1],y=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?a(r):"password"===n&&j(r)},k=function(){var e=Object(p.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new f.auth.GoogleAuthProvider:"github"===n&&(r=new f.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:k,children:[Object(r.jsx)("input",{name:"email",type:"email",placeholder:"email",required:!0,value:n,onChange:y}),Object(r.jsx)("input",{name:"password",type:"password",placeholder:"password",required:!0,value:u,onChange:y}),Object(r.jsx)("input",{type:"submit",value:O?"Create Account":"Log In"}),g]}),Object(r.jsx)("span",{onClick:function(){return x((function(e){return!e}))},children:O?"Log In":"Create Account"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{name:"google",onClick:S,children:"continue with Google"}),Object(r.jsx)("button",{name:"github",onClick:S,children:"continue with github"})]})]})},g=function(e){var t=e.tweetObj,n=e.isOwner,a=Object(c.useState)(!1),i=Object(o.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(t.text),l=Object(o.a)(j,2),b=l[0],O=l[1],h=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure?")){e.next=6;break}return e.next=4,x.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,m.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("tweets/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){u((function(e){return!e}))};return Object(r.jsx)("div",{children:s?Object(r.jsx)(r.Fragment,{children:n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:f,children:[Object(r.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"edit",value:b,required:!0}),Object(r.jsx)("input",{type:"submit",value:"edit tweet"})]}),Object(r.jsx)("button",{onClick:v,children:"cancel"})]})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(r.jsx)("img",{src:t.attachmentUrl,alt:"tweetobj",width:"50px",height:"50px"}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:h,children:"delete"}),Object(r.jsx)("button",{onClick:v,children:"edit"})]})]})})},w=n(47),y=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(o.a)(n,2),i=a[0],s=a[1],j=Object(c.useState)([]),l=Object(o.a)(j,2),b=l[0],O=l[1],h=Object(c.useState)(""),f=Object(o.a)(h,2),v=f[0],y=f[1];Object(c.useEffect)((function(){x.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));O(t)}))}),[]);var k=function(){var e=Object(p.a)(d.a.mark((function e(n){var r,c,a,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",!i){e.next=16;break}if(!v){e.next=11;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=7,c.putString(v,"data_url");case 7:return a=e.sent,e.next=10,a.ref.getDownloadURL();case 10:r=e.sent;case 11:return u={text:i,createdAt:(new Date).toString(),creatorId:t.uid,attachmentUrl:r},e.next=14,x.collection("tweets").add(u);case 14:s(""),y("");case 16:case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:k,children:[Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target.value;s(t)},placeholder:"what's on your mind?",maxLength:120}),Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(e){var t=e.target.result;y(t)}}}),Object(r.jsx)("input",{type:"submit",value:"submit"}),v&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:v,width:"50px",alt:"attachment",height:"50px"}),Object(r.jsx)("button",{onClick:function(){y(null)},children:"clear"})]})]}),Object(r.jsx)("div",{children:b.map((function(e){return Object(r.jsx)(g,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},k=function(e){var t=e.userObj,n=e.refreshUser,a=Object(l.g)(),i=Object(c.useState)(t.displayName),s=Object(o.a)(i,2),u=s[0],j=s[1],b=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("tweets").orderBy("createdAt").where("creatorId","==",t.uid).get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:O,children:[Object(r.jsx)("input",{type:"text",placeholder:"new display name",onChange:function(e){var t=e.target.value;j(t)},value:u}),Object(r.jsx)("input",{type:"submit",value:"update profile"})]}),Object(r.jsx)("button",{onClick:function(){h.signOut(),n(),a.push("/")},children:"Log Out"})]})},S=function(e){var t=e.userObj;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsxs)(j.b,{to:"/profile",children:[t.displayName,"'s Profile"]})})]})})},C=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(r.jsxs)(j.a,{children:[n&&Object(r.jsx)(S,{userObj:c}),Object(r.jsx)(l.d,{children:n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",children:Object(r.jsx)(y,{userObj:c})}),Object(r.jsx)(l.b,{exact:!0,path:"/profile",children:Object(r.jsx)(k,{userObj:c,refreshUser:t})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",children:Object(r.jsx)(v,{})}),Object(r.jsx)(l.a,{from:"*",to:"/"})]})})]})};var I=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(o.a)(i,2),j=s[0],l=s[1];return Object(c.useEffect)((function(){h.onAuthStateChanged((function(e){l(e||null),a(!0)}))}),[]),Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)(C,{refreshUser:function(){l(Object(u.a)({},h.currentUser))},isLoggedIn:Boolean(j),userObj:j}):"initializing..."})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.11fd3cc0.chunk.js.map