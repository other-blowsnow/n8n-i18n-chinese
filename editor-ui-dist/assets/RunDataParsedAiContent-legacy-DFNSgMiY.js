;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useToast-legacy-D8KBGcJW.js", "./useClipboard-legacy-DdtOZJuB.js", "./TextWithHighlights-legacy-CVW5NpX4.js", "./VueMarkdown-legacy-DWTbT_8e.js", "./core-legacy-De470jmW.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, createVNode, defineComponent, createBlock, Fragment, normalizeClass, openBlock, renderList, useI18n, N8nIconButton_default, require_utils, __plugin_vue_export_helper_default, require_lib, useToast, useClipboard, splitTextBySearch, TextWithHighlights_default, VueMarkdown_default, core_default, __vite_style__, import_lib, import_utils, _hoisted_1, RunDataParsedAiContent_vue_vue_type_script_setup_true_lang_default, runText, markdown, compact, copyToClipboard, rawContent, contentText, RunDataParsedAiContent_vue_vue_type_style_index_0_lang_module_default, cssModules, RunDataParsedAiContent_default;
    function getReferencedData(taskData) {
      const returnData = [];
      function addFunction(data, inOut) {
        if (!data) return;
        Object.keys(data).map(type => {
          returnData.push({
            data: data[type][0],
            inOut,
            type,
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
      const escaped = (0, import_lib.escapeHtml)(text);
      return search ? splitTextBySearch(escaped, search).map(part => part.isMatched ? `<mark>${part.content}</mark>` : part.content).join("") : escaped;
    }
    function createSearchHighlightPlugin(search) {
      return md => {
        md.renderer.rules.text = (tokens, idx) => createHtmlFragmentWithSearchHighlight(tokens[idx].content, search);
        md.renderer.rules.code_inline = (tokens, idx, _, __, slf) => `<code${slf.renderAttrs(tokens[idx])}>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code>`;
        md.renderer.rules.code_block = (tokens, idx, _, __, slf) => `<pre${slf.renderAttrs(tokens[idx])}><code>${createHtmlFragmentWithSearchHighlight(tokens[idx].content, search)}</code></pre>\n`;
        md.renderer.rules.fence = (tokens, idx, options, _, slf) => {
          const token = tokens[idx];
          const info = token.info ? (0, import_utils.unescapeAll)(token.info).trim() : "";
          let langName = "";
          let langAttrs = "";
          if (info) {
            const arr = info.split(/(\s+)/g);
            langName = arr[0];
            langAttrs = arr.slice(2).join("");
          }
          const highlighted = options.highlight?.(token.content, langName, langAttrs) ?? createHtmlFragmentWithSearchHighlight(token.content, search);
          if (highlighted.indexOf("<pre") === 0) return highlighted + "\n";
          return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>\n`;
        };
      };
    }

    //#endregion
    //#region src/features/ndv/runData/components/RunDataParsedAiContent.vue?vue&type=script&setup=true&lang.ts
    _export("n", getReferencedData);
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIconButton_default = _srcLegacy007Js.Tt;
        require_utils = _srcLegacy007Js.xt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        require_lib = _truncateLegacy00hJs.f;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }, function (_TextWithHighlightsLegacy02hJs) {
        splitTextBySearch = _TextWithHighlightsLegacy02hJs.n;
        TextWithHighlights_default = _TextWithHighlightsLegacy02hJs.t;
      }, function (_VueMarkdownLegacy04LJs) {
        VueMarkdown_default = _VueMarkdownLegacy04LJs.t;
      }, function (_coreLegacy06hJs) {
        core_default = _coreLegacy06hJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._runText_1dyxh_123 {\n  line-height: var(--line-height--xl);\n  white-space: pre-line;\n}\n._markdown_1dyxh_128 {\n  white-space: pre-wrap;\n}\n._markdown_1dyxh_128 h1 {\n  font-size: var(--font-size--lg);\n  line-height: var(--line-height--xl);\n}\n._markdown_1dyxh_128 h2 {\n  font-size: var(--font-size--md);\n  line-height: var(--line-height--lg);\n}\n._markdown_1dyxh_128 h3 {\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--md);\n}\n._markdown_1dyxh_128 pre {\n  background: var(--chat--message--pre--background);\n  border-radius: var(--radius);\n  line-height: var(--line-height--xl);\n  padding: var(--spacing--sm);\n  font-size: var(--font-size--sm);\n  white-space: pre-wrap;\n}\n._compact_1dyxh_151 ._markdown_1dyxh_128 pre {\n  padding: var(--spacing--3xs);\n  font-size: var(--font-size--xs);\n}\n._compact_1dyxh_151 ._markdown_1dyxh_128 p {\n  line-height: var(--line-height--xl);\n}\n._copyToClipboard_1dyxh_159 {\n  position: absolute;\n  right: var(--spacing--sm);\n  top: var(--spacing--sm);\n}\n._compact_1dyxh_151 ._copyToClipboard_1dyxh_159 {\n  right: var(--spacing--2xs);\n  top: var(--spacing--2xs);\n}\n._rawContent_1dyxh_169 {\n  position: relative;\n}\n._contentText_1dyxh_173 {\n  padding-top: var(--spacing--sm);\n  padding-left: var(--spacing--md);\n  padding-right: var(--spacing--md);\n  font-size: var(--font-size--sm);\n}\n._compact_1dyxh_151 ._contentText_1dyxh_173 {\n  padding-top: 0;\n  padding-inline: var(--spacing--2xs);\n  font-size: var(--font-size--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/runData/components/ai/utils.ts
        import_lib = /* @__PURE__ */__toESM(require_lib());
        import_utils = /* @__PURE__ */__toESM(require_utils());
        _hoisted_1 = ["data-content-type"];
        RunDataParsedAiContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataParsedAiContent",
          props: {
            content: {},
            compact: {
              type: Boolean,
              default: false
            },
            search: {},
            renderType: {}
          },
          setup(__props) {
            const i18n = useI18n();
            const clipboard = useClipboard();
            const {
              showMessage
            } = useToast();
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
                if (lang && core_default.getLanguage(lang)) try {
                  return core_default.highlight(str, {
                    language: lang
                  }).value;
                } catch {}
              }
            };
            function isMarkdown(jsonMarkdown) {
              if (typeof jsonMarkdown !== "string") return false;
              return [/^# .+/gm, /\*{1,2}.+\*{1,2}/g, /\[.+\]\(.+\)/g, /```[\s\S]+```/g].some(pattern => pattern.test(jsonMarkdown));
            }
            function formatToJsonMarkdown(data) {
              return "```json\n" + data + "\n```";
            }
            function jsonToMarkdown(data) {
              if (isMarkdown(data)) return data;
              if (Array.isArray(data) && data.length && typeof data[0] !== "number") return data.map(item => jsonToMarkdown(item)).join("\n\n").trim();
              if (typeof data === "string") {
                if (isJsonString(data)) return formatToJsonMarkdown(data);
                return data;
              }
              return formatToJsonMarkdown(JSON.stringify(data, null, 2));
            }
            function onCopyToClipboard(object) {
              try {
                clipboard.copy(JSON.stringify(object, void 0, 2));
                showMessage({
                  title: i18n.baseText("generic.copiedToClipboard"),
                  type: "success"
                });
              } catch {}
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.component, _ctx.compact ? _ctx.$style.compact : ""])
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.content, ({
                parsedContent,
                raw
              }, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: normalizeClass(_ctx.$style.contentText),
                  "data-content-type": parsedContent?.type
                }, [parsedContent && _ctx.renderType === "rendered" ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [parsedContent.type === "json" ? (openBlock(), createBlock(unref(VueMarkdown_default), {
                  key: 0,
                  source: jsonToMarkdown(parsedContent.data),
                  class: normalizeClass(_ctx.$style.markdown),
                  options: markdownOptions,
                  plugins: vueMarkdownPlugins.value
                }, null, 8, ["source", "class", "plugins"])) : parsedContent.type === "markdown" ? (openBlock(), createBlock(unref(VueMarkdown_default), {
                  key: 1,
                  source: parsedContent.data,
                  class: normalizeClass(_ctx.$style.markdown),
                  options: markdownOptions,
                  plugins: vueMarkdownPlugins.value
                }, null, 8, ["source", "class", "plugins"])) : parsedContent.type === "text" ? (openBlock(), createBlock(TextWithHighlights_default, {
                  key: 2,
                  class: normalizeClass(_ctx.$style.runText),
                  content: String(parsedContent.data),
                  search: _ctx.search
                }, null, 8, ["class", "content", "search"])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.rawContent)
                }, [createVNode(unref(N8nIconButton_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.copyToClipboard),
                  type: "secondary",
                  title: unref(i18n).baseText("nodeErrorView.copyToClipboard"),
                  icon: "files",
                  onClick: $event => onCopyToClipboard(raw)
                }, null, 8, ["class", "title", "onClick"]), createVNode(unref(VueMarkdown_default), {
                  source: jsonToMarkdown(raw),
                  class: normalizeClass(_ctx.$style.markdown),
                  plugins: vueMarkdownPlugins.value
                }, null, 8, ["source", "class", "plugins"])], 2))], 10, _hoisted_1);
              }), 128))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/RunDataParsedAiContent.vue?vue&type=style&index=0&lang.module.scss
        runText = "_runText_1dyxh_123";
        markdown = "_markdown_1dyxh_128";
        compact = "_compact_1dyxh_151";
        copyToClipboard = "_copyToClipboard_1dyxh_159";
        rawContent = "_rawContent_1dyxh_169";
        contentText = "_contentText_1dyxh_173";
        RunDataParsedAiContent_vue_vue_type_style_index_0_lang_module_default = {
          runText,
          markdown,
          compact,
          copyToClipboard,
          rawContent,
          contentText
        }; //#endregion
        //#region src/features/ndv/runData/components/RunDataParsedAiContent.vue
        cssModules = {
          "$style": RunDataParsedAiContent_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", RunDataParsedAiContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataParsedAiContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();