import { Mi as BINARY_MODE_SEPARATE, ai as NodeConnectionTypes, qi as MICROSOFT_AGENT365_TRIGGER_NODE_TYPE, vt as DATA_TABLE_COLUMN_REGEX } from "./src-32cSG5_t.js";
import "./durations-CNO5pC2_.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
//#region src/app/constants/actions.ts
var WORKFLOW_MENU_ACTIONS = /* @__PURE__ */ function(WORKFLOW_MENU_ACTIONS) {
	WORKFLOW_MENU_ACTIONS["DUPLICATE"] = "duplicate";
	WORKFLOW_MENU_ACTIONS["DOWNLOAD"] = "download";
	WORKFLOW_MENU_ACTIONS["IMPORT_FROM_URL"] = "import-from-url";
	WORKFLOW_MENU_ACTIONS["IMPORT_FROM_FILE"] = "import-from-file";
	WORKFLOW_MENU_ACTIONS["PUSH"] = "push";
	WORKFLOW_MENU_ACTIONS["EDIT_DESCRIPTION"] = "edit-description";
	WORKFLOW_MENU_ACTIONS["SETTINGS"] = "settings";
	WORKFLOW_MENU_ACTIONS["DELETE"] = "delete";
	WORKFLOW_MENU_ACTIONS["ARCHIVE"] = "archive";
	WORKFLOW_MENU_ACTIONS["UNARCHIVE"] = "unarchive";
	WORKFLOW_MENU_ACTIONS["RENAME"] = "rename";
	WORKFLOW_MENU_ACTIONS["CHANGE_OWNER"] = "change-owner";
	WORKFLOW_MENU_ACTIONS["UNPUBLISH"] = "unpublish";
	WORKFLOW_MENU_ACTIONS["SHARE"] = "share";
	WORKFLOW_MENU_ACTIONS["FAVORITE"] = "favorite";
	return WORKFLOW_MENU_ACTIONS;
}({});
//#endregion
//#region src/app/constants/ai.ts
var ASK_AI_LOADING_DURATION_MS = 12e3;
var AI_NODES_PACKAGE_NAME = "@n8n/n8n-nodes-langchain";
//#endregion
//#region src/app/constants/auth.ts
var MAIN_AUTH_FIELD_NAME = "authentication";
var MFA_FORM = {
	MFA_TOKEN: "MFA_TOKEN",
	MFA_RECOVERY_CODE: "MFA_RECOVERY_CODE"
};
//#endregion
//#region src/app/constants/curl.ts
var CURL_IMPORT_NOT_SUPPORTED_PROTOCOLS = [
	"ftp",
	"ftps",
	"dict",
	"imap",
	"imaps",
	"ldap",
	"ldaps",
	"mqtt",
	"pop",
	"pop3s",
	"rtmp",
	"rtsp",
	"scp",
	"sftp",
	"smb",
	"smbs",
	"smtp",
	"smtps",
	"telnet",
	"tftp"
];
var CURL_IMPORT_NODES_PROTOCOLS = {
	ftp: "FTP",
	ftps: "FTP",
	ldap: "LDAP",
	ldaps: "LDAP",
	mqtt: "MQTT",
	imap: "IMAP",
	imaps: "IMAP"
};
//#endregion
//#region src/app/constants/enterprise.ts
var EnterpriseEditionFeature = {
	AdvancedExecutionFilters: "advancedExecutionFilters",
	Sharing: "sharing",
	Ldap: "ldap",
	LogStreaming: "logStreaming",
	Variables: "variables",
	Saml: "saml",
	Oidc: "oidc",
	EnforceMFA: "mfaEnforcement",
	SourceControl: "sourceControl",
	ExternalSecrets: "externalSecrets",
	AuditLogs: "auditLogs",
	DebugInEditor: "debugInEditor",
	WorkerView: "workerView",
	AdvancedPermissions: "advancedPermissions",
	NamedVersions: "namedVersions",
	Provisioning: "provisioning",
	PersonalSpacePolicy: "personalSpacePolicy",
	CustomRoles: "customRoles",
	DataRedaction: "dataRedaction",
	WorkflowReviews: "workflowReviews"
};
//#endregion
//#region src/app/constants/experiments.ts
function createExperiment(name, variants) {
	return {
		name,
		...variants ?? {
			control: "control",
			variant: "variant"
		}
	};
}
var CANVAS_ZOOMED_VIEW_EXPERIMENT = createExperiment("canvas_zoomed_view");
var NDV_IN_FOCUS_PANEL_EXPERIMENT = createExperiment("ndv_in_focus_panel");
var EXTRA_TEMPLATE_LINKS_EXPERIMENT = createExperiment("034_extra_template_links");
var TEMPLATE_ONBOARDING_EXPERIMENT = createExperiment("035_template_onboarding", {
	control: "control",
	variantStarterPack: "variant-starter-pack",
	variantSuggestedTemplates: "variant-suggested-templates"
});
var BATCH_11AUG_EXPERIMENT = createExperiment("37_onboarding_experiments_batch_aug11", {
	control: "control",
	variantReadyToRun: "variant-ready-to-run-workflows",
	variantReadyToRun2: "variant-ready-to-run-workflows_v2",
	variantReadyToRun3: "variant-ready-to-run-workflows_v3"
});
var TEMPLATE_RECO_V2 = createExperiment("039_template_onboarding_v2");
createExperiment("042_ready-to-run-worfklow_v2", {
	control: "control",
	variant1: "variant-1-singlebox",
	variant2: "variant-2-twoboxes"
});
var READY_TO_RUN_V2_P3_EXPERIMENT = createExperiment("059_ready-to-run-worfklow_v2-3", {
	control: "control",
	variant5: "variant-5",
	variant6: "variant-6"
});
var PERSONALIZED_TEMPLATES_V3 = createExperiment("044_template_reco_v3");
var COLLECTION_OVERHAUL_EXPERIMENT = createExperiment("048_collection_overhaul");
var TEMPLATE_SETUP_EXPERIENCE = createExperiment("055_template_setup_experience");
var AI_BUILDER_PLAN_MODE_EXPERIMENT = createExperiment("073_builder_plan_mode");
var AI_BUILDER_REVIEW_CHANGES_EXPERIMENT = createExperiment("075_ai_builder_review_changes");
var MERGE_ASK_BUILD_EXPERIMENT = createExperiment("076_merge_ask_build");
var EXECUTION_LOGIC_V2_EXPERIMENT = {
	name: "062_execution_logic_v2",
	control: "control",
	variant: "variant"
};
var CREDENTIALS_APP_SELECTION_EXPERIMENT = createExperiment("065_credentials_app_selection");
var FOCUSED_NODES_EXPERIMENT = createExperiment("064_focused_nodes");
var RESOURCE_CENTER_EXPERIMENT = createExperiment("063_resource_center_1");
var SIDEBAR_EXPANDED_EXPERIMENT = createExperiment("067_sidebar_expanded");
var SETUP_PANEL = createExperiment("069_setup_panel", {
	control: "control",
	variant: "variant"
});
var CODE_WORKFLOW_BUILDER_EXPERIMENT = createExperiment("071_coding_workflow_builder", {
	control: "control",
	codeNoPinData: "code-no-pin-data",
	codePinData: "code-pin-data"
});
var AI_BUILDER_SETUP_WIZARD_EXPERIMENT = createExperiment("079_ai_builder_setup_wizard");
var WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT = createExperiment("086_workflow_card_mcp_toggle");
var INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT = createExperiment("082_instance_ai_proactive_agent");
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT = createExperiment("085_instance_ai_prompt_suggestions_v2");
var AA_EXPERIMENT_CHECK = createExperiment("078_experiment_check_aa");
var CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT = createExperiment("077_chat_hub_semantic_search");
var FLOATING_CHAT_HUB_PANEL_EXPERIMENT = createExperiment("078_floating_chat_hub_panel");
var SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT = createExperiment("081_surface_mcp_to_new_cloud_users", {
	control: "control",
	variant1: "variant-1",
	variant2: "variant-2"
});
var EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT = createExperiment("088_config_evaluations");
var INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_EXPERIMENT = createExperiment("087_instance_ai_workflow_preview_suggestions");
var INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT = createExperiment("093_instance_ai_personalized_prompt_suggestions", {
	control: "control",
	variantCards: "variant-cards",
	variantList: "variant-list"
});
var INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT = createExperiment("089_instance_ai_mcp_connections");
var INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT = createExperiment("089_instance_ai_split_empty_state");
var INSTANCE_AI_BROWSER_USE_EXPERIMENT = createExperiment("090_instance_ai_browser_use");
var INSTANCE_AI_COMPUTER_USE_EXPERIMENT = createExperiment("091_instance_ai_computer_use");
var INSTANCE_AI_TEMPLATE_EXAMPLES_EXPERIMENT = createExperiment("092_instance_ai_template_examples");
var INSTANCE_AI_BROWSER_CREDENTIAL_SETUP_EXPERIMENT = createExperiment("094_instance_ai_browser_credential_setup");
var EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT = createExperiment("095_expose_all_workflows_to_mcp");
var ENHANCED_HITL_SLACK_EXPERIMENT = createExperiment("096_enhanced_hitl_slack");
var ENHANCED_HITL_TELEGRAM_EXPERIMENT = createExperiment("097_enhanced_hitl_telegram");
var N8N_CREDITS_CREDENTIAL_SELECTION_EXPERIMENT = createExperiment("100_n8n_credits_credential_selection");
var EXPERIMENTS_TO_TRACK = [
	EXTRA_TEMPLATE_LINKS_EXPERIMENT.name,
	TEMPLATE_ONBOARDING_EXPERIMENT.name,
	BATCH_11AUG_EXPERIMENT.name,
	TEMPLATE_RECO_V2.name,
	READY_TO_RUN_V2_P3_EXPERIMENT.name,
	AI_BUILDER_PLAN_MODE_EXPERIMENT.name,
	TEMPLATE_SETUP_EXPERIENCE.name,
	RESOURCE_CENTER_EXPERIMENT.name,
	EXECUTION_LOGIC_V2_EXPERIMENT.name,
	COLLECTION_OVERHAUL_EXPERIMENT.name,
	CREDENTIALS_APP_SELECTION_EXPERIMENT.name,
	SIDEBAR_EXPANDED_EXPERIMENT.name,
	SETUP_PANEL.name,
	CODE_WORKFLOW_BUILDER_EXPERIMENT.name,
	FOCUSED_NODES_EXPERIMENT.name,
	AI_BUILDER_REVIEW_CHANGES_EXPERIMENT.name,
	MERGE_ASK_BUILD_EXPERIMENT.name,
	AI_BUILDER_SETUP_WIZARD_EXPERIMENT.name,
	WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT.name,
	INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.name,
	INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT.name,
	AA_EXPERIMENT_CHECK.name,
	CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.name,
	FLOATING_CHAT_HUB_PANEL_EXPERIMENT.name,
	SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.name,
	EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.name,
	INSTANCE_AI_WORKFLOW_PREVIEW_SUGGESTIONS_EXPERIMENT.name,
	INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name,
	INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT.name,
	INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT.name,
	INSTANCE_AI_BROWSER_USE_EXPERIMENT.name,
	INSTANCE_AI_COMPUTER_USE_EXPERIMENT.name,
	INSTANCE_AI_TEMPLATE_EXAMPLES_EXPERIMENT.name,
	INSTANCE_AI_BROWSER_CREDENTIAL_SETUP_EXPERIMENT.name,
	EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.name,
	ENHANCED_HITL_SLACK_EXPERIMENT.name,
	ENHANCED_HITL_TELEGRAM_EXPERIMENT.name,
	N8N_CREDITS_CREDENTIAL_SELECTION_EXPERIMENT.name
];
//#endregion
//#region src/app/constants/injectionKeys.ts
var WorkflowIdKey = "workflowId";
var CanvasKey = "canvas";
var CanvasNodeKey = "canvasNode";
var CanvasNodeHandleKey = "canvasNodeHandle";
var ExpressionLocalResolveContextSymbol = Symbol("ExpressionLocalResolveContext");
var TelemetryContextSymbol = Symbol("TelemetryContext");
var WorkflowDocumentStoreKey = Symbol("WorkflowDocumentStore");
var CanvasRenderDataKey = Symbol("CanvasRenderData");
/**
* Opts resource-locator dropdowns into teleporting to `<body>`. Defaults to
* `false` (stay in the local stacking context, e.g. inside the NDV dialog).
* Hosts that render parameters inside a scroll container overlaid by sticky
* elements (e.g. the Instance AI workflow setup card above the chat input)
* provide `true` so the dropdown isn't painted underneath those overlays.
*/
var ResourceLocatorDropdownTeleportedKey = Symbol("ResourceLocatorDropdownTeleported");
var ChatHubToolContextKey = Symbol("ChatHubToolContext");
var AiBuilderScrollToBottomKey = Symbol("ChatScrollToBottom");
var EditorEnabledFeaturesKey = Symbol("EditorEnabledFeatures");
//#endregion
//#region src/app/constants/limits.ts
var MAX_DISPLAY_DATA_SIZE = 1024 * 1024;
var MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW = 1024 * 1024 * 4;
var MAX_DISPLAY_DATA_SIZE_LOGS_VIEW = 1024 * 512;
//#endregion
//#region src/app/constants/localStorage.ts
var LOCAL_STORAGE_ACTIVATION_FLAG = "N8N_HIDE_ACTIVATION_ALERT";
var LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG = "N8N_PIN_DATA_DISCOVERY_NDV";
var LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG = "N8N_PIN_DATA_DISCOVERY_CANVAS";
var LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH = "N8N_MAIN_PANEL_RELATIVE_WIDTH";
var LOCAL_STORAGE_THEME = "N8N_THEME";
var LOCAL_STORAGE_EXPERIMENT_OVERRIDES = "N8N_EXPERIMENT_OVERRIDES";
var LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON = "N8N_HIDE_HIDE_GITHUB_STAR_BUTTON";
var LOCAL_STORAGE_LOGS_PANEL_OPEN = "N8N_LOGS_PANEL_OPEN";
var LOCAL_STORAGE_LOGS_SYNC_SELECTION = "N8N_LOGS_SYNC_SELECTION_ENABLED";
var LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL = "N8N_LOGS_DETAILS_PANEL";
var LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE = "N8N_LOGS_DETAILS_PANEL_SUB_NODE";
var LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY = "N8N_WORKFLOWS_LIST_PREFERENCES";
var LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES = "N8N_READ_WHATS_NEW_ARTICLES";
var LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT = "N8N_DISMISSED_WHATS_NEW_CALLOUT";
var LOCAL_STORAGE_FOCUS_PANEL = "N8N_FOCUS_PANEL";
var LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS = "N8N_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS";
var LOCAL_STORAGE_DATA_WORKER = "N8N_DATA_WORKER";
var LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL = (userId) => `${userId}_N8N_CHAT_HUB_SELECTED_MODEL`;
var LOCAL_STORAGE_CHAT_HUB_CREDENTIALS = (userId) => `${userId}_N8N_CHAT_HUB_CREDENTIALS`;
var LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS = (userId) => `${userId}_N8N_AGENT_MODEL_CREDENTIALS`;
var LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE = (userId) => `${userId}_N8N_CHAT_HUB_HAD_CONVERSATION_BEFORE`;
var LOCAL_STORAGE_SIDEBAR_WIDTH = "N8N_SIDEBAR_WIDTH";
var LOCAL_STORAGE_BROWSER_NOTIFICATION_METADATA = "N8N_BROWSER_NOTIFICATION_METADATA";
var LOCAL_STORAGE_FLOATING_CHAT_WINDOW = "N8N_FLOATING_CHAT_WINDOW";
var LOCAL_STORAGE_PARALLEL_EVAL_BY_WORKFLOW = "N8N_PARALLEL_EVAL_BY_WORKFLOW";
var LOCAL_STORAGE_WORKFLOW_REVIEW_REQUIRED_BY_WORKFLOW = (userId) => `${userId}_N8N_WORKFLOW_REVIEW_REQUIRED_BY_WORKFLOW`;
var LOCAL_STORAGE_WORKFLOW_REVIEW_PUBLISH_CHOICE_HIDDEN = (userId) => `${userId}_N8N_WORKFLOW_REVIEW_PUBLISH_CHOICE_HIDDEN`;
var LOCAL_STORAGE_WORKFLOW_REVIEW_SUBMITTED_DIALOG_HIDDEN = (userId) => `${userId}_N8N_WORKFLOW_REVIEW_SUBMITTED_DIALOG_HIDDEN`;
var LOCAL_STORAGE_EVALUATIONS_CANVAS_INFO_CARD_DISMISSED = "N8N_EVALUATIONS_CANVAS_INFO_CARD_DISMISSED";
var LOCAL_STORAGE_CANVAS_GROUP_EXPANDED = "N8N_CANVAS_GROUP_EXPANDED";
var LOCAL_STORAGE_CANVAS_GROUP_DESCRIPTION_PINNED = "N8N_CANVAS_GROUP_DESCRIPTION_PINNED";
var LOCAL_STORAGE_SKIP_DISCONNECT_CONFIRM = "N8N_SKIP_DISCONNECT_CONFIRM";
//#endregion
//#region src/app/constants/modals.ts
var MODAL_CANCEL = "cancel";
var MODAL_CONFIRM = "confirm";
var MODAL_CLOSE = "close";
var ABOUT_MODAL_KEY = "about";
var CHAT_EMBED_MODAL_KEY = "chatEmbed";
var CHANGE_PASSWORD_MODAL_KEY = "changePassword";
var CONFIRM_PASSWORD_MODAL_KEY = "confirmPassword";
var DUPLICATE_MODAL_KEY = "duplicate";
var IMPORT_WORKFLOW_URL_MODAL_KEY = "importWorkflowUrl";
var VERSIONS_MODAL_KEY = "versions";
var WORKFLOW_SETTINGS_MODAL_KEY = "settings";
var WORKFLOW_SHARE_MODAL_KEY = "workflowShare";
var NPS_SURVEY_MODAL_KEY = "npsSurvey";
var WORKFLOW_ACTIVE_MODAL_KEY = "activation";
var IMPORT_CURL_MODAL_KEY = "importCurl";
var LOG_STREAM_MODAL_KEY = "settingsLogStream";
var MFA_SETUP_MODAL_KEY = "mfaSetup";
var PROMPT_MFA_CODE_MODAL_KEY = "promptMfaCode";
var WORKFLOW_HISTORY_VERSION_RESTORE = "workflowHistoryVersionRestore";
var WORKFLOW_HISTORY_VERSION_UNPUBLISH = "workflowHistoryVersionUnpublish";
var WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY = "workflowHistoryNameVersion";
var SETUP_CREDENTIALS_MODAL_KEY = "setupCredentials";
var NEW_ASSISTANT_SESSION_MODAL = "newAssistantSession";
var EXTERNAL_SECRETS_PROVIDER_MODAL_KEY = "externalSecretsProvider";
var SECRETS_PROVIDER_CONNECTION_MODAL_KEY = "secretsProviderConnection";
var DELETE_SECRETS_PROVIDER_MODAL_KEY = "deleteSecretsProvider";
var WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY = "workflowActivationConflictingWebhook";
var FROM_AI_PARAMETERS_MODAL_KEY = "fromAiParameters";
var STOP_MANY_EXECUTIONS_MODAL_KEY = "stopManyExecutions";
var WORKFLOW_EXTRACTION_NAME_MODAL_KEY = "workflowExtractionName";
var WHATS_NEW_MODAL_KEY = "whatsNew";
var WORKFLOW_DIFF_MODAL_KEY = "workflowDiff";
var AI_GATEWAY_TOP_UP_MODAL_KEY = "aiGatewayTopUp";
var EXPERIMENT_TEMPLATE_RECO_V2_KEY = "templateRecoV2";
var EXPERIMENT_TEMPLATE_RECO_V3_KEY = "templateRecoV3";
var BINARY_DATA_VIEW_MODAL_KEY = "binaryDataView";
var WORKFLOW_DESCRIPTION_MODAL_KEY = "workflowDescription";
var WORKFLOW_PUBLISH_MODAL_KEY = "workflowPublish";
var WORKFLOW_HISTORY_PUBLISH_MODAL_KEY = "workflowHistoryPublish";
var WORKFLOW_HISTORY_DIFF_MODAL_KEY = "workflowHistoryDiff";
var CREDENTIAL_RESOLVER_EDIT_MODAL_KEY = "credentialResolverEdit";
var AI_BUILDER_DIFF_MODAL_KEY = "aiBuilderDiff";
var INSTANCE_AI_CREDENTIAL_SETUP_MODAL_KEY = "instanceAiCredentialSetup";
var INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY = "instanceAiComputerUseSetup";
var INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY = "instanceAiBrowserUseSetup";
var INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY = "instanceAiToolsConnection";
var AGENT_CONFIRMATION_MODAL_KEY = "agentConfirmation";
var ADD_EXECUTION_TO_DATASET_MODAL_KEY = "addExecutionToDataset";
//#endregion
//#region src/app/constants/navigation.ts
var EDITABLE_CANVAS_VIEWS = [
	VIEWS.WORKFLOW,
	VIEWS.NEW_WORKFLOW,
	VIEWS.EXECUTION_DEBUG
];
var MAIN_HEADER_TABS = /* @__PURE__ */ function(MAIN_HEADER_TABS) {
	MAIN_HEADER_TABS["WORKFLOW"] = "workflow";
	MAIN_HEADER_TABS["EXECUTIONS"] = "executions";
	MAIN_HEADER_TABS["SETTINGS"] = "settings";
	MAIN_HEADER_TABS["EVALUATION"] = "evaluation";
	return MAIN_HEADER_TABS;
}({});
/** Query parameter value used to deep-link to the publish timeline tab in workflow history */
var WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB = "publishTimeline";
//#endregion
//#region src/features/ai/shared/agentsChat/constants.ts
/**
* Status of an assistant message during/after streaming.
* Used by `useAgentChatStream`, `agentChatMessages`, and templates.
*/
var CHAT_MESSAGE_STATUS = {
	STREAMING: "streaming",
	SUCCESS: "success",
	ERROR: "error",
	AWAITING_USER: "awaitingUser"
};
/**
* Lifecycle of a single tool-call as the agent runs.
* `pending` → `running` → `done|error`, or `running` → `suspended` → `done`.
*/
var TOOL_CALL_STATE = {
	PENDING: "pending",
	RUNNING: "running",
	SUSPENDED: "suspended",
	DONE: "done",
	CANCELLED: "cancelled",
	ERROR: "error"
};
//#endregion
//#region src/features/agents/constants.ts
var AGENTS_LIST_VIEW = "AgentsListView";
var NEW_AGENT_VIEW = "NewAgentView";
var AGENT_BUILDER_VIEW = "AgentBuilderView";
var AGENT_PREVIEW_VIEW = "AgentPreviewView";
var AGENT_VIEW = "AgentView";
var AGENT_SESSIONS_LIST_VIEW = "AgentSessionsListView";
var AGENT_SESSION_DETAIL_VIEW = "AgentSessionDetailView";
var PROJECT_AGENTS = "ProjectAgents";
var AGENT_BUILDER_SETTINGS_VIEW = "SettingsAgentBuilderView";
var AGENTS_MODULE_NAME = "agents";
var AGENT_TOOLS_MODAL_KEY = "agentToolsModal";
var AGENT_TOOL_CONFIG_MODAL_KEY = "agentToolConfigModal";
var AGENT_SKILL_MODAL_KEY = "agentSkillModal";
var AGENT_TASK_MODAL_KEY = "agentTaskModal";
var AGENT_SUB_AGENTS_MODAL_KEY = "agentSubAgentsModal";
var AGENT_VECTOR_STORES_MODAL_KEY = "agentVectorStoresModal";
var AGENT_JSON_IMPORT_MODAL_KEY = "agentJsonImportModal";
var AGENT_MODEL_CREDENTIAL_MODAL_KEY = "agentModelCredentialModal";
var AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE = "openAiApi";
/** Synthetic tree key for the agent executions tab. */
var EXECUTIONS_SECTION_KEY = "__executions";
/** Query-string key the builder uses to deep-link into a chat session. */
var CONTINUE_SESSION_ID_PARAM = "continueSessionId";
//#endregion
//#region src/features/core/dataTable/constants.ts
var DATA_TABLE_VIEW = "data-tables";
var PROJECT_DATA_TABLES = "project-data-tables";
var DATA_TABLE_DETAILS = "data-table-details";
var DATA_TABLE_STORE = "dataTableStore";
var ADD_ROW_ROW_ID = "__n8n_add_row__";
var DATA_TABLE_CARD_ACTIONS = {
	RENAME: "rename",
	DELETE: "delete",
	CLEAR: "clear",
	DOWNLOAD_CSV: "download-csv",
	FAVORITE: "favorite",
	IMPORT_CSV: "import-csv"
};
var ADD_DATA_TABLE_MODAL_KEY = "addDataTableModal";
var DOWNLOAD_DATA_TABLE_MODAL_KEY = "downloadDataTableModal";
var IMPORT_CSV_MODAL_KEY = "importCsvModal";
var COLUMN_NAME_REGEX = DATA_TABLE_COLUMN_REGEX;
var NULL_VALUE = "Null";
var EMPTY_VALUE = "Empty";
var MAX_CELL_DISPLAY_LENGTH = 1e4;
var DATA_TABLE_MODULE_NAME = "data-table";
var NUMBER_WITH_SPACES_REGEX = /\B(?=(\d{3})+(?!\d))/g;
var LOOSE_DATE_REGEX = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:[ T]([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2}))?)?$/;
//#endregion
//#region src/app/constants/nodeTypes.ts
var CODE_NODE_TYPE = "n8n-nodes-base.code";
var AI_CODE_NODE_TYPE = "@n8n/n8n-nodes-langchain.code";
var AI_MCP_TOOL_NODE_TYPE = "@n8n/n8n-nodes-langchain.mcpClientTool";
var WIKIPEDIA_TOOL_NODE_TYPE = "@n8n/n8n-nodes-langchain.toolWikipedia";
var CRON_NODE_TYPE = "n8n-nodes-base.cron";
var FILTER_NODE_TYPE = "n8n-nodes-base.filter";
var ERROR_TRIGGER_NODE_TYPE = "n8n-nodes-base.errorTrigger";
var EMAIL_SEND_NODE_TYPE = "n8n-nodes-base.emailSend";
var EMAIL_IMAP_NODE_TYPE = "n8n-nodes-base.emailReadImap";
var FORM_TRIGGER_NODE_TYPE = "n8n-nodes-base.formTrigger";
var HTML_NODE_TYPE = "n8n-nodes-base.html";
var HTTP_REQUEST_NODE_TYPE = "n8n-nodes-base.httpRequest";
var HTTP_REQUEST_TOOL_NODE_TYPE = "n8n-nodes-base.httpRequestTool";
var IF_NODE_TYPE = "n8n-nodes-base.if";
var INTERVAL_NODE_TYPE = "n8n-nodes-base.interval";
var MANUAL_TRIGGER_NODE_TYPE = "n8n-nodes-base.manualTrigger";
var MANUAL_CHAT_TRIGGER_NODE_TYPE = "@n8n/n8n-nodes-langchain.manualChatTrigger";
var MCP_TRIGGER_NODE_TYPE = "@n8n/n8n-nodes-langchain.mcpTrigger";
var CHAT_TRIGGER_NODE_TYPE = "@n8n/n8n-nodes-langchain.chatTrigger";
var CHAT_NODE_TYPE = "@n8n/n8n-nodes-langchain.chat";
var CHAT_TOOL_NODE_TYPE = "@n8n/n8n-nodes-langchain.chatTool";
var CHAT_HITL_TOOL_NODE_TYPE = "@n8n/n8n-nodes-langchain.chatHitlTool";
var AGENT_NODE_TYPE = "@n8n/n8n-nodes-langchain.agent";
var AGENT_TOOL_NODE_TYPE = "@n8n/n8n-nodes-langchain.agentTool";
var OPEN_AI_NODE_TYPE = "@n8n/n8n-nodes-langchain.openAi";
var OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE = "@n8n/n8n-nodes-langchain.openAi.assistant.message";
var OPEN_AI_ASSISTANT_NODE_TYPE = "@n8n/n8n-nodes-langchain.openAiAssistant";
var SIMPLE_MEMORY_NODE_TYPE = "@n8n/n8n-nodes-langchain.memoryBufferWindow";
var BASIC_CHAIN_NODE_TYPE = "@n8n/n8n-nodes-langchain.chainLlm";
var QA_CHAIN_NODE_TYPE = "@n8n/n8n-nodes-langchain.chainRetrievalQa";
var MICROSOFT_TEAMS_NODE_TYPE = "n8n-nodes-base.microsoftTeams";
var NO_OP_NODE_TYPE = "n8n-nodes-base.noOp";
var STICKY_NODE_TYPE = "n8n-nodes-base.stickyNote";
var SET_NODE_TYPE = "n8n-nodes-base.set";
var SCHEDULE_TRIGGER_NODE_TYPE = "n8n-nodes-base.scheduleTrigger";
var SLACK_NODE_TYPE = "n8n-nodes-base.slack";
var SPLIT_IN_BATCHES_NODE_TYPE = "n8n-nodes-base.splitInBatches";
var SWITCH_NODE_TYPE = "n8n-nodes-base.switch";
var TELEGRAM_NODE_TYPE = "n8n-nodes-base.telegram";
var WAIT_NODE_TYPE = "n8n-nodes-base.wait";
var WEBHOOK_NODE_TYPE = "n8n-nodes-base.webhook";
var WORKFLOW_TRIGGER_NODE_TYPE = "n8n-nodes-base.workflowTrigger";
var EXECUTE_WORKFLOW_NODE_TYPE = "n8n-nodes-base.executeWorkflow";
var EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE = "n8n-nodes-base.executeWorkflowTrigger";
var DISCORD_NODE_TYPE = "n8n-nodes-base.discord";
var EXTRACT_FROM_FILE_NODE_TYPE = "n8n-nodes-base.extractFromFile";
var CONVERT_TO_FILE_NODE_TYPE = "n8n-nodes-base.convertToFile";
var DATETIME_NODE_TYPE = "n8n-nodes-base.dateTime";
var REMOVE_DUPLICATES_NODE_TYPE = "n8n-nodes-base.removeDuplicates";
var SPLIT_OUT_NODE_TYPE = "n8n-nodes-base.splitOut";
var LIMIT_NODE_TYPE = "n8n-nodes-base.limit";
var SUMMARIZE_NODE_TYPE = "n8n-nodes-base.summarize";
var AGGREGATE_NODE_TYPE = "n8n-nodes-base.aggregate";
var MERGE_NODE_TYPE = "n8n-nodes-base.merge";
var MARKDOWN_NODE_TYPE = "n8n-nodes-base.markdown";
var XML_NODE_TYPE = "n8n-nodes-base.xml";
var CRYPTO_NODE_TYPE = "n8n-nodes-base.crypto";
var RSS_READ_NODE_TYPE = "n8n-nodes-base.rssFeedRead";
var COMPRESSION_NODE_TYPE = "n8n-nodes-base.compression";
var EDIT_IMAGE_NODE_TYPE = "n8n-nodes-base.editImage";
var SIMULATE_NODE_TYPE = "n8n-nodes-base.simulate";
var SIMULATE_TRIGGER_NODE_TYPE = "n8n-nodes-base.simulateTrigger";
var AI_TRANSFORM_NODE_TYPE = "n8n-nodes-base.aiTransform";
var FORM_NODE_TYPE = "n8n-nodes-base.form";
var RESPOND_TO_WEBHOOK_NODE_TYPE = "n8n-nodes-base.respondToWebhook";
var DATA_TABLE_NODE_TYPE = "n8n-nodes-base.dataTable";
var DATA_TABLE_TOOL_NODE_TYPE = "n8n-nodes-base.dataTableTool";
var MESSAGE_AN_AGENT_NODE_TYPE = "n8n-nodes-base.messageAnAgent";
var TIME_SAVED_NODE_TYPE = "n8n-nodes-base.timeSaved";
var CREDENTIAL_ONLY_NODE_PREFIX = "n8n-creds-base";
var CREDENTIAL_ONLY_HTTP_NODE_VERSION = 4.1;
var EXECUTABLE_TRIGGER_NODE_TYPES = [
	MANUAL_TRIGGER_NODE_TYPE,
	SCHEDULE_TRIGGER_NODE_TYPE,
	CRON_NODE_TYPE,
	INTERVAL_NODE_TYPE
];
var NON_ACTIVATABLE_TRIGGER_NODE_TYPES = [MANUAL_TRIGGER_NODE_TYPE, MANUAL_CHAT_TRIGGER_NODE_TYPE];
var DATA_TABLE_NODES = [DATA_TABLE_NODE_TYPE, DATA_TABLE_TOOL_NODE_TYPE];
var NODES_USING_CODE_NODE_EDITOR = [
	CODE_NODE_TYPE,
	AI_CODE_NODE_TYPE,
	AI_TRANSFORM_NODE_TYPE
];
var MODULE_ENABLED_NODES = [...DATA_TABLE_NODES.map((nodeType) => ({
	nodeType,
	module: DATA_TABLE_MODULE_NAME
})), {
	nodeType: MESSAGE_AN_AGENT_NODE_TYPE,
	module: AGENTS_MODULE_NAME
}];
var NODE_POSITION_CONFLICT_ALLOWLIST = [STICKY_NODE_TYPE];
var PIN_DATA_NODE_TYPES_DENYLIST = [SPLIT_IN_BATCHES_NODE_TYPE, STICKY_NODE_TYPE];
var OPEN_URL_PANEL_TRIGGER_NODE_TYPES = [
	WEBHOOK_NODE_TYPE,
	FORM_TRIGGER_NODE_TYPE,
	CHAT_TRIGGER_NODE_TYPE,
	MCP_TRIGGER_NODE_TYPE,
	MICROSOFT_AGENT365_TRIGGER_NODE_TYPE
];
var LIST_LIKE_NODE_OPERATIONS = [
	"getAll",
	"getMany",
	"read",
	"search"
];
var PRODUCTION_ONLY_TRIGGER_NODE_TYPES = [CHAT_TRIGGER_NODE_TYPE, MICROSOFT_AGENT365_TRIGGER_NODE_TYPE];
var KEEP_AUTH_IN_NDV_FOR_NODES = [
	HTTP_REQUEST_NODE_TYPE,
	HTTP_REQUEST_TOOL_NODE_TYPE,
	WEBHOOK_NODE_TYPE,
	WAIT_NODE_TYPE,
	DISCORD_NODE_TYPE,
	CHAT_TRIGGER_NODE_TYPE,
	FORM_TRIGGER_NODE_TYPE
];
var NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND = [
	FILTER_NODE_TYPE,
	SWITCH_NODE_TYPE,
	REMOVE_DUPLICATES_NODE_TYPE,
	RESPOND_TO_WEBHOOK_NODE_TYPE
];
var NOT_DUPLICATABLE_NODE_TYPES = [FORM_TRIGGER_NODE_TYPE];
var UPDATE_WEBHOOK_ID_NODE_TYPES = [FORM_TRIGGER_NODE_TYPE];
//#endregion
//#region src/app/constants/nodeCreator.ts
var TEMPLATE_CATEGORY_AI = "categories/ai";
var NODE_CREATOR_OPEN_SOURCES = {
	NO_TRIGGER_EXECUTION_TOOLTIP: "no_trigger_execution_tooltip",
	PLUS_ENDPOINT: "plus_endpoint",
	ADD_INPUT_ENDPOINT: "add_input_endpoint",
	TRIGGER_PLACEHOLDER_BUTTON: "trigger_placeholder_button",
	ADD_NODE_BUTTON: "add_node_button",
	NODE_SHORTCUT: "node_shortcut",
	NODE_CONNECTION_ACTION: "node_connection_action",
	REPLACE_NODE_ACTION: "replace_node_action",
	NODE_CONNECTION_DROP: "node_connection_drop",
	NOTICE_ERROR_MESSAGE: "notice_error_message",
	CONTEXT_MENU: "context_menu",
	ADD_EVALUATION_NODE_BUTTON: "add_evaluation_node_button",
	TEMPLATES_CALLOUT: "templates_callout",
	INSTANCE_AI: "instance_ai",
	"": ""
};
var CORE_NODES_CATEGORY = "Core Nodes";
var HUMAN_IN_THE_LOOP_CATEGORY = "HITL";
var AI_OTHERS_NODE_CREATOR_VIEW = "AI Other";
var REGULAR_NODE_CREATOR_VIEW = "Regular";
var TRIGGER_NODE_CREATOR_VIEW = "Trigger";
var OTHER_TRIGGER_NODES_SUBCATEGORY = "Other Trigger Nodes";
var TRANSFORM_DATA_SUBCATEGORY = "Data Transformation";
var FLOWS_CONTROL_SUBCATEGORY = "Flow";
var HELPERS_SUBCATEGORY = "Helpers";
var HITL_SUBCATEGORY = "Human in the Loop";
var AI_CATEGORY_AGENTS = "Agents";
var AI_CATEGORY_CHAINS = "Chains";
var AI_CATEGORY_LANGUAGE_MODELS = "Language Models";
var AI_CATEGORY_MEMORY = "Memory";
var AI_CATEGORY_OUTPUTPARSER = "Output Parsers";
var AI_CATEGORY_TOOLS = "Tools";
var AI_CATEGORY_VECTOR_STORES = "Vector Stores";
var AI_CATEGORY_RETRIEVERS = "Retrievers";
var AI_CATEGORY_EMBEDDING = "Embeddings";
var AI_CATEGORY_DOCUMENT_LOADERS = "Document Loaders";
var AI_CATEGORY_TEXT_SPLITTERS = "Text Splitters";
var AI_CATEGORY_OTHER_TOOLS = "Other Tools";
var AI_CATEGORY_ROOT_NODES = "Root Nodes";
var AI_CATEGORY_MCP_NODES = "Model Context Protocol";
var AI_CATEGORY_HUMAN_IN_THE_LOOP = HITL_SUBCATEGORY;
var AI_EVALUATION = "Evaluation";
var AI_UNCATEGORIZED_CATEGORY = "Miscellaneous";
var AI_CODE_TOOL_LANGCHAIN_NODE_TYPE = "@n8n/n8n-nodes-langchain.toolCode";
var AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE = "@n8n/n8n-nodes-langchain.toolWorkflow";
var AI_SECTION_RECOMMENDED_TOOLS = "Recommended Tools";
var REQUEST_NODE_FORM_URL = "https://n8n-community.typeform.com/to/K1fBVTZ3";
var RECOMMENDED_NODES = [DATA_TABLE_NODE_TYPE, DATA_TABLE_TOOL_NODE_TYPE];
var BETA_NODES = ["@n8n/n8n-nodes-langchain.microsoftAgent365Trigger"];
var NEW_TOOL_CATEGORIES = [AI_CATEGORY_MCP_NODES];
NodeConnectionTypes.AiTool, NodeConnectionTypes.Main;
//#endregion
//#region src/app/constants/notice.ts
var HIRING_BANNER = `
                                                                    //////
                                                                 ///////////
                                                               /////      ////
                                               ///////////////////         ////
                                             //////////////////////       ////
     ///////               ///////          ////                /////////////
  ////////////          ////////////       ////                    ///////
 ////       ////       ////       ////    ////
/////        /////////////         //////////
 /////     ////       ////       ////     ////
  ////////////          ////////////       ////           ////////
    ///////                //////           ////        /////////////
                                             /////////////        ////
                                                //////////        ////
                                                       ////      ////
                                                        ///////////
                                                          //////

Love n8n? Help us build the future of automation! https://n8n.io/careers?utm_source=n8n_user&utm_medium=console_output
`;
//#endregion
//#region src/app/constants/parameters.ts
var DATA_TYPE_ICON_MAP = {
	["string"]: "type",
	["number"]: "hash",
	["boolean"]: "square-check",
	date: "calendar",
	array: "list",
	object: "box",
	file: "file"
};
var MAPPING_PARAMS = [
	"$binary",
	"$data",
	"$env",
	"$evaluateExpression",
	"$execution",
	"$ifEmpty",
	"$input",
	"$item",
	"$jmespath",
	"$fromAI",
	"$json",
	"$node",
	"$now",
	"$parameter",
	"$parameters",
	"$position",
	"$prevNode",
	"$resumeWebhookUrl",
	"$runIndex",
	"$today",
	"$vars",
	"$workflow",
	"$nodeVersion"
];
var nonExistingJsonPath = "_!^&*";
var APPEND_ATTRIBUTION_DEFAULT_PATH = "parameters.options.appendAttribution";
var DRAG_EVENT_DATA_KEY = "nodesAndConnections";
var CUSTOM_API_CALL_KEY = "__CUSTOM_API_CALL__";
//#endregion
//#region src/app/constants/placeholders.ts
var PLACEHOLDER_FILLED_AT_EXECUTION_TIME = "[filled at execution time]";
var IN_PROGRESS_EXECUTION_ID = "__IN_PROGRESS__";
//#endregion
//#region src/app/constants/regex.ts
var VALID_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var VALID_WORKFLOW_IMPORT_URL_REGEX = /^https?:\/\/.+/i;
//#endregion
//#region src/app/constants/selectors.ts
var APP_MODALS_ELEMENT_ID = "app-modals";
var CODEMIRROR_TOOLTIP_CONTAINER_ELEMENT_ID = "cm-tooltip-container";
//#endregion
//#region src/app/constants/templates.ts
var TEMPLATES_NODES_FILTER = ["n8n-nodes-base.manualTrigger", "n8n-nodes-base.respondToWebhook"];
//#endregion
//#region src/app/constants/urls.ts
var DOCS_DOMAIN = "docs.n8n.io";
var BUILTIN_NODES_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/builtin/`;
var BUILTIN_CREDENTIALS_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/builtin/credentials/`;
var DATA_PINNING_DOCS_URL = `https://${DOCS_DOMAIN}/data/data-pinning/`;
var DATA_EDITING_DOCS_URL = `https://${DOCS_DOMAIN}/data/data-editing/`;
var SCHEMA_PREVIEW_DOCS_URL = `https://${DOCS_DOMAIN}/data/schema-preview/`;
var MFA_DOCS_URL = `https://${DOCS_DOMAIN}/user-management/two-factor-auth/`;
var NPM_PACKAGE_DOCS_BASE_URL = "https://www.npmjs.com/package/";
`${DOCS_DOMAIN}`;
var CUSTOM_NODES_DOCS_URL = `https://${DOCS_DOMAIN}/connect/create-nodes`;
var CUSTOM_ROLES_DOCS_URL = `https://${DOCS_DOMAIN}/user-management/rbac/custom-roles/`;
var END_USER_CREDENTIALS_DOCS_URL = `https://${DOCS_DOMAIN}/administer/manage-credentials/end-user-credentials`;
`${DOCS_DOMAIN}`;
var EVALUATIONS_DOCS_URL = `https://${DOCS_DOMAIN}/advanced-ai/evaluations/overview/`;
var ERROR_WORKFLOW_DOCS_URL = `https://${DOCS_DOMAIN}/flow-logic/error-handling/#create-and-set-an-error-workflow`;
var EXECUTION_DATA_REDACTION_DOCS_URL = `https://${DOCS_DOMAIN}/workflows/executions/execution-data-redaction/`;
var EXECUTION_DATA_REDACTION_ENFORCEMENT_DOCS_URL = `${EXECUTION_DATA_REDACTION_DOCS_URL}#instance-level-enforcement`;
var TIME_SAVED_DOCS_URL = `https://${DOCS_DOMAIN}/insights/#setting-the-time-saved-by-a-workflow`;
var N8N_PRICING_PAGE_URL = "https://n8n.io/pricing";
var N8N_MAIN_GITHUB_REPO_URL = "https://github.com/n8n-io/n8n";
var BASE_NODE_SURVEY_URL = "https://n8n-community.typeform.com/to/BvmzxqYv#nodename=";
var RELEASE_NOTES_URL = "https://docs.n8n.io/release-notes/";
var CHANGELOG_URL = "https://docs.n8n.io/changelog";
var CREATOR_HUB_URL = "https://creators.n8n.io/hub";
window.location.host.includes("stage-app.n8n.cloud");
/**
* Urls used to route users to the right template repository
*/
var TEMPLATES_URLS = {
	DEFAULT_API_HOST: "https://api.n8n.io/api/",
	BASE_WEBSITE_URL: "https://n8n.io/workflows/",
	UTM_QUERY: {
		utm_source: "n8n_app",
		utm_medium: "template_library"
	}
};
//#endregion
//#region src/app/constants/workflows.ts
var DEFAULT_NEW_WORKFLOW_NAME = "My workflow";
var DEFAULT_SETTINGS = {
	executionOrder: "v1",
	binaryMode: BINARY_MODE_SEPARATE
};
var DUPLICATE_POSTFFIX = " copy";
var AutoSaveState = /* @__PURE__ */ function(AutoSaveState) {
	AutoSaveState["Idle"] = "idle";
	AutoSaveState["Scheduled"] = "scheduled";
	AutoSaveState["InProgress"] = "in-progress";
	return AutoSaveState;
}({});
//#endregion
export { AI_CATEGORY_ROOT_NODES as $, INSTANCE_AI_TEMPLATE_EXAMPLES_EXPERIMENT as $a, LOCAL_STORAGE_LOGS_PANEL_OPEN as $i, XML_NODE_TYPE as $n, EXPERIMENT_TEMPLATE_RECO_V2_KEY as $r, EXTRACT_FROM_FILE_NODE_TYPE as $t, CODEMIRROR_TOOLTIP_CONTAINER_ELEMENT_ID as A, BATCH_11AUG_EXPERIMENT as Aa, WORKFLOW_HISTORY_VERSION_RESTORE as Ai, PRODUCTION_ONLY_TRIGGER_NODE_TYPES as An, AGENT_VECTOR_STORES_MODAL_KEY as Ar, BASIC_CHAIN_NODE_TYPE as At, nonExistingJsonPath as B, EXPERIMENTS_TO_TRACK as Ba, LOCAL_STORAGE_CHAT_HUB_CREDENTIALS as Bi, SLACK_NODE_TYPE as Bn, WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB as Br, CRON_NODE_TYPE as Bt, NPM_PACKAGE_DOCS_BASE_URL as C, ExpressionLocalResolveContextSymbol as Ca, WORKFLOW_ACTIVE_MODAL_KEY as Ci, NOT_DUPLICATABLE_NODE_TYPES as Cn, AGENT_SESSIONS_LIST_VIEW as Cr, TRIGGER_NODE_CREATOR_VIEW as Ct, TIME_SAVED_DOCS_URL as D, WorkflowIdKey as Da, WORKFLOW_HISTORY_DIFF_MODAL_KEY as Di, OPEN_AI_NODE_TYPE as Dn, AGENT_TASK_MODAL_KEY as Dr, AI_CODE_NODE_TYPE as Dt, TEMPLATES_URLS as E, WorkflowDocumentStoreKey as Ea, WORKFLOW_EXTRACTION_NAME_MODAL_KEY as Ei, OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE as En, AGENT_SUB_AGENTS_MODAL_KEY as Er, AGGREGATE_NODE_TYPE as Et, APPEND_ATTRIBUTION_DEFAULT_PATH as F, CREDENTIALS_APP_SELECTION_EXPERIMENT as Fa, LOCAL_STORAGE_ACTIVATION_FLAG as Fi, SCHEDULE_TRIGGER_NODE_TYPE as Fn, PROJECT_AGENTS as Fr, CODE_NODE_TYPE as Ft, AI_CATEGORY_EMBEDDING as G, INSTANCE_AI_BROWSER_CREDENTIAL_SETUP_EXPERIMENT as Ga, LOCAL_STORAGE_EVALUATIONS_CANVAS_INFO_CARD_DISMISSED as Gi, SWITCH_NODE_TYPE as Gn, AI_GATEWAY_TOP_UP_MODAL_KEY as Gr, DISCORD_NODE_TYPE as Gt, AI_CATEGORY_AGENTS as H, EXTRA_TEMPLATE_LINKS_EXPERIMENT as Ha, LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL as Hi, SPLIT_OUT_NODE_TYPE as Hn, ADD_EXECUTION_TO_DATASET_MODAL_KEY as Hr, DATA_TABLE_NODES as Ht, CUSTOM_API_CALL_KEY as I, ENHANCED_HITL_SLACK_EXPERIMENT as Ia, LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS as Ii, SET_NODE_TYPE as In, CHAT_MESSAGE_STATUS as Ir, COMPRESSION_NODE_TYPE as It, AI_CATEGORY_MCP_NODES as J, INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT as Ja, LOCAL_STORAGE_FLOATING_CHAT_WINDOW as Ji, UPDATE_WEBHOOK_ID_NODE_TYPES as Jn, CHAT_EMBED_MODAL_KEY as Jr, EMAIL_SEND_NODE_TYPE as Jt, AI_CATEGORY_HUMAN_IN_THE_LOOP as K, INSTANCE_AI_BROWSER_USE_EXPERIMENT as Ka, LOCAL_STORAGE_EXPERIMENTAL_DISMISSED_SUGGESTED_WORKFLOWS as Ki, TELEGRAM_NODE_TYPE as Kn, BINARY_DATA_VIEW_MODAL_KEY as Kr, EDIT_IMAGE_NODE_TYPE as Kt, DATA_TYPE_ICON_MAP as L, ENHANCED_HITL_TELEGRAM_EXPERIMENT as La, LOCAL_STORAGE_BROWSER_NOTIFICATION_METADATA as Li, SIMPLE_MEMORY_NODE_TYPE as Ln, TOOL_CALL_STATE as Lr, CONVERT_TO_FILE_NODE_TYPE as Lt, VALID_WORKFLOW_IMPORT_URL_REGEX as M, CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT as Ma, WORKFLOW_PUBLISH_MODAL_KEY as Mi, REMOVE_DUPLICATES_NODE_TYPE as Mn, CONTINUE_SESSION_ID_PARAM as Mr, CHAT_NODE_TYPE as Mt, IN_PROGRESS_EXECUTION_ID as N, CODE_WORKFLOW_BUILDER_EXPERIMENT as Na, WORKFLOW_SETTINGS_MODAL_KEY as Ni, RESPOND_TO_WEBHOOK_NODE_TYPE as Nn, EXECUTIONS_SECTION_KEY as Nr, CHAT_TOOL_NODE_TYPE as Nt, TEMPLATES_NODES_FILTER as O, AI_BUILDER_REVIEW_CHANGES_EXPERIMENT as Oa, WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY as Oi, OPEN_URL_PANEL_TRIGGER_NODE_TYPES as On, AGENT_TOOLS_MODAL_KEY as Or, AI_MCP_TOOL_NODE_TYPE as Ot, PLACEHOLDER_FILLED_AT_EXECUTION_TIME as P, COLLECTION_OVERHAUL_EXPERIMENT as Pa, WORKFLOW_SHARE_MODAL_KEY as Pi, RSS_READ_NODE_TYPE as Pn, NEW_AGENT_VIEW as Pr, CHAT_TRIGGER_NODE_TYPE as Pt, AI_CATEGORY_RETRIEVERS as Q, INSTANCE_AI_SPLIT_EMPTY_STATE_EXPERIMENT as Qa, LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL_SUB_NODE as Qi, WORKFLOW_TRIGGER_NODE_TYPE as Qn, DUPLICATE_MODAL_KEY as Qr, EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE as Qt, DRAG_EVENT_DATA_KEY as R, EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT as Ra, LOCAL_STORAGE_CANVAS_GROUP_DESCRIPTION_PINNED as Ri, SIMULATE_NODE_TYPE as Rn, EDITABLE_CANVAS_VIEWS as Rr, CREDENTIAL_ONLY_HTTP_NODE_VERSION as Rt, N8N_PRICING_PAGE_URL as S, EditorEnabledFeaturesKey as Sa, WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY as Si, NON_ACTIVATABLE_TRIGGER_NODE_TYPES as Sn, AGENT_PREVIEW_VIEW as Sr, TRANSFORM_DATA_SUBCATEGORY as St, SCHEMA_PREVIEW_DOCS_URL as T, TelemetryContextSymbol as Ta, WORKFLOW_DIFF_MODAL_KEY as Ti, OPEN_AI_ASSISTANT_NODE_TYPE as Tn, AGENT_SKILL_MODAL_KEY as Tr, AGENT_TOOL_NODE_TYPE as Tt, AI_CATEGORY_CHAINS as U, FLOATING_CHAT_HUB_PANEL_EXPERIMENT as Ua, LOCAL_STORAGE_DATA_WORKER as Ui, STICKY_NODE_TYPE as Un, AGENT_CONFIRMATION_MODAL_KEY as Ur, DATA_TABLE_NODE_TYPE as Ut, HIRING_BANNER as V, EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT as Va, LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE as Vi, SPLIT_IN_BATCHES_NODE_TYPE as Vn, ABOUT_MODAL_KEY as Vr, CRYPTO_NODE_TYPE as Vt, AI_CATEGORY_DOCUMENT_LOADERS as W, FOCUSED_NODES_EXPERIMENT as Wa, LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT as Wi, SUMMARIZE_NODE_TYPE as Wn, AI_BUILDER_DIFF_MODAL_KEY as Wr, DATETIME_NODE_TYPE as Wt, AI_CATEGORY_OTHER_TOOLS as X, INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT as Xa, LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON as Xi, WEBHOOK_NODE_TYPE as Xn, CREDENTIAL_RESOLVER_EDIT_MODAL_KEY as Xr, EXECUTABLE_TRIGGER_NODE_TYPES as Xt, AI_CATEGORY_MEMORY as Y, INSTANCE_AI_PERSONALIZED_PROMPT_SUGGESTIONS_EXPERIMENT as Ya, LOCAL_STORAGE_FOCUS_PANEL as Yi, WAIT_NODE_TYPE as Yn, CONFIRM_PASSWORD_MODAL_KEY as Yr, ERROR_TRIGGER_NODE_TYPE as Yt, AI_CATEGORY_OUTPUTPARSER as Z, INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT as Za, LOCAL_STORAGE_LOGS_PANEL_DETAILS_PANEL as Zi, WIKIPEDIA_TOOL_NODE_TYPE as Zn, DELETE_SECRETS_PROVIDER_MODAL_KEY as Zr, EXECUTE_WORKFLOW_NODE_TYPE as Zt, EVALUATIONS_DOCS_URL as _, CanvasKey as _a, SECRETS_PROVIDER_CONNECTION_MODAL_KEY as _i, MICROSOFT_TEAMS_NODE_TYPE as _n, MFA_FORM as _o, AGENT_BUILDER_SETTINGS_VIEW as _r, OTHER_TRIGGER_NODES_SUBCATEGORY as _t, BASE_NODE_SURVEY_URL as a, LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES as aa, INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY as ai, HTTP_REQUEST_TOOL_NODE_TYPE as an, RESOURCE_CENTER_EXPERIMENT as ao, DATA_TABLE_STORE as ar, AI_OTHERS_NODE_CREATOR_VIEW as at, MFA_DOCS_URL as b, CanvasRenderDataKey as ba, VERSIONS_MODAL_KEY as bi, NODE_POSITION_CONFLICT_ALLOWLIST as bn, WORKFLOW_MENU_ACTIONS as bo, AGENT_JSON_IMPORT_MODAL_KEY as br, REQUEST_NODE_FORM_URL as bt, CHANGELOG_URL as c, LOCAL_STORAGE_THEME as ca, INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY as ci, KEEP_AUTH_IN_NDV_FOR_NODES as cn, SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT as co, EMPTY_VALUE as cr, AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE as ct, CUSTOM_ROLES_DOCS_URL as d, LOCAL_STORAGE_WORKFLOW_REVIEW_REQUIRED_BY_WORKFLOW as da, MODAL_CANCEL as di, MANUAL_CHAT_TRIGGER_NODE_TYPE as dn, TEMPLATE_SETUP_EXPERIENCE as do, MAX_CELL_DISPLAY_LENGTH as dr, FLOWS_CONTROL_SUBCATEGORY as dt, LOCAL_STORAGE_LOGS_SYNC_SELECTION as ea, EXPERIMENT_TEMPLATE_RECO_V3_KEY as ei, FILTER_NODE_TYPE as en, MERGE_ASK_BUILD_EXPERIMENT as eo, ADD_DATA_TABLE_MODAL_KEY as er, AI_CATEGORY_TEXT_SPLITTERS as et, DATA_EDITING_DOCS_URL as f, LOCAL_STORAGE_WORKFLOW_REVIEW_SUBMITTED_DIALOG_HIDDEN as fa, MODAL_CLOSE as fi, MANUAL_TRIGGER_NODE_TYPE as fn, WORKFLOW_CARD_MCP_TOGGLE_EXPERIMENT as fo, NULL_VALUE as fr, HELPERS_SUBCATEGORY as ft, ERROR_WORKFLOW_DOCS_URL as g, AiBuilderScrollToBottomKey as ga, PROMPT_MFA_CODE_MODAL_KEY as gi, MESSAGE_AN_AGENT_NODE_TYPE as gn, MAIN_AUTH_FIELD_NAME as go, AGENTS_MODULE_NAME as gr, NODE_CREATOR_OPEN_SOURCES as gt, END_USER_CREDENTIALS_DOCS_URL as h, MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW as ha, NPS_SURVEY_MODAL_KEY as hi, MERGE_NODE_TYPE as hn, CURL_IMPORT_NOT_SUPPORTED_PROTOCOLS as ho, AGENTS_LIST_VIEW as hr, NEW_TOOL_CATEGORIES as ht, DUPLICATE_POSTFFIX as i, LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG as ia, IMPORT_WORKFLOW_URL_MODAL_KEY as ii, HTTP_REQUEST_NODE_TYPE as in, READY_TO_RUN_V2_P3_EXPERIMENT as io, DATA_TABLE_DETAILS as ir, AI_EVALUATION as it, VALID_EMAIL_REGEX as j, CANVAS_ZOOMED_VIEW_EXPERIMENT as ja, WORKFLOW_HISTORY_VERSION_UNPUBLISH as ji, QA_CHAIN_NODE_TYPE as jn, AGENT_VIEW as jr, CHAT_HITL_TOOL_NODE_TYPE as jt, APP_MODALS_ELEMENT_ID as k, AI_BUILDER_SETUP_WIZARD_EXPERIMENT as ka, WORKFLOW_HISTORY_PUBLISH_MODAL_KEY as ki, PIN_DATA_NODE_TYPES_DENYLIST as kn, AGENT_TOOL_CONFIG_MODAL_KEY as kr, AI_TRANSFORM_NODE_TYPE as kt, CREATOR_HUB_URL as l, LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY as la, LOG_STREAM_MODAL_KEY as li, LIMIT_NODE_TYPE as ln, TEMPLATE_ONBOARDING_EXPERIMENT as lo, IMPORT_CSV_MODAL_KEY as lr, BETA_NODES as lt, DOCS_DOMAIN as m, MAX_DISPLAY_DATA_SIZE_LOGS_VIEW as ma, NEW_ASSISTANT_SESSION_MODAL as mi, MCP_TRIGGER_NODE_TYPE as mn, CURL_IMPORT_NODES_PROTOCOLS as mo, PROJECT_DATA_TABLES as mr, HUMAN_IN_THE_LOOP_CATEGORY as mt, DEFAULT_NEW_WORKFLOW_NAME as n, LOCAL_STORAGE_PARALLEL_EVAL_BY_WORKFLOW as na, FROM_AI_PARAMETERS_MODAL_KEY as ni, FORM_TRIGGER_NODE_TYPE as nn, NDV_IN_FOCUS_PANEL_EXPERIMENT as no, COLUMN_NAME_REGEX as nr, AI_CATEGORY_VECTOR_STORES as nt, BUILTIN_CREDENTIALS_DOCS_URL as o, LOCAL_STORAGE_SIDEBAR_WIDTH as oa, INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY as oi, IF_NODE_TYPE as on, SETUP_PANEL as oo, DATA_TABLE_VIEW as or, AI_SECTION_RECOMMENDED_TOOLS as ot, DATA_PINNING_DOCS_URL as p, MAX_DISPLAY_DATA_SIZE as pa, MODAL_CONFIRM as pi, MARKDOWN_NODE_TYPE as pn, EnterpriseEditionFeature as po, NUMBER_WITH_SPACES_REGEX as pr, HITL_SUBCATEGORY as pt, AI_CATEGORY_LANGUAGE_MODELS as q, INSTANCE_AI_COMPUTER_USE_EXPERIMENT as qa, LOCAL_STORAGE_EXPERIMENT_OVERRIDES as qi, TIME_SAVED_NODE_TYPE as qn, CHANGE_PASSWORD_MODAL_KEY as qr, EMAIL_IMAP_NODE_TYPE as qt, DEFAULT_SETTINGS as r, LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG as ra, IMPORT_CURL_MODAL_KEY as ri, HTML_NODE_TYPE as rn, PERSONALIZED_TEMPLATES_V3 as ro, DATA_TABLE_CARD_ACTIONS as rr, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE as rt, BUILTIN_NODES_DOCS_URL as s, LOCAL_STORAGE_SKIP_DISCONNECT_CONFIRM as sa, INSTANCE_AI_CREDENTIAL_SETUP_MODAL_KEY as si, INTERVAL_NODE_TYPE as sn, SIDEBAR_EXPANDED_EXPERIMENT as so, DOWNLOAD_DATA_TABLE_MODAL_KEY as sr, AI_UNCATEGORIZED_CATEGORY as st, AutoSaveState as t, LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH as ta, EXTERNAL_SECRETS_PROVIDER_MODAL_KEY as ti, FORM_NODE_TYPE as tn, N8N_CREDITS_CREDENTIAL_SELECTION_EXPERIMENT as to, ADD_ROW_ROW_ID as tr, AI_CATEGORY_TOOLS as tt, CUSTOM_NODES_DOCS_URL as u, LOCAL_STORAGE_WORKFLOW_REVIEW_PUBLISH_CHOICE_HIDDEN as ua, MFA_SETUP_MODAL_KEY as ui, LIST_LIKE_NODE_OPERATIONS as un, TEMPLATE_RECO_V2 as uo, LOOSE_DATE_REGEX as ur, CORE_NODES_CATEGORY as ut, EXECUTION_DATA_REDACTION_DOCS_URL as v, CanvasNodeHandleKey as va, SETUP_CREDENTIALS_MODAL_KEY as vi, MODULE_ENABLED_NODES as vn, AI_NODES_PACKAGE_NAME as vo, AGENT_BUILDER_VIEW as vr, RECOMMENDED_NODES as vt, RELEASE_NOTES_URL as w, ResourceLocatorDropdownTeleportedKey as wa, WORKFLOW_DESCRIPTION_MODAL_KEY as wi, NO_OP_NODE_TYPE as wn, AGENT_SESSION_DETAIL_VIEW as wr, AGENT_NODE_TYPE as wt, N8N_MAIN_GITHUB_REPO_URL as x, ChatHubToolContextKey as xa, WHATS_NEW_MODAL_KEY as xi, NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND as xn, AGENT_MODEL_CREDENTIAL_MODAL_KEY as xr, TEMPLATE_CATEGORY_AI as xt, EXECUTION_DATA_REDACTION_ENFORCEMENT_DOCS_URL as y, CanvasNodeKey as ya, STOP_MANY_EXECUTIONS_MODAL_KEY as yi, NODES_USING_CODE_NODE_EDITOR as yn, ASK_AI_LOADING_DURATION_MS as yo, AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE as yr, REGULAR_NODE_CREATOR_VIEW as yt, MAPPING_PARAMS as z, EXECUTION_LOGIC_V2_EXPERIMENT as za, LOCAL_STORAGE_CANVAS_GROUP_EXPANDED as zi, SIMULATE_TRIGGER_NODE_TYPE as zn, MAIN_HEADER_TABS as zr, CREDENTIAL_ONLY_NODE_PREFIX as zt };
