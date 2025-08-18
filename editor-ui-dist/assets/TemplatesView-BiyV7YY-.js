import { d as defineComponent, b as useRouter, h as createElementBlock, g as openBlock, n as normalizeClass, i as createVNode, j as createBaseVNode, N as N8nIcon, t as toDisplayString, l as unref, c as useI18n, _ as _export_sfc, f as createCommentVNode, Q as renderSlot } from "./index-BsWH3eYA.js";
const _hoisted_1 = ["textContent"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GoBackButton",
  setup(__props) {
    const router = useRouter();
    const i18n = useI18n();
    const navigateTo = () => {
      void router.back();
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.wrapper),
        onClick: navigateTo
      }, [
        createVNode(_component_n8n_icon, {
          class: normalizeClass(_ctx.$style.icon),
          icon: "arrow-left"
        }, null, 8, ["class"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.text),
          textContent: toDisplayString(unref(i18n).baseText("template.buttons.goBackButton"))
        }, null, 10, _hoisted_1)
      ], 2);
    };
  }
});
const wrapper = "_wrapper_4nqsp_123";
const icon = "_icon_4nqsp_128";
const text = "_text_4nqsp_129";
const style0$1 = {
  wrapper,
  icon,
  text
};
const cssModules$1 = {
  "$style": style0$1
};
const GoBackButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplatesView",
  props: {
    goBackEnabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.template)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.container)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            _ctx.goBackEnabled ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.goBack)
            }, [
              createVNode(GoBackButton)
            ], 2)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "header")
          ], 2),
          createBaseVNode("div", null, [
            renderSlot(_ctx.$slots, "content")
          ])
        ], 2)
      ], 2);
    };
  }
});
const template = "_template_19t7o_123";
const container = "_container_19t7o_136";
const header = "_header_19t7o_140";
const goBack = "_goBack_19t7o_146";
const style0 = {
  template,
  container,
  header,
  goBack
};
const cssModules = {
  "$style": style0
};
const TemplatesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TemplatesView as T
};
