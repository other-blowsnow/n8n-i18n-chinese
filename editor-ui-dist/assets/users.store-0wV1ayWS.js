import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { $i as WORKFLOW_SETTINGS_MODAL_KEY, $t as EXECUTE_COMMAND_NODE_TYPE, Ai as MFA_SETUP_MODAL_KEY, At as CALENDLY_TRIGGER_NODE_TYPE, Bi as VERSIONS_MODAL_KEY, Bn as PAGERDUTY_NODE_TYPE, Ca as LOCAL_STORAGE_SIDEBAR_WIDTH, Ci as FROM_AI_PARAMETERS_MODAL_KEY, Dn as MICROSOFT_TEAMS_NODE_TYPE, En as MICROSOFT_EXCEL_NODE_TYPE, Fi as NPS_SURVEY_MODAL_KEY, Ft as CLEARBIT_NODE_TYPE, Gi as WORKFLOW_DIFF_MODAL_KEY, Hi as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, Ii as PROMPT_MFA_CODE_MODAL_KEY, It as CODE_NODE_TYPE, Ji as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, Jn as SALESFORCE_NODE_TYPE, Jt as ELASTIC_SECURITY_NODE_TYPE, Ki as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, Li as SECRETS_PROVIDER_CONNECTION_MODAL_KEY, Ml as POSTHOG_EVENTS_BLACKLIST, Na as ROLE, Nl as TELEMETRY_EVENTS, Nn as NOTION_TRIGGER_NODE_TYPE, Oi as INSTANCE_AI_CREDENTIAL_SETUP_MODAL_KEY, Ot as BAMBOO_HR_NODE_TYPE, Pi as NEW_ASSISTANT_SESSION_MODAL, Qi as WORKFLOW_PUBLISH_MODAL_KEY, Qn as SET_NODE_TYPE, Ri as SETUP_CREDENTIALS_MODAL_KEY, Si as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, Sr as ZENDESK_TRIGGER_NODE_TYPE, Ti as IMPORT_WORKFLOW_URL_MODAL_KEY, Ui as WORKFLOW_ACTIVE_MODAL_KEY, Vi as WHATS_NEW_MODAL_KEY, Wi as WORKFLOW_DESCRIPTION_MODAL_KEY, Wn as QUICKBOOKS_NODE_TYPE, Xi as WORKFLOW_HISTORY_VERSION_RESTORE, Xn as SEGMENT_NODE_TYPE, Xt as EMAIL_SEND_NODE_TYPE, Yi as WORKFLOW_HISTORY_PUBLISH_MODAL_KEY, Yn as SCHEDULE_TRIGGER_NODE_TYPE, Zi as WORKFLOW_HISTORY_VERSION_UNPUBLISH, Zn as SERVICENOW_NODE_TYPE, _i as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY, _r as WORKABLE_TRIGGER_NODE_TYPE, ar as SPREADSHEET_FILE_NODE_TYPE, bi as EXPERIMENT_TEMPLATE_RECO_V2_KEY, cr as SWITCH_NODE_TYPE, di as AI_BUILDER_DIFF_MODAL_KEY, dn as HUBSPOT_TRIGGER_NODE_TYPE, ea as WORKFLOW_SHARE_MODAL_KEY, f as DOCS_DOMAIN, fi as AI_GATEWAY_TOP_UP_MODAL_KEY, fn as IF_NODE_TYPE, gi as CONFIRM_PASSWORD_MODAL_KEY, gn as JIRA_TRIGGER_NODE_TYPE, gr as WOOCOMMERCE_TRIGGER_NODE_TYPE, hi as CHAT_EMBED_MODAL_KEY, hn as JIRA_NODE_TYPE, ki as LOG_STREAM_MODAL_KEY, li as ABOUT_MODAL_KEY, ll as hasScope$1, ln as HTTP_REQUEST_NODE_TYPE, mi as CHANGE_PASSWORD_MODAL_KEY, mn as ITEM_LISTS_NODE_TYPE, mr as WEBHOOK_NODE_TYPE, nr as SLACK_NODE_TYPE, on as GITHUB_TRIGGER_NODE_TYPE, pi as BINARY_DATA_VIEW_MODAL_KEY, qi as WORKFLOW_HISTORY_DIFF_MODAL_KEY, ql as EXPERIMENTS_TO_TRACK, si as VIEWS, sn as GOOGLE_SHEETS_NODE_TYPE, ua as LOCAL_STORAGE_EXPERIMENT_OVERRIDES, ui as AGENT_CONFIRMATION_MODAL_KEY, ur as THE_HIVE_TRIGGER_NODE_TYPE, vi as DELETE_SECRETS_PROVIDER_MODAL_KEY, wa as LOCAL_STORAGE_THEME, wi as IMPORT_CURL_MODAL_KEY, xi as EXPERIMENT_TEMPLATE_RECO_V3_KEY, xr as ZENDESK_NODE_TYPE, yi as DUPLICATE_MODAL_KEY, yr as XERO_NODE_TYPE, zi as STOP_MANY_EXECUTIONS_MODAL_KEY } from "./constants-DIP3enMx.js";
import { o as require_identity } from "./merge-Dxq-OM4r.js";
import { S as BROWSER_ID_STORAGE_KEY, T as defineStore, c as makeRestApiRequest, t as useRootStore, u as post } from "./useRootStore-BUCt9XJo.js";
import { C as updateCurrentUserSettings, D as validateSignupToken, E as validatePasswordToken, Rn as STORES, S as updateCurrentUserPassword, St as verifyMfaCode, T as updateOtherUserSettings, _ as logout, _t as canEnableMFA, b as submitPersonalizationSurvey, bt as getMfaQR, d as deleteUser, f as generateInviteLink, g as loginCurrentUser, h as login, m as getUsers, p as getPasswordResetLink, t as useSettingsStore, u as changePassword, v as sendForgotPasswordEmail, vt as disableMfa, w as updateGlobalRole, wn as sendConfirmationEmail, x as updateCurrentUser, xt as updateEnforceMfa, y as setupOwner, yt as enableMfa } from "./settings.store-B-RgkKfn.js";
import { _ as useLocalStorage, s as useAsyncState, v as useMediaQuery, w as useStorage$1 } from "./core-nZc0i8VB.js";
import { t as useDebounce } from "./useDebounce-CJWsgmtU.js";
//#region src/features/settings/users/users.constants.ts
var DELETE_USER_MODAL_KEY = "deleteUser";
var INVITE_USER_MODAL_KEY = "inviteUser";
var PERSONALIZATION_MODAL_KEY = "personalization";
var WORK_AREA_KEY = "workArea";
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
var CODING_SKILL_KEY = "codingSkill";
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
var AUTOMATION_GOAL_KEY = "automationGoal";
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
var CUSTOMER_INTEGRATIONS_GOAL = "customer-integrations";
var CUSTOMER_SUPPORT_GOAL = "customer-support";
var FINANCE_ACCOUNTING_GOAL = "finance-accounting";
var PRODUCT_GOAL = "product";
var SALES_MARKETING_GOAL = "sales-marketing";
var SECURITY_GOAL = "security";
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
//#region src/features/settings/users/users.utils.ts
function isPersonalizationSurveyV2OrLater(data) {
	return "version" in data;
}
function getPersonalizedNodeTypes(answers) {
	if (!answers) return [];
	if (isPersonalizationSurveyV2OrLater(answers)) return getPersonalizationSurveyV2OrLater(answers);
	return getPersonalizationSurveyV1(answers);
}
function getPersonalizationSurveyV2OrLater(answers) {
	let nodeTypes = [];
	const { version, ...data } = answers;
	if (Object.keys(data).length === 0) return [];
	const companySize = answers[COMPANY_SIZE_KEY];
	const companyType = answers[COMPANY_TYPE_KEY];
	const automationGoal = "automationGoal" in answers ? answers[AUTOMATION_GOAL_KEY] : void 0;
	let codingSkill = null;
	if ("codingSkill" in answers && answers["codingSkill"]) {
		codingSkill = parseInt(answers[CODING_SKILL_KEY], 10);
		codingSkill = isNaN(codingSkill) ? 0 : codingSkill;
	}
	if (companyType === "ecommerce") nodeTypes = nodeTypes.concat(WOOCOMMERCE_TRIGGER_NODE_TYPE);
	else if (companyType === "msp") nodeTypes = nodeTypes.concat(JIRA_TRIGGER_NODE_TYPE);
	else if ((companyType === "personal" || automationGoal === "other" || automationGoal === "not-sure-yet") && codingSkill !== null && codingSkill >= 4) nodeTypes = nodeTypes.concat(WEBHOOK_NODE_TYPE);
	else if ((companyType === "personal" || automationGoal === "other" || automationGoal === "not-sure-yet") && codingSkill !== null && codingSkill < 3) nodeTypes = nodeTypes.concat(SCHEDULE_TRIGGER_NODE_TYPE);
	else if (automationGoal === "customer-integrations") nodeTypes = nodeTypes.concat(WEBHOOK_NODE_TYPE);
	else if (automationGoal === "customer-support" || automationGoal === "finance-accounting") nodeTypes = nodeTypes.concat(ZENDESK_TRIGGER_NODE_TYPE);
	else if (automationGoal === "sales-marketing") nodeTypes = nodeTypes.concat(HUBSPOT_TRIGGER_NODE_TYPE);
	else if (automationGoal === "hr") nodeTypes = nodeTypes.concat(WORKABLE_TRIGGER_NODE_TYPE);
	else if (automationGoal === "operations") nodeTypes = nodeTypes.concat(SCHEDULE_TRIGGER_NODE_TYPE);
	else if (automationGoal === "product") nodeTypes = nodeTypes.concat(NOTION_TRIGGER_NODE_TYPE);
	else if (automationGoal === "security") nodeTypes = nodeTypes.concat(THE_HIVE_TRIGGER_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(WEBHOOK_NODE_TYPE);
	if (codingSkill !== null && codingSkill >= 4) nodeTypes = nodeTypes.concat(CODE_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(ITEM_LISTS_NODE_TYPE);
	if (codingSkill !== null && codingSkill < 3) nodeTypes = nodeTypes.concat(IF_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(SWITCH_NODE_TYPE);
	if (companySize === "500-999" || companySize === "1000+") switch (automationGoal) {
		case CUSTOMER_INTEGRATIONS_GOAL:
			nodeTypes = nodeTypes.concat(HTTP_REQUEST_NODE_TYPE);
			break;
		case CUSTOMER_SUPPORT_GOAL:
			nodeTypes = nodeTypes.concat(ZENDESK_NODE_TYPE);
			break;
		case SALES_MARKETING_GOAL:
			nodeTypes = nodeTypes.concat(SALESFORCE_NODE_TYPE);
			break;
		case "hr":
			nodeTypes = nodeTypes.concat(SERVICENOW_NODE_TYPE);
			break;
		case PRODUCT_GOAL:
			nodeTypes = nodeTypes.concat(JIRA_NODE_TYPE);
			break;
		case FINANCE_ACCOUNTING_GOAL:
			nodeTypes = nodeTypes.concat(SPREADSHEET_FILE_NODE_TYPE);
			break;
		case SECURITY_GOAL:
			nodeTypes = nodeTypes.concat(ELASTIC_SECURITY_NODE_TYPE);
			break;
		default: nodeTypes = nodeTypes.concat(SLACK_NODE_TYPE);
	}
	else switch (automationGoal) {
		case CUSTOMER_INTEGRATIONS_GOAL:
			nodeTypes = nodeTypes.concat(HTTP_REQUEST_NODE_TYPE);
			break;
		case CUSTOMER_SUPPORT_GOAL:
			nodeTypes = nodeTypes.concat(ZENDESK_NODE_TYPE);
			break;
		case FINANCE_ACCOUNTING_GOAL:
			nodeTypes = nodeTypes.concat(QUICKBOOKS_NODE_TYPE);
			break;
		case "hr":
			nodeTypes = nodeTypes.concat(BAMBOO_HR_NODE_TYPE);
			break;
		case PRODUCT_GOAL:
			nodeTypes = nodeTypes.concat(JIRA_NODE_TYPE);
			break;
		case SALES_MARKETING_GOAL:
			nodeTypes = nodeTypes.concat(GOOGLE_SHEETS_NODE_TYPE);
			break;
		case SECURITY_GOAL:
			nodeTypes = nodeTypes.concat(ELASTIC_SECURITY_NODE_TYPE);
			break;
		default: nodeTypes = nodeTypes.concat(SLACK_NODE_TYPE);
	}
	nodeTypes = nodeTypes.concat(SET_NODE_TYPE);
	return nodeTypes;
}
function getPersonalizationSurveyV1(answers) {
	const companySize = answers[COMPANY_SIZE_KEY];
	const workArea = answers[WORK_AREA_KEY];
	function isWorkAreaAnswer(name) {
		if (Array.isArray(workArea)) return workArea.includes(name);
		else return workArea === name;
	}
	const workAreaIsEmpty = !workArea || workArea.length === 0;
	if (companySize === null && workAreaIsEmpty && answers["codingSkill"] === null) return [];
	let codingSkill = null;
	if (answers["codingSkill"]) {
		codingSkill = parseInt(answers[CODING_SKILL_KEY], 10);
		codingSkill = isNaN(codingSkill) ? 0 : codingSkill;
	}
	let nodeTypes = [];
	if (isWorkAreaAnswer("IT-Engineering")) nodeTypes = nodeTypes.concat(WEBHOOK_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(SCHEDULE_TRIGGER_NODE_TYPE);
	if (codingSkill !== null && codingSkill >= 4) nodeTypes = nodeTypes.concat(CODE_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(ITEM_LISTS_NODE_TYPE);
	if (codingSkill !== null && codingSkill < 3) nodeTypes = nodeTypes.concat(IF_NODE_TYPE);
	else nodeTypes = nodeTypes.concat(SWITCH_NODE_TYPE);
	if (companySize === "500-999" || companySize === "1000+") if (isWorkAreaAnswer("sales-businessDevelopment")) nodeTypes = nodeTypes.concat(SALESFORCE_NODE_TYPE);
	else if (isWorkAreaAnswer("security")) nodeTypes = nodeTypes.concat([ELASTIC_SECURITY_NODE_TYPE, HTTP_REQUEST_NODE_TYPE]);
	else if (isWorkAreaAnswer("product")) nodeTypes = nodeTypes.concat([JIRA_TRIGGER_NODE_TYPE, SEGMENT_NODE_TYPE]);
	else if (isWorkAreaAnswer("IT-Engineering")) nodeTypes = nodeTypes.concat([GITHUB_TRIGGER_NODE_TYPE, HTTP_REQUEST_NODE_TYPE]);
	else nodeTypes = nodeTypes.concat([MICROSOFT_EXCEL_NODE_TYPE, MICROSOFT_TEAMS_NODE_TYPE]);
	else if (isWorkAreaAnswer("sales-businessDevelopment")) nodeTypes = nodeTypes.concat(CLEARBIT_NODE_TYPE);
	else if (isWorkAreaAnswer("security")) nodeTypes = nodeTypes.concat([PAGERDUTY_NODE_TYPE, HTTP_REQUEST_NODE_TYPE]);
	else if (isWorkAreaAnswer("product")) nodeTypes = nodeTypes.concat([JIRA_TRIGGER_NODE_TYPE, CALENDLY_TRIGGER_NODE_TYPE]);
	else if (isWorkAreaAnswer("IT-Engineering")) nodeTypes = nodeTypes.concat([EXECUTE_COMMAND_NODE_TYPE, HTTP_REQUEST_NODE_TYPE]);
	else if (isWorkAreaAnswer("finance")) nodeTypes = nodeTypes.concat([
		XERO_NODE_TYPE,
		QUICKBOOKS_NODE_TYPE,
		SPREADSHEET_FILE_NODE_TYPE
	]);
	else nodeTypes = nodeTypes.concat([EMAIL_SEND_NODE_TYPE, SLACK_NODE_TYPE]);
	nodeTypes = nodeTypes.concat(SET_NODE_TYPE);
	return nodeTypes;
}
//#endregion
//#region src/features/shared/tags/tags.constants.ts
var TAGS_MANAGER_MODAL_KEY = "tagsManager";
var ANNOTATION_TAGS_MANAGER_MODAL_KEY = "annotationTagsManager";
//#endregion
//#region src/features/execution/executions/executions.constants.ts
var DEBUG_PAYWALL_MODAL_KEY = "debugPaywall";
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
//#region src/app/moduleInitializer/modalRegistry.ts
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
//#region src/app/composables/useStorage.ts
function useStorage(key) {
	const data = useStorage$1(key, null, void 0, { writeDefaults: false });
	if (data.value === "undefined") data.value = null;
	return data;
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
		const traits = {
			instance_id: instanceId,
			version_cli: rootStore.versionCli
		};
		if (user && typeof user.createdAt === "string") traits.created_at_timestamp = new Date(user.createdAt).getTime();
		const id = user ? `${instanceId}#${user.id}` : instanceId;
		window.posthog?.identify?.(id, traits);
	};
	const trackExperiment = (featFlags, name) => {
		const variant = featFlags[name];
		if (!variant || trackedDemoExp.value[name] === variant) return;
		telemetry.track(TELEMETRY_EVENTS.IS_PART_OF_EXPERIMENT, {
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
//#region src/app/plugins/telemetry/index.ts
var Telemetry = class {
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
		if (!this.rudderStack) return;
		const posthogSessionId = window.posthog?.get_session_id?.();
		const updatedProperties = {
			...properties,
			version_cli: useRootStore().versionCli,
			posthog_session_id: posthogSessionId
		};
		this.rudderStack.track(event, updatedProperties, { context: { ip: "0.0.0.0" } });
		if (!POSTHOG_EVENTS_BLACKLIST.includes(event)) usePostHog().capture(event, updatedProperties);
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
var telemetry = new Telemetry();
var TelemetryPlugin = { install(app) {
	app.config.globalProperties.$telemetry = telemetry;
} };
//#endregion
//#region src/app/composables/useTelemetry.ts
function useTelemetry() {
	return telemetry;
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
			showAuthSelector: false
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
	const pendingNotificationsForViews = ref({});
	const areNotificationsSuppressed = ref(false);
	const allowErrorNotificationsWhenSuppressed = ref(false);
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
			hideAskAssistant: options.hideAskAssistant
		};
		openModal(CREDENTIAL_EDIT_MODAL_KEY);
	};
	const openNewCredential = (type, showAuthOptions = false, forceManualMode = false, projectId, suggestedName, nodeName, contextNode, options = {}) => {
		setActiveId(CREDENTIAL_EDIT_MODAL_KEY, type);
		setShowAuthSelector(CREDENTIAL_EDIT_MODAL_KEY, showAuthOptions);
		modalsById.value[CREDENTIAL_EDIT_MODAL_KEY] = {
			...modalsById.value[CREDENTIAL_EDIT_MODAL_KEY],
			forceManualMode,
			projectId,
			suggestedName,
			nodeName,
			contextNode,
			hideAskAssistant: options.hideAskAssistant
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
	const setNotificationsForView = (view, notifications) => {
		pendingNotificationsForViews.value[view] = notifications;
	};
	const setNotificationsSuppressed = (suppressed, options) => {
		areNotificationsSuppressed.value = suppressed;
		allowErrorNotificationsWhenSuppressed.value = suppressed && options?.allowErrors === true;
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
		sidebarMenuCollapsed,
		sidebarWidth,
		theme: computed(() => theme.value),
		modalsById,
		currentView,
		isAnyModalOpen,
		pendingNotificationsForViews,
		areNotificationsSuppressed,
		allowErrorNotificationsWhenSuppressed,
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
		setNotificationsForView,
		setNotificationsSuppressed,
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
//#region src/features/settings/users/invitation.api.ts
async function inviteUsers(context, params) {
	return await makeRestApiRequest(context, "POST", "/invitations", params);
}
async function acceptInvitation(context, params) {
	if (!params.token) throw new Error("Token is required");
	return await makeRestApiRequest(context, "POST", "/invitations/accept", params);
}
//#endregion
//#region src/app/api/workflow-webhooks.ts
var N8N_API_BASE_URL = "https://api.n8n.io/api";
var CONTACT_EMAIL_SUBMISSION_ENDPOINT = "/accounts/onboarding";
async function submitEmailOnSignup(instanceId, currentUser, email, agree) {
	return await post(N8N_API_BASE_URL, CONTACT_EMAIL_SUBMISSION_ENDPOINT, {
		instance_id: instanceId,
		user_id: `${instanceId}#${currentUser.id}`,
		email,
		agree,
		agree_updates: true
	});
}
//#endregion
//#region src/app/utils/rbac/checks/hasRole.ts
var hasRole = (checkRoles) => {
	const currentUser = useUsersStore().currentUser;
	if (currentUser && checkRoles) {
		const userRole = currentUser.isDefaultUser ? ROLE.Default : currentUser.role;
		return checkRoles.includes(userRole);
	}
	return false;
};
//#endregion
//#region src/app/stores/rbac.store.ts
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
		roleMappingRule: {}
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
	function hasScope(scope, context, options) {
		return hasScope$1(scope, {
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
		hasScope
	};
});
//#endregion
//#region src/app/utils/rbac/checks/hasScope.ts
var hasScope = (opts) => {
	if (!opts?.scope) return true;
	const { projectId, resourceType, resourceId, scope, options } = opts;
	return useRBACStore().hasScope(scope, {
		projectId,
		resourceType,
		resourceId
	}, options);
};
//#endregion
//#region src/app/utils/rbac/checks/isAuthenticated.ts
var isAuthenticated = (options) => {
	if (options?.bypass?.()) return true;
	return !!useUsersStore().currentUser;
};
var shouldEnableMfa = () => {
	const hasUserEnabledMfa = useUsersStore().currentUser?.mfaAuthenticated ?? false;
	const isMfaEnforced = useSettingsStore().isMFAEnforced;
	return !hasUserEnabledMfa && isMfaEnforced;
};
//#endregion
//#region src/app/utils/rbac/checks/isDefaultUser.ts
var isDefaultUser = () => {
	const currentUser = useUsersStore().currentUser;
	if (currentUser) return currentUser.isDefaultUser;
	return false;
};
//#endregion
//#region src/app/utils/rbac/checks/isInstanceOwner.ts
var isInstanceOwner = () => useUsersStore().isInstanceOwner;
//#endregion
//#region src/app/utils/rbac/checks/isEnterpriseFeatureEnabled.ts
var isEnterpriseFeatureEnabled = (options) => {
	if (!options?.feature) return true;
	const features = Array.isArray(options.feature) ? options.feature : [options.feature];
	const settingsStore = useSettingsStore();
	if ((options.mode ?? "allOf") === "allOf") return features.every((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
	else return features.some((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
};
//#endregion
//#region src/app/utils/rbac/checks/isGuest.ts
var isGuest = () => {
	return !useUsersStore().currentUser;
};
//#endregion
//#region src/app/utils/rbac/checks/isValid.ts
var isValid = (fn) => {
	return fn ? fn() : false;
};
//#endregion
//#region src/app/utils/rbac/permissions.ts
var permissions = {
	authenticated: isAuthenticated,
	custom: isValid,
	defaultUser: isDefaultUser,
	instanceOwner: isInstanceOwner,
	enterprise: isEnterpriseFeatureEnabled,
	guest: isGuest,
	rbac: hasScope,
	role: hasRole
};
function hasPermission(permissionNames, options) {
	let valid = true;
	for (const permissionName of permissionNames) {
		const permissionOptions = options?.[permissionName] ?? {};
		const permissionFn = permissions[permissionName];
		valid = valid && permissionFn(permissionOptions);
	}
	return valid;
}
//#endregion
//#region src/features/settings/users/users.store.ts
var _isPendingUser = (user) => !!user?.isPending;
var _isInstanceOwner = (user) => user?.role === ROLE.Owner;
var _isDefaultUser = (user) => _isInstanceOwner(user) && _isPendingUser(user);
var _isAdmin = (user) => user?.role === ROLE.Admin;
var useUsersStore = defineStore(STORES.USERS, () => {
	const initialized = ref(false);
	const currentUserId = ref(null);
	const usersById = ref({});
	const userQuota = ref(-1);
	const loginHooks = ref([]);
	const logoutHooks = ref([]);
	const uiStore = useUIStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const allUsers = computed(() => Object.values(usersById.value));
	const currentUser = computed(() => currentUserId.value ? usersById.value[currentUserId.value] : null);
	const userActivated = computed(() => Boolean(currentUser.value?.settings?.userActivated));
	const isDefaultUser = computed(() => _isDefaultUser(currentUser.value));
	const isInstanceOwner = computed(() => _isInstanceOwner(currentUser.value));
	const isAdmin = computed(() => _isAdmin(currentUser.value));
	const isAdminOrOwner = computed(() => isInstanceOwner.value || isAdmin.value);
	const mfaEnabled = computed(() => currentUser.value?.mfaEnabled ?? false);
	const globalRoleName = computed(() => currentUser.value?.role ?? "default");
	const userClaimedAiCredits = computed(() => currentUser.value?.settings?.userClaimedAiCredits);
	const isEasyAIWorkflowOnboardingDone = computed(() => Boolean(currentUser.value?.settings?.easyAIWorkflowOnboarded));
	const canUserUpdateVersion = computed(() => {
		return isInstanceOwner.value;
	});
	const setEasyAIWorkflowOnboardingDone = () => {
		if (currentUser.value?.settings) currentUser.value.settings.easyAIWorkflowOnboarded = true;
	};
	const isCalloutDismissed = (callout) => Boolean(currentUser.value?.settings?.dismissedCallouts?.[callout]);
	const setCalloutDismissed = (callout) => {
		if (currentUser.value?.settings) {
			if (!currentUser.value?.settings?.dismissedCallouts) currentUser.value.settings.dismissedCallouts = {};
			currentUser.value.settings.dismissedCallouts[callout] = true;
		}
	};
	const personalizedNodeTypes = computed(() => {
		const user = currentUser.value;
		if (!user) return [];
		const answers = user.personalizationAnswers;
		if (!answers) return [];
		return getPersonalizedNodeTypes(answers);
	});
	const usersLimitNotReached = computed(() => userQuota.value === -1 || userQuota.value > allUsers.value.length);
	const addUsers = (newUsers) => {
		newUsers.forEach((userResponse) => {
			const updatedUser = {
				...usersById.value[userResponse.id] || {},
				...userResponse
			};
			const user = {
				...updatedUser,
				fullName: userResponse.firstName ? `${updatedUser.firstName} ${updatedUser.lastName || ""}` : void 0,
				isDefaultUser: _isDefaultUser(updatedUser),
				isPendingUser: _isPendingUser(updatedUser)
			};
			usersById.value = {
				...usersById.value,
				[user.id]: user
			};
		});
	};
	const setCurrentUser = async (user) => {
		addUsers([user]);
		currentUserId.value = user.id;
		for (const hook of loginHooks.value) try {
			await hook(user);
		} catch (error) {
			console.error("Error executing login hook:", error);
		}
	};
	const loginWithCookie = async () => {
		const user = await loginCurrentUser(rootStore.restApiContext);
		if (!user) return;
		await setCurrentUser(user);
	};
	const initialize = async () => {
		if (initialized.value) return;
		try {
			await loginWithCookie();
			initialized.value = true;
		} catch (e) {}
	};
	const unsetCurrentUser = () => {
		currentUserId.value = null;
	};
	const deleteUserById = (userId) => {
		const { [userId]: _, ...rest } = usersById.value;
		usersById.value = rest;
	};
	const setPersonalizationAnswers = (answers) => {
		if (!currentUser.value) return;
		usersById.value = {
			...usersById.value,
			[currentUser.value.id]: {
				...currentUser.value,
				personalizationAnswers: answers
			}
		};
	};
	const loginWithCreds = async (params) => {
		const user = await login(rootStore.restApiContext, params);
		if (!user) return;
		await setCurrentUser(user);
	};
	const registerLoginHook = (hook) => {
		loginHooks.value.push(hook);
	};
	const registerLogoutHook = (hook) => {
		logoutHooks.value.push(hook);
	};
	const logout$1 = async () => {
		await logout(rootStore.restApiContext);
		unsetCurrentUser();
		for (const hook of logoutHooks.value) try {
			await hook();
		} catch (error) {
			console.error("Error executing logout hook:", error);
		}
		localStorage.removeItem(BROWSER_ID_STORAGE_KEY);
	};
	const createOwner = async (params) => {
		const user = await setupOwner(rootStore.restApiContext, params);
		if (user) {
			await setCurrentUser(user);
			settingsStore.stopShowingSetupPage();
		}
	};
	const validateSignupToken$1 = async (params) => {
		return await validateSignupToken(rootStore.restApiContext, params);
	};
	const acceptInvitation$1 = async (params) => {
		const user = await acceptInvitation(rootStore.restApiContext, params);
		if (user) await setCurrentUser(user);
	};
	const sendForgotPasswordEmail$1 = async (params) => {
		await sendForgotPasswordEmail(rootStore.restApiContext, params);
	};
	const validatePasswordToken$1 = async (params) => {
		await validatePasswordToken(rootStore.restApiContext, params);
	};
	const changePassword$1 = async (params) => {
		await changePassword(rootStore.restApiContext, params);
	};
	const updateUser = async (params) => {
		const user = await updateCurrentUser(rootStore.restApiContext, params);
		addUsers([user]);
		return user;
	};
	const updateUserName = async (params) => {
		if (!currentUser.value) return;
		return await updateUser({
			email: currentUser.value.email,
			...params
		});
	};
	const updateUserSettings = async (settings) => {
		const updatedSettings = await updateCurrentUserSettings(rootStore.restApiContext, settings);
		if (currentUser.value) {
			currentUser.value.settings = updatedSettings;
			addUsers([currentUser.value]);
		}
	};
	const updateOtherUserSettings$1 = async (userId, settings) => {
		await updateOtherUserSettings(rootStore.restApiContext, userId, settings);
	};
	const updateCurrentUserPassword$1 = async (params) => {
		await updateCurrentUserPassword(rootStore.restApiContext, params);
	};
	const deleteUser$1 = async (params) => {
		await deleteUser(rootStore.restApiContext, params);
		deleteUserById(params.id);
	};
	const fetchUsers = async ({ take, skip, filter } = {}) => {
		if (!hasPermission(["rbac"], { rbac: { scope: "user:list" } })) return;
		const { items } = await getUsers(rootStore.restApiContext, {
			take: take ?? 50,
			skip: skip ?? 0,
			filter
		});
		addUsers(items);
	};
	const inviteUsers$1 = async (params) => {
		const invitedUsers = await inviteUsers(rootStore.restApiContext, params);
		addUsers(invitedUsers.map(({ user }) => ({
			isPending: true,
			...user
		})));
		return invitedUsers;
	};
	const reinviteUser = async ({ email, role }) => {
		const invitationResponse = await inviteUsers(rootStore.restApiContext, [{
			email,
			role
		}]);
		if (!invitationResponse[0].user.emailSent) throw Error(invitationResponse[0].error);
	};
	const getUserPasswordResetLink = async (params) => {
		return await getPasswordResetLink(rootStore.restApiContext, params);
	};
	const generateInviteLink$1 = async (params) => {
		return await generateInviteLink(rootStore.restApiContext, params);
	};
	const submitPersonalizationSurvey$1 = async (results) => {
		await submitPersonalizationSurvey(rootStore.restApiContext, results);
		setPersonalizationAnswers(results);
	};
	const showPersonalizationSurvey = async () => {
		if (settingsStore.isPersonalizationSurveyEnabled && currentUser.value && !currentUser.value.personalizationAnswers) uiStore.openModal(PERSONALIZATION_MODAL_KEY);
	};
	const fetchMfaQR = async () => {
		return await getMfaQR(rootStore.restApiContext);
	};
	const verifyMfaCode$1 = async (data) => {
		return await verifyMfaCode(rootStore.restApiContext, data);
	};
	const canEnableMFA$1 = async () => {
		return await canEnableMFA(rootStore.restApiContext);
	};
	const enableMfa$1 = async (data) => {
		await enableMfa(rootStore.restApiContext, data);
		if (currentUser.value) currentUser.value.mfaEnabled = true;
	};
	const disableMfa$1 = async (data) => {
		await disableMfa(rootStore.restApiContext, data);
		if (currentUser.value) currentUser.value.mfaEnabled = false;
	};
	const updateEnforceMfa$1 = async (enforce) => {
		await updateEnforceMfa(rootStore.restApiContext, enforce);
		settingsStore.isMFAEnforced = enforce;
	};
	const sendConfirmationEmail$1 = async () => {
		await sendConfirmationEmail(rootStore.restApiContext);
	};
	const updateGlobalRole$1 = async ({ id, newRoleName }) => {
		await updateGlobalRole(rootStore.restApiContext, {
			id,
			newRoleName
		});
		await fetchUsers({ filter: { ids: [id] } });
	};
	const submitContactEmail = async (email, agree) => {
		if (currentUser.value) return await submitEmailOnSignup(rootStore.instanceId, currentUser.value, email ?? currentUser.value.email, agree);
		return null;
	};
	const usersList = useAsyncState(async (filter) => await getUsers(rootStore.restApiContext, filter), {
		count: 0,
		items: []
	}, {
		immediate: false,
		resetOnExecute: false
	});
	const setUserQuota = (quota) => {
		if (typeof quota !== "undefined") userQuota.value = quota;
	};
	return {
		initialized,
		currentUserId,
		usersById,
		allUsers,
		currentUser,
		userActivated,
		isDefaultUser,
		isInstanceOwner,
		isAdmin,
		isAdminOrOwner,
		mfaEnabled,
		globalRoleName,
		personalizedNodeTypes,
		userClaimedAiCredits,
		isEasyAIWorkflowOnboardingDone,
		canUserUpdateVersion,
		usersLimitNotReached,
		addUsers,
		loginWithCookie,
		initialize,
		setPersonalizationAnswers,
		loginWithCreds,
		logout: logout$1,
		registerLoginHook,
		registerLogoutHook,
		createOwner,
		validateSignupToken: validateSignupToken$1,
		acceptInvitation: acceptInvitation$1,
		sendForgotPasswordEmail: sendForgotPasswordEmail$1,
		validatePasswordToken: validatePasswordToken$1,
		changePassword: changePassword$1,
		updateUser,
		updateUserName,
		updateUserSettings,
		updateOtherUserSettings: updateOtherUserSettings$1,
		updateCurrentUserPassword: updateCurrentUserPassword$1,
		deleteUser: deleteUser$1,
		fetchUsers,
		inviteUsers: inviteUsers$1,
		reinviteUser,
		getUserPasswordResetLink,
		generateInviteLink: generateInviteLink$1,
		submitPersonalizationSurvey: submitPersonalizationSurvey$1,
		showPersonalizationSurvey,
		fetchMfaQR,
		verifyMfaCode: verifyMfaCode$1,
		enableMfa: enableMfa$1,
		disableMfa: disableMfa$1,
		updateEnforceMfa: updateEnforceMfa$1,
		canEnableMFA: canEnableMFA$1,
		sendConfirmationEmail: sendConfirmationEmail$1,
		updateGlobalRole: updateGlobalRole$1,
		setEasyAIWorkflowOnboardingDone,
		isCalloutDismissed,
		setCalloutDismissed,
		submitContactEmail,
		setUserQuota,
		usersList
	};
});
//#endregion
export { COMPANY_SIZE_1000_OR_MORE as $, REPORTED_SOURCE_PODCAST as $t, SOURCE_CONTROL_PULL_MODAL_KEY as A, MARKETING_AUTOMATION_DATA_SYNCHING as At, CREDENTIAL_EDIT_MODAL_KEY as B, OTHER_INDUSTRY_OPTION as Bt, COMMUNITY_NODES_RISKS_DOCS_URL as C, INVITE_USER_MODAL_KEY as Ct, NPM_KEYWORD_SEARCH_URL as D, MARKETING_AUTOMATION_ACTIONS as Dt, COMMUNITY_PACKAGE_MANAGE_ACTIONS as E, MANUFACTURING_INDUSTRY as Et, FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX as F, MARKETING_INDUSTRY as Ft, DEBUG_PAYWALL_MODAL_KEY as G, REAL_ESTATE_OR_CONSTRUCTION as Gt, VARIABLE_MODAL_KEY as H, PERSONALIZATION_MODAL_KEY as Ht, FOLDER_NAME_ONLY_DOTS_REGEX as I, MEDIA_INDUSTRY as It, AUTOMATION_BENEFICIARY_KEY as J, REPORTED_SOURCE_GOOGLE as Jt, ANNOTATION_TAGS_MANAGER_MODAL_KEY as K, REPORTED_SOURCE_EVENT as Kt, ILLEGAL_FOLDER_CHARACTERS as L, OTHER_AUTOMATION_GOAL as Lt, SOURCE_CONTROL_PUSH_MODAL_KEY as M, MARKETING_AUTOMATION_LEAD_GENERATION_GOAL as Mt, DELETE_FOLDER_MODAL_KEY as N, MARKETING_AUTOMATION_OTHER as Nt, DEFAULT_PROJECT_ICON as O, MARKETING_AUTOMATION_AD_CAMPAIGN as Ot, FOLDER_LIST_ITEM_ACTIONS as P, MARKETING_AUTOMATION_REPORTING as Pt, COMPANY_INDUSTRY_EXTENDED_KEY as Q, REPORTED_SOURCE_OTHER_KEY as Qt, MCP_ACCESS_ACTIONS as R, OTHER_COMPANY_INDUSTRY_EXTENDED_KEY as Rt, COMMUNITY_NODES_INSTALLATION_DOCS_URL as S, HEALTHCARE_INDUSTRY as St, COMMUNITY_PACKAGE_INSTALL_MODAL_KEY as T, LEGAL_INDUSTRY as Tt, COMMUNITY_PLUS_DOCS_URL as U, PERSONAL_COMPANY_TYPE as Ut, CREDENTIAL_SELECT_MODAL_KEY as V, OTHER_MARKETING_AUTOMATION_GOAL_KEY as Vt, COMMUNITY_PLUS_ENROLLMENT_MODAL as W, PHYSICAL_RETAIL_OR_SERVICES as Wt, AUTOMATION_BENEFICIARY_OTHER_TEAMS as X, REPORTED_SOURCE_LINKEDIN as Xt, AUTOMATION_BENEFICIARY_MY_TEAM as Y, REPORTED_SOURCE_KEY as Yt, AUTOMATION_BENEFICIARY_SELF as Z, REPORTED_SOURCE_OTHER as Zt, useStorage as _, DIGITAL_AGENCY_COMPANY_TYPE as _t, isDefaultUser as a, ROLE_DEVOPS as an, COMPANY_TYPE_KEY as at, subscribe as b, FINANCE_INSURANCE_INDUSTRY as bt, hasScope as c, ROLE_OTHER as cn, DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL as ct, listenForModalChanges as d, ROLE_SECURITY as dn, DEVOPS_AUTOMATION_GOAL_OTHER_KEY as dt, REPORTED_SOURCE_TWITTER as en, COMPANY_SIZE_100_499 as et, useUIStore as f, SAAS_COMPANY_TYPE as fn, DEVOPS_AUTOMATION_OTHER as ft, usePostHog as g, DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL as gt, telemetry as h, TELECOMS_INDUSTRY as hn, DEVOPS_REPORTING_GOAL as ht, isEnterpriseFeatureEnabled as i, ROLE_DATA_SCIENCE as in, COMPANY_SIZE_PERSONAL_USE as it, SOURCE_CONTROL_PULL_RESULT_MODAL_KEY as j, MARKETING_AUTOMATION_GOAL_KEY as jt, PROJECT_MOVE_RESOURCE_MODAL as k, MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION as kt, useRBACStore as l, ROLE_OTHER_KEY as ln, DEVOPS_AUTOMATION_DATA_SYNCING_GOAL as lt, TelemetryPlugin as m, SYSTEMS_INTEGRATOR_COMPANY_TYPE as mn, DEVOPS_MONITORING_AND_ALERTING_GOAL as mt, hasPermission as n, ROLE_BUSINESS_OWNER as nn, COMPANY_SIZE_500_999 as nt, isAuthenticated as o, ROLE_ENGINEERING as on, DELETE_USER_MODAL_KEY as ot, useTelemetry as p, SECURITY_INDUSTRY as pn, DEVOPS_INCIDENT_RESPONSE_GOAL as pt, TAGS_MANAGER_MODAL_KEY as q, REPORTED_SOURCE_FRIEND as qt, isGuest as r, ROLE_CUSTOMER_SUPPORT as rn, COMPANY_SIZE_KEY as rt, shouldEnableMfa as s, ROLE_KEY as sn, DEVOPS_AUTOMATION_CI_CD_GOAL as st, useUsersStore as t, REPORTED_SOURCE_YOUTUBE as tn, COMPANY_SIZE_20_99 as tt, hasRole as u, ROLE_SALES_AND_MARKETING as un, DEVOPS_AUTOMATION_GOAL_KEY as ut, getAll as v, ECOMMERCE_COMPANY_TYPE as vt, COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY as w, IT_INDUSTRY as wt, API_KEY_CREATE_OR_EDIT_MODAL_KEY as x, GOVERNMENT_INDUSTRY as xt, register as y, EDUCATION_TYPE as yt, MOVE_FOLDER_MODAL_KEY as z, OTHER_COMPANY_TYPE as zt };
