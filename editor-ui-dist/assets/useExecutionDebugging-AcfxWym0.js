import { I as h, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-x10Anb9r.js";
import { lt as useRouter } from "./src-CSSRFm72.js";
import { t as useMessage } from "./useMessage-DcPtjnIv.js";
import { Ba as DEBUG_PAYWALL_MODAL_KEY, fn as injectWorkflowDocumentStore, jn as isFullExecutionResponse, r as useUIStore, rn as useTelemetry, s as useWorkflowsStore } from "./users.store-V46mYCxM.js";
import { s as sanitizeHtml, t as useToast } from "./useToast-vrHmeB6l.js";
import { Xl as EnterpriseEditionFeature, ii as VIEWS, qo as isTrimmedNodeExecutionData } from "./constants-B2-iseoM.js";
import { t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-MHoQtuiD.js";
import { t as injectWorkflowState } from "./useWorkflowState-CVpb4YmH.js";
//#region src/features/execution/executions/composables/useExecutionDebugging.ts
/**
* @param providedWorkflowState - Optional workflow state to use instead of injecting.
*   This is needed when called from the same component that provides WorkflowStateKey
*   (e.g., WorkflowLayout), since Vue's provide/inject works parent-to-child only.
*/
var useExecutionDebugging = (providedWorkflowState) => {
	const telemetry = useTelemetry();
	const router = useRouter();
	const i18n = useI18n();
	const message = useMessage();
	const toast = useToast();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const workflowState = providedWorkflowState ?? injectWorkflowState();
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
		const workflowPinnedNodeNames = Object.keys(workflowDocumentStore.value.pinData);
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
		workflowState.setWorkflowExecutionData(execution);
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
		workflowsStore.setIsInDebugMode(false);
	};
	return {
		applyExecutionData,
		handleDebugLinkClick
	};
};
//#endregion
export { useExecutionDebugging as t };
