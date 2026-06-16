import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { i as i18n } from "./src-DPpikaZ_.js";
import { t as require_get } from "./get-CKIAFyM1.js";
import { q as useNodeTypesStore, t as useWorkflowsStore, v as createWorkflowDocumentId, x as useWorkflowDocumentStore } from "./workflows.store-B0VA2PN0.js";
import { Xc as FROM_AI_AUTO_GENERATED_MARKER, ga as LOCAL_STORAGE_FOCUS_PANEL, ts as extractFromAICalls, yc as jsonParse } from "./constants-CLQJMg7Y.js";
import { T as defineStore } from "./useRootStore-BXKn7r8-.js";
import { Rn as STORES } from "./settings.store-HAN34Lkc.js";
import { J as watchOnce } from "./core-CZJuH52F.js";
import { _ as useStorage } from "./users.store-AINJEAwY.js";
//#region src/features/ndv/parameters/utils/fromAIOverride.utils.ts
function sanitizeFromAiParameterName(s) {
	s = s.replace(/[^a-zA-Z0-9\-]/g, "_");
	if (s.length >= 64) s = s.slice(0, 63);
	return s;
}
var NODE_DENYLIST = [
	"@n8n/n8n-nodes-langchain.toolCode",
	"@n8n/n8n-nodes-langchain.toolHttpRequest",
	"@n8n/n8n-nodes-langchain.mcpClientTool",
	["@n8n/n8n-nodes-langchain.toolWorkflow", 2.1],
	["@n8n/n8n-nodes-langchain.toolVectorStore", 1]
];
var PATH_DENYLIST = [
	"parameters.toolName",
	"parameters.description",
	"parameters.toolDescription"
];
var PROP_TYPE_DENYLIST = ["options", "credentialsSelect"];
var fromAIExtraProps = { description: {
	initialValue: "",
	type: "string",
	typeOptions: { rows: 2 },
	tooltip: i18n.baseText("parameterOverride.descriptionTooltip")
} };
function isExtraPropKey(extraProps, key) {
	return extraProps.hasOwnProperty(key);
}
function updateFromAIOverrideValues(override, expr) {
	const { extraProps, extraPropValues } = override;
	const overrides = parseOverrides(expr);
	if (overrides) {
		for (const [key, value] of Object.entries(overrides)) if (isExtraPropKey(extraProps, key)) if (extraProps[key].initialValue === value) delete extraPropValues[key];
		else extraPropValues[key] = value;
	}
}
function fieldTypeToFromAiType(propType) {
	switch (propType) {
		case "boolean":
		case "number":
		case "json": return propType;
		default: return "string";
	}
}
function isFromAIOverrideValue(s) {
	return s.startsWith(`={{ ${FROM_AI_AUTO_GENERATED_MARKER} $fromAI(`);
}
function getBestQuoteChar(description) {
	if (description.includes("\n")) return "`";
	if (!description.includes("`")) return "`";
	if (!description.includes("\"")) return "\"";
	return "'";
}
function buildUniqueName(props) {
	const filteredPaths = props.path.split(".").filter((x) => /\[\d+\]/i.test(x)).map((x) => x.replaceAll(/[\[\]]/gi, ""));
	let result = [...filteredPaths, props.parameter.displayName].join("_");
	if (filteredPaths.length > 1) result = result.slice(-63);
	else result = result.slice(0, 63);
	return result;
}
function buildValueFromOverride(override, props, includeMarker) {
	const { extraPropValues, extraProps } = override;
	const marker = includeMarker ? `${FROM_AI_AUTO_GENERATED_MARKER} ` : "";
	const key = sanitizeFromAiParameterName(buildUniqueName(props));
	const description = extraPropValues?.description?.toString() ?? extraProps.description.initialValue;
	const quoteChar = getBestQuoteChar(description);
	return `={{ ${marker}$fromAI('${key}', ${quoteChar}${description.replaceAll(/\\/g, "\\\\").replaceAll(quoteChar, `\\${quoteChar}`)}${quoteChar}, '${fieldTypeToFromAiType(props.parameter.type)}') }}`;
}
function parseOverrides(expression) {
	try {
		const calls = extractFromAICalls(expression.replace(/\\[^`]/g, "\\\\"));
		if (calls.length === 1) return { description: calls[0].description };
	} catch (e) {}
	return null;
}
function isDeniedNode(nodeDenyData, node) {
	if (typeof nodeDenyData === "string") return node.type === nodeDenyData;
	else {
		const [typeName, version] = nodeDenyData;
		return node.type === typeName && node.typeVersion <= version;
	}
}
function canBeContentOverride(props, node) {
	if (NODE_DENYLIST.some((x) => isDeniedNode(x, node))) return false;
	if (PATH_DENYLIST.includes(props.path)) return false;
	if (PROP_TYPE_DENYLIST.includes(props.parameter.type)) return false;
	const codex = useNodeTypesStore().getNodeType(node.type, node?.typeVersion)?.codex;
	if (!codex?.categories?.includes("AI") || !codex?.subcategories?.AI?.includes("Tools") || codex?.subcategories?.AI?.includes("Vector Stores")) return false;
	return !props.parameter.noDataExpression;
}
function makeOverrideValue(context, node) {
	if (!node) return null;
	if (canBeContentOverride(context, node)) {
		const fromAiOverride = {
			type: "fromAI",
			extraProps: fromAIExtraProps,
			extraPropValues: {}
		};
		updateFromAIOverrideValues(fromAiOverride, context.value?.toString() ?? "");
		return fromAiOverride;
	}
	return null;
}
//#endregion
//#region src/app/stores/focusPanel.store.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var DEFAULT_PANEL_WIDTH = 500;
var DEFAULT_FOCUS_PANEL_DATA = {
	isActive: false,
	parameters: []
};
var useFocusPanelStore = defineStore(STORES.FOCUS_PANEL, () => {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const focusPanelStorage = useStorage(LOCAL_STORAGE_FOCUS_PANEL);
	const focusPanelData = computed(() => {
		const defaultValue = { [workflowsStore.workflowId]: DEFAULT_FOCUS_PANEL_DATA };
		return focusPanelStorage.value ? jsonParse(focusPanelStorage.value, { fallbackValue: defaultValue }) : defaultValue;
	});
	const currentFocusPanelData = computed(() => focusPanelData.value[workflowsStore.workflowId] ?? DEFAULT_FOCUS_PANEL_DATA);
	const lastFocusTimestamp = ref(0);
	const selectedTab = ref("setup");
	const focusPanelActive = computed(() => currentFocusPanelData.value.isActive);
	const focusPanelWidth = computed(() => currentFocusPanelData.value.width ?? DEFAULT_PANEL_WIDTH);
	const _focusedNodeParameters = computed(() => currentFocusPanelData.value.parameters);
	const focusedNodeParameters = computed(() => _focusedNodeParameters.value.map((x) => {
		const node = workflowDocumentStore.value.getNodeById(x.nodeId);
		if (!node) return x;
		const value = (0, import_get.default)(node?.parameters ?? {}, x.parameterPath.replace(/parameters\./, ""));
		if (typeof value === "string" && isFromAIOverrideValue(value)) return x;
		return {
			...x,
			node,
			value
		};
	}));
	const resolvedParameter = computed(() => focusedNodeParameters.value[0] && isRichParameter(focusedNodeParameters.value[0]) ? focusedNodeParameters.value[0] : void 0);
	function _setOptions({ parameters, isActive, wid = workflowsStore.workflowId, width = void 0, removeEmpty = false }) {
		const focusPanelDataCurrent = focusPanelData.value;
		if (removeEmpty && "" in focusPanelDataCurrent) delete focusPanelDataCurrent[""];
		focusPanelStorage.value = JSON.stringify({
			...focusPanelData.value,
			[wid]: {
				isActive: isActive ?? focusPanelActive.value,
				parameters: parameters ?? _focusedNodeParameters.value,
				width: width ?? focusPanelWidth.value
			}
		});
		if (isActive) lastFocusTimestamp.value = Date.now();
	}
	function onNewWorkflowSave(wid) {
		if (!currentFocusPanelData.value || !("" in focusPanelData.value)) return;
		const latestWorkflowData = focusPanelData.value[""];
		_setOptions({
			wid,
			parameters: latestWorkflowData.parameters,
			isActive: latestWorkflowData.isActive,
			removeEmpty: true
		});
	}
	function openWithFocusedNodeParameter(nodeParameter) {
		_setOptions({
			parameters: [nodeParameter],
			isActive: true
		});
	}
	function openFocusPanel() {
		_setOptions({ isActive: true });
	}
	function closeFocusPanel() {
		_setOptions({ isActive: false });
	}
	function unsetParameters() {
		_setOptions({ parameters: [] });
	}
	function toggleFocusPanel() {
		_setOptions({ isActive: !focusPanelActive.value });
	}
	function updateWidth(width) {
		_setOptions({ width });
	}
	function isRichParameter(p) {
		return "value" in p && "node" in p;
	}
	function setSelectedTab(tab) {
		selectedTab.value = tab;
	}
	const focusedNodeParametersInTelemetryFormat = computed(() => focusedNodeParameters.value.map((x) => ({
		parameterPath: x.parameterPath,
		nodeType: isRichParameter(x) ? x.node.type : "unresolved",
		nodeId: x.nodeId
	})));
	watchOnce(() => currentFocusPanelData.value, (value) => {
		if (value.isActive && value.parameters.length > 0) lastFocusTimestamp.value = Date.now();
	});
	watch(() => {
		const p = resolvedParameter.value;
		return p ? `${p.nodeId}:${p.parameterPath}` : null;
	}, (newKey, oldKey) => {
		if (newKey && newKey !== oldKey) selectedTab.value = "focus";
	});
	function openFocusPanelForWorkflow(wid) {
		_setOptions({
			isActive: true,
			wid
		});
	}
	return {
		focusPanelActive,
		focusedNodeParameters,
		focusedNodeParametersInTelemetryFormat,
		lastFocusTimestamp,
		focusPanelWidth,
		resolvedParameter,
		selectedTab,
		openWithFocusedNodeParameter,
		isRichParameter,
		openFocusPanel,
		openFocusPanelForWorkflow,
		closeFocusPanel,
		toggleFocusPanel,
		onNewWorkflowSave,
		updateWidth,
		unsetParameters,
		setSelectedTab
	};
});
//#endregion
export { updateFromAIOverrideValues as a, makeOverrideValue as i, buildValueFromOverride as n, isFromAIOverrideValue as r, useFocusPanelStore as t };
