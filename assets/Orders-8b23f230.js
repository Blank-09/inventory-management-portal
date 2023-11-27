import{g as y,b as w,s as g,d as u,c as b,u as T,_ as C,j as o,e as x,f as R,n as k,r as I,i as q,a as F,h as d,I as G,B as f,T as p,P as M,l as S,M as L,F as V,A as W}from"./index-a3c8ab3a.js";import{T as E,a as O,b as h,f as $,D as Q}from"./DataGrid-b5f97760.js";import{c as X}from"./ListOrders-ab3cf6a7.js";import"./index-dd05c1ba.js";import"./Divider-455adaa2.js";import"./Switch-6ebf1d21.js";function J(e){return y("MuiTable",e)}w("MuiTable",["root","stickyHeader"]);const K=["className","component","padding","size","stickyHeader"],Y=e=>{const{classes:t,stickyHeader:r}=e;return R({root:["root",r&&"stickyHeader"]},J,t)},Z=g("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>u({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":u({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),_="table",ee=b.forwardRef(function(t,r){const a=T({props:t,name:"MuiTable"}),{className:l,component:n=_,padding:c="normal",size:s="medium",stickyHeader:i=!1}=a,m=C(a,K),v=u({},a,{component:n,padding:c,size:s,stickyHeader:i}),N=Y(v),z=b.useMemo(()=>({padding:c,size:s,stickyHeader:i}),[c,s,i]);return o(E.Provider,{value:z,children:o(Z,u({as:n,role:n===_?null:"table",ref:r,className:x(N.root,l),ownerState:v},m))})}),te=ee;function oe(e){return y("MuiTableBody",e)}w("MuiTableBody",["root"]);const ae=["className","component"],re=e=>{const{classes:t}=e;return R({root:["root"]},oe,t)},se=g("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),ne={variant:"body"},B="tbody",le=b.forwardRef(function(t,r){const a=T({props:t,name:"MuiTableBody"}),{className:l,component:n=B}=a,c=C(a,ae),s=u({},a,{component:n}),i=re(s);return o(O.Provider,{value:ne,children:o(se,u({className:x(i.root,l),as:n,ref:r,role:n===B?null:"rowgroup",ownerState:s},c))})}),ie=le;function ce(e){return y("MuiTableContainer",e)}w("MuiTableContainer",["root"]);const de=["className","component"],ue=e=>{const{classes:t}=e;return R({root:["root"]},ce,t)},pe=g("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),be=b.forwardRef(function(t,r){const a=T({props:t,name:"MuiTableContainer"}),{className:l,component:n="div"}=a,c=C(a,de),s=u({},a,{component:n}),i=ue(s);return o(pe,u({ref:r,as:n,className:x(i.root,l),ownerState:s},c))}),he=be;function me(e){return y("MuiTableHead",e)}w("MuiTableHead",["root"]);const fe=["className","component"],ve=e=>{const{classes:t}=e;return R({root:["root"]},me,t)},ye=g("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),we={variant:"head"},D="thead",ge=b.forwardRef(function(t,r){const a=T({props:t,name:"MuiTableHead"}),{className:l,component:n=D}=a,c=C(a,fe),s=u({},a,{component:n}),i=ve(s);return o(O.Provider,{value:we,children:o(ye,u({as:n,className:x(i.root,l),ref:r,role:n===D?null:"rowgroup",ownerState:s},c))})}),Te=ge;function Ce(e){return y("MuiTableRow",e)}const xe=w("MuiTableRow",["root","selected","hover","head","footer"]),j=xe,Re=["className","component","hover","selected"],Me=e=>{const{classes:t,selected:r,hover:a,head:l,footer:n}=e;return R({root:["root",r&&"selected",a&&"hover",l&&"head",n&&"footer"]},Ce,t)},$e=g("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${j.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${j.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),U="tr",Ne=b.forwardRef(function(t,r){const a=T({props:t,name:"MuiTableRow"}),{className:l,component:n=U,hover:c=!1,selected:s=!1}=a,i=C(a,Re),m=b.useContext(O),v=u({},a,{component:n,hover:c,selected:s,head:m&&m.variant==="head",footer:m&&m.variant==="footer"}),N=Me(v);return o($e,u({as:n,ref:r,className:x(N.root,l),role:n===U?null:"row",ownerState:v},i))}),P=Ne;var H={},Se=q;Object.defineProperty(H,"__esModule",{value:!0});var A=H.default=void 0,Oe=Se(I()),He=F,ke=(0,Oe.default)((0,He.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");A=H.default=ke;function _e(){let e="9";for(let t=0;t<9;t++)e+=Math.floor(Math.random()*10);return"+91"+e}function Be({order:e}){const t=(a,l)=>{console.log("delete the product : ",l," from the order ",a)},r=e.products.map((a,l)=>d(P,{children:[o(h,{children:a.product.name}),o(h,{children:a.quantity}),o(h,{children:a.product.stock}),o(h,{children:o(G,{onClick:()=>t(e.id,a.product.id),children:o(A,{color:"error"})})})]},l));return o(f,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"white",borderRadius:2,boxShadow:24,p:4},children:d(f,{sx:{color:"black",display:"flex",flexDirection:"column"},children:[o(p,{variant:"h6",sx:{m:3},children:"OrderList"}),d(M,{elevation:0,sx:{display:"flex",justifyContent:"space-between",width:"30%",m:3},children:[o(p,{variant:"subtitle1",children:"Name "}),o(p,{variant:"subtitle1",color:"grey",children:$.name.firstName()})]}),d(M,{elevation:0,sx:{display:"flex",justifyContent:"space-between",width:"30%",m:3},children:[o(p,{variant:"subtitle1",children:"Position "}),o(p,{variant:"subtitle1",color:"grey",children:$.commerce.department()})]}),d(M,{elevation:0,sx:{display:"flex",justifyContent:"space-between",width:"30%",m:3},children:[o(p,{variant:"subtitle1",children:"Mobile "}),o(p,{variant:"subtitle1",color:"grey",children:_e()})]}),d(f,{children:[o(he,{sx:{marginBottom:3},children:d(te,{children:[o(Te,{children:d(P,{children:[o(h,{children:"Product Name"}),o(h,{children:"Quantity"}),o(h,{children:"Stock Availability"}),o(h,{})]})}),o(ie,{children:r})]})}),d(M,{elevation:0,sx:{display:"flex",justifyContent:"space-between",width:"100%",m:0},children:[o(S,{variant:"contained",sx:{bgcolor:"error.main",m:3,px:12},children:"Reject"}),o(S,{variant:"contained",sx:{bgcolor:"#504099",m:3,px:12},children:"Approve"})]})]})]})})}const De=()=>{const[e,t]=b.useState({}),[r,a]=b.useState(!1),l=s=>{console.log("the order is : ",s),t(s),a(!0)};return d(f,{sx:{bgcolor:"white",borderRadius:2,height:"calc(100vh - 180px)"},children:[o(Q,{sx:{pl:3,"--unstable_DataGrid-headWeight":600,borderRadius:3},rows:X,columns:[{field:"id",headerName:"ID",width:90,description:"id of the product"},{field:"fullname",headerName:"Full Name",width:250,description:"customer full name",renderCell:s=>(console.log(s),d(V,{children:[o(W,{sx:{bgcolor:"orange"},children:o("img",{src:$.internet.avatar(),alt:"Avatar"})}),o(p,{variant:"subtitle2",sx:{mx:3},children:s.row.firstName})]}))},{field:"mobile",headerName:"Mobile",width:250,description:"customer phone number ",valueGetter:s=>s.row.mobile},{field:"total",headerName:"Total Amount",width:250,description:"total amount of the order",valueGetter:s=>"₹"+$.number.int({min:70,max:2e3})},{field:"details",headerName:"Order Details",width:200,description:"the details of the order",renderCell:s=>{const i=s.row;return o(S,{variant:"contained",sx:{bgcolor:"#504099"},onClick:()=>{l(i)},children:"Order Details"})}}],initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[15,20,30]}),o(L,{open:r,onClose:()=>{a(!1)},children:o(f,{children:o(Be,{order:e})})})]})},qe=()=>d(f,{sx:{m:0,p:3,width:"100%"},children:[o(p,{variant:"h5",sx:{fontWeight:"bold",mb:3},children:"Orders"}),o(De,{})]});export{qe as default};
