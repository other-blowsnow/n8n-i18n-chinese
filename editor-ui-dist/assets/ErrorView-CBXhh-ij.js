import { d as defineComponent, b as useRouter, h as resolveComponent, i as createElementBlock, g as openBlock, j as createVNode, k as createBaseVNode, n as normalizeClass, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, e as createBlock, f as createCommentVNode, V as VIEWS, _ as _export_sfc } from "./index-Y0sphpVt.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ErrorView",
  props: {
    messageKey: {},
    errorCode: {},
    redirectTextKey: {},
    redirectPage: {}
  },
  setup(__props) {
    const router = useRouter();
    const props = __props;
    const i18n = useI18n();
    function onButtonClick() {
      void router.push({ name: props.redirectPage ?? VIEWS.HOMEPAGE });
    }
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_button = resolveComponent("n8n-button");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_font_awesome_icon, {
          icon: "exclamation-triangle",
          class: normalizeClass(_ctx.$style.icon)
        }, null, 8, ["class"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.message)
        }, [
          createBaseVNode("div", null, [
            createVNode(_component_n8n_heading, { size: "2xlarge" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText(_ctx.messageKey)), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", null, [
            _ctx.errorCode ? (openBlock(), createBlock(_component_n8n_text, {
              key: 0,
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.errorCode) + " " + toDisplayString(unref(i18n).baseText("error")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ], 2),
        createVNode(_component_n8n_button, {
          label: unref(i18n).baseText(_ctx.redirectTextKey),
          onClick: onButtonClick
        }, null, 8, ["label"])
      ], 2);
    };
  }
});
const container = "_container_1swt8_123";
const icon = "_icon_1swt8_132";
const message = "_message_1swt8_139";
const style0 = {
  container,
  icon,
  message
};
const cssModules = {
  "$style": style0
};
const ErrorView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ErrorView as default
};
