import{r as g,i as x,a as S,c as r,h as l,F as y,B as F,j as a,l as b,s as w,aj as i,ak as u}from"./index-256c12e6.js";var o={},C=x;Object.defineProperty(o,"__esModule",{value:!0});var d=o.default=void 0,j=C(g()),_=S,D=(0,j.default)((0,_.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");d=o.default=D;const R=w("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function q(c){const[p,s]=r.useState(null),[f,h]=r.useState(null);r.useEffect(()=>{const t=localStorage.Credentials,e=JSON.parse(t);console.log(e),s(e.profilePicture)},[]);const m=t=>{h(t.target.files[0]);const e=new FileReader;e.readAsDataURL(t.target.files[0]),e.onloadend=()=>s(e.result)};async function v(t){t.preventDefault();const e=new FormData;e.append("image",f);try{const n=await i.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}});await i.post("/upload",n.data),u.success("File uploaded successfully")}catch{u.error("File upload failed")}}return l(y,{children:[l("form",{onSubmit:v,encType:"multipart/form-data",children:[l(F,{component:"label",variant:"text",startIcon:a(d,{}),children:[c.children,a(R,{type:"file",onChange:m})]}),a(b,{type:"submit",variant:"text",children:"Submit"})]}),a("img",{src:p,alt:""})]})}export{q as default};