import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { _ as _sfc_main$1 } from './Comments-38bf7aac.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { u as useSeoMeta, a as useServerSeoMeta } from './index-317853a2.mjs';
import { a as useRoute, c as createError } from '../server.mjs';
import { u as useFetchData } from './useFetchData-49fd42f4.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { m as meta } from './data-6ac31111.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import 'unhead';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import '@unhead/shared';
import 'vue-awesome-paginate';

const _imports_0 = "" + buildAssetsURL("download_girls.68bfb9e7.webp");
const CHAPTER_PER_PAGE = 50;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const comicId = route.params.comicId;
    const chaptersSection = ref([]);
    const currentTab = ref("chapters");
    const comments = ref([]);
    ref(null);
    ref(1);
    const currentChapterPage = ref(0);
    const isEnd = ref(false);
    const isFetching = ref(false);
    const isTooLongDescription = ref(false);
    const showFullDescription = ref(false);
    const showChapterSelection = ref(false);
    const currentDownloadChapterPage = ref(0);
    const chaptersDownloadSection = ref([]);
    const showDownloadModal = ref(false);
    const downloadChapters = ref([]);
    const data = (async () => {
      const [comic2, commentsData] = await Promise.all(
        [
          useFetchData(`/truyen-tranh/${comicId}`),
          useFetchData(`/truyen-tranh/${comicId}/comments`)
        ]
      );
      isEnd.value = (commentsData == null ? void 0 : commentsData.total_pages) === (commentsData == null ? void 0 : commentsData.current_page);
      comments.value = commentsData == null ? void 0 : commentsData.comments;
      return {
        comic: comic2,
        commentsData
      };
    })();
    const { comic } = ([__temp, __restore] = withAsyncContext(() => data), __temp = await __temp, __restore(), __temp);
    if (!comic) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
    comic.chapters = comic.chapters.sort((a, b) => +a.name - +b.name);
    const newestChapter = (_b = (_a = comic.chapters.at(-1)) == null ? void 0 : _a.name.match(/\d+(\.\d+)?/)) == null ? void 0 : _b[0];
    const totalChapterPage = !isNaN(Number(newestChapter)) ? Math.ceil(Number(newestChapter) / CHAPTER_PER_PAGE) : 0;
    const getChapter = (start, end) => {
      const limit = CHAPTER_PER_PAGE * 6;
      const chapters = [...comic.chapters].slice(start < limit ? 0 : start - limit, end + limit).filter((chapter) => {
        var _a2;
        const chap = (_a2 = chapter.name.match(/\d+(\.\d+)?/)) == null ? void 0 : _a2[0];
        if (!chap)
          return false;
        if (parseFloat(chap) >= start && parseFloat(chap) <= end + 0.99)
          return true;
        return false;
      });
      return chapters;
    };
    chaptersSection.value = getChapter(0, CHAPTER_PER_PAGE);
    chaptersDownloadSection.value = getChapter(0, CHAPTER_PER_PAGE);
    watch(showDownloadModal, (status) => {
      document.body.style.overflow = status ? "hidden" : "auto";
    });
    useSeoMeta(
      meta({
        title: comic.name + " | NComics",
        description: comic.content,
        image: comic.thumb_url
      })
    );
    useServerSeoMeta(
      meta({
        title: comic.name + " | NComics",
        description: comic.content,
        image: comic.thumb_url
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_Comments = _sfc_main$1;
      _push(`<!--[--><div class="relative pt-12 px-4 min-h-screen" data-v-e6bd8660><div class="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-emerald-100 -z-10" data-v-e6bd8660></div><div class="max-w-5xl mx-auto border-4 border-transparent p-0 rounded-xl sm:grid sm:grid-cols-4 gap-6 md:p-4 md:border-white" data-v-e6bd8660><div class="aspect-[2/3] w-56 mx-auto sm:w-full rounded-lg border-2 overflow-hidden border-emerald-500 relative sm:col-span-1" data-v-e6bd8660><img class="w-full h-full object-cover"${ssrRenderAttr("src", `https://img.otruyenapi.com/uploads/comics/${unref(comic).thumb_url}`)}${ssrRenderAttr("alt", unref(comic).name)} draggable="false" data-v-e6bd8660><div class="flex gap-1 absolute font-bold top-0 inset-x-0 z-10 text-xs text-white" data-v-e6bd8660>`);
      if (unref(comic).status === "Finished") {
        _push(`<span class="bg-sky-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none" data-v-e6bd8660> End </span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(comic).is_adult) {
        _push(`<span class="bg-rose-500 py-0.5 px-2 rounded-b-sm first:rounded-bl-none" data-v-e6bd8660> 18+ </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="sm:col-span-3" data-v-e6bd8660><h4 class="text-3xl font-extrabold mt-5 sm:mt-0" data-v-e6bd8660>${ssrInterpolate(unref(comic).name)}</h4><p class="mb-3 mt-1 text-sm font-semibold text-gray-700" data-v-e6bd8660>${ssrInterpolate(unref(comic).origin_name.join(" | "))}</p><div class="font-bold text-sm flex flex-wrap items-center gap-2 my-1" data-v-e6bd8660><!--[-->`);
      ssrRenderList(unref(comic).genres, (genre) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/the-loai?type=${genre.slug}`,
          class: "px-2 py-0.5 rounded bg-transparent border-2 border-emerald-300 duration-100 hover:bg-emerald-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(genre.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(genre.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="font-semibold flex items-center gap-2 my-1" data-v-e6bd8660> T\xE1c gi\u1EA3: `);
      if (Array.isArray(unref(comic).author)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(comic).author, (author, idx) => {
          _push(`<div data-v-e6bd8660><p class="text-fuchsia-500" data-v-e6bd8660>${ssrInterpolate(author)}</p>`);
          if (idx < unref(comic).author.length - 1) {
            _push(`<span class="select-none" data-v-e6bd8660> - </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else if (unref(comic).author === "Updating") {
        _push(`<span class="flex items-center gap-1" data-v-e6bd8660>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:dots-circle",
          size: "16",
          class: "text-emerald-500"
        }, null, _parent));
        _push(` Updating </span>`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/search?q=${unref(comic).author.replace(/\s+/g, "+")}`,
          class: "text-fuchsia-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(comic).author)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(comic).author), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="flex items-center flex-wrap font-bold text-gray-800 gap-x-4 gap-y-1" data-v-e6bd8660></div>`);
      if (unref(comic).content) {
        _push(`<div class="mt-2" data-v-e6bd8660><p class="${ssrRenderClass(unref(showFullDescription) ? "line-clamp-none" : "line-clamp-5")}" data-v-e6bd8660>${ssrInterpolate(unref(comic).content.replace(/\<p\>/g, "").replace(/\<\/p\>/g, ""))}</p>`);
        if (unref(isTooLongDescription)) {
          _push(`<button class="font-semibold hover:underline" data-v-e6bd8660>${ssrInterpolate(unref(showFullDescription) ? "R\xFAt g\u1ECDn" : "Th\xEAm")}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col sm:flex-row items-center gap-3 mt-5 font-bold" data-v-e6bd8660><button class="${ssrRenderClass(`flex items-center gap-1 border-2 rounded text-white text-lg px-6 py-2 ${unref(comic).chapters.length ? "border-emerald-500 bg-emerald-500" : "border-gray-500 bg-gray-500"}`)}"${ssrRenderAttr("disable", !unref(comic).chapters.length)} data-v-e6bd8660>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:book",
        size: "24"
      }, null, _parent));
      _push(` \u0110\u1ECDc ngay </button><button class="${ssrRenderClass(`flex items-center gap-1 rounded border-2 text-lg px-6 py-2 ${unref(comic).chapters.length ? "border-emerald-500 text-emerald-500" : "border-gray-500 text-gray-500"}`)}"${ssrRenderAttr("disable", !unref(comic).chapters.length)} data-v-e6bd8660>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "octicon:download-16",
        size: "24"
      }, null, _parent));
      _push(` T\u1EA3i xu\u1ED1ng </button></div></div></div><div class="max-w-5xl mx-auto mt-5" data-v-e6bd8660><div class="flex items-center gap-6 font-bold text-lg sm:text-xl border-b-2 py-1" data-v-e6bd8660><button class="${ssrRenderClass(`flex items-center gap-1 ${unref(currentTab) === "chapters" ? "text-emerald-500" : ""}`)}" data-v-e6bd8660>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bytesize:book",
        size: "20"
      }, null, _parent));
      _push(` Ch\u01B0\u01A1ng </button></div><div style="${ssrRenderStyle(unref(currentTab) === "chapters" ? null : { display: "none" })}" data-v-e6bd8660>`);
      if (!unref(comic).chapters.length) {
        _push(`<h4 class="mt-6 text-center text-2xl font-bold text-gray-700 select-none" data-v-e6bd8660> Kh\xF4ng c\xF3 chapter </h4>`);
      } else {
        _push(`<div class="flex items-center gap-3 my-5 text-gray-800 font-semibold text-sm flex-wrap" data-v-e6bd8660><!--[-->`);
        ssrRenderList(new Array(unref(totalChapterPage)), (_, idx) => {
          _push(`<button class="${ssrRenderClass(`px-2 py-0.5 rounded-full ${idx === unref(currentChapterPage) ? "bg-emerald-100 text-emerald-500" : "bg-gray-100"}`)}" data-v-e6bd8660>`);
          if (idx + 1 < unref(totalChapterPage)) {
            _push(`<!--[-->${ssrInterpolate(`${idx === 0 ? 0 : idx * CHAPTER_PER_PAGE + 1} - ${(idx + 1) * CHAPTER_PER_PAGE}`)}<!--]-->`);
          } else {
            _push(`<!--[-->${ssrInterpolate(`${unref(totalChapterPage) === 1 ? 0 : idx * CHAPTER_PER_PAGE + 1} - ${unref(newestChapter)}`)}<!--]-->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<ul class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-e6bd8660><!--[-->`);
      ssrRenderList(unref(chaptersSection), (chapter) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "border rounded px-3 py-2 truncate hover:bg-emerald-50 duration-100",
          to: `/truyen-tranh/${unref(comic).slug}/${chapter.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<abbr${ssrRenderAttr("name", chapter.name)} class="no-underline" data-v-e6bd8660${_scopeId}>${ssrInterpolate(chapter.name)}</abbr>`);
            } else {
              return [
                createVNode("abbr", {
                  name: chapter.name,
                  class: "no-underline"
                }, toDisplayString(chapter.name), 9, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div><div style="${ssrRenderStyle(unref(currentTab) === "comments" ? null : { display: "none" })}" data-v-e6bd8660>`);
      _push(ssrRenderComponent(_component_Comments, {
        comments: unref(comments),
        "is-end": unref(isEnd)
      }, null, _parent));
      _push(`<div class="w-max mx-auto mt-4" style="${ssrRenderStyle(!unref(isEnd) ? null : { display: "none" })}" data-v-e6bd8660>`);
      if (unref(isFetching)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "line-md:loading-loop",
          size: "42"
        }, null, _parent));
      } else {
        _push(`<button class="bg-emerald-100 text-emerald-500 font-medium rounded-full px-4 py-1.5" data-v-e6bd8660> Load more </button>`);
      }
      _push(`</div></div></div></div><div class="${ssrRenderClass(`fixed z-50 inset-0 bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center duration-200 ${unref(showDownloadModal) ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`)}" data-v-e6bd8660><img${ssrRenderAttr("src", _imports_0)} alt="Download" draggable="false" data-v-e6bd8660><div class="bg-white rounded-lg py-4 px-6 w-[90vw] max-w-3xl" data-v-e6bd8660><div class="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-5" data-v-e6bd8660><h3 class="text-2xl font-semibold" data-v-e6bd8660>Ch\u1ECDn ch\u01B0\u01A1ng</h3><div class="border rounded px-3 py-1 relative cursor-pointer" data-v-e6bd8660> Ch\u01B0\u01A1ng `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park-outline:down",
        size: "24",
        class: "ml-2"
      }, null, _parent));
      _push(`<ul class="absolute top-10 w-40 right-1/2 translate-x-1/2 border rounded bg-white max-h-60 overflow-auto" style="${ssrRenderStyle(unref(showChapterSelection) ? null : { display: "none" })}" data-v-e6bd8660><!--[-->`);
      ssrRenderList(new Array(unref(totalChapterPage)), (_, idx) => {
        _push(`<li class="${ssrRenderClass(`px-2 py-1 border-b last:border-b-0 ${idx === unref(currentDownloadChapterPage) ? "text-emerald-500 font-medium" : ""}`)}" data-v-e6bd8660>`);
        if (idx + 1 < unref(totalChapterPage)) {
          _push(`<!--[-->${ssrInterpolate(`${idx === 0 ? 0 : idx * CHAPTER_PER_PAGE + 1} - ${(idx + 1) * CHAPTER_PER_PAGE}`)}<!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(`${unref(totalChapterPage) === 1 ? 0 : idx * CHAPTER_PER_PAGE + 1} - ${unref(newestChapter)}`)}<!--]-->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><ul class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[45vh] overflow-auto my-3 py-1 pr-1 select-none" data-v-e6bd8660><!--[-->`);
      ssrRenderList(unref(chaptersDownloadSection), (chapter) => {
        _push(`<li class="${ssrRenderClass(`border rounded px-2 py-1 cursor-pointer duration-100 truncate ${unref(downloadChapters).includes(chapter.name) ? "border-emerald-500 bg-emerald-500 text-white" : ""}`)}" data-v-e6bd8660>${ssrInterpolate(chapter.name)}</li>`);
      });
      _push(`<!--]--></ul><div class="flex items-center justify-end gap-5 font-medium" data-v-e6bd8660><button class="text-rose-500" data-v-e6bd8660> Hu\u1EF7 </button><button class="${ssrRenderClass(`text-white px-2.5 py-1.5 rounded flex items-center gap-1.5 ${unref(downloadChapters).length ? "border-emerald-500 bg-emerald-500" : "border-gray-500 bg-gray-500"}`)}"${ssrIncludeBooleanAttr(!unref(downloadChapters).length) ? " disabled" : ""} data-v-e6bd8660> T\u1EA3i xu\u1ED1ng </button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/truyen-tranh/[comicId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6bd8660"]]);

export { index as default };
//# sourceMappingURL=index-beaf41ec.mjs.map
