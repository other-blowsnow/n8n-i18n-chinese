import { gt as useI18n } from "./_MapCache-CyBAZEDf.js";
import { t as useMessage } from "./useMessage-C56y91s7.js";
import { Dn as useSourceControlStore, Fi as useUIStore, Gn as useCanvasStore, Sn as injectWorkflowState, Ti as tryToParseNumber, at as useNodeTypesStore, mn as useWorkflowHelpers, o as useWorkflowsStore, t as useTelemetry, xn as useNodeHelpers } from "./useTelemetry-DfTC69TL.js";
import { t as useToast } from "./useToast-D5n7Pl1L.js";
import { $o as MODAL_CONFIRM, In as NON_ACTIVATABLE_TRIGGER_NODE_TYPES, Po as VIEWS, Qo as MODAL_CLOSE, To as getResourcePermissions, Zo as MODAL_CANCEL, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-DrLxPWeP.js";
import { t as useExternalHooks } from "./useExternalHooks-CSQJVpG7.js";
import { t as useNpsSurveyStore } from "./npsSurvey.store-ClH_tq1y.js";
import { t as useTemplatesStore } from "./templates.store-_GnS6DMa.js";
import { t as useFocusPanelStore } from "./focusPanel.store-Bbuj4TLt.js";
function useWorkflowSaving({ router, workflowState: providedWorkflowState }) {
	const uiStore = useUIStore();
	const npsSurveyStore = useNpsSurveyStore();
	const message = useMessage();
	const i18n = useI18n();
	const workflowsStore = useWorkflowsStore();
	const workflowState = providedWorkflowState ?? injectWorkflowState();
	const focusPanelStore = useFocusPanelStore();
	const nodeTypesStore = useNodeTypesStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const nodeHelpers = useNodeHelpers();
	const templatesStore = useTemplatesStore();
	const { getWorkflowDataToSave, checkConflictingWebhooks, getWorkflowProjectRole } = useWorkflowHelpers();
	async function promptSaveUnsavedWorkflowChanges(next, { confirm = async () => true, cancel = async () => {} } = {}) {
		if (!uiStore.stateIsDirty || workflowsStore.workflow.isArchived || !getResourcePermissions(workflowsStore.workflow.scopes).workflow.update) {
			next();
			return;
		}
		switch (await message.confirm(i18n.baseText("generic.unsavedWork.confirmMessage.message"), {
			title: i18n.baseText("generic.unsavedWork.confirmMessage.headline"),
			type: "warning",
			confirmButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.confirmButtonText"),
			cancelButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.cancelButtonText"),
			showClose: true
		})) {
			case MODAL_CONFIRM:
				if (await saveCurrentWorkflow({}, false)) {
					await npsSurveyStore.fetchPromptsData();
					uiStore.stateIsDirty = false;
					next(await confirm());
				} else stayOnCurrentWorkflow(next);
				return;
			case MODAL_CANCEL:
				await cancel();
				uiStore.stateIsDirty = false;
				next();
				return;
			case MODAL_CLOSE:
				if (workflowsStore.workflow.id !== "__EMPTY__") stayOnCurrentWorkflow(next);
				return;
		}
	}
	function stayOnCurrentWorkflow(next) {
		next(router.resolve({
			name: VIEWS.WORKFLOW,
			params: { name: workflowsStore.workflow.id }
		}));
	}
	function isNodeActivatable(node) {
		if (node.disabled) return false;
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		return nodeType !== null && nodeType.group.includes("trigger") && !NON_ACTIVATABLE_TRIGGER_NODE_TYPES.includes(node.type);
	}
	async function getWorkflowDeactivationInfo(workflowId, request) {
		if (request.nodes !== void 0 && !request.nodes.some(isNodeActivatable)) return {
			title: i18n.baseText("workflows.autodeactivated"),
			message: i18n.baseText("workflowActivator.thisWorkflowHasNoTriggerNodes"),
			type: "info"
		};
		const conflictData = await checkConflictingWebhooks(workflowId);
		if (conflictData) return {
			title: "Conflicting Webhook Path",
			message: `Workflow set to inactive: Workflow set to inactive: Live webhook in another workflow uses same path as node '${conflictData.trigger.name}'.`,
			type: "error"
		};
	}
	function getQueryParam(query, key) {
		const value = query[key];
		if (Array.isArray(value)) return value[0] ?? void 0;
		if (value === null) return void 0;
		return value;
	}
	async function saveCurrentWorkflow({ id, name, tags } = {}, redirect = true, forceSave = false) {
		if (useSourceControlStore().preferences.branchReadOnly) return false;
		const isLoading = useCanvasStore().isLoading;
		const currentWorkflow = id ?? getQueryParam(router.currentRoute.value.params, "name");
		const parentFolderId = getQueryParam(router.currentRoute.value.query, "parentFolderId");
		const uiContext = getQueryParam(router.currentRoute.value.query, "uiContext");
		if (!currentWorkflow || ["new", "__EMPTY__"].includes(currentWorkflow)) return !!await saveAsNewWorkflow({
			name,
			tags,
			parentFolderId,
			uiContext
		}, redirect);
		try {
			if (!forceSave && isLoading) return true;
			uiStore.addActiveAction("workflowSaving");
			const workflowDataRequest = await getWorkflowDataToSave();
			if (workflowDataRequest.id !== currentWorkflow) throw new Error("Attempted to save a workflow different from the current workflow");
			if (name) workflowDataRequest.name = name.trim();
			if (tags) workflowDataRequest.tags = tags;
			workflowDataRequest.versionId = workflowsStore.workflowVersionId;
			const deactivateReason = await getWorkflowDeactivationInfo(currentWorkflow, workflowDataRequest);
			if (deactivateReason !== void 0) {
				workflowDataRequest.active = false;
				if (workflowsStore.isWorkflowActive) {
					toast.showMessage(deactivateReason);
					workflowsStore.setWorkflowInactive(currentWorkflow);
				}
			}
			const workflowData = await workflowsStore.updateWorkflow(currentWorkflow, workflowDataRequest, forceSave);
			workflowsStore.setWorkflowVersionId(workflowData.versionId);
			if (name) workflowState.setWorkflowName({
				newName: workflowData.name,
				setStateDirty: false
			});
			if (tags) {
				const tagIds = (workflowData.tags || []).map((tag) => tag.id);
				workflowState.setWorkflowTagIds(tagIds);
			}
			uiStore.stateIsDirty = false;
			uiStore.removeActiveAction("workflowSaving");
			useExternalHooks().run("workflow.afterUpdate", { workflowData });
			return true;
		} catch (error) {
			console.error(error);
			uiStore.removeActiveAction("workflowSaving");
			if (error.errorCode === 100) {
				telemetry.track("User attempted to save locked workflow", {
					workflowId: currentWorkflow,
					sharing_role: getWorkflowProjectRole(currentWorkflow)
				});
				const url = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { name: currentWorkflow }
				}).href;
				if (await message.confirm(i18n.baseText("workflows.concurrentChanges.confirmMessage.message", { interpolate: { url } }), i18n.baseText("workflows.concurrentChanges.confirmMessage.title"), {
					confirmButtonText: i18n.baseText("workflows.concurrentChanges.confirmMessage.confirmButtonText"),
					cancelButtonText: i18n.baseText("workflows.concurrentChanges.confirmMessage.cancelButtonText")
				}) === "confirm") return await saveCurrentWorkflow({
					id,
					name,
					tags
				}, redirect, true);
				return false;
			}
			toast.showMessage({
				title: i18n.baseText("workflowHelpers.showMessage.title"),
				message: error.message,
				type: "error"
			});
			return false;
		}
	}
	async function saveAsNewWorkflow({ name, tags, resetWebhookUrls, resetNodeIds, openInNewWindow, parentFolderId, uiContext, data } = {}, redirect = true) {
		try {
			uiStore.addActiveAction("workflowSaving");
			const workflowDataRequest = data || await getWorkflowDataToSave();
			const changedNodes = {};
			if (resetNodeIds) workflowDataRequest.nodes = workflowDataRequest.nodes.map((node) => {
				nodeHelpers.assignNodeId(node);
				return node;
			});
			if (resetWebhookUrls) workflowDataRequest.nodes = workflowDataRequest.nodes.map((node) => {
				if (node.webhookId) {
					const newId = nodeHelpers.assignWebhookId(node);
					node.parameters.path = newId;
					changedNodes[node.name] = node.webhookId;
				}
				return node;
			});
			if (name) workflowDataRequest.name = name.trim();
			if (tags) workflowDataRequest.tags = tags;
			if (parentFolderId) workflowDataRequest.parentFolderId = parentFolderId;
			if (uiContext) workflowDataRequest.uiContext = uiContext;
			const workflowData = await workflowsStore.createNewWorkflow(workflowDataRequest);
			workflowsStore.addWorkflow(workflowData);
			focusPanelStore.onNewWorkflowSave(workflowData.id);
			if (openInNewWindow) {
				const routeData = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { name: workflowData.id }
				});
				window.open(routeData.href, "_blank");
				uiStore.removeActiveAction("workflowSaving");
				return workflowData.id;
			}
			if (workflowData.activeVersionId !== null) {
				const conflict = await checkConflictingWebhooks(workflowData.id);
				if (conflict) {
					workflowData.active = false;
					workflowData.activeVersionId = null;
					toast.showMessage({
						title: "Conflicting Webhook Path",
						message: `Workflow set to inactive: Live webhook in another workflow uses same path as node '${conflict.trigger.name}'.`,
						type: "error"
					});
				}
			}
			workflowState.setActive(workflowData.activeVersionId);
			workflowState.setWorkflowId(workflowData.id);
			workflowsStore.setWorkflowVersionId(workflowData.versionId);
			workflowState.setWorkflowName({
				newName: workflowData.name,
				setStateDirty: false
			});
			workflowState.setWorkflowSettings(workflowData.settings || {});
			uiStore.stateIsDirty = false;
			Object.keys(changedNodes).forEach((nodeName) => {
				const changes = {
					key: "webhookId",
					value: changedNodes[nodeName],
					name: nodeName
				};
				workflowState.setNodeValue(changes);
			});
			const tagIds = (workflowData.tags || []).map((tag) => tag.id);
			workflowState.setWorkflowTagIds(tagIds);
			const templateId = router.currentRoute.value.query.templateId;
			if (templateId) telemetry.track("User saved new workflow from template", {
				template_id: tryToParseNumber(String(templateId)),
				workflow_id: workflowData.id,
				wf_template_repo_session_id: templatesStore.previousSessionId
			});
			if (redirect) await router.replace({
				name: VIEWS.WORKFLOW,
				params: { name: workflowData.id },
				query: { action: "workflowSave" }
			});
			uiStore.removeActiveAction("workflowSaving");
			uiStore.stateIsDirty = false;
			useExternalHooks().run("workflow.afterUpdate", { workflowData });
			return workflowData.id;
		} catch (e) {
			uiStore.removeActiveAction("workflowSaving");
			toast.showMessage({
				title: i18n.baseText("workflowHelpers.showMessage.title"),
				message: e.message,
				type: "error"
			});
			return null;
		}
	}
	return {
		promptSaveUnsavedWorkflowChanges,
		saveCurrentWorkflow,
		saveAsNewWorkflow
	};
}
export { useWorkflowSaving as t };
