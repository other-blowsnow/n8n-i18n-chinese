import { d as defineComponent, bW as useClipboard, a as useToast, i as createElementBlock, g as openBlock, n as normalizeClass, F as Fragment, G as renderList, e as createBlock, f as createCommentVNode, m as unref, t as toDisplayString, j as createVNode, a$ as _sfc_main$1, c as useI18n, _ as _export_sfc } from "./index-Y0sphpVt.js";
import { V as VueMarkdown, H as HighlightJS } from "./RunData-DxuRERNF.js";
import "./FileSaver.min-DH2NFi71.js";
import "./useExecutionHelpers-B_Y5s7gr.js";
const _hoisted_1 = ["data-content-type"];
const _hoisted_2 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataParsedAiContent",
  props: {
    content: {},
    compact: { type: Boolean, default: false },
    renderType: {}
  },
  setup(__props) {
    const i18n = useI18n();
    const clipboard = useClipboard();
    const { showMessage } = useToast();
    function isJsonString(text) {
      try {
        JSON.parse(text);
        return true;
      } catch (e) {
        return false;
      }
    }
    const markdownOptions = {
      highlight(str, lang) {
        if (lang && HighlightJS.getLanguage(lang)) {
          try {
            return HighlightJS.highlight(str, { language: lang }).value;
          } catch {
          }
        }
        return "";
      }
    };
    function isMarkdown(jsonMarkdown) {
      if (typeof jsonMarkdown !== "string") return false;
      const markdownPatterns = [
        /^# .+/gm,
        // headers
        /\*{1,2}.+\*{1,2}/g,
        // emphasis and strong
        /\[.+\]\(.+\)/g,
        // links
        /```[\s\S]+```/g
        // code blocks
      ];
      return markdownPatterns.some((pattern) => pattern.test(jsonMarkdown));
    }
    function formatToJsonMarkdown(data) {
      return "```json\n" + data + "\n```";
    }
    function jsonToMarkdown(data) {
      if (isMarkdown(data)) return data;
      if (Array.isArray(data) && data.length && typeof data[0] !== "number") {
        const markdownArray = data.map((item) => jsonToMarkdown(item));
        return markdownArray.join("\n\n").trim();
      }
      if (typeof data === "string") {
        if (isJsonString(data)) {
          return formatToJsonMarkdown(data);
        }
        return data;
      }
      return formatToJsonMarkdown(JSON.stringify(data, null, 2));
    }
    function onCopyToClipboard(object) {
      try {
        void clipboard.copy(JSON.stringify(object, void 0, 2));
        showMessage({
          title: i18n.baseText("generic.copiedToClipboard"),
          type: "success"
        });
      } catch {
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.component, _ctx.compact ? _ctx.$style.compact : ""])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.content, ({ parsedContent, raw }, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: normalizeClass(_ctx.$style.contentText),
            "data-content-type": parsedContent?.type
          }, [
            parsedContent && _ctx.renderType === "rendered" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              parsedContent.type === "json" ? (openBlock(), createBlock(unref(VueMarkdown), {
                key: 0,
                source: jsonToMarkdown(parsedContent.data),
                class: normalizeClass(_ctx.$style.markdown),
                options: markdownOptions
              }, null, 8, ["source", "class"])) : parsedContent.type === "markdown" ? (openBlock(), createBlock(unref(VueMarkdown), {
                key: 1,
                source: parsedContent.data,
                class: normalizeClass(_ctx.$style.markdown),
                options: markdownOptions
              }, null, 8, ["source", "class"])) : parsedContent.type === "text" ? (openBlock(), createElementBlock("p", {
                key: 2,
                class: normalizeClass(_ctx.$style.runText),
                textContent: toDisplayString(parsedContent.data)
              }, null, 10, _hoisted_2)) : createCommentVNode("", true)
            ], 64)) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.rawContent)
            }, [
              createVNode(unref(_sfc_main$1), {
                size: "small",
                class: normalizeClass(_ctx.$style.copyToClipboard),
                type: "secondary",
                title: unref(i18n).baseText("nodeErrorView.copyToClipboard"),
                icon: "copy",
                onClick: ($event) => onCopyToClipboard(raw)
              }, null, 8, ["class", "title", "onClick"]),
              createVNode(unref(VueMarkdown), {
                source: jsonToMarkdown(raw),
                class: normalizeClass(_ctx.$style.markdown)
              }, null, 8, ["source", "class"])
            ], 2))
          ], 10, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
const runText = "_runText_1mfxw_123";
const markdown = "_markdown_1mfxw_128";
const compact = "_compact_1mfxw_151";
const copyToClipboard = "_copyToClipboard_1mfxw_156";
const rawContent = "_rawContent_1mfxw_166";
const contentText = "_contentText_1mfxw_170";
const style0 = {
  runText,
  markdown,
  compact,
  copyToClipboard,
  rawContent,
  contentText
};
const cssModules = {
  "$style": style0
};
const RunDataAi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataAi as default
};
