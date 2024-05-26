import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_4 } from './ComicCard-750bd7d8.mjs';
import { Grid, Navigation } from 'swiper';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { u as useSeoMeta, a as useServerSeoMeta } from './index-317853a2.mjs';
import { m as meta } from './data-6ac31111.mjs';
import '../server.mjs';
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
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './config-6f8e3cb8.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ComicsSlide",
  __ssrInlineRender: true,
  props: {
    comics: {},
    title: {},
    icon: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const { comics, title, icon, link } = props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_ComicCard = __nuxt_component_4;
      _push(`<!--[--><div class="flex items-center justify-between mb-4 mt-6 md:mt-12"><h2 class="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(icon),
        size: "36",
        class: "text-emerald-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(title))}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(link),
        class: "cursor-pointer rounded-full px-3 py-0.5 overflow-hidden bg-transparent hover:border-transparent border-2 border-emerald-500 group hover:bg-emerald-500 text-emerald-500 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-medium"${_scopeId}> Th\xEAm </span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-medium" }, " Th\xEAm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Swiper, {
        "slides-per-view": 5,
        navigation: true,
        "space-between": 20,
        modules: ["SwiperGrid" in _ctx ? _ctx.SwiperGrid : unref(Grid), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
              rows: 1
            }
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
              rows: 1
            }
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
            grid: {
              rows: 1
            }
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
            grid: {
              rows: 2,
              fill: "row"
            }
          },
          1024: {
            slidesPerView: 5,
            grid: {
              rows: 2,
              fill: "row"
            }
          }
        },
        grid: {
          rows: 2,
          fill: "row"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(comics), (comic) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: comic.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ComicCard, {
                      comic,
                      detail: true
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ComicCard, {
                        comic,
                        detail: true
                      }, null, 8, ["comic"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(comics), (comic) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: comic.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ComicCard, {
                      comic,
                      detail: true
                    }, null, 8, ["comic"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComicsSlide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const [upcomingComics, ongoingComics, completedComics] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useFetchData("/sap-ra-mat"),
      useFetchData("/dang-phat-hanh"),
      useFetchData("/hoan-thanh")
    ])), __temp = await __temp, __restore(), __temp);
    useSeoMeta(meta());
    useServerSeoMeta(meta());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ComicsSlide = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto py-5 px-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ComicsSlide, {
        title: "\u0110ang ph\xE1t h\xE0nh",
        comics: unref(ongoingComics).comics,
        icon: "material-symbols-light:comic-bubble-rounded",
        link: "/dang-phat-hanh"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ComicsSlide, {
        title: "\u0110\xE3 ho\xE0n th\xE0nh",
        comics: unref(completedComics).comics,
        icon: "bxs:badge-check",
        link: "/hoan-thanh"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ComicsSlide, {
        title: "S\u1EAFp ra m\u1EAFt",
        comics: unref(upcomingComics).comics,
        icon: "material-symbols-light:event-upcoming-outline-sharp",
        link: "/sap-ra-mat"
      }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-210f867c.mjs.map
