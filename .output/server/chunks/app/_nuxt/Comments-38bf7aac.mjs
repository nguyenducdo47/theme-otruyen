import __nuxt_component_1 from './Icon-bf3b0694.mjs';
import { defineComponent, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    comments: {},
    isEnd: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    reactive({
      comments: props.comments,
      isEnd: props.isEnd
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 mt-5" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.comments, (comment) => {
        _push(`<div class="flex gap-3 w-full"><img${ssrRenderAttr("src", comment.avatar)}${ssrRenderAttr("alt", comment.username)} class="h-10 w-10 rounded-full object-cover" draggable="false"><div><h5 class="font-bold">${ssrInterpolate(comment.username)}</h5><p class="break-word">${ssrInterpolate(comment.content)}</p><div class="flex items-end gap-1 flex-wrap"><!--[-->`);
        ssrRenderList(comment.stickers, (sticker) => {
          _push(`<img${ssrRenderAttr("src", sticker)} class="max-w-[150px] object-cover rounded h-max" alt="NComics" draggable="false">`);
        });
        _push(`<!--]--></div><p class="text-xs font-semibold text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-4">${ssrInterpolate(comment.created_at)} <span class="flex items-center gap-0.5 text-sm font-normal">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "iconamoon:like-thin",
          size: "16"
        }, null, _parent));
        _push(` ${ssrInterpolate(comment.vote_count)}</span></p><div class="flex sm:gap-5 mt-4">`);
        if (comment.replies.length) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "bi:reply-all",
            class: "rotate-180 text-emerald-500 w-0 max-w-[28px] sm:w-full",
            size: "28"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid gap-4"><!--[-->`);
        ssrRenderList(comment.replies, (reply) => {
          _push(`<div class="grid gap-3"><div class="flex gap-3"><img${ssrRenderAttr("src", reply.avatar)}${ssrRenderAttr("alt", reply.username)} class="h-10 w-10 rounded-full object-cover" draggable="false"><div><h5 class="font-bold">${ssrInterpolate(reply.username)}</h5><p class="break-word"><span class="text-emerald-500 font-bold">${ssrInterpolate(reply.mention_user)}</span> ${ssrInterpolate(reply.content)}</p><div class="flex items-end gap-1 flex-wrap"><!--[-->`);
          ssrRenderList(reply.stickers, (sticker) => {
            _push(`<img${ssrRenderAttr("src", sticker)} class="max-w-[150px] object-cover rounded h-max" alt="NComics" draggable="false">`);
          });
          _push(`<!--]--></div><p class="text-xs text-gray-600 mt-1 flex items-center flex-wrap gap-2 sm:gap-4 font-semibold">${ssrInterpolate(reply.created_at)} <span class="flex items-center gap-0.5 text-sm font-normal">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "iconamoon:like-thin",
            size: "16"
          }, null, _parent));
          _push(` ${ssrInterpolate(reply.vote_count)}</span></p></div></div></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]-->`);
      if (_ctx.isEnd && ((_a = _ctx.comments) == null ? void 0 : _a.length)) {
        _push(`<div class="mt-6 text-center font-bold text-gray-700 select-none"> - END - </div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_b = _ctx.comments) == null ? void 0 : _b.length)) {
        _push(`<div class="mt-6 text-center text-2xl font-bold text-gray-700 select-none"> No comments </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Comments-38bf7aac.mjs.map
