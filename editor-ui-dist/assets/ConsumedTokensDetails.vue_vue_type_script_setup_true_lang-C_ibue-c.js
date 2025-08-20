import { d as defineComponent, h as createElementBlock, g as openBlock, i as createVNode, j as createBaseVNode, l as unref, p as N8nText, w as withCtx, k as createTextVNode, t as toDisplayString, c as useI18n, bY as formatTokenUsageCount } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsumedTokensDetails",
  props: {
    consumedTokens: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.prompt")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "prompt")
              }
            })), 1)
          ]),
          _: 1
        }),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.completion")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "completion")
              }
            })), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as _
};
