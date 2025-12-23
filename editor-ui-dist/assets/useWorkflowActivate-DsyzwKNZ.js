import { It as ref } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { y as useRouter } from "./truncate-BlCeUq7F.js";
import { Go as activateWorkflow, Ko as deactivateWorkflow, Qo as useStorage, Sn as useWorkflowHelpers, Wi as useUIStore, i as useExternalHooks, n as useToast, p as useTelemetry, v as useWorkflowsStore } from "./builder.store-BjWbk2Wl.js";
import { Ds as LOCAL_STORAGE_ACTIVATION_FLAG, _s as WORKFLOW_ACTIVE_MODAL_KEY, c as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-ksa9xIxI.js";
import { r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import { t as useNpsSurveyStore } from "./npsSurvey.store-KZKvEKjG.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-Cw6HTOE_.js";
function useWorkflowActivate() {
	const updatingWorkflowActivation = ref(false);
	const router = useRouter();
	const workflowHelpers = useWorkflowHelpers();
	const workflowSaving = useWorkflowSaving({ router });
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
			if (!await workflowSaving.saveCurrentWorkflow()) {
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
			if (uiStore.stateIsDirty) await workflowHelpers.updateWorkflow({ workflowId: currWorkflowId }, false);
			let workflow;
			if (newActiveState) workflow = await activateWorkflow(rootStore.restApiContext, currWorkflowId, { versionId: workflowsStore.workflow.versionId });
			else workflow = await deactivateWorkflow(rootStore.restApiContext, currWorkflowId);
			if (!workflow.checksum) throw new Error("Failed to activate or deactivate workflow");
			if (workflow.activeVersion) workflowsStore.setWorkflowActive(currWorkflowId, workflow.activeVersion, true);
			else workflowsStore.setWorkflowInactive(currWorkflowId);
		} catch (error) {
			const newStateName = newActiveState ? "activated" : "deactivated";
			toast.showError(error, i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName } }) + ":");
			updatingWorkflowActivation.value = false;
			return false;
		}
		const activationEventName = isCurrentWorkflow ? "workflow.activeChangeCurrent" : "workflow.activeChange";
		useExternalHooks().run(activationEventName, {
			workflowId: currWorkflowId,
			active: newActiveState
		});
		updatingWorkflowActivation.value = false;
		if (isCurrentWorkflow) if (newActiveState && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);
		else await npsSurveyStore.fetchPromptsData();
		return newActiveState;
	};
	const activateCurrentWorkflow = async (telemetrySource) => {
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
			if (!updatedWorkflow.activeVersion || !updatedWorkflow.checksum) throw new Error("Failed to publish workflow");
			workflowsStore.setWorkflowActive(workflowId, updatedWorkflow.activeVersion, true);
			if (workflowId === workflowsStore.workflowId) workflowsStore.setWorkflowVersionId(updatedWorkflow.versionId, updatedWorkflow.checksum);
			useExternalHooks().run("workflow.published", {
				workflowId,
				versionId: updatedWorkflow.activeVersion.versionId
			});
			if (!hadPublishedVersion && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "published" } }) + ":");
			if (!error.meta?.validationError) workflowsStore.setWorkflowInactive(workflowId);
			return false;
		} finally {
			updatingWorkflowActivation.value = false;
		}
	};
	const unpublishWorkflowFromHistory = async (workflowId) => {
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
			await workflowsStore.deactivateWorkflow(workflowId);
			useExternalHooks().run("workflow.unpublished", { workflowId });
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "deactivated" } }) + ":");
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
export { useWorkflowActivate as t };
