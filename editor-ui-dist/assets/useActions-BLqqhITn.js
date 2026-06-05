import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { B as transformNodeType, F as removePreviewToken, Lr as CHANGE_ACTION, R as sortNodeCreateElements, Ut as injectWorkflowDocumentStore, b as useNodeTypesStore, yn as PUSH_NODES_OFFSET } from "./workflows.store-aCrKXfPW.js";
import { Fn as NO_OP_NODE_TYPE, G as AI_CATEGORY_LANGUAGE_MODELS, In as OPEN_AI_ASSISTANT_NODE_TYPE, Ln as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, Pt as CHAT_TRIGGER_NODE_TYPE, Rn as OPEN_AI_NODE_TYPE, St as AGENT_NODE_TYPE, Un as QA_CHAIN_NODE_TYPE, Yn as SCHEDULE_TRIGGER_NODE_TYPE, bc as CHAIN_LLM_LANGCHAIN_NODE_TYPE, kt as BASIC_CHAIN_NODE_TYPE, lc as NodeConnectionTypes, mr as WEBHOOK_NODE_TYPE, mt as NODE_CREATOR_OPEN_SOURCES, or as STICKY_NODE_TYPE, rr as SPLIT_IN_BATCHES_NODE_TYPE, xn as MANUAL_TRIGGER_NODE_TYPE, xt as TRIGGER_NODE_CREATOR_VIEW } from "./constants-Brs44Mbc.js";
import { t as useExternalHooks } from "./useExternalHooks-BBBHeJos.js";
import { n as useNodeCreatorStore } from "./canvas.eventBus-Cvr0d_-7.js";
//#region src/features/shared/nodeCreator/composables/useActions.ts
var useActions = () => {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const nodeCreatorStore = useNodeCreatorStore();
	const nodeTypesStore = useNodeTypesStore();
	const i18n = useI18n();
	const singleNodeOpenSources = [
		NODE_CREATOR_OPEN_SOURCES.PLUS_ENDPOINT,
		NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_ACTION,
		NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_DROP
	];
	const actionsCategoryLocales = computed(() => {
		return {
			actions: i18n.baseText("nodeCreator.actionsCategory.actions") ?? "",
			triggers: i18n.baseText("nodeCreator.actionsCategory.triggers") ?? ""
		};
	});
	function getPlaceholderTriggerActions(subcategory) {
		const nodes = [WEBHOOK_NODE_TYPE, SCHEDULE_TRIGGER_NODE_TYPE];
		return nodeCreatorStore.mergedNodes.filter((node) => nodes.some((n) => n === node.name)).map((node) => {
			const transformed = transformNodeType(node, subcategory, "action");
			if (transformed.type === "action") {
				const localeKey = `nodeCreator.actionsPlaceholderNode.${node.name.replace("n8n-nodes-base.", "")}`;
				const overwriteLocale = i18n.baseText(localeKey);
				if (overwriteLocale !== localeKey) transformed.properties.displayName = overwriteLocale;
			}
			return transformed;
		});
	}
	function filterActionsCategory(items, category) {
		return items.filter((item) => item.type === "action" && item.properties.codex.categories.includes(category));
	}
	function injectActionsLabels(items) {
		const extendedActions = sortNodeCreateElements([...items]);
		const labelsSet = /* @__PURE__ */ new Set();
		for (const action of extendedActions) {
			if (action.type !== "action") continue;
			const label = action.properties?.codex?.label;
			labelsSet.add(label);
		}
		if (labelsSet.size <= 1) return extendedActions;
		const firstIndexMap = /* @__PURE__ */ new Map();
		for (let i = 0; i < extendedActions.length; i++) {
			const action = extendedActions[i];
			if (action.type !== "action") continue;
			const label = action.properties?.codex?.label;
			if (!firstIndexMap.has(label)) firstIndexMap.set(label, i);
		}
		let insertedLabels = 0;
		for (const label of labelsSet) {
			const newLabel = {
				uuid: label,
				type: "label",
				key: label,
				subcategory: extendedActions[0].key,
				properties: { key: label }
			};
			const insertIndex = firstIndexMap.get(label);
			if (insertIndex !== void 0) {
				extendedActions.splice(insertIndex + insertedLabels, 0, newLabel);
				insertedLabels++;
			}
		}
		return extendedActions;
	}
	function parseCategoryActions(actions, category, withLabels = true) {
		const filteredActions = filterActionsCategory(actions, category);
		if (withLabels) return injectActionsLabels(filteredActions);
		return filteredActions;
	}
	function getActionData(actionItem) {
		const displayOptions = actionItem.displayOptions;
		const displayConditions = Object.keys(displayOptions?.show ?? {}).reduce((acc, showCondition) => {
			acc[showCondition] = displayOptions?.show?.[showCondition]?.[0];
			return acc;
		}, {});
		return {
			name: actionItem.displayName,
			key: actionItem.name,
			value: {
				...actionItem.values,
				...displayConditions
			}
		};
	}
	function actionDataToNodeTypeSelectedPayload(actionData) {
		const result = {
			type: actionData.key,
			actionName: actionData.name
		};
		if (typeof actionData.value.language === "string") {
			result.parameters = { language: actionData.value.language };
			return result;
		}
		if (typeof actionData.value.resource === "string" || typeof actionData.value.operation === "string") {
			result.parameters = {};
			if (typeof actionData.value.resource === "string") result.parameters.resource = actionData.value.resource;
			if (typeof actionData.value.operation === "string") result.parameters.operation = actionData.value.operation;
		}
		return result;
	}
	function nodeCreateElementToNodeTypeSelectedPayload(actionData) {
		const result = { type: removePreviewToken(actionData.key) };
		if (typeof actionData.resource === "string" || typeof actionData.operation === "string") {
			result.parameters = {};
			if (typeof actionData.resource === "string") result.parameters.resource = actionData.resource;
			if (typeof actionData.operation === "string") result.parameters.operation = actionData.operation;
		}
		return result;
	}
	/**
	* Checks if added nodes contain trigger followed by another node
	* In this case, we should connect the trigger with the following node
	*/
	function shouldConnectWithExistingTrigger(addedNodes) {
		if (addedNodes.length === 2) return useNodeTypesStore().isTriggerNode(addedNodes[0].type);
		return false;
	}
	function shouldPrependManualTrigger(addedNodes) {
		const { selectedView, openSource } = useNodeCreatorStore();
		const hasTrigger = addedNodes.some((node) => useNodeTypesStore().isTriggerNode(node.type));
		const workflowContainsTrigger = workflowDocumentStore.value.workflowTriggerNodes.length > 0;
		const isTriggerPanel = selectedView === TRIGGER_NODE_CREATOR_VIEW;
		const onlyStickyNodes = addedNodes.every((node) => node.type === STICKY_NODE_TYPE);
		return !singleNodeOpenSources.includes(openSource) && !hasTrigger && !workflowContainsTrigger && isTriggerPanel && !onlyStickyNodes;
	}
	function shouldPrependChatTrigger(addedNodes) {
		const COMPATIBLE_CHAT_NODES = [
			QA_CHAIN_NODE_TYPE,
			AGENT_NODE_TYPE,
			BASIC_CHAIN_NODE_TYPE,
			OPEN_AI_ASSISTANT_NODE_TYPE,
			OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE
		];
		if (!addedNodes.some((node) => COMPATIBLE_CHAT_NODES.includes(node.type))) return false;
		return workflowDocumentStore.value.allNodes.filter((x) => x.type !== MANUAL_TRIGGER_NODE_TYPE).length === 0;
	}
	function shouldPrependLLMChain(addedNodes) {
		if (workflowDocumentStore.value.aiNodes.length > 0) return false;
		return addedNodes.some((node) => {
			const nodeType = nodeTypesStore.getNodeType(node.type);
			return Object.keys(nodeType?.codex?.subcategories ?? {}).includes(AI_CATEGORY_LANGUAGE_MODELS);
		});
	}
	function getAddedNodesAndConnections(addedNodes) {
		if (addedNodes.length === 0) return {
			nodes: [],
			connections: []
		};
		const nodes = [];
		const connections = [];
		const nodeToAutoOpen = addedNodes.find((node) => node.type !== MANUAL_TRIGGER_NODE_TYPE);
		if (nodeToAutoOpen) nodeToAutoOpen.openDetail = true;
		if (shouldPrependLLMChain(addedNodes) || shouldPrependChatTrigger(addedNodes)) {
			if (shouldPrependLLMChain(addedNodes)) {
				addedNodes.unshift({
					type: CHAIN_LLM_LANGCHAIN_NODE_TYPE,
					isAutoAdd: true
				});
				connections.push({
					from: {
						nodeIndex: 2,
						type: NodeConnectionTypes.AiLanguageModel
					},
					to: { nodeIndex: 1 }
				});
			}
			addedNodes.unshift({
				type: CHAT_TRIGGER_NODE_TYPE,
				isAutoAdd: true
			});
			connections.push({
				from: { nodeIndex: 0 },
				to: { nodeIndex: 1 }
			});
		} else if (shouldPrependManualTrigger(addedNodes)) {
			addedNodes.unshift({
				type: MANUAL_TRIGGER_NODE_TYPE,
				isAutoAdd: true
			});
			connections.push({
				from: { nodeIndex: 0 },
				to: { nodeIndex: 1 }
			});
		} else if (shouldConnectWithExistingTrigger(addedNodes)) connections.push({
			from: { nodeIndex: 0 },
			to: { nodeIndex: 1 }
		});
		addedNodes.forEach((node, index) => {
			if (node.type === "@n8n/n8n-nodes-langchain.openAi.assistant.message") node.type = OPEN_AI_NODE_TYPE;
			nodes.push(node);
			switch (node.type) {
				case SPLIT_IN_BATCHES_NODE_TYPE: {
					const splitInBatchesIndex = index;
					const noOpIndex = splitInBatchesIndex + 1;
					nodes.push({
						type: NO_OP_NODE_TYPE,
						isAutoAdd: true,
						placeholder: true,
						positionOffset: [0, PUSH_NODES_OFFSET],
						name: i18n.baseText("nodeView.replaceMe")
					});
					connections.push({
						from: {
							nodeIndex: splitInBatchesIndex,
							outputIndex: 1
						},
						to: { nodeIndex: noOpIndex }
					}, {
						from: { nodeIndex: noOpIndex },
						to: { nodeIndex: splitInBatchesIndex }
					});
					break;
				}
			}
		});
		return {
			nodes,
			connections
		};
	}
	function setAddedNodeActionParameters(action, telemetry, rootView = "") {
		const { off } = workflowDocumentStore.value.onNodesChange((event) => {
			if (event.action !== CHANGE_ACTION.ADD) return;
			if (!("node" in event.payload) || event.payload.node.type !== action.key) return;
			workflowDocumentStore.value.setLastNodeParameters(action);
			if (telemetry) trackActionSelected(action, telemetry, rootView);
			off();
		});
		return off;
	}
	function trackActionSelected(action, _telemetry, rootView) {
		const payload = {
			node_type: action.key,
			action: action.name,
			source_mode: rootView.toLowerCase(),
			resource: action.value.resource || ""
		};
		useExternalHooks().run("nodeCreateList.addAction", payload);
	}
	return {
		actionsCategoryLocales,
		actionDataToNodeTypeSelectedPayload,
		nodeCreateElementToNodeTypeSelectedPayload,
		getPlaceholderTriggerActions,
		parseCategoryActions,
		getAddedNodesAndConnections,
		getActionData,
		setAddedNodeActionParameters
	};
};
//#endregion
export { useActions as t };
