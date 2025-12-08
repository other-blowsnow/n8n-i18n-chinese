;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./truncate-legacy-B7Y_hCM_.js", "./useMessage-legacy-Bq4gN3bH.js", "./useTelemetry-legacy-CBjbIfKX.js", "./useToast-legacy-Bs0yTjbT.js", "./constants-legacy-DVoQkFTS.js", "./_baseOrderBy-legacy-CowL7g45.js", "./usePageRedirectionHelper-legacy-CiePbo1_.js"], function (_export, _context) {
    "use strict";

    var computed, h, useI18n, useRouter, useMessage, useUIStore, useSettingsStore, DEBUG_PAYWALL_MODAL_KEY, injectWorkflowState, isFullExecutionResponse, useWorkflowsStore, useTelemetry, sanitizeHtml, useToast, MODAL_CONFIRM, VIEWS, EnterpriseEditionFeature, useRootStore, usePageRedirectionHelper, useExecutionDebugging;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        DEBUG_PAYWALL_MODAL_KEY = _useTelemetryLegacy00HJs.Mo;
        injectWorkflowState = _useTelemetryLegacy00HJs.Sn;
        isFullExecutionResponse = _useTelemetryLegacy00HJs.cr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        sanitizeHtml = _useToastLegacy00JJs.s;
        useToast = _useToastLegacy00JJs.t;
      }, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        VIEWS = _constantsLegacy00TJs.Po;
        EnterpriseEditionFeature = _constantsLegacy00TJs.dc;
      }, function (_baseOrderByLegacy00ZJs) {
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }],
      execute: function () {
        //#region src/features/execution/executions/composables/useExecutionDebugging.ts
        _export("t", useExecutionDebugging = () => {
          const telemetry = useTelemetry();
          const router = useRouter();
          const i18n = useI18n();
          const message = useMessage();
          const toast = useToast();
          const workflowsStore = useWorkflowsStore();
          const workflowState = injectWorkflowState();
          const settingsStore = useSettingsStore();
          const uiStore = useUIStore();
          const pageRedirectionHelper = usePageRedirectionHelper();
          const isDebugEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DebugInEditor]);
          const applyExecutionData = async executionId => {
            const execution = await workflowsStore.getExecution(executionId);
            const workflowObject = workflowsStore.workflowObject;
            const workflowNodes = workflowsStore.getNodes();
            if (!execution?.data?.resultData) return;
            const {
              runData
            } = execution.data.resultData;
            const executionNodeNames = Object.keys(runData);
            const missingNodeNames = executionNodeNames.filter(name => !workflowNodes.some(node => node.name === name));
            const workflowPinnedNodeNames = Object.keys(workflowsStore.workflow.pinData ?? {});
            const matchingPinnedNodeNames = executionNodeNames.filter(name => workflowPinnedNodeNames.includes(name));
            if (matchingPinnedNodeNames.length > 0) {
              const confirmMessage = h("p", [i18n.baseText("nodeView.confirmMessage.debug.message"), h("ul", {
                class: "mt-l ml-l"
              }, matchingPinnedNodeNames.map(name => h("li", sanitizeHtml(name))))]);
              if ((await message.confirm(confirmMessage, i18n.baseText("nodeView.confirmMessage.debug.headline"), {
                type: "warning",
                confirmButtonText: i18n.baseText("nodeView.confirmMessage.debug.confirmButtonText"),
                cancelButtonText: i18n.baseText("nodeView.confirmMessage.debug.cancelButtonText"),
                customClass: "matching-pinned-nodes-confirmation"
              })) === "confirm") matchingPinnedNodeNames.forEach(name => {
                const node = workflowsStore.getNodeByName(name);
                if (node) workflowsStore.unpinData({
                  node
                });
              });else {
                await router.push({
                  name: VIEWS.EXECUTION_PREVIEW,
                  params: {
                    name: workflowObject.id,
                    executionId
                  }
                });
                return;
              }
            }
            workflowState.resetAllNodesIssues();
            workflowState.setWorkflowExecutionData(execution);
            const pinnableNodes = workflowNodes.filter(node => !workflowObject.getParentNodes(node.name).length);
            let pinnings = 0;
            pinnableNodes.forEach(node => {
              const taskData = runData[node.name]?.[0];
              if (taskData?.data?.main) {
                const nodeData = taskData.data.main.find(output => output && output.length > 0);
                if (nodeData) {
                  pinnings++;
                  workflowsStore.pinData({
                    node,
                    data: nodeData,
                    isRestoration: true
                  });
                }
              }
            });
            toast.showToast({
              title: i18n.baseText("nodeView.showMessage.debug.title"),
              message: i18n.baseText("nodeView.showMessage.debug.content"),
              type: "info"
            });
            if (missingNodeNames.length) toast.showToast({
              title: i18n.baseText("nodeView.showMessage.debug.missingNodes.title"),
              message: i18n.baseText("nodeView.showMessage.debug.missingNodes.content", {
                interpolate: {
                  nodeNames: missingNodeNames.join(", ")
                }
              }),
              type: "warning"
            });
            telemetry.track("User clicked debug execution button", {
              instance_id: useRootStore().instanceId,
              exec_status: isFullExecutionResponse(execution) ? execution.status : "",
              override_pinned_data: pinnableNodes.length === pinnings,
              all_exec_data_imported: missingNodeNames.length === 0
            });
          };
          const handleDebugLinkClick = event => {
            if (!isDebugEnabled.value) {
              uiStore.openModalWithData({
                name: DEBUG_PAYWALL_MODAL_KEY,
                data: {
                  title: i18n.baseText("executionsList.debug.paywall.title"),
                  footerButtonAction: () => {
                    uiStore.closeModal(DEBUG_PAYWALL_MODAL_KEY);
                    pageRedirectionHelper.goToUpgrade("debug", "upgrade-debug");
                  }
                }
              });
              event.preventDefault();
              event.stopPropagation();
              return;
            }
            workflowsStore.isInDebugMode = false;
          };
          return {
            applyExecutionData,
            handleDebugLinkClick
          };
        }); //#endregion
      }
    };
  });
})();