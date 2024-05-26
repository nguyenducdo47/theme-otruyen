import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString } from 'vue';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { r as routes, d as dynamicRoutes } from './data-6ac31111.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { a as useRoute } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './config-6f8e3cb8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-awesome-paginate';

const _imports_0 = "" + buildAssetsURL("logo.83be12af.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const device = ref("mobile");
    const searchValue = ref("");
    const suggestComics = ref([]);
    const searchInput = ref(null);
    const showSuggest = ref(false);
    const openSidebar = ref(false);
    watch(openSidebar, (status) => {
      document.body.style.overflow = status ? "hidden" : "auto";
    });
    let timeout;
    watch(searchValue, (newValue) => {
      if (!newValue) {
        suggestComics.value = [];
        return;
      }
      if (timeout)
        clearTimeout(timeout);
      timeout = setTimeout(async () => {
        const result = await useFetchData(
          `/tim-kiem?q=${newValue.replace(/\s+/g, "+")}`
        );
        suggestComics.value = result.comics.slice(0, 10);
        if (!(searchInput.value === document.activeElement))
          return;
        showSuggest.value = result.length;
      }, 200);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "shadow bg-white fixed z-50 w-full" }, _attrs))} data-v-5a425934><nav class="max-w-7xl h-12 md:h-14 mx-auto flex items-center justify-between px-3" data-v-5a425934><div class="flex items-center gap-2 h-full" data-v-5a425934>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 h-full select-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="NComics" class="h-full py-2" draggable="false" data-v-5a425934${_scopeId}><h1 class="text-2xl font-bold text-emerald-500 chocopy" data-v-5a425934${_scopeId}>NComics</h1>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "NComics",
                class: "h-full py-2",
                draggable: "false"
              }),
              createVNode("h1", { class: "text-2xl font-bold text-emerald-500 chocopy" }, "NComics")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="items-center gap-2 text-lg ml-6 text-base hidden lg:flex" data-v-5a425934><!--[-->`);
      ssrRenderList(unref(routes), (route) => {
        _push(`<li data-v-5a425934>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: route.path,
          class: "px-4 py-2 duration-150 font-bold hover:text-emerald-500",
          "active-class": "bg-emerald-500 rounded-full text-white hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (unref(device) === "laptop") {
        _push(`<div class="items-center gap-3 flex" data-v-5a425934>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/lich-su" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:outline-history",
                size: "30",
                class: "text-blue-500"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:outline-history",
                  size: "30",
                  class: "text-blue-500"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<form class="flex items-center rounded-full border py-2 focus-within:border-emerald-500 duration-100 mx-4 relative" data-v-5a425934><input type="text" class="outline-none text-sm pl-3 rounded-full" placeholder="T\xECm truy\u1EC7n, t\xE1c gi\u1EA3,..."${ssrRenderAttr("value", unref(searchValue))} data-v-5a425934><button type="submit" class="flex items-center px-3" data-v-5a425934>`);
        _push(ssrRenderComponent(_component_Icon, { name: "iconamoon:search-bold" }, null, _parent));
        _push(`</button><ul class="z-10 absolute top-11 left-1/2 -translate-x-1/2 w-72 h-max max-h-80 overflow-auto shadow rounded bg-white" style="${ssrRenderStyle(unref(showSuggest) ? null : { display: "none" })}" data-v-5a425934><!--[-->`);
        ssrRenderList(unref(suggestComics), (comic) => {
          _push(`<li class="flex gap-2 p-2 border-b hover:bg-gray-200 duration-100 cursor-pointer" data-v-5a425934><img${ssrRenderAttr("src", `https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`)}${ssrRenderAttr("alt", comic.name)} class="border border-emerald-500 w-16 h-24 object-cover object-center rounded" data-v-5a425934><div data-v-5a425934><h6 class="font-bold text-sm" data-v-5a425934>${ssrInterpolate(comic.name)} </h6><p class="text-sm font-bold text-emerald-500 flex items-center gap-1" data-v-5a425934>`);
          if (comic.author === "Updating") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi:dots-circle",
              size: "16"
            }, null, _parent));
            _push(` Updating <!--]-->`);
          } else {
            _push(`<!--[-->${ssrInterpolate(comic.author.join(" | "))}<!--]-->`);
          }
          _push(`</p><p class="text-xs font-semibold flex items-center" data-v-5a425934>`);
          if (Array.isArray(comic.category)) {
            _push(`<!--[-->${ssrInterpolate(comic.category.map((c) => c.name).join(", "))}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div></li>`);
        });
        _push(`<!--]--></ul></form></div>`);
      } else {
        _push(`<div data-v-5a425934><button data-v-5a425934>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:menu",
          size: "32"
        }, null, _parent));
        _push(`</button><div class="${ssrRenderClass(`fixed inset-0 bg-[rgba(0,0,0,0.85)] duration-200 ${unref(openSidebar) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" data-v-5a425934><div class="${ssrRenderClass(`absolute right-0 inset-y-0 bg-white p-5 pt-3 w-11/12 max-w-sm duration-200 ${unref(openSidebar) ? "translate-x-0" : "translate-x-full"}`)}" data-v-5a425934><button class="ml-auto block w-max mb-2" data-v-5a425934>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ep:close-bold",
          size: "28"
        }, null, _parent));
        _push(`</button><form class="flex items-center rounded-full border py-2 focus-within:border-emerald-500 duration-100 relative mb-3" data-v-5a425934><input type="text" class="outline-none text-sm pl-3 rounded-full w-full" placeholder="T\xECm truy\u1EC7n, t\xE1c gi\u1EA3,..."${ssrRenderAttr("value", unref(searchValue))} data-v-5a425934><button type="submit" class="flex items-center px-3" data-v-5a425934>`);
        _push(ssrRenderComponent(_component_Icon, { name: "iconamoon:search-bold" }, null, _parent));
        _push(`</button><ul class="absolute top-11 left-1/2 -translate-x-1/2 w-full h-max max-h-80 overflow-auto shadow rounded bg-white" style="${ssrRenderStyle(unref(showSuggest) ? null : { display: "none" })}" data-v-5a425934><!--[-->`);
        ssrRenderList(unref(suggestComics), (comic) => {
          _push(`<li class="flex gap-2 p-2 border-b hover:bg-gray-200 duration-100 cursor-pointer" data-v-5a425934><img${ssrRenderAttr("src", comic.thumbnail)}${ssrRenderAttr("alt", comic.title)} class="border border-emerald-500 w-16 h-24 object-cover object-center rounded" data-v-5a425934><div data-v-5a425934><h6 class="font-bold text-sm" data-v-5a425934>${ssrInterpolate(comic.title)} <span class="font-normal" data-v-5a425934> (${ssrInterpolate(comic.lastest_chapter)}) </span></h6><p class="text-sm font-bold text-emerald-500 flex items-center gap-1" data-v-5a425934>`);
          if (comic.authors === "Updating") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi:dots-circle",
              size: "16"
            }, null, _parent));
            _push(` Updating <!--]-->`);
          } else {
            _push(`<!--[-->${ssrInterpolate(comic.author.join(" | "))}<!--]-->`);
          }
          _push(`</p><p class="text-xs font-semibold flex items-center" data-v-5a425934>`);
          if (Array.isArray(comic.genres)) {
            _push(`<!--[-->${ssrInterpolate(comic.genres.join(", "))}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div></li>`);
        });
        _push(`<!--]--></ul></form><ul class="grid gap-3 text-lg font-semibold" data-v-5a425934>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "active-class": "text-emerald-500",
          onClick: ($event) => openSidebar.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ion:home-outline",
                size: "20",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` Trang ch\u1EE7 `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ion:home-outline",
                  size: "20",
                  class: "mr-1"
                }),
                createTextVNode(" Trang ch\u1EE7 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/the-loai?type=tat-ca",
          "active-class": "text-emerald-500",
          onClick: ($event) => openSidebar.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa-solid:crown",
                size: "20",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` Th\u1EC3 lo\u1EA1i `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa-solid:crown",
                  size: "20",
                  class: "mr-1"
                }),
                createTextVNode(" Th\u1EC3 lo\u1EA1i ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(dynamicRoutes), (route) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: route.path,
            to: route.path,
            "active-class": "text-emerald-500",
            onClick: ($event) => openSidebar.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: route.icon,
                  size: "20",
                  class: "mr-1"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(route.title)}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: route.icon,
                    size: "20",
                    class: "mr-1"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(route.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lich-su",
          "active-class": "text-emerald-500",
          onClick: ($event) => openSidebar.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:clock-outline",
                size: "20",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` L\u1ECBch s\u1EED `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "mdi:clock-outline",
                  size: "20",
                  class: "mr-1"
                }),
                createTextVNode(" L\u1ECBch s\u1EED ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</ul></div></div></div>`);
      }
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a425934"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Icon = __nuxt_component_1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="max-w-7xl px-4 py-12 mx-auto space-y-8 overflow-hidden"><div class="flex justify-center mt-8 space-x-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    rel: "noopener noreferrer",
    to: "https://www.facebook.com/ducdo.210501/",
    class: "text-gray-400 hover:text-gray-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Facebook</span>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "mdi:facebook",
          size: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Facebook"),
          createVNode(_component_Icon, {
            name: "mdi:facebook",
            size: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><p class="mt-8 text-base leading-6 text-center text-gray-400"> \xA9 ${ssrInterpolate(( new Date()).getFullYear())} NComics\u2122. All rights reserved. </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const showFloatIcon = ref(false);
    const isInReading = ref(false);
    const isLoading = ref(true);
    ref();
    const route = useRoute();
    watch(route, (route2) => {
      isInReading.value = !!route2.params.chapterId;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, {
        style: !unref(isInReading) ? null : { display: "none" }
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(`fixed z-50 inset-0 bg-white flex items-center justify-center duration-300 ${unref(isLoading) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" data-v-5e3e6bf8><svg class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg" data-v-5e3e6bf8><defs data-v-5e3e6bf8><linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5" data-v-5e3e6bf8><stop offset="0%" stop-color="#22c55e" data-v-5e3e6bf8></stop><stop offset="100%" stop-color="#3b82f6" data-v-5e3e6bf8></stop></linearGradient><linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1" data-v-5e3e6bf8><stop offset="0%" stop-color="#22c55e" data-v-5e3e6bf8></stop><stop offset="100%" stop-color="#3b82f6" data-v-5e3e6bf8></stop></linearGradient></defs><circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" data-v-5e3e6bf8></circle><line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" data-v-5e3e6bf8></line></svg></div><button class="${ssrRenderClass(`fixed p-2 bottom-6 right-6 flex items-center justify-center aspect-square rounded-full shadow bg-gray-50 -rotate-45 duration-200 sm:bottom-6 sm:right-6 ${unref(showFloatIcon) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" data-v-5e3e6bf8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:rocket-20-regular",
        size: "30"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_Footer, {
        style: !unref(isInReading) ? null : { display: "none" }
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e3e6bf8"]]);

export { _default as default };
//# sourceMappingURL=default-28ac64fd.mjs.map
