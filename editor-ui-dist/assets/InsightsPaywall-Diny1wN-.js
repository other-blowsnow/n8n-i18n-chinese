import { d as defineComponent, aB as usePageRedirectionHelper, h as createElementBlock, g as openBlock, i as createVNode, N as N8nIcon, w as withCtx, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, p as N8nText, q as N8nButton, n as normalizeClass, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsPaywall",
  setup(__props) {
    const pageRedirectionHelper = usePageRedirectionHelper();
    const i18n = useI18n();
    const goToUpgrade = async () => {
      await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
    };
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      const _component_N8nText = N8nText;
      const _component_N8nButton = N8nButton;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.callout)
      }, [
        createVNode(_component_N8nIcon, {
          icon: "lock",
          size: "xlarge"
        }),
        createVNode(_component_N8nText, {
          bold: "",
          tag: "h4",
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
            createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)
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
