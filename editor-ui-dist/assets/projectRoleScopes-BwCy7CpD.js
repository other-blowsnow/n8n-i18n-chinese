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
		"unpublish",
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
const UI_VISIBLE_SCOPES = new Set(Object.values(SCOPES).flat());
const TOTAL_PROJECT_PERMISSIONS = UI_VISIBLE_SCOPES.size;
export { UI_VISIBLE_SCOPES as i, SCOPE_TYPES as n, TOTAL_PROJECT_PERMISSIONS as r, SCOPES as t };
