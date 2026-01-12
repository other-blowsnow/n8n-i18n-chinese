import { C as computed } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { M as useLocalStorage, _t as useI18n } from "./_MapCache-rh9OLi2r.js";
import { wn as N8nIcon_default } from "./src-DwV_FzyK.js";
import { y as useRouter } from "./truncate-mlAhUFvR.js";
import { N as useWorkflowsStore, Nt as useNodeTypesStore } from "./builder.store-xIrycSiv.js";
import { Bo as VIEWS } from "./constants-DgUuFMuz.js";
import { t as useCanvasOperations } from "./useCanvasOperations-D-Iw4--M.js";
import { t as NodeIcon_default } from "./NodeIcon-BUQDF1p2.js";
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
			const isNewWorkflow = to.query.new === "true";
			if (workflowId && !isNewWorkflow) {
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
					title: i18n.baseText("generic.openResource", { interpolate: { resource: node.name } }),
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
					title: i18n.baseText("generic.openResource", { interpolate: { resource: workflow.name || i18n.baseText("commandBar.workflows.unnamed") } }),
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
