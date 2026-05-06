import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ut as useRouter } from "./src-BKWLS_Lz.js";
import { Jt as useTelemetry, Zt as usePostHog, at as useCredentialsStore, s as useWorkflowsStore } from "./users.store-CargbksM.js";
import { Uc as EMPTY_STATE_EXPERIMENT, n as DEFAULT_NEW_WORKFLOW_NAME, zr as VIEWS } from "./constants-c-L9DE1I.js";
import { T as defineStore } from "./useRootStore-CCt5xa74.js";
import { In as STORES } from "./settings.store-CN5kyBJf.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-BihV-Yxv.js";
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
