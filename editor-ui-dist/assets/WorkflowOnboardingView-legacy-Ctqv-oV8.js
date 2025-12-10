;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./truncate-legacy--yD2a8cz.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./cloudPlan.store-legacy-Pse8WrN4.js", "./templates.store-legacy-61_pqoHh.js"], function (_export, _context) {
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
        useLoadingService = _useTelemetryLegacy00HJs.Kn;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {
        useTemplatesStore = _templatesStoreLegacy01fJs.t;
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