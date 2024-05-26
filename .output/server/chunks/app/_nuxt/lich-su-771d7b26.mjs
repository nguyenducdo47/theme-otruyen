import { H as Head, T as Title, M as Meta } from './components-7b26808c.mjs';
import { _ as __nuxt_component_4 } from './ComicsPagination-3b58604f.mjs';
import { defineComponent, ref, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const COMICS_PER_PAGE = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lich-su",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const comics = ref([]);
    const isFetching = ref(false);
    const currentPage = ref(1);
    const getHistoryComics = () => {
      const db = window.db;
      const trans = db.transaction("history", "readwrite");
      const store = trans.objectStore("history");
      const cursorRequest = store.index("reading_at").openCursor(null, "prevunique");
      const response = [];
      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result;
        if (cursor) {
          response.push(cursor.value);
          cursor.continue();
        } else {
          comics.value = response;
        }
      };
    };
    watch(route, (route2) => {
      getHistoryComics();
      currentPage.value = Number(route2.query.page) || 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
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
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(`L\u1ECBch s\u1EED - Trang ${(_a = unref(route).query.page) != null ? _a : 1} | NComics`)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(`L\u1ECBch s\u1EED - Trang ${(_b = unref(route).query.page) != null ? _b : 1} | NComics`), 1)
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
                  var _a;
                  return [
                    createTextVNode(toDisplayString(`L\u1ECBch s\u1EED - Trang ${(_a = unref(route).query.page) != null ? _a : 1} | NComics`), 1)
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
      _push(`<main class="max-w-6xl mx-auto px-3 min-h-screen">`);
      if (unref(comics).length) {
        _push(ssrRenderComponent(_component_ComicsPagination, {
          "is-fetching": unref(isFetching),
          comics: unref(comics).slice(
            (unref(currentPage) - 1) * COMICS_PER_PAGE,
            unref(currentPage) * COMICS_PER_PAGE
          ),
          "total-pages": Math.ceil(unref(comics).length / COMICS_PER_PAGE),
          title: "L\u1ECBch s\u1EED",
          icon: "mdi:clock-outline",
          "is-history": true,
          onDeleteComic: getHistoryComics
        }, null, _parent));
      } else {
        _push(`<h3 class="text-2xl mt-8 font-bold text-gray-600 text-center"> Kh\xF4ng c\xF3 l\u1ECBch s\u1EED </h3>`);
      }
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lich-su.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lich-su-771d7b26.mjs.map
