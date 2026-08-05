import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { i as defineStore, t as STORES } from "./constants-_KyxTaQQ.js";
import { ga as hasScope } from "./src-32cSG5_t.js";
//#region ../@n8n/stores/src/rbac.store.ts
var useRBACStore = defineStore(STORES.RBAC, () => {
	const globalRoles = ref([]);
	const rolesByProjectId = ref({});
	const globalScopes = ref([]);
	const scopesByProjectId = ref({});
	const scopesByResourceId = ref({
		agent: {},
		aiAssistant: {},
		workflow: {},
		tag: {},
		annotationTag: {},
		user: {},
		credential: {},
		variable: {},
		projectVariable: {},
		sourceControl: {},
		externalSecretsProvider: {},
		externalSecret: {},
		project: {},
		orchestration: {},
		workersView: {},
		eventBusDestination: {},
		auditLogs: {},
		banner: {},
		community: {},
		communityPackage: {},
		ldap: {},
		license: {},
		logStreaming: {},
		saml: {},
		oidc: {},
		provisioning: {},
		securityAudit: {},
		folder: {},
		insights: {},
		dataTable: {},
		execution: {},
		testRun: {},
		workflowTags: {},
		role: {},
		mcp: {},
		mcpApiKey: {},
		chatHub: {},
		chatHubAgent: {},
		breakingChanges: {},
		apiKey: {},
		encryptionKey: {},
		credentialResolver: {},
		instanceAi: {},
		securitySettings: {},
		roleMappingRule: {},
		otel: {}
	});
	function addGlobalRole(role) {
		if (!globalRoles.value.includes(role)) globalRoles.value.push(role);
	}
	function hasRole(role) {
		return globalRoles.value.includes(role);
	}
	function addGlobalScope(scope) {
		if (!globalScopes.value.includes(scope)) globalScopes.value.push(scope);
	}
	function setGlobalScopes(scopes) {
		globalScopes.value = scopes;
	}
	function addProjectScope(scope, context) {
		if (!scopesByProjectId.value[context.projectId]) scopesByProjectId.value[context.projectId] = [];
		if (!scopesByProjectId.value[context.projectId].includes(scope)) scopesByProjectId.value[context.projectId].push(scope);
	}
	function addResourceScope(scope, context) {
		const scopesByResourceType = scopesByResourceId.value[context.resourceType];
		if (!scopesByResourceType[context.resourceId]) scopesByResourceType[context.resourceId] = [];
		if (!scopesByResourceType[context.resourceId].includes(scope)) scopesByResourceType[context.resourceId].push(scope);
	}
	function hasScope$1(scope, context, options) {
		return hasScope(scope, {
			global: globalScopes.value,
			project: context?.projectId ? scopesByProjectId.value[context.projectId] : [],
			resource: context?.resourceType && context?.resourceId ? scopesByResourceId.value[context.resourceType][context.resourceId] : []
		}, void 0, options);
	}
	return {
		globalRoles,
		rolesByProjectId,
		globalScopes,
		scopesByProjectId,
		scopesByResourceId,
		addGlobalRole,
		hasRole,
		addGlobalScope,
		setGlobalScopes,
		addProjectScope,
		addResourceScope,
		hasScope: hasScope$1
	};
});
//#endregion
export { useRBACStore as t };
