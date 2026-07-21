import { Au as GLOBAL_CUSTOM_ROLE_SCOPE_GROUPS } from "./constants-BG93cxLW.js";
//#region src/features/roles/instance/instanceRoleScopes.ts
/** Display order of the resource groups in the editor. */
var INSTANCE_RESOURCE_ORDER = [
	"settings",
	"user",
	"role",
	"apiKey",
	"tag",
	"project",
	"insights"
];
/** i18n label key per resource group. */
var INSTANCE_RESOURCE_LABEL_KEYS = {
	settings: "instanceRoles.resource.settings",
	user: "instanceRoles.resource.user",
	role: "instanceRoles.resource.role",
	apiKey: "instanceRoles.resource.apiKey",
	tag: "instanceRoles.resource.tag",
	project: "instanceRoles.resource.project",
	insights: "instanceRoles.resource.insights"
};
/**
* i18n label key per option label. Option labels are shared across resources, so
* "View"/"Manage" reuse one key while api keys get their own "Manage own"/"Manage all".
*/
var INSTANCE_OPTION_LABEL_KEYS = {
	View: "instanceRoles.option.view",
	Create: "instanceRoles.option.create",
	Manage: "instanceRoles.option.manage",
	"Manage own": "instanceRoles.option.manageOwn",
	"Manage all": "instanceRoles.option.manageAll",
	"Manage project roles": "instanceRoles.option.manageProjectRoles"
};
/**
* Per-resource label overrides. "Manage" is shared across resources, but under
* Roles it must read "Manage all roles (instance and project)" to distinguish it
* from "Manage project roles".
*/
var INSTANCE_OPTION_LABEL_OVERRIDES = { role: { Manage: "instanceRoles.option.manageAllRoles" } };
/** Display order of options within a resource group. */
var INSTANCE_OPTION_ORDER = [
	"View",
	"Create",
	"Manage project roles",
	"Manage",
	"Manage own",
	"Manage all"
];
var sortByOrder = (order) => (a, b) => {
	const ia = order.indexOf(a);
	const ib = order.indexOf(b);
	return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
};
/**
* Flattened, ordered structure the selector renders from: resource groups in
* display order, each with its options in display order.
*/
var INSTANCE_SCOPE_GROUP_LIST = INSTANCE_RESOURCE_ORDER.map((resource) => {
	const optionMap = GLOBAL_CUSTOM_ROLE_SCOPE_GROUPS[resource];
	const options = Object.keys(optionMap).sort(sortByOrder(INSTANCE_OPTION_ORDER)).map((key) => ({
		key,
		labelKey: INSTANCE_OPTION_LABEL_OVERRIDES[resource]?.[key] ?? INSTANCE_OPTION_LABEL_KEYS[key],
		scopes: [...optionMap[key]]
	}));
	return {
		resource,
		labelKey: INSTANCE_RESOURCE_LABEL_KEYS[resource],
		options
	};
});
var ALL_INSTANCE_SCOPES = [...new Set(INSTANCE_SCOPE_GROUP_LIST.flatMap((g) => g.options.flatMap((o) => o.scopes)))];
/**
* Declares when one option is visually superseded by another within the same
* resource group. If the superseding option is fully checked, the superseded
* option is implied — it should render as disabled ✔︎ with an explanatory
* tooltip rather than as an independently active selection.
*/
var SUPERSEDED_BY = {
	"Manage own": "Manage all",
	"Manage project roles": "Manage"
};
/**
* Returns true when another option in the same group is fully checked and
* supersedes this option. The caller should render implied options as disabled
* with a tooltip explaining they are included in the superseding option.
*/
function isOptionImplied(option, groupOptions, roleScopes) {
	const supersededByKey = SUPERSEDED_BY[option.key];
	if (!supersededByKey) return false;
	const superseding = groupOptions.find((o) => o.key === supersededByKey);
	return !!superseding && getOptionState(roleScopes, superseding.scopes) === "checked";
}
/**
* Resolve how an option should render against a saved flat scope list.
* - all of the option's scopes present -> checked
* - some but not all present          -> indeterminate (e.g. system-role presets
*                                         or API-created roles that carry a partial subset)
* - none present                      -> unchecked
*/
function getOptionState(scopes, optionScopes) {
	const present = optionScopes.filter((scope) => scopes.includes(scope)).length;
	if (present === 0) return "unchecked";
	if (present === optionScopes.length) return "checked";
	return "indeterminate";
}
/**
* When option A is a strict superset of option B (B is superseded by A), and B
* is fully checked, A will appear indeterminate via raw scope arithmetic because
* B's scopes are already present. That indeterminate is misleading — the user
* selected B only, not A. This function returns 'unchecked' in that case.
*
* The guard only fires when a sub-option is *fully* checked, so genuine partial
* selections (e.g. API-created roles with an arbitrary subset) still show
* indeterminate correctly.
*/
function resolveOptionState(option, groupOptions, roleScopes) {
	const base = getOptionState(roleScopes, option.scopes);
	if (base !== "indeterminate") return base;
	const fullyCheckedSubScopes = new Set(groupOptions.filter((other) => SUPERSEDED_BY[other.key] === option.key && getOptionState(roleScopes, other.scopes) === "checked").flatMap((o) => o.scopes));
	if (fullyCheckedSubScopes.size === 0) return base;
	return option.scopes.filter((s) => roleScopes.includes(s)).every((s) => fullyCheckedSubScopes.has(s)) ? "unchecked" : base;
}
/**
* Toggle an option on the saved flat scope list. Adds the option's full resolved
* scope set when it is not already fully checked (unchecked or indeterminate),
* otherwise removes the full set. Returns a new array; input is not mutated.
*/
function toggleOption(scopes, optionScopes) {
	const fullyChecked = optionScopes.every((scope) => scopes.includes(scope));
	const next = new Set(scopes);
	for (const scope of optionScopes) if (fullyChecked) next.delete(scope);
	else next.add(scope);
	return [...next];
}
/** Resource groups whose scopes enable privilege escalation, with the warning to show. */
var ESCALATION_WARNING_SCOPES = {
	user: {
		scopes: [...GLOBAL_CUSTOM_ROLE_SCOPE_GROUPS.user.Manage],
		messageKey: "instanceRoles.warning.manageMembers"
	},
	role: {
		scopes: ["role:manage"],
		messageKey: "instanceRoles.warning.manageRoles"
	}
};
/** Warning i18n key for a resource group given the current scopes, or undefined. */
function getEscalationWarningKey(resource, scopes) {
	const cfg = ESCALATION_WARNING_SCOPES[resource];
	return cfg?.scopes.some((s) => scopes.includes(s)) ? cfg.messageKey : void 0;
}
/** Total number of permission options shown in the instance role editor. */
var TOTAL_INSTANCE_PERMISSIONS = INSTANCE_SCOPE_GROUP_LIST.reduce((sum, group) => sum + group.options.length, 0);
/** Count how many permission options a saved flat scope list fully grants. */
function countGrantedInstancePermissions(scopes) {
	let count = 0;
	for (const group of INSTANCE_SCOPE_GROUP_LIST) for (const option of group.options) if (getOptionState(scopes, option.scopes) === "checked") count++;
	return count;
}
//#endregion
export { countGrantedInstancePermissions as a, resolveOptionState as c, TOTAL_INSTANCE_PERMISSIONS as i, toggleOption as l, INSTANCE_SCOPE_GROUP_LIST as n, getEscalationWarningKey as o, SUPERSEDED_BY as r, isOptionImplied as s, ALL_INSTANCE_SCOPES as t };
