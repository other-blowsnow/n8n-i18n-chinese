import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { _t as useRouter } from "./src-Bnic0IZ0.js";
import { Hr as usePostHog, at as useCredentialsStore, en as useTelemetry, hr as useCloudPlanStore, s as useWorkflowsStore, sl as STORES } from "./users.store-CzbeKDa-.js";
import { Xc as EMPTY_STATE_EXPERIMENT, ms as VIEWS, n as DEFAULT_NEW_WORKFLOW_NAME } from "./constants-CvheVn3c.js";
import { j as defineStore } from "./_baseOrderBy-B6NURhS_.js";
function isValidWorkflowData(data) {
	return typeof data === "object" && data !== null && "nodes" in data && Array.isArray(data.nodes);
}
const useEmptyStateBuilderPromptStore = defineStore(STORES.EXPERIMENT_EMPTY_STATE_BUILDER_PROMPT, () => {
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
			params: { name: workflow.id }
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
			params: { name: workflow.id }
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
export { useEmptyStateBuilderPromptStore as t };
