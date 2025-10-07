import { d as defineComponent, a1 as usePushConnectionStore, x as computed, cg as resolveDirective, h as createElementBlock, g as openBlock, Y as renderSlot, i as createVNode, aa as Tooltip, w as withCtx, j as createBaseVNode, k as createTextVNode, N as N8nIcon, t as toDisplayString, l as unref, c as useI18n, b3 as withDirectives } from "./index-DgSMGi0-.js";
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
      const _component_N8nIcon = N8nIcon;
      const _component_N8nTooltip = Tooltip;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("span", null, [
        showConnectionLostError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_N8nTooltip, { placement: "bottom-end" }, {
            content: withCtx(() => [
              withDirectives(createBaseVNode("div", null, null, 512), [
                [_directive_n8n_html, unref(i18n).baseText("pushConnectionTracker.cannotConnectToServer")]
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("span", null, [
                createVNode(_component_N8nIcon, { icon: "triangle-alert" }),
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
