import ne from"./Icon.d2eaa27f.js";import{_ as oe}from"./Comments.vue.db416973.js";import{_ as se}from"./nuxt-link.8cc68321.js";import{k as ae,a as l,Y as F,b as M,a1 as le,o as re,x as c,y as p,V as o,u as e,I as z,J as E,D as u,O as f,a4 as P,a5 as ce,z as U,A as j,H as h,a6 as ie,e as de,G as k,W as ue,X as me}from"./swiper-vue.1fc45518.js";import{u as pe}from"./index.de4697cd.js";import{a as ge,c as _e,d as xe,n as fe}from"./entry.71724ffc.js";import{u as he}from"./useFetchData.e3cab5d1.js";import{m as ye}from"./data.801821c8.js";import{_ as ve}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.518ce47a.js";const O=y=>(ue("data-v-62e352eb"),y=y(),me(),y),be={class:"bg-zinc-900 min-h-screen"},we={class:"flex flex-col max-w-2xl mx-auto"},Ce=["src","alt","id"],ke={class:"max-h-[75vh] overflow-auto p-4 sm:p-10 text-sm"},$e=O(()=>o("h4",{class:"text-2xl font-extrabold text-zinc-600"},"Comments",-1)),Ie={class:"w-max mx-auto pb-2 mt-6"},ze={class:"items-center gap-2 hidden lg:flex"},Ee=["textContent"],Te=["max"],Se={class:"flex items-center gap-3"},Be=["disabled"],Ne=["disabled"],Ve={class:"text-lg px-4 pb-1"},Ae={class:"overflow-auto text-sm h-max max-h-72 font-normal"},Le=O(()=>o("span",{class:"border-b rotate-90 w-4 border-gray-400 hidden lg:inline"},null,-1)),Re={class:"flex items-center gap-6"},De=ae({__name:"[chapterId]",async setup(y){let i,v;const m=l(1),T=l(1);l(0);const S=l(!0),g=l(!1),b=l(!0),_=l(!1),B=l(!1),N=l(!1),$=l(!1),q=l([]),G=ge(),{chapterId:a,comicId:x}=G.params;let{images:w,chapters:r,comic_name:H,name:I,author:J,slug:W,status:X,thumb_url:Y,is_adult:K}=([i,v]=F(()=>he(`/truyen-tranh/${x}/${a}`)),i=await i,v(),i);if(r=r.sort((n,t)=>+n.name-+t.name),w.length===0&&H==="Thể loại")throw _e({statusCode:404,statusMessage:"Page Not Found"});const V=async()=>{try{}catch(n){console.log(n)}finally{B.value=!1}},A=n=>{$.value=!0;const d=r.findIndex(C=>C.name===a)+(n==="next"?1:-1);fe(`/truyen-tranh/${x}/${r[d].name}`)},Q=n=>{n.target===n.currentTarget&&(b.value=!b.value,g.value=!1)},Z=n=>{n.target===n.currentTarget&&(_.value=!1)},ee=()=>{var n;g.value=!g.value,g.value&&((n=document.getElementById(a))==null||n.scrollIntoView())},te=async()=>{try{const n=`/download?comicId=${x}&chapterId=${a}`,t=document.createElement("a");t.href=n,t.target="_blank",t.rel="noopener noreferrer",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(n)}catch(n){console.log(n)}};M(T,n=>{const t=document.getElementById(n.toString());t==null||t.scrollIntoView()});const L=()=>{const n=document.querySelectorAll(".image-source"),t=Array.from(n).find(d=>d.getBoundingClientRect().top>0);if(t){m.value=Number(t.getAttribute("id"))-1;return}if(S.value){m.value=1,S.value=!1;return}m.value=n.length};return[i,v]=F(()=>V()),i=await i,v(),le(async()=>{document.addEventListener("scroll",L),xe({author:J[0],slug:W,is_adult:K,status:X,name:I,thumb_url:Y,reading_at:new Date().getTime(),last_reading:`Chương ${a.toString()}`,chapter_id:Number(a)})}),re(()=>document.removeEventListener("scroll",L)),M(_,n=>{document.body.style.overflow=n?"hidden":"auto"}),pe(ye({title:`${I} | NComics`})),(n,t)=>{const d=ne,C=oe,R=se;return c(),p("main",be,[o("div",we,[e($)?(c(!0),p(z,{key:0},E(new Array(20),(s,D)=>(c(),p("span",{key:D,class:"aspect-[2/3] bg-zinc-700 animate-pulse"}))),128)):(c(!0),p(z,{key:1},E(e(w),s=>(c(),p("img",{key:s.src,src:s.src,alt:`Page ${s.page}`,loading:"lazy",id:s.page,class:"image-source w-full"},null,8,Ce))),128))]),o("div",{class:"fixed inset-0",onClick:Q},[o("div",{class:u(`absolute inset-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center justify-center duration-200 ${e(_)?"opacity-1 pointer-events-auto":"opacity-0 pointer-events-none"}`),onClick:Z},[o("div",{class:u(`relative w-[90vw] max-w-4xl bg-white rounded-md duration-300 ${e(_)?"scale-100":"scale-0"}`)},[f(d,{name:"icon-park:close-small",size:"32",class:"cursor-pointer absolute top-3 right-3",onClick:t[0]||(t[0]=s=>_.value=!1)}),o("div",ke,[$e,f(C,{comments:e(q),"is-end":e(N)},null,8,["comments","is-end"]),P(o("div",Ie,[e(B)?(c(),U(d,{key:0,name:"line-md:loading-loop",size:"42"})):(c(),p("button",{key:1,class:"bg-emerald-100 text-emerald-500 font-medium rounded-full px-4 py-1.5",onClick:V}," Load more "))],512),[[ce,!e(N)]])])],2)],2),o("div",{class:u(`select-none top-0 inset-x-0 bg-[rgba(0,0,0,0.9)] text-center py-3 px-2 text-gray-300 font-semibold duration-200 ${e(b)?"translate-y-0 opacity-1":"-translate-y-full opacity-0"}`)},[f(R,{to:`/truyen-tranh/${e(x)}`},{default:j(()=>[k(h(e(I)),1)]),_:1},8,["to"]),f(d,{name:"icon-park-outline:right",size:"16",class:"mx-2"}),o("span",null,h(e(a)),1)],2),o("div",{class:u(`select-none absolute flex items-center flex-col-reverse justify-center gap-3 lg:flex-row lg:gap-8 py-2 bottom-0 inset-x-0 bg-[rgba(0,0,0,0.75)] text-gray-400 text-sm font-semibold duration-300
           ${e(b)?"translate-y-0 opacity-1":"translate-y-full opacity-0"}
        `)},[o("div",ze,[o("span",{class:"w-16",textContent:h(`${e(m)} / ${e(w).length}`)},null,8,Ee),P(o("input",{type:"range",min:"1",max:e(w).length,"onUpdate:modelValue":t[1]||(t[1]=s=>de(m)?m.value=s:null),step:"1",onInput:t[2]||(t[2]=s=>T.value=parseInt(s.target.value))},null,40,Te),[[ie,e(m)]])]),o("div",Se,[o("button",{class:u(`px-3 py-1 rounded-full ${e(a)==e(r).at(0).name?"bg-gray-200 text-gray-500":"bg-emerald-200 text-emerald-500 "}`),onClick:t[3]||(t[3]=s=>A("prev")),disabled:e(a)==e(r).at(0).name}," Trước ",10,Be),o("button",{class:u(`px-3 py-1 rounded-full ${e(a)==e(r).at(-1).name?"bg-gray-200 text-gray-500":"bg-emerald-200 text-emerald-500 "}`),onClick:t[4]||(t[4]=s=>A("next")),disabled:e(a)==e(r).at(-1).name}," Tiếp ",10,Ne),o("button",{class:"px-3 py-1 bg-fuchsia-200 text-fuchsia-500 rounded-full relative",onClick:ee},[k(" Chương khác "),o("div",{class:u(`z-10 absolute bg-zinc-900 w-60 py-3 rounded bottom-9 text-white right-full translate-x-1/3 sm:translate-x-1/2 sm:right-1/2 text-left duration-200 origin-bottom ${e(g)?"scale-100":"scale-[0.001]"}`)},[o("h5",Ve," Các chương ("+h(e(r).length)+") ",1),o("ul",Ae,[(c(!0),p(z,null,E(e(r),s=>(c(),U(R,{to:`/truyen-tranh/${e(x)}/${s.name}`,key:s.id,onClick:t[5]||(t[5]=D=>$.value=!0),class:u(`py-2 block truncate px-5 duration-100 hover:bg-zinc-950 ${s.id==e(a)?"text-emerald-500 font-bold":""}`),id:s.id},{default:j(()=>[k(h(s.name),1)]),_:2},1032,["to","class","id"]))),128))])],2)])]),Le,o("div",Re,[o("button",{class:"flex items-center gap-2",onClick:te},[f(d,{name:"octicon:download-16",size:"24",class:"text-white"}),k(" Tải xuống ")])])],2)])])}}});const We=ve(De,[["__scopeId","data-v-62e352eb"]]);export{We as default};
