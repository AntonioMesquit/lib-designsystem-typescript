import{j as e}from"./jsx-runtime-6eef64cc.js";function o({tokens:s,hasRemValue:t=!1,bd:n=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsxs("thead",{children:[e.jsx("th",{children:"Nome"}),e.jsx("th",{style:{borderColor:"transparent"},children:"Valor"}),t&&e.jsx("th",{children:"Pixels"}),n&&e.jsx("th",{children:"Formato"})]}),e.jsx("tbody",{children:Object.entries(s).map(([a,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:a}),e.jsx("td",{style:{borderColor:"transparent"},children:r}),t&&e.jsxs("td",{children:[Number(r.replace("rem",""))*16,"px"]}),n&&e.jsx("td",{style:{position:"relative"},children:e.jsx("span",{className:"borda",style:{position:"absolute",borderRadius:r,width:"30px",height:"20px",backgroundColor:"white",top:"10px",left:"25px"}})})]},a))})]})}try{o.displayName="TokensGrid",o.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}},bd:{defaultValue:{value:"false"},description:"",name:"bd",required:!1,type:{name:"boolean"}}}}}catch{}export{o as T};
