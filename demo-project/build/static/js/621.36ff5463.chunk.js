"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[621,1102],{6118:(e,s,a)=>{a.r(s),a.d(s,{default:()=>F});var l=a(5043),i=a(7962),t=a(5475),n=a(579);const r=e=>{let{user:s}=e;const[a,r]=(0,l.useState)(!1);return(0,n.jsxs)("header",{className:"d-flex justify-content-between p-2 bg-white border headers",children:[(0,n.jsxs)("div",{className:"d-flex gap-2 justify-content-center align-items-center",children:[(0,n.jsx)("img",{src:s.avatar[0].url||"https://randomuser.me/api/portraits/men/1.jpg",width:"50",height:"50",className:"rounded rounded-5 border",alt:"Profile"}),(0,n.jsxs)("span",{className:"text-black fs-5 fw-semibold",children:[s.firstName," ",s.lastName]}),(0,n.jsx)(i.PN1,{className:"text-primary fs-5 fw-semibold"})]}),(0,n.jsxs)("div",{className:"position-relative",children:[(0,n.jsx)("button",{className:"btn outline-none border-0",onClick:()=>{r((e=>!e))},children:(0,n.jsx)("i",{className:"bi bi-info-circle fs-4"})}),a&&(0,n.jsxs)("div",{className:"custom-dropdown",children:[(0,n.jsxs)("div",{className:"form-check form-switch d-flex justify-content-between",children:[(0,n.jsx)("input",{className:"form-check-input ms-1 ",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",defaultChecked:!0}),(0,n.jsx)("label",{className:"form-check-label  ms-3",htmlFor:"flexSwitchCheckChecked",children:"Notification"})]}),(0,n.jsxs)("ul",{className:"list-group",children:[(0,n.jsx)("li",{className:"list-group-item",children:(0,n.jsx)(t.k2,{to:"",children:"Block"})}),(0,n.jsx)("li",{className:"list-group-item",children:(0,n.jsx)(t.k2,{to:"",children:"Delete Chat"})}),(0,n.jsx)("li",{className:"list-group-item",children:(0,n.jsx)(t.k2,{to:"",children:"Report"})})]})]})]})]})};var c=a(8889);const d=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:""},o=e=>{let{url:s,fileType:a}=e;switch(a){case"audio":return(0,n.jsx)("audio",{controls:!0,src:s,children:"Your browser does not support the audio tag."});case"video":return(0,n.jsx)("video",{controls:!0,preload:"none",width:"250",src:s,children:"Your browser does not support the video tag."});case"img":return(0,n.jsx)("img",{src:d(s,200),alt:"Image file",width:"250",height:"150",style:{objectFit:"contain"}});case"emoji":return(0,n.jsx)("img",{src:s,alt:"Emoji file",width:"50",height:"50"});default:return(0,n.jsx)("p",{children:"Unsupported file type"})}};var m=a(3002),u=a(6178),h=a.n(u);const f=e=>{let{message:s,user:a,userTyping:l}=e;const{content:i,attachements:t=[],sender:r,createdAt:c}=s,d=(null===r||void 0===r?void 0:r._id)===(null===a||void 0===a?void 0:a._id),u=d?"message-item sender":"message-item receiver";return(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)(m.uY4,{size:20,className:"icon"}),(0,n.jsxs)("div",{className:"p-2 rounded-2 d-flex flex-column bg-white gap-0",children:[!d&&(0,n.jsxs)("span",{className:"sender-name",style:{fontSize:"0.8rem",fontFamily:"cursive"},children:[null===r||void 0===r?void 0:r.firstName," ",null===r||void 0===r?void 0:r.lastName]}),l?(0,n.jsxs)("div",{className:"typing-indicator",children:[(0,n.jsx)("p",{children:"Someone is typing"}),(0,n.jsxs)("div",{className:"typing-dots",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"p-1 rounded-5 text-success bg-white",style:{fontSize:"0.8rem",fontFamily:"cursive"},children:i}),t.length>0&&t.map(((e,s)=>{const a=e.url,l=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(".").pop().toLowerCase();return["mp4","webm"].includes(e)?"video":["mp3","wav","ogg"].includes(e)?"audio":["jpg","jpeg","png","gif"].includes(e)?"img":["svg"].includes(e)?"emoji":"unknown"}(a);return(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"attachment-link",download:!0,children:o(a,l)})},s)}))]}),(0,n.jsx)("span",{className:"timestamp",children:h()(c).fromNow()})]})]})};var x=a(3003),p=a(3216),j=a(8882);var g=a(9477),v=a(1462),N=a(397);const b="NEW_MESSAGE",w="START_TYPING",y="STOP_TYPING";var k=a(1842),S=a(6720),C=a(9804),E=a(184),T=a(1036);const A=e=>{let{chatId:s}=e;const a=(0,x.wA)(),{loading:i,error:t}=(0,x.d4)((e=>e.attachment)),r=(0,l.useRef)(),c=(0,l.useRef)(),d=(0,l.useRef)(),o=(0,l.useRef)(),m=(e,l)=>{const i=Array.from(e.target.files);if(i.length<=0)return;if(i.length>5)return T.oR.error(`You can only send 5 ${l} at a time`);const t=new FormData;t.append("chatId",s),i.forEach((e=>{t.append("files",e)})),a((0,j.md)(t))};return(0,n.jsxs)("div",{className:"p-1",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-center flex-column gap-2",children:[(0,n.jsxs)("div",{className:"file-upload",children:[(0,n.jsx)("input",{type:"file",id:"image-upload",className:"d-none",accept:"image/png,image/jpeg,image/gif",onChange:e=>m(e,"Images"),ref:r}),(0,n.jsxs)("label",{htmlFor:"image-upload",className:"file-label",onClick:()=>{var e;return null===(e=r.current)||void 0===e?void 0:e.click()},children:[(0,n.jsx)(C.DUM,{size:20,className:"me-2"})," Image"]})]}),(0,n.jsxs)("div",{className:"file-upload",children:[(0,n.jsx)("input",{type:"file",id:"audio-upload",className:"d-none",accept:"audio/mpeg,audio/wave",onChange:e=>m(e,"Audios"),ref:c}),(0,n.jsxs)("label",{htmlFor:"audio-upload",className:"file-label",onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.click()},children:[(0,n.jsx)(S.I5y,{size:20,className:"me-2"})," Audio"]})]}),(0,n.jsxs)("div",{className:"file-upload",children:[(0,n.jsx)("input",{type:"file",id:"video-upload",className:"d-none",accept:"video/*",onChange:e=>m(e,"Videos"),ref:d}),(0,n.jsxs)("label",{htmlFor:"video-upload",className:"file-label",onClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.click()},children:[(0,n.jsx)(E.Zgf,{size:20,className:"me-2"})," Video"]})]}),(0,n.jsxs)("div",{className:"file-upload",children:[(0,n.jsx)("input",{type:"file",id:"file-upload",className:"d-none",accept:".pdf,.doc,.docx,.xls,.xlsx,.txt",onChange:e=>m(e,"Files"),ref:o}),(0,n.jsxs)("label",{htmlFor:"file-upload",className:"file-label",onClick:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.click()},children:[(0,n.jsx)(E.i3g,{size:20,className:"me-2"})," File"]})]})]}),i&&(0,n.jsx)("div",{className:"loading-indicator",children:"Uploading..."}),t&&(0,n.jsx)("div",{className:"error-message",children:t})]})},F=(0,c.A)((()=>{var e;const s=(0,x.wA)(),{id:a}=(0,p.g)(),[t,c]=(0,l.useState)([]),[d,o]=(0,l.useState)(""),[m,u]=(0,l.useState)(!1),[h,C]=(0,l.useState)(!1),E=(0,l.useRef)(null);console.log(h);const[T,F]=(0,l.useState)(1),[I,z]=(0,l.useState)(!1),[R,_]=(0,l.useState)(!1),D=(0,l.useRef)(null),P=(0,l.useRef)(null),Y=(0,g.Y)(),{chat:G,loading:M,error:L}=(0,x.d4)((e=>e.chatDetails)),{user:U}=(0,x.d4)((e=>e.user)),{messages:W}=(0,x.d4)((e=>e.message)),V=((0,x.d4)((e=>e.messageAlerts)),null===G||void 0===G||null===(e=G.chat)||void 0===e?void 0:e.members),H=[...W,...t];(0,l.useEffect)((()=>{s((0,j.Vu)({id:a})),s((0,j.lj)(a,T))}),[s,a,T]),(0,l.useEffect)((()=>{D.current&&(D.current.scrollTop=D.current.scrollHeight)}),[t]),(0,l.useEffect)((()=>()=>{c([]),o(""),F(1)}),[a,s]);const O=(0,l.useCallback)((e=>{o((s=>s+e.native))}),[]),B=(0,l.useCallback)((e=>{e.chatId===a&&c((s=>[...s,e.message]))}),[a]),Z=(0,l.useCallback)((e=>{const{chatId:l,message:i}=e;l===a&&s((0,j.ku)(l,i))}),[s,a]),$=(0,l.useCallback)((e=>{e.chatId===a&&(console.log("Start Typing",e),C(!0))}),[a]),q=(0,l.useCallback)((e=>{e.chatId===a&&(console.log("Stop Typing",e),C(!1))}),[a]);(0,l.useEffect)((()=>(Y.on(b,B),Y.on("NEW_MESSAGE_ALERT",Z),Y.on(w,$),Y.on(y,q),()=>{Y.off(b,B),Y.off("NEW_MESSAGE_ALERT",Z),Y.off(w,$),Y.off(y,q)})),[Y,B,Z,$]);const J=H.sort(((e,s)=>new Date(s.createdAt)-new Date(e.createdAt))).map((e=>(0,n.jsx)(f,{message:e,user:U,userTyping:h},e._id)));return M?(0,n.jsx)("div",{children:"Loading..."}):L?(0,n.jsx)("div",{children:"Error loading chat details"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"d-flex flex-column w-100",style:{height:"80%"},children:[(0,n.jsx)(r,{user:U}),(0,n.jsxs)("main",{className:"flex-grow-1 overflow-auto p-1",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-center flex-column align-items-center gap-2 mt-4",children:[(0,n.jsx)("img",{src:U.avatar[0].url||"https://randomuser.me/api/portraits/men/1.jpg",width:"60",height:"60",className:"rounded rounded-5 border",alt:"User Profile"}),(0,n.jsxs)("div",{className:"d-flex text-center",children:[(0,n.jsxs)("span",{className:"text-black fs-6 fw-semibold me-2 ms-2",style:{fontFamily:"fantasy"},children:[U.firstName," ",U.lastName]}),(0,n.jsx)(i.PN1,{size:15,className:"text-primary mt-1"})]}),(0,n.jsx)("p",{className:"w-50 text-center fw-semibold",style:{fontFamily:"revert",fontSize:"0.8rem"},children:U.bio})]}),(0,n.jsx)("div",{id:"chat-message-list",className:"w-100",ref:D,children:J})]})]}),(0,n.jsxs)("div",{className:"new-conversation",children:[(0,n.jsx)("form",{className:"d-flex align-items-center",onSubmit:e=>{e.preventDefault(),d.trim()&&(Y.emit(b,{chatId:a,members:V,message:d}),o(""))},children:(0,n.jsxs)("div",{className:"input-container d-flex align-items-center",children:[(0,n.jsx)("div",{ref:P,children:(0,n.jsx)(S.FTW,{onClick:()=>{_((e=>!e))},size:20,className:"p-0 me-2","aria-label":"Toggle file menu"})}),(0,n.jsx)("input",{type:"text",className:"me-2",value:d,onChange:e=>{o(e.target.value),m||(Y.emit(w,{members:V,chatId:a}),u(!0)),E.current&&clearTimeout(E.current),E.current=setTimeout((()=>{Y.emit(y,{members:V,chatId:a}),u(!1)}),[2e3])},placeholder:"Type a message","aria-label":"Message input"}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary rounded-circle p-0","aria-label":"Send message",children:(0,n.jsx)(N.HfR,{size:30})})]})}),(0,n.jsx)("div",{className:"d-flex align-items-center",ref:P,children:(0,n.jsx)(v.GOz,{size:30,className:"p-0 me-2",onClick:()=>{z((e=>!e))},"aria-label":"Toggle emoji picker"})})]}),I&&(0,n.jsx)("div",{className:"emoji-container",children:(0,n.jsx)(k.A,{onEmojiSelect:O})}),R&&(0,n.jsx)("div",{className:"file-container mb-4",children:(0,n.jsx)(A,{chatId:a})})]})}))},8889:(e,s,a)=>{a.d(s,{A:()=>n});a(5043);var l=a(8284),i=a(9477),t=a(579);const n=e=>function(s){return(0,t.jsx)(i.F,{children:(0,t.jsxs)("div",{className:"container-layout gap-1",children:[(0,t.jsx)("div",{className:"side-layout",children:(0,t.jsx)(l.default,{})}),(0,t.jsx)("div",{className:"wrapped-layout",children:(0,t.jsx)(e,{...s})})]})})}}}]);
//# sourceMappingURL=621.36ff5463.chunk.js.map