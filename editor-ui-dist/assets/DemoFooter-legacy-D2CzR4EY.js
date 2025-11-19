;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./chatPanel.store-legacy-NYceFr60.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./LogsPanel-legacy-Ci9IY4OV.js", "./folders.store-legacy-C8VGYd29.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js", "./isEmpty-legacy-Doz7ETSg.js", "./NDVEmptyState-legacy-Hez6Mzj_.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./uniqBy-legacy-BQtuBYTn.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./FileSaver.min-legacy-BTN44Z38.js", "./vue-json-pretty-legacy-Dk5EQofb.js", "./RunDataHtml-legacy-DopSvQCJ.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./useKeybindings-legacy-BQ2atUdb.js", "./core-legacy-BVoFM47F.js", "./VueMarkdown-legacy-DWTbT_8e.js", "./xml-legacy-Cyrxa7r6.js", "./AnimatedSpinner-legacy-a37yY0a9.js", "./useLogsTreeExpand-legacy-zHK_fj8w.js", "./core-legacy-De470jmW.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, defineComponent, createBlock, openBlock, useWorkflowsStore, LogsPanel_default, DemoFooter_vue_vue_type_script_setup_true_lang_default, DemoFooter_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {}, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_useTelemetryLegacy00FJs) {
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_chatPanelStoreLegacy00ZJs) {}, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {}, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {}, function (_useRunWorkflowLegacy01fJs) {}, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_LogsPanelLegacy01rJs) {
        LogsPanel_default = _LogsPanelLegacy01rJs.t;
      }, function (_foldersStoreLegacy01tJs) {}, function (_NodeIconLegacy01vJs) {}, function (_KeyboardShortcutTooltipLegacy01xJs) {}, function (_isEmptyLegacy01TJs) {}, function (_NDVEmptyStateLegacy01VJs) {}, function (_externalSecretsEeStoreLegacy01ZJs) {}, function (_uniqByLegacy01$Js) {}, function (_schemaPreviewStoreLegacy02lJs) {}, function (_FileSaverMinLegacy02rJs) {}, function (_vueJsonPrettyLegacy02tJs) {}, function (_RunDataHtmlLegacy02vJs) {}, function (_dateFormatterLegacy02zJs) {}, function (_useExecutionHelpersLegacy02BJs) {}, function (_useKeybindingsLegacy03tJs) {}, function (_coreLegacy03FJs) {}, function (_VueMarkdownLegacy04LJs) {}, function (_xmlLegacy04TJs) {}, function (_AnimatedSpinnerLegacy051Js) {}, function (_useLogsTreeExpandLegacy06fJs) {}, function (_coreLegacy06hJs) {}],
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