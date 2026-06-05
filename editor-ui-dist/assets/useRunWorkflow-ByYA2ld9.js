import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { Nt as reactive, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { t as require_get } from "./get-Den8eczo.js";
import { Ki as isEmpty, Mr as CanvasNodeDirtiness, Qt as useNodeHelpers, Ut as injectWorkflowDocumentStore, cn as RemoveConnectionCommand, in as BulkCommand, kt as useWorkflowHelpers, l as displayForm, ln as RemoveNodeCommand, nn as AddConnectionCommand, on as EnableNodeToggleCommand, rn as AddNodeCommand, t as useWorkflowsStore, tn as useHistoryStore } from "./workflows.store-aCrKXfPW.js";
import { t as useToast } from "./useToast-CBSZ9zNh.js";
import { A as IN_PROGRESS_EXECUTION_ID, Eo as createResultOk, Pt as CHAT_TRIGGER_NODE_TYPE, To as createResultError, cs as generateNodesGraph, lc as NodeConnectionTypes, rs as createRunExecutionData } from "./constants-Brs44Mbc.js";
import { T as defineStore, d as request, t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { t as useSettingsStore } from "./settings.store-CrL-o4BC.js";
import { _ as useLocalStorage } from "./core-CMxey_qZ.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-ByD75lsx.js";
import { t as useExternalHooks } from "./useExternalHooks-BBBHeJos.js";
import { r as useWorkflowSaving } from "./builder.store-B1r25GdY.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BoZ4pEPK.js";
import { t as useExecutionsStore } from "./executions.store-CM8KCpgt.js";
import { D as useChat, m as chatEventBus, t as useCanvasOperations } from "./useCanvasOperations-CuY0i9P2.js";
import { t as injectWorkflowState } from "./useWorkflowState-xO_SjcOJ.js";
import { t as retry } from "./retry-BJlqDhuW.js";
import { t as usePushConnectionStore } from "./pushConnection.store-NNkAFnkh.js";
//#region src/features/ndv/runData/schemaPreview.api.ts
var padVersion = (version) => {
	return version.toString().split(".").concat(["0", "0"]).slice(0, 3).join(".");
};
var isNonEmptyJsonSchema = (response) => {
	return !!response && typeof response === "object" && "type" in response && "properties" in response && !isEmpty(response.properties);
};
var getSchemaPreview = async (baseUrl, options) => {
	const { nodeType, version, resource, operation } = options;
	const versionString = padVersion(version);
	const response = await request({
		method: "GET",
		baseURL: baseUrl,
		endpoint: `${[
			"schemas",
			nodeType.replace("@n8n/", ""),
			versionString,
			resource,
			operation
		].filter(Boolean).join("/")}.json`,
		withCredentials: false
	});
	if (!isNonEmptyJsonSchema(response)) throw new Error("Invalid JSON schema");
	return response;
};
//#endregion
//#region src/app/utils/json-schema.ts
function generateJsonSchema(json) {
	return inferType(json);
}
function isPrimitive(type) {
	return [
		"string",
		"number",
		"boolean"
	].includes(type);
}
function inferType(value) {
	if (value === null) return { type: "null" };
	const type = typeof value;
	if (isPrimitive(type)) return { type };
	if (Array.isArray(value)) return inferArrayType(value);
	if (value && type === "object") return inferObjectType(value);
	return { type: "string" };
}
function inferArrayType(arr) {
	return {
		type: "array",
		items: arr.length > 0 ? inferType(arr[0]) : {}
	};
}
function inferObjectType(obj) {
	const properties = {};
	Object.entries(obj).forEach(([key, value]) => {
		properties[key] = inferType(value);
	});
	return {
		type: "object",
		properties
	};
}
//#endregion
//#region src/features/ndv/runData/schemaPreview.store.ts
var useSchemaPreviewStore = defineStore("schemaPreview", () => {
	const schemaPreviews = reactive(/* @__PURE__ */ new Map());
	const rootStore = useRootStore();
	const telemetry = useTelemetry();
	function getSchemaPreviewKey({ nodeType, version, operation, resource }) {
		return `${nodeType}_${version}_${resource?.toString() ?? "all"}_${operation?.toString() ?? "all"}`;
	}
	async function getSchemaPreview$1(options) {
		const key = getSchemaPreviewKey(options);
		const cached = schemaPreviews.get(key);
		if (cached) return cached;
		try {
			const result = createResultOk(await getSchemaPreview(rootStore.baseUrl, options));
			schemaPreviews.set(key, result);
			return result;
		} catch (error) {
			const result = createResultError(error);
			schemaPreviews.set(key, result);
			return result;
		}
	}
	async function trackSchemaPreviewExecution(workflowId, node, pushEvent) {
		const { id, type, typeVersion, parameters: { resource, operation } } = node;
		const result = schemaPreviews.get(getSchemaPreviewKey({
			nodeType: type,
			version: typeVersion,
			resource,
			operation
		}));
		if (!result?.ok) return;
		telemetry.track("User executed node with schema preview", {
			node_id: id,
			node_type: type,
			node_version: typeVersion,
			node_resource: resource,
			node_operation: operation,
			schema_preview: JSON.stringify(result.result),
			output_schema: JSON.stringify(generateJsonSchema(pushEvent.data.data?.main?.[0]?.[0]?.json)),
			workflow_id: workflowId
		});
	}
	return {
		getSchemaPreview: getSchemaPreview$1,
		trackSchemaPreviewExecution
	};
});
//#endregion
//#region src/app/composables/useNodeDirtiness.ts
/**
* Does the command make the given node dirty?
*/
function shouldCommandMarkDirty(command, nodeName, siblingCommands, getIncomingConnections, getOutgoingConnectors) {
	if (command instanceof BulkCommand) return command.commands.some((cmd) => shouldCommandMarkDirty(cmd, nodeName, command.commands, getIncomingConnections, getOutgoingConnectors));
	if (command instanceof AddConnectionCommand) return command.connectionData[1]?.node === nodeName;
	if (command instanceof RemoveConnectionCommand) {
		const [from, to] = command.connectionData;
		if (to.node !== nodeName) return false;
		return siblingCommands.some((sibling) => sibling instanceof RemoveNodeCommand && sibling.node.name === from.node);
	}
	const incomingNodes = Object.values(getIncomingConnections(nodeName)).flat().flat().filter((connection) => connection !== null).map((connection) => connection.node);
	if (command instanceof AddNodeCommand) return incomingNodes.includes(command.node.name);
	if (command instanceof EnableNodeToggleCommand) return incomingNodes.includes(command.nodeName) && (command.newState || Object.keys(getOutgoingConnectors(command.nodeName)).some((type) => type !== NodeConnectionTypes.Main));
	return false;
}
/**
* If given node is part of a loop, returns the set of nodes that forms the loop, otherwise returns undefined.
*/
function findLoop(nodeName, visited, getIncomingConnections) {
	const index = visited.indexOf(nodeName);
	if (index >= 0) return visited.slice(index);
	const newVisited = [...visited, nodeName];
	for (const [type, typeConnections] of Object.entries(getIncomingConnections(nodeName))) {
		if (type !== NodeConnectionTypes.Main) continue;
		for (const connections of typeConnections) for (const { node } of connections ?? []) {
			const loop = findLoop(node, newVisited, getIncomingConnections);
			if (loop) return loop;
		}
	}
}
/**
* Determines the subgraph that is affected by changes made after the last (partial) execution
*/
function useNodeDirtiness() {
	const historyStore = useHistoryStore();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	function getIncomingConnections(nodeName) {
		return workflowDocumentStore.value.incomingConnectionsByNodeName(nodeName);
	}
	function getOutgoingConnections(nodeName) {
		return workflowDocumentStore.value.outgoingConnectionsByNodeName(nodeName);
	}
	function getParentSubNodes(nodeName) {
		return Object.entries(getIncomingConnections(nodeName)).filter(([type]) => type !== NodeConnectionTypes.Main).flatMap(([, typeConnections]) => typeConnections.flat().filter((conn) => conn !== null));
	}
	function getDirtinessByParametersUpdate(nodeName, after) {
		if ((workflowDocumentStore.value.getParametersLastUpdate(nodeName) ?? 0) > after) return CanvasNodeDirtiness.PARAMETERS_UPDATED;
		for (const connection of getParentSubNodes(nodeName)) if (getDirtinessByParametersUpdate(connection.node, after) !== void 0) return CanvasNodeDirtiness.UPSTREAM_DIRTY;
	}
	function getDirtinessByConnectionsUpdate(nodeName, after) {
		for (let i = historyStore.undoStack.length - 1; i >= 0; i--) {
			const command = historyStore.undoStack[i];
			if (command.getTimestamp() < after) break;
			if (shouldCommandMarkDirty(command, nodeName, [], getIncomingConnections, getOutgoingConnections)) return CanvasNodeDirtiness.INCOMING_CONNECTIONS_UPDATED;
		}
		for (const connection of getParentSubNodes(nodeName)) if (getDirtinessByConnectionsUpdate(connection.node, after) !== void 0) return CanvasNodeDirtiness.UPSTREAM_DIRTY;
	}
	/**
	* Depth of node is defined as the minimum distance (number of connections) from the trigger node
	*/
	const depthByName = computed(() => {
		const depth = {};
		function setDepthRecursively(nodeName, current, visited) {
			if (visited.has(nodeName)) return;
			const myVisited = new Set(visited);
			myVisited.add(nodeName);
			for (const [type, typeConnections] of Object.entries(getOutgoingConnections(nodeName))) {
				if (type !== NodeConnectionTypes.Main) continue;
				for (const connections of typeConnections) for (const { node } of connections ?? []) {
					if (!depth[node] || depth[node] > current) depth[node] = current;
					setDepthRecursively(node, current + 1, myVisited);
				}
			}
		}
		for (const startNode of workflowDocumentStore.value.allNodes) {
			if (Object.keys(getIncomingConnections(startNode.name)).length > 0) continue;
			depth[startNode.name] = 0;
			setDepthRecursively(startNode.name, 1, /* @__PURE__ */ new Set());
		}
		return depth;
	});
	return { dirtinessByName: computed(() => {
		const dirtiness = {};
		const runDataByNode = workflowsStore.getWorkflowRunData ?? {};
		function setDirtiness(nodeName, value) {
			dirtiness[nodeName] = dirtiness[nodeName] ?? value;
			const loop = findLoop(nodeName, [], getIncomingConnections);
			if (!loop) return;
			const loopEntryNodeName = [...loop].sort((a, b) => (depthByName.value[a] ?? Number.MAX_SAFE_INTEGER) - (depthByName.value[b] ?? Number.MAX_SAFE_INTEGER))?.[0];
			if (loopEntryNodeName && depthByName.value[loopEntryNodeName]) dirtiness[loopEntryNodeName] = dirtiness[loopEntryNodeName] ?? CanvasNodeDirtiness.UPSTREAM_DIRTY;
		}
		for (const [nodeName, runData] of Object.entries(runDataByNode)) {
			const runAt = runData[0]?.startTime ?? 0;
			if (!runAt) continue;
			const parameterUpdate = getDirtinessByParametersUpdate(nodeName, runAt);
			if (parameterUpdate) {
				setDirtiness(nodeName, parameterUpdate);
				continue;
			}
			const connectionUpdate = getDirtinessByConnectionsUpdate(nodeName, runAt);
			if (connectionUpdate) {
				setDirtiness(nodeName, connectionUpdate);
				continue;
			}
			if (Object.values(getIncomingConnections(nodeName)).flat().flat().filter((connection) => connection !== null).some((connection) => {
				return (workflowDocumentStore.value.getPinnedDataLastUpdate(connection.node) ?? 0) > runAt;
			})) {
				setDirtiness(nodeName, CanvasNodeDirtiness.PINNED_DATA_UPDATED);
				continue;
			}
			if ((workflowDocumentStore.value.getPinnedDataLastRemovedAt(nodeName) ?? 0) > runAt) {
				setDirtiness(nodeName, CanvasNodeDirtiness.PINNED_DATA_UPDATED);
				continue;
			}
		}
		return dirtiness;
	}) };
}
//#endregion
//#region ../@n8n/stores/src/useAgentRequestStore.ts
var LOCAL_STORAGE_AGENT_REQUESTS = "N8N_AGENT_REQUESTS";
var useAgentRequestStore = defineStore("agentRequest", () => {
	const agentRequests = useLocalStorage(LOCAL_STORAGE_AGENT_REQUESTS, {});
	const ensureWorkflowAndNodeExist = (workflowId, nodeId) => {
		if (!agentRequests.value[workflowId]) agentRequests.value[workflowId] = {};
		if (!agentRequests.value[workflowId][nodeId]) agentRequests.value[workflowId][nodeId] = { query: {} };
	};
	const getAgentRequests = (workflowId, nodeId) => {
		return agentRequests.value[workflowId]?.[nodeId]?.query || {};
	};
	const getQueryValue = (workflowId, nodeId, nodeName, paramName) => {
		const query = agentRequests.value[workflowId]?.[nodeId]?.query?.[nodeName];
		if (typeof query === "string" || !paramName) return query;
		return query?.[paramName];
	};
	const setAgentRequestForNode = (workflowId, nodeId, request) => {
		ensureWorkflowAndNodeExist(workflowId, nodeId);
		agentRequests.value[workflowId][nodeId] = {
			...request,
			query: { ...request.query }
		};
	};
	const clearAgentRequests = (workflowId, nodeId) => {
		if (agentRequests.value[workflowId]) agentRequests.value[workflowId][nodeId] = { query: {} };
	};
	const clearAllAgentRequests = (workflowId) => {
		if (workflowId) agentRequests.value[workflowId] = {};
		else agentRequests.value = {};
	};
	const getAgentRequest = (workflowId, nodeId) => {
		if (agentRequests.value[workflowId]) return agentRequests.value[workflowId]?.[nodeId];
	};
	return {
		agentRequests,
		getAgentRequests,
		getQueryValue,
		setAgentRequestForNode,
		clearAgentRequests,
		clearAllAgentRequests,
		getAgentRequest
	};
});
//#endregion
//#region src/app/composables/useRunWorkflow.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
function useRunWorkflow(useRunWorkflowOpts) {
	const workflowHelpers = useWorkflowHelpers();
	const i18n = useI18n();
	const toast = useToast();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	const agentRequestStore = useAgentRequestStore();
	const rootStore = useRootStore();
	const pushConnectionStore = usePushConnectionStore();
	const workflowsStore = useWorkflowsStore();
	const workflowState = useRunWorkflowOpts.workflowState ?? injectWorkflowState();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const nodeHelpers = useNodeHelpers();
	const workflowSaving = useWorkflowSaving({ router: useRunWorkflowOpts.router });
	const executionsStore = useExecutionsStore();
	const { dirtinessByName } = useNodeDirtiness();
	const { startChat } = useCanvasOperations();
	const chatStore = useChat();
	function sortNodesByYPosition(nodes) {
		return [...nodes].sort((a, b) => {
			const nodeA = workflowDocumentStore.value.getNodeByName(a)?.position ?? [0, 0];
			const nodeB = workflowDocumentStore.value.getNodeByName(b)?.position ?? [0, 0];
			const nodeAYPosition = nodeA[1];
			const nodeBYPosition = nodeB[1];
			if (nodeAYPosition === nodeBYPosition) return 0;
			return nodeAYPosition > nodeBYPosition ? 1 : -1;
		});
	}
	async function runWorkflowApi(runData) {
		if (!pushConnectionStore.isConnected) throw new Error(i18n.baseText("workflowRun.noActiveConnectionToTheServer"));
		workflowState.setActiveExecutionId(null);
		let response;
		try {
			response = await workflowsStore.runWorkflow(runData);
		} catch (error) {
			workflowState.setActiveExecutionId(void 0);
			throw error;
		}
		const workflowExecutionIdIsNew = workflowsStore.previousExecutionId !== response.executionId;
		const workflowExecutionIdIsPending = workflowsStore.activeExecutionId === null;
		if (response.executionId && workflowExecutionIdIsNew && workflowExecutionIdIsPending) workflowState.setActiveExecutionId(response.executionId);
		if (response.waitingForWebhook === true) workflowsStore.setExecutionWaitingForWebhook(true);
		return response;
	}
	async function runWorkflow(options) {
		if (workflowsStore.activeExecutionId) return;
		toast.clearAllStickyNotifications();
		try {
			let directParentNodes = [];
			if (options.destinationNode !== void 0) directParentNodes = workflowDocumentStore.value.getParentNodes(options.destinationNode.nodeName, NodeConnectionTypes.Main, -1);
			const runData = workflowsStore.getWorkflowRunData;
			if (!workflowsStore.isWorkflowSaved[workflowsStore.workflowId] || uiStore.stateIsDirty && settingsStore.isAutosaveEnabled) await workflowSaving.saveCurrentWorkflow();
			const workflowData = workflowDocumentStore.value.serialize();
			if (rootStore.binaryDataMode === "default" && workflowData.settings?.binaryMode === "combined") {
				toast.showMessage({
					title: i18n.baseText("workflowRun.showError.unsupportedExecutionLogic.title"),
					message: i18n.baseText("workflowRun.showError.unsupportedExecutionLogic.description"),
					type: "error"
				});
				return;
			}
			const { startNodeNames } = consolidateRunDataAndStartNodes(directParentNodes, runData, workflowData.pinData, workflowDocumentStore.value.getWorkflowObjectAccessorSnapshot());
			const destinationNodeType = options.destinationNode ? workflowDocumentStore.value.getNodeByName(options.destinationNode.nodeName)?.type ?? "" : "";
			let executedNode;
			let triggerToStartFrom;
			if (startNodeNames.length === 0 && directParentNodes.length === 0 && "destinationNode" in options && options.destinationNode !== void 0) {
				executedNode = options.destinationNode.nodeName;
				startNodeNames.push(options.destinationNode.nodeName);
			} else if (options.triggerNode && options.nodeData && !options.rerunTriggerNode) startNodeNames.push(...workflowDocumentStore.value.getChildNodes(options.triggerNode, NodeConnectionTypes.Main, 1));
			else if (options.destinationNode) executedNode = options.destinationNode.nodeName;
			if (options.triggerNode) triggerToStartFrom = {
				name: options.triggerNode,
				data: options.nodeData
			};
			if (options.destinationNode && (workflowDocumentStore.value.checkIfNodeHasChatParent(options.destinationNode.nodeName) || workflowDocumentStore.value.checkIfToolNodeHasChatParent(options.destinationNode.nodeName) || destinationNodeType === "@n8n/n8n-nodes-langchain.chatTrigger") && options.source !== "RunData.ManualChatMessage" && options.source !== "RunData.ManualChatTrigger") {
				const startNode = workflowDocumentStore.value.getStartNode(options.destinationNode.nodeName);
				if (startNode && startNode.type === "@n8n/n8n-nodes-langchain.chatTrigger") {
					const chatHasInputData = nodeHelpers.getNodeInputData(startNode, 0, 0, "input")?.length > 0;
					const chatHasPinData = !!workflowData.pinData?.[startNode.name];
					if (!chatHasInputData && !chatHasPinData) {
						workflowsStore.setChatPartialExecutionDestinationNode(options.destinationNode.nodeName);
						startChat();
						return;
					}
				}
				startChat();
			}
			const triggers = workflowData.nodes.filter((node) => !node.disabled && node.type.toLowerCase().includes("trigger"));
			const chatTriggerNode = triggers.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE);
			const chatTriggerNodeOptions = chatTriggerNode?.parameters?.options;
			if (options.triggerNode === chatTriggerNode?.name && chatTriggerNodeOptions?.responseMode === "responseNodes") {
				if (!workflowData.nodes.filter((node) => !node.disabled && (node.type === "@n8n/n8n-nodes-langchain.chat" || node.type === "@n8n/n8n-nodes-langchain.chatTool" || node.type === "@n8n/n8n-nodes-langchain.chatHitlTool" || node.type === "n8n-nodes-base.respondToWebhook"))?.length) toast.showMessage({
					title: i18n.baseText("workflowRun.showWarning.noChatResponseNodes.title"),
					message: i18n.baseText("workflowRun.showWarning.noChatResponseNodes.description"),
					type: "warning"
				});
			}
			if (!options.destinationNode && options.source !== "RunData.ManualChatMessage" && chatTriggerNode) {
				if (triggers.filter((node) => node.type !== "@n8n/n8n-nodes-langchain.chatTrigger").length) chatTriggerNode.disabled = true;
			}
			const isPartialExecution = options.destinationNode !== void 0;
			const startNodes = sortNodesByYPosition(startNodeNames).map((name) => {
				let sourceData = (0, import_get.default)(runData, [
					name,
					0,
					"source",
					0
				], null);
				if (sourceData === null) {
					const parentNodes = workflowDocumentStore.value.getParentNodes(name, NodeConnectionTypes.Main, 1);
					sourceData = (0, import_get.default)(workflowHelpers.executeData(workflowDocumentStore.value.connectionsBySourceNode, parentNodes, name, NodeConnectionTypes.Main, 0), [
						"source",
						NodeConnectionTypes.Main,
						0
					], null);
				}
				return {
					name,
					sourceData
				};
			}).filter((node) => {
				if (options.destinationNode && workflowDocumentStore.value.checkIfNodeHasChatParent(options.destinationNode.nodeName)) return node.name !== options.destinationNode.nodeName;
				return true;
			});
			const startRunData = {
				workflowId: workflowData.id,
				runData: isPartialExecution ? runData ?? void 0 : void 0,
				startNodes,
				triggerToStartFrom,
				chatSessionId: options.sessionId
			};
			if ("destinationNode" in options) {
				startRunData.destinationNode = options.destinationNode;
				const nodeId = workflowDocumentStore.value.getNodeByName(options.destinationNode?.nodeName ?? "")?.id;
				if (workflowDocumentStore.value.workflowId && nodeId) {
					const agentRequest = agentRequestStore.getAgentRequest(workflowDocumentStore.value.workflowId, nodeId);
					if (agentRequest) startRunData.agentRequest = {
						query: agentRequest.query ?? {},
						tool: { name: agentRequest.toolName ?? "" }
					};
				}
			}
			if (startRunData.runData) {
				const nodeNames = Object.entries(dirtinessByName.value).flatMap(([nodeName, dirtiness]) => dirtiness ? [nodeName] : []);
				startRunData.dirtyNodeNames = nodeNames.length > 0 ? nodeNames : void 0;
			}
			const executionData = {
				id: IN_PROGRESS_EXECUTION_ID,
				finished: false,
				mode: "manual",
				status: "running",
				createdAt: /* @__PURE__ */ new Date(),
				startedAt: /* @__PURE__ */ new Date(),
				stoppedAt: void 0,
				workflowId: workflowDocumentStore.value.workflowId,
				executedNode,
				triggerNode: triggerToStartFrom?.name,
				data: createRunExecutionData({ resultData: {
					runData: startRunData.runData ?? {},
					pinData: workflowData.pinData
				} }),
				workflowData: {
					id: workflowsStore.workflowId,
					name: workflowData.name,
					active: workflowData.active,
					createdAt: 0,
					updatedAt: 0,
					...workflowData
				}
			};
			workflowState.setWorkflowExecutionData(executionData);
			nodeHelpers.updateNodesExecutionIssues();
			useDocumentTitle().setDocumentTitle(workflowDocumentStore.value.name, "EXECUTING");
			const runWorkflowApiResponse = await runWorkflowApi(startRunData);
			if (!chatStore?.ws && chatTriggerNodeOptions?.responseMode === "responseNodes" && options.source !== "RunData.ManualChatMessage" && options.source !== "RunData.ManualChatTrigger" && runWorkflowApiResponse.executionId) chatEventBus.emit("setupWebsocket", runWorkflowApiResponse.executionId);
			const pinData = workflowData.pinData ?? {};
			const getTestUrl = (node) => {
				const path = node.parameters.path || node.parameters.options?.path || node.webhookId;
				return `${rootStore.formTestUrl}/${path}`;
			};
			try {
				await displayForm({
					nodes: workflowData.nodes,
					runData: workflowsStore.getWorkflowExecution?.data?.resultData?.runData,
					destinationNode: options.destinationNode?.nodeName,
					triggerNode: options.triggerNode,
					pinData,
					directParentNodes,
					source: options.source,
					getTestUrl
				});
			} catch (error) {}
			await externalHooks.run("workflowRun.runWorkflow", {
				nodeName: options.destinationNode?.nodeName,
				source: options.source
			});
			return runWorkflowApiResponse;
		} catch (error) {
			console.error(error);
			workflowState.setWorkflowExecutionData(null);
			useDocumentTitle().setDocumentTitle(workflowDocumentStore.value.name, "ERROR");
			toast.showError(error, i18n.baseText("workflowRun.showError.title"));
			return;
		}
	}
	function consolidateRunDataAndStartNodes(directParentNodes, runData, pinData, workflow) {
		const startNodeNames = /* @__PURE__ */ new Set();
		let newRunData;
		if (runData !== null && Object.keys(runData).length !== 0) {
			newRunData = {};
			for (const directParentNode of directParentNodes) {
				const parentNodes = workflow.getParentNodes(directParentNode, NodeConnectionTypes.Main);
				if (workflow.getNode(directParentNode)?.disabled) continue;
				parentNodes.push(directParentNode);
				for (const parentNode of parentNodes) {
					if (!runData[parentNode]?.length && !pinData?.[parentNode]?.length || runData[parentNode]?.[0]?.error !== void 0) {
						startNodeNames.add(parentNode);
						break;
					}
					if (runData[parentNode] && !runData[parentNode]?.[0]?.error) newRunData[parentNode] = runData[parentNode]?.slice(0, 1);
				}
			}
			if (isEmpty(newRunData)) newRunData = void 0;
		}
		return {
			runData: newRunData,
			startNodeNames: [...startNodeNames]
		};
	}
	async function stopCurrentExecution() {
		const executionId = workflowsStore.activeExecutionId;
		let stopData;
		if (!executionId) return;
		try {
			stopData = await executionsStore.stopCurrentExecution(executionId);
		} catch (error) {
			const execution = await workflowsStore.getExecution(executionId);
			if (execution === void 0) toast.showMessage({
				title: i18n.baseText("nodeView.showMessage.stopExecutionCatch.unsaved.title"),
				message: i18n.baseText("nodeView.showMessage.stopExecutionCatch.unsaved.message"),
				type: "success"
			});
			else if (execution?.finished) {
				const executedData = {
					id: execution.id,
					data: execution.data,
					workflowData: workflowDocumentStore.value.getSnapshot(),
					finished: execution.finished,
					mode: execution.mode,
					startedAt: execution.startedAt,
					stoppedAt: execution.stoppedAt
				};
				workflowState.setActiveExecutionId(void 0);
				workflowState.setWorkflowExecutionData(executedData);
				toast.showMessage({
					title: i18n.baseText("nodeView.showMessage.stopExecutionCatch.title"),
					message: i18n.baseText("nodeView.showMessage.stopExecutionCatch.message"),
					type: "success"
				});
			} else toast.showError(error, i18n.baseText("nodeView.showError.stopExecution.title"));
		} finally {
			if (!await retry(async () => {
				const execution = await workflowsStore.getExecution(executionId);
				if (!["running", "waiting"].includes(execution?.status)) {
					workflowState.markExecutionAsStopped(stopData);
					return true;
				}
				return false;
			}, 250, 20)) workflowState.markExecutionAsStopped(stopData);
		}
	}
	async function stopWaitingForWebhook() {
		try {
			await workflowsStore.removeTestWebhook(workflowsStore.workflowId);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.stopWaitingForWebhook.title"));
			return;
		}
	}
	async function runEntireWorkflow(source, triggerNode) {
		const workflowData = workflowDocumentStore.value.serialize();
		const telemetryPayload = {
			workflow_id: workflowDocumentStore.value.workflowId,
			node_graph_string: JSON.stringify(generateNodesGraph(workflowData, workflowHelpers.getNodeTypes(), { isCloudDeployment: settingsStore.isCloudDeployment }).nodeGraph),
			button_type: source
		};
		telemetry.track("User clicked execute workflow button", telemetryPayload);
		externalHooks.run("nodeView.onRunWorkflow", telemetryPayload);
		let resolvedTriggerNode = triggerNode ?? workflowsStore.selectedTriggerNodeName;
		if (!resolvedTriggerNode) {
			const triggers = workflowDocumentStore.value.allNodes.filter((node) => !node.disabled && node.type.toLowerCase().includes("trigger"));
			if (triggers.length === 1) resolvedTriggerNode = triggers[0].name;
		}
		runWorkflow({ triggerNode: resolvedTriggerNode });
	}
	return {
		consolidateRunDataAndStartNodes,
		runEntireWorkflow,
		runWorkflow,
		runWorkflowApi,
		stopCurrentExecution,
		stopWaitingForWebhook,
		sortNodesByYPosition
	};
}
//#endregion
export { useSchemaPreviewStore as i, useAgentRequestStore as n, useNodeDirtiness as r, useRunWorkflow as t };
