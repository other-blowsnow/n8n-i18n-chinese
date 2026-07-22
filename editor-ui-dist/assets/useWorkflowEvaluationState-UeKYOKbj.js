import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { $l as EVALUATION_TRIGGER_NODE_TYPE, Uc as getNodeParameters } from "./constants-CSBjw1Ht.js";
import { _ as useNodeTypesStore, a as injectWorkflowDocumentStore } from "./workflowDocument.store-W274j3PU.js";
import { g as getMetricCategory } from "./evaluation.utils-B0yWo8IZ.js";
//#region src/features/ai/evaluation.ee/composables/useWorkflowEvaluationState.ts
var BUILTIN_METRIC_DEFAULT_NAMES = {
	correctness: "Correctness",
	helpfulness: "Helpfulness",
	stringSimilarity: "String similarity",
	categorization: "Categorization",
	toolsUsed: "Tools Used"
};
function useWorkflowEvaluationState() {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const nodeTypesStore = useNodeTypesStore();
	const evaluationTriggerExists = computed(() => {
		return workflowDocumentStore.value.allNodes.some((node) => node.type === EVALUATION_TRIGGER_NODE_TYPE);
	});
	function evaluationNodeExist(operation) {
		return workflowDocumentStore.value.allNodes.some((node) => {
			if (node.type !== "n8n-nodes-base.evaluation") return false;
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			if (!nodeType) return false;
			return getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType)?.operation === operation;
		});
	}
	return {
		evaluationTriggerExists,
		evaluationSetMetricsNodeExist: computed(() => {
			return evaluationNodeExist("setMetrics");
		}),
		evaluationSetOutputsNodeExist: computed(() => {
			return evaluationNodeExist("setOutputs");
		}),
		metricSourceByKey: computed(() => {
			const map = {};
			for (const node of workflowDocumentStore.value.allNodes) {
				if (node.type !== "n8n-nodes-base.evaluation") continue;
				const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
				if (!nodeType) continue;
				const resolved = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType);
				if (resolved?.operation !== "setMetrics") continue;
				const metricType = typeof resolved.metric === "string" && resolved.metric.length > 0 ? resolved.metric : "customMetrics";
				if (metricType === "customMetrics") {
					const assignments = resolved.metrics?.assignments;
					if (!Array.isArray(assignments)) continue;
					for (const assignment of assignments) {
						const key = assignment?.name;
						if (typeof key !== "string" || key.length === 0) continue;
						if (map[key]) continue;
						map[key] = {
							category: "custom",
							nodeName: node.name
						};
					}
				} else {
					const overriddenName = resolved.options?.metricName;
					const key = typeof overriddenName === "string" && overriddenName.length > 0 ? overriddenName : BUILTIN_METRIC_DEFAULT_NAMES[metricType];
					if (!key || map[key]) continue;
					map[key] = {
						category: getMetricCategory(metricType),
						nodeName: node.name
					};
				}
			}
			return map;
		})
	};
}
//#endregion
export { useWorkflowEvaluationState as t };
