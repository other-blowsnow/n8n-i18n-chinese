import { Lc as v4 } from "./constants-Brs44Mbc.js";
//#region src/features/agents/composables/useAgentToolRefAdapter.ts
/**
* Two-way adapter between the agent's persisted tool shape (`AgentJsonToolRef`
* with `type: 'node'`) and the richer `INode` shape that the NDV parameter
* form and Chat Hub's ToolListItem component both operate on.
*
* The agent config stores node tools as a flat ref:
*   { type: 'node', name, description, node: { nodeType, nodeTypeVersion,
*     nodeParameters, credentials }, requireApproval }
*
* Rendering a row in the tools list only needs `INode.type`, `typeVersion`,
* `name`, and — for the settings/config panel — `parameters` and
* `credentials`.
*/
function pickLatestVersion(version) {
	if (Array.isArray(version)) return [...version].sort((a, b) => b - a)[0] ?? 1;
	return version;
}
/**
* Convert the config's strict credential map (`{ id: string; name: string }`)
* to `INodeCredentials` (`id: string | null`) for rendering.
*/
function toINodeCredentials(credentials) {
	if (!credentials) return void 0;
	const out = {};
	for (const [credType, value] of Object.entries(credentials)) out[credType] = {
		id: value.id,
		name: value.name
	};
	return out;
}
/**
* Convert `INodeCredentials` (id nullable) back to the config shape
* (id required). Drops entries whose credential is not yet persisted.
*/
function toConfigCredentials(credentials) {
	if (!credentials) return void 0;
	const out = {};
	for (const [credType, value] of Object.entries(credentials)) {
		if (value.id === null) continue;
		out[credType] = {
			id: value.id,
			name: value.name
		};
	}
	return Object.keys(out).length > 0 ? out : void 0;
}
/** Shape a node-type `AgentJsonToolRef` as an `INode` for list rendering. */
function toolRefToNode(ref) {
	if (ref.type !== "node" || !ref.node) return null;
	return {
		id: v4(),
		name: ref.name ?? ref.node.nodeType,
		type: ref.node.nodeType,
		typeVersion: ref.node.nodeTypeVersion,
		parameters: ref.node.nodeParameters ?? {},
		credentials: toINodeCredentials(ref.node.credentials),
		position: [0, 0]
	};
}
/** Build a new `AgentJsonToolRef` for a node type the user just connected. */
function nodeTypeToNewToolRef(nodeType) {
	const version = pickLatestVersion(nodeType.version);
	return {
		type: "node",
		name: nodeType.displayName.replace(/ Tool$/, ""),
		node: {
			nodeType: nodeType.name,
			nodeTypeVersion: version,
			nodeParameters: {}
		}
	};
}
/**
* Merge edits made to an `INode` back into the original ref (preserving extra
* fields).
*/
function updateToolRefFromNode(original, node) {
	if (original.type !== "node" || !original.node) return original;
	return {
		...original,
		name: node.name,
		node: {
			...original.node,
			nodeType: node.type,
			nodeTypeVersion: node.typeVersion,
			nodeParameters: node.parameters,
			credentials: toConfigCredentials(node.credentials)
		}
	};
}
/**
* Build a new `AgentJsonToolRef` of type `workflow` from the user's chosen
* workflow. Persists the workflow's **name** (not id) on `ref.workflow`
* because the backend's `buildWorkflowTool` looks workflows up by name scoped
* to the project — see `cli/src/modules/agents/tools/workflow-tool-factory.ts`.
*/
function workflowToNewToolRef(workflow) {
	return {
		type: "workflow",
		workflow: workflow.name,
		name: workflow.name,
		description: workflow.description ?? "",
		allOutputs: false
	};
}
/**
* Collect the display names of every tool in the list, optionally excluding
* the one currently being edited. Feeds the config form's name-uniqueness
* check from both the sidebar gear path and the tools-modal connect / gear
* paths so they stay in sync.
*/
function getExistingToolNames(tools, exclude) {
	return tools.filter((t) => t !== exclude && t.type !== "custom" && Boolean(t.name)).map((t) => t.name);
}
/** Merge edits from the workflow config form back into the ref. */
function updateWorkflowToolRef(original, edits) {
	if (original.type !== "workflow") return original;
	return {
		...original,
		name: edits.name,
		description: edits.description,
		allOutputs: edits.allOutputs
	};
}
//#endregion
export { updateWorkflowToolRef as a, updateToolRefFromNode as i, nodeTypeToNewToolRef as n, workflowToNewToolRef as o, toolRefToNode as r, getExistingToolNames as t };
