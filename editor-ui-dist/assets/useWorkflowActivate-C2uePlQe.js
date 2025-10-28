import { It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { b as useRouter } from "./truncate-OqsyiABz.js";
import { Li as useUIStore, Ro as useStorage, mn as useWorkflowHelpers, o as useWorkflowsStore, t as useTelemetry } from "./useTelemetry-C3cN19b2.js";
import { t as useToast } from "./useToast-B-CMvNEW.js";
import { Pn as LOCAL_STORAGE_ACTIVATION_FLAG, ma as WORKFLOW_ACTIVE_MODAL_KEY, ri as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-CiCQTzlI.js";
import { t as useExternalHooks } from "./useExternalHooks-CFOQ8Nn2.js";
import { t as useNpsSurveyStore } from "./npsSurvey.store-C1nTMANL.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-UjOXroJ8.js";
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
			await workflowHelpers.updateWorkflow({
				workflowId: currWorkflowId,
				active: newActiveState
			}, !uiStore.stateIsDirty);
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
	return {
		activateCurrentWorkflow,
		updateWorkflowActivation,
		updatingWorkflowActivation
	};
}
export { useWorkflowActivate as t };
