;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./nodeTransforms-legacy-CxiCsdbt.js"], function (_export, _context) {
    "use strict";

    var computed, createCommentVNode, unref, onBeforeUnmount, defineComponent, createBlock, watch, openBlock, useI18n, N8nButton_default, useUIStore, useNodeTypesStore, useWorkflowsStore, SETUP_CREDENTIALS_MODAL_KEY, doesNodeHaveAllCredentialsFilled, SetupWorkflowCredentialsButton_vue_vue_type_script_setup_true_lang_default, SetupWorkflowCredentialsButton_default;
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
        N8nButton_default = _srcLegacy007Js.Hn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useNodeTypesStore = _useTelemetryLegacy00HJs.at;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        SETUP_CREDENTIALS_MODAL_KEY = _constantsLegacy00TJs.as;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_nodeTransformsLegacy02DJs) {
        doesNodeHaveAllCredentialsFilled = _nodeTransformsLegacy02DJs.t;
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