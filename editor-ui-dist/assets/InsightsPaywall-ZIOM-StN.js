import { d as defineComponent, aa as usePageRedirectionHelper, h as resolveComponent, i as createElementBlock, g as openBlock, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, n as normalizeClass, _ as _export_sfc } from "./index-Y0sphpVt.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsPaywall",
  setup(__props) {
    const pageRedirectionHelper = usePageRedirectionHelper();
    const i18n = useI18n();
    const goToUpgrade = async () => {
      await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
    };
    return (_ctx, _cache) => {
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_N8nText = resolveComponent("N8nText");
      const _component_N8nButton = resolveComponent("N8nButton");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.callout)
      }, [
        createVNode(_component_N8nIcon, {
          icon: "lock",
          size: "xlarge"
        }),
        createVNode(_component_N8nText, {
          bold: "",
          tag: "h3",
          size: "large"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)
          ]),
          _: 1
        }),
        createVNode(_component_N8nText, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)
          ]),
          _: 1
        }),
        createVNode(_component_N8nButton, {
          type: "primary",
          "native-type": "button",
          size: "large",
          onClick: goToUpgrade
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.cta")), 1)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const callout = "_callout_9szlr_123";
const style0 = {
  callout
};
const cssModules = {
  "$style": style0
};
const InsightsPaywall = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsPaywall as default
};
