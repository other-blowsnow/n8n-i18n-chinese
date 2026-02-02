import { C as useNodeTypesStore } from "./users.store-qBZsmf9-.js";
import { It as AI_MCP_TOOL_NODE_TYPE, Sr as WIKIPEDIA_TOOL_NODE_TYPE, ct as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, ha as isHitlToolType, ki as traverseNodeParameters, oa as getNodeParameters, ta as displayParameter } from "./constants-Cyrg9Nbl.js";
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
