//#region src/features/project-roles/projectRoleScopes.ts
/**
* UI-visible operations per resource for the project role editor.
* The `satisfies` constraint ensures every key is a valid resource and
* every operation exists in that resource's definition in @n8n/permissions.
*/
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
var SCOPE_TYPES = [
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
var SCOPES = Object.fromEntries(Object.entries(UI_OPERATIONS).map(([resource, operations]) => [resource, operations.map((op) => `${resource}:${op}`)]));
/**
* Scopes that are coupled to a visible scope but hidden from the checkbox UI.
* These are counted in permission totals so roles carrying them (e.g.
* PERSONAL_PROJECT_OWNER_SCOPES with workflow:unpublish but no workflow:publish)
* are not undercounted.
*/
var COUPLED_HIDDEN_SCOPES = new Set(["workflow:unpublish"]);
/** All UI-visible scopes as a flat set, for permission counting */
var UI_VISIBLE_SCOPES = new Set([...Object.values(SCOPES).flat(), ...COUPLED_HIDDEN_SCOPES]);
/** Total number of UI-visible permissions */
var TOTAL_PROJECT_PERMISSIONS = UI_VISIBLE_SCOPES.size;
/**
* Normalize coupled scopes so that publish ↔ unpublish are always paired.
* Prevents legacy roles with only one of the two from being saved in that
* state when an admin edits unrelated permissions.
*/
function normalizeCoupledScopes(scopes) {
	const hasPublish = scopes.includes("workflow:publish");
	const hasUnpublish = scopes.includes("workflow:unpublish");
	if (hasPublish && !hasUnpublish) return [...scopes, "workflow:unpublish"];
	if (hasUnpublish && !hasPublish) return [...scopes, "workflow:publish"];
	return scopes;
}
//#endregion
export { normalizeCoupledScopes as a, UI_VISIBLE_SCOPES as i, SCOPE_TYPES as n, TOTAL_PROJECT_PERMISSIONS as r, SCOPES as t };
