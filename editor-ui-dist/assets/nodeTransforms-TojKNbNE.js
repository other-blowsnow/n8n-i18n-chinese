import { C as useNodeTypesStore } from "./users.store-Dzwfthm5.js";
import { Ii as traverseNodeParameters, Lt as AI_MCP_TOOL_NODE_TYPE, fa as getNodeParameters, lt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, sa as displayParameter, wr as WIKIPEDIA_TOOL_NODE_TYPE, xa as isHitlToolType } from "./constants-DJi2tANw.js";
function getNodeTypeDisplayableCredentials(nodeTypeProvider, node) {
	const nodeType = nodeTypeProvider.getNodeType(node.type, node.typeVersion);
	if (!nodeType?.credentials) return [];
	const nodeTypeCreds = nodeType.credentials;
	const nodeParameters = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
	return nodeTypeCreds.filter((credentialTypeDescription) => {
		return displayParameter(nodeParameters, credentialTypeDescription, node, nodeType);
	});
}
function doesNodeHaveCredentialsToFill(nodeTypeProvider, node) {
	return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).length > 0;
}
function hasNodeCredentialFilled(node, credentialName) {
	if (!node.credentials) return false;
	return !!node.credentials[credentialName];
}
function doesNodeHaveAllCredentialsFilled(nodeTypeProvider, node) {
	return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).every((cred) => hasNodeCredentialFilled(node, cred.name));
}
const TOOL_NODE_TYPES_NEED_INPUT = [
	WIKIPEDIA_TOOL_NODE_TYPE,
	AI_MCP_TOOL_NODE_TYPE,
	AI_CODE_TOOL_LANGCHAIN_NODE_TYPE
];
function needsAgentInput(node) {
	const collectedArgs = [];
	traverseNodeParameters(node.parameters, collectedArgs);
	return collectedArgs.length > 0 || TOOL_NODE_TYPES_NEED_INPUT.includes(node.type) || node.type.includes("vectorStore") && node.parameters?.mode === "retrieve-as-tool" || isHitlToolType(node.type);
}
function getParameterDisplayableOptions(options, node) {
	if (!node) return options;
	const nodeType = node?.type ? useNodeTypesStore().getNodeType(node.type, node.typeVersion) : null;
	if (!nodeType || !Array.isArray(nodeType.properties)) return options;
	const nodeParameters = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
	return options.filter((option) => {
		if (!option.displayOptions && !option.disabledOptions) return true;
		return displayParameter(nodeParameters, option, node, nodeType, void 0, "displayOptions");
	});
}
export { getParameterDisplayableOptions as a, getNodeTypeDisplayableCredentials as i, doesNodeHaveAllCredentialsFilled as n, needsAgentInput as o, doesNodeHaveCredentialsToFill as r, TOOL_NODE_TYPES_NEED_INPUT as t };
