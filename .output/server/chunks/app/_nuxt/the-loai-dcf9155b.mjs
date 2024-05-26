import { H as Head, T as Title, M as Meta } from './components-7b26808c.mjs';
import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_4 } from './ComicsPagination-3b58604f.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { b as useRouter, a as useRoute, c as createError } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { FreeMode, Navigation } from 'swiper';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './config-6f8e3cb8.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
  __name: "the-loai",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const currentGenre = ref("");
    const comics = ref([]);
    const totalPages = ref(0);
    const genres = ref([]);
    const isFetching = ref(false);
    const router = useRouter();
    const route = useRoute();
    const handleChangeGenre = async (genreId) => {
      currentGenre.value = genreId;
      router.replace({
        query: {
          type: genreId
        }
      });
    };
    const getComics = async (genreId, page2) => {
      try {
        isFetching.value = true;
        const data = await useFetchData(
          genreId === "tat-ca" ? `/truyen-moi?page=${page2}` : `/the-loai/${genreId}?page=${page2}`
        );
        comics.value = data == null ? void 0 : data.comics;
        totalPages.value = data == null ? void 0 : data.totalPages;
        return data;
      } catch (err) {
        console.log(err);
      } finally {
        isFetching.value = false;
      }
    };
    const page = route.query.page;
    const p = page && !isNaN(+page) ? Number(route.query.page) : 1;
    const type = route.query.type;
    currentGenre.value = type ? String(type) : "tat-ca";
    const [comicsData, genresData] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      getComics(currentGenre.value, p),
      useFetchData("/the-loai")
    ])), __temp = await __temp, __restore(), __temp);
    const initSlide = [{ slug: "tat-ca", name: "T\xE1t c\u1EA3" }, ...genresData].findIndex(
      (genre) => genre.slug === route.query.type
    );
    if (initSlide === -1 || !comicsData) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    genres.value = genresData;
    watch(route, async (route2) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const page2 = route2.query.page;
      const p2 = page2 && !isNaN(+page2) ? Number(page2) : 1;
      const genre = route2.query.type ? String(route2.query.type) : "all";
      await getComics(genre, p2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Icon = __nuxt_component_1;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ComicsPagination = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                var _a2, _b2;
                if (_push3) {
                  _push3(`${ssrInterpolate(`${((_a2 = unref(genres).find((genre) => genre.slug === unref(currentGenre))) == null ? void 0 : _a2.name) || `T\u1EA5t c\u1EA3 - Trang ${(_a3 = unref(route).query.page) != null ? _a3 : 1}`} | NComics`)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(`${((_b2 = unref(genres).find((genre) => genre.slug === unref(currentGenre))) == null ? void 0 : _b2.name) || `T\u1EA5t c\u1EA3 - Trang ${(_b3 = unref(route).query.page) != null ? _b3 : 1}`} | NComics`), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: ((_a = unref(genres).find((genre) => genre.id === unref(currentGenre))) == null ? void 0 : _a.description) || "Free comic and manga reader online"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => {
                  var _a3;
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(`${((_a2 = unref(genres).find((genre) => genre.slug === unref(currentGenre))) == null ? void 0 : _a2.name) || `T\u1EA5t c\u1EA3 - Trang ${(_a3 = unref(route).query.page) != null ? _a3 : 1}`} | NComics`), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: ((_b = unref(genres).find((genre) => genre.id === unref(currentGenre))) == null ? void 0 : _b.description) || "Free comic and manga reader online"
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="max-w-6xl mx-auto px-3" data-v-98be7126><h2 class="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-8" data-v-98be7126>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa-solid:crown",
        size: "36",
        class: "text-emerald-500"
      }, null, _parent));
      _push(` Th\u1EC3 lo\u1EA1i </h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        "slides-per-view": "auto",
        loop: false,
        class: "border-y",
        modules: ["SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        "free-mode": true,
        "initial-slide": unref(initSlide)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SwiperSlide, {
              class: `swiper-slide-genre px-5 py-3 select-none cursor-pointer ${"tat-ca" === unref(currentGenre) ? "bg-emerald-500 text-white" : ""}`,
              onClick: ($event) => handleChangeGenre("tat-ca")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` T\u1EA5t c\u1EA3 `);
                } else {
                  return [
                    createTextVNode(" T\u1EA5t c\u1EA3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(genres), (genre) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: genre.slug,
                class: `swiper-slide-genre px-5 py-3 select-none cursor-pointer ${genre.slug === unref(currentGenre) ? "bg-emerald-500 text-white" : ""}`,
                onClick: ($event) => handleChangeGenre(genre.slug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(genre.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(genre.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_SwiperSlide, {
                class: `swiper-slide-genre px-5 py-3 select-none cursor-pointer ${"tat-ca" === unref(currentGenre) ? "bg-emerald-500 text-white" : ""}`,
                onClick: ($event) => handleChangeGenre("tat-ca")
              }, {
                default: withCtx(() => [
                  createTextVNode(" T\u1EA5t c\u1EA3 ")
                ]),
                _: 1
              }, 8, ["class", "onClick"]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(genres), (genre) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: genre.slug,
                  class: `swiper-slide-genre px-5 py-3 select-none cursor-pointer ${genre.slug === unref(currentGenre) ? "bg-emerald-500 text-white" : ""}`,
                  onClick: ($event) => handleChangeGenre(genre.slug)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(genre.name), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="my-3 flex items-center gap-2 rounded text-white" data-v-98be7126></p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/the-loai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theLoai = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98be7126"]]);

export { theLoai as default };
//# sourceMappingURL=the-loai-dcf9155b.mjs.map
