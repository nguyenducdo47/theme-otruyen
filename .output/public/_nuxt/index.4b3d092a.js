import k from"./Icon.d2eaa27f.js";import{_ as y}from"./nuxt-link.8cc68321.js";import{_ as C}from"./ComicCard.d63079f4.js";import{k as g,x as r,y as d,V as _,O as t,u as e,G as V,H as B,A as l,I as w,J as N,z as P,Z as G,_ as $,$ as z,a0 as A,Y as D}from"./swiper-vue.1fc45518.js";import{u as p}from"./useFetchData.e3cab5d1.js";import{u as F}from"./index.de4697cd.js";import{m as I}from"./data.801821c8.js";import"./entry.71724ffc.js";import"./config.518ce47a.js";import"./_plugin-vue_export-helper.c27b6911.js";const L={class:"flex items-center justify-between mb-4 mt-6 md:mt-12"},T={class:"flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold"},j=_("span",{class:"text-sm font-medium"}," Thêm ",-1),E=g({__name:"ComicsSlide",props:{comics:{},title:{},icon:{},link:{}},setup(u){const o=u,{comics:n,title:a,icon:c,link:m}=o;return(s,f)=>{const i=k,x=y,b=C,S=z,v=A;return r(),d(w,null,[_("div",L,[_("h2",T,[t(i,{name:e(c),size:"36",class:"text-emerald-500"},null,8,["name"]),V(" "+B(e(a)),1)]),t(x,{to:e(m),class:"cursor-pointer rounded-full px-3 py-0.5 overflow-hidden bg-transparent hover:border-transparent border-2 border-emerald-500 group hover:bg-emerald-500 text-emerald-500 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 duration-300"},{default:l(()=>[j]),_:1},8,["to"])]),t(v,{"slides-per-view":5,navigation:!0,"space-between":20,modules:["SwiperGrid"in s?s.SwiperGrid:e(G),"SwiperNavigation"in s?s.SwiperNavigation:e($)],breakpoints:{0:{slidesPerView:1,spaceBetween:10,grid:{rows:1}},320:{slidesPerView:2,spaceBetween:10,grid:{rows:1}},576:{slidesPerView:3,spaceBetween:10,grid:{rows:1}},768:{slidesPerView:4,spaceBetween:15,grid:{rows:2,fill:"row"}},1024:{slidesPerView:5,grid:{rows:2,fill:"row"}}},grid:{rows:2,fill:"row"}},{default:l(()=>[(r(!0),d(w,null,N(e(n),h=>(r(),P(S,{key:h.id},{default:l(()=>[t(b,{comic:h,detail:!0},null,8,["comic"])]),_:2},1024))),128))]),_:1},8,["modules"])],64)}}}),H={class:"max-w-6xl mx-auto py-5 px-3"},W=g({__name:"index",async setup(u){let o,n;const[a,c,m]=([o,n]=D(()=>Promise.all([p("/sap-ra-mat"),p("/dang-phat-hanh"),p("/hoan-thanh")])),o=await o,n(),o);return F(I()),(s,f)=>{const i=E;return r(),d("main",H,[t(i,{title:"Đang phát hành",comics:e(c).comics,icon:"material-symbols-light:comic-bubble-rounded",link:"/dang-phat-hanh"},null,8,["comics"]),t(i,{title:"Đã hoàn thành",comics:e(m).comics,icon:"bxs:badge-check",link:"/hoan-thanh"},null,8,["comics"]),t(i,{title:"Sắp ra mắt",comics:e(a).comics,icon:"material-symbols-light:event-upcoming-outline-sharp",link:"/sap-ra-mat"},null,8,["comics"])])}}});export{W as default};