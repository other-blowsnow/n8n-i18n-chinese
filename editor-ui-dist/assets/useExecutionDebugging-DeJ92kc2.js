import { I as h, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-Ug6bR7N9.js";
import { gt as useRouter } from "./src-BY3LHeey.js";
import { t as useMessage } from "./useMessage-lKlgnExp.js";
import { Ti as isFullExecutionResponse, Zi as sanitizeHtml, _ as useWorkflowExecutionStateStore, b as injectWorkflowDocumentStore, t as useWorkflowsStore, v as createWorkflowDocumentId } from "./workflows.store-BmW1SZ12.js";
import { t as useToast } from "./useToast-DwRNWbIa.js";
import { ds as isTrimmedNodeExecutionData, ku as EnterpriseEditionFeature, li as VIEWS } from "./constants-CLQJMg7Y.js";
import { t as useRootStore } from "./useRootStore-BXKn7r8-.js";
import { t as useSettingsStore } from "./settings.store-HAN34Lkc.js";
import { G as DEBUG_PAYWALL_MODAL_KEY, f as useUIStore, p as useTelemetry } from "./users.store-AINJEAwY.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Co9CkZaF.js";
//#region src/features/execution/executions/composables/useExecutionDebugging.ts
var useExecutionDebugging = () => {
	const telemetry = useTelemetry();
	const router = useRouter();
	const i18n = useI18n();
	const message = useMessage();
	const toast = useToast();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	const { markStateDirty } = uiStore;
	const pageRedirectionHelper = usePageRedirectionHelper();
	const isDebugEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DebugInEditor]);
	const applyExecutionData = async (executionId) => {
		const execution = await workflowsStore.getExecution(executionId);
		const workflowNodes = workflowDocumentStore.value.allNodes;
		if (!execution?.data?.resultData) return;
		const { runData } = execution.data.resultData;
		const executionNodeNames = Object.keys(runData);
		const missingNodeNames = executionNodeNames.filter((name) => !workflowNodes.some((node) => node.name === name));
		const workflowPinnedNodeNames = Object.keys(workflowDocumentStore.value.pinnedDataByNodeName);
		const matchingPinnedNodeNames = executionNodeNames.filter((name) => workflowPinnedNodeNames.includes(name));
		if (matchingPinnedNodeNames.length > 0) {
			const confirmMessage = h("p", [i18n.baseText("nodeView.confirmMessage.debug.message"), h("ul", { class: "mt-l ml-l" }, matchingPinnedNodeNames.map((name) => h("li", sanitizeHtml(name))))]);
			if (await message.confirm(confirmMessage, i18n.baseText("nodeView.confirmMessage.debug.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("nodeView.confirmMessage.debug.confirmButtonText"),
				cancelButtonText: i18n.baseText("nodeView.confirmMessage.debug.cancelButtonText"),
				customClass: "matching-pinned-nodes-confirmation"
			}) === "confirm") matchingPinnedNodeNames.forEach((name) => {
				workflowDocumentStore.value.unpinNodeData(name);
			});
			else {
				await router.push({
					name: VIEWS.EXECUTION_PREVIEW,
					params: {
						workflowId: workflowDocumentStore.value.workflowId,
						executionId
					}
				});
				return;
			}
		}
		workflowDocumentStore.value.resetAllNodesIssues();
		useWorkflowExecutionStateStore(workflowDocumentStore.value.documentId).setWorkflowExecutionData(execution);
		const pinnableNodes = workflowNodes.filter((node) => !workflowDocumentStore.value.getParentNodes(node.name).length);
		let pinnings = 0;
		pinnableNodes.forEach((node) => {
			const taskData = runData[node.name]?.[0];
			if (taskData?.data?.main) {
				const nodeData = taskData.data.main.find((output) => output && output.length > 0);
				if (nodeData) {
					if (isTrimmedNodeExecutionData(nodeData)) return;
					pinnings++;
					workflowDocumentStore.value.pinNodeData(node.name, nodeData);
					workflowDocumentStore.value.clearPinnedDataTimestamps(node.name);
				}
			}
		});
		if (pinnings > 0 || matchingPinnedNodeNames.length > 0) markStateDirty();
		toast.showToast({
			title: i18n.baseText("nodeView.showMessage.debug.title"),
			message: i18n.baseText("nodeView.showMessage.debug.content"),
			type: "info"
		});
		if (missingNodeNames.length) toast.showToast({
			title: i18n.baseText("nodeView.showMessage.debug.missingNodes.title"),
			message: i18n.baseText("nodeView.showMessage.debug.missingNodes.content", { interpolate: { nodeNames: missingNodeNames.join(", ") } }),
			type: "warning"
		});
		telemetry.track("User clicked debug execution button", {
			instance_id: useRootStore().instanceId,
			exec_status: isFullExecutionResponse(execution) ? execution.status : "",
			override_pinned_data: pinnableNodes.length === pinnings,
			all_exec_data_imported: missingNodeNames.length === 0
		});
	};
	const handleDebugLinkClick = (event) => {
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
		useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowsStore.workflowId)).setIsInDebugMode(false);
	};
	return {
		applyExecutionData,
		handleDebugLinkClick
	};
};
//#endregion
export { useExecutionDebugging as t };
