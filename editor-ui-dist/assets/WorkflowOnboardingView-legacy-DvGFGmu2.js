;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./truncate-legacy-BWv-BWgW.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, defineComponent, onMounted, openBlock, useI18n, useRouter, useRoute, useLoadingService, useWorkflowsStore, VIEWS, useTemplatesStore, WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default, WorkflowOnboardingView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useLoadingService = _useTelemetryLegacy00HJs.Wn;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {
        useTemplatesStore = _templatesStoreLegacy01dJs.t;
      }],
      execute: function () {
        //#region src/app/views/WorkflowOnboardingView.vue?vue&type=script&setup=true&lang.ts
        WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowOnboardingView",
          setup(__props) {
            const loadingService = useLoadingService();
            const templateStore = useTemplatesStore();
            const workflowsStore = useWorkflowsStore();
            const router = useRouter();
            const route = useRoute();
            const i18n = useI18n();
            const openWorkflowTemplate = async templateId => {
              try {
                loadingService.startLoading();
                const template = await templateStore.getFixedWorkflowTemplate(templateId);
                if (!template) throw new Error();
                const name = i18n.baseText("onboarding.title", {
                  interpolate: {
                    name: template.name
                  }
                });
                const workflow = await workflowsStore.createNewWorkflow({
                  name,
                  connections: template.workflow.connections,
                  nodes: template.workflow.nodes.map(workflowsStore.convertTemplateNodeToNodeUi),
                  pinData: template.workflow.pinData,
                  settings: template.workflow.settings,
                  meta: {
                    onboardingId: templateId
                  }
                });
                await router.replace({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: workflow.id
                  },
                  query: {
                    onboardingId: templateId
                  }
                });
                loadingService.stopLoading();
              } catch (e) {
                await router.replace({
                  name: VIEWS.NEW_WORKFLOW
                });
                loadingService.stopLoading();
                throw new Error(`Could not load onboarding template ${templateId}`);
              }
            };
            onMounted(async () => {
              const templateId = route.params.id;
              if (!templateId || typeof templateId !== "string") {
                await router.replace({
                  name: VIEWS.NEW_WORKFLOW
                });
                return;
              }
              await openWorkflowTemplate(templateId);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div");
            };
          }
        }); //#endregion
        //#region src/app/views/WorkflowOnboardingView.vue
        _export("default", WorkflowOnboardingView_default = WorkflowOnboardingView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();