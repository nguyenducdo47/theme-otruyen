import { H as Head, T as Title, M as Meta } from './components-7b26808c.mjs';
import { _ as __nuxt_component_4 } from './ComicsPagination-3b58604f.mjs';
import { defineComponent, ref, withAsyncContext, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { a as useRoute, c as createError } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as dynamicRoutes } from './data-6ac31111.mjs';
import './Icon-bf3b0694.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const routeData = dynamicRoutes.find((r) => r.path === route.path);
    if (!routeData) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    const comics = ref();
    const isFetching = ref(false);
    const getCommics = async (page2) => {
      try {
        isFetching.value = true;
        const data2 = await useFetchData(`${routeData == null ? void 0 : routeData.apiPath}?page=${page2}`);
        comics.value = data2;
        return data2;
      } catch (err) {
        console.log(err);
      } finally {
        isFetching.value = false;
      }
    };
    const page = route.query.page || 1;
    const data = ([__temp, __restore] = withAsyncContext(() => getCommics(Number(page))), __temp = await __temp, __restore(), __temp);
    if (!data) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    watch(route, async (route2) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const page2 = route2.query.page || 1;
      await getCommics(Number(page2));
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ComicsPagination = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`${ssrInterpolate(`${unref(routeData) ? `${unref(routeData).title} - Trang ${(_a2 = unref(route).query.page) != null ? _a2 : 1} | NComics` : "NComics"}`)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(`${unref(routeData) ? `${unref(routeData).title} - Trang ${(_b2 = unref(route).query.page) != null ? _b2 : 1} | NComics` : "NComics"}`), 1)
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
                  return [
                    createTextVNode(toDisplayString(`${unref(routeData) ? `${unref(routeData).title} - Trang ${(_a2 = unref(route).query.page) != null ? _a2 : 1} | NComics` : "NComics"}`), 1)
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
      _push(`<main class="max-w-6xl mx-auto px-3">`);
      _push(ssrRenderComponent(_component_ComicsPagination, {
        "is-fetching": unref(isFetching),
        comics: (_a = unref(comics)) == null ? void 0 : _a.comics,
        "total-pages": (_b = unref(comics)) == null ? void 0 : _b.totalPages,
        title: (_c = unref(routeData)) == null ? void 0 : _c.title,
        icon: (_d = unref(routeData)) == null ? void 0 : _d.icon
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-631aa6e4.mjs.map
