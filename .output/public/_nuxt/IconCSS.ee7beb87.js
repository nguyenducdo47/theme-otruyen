import{k as _,a7 as m,j as o,x as d,y as x,a8 as f}from"./swiper-vue.1fc45518.js";import{u as S}from"./config.518ce47a.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";import"./entry.71724ffc.js";const y=_({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const n=u;m(t=>({"5fa51ebc":p.value}));const e=S();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var t;return(((t=e==null?void 0:e.nuxtIcon)==null?void 0:t.aliases)||{})[n.name]||n.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var s,r,i;if(!n.size&&typeof((s=e.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const t=n.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(t))===t?`${t}px`:t});return(t,s)=>(d(),x("span",{style:f({width:a.value,height:a.value})},null,4))}});const b=v(y,[["__scopeId","data-v-5ee01813"]]);export{b as default};