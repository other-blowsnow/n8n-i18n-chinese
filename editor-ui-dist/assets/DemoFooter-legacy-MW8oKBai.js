;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./overlay-legacy-D_orOv5T.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-D7C50D7l.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./useToast-legacy-PRNOn8i6.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./assistant.store-legacy-ki35RxZ0.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./useExternalHooks-legacy-CJTR8c_S.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-BKuRM8B2.js", "./npsSurvey.store-legacy-CIHR2ar2.js", "./cloudPlan.store-legacy-Pse8WrN4.js", "./templates.store-legacy-61_pqoHh.js", "./focusPanel.store-legacy-DWUaJzpF.js", "./useWorkflowSaving-legacy-BcU_peMK.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-Dt23ytfg.js", "./useRunWorkflow-legacy-CIB0gtYD.js", "./usePinnedData-legacy-CqvRNOH7.js", "./nodeCreator.store-legacy-Dw2_pemx.js", "./nodeIcon-legacy-Bmq4SQs_.js", "./useClipboard-legacy-xeaCydxA.js", "./useCanvasOperations-legacy-cPUZPbMP.js", "./LogsPanel-legacy-DCk2B4i_.js", "./folders.store-legacy-BNeiIYdq.js", "./NodeIcon-legacy-WVrKWS_M.js", "./KeyboardShortcutTooltip-legacy-B4RR8ZB9.js", "./isEmpty-legacy-DUtoDKCo.js", "./NDVEmptyState-legacy-uQauM81M.js", "./externalSecrets.ee.store-legacy-bFx9gdeU.js", "./uniqBy-legacy-BsH0nf9Z.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-DAeStKxH.js", "./schemaPreview.store-legacy-jl5X3GFh.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-COdGkFCs.js", "./useExecutionHelpers-legacy-SuOJbxBX.js", "./fileUtils-legacy-BbiGYBne.js", "./useKeybindings-legacy-BpEGdQ0k.js", "./core-legacy-Dbm4ZHjr.js", "./ChatFile-legacy-ChynqrzQ.js", "./xml-legacy-AlS_MIEy.js", "./AnimatedSpinner-legacy-jmjQlQzV.js", "./useLogsTreeExpand-legacy-DBeAR9aI.js", "./core-legacy-CovukW6E.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, defineComponent, createBlock, openBlock, useWorkflowsStore, LogsPanel_default, DemoFooter_vue_vue_type_script_setup_true_lang_default, DemoFooter_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {}, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {}, function (_mergeLegacy00VJs) {}, function (_assistantStoreLegacy00XJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_chatPanelStoreLegacy017Js) {}, function (_npsSurveyStoreLegacy01bJs) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {}, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {}, function (_retryLegacy01lJs) {}, function (_executionsStoreLegacy01nJs) {}, function (_useRunWorkflowLegacy01pJs) {}, function (_usePinnedDataLegacy01rJs) {}, function (_nodeCreatorStoreLegacy01tJs) {}, function (_nodeIconLegacy01vJs) {}, function (_useClipboardLegacy01xJs) {}, function (_useCanvasOperationsLegacy01zJs) {}, function (_LogsPanelLegacy01BJs) {
        LogsPanel_default = _LogsPanelLegacy01BJs.t;
      }, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {}, function (_isEmptyLegacy021Js) {}, function (_NDVEmptyStateLegacy023Js) {}, function (_externalSecretsEeStoreLegacy027Js) {}, function (_uniqByLegacy029Js) {}, function (_RunDataHtmlLegacy02nJs) {}, function (_VueMarkdownLegacy02rJs) {}, function (_schemaPreviewStoreLegacy02BJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_vueJsonPrettyLegacy02JJs) {}, function (_dateFormatterLegacy02LJs) {}, function (_useExecutionHelpersLegacy02NJs) {}, function (_fileUtilsLegacy03pJs) {}, function (_useKeybindingsLegacy03LJs) {}, function (_coreLegacy03ZJs) {}, function (_ChatFileLegacy05bJs) {}, function (_xmlLegacy05rJs) {}, function (_AnimatedSpinnerLegacy05BJs) {}, function (_useLogsTreeExpandLegacy06RJs) {}, function (_coreLegacy06TJs) {}],
      execute: function () {
        //#region src/features/execution/logs/components/DemoFooter.vue?vue&type=script&setup=true&lang.ts
        DemoFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DemoFooter",
          setup(__props) {
            const workflowsStore = useWorkflowsStore();
            const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
            return (_ctx, _cache) => {
              return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
                key: 0,
                "is-read-only": true
              })) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/logs/components/DemoFooter.vue
        _export("default", DemoFooter_default = DemoFooter_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();