import { I as h, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-CbSPiy-O.js";
import { ut as useRouter } from "./src-BEPXK8RZ.js";
import { Ar as isFullExecutionResponse, Dt as injectWorkflowState, Ln as useMessage, Pn as useToast, Rs as sanitizeHtml, _r as useTelemetry, co as DEBUG_PAYWALL_MODAL_KEY, pa as useWorkflowDocumentStore, r as useUIStore, s as useWorkflowsStore, ua as createWorkflowDocumentId } from "./users.store-yC1MS1aJ.js";
import { rl as EnterpriseEditionFeature, zr as VIEWS } from "./constants-CjIW4CHX.js";
import { t as useRootStore } from "./useRootStore-D8wbz-kO.js";
import { t as useSettingsStore } from "./settings.store-BOIB94F8.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-CJ5CTfOb.js";
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
	const workflowDocumentStore = computed(() => workflowsStore.workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)) : void 0);
	const workflowState = providedWorkflowState ?? injectWorkflowState();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	const pageRedirectionHelper = usePageRedirectionHelper();
	const isDebugEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DebugInEditor]);
	const applyExecutionData = async (executionId) => {
		const execution = await workflowsStore.getExecution(executionId);
		const workflowObject = workflowsStore.workflowObject;
		const workflowNodes = workflowDocumentStore.value?.getNodes() ?? [];
		if (!execution?.data?.resultData) return;
		const { runData } = execution.data.resultData;
		const executionNodeNames = Object.keys(runData);
		const missingNodeNames = executionNodeNames.filter((name) => !workflowNodes.some((node) => node.name === name));
		const workflowPinnedNodeNames = Object.keys(workflowDocumentStore.value?.pinData ?? {});
		const matchingPinnedNodeNames = executionNodeNames.filter((name) => workflowPinnedNodeNames.includes(name));
		if (matchingPinnedNodeNames.length > 0) {
			const confirmMessage = h("p", [i18n.baseText("nodeView.confirmMessage.debug.message"), h("ul", { class: "mt-l ml-l" }, matchingPinnedNodeNames.map((name) => h("li", sanitizeHtml(name))))]);
			if (await message.confirm(confirmMessage, i18n.baseText("nodeView.confirmMessage.debug.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("nodeView.confirmMessage.debug.confirmButtonText"),
				cancelButtonText: i18n.baseText("nodeView.confirmMessage.debug.cancelButtonText"),
				customClass: "matching-pinned-nodes-confirmation"
			}) === "confirm") matchingPinnedNodeNames.forEach((name) => {
				workflowDocumentStore.value?.unpinNodeData(name);
			});
			else {
				await router.push({
					name: VIEWS.EXECUTION_PREVIEW,
					params: {
						name: workflowObject.id,
						executionId
					}
				});
				return;
			}
		}
		workflowDocumentStore.value?.resetAllNodesIssues();
		workflowState.setWorkflowExecutionData(execution);
		const pinnableNodes = workflowNodes.filter((node) => !workflowObject.getParentNodes(node.name).length);
		let pinnings = 0;
		pinnableNodes.forEach((node) => {
			const taskData = runData[node.name]?.[0];
			if (taskData?.data?.main) {
				const nodeData = taskData.data.main.find((output) => output && output.length > 0);
				if (nodeData) {
					pinnings++;
					workflowDocumentStore.value?.pinNodeData(node.name, nodeData);
					if (workflowsStore.nodeMetadata[node.name]) {
						delete workflowsStore.nodeMetadata[node.name].pinnedDataLastUpdatedAt;
						delete workflowsStore.nodeMetadata[node.name].pinnedDataLastRemovedAt;
					}
				}
			}
		});
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
		workflowsStore.isInDebugMode = false;
	};
	return {
		applyExecutionData,
		handleDebugLinkClick
	};
};
//#endregion
export { useExecutionDebugging as t };
