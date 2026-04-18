import { w as useNodeTypesStore } from "./users.store-BZtsNFvU.js";
import { $i as displayParameter, Ai as traverseNodeParameters, Et as AI_MCP_TOOL_NODE_TYPE, ia as getNodeParameters, mr as WIKIPEDIA_TOOL_NODE_TYPE, pa as isHitlToolType, tt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE } from "./constants-fJx0oi9Z.js";
//#region src/app/utils/nodes/nodeTransforms.ts
/**
* Returns the credentials that are displayable for the given node.
*/
function getNodeTypeDisplayableCredentials(nodeTypeProvider, node) {
	const nodeType = nodeTypeProvider.getNodeType(node.type, node.typeVersion);
	if (!nodeType?.credentials) return [];
	const nodeTypeCreds = nodeType.credentials;
	const nodeParameters = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
	return nodeTypeCreds.filter((credentialTypeDescription) => {
		return displayParameter(nodeParameters, credentialTypeDescription, node, nodeType);
	});
}
/**
* Checks if the given node has credentials that can be filled.
*/
function doesNodeHaveCredentialsToFill(nodeTypeProvider, node) {
	return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).length > 0;
}
/**
* Does node has the given credential filled
*
* @param credentialName E.g. "telegramApi"
*/
function hasNodeCredentialFilled(node, credentialName) {
	if (!node.credentials) return false;
	return !!node.credentials[credentialName];
}
/**
* Checks if the given node has all credentials filled.
*/
function doesNodeHaveAllCredentialsFilled(nodeTypeProvider, node) {
	return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).every((cred) => hasNodeCredentialFilled(node, cred.name));
}
var TOOL_NODE_TYPES_NEED_INPUT = [
	WIKIPEDIA_TOOL_NODE_TYPE,
	AI_MCP_TOOL_NODE_TYPE,
	AI_CODE_TOOL_LANGCHAIN_NODE_TYPE
];
/**
* Checks if the given node needs agentInput
*/
function needsAgentInput(node) {
	const collectedArgs = [];
	traverseNodeParameters(node.parameters, collectedArgs);
	return collectedArgs.length > 0 || TOOL_NODE_TYPES_NEED_INPUT.includes(node.type) || node.type.includes("vectorStore") && node.parameters?.mode === "retrieve-as-tool" || isHitlToolType(node.type);
}
/**
* Filters out options that should not be displayed
*/
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
//#endregion
export { getParameterDisplayableOptions as a, getNodeTypeDisplayableCredentials as i, doesNodeHaveAllCredentialsFilled as n, needsAgentInput as o, doesNodeHaveCredentialsToFill as r, TOOL_NODE_TYPES_NEED_INPUT as t };
