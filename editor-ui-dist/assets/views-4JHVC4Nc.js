//#region ../@n8n/frontend-constants/dist/views.mjs
/**
* Router view identifiers, shared across the frontend.
*
* Declared as a plain `enum` (not a `const enum`) so this package's emitted
* `dist` declarations contain a regular `declare enum` backed by a real runtime
* object. A `const enum` would emit an *ambient* const enum, which downstream
* packages compiled with `isolatedModules: true` cannot read (TS2748) — and being
* consumed from `dist` across the package boundary is this package's entire
* purpose. A plain `enum` also preserves the nominal enum-member types the rest of
* the frontend relies on, so relocating `VIEWS` here is behavior-preserving.
*
* The repo's default lint bans raw enums in favor of `const enum` for runtime
* overhead; that guidance is inverted here because `const enum` is precisely what
* breaks dist consumption. The `no-restricted-syntax` rule (and the camelCase
* naming-convention rule, since view identifiers are UPPER_CASE by convention)
* are relaxed for this file in `eslint.config.mjs`.
*
* `editor-ui` re-exports this from `@/app/constants` for existing importers.
*/
var VIEWS = /* @__PURE__ */ function(VIEWS$1) {
	VIEWS$1["HOMEPAGE"] = "Homepage";
	VIEWS$1["COLLECTION"] = "TemplatesCollectionView";
	VIEWS$1["EXECUTIONS"] = "Executions";
	VIEWS$1["EXECUTION_PREVIEW"] = "ExecutionPreview";
	VIEWS$1["EXECUTION_DEBUG"] = "ExecutionDebug";
	VIEWS$1["EXECUTION_HOME"] = "ExecutionsLandingPage";
	VIEWS$1["TEMPLATE"] = "TemplatesWorkflowView";
	VIEWS$1["TEMPLATE_SETUP"] = "TemplatesWorkflowSetupView";
	VIEWS$1["TEMPLATES"] = "TemplatesSearchView";
	VIEWS$1["CREDENTIALS"] = "CredentialsView";
	VIEWS$1["NEW_WORKFLOW"] = "NodeViewNew";
	VIEWS$1["WORKFLOW"] = "NodeViewExisting";
	VIEWS$1["DEMO"] = "WorkflowDemo";
	VIEWS$1["DEMO_DIFF"] = "WorkflowDemoDiff";
	VIEWS$1["TEMPLATE_IMPORT"] = "WorkflowTemplate";
	VIEWS$1["WORKFLOW_ONBOARDING"] = "WorkflowOnboarding";
	VIEWS$1["SIGNIN"] = "SigninView";
	VIEWS$1["SIGNUP"] = "SignupView";
	VIEWS$1["SIGNOUT"] = "SignoutView";
	VIEWS$1["SETUP"] = "SetupView";
	VIEWS$1["FORGOT_PASSWORD"] = "ForgotMyPasswordView";
	VIEWS$1["CHANGE_PASSWORD"] = "ChangePasswordView";
	VIEWS$1["SETTINGS"] = "Settings";
	VIEWS$1["USERS_SETTINGS"] = "UsersSettings";
	VIEWS$1["LDAP_SETTINGS"] = "LdapSettings";
	VIEWS$1["PERSONAL_SETTINGS"] = "PersonalSettings";
	VIEWS$1["SECURITY_SETTINGS"] = "SecuritySettings";
	VIEWS$1["API_SETTINGS"] = "APISettings";
	VIEWS$1["NOT_FOUND"] = "NotFoundView";
	VIEWS$1["COMMUNITY_NODES"] = "CommunityNodes";
	VIEWS$1["WORKFLOWS"] = "WorkflowsView";
	VIEWS$1["WORKFLOW_EXECUTIONS"] = "WorkflowExecutions";
	VIEWS$1["EVALUATION"] = "Evaluation";
	VIEWS$1["EVALUATION_EDIT"] = "EvaluationEdit";
	VIEWS$1["EVALUATION_RUNS_DETAIL"] = "EvaluationRunsDetail";
	VIEWS$1["EVALUATION_COLLECTION_COMPARE"] = "EvaluationCollectionCompare";
	VIEWS$1["USAGE"] = "Usage";
	VIEWS$1["LOG_STREAMING_SETTINGS"] = "LogStreamingSettingsView";
	VIEWS$1["OPENTELEMETRY_SETTINGS"] = "SettingsOpenTelemetryView";
	VIEWS$1["SSO_SETTINGS"] = "SSoSettings";
	VIEWS$1["ENCRYPTION_KEYS_SETTINGS"] = "EncryptionKeysSettings";
	VIEWS$1["EXTERNAL_SECRETS_SETTINGS"] = "ExternalSecretsSettings";
	VIEWS$1["SAML_ONBOARDING"] = "SamlOnboarding";
	VIEWS$1["SOURCE_CONTROL"] = "SourceControl";
	VIEWS$1["MFA_VIEW"] = "MfaView";
	VIEWS$1["WORKFLOW_HISTORY"] = "WorkflowHistory";
	VIEWS$1["WORKER_VIEW"] = "WorkerView";
	VIEWS$1["PROJECTS"] = "Projects";
	VIEWS$1["PROJECT_DETAILS"] = "ProjectDetails";
	VIEWS$1["PROJECTS_WORKFLOWS"] = "ProjectsWorkflows";
	VIEWS$1["PROJECTS_CREDENTIALS"] = "ProjectsCredentials";
	VIEWS$1["PROJECT_SETTINGS"] = "ProjectSettings";
	VIEWS$1["PROJECTS_EXECUTIONS"] = "ProjectsExecutions";
	VIEWS$1["ROLES_SETTINGS"] = "RolesSettingsView";
	VIEWS$1["PROJECT_ROLES_SETTINGS"] = "ProjectRolesSettingsView";
	VIEWS$1["PROJECT_ROLE_SETTINGS"] = "ProjectRoleSettingsView";
	VIEWS$1["PROJECT_NEW_ROLE"] = "ProjectNewRoleView";
	VIEWS$1["PROJECT_ROLE_VIEW"] = "ProjectRoleViewView";
	VIEWS$1["INSTANCE_NEW_ROLE"] = "InstanceNewRoleView";
	VIEWS$1["INSTANCE_ROLE_SETTINGS"] = "InstanceRoleSettingsView";
	VIEWS$1["INSTANCE_ROLE_VIEW"] = "InstanceRoleViewView";
	VIEWS$1["PROJECTS_VARIABLES"] = "ProjectsVariables";
	VIEWS$1["HOME_VARIABLES"] = "HomeVariables";
	VIEWS$1["FOLDERS"] = "Folders";
	VIEWS$1["PROJECTS_FOLDERS"] = "ProjectsFolders";
	VIEWS$1["INSIGHTS"] = "Insights";
	VIEWS$1["SHARED_WITH_ME"] = "SharedWithMe";
	VIEWS$1["SHARED_WORKFLOWS"] = "SharedWorkflows";
	VIEWS$1["SHARED_CREDENTIALS"] = "SharedCredentials";
	VIEWS$1["ENTITY_NOT_FOUND"] = "EntityNotFound";
	VIEWS$1["ENTITY_UNAUTHORIZED"] = "EntityUnAuthorized";
	VIEWS$1["PRE_BUILT_AGENT_TEMPLATES"] = "PreBuiltAgentTemplates";
	VIEWS$1["AI_SETTINGS"] = "AISettingsView";
	VIEWS$1["AI_GATEWAY_SETTINGS"] = "AIGatewaySettingsView";
	VIEWS$1["OAUTH_CONSENT"] = "OAuthConsent";
	VIEWS$1["MIGRATION_REPORT"] = "MigrationReport";
	VIEWS$1["MIGRATION_RULE_REPORT"] = "MigrationRuleReport";
	VIEWS$1["RESOLVERS"] = "Resolvers";
	VIEWS$1["RESOURCE_CENTER"] = "ResourceCenter";
	return VIEWS$1;
}({});
//#endregion
export { VIEWS as t };
