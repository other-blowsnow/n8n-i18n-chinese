import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { wt as useRouter } from "./src-DAbbz2gO.js";
import { Sd as EMPTY_STATE_EXPERIMENT, hi as VIEWS, n as DEFAULT_NEW_WORKFLOW_NAME } from "./constants-BG93cxLW.js";
import { dn as useWorkflowsStore, st as useCredentialsStore } from "./workflowDocument.store-CUnvofeB.js";
import { T as defineStore } from "./useRootStore-e_Vi8Kjn.js";
import { Vn as STORES } from "./settings.store-BzvY0ZlK.js";
import { g as usePostHog, p as useTelemetry } from "./users.store-ChwfO1rT.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dm7aC_b3.js";
//#region src/experiments/emptyStateBuilderPrompt/stores/emptyStateBuilderPrompt.store.ts
function isValidWorkflowData(data) {
	return typeof data === "object" && data !== null && "nodes" in data && Array.isArray(data.nodes);
}
var useEmptyStateBuilderPromptStore = defineStore(STORES.EXPERIMENT_EMPTY_STATE_BUILDER_PROMPT, () => {
	const posthogStore = usePostHog();
	const cloudPlanStore = useCloudPlanStore();
	const workflowsStore = useWorkflowsStore();
	const credentialsStore = useCredentialsStore();
	const router = useRouter();
	const telemetry = useTelemetry();
	function removeUnknownCredentials(workflow) {
		if (!workflow?.nodes) return;
		for (const node of workflow.nodes) {
			if (!node.credentials) continue;
			for (const [name, credential] of Object.entries(node.credentials)) {
				if (typeof credential === "string" || credential.id === null) continue;
				if (!credentialsStore.getCredentialById(credential.id)) delete node.credentials[name];
			}
		}
	}
	const pendingPrompt = ref(null);
	const currentVariant = computed(() => posthogStore.getVariant(EMPTY_STATE_EXPERIMENT.name));
	const isVariant = computed(() => currentVariant.value === EMPTY_STATE_EXPERIMENT.variantBuilderPrompt);
	const isFeatureEnabled = computed(() => cloudPlanStore.userIsTrialing && isVariant.value);
	async function createWorkflowWithPrompt(prompt, projectId, parentFolderId) {
		telemetry.track("User submitted empty state builder prompt", { prompt_length: prompt.length });
		pendingPrompt.value = prompt;
		const workflow = await workflowsStore.createNewWorkflow({
			name: DEFAULT_NEW_WORKFLOW_NAME,
			nodes: [],
			connections: {},
			projectId,
			parentFolderId
		});
		await router.push({
			name: VIEWS.WORKFLOW,
			params: { workflowId: workflow.id }
		});
	}
	function consumePendingPrompt() {
		const prompt = pendingPrompt.value;
		pendingPrompt.value = null;
		return prompt;
	}
	async function createWorkflowFromImport(workflowData, projectId, parentFolderId) {
		if (!isValidWorkflowData(workflowData)) throw new Error("Invalid workflow data");
		removeUnknownCredentials(workflowData);
		telemetry.track("User imported workflow from empty state", { node_count: workflowData.nodes?.length ?? 0 });
		const workflow = await workflowsStore.createNewWorkflow({
			name: workflowData.name ?? "My workflow",
			nodes: workflowData.nodes ?? [],
			connections: workflowData.connections ?? {},
			settings: workflowData.settings,
			pinData: workflowData.pinData,
			meta: workflowData.meta,
			projectId,
			parentFolderId
		});
		await router.push({
			name: VIEWS.WORKFLOW,
			params: { workflowId: workflow.id }
		});
	}
	return {
		currentVariant,
		isFeatureEnabled,
		pendingPrompt: computed(() => pendingPrompt.value),
		createWorkflowWithPrompt,
		consumePendingPrompt,
		createWorkflowFromImport
	};
});
//#endregion
export { useEmptyStateBuilderPromptStore as t };
