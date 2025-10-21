import { d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, k as unref, m as N8nHeading, Y as renderSlot, _ as _export_sfc, b as useRouter, bk as useTemplatesStore, x as computed, e as createBlock, f as createCommentVNode, dI as N8nLoading, F as Fragment, A as renderList, c8 as NodeIcon, eM as filterTemplateNodes, eK as isFullTemplatesCollection, c as useI18n, eN as isTemplatesWorkflow, p as N8nText, eO as _sfc_main$2, eP as abbreviateNumber } from "./index-lkSN61-i.js";
import { T as Tags } from "./Tags-CKPB64HK.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TemplateDetailsBlock",
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.block)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(unref(N8nHeading), {
            tag: "h3",
            size: "small",
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.content)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
const block = "_block_88jt1_123";
const header = "_header_88jt1_127";
const content = "_content_88jt1_132";
const style0$1 = {
  block,
  header,
  content
};
const cssModules$1 = {
  "$style": style0$1
};
const TemplateDetailsBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplateDetails",
  props: {
    template: {},
    blockTitle: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const i18n = useI18n();
    const templatesStore = useTemplatesStore();
    const categoriesAsTags = computed(
      () => props.template && "categories" in props.template ? props.template.categories.map((category) => ({
        id: `${category.id}`,
        name: category.name
      })) : []
    );
    const redirectToCategory = (id) => {
      templatesStore.resetSessionId();
      void router.push(`/templates?categories=${id}`);
    };
    const redirectToSearchPage = (node) => {
      templatesStore.resetSessionId();
      void router.push(`/templates?search=${node.displayName}`);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nLoading), {
          loading: _ctx.loading,
          rows: 5,
          variant: "p"
        }, null, 8, ["loading"]),
        !_ctx.loading && _ctx.template && _ctx.template.nodes.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 0,
          title: _ctx.blockTitle
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.icons)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filterTemplateNodes)(_ctx.template.nodes), (node) => {
                return openBlock(), createElementBlock("div", {
                  key: node.name,
                  class: normalizeClass(_ctx.$style.icon)
                }, [
                  createVNode(NodeIcon, {
                    "node-type": node,
                    size: 24,
                    "show-tooltip": true,
                    onClick: ($event) => redirectToSearchPage(node)
                  }, null, 8, ["node-type", "onClick"])
                ], 2);
              }), 128))
            ], 2)
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        !_ctx.loading && unref(isFullTemplatesCollection)(_ctx.template) && categoriesAsTags.value.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 1,
          title: unref(i18n).baseText("template.details.categories")
        }, {
          default: withCtx(() => [
            createVNode(unref(Tags), {
              tags: categoriesAsTags.value,
              "onClick:tag": redirectToCategory
            }, null, 8, ["tags"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        !_ctx.loading && _ctx.template ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 2,
          title: unref(i18n).baseText("template.details.details")
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.text)
            }, [
              unref(isTemplatesWorkflow)(_ctx.template) ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("template.details.created")) + " ", 1),
                  createVNode(_sfc_main$2, {
                    date: _ctx.template.createdAt
                  }, null, 8, ["date"]),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("template.details.by")) + " " + toDisplayString(_ctx.template.user ? _ctx.template.user.username : "n8n team"), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.text)
            }, [
              unref(isTemplatesWorkflow)(_ctx.template) && _ctx.template.totalViews !== 0 ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("template.details.viewed")) + " " + toDisplayString(unref(abbreviateNumber)(_ctx.template.totalViews)) + " " + toDisplayString(unref(i18n).baseText("template.details.times")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const icons = "_icons_18wvw_123";
const icon = "_icon_18wvw_123";
const text = "_text_18wvw_134";
const style0 = {
  icons,
  icon,
  text
};
const cssModules = {
  "$style": style0
};
const TemplateDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TemplateDetails as T
};
