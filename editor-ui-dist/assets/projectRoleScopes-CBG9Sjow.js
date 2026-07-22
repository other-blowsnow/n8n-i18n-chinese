import { ju as PROJECT_CUSTOM_ROLE_OPERATIONS, ku as COUPLED_HIDDEN_SCOPES } from "./constants-CSBjw1Ht.js";
//#region src/features/roles/project/projectRoleScopes.ts
/**
* UI-visible permission scopes for project roles.
* These are the scopes shown in the role editor checkboxes and used for
* permission counting. Excludes auto-added scopes like :list, :execute, :listProject.
*
* Operations are type-checked against PROJECT_CUSTOM_ROLE_OPERATIONS from @n8n/permissions to ensure
* only valid resource:operation combinations can be specified.
*/
var SCOPE_TYPES = [
	"project",
	"folder",
	"workflow",
	"agent",
	"credential",
	"execution",
	"externalSecretsProvider",
	"externalSecret",
	"dataTable",
	"projectVariable",
	"sourceControl"
];
var SCOPES = Object.fromEntries(Object.entries(PROJECT_CUSTOM_ROLE_OPERATIONS).map(([resource, operations]) => [resource, operations.map((op) => `${resource}:${op}`)]));
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
