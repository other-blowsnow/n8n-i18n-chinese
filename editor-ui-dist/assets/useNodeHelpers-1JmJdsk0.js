import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-D8xRy2J0.js";
import { Dt as createEventBus } from "./src-BwN8TeVO.js";
import { t as useLoadingService } from "./useLoadingService-1p4Vm4Ck.js";
import { $s as nodeIssuesToString, Is as getNodeParameters, Ls as getNodeParametersIssues, Ms as displayParameterPath, Ns as getConnectionTypes, Ps as getNodeInputs, Xs as mergeIssues, Ys as makeNodeName, ju as EnterpriseEditionFeature, pc as NodeConnectionTypes, rl as MANUAL_TRIGGER_NODE_TYPES } from "./constants-BiYlbN9Z.js";
import { Kn as hasProxyAuth, M as useNodeTypesStore, Vn as getNodeSubtitle, _ as injectWorkflowExecutionStateStore, bi as isString, t as useWorkflowsStore, vt as useCredentialsStore, w as assignNodeId, x as injectWorkflowDocumentStore } from "./workflows.store-Cb_U1DcB.js";
import { T as defineStore } from "./useRootStore-DbgDMM5M.js";
import { Rn as STORES, t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { n as hasPermission, p as useTelemetry } from "./users.store-CUZkGc51.js";
import { k as isObject } from "./workflowsList.store-CHLmHbKZ.js";
import { t as usePrivateCredentials } from "./usePrivateCredentials-BSSk8lkV.js";
//#region src/app/stores/canvas.store.ts
var useCanvasStore = defineStore("canvas", () => {
	const loadingService = useLoadingService();
	const newNodeInsertPosition = ref(null);
	const hasRangeSelection = ref(false);
	function setHasRangeSelection(value) {
		hasRangeSelection.value = value;
	}
	return {
		newNodeInsertPosition,
		isLoading: loadingService.isLoading,
		hasRangeSelection: computed(() => hasRangeSelection.value),
		startLoading: loadingService.startLoading,
		setLoadingText: loadingService.setLoadingText,
		stopLoading: loadingService.stopLoading,
		setHasRangeSelection
	};
});
//#endregion
//#region src/app/models/history.ts
var COMMANDS = /* @__PURE__ */ function(COMMANDS) {
	COMMANDS["MOVE_NODE"] = "moveNode";
	COMMANDS["ADD_NODE"] = "addNode";
	COMMANDS["REMOVE_NODE"] = "removeNode";
	COMMANDS["ADD_CONNECTION"] = "addConnection";
	COMMANDS["REMOVE_CONNECTION"] = "removeConnection";
	COMMANDS["ENABLE_NODE_TOGGLE"] = "enableNodeToggle";
	COMMANDS["RENAME_NODE"] = "renameNode";
	COMMANDS["REPLACE_NODE_PARAMETERS"] = "replaceNodeParameters";
	return COMMANDS;
}({});
var CANVAS_ACTION_TIMEOUT = 10;
var historyBus = createEventBus();
var Undoable = class {};
var Command = class extends Undoable {
	name;
	timestamp;
	constructor(name, timestamp) {
		super();
		this.name = name;
		this.timestamp = timestamp;
	}
	getTimestamp() {
		return this.timestamp;
	}
};
var BulkCommand = class extends Undoable {
	commands;
	constructor(commands) {
		super();
		this.commands = commands;
	}
	getTimestamp() {
		return Math.max(0, ...this.commands.map((command) => command.timestamp));
	}
};
var MoveNodeCommand = class MoveNodeCommand extends Command {
	nodeName;
	oldPosition;
	newPosition;
	constructor(nodeName, oldPosition, newPosition, timestamp) {
		super(COMMANDS.MOVE_NODE, timestamp);
		this.nodeName = nodeName;
		this.newPosition = newPosition;
		this.oldPosition = oldPosition;
	}
	getReverseCommand(timestamp) {
		return new MoveNodeCommand(this.nodeName, this.newPosition, this.oldPosition, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof MoveNodeCommand && anotherCommand.nodeName === this.nodeName && anotherCommand.oldPosition[0] === this.oldPosition[0] && anotherCommand.oldPosition[1] === this.oldPosition[1] && anotherCommand.newPosition[0] === this.newPosition[0] && anotherCommand.newPosition[1] === this.newPosition[1];
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("nodeMove", {
				nodeName: this.nodeName,
				position: this.oldPosition
			});
			resolve();
		});
	}
};
var AddNodeCommand = class AddNodeCommand extends Command {
	node;
	constructor(node, timestamp) {
		super(COMMANDS.ADD_NODE, timestamp);
		this.node = node;
	}
	getReverseCommand(timestamp) {
		return new RemoveNodeCommand(this.node, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof AddNodeCommand && anotherCommand.node.name === this.node.name;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("revertAddNode", { node: this.node });
			resolve();
		});
	}
};
var RemoveNodeCommand = class extends Command {
	node;
	constructor(node, timestamp) {
		super(COMMANDS.REMOVE_NODE, timestamp);
		this.node = node;
	}
	getReverseCommand(timestamp) {
		return new AddNodeCommand(this.node, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof AddNodeCommand && anotherCommand.node.name === this.node.name;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("revertRemoveNode", { node: this.node });
			resolve();
		});
	}
};
var AddConnectionCommand = class AddConnectionCommand extends Command {
	connectionData;
	constructor(connectionData, timestamp) {
		super(COMMANDS.ADD_CONNECTION, timestamp);
		this.connectionData = connectionData;
	}
	getReverseCommand(timestamp) {
		return new RemoveConnectionCommand(this.connectionData, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof AddConnectionCommand && anotherCommand.connectionData[0].node === this.connectionData[0].node && anotherCommand.connectionData[1].node === this.connectionData[1].node && anotherCommand.connectionData[0].index === this.connectionData[0].index && anotherCommand.connectionData[1].index === this.connectionData[1].index;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("revertAddConnection", { connection: this.connectionData });
			resolve();
		});
	}
};
var RemoveConnectionCommand = class RemoveConnectionCommand extends Command {
	connectionData;
	constructor(connectionData, timestamp) {
		super(COMMANDS.REMOVE_CONNECTION, timestamp);
		this.connectionData = connectionData;
	}
	getReverseCommand(timestamp) {
		return new AddConnectionCommand(this.connectionData, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof RemoveConnectionCommand && anotherCommand.connectionData[0].node === this.connectionData[0].node && anotherCommand.connectionData[1].node === this.connectionData[1].node && anotherCommand.connectionData[0].index === this.connectionData[0].index && anotherCommand.connectionData[1].index === this.connectionData[1].index;
	}
	async revert() {
		return await new Promise((resolve) => {
			setTimeout(() => {
				historyBus.emit("revertRemoveConnection", { connection: this.connectionData });
				resolve();
			}, CANVAS_ACTION_TIMEOUT);
		});
	}
};
var EnableNodeToggleCommand = class EnableNodeToggleCommand extends Command {
	nodeName;
	oldState;
	newState;
	constructor(nodeName, oldState, newState, timestamp) {
		super(COMMANDS.ENABLE_NODE_TOGGLE, timestamp);
		this.nodeName = nodeName;
		this.newState = newState;
		this.oldState = oldState;
	}
	getReverseCommand(timestamp) {
		return new EnableNodeToggleCommand(this.nodeName, this.newState, this.oldState, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof EnableNodeToggleCommand && anotherCommand.nodeName === this.nodeName;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("enableNodeToggle", {
				nodeName: this.nodeName,
				isDisabled: this.oldState
			});
			resolve();
		});
	}
};
var RenameNodeCommand = class RenameNodeCommand extends Command {
	currentName;
	newName;
	constructor(currentName, newName, timestamp) {
		super(COMMANDS.RENAME_NODE, timestamp);
		this.currentName = currentName;
		this.newName = newName;
	}
	getReverseCommand(timestamp) {
		return new RenameNodeCommand(this.newName, this.currentName, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof RenameNodeCommand && anotherCommand.currentName === this.currentName && anotherCommand.newName === this.newName;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("revertRenameNode", {
				currentName: this.currentName,
				newName: this.newName
			});
			resolve();
		});
	}
};
var ReplaceNodeParametersCommand = class ReplaceNodeParametersCommand extends Command {
	constructor(nodeId, currentParameters, newParameters, timestamp) {
		super(COMMANDS.REPLACE_NODE_PARAMETERS, timestamp);
		this.nodeId = nodeId;
		this.currentParameters = currentParameters;
		this.newParameters = newParameters;
	}
	getReverseCommand(timestamp) {
		return new ReplaceNodeParametersCommand(this.nodeId, this.newParameters, this.currentParameters, timestamp);
	}
	isEqualTo(anotherCommand) {
		return anotherCommand instanceof ReplaceNodeParametersCommand && anotherCommand.nodeId === this.nodeId && anotherCommand.currentParameters === this.currentParameters && anotherCommand.newParameters === this.newParameters;
	}
	async revert() {
		return await new Promise((resolve) => {
			historyBus.emit("revertReplaceNodeParameters", {
				nodeId: this.nodeId,
				currentProperties: this.currentParameters,
				newProperties: this.newParameters
			});
			resolve();
		});
	}
};
//#endregion
//#region src/app/stores/history.store.ts
var STACK_LIMIT = 100;
var useHistoryStore = defineStore(STORES.HISTORY, {
	state: () => ({
		undoStack: [],
		redoStack: [],
		currentBulkAction: null,
		bulkInProgress: false
	}),
	actions: {
		popUndoableToUndo() {
			if (this.undoStack.length > 0) return this.undoStack.pop();
		},
		pushCommandToUndo(undoable, clearRedo = true) {
			if (!this.bulkInProgress) {
				if (this.currentBulkAction) {
					if (!(this.currentBulkAction.commands.find((c) => c.isEqualTo(undoable)) !== void 0)) this.currentBulkAction.commands.push(undoable);
				} else this.undoStack.push(undoable);
				this.checkUndoStackLimit();
				if (clearRedo) this.clearRedoStack();
			}
		},
		pushBulkCommandToUndo(undoable, clearRedo = true) {
			this.undoStack.push(undoable);
			this.checkUndoStackLimit();
			if (clearRedo) this.clearRedoStack();
		},
		checkUndoStackLimit() {
			if (this.undoStack.length > STACK_LIMIT) this.undoStack.shift();
		},
		checkRedoStackLimit() {
			if (this.redoStack.length > STACK_LIMIT) this.redoStack.shift();
		},
		clearUndoStack() {
			this.undoStack = [];
		},
		clearRedoStack() {
			this.redoStack = [];
		},
		reset() {
			this.clearRedoStack();
			this.clearUndoStack();
		},
		popUndoableToRedo() {
			if (this.redoStack.length > 0) return this.redoStack.pop();
		},
		pushUndoableToRedo(undoable) {
			this.redoStack.push(undoable);
			this.checkRedoStackLimit();
		},
		startRecordingUndo() {
			this.currentBulkAction = new BulkCommand([]);
		},
		stopRecordingUndo() {
			if (this.currentBulkAction && this.currentBulkAction.commands.length > 0) {
				this.undoStack.push(this.currentBulkAction);
				this.checkUndoStackLimit();
			}
			this.currentBulkAction = null;
		}
	}
});
//#endregion
//#region src/app/composables/useNodeHelpers.ts
function useNodeHelpers() {
	const credentialsStore = useCredentialsStore();
	const historyStore = useHistoryStore();
	const nodeTypesStore = useNodeTypesStore();
	const workflowsStore = useWorkflowsStore();
	const settingsStore = useSettingsStore();
	const i18n = useI18n();
	const canvasStore = useCanvasStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const { isEnabled: isPrivateCredentialsEnabled } = usePrivateCredentials();
	const isInsertingNodes = ref(false);
	const credentialsUpdated = ref(false);
	const isProductionExecutionPreview = ref(false);
	const pullConnActiveNodeName = ref(null);
	function isCustomApiCallSelected(nodeValues) {
		const { parameters } = nodeValues;
		if (!isObject(parameters)) return false;
		if ("resource" in parameters || "operation" in parameters) {
			const { resource, operation } = parameters;
			return isString(resource) && resource.includes("__CUSTOM_API_CALL__") || isString(operation) && operation.includes("__CUSTOM_API_CALL__");
		}
		return false;
	}
	/**
	* Determines whether a given node is considered executable in the workflow editor.
	*
	* A node is considered executable if:
	* - It structurally qualifies for execution (e.g. is a trigger, tool, or has a 'Main' input),
	*   AND
	* - It is either explicitly marked as `executable`, OR uses foreign credentials
	*   (credentials the current user cannot access, allowed under Workflow Sharing).
	*
	* @param node The node to check
	* @param executable Whether the node is in a state that allows execution (e.g. not readonly)
	* @param foreignCredentials List of credential IDs that the current user cannot access
	*/
	function isNodeExecutable(node, executable, foreignCredentials) {
		const nodeType = node ? nodeTypesStore.getNodeType(node.type, node.typeVersion) : null;
		if (node && nodeType) {
			const workflowNode = workflowDocumentStore.value.getNodeByName(node.name);
			const isTriggerNode = !!node && nodeTypesStore.isTriggerNode(node.type);
			const isToolNode = !!node && nodeTypesStore.isToolNode(node.type);
			const expression = workflowDocumentStore.value.getExpressionHandler();
			if (workflowNode) {
				if (!getConnectionTypes(getNodeInputs({ expression }, workflowNode, nodeType)).includes(NodeConnectionTypes.Main) && !isToolNode && !isTriggerNode) return false;
			}
		}
		return Boolean(executable || foreignCredentials.length > 0);
	}
	/**
	* Returns a list of credential IDs that the current user does not have access to,
	* if the Sharing feature is enabled.
	*
	* These are considered "foreign" credentials: the user can't view or manage them,
	* but can still execute workflows that use them.
	*/
	function getForeignCredentialsIfSharingEnabled(credentials) {
		if (!credentials || !settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) return [];
		const usedCredentials = workflowDocumentStore.value.usedCredentials;
		return Object.values(credentials).map(({ id }) => id).filter((id) => id !== null).filter((id) => id in usedCredentials && !usedCredentials[id]?.currentUserHasAccess);
	}
	function displayParameter(nodeValues, parameter, path, node, displayKey = "displayOptions") {
		return displayParameterPath(nodeValues, parameter, path, node, node?.type ? nodeTypesStore.getNodeType(node.type, node.typeVersion) : null, displayKey);
	}
	function getNodeIssues(nodeType, node, workflow, ignoreIssues) {
		const pinDataNodeNames = Object.keys(workflowDocumentStore.value.pinnedDataByNodeName);
		let nodeIssues = null;
		ignoreIssues = ignoreIssues ?? [];
		if (node.disabled === true || pinDataNodeNames.includes(node.name)) return null;
		if (nodeType === null) {
			if (!ignoreIssues.includes("typeUnknown")) nodeIssues = { typeUnknown: true };
		} else {
			if (!ignoreIssues.includes("parameters")) nodeIssues = getNodeParametersIssues(nodeType.properties, node, nodeType);
			if (!ignoreIssues.includes("credentials")) {
				const nodeCredentialIssues = getNodeCredentialIssues(node, nodeType);
				if (nodeIssues === null) nodeIssues = nodeCredentialIssues;
				else mergeIssues(nodeIssues, nodeCredentialIssues);
			}
			const nodeInputIssues = getNodeInputIssues(workflow, node, nodeType);
			if (nodeIssues === null) nodeIssues = nodeInputIssues;
			else mergeIssues(nodeIssues, nodeInputIssues);
		}
		if (hasNodeExecutionIssues(node) && !ignoreIssues.includes("execution")) {
			if (nodeIssues === null) nodeIssues = {};
			nodeIssues.execution = true;
		}
		return nodeIssues;
	}
	function hasNodeExecutionIssues(node) {
		const workflowResultData = workflowExecutionStateStore.value.activeExecutionRunData;
		if (!workflowResultData?.hasOwnProperty(node.name)) return false;
		for (const taskData of workflowResultData[node.name]) if (taskData.error !== void 0) return true;
		return false;
	}
	function reportUnsetCredential(credentialType) {
		return { credentials: { [credentialType.name]: [i18n.baseText("nodeHelpers.credentialsUnset", { interpolate: { credentialType: credentialType.displayName } })] } };
	}
	function updateNodeInputIssues(node) {
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (!nodeType) return;
		const nodeInputIssues = getNodeInputIssues(workflowDocumentStore.value.getWorkflowObjectAccessorSnapshot(), node, nodeType);
		workflowDocumentStore.value.setNodeIssue({
			node: node.name,
			type: "input",
			value: nodeInputIssues?.input ? nodeInputIssues.input : null
		});
	}
	function updateNodesInputIssues() {
		const nodes = workflowDocumentStore.value.allNodes;
		for (const node of nodes) updateNodeInputIssues(node);
	}
	function updateNodesExecutionIssues() {
		const nodes = workflowDocumentStore.value.allNodes;
		for (const node of nodes) workflowDocumentStore.value.setNodeIssue({
			node: node.name,
			type: "execution",
			value: hasNodeExecutionIssues(node) ? true : null
		});
	}
	function updateNodesParameterIssues() {
		const nodes = workflowDocumentStore.value.allNodes;
		for (const node of nodes) updateNodeParameterIssues(node);
	}
	function updateNodeCredentialIssuesByName(name) {
		const node = workflowDocumentStore.value.getNodeByName(name) ?? null;
		if (node) updateNodeCredentialIssues(node);
	}
	function updateNodeCredentialIssues(node) {
		const fullNodeIssues = getNodeCredentialIssues(node);
		let newIssues = null;
		if (fullNodeIssues !== null) newIssues = fullNodeIssues.credentials;
		workflowDocumentStore.value.setNodeIssue({
			node: node.name,
			type: "credentials",
			value: newIssues
		});
	}
	function updateNodeParameterIssuesByName(name) {
		const node = workflowDocumentStore.value.getNodeByName(name) ?? null;
		if (node) updateNodeParameterIssues(node);
	}
	function updateNodeParameterIssues(node, nodeType) {
		const localNodeType = nodeType ?? nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (localNodeType === null) return;
		const fullNodeIssues = getNodeParametersIssues(localNodeType.properties, node, localNodeType);
		let newIssues = null;
		if (fullNodeIssues !== null) newIssues = fullNodeIssues.parameters;
		workflowDocumentStore.value.setNodeIssue({
			node: node.name,
			type: "parameters",
			value: newIssues
		});
	}
	function getNodeInputIssues(workflow, node, nodeType) {
		const foundIssues = {};
		const workflowNode = workflow.getNode(node.name);
		let inputs = [];
		if (nodeType && workflowNode) inputs = getNodeInputs(workflow, workflowNode, nodeType);
		inputs.forEach((input) => {
			if (typeof input === "string" || input.required !== true) return;
			if (workflow.getParentNodes(node.name, input.type, 1).length === 0) foundIssues[input.type] = [i18n.baseText("nodeIssues.input.missing", { interpolate: { inputName: input.displayName || input.type } })];
		});
		if (Object.keys(foundIssues).length) return { input: foundIssues };
		return null;
	}
	function workflowHasIncompatibleTrigger() {
		return workflowDocumentStore.value.workflowTriggerNodes.some((trigger) => !trigger.disabled && !MANUAL_TRIGGER_NODE_TYPES.includes(trigger.type) && trigger.type !== "n8n-nodes-base.executeWorkflowTrigger");
	}
	function collectPrivateCredentialIssues(node, foundIssues) {
		if (!isPrivateCredentialsEnabled.value) return;
		const incompatibleTrigger = workflowHasIncompatibleTrigger();
		for (const [credTypeName, details] of Object.entries(node.credentials ?? {})) {
			if (foundIssues[credTypeName]?.length) continue;
			if (!details?.id || details.__aiGatewayManaged) continue;
			const credential = credentialsStore.getCredentialById(details.id);
			if (!credential?.isResolvable) continue;
			if (credential.connectedByMe && incompatibleTrigger) foundIssues[credTypeName] = [i18n.baseText("nodeIssues.credentials.privateRequiresManualTrigger")];
		}
	}
	function getNodeCredentialIssues(node, nodeType) {
		const localNodeType = nodeType ?? nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (node.disabled) return null;
		if (!localNodeType?.credentials) return null;
		const foundIssues = {};
		let userCredentials;
		let credentialType;
		let credentialDisplayName;
		let selectedCredentials;
		const { authentication, genericAuthType, nodeCredentialType } = node.parameters;
		if (authentication === "genericCredentialType" && genericAuthType !== "" && selectedCredsAreUnusable(node, genericAuthType)) {
			const credential = credentialsStore.getCredentialTypeByName(genericAuthType);
			return credential ? reportUnsetCredential(credential) : null;
		}
		if (hasProxyAuth(node) && authentication === "predefinedCredentialType" && nodeCredentialType !== "" && node.credentials !== void 0) {
			const stored = credentialsStore.getCredentialsByType(nodeCredentialType);
			const isCredentialUsedInWorkflow = workflowDocumentStore.value.usedCredentials?.[node.credentials?.[nodeCredentialType]?.id];
			if (selectedCredsDoNotExist(node, nodeCredentialType, stored) && !isCredentialUsedInWorkflow) {
				const credential = credentialsStore.getCredentialTypeByName(nodeCredentialType);
				return credential ? reportUnsetCredential(credential) : null;
			}
		}
		if (hasProxyAuth(node) && authentication === "predefinedCredentialType" && nodeCredentialType !== "" && selectedCredsAreUnusable(node, nodeCredentialType)) {
			const credential = credentialsStore.getCredentialTypeByName(nodeCredentialType);
			return credential ? reportUnsetCredential(credential) : null;
		}
		for (const credentialTypeDescription of localNodeType.credentials) {
			if (!displayParameter(node.parameters, credentialTypeDescription, "", node)) continue;
			credentialType = credentialsStore.getCredentialTypeByName(credentialTypeDescription.name);
			if (!credentialType) credentialDisplayName = credentialTypeDescription.name;
			else credentialDisplayName = credentialType.displayName;
			if (!node.credentials?.[credentialTypeDescription.name]) {
				if (credentialTypeDescription.required) foundIssues[credentialTypeDescription.name] = [i18n.baseText("nodeIssues.credentials.notSet", { interpolate: { type: localNodeType.displayName } })];
			} else {
				selectedCredentials = node.credentials[credentialTypeDescription.name];
				if (selectedCredentials.__aiGatewayManaged) continue;
				if (typeof selectedCredentials === "string") selectedCredentials = {
					id: null,
					name: selectedCredentials
				};
				userCredentials = credentialsStore.getCredentialsByType(credentialTypeDescription.name);
				if (userCredentials === null) userCredentials = [];
				if (selectedCredentials.id) {
					if (userCredentials.find((credentialData) => credentialData.id === selectedCredentials.id)) continue;
				}
				const nameMatches = userCredentials.filter((credentialData) => credentialData.name === selectedCredentials.name);
				if (nameMatches.length > 1) {
					foundIssues[credentialTypeDescription.name] = [i18n.baseText("nodeIssues.credentials.notIdentified", { interpolate: {
						name: selectedCredentials.name,
						type: credentialDisplayName
					} }), i18n.baseText("nodeIssues.credentials.notIdentified.hint")];
					continue;
				}
				if (nameMatches.length === 0) {
					if (!workflowDocumentStore.value.usedCredentials?.[selectedCredentials.id] && !hasPermission(["rbac"], { rbac: { scope: "credential:read" } })) foundIssues[credentialTypeDescription.name] = [i18n.baseText("nodeIssues.credentials.doNotExist", { interpolate: {
						name: selectedCredentials.name,
						type: credentialDisplayName
					} }), i18n.baseText("nodeIssues.credentials.doNotExist.hint")];
				}
			}
		}
		collectPrivateCredentialIssues(node, foundIssues);
		if (Object.keys(foundIssues).length === 0) return null;
		return { credentials: foundIssues };
	}
	/**
	* Whether the node has no selected credentials, or none of the node's
	* selected credentials are of the specified type.
	*/
	function selectedCredsAreUnusable(node, credentialType) {
		return !node.credentials || !Object.keys(node.credentials).includes(credentialType);
	}
	/**
	* Whether the node's selected credentials of the specified type
	* can no longer be found in the database.
	*/
	function selectedCredsDoNotExist(node, nodeCredentialType, storedCredsByType) {
		if (!node.credentials || !storedCredsByType) return false;
		const selectedCredsByType = node.credentials[nodeCredentialType];
		if (!selectedCredsByType) return false;
		return !storedCredsByType.find((c) => c.id === selectedCredsByType.id);
	}
	function updateNodesCredentialsIssues() {
		const nodes = workflowDocumentStore.value.allNodes;
		let issues;
		for (const node of nodes) {
			issues = getNodeCredentialIssues(node);
			workflowDocumentStore.value.setNodeIssue({
				node: node.name,
				type: "credentials",
				value: issues?.credentials ?? null
			});
		}
	}
	function getNodeTaskData(nodeName, runIndex = 0, execution) {
		return getAllNodeTaskData(nodeName, execution)?.[runIndex] ?? null;
	}
	function getAllNodeTaskData(nodeName, execution) {
		return (execution?.resultData.runData ?? workflowExecutionStateStore.value.activeExecutionRunData)?.[nodeName] ?? null;
	}
	function hasNodeExecuted(nodeName) {
		return getAllNodeTaskData(nodeName)?.some(({ executionStatus }) => executionStatus && ["success", "error"].includes(executionStatus)) ?? false;
	}
	function getLastRunIndexWithData(nodeName, outputIndex = 0, connectionType = NodeConnectionTypes.Main, execution) {
		return (getAllNodeTaskData(nodeName, execution) ?? []).findLastIndex((taskData) => taskData.data && getInputData(taskData.data, outputIndex, connectionType).length > 0);
	}
	function getNodeInputData(node, runIndex = 0, outputIndex = 0, paneType = "output", connectionType = NodeConnectionTypes.Main, execution) {
		if (!node) return [];
		const taskData = getNodeTaskData(node.name, runIndex, execution);
		if (taskData === null) return [];
		let data = taskData.data;
		if (paneType === "input" && taskData.inputOverride) data = taskData.inputOverride;
		if (!data) return [];
		return getInputData(data, outputIndex, connectionType);
	}
	function getInputData(connectionsData, outputIndex, connectionType = NodeConnectionTypes.Main) {
		return connectionsData?.[connectionType]?.[outputIndex] ?? [];
	}
	function getBinaryData(workflowRunData, node, runIndex, outputIndex, connectionType = NodeConnectionTypes.Main) {
		if (node === null) return [];
		const runDataOfNode = workflowRunData?.[node]?.[runIndex]?.data;
		if (!runDataOfNode) return [];
		const inputData = getInputData(runDataOfNode, outputIndex, connectionType);
		const returnData = [];
		for (let i = 0; i < inputData.length; i++) {
			const binaryDataInIdx = inputData[i]?.binary;
			if (binaryDataInIdx !== void 0) returnData.push(binaryDataInIdx);
		}
		return returnData;
	}
	function disableNodes(nodes, { trackHistory = false, trackBulk = true } = {}) {
		const telemetry = useTelemetry();
		if (trackHistory && trackBulk) historyStore.startRecordingUndo();
		const newDisabledState = nodes.some((node) => !node.disabled);
		for (const node of nodes) {
			if (newDisabledState === node.disabled) continue;
			const updateInformation = {
				name: node.name,
				properties: { disabled: newDisabledState }
			};
			telemetry.track("User set node enabled status", {
				node_type: node.type,
				is_enabled: node.disabled,
				workflow_id: workflowsStore.workflowId
			});
			workflowDocumentStore.value.updateNodeProperties(updateInformation);
			workflowsStore.clearNodeExecutionData(node.name);
			updateNodeParameterIssues(node);
			updateNodeCredentialIssues(node);
			updateNodesInputIssues();
			if (trackHistory) historyStore.pushCommandToUndo(new EnableNodeToggleCommand(node.name, node.disabled === true, newDisabledState, Date.now()));
		}
		if (trackHistory && trackBulk) historyStore.stopRecordingUndo();
	}
	function matchCredentials(node) {
		if (!node.credentials) return;
		Object.entries(node.credentials).forEach(([nodeCredentialType, nodeCredentials]) => {
			const credentialOptions = credentialsStore.getCredentialsByType(nodeCredentialType);
			if (typeof nodeCredentials === "string") {
				nodeCredentials = {
					id: null,
					name: nodeCredentials
				};
				credentialsUpdated.value = true;
			}
			if (nodeCredentials.id) {
				const credentialsId = nodeCredentials.id.toString();
				const credentialsForId = credentialOptions.find((optionData) => optionData.id === credentialsId);
				if (credentialsForId) {
					if (credentialsForId.name !== nodeCredentials.name || typeof nodeCredentials.id === "number") {
						node.credentials[nodeCredentialType] = {
							id: credentialsForId.id,
							name: credentialsForId.name
						};
						credentialsUpdated.value = true;
					}
					return;
				}
			}
			node.credentials[nodeCredentialType] = nodeCredentials;
			const credentialsForName = credentialOptions.filter((optionData) => optionData.name === nodeCredentials.name);
			if (credentialsForName.length === 1) {
				node.credentials[nodeCredentialType].id = credentialsForName[0].id;
				credentialsUpdated.value = true;
			}
		});
	}
	async function loadNodesProperties(nodeInfos) {
		const allNodes = nodeTypesStore.allNodeTypes;
		const nodesToBeFetched = [];
		allNodes.forEach((node) => {
			const nodeVersions = Array.isArray(node.version) ? node.version : [node.version];
			if (!!nodeInfos.find((n) => n.name === node.name && nodeVersions.includes(n.version)) && !node.hasOwnProperty("properties")) nodesToBeFetched.push({
				name: node.name,
				version: Array.isArray(node.version) ? node.version.slice(-1)[0] : node.version
			});
		});
		if (nodesToBeFetched.length > 0) {
			canvasStore.startLoading();
			await nodeTypesStore.getNodesInformation(nodesToBeFetched);
			canvasStore.stopLoading();
		}
	}
	function assignWebhookId(node) {
		const id = window.crypto.randomUUID();
		node.webhookId = id;
		return id;
	}
	/** nodes that would execute only once with such parameters add 'undefined' to parameters values if it is parameter's default value */
	const SINGLE_EXECUTION_NODES = {
		"n8n-nodes-base.code": { mode: [void 0, "runOnceForAllItems"] },
		"n8n-nodes-base.executeWorkflow": { mode: [void 0, "once"] },
		"n8n-nodes-base.crateDb": { operation: [void 0, "update"] },
		"n8n-nodes-base.timescaleDb": { operation: [void 0, "update"] },
		"n8n-nodes-base.microsoftSql": { operation: [
			void 0,
			"update",
			"delete"
		] },
		"n8n-nodes-base.questDb": { operation: [void 0] },
		"n8n-nodes-base.mongoDb": { operation: ["insert", "update"] },
		"n8n-nodes-base.redis": { operation: [void 0] }
	};
	function isSingleExecution(type, parameters) {
		const singleExecutionCase = SINGLE_EXECUTION_NODES[type];
		if (singleExecutionCase) {
			for (const parameter of Object.keys(singleExecutionCase)) if (!singleExecutionCase[parameter].includes(parameters[parameter])) return false;
			return true;
		}
		return false;
	}
	function getNodeHints(workflow, node, nodeTypeData, nodeInputData) {
		const hints = [];
		if (nodeTypeData?.hints?.length) for (const hint of nodeTypeData.hints) if (hint.displayCondition) try {
			let display;
			if (nodeInputData === void 0) display = workflow.expression.getSimpleParameterValue(node, hint.displayCondition, "internal", {}) || false;
			else {
				const { runExecutionData, runIndex, connectionInputData } = nodeInputData;
				display = workflow.expression.getParameterValue(hint.displayCondition, runExecutionData ?? null, runIndex, 0, node.name, connectionInputData, "manual", {});
			}
			if (typeof display === "string" && display.trim() === "true") display = true;
			if (typeof display !== "boolean") {
				console.warn(`Condition was not resolved as boolean in '${node.name}' node for hint: `, hint.message);
				continue;
			}
			if (display) hints.push(hint);
		} catch (e) {
			console.warn(`Could not calculate display condition in '${node.name}' node for hint: `, hint.message);
		}
		else hints.push(hint);
		return hints;
	}
	function getDefaultNodeName(node) {
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (nodeType === null) return null;
		return makeNodeName(getNodeParameters(nodeType?.properties, node.parameters ?? {}, true, false, node.typeVersion ? { typeVersion: node.typeVersion } : null, nodeType) ?? {}, nodeType);
	}
	return {
		isCustomApiCallSelected,
		isNodeExecutable,
		getForeignCredentialsIfSharingEnabled,
		displayParameter,
		getNodeCredentialIssues,
		getNodeIssues,
		updateNodesInputIssues,
		updateNodesExecutionIssues,
		updateNodesParameterIssues,
		updateNodeInputIssues,
		updateNodeCredentialIssuesByName,
		updateNodeCredentialIssues,
		updateNodeParameterIssuesByName,
		updateNodeParameterIssues,
		getBinaryData,
		disableNodes,
		getNodeSubtitle,
		updateNodesCredentialsIssues,
		getLastRunIndexWithData,
		hasNodeExecuted,
		getNodeInputData,
		matchCredentials,
		isInsertingNodes,
		credentialsUpdated,
		isProductionExecutionPreview,
		pullConnActiveNodeName,
		loadNodesProperties,
		getNodeTaskData,
		assignNodeId,
		assignWebhookId,
		isSingleExecution,
		getNodeHints,
		nodeIssuesToString,
		getDefaultNodeName
	};
}
//#endregion
export { BulkCommand as a, MoveNodeCommand as c, RenameNodeCommand as d, ReplaceNodeParametersCommand as f, AddNodeCommand as i, RemoveConnectionCommand as l, useCanvasStore as m, useHistoryStore as n, Command as o, historyBus as p, AddConnectionCommand as r, EnableNodeToggleCommand as s, useNodeHelpers as t, RemoveNodeCommand as u };
