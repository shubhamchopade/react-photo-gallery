(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),o=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},s=a(8),u=a.n(s),m=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyC-FH21Ns99TTqgvxogBTJq3FKqC47paSQ",authDomain:"photo-gallery-37e07.firebaseapp.com",databaseURL:"https://photo-gallery-37e07.firebaseio.com",projectId:"photo-gallery-37e07",storageBucket:"photo-gallery-37e07.appspot.com",messagingSenderId:"740102157557",appId:"1:740102157557:web:f9d61dda9bb6454d7041bc",measurementId:"G-N41KNV1W7Q"});var p=d.storage(),f=d.firestore(),g=d.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],d=o[1],b=Object(n.useState)(null),v=Object(i.a)(b,2),E=v[0],j=v[1];return Object(n.useEffect)((function(){var t=p.ref(e.name),a=f.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(s)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:E,error:s}},v=a(3),E=function(e){var t=e.file,a=e.setFile,c=b(t),l=c.url,i=c.progress;return console.log(i,l),Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(v.a.div,{initial:{width:0},animate:{width:i+"%"},className:"progress-bar"})},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&["image/png","image/jpeg"].includes(t.type)?(c(t),u("")):(c(null),u("Please select an Image file (png or jpeg)"))}}),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c}))))},y=a(9),h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},O=function(e){var t=e.setSelectedImg,a=h("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(v.a.div,{whileHover:{opacity:1},layout:!0,className:"img-wrap",key:e.id,onClick:function(){return t(e.url)}},r.a.createElement(v.a.img,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},src:e.url,alt:"uploaded"}))})))},S=function(e){var t=e.selected,a=e.setSelectedImg;return r.a.createElement(v.a.div,{initial:{opacity:0},animate:{opacity:1},className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)}},r.a.createElement(v.a.img,{initial:{y:"-100vh"},animate:{y:"0"},src:t,alt:"enlarged pic"}))};var I=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(j,null),r.a.createElement(O,{setSelectedImg:c}),a&&r.a.createElement(S,{selected:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f6acff9a.chunk.js.map