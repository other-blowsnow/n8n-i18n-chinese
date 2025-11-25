;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./truncate-legacy-ZZ87M1Mo.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./cloudPlan.store-legacy-Uv9UJvN5.js", "./templates.store-legacy-BBTwiez6.js"], function (_export, _context) {
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
      }, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useLoadingService = _useTelemetryLegacy00FJs.Wn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_cloudPlanStoreLegacy017Js) {}, function (_templatesStoreLegacy019Js) {
        useTemplatesStore = _templatesStoreLegacy019Js.t;
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