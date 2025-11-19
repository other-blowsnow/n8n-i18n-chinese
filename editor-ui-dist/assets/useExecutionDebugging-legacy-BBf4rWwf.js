;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js"], function (_export, _context) {
    "use strict";

    var computed, h, useI18n, useRouter, useMessage, DEBUG_PAYWALL_MODAL_KEY, useSettingsStore, useUIStore, useRootStore, injectWorkflowState, useWorkflowsStore, isFullExecutionResponse, useTelemetry, sanitizeHtml, useToast, EnterpriseEditionFeature, MODAL_CONFIRM, VIEWS, usePageRedirectionHelper, useExecutionDebugging;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        DEBUG_PAYWALL_MODAL_KEY = _useTelemetryLegacy00FJs.Ao;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        isFullExecutionResponse = _useTelemetryLegacy00FJs.or;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        sanitizeHtml = _useToastLegacy00HJs.c;
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
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