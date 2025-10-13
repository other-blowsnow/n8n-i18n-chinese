import { d as defineComponent, aB as usePageRedirectionHelper, h as createElementBlock, g as openBlock, i as createVNode, k as unref, N as N8nIcon, w as withCtx, l as createTextVNode, t as toDisplayString, c as useI18n, p as N8nText, q as N8nButton, n as normalizeClass, _ as _export_sfc } from "./index-Bwe5xApO.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsPaywall",
  setup(__props) {
    const pageRedirectionHelper = usePageRedirectionHelper();
    const i18n = useI18n();
    const goToUpgrade = async () => {
      await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.callout)
      }, [
        createVNode(unref(N8nIcon), {
          icon: "lock",
          size: "xlarge"
        }),
        createVNode(unref(N8nText), {
          bold: "",
          tag: "h4",
          size: "large"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)
          ]),
          _: 1
        }),
        createVNode(unref(N8nText), null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)
          ]),
          _: 1
        }),
        createVNode(unref(N8nButton), {
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
