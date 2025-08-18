import { d as defineComponent, a8 as usePushConnectionStore, x as computed, ci as resolveDirective, h as createElementBlock, g as openBlock, Q as renderSlot, i as createVNode, a4 as N8nTooltip, w as withCtx, j as createBaseVNode, k as createTextVNode, N as N8nIcon, t as toDisplayString, l as unref, c as useI18n, b4 as withDirectives } from "./index-BsWH3eYA.js";
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
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_tooltip = N8nTooltip;
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
                createVNode(_component_n8n_icon, { icon: "triangle-alert" }),
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
