import { C as computed } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, j as useLocalStorage } from "./_MapCache-DZMn6F95.js";
import { Fn as N8nIcon_default } from "./src-DuV1yrAd.js";
import { b as useRouter } from "./truncate-OqsyiABz.js";
import { o as useWorkflowsStore, rt as useNodeTypesStore } from "./useTelemetry-C3cN19b2.js";
import { Ir as NEW_WORKFLOW_ID, oa as VIEWS, ri as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-CiCQTzlI.js";
import { t as useCanvasOperations } from "./useCanvasOperations-BKFIHZ3t.js";
import { t as NodeIcon_default } from "./NodeIcon-gge00gA3.js";
var MAX_RECENT_ITEMS = 5;
var MAX_RECENT_WORKFLOWS_TO_DISPLAY = 3;
var RECENT_WORKFLOWS_STORAGE_KEY = "n8n-recent-workflows";
var RECENT_NODES_STORAGE_KEY = "n8n-recent-nodes";
function useRecentResources() {
	const i18n = useI18n();
	const router = useRouter();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const { setNodeActive } = useCanvasOperations();
	const recentWorkflows = useLocalStorage(RECENT_WORKFLOWS_STORAGE_KEY, []);
	const recentNodes = useLocalStorage(RECENT_NODES_STORAGE_KEY, {});
	function trackResourceOpened(to) {
		if (to.name === VIEWS.WORKFLOW && typeof to.params.name === "string") {
			const workflowId = to.params.name;
			if (workflowId && workflowId !== "new" && workflowId !== "__EMPTY__" && workflowId !== "new") {
				registerWorkflowOpen(workflowId);
				if (typeof to.params.nodeId === "string" && to.params.nodeId) registerNodeOpen(workflowId, to.params.nodeId);
			}
		}
	}
	function registerWorkflowOpen(workflowId) {
		const filtered = recentWorkflows.value.filter((w) => w.id !== workflowId);
		recentWorkflows.value = [{
			id: workflowId,
			openedAt: Date.now()
		}, ...filtered].slice(0, MAX_RECENT_ITEMS);
	}
	function registerNodeOpen(workflowId, nodeId) {
		const filtered = (recentNodes.value[workflowId] ?? []).filter((n) => n.nodeId !== nodeId);
		const updatedNodes = [{
			nodeId,
			openedAt: Date.now()
		}, ...filtered].slice(0, MAX_RECENT_ITEMS);
		recentNodes.value = {
			...recentNodes.value,
			[workflowId]: updatedNodes
		};
	}
	const recentResourceCommands = computed(() => {
		const items = [];
		const currentRoute = router.currentRoute.value;
		const currentWorkflowId = currentRoute.name === VIEWS.WORKFLOW && typeof currentRoute.params.name === "string" ? currentRoute.params.name : null;
		if (currentWorkflowId && recentNodes.value[currentWorkflowId]) {
			const nodesForWorkflow = recentNodes.value[currentWorkflowId];
			for (const recentNode of nodesForWorkflow) {
				const node = workflowsStore.findNodeByPartialId(recentNode.nodeId);
				if (!node) continue;
				const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
				items.push({
					id: `recent-node-${currentWorkflowId}-${recentNode.nodeId}`,
					title: node.name,
					section: i18n.baseText("commandBar.sections.recent"),
					icon: {
						component: NodeIcon_default,
						props: {
							nodeType,
							size: 16
						}
					},
					handler: () => {
						const node$1 = workflowsStore.findNodeByPartialId(recentNode.nodeId);
						if (node$1) setNodeActive(node$1.id, "command_bar");
					}
				});
			}
		}
		if (recentWorkflows.value.length > 0) {
			let workflowsAdded = 0;
			for (const recentWorkflow of recentWorkflows.value) {
				if (workflowsAdded >= MAX_RECENT_WORKFLOWS_TO_DISPLAY) break;
				const workflow = workflowsStore.getWorkflowById(recentWorkflow.id);
				if (!workflow) continue;
				items.push({
					id: `recent-workflow-${recentWorkflow.id}`,
					title: workflow.name || i18n.baseText("commandBar.workflows.unnamed"),
					section: i18n.baseText("commandBar.sections.recent"),
					icon: {
						component: N8nIcon_default,
						props: { icon: "arrow-right" }
					},
					handler: () => {
						const targetRoute = router.resolve({
							name: VIEWS.WORKFLOW,
							params: { name: recentWorkflow.id }
						});
						window.location.href = targetRoute.fullPath;
					}
				});
				workflowsAdded++;
			}
		}
		return items;
	});
	async function initialize() {
		const workflowsToFetch = recentWorkflows.value.slice(0, MAX_RECENT_WORKFLOWS_TO_DISPLAY);
		await Promise.all(workflowsToFetch.map(async (recentWorkflow) => {
			try {
				if (!workflowsStore.getWorkflowById(recentWorkflow.id)) await workflowsStore.fetchWorkflow(recentWorkflow.id);
			} catch {}
		}));
	}
	return {
		commands: recentResourceCommands,
		trackResourceOpened,
		initialize
	};
}
export { useRecentResources as t };
