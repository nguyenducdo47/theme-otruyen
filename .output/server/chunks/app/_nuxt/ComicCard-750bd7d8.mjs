import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComicCard",
  __ssrInlineRender: true,
  props: {
    comic: {},
    detail: { type: Boolean },
    isHistory: { type: Boolean }
  },
  emits: ["delete-comic"],
  setup(__props, { emit }) {
    const props = __props;
    const { comic, detail, isHistory = false } = props;
    const {
      author,
      followers,
      slug,
      status,
      thumb_url,
      name,
      total_comments,
      total_views,
      is_trending,
      updated_at,
      chapter_id,
      last_reading
    } = comic;
    const isImageLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-md duration-500 border-2 border-transparent md:hover:border-emerald-300 relative group md:group-hover:shadow-md cursor-pointer" }, _attrs))} data-v-12ddb635><div class="flex gap-1 absolute font-semibold top-0 inset-x-0 z-10 text-xs text-white" data-v-12ddb635>`);
      if (unref(is_trending)) {
        _push(`<span class="bg-rose-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none" data-v-12ddb635> Hot </span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) === "Completed") {
        _push(`<span class="bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none" data-v-12ddb635> End </span>`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = unref(updated_at)) == null ? void 0 : _a.includes("tr\u01B0\u1EDBc")) && Number((_b = unref(updated_at).match(/\d+/)) == null ? void 0 : _b[0]) <= 3) {
        _push(`<span class="bg-amber-400 py-0.5 px-2 rounded-b-sm first:rounded-bl-none" data-v-12ddb635> Up </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-12ddb635><div class="${ssrRenderClass(`absolute inset-0 flex items-center justify-center text-white bg-gray-200 duration-150 ${unref(isImageLoaded) ? "hidden" : "block"}`)}" data-v-12ddb635>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "line-md:loading-loop",
        size: "48"
      }, null, _parent));
      _push(`</div><img${ssrRenderAttr("src", `https://img.otruyenapi.com/uploads/comics/${unref(thumb_url)}`)}${ssrRenderAttr("alt", unref(name))} class="w-full aspect-[2/3] object-cover object-center scale-[1.01] group-hover:scale-105 duration-300 origin-bottom select-none" loading="lazy" data-v-12ddb635></div><div class="absolute top-1/2 bottom-0 inset-x-0 flex flex-col justify-end px-2 sm:px-4 py-2 bg-gradient-to-b from-transparent to-black" data-v-12ddb635><h5 class="font-bold leading-5 text-lg text-white group-hover:text-emerald-400 text-shadow duration-200 line-clamp-2" data-v-12ddb635><abbr${ssrRenderAttr("title", unref(name))} class="no-underline" data-v-12ddb635>${ssrInterpolate(unref(name))}</abbr></h5>`);
      if (unref(detail)) {
        _push(`<!--[--><hr class="mt-3 mb-0.5 border-gray-500" data-v-12ddb635><div data-v-12ddb635><p class="text-sm text-gray-300 truncate font-semibold" data-v-12ddb635>`);
        if (Array.isArray(unref(author))) {
          _push(`<!--[-->${ssrInterpolate(unref(author).join(" | "))}<!--]-->`);
        } else if (unref(author) === "Updating") {
          _push(`<span class="flex items-center gap-1" data-v-12ddb635>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:dots-circle",
            size: "16",
            class: "text-emerald-500"
          }, null, _parent));
          _push(` Updating </span>`);
        } else {
          _push(`<!--[-->${ssrInterpolate(unref(author))}<!--]-->`);
        }
        _push(`</p>`);
        if (!unref(isHistory)) {
          _push(`<div class="hidden md:flex items-center gap-0.5 justify-center gap-x-2 gap-y-1 text-emerald-400 text-xs py-1 mt-0.5" data-v-12ddb635></div>`);
        } else {
          _push(`<div class="text-gray-300" data-v-12ddb635><p class="text-sm font-semibold flex items-center gap-0.5 mb-1 text-fuchsia-400" data-v-12ddb635>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:read-cv-logo-fill",
            size: "18"
          }, null, _parent));
          _push(` ${ssrInterpolate(unref(last_reading))}</p><div class="flex items-center gap-1 text-sm text-white" data-v-12ddb635><button class="bg-sky-500 w-full px-2 py-1 rounded-sm flex justify-center items-center gap-1" data-v-12ddb635>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "system-uicons:book-text",
            size: "20"
          }, null, _parent));
          _push(` \u0110\u1ECDc ti\u1EBFp </button><button class="bg-rose-500 px-2 py-1 rounded-sm" data-v-12ddb635>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:trash",
            size: "20"
          }, null, _parent));
          _push(`</button></div></div>`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<span class="py-1" data-v-12ddb635></span>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComicCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12ddb635"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=ComicCard-750bd7d8.mjs.map
