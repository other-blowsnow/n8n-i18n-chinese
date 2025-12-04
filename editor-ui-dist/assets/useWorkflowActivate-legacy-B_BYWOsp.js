;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./truncate-legacy-BWv-BWgW.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./constants-legacy-lM1Uv86G.js", "./useExternalHooks-legacy-D--WxRfr.js", "./npsSurvey.store-legacy-B5srzxcX.js", "./useWorkflowSaving-legacy-Bw9fkKuY.js"], function (_export, _context) {
    "use strict";

    var ref, useI18n, useRouter, useUIStore, useWorkflowHelpers, useWorkflowsStore, useTelemetry, useStorage, useToast, WORKFLOW_ACTIVE_MODAL_KEY, LOCAL_STORAGE_ACTIVATION_FLAG, PLACEHOLDER_EMPTY_WORKFLOW_ID, useExternalHooks, useNpsSurveyStore, useWorkflowSaving;
    //#region src/app/composables/useWorkflowActivate.ts
    function useWorkflowActivate() {
      const updatingWorkflowActivation = ref(false);
      const router = useRouter();
      const workflowHelpers = useWorkflowHelpers();
      const workflowSaving = useWorkflowSaving({
        router
      });
      const workflowsStore = useWorkflowsStore();
      const uiStore = useUIStore();
      const telemetry = useTelemetry();
      const toast = useToast();
      const i18n = useI18n();
      const npsSurveyStore = useNpsSurveyStore();
      const updateWorkflowActivation = async (workflowId, newActiveState, telemetrySource) => {
        updatingWorkflowActivation.value = true;
        const nodesIssuesExist = workflowsStore.nodesIssuesExist;
        let currWorkflowId = workflowId;
        if (!currWorkflowId || currWorkflowId === "__EMPTY__") {
          if (!(await workflowSaving.saveCurrentWorkflow())) {
            updatingWorkflowActivation.value = false;
            return false;
          }
          currWorkflowId = workflowsStore.workflowId;
        }
        const isCurrentWorkflow = currWorkflowId === workflowsStore.workflowId;
        const isWorkflowActive = workflowsStore.activeWorkflows.includes(currWorkflowId);
        const telemetryPayload = {
          workflow_id: currWorkflowId,
          is_active: newActiveState,
          previous_status: isWorkflowActive,
          ndv_input: telemetrySource === "ndv"
        };
        telemetry.track("User set workflow active status", telemetryPayload);
        useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
        try {
          if (isWorkflowActive && newActiveState) {
            toast.showMessage({
              title: i18n.baseText("workflowActivator.workflowIsActive"),
              type: "success"
            });
            updatingWorkflowActivation.value = false;
            return true;
          }
          if (isCurrentWorkflow && nodesIssuesExist && newActiveState) {
            toast.showMessage({
              title: i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title"),
              message: i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.message"),
              type: "error"
            });
            updatingWorkflowActivation.value = false;
            return false;
          }
          await workflowHelpers.updateWorkflow({
            workflowId: currWorkflowId,
            active: newActiveState
          }, !uiStore.stateIsDirty);
        } catch (error) {
          const newStateName = newActiveState ? "activated" : "deactivated";
          toast.showError(error, i18n.baseText("workflowActivator.showError.title", {
            interpolate: {
              newStateName
            }
          }) + ":");
          updatingWorkflowActivation.value = false;
          return false;
        }
        const activationEventName = isCurrentWorkflow ? "workflow.activeChangeCurrent" : "workflow.activeChange";
        useExternalHooks().run(activationEventName, {
          workflowId: currWorkflowId,
          active: newActiveState
        });
        updatingWorkflowActivation.value = false;
        if (isCurrentWorkflow) if (newActiveState && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);else await npsSurveyStore.fetchPromptsData();
        return newActiveState;
      };
      const activateCurrentWorkflow = async telemetrySource => {
        const workflowId = workflowsStore.workflowId;
        return await updateWorkflowActivation(workflowId, true, telemetrySource);
      };
      return {
        activateCurrentWorkflow,
        updateWorkflowActivation,
        updatingWorkflowActivation
      };
    }

    //#endregion
    _export("t", useWorkflowActivate);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useWorkflowHelpers = _useTelemetryLegacy00HJs.fn;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        useStorage = _useTelemetryLegacy00HJs.zo;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_constantsLegacy00RJs) {
        WORKFLOW_ACTIVE_MODAL_KEY = _constantsLegacy00RJs.cs;
        LOCAL_STORAGE_ACTIVATION_FLAG = _constantsLegacy00RJs.ms;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00RJs.s;
      }, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_npsSurveyStoreLegacy019Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy019Js.t;
      }, function (_useWorkflowSavingLegacy01hJs) {
        useWorkflowSaving = _useWorkflowSavingLegacy01hJs.t;
      }],
      execute: function () {}
    };
  });
})();