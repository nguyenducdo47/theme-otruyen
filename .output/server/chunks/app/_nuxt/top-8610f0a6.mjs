import { H as Head, T as Title, M as Meta } from './components-7b26808c.mjs';
import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { _ as __nuxt_component_4 } from './ComicsPagination-3b58604f.mjs';
import { defineComponent, ref, withAsyncContext, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter, c as createError } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { t as topRoutes, f as filterValues } from './data-6ac31111.mjs';
import './config-6f8e3cb8.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './ComicCard-750bd7d8.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
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
  __name: "top",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const currentTab = ref("all");
    const filterValue = ref("all");
    const comics = ref([]);
    const totalPages = ref(1);
    const isFetching = ref(false);
    const route = useRoute();
    useRouter();
    const getComics = async (tab, page2 = 1) => {
      try {
        isFetching.value = true;
        const data2 = await useFetchData(
          `/top/${tab === "all" ? "" : tab}?page=${page2}&status=${filterValue.value}`
        );
        comics.value = data2.comics;
        totalPages.value = data2.total_pages;
        return data2;
      } catch (err) {
        console.log(err);
      } finally {
        isFetching.value = false;
      }
    };
    const currentQuery = route.query.tab;
    currentTab.value = topRoutes.findIndex((r) => r.type === currentQuery) > -1 ? currentQuery : "all";
    const page = route.query.page;
    const p = page && !isNaN(+page) ? Number(route.query.page) : 1;
    const currentFilter = route.query.filter;
    filterValue.value = filterValues.findIndex((r) => r.value === currentFilter) > -1 ? currentFilter : "all";
    const data = ([__temp, __restore] = withAsyncContext(() => getComics(currentTab.value, p)), __temp = await __temp, __restore(), __temp);
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    watch([currentTab, route], async ([newTab, route2]) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const page2 = route2.query.page || 1;
      await getComics(newTab, Number(page2));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Icon = __nuxt_component_1;
      const _component_ComicsPagination = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(`${((_a = unref(topRoutes).find((route2) => route2.type === unref(currentTab))) == null ? void 0 : _a.name) + ` - Page ${(_a2 = unref(route).query.page) != null ? _a2 : 1}` || "Genres"} | NComics`)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(`${((_b = unref(topRoutes).find((route2) => route2.type === unref(currentTab))) == null ? void 0 : _b.name) + ` - Page ${(_b2 = unref(route).query.page) != null ? _b2 : 1}` || "Genres"} | NComics`), 1)
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
                default: withCtx(() => {
                  var _a2;
                  var _a;
                  return [
                    createTextVNode(toDisplayString(`${((_a = unref(topRoutes).find((route2) => route2.type === unref(currentTab))) == null ? void 0 : _a.name) + ` - Page ${(_a2 = unref(route).query.page) != null ? _a2 : 1}` || "Genres"} | NComics`), 1)
                  ];
                }),
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
      _push(`<main class="max-w-6xl mx-auto px-3"><ul class="flex flex-wrap items-center gap-1.5 mt-5 sm:gap-3"><!--[-->`);
      ssrRenderList(unref(topRoutes), (route2) => {
        _push(`<li class="${ssrRenderClass(`flex items-center gap-1 px-3 py-2 rounded cursor-pointer duration-150 select-none ${route2.type === unref(currentTab) ? "bg-emerald-500 text-white" : ""}`)}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: route2.icon,
          size: "24"
        }, null, _parent));
        _push(` ${ssrInterpolate(route2.name)}</li>`);
      });
      _push(`<!--]--></ul><ul class="flex items-center flex-wrap gap-2.5 mb-5 mt-3 font-semibold sm:gap-5"><!--[-->`);
      ssrRenderList(unref(filterValues), (item) => {
        _push(`<li class="${ssrRenderClass(`min-w-[60px] cursor-pointer text-center border px-3 py-1.5 rounded ${item.value === unref(filterValue) ? "border-emerald-500 text-emerald-500" : ""}`)}">${ssrInterpolate(item.label)}</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_ComicsPagination, {
        comics: unref(comics),
        "total-pages": unref(totalPages),
        "is-fetching": unref(isFetching)
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/top.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=top-8610f0a6.mjs.map
