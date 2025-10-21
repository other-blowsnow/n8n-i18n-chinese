import { d as defineComponent, bZ as useClipboard, a as useToast, x as computed, e as createBlock, g as openBlock, k as unref, aa as N8nTooltip, w as withCtx, j as createBaseVNode, t as toDisplayString, l as createTextVNode, c as useI18n, _ as _export_sfc } from "./index-lkSN61-i.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VariablesUsageBadge",
  props: {
    name: {}
  },
  setup(__props) {
    const i18n = useI18n();
    const clipboard = useClipboard();
    const { showMessage } = useToast();
    const props = __props;
    const usage = computed(() => `$vars.${props.name}`);
    const handleClick = () => {
      void clipboard.copy(usage.value);
      showMessage({
        title: i18n.baseText("variables.row.usage.copiedToClipboard"),
        type: "success"
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nTooltip), { placement: "top" }, {
        content: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.usage.copyToClipboard")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("span", {
            class: "usageSyntax",
            onClick: handleClick
          }, toDisplayString(usage.value), 1)
        ]),
        _: 1
      });
    };
  }
});
const VariablesUsageBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69da5000"]]);
export {
  VariablesUsageBadge as V
};
