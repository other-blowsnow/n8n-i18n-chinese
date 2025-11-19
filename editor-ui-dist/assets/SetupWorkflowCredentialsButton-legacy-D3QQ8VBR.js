;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./nodeTransforms-legacy-B6vSYCn_.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, unref, onBeforeUnmount, defineComponent, createBlock, watch, openBlock, useI18n, N8nButton_default, useUIStore, useWorkflowsStore, useNodeTypesStore, SETUP_CREDENTIALS_MODAL_KEY, doesNodeHaveAllCredentialsFilled, SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default, SetupWorkflowCredentialsButton_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Ln;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        SETUP_CREDENTIALS_MODAL_KEY = _constantsLegacy00NJs.zo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_nodeTransformsLegacy02nJs) {
        doesNodeHaveAllCredentialsFilled = _nodeTransformsLegacy02nJs.t;
      }],
      execute: function () {
        //#region src/features/workflows/templates/components/SetupWorkflowCredentialsButton.vue?vue&type=script&setup=true&lang.ts
        SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupWorkflowCredentialsButton",
          setup(__props) {
            const workflowsStore = useWorkflowsStore();
            const nodeTypesStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const i18n = useI18n();
            const isTemplateSetupCompleted = computed(() => {
              return !!workflowsStore.workflow?.meta?.templateCredsSetupCompleted;
            });
            const allCredentialsFilled = computed(() => {
              if (isTemplateSetupCompleted.value) return true;
              const nodes = workflowsStore.getNodes();
              if (!nodes.length) return true;
              return nodes.every(node => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
            });
            const showButton = computed(() => {
              if (!!!workflowsStore.workflow?.meta?.templateId || isTemplateSetupCompleted.value) return false;
              return !allCredentialsFilled.value;
            });
            const unsubscribe = watch(allCredentialsFilled, newValue => {
              if (newValue) {
                workflowsStore.addToWorkflowMetadata({
                  templateCredsSetupCompleted: true
                });
                unsubscribe();
              }
            });
            const handleClick = () => {
              uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
            };
            onBeforeUnmount(() => {
              uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
            });
            return (_ctx, _cache) => {
              return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                label: unref(i18n).baseText("nodeView.setupTemplate"),
                "data-test-id": "setup-credentials-button",
                size: "large",
                icon: "package-open",
                type: "secondary",
                onClick: _cache[0] || (_cache[0] = $event => handleClick())
              }, null, 8, ["label"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/SetupWorkflowCredentialsButton.vue
        _export("default", SetupWorkflowCredentialsButton_default = SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();