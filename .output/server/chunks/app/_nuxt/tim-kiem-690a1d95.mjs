import { H as Head, T as Title, M as Meta } from './components-7b26808c.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { defineComponent, ref, withAsyncContext, watch, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'ufo';
import './config-6f8e3cb8.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-awesome-paginate';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tim-kiem",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const comics = ref([]);
    const query = ref("");
    const isFetching = ref(true);
    const totalPages = ref(1);
    const currentPage = ref(1);
    const route = useRoute();
    const router = useRouter();
    const getSearchComics = async () => {
      try {
        isFetching.value = true;
        const data = await useFetchData(
          `/tim-kiem?q=${query.value}&page=${currentPage.value}`
        );
        comics.value = data == null ? void 0 : data.comics;
        totalPages.value = data == null ? void 0 : data.totalPages;
      } catch (err) {
        console.log(err);
      } finally {
        isFetching.value = false;
      }
    };
    query.value = route.query.q;
    currentPage.value = route.query.page ? Number(route.query.page) : 1;
    [__temp, __restore] = withAsyncContext(() => getSearchComics()), await __temp, __restore();
    const handleChangePage = (page) => {
      currentPage.value = page;
      router.replace({ query: { ...route.query, page } });
    };
    watch(route, async (route2) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      query.value = route2.query.q;
      currentPage.value = route2.query.page ? Number(route2.query.page) : 1;
      await getSearchComics();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(`${unref(query) ? `${unref(query)} | NComics` : "NComics"}`)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(`${unref(query) ? `${unref(query)} | NComics` : "NComics"}`), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Free comic and manga reader online"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(`${unref(query) ? `${unref(query)} | NComics` : "NComics"}`), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Free comic and manga reader online"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="max-w-6xl mx-auto min-h-screen py-6 px-3"><div class="flex items-center flex-wrap gap-1 text-gray-500 font-bold text-lg">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park:right",
        size: "16"
      }, null, _parent));
      _push(`<span>Search result</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park:right",
        size: "16"
      }, null, _parent));
      _push(`<span class="text-black">${ssrInterpolate(unref(query))}</span></div><h4 class="text-2xl text-center mt-8 font-bold text-gray-600" style="${ssrRenderStyle(!unref(isFetching) && !unref(comics).length ? null : { display: "none" })}"> No result </h4><ul class="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">`);
      if (unref(isFetching)) {
        _push(`<!--[-->`);
        ssrRenderList(new Array(8), (_, idx) => {
          _push(`<li class="bg-gray-200 animate-pulse rounded-lg w-full h-44"></li>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(comics), (comic) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/truyen-tranh/${comic.slug}`,
            key: comic.slug,
            class: "flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`)}${ssrRenderAttr("alt", comic.name)} class="rounded aspect-[2/3] w-44 mx-auto sm:w-auto sm:h-36 border border-emerald-500 object-cover"${_scopeId}><div class="text-gray-500 font-bold w-full"${_scopeId}><h3 class="text-lg text-black leading-5"${_scopeId}>${ssrInterpolate(comic.name)} </h3><p class="flex items-center gap-1 text-emerald-500"${_scopeId}>`);
                if (Array.isArray(comic.author)) {
                  _push2(`<!--[-->${ssrInterpolate(comic.author.join(" | "))}<!--]-->`);
                } else if (comic.author === "Updating") {
                  _push2(`<!--[-->`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "mdi:dots-circle",
                    size: "16"
                  }, null, _parent2, _scopeId));
                  _push2(` Updating <!--]-->`);
                } else {
                  _push2(`<!--[-->${ssrInterpolate(comic.author)}<!--]-->`);
                }
                _push2(`</p><p class="text-sm line-clamp-2 font-semibold"${_scopeId}>${ssrInterpolate(comic.short_description)}</p><ul class="text-sm flex items-center flex-wrap gap-2 mt-1"${_scopeId}><!--[-->`);
                ssrRenderList(comic.genres, (genre) => {
                  _push2(`<li class="bg-cyan-100 text-cyan-800 text-xs px-2.5 py-0.5 rounded-full"${_scopeId}>${ssrInterpolate(genre.name)}</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                return [
                  createVNode("img", {
                    src: `https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`,
                    alt: comic.name,
                    class: "rounded aspect-[2/3] w-44 mx-auto sm:w-auto sm:h-36 border border-emerald-500 object-cover"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "text-gray-500 font-bold w-full" }, [
                    createVNode("h3", { class: "text-lg text-black leading-5" }, toDisplayString(comic.name) + " ", 1),
                    createVNode("p", { class: "flex items-center gap-1 text-emerald-500" }, [
                      Array.isArray(comic.author) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(comic.author.join(" | ")), 1)
                      ], 64)) : comic.author === "Updating" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode(_component_Icon, {
                          name: "mdi:dots-circle",
                          size: "16"
                        }),
                        createTextVNode(" Updating ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(comic.author), 1)
                      ], 64))
                    ]),
                    createVNode("p", { class: "text-sm line-clamp-2 font-semibold" }, toDisplayString(comic.short_description), 1),
                    createVNode("ul", { class: "text-sm flex items-center flex-wrap gap-2 mt-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(comic.genres, (genre) => {
                        return openBlock(), createBlock("li", {
                          key: genre.id,
                          class: "bg-cyan-100 text-cyan-800 text-xs px-2.5 py-0.5 rounded-full"
                        }, toDisplayString(genre.name), 1);
                      }), 128))
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</ul>`);
      _push(ssrRenderComponent(_component_vue_awesome_paginate, {
        style: !unref(isFetching) && unref(comics).length ? null : { display: "none" },
        "total-items": unref(totalPages),
        "items-per-page": 1,
        "max-pages-shown": 3,
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        "show-ending-buttons": true,
        "hide-prev-next-when-ends": true,
        "disable-breakpoint-buttons": true,
        "on-click": handleChangePage
      }, {
        "first-page-button": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "icon-park:go-start",
              size: "28"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "icon-park:go-start",
                size: "28"
              })
            ];
          }
        }),
        "prev-button": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "icon-park:left",
              size: "28"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "icon-park:left",
                size: "28"
              })
            ];
          }
        }),
        "next-button": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "icon-park:right",
              size: "28"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "icon-park:right",
                size: "28"
              })
            ];
          }
        }),
        "last-page-button": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "icon-park:go-end",
              size: "28"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "icon-park:go-end",
                size: "28"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tim-kiem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tim-kiem-690a1d95.mjs.map
