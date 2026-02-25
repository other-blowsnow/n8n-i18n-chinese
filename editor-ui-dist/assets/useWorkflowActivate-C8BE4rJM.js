import { It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Hr as useStorage, Lt as useTelemetry, Rr as useWorkflowsListStore, r as useUIStore, s as useWorkflowsStore, xr as useExternalHooks, yr as useToast } from "./users.store-B-dhu6_V.js";
import { Ms as WORKFLOW_ACTIVE_MODAL_KEY, Us as LOCAL_STORAGE_ACTIVATION_FLAG, js as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY } from "./constants-DM6W84kp.js";
import { t as useCollaborationStore } from "./collaboration.store-CnDLrgY4.js";
function useWorkflowActivate() {
	const updatingWorkflowActivation = ref(false);
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const collaborationStore = useCollaborationStore();
	const parseWebhookConflictError = (error) => {
		try {
			const { errorCode, hint } = error;
			if (errorCode === 409) {
				const parsedHint = JSON.parse(hint ?? "");
				if (Array.isArray(parsedHint) && parsedHint.length > 0 && Object.hasOwn(parsedHint[0], "trigger")) return parsedHint;
			}
			return null;
		} catch {
			return null;
		}
	};
	const handleWebhookConflictError = async (error) => {
		const { trigger, conflict } = parseWebhookConflictError(error)?.pop() || {};
		let workflowName = conflict?.workflowId;
		try {
			if (conflict?.workflowId) workflowName = (await workflowsListStore.fetchWorkflow(conflict?.workflowId)).name;
		} catch {}
		uiStore.openModalWithData({
			name: WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY,
			data: {
				triggerType: trigger?.type,
				workflowName,
				...conflict
			}
		});
	};
	const isWebhookConflictError = (error) => {
		return parseWebhookConflictError(error) !== null;
	};
	const publishWorkflow = async (workflowId, versionId, options) => {
		updatingWorkflowActivation.value = true;
		collaborationStore.requestWriteAccess();
		const hadPublishedVersion = !!workflowsListStore.getWorkflowById(workflowId).activeVersion;
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
			if (workflowId === workflowsStore.workflowId) workflowsStore.setWorkflowVersionData({
				versionId: updatedWorkflow.versionId,
				name: workflowsStore.versionData?.name ?? null,
				description: workflowsStore.versionData?.description ?? null
			}, updatedWorkflow.checksum);
			useExternalHooks().run("workflow.published", {
				workflowId,
				versionId: updatedWorkflow.activeVersion.versionId
			});
			if (!hadPublishedVersion && useStorage("N8N_HIDE_ACTIVATION_ALERT").value !== "true") uiStore.openModal(WORKFLOW_ACTIVE_MODAL_KEY);
			return { success: true };
		} catch (error) {
			if (isWebhookConflictError(error)) {
				await handleWebhookConflictError(error);
				return {
					success: false,
					errorHandled: true
				};
			} else {
				toast.showError(error, i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "published" } }) + ":");
				if (!error.meta?.validationError) workflowsStore.setWorkflowInactive(workflowId);
			}
			return { success: false };
		} finally {
			updatingWorkflowActivation.value = false;
		}
	};
	const unpublishWorkflowFromHistory = async (workflowId) => {
		updatingWorkflowActivation.value = true;
		collaborationStore.requestWriteAccess();
		const telemetryPayload = {
			workflow_id: workflowId,
			is_active: false,
			previous_status: !!workflowsListStore.getWorkflowById(workflowId).activeVersion,
			ndv_input: false
		};
		telemetry.track("User set workflow active status", telemetryPayload);
		useExternalHooks().run("workflowActivate.updateWorkflowActivation", telemetryPayload);
		try {
			const expectedChecksum = workflowId === workflowsStore.workflowId ? workflowsStore.workflowChecksum : void 0;
			await workflowsStore.deactivateWorkflow(workflowId, expectedChecksum);
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
		updatingWorkflowActivation,
		publishWorkflow,
		unpublishWorkflowFromHistory
	};
}
export { useWorkflowActivate as t };
