//#region src/app/components/scopes/scopes.utils.ts
var DEFAULT_READ_SCOPE_ACTIONS = [
	"read",
	"list",
	"export"
];
function classifyScope(scope, readActions = DEFAULT_READ_SCOPE_ACTIONS) {
	const action = scope.split(":")[1];
	return readActions.includes(action) ? "read" : "write";
}
function getReadOnlyScopes(availableScopes, readActions = DEFAULT_READ_SCOPE_ACTIONS) {
	return availableScopes.filter((scope) => classifyScope(scope, readActions) === "read");
}
function groupScopes(availableScopes, groupDefinitions) {
	const scopesByResource = /* @__PURE__ */ new Map();
	for (const scope of availableScopes) {
		const resource = scope.split(":")[0];
		const scopes = scopesByResource.get(resource) ?? [];
		scopes.push(scope);
		scopesByResource.set(resource, scopes);
	}
	const groups = [];
	for (const { key, resources } of groupDefinitions) {
		const scopes = resources.flatMap((resource) => {
			const resourceScopes = scopesByResource.get(resource) ?? [];
			scopesByResource.delete(resource);
			return resourceScopes;
		});
		if (scopes.length > 0) groups.push({
			key,
			isFallback: false,
			scopes
		});
	}
	for (const [resource, scopes] of scopesByResource) groups.push({
		key: resource,
		isFallback: true,
		scopes
	});
	return groups;
}
function inferSelectionMode(selectedScopes, availableScopes, readActions = DEFAULT_READ_SCOPE_ACTIONS) {
	const selected = new Set(selectedScopes);
	const matches = (scopes) => scopes.length > 0 && scopes.length === selected.size && scopes.every((s) => selected.has(s));
	if (matches(availableScopes)) return "all";
	if (matches(getReadOnlyScopes(availableScopes, readActions))) return "readOnly";
	return "custom";
}
//#endregion
export { inferSelectionMode as a, groupScopes as i, classifyScope as n, getReadOnlyScopes as r, DEFAULT_READ_SCOPE_ACTIONS as t };
