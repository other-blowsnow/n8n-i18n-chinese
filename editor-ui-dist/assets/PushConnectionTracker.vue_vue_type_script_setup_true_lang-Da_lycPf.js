import { d as defineComponent, S as usePushConnectionStore, x as computed, h as resolveComponent, bX as resolveDirective, i as createElementBlock, g as openBlock, A as renderSlot, j as createVNode, w as withCtx, k as createBaseVNode, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, aI as withDirectives } from "./index-Y0sphpVt.js";
const _hoisted_1 = {
  key: 0,
  class: "push-connection-lost primary-color"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PushConnectionTracker",
  setup(__props) {
    const pushConnectionStore = usePushConnectionStore();
    const i18n = useI18n();
    const showConnectionLostError = computed(() => {
      return pushConnectionStore.isConnectionRequested && !pushConnectionStore.isConnected;
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("span", null, [
        showConnectionLostError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_n8n_tooltip, { placement: "bottom-end" }, {
            content: withCtx(() => [
              withDirectives(createBaseVNode("div", null, null, 512), [
                [_directive_n8n_html, unref(i18n).baseText("pushConnectionTracker.cannotConnectToServer")]
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("span", null, [
                createVNode(_component_font_awesome_icon, { icon: "exclamation-triangle" }),
                createTextVNode("  " + toDisplayString(unref(i18n).baseText("pushConnectionTracker.connectionLost")), 1)
              ])
            ]),
            _: 1
          })
        ])) : renderSlot(_ctx.$slots, "default", { key: 1 })
      ]);
    };
  }
});
export {
  _sfc_main as _
};
