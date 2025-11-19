import { Pt as reactive } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Qs as useRootStore, gi as isEmpty, o as useWorkflowsStore, pc as request, t as useTelemetry, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { Jr as createResultError, Yr as createResultOk } from "./constants-C_oOJnqT.js";
var padVersion = (version) => {
	return version.toString().split(".").concat(["0", "0"]).slice(0, 3).join(".");
};
var isNonEmptyJsonSchema = (response) => {
	return !!response && typeof response === "object" && "type" in response && "properties" in response && !isEmpty(response.properties);
};
const getSchemaPreview = async (baseUrl, options) => {
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
const useSchemaPreviewStore = defineStore("schemaPreview", () => {
	const schemaPreviews = reactive(/* @__PURE__ */ new Map());
	const rootStore = useRootStore();
	const telemetry = useTelemetry();
	const workflowsStore = useWorkflowsStore();
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
	async function trackSchemaPreviewExecution(pushEvent) {
		if (schemaPreviews.size === 0 || pushEvent.data.executionStatus !== "success") return;
		const node = workflowsStore.getNodeByName(pushEvent.nodeName);
		if (!node) return;
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
			workflow_id: workflowsStore.workflowId
		});
	}
	return {
		getSchemaPreview: getSchemaPreview$1,
		trackSchemaPreviewExecution
	};
});
export { useSchemaPreviewStore as t };
