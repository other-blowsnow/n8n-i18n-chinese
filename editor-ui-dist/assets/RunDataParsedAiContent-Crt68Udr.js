import { iw as requireUtils, ix as libExports, iy as splitTextBySearch, d as defineComponent, bZ as useClipboard, a as useToast, x as computed, h as createElementBlock, g as openBlock, n as normalizeClass, F as Fragment, A as renderList, e as createBlock, f as createCommentVNode, k as unref, im as TextWithHighlights, i as createVNode, ab as _sfc_main$1, c as useI18n, _ as _export_sfc } from "./index-lkSN61-i.js";
import { V as VueMarkdown, H as HighlightJS } from "./core-aAY3Jgyx.js";
var utilsExports = requireUtils();
function getReferencedData(taskData) {
  const returnData = [];
  function addFunction(data, inOut) {
    if (!data) {
      return;
    }
    Object.keys(data).map((type) => {
      returnData.push({
        data: data[type][0],
        inOut,
        type,
        // Include source information in AI content to track which node triggered the execution
        // This enables filtering in the UI to show only relevant executions
        source: taskData.source,
        metadata: {
          executionTime: taskData.executionTime,
          startTime: taskData.startTime,
          subExecution: taskData.metadata?.subExecution
        }
      });
    });
  }
  addFunction(taskData.inputOverride, "input");
  addFunction(taskData.data, "output");
  return returnData;
}
function createHtmlFragmentWithSearchHighlight(text, search) {
  const escaped = libExports.escapeHtml(text);
  return search ? splitTextBySearch(escaped, search).map((part) => part.isMatched ? `<mark>${part.content}</mark>` : part.content).join("") : escaped;
}
function createSearchHighlightPlugin(search) {
  return (md) => {
    md.renderer.rules.text = (tokens, idx) => createHtmlFragmentWithSearchHighlight(tokens[idx].content, search);
    md.renderer.rules.code_inline = (tokens, idx, _, __, slf) => `<code${slf.renderAttrs(tokens[idx])}>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code>`;
    md.renderer.rules.code_block = (tokens, idx, _, __, slf) => `<pre${slf.renderAttrs(tokens[idx])}><code>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code></pre>
`;
    md.renderer.rules.fence = (tokens, idx, options, _, slf) => {
      const token = tokens[idx];
      const info = token.info ? utilsExports.unescapeAll(token.info).trim() : "";
      let langName = "";
      let langAttrs = "";
      if (info) {
        const arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
      }
      const highlighted = options.highlight?.(token.content, langName, langAttrs) ?? createHtmlFragmentWithSearchHighlight(token.content, search);
      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }
      return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>
`;
    };
  };
}
const _hoisted_1 = ["data-content-type"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataParsedAiContent",
  props: {
    content: {},
    compact: { type: Boolean, default: false },
    search: {},
    renderType: {}
  },
  setup(__props) {
    const i18n = useI18n();
    const clipboard = useClipboard();
    const { showMessage } = useToast();
    const vueMarkdownPlugins = computed(() => [createSearchHighlightPlugin(__props.search)]);
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
        return void 0;
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
                options: markdownOptions,
                plugins: vueMarkdownPlugins.value
              }, null, 8, ["source", "class", "plugins"])) : parsedContent.type === "markdown" ? (openBlock(), createBlock(unref(VueMarkdown), {
                key: 1,
                source: parsedContent.data,
                class: normalizeClass(_ctx.$style.markdown),
                options: markdownOptions,
                plugins: vueMarkdownPlugins.value
              }, null, 8, ["source", "class", "plugins"])) : parsedContent.type === "text" ? (openBlock(), createBlock(TextWithHighlights, {
                key: 2,
                class: normalizeClass(_ctx.$style.runText),
                content: String(parsedContent.data),
                search: _ctx.search
              }, null, 8, ["class", "content", "search"])) : createCommentVNode("", true)
            ], 64)) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.rawContent)
            }, [
              createVNode(unref(_sfc_main$1), {
                size: "small",
                class: normalizeClass(_ctx.$style.copyToClipboard),
                type: "secondary",
                title: unref(i18n).baseText("nodeErrorView.copyToClipboard"),
                icon: "files",
                onClick: ($event) => onCopyToClipboard(raw)
              }, null, 8, ["class", "title", "onClick"]),
              createVNode(unref(VueMarkdown), {
                source: jsonToMarkdown(raw),
                class: normalizeClass(_ctx.$style.markdown),
                plugins: vueMarkdownPlugins.value
              }, null, 8, ["source", "class", "plugins"])
            ], 2))
          ], 10, _hoisted_1);
        }), 128))
      ], 2);
    };
  }
});
const runText = "_runText_1dyxh_123";
const markdown = "_markdown_1dyxh_128";
const compact = "_compact_1dyxh_151";
const copyToClipboard = "_copyToClipboard_1dyxh_159";
const rawContent = "_rawContent_1dyxh_169";
const contentText = "_contentText_1dyxh_173";
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
const RunDataParsedAiContent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RunDataAi
}, Symbol.toStringTag, { value: "Module" }));
export {
  RunDataAi as R,
  RunDataParsedAiContent as a,
  getReferencedData as g
};
