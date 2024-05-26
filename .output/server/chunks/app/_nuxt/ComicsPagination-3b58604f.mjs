import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { _ as __nuxt_component_4$1 } from './ComicCard-750bd7d8.mjs';
import { useSSRContext, defineComponent, ref, reactive, watch, resolveComponent, unref, isRef, withCtx, createVNode } from 'vue';
import { a as useRoute, b as useRouter } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComicsPagination",
  __ssrInlineRender: true,
  props: {
    comics: {},
    totalPages: {},
    isFetching: { type: Boolean },
    title: {},
    icon: {},
    isHistory: { type: Boolean }
  },
  emits: ["delete-comic"],
  setup(__props, { emit }) {
    const props = __props;
    const currentPage = ref(1);
    const route = useRoute();
    const router = useRouter();
    const { icon, title, isHistory } = props;
    reactive({
      comics: props.comics,
      totalPages: props.totalPages || 0,
      isFetching: props.isFetching || false
    });
    watch(route, (route2) => {
      const page = route2.query.page || 1;
      currentPage.value = Number(page);
    });
    const handleChangePage = (page) => {
      currentPage.value = page;
      router.replace({ query: { ...route.query, page } });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_ComicCard = __nuxt_component_4$1;
      const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
      _push(`<!--[-->`);
      if (unref(title)) {
        _push(`<h2 class="flex items-center gap-2 text-xl title md:text-3xl font-bold mb-4 mt-12" data-v-5187e89f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(icon),
          size: "36",
          class: "text-emerald-500"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(title))} - Trang ${ssrInterpolate(unref(currentPage))}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-1.5 md:gap-3 lg:gap-4 responsive-devices" data-v-5187e89f>`);
      if (_ctx.isFetching) {
        _push(`<!--[-->`);
        ssrRenderList(new Array(20), (_, idx) => {
          _push(`<div class="aspect-[2/3] rounded bg-gray-100 animation-pulse" data-v-5187e89f></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.comics, (comic) => {
          _push(`<div data-v-5187e89f>`);
          _push(ssrRenderComponent(_component_ComicCard, {
            "is-history": unref(isHistory),
            comic,
            detail: true,
            onDeleteComic: (id) => emit("delete-comic", id)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_vue_awesome_paginate, {
        "total-items": _ctx.totalPages,
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComicsPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5187e89f"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=ComicsPagination-3b58604f.mjs.map
