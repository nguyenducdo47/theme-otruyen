import{_ as se}from"./nuxt-link.8cc68321.js";import ne from"./Icon.d2eaa27f.js";import{_ as ae}from"./Comments.vue.db416973.js";import{k as re,a as d,Y as le,a1 as ce,b as de,x as r,y as l,V as t,u as e,F as w,H as u,I as h,J as x,G as p,O as y,z as I,A as H,D as g,a4 as A,a5 as F,W as ie,X as me}from"./swiper-vue.1fc45518.js";import{u as ue}from"./index.de4697cd.js";import{a as pe,c as he,n as _e}from"./entry.71724ffc.js";import{u as W}from"./useFetchData.e3cab5d1.js";import{m as ge}from"./data.801821c8.js";import{_ as be}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.518ce47a.js";const fe=""+new URL("download_girls.68bfb9e7.webp",import.meta.url).href,S=k=>(ie("data-v-e6bd8660"),k=k(),me(),k),xe={class:"relative pt-12 px-4 min-h-screen"},ye=S(()=>t("div",{class:"absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-emerald-100 -z-10"},null,-1)),ve={class:"max-w-5xl mx-auto border-4 border-transparent p-0 rounded-xl sm:grid sm:grid-cols-4 gap-6 md:p-4 md:border-white"},we={class:"aspect-[2/3] w-56 mx-auto sm:w-full rounded-lg border-2 overflow-hidden border-emerald-500 relative sm:col-span-1"},ke=["src","alt"],Ce={class:"flex gap-1 absolute font-bold top-0 inset-x-0 z-10 text-xs text-white"},$e={key:0,class:"bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"},ze={key:1,class:"bg-rose-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none"},Ne={class:"sm:col-span-3"},Te={class:"text-3xl font-extrabold mt-5 sm:mt-0"},Ie={class:"mb-3 mt-1 text-sm font-semibold text-gray-700"},Ae={class:"font-bold text-sm flex flex-wrap items-center gap-2 my-1"},Fe={class:"font-semibold flex items-center gap-2 my-1"},Se={class:"text-fuchsia-500"},De={key:0,class:"select-none"},Ee={key:1,class:"flex items-center gap-1"},Pe=S(()=>t("div",{class:"flex items-center flex-wrap font-bold text-gray-800 gap-x-4 gap-y-1"},null,-1)),Le={key:0,class:"mt-2"},Re={class:"flex flex-col sm:flex-row items-center gap-3 mt-5 font-bold"},je=["disable"],He=["disable"],Me={class:"max-w-5xl mx-auto mt-5"},Ue={class:"flex items-center gap-6 font-bold text-lg sm:text-xl border-b-2 py-1"},Ve={key:0,class:"mt-6 text-center text-2xl font-bold text-gray-700 select-none"},Be={key:1,class:"flex items-center gap-3 my-5 text-gray-800 font-semibold text-sm flex-wrap"},Ge=["onClick"],Oe={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},qe=["name"],Je={class:"w-max mx-auto mt-4"},Ke=S(()=>t("img",{src:fe,alt:"Download",draggable:"false"},null,-1)),We={class:"bg-white rounded-lg py-4 px-6 w-[90vw] max-w-3xl"},Xe={class:"flex flex-col sm:flex-row items-center gap-2.5 sm:gap-5"},Ye=S(()=>t("h3",{class:"text-2xl font-semibold"},"Chọn chương",-1)),Qe={class:"absolute top-10 w-40 right-1/2 translate-x-1/2 border rounded bg-white max-h-60 overflow-auto"},Ze=["onClick"],et={class:"grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[45vh] overflow-auto my-3 py-1 pr-1 select-none"},tt=["onClick"],ot={class:"flex items-center justify-end gap-5 font-medium"},st=["disabled"],m=50,nt=re({__name:"index",async setup(k){var J,K;let C,M;const D=pe().params.comicId,E=d([]),$=d("chapters"),U=d([]),V=d(null);d(1);const B=d(0),P=d(!1),G=d(!1),O=d(!1),z=d(!1),L=d(!1),q=d(0),R=d([]),v=d(!1),_=d([]),X=(async()=>{const[s,o]=await Promise.all([W(`/truyen-tranh/${D}`),W(`/truyen-tranh/${D}/comments`)]);return P.value=(o==null?void 0:o.total_pages)===(o==null?void 0:o.current_page),U.value=o==null?void 0:o.comments,{comic:s,commentsData:o}})(),{comic:n}=([C,M]=le(()=>X),C=await C,M(),C);if(!n)throw he({statusCode:404,statusMessage:"Page Not Found"});n.chapters=n.chapters.sort((s,o)=>+s.name-+o.name);const N=(K=(J=n.chapters.at(-1))==null?void 0:J.name.match(/\d+(\.\d+)?/))==null?void 0:K[0],f=isNaN(Number(N))?0:Math.ceil(Number(N)/m),T=(s,o)=>{const i=m*6;return[...n.chapters].slice(s<i?0:s-i,o+i).filter(j=>{var c;const a=(c=j.name.match(/\d+(\.\d+)?/))==null?void 0:c[0];return a?parseFloat(a)>=s&&parseFloat(a)<=o+.99:!1})};E.value=T(0,m),R.value=T(0,m);const Y=s=>{B.value=s,E.value=T(s===0?0:s*m+1,(s+1)*m)},Q=s=>{q.value=s,R.value=T(s===0?0:s*m+1,(s+1)*m)},Z=async()=>{try{}catch(s){console.log(s)}finally{G.value=!1}},ee=s=>{if(_.value.includes(s)){const o=_.value.indexOf(s);_.value.splice(o,1)}else _.value=[..._.value,s]},te=async()=>{try{for(const s of _.value){const o=`/download?comicId=${D}&chapterId=${s}`,i=document.createElement("a");i.href=o,i.target="_blank",i.rel="noopener noreferrer",document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)}v.value=!1,_.value=[]}catch(s){console.log(s)}};return ce(()=>{const{clientHeight:s,scrollHeight:o}=V.value;O.value=s<o}),de(v,s=>{document.body.style.overflow=s?"hidden":"auto"}),ue(ge({title:n.name+" | NComics",description:n.content,image:n.thumb_url})),(s,o)=>{const i=se,b=ne,j=ae;return r(),l(h,null,[t("div",xe,[ye,t("div",ve,[t("div",we,[t("img",{class:"w-full h-full object-cover",src:`https://img.otruyenapi.com/uploads/comics/${e(n).thumb_url}`,alt:e(n).name,draggable:"false"},null,8,ke),t("div",Ce,[e(n).status==="Finished"?(r(),l("span",$e," End ")):w("",!0),e(n).is_adult?(r(),l("span",ze," 18+ ")):w("",!0)])]),t("div",Ne,[t("h4",Te,u(e(n).name),1),t("p",Ie,u(e(n).origin_name.join(" | ")),1),t("div",Ae,[(r(!0),l(h,null,x(e(n).genres,a=>(r(),I(i,{to:`/the-loai?type=${a.slug}`,class:"px-2 py-0.5 rounded bg-transparent border-2 border-emerald-300 duration-100 hover:bg-emerald-300"},{default:H(()=>[p(u(a.name),1)]),_:2},1032,["to"]))),256))]),t("div",Fe,[p(" Tác giả: "),Array.isArray(e(n).author)?(r(!0),l(h,{key:0},x(e(n).author,(a,c)=>(r(),l("div",{key:a},[t("p",Se,u(a),1),c<e(n).author.length-1?(r(),l("span",De," - ")):w("",!0)]))),128)):e(n).author==="Updating"?(r(),l("span",Ee,[y(b,{name:"mdi:dots-circle",size:"16",class:"text-emerald-500"}),p(" Updating ")])):(r(),I(i,{key:2,to:`/search?q=${e(n).author.replace(/\s+/g,"+")}`,class:"text-fuchsia-500"},{default:H(()=>[p(u(e(n).author),1)]),_:1},8,["to"]))]),Pe,e(n).content?(r(),l("div",Le,[t("p",{class:g(e(z)?"line-clamp-none":"line-clamp-5"),ref_key:"description",ref:V},u(e(n).content.replace(/\<p\>/g,"").replace(/\<\/p\>/g,"")),3),e(O)?(r(),l("button",{key:0,class:"font-semibold hover:underline",onClick:o[0]||(o[0]=a=>z.value=!e(z))},u(e(z)?"Rút gọn":"Thêm"),1)):w("",!0)])):w("",!0),t("div",Re,[t("button",{onClick:o[1]||(o[1]=()=>{var a;e(n).chapters.length&&("navigateTo"in s?s.navigateTo:e(_e))(`/truyen-tranh/${e(n).slug}/${(a=e(n).chapters[0])==null?void 0:a.name}`)}),class:g(`flex items-center gap-1 border-2 rounded text-white text-lg px-6 py-2 ${e(n).chapters.length?"border-emerald-500 bg-emerald-500":"border-gray-500 bg-gray-500"}`),disable:!e(n).chapters.length},[y(b,{name:"carbon:book",size:"24"}),p(" Đọc ngay ")],10,je),t("button",{class:g(`flex items-center gap-1 rounded border-2 text-lg px-6 py-2 ${e(n).chapters.length?"border-emerald-500 text-emerald-500":"border-gray-500 text-gray-500"}`),onClick:o[2]||(o[2]=a=>v.value=!0),disable:!e(n).chapters.length},[y(b,{name:"octicon:download-16",size:"24"}),p(" Tải xuống ")],10,He)])])]),t("div",Me,[t("div",Ue,[t("button",{class:g(`flex items-center gap-1 ${e($)==="chapters"?"text-emerald-500":""}`),onClick:o[3]||(o[3]=a=>$.value="chapters")},[y(b,{name:"bytesize:book",size:"20"}),p(" Chương ")],2)]),A(t("div",null,[e(n).chapters.length?(r(),l("div",Be,[(r(!0),l(h,null,x(new Array(e(f)),(a,c)=>(r(),l("button",{class:g(`px-2 py-0.5 rounded-full ${c===e(B)?"bg-emerald-100 text-emerald-500":"bg-gray-100"}`),onClick:oe=>Y(c)},[c+1<e(f)?(r(),l(h,{key:0},[p(u(`${c===0?0:c*m+1} - ${(c+1)*m}`),1)],64)):(r(),l(h,{key:1},[p(u(`${e(f)===1?0:c*m+1} - ${e(N)}`),1)],64))],10,Ge))),256))])):(r(),l("h4",Ve," Không có chapter ")),t("ul",Oe,[(r(!0),l(h,null,x(e(E),a=>(r(),I(i,{class:"border rounded px-3 py-2 truncate hover:bg-emerald-50 duration-100",to:`/truyen-tranh/${e(n).slug}/${a.name}`},{default:H(()=>[t("abbr",{name:a.name,class:"no-underline"},u(a.name),9,qe)]),_:2},1032,["to"]))),256))])],512),[[F,e($)==="chapters"]]),A(t("div",null,[y(j,{comments:e(U),"is-end":e(P)},null,8,["comments","is-end"]),A(t("div",Je,[e(G)?(r(),I(b,{key:0,name:"line-md:loading-loop",size:"42"})):(r(),l("button",{key:1,class:"bg-emerald-100 text-emerald-500 font-medium rounded-full px-4 py-1.5",onClick:Z}," Load more "))],512),[[F,!e(P)]])],512),[[F,e($)==="comments"]])])]),t("div",{class:g(`fixed z-50 inset-0 bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center duration-200 ${e(v)?"opacity-1 pointer-events-auto":"opacity-0 pointer-events-none"}`)},[Ke,t("div",We,[t("div",Xe,[Ye,t("div",{class:"border rounded px-3 py-1 relative cursor-pointer",onClick:o[4]||(o[4]=a=>L.value=!e(L))},[p(" Chương "),y(b,{name:"icon-park-outline:down",size:"24",class:"ml-2"}),A(t("ul",Qe,[(r(!0),l(h,null,x(new Array(e(f)),(a,c)=>(r(),l("li",{class:g(`px-2 py-1 border-b last:border-b-0 ${c===e(q)?"text-emerald-500 font-medium":""}`),onClick:oe=>Q(c)},[c+1<e(f)?(r(),l(h,{key:0},[p(u(`${c===0?0:c*m+1} - ${(c+1)*m}`),1)],64)):(r(),l(h,{key:1},[p(u(`${e(f)===1?0:c*m+1} - ${e(N)}`),1)],64))],10,Ze))),256))],512),[[F,e(L)]])])]),t("ul",et,[(r(!0),l(h,null,x(e(R),a=>(r(),l("li",{key:a.name,class:g(`border rounded px-2 py-1 cursor-pointer duration-100 truncate ${e(_).includes(a.name)?"border-emerald-500 bg-emerald-500 text-white":""}`),onClick:c=>ee(a.name)},u(a.name),11,tt))),128))]),t("div",ot,[t("button",{class:"text-rose-500",onClick:o[5]||(o[5]=a=>v.value=!1)}," Huỷ "),t("button",{class:g(`text-white px-2.5 py-1.5 rounded flex items-center gap-1.5 ${e(_).length?"border-emerald-500 bg-emerald-500":"border-gray-500 bg-gray-500"}`),onClick:te,disabled:!e(_).length}," Tải xuống ",10,st)])])],2)],64)}}});const gt=be(nt,[["__scopeId","data-v-e6bd8660"]]);export{gt as default};
