import { Xo as isResourceLocatorValue } from "./constants-BehPiBy1.js";
import { i as getNodeTypeDisplayableCredentials } from "./nodeTransforms-CoSFAhjB.js";
//#region src/features/workflows/templates/utils/templateTransforms.ts
/**
* Forms a key from credential type name and credential name
*/
var keyFromCredentialTypeAndName = (credentialTypeName, credentialName) => `${credentialTypeName}-${credentialName}`;
/**
* Normalizes the credentials of a template node. Templates created with
* different versions of n8n may have different credential formats.
*/
var normalizeTemplateNodeCredentials = (credentials) => {
	if (!credentials) return {};
	return Object.fromEntries(Object.entries(credentials).map(([key, value]) => {
		return typeof value === "string" ? [key, value] : [key, value.name];
	}));
};
/**
* Replaces the credentials of a node with the given replacements
*
* @example
* const nodeCredentials = { twitterOAuth1Api: "twitter" };
* const toReplaceByKey = { 'twitterOAuth1Api-twitter': {
*   id: "BrEOZ5Cje6VYh9Pc",
*   name: "X OAuth account"
* }};
* replaceTemplateNodeCredentials(nodeCredentials, toReplaceByKey);
* // => { twitterOAuth1Api: { id: "BrEOZ5Cje6VYh9Pc", name: "X OAuth account" } }
*/
var getReplacedTemplateNodeCredentials = (nodeCredentials, toReplaceByKey) => {
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
/**
* Returns credentials for the given node that are missing from it
* but are present in the given replacements
*/
var getMissingTemplateNodeCredentials = (nodeTypeProvider, node, replacementsByKey) => {
	const nodeCredentialsToAdd = {};
	const usableCredentials = getNodeTypeDisplayableCredentials(nodeTypeProvider, node);
	for (const usableCred of usableCredentials) {
		const credentialKey = keyFromCredentialTypeAndName(usableCred.name, "");
		if (replacementsByKey[credentialKey]) nodeCredentialsToAdd[usableCred.name] = replacementsByKey[credentialKey];
	}
	return nodeCredentialsToAdd;
};
/**
* Replaces the credentials of all template workflow nodes with the given
* replacements
*/
var replaceAllTemplateNodeCredentials = (nodeTypeProvider, nodes, toReplaceWith) => {
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
/**
* Clears resourceLocator parameter values from node parameters.
* ResourceLocator values from templates contain IDs specific to the template
* creator's account (e.g. Slack channel IDs, Google Sheet IDs) that are useless
* for the importing user. Clearing them ensures these parameters show up as
* requiring setup in the setup panel.
*/
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
/**
* Clears resourceLocator parameter values from all nodes in a list.
*/
function clearAllNodeResourceLocatorValues(nodes) {
	return nodes.map((node) => ({
		...node,
		parameters: clearResourceLocatorValues(node.parameters)
	}));
}
//#endregion
export { replaceAllTemplateNodeCredentials as i, keyFromCredentialTypeAndName as n, normalizeTemplateNodeCredentials as r, clearAllNodeResourceLocatorValues as t };
