import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { E as useStorage$1, b as useMediaQuery, y as useLocalStorage } from "./dist-CmlFwYoT.js";
import { i as defineStore } from "./constants-B-Dofn0a.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { $n as ZodNonOptional, Qn as ZodLazy, Xn as ZodCatch, Yn as ZodArray, Zn as ZodDefault, ar as ZodType, cr as array, dr as number, er as ZodNullable, fr as object, ir as ZodRecord, lr as boolean, mr as union, nr as ZodOptional, or as ZodUnion, pr as string, rr as ZodReadonly, sr as _enum, tr as ZodObject, ur as literal } from "./src-CY9eW8M_.js";
import { o as require_identity } from "./merge-yfnHZ0-X.js";
import { t as useRootStore } from "./useRootStore-B4GkZ-3x.js";
import { t as useSettingsStore } from "./settings.store-CIaGjG2x.js";
import "./settings.store-BRQXrO-E.js";
import { t as useUsersStore } from "./users.store-S3MAKAuN.js";
import { $r as EXPERIMENT_TEMPLATE_RECO_V2_KEY, Ai as WORKFLOW_HISTORY_VERSION_RESTORE, Ba as EXPERIMENTS_TO_TRACK, Bn as SLACK_NODE_TYPE, Ci as WORKFLOW_ACTIVE_MODAL_KEY, Di as WORKFLOW_HISTORY_DIFF_MODAL_KEY, Ei as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, Gr as AI_GATEWAY_TOP_UP_MODAL_KEY, Hr as ADD_EXECUTION_TO_DATASET_MODAL_KEY, Jr as CHAT_EMBED_MODAL_KEY, Kn as TELEGRAM_NODE_TYPE, Kr as BINARY_DATA_VIEW_MODAL_KEY, Mi as WORKFLOW_PUBLISH_MODAL_KEY, Ni as WORKFLOW_SETTINGS_MODAL_KEY, Oi as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, Pi as WORKFLOW_SHARE_MODAL_KEY, Qr as DUPLICATE_MODAL_KEY, Si as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, Ti as WORKFLOW_DIFF_MODAL_KEY, Ur as AGENT_CONFIRMATION_MODAL_KEY, Vr as ABOUT_MODAL_KEY, Wr as AI_BUILDER_DIFF_MODAL_KEY, Xr as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY, Yr as CONFIRM_PASSWORD_MODAL_KEY, Zr as DELETE_SECRETS_PROVIDER_MODAL_KEY, _i as SECRETS_PROVIDER_CONNECTION_MODAL_KEY, bi as VERSIONS_MODAL_KEY, ca as LOCAL_STORAGE_THEME, ci as INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY, ei as EXPERIMENT_TEMPLATE_RECO_V3_KEY, gi as PROMPT_MFA_CODE_MODAL_KEY, hi as NPS_SURVEY_MODAL_KEY, ii as IMPORT_WORKFLOW_URL_MODAL_KEY, ji as WORKFLOW_HISTORY_VERSION_UNPUBLISH, ki as WORKFLOW_HISTORY_PUBLISH_MODAL_KEY, li as LOG_STREAM_MODAL_KEY, m as DOCS_DOMAIN, mi as NEW_ASSISTANT_SESSION_MODAL, ni as FROM_AI_PARAMETERS_MODAL_KEY, oa as LOCAL_STORAGE_SIDEBAR_WIDTH, qi as LOCAL_STORAGE_EXPERIMENT_OVERRIDES, qr as CHANGE_PASSWORD_MODAL_KEY, ri as IMPORT_CURL_MODAL_KEY, si as INSTANCE_AI_CREDENTIAL_SETUP_MODAL_KEY, ti as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, ui as MFA_SETUP_MODAL_KEY, vi as SETUP_CREDENTIALS_MODAL_KEY, wi as WORKFLOW_DESCRIPTION_MODAL_KEY, xi as WHATS_NEW_MODAL_KEY, yi as STOP_MANY_EXECUTIONS_MODAL_KEY } from "./constants-Es0IMygd.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { n as useDebounce } from "./useDebounce-CJwdvtMm.js";
import { n as setTelemetry, t as TelemetryKey } from "./useTelemetry-ByPVpSRb.js";
//#region src/app/composables/useStorage.ts
function useStorage(key) {
	const data = useStorage$1(key, null, void 0, { writeDefaults: false });
	if (data.value === "undefined") data.value = null;
	return data;
}
//#endregion
//#region ../../@n8n/telemetry/src/validate.ts
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function formatPath(path) {
	return path.map(String).join(".") || "(root)";
}
function isObjectSchema(schema) {
	return schema instanceof ZodObject;
}
function isUnionSchema(schema) {
	return schema instanceof ZodUnion;
}
function isArraySchema(schema) {
	return schema instanceof ZodArray;
}
function isRecordSchema(schema) {
	return schema instanceof ZodRecord;
}
function isWrappedSchema(schema) {
	return schema instanceof ZodOptional || schema instanceof ZodNullable || schema instanceof ZodDefault || schema instanceof ZodNonOptional || schema instanceof ZodCatch || schema instanceof ZodLazy;
}
function isReadonlySchema(schema) {
	return schema instanceof ZodReadonly;
}
function isSchema(value) {
	return value instanceof ZodType;
}
function getWrappedSchema(schema) {
	if (isWrappedSchema(schema)) return schema.unwrap();
	if (isReadonlySchema(schema)) return schema.def.innerType;
}
function getUnrecognizedPropertyIssues(schema, value, path = []) {
	const wrappedSchema = getWrappedSchema(schema);
	if (wrappedSchema !== void 0) return getUnrecognizedPropertyIssues(wrappedSchema, value, path);
	if (isObjectSchema(schema)) {
		if (!isRecord(value)) return [];
		const issues = [];
		for (const [key, childValue] of Object.entries(value)) {
			const childPath = [...path, key];
			const childSchema = schema.shape[key];
			if (childSchema !== void 0) issues.push(...getUnrecognizedPropertyIssues(childSchema, childValue, childPath));
			else if (schema.def.catchall === void 0) issues.push(`${formatPath(childPath)}: unrecognized property`);
			else if (isSchema(schema.def.catchall)) issues.push(...getUnrecognizedPropertyIssues(schema.def.catchall, childValue, childPath));
		}
		return issues;
	}
	if (isArraySchema(schema)) {
		if (!Array.isArray(value)) return [];
		return value.flatMap((item, index) => getUnrecognizedPropertyIssues(schema.element, item, [...path, index]));
	}
	if (isRecordSchema(schema)) {
		if (!isRecord(value)) return [];
		return Object.entries(value).flatMap(([key, childValue]) => getUnrecognizedPropertyIssues(schema.valueType, childValue, [...path, key]));
	}
	if (isUnionSchema(schema)) {
		const matchingOptions = schema.options.filter((option) => option.safeParse(value).success);
		if (matchingOptions.length === 0) return [];
		return matchingOptions.map((option) => getUnrecognizedPropertyIssues(option, value, path)).reduce((fewestIssues, optionIssues) => optionIssues.length < fewestIssues.length ? optionIssues : fewestIssues);
	}
	return [];
}
function getEventValidationError(event, properties) {
	const issues = [];
	const result = event.properties.safeParse(properties);
	if (!result.success) for (const issue of result.error.issues) issues.push(`${issue.path.map(String).join(".") || "(root)"}: ${issue.message}`);
	issues.push(...getUnrecognizedPropertyIssues(event.properties, properties));
	if (issues.length === 0) return null;
	return `Telemetry event "${event.name}" failed schema validation: ${issues.join("; ")}`;
}
//#endregion
//#region ../../@n8n/telemetry/src/define.ts
function defineTelemetryEvents(events) {
	const result = {};
	for (const [key, event] of Object.entries(events)) result[key] = {
		...event,
		getValidationError: (properties) => getEventValidationError(event, properties)
	};
	return result;
}
//#endregion
//#region ../../@n8n/telemetry/src/events/agents.ts
var agentPublishSource = _enum([
	"editor",
	"builder",
	"channel_connect",
	"slack_setup"
]).describe("Which surface triggered the publish");
var builderSessionIdentity = {
	agent_id: string(),
	user_id: string(),
	thread_id: string().optional().describe("Instance AI thread hosting the builder session"),
	run_id: string().optional().describe("Instance AI run that triggered this builder call")
};
var agentStatus = _enum(["draft", "production"]);
var builderPreWriteStatus = agentStatus.describe("Agent status before the builder's write (frontend twin events report post-save status, effectively always 'draft')");
var sessionId = string().describe("Editor push session id (pushRef)");
var agentConfigFingerprint = object({
	instructions: string(),
	tools: array(string()),
	skills: array(string()),
	tasks: array(string()),
	triggers: array(string()),
	vector_stores: array(string()),
	memory: object({
		enabled: boolean(),
		storage: literal("n8n")
	}).nullable(),
	model: string().nullable(),
	config_version: string()
});
var toolIdentity = {
	node_type: string().optional(),
	workflow: string().optional(),
	custom_id: string().optional(),
	server_name: string().optional()
};
var optionalAgentId = string().optional();
var AGENTS_TELEMETRY = defineTelemetryEvents({
	AGENT_PUBLISHED: {
		name: "Agent published",
		description: "An agent version became the active published version, from any surface (editor Publish button, builder publish_agent tool, chat-channel connect auto-publish, or Slack app setup auto-publish). Does not fire for idempotent no-op publishes.",
		properties: object({
			agent_id: string(),
			project_id: string(),
			user_id: string(),
			source: agentPublishSource,
			version_id: string().describe("AgentHistory versionId that became active")
		})
	},
	AGENT_UNPUBLISHED: {
		name: "Agent unpublished",
		description: "An agent was unpublished, clearing its active version, from either the editor Unpublish button or the builder unpublish_agent tool.",
		properties: object({
			agent_id: string(),
			project_id: string(),
			user_id: string(),
			source: _enum(["editor", "builder"])
		})
	},
	BUILDER_ADDED_TOOLS: {
		name: "Builder added tools to agent",
		description: "The Instance AI builder saved an agent config that added a tool, mirroring the frontend \"User added tools to agent\" event so both sources can be aggregated together.",
		properties: object({
			...builderSessionIdentity,
			tool_added: string().describe("Identifier of the newly added tool"),
			tools: array(string()).describe("Full tool identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_ADDED_SKILLS: {
		name: "Builder added skills to agent",
		description: "The Instance AI builder saved an agent config that added a skill, mirroring the frontend \"User added skills to agent\" event.",
		properties: object({
			...builderSessionIdentity,
			skill_added: string().describe("Identifier of the newly added skill"),
			skills: array(string()).describe("Full skill identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_ADDED_TASKS: {
		name: "Builder added tasks to agent",
		description: "The Instance AI builder saved an agent config that added a scheduled task, mirroring the frontend \"User added tasks to agent\" event.",
		properties: object({
			...builderSessionIdentity,
			task_added: string().describe("Identifier of the newly added task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_REMOVED_TASKS: {
		name: "Builder removed tasks from agent",
		description: "The Instance AI builder saved an agent config that removed a scheduled task, mirroring the frontend \"User removed tasks from agent\" event.",
		properties: object({
			...builderSessionIdentity,
			task_removed: string().describe("Identifier of the removed task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			status: builderPreWriteStatus
		})
	},
	BUILDER_ADDED_TRIGGER: {
		name: "Builder added trigger to agent",
		description: "The Instance AI builder connected a chat channel to the target agent via the configure_channel tool, mirroring the frontend \"User added trigger to agent\" event.",
		properties: object({
			...builderSessionIdentity,
			trigger_type: string().describe("Chat integration type that was connected")
		})
	},
	BUILDER_ASKED_QUESTIONS: {
		name: "Builder asked questions",
		description: "The Instance AI builder used the ask_questions tool and suspended, showing the user a batch of questions to determine the shape of the agent.",
		properties: object({
			...builderSessionIdentity,
			question_count: number(),
			question_types: array(string()).describe("Distinct question types in the batch")
		})
	},
	USER_ANSWERED_BUILDER_QUESTIONS: {
		name: "User answered builder questions",
		description: "The user resumed a builder ask_questions card by answering, skipping, or dismissing it.",
		properties: object({
			...builderSessionIdentity,
			outcome: _enum([
				"answered",
				"skipped",
				"dismissed"
			]),
			answered_count: number(),
			skipped_count: number()
		})
	},
	BUILDER_REQUESTED_CREDENTIAL: {
		name: "Builder requested credential",
		description: "The Instance AI builder used the ask_credential (or ask_embedding_credential) tool and suspended to show a credential picker card. Does not fire when the request auto-resolves without showing a card.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string()
		})
	},
	USER_PROVIDED_CREDENTIAL: {
		name: "User provided credential",
		description: "The user resumed a builder credential picker card by selecting a credential or skipping.",
		properties: object({
			...builderSessionIdentity,
			credential_type: string(),
			outcome: _enum(["provided", "skipped"])
		})
	},
	USER_CLICKED_NEW_AGENT: {
		name: "User clicked new agent",
		description: "The user clicked a new-agent entry point (button, dropdown, or card).",
		properties: object({
			source: _enum([
				"button",
				"dropdown",
				"card"
			]),
			session_id: sessionId
		})
	},
	USER_CREATED_AGENT: {
		name: "User created agent",
		description: "A draft agent was created, from the blank new-agent page or inline from a workflow surface (source carries the entry point).",
		properties: object({
			agent_id: string(),
			source: string()
		})
	},
	USER_SUBMITTED_MESSAGE_TO_AGENT: {
		name: "User submitted message to agent",
		description: "The user sent a test-mode chat message to an agent, with a fingerprint of the agent config at send time.",
		properties: object({
			agent_id: string(),
			mode: literal("test").describe("Constant dimension kept for warehouse-schema stability"),
			status: agentStatus,
			agent_config: agentConfigFingerprint,
			session_id: sessionId
		})
	},
	USER_EDITED_AGENT_CONFIG: {
		name: "User edited agent config",
		description: "A builder autosave persisted a config edit; one event fires per changed part.",
		properties: object({
			agent_id: string(),
			part: _enum([
				"instructions",
				"model",
				"memory",
				"tools",
				"skills",
				"triggers",
				"subAgents",
				"name",
				"description",
				"vectorStores"
			]),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_TRIGGER_TO_AGENT: {
		name: "User added trigger to agent",
		description: "The user connected a chat trigger to an agent from the builder.",
		properties: object({
			agent_id: string(),
			trigger_type: string(),
			triggers: array(string()).describe("Connected trigger types after the change"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_TOOLS_TO_AGENT: {
		name: "User added tools to agent",
		description: "A saved builder config added a tool; one event fires per newly added tool. Twin of the backend \"Builder added tools to agent\" event.",
		properties: object({
			agent_id: string(),
			tool_added: string().describe("Identifier of the newly added tool"),
			tools: array(string()).describe("Full tool identifier list after the save"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_SKILLS_TO_AGENT: {
		name: "User added skills to agent",
		description: "A saved builder config added a skill; one event fires per newly added skill. Twin of the backend \"Builder added skills to agent\" event.",
		properties: object({
			agent_id: string(),
			skill_added: string().describe("Identifier of the newly added skill"),
			skills: array(string()).describe("Full skill identifier list after the save"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_ADDED_TASKS_TO_AGENT: {
		name: "User added tasks to agent",
		description: "A saved builder config added a scheduled task; one event fires per newly added task. Twin of the backend \"Builder added tasks to agent\" event.",
		properties: object({
			agent_id: string(),
			task_added: string().describe("Identifier of the newly added task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_REMOVED_TASKS_FROM_AGENT: {
		name: "User removed tasks from agent",
		description: "A saved builder config removed a scheduled task; one event fires per removed task. Twin of the backend \"Builder removed tasks from agent\" event.",
		properties: object({
			agent_id: string(),
			task_removed: string().describe("Identifier of the removed task"),
			tasks: array(string()).describe("Full task identifier list after the save"),
			config_version: string(),
			status: agentStatus,
			session_id: sessionId
		})
	},
	USER_PUBLISHED_AGENT: {
		name: "User published agent",
		description: "The user published an agent from the builder.",
		properties: object({
			agent_id: string(),
			config_version: string(),
			status: literal("production"),
			session_id: sessionId
		})
	},
	USER_UNPUBLISHED_AGENT: {
		name: "User unpublished agent",
		description: "The user unpublished an agent from the builder.",
		properties: object({
			agent_id: string(),
			status: literal("draft"),
			session_id: sessionId
		})
	},
	USER_OPENED_AGENT_TOOL: {
		name: "User opened agent tool",
		description: "The user opened a tool from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			tool_type: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_AGENT_SKILL: {
		name: "User opened agent skill",
		description: "The user opened a skill from the builder capabilities list.",
		properties: object({
			agent_id: string(),
			skill_id: string(),
			session_id: sessionId
		})
	},
	USER_OPENED_ADD_SKILL_MODAL: {
		name: "User opened add skill modal",
		description: "The user opened the add-skill modal in the builder.",
		properties: object({
			agent_id: string(),
			session_id: sessionId
		})
	},
	USER_IMPORTED_AGENT_SKILL: {
		name: "User imported agent skill",
		description: "The user imported a skill into an agent from a skill file or folder, with success or error outcome.",
		properties: object({
			agent_id: string(),
			source: _enum(["skill_file", "folder"]),
			status: _enum(["success", "error"]),
			reference_count: number(),
			error: string().optional(),
			session_id: sessionId
		})
	},
	USER_STARTED_ADDING_AGENT_TOOL: {
		name: "User started adding agent tool",
		description: "The user clicked Connect on an available row in the tools modal, starting a new tool flow.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			source: literal("manual"),
			agent_id: optionalAgentId
		})
	},
	USER_ADDED_AGENT_TOOL: {
		name: "User added agent tool",
		description: "A new tool ref or MCP server was saved to an agent for the first time from the tools modal.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node",
				"mcpServer"
			]),
			has_approval: boolean(),
			...toolIdentity,
			authentication: string().optional().describe("MCP server auth method"),
			agent_id: optionalAgentId
		})
	},
	USER_EDITED_AGENT_TOOL: {
		name: "User edited agent tool",
		description: "An existing agent tool's configuration was saved from the tools modal.",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node"
			]),
			...toolIdentity,
			agent_id: optionalAgentId
		})
	},
	USER_REMOVED_AGENT_TOOL: {
		name: "User removed agent tool",
		description: "The user confirmed removing a tool or MCP server from an agent (tools modal or sidebar).",
		properties: object({
			tool_type: _enum([
				"custom",
				"workflow",
				"node",
				"mcpServer"
			]),
			...toolIdentity,
			agent_id: optionalAgentId
		})
	},
	USER_OPENED_AGENT_PREVIEW: {
		name: "User opened agent preview",
		description: "The user opened the agent preview panel in the builder.",
		properties: object({ agent_id: string() })
	},
	USER_SAVED_AGENT_SKILL: {
		name: "User saved agent skill",
		description: "An agent skill autosave completed in the builder.",
		properties: object({
			agent_id: string(),
			skill_id: string()
		})
	}
});
//#endregion
//#region ../../@n8n/telemetry/src/telemetry-events.ts
var TELEMETRY_EVENT = {
	PLATFORM: defineTelemetryEvents({
		USER_IS_PART_OF_EXPERIMENT: {
			name: "User is part of experiment",
			description: "User was assigned a variant of a running experiment, reported when feature flags resolve in the editor.",
			properties: object({
				name: string().describe("Experiment feature-flag key"),
				variant: union([string(), boolean()]).describe("Variant assigned to the user")
			})
		},
		TASK_RUNNER_DISCONNECTED: {
			name: "Task runner disconnected",
			description: "The broker tore down a task runner connection because the runner was unhealthy: it failed a heartbeat check, or was reported unresponsive after it stopped acknowledging or offering tasks. Normal shutdowns are not reported.",
			properties: object({
				reason: _enum(["failed-heartbeat-check", "runner-unresponsive"]).describe("Which detection reported the runner as unhealthy"),
				mode: _enum(["internal", "external"]).describe("Task runners deployment mode")
			})
		}
	}),
	AGENTS: AGENTS_TELEMETRY
};
//#endregion
//#region ../../@n8n/telemetry/src/constants.ts
var POSTHOG_EVENTS_BLACKLIST = [TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT];
//#endregion
//#region src/features/shared/tags/tags.constants.ts
var TAGS_MANAGER_MODAL_KEY = "tagsManager";
var ANNOTATION_TAGS_MANAGER_MODAL_KEY = "annotationTagsManager";
//#endregion
//#region src/features/execution/executions/executions.constants.ts
var DEBUG_PAYWALL_MODAL_KEY = "debugPaywall";
/** Execution statuses that are in progress and can be stopped from the executions list. */
var CANCELLABLE_EXECUTION_STATUSES = [
	"new",
	"running",
	"waiting"
];
//#endregion
//#region src/features/settings/usage/usage.constants.ts
var COMMUNITY_PLUS_ENROLLMENT_MODAL = "communityPlusEnrollment";
var COMMUNITY_PLUS_DOCS_URL = "https://docs.n8n.io/hosting/community-edition-features/#registered-community-edition";
//#endregion
//#region src/features/settings/environments.ee/environments.constants.ts
var VARIABLE_MODAL_KEY = "variableModal";
//#endregion
//#region src/features/credentials/credentials.constants.ts
var CREDENTIAL_EDIT_MODAL_KEY = "editCredential";
var CREDENTIAL_SELECT_MODAL_KEY = "selectCredential";
//#endregion
//#region src/features/settings/users/users.constants.ts
var DELETE_USER_MODAL_KEY = "deleteUser";
var INVITE_USER_MODAL_KEY = "inviteUser";
var PERSONALIZATION_MODAL_KEY = "personalization";
var COMPANY_TYPE_KEY = "companyType";
var SAAS_COMPANY_TYPE = "saas";
var ECOMMERCE_COMPANY_TYPE = "ecommerce";
var EDUCATION_TYPE = "education";
var DIGITAL_AGENCY_COMPANY_TYPE = "digital-agency";
var SYSTEMS_INTEGRATOR_COMPANY_TYPE = "systems-integrator";
var OTHER_COMPANY_TYPE = "other";
var PERSONAL_COMPANY_TYPE = "personal";
var COMPANY_INDUSTRY_EXTENDED_KEY = "companyIndustryExtended";
var OTHER_COMPANY_INDUSTRY_EXTENDED_KEY = "otherCompanyIndustryExtended";
var PHYSICAL_RETAIL_OR_SERVICES = "physical-retail-or-services";
var REAL_ESTATE_OR_CONSTRUCTION = "real-estate-or-construction";
var GOVERNMENT_INDUSTRY = "government";
var LEGAL_INDUSTRY = "legal-industry";
var MARKETING_INDUSTRY = "marketing-industry";
var MEDIA_INDUSTRY = "media-industry";
var MANUFACTURING_INDUSTRY = "manufacturing-industry";
var HEALTHCARE_INDUSTRY = "healthcare";
var FINANCE_INSURANCE_INDUSTRY = "finance-insurance-industry";
var IT_INDUSTRY = "it-industry";
var SECURITY_INDUSTRY = "security-industry";
var TELECOMS_INDUSTRY = "telecoms";
var OTHER_INDUSTRY_OPTION = "other";
var COMPANY_SIZE_KEY = "companySize";
var COMPANY_SIZE_20_99 = "20-99";
var COMPANY_SIZE_100_499 = "100-499";
var COMPANY_SIZE_500_999 = "500-999";
var COMPANY_SIZE_1000_OR_MORE = "1000+";
var COMPANY_SIZE_PERSONAL_USE = "personalUser";
var MARKETING_AUTOMATION_GOAL_KEY = "automationGoalSm";
var MARKETING_AUTOMATION_LEAD_GENERATION_GOAL = "lead-generation";
var MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION = "customer-communication";
var MARKETING_AUTOMATION_ACTIONS = "actions";
var MARKETING_AUTOMATION_AD_CAMPAIGN = "ad-campaign";
var MARKETING_AUTOMATION_REPORTING = "reporting";
var MARKETING_AUTOMATION_DATA_SYNCHING = "data-syncing";
var MARKETING_AUTOMATION_OTHER = "other";
var OTHER_MARKETING_AUTOMATION_GOAL_KEY = "automationGoalSmOther";
var AUTOMATION_BENEFICIARY_KEY = "automationBeneficiary";
var AUTOMATION_BENEFICIARY_SELF = "myself";
var AUTOMATION_BENEFICIARY_MY_TEAM = "my-team";
var AUTOMATION_BENEFICIARY_OTHER_TEAMS = "other-teams";
var REPORTED_SOURCE_KEY = "reportedSource";
var REPORTED_SOURCE_OTHER_KEY = "reportedSourceOther";
var REPORTED_SOURCE_GOOGLE = "google";
var REPORTED_SOURCE_TWITTER = "twitter";
var REPORTED_SOURCE_LINKEDIN = "linkedin";
var REPORTED_SOURCE_YOUTUBE = "youtube";
var REPORTED_SOURCE_FRIEND = "friend";
var REPORTED_SOURCE_PODCAST = "podcast";
var REPORTED_SOURCE_EVENT = "event";
var REPORTED_SOURCE_OTHER = "other";
var DEVOPS_AUTOMATION_GOAL_KEY = "automationGoalDevops";
var DEVOPS_AUTOMATION_GOAL_OTHER_KEY = "automationGoalDevopsOther";
var DEVOPS_AUTOMATION_OTHER = "other";
var DEVOPS_AUTOMATION_CI_CD_GOAL = "ci-cd";
var DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL = "cloud-infrastructure-orchestration";
var DEVOPS_AUTOMATION_DATA_SYNCING_GOAL = "data-syncing";
var DEVOPS_INCIDENT_RESPONSE_GOAL = "incident-response";
var DEVOPS_MONITORING_AND_ALERTING_GOAL = "monitoring-alerting";
var DEVOPS_REPORTING_GOAL = "reporting";
var DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL = "ticketing-systems-integrations";
var OTHER_AUTOMATION_GOAL = "other";
var ROLE_KEY = "role";
var ROLE_OTHER_KEY = "roleOther";
var ROLE_BUSINESS_OWNER = "business-owner";
var ROLE_CUSTOMER_SUPPORT = "customer-support";
var ROLE_DATA_SCIENCE = "data-science";
var ROLE_DEVOPS = "devops";
var ROLE_ENGINEERING = "engineering";
var ROLE_SALES_AND_MARKETING = "sales-and-marketing";
var ROLE_SECURITY = "security";
var ROLE_OTHER = "other";
/** END OF PERSONALIZATION SURVEY */
//#endregion
//#region src/features/core/folders/folders.constants.ts
var ILLEGAL_FOLDER_CHARACTERS = [
	"[",
	"]",
	"^",
	"\\",
	"/",
	":",
	"*",
	"?",
	"\"",
	"<",
	">",
	"|"
];
var FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX = new RegExp(`[${ILLEGAL_FOLDER_CHARACTERS.map((char) => {
	return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}).join("")}]`);
var FOLDER_NAME_ONLY_DOTS_REGEX = /^\.+$/;
var DELETE_FOLDER_MODAL_KEY = "deleteFolder";
var MOVE_FOLDER_MODAL_KEY = "moveFolder";
var FOLDER_LIST_ITEM_ACTIONS = {
	OPEN: "open",
	CREATE: "create",
	CREATE_WORKFLOW: "create_workflow",
	RENAME: "rename",
	MOVE: "move",
	CHOWN: "change_owner",
	TAGS: "manage_tags",
	DELETE: "delete",
	TOGGLE_FAVORITE: "toggleFavorite"
};
var MCP_ACCESS_ACTIONS = {
	MANAGE: "manageMcpAccess",
	ENABLE: "enableMcpAccess",
	DISABLE: "disableMcpAccess"
};
//#endregion
//#region src/features/integrations/sourceControl.ee/sourceControl.constants.ts
var SOURCE_CONTROL_PUSH_MODAL_KEY = "sourceControlPush";
var SOURCE_CONTROL_PULL_MODAL_KEY = "sourceControlPull";
var SOURCE_CONTROL_PULL_RESULT_MODAL_KEY = "sourceControlPullResult";
//#endregion
//#region src/features/collaboration/projects/projects.constants.ts
var PROJECT_MOVE_RESOURCE_MODAL = "projectMoveResourceModal";
var DEFAULT_PROJECT_ICON = {
	type: "icon",
	value: "layers"
};
//#endregion
//#region src/features/settings/communityNodes/communityNodes.constants.ts
var COMMUNITY_PACKAGE_INSTALL_MODAL_KEY = "communityPackageInstall";
var COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY = "communityPackageManageConfirm";
var COMMUNITY_NODES_INSTALLATION_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/community-nodes/installation/gui-install/`;
var COMMUNITY_NODES_RISKS_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/community-nodes/risks/`;
`${DOCS_DOMAIN}`;
var NPM_KEYWORD_SEARCH_URL = "https://www.npmjs.com/search?q=keywords%3An8n-community-node-package";
var COMMUNITY_PACKAGE_MANAGE_ACTIONS = {
	UNINSTALL: "uninstall",
	UPDATE: "update",
	VIEW_DOCS: "view-documentation"
};
//#endregion
//#region src/features/settings/apiKeys/apiKeys.constants.ts
var API_KEY_CREATE_OR_EDIT_MODAL_KEY = "createOrEditApiKey";
var API_KEY_SCOPE_GROUPS = [
	{
		key: "workflowsAndExecutions",
		resources: [
			"workflow",
			"execution",
			"workflowTags",
			"executionTags"
		]
	},
	{
		key: "credentialsAndVariables",
		resources: ["credential", "variable"]
	},
	{
		key: "dataTables",
		resources: [
			"dataTable",
			"dataTableRow",
			"dataTableColumn"
		]
	},
	{
		key: "projects",
		resources: ["project"]
	},
	{
		key: "foldersTags",
		resources: ["folder", "tag"]
	},
	{
		key: "members",
		resources: ["user"]
	},
	{
		key: "instanceOperations",
		resources: [
			"securityAudit",
			"sourceControl",
			"communityPackage",
			"insights"
		]
	}
];
var READ_SCOPE_ACTIONS = [
	"read",
	"list",
	"export"
];
//#endregion
//#region src/app/stores/ui.utils.ts
function applyThemeToBody(theme, window_) {
	if (theme === "system") (window_ ?? window).document.body.removeAttribute("data-theme");
	else (window_ ?? window).document.body.setAttribute?.("data-theme", theme);
}
function isValidTheme(theme) {
	return !!theme && ["light", "dark"].includes(theme);
}
function getThemeOverride() {
	const override = getQueryParam("theme") ?? localStorage.getItem("N8N_THEME");
	return isValidTheme(override) ? override : null;
}
function getQueryParam(paramName) {
	return new URLSearchParams(window.location.search).get(paramName);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/modalRegistry.ts
var modals = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
function getAll() {
	return new Map(modals);
}
function notifyListeners() {
	listeners.forEach((listener) => listener(getAll()));
}
function register(modal) {
	if (modals.has(modal.key)) {
		console.warn(`Modal with key "${modal.key}" is already registered. Skipping.`);
		return;
	}
	modals.set(modal.key, modal);
	notifyListeners();
}
function subscribe(listener) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}
//#endregion
//#region src/app/stores/ui.store.ts
var import_identity = /* @__PURE__ */ __toESM(require_identity(), 1);
var savedTheme = "system";
try {
	const value = getThemeOverride();
	if (value !== null) {
		savedTheme = value;
		applyThemeToBody(value);
	}
} catch (e) {}
var useUIStore = defineStore(STORES.UI, () => {
	const telemetry = useTelemetry();
	const activeActions = ref([]);
	const activeCredentialType = ref(null);
	const theme = useLocalStorage(LOCAL_STORAGE_THEME, savedTheme, {
		writeDefaults: false,
		serializer: {
			read: (value) => isValidTheme(value) ? value : savedTheme,
			write: import_identity.default
		}
	});
	const modalsById = ref({
		...Object.fromEntries([
			ABOUT_MODAL_KEY,
			CHAT_EMBED_MODAL_KEY,
			CHANGE_PASSWORD_MODAL_KEY,
			CONFIRM_PASSWORD_MODAL_KEY,
			CREDENTIAL_SELECT_MODAL_KEY,
			DUPLICATE_MODAL_KEY,
			PERSONALIZATION_MODAL_KEY,
			INVITE_USER_MODAL_KEY,
			TAGS_MANAGER_MODAL_KEY,
			ANNOTATION_TAGS_MANAGER_MODAL_KEY,
			NPS_SURVEY_MODAL_KEY,
			VERSIONS_MODAL_KEY,
			WORKFLOW_SETTINGS_MODAL_KEY,
			WORKFLOW_SHARE_MODAL_KEY,
			WORKFLOW_ACTIVE_MODAL_KEY,
			COMMUNITY_PACKAGE_INSTALL_MODAL_KEY,
			MFA_SETUP_MODAL_KEY,
			PROMPT_MFA_CODE_MODAL_KEY,
			SOURCE_CONTROL_PUSH_MODAL_KEY,
			SOURCE_CONTROL_PULL_MODAL_KEY,
			SOURCE_CONTROL_PULL_RESULT_MODAL_KEY,
			EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
			SECRETS_PROVIDER_CONNECTION_MODAL_KEY,
			DELETE_SECRETS_PROVIDER_MODAL_KEY,
			DEBUG_PAYWALL_MODAL_KEY,
			WORKFLOW_HISTORY_VERSION_RESTORE,
			SETUP_CREDENTIALS_MODAL_KEY,
			PROJECT_MOVE_RESOURCE_MODAL,
			NEW_ASSISTANT_SESSION_MODAL,
			IMPORT_WORKFLOW_URL_MODAL_KEY,
			WORKFLOW_DIFF_MODAL_KEY,
			EXPERIMENT_TEMPLATE_RECO_V3_KEY,
			VARIABLE_MODAL_KEY,
			BINARY_DATA_VIEW_MODAL_KEY,
			WORKFLOW_DESCRIPTION_MODAL_KEY,
			WORKFLOW_PUBLISH_MODAL_KEY,
			WORKFLOW_HISTORY_PUBLISH_MODAL_KEY,
			WORKFLOW_HISTORY_DIFF_MODAL_KEY,
			WORKFLOW_HISTORY_VERSION_UNPUBLISH,
			WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY,
			CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			AI_BUILDER_DIFF_MODAL_KEY,
			INSTANCE_AI_CREDENTIAL_SETUP_MODAL_KEY,
			INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY,
			AI_GATEWAY_TOP_UP_MODAL_KEY,
			AGENT_CONFIRMATION_MODAL_KEY
		].map((modalKey) => [modalKey, { open: false }])),
		[DELETE_USER_MODAL_KEY]: {
			open: false,
			activeId: null
		},
		[COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY]: {
			open: false,
			mode: "",
			activeId: null
		},
		[IMPORT_CURL_MODAL_KEY]: {
			open: false,
			data: { curlCommands: {} }
		},
		[LOG_STREAM_MODAL_KEY]: {
			open: false,
			data: void 0
		},
		[API_KEY_CREATE_OR_EDIT_MODAL_KEY]: {
			open: false,
			data: {
				activeId: null,
				mode: ""
			}
		},
		[CREDENTIAL_EDIT_MODAL_KEY]: {
			open: false,
			mode: "",
			activeId: null,
			showAuthSelector: false,
			closeOnSave: false
		},
		[DELETE_FOLDER_MODAL_KEY]: {
			open: false,
			activeId: null,
			data: {
				workflowListEventBus: void 0,
				content: {
					workflowCount: 0,
					subFolderCount: 0
				}
			}
		},
		[MOVE_FOLDER_MODAL_KEY]: {
			open: false,
			activeId: null,
			data: { workflowListEventBus: void 0 }
		},
		[COMMUNITY_PLUS_ENROLLMENT_MODAL]: {
			open: false,
			data: { customHeading: void 0 }
		},
		[WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY]: {
			open: false,
			data: {
				triggerType: "",
				workflowName: "",
				workflowId: "",
				webhookPath: "",
				node: ""
			}
		},
		[FROM_AI_PARAMETERS_MODAL_KEY]: {
			open: false,
			data: { nodeName: void 0 }
		},
		[STOP_MANY_EXECUTIONS_MODAL_KEY]: {
			open: false,
			data: {}
		},
		[ADD_EXECUTION_TO_DATASET_MODAL_KEY]: {
			open: false,
			data: {}
		},
		[IMPORT_WORKFLOW_URL_MODAL_KEY]: {
			open: false,
			data: { url: "" }
		},
		[WORKFLOW_EXTRACTION_NAME_MODAL_KEY]: {
			open: false,
			data: { workflowName: "" }
		},
		[WHATS_NEW_MODAL_KEY]: {
			open: false,
			data: { articleId: void 0 }
		},
		[EXPERIMENT_TEMPLATE_RECO_V2_KEY]: {
			open: false,
			data: { nodeName: "" }
		}
	});
	const modalStack = ref([]);
	const sidebarMenuCollapsed = useLocalStorage("sidebar.collapsed", null, { serializer: {
		read: (v) => v === "null" ? null : v === "true",
		write: (v) => String(v)
	} });
	const sidebarWidth = useLocalStorage(LOCAL_STORAGE_SIDEBAR_WIDTH, 200);
	const currentView = ref("");
	const stateIsDirty = ref(false);
	const hasUnsavedWorkflowChanges = ref(false);
	const dirtyStateSetCount = ref(0);
	const lastSelectedNode = ref(null);
	const nodeViewOffsetPosition = ref([0, 0]);
	const nodeViewInitialized = ref(false);
	const addFirstStepOnLoad = ref(false);
	const addFirstStepOnLoadSource = ref();
	const processingExecutionResults = ref(false);
	const isBlankRedirect = ref(false);
	/**
	* Modules can register their ProjectHeader tabs here
	* Since these tabs are specific to the page they are on,
	* we add them to separate arrays so pages can pick the right ones
	* at render time.
	* Module name is also added to the key so that we can check if the module is active
	* when tabs are rendered.\
	* @example
	* uiStore.registerCustomTabs('overview', 'data-table', [
	*   {
	*     label: 'Data table',
	*     value: 'data-table',
	*     to: { name: 'data-table' },
	*   },
	* ]);
	*/
	const moduleTabs = ref({
		overview: {},
		project: {},
		shared: {}
	});
	/**
	* Settings sidebar items registry per module.
	* Modules can register items and SettingsSidebar will render them
	* when the corresponding module is active.
	*/
	const registeredSettingsPages = ref({});
	const appGridDimensions = ref({
		width: 0,
		height: 0
	});
	const lastInteractedWithNodeConnection = ref();
	const lastInteractedWithNodeHandle = ref(null);
	const lastInteractedWithNodeId = ref();
	const lastCancelledConnectionPosition = ref();
	const settingsStore = useSettingsStore();
	const isDarkThemePreferred = useMediaQuery("(prefers-color-scheme: dark)");
	const preferredSystemTheme = computed(() => isDarkThemePreferred.value ? "dark" : "light");
	const appliedTheme = computed(() => {
		return theme.value === "system" ? preferredSystemTheme.value : theme.value;
	});
	const contextBasedTranslationKeys = computed(() => {
		const deploymentType = settingsStore.deploymentType;
		let contextKey = "";
		if (deploymentType === "cloud") contextKey = ".cloud";
		return {
			feature: { unavailable: { title: `contextual.feature.unavailable.title${contextKey}` } },
			credentials: { sharing: { unavailable: {
				title: `contextual.credentials.sharing.unavailable.title${contextKey}`,
				description: `contextual.credentials.sharing.unavailable.description${contextKey}`,
				action: `contextual.credentials.sharing.unavailable.action${contextKey}`,
				button: `contextual.credentials.sharing.unavailable.button${contextKey}`
			} } },
			workflows: { sharing: {
				title: "contextual.workflows.sharing.title",
				unavailable: {
					title: `contextual.workflows.sharing.unavailable.title${contextKey}`,
					description: {
						modal: `contextual.workflows.sharing.unavailable.description.modal${contextKey}`,
						tooltip: `contextual.workflows.sharing.unavailable.description.tooltip${contextKey}`
					},
					action: `contextual.workflows.sharing.unavailable.action${contextKey}`,
					button: `contextual.workflows.sharing.unavailable.button${contextKey}`
				}
			} },
			variables: { unavailable: {
				title: `contextual.variables.unavailable.title${contextKey}`,
				description: "contextual.variables.unavailable.description",
				action: `contextual.variables.unavailable.action${contextKey}`,
				button: `contextual.variables.unavailable.button${contextKey}`
			} },
			users: { settings: { unavailable: {
				title: `contextual.users.settings.unavailable.title${contextKey}`,
				description: `contextual.users.settings.unavailable.description${contextKey}`,
				button: `contextual.users.settings.unavailable.button${contextKey}`
			} } }
		};
	});
	const isModalActiveById = computed(() => Object.keys(modalsById.value).reduce((acc, name) => {
		acc[name] = name === modalStack.value[0];
		return acc;
	}, {}));
	const activeModals = computed(() => modalStack.value.map((modalName) => modalName));
	const settingsSidebarItems = computed(() => {
		const items = [];
		Object.entries(registeredSettingsPages.value).forEach(([moduleName, moduleItems]) => {
			if (settingsStore.isModuleActive(moduleName)) items.push(...moduleItems.map((item) => ({
				available: true,
				...item
			})));
		});
		return items;
	});
	const isReadOnlyView = computed(() => {
		return ![
			VIEWS.WORKFLOW.toString(),
			VIEWS.NEW_WORKFLOW.toString(),
			VIEWS.EXECUTION_DEBUG.toString()
		].includes(currentView.value);
	});
	const isActionActive = computed(() => activeActions.value.reduce((acc, action) => {
		acc[action] = true;
		return acc;
	}, {}));
	const headerHeight = computed(() => {
		const style = getComputedStyle(document.body);
		return Number(style.getPropertyValue("--header--height"));
	});
	const isAnyModalOpen = computed(() => {
		return modalStack.value.length > 0;
	});
	/**
	* Whether we are currently in the process of fetching and deserializing
	* the full execution data and loading it to the store.
	*/
	const isProcessingExecutionResults = computed(() => processingExecutionResults.value);
	const setTheme = (newTheme) => {
		theme.value = newTheme;
		applyThemeToBody(newTheme);
	};
	const setMode = (name, mode) => {
		modalsById.value[name] = {
			...modalsById.value[name],
			mode
		};
	};
	const setActiveId = (name, activeId) => {
		modalsById.value[name] = {
			...modalsById.value[name],
			activeId
		};
	};
	const setShowAuthSelector = (name, showAuthSelector) => {
		modalsById.value[name] = {
			...modalsById.value[name],
			showAuthSelector
		};
	};
	const setModalData = (payload) => {
		modalsById.value[payload.name] = {
			...modalsById.value[payload.name],
			data: payload.data
		};
	};
	const openModal = (name) => {
		modalsById.value[name] = {
			...modalsById.value[name],
			open: true
		};
		modalStack.value = [name].concat(modalStack.value);
	};
	const openModalWithData = (payload) => {
		setModalData(payload);
		openModal(payload.name);
	};
	const closeModal = (name) => {
		modalsById.value[name] = {
			...modalsById.value[name],
			open: false
		};
		modalStack.value = modalStack.value.filter((openModalName) => name !== openModalName);
	};
	const openDeleteUserModal = (id) => {
		setActiveId(DELETE_USER_MODAL_KEY, id);
		openModal(DELETE_USER_MODAL_KEY);
	};
	const openExistingCredential = (id, options = {}) => {
		setActiveId(CREDENTIAL_EDIT_MODAL_KEY, id);
		setMode(CREDENTIAL_EDIT_MODAL_KEY, "edit");
		modalsById.value[CREDENTIAL_EDIT_MODAL_KEY] = {
			...modalsById.value[CREDENTIAL_EDIT_MODAL_KEY],
			projectId: void 0,
			contextNode: void 0,
			closeOnSave: false,
			hideAskAssistant: options.hideAskAssistant,
			appendToBody: options.appendToBody,
			instanceAiCredentialHelp: options.instanceAiCredentialHelp
		};
		openModal(CREDENTIAL_EDIT_MODAL_KEY);
	};
	const openNewCredential = (type, showAuthOptions = false, forceManualMode = false, projectId, suggestedName, nodeName, contextNode, options = {}) => {
		setActiveId(CREDENTIAL_EDIT_MODAL_KEY, type);
		setShowAuthSelector(CREDENTIAL_EDIT_MODAL_KEY, showAuthOptions);
		modalsById.value[CREDENTIAL_EDIT_MODAL_KEY] = {
			...modalsById.value[CREDENTIAL_EDIT_MODAL_KEY],
			forceManualMode,
			closeOnSave: options.closeOnSave ?? false,
			projectId,
			suggestedName,
			nodeName,
			contextNode,
			hideAskAssistant: options.hideAskAssistant,
			appendToBody: options.appendToBody,
			instanceAiCredentialHelp: options.instanceAiCredentialHelp,
			usageScope: options.usageScope
		};
		setMode(CREDENTIAL_EDIT_MODAL_KEY, "new");
		openModal(CREDENTIAL_EDIT_MODAL_KEY);
	};
	const openCommunityPackageUninstallConfirmModal = (packageName) => {
		setMode(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL);
		setActiveId(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, packageName);
		openModal(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
	};
	const openCommunityPackageUpdateConfirmModal = (packageName, source) => {
		telemetry.track("User clicked to open community node update modal", {
			source,
			package_name: packageName
		});
		setMode(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, COMMUNITY_PACKAGE_MANAGE_ACTIONS.UPDATE);
		setActiveId(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, packageName);
		openModal(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
	};
	const openDeleteFolderModal = (id, workflowListEventBus, content) => {
		setActiveId(DELETE_FOLDER_MODAL_KEY, id);
		openModalWithData({
			name: DELETE_FOLDER_MODAL_KEY,
			data: {
				workflowListEventBus,
				content
			}
		});
	};
	const openMoveToFolderModal = (resourceType, resource, workflowListEventBus) => {
		openModalWithData({
			name: MOVE_FOLDER_MODAL_KEY,
			data: {
				resourceType,
				resource,
				workflowListEventBus
			}
		});
	};
	const addActiveAction = (action) => {
		if (!activeActions.value.includes(action)) activeActions.value.push(action);
	};
	const removeActiveAction = (action) => {
		const actionIndex = activeActions.value.indexOf(action);
		if (actionIndex !== -1) activeActions.value.splice(actionIndex, 1);
	};
	const toggleSidebarMenuCollapse = () => {
		sidebarMenuCollapsed.value = !sidebarMenuCollapsed.value;
		telemetry.track("User toggled sidebar", { expanded: !sidebarMenuCollapsed.value });
	};
	function resetLastInteractedWith() {
		lastInteractedWithNodeConnection.value = void 0;
		lastInteractedWithNodeHandle.value = null;
		lastInteractedWithNodeId.value = void 0;
		lastCancelledConnectionPosition.value = void 0;
	}
	const registerCustomTabs = (page, moduleName, tabs) => {
		if (!moduleTabs.value[page]) throw new Error(`Invalid page type: ${page}`);
		moduleTabs.value[page][moduleName] = tabs;
	};
	const registerSettingsPages = (moduleName, items) => {
		registeredSettingsPages.value[moduleName] = items;
	};
	/**
	* Set whether we are currently in the process of fetching and deserializing
	* the full execution data and loading it to the store.
	*/
	const setProcessingExecutionResults = (value) => {
		processingExecutionResults.value = value;
	};
	const markStateDirty = (type = "workflow") => {
		dirtyStateSetCount.value++;
		stateIsDirty.value = true;
		if (type === "workflow") hasUnsavedWorkflowChanges.value = true;
	};
	const markStateClean = () => {
		stateIsDirty.value = false;
		hasUnsavedWorkflowChanges.value = false;
	};
	/**
	* Register a modal dynamically
	*/
	const registerModal = (modalKey, initialState) => {
		if (!modalsById.value[modalKey]) modalsById.value[modalKey] = initialState || { open: false };
	};
	/**
	* Unregister a modal
	*/
	const unregisterModal = (modalKey) => {
		if (modalsById.value[modalKey]) {
			if (modalsById.value[modalKey].open) closeModal(modalKey);
			delete modalsById.value[modalKey];
		}
	};
	/**
	* Initialize modals from the registry
	*/
	const initializeModalsFromRegistry = () => {
		getAll().forEach((modalDef, key) => {
			registerModal(key, modalDef.initialState);
		});
	};
	const unsubscribeFromModalRegistry = subscribe((modals) => {
		modals.forEach((modalDef, key) => {
			if (!modalsById.value[key]) registerModal(key, modalDef.initialState);
		});
	});
	/**
	* Clean up modal registry subscription
	*/
	const cleanup = () => {
		unsubscribeFromModalRegistry();
	};
	return {
		appGridDimensions,
		settingsSidebarItems,
		appliedTheme,
		contextBasedTranslationKeys,
		isModalActiveById,
		isReadOnlyView,
		isActionActive,
		activeActions,
		headerHeight,
		dirtyStateSetCount: computed(() => dirtyStateSetCount.value),
		stateIsDirty: computed(() => stateIsDirty.value),
		hasUnsavedWorkflowChanges: computed(() => hasUnsavedWorkflowChanges.value),
		isBlankRedirect,
		activeCredentialType,
		lastSelectedNode,
		lastInteractedWithNodeConnection,
		lastInteractedWithNodeHandle,
		lastInteractedWithNodeId,
		lastCancelledConnectionPosition,
		nodeViewOffsetPosition,
		nodeViewInitialized,
		addFirstStepOnLoad,
		addFirstStepOnLoadSource,
		sidebarMenuCollapsed,
		sidebarWidth,
		theme: computed(() => theme.value),
		modalsById,
		currentView,
		isAnyModalOpen,
		activeModals,
		isProcessingExecutionResults,
		setTheme,
		setModalData,
		openModalWithData,
		openModal,
		closeModal,
		openDeleteUserModal,
		openExistingCredential,
		openNewCredential,
		openCommunityPackageUninstallConfirmModal,
		openCommunityPackageUpdateConfirmModal,
		addActiveAction,
		removeActiveAction,
		toggleSidebarMenuCollapse,
		resetLastInteractedWith,
		setProcessingExecutionResults,
		markStateDirty,
		markStateClean,
		openDeleteFolderModal,
		openMoveToFolderModal,
		moduleTabs,
		registerCustomTabs,
		registerSettingsPages,
		registerModal,
		unregisterModal,
		initializeModalsFromRegistry,
		cleanup
	};
});
/**
* Helper function for listening to model opening and closings in the store
*/
var listenForModalChanges = (opts) => {
	const { store, onModalClosed, onModalOpened } = opts;
	const listeningForActions = [
		"openModal",
		"openModalWithData",
		"closeModal"
	];
	return store.$onAction((result) => {
		const { name, after, args } = result;
		after(() => {
			if (!listeningForActions.includes(name)) return;
			switch (name) {
				case "openModal": {
					const modalName = args[0];
					onModalOpened?.(modalName);
					break;
				}
				case "openModalWithData": {
					const { name: modalName } = args[0] ?? {};
					onModalOpened?.(modalName);
					break;
				}
				case "closeModal": {
					const modalName = args[0];
					onModalClosed?.(modalName);
					break;
				}
			}
		});
	});
};
//#endregion
//#region src/app/plugins/telemetry/index.ts
var POSTHOG_BLACKLISTED_EVENT_NAMES = new Set(POSTHOG_EVENTS_BLACKLIST.map((blacklisted) => blacklisted.name));
var TelemetryService = class {
	pageEventQueue;
	previousPath;
	get rudderStack() {
		return window.rudderanalytics;
	}
	constructor() {
		this.pageEventQueue = [];
		this.previousPath = "";
	}
	init(telemetrySettings, { instanceId, userId, projectId, versionCli, userRole }) {
		if (!telemetrySettings.enabled || !telemetrySettings.config || this.rudderStack) return;
		const { config: { key, proxy, sourceConfig } } = telemetrySettings;
		const rootStore = useRootStore();
		this.initRudderStack(key, proxy, {
			integrations: { All: false },
			loadIntegration: false,
			configUrl: sourceConfig
		});
		this.identify({
			instanceId,
			userId,
			versionCli,
			projectId,
			userRole
		});
		this.flushPageEvents();
		this.track("Session started", { session_id: rootStore.pushRef });
	}
	identify({ instanceId, userId, versionCli, projectId, userRole }) {
		const settingsStore = useSettingsStore();
		const traits = {
			instance_id: instanceId,
			version_cli: versionCli,
			user_role: userRole
		};
		if (settingsStore.isCloudDeployment) traits.user_cloud_id = settingsStore.settings?.n8nMetadata?.userId ?? "";
		if (userId) this.rudderStack?.identify(`${instanceId}#${userId}${projectId ? "#" + projectId : ""}`, traits, { context: { ip: "0.0.0.0" } });
		else this.rudderStack?.reset();
	}
	track(event, properties) {
		const eventName = typeof event === "string" ? event : event.name;
		if (typeof event !== "string") {
			const validationError = event.getValidationError(properties);
			if (validationError) console.warn(validationError);
		}
		if (!this.rudderStack) return;
		const posthogSessionId = window.posthog?.get_session_id?.();
		const updatedProperties = {
			...properties,
			version_cli: useRootStore().versionCli,
			posthog_session_id: posthogSessionId
		};
		this.rudderStack.track(eventName, updatedProperties, { context: { ip: "0.0.0.0" } });
		if (!POSTHOG_BLACKLISTED_EVENT_NAMES.has(eventName)) usePostHog().capture(eventName, updatedProperties);
	}
	page(route) {
		if (this.rudderStack) {
			if (route.path === this.previousPath) return;
			this.previousPath = route.path;
			const pageName = String(route.name);
			let properties = {};
			if (route.meta?.telemetry && typeof route.meta.telemetry.getProperties === "function") properties = route.meta.telemetry.getProperties(route);
			properties.theme = useUIStore().appliedTheme;
			const category = route.meta?.telemetry?.pageCategory || "Editor";
			this.rudderStack.page(category, pageName, properties, { context: { ip: "0.0.0.0" } });
		} else this.pageEventQueue.push({ route });
	}
	reset() {
		this.rudderStack?.reset();
	}
	flushPageEvents() {
		const queue = this.pageEventQueue;
		this.pageEventQueue = [];
		queue.forEach(({ route }) => {
			this.page(route);
		});
	}
	trackAskAI(event, ndvPushRef, properties = {}) {
		if (this.rudderStack) {
			properties.session_id = useRootStore().pushRef;
			properties.ndv_session_id = ndvPushRef;
			switch (event) {
				case "askAi.generationFinished": this.track("Ai code generation finished", properties);
				default: break;
			}
		}
	}
	trackAiTransform(event, ndvPushRef, properties = {}) {
		if (this.rudderStack) {
			properties.session_id = useRootStore().pushRef;
			properties.ndv_session_id = ndvPushRef;
			switch (event) {
				case "generationFinished": this.track("Ai Transform code generation finished", properties);
				default: break;
			}
		}
	}
	trackNodeParametersValuesChange(nodeType, change) {
		if (this.rudderStack) {
			const changeName = {
				["n8n-nodes-base.slack"]: "parameters.otherOptions.includeLinkToWorkflow",
				["n8n-nodes-base.microsoftTeams"]: "parameters.options.includeLinkToWorkflow",
				["n8n-nodes-base.telegram"]: "parameters.additionalFields.appendAttribution"
			}[nodeType] || "parameters.options.appendAttribution";
			if (change.name === changeName) this.track("User toggled n8n reference option", {
				node: nodeType,
				toValue: change.value
			});
			const advancedHitlPathMap = {
				[SLACK_NODE_TYPE]: "parameters.captureResponder",
				[TELEGRAM_NODE_TYPE]: "parameters.chatApproval"
			};
			if (change.name === advancedHitlPathMap[nodeType] && change.value === true) this.track("User enabled advanced HITL", { node_type: nodeType });
		}
	}
	initRudderStack(key, proxy, options) {
		window.rudderanalytics = window.rudderanalytics || [];
		if (!this.rudderStack) return;
		this.rudderStack.methods = [
			"load",
			"page",
			"track",
			"identify",
			"alias",
			"group",
			"ready",
			"reset",
			"getAnonymousId",
			"setAnonymousId"
		];
		this.rudderStack.factory = (method) => {
			return (...args) => {
				if (!this.rudderStack) throw new Error("RudderStack not initialized");
				const argsCopy = [method, ...args];
				this.rudderStack.push(argsCopy);
				return this.rudderStack;
			};
		};
		for (const method of this.rudderStack.methods) this.rudderStack[method] = this.rudderStack.factory(method);
		this.rudderStack.loadJS = () => {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.async = !0;
			script.src = "https://cdn-rs.n8n.io/v1/ra.min.js";
			const element = document.getElementsByTagName("script")[0];
			if (element && element.parentNode) element.parentNode.insertBefore(script, element);
		};
		this.rudderStack.loadJS();
		this.rudderStack.load(key, proxy, options);
	}
};
var telemetry = new TelemetryService();
setTelemetry(telemetry);
var TelemetryPlugin = { install(app) {
	app.config.globalProperties.$telemetry = telemetry;
	app.provide(TelemetryKey, telemetry);
} };
//#endregion
//#region src/app/composables/useTelemetry.ts
/**
* @deprecated Import from `@n8n/composables/useTelemetry` instead.
*
* Temporary compatibility shim for the frontend modularization effort
* (CAT-3686). The telemetry contract and DI now live in `@n8n/composables`;
* this shim returns the app-registered instance directly so existing call
* sites — and their `vi.mock`/`vi.spyOn` idioms — keep pre-migration
* semantics. Call sites are migrated off this path per-directory before it is
* removed. (N8N-72)
*/
function useTelemetry() {
	return telemetry;
}
//#endregion
//#region src/app/stores/posthog.store.ts
var POSTHOG_GROUP_TYPE_INSTANCE = "company";
var usePostHog = defineStore("posthog", () => {
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const { debounce } = useDebounce();
	const featureFlags = ref(null);
	const trackedDemoExp = ref({});
	const pendingFeatureFlagsEvaluation = ref(false);
	const overrides = ref({});
	let featureFlagsWaitPromise = null;
	let resolveFeatureFlagsWait = null;
	const clearFeatureFlagsWait = () => {
		featureFlagsWaitPromise = null;
		resolveFeatureFlagsWait = null;
	};
	const resolveFeatureFlagsWaiters = (flags) => {
		pendingFeatureFlagsEvaluation.value = false;
		if (resolveFeatureFlagsWait) resolveFeatureFlagsWait(flags);
		clearFeatureFlagsWait();
	};
	const reset = () => {
		window.posthog?.reset?.();
		featureFlags.value = null;
		trackedDemoExp.value = {};
		pendingFeatureFlagsEvaluation.value = false;
		clearFeatureFlagsWait();
	};
	const getVariant = (experiment) => {
		return overrides.value[experiment] ?? featureFlags.value?.[experiment];
	};
	const isVariantEnabled = (experiment, variant) => {
		return getVariant(experiment) === variant;
	};
	/**
	* Checks if the given feature flag is enabled. Should only be used for boolean flags
	*/
	const isFeatureEnabled = (experiment) => {
		return getVariant(experiment) === true;
	};
	const hasPendingFeatureFlags = () => pendingFeatureFlagsEvaluation.value;
	const waitForFeatureFlags = async () => {
		if (!pendingFeatureFlagsEvaluation.value) return featureFlags.value;
		if (!featureFlagsWaitPromise) featureFlagsWaitPromise = new Promise((resolve) => {
			resolveFeatureFlagsWait = resolve;
		});
		return await featureFlagsWaitPromise;
	};
	if (!window.featureFlags) {
		const cachedOverrides = useStorage(LOCAL_STORAGE_EXPERIMENT_OVERRIDES).value;
		if (cachedOverrides) try {
			console.log("Overriding feature flags", cachedOverrides);
			if (typeof JSON.parse(cachedOverrides) === "object") overrides.value = JSON.parse(cachedOverrides);
		} catch (e) {
			console.log("Could not override experiment", e);
		}
		window.featureFlags = {
			override: (name, value) => {
				overrides.value[name] = value;
				try {
					useStorage(LOCAL_STORAGE_EXPERIMENT_OVERRIDES).value = JSON.stringify(overrides.value);
				} catch (e) {}
			},
			getVariant,
			getAll: () => featureFlags.value ?? {}
		};
	}
	const groupIdentify = (groupKey, instanceId) => {
		window.posthog?.group?.(groupKey, instanceId);
	};
	const identify = () => {
		const instanceId = rootStore.instanceId;
		const user = usersStore.currentUser;
		if (!user) return;
		const traits = {
			instance_id: instanceId,
			version_cli: rootStore.versionCli
		};
		if (typeof user.createdAt === "string") traits.created_at_timestamp = new Date(user.createdAt).getTime();
		window.posthog?.identify?.(`${instanceId}#${user.id}`, traits);
	};
	const trackExperiment = (featFlags, name) => {
		const variant = featFlags[name];
		if (!variant || trackedDemoExp.value[name] === variant) return;
		telemetry.track(TELEMETRY_EVENT.PLATFORM.USER_IS_PART_OF_EXPERIMENT, {
			name,
			variant
		});
		trackedDemoExp.value[name] = variant;
	};
	const trackExperiments = (featFlags) => {
		EXPERIMENTS_TO_TRACK.forEach((name) => trackExperiment(featFlags, name));
	};
	const trackExperimentsDebounced = debounce(trackExperiments, { debounceTime: 2e3 });
	const init = (evaluatedFeatureFlags) => {
		if (!window.posthog) return;
		const config = settingsStore.settings.posthog;
		if (!config.enabled) return;
		const userId = usersStore.currentUserId;
		if (!userId) return;
		const instanceId = rootStore.instanceId;
		const distinctId = `${instanceId}#${userId}`;
		const options = {
			api_host: settingsStore.settings.posthog.proxy,
			autocapture: config.autocapture,
			disable_session_recording: config.disableSessionRecording,
			debug: false,
			session_recording: { maskAllInputs: false }
		};
		if (evaluatedFeatureFlags && Object.keys(evaluatedFeatureFlags).length) options.bootstrap = {
			distinctID: distinctId,
			featureFlags: evaluatedFeatureFlags
		};
		window.posthog?.init(config.apiKey, {
			...options,
			loaded: () => {
				identify();
				groupIdentify(POSTHOG_GROUP_TYPE_INSTANCE, instanceId);
			}
		});
		if (evaluatedFeatureFlags && Object.keys(evaluatedFeatureFlags).length) {
			featureFlags.value = evaluatedFeatureFlags;
			resolveFeatureFlagsWaiters(featureFlags.value);
			trackExperimentsDebounced(featureFlags.value);
		} else {
			pendingFeatureFlagsEvaluation.value = true;
			window.posthog?.onFeatureFlags?.((_, map) => {
				featureFlags.value = map;
				resolveFeatureFlagsWaiters(featureFlags.value);
				trackExperimentsDebounced(featureFlags.value);
			});
		}
	};
	const setMetadata = (metadata, target) => {
		if (typeof window.posthog?.people?.set !== "function") return;
		if (typeof window.posthog?.register !== "function") return;
		if (target === "user") window.posthog?.people?.set(metadata);
		else if (target === "events") window.posthog?.register(metadata);
	};
	const capture = (event, properties = {}) => {
		if (typeof window.posthog?.capture === "function") window.posthog.capture(event, properties);
	};
	return {
		init,
		isFeatureEnabled,
		isVariantEnabled,
		getVariant,
		hasPendingFeatureFlags,
		waitForFeatureFlags,
		reset,
		identify,
		groupIdentify,
		setMetadata,
		capture,
		overrides
	};
});
//#endregion
export { DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL as $, CREDENTIAL_EDIT_MODAL_KEY as $t, MOVE_FOLDER_MODAL_KEY as A, REPORTED_SOURCE_FRIEND as At, COMPANY_SIZE_KEY as B, ROLE_CUSTOMER_SUPPORT as Bt, SOURCE_CONTROL_PUSH_MODAL_KEY as C, OTHER_INDUSTRY_OPTION as Ct, FOLDER_NAME_ONLY_DOTS_REGEX as D, PHYSICAL_RETAIL_OR_SERVICES as Dt, FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX as E, PERSONAL_COMPANY_TYPE as Et, COMPANY_INDUSTRY_EXTENDED_KEY as F, REPORTED_SOURCE_OTHER_KEY as Ft, DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL as G, ROLE_OTHER as Gt, COMPANY_TYPE_KEY as H, ROLE_DEVOPS as Ht, COMPANY_SIZE_1000_OR_MORE as I, REPORTED_SOURCE_PODCAST as It, DEVOPS_AUTOMATION_GOAL_OTHER_KEY as J, ROLE_SECURITY as Jt, DEVOPS_AUTOMATION_DATA_SYNCING_GOAL as K, ROLE_OTHER_KEY as Kt, COMPANY_SIZE_100_499 as L, REPORTED_SOURCE_TWITTER as Lt, AUTOMATION_BENEFICIARY_MY_TEAM as M, REPORTED_SOURCE_KEY as Mt, AUTOMATION_BENEFICIARY_OTHER_TEAMS as N, REPORTED_SOURCE_LINKEDIN as Nt, ILLEGAL_FOLDER_CHARACTERS as O, REAL_ESTATE_OR_CONSTRUCTION as Ot, AUTOMATION_BENEFICIARY_SELF as P, REPORTED_SOURCE_OTHER as Pt, DEVOPS_REPORTING_GOAL as Q, TELECOMS_INDUSTRY as Qt, COMPANY_SIZE_20_99 as R, REPORTED_SOURCE_YOUTUBE as Rt, SOURCE_CONTROL_PULL_RESULT_MODAL_KEY as S, OTHER_COMPANY_TYPE as St, FOLDER_LIST_ITEM_ACTIONS as T, PERSONALIZATION_MODAL_KEY as Tt, DELETE_USER_MODAL_KEY as U, ROLE_ENGINEERING as Ut, COMPANY_SIZE_PERSONAL_USE as V, ROLE_DATA_SCIENCE as Vt, DEVOPS_AUTOMATION_CI_CD_GOAL as W, ROLE_KEY as Wt, DEVOPS_INCIDENT_RESPONSE_GOAL as X, SECURITY_INDUSTRY as Xt, DEVOPS_AUTOMATION_OTHER as Y, SAAS_COMPANY_TYPE as Yt, DEVOPS_MONITORING_AND_ALERTING_GOAL as Z, SYSTEMS_INTEGRATOR_COMPANY_TYPE as Zt, COMMUNITY_PACKAGE_MANAGE_ACTIONS as _, MARKETING_AUTOMATION_REPORTING as _t, listenForModalChanges as a, DEBUG_PAYWALL_MODAL_KEY as an, HEALTHCARE_INDUSTRY as at, PROJECT_MOVE_RESOURCE_MODAL as b, OTHER_AUTOMATION_GOAL as bt, register as c, TELEMETRY_EVENT as cn, LEGAL_INDUSTRY as ct, API_KEY_SCOPE_GROUPS as d, MARKETING_AUTOMATION_AD_CAMPAIGN as dt, CREDENTIAL_SELECT_MODAL_KEY as en, DIGITAL_AGENCY_COMPANY_TYPE as et, READ_SCOPE_ACTIONS as f, MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION as ft, COMMUNITY_PACKAGE_INSTALL_MODAL_KEY as g, MARKETING_AUTOMATION_OTHER as gt, COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY as h, MARKETING_AUTOMATION_LEAD_GENERATION_GOAL as ht, telemetry as i, CANCELLABLE_EXECUTION_STATUSES as in, GOVERNMENT_INDUSTRY as it, AUTOMATION_BENEFICIARY_KEY as j, REPORTED_SOURCE_GOOGLE as jt, MCP_ACCESS_ACTIONS as k, REPORTED_SOURCE_EVENT as kt, subscribe as l, useStorage as ln, MANUFACTURING_INDUSTRY as lt, COMMUNITY_NODES_RISKS_DOCS_URL as m, MARKETING_AUTOMATION_GOAL_KEY as mt, useTelemetry as n, COMMUNITY_PLUS_DOCS_URL as nn, EDUCATION_TYPE as nt, useUIStore as o, ANNOTATION_TAGS_MANAGER_MODAL_KEY as on, INVITE_USER_MODAL_KEY as ot, COMMUNITY_NODES_INSTALLATION_DOCS_URL as p, MARKETING_AUTOMATION_DATA_SYNCHING as pt, DEVOPS_AUTOMATION_GOAL_KEY as q, ROLE_SALES_AND_MARKETING as qt, TelemetryPlugin as r, COMMUNITY_PLUS_ENROLLMENT_MODAL as rn, FINANCE_INSURANCE_INDUSTRY as rt, getAll as s, TAGS_MANAGER_MODAL_KEY as sn, IT_INDUSTRY as st, usePostHog as t, VARIABLE_MODAL_KEY as tn, ECOMMERCE_COMPANY_TYPE as tt, API_KEY_CREATE_OR_EDIT_MODAL_KEY as u, MARKETING_AUTOMATION_ACTIONS as ut, NPM_KEYWORD_SEARCH_URL as v, MARKETING_INDUSTRY as vt, DELETE_FOLDER_MODAL_KEY as w, OTHER_MARKETING_AUTOMATION_GOAL_KEY as wt, SOURCE_CONTROL_PULL_MODAL_KEY as x, OTHER_COMPANY_INDUSTRY_EXTENDED_KEY as xt, DEFAULT_PROJECT_ICON as y, MEDIA_INDUSTRY as yt, COMPANY_SIZE_500_999 as z, ROLE_BUSINESS_OWNER as zt };
