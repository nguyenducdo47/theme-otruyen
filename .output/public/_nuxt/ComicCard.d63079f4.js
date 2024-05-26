import S from"./Icon.d2eaa27f.js";import{h as D,n as k}from"./entry.71724ffc.js";import{k as U,a as A,x as o,y as n,V as t,u as e,F as x,D as E,O as d,H as p,I as b,G as l,W as F,X as L}from"./swiper-vue.1fc45518.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";const G=i=>(F("data-v-12ddb635"),i=i(),L(),i),O={class:"flex gap-1 absolute font-semibold top-0 inset-x-0 z-10 text-xs text-white"},P={key:0,class:"bg-rose-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"},W={key:1,class:"bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"},X={key:2,class:"bg-amber-400 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"},q={class:"relative"},J=["src","alt"],K={class:"absolute top-1/2 bottom-0 inset-x-0 flex flex-col justify-end px-2 sm:px-4 py-2 bg-gradient-to-b from-transparent to-black"},M={class:"font-bold leading-5 text-lg text-white group-hover:text-emerald-400 text-shadow duration-200 line-clamp-2"},Q=["title"],R=G(()=>t("hr",{class:"mt-3 mb-0.5 border-gray-500"},null,-1)),Y={class:"text-sm text-gray-300 truncate font-semibold"},Z={key:1,class:"flex items-center gap-1"},ee={key:0,class:"hidden md:flex items-center gap-0.5 justify-center gap-x-2 gap-y-1 text-emerald-400 text-xs py-1 mt-0.5"},te={key:1,class:"text-gray-300"},se={class:"text-sm font-semibold flex items-center gap-0.5 mb-1 text-fuchsia-400"},oe={class:"flex items-center gap-1 text-sm text-white"},ne={key:1,class:"py-1"},ae=U({__name:"ComicCard",props:{comic:{},detail:{type:Boolean},isHistory:{type:Boolean}},emits:["delete-comic"],setup(i,{emit:C}){const w=i,{comic:z,detail:j,isHistory:I=!1}=w,{author:c,followers:ie,slug:m,status:$,thumb_url:B,name:u,total_comments:re,total_views:de,is_trending:N,updated_at:y,chapter_id:V,last_reading:H}=z,g=A(!1),_=(f,s)=>{if(f.stopPropagation(),s==="delete"){D(m),C("delete-comic",m);return}if(s==="continue"){k(`/truyen-tranh/${m}/${V}`);return}k(`/truyen-tranh/${m}`)};return(f,s)=>{var h,v;const r=S;return o(),n("div",{class:"overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer",onClick:s[3]||(s[3]=a=>_(a,"detail"))},[t("div",O,[e(N)?(o(),n("span",P," Hot ")):x("",!0),e($)==="Completed"?(o(),n("span",W," End ")):x("",!0),(h=e(y))!=null&&h.includes("trước")&&Number((v=e(y).match(/\d+/))==null?void 0:v[0])<=3?(o(),n("span",X," Up ")):x("",!0)]),t("div",q,[t("div",{class:E(`absolute inset-0 flex items-center justify-center text-white bg-gray-200 duration-150 ${e(g)?"hidden":"block"}`)},[d(r,{name:"line-md:loading-loop",size:"48"})],2),t("img",{src:`https://img.otruyenapi.com/uploads/comics/${e(B)}`,alt:e(u),class:"w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none",loading:"lazy",onLoad:s[0]||(s[0]=a=>g.value=!0)},null,40,J)]),t("div",K,[t("h5",M,[t("abbr",{title:e(u),class:"no-underline"},p(e(u)),9,Q)]),e(j)?(o(),n(b,{key:0},[R,t("div",null,[t("p",Y,[Array.isArray(e(c))?(o(),n(b,{key:0},[l(p(e(c).join(" | ")),1)],64)):e(c)==="Updating"?(o(),n("span",Z,[d(r,{name:"mdi:dots-circle",size:"16",class:"text-emerald-500"}),l(" Updating ")])):(o(),n(b,{key:2},[l(p(e(c)),1)],64))]),e(I)?(o(),n("div",te,[t("p",se,[d(r,{name:"ph:read-cv-logo-fill",size:"18"}),l(" "+p(e(H)),1)]),t("div",oe,[t("button",{class:"bg-sky-500 w-full px-2 py-1 rounded-sm flex justify-center items-center gap-1",onClick:s[1]||(s[1]=a=>_(a,"continue"))},[d(r,{name:"system-uicons:book-text",size:"20"}),l(" Đọc tiếp ")]),t("button",{class:"bg-rose-500 px-2 py-1 rounded-sm",onClick:s[2]||(s[2]=a=>_(a,"delete"))},[d(r,{name:"ion:trash",size:"20"})])])])):(o(),n("div",ee))])],64)):(o(),n("span",ne))])])}}});const ue=T(ae,[["__scopeId","data-v-12ddb635"]]);export{ue as _};
