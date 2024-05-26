import{f as P,c as R,k as U}from"./entry.71724ffc.js";import{a as k,t as A,N as F,aa as D,b as H,u as v,g as j,j as L,r as M}from"./swiper-vue.1fc45518.js";const N=()=>null;function T(...s){const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,t,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??N,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=P(),c=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],u=()=>c()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:k(c()??e.default()),pending:k(!u()),error:A(a.payload._errors,r),status:k("idle")});const i={...a._asyncData[r]};i.refresh=i.execute=(o={})=>{if(a._asyncDataPromises[r]){if(o.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((o._initial||a.isHydrating&&o._initial!==!1)&&u())return c();i.pending.value=!0,i.status.value="pending";const d=new Promise((l,p)=>{try{l(t(a))}catch(b){p(b)}}).then(l=>{if(d.cancelled)return a._asyncDataPromises[r];let p=l;e.transform&&(p=e.transform(l)),e.pick&&(p=E(p,e.pick)),i.data.value=p,i.error.value=null,i.status.value="success"}).catch(l=>{if(d.cancelled)return a._asyncDataPromises[r];i.error.value=l,i.data.value=v(e.default()),i.status.value="error"}).finally(()=>{d.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=R(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=d,a._asyncDataPromises[r]};const f=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const o=j();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const l=o._nuxtOnBeforeMountCbs;o&&(F(()=>{l.forEach(p=>{p()}),l.splice(0,l.length)}),D(()=>l.splice(0,l.length)))}h&&a.isHydrating&&u()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&H(e.watch,()=>i.refresh());const d=a.hook("app:data:refresh",l=>{if(!l||l.includes(r))return i.refresh()});o&&D(d)}const y=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(y,i),y}function E(s,n){const r={};for(const t of n)r[t]=s[t];return r}const W={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function $(s,n={}){n={...W,...n};const r=O(n);return r.dispatch(s),r.toString()}function O(s){const n=[];let r=[];const t=e=>{n.push(e)};return{toString(){return n.join("")},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){if(e&&typeof e.toJSON=="function")return this._object(e.toJSON());const a=/\[object (.*)]/i,c=Object.prototype.toString.call(e),u=a.exec(c),i=u?u[1].toLowerCase():"unknown:["+c.toLowerCase()+"]";let f=null;if((f=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](e):s.ignoreUnknown||this._unkown(e,i);else{let h=Object.keys(e);s.unorderedObjects&&(h=h.sort()),s.respectType!==!1&&!C(e)&&h.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(h=h.filter(function(y){return!s.excludeKeys(y)})),t("object:"+h.length+":");for(const y of h)this.dispatch(y),t(":"),s.excludeValues||this.dispatch(e[y]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:s.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const c=[],u=e.map(i=>{const f=O(s);return f.dispatch(i),c.push(f.getContext()),f.toString()});return r=[...r,...c],u.sort(),this._array(u,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this._array(Array.from(e.entries()),!0)},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),C(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function C(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class x{constructor(n,r){n=this.words=n||[],this.sigBytes=r!==void 0?r:n.length*4}toString(n){return(n||K).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new x([...this.words])}}const K={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},I={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,a=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|a<<8|c;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(u>>>6*(3-i)&63))}return r.join("")}},J={parse(s){const n=s.length,r=[];for(let t=0;t<n;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new x(r,n)}},q={parse(s){return J.parse(unescape(encodeURIComponent(s)))}};class G{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new x,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=q.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new x(r,a)}}class V extends G{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const Z=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Q=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class X extends V{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new x([...Z])}_doProcessBlock(n,r){const t=this._hash.words;let e=t[0],a=t[1],c=t[2],u=t[3],i=t[4],f=t[5],h=t[6],y=t[7];for(let o=0;o<64;o++){if(o<16)w[o]=n[r+o]|0;else{const B=w[o-15],m=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,g=w[o-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;w[o]=m+w[o-7]+z+w[o-16]}const d=i&f^~i&h,l=e&a^e&c^a&c,p=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),b=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),S=y+b+d+Q[o]+w[o],_=p+l;y=h,h=f,f=i,i=u+S|0,u=c,c=a,a=e,e=S+_|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+c|0,t[3]=t[3]+u|0,t[4]=t[4]+i|0,t[5]=t[5]+f|0,t[6]=t[6]+h|0,t[7]=t[7]+y|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Y(s){return new X().finalize(s).toString(I)}function tt(s,n={}){const r=typeof s=="string"?s:$(s,n);return Y(r).slice(0,10)}function et(s,n,r){const[t={},e]=typeof n=="string"?[{},n]:[n,r],a=t.key||tt([e,v(t.baseURL),typeof s=="string"?s:"",v(t.params||t.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const c=a===e?"$f"+a:a,u=L(()=>{let m=s;return typeof m=="function"&&(m=m()),v(m)});if(!t.baseURL&&typeof u.value=="string"&&u.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:f,default:h,transform:y,pick:o,watch:d,immediate:l,...p}=t,b=M({...p,cache:typeof t.cache=="boolean"?void 0:t.cache}),S={server:i,lazy:f,default:h,transform:y,pick:o,immediate:l,watch:d===!1?[]:[b,u,...d||[]]};let _;return T(c,()=>{var g;return(g=_==null?void 0:_.abort)==null||g.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof u.value=="string"&&u.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(u.value,{signal:_.signal,...b})},S)}const nt=async s=>{try{const r=U().public.baseURL,{data:t}=await et(s,{baseURL:r,method:"GET",cache:"force-cache"},"$6yg2ReZdU7");return t.value}catch(n){console.log(n),console.log(n)}};export{nt as u};
