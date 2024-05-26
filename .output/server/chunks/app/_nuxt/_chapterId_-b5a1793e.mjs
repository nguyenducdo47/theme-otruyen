import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { _ as _sfc_main$1 } from './Comments-38bf7aac.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { u as useSeoMeta, a as useServerSeoMeta } from './index-317853a2.mjs';
import { a as useRoute, c as createError } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { m as meta } from './data-6ac31111.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './config-6f8e3cb8.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ufo';
import 'unhead';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
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
  __name: "[chapterId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const currentPage = ref(1);
    const inputRangeVal = ref(1);
    ref(0);
    ref(true);
    const openEpisode = ref(false);
    const showToolbar = ref(true);
    const openComments = ref(false);
    const isFetching = ref(false);
    const isEnd = ref(false);
    const isChangingEpisode = ref(false);
    const comments = ref([]);
    const route = useRoute();
    const { chapterId, comicId } = route.params;
    let {
      images,
      chapters,
      comic_name,
      name,
      author,
      slug,
      status,
      thumb_url,
      is_adult
    } = ([__temp, __restore] = withAsyncContext(() => useFetchData(`/truyen-tranh/${comicId}/${chapterId}`)), __temp = await __temp, __restore(), __temp);
    chapters = chapters.sort((a, b) => +a.name - +b.name);
    if (images.length === 0 && comic_name === "Th\u1EC3 lo\u1EA1i") {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    const getComments = async () => {
      try {
      } catch (err) {
        console.log(err);
      } finally {
        isFetching.value = false;
      }
    };
    watch(inputRangeVal, (newValue) => {
      const el = document.getElementById(newValue.toString());
      el == null ? void 0 : el.scrollIntoView();
    });
    [__temp, __restore] = withAsyncContext(() => getComments()), __temp = await __temp, __restore();
    watch(openComments, (status2) => {
      document.body.style.overflow = status2 ? "hidden" : "auto";
    });
    useSeoMeta(
      meta({
        title: `${name} | NComics`
      })
    );
    useServerSeoMeta(
      meta({
        title: `${name} | NComics`
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_Comments = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-zinc-900 min-h-screen" }, _attrs))} data-v-62e352eb><div class="flex flex-col max-w-2xl mx-auto" data-v-62e352eb>`);
      if (unref(isChangingEpisode)) {
        _push(`<!--[-->`);
        ssrRenderList(new Array(20), (_, idx) => {
          _push(`<span class="aspect-[2/3] bg-zinc-700 animate-pulse" data-v-62e352eb></span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(images), (image) => {
          _push(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", `Page ${image.page}`)} loading="lazy"${ssrRenderAttr("id", image.page)} class="image-source w-full" data-v-62e352eb>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><div class="fixed inset-0" data-v-62e352eb><div class="${ssrRenderClass(`absolute inset-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center justify-center duration-200 ${unref(openComments) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" data-v-62e352eb><div class="${ssrRenderClass(`relative w-[90vw] max-w-4xl bg-white rounded-md duration-300 ${unref(openComments) ? "scale-100" : "scale-0"}`)}" data-v-62e352eb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park:close-small",
        size: "32",
        class: "cursor-pointer absolute top-3 right-3",
        onClick: ($event) => openComments.value = false
      }, null, _parent));
      _push(`<div class="max-h-[75vh] overflow-auto p-4 sm:p-10 text-sm" data-v-62e352eb><h4 class="text-2xl font-extrabold text-zinc-600" data-v-62e352eb>Comments</h4>`);
      _push(ssrRenderComponent(_component_Comments, {
        comments: unref(comments),
        "is-end": unref(isEnd)
      }, null, _parent));
      _push(`<div class="w-max mx-auto pb-2 mt-6" style="${ssrRenderStyle(!unref(isEnd) ? null : { display: "none" })}" data-v-62e352eb>`);
      if (unref(isFetching)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "line-md:loading-loop",
          size: "42"
        }, null, _parent));
      } else {
        _push(`<button class="bg-emerald-100 text-emerald-500 font-medium rounded-full px-4 py-1.5" data-v-62e352eb> Load more </button>`);
      }
      _push(`</div></div></div></div><div class="${ssrRenderClass(`select-none top-0 inset-x-0 bg-[rgba(0,0,0,0.9)] text-center py-3 px-2 text-gray-300 font-semibold duration-200 ${unref(showToolbar) ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0"}`)}" data-v-62e352eb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/truyen-tranh/${unref(comicId)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(name))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park-outline:right",
        size: "16",
        class: "mx-2"
      }, null, _parent));
      _push(`<span data-v-62e352eb>${ssrInterpolate(unref(chapterId))}</span></div><div class="${ssrRenderClass(`select-none absolute flex items-center flex-col-reverse justify-center gap-3 lg:flex-row lg:gap-8 py-2 bottom-0 inset-x-0 bg-[rgba(0,0,0,0.75)] text-gray-400 text-sm font-semibold duration-300
           ${unref(showToolbar) ? "translate-y-0 opacity-1" : "translate-y-full opacity-0"}
        `)}" data-v-62e352eb><div class="items-center gap-2 hidden lg:flex" data-v-62e352eb><span class="w-16" data-v-62e352eb>${ssrInterpolate(`${unref(currentPage)} / ${unref(images).length}`)}</span><input type="range" min="1"${ssrRenderAttr("max", unref(images).length)}${ssrRenderAttr("value", unref(currentPage))} step="1" data-v-62e352eb></div><div class="flex items-center gap-3" data-v-62e352eb><button class="${ssrRenderClass(`px-3 py-1 rounded-full ${unref(chapterId) == unref(chapters).at(0).name ? "bg-gray-200 text-gray-500" : "bg-emerald-200 text-emerald-500 "}`)}"${ssrIncludeBooleanAttr(unref(chapterId) == unref(chapters).at(0).name) ? " disabled" : ""} data-v-62e352eb> Tr\u01B0\u1EDBc </button><button class="${ssrRenderClass(`px-3 py-1 rounded-full ${unref(chapterId) == unref(chapters).at(-1).name ? "bg-gray-200 text-gray-500" : "bg-emerald-200 text-emerald-500 "}`)}"${ssrIncludeBooleanAttr(unref(chapterId) == unref(chapters).at(-1).name) ? " disabled" : ""} data-v-62e352eb> Ti\u1EBFp </button><button class="px-3 py-1 bg-fuchsia-200 text-fuchsia-500 rounded-full relative" data-v-62e352eb> Ch\u01B0\u01A1ng kh\xE1c <div class="${ssrRenderClass(`z-10 absolute bg-zinc-900 w-60 py-3 rounded bottom-9 text-white right-full translate-x-1/3 sm:translate-x-1/2 sm:right-1/2 text-left duration-200 origin-bottom ${unref(openEpisode) ? "scale-100" : "scale-[0.001]"}`)}" data-v-62e352eb><h5 class="text-lg px-4 pb-1" data-v-62e352eb> C\xE1c ch\u01B0\u01A1ng (${ssrInterpolate(unref(chapters).length)}) </h5><ul class="overflow-auto text-sm h-max max-h-72 font-normal" data-v-62e352eb><!--[-->`);
      ssrRenderList(unref(chapters), (chapter) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/truyen-tranh/${unref(comicId)}/${chapter.name}`,
          key: chapter.id,
          onClick: ($event) => isChangingEpisode.value = true,
          class: `py-2 block truncate px-5 duration-100 hover:bg-zinc-950 ${chapter.id == unref(chapterId) ? "text-emerald-500 font-bold" : ""}`,
          id: chapter.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(chapter.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(chapter.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div></button></div><span class="border-b rotate-90 w-4 border-gray-400 hidden lg:inline" data-v-62e352eb></span><div class="flex items-center gap-6" data-v-62e352eb><button class="flex items-center gap-2" data-v-62e352eb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "octicon:download-16",
        size: "24",
        class: "text-white"
      }, null, _parent));
      _push(` T\u1EA3i xu\u1ED1ng </button></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/truyen-tranh/[comicId]/[chapterId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _chapterId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62e352eb"]]);

export { _chapterId_ as default };
//# sourceMappingURL=_chapterId_-b5a1793e.mjs.map
