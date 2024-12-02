"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[7378],{4614:(e,r,n)=>{n.d(r,{A:()=>C});var t=n(5043),s=n(4535),o=n(8903),i=n(6446),a=n(7392),l=n(4109),d=n(8911),c=n(5865),m=n(9611),h=n(8602),x=n(6575),g=n(7241),u=n(889),j=n(3438),p=n(3010),b=n(5475),A=n(3216),y=n(579);const f=(0,s.Ay)(b.N_)((e=>{let{theme:r,active:n}=e;return{textDecoration:"none",color:n?"white":"black",backgroundColor:n?"black":"transparent","&:hover":{color:n?"white":"gray"},borderRadius:"2rem",padding:"1rem 2rem"}})),v=[{name:"Dashboard",path:"/admin/dashboard",icon:(0,y.jsx)(h.A,{})},{name:"User",path:"/admin/user",icon:(0,y.jsx)(x.A,{})},{name:"Chats",path:"/admin/chat-management",icon:(0,y.jsx)(g.A,{})},{name:"Messages",path:"/admin/messages-management",icon:(0,y.jsx)(u.A,{})}],w=e=>{let{w:r="100%",logoutHandler:n}=e;const t=(0,A.zy)();return(0,y.jsxs)(d.A,{width:r,direction:"column",p:"3rem",spacing:"3rem",children:[(0,y.jsx)(c.A,{variant:"h6",textTransform:"uppercase",textAlign:"center",children:"Admin"}),(0,y.jsxs)(d.A,{spacing:"1rem",children:[v.map((e=>(0,y.jsx)(f,{to:e.path,active:t.pathname===e.path,children:(0,y.jsxs)(d.A,{direction:"row",alignItems:"center",justifyContent:"flex-start",marginBottom:"1rem",children:[e.icon,(0,y.jsx)(c.A,{marginLeft:"1rem",sx:{fontSize:"0.8rem"},children:e.name})]})},e.name))),(0,y.jsx)(f,{to:"#",onClick:n,children:(0,y.jsxs)(d.A,{direction:"row",alignItems:"center",justifyContent:"flex-start",spacing:"1rem",children:[(0,y.jsx)(p.A,{}),(0,y.jsx)(c.A,{children:"Logout"})]})})]})]})},C=e=>{let{children:r}=e;const[n,s]=(0,t.useState)(!1);return(0,y.jsxs)(o.Ay,{container:!0,minHeight:"100vh",children:[(0,y.jsx)(i.A,{sx:{display:{xs:"block",md:"none"},position:"fixed",top:"1rem",right:"1rem"},children:(0,y.jsx)(a.A,{onClick:()=>{s(!n)},children:n?(0,y.jsx)(j.A,{}):(0,y.jsx)(m.A,{})})}),(0,y.jsx)(o.Ay,{item:!0,md:4,lg:3,sx:{display:{xs:"none",md:"block"}},children:(0,y.jsx)(w,{logoutHandler:()=>{}})}),(0,y.jsx)(o.Ay,{item:!0,md:8,lg:9,xs:12,sx:{bgcolor:"rgba(0,0,0,0.3)"},children:r}),(0,y.jsx)(l.Ay,{anchor:"left",open:n,onClose:()=>{s(!1)},children:(0,y.jsx)(w,{w:"50vw"})})]})}},6774:(e,r,n)=>{n.d(r,{Jn:()=>i,zN:()=>o});var t=n(6178),s=n.n(t);const o=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:""},i=()=>{const e=s()(),r=[];for(let n=0;n<7;n++){const t=e.clone().subtract(n,"days").format("dddd");r.unshift(t)}return r}},7378:(e,r,n)=>{n.r(r),n.d(r,{default:()=>S});n(5043);var t=n(4614),s=n(3336),o=n(8911),i=n(5865),a=n(6446),l=n(7392),d=n(9252),c=n(9893),m=n(250),h=n(889),x=n(8362),g=n(5626),u=n(7241),j=n(6178),p=n.n(j),b=n(4535),A=n(5475);(0,b.Ay)(A.N_)`
  text-decoration: none;
    color: inherit;
    padding: 1rem;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
`,(0,b.Ay)("input")`
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0.1);
    padding: 0 3rem;
    border-radius: 1.5rem;
    height: 100%;
    width: 100%;
`;const y=(0,b.Ay)("input")`
    width: 20vmax;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    background-color:#f1f1f1 ;
    font-size: 1.1rem;
`,f=(0,b.Ay)("button")`
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: black;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray; // Add any hover styles here
  }

  &:active {
    background-color: darkgray; // Add any active styles here
  }

  &:focus {
    outline: 2px solid blue; // Add any focus styles here
  }
`;var v=n(6361),w=n(6058),C=(n(6916),n(6774)),k=n(579);v.t1.register(v.PP,v.kc,v.FN,v.No,v.hE,v.m_,v.s$,v.Bs);const I=e=>{let{value:r=[]}=e;const n={labels:(0,C.Jn)(),datasets:[{data:r,label:"Revenue 2",fill:!0,borderColor:"rgb(75,12,192)",backgroundColor:"rgba(75,12,192,0.2)"}]};return(0,k.jsx)(w.N1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Line Chart"}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{display:!1}}}},data:n})},z=e=>{let{value:r=[],labels:n=[]}=e;const t={labels:n,datasets:[{label:"Total Chat VS Group Chats",data:r,backgroundColor:["rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],hoverBackgroundColor:["rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderWidth:1,offset:30}]};return(0,k.jsx)(w.nu,{style:{zIndex:10},data:t})},M=e=>{let{title:r,value:n,Icon:t}=e;return(0,k.jsx)(s.A,{elevation:3,sx:{borderRadius:"1rem",width:"20rem",margin:"2rem 0"},children:(0,k.jsxs)(o.A,{alignItems:"center",spacing:"1rem",margin:"1rem",children:[(0,k.jsx)(i.A,{sx:{color:"gray",borderRadius:"50%",border:"5px solid rgba(0,0,0,0.9)",width:"5rem",height:"5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:n}),(0,k.jsxs)(o.A,{direction:"row",children:[t,(0,k.jsx)(i.A,{children:r})]})]})})},R=(0,k.jsxs)(o.A,{direction:{xs:"column",sm:"row"},spacing:"2rem",justifyContent:"space-between",alignItems:"center",margin:"2rem",children:[(0,k.jsx)(M,{title:"Users",value:34,Icon:(0,k.jsx)(c.A,{})}),(0,k.jsx)(M,{title:"Chats",value:4,Icon:(0,k.jsx)(m.A,{})}),(0,k.jsx)(M,{title:"Messages",value:456,Icon:(0,k.jsx)(h.A,{})})]}),S=()=>{const e=(0,k.jsx)(s.A,{elevation:3,sx:{padding:"2rem",margin:"2rem 0",borderRadius:"1rem"},children:(0,k.jsxs)(o.A,{direction:"row",alignItems:"center",spacing:"1rem",children:[(0,k.jsx)(x.A,{sx:{fontSize:"3rem"}}),(0,k.jsx)(y,{type:"text"}),(0,k.jsx)(f,{children:"Search"}),(0,k.jsx)(a.A,{flexGrow:1,children:(0,k.jsx)(i.A,{variant:"body1",sx:{display:{xs:"none",lg:"block"}},children:p()().format("Do MMMM YYYY")})}),(0,k.jsx)(l.A,{children:(0,k.jsx)(g.A,{sx:{fontSize:"2rem",color:"black"}})})]})});return(0,k.jsxs)(t.A,{children:[(0,k.jsx)(d.A,{component:"main",children:e}),(0,k.jsxs)(o.A,{direction:{xs:"column",lg:"row"},spacing:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:{xs:"center",lg:"stretch"},children:[(0,k.jsxs)(s.A,{elevation:3,sx:{padding:"2rem 3rem",borderRadius:"1rem",width:"100%",maxWidth:"35rem"},children:[(0,k.jsx)(i.A,{variant:"h5",margin:"2rem 0",children:"Last Messages"}),(0,k.jsx)(I,{value:[23,56,33,67,33]})]}),(0,k.jsxs)(s.A,{elevation:3,sx:{padding:"1rem",borderRadius:"1rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",maxWidth:"22rem"},children:[(0,k.jsx)(z,{labels:["Single Chats","Groups Chats"],value:[33,66]}),(0,k.jsxs)(o.A,{position:"absolute",direction:"row",justifyContent:"center",spacing:"0.5rem",width:"100%",height:"100%",alignItems:"center",children:[(0,k.jsx)(u.A,{}),(0,k.jsx)(i.A,{children:"Vs"}),(0,k.jsx)(c.A,{})]})]})]}),R]})}}}]);
//# sourceMappingURL=7378.715a60ff.chunk.js.map