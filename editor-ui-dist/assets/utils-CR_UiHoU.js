import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { Ar as useStorage, Mt as useTelemetry, Sr as useExternalHooks, br as useToast, r as useUIStore, s as useWorkflowsStore } from "./users.store-DmlY2Qk6.js";
import { ms as WORKFLOW_ACTIVE_MODAL_KEY, ws as LOCAL_STORAGE_ACTIVATION_FLAG } from "./constants-D1rOdsyc.js";
import { t as require_dateformat } from "./dateformat-BeHi9sF4.js";
import { t as useCollaborationStore } from "./collaboration.store-CrY9Fd9n.js";
function useWorkflowActivate() {
	const updatingWorkflowActivation = ref(false);
	const workflowsStore = useWorkflowsStore();
	const uiStore = useUIStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const collaborationStore = useCollaborationStore();
	const publishWorkflow = async (workflowId, versionId, options) => {
		updatingWorkflowActivation.value = true;
		collaborationStore.requestWriteAccess();
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
		collaborationStore.requestWriteAccess();
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
		updatingWorkflowActivation,
		publishWorkflow,
		unpublishWorkflowFromHistory
	};
}
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
const getLastPublishedVersion = (workflowPublishHistory) => {
	return workflowPublishHistory.findLast((history) => history.event === "activated");
};
const generateVersionName = (versionId) => {
	return `Version ${versionId.substring(0, 8)}`;
};
const formatTimestamp = (value) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
	const [date, time] = (0, import_dateformat.default)(value, `${value.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
	return {
		date,
		time
	};
};
const computeTimelineEntries = (items) => {
	const entries = [];
	let currentGroup = [];
	let groupCounter = 0;
	const flushGroup = () => {
		if (currentGroup.length > 0) {
			entries.push({
				type: "group-header",
				groupId: `group-${groupCounter++}`,
				count: currentGroup.length,
				versions: [...currentGroup]
			});
			currentGroup = [];
		}
	};
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (!(i === 0) && !item.name?.trim()) currentGroup.push({
			type: "version",
			item,
			originalIndex: i,
			isGrouped: true
		});
		else {
			flushGroup();
			entries.push({
				type: "version",
				item,
				originalIndex: i,
				isGrouped: false
			});
		}
	}
	flushGroup();
	return entries;
};
export { useWorkflowActivate as a, getLastPublishedVersion as i, formatTimestamp as n, generateVersionName as r, computeTimelineEntries as t };
