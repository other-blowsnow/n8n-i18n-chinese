import { _t as useNodeTypesStore } from "./builder.store-BjWbk2Wl.js";
import { It as AI_MCP_TOOL_NODE_TYPE, Ti as traverseNodeParameters, Zi as displayParameter, na as getNodeParameters, ut as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, yr as WIKIPEDIA_TOOL_NODE_TYPE } from "./constants-ksa9xIxI.js";
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
function needsAgentInput(node) {
	const nodeTypesNeedModal = [
		WIKIPEDIA_TOOL_NODE_TYPE,
		AI_MCP_TOOL_NODE_TYPE,
		AI_CODE_TOOL_LANGCHAIN_NODE_TYPE
	];
	const collectedArgs = [];
	traverseNodeParameters(node.parameters, collectedArgs);
	return collectedArgs.length > 0 || nodeTypesNeedModal.includes(node.type) || node.type.includes("vectorStore") && node.parameters?.mode === "retrieve-as-tool";
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
export { needsAgentInput as a, getParameterDisplayableOptions as i, doesNodeHaveCredentialsToFill as n, getNodeTypeDisplayableCredentials as r, doesNodeHaveAllCredentialsFilled as t };
