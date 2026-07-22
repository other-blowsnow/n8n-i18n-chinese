import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Q as watchOnce, rt as i18n } from "./core-CngOnFvY.js";
import { t as require_get } from "./get-BXEQ0kDX.js";
import { Al as jsonParse, Sl as extractFromAICalls, Ta as LOCAL_STORAGE_FOCUS_PANEL, fl as isINodeProperties, ml as isINodePropertyCollection, nu as FROM_AI_AUTO_GENERATED_MARKER } from "./constants-CSBjw1Ht.js";
import { Ft as useRouteWorkflowId, _ as useNodeTypesStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore } from "./workflowDocument.store-W274j3PU.js";
import { T as defineStore } from "./useRootStore-hyBq4XlJ.js";
import { Vn as STORES } from "./settings.store-C5bX9q6f.js";
import { _ as useStorage } from "./users.store-C2APvywU.js";
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
function buildFromAIKey(props) {
	return sanitizeFromAiParameterName(buildUniqueName(props));
}
function buildValueFromOverride(override, props, includeMarker) {
	const { extraPropValues, extraProps } = override;
	const marker = includeMarker ? `${FROM_AI_AUTO_GENERATED_MARKER} ` : "";
	const key = buildFromAIKey(props);
	const description = extraPropValues?.description?.toString() ?? extraProps.description.initialValue;
	const quoteChar = getBestQuoteChar(description);
	return `={{ ${marker}$fromAI('${key}', ${quoteChar}${description.replaceAll(/\\/g, "\\\\").replaceAll(quoteChar, `\\${quoteChar}`)}${quoteChar}, '${fieldTypeToFromAiType(props.parameter.type)}') }}`;
}
function reconcileFromAIKeys(rows, basePath, valueFields) {
	return rows.map((row, index) => {
		if (typeof row !== "object" || row === null) return row;
		const next = { ...row };
		for (const field of valueFields) {
			const value = next[field.name];
			if (typeof value !== "string" || !isFromAIOverrideValue(value)) continue;
			const key = buildFromAIKey({
				parameter: field,
				path: `${basePath}[${index}].${field.name}`
			});
			next[field.name] = value.replace(/(\$fromAI\(\s*')[^']*'/, `$1${key}'`);
		}
		return next;
	});
}
function reconcileNodeFromAIKeys(properties, nodeParameters) {
	for (const property of properties) {
		const value = nodeParameters[property.name];
		if (value === void 0 || value === null) continue;
		if (property.type === "fixedCollection" && typeof value === "object" && !Array.isArray(value)) {
			const collection = value;
			for (const option of property.options ?? []) {
				if (!isINodePropertyCollection(option)) continue;
				const rows = collection[option.name];
				if (!Array.isArray(rows)) continue;
				collection[option.name] = reconcileFromAIKeys(rows, `parameters.${property.name}.${option.name}`, option.values);
			}
		} else if (property.type === "collection" && property.typeOptions?.multipleValues && Array.isArray(value)) nodeParameters[property.name] = reconcileFromAIKeys(value, `parameters.${property.name}`, (property.options ?? []).filter(isINodeProperties));
	}
	return nodeParameters;
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
function isStaticOptionsParameter(parameter) {
	return parameter.type === "options" && !parameter.typeOptions?.loadOptionsMethod && !parameter.typeOptions?.loadOptions;
}
function canUseFromAIOverride(props, node) {
	if (NODE_DENYLIST.some((x) => isDeniedNode(x, node))) return false;
	if (PATH_DENYLIST.includes(props.path)) return false;
	const codex = useNodeTypesStore().getNodeType(node.type, node?.typeVersion)?.codex;
	if (!codex?.categories?.includes("AI") || !codex?.subcategories?.AI?.includes("Tools") || codex?.subcategories?.AI?.includes("Vector Stores")) return false;
	return !props.parameter.noDataExpression;
}
function canBeContentOverride(props, node) {
	return canUseFromAIOverride(props, node) && !PROP_TYPE_DENYLIST.includes(props.parameter.type);
}
function canDisplayExistingFromAIOverride(context, node) {
	if (!isFromAIOverrideValue(context.value?.toString() ?? "")) return false;
	if (context.parameter.type === "credentialsSelect") return false;
	if (context.parameter.type === "options" && !isStaticOptionsParameter(context.parameter)) return false;
	return canUseFromAIOverride(context, node);
}
function makeOverrideValue(context, node) {
	if (!node) return null;
	if (canBeContentOverride(context, node) || canDisplayExistingFromAIOverride(context, node)) {
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
	const routeWorkflowId = useRouteWorkflowId();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(routeWorkflowId.value)));
	const focusPanelStorage = useStorage(LOCAL_STORAGE_FOCUS_PANEL);
	const focusPanelData = computed(() => {
		const defaultValue = { [routeWorkflowId.value]: DEFAULT_FOCUS_PANEL_DATA };
		return focusPanelStorage.value ? jsonParse(focusPanelStorage.value, { fallbackValue: defaultValue }) : defaultValue;
	});
	const currentFocusPanelData = computed(() => focusPanelData.value[routeWorkflowId.value] ?? DEFAULT_FOCUS_PANEL_DATA);
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
	function _setOptions({ parameters, isActive, wid = routeWorkflowId.value, width = void 0, removeEmpty = false }) {
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
export { makeOverrideValue as a, isFromAIOverrideValue as i, buildValueFromOverride as n, reconcileNodeFromAIKeys as o, canBeContentOverride as r, updateFromAIOverrideValues as s, useFocusPanelStore as t };
