import{u as l}from"./entry.71724ffc.js";import{k as a}from"./swiper-vue.1fc45518.js";const p=n=>Object.fromEntries(Object.entries(n).filter(([,t])=>t!==void 0)),s=(n,t)=>(i,e)=>(l(()=>n({...p(i),...e.attrs},e)),()=>{var r,o;return t?(o=(r=e.slots).default)==null?void 0:o.call(r):null}),d={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},S=a({name:"Title",inheritAttrs:!1,setup:s((n,{slots:t})=>{var i,e,r;return{title:((r=(e=(i=t.default)==null?void 0:i.call(t))==null?void 0:e[0])==null?void 0:r.children)||null}})}),c=a({name:"Meta",inheritAttrs:!1,props:{...d,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(n=>{const t={...n};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),m=a({name:"Head",inheritAttrs:!1,setup:(n,t)=>()=>{var i,e;return(e=(i=t.slots).default)==null?void 0:e.call(i)}});export{m as H,c as M,S as T};
