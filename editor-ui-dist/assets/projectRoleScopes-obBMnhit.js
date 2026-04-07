var UI_OPERATIONS = {
	project: [
		"read",
		"update",
		"delete"
	],
	folder: [
		"read",
		"update",
		"create",
		"move",
		"delete"
	],
	workflow: [
		"read",
		"execute",
		"update",
		"create",
		"publish",
		"move",
		"delete",
		"updateRedactionSetting"
	],
	credential: [
		"read",
		"update",
		"create",
		"share",
		"unshare",
		"move",
		"delete"
	],
	externalSecretsProvider: [
		"read",
		"create",
		"update",
		"delete",
		"sync"
	],
	externalSecret: ["list"],
	sourceControl: ["push"],
	dataTable: [
		"read",
		"readRow",
		"update",
		"writeRow",
		"create",
		"delete"
	],
	projectVariable: [
		"read",
		"update",
		"create",
		"delete"
	]
};
const SCOPE_TYPES = [
	"project",
	"folder",
	"workflow",
	"credential",
	"externalSecretsProvider",
	"externalSecret",
	"dataTable",
	"projectVariable",
	"sourceControl"
];
const SCOPES = Object.fromEntries(Object.entries(UI_OPERATIONS).map(([resource, operations]) => [resource, operations.map((op) => `${resource}:${op}`)]));
const COUPLED_HIDDEN_SCOPES = new Set(["workflow:unpublish"]);
const UI_VISIBLE_SCOPES = new Set([...Object.values(SCOPES).flat(), ...COUPLED_HIDDEN_SCOPES]);
const TOTAL_PROJECT_PERMISSIONS = UI_VISIBLE_SCOPES.size;
function normalizeCoupledScopes(scopes) {
	const hasPublish = scopes.includes("workflow:publish");
	const hasUnpublish = scopes.includes("workflow:unpublish");
	if (hasPublish && !hasUnpublish) return [...scopes, "workflow:unpublish"];
	if (hasUnpublish && !hasPublish) return [...scopes, "workflow:publish"];
	return scopes;
}
export { normalizeCoupledScopes as a, UI_VISIBLE_SCOPES as i, SCOPE_TYPES as n, TOTAL_PROJECT_PERMISSIONS as r, SCOPES as t };
