;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./truncate-legacy-BIn0keUI.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./constants-legacy-7i-p8Q83.js", "./_baseOrderBy-legacy-BktlFW96.js", "./useExternalHooks-legacy-DAimL5by.js", "./npsSurvey.store-legacy-B1YzgCUi.js", "./useWorkflowSaving-legacy-BFUB_zl0.js"], function (_export, _context) {
    "use strict";

    var ref, useI18n, useRouter, useUIStore, activateWorkflow, deactivateWorkflow, useStorage, useWorkflowHelpers, useWorkflowsStore, useTelemetry, useToast, PLACEHOLDER_EMPTY_WORKFLOW_ID, WORKFLOW_ACTIVE_MODAL_KEY, LOCAL_STORAGE_ACTIVATION_FLAG, useRootStore, useExternalHooks, useNpsSurveyStore, useWorkflowSaving;
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
      const rootStore = useRootStore();
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
          if (uiStore.stateIsDirty) await workflowHelpers.updateWorkflow({
            workflowId: currWorkflowId
          }, false);
          let workflow;
          if (newActiveState) workflow = await activateWorkflow(rootStore.restApiContext, currWorkflowId, {
            versionId: workflowsStore.workflow.versionId
          });else workflow = await deactivateWorkflow(rootStore.restApiContext, currWorkflowId);
          if (workflow.activeVersion) workflowsStore.setWorkflowActive(currWorkflowId, workflow.activeVersion);else workflowsStore.setWorkflowInactive(currWorkflowId);
          if (isCurrentWorkflow && workflow.checksum) workflowsStore.setWorkflowChecksum(workflow.checksum);
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
      const publishWorkflow = async (workflowId, versionId, options) => {
        updatingWorkflowActivation.value = true;
        const hadPublishedVersion = !!workflowsStore.getWorkflowById(workflowId).activeVersion;
        if (!hadPublishedVersion) {
          const telemetryPayload = {
            workflow_id: workflowId,
            is_active: true,
            previous_status: false,
            ndv_input: false
          };
          useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
        }
        try {
          const expectedChecksum = workflowId === workflowsStore.workflowId ? workflowsStore.workflowChecksum : void 0;
          const updatedWorkflow = await workflowsStore.publishWorkflow(workflowId, {
            versionId,
            name: options?.name,
            description: options?.description,
            expectedChecksum
          });
          if (!updatedWorkflow.activeVersion) throw new Error("Failed to publish workflow");
          workflowsStore.setWorkflowActive(workflowId, updatedWorkflow.activeVersion);
          if (workflowId === workflowsStore.workflowId) {
            workflowsStore.setWorkflowVersionId(updatedWorkflow.versionId);
            if (updatedWorkflow.checksum) workflowsStore.setWorkflowChecksum(updatedWorkflow.checksum);
          }
          useExternalHooks().run("workflow.published", {
            workflowId,
            versionId: updatedWorkflow.activeVersion.versionId
          });
          if (!hadPublishedVersion && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);
          return true;
        } catch (error) {
          toast.showError(error, i18n.baseText("workflowActivator.showError.title", {
            interpolate: {
              newStateName: "published"
            }
          }) + ":");
          if (!error.meta?.validationError) workflowsStore.setWorkflowInactive(workflowId);
          return false;
        } finally {
          updatingWorkflowActivation.value = false;
        }
      };
      const unpublishWorkflowFromHistory = async workflowId => {
        updatingWorkflowActivation.value = true;
        const telemetryPayload = {
          workflow_id: workflowId,
          is_active: false,
          previous_status: !!workflowsStore.getWorkflowById(workflowId).activeVersion,
          ndv_input: false
        };
        telemetry.track("User set workflow active status", telemetryPayload);
        useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
        try {
          const updatedWorkflow = await workflowsStore.deactivateWorkflow(workflowId);
          if (workflowId === workflowsStore.workflowId && updatedWorkflow.checksum) workflowsStore.setWorkflowChecksum(updatedWorkflow.checksum);
          useExternalHooks().run("workflow.unpublished", {
            workflowId
          });
          return true;
        } catch (error) {
          toast.showError(error, i18n.baseText("workflowActivator.showError.title", {
            interpolate: {
              newStateName: "deactivated"
            }
          }) + ":");
          return false;
        } finally {
          updatingWorkflowActivation.value = false;
        }
      };
      return {
        activateCurrentWorkflow,
        updateWorkflowActivation,
        updatingWorkflowActivation,
        publishWorkflow,
        unpublishWorkflowFromHistory
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
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        activateWorkflow = _useTelemetryLegacy00HJs.Io;
        deactivateWorkflow = _useTelemetryLegacy00HJs.Lo;
        useStorage = _useTelemetryLegacy00HJs.Uo;
        useWorkflowHelpers = _useTelemetryLegacy00HJs.mn;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_constantsLegacy00TJs) {
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00TJs.c;
        WORKFLOW_ACTIVE_MODAL_KEY = _constantsLegacy00TJs.fs;
        LOCAL_STORAGE_ACTIVATION_FLAG = _constantsLegacy00TJs.xs;
      }, function (_baseOrderByLegacy00ZJs) {
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_useExternalHooksLegacy013Js) {
        useExternalHooks = _useExternalHooksLegacy013Js.t;
      }, function (_npsSurveyStoreLegacy01bJs) {
        useNpsSurveyStore = _npsSurveyStoreLegacy01bJs.t;
      }, function (_useWorkflowSavingLegacy01jJs) {
        useWorkflowSaving = _useWorkflowSavingLegacy01jJs.t;
      }],
      execute: function () {}
    };
  });
})();