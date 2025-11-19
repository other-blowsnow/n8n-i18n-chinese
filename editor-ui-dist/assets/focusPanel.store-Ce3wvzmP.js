import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { ot as watchOnce, pt as i18n } from "./_MapCache-pT3vKw8Z.js";
import { r as require_get } from "./truncate-1c7Iwk7N.js";
import { Cc as STORES, o as useWorkflowsStore, rt as useNodeTypesStore, xc as defineStore, zo as useStorage } from "./useTelemetry-C2EhNQhN.js";
import { Gi as jsonParse, Hr as extractFromAICalls, ha as FROM_AI_AUTO_GENERATED_MARKER, ns as LOCAL_STORAGE_FOCUS_PANEL, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-C_oOJnqT.js";
function sanitizeFromAiParameterName(s) {
	s = s.replace(/[^a-zA-Z0-9\-]/g, "_");
	if (s.length >= 64) s = s.slice(0, 63);
	return s;
}
var NODE_DENYLIST = [
	"@n8n/n8n-nodes-langchain.toolCode",
	"@n8n/n8n-nodes-langchain.toolHttpRequest",
	"@n8n/n8n-nodes-langchain.mcpClientTool",
	["@n8n/n8n-nodes-langchain.toolWorkflow", 1.2]
];
var PATH_DENYLIST = [
	"parameters.name",
	"parameters.toolName",
	"parameters.description",
	"parameters.toolDescription"
];
var PROP_TYPE_DENYLIST = ["options", "credentialsSelect"];
const fromAIExtraProps = { description: {
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
var import_get = /* @__PURE__ */ __toESM(require_get());
var DEFAULT_PANEL_WIDTH = 500;
var DEFAULT_FOCUS_PANEL_DATA = {
	isActive: false,
	parameters: []
};
const useFocusPanelStore = defineStore(STORES.FOCUS_PANEL, () => {
	const workflowsStore = useWorkflowsStore();
	const focusPanelStorage = useStorage(LOCAL_STORAGE_FOCUS_PANEL);
	const focusPanelData = computed(() => {
		const defaultValue = { [workflowsStore.workflowId]: DEFAULT_FOCUS_PANEL_DATA };
		return focusPanelStorage.value ? jsonParse(focusPanelStorage.value, { fallbackValue: defaultValue }) : defaultValue;
	});
	const currentFocusPanelData = computed(() => focusPanelData.value[workflowsStore.workflowId] ?? DEFAULT_FOCUS_PANEL_DATA);
	const lastFocusTimestamp = ref(0);
	const focusPanelActive = computed(() => currentFocusPanelData.value.isActive);
	const focusPanelWidth = computed(() => currentFocusPanelData.value.width ?? DEFAULT_PANEL_WIDTH);
	const _focusedNodeParameters = computed(() => currentFocusPanelData.value.parameters);
	const focusedNodeParameters = computed(() => _focusedNodeParameters.value.map((x) => {
		const node = workflowsStore.getNodeById(x.nodeId);
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
		if (removeEmpty && "__EMPTY__" in focusPanelDataCurrent) delete focusPanelDataCurrent[PLACEHOLDER_EMPTY_WORKFLOW_ID];
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
		if (!currentFocusPanelData.value || !("__EMPTY__" in focusPanelData.value)) return;
		const latestWorkflowData = focusPanelData.value[PLACEHOLDER_EMPTY_WORKFLOW_ID];
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
	const focusedNodeParametersInTelemetryFormat = computed(() => focusedNodeParameters.value.map((x) => ({
		parameterPath: x.parameterPath,
		nodeType: isRichParameter(x) ? x.node.type : "unresolved",
		nodeId: x.nodeId
	})));
	watchOnce(() => currentFocusPanelData.value, (value) => {
		if (value.isActive && value.parameters.length > 0) lastFocusTimestamp.value = Date.now();
	});
	return {
		focusPanelActive,
		focusedNodeParameters,
		focusedNodeParametersInTelemetryFormat,
		lastFocusTimestamp,
		focusPanelWidth,
		resolvedParameter,
		openWithFocusedNodeParameter,
		isRichParameter,
		closeFocusPanel,
		toggleFocusPanel,
		onNewWorkflowSave,
		updateWidth,
		unsetParameters
	};
});
export { updateFromAIOverrideValues as a, makeOverrideValue as i, buildValueFromOverride as n, isFromAIOverrideValue as r, useFocusPanelStore as t };
