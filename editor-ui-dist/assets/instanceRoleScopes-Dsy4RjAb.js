//#region src/features/roles/instance/instanceRoleScopes.ts
var INSTANCE_SCOPE_GROUPS = {
	settings: { Manage: [
		"securitySettings:manage",
		"credentialResolver:read",
		"credentialResolver:list",
		"credentialResolver:create",
		"credentialResolver:update",
		"credentialResolver:delete",
		"sourceControl:manage",
		"externalSecretsProvider:list",
		"externalSecretsProvider:update",
		"saml:manage",
		"logStreaming:manage",
		"ldap:manage",
		"otel:manage"
	] },
	user: { Manage: [
		"user:create",
		"user:update",
		"user:delete",
		"user:changeRole",
		"user:resetPassword",
		"user:generateInviteLink",
		"user:enforceMfa",
		"user:read",
		"user:list"
	] },
	role: { Manage: ["role:read", "role:manage"] },
	apiKey: {
		"Manage own": [
			"apiKey:create",
			"apiKey:list",
			"apiKey:delete",
			"apiKey:update"
		],
		"Manage all": [
			"apiKey:create",
			"apiKey:list",
			"apiKey:delete",
			"apiKey:update",
			"apiKey:manage"
		]
	},
	tag: {
		View: ["tag:read", "tag:list"],
		Manage: [
			"tag:create",
			"tag:update",
			"tag:delete"
		]
	},
	project: { Create: ["project:create"] },
	insights: { View: ["insights:read", "insights:list"] }
};
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
	"Manage all": "instanceRoles.option.manageAll"
};
/** Display order of options within a resource group. */
var INSTANCE_OPTION_ORDER = [
	"View",
	"Create",
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
	const optionMap = INSTANCE_SCOPE_GROUPS[resource];
	const options = Object.keys(optionMap).sort(sortByOrder(INSTANCE_OPTION_ORDER)).map((key) => ({
		key,
		labelKey: INSTANCE_OPTION_LABEL_KEYS[key],
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
/** Total number of permission options shown in the instance role editor. */
var TOTAL_INSTANCE_PERMISSIONS = INSTANCE_SCOPE_GROUP_LIST.reduce((sum, group) => sum + group.options.length, 0);
/** Count how many permission options a saved flat scope list fully grants. */
function countGrantedInstancePermissions(scopes) {
	let count = 0;
	for (const group of INSTANCE_SCOPE_GROUP_LIST) for (const option of group.options) if (getOptionState(scopes, option.scopes) === "checked") count++;
	return count;
}
//#endregion
export { getOptionState as a, countGrantedInstancePermissions as i, INSTANCE_SCOPE_GROUP_LIST as n, toggleOption as o, TOTAL_INSTANCE_PERMISSIONS as r, ALL_INSTANCE_SCOPES as t };
