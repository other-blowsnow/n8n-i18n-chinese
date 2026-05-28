import { Ft as ref } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-Dm3AetX9.js";
import { di as useStorage, en as useWorkflowsListStore, gn as createWorkflowDocumentId, ln as useTelemetry, r as useUIStore, s as useWorkflowsStore, yn as useWorkflowDocumentStore } from "./users.store-DjNI0iy4.js";
import { t as useToast } from "./useToast-BEzZ9z8R.js";
import { Bi as WORKFLOW_ACTIVE_MODAL_KEY, zi as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY } from "./constants-BC_f8ato.js";
import { t as useExternalHooks } from "./useExternalHooks-C01XgWaP.js";
import { t as useCollaborationStore } from "./collaboration.store-52pYtUpD.js";
import { t as useActivationError } from "./useActivationError-Hh-7kl0w.js";
//#region src/app/composables/useWorkflowActivate.ts
function useWorkflowActivate() {
	const updatingWorkflowActivation = ref(false);
	const activationErrorNodeId = ref();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const collaborationStore = useCollaborationStore();
	const { errorMessage: activationErrorMessage } = useActivationError(activationErrorNodeId);
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
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		try {
			const expectedChecksum = workflowId === workflowsStore.workflowId ? workflowDocumentStore.checksum : void 0;
			const updatedWorkflow = await workflowsStore.publishWorkflow(workflowId, {
				versionId,
				name: options?.name,
				description: options?.description,
				expectedChecksum
			});
			if (!updatedWorkflow.activeVersion || !updatedWorkflow.checksum) throw new Error("Failed to publish workflow");
			workflowsStore.setWorkflowActive(workflowId, updatedWorkflow.activeVersion, true);
			workflowDocumentStore.setActiveState({
				activeVersionId: updatedWorkflow.activeVersion.versionId,
				activeVersion: updatedWorkflow.activeVersion
			});
			if (workflowId === workflowsStore.workflowId) {
				workflowDocumentStore.setVersionData({
					versionId: updatedWorkflow.versionId,
					name: workflowDocumentStore.versionData?.name ?? null,
					description: workflowDocumentStore.versionData?.description ?? null
				});
				if (updatedWorkflow.checksum) workflowDocumentStore.setChecksum(updatedWorkflow.checksum);
			}
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
				activationErrorNodeId.value = error.meta?.nodeId;
				const title = i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "published" } });
				toast.showError(error, title, {
					message: activationErrorMessage.value,
					description: error.meta?.description
				});
				if (!error.meta?.validationError) {
					workflowsStore.setWorkflowInactive(workflowId);
					workflowDocumentStore.setActiveState({
						activeVersionId: null,
						activeVersion: null
					});
				}
			}
			return {
				success: false,
				errorHandled: true
			};
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
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		try {
			const expectedChecksum = workflowId === workflowsStore.workflowId ? workflowDocumentStore.checksum : void 0;
			await workflowsStore.deactivateWorkflow(workflowId, expectedChecksum);
			workflowDocumentStore.setActiveState({
				activeVersionId: null,
				activeVersion: null
			});
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
//#endregion
export { useWorkflowActivate as t };
