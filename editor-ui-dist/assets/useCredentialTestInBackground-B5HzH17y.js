import { _n as getNodeTypeDisplayableCredentials, pt as useCredentialsStore } from "./users.store-DI4bmc3m.js";
import { cs as displayParameter, fc as isExpression, ms as getNodeParametersIssues$1, ps as getNodeParameters } from "./constants-CVUc8I0d.js";
//#region src/features/setupPanel/setupPanel.utils.ts
var isHttpRequestNodeType = (nodeType) => nodeType === "n8n-nodes-base.httpRequest" || nodeType === "n8n-nodes-base.httpRequestTool";
/**
* Collects all credential types that a node requires from three sources:
* 1. Node type definition — standard credentials with displayOptions
* 2. Node issues — dynamic credentials (e.g. in HTTP Request node) that are missing or invalid
* 3. Assigned credentials — dynamic credentials already properly set
*/
function getNodeCredentialTypes(nodeTypeProvider, node) {
	const credentialTypes = /* @__PURE__ */ new Set();
	const displayableCredentials = getNodeTypeDisplayableCredentials(nodeTypeProvider, node);
	for (const cred of displayableCredentials) credentialTypes.add(cred.name);
	const credentialIssues = node.issues?.credentials ?? {};
	for (const credType of Object.keys(credentialIssues)) credentialTypes.add(credType);
	if (node.credentials) for (const credType of Object.keys(node.credentials)) credentialTypes.add(credType);
	return Array.from(credentialTypes);
}
function getNodeParametersIssues(nodeTypesStore, node) {
	const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
	if (!nodeType) return {};
	const paramsWithDefaults = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
	const nodeWithDefaults = {
		...node,
		parameters: paramsWithDefaults
	};
	const allIssues = getNodeParametersIssues$1(nodeType.properties, nodeWithDefaults, nodeType)?.parameters ?? {};
	const topLevelPropsByName = /* @__PURE__ */ new Map();
	for (const prop of nodeType.properties) {
		const existing = topLevelPropsByName.get(prop.name);
		if (existing) existing.push(prop);
		else topLevelPropsByName.set(prop.name, [prop]);
	}
	const filteredIssues = {};
	for (const [key, value] of Object.entries(allIssues)) {
		const props = topLevelPropsByName.get(key);
		if (!props) continue;
		if (!props.some((prop) => {
			if (prop.type === "hidden") return false;
			if (prop.displayOptions && !displayParameter(paramsWithDefaults, prop, nodeWithDefaults, nodeType)) return false;
			return true;
		})) continue;
		filteredIssues[key] = value;
	}
	return filteredIssues;
}
/**
* Groups credential requirements across all nodes by credential type.
* Returns one CredentialTypeSetupState per unique credential type.
*
* For HTTP Request nodes, grouping is by credential type + URL. When the URL is an expression,
* the optional resolveExpressionUrl callback attempts to resolve it. If resolution succeeds
* (e.g. static expressions or those using only environment variables), the resolved value
* is used for grouping. Otherwise each node gets its own card.
*/
function groupCredentialsByType(nodesWithCredentials, getCredentialDisplayName, resolveExpressionUrl) {
	const map = /* @__PURE__ */ new Map();
	for (const { node, credentialTypes } of nodesWithCredentials) for (const credType of credentialTypes) {
		const isHttpRequest = isHttpRequestNodeType(node.type);
		const url = node.parameters.url;
		let mapKey;
		if (!isHttpRequest) mapKey = credType;
		else if (isExpression(url)) {
			const resolvedUrl = resolveExpressionUrl?.(url, node.name) ?? null;
			mapKey = resolvedUrl !== null ? `${credType}:http:${resolvedUrl}` : `${credType}:http:${node.name}`;
		} else mapKey = `${credType}:http:${String(url ?? "")}`;
		const existing = map.get(mapKey);
		if (existing) {
			existing.nodes.push(node);
			const nodeIssues = node.issues?.credentials?.[credType];
			if (nodeIssues) {
				const issueMessages = [nodeIssues].flat();
				for (const msg of issueMessages) if (!existing.issues.includes(msg)) existing.issues.push(msg);
			}
			if (!existing.selectedCredentialId) {
				const credValue = node.credentials?.[credType];
				if (typeof credValue !== "string" && credValue?.id) existing.selectedCredentialId = credValue.id;
			}
		} else {
			const credValue = node.credentials?.[credType];
			const selectedCredentialId = typeof credValue === "string" ? void 0 : credValue?.id ?? void 0;
			const issueMessages = [(node.issues?.credentials ?? {})[credType] ?? []].flat();
			map.set(mapKey, {
				credentialType: credType,
				credentialDisplayName: getCredentialDisplayName(credType),
				selectedCredentialId,
				issues: issueMessages,
				nodes: [node],
				isComplete: false
			});
		}
	}
	for (const state of map.values()) state.isComplete = !!state.selectedCredentialId && state.issues.length === 0;
	return Array.from(map.values());
}
/**
* Single source of truth for whether a per-node setup card is complete.
* Handles credential, parameter, and trigger checks uniformly.
*/
function isNodeSetupComplete(state, ctx) {
	if (state.credentialType) {
		if (!state.selectedCredentialId || (state.issues?.length ?? 0) > 0) return false;
		if (ctx.isCredentialTestedOk && state.selectedCredentialId && !ctx.isCredentialTestedOk(state.selectedCredentialId)) return false;
	}
	if (Object.keys(state.parameterIssues).length > 0 || ctx.hasUnfilledTemplateParams(state.node)) return false;
	if (state.isTrigger && state.node.name === ctx.firstTriggerName && !ctx.hasTriggerExecuted(state.node.name)) return false;
	return true;
}
/**
* Checks whether a grouped credential card is fully complete.
* For cards with embedded triggers, complete = credential set + no issues + test ok + all first-triggers executed.
*/
function isCredentialCardComplete(credState, ctx) {
	if (!(!!credState.selectedCredentialId && credState.issues.length === 0)) return false;
	if (ctx.isCredentialTestedOk && credState.selectedCredentialId && !ctx.isCredentialTestedOk(credState.selectedCredentialId)) return false;
	return credState.nodes.filter((node) => ctx.isTriggerNode(node.type) && node.name === ctx.firstTriggerName).every((node) => ctx.hasTriggerExecuted(node.name));
}
/**
* Builds the setup state for a standalone trigger card.
* Complete when: trigger has been executed AND all its credential types are satisfied.
*/
function buildTriggerSetupState(node, triggerCredentialTypes, credentialTypeStates, hasTriggerExecuted) {
	return {
		node,
		isComplete: triggerCredentialTypes.every((credType) => {
			const credState = credentialTypeStates.find((s) => s.credentialType === credType);
			return credState ? !!credState.selectedCredentialId && credState.issues.length === 0 : true;
		}) && hasTriggerExecuted
	};
}
function isCardComplete(card) {
	if (card.nodeGroup) {
		const { parentState, subnodeCards } = card.nodeGroup;
		return (!parentState || parentState.isComplete) && subnodeCards.every((c) => c.isComplete);
	}
	return card.state.isComplete;
}
function isNodeGroupCard(card) {
	return !!card.nodeGroup;
}
//#endregion
//#region src/features/credentials/composables/useCredentialTestInBackground.ts
function useCredentialTestInBackground() {
	const credentialsStore = useCredentialsStore();
	/**
	* Checks whether a credential type has a test mechanism defined.
	* Returns true if either the credential type itself defines a `test` block
	* or any node with access declares `testedBy` for it.
	*/
	const isCredentialTypeTestable = (credentialTypeName) => {
		if (credentialsStore.getCredentialTypeByName(credentialTypeName)?.test) return true;
		return credentialsStore.getNodesWithAccess(credentialTypeName).some((node) => node.credentials?.some((cred) => cred.name === credentialTypeName && cred.testedBy));
	};
	/**
	* Tests a saved credential in the background.
	* Fetches the credential's redacted data first so the backend can unredact and test.
	* Skips if the credential is already tested OK or has a test in flight.
	* The result is tracked automatically in the credentials store as a side effect of testCredential.
	*/
	async function testCredentialInBackground(credentialId, credentialName, credentialType) {
		if (!isCredentialTypeTestable(credentialType)) return;
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		try {
			const credentialResponse = await credentialsStore.getCredentialData({ id: credentialId });
			if (!credentialResponse?.data || typeof credentialResponse.data === "string") return;
			if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
			const { ownedBy, sharedWithProjects, oauthTokenData, ...data } = credentialResponse.data;
			if (oauthTokenData) {
				credentialsStore.credentialTestResults.set(credentialId, "success");
				return;
			}
			await credentialsStore.testCredential({
				id: credentialId,
				name: credentialName,
				type: credentialType,
				data
			});
		} catch {}
	}
	function hydrateCredentialTestResults(results) {
		for (const { id, success } of results) credentialsStore.credentialTestResults.set(id, success ? "success" : "error");
	}
	return {
		isCredentialTypeTestable,
		testCredentialInBackground,
		hydrateCredentialTestResults
	};
}
//#endregion
export { groupCredentialsByType as a, isHttpRequestNodeType as c, getNodeParametersIssues as i, isNodeGroupCard as l, buildTriggerSetupState as n, isCardComplete as o, getNodeCredentialTypes as r, isCredentialCardComplete as s, useCredentialTestInBackground as t, isNodeSetupComplete as u };
