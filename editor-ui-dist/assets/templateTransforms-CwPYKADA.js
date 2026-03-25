import { Ka as isResourceLocatorValue } from "./constants-CasV1Nn-.js";
import { i as getNodeTypeDisplayableCredentials } from "./nodeTransforms-BkycvANY.js";
const keyFromCredentialTypeAndName = (credentialTypeName, credentialName) => `${credentialTypeName}-${credentialName}`;
const normalizeTemplateNodeCredentials = (credentials) => {
	if (!credentials) return {};
	return Object.fromEntries(Object.entries(credentials).map(([key, value]) => {
		return typeof value === "string" ? [key, value] : [key, value.name];
	}));
};
const getReplacedTemplateNodeCredentials = (nodeCredentials, toReplaceByKey) => {
	if (!nodeCredentials) return;
	const replacedNodeCredentials = {};
	const normalizedCredentials = normalizeTemplateNodeCredentials(nodeCredentials);
	for (const credentialType in normalizedCredentials) {
		const credentialNameInTemplate = normalizedCredentials[credentialType];
		const toReplaceWith = toReplaceByKey[keyFromCredentialTypeAndName(credentialType, credentialNameInTemplate)];
		if (toReplaceWith) replacedNodeCredentials[credentialType] = toReplaceWith;
	}
	return replacedNodeCredentials;
};
const getMissingTemplateNodeCredentials = (nodeTypeProvider, node, replacementsByKey) => {
	const nodeCredentialsToAdd = {};
	const usableCredentials = getNodeTypeDisplayableCredentials(nodeTypeProvider, node);
	for (const usableCred of usableCredentials) {
		const credentialKey = keyFromCredentialTypeAndName(usableCred.name, "");
		if (replacementsByKey[credentialKey]) nodeCredentialsToAdd[usableCred.name] = replacementsByKey[credentialKey];
	}
	return nodeCredentialsToAdd;
};
const replaceAllTemplateNodeCredentials = (nodeTypeProvider, nodes, toReplaceWith) => {
	return nodes.map((node) => {
		const replacedCredentials = getReplacedTemplateNodeCredentials(node.credentials, toReplaceWith);
		const newCredentials = getMissingTemplateNodeCredentials(nodeTypeProvider, node, toReplaceWith);
		const credentials = {
			...replacedCredentials,
			...newCredentials
		};
		return {
			...node,
			credentials: Object.keys(credentials).length > 0 ? credentials : void 0
		};
	});
};
function clearResourceLocatorValues(parameters) {
	const cleaned = { ...parameters };
	for (const [key, value] of Object.entries(cleaned)) if (isResourceLocatorValue(value)) cleaned[key] = {
		__rl: true,
		mode: value.mode,
		value: ""
	};
	else if (value !== null && typeof value === "object" && !Array.isArray(value)) cleaned[key] = clearResourceLocatorValues(value);
	return cleaned;
}
function clearAllNodeResourceLocatorValues(nodes) {
	return nodes.map((node) => ({
		...node,
		parameters: clearResourceLocatorValues(node.parameters)
	}));
}
export { replaceAllTemplateNodeCredentials as i, keyFromCredentialTypeAndName as n, normalizeTemplateNodeCredentials as r, clearAllNodeResourceLocatorValues as t };
