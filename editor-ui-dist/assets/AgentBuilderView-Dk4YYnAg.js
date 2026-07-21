import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, Pt as reactive, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { J as useDebounceFn, ot as useI18n, w as useSpeechSynthesis } from "./core-Cb7jeMu8.js";
import { $a as N8nHeading_default, $i as N8nIconButton_default, A as AiActivityStep_default, At as TableBase_default, C as N8nBreadcrumbs_default, Ct as useRoute, Et as Checkbox_default, Ji as N8nTooltip_default, Kt as N8nActionToggle_default, L as N8nTabs_default, M as AiActivityStepGroup_default, Mt as N8nOption_default, Qi as Input_default, Qt as N8nLoading_default, R as N8nSwitch_default, Rt as N8nCard_default, U as N8nResizeWrapper_default, Xt as DropdownMenu_default, Zt as DropdownMenuItem_default, aa as HoverCardTrigger_default, ca as HoverCardRoot_default, en as ElSkeletonItem, eo as N8nCallout_default, jt as N8nSelect_default, na as truncate, no as N8nButton_default, oa as HoverCardPortal_default, qt as N8nActionDropdown_default, ro as N8nIcon_default, s as InputNumber_default, sa as HoverCardContent_default, t as MarkdownEditor_default, ta as N8nActionBox_default, to as N8nText_default, w as N8nIconPicker_default, wt as useRouter, x as N8nInlineTextEdit_default, z as Switch_default } from "./src-DAbbz2gO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as ElRadio } from "./radio-BFLFUwzd.js";
import { t as useToast } from "./useToast-BAwEZJlf.js";
import { $o as DEFAULT_AGENT_PERSONALISATION, $u as unionType, Ao as questionsSuspendPayloadSchema, Co as CONFIGURE_CHANNEL_TOOL_NAME, Dl as deepCopy, Do as credentialSuspendPayloadSchema, Eo as credentialResumeSchema, Fo as N8N_CHAT_ACTION_TOOL_NAME, Gr as AGENT_BUILDER_VIEW, Gu as booleanType, Ho as PROVIDER_CAPABILITIES, Jr as AGENT_JSON_IMPORT_MODAL_KEY, Ko as isAgentModelProvider, Kr as AGENT_EPISODIC_MEMORY_CREDENTIAL_MODAL_KEY, Ku as enumType, Oo as questionAnswerSchema, Qr as AGENT_SESSION_DETAIL_VIEW, Qu as stringType, Ro as ANTHROPIC_CACHE_TTL_OPTIONS, So as ASK_QUESTIONS_TOOL_NAME, To as channelSuspendPayloadSchema, Uo as REASONING_EFFORT_OPTIONS, Wu as arrayType, Xr as AGENT_PREVIEW_VIEW, Xu as objectType, Yu as numberType, Zu as recordType, ad as ChatHubToolContextKey, bo as ASK_EMBEDDING_CREDENTIAL_TOOL_NAME, ci as NEW_AGENT_VIEW, di as CHAT_MESSAGE_STATUS, es as MANAGED_CREDENTIAL_TOKEN, fa as LOCAL_STORAGE_AGENT_BUILDER_CHAT_PANEL_WIDTH, fi as TOOL_CALL_STATE, ii as AGENT_VECTOR_STORES_MODAL_KEY, is as MAX_AGENT_FILE_SIZE_BYTES, ko as questionsResumeSchema, li as PROJECT_AGENTS, mu as require_isEqual, ni as AGENT_TOOLS_MODAL_KEY, oi as CONTINUE_SESSION_ID_PARAM, os as MAX_AGENT_KNOWLEDGE_BASE_SIZE_GB, qr as AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE, qu as literalType, rs as ALLOWED_AGENT_FILE_EXTENSIONS, si as EXECUTIONS_SECTION_KEY, ts as SUB_AGENT_TASK_DIFFICULTIES, ui as EXTENDED_PROMPT_MAX_LENGTH, vo as APPROVAL_TOOL_NAME, wo as channelResumeSchema, xo as askCredentialInputSchema, yo as ASK_CREDENTIAL_TOOL_NAME } from "./constants-BG93cxLW.js";
import { Xn as getAppNameFromCredType, st as useCredentialsStore, wn as useProjectsStore } from "./workflowDocument.store-CUnvofeB.js";
import { t as useRootStore } from "./useRootStore-e_Vi8Kjn.js";
import { t as useSettingsStore } from "./settings.store-BzvY0ZlK.js";
import { f as useUIStore, p as useTelemetry, t as useUsersStore } from "./users.store-ChwfO1rT.js";
import { t as require_dateformat } from "./dateformat-DrkL5gws.js";
import { n as useFavoritesStore } from "./workflowsList.store-DkXPd7t_.js";
import { t as useDocumentTitle } from "./useDocumentTitle-e1I0lyo_.js";
import { t as VueMarkdown } from "./VueMarkdown-HyGWMciE.js";
import { t as CredentialIcon_default } from "./CredentialIcon-p1xHSt8E.js";
import { t as NodeCredentials_default } from "./NodeCredentials-DJbDQfJm.js";
import { C as listAgentFiles, I as updateAgentSkill, R as uploadAgentFiles, S as getTestChatMessages, T as listAgentVersions, _ as getChatMessages, c as deleteAgent, f as getAgent, g as getBuilderMessages, j as revertAgentToVersion, k as publishAgent, l as deleteAgentFile, n as clearTestChatMessages, t as clearBuilderMessages, z as warmAgentKnowledgeSandbox } from "./useAgentApi-BaSGjxrj.js";
import { t as convertToDisplayDate } from "./dateFormatter--VP7e0dJ.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-B5qxsorw.js";
import { t as useKeybindings } from "./useKeybindings-BcRGYBaQ.js";
import { a as sanitizeModelId, c as useAgentProjectId, i as parseProvider, n as modelToString, o as useModelCatalog, r as parseModelString, s as useAgentModelCredentials, t as AgentModelSelector_default } from "./AgentModelSelector-CRVWbotk.js";
import { t as agent_panel_module_default } from "./agent-panel.module-kIs26xI6.js";
import "./menuItemId-GnRE2xEy.js";
import { _ as withWebSearchConfig, a as AgentCapabilitiesSection_default, c as AgentChannelLinearSetup_default, d as useAgentIntegrationStatus, f as useAgentChannelSetup, g as getWebSearchMethod, h as getNativeWebSearchArgs, i as agentsEventBus, l as AgentChannelSlackSetup_default, m as AgentInfoPanel_default, n as useAgentConfigAutosave, o as AgentChannelModal_default, p as useAgentIntegrationsCatalog, r as useAgentConfig, s as AgentChannelTelegramSetup_default, t as useAgentCapabilitiesActions, u as syncAgentIntegrationStatusCache } from "./useAgentCapabilitiesActions-D_esbAXt.js";
import { r as useProjectAgentsList, t as removeProjectAgentFromListCache } from "./useProjectAgentsList-PgXAy1Nw.js";
import { n as getToolNameTranslationKey, t as formatToolNameForDisplay } from "./toolDisplayName-BQJeEAlj.js";
import { n as AgentChipButton_default } from "./agentSkill-M-wPhpov.js";
import { t as useAgentPermissions } from "./useAgentPermissions-HTzpk0G9.js";
import { t as useResizablePanel } from "./useResizablePanel-8dtvZLEm.js";
import { t as CopyButton_default } from "./CopyButton-Dwd8I66e.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-Dt-QlMCg.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-DHIpc00J.js";
import { n as AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS } from "./vector-stores-dBuI_Tv3.js";
import { a as toolIdentifiersFromConfig, i as taskIdentifiersFromConfig, n as deriveAgentStatus, r as skillIdentifiersFromConfig, t as buildAgentConfigFingerprint } from "./agentTelemetry.utils-CRX5YFZI.js";
import { n as useAgentBuilderStatus, t as AgentBuilderUnconfiguredEmptyState_default } from "./AgentBuilderUnconfiguredEmptyState-Dg2cPu2o.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-Dike1lnC.js";
import { t as useAgentPublish } from "./useAgentPublish-OnbsQhYA.js";
import { t as ChatInputBase_default } from "./ChatInputBase-DfeHMJCD.js";
import { a as getDelegateDifficultySummary, c as parseDelegateOutput, d as cardChoiceLabel, f as isAwaitingCard, h as parseN8nChatActionInput, i as formatDelegateError, l as resolveSubAgentIdForDisplay, n as SUB_AGENT_DIFFICULTY_I18N_KEY, o as isDelegateSubAgentTool, p as n8nChatResumeValueSchema, s as isFailedDelegateOutput, t as useSubAgentNames, u as resolveSubAgentName } from "./useSubAgentNames-KWjhNlLC.js";
import { t as AgentSessionsListView_default } from "./AgentSessionsListView-DbgpQau8.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-CkAFnu18.js";
//#region src/features/agents/composables/useAgentBuilderTelemetry.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var TRACKED_CONFIG_KEYS = [
	"instructions",
	"model",
	"memory",
	"tools",
	"skills",
	"subAgents",
	"name",
	"vectorStores"
];
/**
* Returns every telemetry part whose value actually changed between `current`
* and `updates`. A single update payload can touch multiple parts (e.g. the
* JSON editor broadcasts the whole config, or model-change emits
* `{ model, credential }`), and we want one event per genuinely-changed part
* rather than coalescing to the first match.
*/
function deriveChangedParts(updates, current) {
	const parts = /* @__PURE__ */ new Set();
	const changed = (key) => key in updates && (!current || !(0, import_isEqual.default)(current[key], updates[key]));
	for (const key of TRACKED_CONFIG_KEYS) if (changed(key)) parts.add(key);
	if (changed("credential")) parts.add("model");
	return Array.from(parts);
}
function integrationStatusEntriesFromConfig(config, knownTriggerTypes) {
	const knownTypes = new Set(knownTriggerTypes);
	const entries = [];
	for (const integration of config?.integrations ?? []) {
		if (!knownTypes.has(integration.type)) continue;
		entries.push({
			type: integration.type,
			credentialId: integration.credentialId
		});
	}
	return entries;
}
function useAgentBuilderTelemetry(deps) {
	const agentTelemetry = useAgentTelemetry();
	const pendingEditedConfigParts = /* @__PURE__ */ new Set();
	const triggersBaseline = ref([]);
	let previousTools = [];
	let previousSkills = [];
	let previousTasks = [];
	function snapshot() {
		return {
			agentId: deps.agentId.value,
			status: deriveAgentStatus(deps.agent.value),
			config: deps.localConfig.value,
			connectedTriggers: deps.connectedTriggers.value
		};
	}
	/**
	* Compute the agent's `config_version` fingerprint asynchronously, then hand
	* it to `emit`. Centralizes the async-IIFE + try/catch boilerplate that
	* every fingerprint-bearing event would otherwise duplicate. `crypto.subtle`
	* can throw in insecure contexts, so failures are swallowed — individual
	* track calls are already wrapped inside `useAgentTelemetry`.
	*/
	function withFingerprint(config, triggers, emit) {
		(async () => {
			try {
				emit((await buildAgentConfigFingerprint(config, triggers)).config_version);
			} catch {}
		})();
	}
	function emitEditedEvents(parts, s) {
		if (parts.length === 0) return;
		withFingerprint(s.config, s.connectedTriggers, (configVersion) => {
			for (const part of parts) agentTelemetry.trackEditedConfig({
				agentId: s.agentId,
				part,
				configVersion,
				status: s.status
			});
		});
	}
	function recordConfigEdit(updates) {
		const parts = deriveChangedParts(updates, deps.localConfig.value);
		for (const part of parts) pendingEditedConfigParts.add(part);
	}
	/**
	* Emit accumulated config-edit events after a successful save. Uses the
	* server-saved config so `config_version` reflects what was actually
	* persisted, not a mid-debounce local snapshot.
	*/
	function flushConfigEdits() {
		if (pendingEditedConfigParts.size === 0) return;
		const parts = Array.from(pendingEditedConfigParts);
		pendingEditedConfigParts.clear();
		emitEditedEvents(parts, {
			agentId: deps.agentId.value,
			status: deriveAgentStatus(deps.agent.value),
			config: deps.savedConfig.value,
			connectedTriggers: deps.connectedTriggers.value
		});
	}
	function trackTriggerListChanged(list) {
		const changed = !(0, import_isEqual.default)(triggersBaseline.value, list);
		triggersBaseline.value = list;
		if (!changed) return;
		emitEditedEvents(["triggers"], snapshot());
	}
	function trackTriggerAdded(payload) {
		const s = snapshot();
		withFingerprint(s.config, payload.triggers, (configVersion) => {
			agentTelemetry.trackAddedTrigger({
				agentId: s.agentId,
				triggerType: payload.triggerType,
				triggers: payload.triggers,
				configVersion,
				status: s.status
			});
		});
	}
	/** Capture the current tool list as the baseline for future `trackToolsAdded` diffs. */
	function captureToolsBaseline() {
		previousTools = toolIdentifiersFromConfig(deps.savedConfig.value);
	}
	/**
	* Diff the current saved tool list against the last observed baseline and
	* emit `User added tools to agent` for each newly added tool. Updates the
	* baseline so the next call only reports further additions.
	*/
	function trackToolsAdded() {
		const current = toolIdentifiersFromConfig(deps.savedConfig.value);
		const added = current.filter((t) => !previousTools.includes(t));
		previousTools = current;
		if (added.length === 0) return;
		const s = snapshot();
		withFingerprint(s.config, s.connectedTriggers, (configVersion) => {
			for (const toolAdded of added) agentTelemetry.trackAddedTools({
				agentId: s.agentId,
				toolAdded,
				tools: current,
				configVersion,
				status: s.status
			});
		});
	}
	function captureSkillsBaseline() {
		previousSkills = skillIdentifiersFromConfig(deps.savedConfig.value);
	}
	function trackSkillsAdded() {
		const current = skillIdentifiersFromConfig(deps.savedConfig.value);
		const added = current.filter((s) => !previousSkills.includes(s));
		previousSkills = current;
		if (added.length === 0) return;
		const s = snapshot();
		withFingerprint(s.config, s.connectedTriggers, (configVersion) => {
			for (const skillAdded of added) agentTelemetry.trackAddedSkills({
				agentId: s.agentId,
				skillAdded,
				skills: current,
				configVersion,
				status: s.status
			});
		});
	}
	function captureTasksBaseline() {
		previousTasks = taskIdentifiersFromConfig(deps.savedConfig.value);
	}
	function trackTasksChanged() {
		const current = taskIdentifiersFromConfig(deps.savedConfig.value);
		const added = current.filter((taskId) => !previousTasks.includes(taskId));
		const removed = previousTasks.filter((taskId) => !current.includes(taskId));
		previousTasks = current;
		if (added.length === 0 && removed.length === 0) return;
		const s = snapshot();
		withFingerprint(deps.savedConfig.value, s.connectedTriggers, (configVersion) => {
			for (const taskAdded of added) agentTelemetry.trackAddedTasks({
				agentId: s.agentId,
				taskAdded,
				tasks: current,
				configVersion,
				status: s.status
			});
			for (const taskRemoved of removed) agentTelemetry.trackRemovedTasks({
				agentId: s.agentId,
				taskRemoved,
				tasks: current,
				configVersion,
				status: s.status
			});
		});
	}
	/**
	* Eagerly derive connected trigger types so telemetry fingerprints are
	* accurate even if the user never opens the Triggers section of the
	* settings sidebar. Integrations are already part of the fetched agent
	* config, so this does not need a separate integration-status request.
	*/
	async function fetchInitialTriggersBaseline(knownTriggerTypes) {
		const integrations = integrationStatusEntriesFromConfig(deps.localConfig.value, knownTriggerTypes);
		const connected = integrations.map((integration) => integration.type).sort();
		syncAgentIntegrationStatusCache(deps.projectId.value, deps.agentId.value, knownTriggerTypes, integrations);
		triggersBaseline.value = connected;
		return connected;
	}
	/** Reset all per-agent telemetry state when switching agents. */
	function resetForAgentSwitch() {
		pendingEditedConfigParts.clear();
		triggersBaseline.value = [];
		previousTools = [];
		previousSkills = [];
		previousTasks = [];
	}
	function trackOpenedToolFromList(toolType) {
		agentTelemetry.trackOpenedToolFromList({
			agentId: deps.agentId.value,
			toolType
		});
	}
	function trackOpenedSkillFromList(skillId) {
		agentTelemetry.trackOpenedSkillFromList({
			agentId: deps.agentId.value,
			skillId
		});
	}
	function trackOpenedAddSkillModal() {
		agentTelemetry.trackOpenedAddSkillModal({ agentId: deps.agentId.value });
	}
	return {
		recordConfigEdit,
		flushConfigEdits,
		trackTriggerListChanged,
		trackTriggerAdded,
		trackToolsAdded,
		trackSkillsAdded,
		trackTasksChanged,
		captureToolsBaseline,
		captureSkillsBaseline,
		captureTasksBaseline,
		fetchInitialTriggersBaseline,
		resetForAgentSwitch,
		trackOpenedToolFromList,
		trackOpenedSkillFromList,
		trackOpenedAddSkillModal
	};
}
//#endregion
//#region src/features/agents/utils/relative-time.ts
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
/**
* Returns a short, recognisable description of when something happened:
*
*   - within 5s   → "just now"
*   - within 1m   → "Ns ago"
*   - within 1h   → "Nm ago"
*   - within 24h  → "Nh ago"
*   - calendar day = previous local day → "Yesterday"
*   - older       → short locale date, e.g. "Oct 3" / "3 Oct"
*
* The shared `app/components/TimeAgo.vue` (timeago.js-based) also exists, but
* it walks the full seconds→years ladder with no "Yesterday" step and never
* falls back to an absolute date — wrong shape for a chat-history list where
* old sessions should drop to a date so the dropdown stays scannable.
*/
function formatRelativeTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = date instanceof Date ? date : new Date(date);
	const diff = now.getTime() - past.getTime();
	if (diff < 5 * SECOND) return i18n.justNow;
	if (diff < MINUTE) return i18n.secondsAgo(Math.floor(diff / SECOND));
	if (diff < HOUR) return i18n.minutesAgo(Math.floor(diff / MINUTE));
	if (isSameLocalDay(past, now)) return i18n.hoursAgo(Math.floor(diff / HOUR));
	if (isYesterdayLocal(past, now)) return i18n.yesterday;
	return past.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function isSameLocalDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isYesterdayLocal(past, now) {
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	return isSameLocalDay(past, yesterday);
}
function useRelativeTimestamp() {
	const i18n = useI18n();
	const strings = {
		justNow: i18n.baseText("agents.relativeTime.justNow"),
		secondsAgo: (n) => i18n.baseText("agents.relativeTime.secondsAgo", { interpolate: { count: String(n) } }),
		minutesAgo: (n) => i18n.baseText("agents.relativeTime.minutesAgo", { interpolate: { count: String(n) } }),
		hoursAgo: (n) => i18n.baseText("agents.relativeTime.hoursAgo", { interpolate: { count: String(n) } }),
		yesterday: i18n.baseText("agents.relativeTime.yesterday")
	};
	return (date) => formatRelativeTimestamp(date, strings);
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderSession.ts
/**
* Max chars for session-name display in the preview breadcrumb dropdown trigger
* and its menu rows. Long titles otherwise crowd the header actions.
*/
var SESSION_TITLE_MAX_CHARS = 64;
/**
* Owns the preview chat-session state:
*
* - `continueSessionId` — set via the URL query string for shareable deep-links
*   into a specific session. Takes precedence when present.
* - `activeChatSessionId` — the in-tab ephemeral session. Set when the user
*   starts a new chat from the home input; cleared on the back button.
*
* Plus the session-picker dropdown menu and titles, all driven off the
* `agentSessionsStore` thread list.
*/
function useAgentBuilderSession() {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const sessionsStore = useAgentSessionsStore();
	const threadTitleOf = useThreadTitle();
	const relativeTimeOf = useRelativeTimestamp();
	const activeChatSessionId = ref(null);
	const continueSessionId = computed(() => {
		const raw = route.query[CONTINUE_SESSION_ID_PARAM];
		const value = Array.isArray(raw) ? raw[0] : raw;
		return typeof value === "string" && value.length > 0 ? value : void 0;
	});
	const effectiveSessionId = computed(() => continueSessionId.value ?? activeChatSessionId.value ?? void 0);
	/**
	* The current session is "empty" until it's been persisted as a thread —
	* a freshly minted `activeChatSessionId` doesn't show up in `threads` until
	* the user sends the first message.
	*/
	const currentSessionHasMessages = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return false;
		return (sessionsStore.threads ?? []).some((t) => t.id === id);
	});
	const currentSessionTitle = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return "";
		const thread = (sessionsStore.threads ?? []).find((t) => t.id === id);
		if (!thread) return i18n.baseText("agents.builder.chat.newChat.label");
		return truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS);
	});
	const sessionMenu = computed(() => {
		const threads = sessionsStore.threads ?? [];
		if (threads.length === 0) return [{
			id: "__empty__",
			title: i18n.baseText("agents.builder.chat.sessionPicker.empty"),
			disabled: true
		}];
		return threads.map((thread) => ({
			id: thread.id,
			title: "",
			label: truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS),
			when: relativeTimeOf(thread.updatedAt)
		}));
	});
	function setSessionInUrl(id) {
		activeChatSessionId.value = id;
		router.replace({ query: {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		} });
	}
	function clearContinueSessionParam() {
		const { [CONTINUE_SESSION_ID_PARAM]: _dropped, ...rest } = route.query;
		router.replace({ query: rest });
	}
	function onSessionPick(id) {
		if (id === "__empty__") return;
		activeChatSessionId.value = null;
		router.replace({ query: {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		} });
	}
	function onNewChat() {
		activeChatSessionId.value = null;
		setSessionInUrl(crypto.randomUUID());
	}
	return {
		activeChatSessionId,
		continueSessionId,
		effectiveSessionId,
		currentSessionHasMessages,
		currentSessionTitle,
		sessionMenu,
		setSessionInUrl,
		clearContinueSessionParam,
		onSessionPick,
		onNewChat
	};
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderMainTabs.ts
var SECTION_QUERY_PARAM = "section";
function getSectionFromQuery(section) {
	const value = Array.isArray(section) ? section[0] : section;
	if (value === "knowledge" || value === "__executions" || value === "settings") return value;
	return null;
}
function getSectionFromTab(tab) {
	if (tab === "knowledge") return "knowledge";
	if (tab === "sessions") return EXECUTIONS_SECTION_KEY;
	if (tab === "settings") return "settings";
	return null;
}
function useAgentBuilderMainTabs({ executionsCount, knowledgeBaseEnabled, routeBacked = computed(() => true) }) {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const selectedSection = ref(null);
	async function setSelectedSection(section) {
		selectedSection.value = section;
		if (!routeBacked.value) return;
		await router.replace({ query: {
			...route.query,
			[SECTION_QUERY_PARAM]: section ?? void 0
		} });
	}
	const activeMainTab = computed({
		get() {
			if (selectedSection.value === "knowledge" && knowledgeBaseEnabled.value) return "knowledge";
			if (selectedSection.value === "__executions") return "sessions";
			if (selectedSection.value === "settings") return "settings";
			return "agent";
		},
		set(tab) {
			setSelectedSection(getSectionFromTab(tab));
		}
	});
	const mainTabOptions = computed(() => {
		const options = [{
			label: i18n.baseText("agents.builder.header.tab.agent"),
			value: "agent"
		}];
		if (knowledgeBaseEnabled.value) options.push({
			label: i18n.baseText("agents.builder.header.tab.knowledge"),
			value: "knowledge"
		});
		options.push({
			label: i18n.baseText("agents.builder.header.tab.executions"),
			value: "sessions"
		}, {
			label: i18n.baseText("agents.builder.header.tab.settings"),
			value: "settings"
		});
		return options;
	});
	const executionsDescription = computed(() => i18n.baseText("agents.builder.executions.count", {
		adjustToNumber: executionsCount.value,
		interpolate: { count: String(executionsCount.value) }
	}));
	watch(() => [routeBacked.value, route.query[SECTION_QUERY_PARAM]], ([isRouteBacked, section]) => {
		if (!isRouteBacked) return;
		selectedSection.value = getSectionFromQuery(section);
	}, { immediate: true });
	return {
		activeMainTab,
		mainTabOptions,
		executionsDescription
	};
}
//#endregion
//#region src/features/agents/utils/agentPersonalisation.ts
var CHANNEL_ORDERS = [
	[
		0,
		1,
		2
	],
	[
		0,
		2,
		1
	],
	[
		1,
		0,
		2
	],
	[
		1,
		2,
		0
	],
	[
		2,
		0,
		1
	],
	[
		2,
		1,
		0
	]
];
var DEFAULT_AGENT_PERSONALISATION_ICON = DEFAULT_AGENT_PERSONALISATION.icon;
var clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
var randomRatio = (random) => {
	const value = random();
	return Number.isFinite(value) ? clamp(value) : 0;
};
var randomInRange = (random, min, max) => min + randomRatio(random) * (max - min);
var randomIndex = (random, length) => Math.min(Math.floor(randomRatio(random) * length), length - 1);
var randomInteger = (random, min, max) => Math.round(randomInRange(random, min, max));
function hexChannel(value) {
	return Math.round(clamp(value, 0, 255)).toString(16).padStart(2, "0").toUpperCase();
}
function randomVibrantColor(random) {
	const channelOrder = CHANNEL_ORDERS[randomIndex(random, CHANNEL_ORDERS.length)] ?? CHANNEL_ORDERS[0];
	const channels = [
		0,
		0,
		0
	];
	channels[channelOrder[0]] = randomInRange(random, 210, 255);
	channels[channelOrder[1]] = randomInRange(random, 70, 190);
	channels[channelOrder[2]] = randomInRange(random, 0, 110);
	return `#${channels.map(hexChannel).join("")}`;
}
function getRandomGradientLayout(random) {
	return {
		angle: randomInteger(random, 0, 359),
		fromStop: randomInteger(random, 0, 24),
		toStop: randomInteger(random, 76, 100)
	};
}
function getRandomAgentPersonalisationGradient(random = Math.random) {
	const from = randomVibrantColor(random);
	const to = randomVibrantColor(random);
	return {
		from,
		to: to === from ? DEFAULT_AGENT_PERSONALISATION.gradient.to : to,
		...getRandomGradientLayout(random)
	};
}
function addMissingAgentPersonalisation(config, random) {
	const gradient = config.personalisation?.gradient;
	if (gradient?.angle !== void 0 && gradient.fromStop !== void 0 && gradient.toStop !== void 0) return null;
	return {
		...config,
		personalisation: {
			icon: config.personalisation?.icon ?? DEFAULT_AGENT_PERSONALISATION_ICON,
			gradient: gradient ? {
				...gradient,
				...getRandomGradientLayout(random ?? Math.random)
			} : getRandomAgentPersonalisationGradient(random)
		}
	};
}
//#endregion
//#region src/features/agents/components/AgentPublishButton.vue?vue&type=script&setup=true&lang.ts
var AgentPublishButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPublishButton",
	props: {
		agent: {},
		projectId: {},
		agentId: {},
		isSaving: { type: Boolean },
		beforeRevertToPublished: { type: Function }
	},
	emits: [
		"published",
		"unpublished",
		"reverted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { canUpdate, canPublish, canUnpublish } = useAgentPermissions(() => props.projectId);
		const emit = __emit;
		const locale = useI18n();
		const { publish, unpublish, revertToPublished, publishing } = useAgentPublish();
		const publishState = computed(() => {
			if (!props.agent?.activeVersionId) return "not-published";
			if (props.agent.versionId !== props.agent.activeVersionId) return "published-with-changes";
			return "published-no-changes";
		});
		const buttonConfig = computed(() => {
			switch (publishState.value) {
				case "not-published": return {
					text: locale.baseText("agents.publish.button.publish"),
					enabled: true,
					showIndicator: false,
					indicatorClass: ""
				};
				case "published-with-changes": return {
					text: locale.baseText("agents.publish.button.publish"),
					enabled: true,
					showIndicator: true,
					indicatorClass: "changes"
				};
				default: return {
					text: locale.baseText("agents.publish.button.published"),
					enabled: false,
					showIndicator: true,
					indicatorClass: "published"
				};
			}
		});
		const dropdownActions = computed(() => {
			const actions = [{
				id: "publish",
				label: locale.baseText("agents.publish.dropdown.publish"),
				disabled: !buttonConfig.value.enabled || publishing.value || props.isSaving || !canPublish.value
			}];
			if (props.agent?.activeVersionId) actions.push({
				id: "revert-to-published",
				label: locale.baseText("agents.publish.dropdown.revertToPublished"),
				disabled: publishState.value !== "published-with-changes" || publishing.value || props.isSaving || !canUpdate.value
			});
			actions.push({
				id: "unpublish",
				label: locale.baseText("agents.publish.dropdown.unpublish"),
				disabled: !props.agent?.activeVersionId || publishing.value || props.isSaving || !canUnpublish.value,
				divided: true
			});
			return actions;
		});
		async function onPublishClick() {
			if (!buttonConfig.value.enabled || props.isSaving || !canPublish.value) return;
			const updated = await publish(props.projectId, props.agentId);
			if (updated) emit("published", updated);
		}
		async function onDropdownSelect(action) {
			if (action === "publish") {
				await onPublishClick();
				return;
			}
			if (action === "revert-to-published") {
				if (publishState.value !== "published-with-changes" || props.isSaving || !canUpdate.value) return;
				await props.beforeRevertToPublished?.();
				const updated = await revertToPublished(props.projectId, props.agentId);
				if (updated) emit("reverted", updated);
				return;
			}
			if (action !== "unpublish" || !canUnpublish.value) return;
			const updated = await unpublish(props.projectId, props.agentId, props.agent?.name);
			if (updated) emit("unpublished", updated);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.buttonGroup) }, [createVNode(unref(N8nButton_default), {
				class: normalizeClass(_ctx.$style.groupButtonLeft),
				loading: unref(publishing),
				disabled: !buttonConfig.value.enabled || __props.isSaving || !unref(canPublish),
				variant: "ghost",
				"data-testid": "publish-agent-button",
				onClick: onPublishClick
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.flex) }, [buttonConfig.value.showIndicator ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass({
						[_ctx.$style.indicatorDot]: true,
						[_ctx.$style.indicatorPublished]: buttonConfig.value.indicatorClass === "published",
						[_ctx.$style.indicatorChanges]: buttonConfig.value.indicatorClass === "changes"
					})
				}, null, 2)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass({ [_ctx.$style.indicatorPublishedText]: publishState.value === "published-no-changes" }) }, toDisplayString(buttonConfig.value.text), 3)], 2)]),
				_: 1
			}, 8, [
				"class",
				"loading",
				"disabled"
			]), createVNode(unref(N8nActionDropdown_default), {
				items: dropdownActions.value,
				placement: "bottom-end",
				"data-testid": "agent-publish-dropdown",
				onSelect: onDropdownSelect
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					class: normalizeClass(_ctx.$style.groupButtonRight),
					variant: "ghost",
					icon: "chevron-down",
					"aria-label": unref(locale).baseText("agents.publish.dropdown.ariaLabel"),
					"data-testid": "agent-publish-dropdown-trigger"
				}, null, 8, ["class", "aria-label"])]),
				_: 1
			}, 8, ["items"])], 2);
		};
	}
});
var AgentPublishButton_vue_vue_type_style_index_0_lang_module_default = {
	buttonGroup: "_buttonGroup_6ylrj_125",
	groupButtonLeft: "_groupButtonLeft_6ylrj_131",
	groupButtonRight: "_groupButtonRight_6ylrj_143",
	indicatorDot: "_indicatorDot_6ylrj_153",
	indicatorPublished: "_indicatorPublished_6ylrj_161",
	indicatorPublishedText: "_indicatorPublishedText_6ylrj_165",
	indicatorChanges: "_indicatorChanges_6ylrj_169",
	flex: "_flex_6ylrj_173"
};
var AgentPublishButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPublishButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPublishButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = { key: 0 };
var _hoisted_2$5 = { key: 1 };
var AgentBuilderHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderHeader",
	props: {
		agent: {},
		projectId: {},
		agentId: {},
		projectName: {},
		headerActions: {},
		saveStatus: {},
		beforeRevertToPublished: { type: Function },
		isVersionHistoryOpen: { type: Boolean },
		artifactMode: { type: Boolean }
	},
	emits: [
		"header-action",
		"open-preview",
		"published",
		"unpublished",
		"reverted",
		"switch-agent",
		"toggle-version-history"
	],
	setup(__props, { emit: __emit }) {
		/**
		* Top header bar for the agent builder. Hosts breadcrumb navigation,
		* agent switcher, publish button, and the existing action-menu dropdown.
		*
		* Navigation intents are emitted as events, except for the project breadcrumb
		* which links back to the owning project/personal page.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const { list: agentsList, ensureLoaded } = useProjectAgentsList(computed(() => props.projectId));
		onMounted(() => {
			if (props.artifactMode) return;
			ensureLoaded();
		});
		const projectRoute = computed(() => ({
			name: PROJECT_AGENTS,
			params: { projectId: props.projectId }
		}));
		const previewRoute = computed(() => ({
			name: AGENT_PREVIEW_VIEW,
			params: {
				projectId: props.projectId,
				agentId: props.agentId
			}
		}));
		const breadcrumbItems = computed(() => [{
			id: props.projectId,
			label: props.projectName ?? i18n.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}]);
		const agentDisplayName = computed(() => props.agent?.name ?? "…");
		const isPreviewDisabled = computed(() => props.agent?.isRunnable !== true);
		const previewHref = computed(() => isPreviewDisabled.value ? void 0 : router.resolve(previewRoute.value).href);
		const previewDisabledTooltip = computed(() => i18n.baseText("agents.builder.preview.disabledTooltip"));
		const switcherOptions = computed(() => {
			const others = (agentsList.value ?? []).filter((a) => a.id !== props.agentId);
			if (others.length === 0) return [{
				id: "__empty__",
				label: i18n.baseText("agents.builder.header.switcher.empty"),
				disabled: true
			}];
			return others.map((a) => ({
				id: a.id,
				label: a.name
			}));
		});
		function onSwitcherSelect(id) {
			if (id === "__empty__") return;
			emit("switch-agent", id);
		}
		function onCreateAgent() {
			router.push({
				name: NEW_AGENT_VIEW,
				query: { projectId: props.projectId }
			});
		}
		function onBreadcrumbSelect(item) {
			if (item.id !== props.projectId) return;
			router.push(projectRoute.value);
		}
		function onPreviewClick(event) {
			if (isPreviewDisabled.value) {
				event.preventDefault();
				return;
			}
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
			event.preventDefault();
			emit("open-preview");
		}
		const isVersionHistoryDisabled = computed(() => !props.agent?.hasPublishHistory);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-builder-header"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.left) }, [!props.artifactMode ? (openBlock(), createBlock(unref(N8nBreadcrumbs_default), {
				key: 0,
				items: breadcrumbItems.value,
				theme: "medium",
				onItemSelected: onBreadcrumbSelect
			}, {
				append: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.crumbSeparator),
					"aria-hidden": "true"
				}, "/", 2), createVNode(unref(DropdownMenu_default), {
					items: switcherOptions.value,
					placement: "bottom-start",
					"data-testid": "agent-header-switcher",
					onSelect: onSwitcherSelect
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.switcherButton),
						"aria-label": unref(i18n).baseText("agents.builder.header.switcher.ariaLabel")
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.switcherLabel, _ctx.$style.agentSwitcherLabel]) }, toDisplayString(agentDisplayName.value), 3), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.switcherFooter) }, [createVNode(unref(DropdownMenuItem_default), {
						id: "__new_agent__",
						label: unref(i18n).baseText("agents.builder.header.switcher.newAgent"),
						icon: {
							type: "icon",
							value: "plus"
						},
						"test-id": "agent-header-new-agent",
						onSelect: onCreateAgent
					}, null, 8, ["label"])], 2)]),
					_: 1
				}, 8, ["items"])]),
				_: 1
			}, 8, ["items"])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.right) }, [
				__props.saveStatus === "saving" || __props.saveStatus === "saved" ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.saveStatus),
					"data-testid": "agent-header-save-status"
				}, toDisplayString(__props.saveStatus === "saving" ? unref(i18n).baseText("agents.builder.header.saving") : unref(i18n).baseText("agents.builder.header.saved")), 3)) : createCommentVNode("", true),
				createVNode(unref(N8nTooltip_default), {
					disabled: !isPreviewDisabled.value,
					content: previewDisabledTooltip.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						icon: "play",
						href: previewHref.value,
						disabled: isPreviewDisabled.value,
						"data-testid": "agent-header-preview-btn",
						onClick: onPreviewClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.button")), 1)]),
						_: 1
					}, 8, ["href", "disabled"])]),
					_: 1
				}, 8, ["disabled", "content"]),
				createVNode(AgentPublishButton_default, {
					agent: __props.agent,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"is-saving": __props.saveStatus === "saving",
					"before-revert-to-published": __props.beforeRevertToPublished,
					onPublished: _cache[0] || (_cache[0] = (a) => emit("published", a)),
					onUnpublished: _cache[1] || (_cache[1] = (a) => emit("unpublished", a)),
					onReverted: _cache[2] || (_cache[2] = (a) => emit("reverted", a))
				}, null, 8, [
					"agent",
					"project-id",
					"agent-id",
					"is-saving",
					"before-revert-to-published"
				]),
				!props.artifactMode ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom"
				}, {
					content: withCtx(() => [isVersionHistoryDisabled.value ? (openBlock(), createElementBlock("span", _hoisted_1$9, toDisplayString(unref(i18n).baseText("agents.versionHistory.button.tooltip.empty")), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(unref(i18n).baseText("agents.versionHistory.title")), 1))]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						icon: "history",
						"icon-only": "",
						class: normalizeClass({ [_ctx.$style.activeButton]: __props.isVersionHistoryOpen }),
						disabled: isVersionHistoryDisabled.value,
						"aria-label": unref(i18n).baseText("agents.versionHistory.button.ariaLabel"),
						"data-testid": "agent-header-version-history-btn",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("toggle-version-history"))
					}, null, 8, [
						"class",
						"disabled",
						"aria-label"
					])]),
					_: 1
				})) : createCommentVNode("", true),
				!props.artifactMode && __props.headerActions.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 2,
					items: __props.headerActions,
					"activator-icon": "ellipsis",
					"activator-size": "medium",
					"extra-popper-class": _ctx.$style.headerActionsMenu,
					"data-testid": "agent-header-actions",
					onSelect: _cache[4] || (_cache[4] = (item) => emit("header-action", item))
				}, null, 8, ["items", "extra-popper-class"])) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var AgentBuilderHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_n7whs_125",
	left: "_left_n7whs_140",
	crumbSeparator: "_crumbSeparator_n7whs_162",
	switcherButton: "_switcherButton_n7whs_169",
	switcherLabel: "_switcherLabel_n7whs_175",
	agentSwitcherLabel: "_agentSwitcherLabel_n7whs_183",
	switcherFooter: "_switcherFooter_n7whs_187",
	right: "_right_n7whs_192",
	saveStatus: "_saveStatus_n7whs_201",
	activeButton: "_activeButton_n7whs_207",
	headerActionsMenu: "_headerActionsMenu_n7whs_211"
};
var AgentBuilderHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderPreviewHeader.vue?vue&type=script&setup=true&lang.ts
var AgentBuilderPreviewHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderPreviewHeader",
	props: {
		breadcrumbItems: {},
		sessionTitle: {},
		sessionId: {},
		hasSession: { type: Boolean },
		sessionOptions: {}
	},
	emits: [
		"breadcrumb-select",
		"session-select",
		"new-chat",
		"close-preview"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const agentBreadcrumb = computed(() => props.breadcrumbItems[1]);
		const projectBreadcrumb = computed(() => props.breadcrumbItems[0]);
		const sessionRoute = computed(() => {
			if (!props.sessionId || !projectBreadcrumb.value || !agentBreadcrumb.value) return void 0;
			return {
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectBreadcrumb.value.id,
					agentId: agentBreadcrumb.value.id,
					threadId: props.sessionId
				}
			};
		});
		function openSession() {
			if (!sessionRoute.value) return;
			router.push(sessionRoute.value);
		}
		function createNewChat() {
			emit("new-chat");
		}
		function closePreview() {
			emit("close-preview");
		}
		useKeybindings({
			"ctrl+shift+;": createNewChat,
			Escape: closePreview
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-builder-header"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.left) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: props.breadcrumbItems,
				theme: "medium",
				onItemSelected: _cache[1] || (_cache[1] = ($event) => emit("breadcrumb-select", $event))
			}, {
				append: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.crumbSeparator),
					"aria-hidden": "true"
				}, "/", 2), createVNode(unref(DropdownMenu_default), {
					items: props.sessionOptions,
					"extra-popper-class": _ctx.$style.sessionMenu,
					placement: "bottom-start",
					"data-testid": "agent-preview-session-picker",
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.switcherButton),
						"aria-label": unref(i18n).baseText("agents.builder.chat.sessionPicker.ariaLabel")
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.switcherLabel, _ctx.$style.previewSessionLabel]) }, toDisplayString(props.sessionTitle), 3), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["items"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.right) }, [
				props.hasSession ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 500
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.viewSession")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-size": "large",
						icon: "list-tree",
						label: unref(i18n).baseText("agents.builder.preview.viewSession"),
						"data-testid": "agent-preview-view-session-btn",
						onClick: openSession
					}, null, 8, ["label"])]),
					_: 1
				})) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
					shortcut: {
						metaKey: true,
						shiftKey: true,
						keys: [";"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "medium",
						"icon-size": "large",
						icon: "message-circle-plus",
						label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
						"data-testid": "agent-preview-new-chat-btn",
						onClick: createNewChat
					}, null, 8, ["label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("generic.close"),
					shortcut: { keys: ["Esc"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "x",
						size: "medium",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.close.ariaLabel"),
						"data-testid": "agent-preview-close-btn",
						onClick: closePreview
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"])
			], 2)], 2);
		};
	}
});
var AgentBuilderPreviewHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1vfjc_125",
	left: "_left_1vfjc_140",
	crumbSeparator: "_crumbSeparator_1vfjc_162",
	switcherButton: "_switcherButton_1vfjc_169",
	switcherLabel: "_switcherLabel_1vfjc_175",
	previewSessionLabel: "_previewSessionLabel_1vfjc_183",
	right: "_right_1vfjc_187",
	sessionMenu: "_sessionMenu_1vfjc_196"
};
var AgentBuilderPreviewHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderPreviewHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderPreviewHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../../@n8n/utils/src/is-record.ts
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
//#endregion
//#region src/features/ai/shared/agentsChat/interactiveSummary.ts
/**
* Build a one-line human-readable label for a resolved interactive tool call.
* Used by `AgentChatToolSteps` to show the user's answer beside the tool name
* (e.g. "→ ask_questions · Slack") so resolved cards leave a compact trace in
* scrollback instead of vanishing.
*
* Returns `undefined` for non-interactive tools or when the output isn't
* shaped as expected — callers fall back to rendering just the tool name.
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isQuestionAnswerLike(value) {
	return isPlainObject(value);
}
/** One-line label for a single answered question: joined selected options, or the free-text answer. */
function answerLabel(answer) {
	if (answer.skipped === true) return void 0;
	const selected = Array.isArray(answer.selectedOptions) ? answer.selectedOptions.filter((v) => typeof v === "string") : [];
	const customText = typeof answer.customText === "string" ? answer.customText.trim() : "";
	const parts = customText ? [...selected, customText] : selected;
	return parts.length > 0 ? parts.join(", ") : void 0;
}
function summariseInteractiveOutput(toolName, output, input) {
	if (!isPlainObject(output)) return void 0;
	if (toolName === "ask_questions") {
		const answers = Array.isArray(output.answers) ? output.answers : void 0;
		if (!answers || answers.length === 0) return void 0;
		const labels = answers.filter(isQuestionAnswerLike).map(answerLabel).filter(Boolean);
		return labels.length > 0 ? labels.join("; ") : void 0;
	}
	if (toolName === "ask_credential" || toolName === "ask_embedding_credential") {
		if ("skipped" in output && output.skipped) return "Skipped";
		if (typeof output.credentialName === "string" && output.credentialName) return output.credentialName;
		if (isPlainObject(output.credentials) && Object.keys(output.credentials).length > 0) return "Selected";
		return;
	}
	if (toolName === "configure_channel") {
		const connected = typeof output.connected === "boolean" ? output.connected : typeof output.approved === "boolean" ? output.approved : void 0;
		if (connected === void 0) return void 0;
		return connected ? "Connected" : "Skipped";
	}
	if (toolName === "chat_action") {
		const resume = n8nChatResumeValueSchema.safeParse(output);
		if (!resume.success) return void 0;
		const parsed = parseN8nChatActionInput(input);
		if (!parsed) return resume.data.value;
		return cardChoiceLabel(parsed.card, resume.data);
	}
}
function summariseToolCall(toolName, output, input) {
	return summariseInteractiveOutput(toolName, output, input);
}
//#endregion
//#region src/features/ai/shared/agentsChat/messageMappers.ts
var INTERACTIVE_TOOL_NAMES = [
	ASK_CREDENTIAL_TOOL_NAME,
	ASK_EMBEDDING_CREDENTIAL_TOOL_NAME,
	ASK_QUESTIONS_TOOL_NAME,
	CONFIGURE_CHANNEL_TOOL_NAME
];
function isInteractiveToolName(value) {
	return typeof value === "string" && INTERACTIVE_TOOL_NAMES.includes(value);
}
function syncLegacyInteractive(message) {
	const interactives = message.interactives;
	if (!interactives?.length) {
		delete message.interactive;
		return;
	}
	message.interactive = interactives.find((payload) => payload.resolvedAt === void 0) ?? interactives[0];
}
function getMessageInteractives(message) {
	if (message.interactives?.length) return message.interactives;
	return message.interactive ? [message.interactive] : [];
}
function setMessageInteractives(message, interactives) {
	if (interactives.length === 0) {
		delete message.interactives;
		delete message.interactive;
		return;
	}
	message.interactives = interactives;
	syncLegacyInteractive(message);
}
function upsertMessageInteractive(message, interactive) {
	const interactives = [...getMessageInteractives(message)];
	const index = interactives.findIndex((payload) => payload.toolCallId === interactive.toolCallId);
	if (index === -1) interactives.push(interactive);
	else interactives[index] = interactive;
	setMessageInteractives(message, interactives);
}
function getMessageInteractive(message, toolCallId) {
	return getMessageInteractives(message).find((payload) => payload.toolCallId === toolCallId);
}
function findOpenInteractive(messages) {
	for (const message of messages) {
		const open = getMessageInteractives(message).find((payload) => payload.resolvedAt === void 0);
		if (open) return open;
	}
}
/** True when a suspend payload is the approval tool's renderable input. */
function isApprovalSuspendInput(value) {
	return parseApprovalInput(value) !== void 0;
}
function parseApprovalInput(value) {
	if (!isRecord(value)) return void 0;
	if (value.type !== "approval") return void 0;
	if (typeof value.toolName !== "string" || value.toolName.length === 0) return void 0;
	return {
		type: "approval",
		toolName: value.toolName,
		...typeof value.displayName === "string" && value.displayName.length > 0 && { displayName: value.displayName },
		args: value.args
	};
}
function isDeclinedToolOutput(value) {
	return isRecord(value) && value.declined === true;
}
/** Mirrors `askQuestionsInputSchema` in `ask-questions.tool.ts` — not exported since it's cli-internal. */
var rawAskQuestionsInputSchema = objectType({
	questions: arrayType(objectType({
		id: stringType().optional(),
		question: stringType(),
		type: enumType([
			"single",
			"multi",
			"text"
		]),
		options: arrayType(stringType()).optional()
	})).min(1),
	introMessage: stringType().optional()
});
/** Mirrors `configureChannelInputSchema` in `configure-channel.tool.ts` — not exported since it's cli-internal. */
var rawConfigureChannelInputSchema = objectType({ integrationType: stringType() });
function buildQuestionsPayloadFromInput(input) {
	const asSuspend = questionsSuspendPayloadSchema.safeParse(input);
	if (asSuspend.success) return asSuspend.data;
	const raw = rawAskQuestionsInputSchema.safeParse(input);
	if (!raw.success) return void 0;
	const questions = raw.data.questions.map((question, index) => ({
		...question,
		id: question.id ?? `q${index + 1}`
	}));
	return {
		requestId: "",
		message: raw.data.introMessage ?? "The agent builder has questions",
		severity: "info",
		inputType: "questions",
		questions,
		...raw.data.introMessage ? { introMessage: raw.data.introMessage } : {}
	};
}
function buildCredentialPayloadFromInput(input) {
	const asSuspend = credentialSuspendPayloadSchema.safeParse(input);
	if (asSuspend.success) return asSuspend.data;
	const raw = askCredentialInputSchema.safeParse(input);
	if (!raw.success) return void 0;
	return {
		requestId: "",
		message: raw.data.purpose,
		severity: "info",
		credentialRequests: [{
			credentialType: raw.data.credentialType,
			reason: raw.data.purpose,
			existingCredentials: []
		}],
		credentialFlow: { stage: "generic" }
	};
}
function buildChannelPayloadFromInput(input, context) {
	const asSuspend = channelSuspendPayloadSchema.safeParse(input);
	if (asSuspend.success) return asSuspend.data;
	const raw = rawConfigureChannelInputSchema.safeParse(input);
	if (!raw.success || !context?.agentId || !context.projectId) return void 0;
	return {
		requestId: "",
		message: `Set up the ${raw.data.integrationType} channel`,
		severity: "info",
		channelConfig: {
			integrationType: raw.data.integrationType,
			agentId: context.agentId
		},
		projectId: context.projectId
	};
}
/** Tool output shape for `ask_questions` (see `ask-questions.tool.ts`'s handler return). */
var askQuestionsOutputSchema = objectType({
	answered: booleanType(),
	answers: arrayType(questionAnswerSchema.extend({ question: stringType().optional() })).optional()
});
function parseQuestionsResolvedValue(output) {
	const asOutput = askQuestionsOutputSchema.safeParse(output);
	if (asOutput.success) return asOutput.data;
	const asResume = questionsResumeSchema.safeParse(output);
	return asResume.success ? asResume.data : void 0;
}
/** Tool output shape for `ask_credential` / `ask_embedding_credential` (see `AskCredentialToolResult`). */
var askCredentialOutputSchema = unionType([objectType({ skipped: literalType(true) }), objectType({
	credentialId: stringType(),
	credentialName: stringType(),
	credentials: recordType(objectType({
		id: stringType(),
		name: stringType()
	})).optional()
})]);
function parseCredentialResolvedValue(output) {
	const asOutput = askCredentialOutputSchema.safeParse(output);
	if (asOutput.success) return asOutput.data;
	const asResume = credentialResumeSchema.safeParse(output);
	return asResume.success ? asResume.data : void 0;
}
/** Tool output shape for `configure_channel` (see `configure-channel.tool.ts`'s resumed-leg return). */
var configureChannelOutputSchema = objectType({ connected: booleanType() });
function parseChannelResolvedValue(output) {
	const asOutput = configureChannelOutputSchema.safeParse(output);
	if (asOutput.success) return asOutput.data;
	const asResume = channelResumeSchema.safeParse(output);
	return asResume.success ? asResume.data : void 0;
}
function parseAskEmbeddingCredentialOutput(value) {
	return parseCredentialResolvedValue(value);
}
/**
* Given a tool call belonging to one of the interactive builder tools,
* reconstruct an `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present — `resolvedValue` is parsed from it
*   via the matching zod schema. Interactive tools transform the resume
*   payload into a distinct output shape, so `resolvedValue` is parsed
*   defensively (see the `parse*ResolvedValue` helpers above).
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*
* `context` supplies the ambient agent/project scope needed only to
* reconstruct an OPEN `configure_channel` card straight from persisted
* history (see `buildChannelPayloadFromInput`) — omit it for live SSE calls,
* where `tc.input` already carries the full suspend payload.
*/
function rebuildInteractiveFromHistory(tc, context) {
	const approvalInput = parseApprovalInput(tc.input);
	if (approvalInput) return {
		toolCallId: tc.toolCallId,
		...tc.output !== void 0 && { resolvedAt: 1 },
		toolName: APPROVAL_TOOL_NAME,
		input: approvalInput,
		...tc.output !== void 0 && { resolvedValue: { approved: !isDeclinedToolOutput(tc.output) } }
	};
	if (tc.tool === "chat_action") {
		const input = parseN8nChatActionInput(tc.input);
		if (!input) return void 0;
		if (tc.output === void 0 && !isAwaitingCard(input.card)) return void 0;
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			toolName: N8N_CHAT_ACTION_TOOL_NAME,
			input,
			...resolved?.success && { resolvedValue: resolved.data }
		};
	}
	if (!isInteractiveToolName(tc.tool)) return void 0;
	const base = {
		toolCallId: tc.toolCallId,
		...tc.output !== void 0 && { resolvedAt: 1 }
	};
	if (tc.tool === "ask_credential" || tc.tool === "ask_embedding_credential") {
		const input = buildCredentialPayloadFromInput(tc.input);
		if (!input) return void 0;
		const resolved = tc.output === void 0 ? void 0 : tc.tool === "ask_embedding_credential" ? parseAskEmbeddingCredentialOutput(tc.output) : parseCredentialResolvedValue(tc.output);
		return {
			...base,
			toolName: tc.tool,
			input,
			...resolved && { resolvedValue: resolved }
		};
	}
	if (tc.tool === "configure_channel") {
		const input = buildChannelPayloadFromInput(tc.input, context);
		if (!input) return void 0;
		const resolved = tc.output !== void 0 ? parseChannelResolvedValue(tc.output) : void 0;
		return {
			...base,
			toolName: CONFIGURE_CHANNEL_TOOL_NAME,
			input,
			...resolved && { resolvedValue: resolved }
		};
	}
	const input = buildQuestionsPayloadFromInput(tc.input);
	if (!input) return void 0;
	const resolved = tc.output !== void 0 ? parseQuestionsResolvedValue(tc.output) : void 0;
	return {
		...base,
		toolName: ASK_QUESTIONS_TOOL_NAME,
		input,
		...resolved && { resolvedValue: resolved }
	};
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive, we attach a reconstructed
* `InteractivePayload` so the UI re-renders the card in either its open
* (awaiting user) or resolved (disabled) state.
*/
function convertDbMessages(dbMessages, context) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === "user" ? "user" : msg.role === "assistant" ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const toolCalls = [];
		const renderParts = [];
		const interactives = [];
		let status;
		for (const part of msg.content) if (part.type === "text" && part.text) {
			text += part.text;
			renderParts.push({
				type: "text",
				text: part.text
			});
		} else if (part.type === "reasoning" && part.text) thinking += part.text;
		else if (part.type === "tool-call" && part.toolName) {
			let state;
			let output;
			const canceled = part.canceled === true;
			if (part.state === "resolved") {
				output = part.output;
				if (canceled) state = TOOL_CALL_STATE.CANCELLED;
				else if (isFailedDelegateOutput(part.toolName, part.output)) state = TOOL_CALL_STATE.ERROR;
				else state = TOOL_CALL_STATE.DONE;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else {
				state = TOOL_CALL_STATE.RUNNING;
				output = void 0;
			}
			const toolCall = {
				tool: part.toolName,
				toolCallId: part.toolCallId ?? "",
				input: part.input,
				...output !== void 0 && { output },
				...canceled && { canceled },
				state,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime },
				displaySummary: summariseToolCall(part.toolName, output, part.input)
			};
			toolCalls.push(toolCall);
			const rebuilt = rebuildInteractiveFromHistory(toolCall, context);
			if (!rebuilt) continue;
			if (rebuilt.resolvedAt === void 0) {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				status = CHAT_MESSAGE_STATUS.AWAITING_USER;
			}
			interactives.push(rebuilt);
			renderParts.push({
				type: "interactive",
				toolCallId: rebuilt.toolCallId
			});
		}
		const chatMessage = {
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			...renderParts.length > 0 && { renderParts },
			thinking: thinking || void 0,
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...status && { status }
		};
		setMessageInteractives(chatMessage, interactives);
		result.push(chatMessage);
	}
	return result;
}
/**
* Re-attach a `runId` to each interactive card whose underlying tool call is
* still suspended on the backend. The sidecar comes from `GET /build/messages`
* (`openSuspensions`) — `convertDbMessages` can't surface it on its own
* because raw persisted messages don't carry runIds.
*
* Mutates `chat` in place (history-load happens before reactivity wraps the
* messages, so this is safe and avoids an extra deep clone) and returns it
* for ergonomic chaining.
*/
function applyOpenSuspensions(chat, suspensions) {
	if (suspensions.length === 0) return chat;
	const byToolCallId = new Map(suspensions.map((s) => [s.toolCallId, s.runId]));
	for (const msg of chat) {
		const interactives = getMessageInteractives(msg);
		for (const interactive of interactives) {
			const runId = byToolCallId.get(interactive.toolCallId);
			if (runId) interactive.runId = runId;
		}
		setMessageInteractives(msg, interactives);
	}
	return chat;
}
//#endregion
//#region src/features/agents/composables/useAgentChatStream.ts
function useAgentChatStream(params) {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showError } = useToast();
	const messages = ref([]);
	const isStreaming = ref(false);
	const abortController = ref(null);
	const historyLoaded = ref(false);
	/**
	* Set when the backend rejects the stream because the agent itself is
	* misconfigured (missing instructions / model / credential). Cleared on the
	* next send so users can fix the config and retry without a manual dismiss.
	*/
	const fatalError = ref(null);
	const messagingState = computed(() => {
		if (!isStreaming.value) return "idle";
		const lastMsg = messages.value[messages.value.length - 1];
		if (!lastMsg || lastMsg.role === "user") return "waitingFirstChunk";
		return "receiving";
	});
	async function loadHistory() {
		if (historyLoaded.value) return;
		const continueId = params.continueSessionId?.value;
		try {
			let dbMessages;
			let openSuspensions = [];
			if (params.endpoint.value === "build") {
				const envelope = await getBuilderMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			} else if (continueId) {
				const envelope = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			} else {
				const envelope = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			}
			if (dbMessages.length > 0) {
				const context = {
					agentId: params.agentId.value,
					projectId: params.projectId.value
				};
				messages.value = applyOpenSuspensions(convertDbMessages(dbMessages, context), openSuspensions);
			}
			params.onHistoryLoaded?.(messages.value.length);
		} catch (error) {
			if (error?.httpStatusCode === 404) params.onHistoryLoaded?.(0);
			else showError(error, locale.baseText("agents.chat.loadHistory.error"));
		} finally {
			historyLoaded.value = true;
		}
	}
	async function clearHistory() {
		const clearRemote = params.endpoint.value === "build" ? clearBuilderMessages : clearTestChatMessages;
		try {
			await clearRemote(rootStore.restApiContext, params.projectId.value, params.agentId.value);
			messages.value = [];
		} catch (error) {
			showError(error, locale.baseText("agents.chat.clearHistory.error"));
		}
	}
	/**
	* Lazily mint a ChatMessage when the next text/reasoning/tool event needs
	* one. The id is FE-issued (used as a v-for key) — the wire format no
	* longer carries a server-minted messageId.
	*/
	function ensureCurrent(session) {
		if (session.current) return session.current;
		const msg = reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			thinking: "",
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.STREAMING
		});
		messages.value.push(msg);
		session.current = msg;
		session.minted.add(msg);
		return msg;
	}
	/**
	* Find a ToolCall by its `toolCallId`, walking from the latest ChatMessage
	* backwards. Tool results / execution-start events arrive in fresh LLM
	* iterations after the tool-call message has been closed by `finish-step`,
	* so we cannot rely on the cursor — only the natural id.
	*/
	function findToolCallById(toolCallId) {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const m = messages.value[i];
			const found = m.toolCalls?.find((t) => t.toolCallId === toolCallId);
			if (found) return {
				msg: m,
				tc: found
			};
		}
		return null;
	}
	function markMessageSuccessIfSettled(msg) {
		if (msg.status !== CHAT_MESSAGE_STATUS.AWAITING_USER) return;
		if (!getMessageInteractives(msg).some((payload) => payload.resolvedAt === void 0)) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
	}
	function dropOrphanMintedBubbles(session) {
		for (const msg of session.minted) if (!msg.content && (msg.toolCalls?.length ?? 0) === 0) {
			messages.value = messages.value.filter((m) => m !== msg);
			session.minted.delete(msg);
		}
	}
	function handleEvent(event, session) {
		switch (event.type) {
			case "start-step":
			case "finish-step":
				session.current = void 0;
				break;
			case "text-start":
			case "text-end":
			case "reasoning-start":
			case "reasoning-end": break;
			case "text-delta": {
				const msg = ensureCurrent(session);
				msg.content += event.delta;
				break;
			}
			case "reasoning-delta": {
				const msg = ensureCurrent(session);
				msg.thinking = (msg.thinking ?? "") + event.delta;
				break;
			}
			case "tool-input-start": {
				const msg = ensureCurrent(session);
				if (msg.content && !msg.content.endsWith("\n")) msg.content += "\n";
				msg.toolCalls = msg.toolCalls ?? [];
				if (!msg.toolCalls.find((t) => t.toolCallId === event.toolCallId)) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					state: TOOL_CALL_STATE.PENDING
				});
				break;
			}
			case "tool-input-delta": break;
			case "tool-call": {
				const msg = ensureCurrent(session);
				msg.toolCalls = msg.toolCalls ?? [];
				const existing = msg.toolCalls.find((t) => t.toolCallId === event.toolCallId);
				if (!existing) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					input: event.input,
					state: TOOL_CALL_STATE.PENDING,
					displaySummary: summariseToolCall(event.toolName, void 0, event.input)
				});
				else {
					existing.input = event.input;
					existing.displaySummary = summariseToolCall(existing.tool, existing.output, existing.input);
					if (existing.state !== TOOL_CALL_STATE.RUNNING && existing.state !== TOOL_CALL_STATE.DONE && existing.state !== TOOL_CALL_STATE.CANCELLED) existing.state = TOOL_CALL_STATE.PENDING;
				}
				break;
			}
			case "tool-execution-start": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					found.tc.startTime = event.startTime;
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.CANCELLED) found.tc.state = TOOL_CALL_STATE.RUNNING;
				}
				break;
			}
			case "tool-execution-end": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.SUSPENDED) found.tc.state = event.isError ? TOOL_CALL_STATE.ERROR : TOOL_CALL_STATE.DONE;
					found.tc.endTime = event.endTime;
				}
				break;
			}
			case "tool-result": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					const toolResultEvent = event;
					found.tc.output = event.output;
					const failed = event.isError || isFailedDelegateOutput(found.tc.tool, event.output);
					found.tc.state = failed ? TOOL_CALL_STATE.ERROR : toolResultEvent.canceled === true ? TOOL_CALL_STATE.CANCELLED : TOOL_CALL_STATE.DONE;
					found.tc.canceled = toolResultEvent.canceled === true;
					found.tc.displaySummary = summariseToolCall(found.tc.tool, event.output, found.tc.input);
					const updated = rebuildInteractiveFromHistory(found.tc);
					if (updated) upsertMessageInteractive(found.msg, updated);
					markMessageSuccessIfSettled(found.msg);
				}
				break;
			}
			case "tool-call-suspended": {
				const { payload } = event;
				const found = findToolCallById(payload.toolCallId);
				const suspendIsRenderableInput = isInteractiveToolName(payload.toolName) || isApprovalSuspendInput(payload.input);
				let msg;
				let tc;
				if (found) {
					msg = found.msg;
					tc = found.tc;
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					if (suspendIsRenderableInput) tc.input = payload.input;
					else tc.suspendPayload = payload.input;
				} else {
					msg = ensureCurrent(session);
					tc = {
						tool: payload.toolName,
						toolCallId: payload.toolCallId,
						state: TOOL_CALL_STATE.SUSPENDED,
						...suspendIsRenderableInput ? { input: payload.input } : { suspendPayload: payload.input }
					};
					msg.toolCalls = [...msg.toolCalls ?? [], tc];
				}
				const interactive = rebuildInteractiveFromHistory({
					...tc,
					output: void 0
				});
				if (interactive) {
					interactive.runId = payload.runId;
					upsertMessageInteractive(msg, interactive);
					msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
				}
				break;
			}
			case "message": break;
			case "code-delta":
				params.onCodeDelta?.(event.delta);
				break;
			case "config-updated":
			case "tool-updated":
				session.builderMutated = true;
				params.onConfigUpdated?.();
				break;
			case "error":
				session.errorEmitted = true;
				dropOrphanMintedBubbles(session);
				if (event.errorCode === "agent_misconfigured") fatalError.value = {
					message: event.message,
					missing: event.missing ?? []
				};
				else messages.value.push(reactive({
					id: crypto.randomUUID(),
					role: "assistant",
					content: event.message,
					thinking: "",
					toolCalls: [],
					status: CHAT_MESSAGE_STATUS.ERROR
				}));
				break;
			case "done": return { done: true };
			default: break;
		}
	}
	async function consumeStream(response, session) {
		if (!response.body) return false;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		let doneSeen = false;
		try {
			readerLoop: while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";
				for (const line of lines) {
					if (!line.startsWith("data: ")) continue;
					const raw = line.slice(6);
					let event;
					try {
						event = JSON.parse(raw);
					} catch {
						continue;
					}
					if (handleEvent(event, session)?.done) {
						doneSeen = true;
						break readerLoop;
					}
				}
			}
		} finally {
			reader.releaseLock();
		}
		return doneSeen;
	}
	function finalizeStream(session) {
		for (const msg of session.minted) if (msg.status === CHAT_MESSAGE_STATUS.STREAMING) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
		if (params.endpoint.value !== "build") return;
		if (session.builderMutated) params.onConfigUpdated?.();
	}
	async function postAndConsume(url, body) {
		const session = {
			builderMutated: false,
			errorEmitted: false,
			minted: /* @__PURE__ */ new Set()
		};
		isStreaming.value = true;
		const controller = new AbortController();
		abortController.value = controller;
		let transportFailed = false;
		let doneSeen = false;
		try {
			const browserId = localStorage.getItem("n8n-browserId") ?? "";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"browser-id": browserId
				},
				credentials: "include",
				body: JSON.stringify(body),
				signal: controller.signal
			});
			if (!response.ok || !response.body) {
				transportFailed = true;
				const errorMsg = {
					id: crypto.randomUUID(),
					role: "assistant",
					content: `Error: ${response.statusText || "Failed to reach agent"}`,
					status: "error"
				};
				messages.value.push(errorMsg);
				return { ok: false };
			}
			doneSeen = await consumeStream(response, session);
			finalizeStream(session);
		} catch (e) {
			if (e instanceof DOMException && e.name === "AbortError") {
				finalizeStream(session);
				return { ok: false };
			}
			transportFailed = true;
			const text = `Error: ${e instanceof Error ? e.message : "Unknown error"}`;
			messages.value.push({
				id: crypto.randomUUID(),
				role: "assistant",
				content: text,
				status: "error"
			});
		} finally {
			abortController.value = null;
			isStreaming.value = false;
		}
		if (params.endpoint.value === "build" && doneSeen) {
			await nextTick();
			params.onBuildDone?.();
		}
		return { ok: !transportFailed && !session.errorEmitted };
	}
	async function streamFromEndpoint(endpoint, message) {
		const { baseUrl } = rootStore.restApiContext;
		const url = `${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/${endpoint}`;
		const body = { message };
		if (endpoint === "chat" && params.continueSessionId?.value) body.sessionId = params.continueSessionId.value;
		await postAndConsume(url, body);
	}
	/**
	* Resume a suspended interaction. Build-mode interactions post to
	* build/resume; preview chat approval prompts post to chat/resume. Both
	* paths re-enter the same SSE handler. The `runId` is required — it comes
	* from the original `tool-call-suspended` chunk (live) or from the
	* `openSuspensions` sidecar applied during history reload.
	*
	* The UI updates optimistically, then restores the previous card state if
	* the resume POST or SSE stream fails.
	*/
	async function resume(payload) {
		const isCancellation = "cancelled" in payload;
		const text = isCancellation ? payload.text.trim() : "";
		if (isCancellation && !text) return;
		const found = findToolCallById(payload.toolCallId);
		const snapshot = found ? {
			tc: found.tc,
			prevState: found.tc.state,
			prevOutput: found.tc.output,
			prevCanceled: found.tc.canceled,
			prevSummary: found.tc.displaySummary,
			msg: found.msg,
			prevStatus: found.msg.status,
			prevInteractive: found.msg.interactive,
			prevInteractives: found.msg.interactives ? [...found.msg.interactives] : void 0
		} : null;
		let optimisticUserMessageId;
		if (found) {
			if (isCancellation) {
				found.tc.state = TOOL_CALL_STATE.CANCELLED;
				found.tc.canceled = true;
				const interactive = getMessageInteractive(found.msg, payload.toolCallId);
				if (interactive) upsertMessageInteractive(found.msg, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			} else {
				found.tc.state = TOOL_CALL_STATE.DONE;
				found.tc.canceled = false;
				found.tc.output = payload.resumeData;
				found.tc.displaySummary = summariseToolCall(found.tc.tool, payload.resumeData, found.tc.input);
				const updated = rebuildInteractiveFromHistory(found.tc);
				if (updated) upsertMessageInteractive(found.msg, updated);
			}
			markMessageSuccessIfSettled(found.msg);
		}
		const resumeData = isCancellation ? {
			_type: "agent.cancellation",
			message: text
		} : payload.resumeData;
		if (isCancellation) {
			optimisticUserMessageId = crypto.randomUUID();
			fatalError.value = null;
			messages.value.push({
				id: optimisticUserMessageId,
				role: "user",
				content: text,
				status: "success"
			});
		}
		const { baseUrl } = rootStore.restApiContext;
		const resumeEndpoint = params.endpoint.value === "chat" ? "chat/resume" : "build/resume";
		const { ok } = await postAndConsume(`${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/${resumeEndpoint}`, {
			runId: payload.runId,
			toolCallId: payload.toolCallId,
			resumeData
		});
		if (!ok && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.canceled = snapshot.prevCanceled;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			if (snapshot.prevInteractives) setMessageInteractives(snapshot.msg, snapshot.prevInteractives);
			else if (snapshot.prevInteractive) setMessageInteractives(snapshot.msg, [snapshot.prevInteractive]);
			else setMessageInteractives(snapshot.msg, []);
		}
		if (!ok && optimisticUserMessageId) messages.value = messages.value.filter((m) => m.id !== optimisticUserMessageId);
	}
	async function cancelAndSteer(text) {
		const openInteractive = findOpenInteractive(messages.value);
		if (!openInteractive?.runId) return;
		await resume({
			runId: openInteractive.runId,
			toolCallId: openInteractive.toolCallId,
			cancelled: true,
			text
		});
	}
	async function sendMessage(text) {
		const trimmed = text.trim();
		if (!trimmed || isStreaming.value) return;
		fatalError.value = null;
		messages.value.push({
			id: crypto.randomUUID(),
			role: "user",
			content: trimmed,
			status: "success"
		});
		await streamFromEndpoint(params.endpoint.value, trimmed);
	}
	function dismissFatalError() {
		fatalError.value = null;
	}
	function stopGenerating() {
		abortController.value?.abort();
	}
	return {
		messages,
		isStreaming,
		messagingState,
		fatalError,
		loadHistory,
		clearHistory,
		sendMessage,
		stopGenerating,
		resume,
		cancelAndSteer,
		dismissFatalError
	};
}
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=script&setup=true&lang.ts
var AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatEmptyState",
	props: { endpoint: {} },
	setup(__props) {
		const props = __props;
		const icon = computed(() => props.endpoint === "build" ? "wand-sparkles" : "message-square");
		const title = computed(() => props.endpoint === "build" ? "Build your agent" : "Chat with your agent");
		const subtitle = computed(() => props.endpoint === "build" ? "Describe what you want your agent to do" : "Send a message to start a conversation");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.emptyState, __props.endpoint === "build" && _ctx.$style.buildEmptyState]) }, [
				createVNode(unref(N8nIcon_default), {
					icon: icon.value,
					size: 32,
					color: "text-light"
				}, null, 8, ["icon"]),
				createVNode(unref(N8nText_default), {
					tag: "p",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
var AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default = { emptyState: "_emptyState_1vlul_2" };
var AgentChatEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/displayGroups.ts
function isGroupable(message) {
	return message.role === "assistant" && !!message.toolCalls?.length && !message.content.trim();
}
/**
* Merge two records of the same tool call: messages are now stored both when a
* stream suspends and again on completion, so history can carry the same
* toolCallId twice (open, then resolved). Ported from master's undrained-stream
* fix (#32119).
*/
function mergeToolCall(previous, next) {
	const merged = {
		...previous,
		...next,
		input: next.input ?? previous.input,
		startTime: previous.startTime ?? next.startTime,
		endTime: next.endTime ?? previous.endTime,
		canceled: next.canceled ?? previous.canceled
	};
	return {
		...merged,
		displaySummary: summariseToolCall(merged.tool, merged.output, merged.input)
	};
}
function appendToolCalls(existing, next) {
	const merged = [...existing];
	const indexByToolCallId = /* @__PURE__ */ new Map();
	for (const [index, toolCall] of merged.entries()) if (toolCall.toolCallId) indexByToolCallId.set(toolCall.toolCallId, index);
	for (const toolCall of next) {
		if (!toolCall.toolCallId) {
			merged.push(toolCall);
			continue;
		}
		const index = indexByToolCallId.get(toolCall.toolCallId);
		if (index === void 0) {
			indexByToolCallId.set(toolCall.toolCallId, merged.length);
			merged.push(toolCall);
			continue;
		}
		merged[index] = mergeToolCall(merged[index], toolCall);
	}
	return merged;
}
function appendInteractivePayloads(existing, next) {
	let merged = existing;
	for (const payload of next) {
		const index = merged.findIndex((existingPayload) => existingPayload.toolCallId === payload.toolCallId);
		if (index === -1) merged = [...merged, payload];
		else merged = merged.map((existingPayload, i) => i === index ? payload : existingPayload);
	}
	return merged;
}
function buildDisplayGroups(messages) {
	const groups = [];
	for (const message of messages) {
		if (isGroupable(message)) {
			const last = groups[groups.length - 1];
			if (last && last.kind === "toolRun" && !last.finalMessage) {
				last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls ?? []);
				if (message.thinking) last.thinking = last.thinking ? `${last.thinking}\n\n${message.thinking}` : message.thinking;
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				continue;
			}
			groups.push({
				kind: "toolRun",
				id: message.id,
				thinking: message.thinking ?? "",
				toolCalls: [...message.toolCalls ?? []],
				interactives: getMessageInteractives(message)
			});
			continue;
		}
		if (message.role === "assistant") {
			const last = groups[groups.length - 1];
			if (last && last.kind === "toolRun" && !last.finalMessage) {
				last.finalMessage = message;
				if (message.thinking) last.thinking = last.thinking ? `${last.thinking}\n\n${message.thinking}` : message.thinking;
				if (message.toolCalls?.length) last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls);
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				continue;
			}
		}
		groups.push({
			kind: "message",
			id: message.id,
			message
		});
	}
	return groups;
}
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=script&setup=true&lang.ts
var memoriesCountLabelKey = "agents.builder.quickActions.memoriesUsed.count";
var keyMemoryLabelKey = "agents.builder.quickActions.memoriesUsed.keyMemory";
var AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMemoryUsed",
	props: { memories: {} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const memories = computed(() => props.memories);
		const isOpen = ref(false);
		function onOpenChange(open) {
			isOpen.value = open;
			emit("update:open", open);
		}
		function splitKeyMemory(text) {
			return text.split(/(?<=[.!?])\s+/).filter((part) => part.length > 0);
		}
		return (_ctx, _cache) => {
			return memories.value.length > 0 ? (openBlock(), createBlock(unref(HoverCardRoot_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": [_cache[0] || (_cache[0] = ($event) => isOpen.value = $event), onOpenChange],
				"open-delay": 400,
				"close-delay": 0
			}, {
				default: withCtx(() => [createVNode(unref(HoverCardTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(memoriesCountLabelKey, {
						adjustToNumber: memories.value.length,
						interpolate: { count: String(memories.value.length) }
					})), 1)], 2)]),
					_: 1
				}), createVNode(unref(HoverCardPortal_default), null, {
					default: withCtx(() => [createVNode(unref(HoverCardContent_default), {
						side: "bottom",
						align: "end",
						"side-offset": 8,
						class: normalizeClass([_ctx.$style.popoverContent, _ctx.$style.panel])
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(memories.value, (memory) => {
							return openBlock(), createElementBlock("div", {
								key: memory.id,
								class: normalizeClass(_ctx.$style.memorySection)
							}, [createVNode(unref(N8nText_default), {
								step: "sm",
								bold: "",
								class: normalizeClass(_ctx.$style.label)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(keyMemoryLabelKey)), 1)]),
								_: 1
							}, 8, ["class"]), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.keyMemoryList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(splitKeyMemory(memory.keyMemory), (sentence, sentenceIndex) => {
								return openBlock(), createElementBlock("li", { key: `${memory.id}-${sentenceIndex}` }, [createVNode(unref(N8nText_default), {
									step: "sm",
									tag: "p",
									class: normalizeClass(_ctx.$style.keyMemory)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(sentence), 1)]),
									_: 2
								}, 1032, ["class"])]);
							}), 128))], 2)], 2);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_dc3lv_344";
var popoverIn$1 = "_popoverIn_dc3lv_1";
var panel$5 = "_panel_dc3lv_413";
var trigger = "_trigger_dc3lv_425";
var keyMemoryList = "_keyMemoryList_dc3lv_437";
var memorySection = "_memorySection_dc3lv_450";
var keyMemory = "_keyMemory_dc3lv_437";
var shimmer$1 = "_shimmer_dc3lv_1";
var spin$1 = "_spin_dc3lv_1";
var opacityPulse$1 = "_opacityPulse_dc3lv_1";
var fadeIn$1 = "_fadeIn_dc3lv_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_dc3lv_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_dc3lv_1";
var pulseGlow$1 = "_pulseGlow_dc3lv_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_dc3lv_1";
var fade$1 = "_fade_dc3lv_1";
var fadeInUp$1 = "_fadeInUp_dc3lv_1";
var fadeInDown$1 = "_fadeInDown_dc3lv_1";
var fadeInLeft$1 = "_fadeInLeft_dc3lv_1";
var fadeInRight$1 = "_fadeInRight_dc3lv_1";
var fadeOut$1 = "_fadeOut_dc3lv_1";
var fadeOutDown$1 = "_fadeOutDown_dc3lv_1";
var fadeOutUp$1 = "_fadeOutUp_dc3lv_1";
var fadeOutLeft$1 = "_fadeOutLeft_dc3lv_1";
var fadeOutRight$1 = "_fadeOutRight_dc3lv_1";
var ping$1 = "_ping_dc3lv_1";
var blinkBackground$1 = "_blinkBackground_dc3lv_1";
var typingBlink$1 = "_typingBlink_dc3lv_1";
var AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	popoverIn: popoverIn$1,
	panel: panel$5,
	trigger,
	keyMemoryList,
	memorySection,
	keyMemory,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_dc3lv_1",
	opacityPulse: opacityPulse$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var AgentChatMemoryUsed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue?vue&type=script&setup=true&lang.ts
var AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageActions",
	props: {
		content: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean }
	},
	emits: ["readAloud"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "agent-chat-message-actions"
			}, [createVNode(CopyButton_default, {
				content: __props.content,
				"data-test-id": "agent-chat-message-copy"
			}, null, 8, ["content"]), __props.isSpeechSynthesisAvailable ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "bottom",
				"show-after": 300
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					icon: __props.isSpeaking ? "volume-x" : "volume-2",
					size: "small",
					"icon-size": "medium",
					"data-test-id": "agent-chat-message-read-aloud",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("readAloud"))
				}, null, 8, ["icon"])]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_4px68_125" };
var AgentChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/utils/write-todos-tool.ts
/**
* Name of the SDK tool the parent agent calls to maintain a structured task list.
* Mirrors `WRITE_TODOS_TOOL_NAME` in `@n8n/agents` (not FE-importable).
*/
var WRITE_TODOS_TOOL_NAME = "write_todos";
var todoStatusSchema = enumType([
	"pending",
	"in_progress",
	"completed",
	"blocked",
	"cancelled"
]);
var todoDifficultySchema = enumType(SUB_AGENT_TASK_DIFFICULTIES);
var todoItemSchema = objectType({
	id: stringType().min(1),
	content: stringType().min(1),
	status: todoStatusSchema,
	difficulty: todoDifficultySchema.optional(),
	delegateHint: objectType({
		subAgentId: stringType().optional(),
		expectedOutput: stringType().optional()
	}).optional()
});
var writeTodosOutputSchema = objectType({
	status: literalType("ok"),
	todoCount: numberType(),
	todos: arrayType(todoItemSchema)
});
var writeTodosFailedOutputSchema = objectType({
	status: literalType("failed"),
	error: stringType()
});
var STATUS_I18N_KEY = {
	in_progress: "agents.chat.writeTodos.status.inProgress",
	pending: "agents.chat.writeTodos.status.pending",
	completed: "agents.chat.writeTodos.status.completed",
	blocked: "agents.chat.writeTodos.status.blocked",
	cancelled: "agents.chat.writeTodos.status.cancelled"
};
var STATUS_ORDER = [
	"in_progress",
	"pending",
	"completed",
	"blocked",
	"cancelled"
];
function isWriteTodosTool(toolName) {
	return toolName === WRITE_TODOS_TOOL_NAME;
}
function parseWriteTodosOutput(output) {
	const result = writeTodosOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function parseWriteTodosFailedOutput(output) {
	const result = writeTodosFailedOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function formatWriteTodosErrorText(output) {
	const failed = parseWriteTodosFailedOutput(output);
	if (failed) {
		const error = failed.error.trim();
		return error.length > 0 ? error : void 0;
	}
	if (typeof output === "string") {
		const trimmed = output.trim();
		return trimmed.length > 0 ? trimmed : void 0;
	}
}
function writeTodosLabel(i18n) {
	return i18n.baseText("agents.chat.writeTodos.label");
}
function countIncompleteTodos(todos) {
	return todos.filter((todo) => todo.status !== "completed").length;
}
function writeTodosSummaryLabel(i18n, incompleteTodoCount) {
	if (incompleteTodoCount === 0) return i18n.baseText("agents.chat.writeTodos.summary.done");
	const key = incompleteTodoCount === 1 ? "agents.chat.writeTodos.summary.one" : "agents.chat.writeTodos.summary.other";
	return i18n.baseText(key, { interpolate: { count: String(incompleteTodoCount) } });
}
function writeTodosStatusLabel(i18n, status) {
	return i18n.baseText(STATUS_I18N_KEY[status]);
}
function writeTodosDifficultyLabel(i18n, difficulty) {
	return i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]);
}
function formatTodoItem(todo, i18n, subAgentNameById) {
	const hints = [];
	if (todo.difficulty) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.difficulty")}: ${writeTodosDifficultyLabel(i18n, todo.difficulty)}`);
	if (todo.delegateHint?.subAgentId) {
		const displayName = resolveSubAgentIdForDisplay(todo.delegateHint.subAgentId, subAgentNameById ?? /* @__PURE__ */ new Map());
		hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.subAgent")}: ${displayName}`);
	}
	if (todo.delegateHint?.expectedOutput) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.expectedOutput")}: ${todo.delegateHint.expectedOutput}`);
	const suffix = hints.length > 0 ? ` _(${hints.join("; ")})_` : "";
	return `- ${todo.content}${suffix}`;
}
/** Format parsed write_todos output as Markdown for the expandable details panel. */
function formatWriteTodosMarkdown(output, i18n, subAgentNameById) {
	const errorText = formatWriteTodosErrorText(output);
	if (errorText) return errorText;
	const parsed = parseWriteTodosOutput(output);
	if (!parsed || !i18n || parsed.todos.length === 0) return void 0;
	const sections = [];
	for (const status of STATUS_ORDER) {
		const items = parsed.todos.filter((todo) => todo.status === status);
		if (items.length === 0) continue;
		sections.push(`**${writeTodosStatusLabel(i18n, status)}**`);
		sections.push(items.map((todo) => formatTodoItem(todo, i18n, subAgentNameById)).join("\n"));
	}
	return sections.join("\n\n");
}
//#endregion
//#region src/features/agents/utils/tool-call-details.ts
function isSettledState(state) {
	return state === TOOL_CALL_STATE.DONE || state === TOOL_CALL_STATE.ERROR;
}
function formatDelegateDetails(output, i18n) {
	const parsed = parseDelegateOutput(output);
	if (!parsed) return void 0;
	const answer = parsed.answer?.trim();
	if (answer) return answer;
	const error = parsed.error?.trim();
	if (error) return formatDelegateError(error, i18n);
}
function formatExpandableDetails(toolName, output, i18n, subAgentNameById) {
	if (isDelegateSubAgentTool(toolName)) return formatDelegateDetails(output, i18n);
	if (isWriteTodosTool(toolName)) return formatWriteTodosMarkdown(output, i18n, subAgentNameById);
}
/**
* Returns Markdown/text for the expandable tool-call details panel.
* Only `delegate_subagent` and `write_todos` have purpose-built detail views;
* other tools are not expandable until their UX is designed.
*/
function getToolCallDetails(tc, i18n, subAgentNameById) {
	if (!isSettledState(tc.state)) return void 0;
	return formatExpandableDetails(tc.tool, tc.output, i18n, subAgentNameById);
}
//#endregion
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
var AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: {
		toolCalls: {},
		projectId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function toolCallsNeedSubAgentNames(toolCalls) {
			return toolCalls.some((tc) => {
				if (isDelegateSubAgentTool(tc.tool)) return true;
				if (!isWriteTodosTool(tc.tool)) return false;
				return parseWriteTodosOutput(tc.output)?.todos.some((todo) => Boolean(todo.delegateHint?.subAgentId)) ?? false;
			});
		}
		const { subAgentNameById } = useSubAgentNames(toRef(() => props.projectId ?? ""), () => toolCallsNeedSubAgentNames(props.toolCalls));
		function getToolDisplayName(toolName) {
			const translationKey = getToolNameTranslationKey(toolName);
			return translationKey ? i18n.baseText(translationKey) : formatToolNameForDisplay(toolName);
		}
		function toolStepLabel(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return i18n.baseText("agents.chat.delegate.labelFallback");
			if (isWriteTodosTool(tc.tool)) return writeTodosLabel(i18n);
			return getToolDisplayName(tc.tool);
		}
		function toolStepMetadata(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return [resolveSubAgentName(tc.input, subAgentNameById.value), getDelegateDifficultySummary(tc.input, i18n)].filter((part) => Boolean(part));
			if (isWriteTodosTool(tc.tool)) {
				const parsed = parseWriteTodosOutput(tc.output);
				if (parsed) return [writeTodosSummaryLabel(i18n, countIncompleteTodos(parsed.todos))];
			}
			if (tc.displaySummary) return [tc.displaySummary];
			return [];
		}
		function hasToolData(tc) {
			return tc.input !== void 0 || tc.output !== void 0;
		}
		function formatToolData(value) {
			if (typeof value === "string") return value;
			return JSON.stringify(value, null, 2) ?? String(value);
		}
		function toolStepView(tc) {
			const details = getToolCallDetails(tc, i18n, subAgentNameById.value) ?? "";
			const metadata = toolStepMetadata(tc);
			return {
				label: [toolStepLabel(tc), ...metadata].join(" · "),
				details,
				hasRawData: details.length === 0 && hasToolData(tc),
				expandable: details.length > 0 || hasToolData(tc)
			};
		}
		function toolStepError(tc) {
			return tc.state === "error" ? formatToolData(tc.output) : void 0;
		}
		function isToolStepLoading(tc) {
			return tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING || tc.state === TOOL_CALL_STATE.SUSPENDED;
		}
		function groupLabel() {
			return i18n.baseText("instanceAi.activitySummary.toolCalls", {
				adjustToNumber: props.toolCalls.length,
				interpolate: { count: String(props.toolCalls.length) }
			});
		}
		function hasLoadingToolCall() {
			return props.toolCalls.some((tc) => tc.state === "running" || tc.state === "suspended");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.toolSteps) }, [__props.toolCalls.length > 1 ? (openBlock(), createBlock(unref(AiActivityStepGroup_default), {
				key: 0,
				label: groupLabel(),
				size: "small",
				loading: hasLoadingToolCall()
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.toolCalls, (tc) => {
					return openBlock(), createElementBlock(Fragment, { key: tc.toolCallId }, [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createBlock(unref(AiActivityStep_default), {
							key: `${tc.toolCallId}-${view.label}`,
							label: view.label,
							loading: isToolStepLoading(tc),
							error: toolStepError(tc),
							"has-content": view.expandable
						}, {
							default: withCtx(() => [view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
								key: 0,
								"model-value": view.details,
								readonly: "",
								variant: "ghost",
								"show-toolbar": "never",
								"max-height": "240px",
								class: normalizeClass(_ctx.$style.answer)
							}, null, 8, ["model-value", "class"])) : view.hasRawData ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataList)
							}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, [
							"label",
							"loading",
							"error",
							"has-content"
						]);
					}), 128))], 64);
				}), 128))]),
				_: 1
			}, 8, ["label", "loading"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.toolCalls, (tc) => {
				return openBlock(), createBlock(unref(AiActivityStep_default), {
					key: tc.toolCallId,
					label: toolStepView(tc).label,
					loading: isToolStepLoading(tc),
					error: toolStepError(tc),
					"has-content": toolStepView(tc).expandable
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createElementBlock(Fragment, { key: view.label }, [view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
							key: 0,
							"model-value": view.details,
							readonly: "",
							variant: "ghost",
							"show-toolbar": "never",
							"max-height": "240px",
							class: normalizeClass(_ctx.$style.answer)
						}, null, 8, ["model-value", "class"])) : view.hasRawData ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.toolDataList)
						}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.toolDataSection)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.toolDataSection)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 64);
					}), 128))]),
					_: 2
				}, 1032, [
					"label",
					"loading",
					"error",
					"has-content"
				]);
			}), 128))], 2);
		};
	}
});
var AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default = {
	toolSteps: "_toolSteps_1l2ui_2",
	answer: "_answer_1l2ui_6",
	toolDataList: "_toolDataList_1l2ui_16",
	toolDataSection: "_toolDataSection_1l2ui_24",
	toolDataLabel: "_toolDataLabel_1l2ui_32",
	toolDataContent: "_toolDataContent_1l2ui_40"
};
var AgentChatToolSteps_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=script&setup=true&lang.ts
var AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMarkdownChunk",
	props: { source: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VueMarkdown), {
				source: __props.source,
				class: normalizeClass(_ctx.$style.markdown)
			}, null, 8, ["source", "class"]);
		};
	}
});
var AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = { markdown: "_markdown_7aefu_125" };
var AgentMarkdownChunk_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_aaumy_343";
var typingBlink = "_typingBlink_aaumy_1";
var shimmer = "_shimmer_aaumy_1";
var spin = "_spin_aaumy_1";
var opacityPulse = "_opacityPulse_aaumy_1";
var popoverIn = "_popoverIn_aaumy_1";
var fadeIn = "_fadeIn_aaumy_1";
var collapsibleSlideDown = "_collapsibleSlideDown_aaumy_1";
var collapsibleSlideUp = "_collapsibleSlideUp_aaumy_1";
var pulseGlow = "_pulseGlow_aaumy_1";
var pulseGlowDelayed = "_pulseGlowDelayed_aaumy_1";
var fade = "_fade_aaumy_1";
var fadeInUp = "_fadeInUp_aaumy_1";
var fadeInDown = "_fadeInDown_aaumy_1";
var fadeInLeft = "_fadeInLeft_aaumy_1";
var fadeInRight = "_fadeInRight_aaumy_1";
var fadeOut = "_fadeOut_aaumy_1";
var fadeOutDown = "_fadeOutDown_aaumy_1";
var fadeOutUp = "_fadeOutUp_aaumy_1";
var fadeOutLeft = "_fadeOutLeft_aaumy_1";
var fadeOutRight = "_fadeOutRight_aaumy_1";
var ping = "_ping_aaumy_1";
var blinkBackground = "_blinkBackground_aaumy_1";
var AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_aaumy_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground
};
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "agent-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var AgentTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", { "$style": AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/interactionRegistry.ts
function findInteractionRenderer(payload, renderers, context) {
	return renderers.find((renderer) => renderer.matches(payload, context));
}
//#endregion
//#region src/features/ai/shared/agentsChat/components/InteractionRenderer.vue
var InteractionRenderer_default = /* @__PURE__ */ defineComponent({
	__name: "InteractionRenderer",
	props: {
		payload: {},
		renderers: {},
		disabled: { type: Boolean },
		context: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderer = computed(() => findInteractionRenderer(props.payload, props.renderers, props.context));
		const rendererProps = computed(() => {
			if (!renderer.value?.getProps) return {
				payload: props.payload,
				context: props.context
			};
			return renderer.value.getProps(props.payload, props.context);
		});
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return renderer.value ? (openBlock(), createBlock(resolveDynamicComponent(renderer.value.component), mergeProps({ key: 0 }, rendererProps.value, {
				disabled: __props.disabled,
				onSubmit
			}), null, 16, ["disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/shared/composables/useWizardNavigation.ts
function useWizardNavigation(options) {
	const totalSteps = computed(() => typeof options.totalSteps === "number" ? options.totalSteps : options.totalSteps.value);
	const currentStepIndex = ref(options.initialStep ?? 0);
	const isPrevDisabled = computed(() => currentStepIndex.value === 0);
	const isNextDisabled = computed(() => currentStepIndex.value >= totalSteps.value - 1);
	const isFirstStep = computed(() => currentStepIndex.value === 0);
	const isLastStep = computed(() => currentStepIndex.value >= totalSteps.value - 1);
	function goToNext() {
		if (!isNextDisabled.value) currentStepIndex.value++;
	}
	function goToPrev() {
		if (!isPrevDisabled.value) currentStepIndex.value--;
	}
	function goToStep(index) {
		if (index >= 0 && index < totalSteps.value) currentStepIndex.value = index;
	}
	return {
		currentStepIndex,
		totalSteps,
		isPrevDisabled,
		isNextDisabled,
		isFirstStep,
		isLastStep,
		goToNext,
		goToPrev,
		goToStep
	};
}
//#endregion
//#region src/features/agents/components/interactive/AskCredentialCard.vue?vue&type=script&setup=true&lang.ts
var AskCredentialCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskCredentialCard",
	props: {
		credentialRequests: {},
		message: {},
		projectId: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* Card for the `ask_credential` / `ask_embedding_credential` builder tools.
		* Reuses the same building blocks as `InstanceAiCredentialSetup.vue`
		* (`CredentialIcon`, `NodeCredentials`, `useWizardNavigation`) since both
		* surfaces suspend with the identical `credentialSuspendPayloadSchema`
		* shape — only the resume transport differs: this card posts to
		* `POST /build/resume` (via the `submit` emit) instead of instance AI's own
		* confirm endpoint, and skips the browser-auto-setup extras that are
		* specific to instance AI.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		provide(ChatHubToolContextKey, true);
		const { currentStepIndex, isPrevDisabled, isNextDisabled, goToNext, goToPrev, goToStep } = useWizardNavigation({ totalSteps: computed(() => props.credentialRequests.length) });
		const currentRequest = computed(() => props.credentialRequests[currentStepIndex.value]);
		const showArrows = computed(() => props.credentialRequests.length > 1);
		const submitted = ref(false);
		const selections = ref({});
		for (const req of props.credentialRequests) selections.value[req.credentialType] = req.existingCredentials.length === 1 ? req.existingCredentials[0].id : null;
		function isStepComplete(credentialType) {
			return selections.value[credentialType] !== null;
		}
		const allSelected = computed(() => props.credentialRequests.every((r) => isStepComplete(r.credentialType)));
		function getDisplayName(credentialType) {
			return getAppNameFromCredType(credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType);
		}
		function syntheticNodeUi(req) {
			const selectedId = selections.value[req.credentialType];
			const selectedCred = selectedId ? req.existingCredentials.find((c) => c.id === selectedId) ?? credentialsStore.getCredentialById(selectedId) : void 0;
			return {
				id: req.credentialType,
				name: req.credentialType,
				type: "n8n-nodes-base.noOp",
				typeVersion: 1,
				position: [0, 0],
				parameters: {},
				credentials: selectedCred ? { [req.credentialType]: {
					id: selectedCred.id,
					name: selectedCred.name
				} } : {}
			};
		}
		function onCredentialSelected(credentialType, info) {
			if (props.disabled) return;
			const data = info.properties.credentials?.[credentialType];
			selections.value[credentialType] = data && typeof data === "object" && data.id ? data.id : null;
		}
		function submitCredentials() {
			if (submitted.value || props.disabled) return;
			submitted.value = true;
			const credentials = {};
			for (const [type, id] of Object.entries(selections.value)) if (id) credentials[type] = id;
			emit("submit", { credentials });
		}
		function onSkip() {
			if (submitted.value || props.disabled) return;
			submitted.value = true;
			emit("submit", { skipped: true });
		}
		watch(() => currentRequest.value && isStepComplete(currentRequest.value.credentialType), (complete, prevComplete) => {
			if (!complete || prevComplete) return;
			const nextIncomplete = props.credentialRequests.findIndex((r, idx) => idx > currentStepIndex.value && !isStepComplete(r.credentialType));
			if (nextIncomplete >= 0) goToStep(nextIncomplete);
		});
		watch(allSelected, (nowComplete, wasComplete) => {
			if (nowComplete && !wasComplete) submitCredentials();
		});
		const isSkipped = computed(() => {
			const value = props.resolvedValue;
			if (!value) return false;
			if ("skipped" in value) return value.skipped === true;
			if ("approved" in value) return value.approved === false;
			return false;
		});
		const resolvedLabel = computed(() => {
			const value = props.resolvedValue;
			if (!value || isSkipped.value) return void 0;
			if ("credentialName" in value) return value.credentialName;
			if ("credentials" in value) {
				const id = value.credentials[currentRequest.value?.credentialType ?? ""];
				return id ? credentialsStore.getCredentialById(id)?.name : void 0;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "ask-credential-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.purpose)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.message), 1)]),
						_: 1
					}, 8, ["class"]),
					!__props.disabled && currentRequest.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
						"credential-type-name": currentRequest.value.credentialType,
						size: 16
					}, null, 8, ["credential-type-name"]), createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(getDisplayName(currentRequest.value.credentialType)), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(NodeCredentials_default, {
						node: syntheticNodeUi(currentRequest.value),
						"override-cred-type": currentRequest.value.credentialType,
						"project-id": __props.projectId,
						readonly: __props.disabled,
						standalone: "",
						"hide-issues": "",
						"skip-auto-select": "",
						onCredentialSelected: _cache[0] || (_cache[0] = (info) => onCredentialSelected(currentRequest.value.credentialType, info))
					}, null, 8, [
						"node",
						"override-cred-type",
						"project-id",
						"readonly"
					])], 2)], 64)) : createCommentVNode("", true),
					!__props.disabled ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.actions)
					}, [showArrows.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.nav)
					}, [
						createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "small",
							"icon-only": "",
							disabled: unref(isPrevDisabled),
							"data-testid": "ask-credential-prev",
							"aria-label": "Previous credential",
							onClick: unref(goToPrev)
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-left",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled", "onClick"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(currentStepIndex) + 1) + " / " + toDisplayString(__props.credentialRequests.length), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "small",
							"icon-only": "",
							disabled: unref(isNextDisabled),
							"data-testid": "ask-credential-next",
							"aria-label": "Next credential",
							onClick: unref(goToNext)
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-right",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled", "onClick"])
					], 2)) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						"data-testid": "ask-credential-skip",
						onClick: onSkip
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askCredential.skip")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.resolvedRow)
					}, [isSkipped.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askCredential.skipped")), 1)]),
						_: 1
					})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						size: "small",
						color: "success"
					}), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(resolvedLabel.value ?? "—"), 1)]),
						_: 1
					})], 64))], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AskCredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_8mug1_125",
	disabled: "_disabled_8mug1_132",
	cardBody: "_cardBody_8mug1_136",
	purpose: "_purpose_8mug1_142",
	header: "_header_8mug1_147",
	credentialContainer: "_credentialContainer_8mug1_153",
	actions: "_actions_8mug1_161",
	nav: "_nav_8mug1_169",
	resolvedRow: "_resolvedRow_8mug1_175"
};
var AskCredentialCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskCredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskCredentialCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationFooter.vue?vue&type=script&setup=true&lang.ts
var ConfirmationFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmationFooter",
	props: {
		layout: { default: "row-end" },
		bordered: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.footer,
				_ctx.$style[__props.layout],
				__props.bordered && _ctx.$style.bordered
			]) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationFooter.vue?vue&type=style&index=0&lang.module.scss
var footer$1 = "_footer_nszhc_125";
var column = "_column_nszhc_140";
var bordered = "_bordered_nszhc_145";
var ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer: footer$1,
	"row-end": "_row-end_nszhc_130",
	"row-between": "_row-between_nszhc_135",
	column,
	bordered
};
var ConfirmationFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmationFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiQuestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = [
	"data-option-index",
	"disabled",
	"onClick",
	"onMouseenter"
];
var _hoisted_2$4 = ["data-option-index"];
var _hoisted_3$2 = ["data-option-index", "onMouseenter"];
var _hoisted_4 = ["data-option-index"];
var OTHER_SENTINEL = "__other__";
var InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiQuestions",
	props: {
		questions: {},
		introMessage: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* InstanceAiQuestions.vue
		*
		* Multi-step Q&A wizard for Instance AI. Renders questions with number badge rows
		* (single-select), checkboxes (multi-select), or text inputs based on question type.
		* Supports full keyboard navigation.
		*
		* Adapted from PlanQuestionsMessage.vue for the instance AI confirmation flow.
		*/
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const currentIndex = ref(0);
		const isSubmitted = ref(false);
		const answers = ref(/* @__PURE__ */ new Map());
		const highlightedIndex = ref(-1);
		const selectedIndex = ref(null);
		const containerRef = ref(null);
		const currentQuestion = computed(() => props.questions[currentIndex.value]);
		const isFirstQuestion = computed(() => currentIndex.value === 0);
		const isLastQuestion = computed(() => currentIndex.value === props.questions.length - 1);
		const filteredOptions = computed(() => {
			return (currentQuestion.value.options ?? []).filter((opt) => !opt.toLowerCase().trim().startsWith("other"));
		});
		const currentAnswer = computed(() => {
			const q = currentQuestion.value;
			return q ? answers.value.get(q.id) : void 0;
		});
		const hasCustomText = computed(() => !!currentAnswer.value?.customText?.trim());
		const hasValidAnswer = computed(() => {
			const answer = currentAnswer.value;
			if (!answer) return false;
			if (answer.skipped) return true;
			const customText = !!answer.customText?.trim();
			const hasSelectedOptions = answer.selectedOptions.length > 0;
			if (currentQuestion.value?.type === "text") return customText;
			if (answer.selectedOptions.includes(OTHER_SENTINEL)) return customText;
			return hasSelectedOptions || customText;
		});
		const showSkipButton = computed(() => {
			if (isLastQuestion.value) return false;
			if (currentQuestion.value?.type === "single" && hasCustomText.value) return false;
			return true;
		});
		const showNextButton = computed(() => {
			if (isLastQuestion.value) return true;
			if (currentQuestion.value?.type === "single") return hasCustomText.value;
			return true;
		});
		const isNextEnabled = computed(() => {
			const q = currentQuestion.value;
			if (!q) return false;
			if (isLastQuestion.value) return true;
			if (q.type === "single") return hasCustomText.value;
			if (q.type === "multi") return (currentAnswer.value?.selectedOptions.length ?? 0) > 0 || hasCustomText.value;
			if (q.type === "text") return hasCustomText.value;
			return false;
		});
		const nextButtonLabel = computed(() => {
			return isLastQuestion.value ? i18n.baseText("aiAssistant.builder.planMode.questions.submitButton") : i18n.baseText("aiAssistant.builder.planMode.questions.next");
		});
		watch(currentIndex, () => {
			const q = currentQuestion.value;
			if (q && !answers.value.has(q.id)) answers.value.set(q.id, {
				questionId: q.id,
				question: q.question,
				selectedOptions: [],
				customText: "",
				skipped: false
			});
			selectedIndex.value = null;
			highlightedIndex.value = currentQuestion.value?.type === "text" ? -1 : 0;
			nextTick(() => {
				if (currentQuestion.value?.type === "text") {
					const textarea = containerRef.value?.querySelector("textarea");
					if (textarea) textarea.focus();
					else requestAnimationFrame(() => {
						containerRef.value?.querySelector("textarea")?.focus();
					});
				} else containerRef.value?.focus();
			});
		}, { immediate: true });
		function onSingleSelect(option) {
			const answer = currentAnswer.value;
			if (!answer) return;
			answer.selectedOptions = [option];
			if (option !== OTHER_SENTINEL) answer.customText = "";
			answer.skipped = false;
		}
		function onSingleSelectAndAdvance(option, _inputMethod = "click") {
			onSingleSelect(option);
			const idx = filteredOptions.value.indexOf(option);
			selectedIndex.value = idx >= 0 ? idx : null;
			setTimeout(() => {
				selectedIndex.value = null;
				goToNextInternal();
			}, 250);
		}
		function onMultiToggle(option, checked) {
			const answer = currentAnswer.value;
			if (!answer) return;
			const opts = answer.selectedOptions;
			if (checked && !opts.includes(option)) opts.push(option);
			else if (!checked) {
				const idx = opts.indexOf(option);
				if (idx > -1) opts.splice(idx, 1);
			}
			answer.skipped = false;
		}
		function onCustomTextChange(text) {
			const answer = currentAnswer.value;
			if (!answer) return;
			answer.customText = text;
			answer.skipped = false;
			if (currentQuestion.value?.type === "multi") if (text.trim()) {
				if (!answer.selectedOptions.includes(OTHER_SENTINEL)) answer.selectedOptions.push(OTHER_SENTINEL);
			} else {
				const idx = answer.selectedOptions.indexOf(OTHER_SENTINEL);
				if (idx > -1) answer.selectedOptions.splice(idx, 1);
			}
			if (currentQuestion.value?.type === "single") if (text.trim()) answer.selectedOptions = [OTHER_SENTINEL];
			else answer.selectedOptions = [];
		}
		function goToPrevious() {
			if (!isFirstQuestion.value) currentIndex.value--;
		}
		function goToNextInternal() {
			if (!hasValidAnswer.value) {
				const answer = currentAnswer.value;
				if (answer) answer.skipped = true;
			}
			if (isLastQuestion.value) submitAnswers();
			else currentIndex.value++;
		}
		function goToNext() {
			goToNextInternal();
		}
		function skipQuestion() {
			const answer = currentAnswer.value;
			if (answer) answer.skipped = true;
			goToNextInternal();
		}
		function goToNextWithoutAnswer() {
			const answer = currentAnswer.value;
			if (answer && !hasValidAnswer.value) answer.skipped = true;
			if (!isLastQuestion.value) currentIndex.value++;
		}
		function submitAnswers() {
			if (isSubmitted.value) return;
			isSubmitted.value = true;
			emit("submit", props.questions.map((q) => {
				const answer = answers.value.get(q.id);
				if (!answer) return {
					questionId: q.id,
					question: q.question,
					selectedOptions: [],
					customText: "",
					skipped: true
				};
				return {
					...answer,
					selectedOptions: answer.selectedOptions.filter((o) => o !== OTHER_SENTINEL)
				};
			}));
		}
		function handleInputEnter(event, _type) {
			if (event.key !== "Enter" || event.shiftKey) return false;
			event.preventDefault();
			if (hasCustomText.value || isNextEnabled.value) goToNextInternal();
			return true;
		}
		function handleInputArrow(event) {
			if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return false;
			event.preventDefault();
			containerRef.value?.focus();
			if (event.key === "ArrowUp") highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
			return true;
		}
		function handleArrowNavigation(event, type, optionCount) {
			if (event.key === "ArrowUp") {
				event.preventDefault();
				highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
				scrollHighlightedIntoView();
				return true;
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				highlightedIndex.value = Math.min(type === "text" ? 0 : optionCount, highlightedIndex.value + 1);
				scrollHighlightedIntoView();
				return true;
			}
			return false;
		}
		function handleEnterKey(event, type, optionCount) {
			if (event.key !== "Enter") return false;
			event.preventDefault();
			if (type === "single") {
				if (highlightedIndex.value >= 0 && highlightedIndex.value < optionCount) onSingleSelectAndAdvance(filteredOptions.value[highlightedIndex.value], "keyboard_enter");
			} else if (type === "multi") {
				if (highlightedIndex.value >= 0 && highlightedIndex.value < optionCount) {
					const option = filteredOptions.value[highlightedIndex.value];
					const answer = currentAnswer.value;
					if (answer) onMultiToggle(option, !answer.selectedOptions.includes(option));
				} else if (isNextEnabled.value) goToNextInternal();
			} else if (type === "text" && isNextEnabled.value) goToNextInternal();
			return true;
		}
		function handleNumberShortcut(event, type, optionCount) {
			if (type !== "single") return false;
			const num = parseInt(event.key, 10);
			if (num >= 1 && num <= optionCount) {
				event.preventDefault();
				onSingleSelectAndAdvance(filteredOptions.value[num - 1], "keyboard_number");
				return true;
			}
			return false;
		}
		function onKeydown(event) {
			const q = currentQuestion.value;
			if (!q || props.disabled) return;
			const target = event.target;
			if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
				handleInputEnter(event, q.type) || handleInputArrow(event);
				return;
			}
			const optionCount = filteredOptions.value.length;
			handleArrowNavigation(event, q.type, optionCount) || handleEnterKey(event, q.type, optionCount) || handleNumberShortcut(event, q.type, optionCount);
		}
		function scrollHighlightedIntoView() {
			nextTick(() => {
				const el = containerRef.value?.querySelector(`[data-option-index="${highlightedIndex.value}"]`);
				el?.scrollIntoView({ block: "nearest" });
				if (highlightedIndex.value === filteredOptions.value.length) (el?.querySelector("input"))?.focus();
			});
		}
		function onOptionMouseEnter(idx) {
			highlightedIndex.value = idx;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "instance-ai-questions"
			}, [currentQuestion.value && currentAnswer.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "containerRef",
				ref: containerRef,
				class: normalizeClass(_ctx.$style.container),
				tabindex: "0",
				onKeydown
			}, [createVNode(Transition, {
				name: _ctx.$style.questionFade,
				mode: "out-in"
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("div", {
					key: currentQuestion.value.id,
					class: normalizeClass(_ctx.$style.question)
				}, [createVNode(unref(N8nText_default), {
					tag: "p",
					bold: true,
					class: normalizeClass(_ctx.$style.questionText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentQuestion.value.question), 1)]),
					_: 1
				}, 8, ["class"]), currentQuestion.value.type === "single" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.options)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option, idx) => {
					return openBlock(), createElementBlock("button", {
						key: option,
						class: normalizeClass([
							_ctx.$style.optionRow,
							{ [_ctx.$style.highlighted]: highlightedIndex.value === idx },
							{ [_ctx.$style.activeSelected]: selectedIndex.value === idx }
						]),
						"data-option-index": idx,
						disabled: __props.disabled,
						type: "button",
						tabindex: "-1",
						onClick: ($event) => onSingleSelectAndAdvance(option),
						onMouseenter: ($event) => onOptionMouseEnter(idx)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.numberBadge) }, toDisplayString(idx + 1), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(option), 3),
						createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.arrowIndicator),
							icon: "arrow-right",
							size: 16
						}, null, 8, ["class"])
					], 42, _hoisted_1$8);
				}), 128)), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.somethingElseRow, { [_ctx.$style.highlighted]: highlightedIndex.value === filteredOptions.value.length }]),
					"data-option-index": filteredOptions.value.length,
					onMouseenter: _cache[0] || (_cache[0] = ($event) => onOptionMouseEnter(filteredOptions.value.length))
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pencilIconContainer) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.pencilIcon),
					icon: "pen",
					size: "medium"
				}, null, 8, ["class"])], 2), createVNode(unref(Input_default), {
					"model-value": currentAnswer.value.customText,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.somethingElse"),
					size: "small",
					class: normalizeClass(_ctx.$style.somethingElseInput),
					"data-test-id": "instance-ai-something-else-input",
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"model-value",
					"disabled",
					"placeholder",
					"class"
				])], 42, _hoisted_2$4)], 2)) : currentQuestion.value.type === "multi" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.options)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option, idx) => {
					return openBlock(), createElementBlock("label", {
						key: option,
						class: normalizeClass([
							_ctx.$style.checkboxRow,
							{ [_ctx.$style.highlighted]: highlightedIndex.value === idx },
							{ [_ctx.$style.selected]: currentAnswer.value.selectedOptions.includes(option) }
						]),
						"data-option-index": idx,
						onMouseenter: ($event) => onOptionMouseEnter(idx)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": currentAnswer.value.selectedOptions.includes(option),
						disabled: __props.disabled,
						"onUpdate:modelValue": (checked) => onMultiToggle(option, checked)
					}, null, 8, [
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(option), 3)], 42, _hoisted_3$2);
				}), 128)), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.somethingElseRowMulti, { [_ctx.$style.highlighted]: highlightedIndex.value === filteredOptions.value.length }]),
					"data-option-index": filteredOptions.value.length,
					onMouseenter: _cache[2] || (_cache[2] = ($event) => onOptionMouseEnter(filteredOptions.value.length))
				}, [createVNode(unref(Checkbox_default), {
					"model-value": !!currentAnswer.value.customText?.trim(),
					disabled: __props.disabled,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = (checked) => {
						if (!checked) onCustomTextChange("");
					})
				}, null, 8, ["model-value", "disabled"]), createVNode(unref(Input_default), {
					"model-value": currentAnswer.value.customText,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.somethingElse"),
					size: "small",
					class: normalizeClass(_ctx.$style.somethingElseInput),
					"data-test-id": "instance-ai-something-else-input",
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"model-value",
					"disabled",
					"placeholder",
					"class"
				])], 42, _hoisted_4)], 2)) : currentQuestion.value.type === "text" ? (openBlock(), createBlock(unref(Input_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.textareaInput),
					"model-value": currentAnswer.value.customText,
					type: "textarea",
					rows: 3,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.clarifyPlaceholder"),
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"class",
					"model-value",
					"disabled",
					"placeholder"
				])) : createCommentVNode("", true)], 2))]),
				_: 1
			}, 8, ["name"]), createVNode(ConfirmationFooter_default, {
				layout: "row-between",
				bordered: ""
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pagination) }, [
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": "",
						disabled: isFirstQuestion.value,
						"data-test-id": "instance-ai-questions-back",
						"aria-label": "Previous question",
						onClick: goToPrevious
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-left",
							size: "xsmall"
						})]),
						_: 1
					}, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.paginationText),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentIndex.value + 1) + " " + toDisplayString(unref(i18n).baseText("aiAssistant.builder.planMode.questions.paginationOf")) + " " + toDisplayString(__props.questions.length), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": "",
						disabled: isLastQuestion.value,
						"data-test-id": "instance-ai-questions-forward",
						"aria-label": "Next question",
						onClick: goToNextWithoutAnswer
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "xsmall"
						})]),
						_: 1
					}, 8, ["disabled"])
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.navigation) }, [showSkipButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "medium",
					disabled: __props.disabled,
					"data-test-id": "instance-ai-questions-skip",
					onClick: skipQuestion
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.planMode.questions.skip")), 1)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true), showNextButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: isNextEnabled.value ? "solid" : "outline",
					size: "medium",
					disabled: __props.disabled || isSubmitted.value || !isNextEnabled.value,
					"data-test-id": "instance-ai-questions-next",
					onClick: goToNext
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(nextButtonLabel.value), 1)]),
					_: 1
				}, 8, ["variant", "disabled"])) : createCommentVNode("", true)], 2)]),
				_: 1
			})], 34)) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_18vdl_125",
	intro: "_intro_18vdl_131",
	container: "_container_18vdl_139",
	question: "_question_18vdl_146",
	questionText: "_questionText_18vdl_150",
	options: "_options_18vdl_154",
	optionRow: "_optionRow_18vdl_160",
	highlighted: "_highlighted_18vdl_173",
	activeSelected: "_activeSelected_18vdl_180",
	numberBadge: "_numberBadge_18vdl_183",
	optionLabel: "_optionLabel_18vdl_187",
	arrowIndicator: "_arrowIndicator_18vdl_190",
	checkboxRow: "_checkboxRow_18vdl_227",
	somethingElseRow: "_somethingElseRow_18vdl_240",
	somethingElseInput: "_somethingElseInput_18vdl_253",
	somethingElseRowMulti: "_somethingElseRowMulti_18vdl_265",
	pencilIconContainer: "_pencilIconContainer_18vdl_279",
	pencilIcon: "_pencilIcon_18vdl_279",
	pagination: "_pagination_18vdl_295",
	paginationText: "_paginationText_18vdl_301",
	navigation: "_navigation_18vdl_306",
	textareaInput: "_textareaInput_18vdl_312",
	"questionFade-enter-active": "_questionFade-enter-active_18vdl_319",
	"questionFade-leave-active": "_questionFade-leave-active_18vdl_320",
	"questionFade-enter-from": "_questionFade-enter-from_18vdl_324",
	"questionFade-leave-to": "_questionFade-leave-to_18vdl_325"
};
var InstanceAiQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/AskQuestionsCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { "data-testid": "ask-questions-card" };
var AskQuestionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskQuestionsCard",
	props: {
		questions: {},
		introMessage: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* Card for the `ask_questions` builder tool. Reuses `InstanceAiQuestions.vue`
		* (the AI assistant's own Q&A wizard) verbatim for the interactive part — the
		* two surfaces share the exact same suspend payload shape
		* (`questionsSuspendPayloadSchema`), so there is no reason to re-implement
		* the wizard here. Only the submit transport differs: this card posts to
		* `POST /build/resume` (via the `submit` emit) instead of instance AI's own
		* confirm endpoint.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		function onSubmit(answers) {
			emit("submit", {
				approved: true,
				answers: answers.map(({ questionId, selectedOptions, customText, skipped }) => ({
					questionId,
					selectedOptions,
					...customText ? { customText } : {},
					...skipped ? { skipped } : {}
				}))
			});
		}
		const resolvedAnswers = computed(() => {
			const value = props.resolvedValue;
			if (!value || !("answers" in value)) return void 0;
			return value.answers;
		});
		const isAnswered = computed(() => {
			const value = props.resolvedValue;
			if (!value) return false;
			if ("answered" in value) return value.answered;
			if ("approved" in value && value.approved === false) return false;
			return resolvedAnswers.value !== void 0;
		});
		const resolvedRows = computed(() => {
			const answers = resolvedAnswers.value;
			if (!answers) return [];
			return props.questions.map((question) => {
				const answer = answers.find((a) => a.questionId === question.id);
				if (!answer || answer.skipped) return {
					question: question.question,
					label: "",
					skipped: true
				};
				const parts = [...answer.selectedOptions, ...answer.customText ? [answer.customText] : []];
				return {
					question: question.question,
					label: parts.join(", "),
					skipped: parts.length === 0
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$7, [!__props.disabled ? (openBlock(), createBlock(InstanceAiQuestions_default, {
				key: 0,
				questions: __props.questions,
				"intro-message": __props.introMessage,
				onSubmit
			}, null, 8, ["questions", "intro-message"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.resolved)
			}, [isAnswered.value && resolvedRows.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(resolvedRows.value, (row) => {
				return openBlock(), createElementBlock("div", {
					key: row.question,
					class: normalizeClass(_ctx.$style.row)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "circle-check",
					size: "small",
					color: "success"
				}), createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createBaseVNode("strong", null, toDisplayString(row.question) + ":", 1), createTextVNode(" " + toDisplayString(row.skipped ? unref(i18n).baseText("agents.chat.askQuestions.skipped") : row.label), 1)]),
					_: 2
				}, 1024)], 2);
			}), 128)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askQuestions.skipped")), 1)]),
				_: 1
			}))], 2))]);
		};
	}
});
var AskQuestionsCard_vue_vue_type_style_index_0_lang_module_default = {
	resolved: "_resolved_1g9sv_125",
	row: "_row_1g9sv_133"
};
var AskQuestionsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskQuestionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskQuestionsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=script&setup=true&lang.ts
var ApprovalCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalCard",
	props: {
		input: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toolLabel = computed(() => props.input.displayName ?? props.input.toolName);
		const argsText = computed(() => {
			if (props.input.args === void 0) return "";
			try {
				return JSON.stringify(props.input.args, null, 2) ?? "";
			} catch {
				return String(props.input.args);
			}
		});
		function submit(approved) {
			if (props.disabled) return;
			emit("submit", { approved });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "agent-approval-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.description", { interpolate: { toolName: toolLabel.value } })), 1)]),
						_: 1
					}, 8, ["class"]),
					argsText.value ? (openBlock(), createElementBlock("pre", {
						key: 0,
						class: normalizeClass(_ctx.$style.args)
					}, toDisplayString(argsText.value), 3)) : createCommentVNode("", true),
					__props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.resolved)
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.resolvedValue.approved ? "circle-check" : "circle-x",
						size: "small",
						color: __props.resolvedValue.approved ? "success" : "danger"
					}, null, 8, ["icon", "color"]), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.resolvedValue.approved ? "agents.chat.approval.approved" : "agents.chat.approval.rejected")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						size: "medium",
						type: "primary",
						disabled: __props.disabled,
						"data-testid": "agent-approval-approve",
						onClick: _cache[0] || (_cache[0] = ($event) => submit(true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.approve")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						disabled: __props.disabled,
						"data-testid": "agent-approval-reject",
						onClick: _cache[1] || (_cache[1] = ($event) => submit(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.reject")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ApprovalCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1sc6j_125",
	disabled: "_disabled_1sc6j_131",
	cardBody: "_cardBody_1sc6j_135",
	resolved: "_resolved_1sc6j_141",
	actions: "_actions_1sc6j_142",
	title: "_title_1sc6j_148",
	description: "_description_1sc6j_149",
	args: "_args_1sc6j_157"
};
var ApprovalCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApprovalCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApprovalCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/components/ChannelSetupCard.vue?vue&type=script&setup=true&lang.ts
var ChannelSetupCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChannelSetupCard",
	props: {
		integrationType: {},
		agentId: {},
		projectId: {},
		disabled: { type: Boolean }
	},
	emits: ["resolve"],
	setup(__props, { emit: __emit }) {
		/**
		* Shared channel-setup body + orchestration for the `configure_channel`
		* builder tool. Single-sourced because the agents-chat builder
		* (`ConfigureChannelCard.vue`) and the AI assistant
		* (`InstanceAiChannelSetup.vue`) render the identical `AgentChannel*Setup`
		* flow for the identical suspend payload — only how each surface reports the
		* outcome differs (agents-chat resumes the tool call directly, instance AI
		* goes through its own confirm/resolve transport). This component owns the
		* body + composable wiring and emits a single `resolve` event; the two
		* surfaces are thin adapters around it that translate `resolve` into their
		* own transport call.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const { catalog, ensureLoaded } = useAgentIntegrationsCatalog();
		const { fetchStatus, connectedCredentials, integrationSettings, loadingMap, errorMessages, errorIsConflict, isConnected: isIntegrationConnected, connect } = useAgentIntegrationStatus(props.projectId, props.agentId);
		const submitted = ref(false);
		const connectionInFlight = ref(false);
		const agent = ref(null);
		const currentIntegration = computed(() => {
			return catalog.value?.find((integration) => integration.type === props.integrationType) ?? null;
		});
		const { channelSetupRef, selectedCredentials, credentialsLoading, credentialPermissions, getChannelCredentialId, getCredentials, loadChannelState: loadSharedChannelState, createCredential, editCredential, setupSlackApp: runSlackAppSetup } = useAgentChannelSetup({
			projectId: () => props.projectId,
			agentId: () => props.agentId,
			currentIntegration,
			connectedCredentials,
			fetchStatus,
			isIntegrationConnected
		});
		const integrationLabel = computed(() => currentIntegration.value?.label ?? props.integrationType);
		const connectedDescriptionKeys = {
			telegram: "agents.builder.addTrigger.connectedText.telegram",
			linear: "agents.builder.addTrigger.connectedText.linear"
		};
		const connectedDescription = computed(() => {
			const key = connectedDescriptionKeys[props.integrationType];
			return key ? i18n.baseText(key) : "";
		});
		const currentChannelCredentialId = computed(() => getChannelCredentialId(props.integrationType));
		const currentCredentials = computed(() => getCredentials(props.integrationType));
		const isConnected = computed(() => isIntegrationConnected(props.integrationType));
		const isLoading = computed(() => loadingMap.value[props.integrationType] ?? false);
		const errorMessage = computed(() => errorMessages.value[props.integrationType] ?? "");
		const hasUnsupportedIntegration = computed(() => {
			if (props.integrationType === "slack") return false;
			if (!["telegram", "linear"].includes(props.integrationType)) return true;
			return !currentIntegration.value;
		});
		const cardTitle = computed(() => i18n.baseText("agents.channels.modal.connectTitle", { interpolate: { channel: integrationLabel.value } }));
		function toIconName(icon) {
			return icon;
		}
		function isBlocked() {
			return submitted.value || !!props.disabled;
		}
		function finish(approved) {
			if (isBlocked()) return;
			submitted.value = true;
			emit("resolve", { approved });
		}
		function skipSetup() {
			if (connectionInFlight.value) return;
			finish(false);
		}
		async function saveChannelConfig() {
			if (isBlocked() || connectionInFlight.value) return;
			const credentialId = currentChannelCredentialId.value;
			if (!credentialId || channelSetupRef.value?.validationError) return;
			connectionInFlight.value = true;
			try {
				await connect(props.integrationType, credentialId, channelSetupRef.value?.currentSettings);
				finish(true);
			} catch {} finally {
				connectionInFlight.value = false;
			}
		}
		async function setupSlackApp(appConfigurationToken) {
			if (isBlocked() || connectionInFlight.value) return false;
			connectionInFlight.value = true;
			try {
				return await runSlackAppSetup(appConfigurationToken, () => finish(true));
			} finally {
				connectionInFlight.value = false;
			}
		}
		async function loadChannelState() {
			await loadSharedChannelState(await ensureLoaded(props.projectId).catch(() => catalog.value ?? []));
			if (props.integrationType !== "slack") try {
				agent.value = await getAgent(rootStore.restApiContext, props.projectId, props.agentId);
			} catch {
				agent.value = null;
			}
		}
		watch(() => [
			props.projectId,
			props.agentId,
			props.integrationType
		], () => void loadChannelState(), { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [currentIntegration.value?.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: toIconName(currentIntegration.value.icon),
					size: "medium"
				}, null, 8, ["icon"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					size: "medium",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(cardTitle.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.bodyWrapper) }, [__props.integrationType === "slack" ? (openBlock(), createBlock(AgentChannelSlackSetup_default, {
					key: 0,
					ref_key: "channelSetupRef",
					ref: channelSetupRef,
					modelValue: unref(selectedCredentials).slack,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(selectedCredentials).slack = $event),
					mode: "setup",
					connected: isConnected.value,
					"is-published": false,
					"setup-slack-app": setupSlackApp,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					integration: currentIntegration.value ?? void 0,
					credentials: currentCredentials.value,
					"credential-permissions": unref(credentialPermissions),
					"credentials-loading": unref(credentialsLoading),
					loading: isLoading.value,
					"error-message": errorMessage.value,
					"error-is-conflict": unref(errorIsConflict).slack,
					"force-new-credential": true,
					"setup-mode": "simple",
					onCreate: unref(createCredential),
					onEdit: unref(editCredential),
					onConnect: saveChannelConfig
				}, null, 8, [
					"modelValue",
					"connected",
					"project-id",
					"agent-id",
					"integration",
					"credentials",
					"credential-permissions",
					"credentials-loading",
					"loading",
					"error-message",
					"error-is-conflict",
					"onCreate",
					"onEdit"
				])) : currentIntegration.value?.type === "linear" ? (openBlock(), createBlock(AgentChannelLinearSetup_default, {
					key: 1,
					ref_key: "channelSetupRef",
					ref: channelSetupRef,
					modelValue: unref(selectedCredentials)[currentIntegration.value.type],
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(selectedCredentials)[currentIntegration.value.type] = $event),
					mode: "setup",
					integration: currentIntegration.value,
					credentials: currentCredentials.value,
					"credential-permissions": unref(credentialPermissions),
					"credentials-loading": unref(credentialsLoading),
					loading: isLoading.value,
					connected: isConnected.value,
					"connected-description": connectedDescription.value,
					"error-message": errorMessage.value,
					"error-is-conflict": unref(errorIsConflict)[currentIntegration.value.type],
					"saved-settings": unref(integrationSettings)[currentIntegration.value.type],
					"is-published": false,
					"agent-name": agent.value?.name ?? __props.agentId,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"force-new-credential": true,
					onCreate: unref(createCredential),
					onEdit: unref(editCredential),
					onConnect: saveChannelConfig
				}, null, 8, [
					"modelValue",
					"integration",
					"credentials",
					"credential-permissions",
					"credentials-loading",
					"loading",
					"connected",
					"connected-description",
					"error-message",
					"error-is-conflict",
					"saved-settings",
					"agent-name",
					"project-id",
					"agent-id",
					"onCreate",
					"onEdit"
				])) : currentIntegration.value?.type === "telegram" ? (openBlock(), createBlock(AgentChannelTelegramSetup_default, {
					key: 2,
					ref_key: "channelSetupRef",
					ref: channelSetupRef,
					modelValue: unref(selectedCredentials)[currentIntegration.value.type],
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(selectedCredentials)[currentIntegration.value.type] = $event),
					mode: "setup",
					integration: currentIntegration.value,
					credentials: currentCredentials.value,
					"credential-permissions": unref(credentialPermissions),
					"credentials-loading": unref(credentialsLoading),
					loading: isLoading.value,
					connected: isConnected.value,
					"connected-description": connectedDescription.value,
					"error-message": errorMessage.value,
					"error-is-conflict": unref(errorIsConflict)[currentIntegration.value.type],
					"saved-settings": unref(integrationSettings)[currentIntegration.value.type],
					"is-published": false,
					"agent-name": agent.value?.name ?? __props.agentId,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"force-new-credential": true,
					onCreate: unref(createCredential),
					onEdit: unref(editCredential),
					onConnect: saveChannelConfig
				}, null, 8, [
					"modelValue",
					"integration",
					"credentials",
					"credential-permissions",
					"credentials-loading",
					"loading",
					"connected",
					"connected-description",
					"error-message",
					"error-is-conflict",
					"saved-settings",
					"agent-name",
					"project-id",
					"agent-id",
					"onCreate",
					"onEdit"
				])) : hasUnsupportedIntegration.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 3,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.channels.modal.setupPlaceholder", { interpolate: { channel: integrationLabel.value } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "medium",
					disabled: connectionInFlight.value,
					"data-testid": "channel-setup-card-skip",
					onClick: skipSetup
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.later")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			], 2);
		};
	}
});
var ChannelSetupCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1y26d_126",
	header: "_header_1y26d_138",
	title: "_title_1y26d_146",
	bodyWrapper: "_bodyWrapper_1y26d_150",
	footer: "_footer_1y26d_154"
};
var ChannelSetupCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChannelSetupCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChannelSetupCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/ConfigureChannelCard.vue?vue&type=script&setup=true&lang.ts
var ConfigureChannelCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfigureChannelCard",
	props: {
		integrationType: {},
		agentId: {},
		projectId: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* Card for the `configure_channel` builder tool. Thin transport adapter
		* around the shared `ChannelSetupCard` (body + composable wiring lives
		* there, identical to `InstanceAiChannelSetup.vue`'s) — this surface only
		* translates the shared `resolve` event into the agents-chat resume
		* transport (`submit` emit → `POST /build/resume` with `{ approved }`) and
		* renders the collapsed resolved-state summary once disabled.
		*/
		const props = __props;
		const emit = __emit;
		const submitted = ref(false);
		function onResolve({ approved }) {
			if (submitted.value || props.disabled) return;
			submitted.value = true;
			emit("submit", { approved });
		}
		const i18n = useI18n();
		const isChannelConnected = computed(() => {
			const value = props.resolvedValue;
			if (!value) return false;
			return "connected" in value ? value.connected : value.approved;
		});
		return (_ctx, _cache) => {
			return !__props.disabled ? (openBlock(), createBlock(ChannelSetupCard_default, {
				key: 0,
				"data-testid": "configure-channel-card",
				"integration-type": __props.integrationType,
				"agent-id": __props.agentId,
				"project-id": __props.projectId,
				disabled: submitted.value,
				onResolve
			}, null, 8, [
				"integration-type",
				"agent-id",
				"project-id",
				"disabled"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.resolvedRow),
				"data-testid": "configure-channel-card"
			}, [isChannelConnected.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "circle-check",
				size: "small",
				color: "success"
			}), createVNode(unref(N8nText_default), { size: "small" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.channels.modal.connected")), 1)]),
				_: 1
			})], 64)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.configureChannel.skipped")), 1)]),
				_: 1
			}))], 2));
		};
	}
});
var ConfigureChannelCard_vue_vue_type_style_index_0_lang_module_default = { resolvedRow: "_resolvedRow_pbljz_125" };
var ConfigureChannelCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfigureChannelCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfigureChannelCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["src", "alt"];
var N8nChatActionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatActionCard",
	props: {
		input: {},
		resolvedValue: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const blocks = computed(() => {
			const result = [];
			for (const component of props.input.card.components) if (component.type === "button") {
				const last = result[result.length - 1];
				if (last?.kind === "buttons") last.buttons.push(component);
				else result.push({
					kind: "buttons",
					buttons: [component]
				});
			} else result.push({
				kind: "component",
				component
			});
			return result;
		});
		const fallbackSummary = computed(() => {
			if (props.input.card.title || props.input.card.message) return void 0;
			const text = props.input.text?.trim();
			return text ? text : void 0;
		});
		/**
		* Map the card's button style to a design-system button variant, mirroring
		* how the platform mappers treat them: `primary` = emphasized, `danger` =
		* destructive, `default`/unset = neutral.
		*/
		function buttonVariant(btn) {
			if (btn.style === "primary") return "solid";
			if (btn.style === "danger") return "destructive";
			return "outline";
		}
		function submitButton(btn) {
			if (props.disabled) return;
			emit("submit", {
				type: "button",
				value: btn.value
			});
		}
		function submitOption(component, value) {
			if (props.disabled) return;
			emit("submit", {
				type: "select",
				...component.id && { id: component.id },
				value
			});
		}
		function isButtonSelected(btn) {
			return props.resolvedValue?.type === "button" && props.resolvedValue.value === btn.value;
		}
		function isOptionSelected(component, value) {
			return props.resolvedValue?.type === "select" && props.resolvedValue.value === value && (props.resolvedValue.id === void 0 || props.resolvedValue.id === component.id);
		}
		/** Chosen value for a select/radio_select group: the resolved answer, if any. */
		function selectedOptionValue(component) {
			return component.options.find((option) => isOptionSelected(component, option.value))?.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-testid": "n8n-chat-action-card"
			}, [
				__props.input.card.title ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.title), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				__props.input.card.message ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.message),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.message), 1)]),
					_: 1
				}, 8, ["class"])) : fallbackSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(fallbackSummary.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(blocks.value, (block, blockIdx) => {
					return openBlock(), createElementBlock(Fragment, { key: blockIdx }, [block.kind === "buttons" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.buttonRow),
						"data-testid": "n8n-chat-card-button-row"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.buttons, (button, buttonIdx) => {
						return openBlock(), createBlock(unref(N8nButton_default), {
							key: buttonIdx,
							size: "small",
							variant: buttonVariant(button),
							disabled: __props.disabled && !isButtonSelected(button),
							"data-testid": "n8n-chat-card-button",
							onClick: ($event) => submitButton(button)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(button.label ?? button.text ?? button.value), 1)]),
							_: 2
						}, 1032, [
							"variant",
							"disabled",
							"onClick"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [block.component.type === "section" && (block.component.text || block.component.button) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, [block.component.text ? (openBlock(), createBlock(unref(N8nText_default), { key: 0 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.text), 1)]),
						_: 2
					}, 1024)) : createCommentVNode("", true), block.component.button ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionButton),
						size: "small",
						variant: buttonVariant(block.component.button),
						disabled: __props.disabled && !isButtonSelected(block.component.button),
						"data-testid": "n8n-chat-card-section-button",
						onClick: ($event) => submitButton(block.component.button)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.button.label ?? block.component.button.text ?? block.component.button.value), 1)]),
						_: 2
					}, 1032, [
						"class",
						"variant",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)], 2)) : block.component.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : block.component.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
						return openBlock(), createBlock(unref(ElRadio), {
							key: option.value,
							class: normalizeClass(_ctx.$style.radio),
							"model-value": selectedOptionValue(block.component) ?? "",
							label: option.value,
							disabled: __props.disabled,
							"data-testid": "n8n-chat-card-radio",
							"onUpdate:modelValue": ($event) => submitOption(block.component, option.value)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(option.label), 1), option.description ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(option.description), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, [
							"class",
							"model-value",
							"label",
							"disabled",
							"onUpdate:modelValue"
						]);
					}), 128))], 2)) : block.component.type === "select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nSelect_default), {
						"model-value": selectedOptionValue(block.component),
						size: "small",
						disabled: __props.disabled,
						placeholder: block.component.placeholder,
						"data-testid": "n8n-chat-card-select",
						"onUpdate:modelValue": ($event) => submitOption(block.component, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								value: option.value,
								label: option.label
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"placeholder",
						"onUpdate:modelValue"
					])], 2)) : block.component.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.fields ?? block.component.items ?? [], (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : block.component.type === "image" && block.component.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: block.component.url,
						alt: block.component.alt ?? block.component.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$6)) : createCommentVNode("", true)], 64))], 64);
				}), 128))
			], 2);
		};
	}
});
var N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_p2s4l_126",
	title: "_title_p2s4l_135",
	message: "_message_p2s4l_139",
	section: "_section_p2s4l_143",
	sectionButton: "_sectionButton_p2s4l_150",
	divider: "_divider_p2s4l_154",
	buttonRow: "_buttonRow_p2s4l_160",
	selectGroup: "_selectGroup_p2s4l_166",
	selectLabel: "_selectLabel_p2s4l_172",
	radio: "_radio_p2s4l_176",
	fieldsGroup: "_fieldsGroup_p2s4l_180",
	fieldRow: "_fieldRow_p2s4l_186",
	image: "_image_p2s4l_191"
};
var N8nChatActionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatActionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/InteractiveCard.vue
var InteractiveCard_default = /* @__PURE__ */ defineComponent({
	__name: "InteractiveCard",
	props: {
		payload: {},
		projectId: {},
		agentId: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/**
		* Disabled when the card is already resolved OR when it's still open but has
		* no `runId` to resume against. The latter happens when a stale interactive
		* card from the open checkpoint can't be matched to a backend suspension —
		* normally an after-effect of expired or pruned checkpoint state.
		*/
		const disabled = computed(() => !!props.payload.resolvedAt || !props.payload.runId);
		/**
		* Presence checks also confirm `toolName`, not just the input shape. Without
		* it, a malformed/corrupted payload whose `toolName` doesn't correspond to
		* the field it happens to carry would still `match()` here, then fail to
		* narrow in `getProps` (which discriminates strictly on `toolName`) and hand
		* the card `{}` — missing required props it doesn't guard against. Tying the
		* two together means a mismatch fails `matches()` and falls through to "no
		* renderer" (nothing rendered) instead of a props-shape crash.
		*/
		function hasQuestionsInput(payload) {
			return payload.toolName === "ask_questions" && "inputType" in payload.input && payload.input.inputType === "questions";
		}
		function hasCredentialRequestsInput(payload) {
			return (payload.toolName === "ask_credential" || payload.toolName === "ask_embedding_credential") && "credentialRequests" in payload.input;
		}
		function hasChannelConfigInput(payload) {
			return payload.toolName === "configure_channel" && "channelConfig" in payload.input;
		}
		const interactiveRenderers = [
			{
				key: "approval",
				component: ApprovalCard_default,
				matches: (payload) => payload.toolName === APPROVAL_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "approval") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "ask_questions",
				component: AskQuestionsCard_default,
				matches: (payload) => hasQuestionsInput(payload),
				getProps: (payload) => {
					if (payload.toolName !== "ask_questions") return {};
					return {
						questions: payload.input.questions,
						introMessage: payload.input.introMessage,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "ask_credential",
				component: AskCredentialCard_default,
				matches: (payload) => hasCredentialRequestsInput(payload),
				getProps: (payload, context) => {
					if (payload.toolName !== "ask_credential" && payload.toolName !== "ask_embedding_credential") return {};
					return {
						credentialRequests: payload.input.credentialRequests,
						message: payload.input.message,
						projectId: context?.projectId,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "configure_channel",
				component: ConfigureChannelCard_default,
				matches: (payload) => hasChannelConfigInput(payload),
				getProps: (payload) => {
					if (payload.toolName !== "configure_channel") return {};
					return {
						integrationType: payload.input.channelConfig.integrationType,
						agentId: payload.input.channelConfig.agentId,
						projectId: payload.input.projectId,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "chat_action",
				component: N8nChatActionCard_default,
				matches: (payload) => payload.toolName === N8N_CHAT_ACTION_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "chat_action") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			}
		];
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InteractionRenderer_default, {
				payload: __props.payload,
				renderers: interactiveRenderers,
				disabled: disabled.value,
				context: {
					projectId: __props.projectId,
					agentId: __props.agentId
				},
				onSubmit
			}, null, 8, [
				"payload",
				"disabled",
				"context"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=script&setup=true&lang.ts
var SCROLL_STICK_THRESHOLD_PX = 80;
/**
* True when the user is (or was last) near the bottom of the chat and wants
* incoming stream chunks to keep scrolling into view. Flipped to false when
* the user scrolls up away from the bottom, and back to true when they
* scroll back down or send a new message.
*/
var AgentChatMessageList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageList",
	props: {
		messages: {},
		messagingState: {},
		projectId: {},
		agentId: {}
	},
	emits: ["resume"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		function onInteractiveSubmit(payload, resumeData) {
			if (!payload.runId) return;
			emit("resume", {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			});
		}
		function isIntegrationActionSuspend(value) {
			return isRecord(value) && value.type === "integration_action";
		}
		/**
		* Returns a display name for the external platform a tool call is waiting on,
		* or `undefined` when the tool call either isn't suspended or renders its own
		* interactive card. Builder tools never match (their suspend payload is their
		* renderable input, not an integration_action sidecar); n8n_chat_action DOES
		* carry the sidecar but is excluded explicitly because it renders its own
		* interactive card in the chat.
		*/
		function externalWaitPlatform(tc) {
			if (tc.state !== TOOL_CALL_STATE.SUSPENDED) return void 0;
			if (tc.tool === "chat_action") return void 0;
			if (!isIntegrationActionSuspend(tc.suspendPayload)) return void 0;
			const base = tc.tool.replace(/_action$/, "").replace(/_\d+$/, "");
			return base.charAt(0).toUpperCase() + base.slice(1);
		}
		/**
		* Open cards always render. Once resolved, answered interactive cards clear
		* from the chat (builder cards collapse into their tool-step summary; n8n
		* chat cards leave the picked answer there too) — but display-only n8n chat
		* cards persist: they are content, and being born resolved they would
		* otherwise never render at all.
		*/
		function shouldRenderInteractive(payload) {
			if (!payload.resolvedAt) return !!payload.runId;
			return payload.toolName === "chat_action" && !isAwaitingCard(payload.input.card);
		}
		function getRenderableInteractives(message) {
			return getMessageInteractives(message).filter(shouldRenderInteractive);
		}
		function getMessageRenderItems(message) {
			const renderableInteractives = getRenderableInteractives(message);
			const renderableByToolCallId = new Map(renderableInteractives.map((payload) => [payload.toolCallId, payload]));
			if (!message.renderParts?.length) return [...message.content ? [{
				type: "text",
				key: "text",
				text: message.content
			}] : [], ...renderableInteractives.map((payload) => ({
				type: "interactive",
				key: `interactive-${payload.toolCallId}`,
				payload
			}))];
			const items = [];
			const renderedInteractiveIds = /* @__PURE__ */ new Set();
			for (const [index, part] of message.renderParts.entries()) {
				if (part.type === "text") {
					if (part.text) items.push({
						type: "text",
						key: `text-${index}`,
						text: part.text
					});
					continue;
				}
				const payload = renderableByToolCallId.get(part.toolCallId);
				if (!payload) continue;
				renderedInteractiveIds.add(payload.toolCallId);
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			for (const payload of renderableInteractives) {
				if (renderedInteractiveIds.has(payload.toolCallId)) continue;
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			return items;
		}
		const scrollRef = useTemplateRef("scrollRef");
		const displayGroups = computed(() => buildDisplayGroups(props.messages));
		function getAssistantGroupContent(group) {
			if (group.kind === "toolRun") return group.finalMessage?.content ?? "";
			return group.message.role === "assistant" ? group.message.content : "";
		}
		function isAssistantGroup(group) {
			return group.kind === "toolRun" || group.message.role === "assistant";
		}
		function getAssistantRunContent(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return "";
			const lines = [];
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const content = getAssistantGroupContent(group).trim();
				if (content) lines.unshift(content);
			}
			return lines.join("\n\n");
		}
		function getRecallMemoryEntries(output) {
			if (!output || typeof output !== "object") return [];
			if (!("entries" in output) || !Array.isArray(output.entries)) return [];
			const entries = [];
			for (const [index, entry] of output.entries.entries()) {
				if (!entry || typeof entry !== "object") continue;
				if (!("content" in entry) || typeof entry.content !== "string") continue;
				const id = "id" in entry && typeof entry.id === "string" ? entry.id : "createdAt" in entry && typeof entry.createdAt === "string" ? entry.createdAt : `${entry.content}:${index}`;
				entries.push({
					id,
					content: entry.content
				});
			}
			return entries;
		}
		function parseMemoryOutput(output) {
			return getRecallMemoryEntries(output).map((entry) => ({
				id: entry.id,
				keyMemory: entry.content.trim(),
				evidence: []
			})).filter((memory) => memory.keyMemory.length > 0);
		}
		function isCompletedAssistantGroup(group) {
			if (group.kind === "toolRun") return group.finalMessage !== void 0 && group.finalMessage.status !== CHAT_MESSAGE_STATUS.STREAMING && group.finalMessage.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
			return group.message.role === "assistant" && group.message.status !== CHAT_MESSAGE_STATUS.STREAMING && group.message.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function shouldShowAssistantFooter(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return false;
			const group = displayGroups.value[index];
			if (!isAssistantGroup(group) || !isCompletedAssistantGroup(group)) return false;
			const nextGroup = displayGroups.value[index + 1];
			return !nextGroup || !isAssistantGroup(nextGroup);
		}
		function getMemoriesUsedInAssistantRun(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return [];
			const memories = [];
			const memoryIds = /* @__PURE__ */ new Set();
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const toolCalls = group.kind === "toolRun" ? group.toolCalls : group.message.toolCalls ?? [];
				for (let j = toolCalls.length - 1; j >= 0; j--) {
					const toolCall = toolCalls[j];
					if (toolCall.tool !== "recall_memory") continue;
					const uniqueMemories = parseMemoryOutput(toolCall.output).filter((memory) => {
						if (memoryIds.has(memory.id)) return false;
						memoryIds.add(memory.id);
						return true;
					});
					memories.unshift(...uniqueMemories);
				}
			}
			return memories;
		}
		const openMemoryFooterGroupId = ref(null);
		function setMemoryFooterOpen(groupId, open) {
			openMemoryFooterGroupId.value = open ? groupId : openMemoryFooterGroupId.value === groupId ? null : openMemoryFooterGroupId.value;
		}
		const spokenMessageId = ref(null);
		const spokenText = computed(() => {
			if (!spokenMessageId.value) return "";
			return getAssistantRunContent(spokenMessageId.value);
		});
		const speech = useSpeechSynthesis(spokenText, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const isSpeechSynthesisAvailable = computed(() => speech.isSupported.value);
		const isStickToBottom = ref(true);
		function isNearBottom() {
			const el = scrollRef.value;
			if (!el) return true;
			return el.scrollHeight - el.scrollTop - el.clientHeight <= SCROLL_STICK_THRESHOLD_PX;
		}
		function onScroll() {
			isStickToBottom.value = isNearBottom();
		}
		function scrollToBottom() {
			nextTick(() => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (scrollRef.value) {
							scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
							isStickToBottom.value = true;
						}
					});
				});
			});
		}
		function autoScrollIfSticky() {
			if (isStickToBottom.value) scrollToBottom();
		}
		function isSpeakingMessage(messageId) {
			return spokenMessageId.value === messageId && speech.status.value === "play";
		}
		function toggleReadAloud(messageId) {
			if (!isSpeechSynthesisAvailable.value) return;
			if (spokenMessageId.value === messageId && speech.status.value === "play") {
				speech.stop();
				spokenMessageId.value = null;
				return;
			}
			speech.stop();
			spokenMessageId.value = messageId;
			speech.speak();
		}
		onMounted(() => {
			if (props.messages.length > 0) scrollToBottom();
		});
		watch(() => props.messages.length, (newLen, oldLen) => {
			if ((oldLen ?? 0) < newLen) {
				if (props.messages[newLen - 1]?.role === "user") {
					scrollToBottom();
					return;
				}
			}
			autoScrollIfSticky();
		}, { flush: "post" });
		watch(() => props.messagingState, autoScrollIfSticky, { flush: "post" });
		watch(() => {
			const last = props.messages[props.messages.length - 1];
			if (!last) return "";
			return `${last.content}|${last.toolCalls?.length ?? 0}|${getMessageInteractives(last).length}|${last.thinking ?? ""}`;
		}, autoScrollIfSticky, { flush: "post" });
		watch(() => speech.status.value, (status) => {
			if (status === "end") spokenMessageId.value = null;
		});
		watch(spokenText, (value) => {
			if (!value && spokenMessageId.value) {
				speech.stop();
				spokenMessageId.value = null;
			}
		});
		onBeforeUnmount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollRef",
				ref: scrollRef,
				class: normalizeClass(_ctx.$style.messages),
				onScrollPassive: onScroll
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayGroups.value, (group) => {
				return openBlock(), createElementBlock(Fragment, { key: group.id }, [group.kind === "toolRun" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.thinking ? (openBlock(), createElementBlock("details", {
						key: 0,
						class: normalizeClass(_ctx.$style.thinkingBlock)
					}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.thinkingSummary) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: 12
					}), _cache[0] || (_cache[0] = createTextVNode(" Thinking... ", -1))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.thinkingContent) }, toDisplayString(group.thinking), 3)], 2)) : createCommentVNode("", true),
					group.toolCalls.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 1,
						"tool-calls": group.toolCalls,
						"project-id": __props.projectId
					}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.toolCalls, (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.interactives.some(shouldRenderInteractive) ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.interactives)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.interactives.filter(shouldRenderInteractive), (payload) => {
						return openBlock(), createBlock(InteractiveCard_default, {
							key: payload.toolCallId,
							payload,
							"project-id": __props.projectId,
							"agent-id": __props.agentId,
							onSubmit: ($event) => onInteractiveSubmit(payload, $event)
						}, null, 8, [
							"payload",
							"project-id",
							"agent-id",
							"onSubmit"
						]);
					}), 128))], 2)) : createCommentVNode("", true),
					group.finalMessage?.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.finalMessage.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: group.finalMessage.content }, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"]), getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						onReadAloud: ($event) => toggleReadAloud(group.id)
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"onReadAloud"
					])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					group.finalMessage?.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.finalMessage.content && !group.toolCalls.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 5,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.message, group.message.role === "user" ? _ctx.$style.user : _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.message.thinking ? (openBlock(), createElementBlock("details", {
						key: 0,
						class: normalizeClass(_ctx.$style.thinkingBlock)
					}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.thinkingSummary) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: 12
					}), _cache[1] || (_cache[1] = createTextVNode(" Thinking... ", -1))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.thinkingContent) }, toDisplayString(group.message.thinking), 3)], 2)) : createCommentVNode("", true),
					group.message.toolCalls?.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 1,
						"tool-calls": group.message.toolCalls,
						"project-id": __props.projectId
					}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.message.toolCalls ?? [], (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.message.role === "user" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(getMessageRenderItems(group.message), (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.key }, [item.type === "text" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.message.status === "error" }])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: item.text }, null, 8, ["source"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.interactives)
						}, [createVNode(InteractiveCard_default, {
							payload: item.payload,
							"project-id": __props.projectId,
							"agent-id": __props.agentId,
							onSubmit: ($event) => onInteractiveSubmit(item.payload, $event)
						}, null, 8, [
							"payload",
							"project-id",
							"agent-id",
							"onSubmit"
						])], 2))], 64);
					}), 128)),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						onReadAloud: ($event) => toggleReadAloud(group.id)
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"onReadAloud"
					])) : createCommentVNode("", true), createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"])], 2)) : createCommentVNode("", true),
					group.message.role === "assistant" && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 5,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
});
var AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default = {
	messages: "_messages_1blc1_125",
	message: "_message_1blc1_125",
	content: "_content_1blc1_145",
	messageFooter: "_messageFooter_1blc1_151",
	assistant: "_assistant_1blc1_160",
	messageFooterVisible: "_messageFooterVisible_1blc1_164",
	user: "_user_1blc1_168",
	interactives: "_interactives_1blc1_178",
	chatMessage: "_chatMessage_1blc1_186",
	chatMessageUser: "_chatMessageUser_1blc1_192",
	chatMessageError: "_chatMessageError_1blc1_201",
	markdownContent: "_markdownContent_1blc1_209",
	thinkingBlock: "_thinkingBlock_1blc1_221",
	thinkingSummary: "_thinkingSummary_1blc1_226",
	thinkingContent: "_thinkingContent_1blc1_235",
	typingIndicator: "_typingIndicator_1blc1_246"
};
var AgentChatMessageList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=script&setup=true&lang.ts
var AgentChatPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatPanel",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		projectId: {},
		agentId: {},
		mode: { default: "panel" },
		endpoint: { default: "chat" },
		initialMessage: { default: void 0 },
		continueSessionId: { default: void 0 },
		agentConfig: {},
		agentStatus: {},
		connectedTriggers: {},
		canEditAgent: {
			type: Boolean,
			default: true
		},
		beforeSend: {
			type: Function,
			default: void 0
		},
		inputDraft: { default: void 0 }
	},
	emits: [
		"codeUpdated",
		"codeDelta",
		"configUpdated",
		"buildDone",
		"update:streaming",
		"update:inputDraft",
		"continue-loaded",
		"initial-consumed",
		"back",
		"open-build"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const internalInputText = ref(props.inputDraft ?? "");
		const inputText = computed({
			get: () => props.inputDraft !== void 0 ? props.inputDraft : internalInputText.value,
			set: (value) => {
				if (props.inputDraft !== void 0) emit("update:inputDraft", value);
				else internalInputText.value = value;
			}
		});
		const isPreparingToSend = ref(false);
		const { messages, isStreaming, messagingState, fatalError, loadHistory, sendMessage, stopGenerating, resume, cancelAndSteer, dismissFatalError } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			endpoint: toRef(props, "endpoint"),
			continueSessionId: toRef(props, "continueSessionId"),
			onCodeUpdated: () => emit("codeUpdated"),
			onCodeDelta: (d) => emit("codeDelta", d),
			onConfigUpdated: () => emit("configUpdated"),
			onBuildDone: () => emit("buildDone"),
			onHistoryLoaded: (count) => {
				if (props.continueSessionId) emit("continue-loaded", count);
			}
		});
		function humaniseMissingField(field) {
			if (field.startsWith("skill:")) return locale.baseText("agents.chat.misconfigured.missing.skill", { interpolate: { id: field.slice(6) } });
			const key = `agents.chat.misconfigured.missing.${field}`;
			const translated = locale.baseText(key);
			return translated === key ? field : translated;
		}
		const missingFields = computed(() => {
			if (!fatalError.value) return "";
			return fatalError.value.missing.map(humaniseMissingField).join(", ");
		});
		const openInteractive = computed(() => findOpenInteractive(messages.value));
		const hasOpenInteraction = computed(() => openInteractive.value !== void 0);
		const hasOpenApproval = computed(() => openInteractive.value?.toolName === APPROVAL_TOOL_NAME);
		const hasOpenInteractiveQuestion = computed(() => hasOpenInteraction.value && !hasOpenApproval.value);
		const areConfigurationActionsDisabled = computed(() => isStreaming.value || isPreparingToSend.value || hasOpenInteraction.value);
		const isBuilderReadOnly = computed(() => props.endpoint === "build" && !props.canEditAgent);
		const chatPlaceholder = computed(() => isBuilderReadOnly.value ? locale.baseText("agents.builder.readonly.placeholder") : hasOpenApproval.value ? locale.baseText("agents.chat.approval.inputPlaceholder") : hasOpenInteractiveQuestion.value ? locale.baseText("agents.chat.answerQuestionPlaceholder") : locale.baseText("agents.chat.input.placeholder"));
		function onOpenBuild() {
			dismissFatalError();
			emit("open-build");
		}
		watch(isStreaming, (v) => emit("update:streaming", v));
		async function onSubmit() {
			const text = inputText.value.trim();
			if (!text || isStreaming.value || isPreparingToSend.value || isBuilderReadOnly.value || hasOpenApproval.value) return;
			if (hasOpenInteractiveQuestion.value) {
				inputText.value = "";
				await cancelAndSteer(text);
				return;
			}
			isPreparingToSend.value = true;
			try {
				await props.beforeSend?.();
			} catch {
				isPreparingToSend.value = false;
				return;
			}
			try {
				inputText.value = "";
				const fingerprint = await buildAgentConfigFingerprint(props.agentConfig, props.connectedTriggers);
				agentTelemetry.trackSubmittedMessage({
					agentId: props.agentId,
					mode: props.endpoint === "build" ? "build" : "test",
					status: props.agentStatus,
					agentConfig: fingerprint
				});
				await sendMessage(text);
			} finally {
				isPreparingToSend.value = false;
			}
		}
		function sendMessageFromOutside(message) {
			if (hasOpenApproval.value) return;
			inputText.value = message;
			onSubmit();
		}
		__expose({ sendMessageFromOutside });
		const seedMessage = props.initialMessage;
		async function sendSeedMessage(message) {
			try {
				await props.beforeSend?.();
				const sending = sendMessage(message);
				emit("initial-consumed");
				await sending;
			} catch {}
		}
		const consumesSeed = !!seedMessage && !isBuilderReadOnly.value;
		if (consumesSeed) sendSeedMessage(seedMessage);
		onMounted(() => {
			if (consumesSeed) return;
			loadHistory();
		});
		onBeforeUnmount(() => {
			stopGenerating();
		});
		return (_ctx, _cache) => {
			return __props.visible ? (openBlock(), createElementBlock("aside", {
				key: 0,
				class: normalizeClass([__props.mode === "inline" ? _ctx.$style.inlinePanel : _ctx.$style.panel])
			}, [
				unref(fatalError) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.errorBanner),
					slim: ""
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "xsmall",
						"data-testid": "agent-misconfigured-open-build",
						onClick: onOpenBuild
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.chat.misconfigured.openBuild")), 1)]),
						_: 1
					}), createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "xsmall",
						"aria-label": unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						title: unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						onClick: unref(dismissFatalError)
					}, null, 8, [
						"aria-label",
						"title",
						"onClick"
					])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.title")), 3), missingFields.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.errorBannerDetail)
					}, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.missingPrefix")) + " " + toDisplayString(missingFields.value), 3)) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				unref(messages).length === 0 && !unref(isStreaming) && !__props.initialMessage ? (openBlock(), createBlock(AgentChatEmptyState_default, {
					key: 1,
					endpoint: __props.endpoint
				}, null, 8, ["endpoint"])) : (openBlock(), createBlock(AgentChatMessageList_default, {
					key: 2,
					messages: unref(messages),
					"messaging-state": unref(messagingState),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					onResume: unref(resume)
				}, null, 8, [
					"messages",
					"messaging-state",
					"project-id",
					"agent-id",
					"onResume"
				])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [renderSlot(_ctx.$slots, "above-input", { disabled: areConfigurationActionsDisabled.value }), createVNode(ChatInputBase_default, {
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputText.value = $event),
					placeholder: chatPlaceholder.value,
					"is-streaming": unref(messagingState) === "receiving",
					"can-submit": !hasOpenApproval.value && !unref(isStreaming) && !isPreparingToSend.value && !isBuilderReadOnly.value && inputText.value.trim().length > 0,
					disabled: isBuilderReadOnly.value || hasOpenApproval.value || isPreparingToSend.value || unref(isStreaming) && unref(messagingState) !== "receiving",
					"max-length": __props.endpoint === "build" ? unref(EXTENDED_PROMPT_MAX_LENGTH) : void 0,
					"data-testid": "chat-input",
					onSubmit,
					onStop: unref(stopGenerating)
				}, {
					"footer-start": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
					_: 3
				}, 8, [
					"modelValue",
					"placeholder",
					"is-streaming",
					"can-submit",
					"disabled",
					"max-length",
					"onStop"
				])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
var AgentChatPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_191v2_125",
	inlinePanel: "_inlinePanel_191v2_134",
	inputArea: "_inputArea_191v2_143",
	errorBanner: "_errorBanner_191v2_150",
	errorBannerBody: "_errorBannerBody_191v2_155",
	errorBannerTitle: "_errorBannerTitle_191v2_163",
	errorBannerDetail: "_errorBannerDetail_191v2_167"
};
var AgentChatPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatQuickActions.vue?vue&type=script&setup=true&lang.ts
var AgentChatQuickActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatQuickActions",
	props: {
		tools: {},
		mcpServers: {},
		projectId: {},
		agentId: {},
		connectedTriggers: {},
		isPublished: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: [
		"update:tools",
		"update:mcp-servers",
		"update:connected-triggers",
		"trigger-added",
		"agent-changed"
	],
	setup(__props, { emit: __emit }) {
		/**
		* Quick-action chips pinned above the chat input.
		*   - Add tool: opens `AgentToolsModal` via the shared modal system and
		*     re-emits the confirmed tools upward as `update:tools`.
		*   - Add trigger: opens `AgentChannelModal` and re-emits connected-channel
		*     updates + trigger-added events upward.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const channelModalOpen = ref(false);
		const channelModalView = ref("list");
		function onAddTool() {
			if (props.disabled) return;
			uiStore.openModalWithData({
				name: AGENT_TOOLS_MODAL_KEY,
				data: {
					tools: props.tools,
					mcpServers: props.mcpServers ?? [],
					projectId: props.projectId,
					agentId: props.agentId,
					onConfirm: (props) => {
						if (props.tools) emit("update:tools", props.tools);
						if (props.mcpServers) emit("update:mcp-servers", props.mcpServers);
					}
				}
			});
		}
		function onAddTrigger() {
			if (props.disabled) return;
			channelModalView.value = "list";
			channelModalOpen.value = true;
		}
		function handleChannelConnected(channelType) {
			const triggers = Array.from(new Set([...props.connectedTriggers, channelType]));
			emit("update:connected-triggers", triggers);
			emit("trigger-added", {
				triggerType: channelType,
				triggers
			});
		}
		function handleChannelDisconnected(channelType) {
			emit("update:connected-triggers", props.connectedTriggers.filter((trigger) => trigger !== channelType));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.row),
				"data-testid": "agent-chat-quick-actions"
			}, [createVNode(AgentChipButton_default, {
				variant: "suggestion",
				icon: "wrench",
				disabled: props.disabled,
				"data-testid": "agent-quick-action-add-tool",
				onClick: onAddTool
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.quickActions.addTool")), 1)]),
				_: 1
			}, 8, ["disabled"]), createVNode(AgentChipButton_default, {
				variant: "suggestion",
				icon: "zap",
				disabled: props.disabled,
				"data-testid": "agent-quick-action-add-trigger",
				onClick: onAddTrigger
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.quickActions.addTrigger")), 1)]),
				_: 1
			}, 8, ["disabled"])], 2), channelModalOpen.value ? (openBlock(), createBlock(AgentChannelModal_default, {
				key: 0,
				open: channelModalOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => channelModalOpen.value = $event),
				view: channelModalView.value,
				"onUpdate:view": _cache[1] || (_cache[1] = ($event) => channelModalView.value = $event),
				"agent-id": __props.agentId,
				"project-id": __props.projectId,
				"connected-channels": __props.connectedTriggers,
				"is-published": __props.isPublished,
				onChannelConnected: handleChannelConnected,
				onChannelDisconnected: handleChannelDisconnected,
				onAgentChanged: _cache[2] || (_cache[2] = ($event) => emit("agent-changed"))
			}, null, 8, [
				"open",
				"view",
				"agent-id",
				"project-id",
				"connected-channels",
				"is-published"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentChatQuickActions_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ahk4o_125",
	row: "_row_ahk4o_129"
};
var AgentChatQuickActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatQuickActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatQuickActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderChatColumn.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["aria-label"];
var AgentBuilderChatColumn_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderChatColumn",
	props: {
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agentName: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		initialPrompt: {},
		isBuilderConfigured: { type: Boolean },
		isFullWidth: { type: Boolean },
		canEditAgent: { type: Boolean },
		isBuildChatStreaming: { type: Boolean },
		beforeBuildSend: { type: Function }
	},
	emits: [
		"config-updated",
		"build-done",
		"update:streaming",
		"update:tools",
		"update:mcp-servers",
		"update:connected-triggers",
		"hide",
		"trigger-added",
		"agent-published",
		"agent-changed"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const hideChatLabel = computed(() => i18n.baseText("agents.builder.chat.hide.ariaLabel"));
		const sharedInputDraft = ref("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.chatColumn),
				"aria-label": unref(i18n).baseText("agents.builder.chatColumn.ariaLabel"),
				"data-testid": "agent-builder-chat-column"
			}, [__props.initialized ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.floatingHideToggle)
			}, [createVNode(unref(N8nTooltip_default), {
				placement: "left",
				content: hideChatLabel.value
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					"icon-only": "",
					size: "small",
					class: normalizeClass(_ctx.$style.headerIconBtn),
					"aria-label": hideChatLabel.value,
					"data-testid": "agent-build-chat-hide-toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("hide"))
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "panel-left-close",
						size: 14
					})]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatBody) }, [__props.initialized && __props.isBuilderConfigured ? (openBlock(), createBlock(AgentChatPanel_default, {
				key: 0,
				"input-draft": sharedInputDraft.value,
				"onUpdate:inputDraft": _cache[6] || (_cache[6] = ($event) => sharedInputDraft.value = $event),
				"project-id": __props.projectId,
				"agent-id": __props.agentId,
				mode: "inline",
				endpoint: "build",
				"initial-message": __props.initialPrompt,
				"agent-config": __props.localConfig,
				"agent-status": unref(deriveAgentStatus)(__props.agent),
				"connected-triggers": __props.connectedTriggers,
				"can-edit-agent": __props.canEditAgent,
				"before-send": __props.beforeBuildSend,
				onConfigUpdated: _cache[7] || (_cache[7] = ($event) => emit("config-updated")),
				onBuildDone: _cache[8] || (_cache[8] = ($event) => emit("build-done")),
				"onUpdate:streaming": _cache[9] || (_cache[9] = ($event) => emit("update:streaming", $event))
			}, createSlots({ _: 2 }, [__props.canEditAgent ? {
				name: "above-input",
				fn: withCtx(({ disabled: chatActionsDisabled }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickActionsRow) }, [createVNode(AgentChatQuickActions_default, {
					tools: __props.localConfig?.tools ?? [],
					"mcp-servers": __props.localConfig?.mcpServers ?? [],
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"connected-triggers": __props.connectedTriggers,
					"is-published": __props.agent?.activeVersionId !== null && __props.agent?.activeVersionId !== void 0,
					disabled: __props.isBuildChatStreaming || chatActionsDisabled,
					"onUpdate:tools": _cache[1] || (_cache[1] = ($event) => emit("update:tools", $event)),
					"onUpdate:mcpServers": _cache[2] || (_cache[2] = ($event) => emit("update:mcp-servers", $event)),
					"onUpdate:connectedTriggers": _cache[3] || (_cache[3] = ($event) => emit("update:connected-triggers", $event)),
					onTriggerAdded: _cache[4] || (_cache[4] = ($event) => emit("trigger-added", $event)),
					onAgentChanged: _cache[5] || (_cache[5] = ($event) => emit("agent-changed"))
				}, null, 8, [
					"tools",
					"mcp-servers",
					"project-id",
					"agent-id",
					"connected-triggers",
					"is-published",
					"disabled"
				])], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"input-draft",
				"project-id",
				"agent-id",
				"initial-message",
				"agent-config",
				"agent-status",
				"connected-triggers",
				"can-edit-agent",
				"before-send"
			])) : createCommentVNode("", true), __props.initialized && !__props.isBuilderConfigured ? (openBlock(), createBlock(AgentBuilderUnconfiguredEmptyState_default, { key: 1 })) : createCommentVNode("", true)], 2)], 10, _hoisted_1$5);
		};
	}
});
var AgentBuilderChatColumn_vue_vue_type_style_index_0_lang_module_default = {
	chatColumn: "_chatColumn_44mph_125",
	quickActionsRow: "_quickActionsRow_44mph_137",
	headerIconBtn: "_headerIconBtn_44mph_145",
	floatingHideToggle: "_floatingHideToggle_44mph_152",
	chatBody: "_chatBody_44mph_160"
};
var AgentBuilderChatColumn_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderChatColumn_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderChatColumn_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentAdvancedPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["data-state"];
var _hoisted_2$3 = ["aria-expanded", "aria-disabled"];
var ANTHROPIC_WEB_SEARCH_DEFAULT_MAX_USES = 5;
/**
* Creates a ref, debounced config-emit, change handler, and watch-sync
* function for one numeric field inside `config`. Designed for N8nInputNumber2
* which emits numbers directly (NaN when the field is cleared).
*
* Pass a number for fields that always persist their fallback (e.g. concurrency).
* Pass `{ displayDefault }` for optional fields that show a runtime default in
* the UI but omit the key from saved config when cleared.
*/
var CONCURRENCY_MIN = 1;
var CONCURRENCY_MAX = 100;
var CONCURRENCY_DEFAULT = 5;
var MAX_ITERATIONS_MIN = 1;
var MAX_ITERATIONS_MAX = 200;
var MAX_ITERATIONS_DEFAULT = 30;
var BUDGET_TOKENS_MIN = 1;
var BUDGET_TOKENS_DEFAULT = 1024;
var PROMPT_CACHING_TTL_DEFAULT = "1h";
var AgentAdvancedPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentAdvancedPanel",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		},
		collapsible: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		/**
		* Behavior panel — execution-behavior knobs that used to live in the old
		* AgentOverviewPanel: native web search, reasoning depth (provider-gated),
		* and tool-call concurrency.
		*
		* Thinking is always visible as a toggle but disabled (with a tooltip) when
		* the selected provider doesn't support it. The sub-control differs by
		* provider: Anthropic takes a `budgetTokens` number, OpenAI takes a
		* `reasoningEffort` low/medium/high select.
		*/
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const DEFAULT_CAPABILITIES = {
			thinking: false,
			promptCaching: false,
			webSearch: false,
			providerTools: []
		};
		const SEARCH_CONTEXT_SIZE_OPTIONS = [
			"low",
			"medium",
			"high"
		];
		const props = __props;
		const emit = __emit;
		const isExpanded = ref(!props.collapsible);
		const provider = computed(() => parseProvider(props.config?.model));
		const capabilities = computed(() => PROVIDER_CAPABILITIES[provider.value] ?? DEFAULT_CAPABILITIES);
		const hasNativeWebSearch = computed(() => Boolean(capabilities.value.webSearch));
		function makeNumberField(key, options) {
			const displayDefault = typeof options === "number" ? options : options.displayDefault;
			const persistFallback = typeof options === "number";
			const resolveDisplay = (cfg) => cfg?.config?.[key] ?? displayDefault;
			const value = ref(resolveDisplay(props.config));
			const debouncedEmit = useDebounceFn(() => {
				const cfg = { ...props.config?.config ?? {} };
				if (value.value === void 0) delete cfg[key];
				else cfg[key] = value.value;
				emit("update:config", { config: cfg });
			}, 500);
			const emitConfig = (nextValue) => {
				const cfg = { ...props.config?.config ?? {} };
				if (nextValue === void 0) delete cfg[key];
				else cfg[key] = nextValue;
				emit("update:config", { config: cfg });
			};
			return {
				modelValue: value,
				onChange(n) {
					if (persistFallback) {
						value.value = isNaN(n) ? displayDefault : n;
						debouncedEmit();
						return;
					}
					if (isNaN(n)) {
						value.value = displayDefault;
						emitConfig(void 0);
						return;
					}
					value.value = n;
					emitConfig(n);
				},
				sync(cfg) {
					value.value = resolveDisplay(cfg);
				}
			};
		}
		const { modelValue: concurrencyModelValue, onChange: onConcurrencyChange, sync: syncConcurrency } = makeNumberField("toolCallConcurrency", CONCURRENCY_DEFAULT);
		const { modelValue: maxIterationsModelValue, onChange: onMaxIterationsChange, sync: syncMaxIterations } = makeNumberField("maxIterations", { displayDefault: MAX_ITERATIONS_DEFAULT });
		const webSearchEnabled = ref(props.config?.config?.webSearch?.enabled === true);
		const webSearchMethod = ref(webSearchEnabled.value ? getWebSearchMethod(props.config, hasNativeWebSearch.value) : "off");
		const webSearchArgs = ref(getNativeWebSearchArgs(props.config, capabilities.value.webSearch));
		const webSearchMaxUses = ref("");
		const webSearchExternalAccess = ref(true);
		const webSearchContextSize = ref("medium");
		const fallbackWebSearchProvider = ref(props.config?.config?.webSearch?.provider === "searxng" ? "searxng" : "brave");
		const fallbackWebSearchCredential = ref(props.config?.config?.webSearch?.credential ?? "");
		const thinkingCfg = computed(() => props.config?.config?.thinking ?? null);
		const thinkingEnabled = ref(thinkingCfg.value !== null);
		const budgetTokens = ref(thinkingCfg.value?.budgetTokens ?? BUDGET_TOKENS_DEFAULT);
		const reasoningEffort = ref(thinkingCfg.value?.reasoningEffort ?? "medium");
		function anthropicTtlFrom(cfg) {
			return cfg?.config?.promptCaching?.anthropic?.ttl ?? PROMPT_CACHING_TTL_DEFAULT;
		}
		const anthropicTtl = ref(anthropicTtlFrom(props.config));
		function syncWebSearchOptions(args) {
			webSearchMaxUses.value = typeof args.maxUses === "number" ? String(args.maxUses) : String(ANTHROPIC_WEB_SEARCH_DEFAULT_MAX_USES);
			webSearchExternalAccess.value = typeof args.externalWebAccess === "boolean" ? args.externalWebAccess : true;
			webSearchContextSize.value = args.searchContextSize === "low" || args.searchContextSize === "medium" || args.searchContextSize === "high" ? args.searchContextSize : "medium";
		}
		syncWebSearchOptions(webSearchArgs.value);
		watch(() => props.config, (cfg) => {
			if (!cfg) return;
			const t = cfg.config?.thinking ?? null;
			thinkingEnabled.value = t !== null;
			budgetTokens.value = t?.budgetTokens ?? BUDGET_TOKENS_DEFAULT;
			reasoningEffort.value = t?.reasoningEffort ?? "medium";
			anthropicTtl.value = anthropicTtlFrom(cfg);
			syncConcurrency(cfg);
			syncMaxIterations(cfg);
			webSearchEnabled.value = cfg.config?.webSearch?.enabled === true;
			webSearchMethod.value = webSearchEnabled.value ? getWebSearchMethod(cfg, hasNativeWebSearch.value) : "off";
			webSearchArgs.value = getNativeWebSearchArgs(cfg, capabilities.value.webSearch);
			fallbackWebSearchProvider.value = webSearchMethod.value === "searxng" ? "searxng" : "brave";
			fallbackWebSearchCredential.value = cfg.config?.webSearch?.credential ?? "";
			syncWebSearchOptions(webSearchArgs.value);
		}, { deep: true });
		const fallbackCredentialType = computed(() => webSearchMethod.value === "searxng" ? "searXngApi" : "braveSearchApi");
		const fallbackCredentials = computed(() => credentialsStore.allCredentials.filter((credential) => credential.type === fallbackCredentialType.value));
		function buildWebSearchArgs() {
			const tool = capabilities.value.webSearch;
			if (!tool || webSearchMethod.value !== "native") return {};
			if (tool === "anthropic.web_search") {
				const maxUses = Number(webSearchMaxUses.value);
				return { ...Number.isFinite(maxUses) && maxUses > 0 && { maxUses } };
			}
			if (tool === "openai.web_search") return {
				externalWebAccess: webSearchExternalAccess.value,
				searchContextSize: webSearchContextSize.value
			};
			return {};
		}
		function emitWebSearchConfig() {
			if (!webSearchEnabled.value) return;
			const method = webSearchMethod.value === "off" ? "native" : webSearchMethod.value;
			emit("update:config", withWebSearchConfig(props.config, true, method, capabilities.value.webSearch, buildWebSearchArgs(), fallbackWebSearchCredential.value));
		}
		function onWebSearchOptionInput() {
			emitWebSearchConfig();
		}
		function onWebSearchMethodChange(value) {
			webSearchMethod.value = value;
			webSearchEnabled.value = value !== "off";
			const method = value === "off" ? "native" : value;
			const nextFallbackProvider = value === "brave" || value === "searxng" ? value : null;
			if (nextFallbackProvider && nextFallbackProvider !== fallbackWebSearchProvider.value) fallbackWebSearchCredential.value = "";
			if (nextFallbackProvider) fallbackWebSearchProvider.value = nextFallbackProvider;
			emit("update:config", withWebSearchConfig(props.config, webSearchEnabled.value, method, capabilities.value.webSearch, buildWebSearchArgs(), fallbackWebSearchCredential.value));
		}
		function onFallbackCredentialChange(value) {
			fallbackWebSearchCredential.value = value;
			emit("update:config", withWebSearchConfig(props.config, webSearchEnabled.value, webSearchMethod.value === "off" ? "native" : webSearchMethod.value, capabilities.value.webSearch, buildWebSearchArgs(), value));
		}
		function emitThinking() {
			const cap = capabilities.value.thinking;
			if (!cap) return;
			const thinking = cap === "budgetTokens" ? {
				provider: "anthropic",
				budgetTokens: budgetTokens.value
			} : {
				provider: "openai",
				reasoningEffort: reasoningEffort.value
			};
			emit("update:config", { config: {
				...props.config?.config,
				thinking
			} });
		}
		function onThinkingToggle(value) {
			if (!capabilities.value.thinking) return;
			thinkingEnabled.value = value;
			if (!value) {
				const rest = { ...props.config?.config ?? {} };
				delete rest.thinking;
				emit("update:config", { config: rest });
				return;
			}
			emitThinking();
		}
		const emitBudget = useDebounceFn(emitThinking, 500);
		function onBudgetChange(n) {
			if (isNaN(n) || n < BUDGET_TOKENS_MIN) return;
			budgetTokens.value = n;
			emitBudget();
		}
		function onReasoningEffortChange(value) {
			reasoningEffort.value = value;
			emitThinking();
		}
		const thinkingDisabledReason = computed(() => capabilities.value.thinking ? "" : i18n.baseText("agents.builder.advanced.thinking.unsupportedTooltip", { interpolate: { provider: provider.value || i18n.baseText("agents.builder.advanced.thinking.unsupportedProviderFallback") } }));
		function onAnthropicTtlChange(value) {
			anthropicTtl.value = value;
			emit("update:config", { config: {
				...props.config?.config,
				promptCaching: {
					enabled: true,
					anthropic: { ttl: value }
				}
			} });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-state": isExpanded.value ? "open" : "closed",
				"data-testid": "agent-behavior-panel"
			}, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass([_ctx.$style.header, { [_ctx.$style.collapsibleHeader]: props.collapsible }]),
				"aria-expanded": isExpanded.value,
				"aria-disabled": !props.collapsible,
				"data-testid": "agent-advanced-trigger",
				onClick: _cache[0] || (_cache[0] = ($event) => props.collapsible && (isExpanded.value = !isExpanded.value))
			}, [createVNode(unref(N8nText_default), {
				tag: "h3",
				bold: true,
				"data-testid": "agent-advanced-title"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.title")), 1)]),
				_: 1
			}), props.collapsible ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "chevron-down",
				size: "small",
				class: normalizeClass(_ctx.$style.chevron),
				"data-testid": "agent-advanced-chevron"
			}, null, 8, ["class"])) : createCommentVNode("", true)], 10, _hoisted_2$3), withDirectives(createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.content),
				"data-testid": "agent-advanced-content"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingGroup) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(N8nSelect_default), {
					"model-value": webSearchMethod.value,
					size: "small",
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-web-search-method",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => onWebSearchMethodChange(v))
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nOption_default), {
							value: "off",
							label: unref(i18n).baseText("agents.builder.advanced.webSearch.method.off")
						}, null, 8, ["label"]),
						capabilities.value.webSearch ? (openBlock(), createBlock(unref(N8nOption_default), {
							key: 0,
							value: "native",
							label: unref(i18n).baseText("agents.builder.advanced.webSearch.method.native")
						}, null, 8, ["label"])) : createCommentVNode("", true),
						createVNode(unref(N8nOption_default), {
							value: "brave",
							label: unref(i18n).baseText("agents.builder.advanced.webSearch.fallbackProvider.brave")
						}, null, 8, ["label"]),
						createVNode(unref(N8nOption_default), {
							value: "searxng",
							label: unref(i18n).baseText("agents.builder.advanced.webSearch.fallbackProvider.searxng")
						}, null, 8, ["label"])
					]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2), webSearchEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subSettings),
					"data-testid": "agent-web-search-settings"
				}, [
					webSearchMethod.value === "native" && capabilities.value.webSearch === "anthropic.web_search" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.row)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.maxUses.label")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.maxUses.hint")), 1)]),
						_: 1
					}, 8, ["class"])], 2), createVNode(unref(InputNumber_default), {
						"model-value": Number(webSearchMaxUses.value),
						min: 1,
						precision: 0,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.shortInput),
						"data-testid": "agent-web-search-max-uses",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => {
							webSearchMaxUses.value = String(v);
							onWebSearchOptionInput();
						})
					}, null, 8, [
						"model-value",
						"disabled",
						"class"
					])], 2)) : createCommentVNode("", true),
					webSearchMethod.value === "native" && capabilities.value.webSearch === "openai.web_search" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.row)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.externalAccess.label")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.externalAccess.hint")), 1)]),
						_: 1
					}, 8, ["class"])], 2), createVNode(unref(Switch_default), {
						"model-value": webSearchExternalAccess.value,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.switchControl),
						"data-testid": "agent-web-search-external-access",
						"onUpdate:modelValue": _cache[3] || (_cache[3] = (v) => {
							webSearchExternalAccess.value = Boolean(v);
							onWebSearchOptionInput();
						})
					}, null, 8, [
						"model-value",
						"disabled",
						"class"
					])], 2)) : createCommentVNode("", true),
					webSearchMethod.value === "native" && capabilities.value.webSearch === "openai.web_search" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.row)
					}, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.contextSize.label")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
						"model-value": webSearchContextSize.value,
						size: "small",
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.shortInput),
						"data-testid": "agent-web-search-context-size",
						"onUpdate:modelValue": _cache[4] || (_cache[4] = (v) => {
							webSearchContextSize.value = v;
							onWebSearchOptionInput();
						})
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(SEARCH_CONTEXT_SIZE_OPTIONS, (opt) => {
							return createVNode(unref(N8nOption_default), {
								key: opt,
								value: opt,
								label: opt
							}, null, 8, ["value", "label"]);
						}), 64))]),
						_: 1
					}, 8, [
						"model-value",
						"disabled",
						"class"
					])], 2)) : createCommentVNode("", true),
					webSearchMethod.value !== "native" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.row)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.credential.label")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.webSearch.credential.hint")), 1)]),
						_: 1
					}, 8, ["class"])], 2), createVNode(unref(N8nSelect_default), {
						"model-value": fallbackWebSearchCredential.value,
						size: "small",
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.credentialSelect),
						"data-testid": "agent-web-search-fallback-credential",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => onFallbackCredentialChange(String(v)))
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(fallbackCredentials.value, (credential) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: credential.id,
								value: credential.id,
								label: credential.name
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, [
						"model-value",
						"disabled",
						"class"
					])], 2)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingGroup) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.thinking.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.thinking.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(N8nTooltip_default), {
					content: thinkingDisabledReason.value,
					disabled: !!capabilities.value.thinking,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(Switch_default), {
						"model-value": thinkingEnabled.value,
						disabled: !capabilities.value.thinking || props.disabled,
						class: normalizeClass(_ctx.$style.switchControl),
						"data-testid": "agent-thinking-toggle",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = (v) => onThinkingToggle(Boolean(v)))
					}, null, 8, [
						"model-value",
						"disabled",
						"class"
					])]),
					_: 1
				}, 8, ["content", "disabled"])], 2), thinkingEnabled.value && capabilities.value.thinking ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subSettings),
					"data-testid": "agent-thinking-settings"
				}, [capabilities.value.thinking === "budgetTokens" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.row)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.budgetTokens.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.budgetTokens.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(InputNumber_default), {
					"model-value": budgetTokens.value,
					min: BUDGET_TOKENS_MIN,
					precision: 0,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-budget-tokens-input",
					"onUpdate:modelValue": onBudgetChange
				}, null, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2)) : createCommentVNode("", true), capabilities.value.thinking === "reasoningEffort" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.row)
				}, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.reasoningEffort.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
					"model-value": reasoningEffort.value,
					size: "small",
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-reasoning-effort-select",
					"onUpdate:modelValue": onReasoningEffortChange
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(REASONING_EFFORT_OPTIONS), (opt) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: opt,
							value: opt,
							label: opt
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2),
				capabilities.value.promptCaching === "ttl" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.settingGroup)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.promptCachingTtl.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.promptCaching.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(N8nSelect_default), {
					"model-value": anthropicTtl.value,
					size: "small",
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-prompt-caching-ttl-select",
					"onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => onAnthropicTtlChange(v))
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(ANTHROPIC_CACHE_TTL_OPTIONS), (opt) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: opt,
							value: opt,
							label: opt
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"class"
				])], 2)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.concurrency.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.concurrency.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(InputNumber_default), {
					"model-value": unref(concurrencyModelValue),
					min: CONCURRENCY_MIN,
					max: CONCURRENCY_MAX,
					precision: 0,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-concurrency-input",
					"onUpdate:modelValue": unref(onConcurrencyChange)
				}, null, 8, [
					"model-value",
					"disabled",
					"class",
					"onUpdate:modelValue"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.maxIterations.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.maxIterations.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(InputNumber_default), {
					"model-value": unref(maxIterationsModelValue),
					min: MAX_ITERATIONS_MIN,
					max: MAX_ITERATIONS_MAX,
					precision: 0,
					disabled: props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-max-iterations-input",
					"onUpdate:modelValue": unref(onMaxIterationsChange)
				}, null, 8, [
					"model-value",
					"disabled",
					"class",
					"onUpdate:modelValue"
				])], 2)
			], 2), [[vShow, isExpanded.value]])], 10, _hoisted_1$4);
		};
	}
});
var AgentAdvancedPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_ev1o6_2",
	header: "_header_ev1o6_12",
	collapsibleHeader: "_collapsibleHeader_ev1o6_26",
	chevron: "_chevron_ev1o6_36",
	content: "_content_ev1o6_47",
	settingGroup: "_settingGroup_ev1o6_54",
	row: "_row_ev1o6_60",
	rowLabel: "_rowLabel_ev1o6_68",
	subSettings: "_subSettings_ev1o6_76",
	shortInput: "_shortInput_ev1o6_84",
	credentialSelect: "_credentialSelect_ev1o6_89",
	switchControl: "_switchControl_ev1o6_94"
};
var AgentAdvancedPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentAdvancedPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentAdvancedPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentIdentityHeader.vue?vue&type=script&setup=true&lang.ts
var AgentIdentityHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentIdentityHeader",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		const DEFAULT_GRADIENT_LAYOUT = {
			angle: 135,
			fromStop: 0,
			toStop: 100
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const name = computed(() => props.config?.name ?? "");
		const personalisation = computed(() => {
			const value = props.config?.personalisation;
			return value?.gradient ? {
				icon: value.icon,
				gradient: {
					...DEFAULT_GRADIENT_LAYOUT,
					...value.gradient
				}
			} : {
				icon: value?.icon ?? DEFAULT_AGENT_PERSONALISATION.icon,
				gradient: {
					...DEFAULT_AGENT_PERSONALISATION.gradient,
					...DEFAULT_GRADIENT_LAYOUT
				}
			};
		});
		const iconPickerModel = computed({
			get: () => ({
				type: "icon",
				value: personalisation.value.icon
			}),
			set: (value) => {
				if (value.type !== "icon") return;
				emit("update:config", { personalisation: {
					icon: value.value,
					gradient: { ...personalisation.value.gradient }
				} });
			}
		});
		function personalisationStyle(value) {
			return {
				"--agent-personalisation-gradient-from": value.gradient.from,
				"--agent-personalisation-gradient-to": value.gradient.to,
				"--agent-personalisation-gradient-angle": `${value.gradient.angle}deg`,
				"--agent-personalisation-gradient-from-stop": `${value.gradient.fromStop}%`,
				"--agent-personalisation-gradient-to-stop": `${value.gradient.toStop}%`
			};
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.text),
				"data-testid": "agent-identity-header"
			}, [createVNode(unref(N8nIconPicker_default), {
				modelValue: iconPickerModel.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => iconPickerModel.value = $event),
				style: normalizeStyle(personalisationStyle(personalisation.value)),
				"button-tooltip": unref(i18n).baseText("agents.builder.agent.personalisation.change"),
				"button-size": "xlarge",
				"is-read-only": props.disabled,
				"icons-only": "",
				"container-class": _ctx.$style.personalisationPicker,
				"button-class": _ctx.$style.personalisationIcon,
				"data-testid": "agent-personalisation-icon"
			}, null, 8, [
				"modelValue",
				"style",
				"button-tooltip",
				"is-read-only",
				"container-class",
				"button-class"
			]), createVNode(unref(N8nInlineTextEdit_default), {
				"model-value": name.value,
				placeholder: unref(i18n).baseText("agents.builder.agent.name.placeholder"),
				disabled: props.disabled,
				"max-width": "100%",
				"min-width": 96,
				class: normalizeClass(_ctx.$style.title),
				"data-testid": "agent-name-inline-edit",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:config", { name: $event }))
			}, null, 8, [
				"model-value",
				"placeholder",
				"disabled",
				"class"
			])], 2);
		};
	}
});
var AgentIdentityHeader_vue_vue_type_style_index_0_lang_module_default = {
	text: "_text_1gequ_125",
	personalisationPicker: "_personalisationPicker_1gequ_135",
	personalisationIcon: "_personalisationIcon_1gequ_140",
	title: "_title_1gequ_195"
};
var AgentIdentityHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentIdentityHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentIdentityHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentFilesPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["accept"];
var _hoisted_2$2 = ["title"];
var _hoisted_3$1 = { colspan: 6 };
var AgentFilesPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentFilesPanel",
	props: {
		files: {},
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		uploading: {
			type: Boolean,
			default: false
		},
		deletingFileId: { default: null },
		isPublished: { type: Boolean }
	},
	emits: ["upload-files", "delete-file"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const fileInput = useTemplateRef("fileInput");
		const isMutating = computed(() => props.uploading || props.deletingFileId !== null);
		const isUploadDisabled = computed(() => props.disabled || props.loading || isMutating.value || !props.isPublished);
		const uploadLabel = computed(() => i18n.baseText("agents.builder.files.addFile"));
		const uploadTooltip = computed(() => props.isPublished ? uploadLabel.value : i18n.baseText("agents.builder.files.publishRequired"));
		const acceptAttr = ALLOWED_AGENT_FILE_EXTENSIONS.join(",");
		function getFileIcon(file) {
			const extension = file.fileName.split(".").pop()?.toLowerCase();
			if (extension === "csv" || file.mimeType === "text/csv") return "file-code";
			if (extension === "pdf" || file.mimeType === "application/pdf") return "file";
			if (extension === "md" || extension === "markdown" || file.mimeType === "text/markdown") return "scroll-text";
			if (extension === "txt" || file.mimeType === "text/plain") return "file-text";
			return "file";
		}
		function getFileType(file) {
			const extension = file.fileName.split(".").pop()?.toLowerCase();
			if (extension === "csv" || file.mimeType === "text/csv") return i18n.baseText("agents.builder.files.type.csv");
			if (extension === "pdf" || file.mimeType === "application/pdf") return i18n.baseText("agents.builder.files.type.pdf");
			if (extension === "md" || extension === "markdown" || file.mimeType === "text/markdown") return i18n.baseText("agents.builder.files.type.markdown");
			if (extension === "txt" || file.mimeType === "text/plain") return i18n.baseText("agents.builder.files.type.txt");
			return i18n.baseText("agents.builder.files.type.file");
		}
		function formatFileSize(bytes) {
			if (bytes < 1024) return i18n.baseText("agents.builder.files.size.bytes", { interpolate: { bytes } });
			const kilobytes = bytes / 1024;
			if (kilobytes < 1024) return i18n.baseText("agents.builder.files.size.kilobytes", { interpolate: { kilobytes: kilobytes.toFixed(1) } });
			const megabytes = kilobytes / 1024;
			return i18n.baseText("agents.builder.files.size.megabytes", { interpolate: { megabytes: megabytes.toFixed(1) } });
		}
		function formatDate(fullDate) {
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function rowActions() {
			return [{
				id: "delete",
				label: i18n.baseText("agents.builder.files.delete"),
				icon: "trash-2",
				disabled: props.disabled || props.loading || isMutating.value
			}];
		}
		function onAction(actionId, file) {
			if (actionId !== "delete") return;
			emit("delete-file", file);
		}
		function openFilePicker() {
			if (isUploadDisabled.value) return;
			fileInput.value?.click();
		}
		function onFilesSelected(event) {
			const input = event.target;
			if (!(input instanceof HTMLInputElement)) return;
			const selectedFiles = Array.from(input.files ?? []);
			input.value = "";
			if (selectedFiles.length === 0) return;
			emit("upload-files", selectedFiles);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": "agent-files-panel"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
				createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.title),
					"data-testid": "agent-files-title"
				}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.files.title")) + " ", 1), createVNode(unref(N8nTooltip_default), {
					content: unref(i18n).baseText("agents.builder.files.titleTooltip"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small",
						class: normalizeClass(_ctx.$style.titleIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])], 2),
				createBaseVNode("input", {
					ref_key: "fileInput",
					ref: fileInput,
					type: "file",
					accept: unref(acceptAttr),
					multiple: "",
					class: normalizeClass(_ctx.$style.fileInput),
					"data-testid": "agent-files-upload-input",
					onChange: onFilesSelected
				}, null, 42, _hoisted_1$3),
				createVNode(unref(N8nTooltip_default), {
					content: uploadTooltip.value,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						icon: "plus",
						"icon-only": "",
						disabled: isUploadDisabled.value,
						"aria-label": uploadTooltip.value,
						"data-testid": "agent-files-upload",
						onClick: openFilePicker
					}, null, 8, ["disabled", "aria-label"])]),
					_: 1
				}, 8, ["content"])
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createVNode(unref(TableBase_default), { "max-displayed-rows": 10 }, {
				default: withCtx(() => [createBaseVNode("tbody", null, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(props.files, (file) => {
						return openBlock(), createElementBlock("tr", {
							key: file.id,
							class: normalizeClass(_ctx.$style.fileRow),
							"data-testid": "agent-files-list-row"
						}, [
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.titleCell) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileTitle) }, [createVNode(unref(N8nIcon_default), {
								icon: getFileIcon(file),
								size: "medium",
								class: normalizeClass(_ctx.$style.fileIcon)
							}, null, 8, ["icon", "class"]), createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.fileName),
								title: file.fileName,
								"data-testid": "agent-file-name"
							}, toDisplayString(file.fileName), 11, _hoisted_2$2)], 2)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.originCell),
								"data-testid": "agent-file-origin"
							}, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.originPill),
								"data-testid": "agent-file-origin-pill"
							}, [createVNode(unref(N8nIcon_default), {
								icon: "user",
								size: "large"
							}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agents.builder.files.origin.user")), 1)], 2)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.dateCell),
								"data-testid": "agent-file-created-at"
							}, toDisplayString(formatDate(file.createdAt)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.typeCell),
								"data-testid": "agent-file-type"
							}, toDisplayString(getFileType(file)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.sizeCell),
								"data-testid": "agent-file-size"
							}, toDisplayString(formatFileSize(file.fileSizeBytes)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.actionCell),
								onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
							}, [createVNode(unref(N8nActionDropdown_default), {
								items: rowActions(),
								disabled: props.disabled || props.loading || isMutating.value,
								"activator-icon": "ellipsis",
								"data-testid": "agent-files-actions",
								onSelect: ($event) => onAction($event, file)
							}, null, 8, [
								"items",
								"disabled",
								"onSelect"
							])], 2)
						], 2);
					}), 128)),
					props.loading && props.files.length === 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (item) => {
						return createBaseVNode("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(6, (col) => {
							return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
						}), 64))]);
					}), 64)) : createCommentVNode("", true),
					!props.loading && props.files.length === 0 ? (openBlock(), createElementBlock("tr", {
						key: 1,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_3$1, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.emptyMessage),
						"data-testid": "agent-files-empty"
					}, toDisplayString(props.isPublished ? unref(i18n).baseText("agents.builder.files.empty") : unref(i18n).baseText("agents.builder.files.publishRequired")), 3)])], 2)) : createCommentVNode("", true)
				])]),
				_: 1
			})], 2)], 2);
		};
	}
});
var AgentFilesPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1cuur_125",
	toolbar: "_toolbar_1cuur_132",
	title: "_title_1cuur_140",
	titleIcon: "_titleIcon_1cuur_151",
	fileInput: "_fileInput_1cuur_155",
	tableContainer: "_tableContainer_1cuur_159",
	titleCell: "_titleCell_1cuur_166",
	fileTitle: "_fileTitle_1cuur_171",
	fileIcon: "_fileIcon_1cuur_178",
	fileName: "_fileName_1cuur_183",
	originCell: "_originCell_1cuur_195",
	dateCell: "_dateCell_1cuur_196",
	typeCell: "_typeCell_1cuur_197",
	sizeCell: "_sizeCell_1cuur_198",
	originPill: "_originPill_1cuur_203",
	actionCell: "_actionCell_1cuur_225",
	fileRow: "_fileRow_1cuur_233",
	lastRow: "_lastRow_1cuur_240",
	emptyMessage: "_emptyMessage_1cuur_248"
};
var AgentFilesPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentFilesPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentFilesPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentVectorStoresPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["title"];
var _hoisted_2$1 = ["title"];
var _hoisted_3 = ["title"];
var AgentVectorStoresPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVectorStoresPanel",
	props: {
		vectorStores: {},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"connect",
		"edit",
		"remove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		function locatorLabel(vectorStore) {
			switch (vectorStore.provider) {
				case "pinecone": return vectorStore.indexName;
				case "qdrant": return vectorStore.collectionName;
				case "supabase":
				case "postgres": return vectorStore.tableName;
			}
		}
		function rowActions() {
			return [{
				id: "edit",
				label: i18n.baseText("agents.builder.vectorStores.panel.edit"),
				icon: "pen",
				disabled: props.disabled
			}, {
				id: "remove",
				label: i18n.baseText("agents.builder.vectorStores.panel.remove"),
				icon: "trash-2",
				disabled: props.disabled
			}];
		}
		function onAction(actionId, vectorStore) {
			if (actionId === "edit") emit("edit", vectorStore);
			else if (actionId === "remove") emit("remove", vectorStore);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": "agent-vector-stores-panel"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.title),
				"data-testid": "agent-vector-stores-title"
			}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.vectorStores.panel.title")) + " ", 1), createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("agents.builder.vectorStores.panel.titleTooltip"),
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "circle-help",
					size: "small",
					class: normalizeClass(_ctx.$style.titleIcon)
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["content"])], 2), createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("agents.builder.vectorStores.panel.connectButton"),
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					size: "small",
					icon: "plus",
					disabled: props.disabled,
					"aria-label": unref(i18n).baseText("agents.builder.vectorStores.panel.connectButton"),
					"data-testid": "agent-vector-stores-connect",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("connect"))
				}, null, 8, ["disabled", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2), props.vectorStores.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.tableContainer)
			}, [createVNode(unref(TableBase_default), null, {
				default: withCtx(() => [createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.vectorStores, (vectorStore) => {
					return openBlock(), createElementBlock("tr", {
						key: vectorStore.name,
						class: normalizeClass(_ctx.$style.row),
						"data-testid": "agent-vector-stores-list-row"
					}, [
						createBaseVNode("td", { class: normalizeClass(_ctx.$style.titleCell) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowTitle) }, [createVNode(CredentialIcon_default, {
							"credential-type-name": unref(AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS)[vectorStore.provider].credentialType,
							size: 20,
							class: normalizeClass(_ctx.$style.rowIcon)
						}, null, 8, ["credential-type-name", "class"]), createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.rowName),
							title: vectorStore.name,
							"data-testid": "agent-vector-store-name"
						}, toDisplayString(vectorStore.name), 11, _hoisted_1$2)], 2)], 2),
						createBaseVNode("td", {
							class: normalizeClass(_ctx.$style.locatorCell),
							title: locatorLabel(vectorStore),
							"data-testid": "agent-vector-store-locator"
						}, toDisplayString(locatorLabel(vectorStore)), 11, _hoisted_2$1),
						createBaseVNode("td", {
							class: normalizeClass(_ctx.$style.useWhenCell),
							title: vectorStore.useWhen,
							"data-testid": "agent-vector-store-use-when"
						}, toDisplayString(vectorStore.useWhen), 11, _hoisted_3),
						createBaseVNode("td", {
							class: normalizeClass(_ctx.$style.actionCell),
							onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
						}, [createVNode(unref(N8nActionDropdown_default), {
							items: rowActions(),
							disabled: props.disabled,
							"activator-icon": "ellipsis",
							"data-testid": "agent-vector-stores-actions",
							onSelect: ($event) => onAction($event, vectorStore)
						}, null, 8, [
							"items",
							"disabled",
							"onSelect"
						])], 2)
					], 2);
				}), 128))])]),
				_: 1
			})], 2)) : (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 1,
				icon: {
					type: "icon",
					value: "database"
				},
				heading: unref(i18n).baseText("agents.builder.vectorStores.panel.empty.title"),
				description: unref(i18n).baseText("agents.builder.vectorStores.panel.empty.description"),
				"button-text": unref(i18n).baseText("agents.builder.vectorStores.panel.connectButton"),
				"button-disabled": props.disabled,
				"data-testid": "agent-vector-stores-empty",
				"onClick:button": _cache[2] || (_cache[2] = ($event) => emit("connect"))
			}, null, 8, [
				"heading",
				"description",
				"button-text",
				"button-disabled"
			]))], 2);
		};
	}
});
var AgentVectorStoresPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1oqq9_125",
	toolbar: "_toolbar_1oqq9_132",
	title: "_title_1oqq9_140",
	titleIcon: "_titleIcon_1oqq9_150",
	tableContainer: "_tableContainer_1oqq9_154",
	titleCell: "_titleCell_1oqq9_161",
	rowTitle: "_rowTitle_1oqq9_166",
	rowIcon: "_rowIcon_1oqq9_173",
	rowName: "_rowName_1oqq9_178",
	locatorCell: "_locatorCell_1oqq9_190",
	useWhenCell: "_useWhenCell_1oqq9_191",
	actionCell: "_actionCell_1oqq9_201",
	row: "_row_1oqq9_166"
};
var AgentVectorStoresPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentVectorStoresPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentVectorStoresPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentMemoryPanel.vue?vue&type=script&setup=true&lang.ts
var AgentMemoryPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMemoryPanel",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		},
		embedded: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const { ensureLoaded, getModelsForPicker, isLoading } = useModelCatalog();
		const projectId = useAgentProjectId();
		const { credentialsByProvider, selectCredential } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectId);
		const episodicMemory = computed(() => props.config?.memory?.episodicMemory ?? null);
		const episodicMemoryEnabled = computed(() => episodicMemory.value?.enabled === true);
		const isManagedEpisodicMemory = computed(() => episodicMemory.value?.enabled && episodicMemory.value.credential === "managed");
		const episodicMemoryCredential = computed(() => episodicMemory.value?.enabled === true ? episodicMemory.value.credential : null);
		const isManagedEpisodicMemoryCredential = computed(() => episodicMemoryCredential.value === MANAGED_CREDENTIAL_TOKEN);
		const configuredMemoryModel = computed(() => {
			if (episodicMemory.value?.enabled !== true) return null;
			return episodicMemory.value.reflectorModel?.model ?? episodicMemory.value.extractorModel?.model ?? props.config?.memory?.observationalMemory?.reflectorModel?.model ?? props.config?.memory?.observationalMemory?.observerModel?.model ?? null;
		});
		const selectedMemoryModel = ref(configuredMemoryModel.value);
		watch(projectId, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		watch(configuredMemoryModel, (model) => {
			selectedMemoryModel.value = model;
		});
		const filteredAgents = computed(() => getModelsForPicker(credentialsByProvider.value));
		const selectedAgent = computed(() => {
			const modelStr = selectedMemoryModel.value ?? modelToString(props.config?.model);
			if (!modelStr) return null;
			const parsed = parseModelString(modelStr);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return null;
			const registryEntry = filteredAgents.value[parsed.provider]?.models.find((model) => model.model === parsed.name);
			if (registryEntry) return registryEntry;
			return {
				provider: parsed.provider,
				model: parsed.name,
				name: parsed.name,
				description: null,
				createdAt: null,
				metadata: {
					functionCalling: false,
					available: true
				}
			};
		});
		function buildEnabledMemoryConfig() {
			return {
				...props.config?.memory,
				enabled: true,
				storage: "n8n"
			};
		}
		function enableEpisodicMemory(credentialId) {
			const existingEpisodicMemory = (props.config?.memory)?.episodicMemory;
			emit("update:config", { memory: {
				...buildEnabledMemoryConfig(),
				episodicMemory: {
					...existingEpisodicMemory?.enabled === true ? existingEpisodicMemory : {},
					enabled: true,
					credential: credentialId
				}
			} });
		}
		function disableEpisodicMemory() {
			emit("update:config", { memory: {
				...buildEnabledMemoryConfig(),
				episodicMemory: { enabled: false }
			} });
		}
		function onMemoryRecallModelChange(selection) {
			const credentialId = credentialsByProvider.value?.[selection.provider] ?? "";
			if (!credentialId) return;
			const model = `${selection.provider}/${sanitizeModelId(selection.provider, selection.model)}`;
			selectedMemoryModel.value = model;
			const workerModel = {
				model,
				credential: credentialId
			};
			const existingMemory = props.config?.memory;
			const existingEpisodicMemory = existingMemory?.episodicMemory;
			if (existingEpisodicMemory?.enabled !== true) return;
			emit("update:config", { memory: {
				...buildEnabledMemoryConfig(),
				observationalMemory: {
					...existingMemory?.observationalMemory,
					observerModel: workerModel,
					reflectorModel: workerModel
				},
				episodicMemory: {
					...existingEpisodicMemory,
					extractorModel: workerModel,
					reflectorModel: workerModel
				}
			} });
		}
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
		}
		function openEpisodicMemoryCredentialModal() {
			uiStore.openModalWithData({
				name: AGENT_EPISODIC_MEMORY_CREDENTIAL_MODAL_KEY,
				data: {
					credentialType: AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE,
					displayName: "OpenAI",
					initialValue: isManagedEpisodicMemoryCredential.value ? null : episodicMemoryCredential.value,
					title: i18n.baseText("agents.builder.episodicMemoryCredentialModal.title"),
					description: i18n.baseText("agents.builder.episodicMemoryCredentialModal.description"),
					cancelLabel: i18n.baseText("generic.cancel"),
					confirmLabel: i18n.baseText("generic.connect"),
					showDelete: false,
					hideCreateNew: true,
					source: "agent_episodic_memory",
					pickerDataTestId: "agent-episodic-memory-credential-picker",
					onSelect: (credentialId) => {
						if (credentialId) enableEpisodicMemory(credentialId);
					}
				}
			});
		}
		function onEpisodicMemoryToggle(enabled) {
			if (!enabled) {
				disableEpisodicMemory();
				return;
			}
			if (settingsStore.isAiAssistantEnabled) {
				enableEpisodicMemory(MANAGED_CREDENTIAL_TOKEN);
				return;
			}
			openEpisodicMemoryCredentialModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, props.disabled && _ctx.$style.disabled]) }, [episodicMemoryEnabled.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.row)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [createVNode(unref(N8nText_default), {
				step: "sm",
				bold: "",
				class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.recallModel.label")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "small",
				class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.recallModel.hint")), 1)]),
				_: 1
			}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.modelSelector) }, [createVNode(AgentModelSelector_default, {
				"selected-model": selectedAgent.value,
				credentials: unref(credentialsByProvider),
				"models-by-provider": filteredAgents.value,
				"is-loading": unref(isLoading),
				"project-id": unref(projectId),
				"warn-missing-credentials": true,
				"data-testid": "agent-memory-recall-model-selector",
				onChange: onMemoryRecallModelChange,
				onSelectCredential
			}, null, 8, [
				"selected-model",
				"credentials",
				"models-by-provider",
				"is-loading",
				"project-id"
			])], 2)], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [createVNode(unref(N8nText_default), {
				step: "sm",
				bold: "",
				class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.label")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "small",
				class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.hint")), 1)]),
				_: 1
			}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nTooltip_default), null, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.changeCredential")), 1)]),
				default: withCtx(() => [episodicMemoryEnabled.value && !isManagedEpisodicMemory.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					variant: "ghost",
					size: "small",
					"icon-size": "medium",
					icon: "cog",
					disabled: props.disabled,
					"data-testid": "agent-episodic-memory-change-credential",
					onClick: openEpisodicMemoryCredentialModal
				}, null, 8, ["disabled"])) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(unref(N8nSwitch_default), {
				"model-value": episodicMemoryEnabled.value,
				disabled: props.disabled,
				"data-testid": "agent-episodic-memory-toggle",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => onEpisodicMemoryToggle(Boolean(value)))
			}, null, 8, ["model-value", "disabled"])], 2)], 2)], 2);
		};
	}
});
var AgentMemoryPanel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ctvy_2",
	titleGroup: "_titleGroup_1ctvy_13",
	header: "_header_1ctvy_26",
	row: "_row_1ctvy_33",
	actions: "_actions_1ctvy_41",
	modelSelector: "_modelSelector_1ctvy_51",
	disabled: "_disabled_1ctvy_59",
	inlineInput: "_inlineInput_1ctvy_63",
	divider: "_divider_1ctvy_80"
};
var AgentMemoryPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMemoryPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMemoryPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSubAgentsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-disabled"];
var _hoisted_2 = ["data-testid"];
var AgentSubAgentsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSubAgentsPanel",
	props: {
		config: {},
		disabled: { type: Boolean },
		projectId: {},
		agentId: {}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		const DIFFICULTY_LABEL_KEYS = {
			low: "agents.builder.subAgents.modelsByDifficulty.low.label",
			medium: "agents.builder.subAgents.modelsByDifficulty.medium.label",
			high: "agents.builder.subAgents.modelsByDifficulty.high.label"
		};
		const DIFFICULTY_DESCRIPTION_KEYS = {
			low: "agents.builder.subAgents.modelsByDifficulty.low.description",
			medium: "agents.builder.subAgents.modelsByDifficulty.medium.description",
			high: "agents.builder.subAgents.modelsByDifficulty.high.description"
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const usersStore = useUsersStore();
		const { ensureLoaded, getModelsForPicker, isLoading } = useModelCatalog();
		const projectIdRef = computed(() => props.projectId);
		const { credentialsByProvider } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectIdRef);
		const maxChildrenHintInterpolate = {
			min: String(1),
			max: String(20)
		};
		watch(projectIdRef, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		const filteredModels = computed(() => getModelsForPicker(credentialsByProvider.value));
		function resolveMaxChildrenDisplay(value) {
			return value ?? 10;
		}
		const maxChildrenModelValue = ref(resolveMaxChildrenDisplay(props.config?.subAgents?.maxChildren));
		watch(() => props.config?.subAgents?.maxChildren, (value) => {
			maxChildrenModelValue.value = resolveMaxChildrenDisplay(value);
		});
		function onMaxChildrenChange(n) {
			if (props.disabled) return;
			const subAgents = { ...props.config?.subAgents ?? {} };
			if (isNaN(n)) {
				delete subAgents.maxChildren;
				maxChildrenModelValue.value = 10;
			} else {
				subAgents.maxChildren = n;
				maxChildrenModelValue.value = n;
			}
			emit("update:config", { subAgents });
		}
		function credentialsForDifficulty(difficulty) {
			const global = credentialsByProvider.value;
			const mapping = props.config?.subAgents?.modelsByDifficulty?.[difficulty];
			if (!mapping?.model) return global;
			const parsed = parseModelString(mapping.model);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return global;
			return {
				...global ?? {},
				[parsed.provider]: mapping.credential
			};
		}
		function selectedModelForDifficulty(difficulty) {
			const mapping = props.config?.subAgents?.modelsByDifficulty?.[difficulty];
			if (!mapping?.model) return null;
			const parsed = parseModelString(mapping.model);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return null;
			const registryEntry = filteredModels.value[parsed.provider]?.models.find((model) => model.model === parsed.name);
			if (registryEntry) return registryEntry;
			return {
				provider: parsed.provider,
				model: parsed.name,
				name: parsed.name,
				description: null,
				createdAt: null,
				metadata: {
					functionCalling: false,
					available: true
				}
			};
		}
		function hasDifficultyMapping(difficulty) {
			return Boolean(props.config?.subAgents?.modelsByDifficulty?.[difficulty]);
		}
		const hasAnyDifficultyMapping = computed(() => SUB_AGENT_TASK_DIFFICULTIES.some((difficulty) => hasDifficultyMapping(difficulty)));
		const customModelRoutingEnabled = ref(hasAnyDifficultyMapping.value);
		watch(() => props.agentId, () => {
			customModelRoutingEnabled.value = false;
		}, { flush: "sync" });
		watch(() => props.config?.subAgents?.modelsByDifficulty, () => {
			if (hasAnyDifficultyMapping.value) customModelRoutingEnabled.value = true;
		}, {
			deep: true,
			immediate: true
		});
		function emitModelsByDifficulty(difficulty, mapping) {
			const existing = { ...props.config?.subAgents?.modelsByDifficulty ?? {} };
			if (mapping) existing[difficulty] = mapping;
			else delete existing[difficulty];
			const subAgents = { ...props.config?.subAgents ?? {} };
			if (Object.keys(existing).length > 0) subAgents.modelsByDifficulty = existing;
			else delete subAgents.modelsByDifficulty;
			emit("update:config", { subAgents });
		}
		function onCustomModelRoutingToggle(enabled) {
			if (props.disabled) return;
			customModelRoutingEnabled.value = enabled;
			if (enabled) return;
			const subAgents = { ...props.config?.subAgents ?? {} };
			delete subAgents.modelsByDifficulty;
			emit("update:config", { subAgents });
		}
		function onDifficultyModelChange(difficulty, selection) {
			if (props.disabled) return;
			const credentialId = credentialsForDifficulty(difficulty)?.[selection.provider];
			if (!credentialId) {
				toast.showError(new Error(i18n.baseText("credentials.noResults")), i18n.baseText("error"));
				return;
			}
			emitModelsByDifficulty(difficulty, {
				model: `${selection.provider}/${sanitizeModelId(selection.provider, selection.model)}`,
				credential: credentialId
			});
		}
		function onDifficultySelectCredential(difficulty, provider, credentialId) {
			if (props.disabled) return;
			const mapping = props.config?.subAgents?.modelsByDifficulty?.[difficulty];
			if (!mapping?.model || !credentialId) return;
			if (parseModelString(mapping.model)?.provider !== provider) return;
			emitModelsByDifficulty(difficulty, {
				...mapping,
				credential: credentialId
			});
		}
		function clearDifficultyMapping(difficulty) {
			if (props.disabled) return;
			emitModelsByDifficulty(difficulty, void 0);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.subAgentsPanel, __props.disabled && _ctx.$style.disabled]),
				"aria-disabled": __props.disabled
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.maxChildren.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.maxChildren.hint", { interpolate: maxChildrenHintInterpolate })), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(InputNumber_default), {
					"model-value": maxChildrenModelValue.value,
					min: unref(1),
					max: unref(20),
					precision: 0,
					disabled: __props.disabled,
					class: normalizeClass(_ctx.$style.shortInput),
					"data-testid": "agent-sub-agents-max-children-input",
					"onUpdate:modelValue": onMaxChildrenChange
				}, null, 8, [
					"model-value",
					"min",
					"max",
					"disabled",
					"class"
				])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingLabel) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.customModelRouting.label")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.customModelRouting.hint")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(Switch_default), {
					"model-value": customModelRoutingEnabled.value,
					disabled: __props.disabled,
					"data-testid": "agent-sub-agents-custom-model-routing-toggle",
					"onUpdate:modelValue": onCustomModelRoutingToggle
				}, null, 8, ["model-value", "disabled"])], 2),
				customModelRoutingEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.inlineModelsSection),
					"data-testid": "agent-sub-agents-inline-models"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.difficultyRows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(SUB_AGENT_TASK_DIFFICULTIES), (difficulty) => {
					return openBlock(), createElementBlock("div", {
						key: difficulty,
						class: normalizeClass(_ctx.$style.difficultyRow),
						"data-testid": `agent-sub-agents-difficulty-row-${difficulty}`
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.difficultyLabel) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(DIFFICULTY_LABEL_KEYS[difficulty])), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(unref(agent_panel_module_default).dataEntrySubLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(DIFFICULTY_DESCRIPTION_KEYS[difficulty])), 1)]),
						_: 2
					}, 1032, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.difficultyControls) }, [createVNode(AgentModelSelector_default, {
						"selected-model": selectedModelForDifficulty(difficulty),
						credentials: credentialsForDifficulty(difficulty),
						"models-by-provider": filteredModels.value,
						"is-loading": unref(isLoading),
						"project-id": __props.projectId,
						"warn-missing-credentials": true,
						disabled: __props.disabled,
						"data-testid": `agent-sub-agents-difficulty-${difficulty}-model`,
						onChange: (selection) => onDifficultyModelChange(difficulty, selection),
						onSelectCredential: (provider, credentialId) => onDifficultySelectCredential(difficulty, provider, credentialId)
					}, null, 8, [
						"selected-model",
						"credentials",
						"models-by-provider",
						"is-loading",
						"project-id",
						"disabled",
						"data-testid",
						"onChange",
						"onSelectCredential"
					]), hasDifficultyMapping(difficulty) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("agents.builder.subAgents.modelsByDifficulty.clear"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "mini",
							"icon-size": "small",
							disabled: __props.disabled,
							"aria-label": unref(i18n).baseText("agents.builder.subAgents.modelsByDifficulty.clear"),
							"data-testid": `agent-sub-agents-difficulty-${difficulty}-clear`,
							onClick: ($event) => clearDifficultyMapping(difficulty)
						}, null, 8, [
							"disabled",
							"aria-label",
							"data-testid",
							"onClick"
						])]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)], 2)], 10, _hoisted_2);
				}), 128))], 2)], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1$1);
		};
	}
});
var AgentSubAgentsPanel_vue_vue_type_style_index_0_lang_module_default = {
	subAgentsPanel: "_subAgentsPanel_g0cdi_125",
	disabled: "_disabled_g0cdi_132",
	settingRow: "_settingRow_g0cdi_137",
	settingLabel: "_settingLabel_g0cdi_146",
	shortInput: "_shortInput_g0cdi_154",
	inlineModelsSection: "_inlineModelsSection_g0cdi_159",
	difficultyRows: "_difficultyRows_g0cdi_166",
	difficultyRow: "_difficultyRow_g0cdi_166",
	difficultyLabel: "_difficultyLabel_g0cdi_182",
	difficultyControls: "_difficultyControls_g0cdi_190"
};
var AgentSubAgentsPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSubAgentsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSubAgentsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
var AgentBuilderTabPanel_vue_vue_type_style_index_0_lang_module_default = { tabPanel: "_tabPanel_1p7tm_125" };
//#endregion
//#region src/features/agents/components/AgentBuilderTabPanel.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.tabPanel) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var AgentBuilderTabPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": AgentBuilderTabPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderEditorColumn.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var AgentBuilderEditorColumn_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderEditorColumn",
	props: {
		activeMainTab: {},
		mainTabOptions: {},
		localConfig: {},
		agent: {},
		projectId: {},
		agentId: {},
		agentFiles: {},
		agentFilesLoading: { type: Boolean },
		agentFilesUploading: { type: Boolean },
		knowledgeBaseEnabled: { type: Boolean },
		deletingAgentFileId: {},
		appliedSkills: {},
		connectedTriggers: {},
		isBuildChatStreaming: { type: Boolean },
		canEditAgent: { type: Boolean },
		executionsDescription: {},
		tasksReloadKey: {},
		artifactMode: { type: Boolean }
	},
	emits: [
		"update:activeMainTab",
		"update:config",
		"open-tool",
		"open-skill",
		"add-tool",
		"add-skill",
		"remove-tool",
		"remove-skill",
		"upload-files",
		"delete-file",
		"add-vector-store",
		"edit-vector-store",
		"remove-vector-store",
		"update:connected-triggers",
		"trigger-added",
		"toggle-task",
		"tasks-changed",
		"agent-changed"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const childrenDisabled = computed(() => props.isBuildChatStreaming || !props.canEditAgent);
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.editorColumn),
				"aria-label": unref(i18n).baseText("agents.builder.editorColumn.ariaLabel"),
				"data-testid": "agent-builder-editor-column"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panelArea) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.identityHeaderRow),
					"data-testid": "agent-builder-identity-header"
				}, [createVNode(AgentIdentityHeader_default, {
					config: __props.localConfig,
					disabled: childrenDisabled.value,
					class: normalizeClass(_ctx.$style.identityHeader),
					"onUpdate:config": _cache[0] || (_cache[0] = ($event) => emit("update:config", $event))
				}, null, 8, [
					"config",
					"disabled",
					"class"
				])], 2),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.tabsRow),
					"data-testid": "agent-tabs-row"
				}, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.tabsRule),
					"data-testid": "agent-tabs-rule"
				}, [createVNode(unref(N8nTabs_default), {
					"model-value": __props.activeMainTab,
					options: __props.mainTabOptions,
					class: normalizeClass(_ctx.$style.mainTabs),
					"data-testid": "agent-header-tabs",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:activeMainTab", $event))
				}, null, 8, [
					"model-value",
					"options",
					"class"
				])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panelAreaContainer) }, [__props.activeMainTab === "agent" ? (openBlock(), createBlock(AgentBuilderTabPanel_default, {
					key: 0,
					"data-testid": "agent-tab-content"
				}, {
					default: withCtx(() => [
						createVNode(AgentCapabilitiesSection_default, {
							config: __props.localConfig,
							tools: __props.localConfig?.tools ?? [],
							"custom-tools": __props.agent?.tools ?? {},
							skills: __props.appliedSkills,
							"connected-triggers": __props.connectedTriggers,
							disabled: childrenDisabled.value,
							"project-id": __props.projectId,
							"agent-id": __props.agentId,
							"is-published": Boolean(__props.agent?.activeVersionId),
							"task-refs": __props.localConfig?.tasks ?? [],
							"reload-key": __props.tasksReloadKey,
							"simple-channel-setup": __props.artifactMode,
							onOpenTool: _cache[2] || (_cache[2] = ($event) => emit("open-tool", $event)),
							onOpenSkill: _cache[3] || (_cache[3] = ($event) => emit("open-skill", $event)),
							onAddTool: _cache[4] || (_cache[4] = ($event) => emit("add-tool")),
							onAddSkill: _cache[5] || (_cache[5] = ($event) => emit("add-skill")),
							"onUpdate:config": _cache[6] || (_cache[6] = ($event) => emit("update:config", $event)),
							onRemoveTool: _cache[7] || (_cache[7] = ($event) => emit("remove-tool", $event)),
							onRemoveSkill: _cache[8] || (_cache[8] = ($event) => emit("remove-skill", $event)),
							"onUpdate:connectedTriggers": _cache[9] || (_cache[9] = ($event) => emit("update:connected-triggers", $event)),
							onTriggerAdded: _cache[10] || (_cache[10] = ($event) => emit("trigger-added", $event)),
							onToggleTask: _cache[11] || (_cache[11] = ($event) => emit("toggle-task", $event)),
							onTasksChanged: _cache[12] || (_cache[12] = ($event) => emit("tasks-changed")),
							onAgentChanged: _cache[13] || (_cache[13] = ($event) => emit("agent-changed"))
						}, null, 8, [
							"config",
							"tools",
							"custom-tools",
							"skills",
							"connected-triggers",
							"disabled",
							"project-id",
							"agent-id",
							"is-published",
							"task-refs",
							"reload-key",
							"simple-channel-setup"
						]),
						createVNode(AgentInfoPanel_default, {
							config: __props.localConfig,
							disabled: childrenDisabled.value,
							"project-id": __props.projectId,
							"show-instructions": false,
							embedded: "",
							"onUpdate:config": _cache[14] || (_cache[14] = ($event) => emit("update:config", $event))
						}, null, 8, [
							"config",
							"disabled",
							"project-id"
						]),
						createVNode(AgentInfoPanel_default, {
							config: __props.localConfig,
							disabled: childrenDisabled.value,
							"project-id": __props.projectId,
							"show-model": false,
							"show-instructions-toolbar": true,
							embedded: "",
							"onUpdate:config": _cache[15] || (_cache[15] = ($event) => emit("update:config", $event))
						}, null, 8, [
							"config",
							"disabled",
							"project-id"
						])
					]),
					_: 1
				})) : __props.activeMainTab === "knowledge" && __props.knowledgeBaseEnabled ? (openBlock(), createBlock(AgentBuilderTabPanel_default, {
					key: 1,
					"data-testid": "agent-knowledge-tab-content"
				}, {
					default: withCtx(() => [createVNode(AgentFilesPanel_default, {
						files: __props.agentFiles,
						disabled: childrenDisabled.value,
						loading: __props.agentFilesLoading,
						uploading: __props.agentFilesUploading,
						"deleting-file-id": __props.deletingAgentFileId,
						"is-published": Boolean(__props.agent?.activeVersionId),
						"data-testid": "agent-files-card",
						onUploadFiles: _cache[16] || (_cache[16] = ($event) => emit("upload-files", $event)),
						onDeleteFile: _cache[17] || (_cache[17] = ($event) => emit("delete-file", $event))
					}, null, 8, [
						"files",
						"disabled",
						"loading",
						"uploading",
						"deleting-file-id",
						"is-published"
					]), createVNode(AgentVectorStoresPanel_default, {
						"vector-stores": __props.localConfig?.vectorStores ?? [],
						disabled: childrenDisabled.value,
						"data-testid": "agent-vector-stores-card",
						onConnect: _cache[18] || (_cache[18] = ($event) => emit("add-vector-store")),
						onEdit: _cache[19] || (_cache[19] = ($event) => emit("edit-vector-store", $event)),
						onRemove: _cache[20] || (_cache[20] = ($event) => emit("remove-vector-store", $event))
					}, null, 8, ["vector-stores", "disabled"])]),
					_: 1
				})) : __props.activeMainTab === "sessions" ? (openBlock(), createBlock(AgentBuilderTabPanel_default, {
					key: 2,
					"data-testid": "agent-sessions-tab-content"
				}, {
					default: withCtx(() => [createVNode(AgentSessionsListView_default, {
						embedded: true,
						"project-id": __props.projectId,
						"agent-id": __props.agentId,
						"open-session-in-new-tab": __props.artifactMode,
						"data-testid": "agent-executions-panel"
					}, null, 8, [
						"project-id",
						"agent-id",
						"open-session-in-new-tab"
					])]),
					_: 1
				})) : __props.activeMainTab === "settings" ? (openBlock(), createBlock(AgentBuilderTabPanel_default, {
					key: 3,
					"data-testid": "agent-settings-tab-content"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsCards) }, [
						createVNode(unref(N8nCard_default), {
							class: normalizeClass(_ctx.$style.settingsCard),
							"data-testid": "agent-settings-card"
						}, {
							default: withCtx(() => [createVNode(AgentSubAgentsPanel_default, {
								config: __props.localConfig,
								disabled: childrenDisabled.value,
								"project-id": __props.projectId,
								"agent-id": __props.agentId,
								"onUpdate:config": _cache[21] || (_cache[21] = ($event) => emit("update:config", $event))
							}, null, 8, [
								"config",
								"disabled",
								"project-id",
								"agent-id"
							])]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nCard_default), {
							class: normalizeClass(_ctx.$style.settingsCard),
							"data-testid": "agent-settings-card"
						}, {
							default: withCtx(() => [createVNode(AgentMemoryPanel_default, {
								config: __props.localConfig,
								disabled: childrenDisabled.value,
								embedded: "",
								"data-testid": "agent-memory-panel",
								"onUpdate:config": _cache[22] || (_cache[22] = ($event) => emit("update:config", $event))
							}, null, 8, ["config", "disabled"])]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nCard_default), {
							class: normalizeClass(_ctx.$style.settingsCard),
							"data-testid": "agent-settings-card"
						}, {
							default: withCtx(() => [createVNode(AgentAdvancedPanel_default, {
								config: __props.localConfig,
								disabled: childrenDisabled.value,
								collapsible: "",
								"onUpdate:config": _cache[23] || (_cache[23] = ($event) => emit("update:config", $event))
							}, null, 8, ["config", "disabled"])]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					_: 1
				})) : createCommentVNode("", true)], 2)
			], 2)], 10, _hoisted_1);
		};
	}
});
var AgentBuilderEditorColumn_vue_vue_type_style_index_0_lang_module_default = {
	editorColumn: "_editorColumn_bqehi_125",
	panelArea: "_panelArea_bqehi_133",
	panelAreaContainer: "_panelAreaContainer_bqehi_148",
	settingsCards: "_settingsCards_bqehi_161",
	settingsCard: "_settingsCard_bqehi_161",
	identityHeaderRow: "_identityHeaderRow_bqehi_174",
	identityHeader: "_identityHeader_bqehi_174",
	tabsRow: "_tabsRow_bqehi_189",
	tabsRule: "_tabsRule_bqehi_197",
	mainTabs: "_mainTabs_bqehi_205"
};
var AgentBuilderEditorColumn_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderEditorColumn_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderEditorColumn_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=script&setup=true&lang.ts
var AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewChatPage",
	props: {
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		effectiveSessionId: {},
		initialPrompt: {}
	},
	emits: [
		"config-updated",
		"continue-loaded",
		"open-build"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const inputDraft = ref("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("main", {
				class: normalizeClass(_ctx.$style.previewPage),
				"data-testid": "agent-preview-chat-page"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatFrame) }, [__props.initialized && __props.effectiveSessionId ? (openBlock(), createBlock(AgentChatPanel_default, {
				key: `preview-${__props.effectiveSessionId}`,
				"input-draft": inputDraft.value,
				"onUpdate:inputDraft": _cache[0] || (_cache[0] = ($event) => inputDraft.value = $event),
				"project-id": __props.projectId,
				"agent-id": __props.agentId,
				mode: "inline",
				endpoint: "chat",
				"initial-message": __props.initialPrompt,
				"continue-session-id": __props.effectiveSessionId,
				"agent-config": __props.localConfig,
				"agent-status": unref(deriveAgentStatus)(__props.agent),
				"connected-triggers": __props.connectedTriggers,
				onConfigUpdated: _cache[1] || (_cache[1] = ($event) => emit("config-updated")),
				onContinueLoaded: _cache[2] || (_cache[2] = ($event) => emit("continue-loaded", $event)),
				onOpenBuild: _cache[3] || (_cache[3] = ($event) => emit("open-build"))
			}, null, 8, [
				"input-draft",
				"project-id",
				"agent-id",
				"initial-message",
				"continue-session-id",
				"agent-config",
				"agent-status",
				"connected-triggers"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default = {
	previewPage: "_previewPage_3tn0g_125",
	chatFrame: "_chatFrame_3tn0g_134"
};
var AgentPreviewChatPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentVersionHistory.ts
var PAGE_SIZE = 20;
/**
* Owns the version-history list state (items, pagination cursor, loading flags)
* and the two row actions — revert-to-version (with confirmation modal) and
* publish-this-version. Both actions refresh the list on success; the caller
* is responsible for refetching the agent so the editor reflects any draft
* changes from a revert.
*/
function useAgentVersionHistory() {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showMessage, showError } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const items = ref([]);
	const isLoading = ref(false);
	const isInitialLoad = ref(true);
	const hasMore = ref(true);
	const acting = ref(false);
	let requestToken = 0;
	async function refresh(projectId, agentId) {
		const token = ++requestToken;
		isLoading.value = true;
		try {
			const data = await listAgentVersions(rootStore.restApiContext, projectId, agentId, {
				take: PAGE_SIZE,
				skip: 0
			});
			if (token !== requestToken) return;
			items.value = data;
			hasMore.value = data.length === PAGE_SIZE;
		} catch (error) {
			if (token !== requestToken) return;
			showError(error, locale.baseText("agents.versionHistory.error.load"));
		} finally {
			if (token === requestToken) {
				isLoading.value = false;
				isInitialLoad.value = false;
			}
		}
	}
	async function fetchMore(projectId, agentId) {
		if (isLoading.value || !hasMore.value) return;
		const token = ++requestToken;
		isLoading.value = true;
		try {
			const data = await listAgentVersions(rootStore.restApiContext, projectId, agentId, {
				take: PAGE_SIZE,
				skip: items.value.length
			});
			if (token !== requestToken) return;
			items.value = [...items.value, ...data];
			hasMore.value = data.length === PAGE_SIZE;
		} catch (error) {
			if (token !== requestToken) return;
			showError(error, locale.baseText("agents.versionHistory.error.load"));
		} finally {
			if (token === requestToken) isLoading.value = false;
		}
	}
	async function revertToVersion(projectId, agentId, versionId) {
		if (acting.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.versionHistory.revert.modal.title"),
			description: locale.baseText("agents.versionHistory.revert.modal.description"),
			confirmButtonText: locale.baseText("agents.versionHistory.revert.modal.button.revert"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		acting.value = true;
		try {
			const updated = await revertAgentToVersion(rootStore.restApiContext, projectId, agentId, versionId);
			showMessage({
				title: locale.baseText("agents.versionHistory.revert.toast.title"),
				type: "success"
			});
			await refresh(projectId, agentId);
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.versionHistory.revert.error"));
			return null;
		} finally {
			acting.value = false;
		}
	}
	async function publishVersion(projectId, agentId, versionId) {
		if (acting.value) return null;
		acting.value = true;
		try {
			const updated = await publishAgent(rootStore.restApiContext, projectId, agentId, versionId);
			showMessage({
				title: locale.baseText("agents.versionHistory.publish.toast.title"),
				type: "success"
			});
			await refresh(projectId, agentId);
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.versionHistory.publish.error"));
			return null;
		} finally {
			acting.value = false;
		}
	}
	return {
		items,
		isLoading,
		isInitialLoad,
		hasMore,
		acting,
		pageSize: PAGE_SIZE,
		refresh,
		fetchMore,
		revertToVersion,
		publishVersion
	};
}
//#endregion
//#region src/features/agents/components/VersionHistory/AgentVersionStatusIndicator.vue?vue&type=script&setup=true&lang.ts
var AgentVersionStatusIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVersionStatusIndicator",
	props: { status: { default: "default" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass([_ctx.$style.indicator, _ctx.$style[`indicator-${__props.status}`]]) }, null, 2);
		};
	}
});
var AgentVersionStatusIndicator_vue_vue_type_style_index_0_lang_module_default = {
	indicator: "_indicator_3vxdo_125",
	"indicator-published": "_indicator-published_3vxdo_133",
	"indicator-default": "_indicator-default_3vxdo_137"
};
var AgentVersionStatusIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentVersionStatusIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentVersionStatusIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/VersionHistory/agentVersionHistory.utils.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
function generateVersionLabel(versionId) {
	return `Version ${versionId.substring(0, 8)}`;
}
function formatTimestamp(value) {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
	const [date, time] = (0, import_dateformat.default)(value, `${value.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
	return {
		date,
		time
	};
}
//#endregion
//#region src/features/agents/components/VersionHistory/AgentVersionListItem.vue?vue&type=script&setup=true&lang.ts
var AgentVersionListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVersionListItem",
	props: {
		item: {},
		actions: {}
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const versionLabel = computed(() => generateVersionLabel(props.item.versionId));
		const formattedCreatedAt = computed(() => {
			const { date, time } = formatTimestamp(props.item.createdAt);
			return i18n.baseText("agents.versionHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const status = computed(() => props.item.isActive ? "published" : "default");
		function onAction(value) {
			emit("action", {
				action: value,
				versionId: props.item.versionId
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", {
				class: normalizeClass(_ctx.$style.item),
				"data-test-id": "agent-version-history-list-item"
			}, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.timelineColumn) }, [createVNode(AgentVersionStatusIndicator_default, { status: status.value }, null, 8, ["status"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true,
					color: "text-dark",
					class: normalizeClass(_ctx.$style.mainLine)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(versionLabel.value) + " ", 1), __props.item.isActive ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" (" + toDisplayString(unref(i18n).baseText("agents.versionHistory.item.publishedBadge")) + ") ", 1)], 64)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.metaAuthor)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.item.author) + ", ", 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					tag: "time",
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.metaTime)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedCreatedAt.value), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				__props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.actions),
					actions: __props.actions,
					placement: "bottom-end",
					"data-test-id": "agent-version-history-item-actions",
					onAction,
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["class", "actions"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentVersionListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_1ulkg_125",
	timelineColumn: "_timelineColumn_1ulkg_139",
	content: "_content_1ulkg_147",
	mainRow: "_mainRow_1ulkg_154",
	mainLine: "_mainLine_1ulkg_160",
	metaRow: "_metaRow_1ulkg_166",
	metaAuthor: "_metaAuthor_1ulkg_173",
	metaTime: "_metaTime_1ulkg_180",
	actions: "_actions_1ulkg_184"
};
var AgentVersionListItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentVersionListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentVersionListItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/VersionHistory/AgentVersionList.vue?vue&type=script&setup=true&lang.ts
var AgentVersionList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVersionList",
	props: {
		items: {},
		actions: {},
		activeActions: {},
		hasMore: { type: Boolean },
		isInitialLoad: { type: Boolean },
		isLoading: { type: Boolean }
	},
	emits: ["action", "loadMore"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const listElement = ref(null);
		const loadMoreSentinel = ref(null);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listElement,
			threshold: .01,
			onIntersect: () => emit("loadMore")
		});
		watch([
			loadMoreSentinel,
			() => props.hasMore,
			() => props.items.length
		], ([sentinel, canLoadMore]) => {
			if (sentinel && canLoadMore) observeForLoadMore(sentinel);
		}, { immediate: true });
		const isEmpty = computed(() => !props.isInitialLoad && !props.isLoading && props.items.length === 0);
		function getActions(item) {
			return item.isActive ? props.activeActions : props.actions;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "listElement",
				ref: listElement,
				class: normalizeClass(_ctx.$style.list),
				"data-test-id": "agent-version-history-list"
			}, [__props.isInitialLoad ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: true,
				rows: 6,
				animated: ""
			})) : isEmpty.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty),
				"data-test-id": "agent-version-history-empty"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.versionHistory.empty")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock("ul", {
				key: 2,
				class: normalizeClass(_ctx.$style.items)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createBlock(AgentVersionListItem_default, {
					key: item.versionId,
					item,
					actions: getActions(item),
					onAction: _cache[0] || (_cache[0] = (value) => emit("action", value))
				}, null, 8, ["item", "actions"]);
			}), 128)), __props.hasMore ? (openBlock(), createElementBlock("li", {
				key: 0,
				ref_key: "loadMoreSentinel",
				ref: loadMoreSentinel,
				class: normalizeClass(_ctx.$style.sentinel),
				"data-test-id": "agent-version-history-sentinel"
			}, [__props.isLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: true,
				rows: 1,
				animated: ""
			})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2))], 2);
		};
	}
});
var AgentVersionList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_v5jvz_125",
	empty: "_empty_v5jvz_132",
	items: "_items_v5jvz_141",
	sentinel: "_sentinel_v5jvz_147"
};
var AgentVersionList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentVersionList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentVersionList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/VersionHistory/AgentVersionHistoryPanel.vue?vue&type=script&setup=true&lang.ts
var AgentVersionHistoryPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentVersionHistoryPanel",
	props: {
		projectId: {},
		agentId: {},
		hasUnpublishedChanges: { type: Boolean },
		agentName: {}
	},
	emits: [
		"close",
		"reverted",
		"published",
		"unpublished"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { items, isLoading, isInitialLoad, hasMore, refresh, fetchMore, revertToVersion, publishVersion } = useAgentVersionHistory();
		const { unpublish } = useAgentPublish();
		const { canUpdate, canPublish, canUnpublish } = useAgentPermissions(toRef(props, "projectId"));
		const actions = computed(() => {
			const result = [];
			if (canUpdate.value) result.push({
				label: i18n.baseText("agents.versionHistory.item.actions.revert"),
				value: "revert",
				disabled: false
			});
			if (canPublish.value) result.push({
				label: i18n.baseText("agents.versionHistory.item.actions.publish"),
				value: "publish",
				disabled: false
			});
			return result;
		});
		const activeActions = computed(() => {
			const result = [];
			if (canUpdate.value) result.push({
				label: i18n.baseText("agents.versionHistory.item.actions.revert"),
				value: "revert",
				disabled: !props.hasUnpublishedChanges
			});
			if (canUnpublish.value) result.push({
				label: i18n.baseText("agents.versionHistory.item.actions.unpublish"),
				value: "unpublish",
				disabled: false
			});
			return result;
		});
		onMounted(() => {
			refresh(props.projectId, props.agentId);
		});
		watch(() => [props.projectId, props.agentId], () => {
			refresh(props.projectId, props.agentId);
		});
		async function onAction({ action, versionId }) {
			if (action === "revert") {
				const result = await revertToVersion(props.projectId, props.agentId, versionId);
				if (result) emit("reverted", result);
			} else if (action === "publish") {
				const result = await publishVersion(props.projectId, props.agentId, versionId);
				if (result) emit("published", result);
			} else {
				const result = await unpublish(props.projectId, props.agentId, props.agentName);
				if (result) {
					await refresh(props.projectId, props.agentId);
					emit("unpublished", result);
				}
			}
		}
		function onLoadMore() {
			fetchMore(props.projectId, props.agentId);
		}
		function onClose() {
			emit("close");
		}
		__expose({ refresh: () => refresh(props.projectId, props.agentId) });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "agent-version-history-panel"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.versionHistory.title")), 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agents.versionHistory.close") }, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "medium",
					class: normalizeClass(_ctx.$style.closeButton),
					title: unref(i18n).baseText("agents.versionHistory.close"),
					"data-test-id": "agent-version-history-close",
					onClick: onClose
				}, null, 8, ["class", "title"])]),
				_: 1
			}, 8, ["content"])], 2), createVNode(AgentVersionList_default, {
				items: unref(items),
				actions: actions.value,
				"active-actions": activeActions.value,
				"has-more": unref(hasMore),
				"is-initial-load": unref(isInitialLoad),
				"is-loading": unref(isLoading),
				onAction,
				onLoadMore
			}, null, 8, [
				"items",
				"actions",
				"active-actions",
				"has-more",
				"is-initial-load",
				"is-loading"
			])], 2);
		};
	}
});
var AgentVersionHistoryPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1bic0_125",
	header: "_header_1bic0_135",
	closeButton: "_closeButton_1bic0_145"
};
var AgentVersionHistoryPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentVersionHistoryPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentVersionHistoryPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentBuilderView.vue?vue&type=script&setup=true&lang.ts
var AGENT_CHAT_PANEL_MIN_WIDTH = 320;
var AGENT_CHAT_PANEL_DEFAULT_WIDTH = 460;
var AGENT_CHAT_PANEL_MAX_WIDTH = 720;
var AGENT_EDITOR_MIN_WIDTH = 560;
var AgentBuilderView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderView",
	props: {
		artifactMode: {
			type: Boolean,
			default: false
		},
		artifactProjectId: { default: void 0 },
		artifactAgentId: { default: void 0 },
		artifactRefreshKey: { default: 0 }
	},
	setup(__props) {
		const props = __props;
		const route = useRoute();
		const router = useRouter();
		const locale = useI18n();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const telemetry = useTelemetry();
		const sessionsStore = useAgentSessionsStore();
		const credentialsStore = useCredentialsStore();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const favoritesStore = useFavoritesStore();
		const isKnowledgeBaseEnabled = computed(() => settingsStore.isAgentsKnowledgeBaseFeatureEnabled);
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		const { isBuilderConfigured, fetchStatus: fetchBuilderStatus } = useAgentBuilderStatus();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const isArtifactMode = computed(() => props.artifactMode);
		const isPreviewMode = computed(() => !isArtifactMode.value && route.name === "AgentPreviewView");
		const projectId = computed(() => (isArtifactMode.value ? props.artifactProjectId : void 0) ?? route.params.projectId ?? projectsStore.personalProject?.id ?? "");
		const agentId = computed(() => (isArtifactMode.value ? props.artifactAgentId : void 0) ?? route.params.agentId);
		const isFavorite = computed(() => favoritesStore.isFavorite(agentId.value, "agent"));
		const { canUpdate: canEditAgent, canDelete: canDeleteAgent } = useAgentPermissions(projectId);
		const isBuildChatStreaming = ref(false);
		const initialPrompt = ref();
		const isVersionHistoryOpen = ref(false);
		function onBuildChatStreamingChange(streaming) {
			isBuildChatStreaming.value = streaming;
		}
		/**
		* Gate for the main body render. Stays false while `initialize()` is running so
		* we don't:
		*   - flash the home screen for users who arrive with a `?prompt=…` query that
		*     will immediately transition them to the build chat, and
		*   - render the preview chat before the route/config/session state has settled.
		*/
		const initialized = ref(false);
		const pendingArtifactRefreshKey = ref();
		const agentName = ref("");
		const agent = ref(null);
		const agentFiles = ref([]);
		const agentFilesLoading = ref(false);
		const agentFilesUploading = ref(false);
		const deletingAgentFileId = ref(null);
		const lastKnowledgeSandboxWarmupKey = ref(null);
		watch(agentName, (name) => {
			documentTitle.set(name || locale.baseText("agents.heading"));
		});
		const { activeChatSessionId, continueSessionId, effectiveSessionId, currentSessionHasMessages, currentSessionTitle, sessionMenu, setSessionInUrl, clearContinueSessionParam, onSessionPick, onNewChat } = useAgentBuilderSession();
		const sessionOptions = computed(() => sessionMenu.value.map((item) => ({
			id: item.id,
			label: item.when ? `${item.label} · ${item.when}` : item.label ?? item.title,
			disabled: item.disabled
		})));
		const { config, fetchConfig, updateConfig } = useAgentConfig();
		const localConfig = ref(null);
		const connectedTriggers = ref([]);
		/** Bumped on builder config-updated so the Tasks panel reloads (e.g. after create_task). */
		const tasksReloadKey = ref(0);
		const builderContainer = useTemplateRef("builderContainer");
		const versionHistoryPanel = useTemplateRef("versionHistoryPanel");
		function shouldAutoExpandInitialBuild() {
			if (isArtifactMode.value) return false;
			return Boolean(route.query.prompt) && route.query.expandBuildChat === "true";
		}
		const shouldStartWithExpandedBuildChat = shouldAutoExpandInitialBuild();
		const isChatFullWidth = ref(shouldStartWithExpandedBuildChat);
		const isBuildChatHidden = ref(isArtifactMode.value || !shouldStartWithExpandedBuildChat);
		const shouldCollapseChatAfterInitialBuild = ref(shouldStartWithExpandedBuildChat);
		const { activeMainTab, mainTabOptions, executionsDescription } = useAgentBuilderMainTabs({
			executionsCount: computed(() => sessionsStore.threads.length),
			knowledgeBaseEnabled: isKnowledgeBaseEnabled,
			routeBacked: computed(() => !isArtifactMode.value)
		});
		const { ensureLoaded: ensureIntegrationsCatalog } = useAgentIntegrationsCatalog();
		const builderTelemetry = useAgentBuilderTelemetry({
			agentId,
			projectId,
			agent,
			localConfig,
			savedConfig: config,
			connectedTriggers
		});
		/**
		* The backend owns runnable validation so the chat entry point either opens
		* Preview or stays in the builder.
		*/
		const isBuilt = computed(() => agent.value?.isRunnable === true);
		function getMaxChatPanelWidth(containerWidth) {
			return Math.max(AGENT_CHAT_PANEL_MIN_WIDTH, Math.min(AGENT_CHAT_PANEL_MAX_WIDTH, containerWidth - AGENT_EDITOR_MIN_WIDTH));
		}
		const chatPanelResizer = useResizablePanel(LOCAL_STORAGE_AGENT_BUILDER_CHAT_PANEL_WIDTH, {
			container: builderContainer,
			defaultSize: (containerWidth) => Math.min(AGENT_CHAT_PANEL_DEFAULT_WIDTH, getMaxChatPanelWidth(containerWidth)),
			minSize: AGENT_CHAT_PANEL_MIN_WIDTH,
			maxSize: getMaxChatPanelWidth
		});
		const showBuilderLoading = computed(() => !initialized.value);
		watch(config, (c) => {
			if (c) {
				localConfig.value = deepCopy(c);
				syncAgentIdentityFromConfig(c);
			}
		}, { immediate: true });
		function syncAgentIdentityFromConfig(c) {
			agentName.value = c.name;
			favoritesStore.renameFavorite(agentId.value, "agent", c.name);
			if (!agent.value) return;
			agent.value = {
				...agent.value,
				name: c.name
			};
		}
		const projectName = computed(() => {
			if (projectsStore.personalProject?.id === projectId.value) return locale.baseText("projects.menu.personal");
			const current = projectsStore.currentProject;
			if (current && current.id === projectId.value) return current.name ?? null;
			return projectsStore.myProjects.find((p) => p.id === projectId.value)?.name ?? null;
		});
		const projectRoute = computed(() => ({
			name: PROJECT_AGENTS,
			params: { projectId: projectId.value }
		}));
		const agentRoute = computed(() => ({
			name: AGENT_BUILDER_VIEW,
			params: {
				projectId: projectId.value,
				agentId: agentId.value
			}
		}));
		const previewBreadcrumbItems = computed(() => [{
			id: projectId.value,
			label: projectName.value ?? locale.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}, {
			id: agentId.value,
			label: agent.value?.name ?? "…",
			href: router.resolve(agentRoute.value).href
		}]);
		function isStaleAgentTarget(targetProjectId, targetAgentId) {
			return projectId.value !== targetProjectId || agentId.value !== targetAgentId;
		}
		async function fetchAgent(targetProjectId = projectId.value, targetAgentId = agentId.value) {
			const data = await getAgent(rootStore.restApiContext, targetProjectId, targetAgentId);
			if (isStaleAgentTarget(targetProjectId, targetAgentId)) return;
			agent.value = data;
			agentName.value = data.name;
		}
		async function fetchAgentFiles(targetProjectId = projectId.value, targetAgentId = agentId.value) {
			if (!isKnowledgeBaseEnabled.value) return;
			agentFilesLoading.value = true;
			try {
				const files = await listAgentFiles(rootStore.restApiContext, targetProjectId, targetAgentId);
				if (isStaleAgentTarget(targetProjectId, targetAgentId)) return;
				agentFiles.value = files;
			} catch (error) {
				showError(error, locale.baseText("agents.builder.files.loadError"));
			} finally {
				if (!isStaleAgentTarget(targetProjectId, targetAgentId)) agentFilesLoading.value = false;
			}
		}
		async function onUploadAgentFiles(files) {
			if (files.length === 0 || !agent.value?.activeVersionId) return;
			const oversizedFiles = files.filter((file) => file.size > MAX_AGENT_FILE_SIZE_BYTES);
			if (oversizedFiles.length > 0) showError(new Error(locale.baseText("agents.builder.files.uploadFileTooLarge.message", { interpolate: {
				name: oversizedFiles[0].name,
				size: String(50)
			} })), locale.baseText("agents.builder.files.uploadFileTooLarge.title"));
			const filesWithinLimit = files.filter((file) => file.size <= MAX_AGENT_FILE_SIZE_BYTES);
			if (filesWithinLimit.length === 0) return;
			if (filesWithinLimit.length > 10) {
				showError(new Error(locale.baseText("agents.builder.files.uploadTooManyFiles.message", { interpolate: { max: String(10) } })), locale.baseText("agents.builder.files.uploadTooManyFiles.title"));
				return;
			}
			if (agentFiles.value.reduce((total, file) => total + file.fileSizeBytes, 0) + filesWithinLimit.reduce((total, file) => total + file.size, 0) > 1610612736) {
				showError(new Error(locale.baseText("agents.builder.files.uploadTotalTooLarge.message", { interpolate: { size: String(MAX_AGENT_KNOWLEDGE_BASE_SIZE_GB) } })), locale.baseText("agents.builder.files.uploadTotalTooLarge.title"));
				return;
			}
			const targetProjectId = projectId.value;
			const targetAgentId = agentId.value;
			agentFilesUploading.value = true;
			try {
				const uploadedFiles = await uploadAgentFiles(rootStore.restApiContext, targetProjectId, targetAgentId, filesWithinLimit);
				if (isStaleAgentTarget(targetProjectId, targetAgentId)) return;
				const existingById = new Map(agentFiles.value.map((file) => [file.id, file]));
				for (const file of uploadedFiles) existingById.set(file.id, file);
				agentFiles.value = Array.from(existingById.values()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
				showMessage({
					title: locale.baseText("agents.builder.files.uploaded"),
					type: "success"
				});
			} catch (error) {
				showError(error, locale.baseText("agents.builder.files.uploadError"));
			} finally {
				if (!isStaleAgentTarget(targetProjectId, targetAgentId)) agentFilesUploading.value = false;
			}
		}
		async function onDeleteAgentFile(file) {
			if (deletingAgentFileId.value !== null) return;
			if (await openAgentConfirmationModal({
				title: locale.baseText("agents.builder.files.deleteModal.title", { interpolate: { name: file.fileName } }),
				description: locale.baseText("agents.builder.files.deleteModal.description", { interpolate: { name: file.fileName } }),
				confirmButtonText: locale.baseText("agents.builder.files.deleteModal.button.delete"),
				cancelButtonText: locale.baseText("generic.cancel")
			}) !== "confirm") return;
			const targetProjectId = projectId.value;
			const targetAgentId = agentId.value;
			deletingAgentFileId.value = file.id;
			try {
				await deleteAgentFile(rootStore.restApiContext, targetProjectId, targetAgentId, file.id);
				if (isStaleAgentTarget(targetProjectId, targetAgentId)) return;
				agentFiles.value = agentFiles.value.filter((agentFile) => agentFile.id !== file.id);
				showMessage({
					title: locale.baseText("agents.builder.files.deleted"),
					type: "success"
				});
			} catch (error) {
				showError(error, locale.baseText("agents.builder.files.deleteError"));
			} finally {
				if (deletingAgentFileId.value === file.id) deletingAgentFileId.value = null;
			}
		}
		async function refreshAgentAfterIntegrationChange(targetProjectId = projectId.value, targetAgentId = agentId.value) {
			if (isStaleAgentTarget(targetProjectId, targetAgentId)) return;
			await Promise.all([fetchAgent(targetProjectId, targetAgentId), fetchConfig(targetProjectId, targetAgentId)]);
		}
		function sessionIdForPreview() {
			return effectiveSessionId.value ?? sessionsStore.threads?.[0]?.id ?? crypto.randomUUID();
		}
		async function openPreview(seedMessage, preferredSessionId) {
			const sessionId = preferredSessionId ?? sessionIdForPreview();
			activeChatSessionId.value = sessionId;
			if (seedMessage) initialPrompt.value = seedMessage;
			await router.push({
				name: AGENT_PREVIEW_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value
				},
				query: {
					...route.query,
					prompt: void 0,
					[CONTINUE_SESSION_ID_PARAM]: sessionId
				}
			});
			if (seedMessage) nextTick(() => {
				initialPrompt.value = void 0;
			});
		}
		async function onOpenPreview() {
			if (!isBuilt.value) return;
			try {
				await flushAutosave();
			} catch {
				return;
			}
			if (isArtifactMode.value) {
				window.open(router.resolve({
					name: AGENT_PREVIEW_VIEW,
					params: {
						projectId: projectId.value,
						agentId: agentId.value
					}
				}).href, "_blank");
				telemetry.track("User opened agent preview", { agent_id: agentId.value });
				return;
			}
			await openPreview();
			telemetry.track("User opened agent preview", { agent_id: agentId.value });
		}
		function closePreview() {
			const { [CONTINUE_SESSION_ID_PARAM]: _sessionId, prompt: _prompt, ...rest } = route.query;
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value
				},
				query: rest
			});
		}
		function startChat(msg) {
			if (continueSessionId.value) clearContinueSessionParam();
			if (isBuilt.value) {
				const sessionId = crypto.randomUUID();
				activeChatSessionId.value = sessionId;
				openPreview(msg, sessionId);
				telemetry.track("User started agent chat", { agent_id: agentId.value });
			} else {
				isBuildChatHidden.value = false;
				initialPrompt.value = msg;
				telemetry.track("User started agent build", { agent_id: agentId.value });
				nextTick(() => {
					initialPrompt.value = void 0;
				});
			}
		}
		function onPublished(updated) {
			agent.value = updated;
			versionHistoryPanel.value?.refresh();
			warmAgentKnowledgeSandboxForPage();
		}
		function onUnpublished(updated) {
			agent.value = updated;
			versionHistoryPanel.value?.refresh();
		}
		function onToggleVersionHistory() {
			const next = !isVersionHistoryOpen.value;
			if (next && isChatFullWidth.value) isChatFullWidth.value = false;
			isVersionHistoryOpen.value = next;
		}
		function onCloseVersionHistory() {
			isVersionHistoryOpen.value = false;
		}
		async function onReverted(updated) {
			agent.value = updated;
			agentName.value = updated.name;
			await fetchConfig(projectId.value, agentId.value);
			tasksReloadKey.value += 1;
			builderTelemetry.captureToolsBaseline();
			builderTelemetry.captureSkillsBaseline();
			builderTelemetry.captureTasksBaseline();
		}
		/**
		* Pick the session the preview chat should bind to when no explicit one has been
		* chosen yet. Prefer the most recent thread — users land back where they left
		* off — and only mint a fresh ephemeral session when there is no history.
		*/
		function bindPreviewSession() {
			if (continueSessionId.value || activeChatSessionId.value) return;
			const latest = sessionsStore.threads?.[0];
			if (latest) {
				setSessionInUrl(latest.id);
				return;
			}
			if (sessionsStore.loading) return;
			setSessionInUrl(crypto.randomUUID());
		}
		function warmAgentKnowledgeSandboxForPage() {
			if (!initialized.value || !isKnowledgeBaseEnabled.value || !agent.value?.activeVersionId) return;
			const targetProjectId = projectId.value;
			const targetAgentId = agentId.value;
			const warmupKey = `${targetProjectId}:${targetAgentId}`;
			if (lastKnowledgeSandboxWarmupKey.value === warmupKey) return;
			lastKnowledgeSandboxWarmupKey.value = warmupKey;
			warmAgentKnowledgeSandbox(rootStore.restApiContext, targetProjectId, targetAgentId).catch(() => {
				if (!isStaleAgentTarget(targetProjectId, targetAgentId)) lastKnowledgeSandboxWarmupKey.value = null;
			});
		}
		function onOpenBuildFromChat() {
			isBuildChatHidden.value = false;
			closePreview();
		}
		async function saveConfig(snapshot) {
			const result = await updateConfig(snapshot.projectId, snapshot.agentId, snapshot.config);
			agentsEventBus.emit("agentUpdated", {
				agentId: snapshot.agentId,
				source: "agent-builder"
			});
			if (result.stale) return;
			if (agent.value && agent.value.id === snapshot.agentId && result.versionId !== void 0) agent.value = {
				...agent.value,
				versionId: result.versionId
			};
			await fetchAgent(snapshot.projectId, snapshot.agentId);
		}
		async function saveSkill(snapshot) {
			const result = await updateAgentSkill(rootStore.restApiContext, snapshot.projectId, snapshot.agentId, snapshot.skillId, snapshot.skill);
			agentsEventBus.emit("agentUpdated", {
				agentId: snapshot.agentId,
				source: "agent-builder"
			});
			if (agent.value?.id !== snapshot.agentId) return;
			agent.value = {
				...agent.value,
				versionId: result.versionId,
				skills: {
					...agent.value.skills ?? {},
					[snapshot.skillId]: result.skill
				}
			};
		}
		const configAutosave = useAgentConfigAutosave({
			save: saveConfig,
			onSaved: () => {
				builderTelemetry.flushConfigEdits();
				builderTelemetry.trackToolsAdded();
				builderTelemetry.trackSkillsAdded();
				builderTelemetry.trackTasksChanged();
			},
			onError: (error) => {
				showError(error, locale.baseText("agents.builder.saveError"));
			}
		});
		const skillAutosave = useAgentConfigAutosave({
			save: saveSkill,
			onSaved: (snapshot) => {
				telemetry.track("User saved agent skill", {
					agent_id: snapshot.agentId,
					skill_id: snapshot.skillId
				});
			},
			onError: (error) => {
				showError(error, locale.baseText("agents.builder.skills.saveError"));
			}
		});
		const saveStatus = computed(() => {
			if (configAutosave.saveStatus.value === "saving" || skillAutosave.saveStatus.value === "saving") return "saving";
			if (configAutosave.saveStatus.value === "saved" || skillAutosave.saveStatus.value === "saved") return "saved";
			return "idle";
		});
		async function settleAutosave() {
			await Promise.all([configAutosave.settleAutosave(), skillAutosave.settleAutosave()]);
		}
		async function flushAutosave() {
			await Promise.all([configAutosave.flushAutosave(), skillAutosave.flushAutosave()]);
		}
		function normalizeAgentMemoryConfig(config) {
			return {
				...config,
				memory: {
					...config.memory,
					enabled: true,
					storage: "n8n"
				}
			};
		}
		function onConfigFieldUpdate(updates) {
			if (!localConfig.value) return;
			builderTelemetry.recordConfigEdit(updates);
			Object.assign(localConfig.value, updates);
			if (updates.name !== void 0) syncAgentIdentityFromConfig(localConfig.value);
			configAutosave.scheduleAutosave({
				projectId: projectId.value,
				agentId: agentId.value,
				type: "config",
				config: normalizeAgentMemoryConfig(deepCopy(localConfig.value))
			});
		}
		const caps = useAgentCapabilitiesActions({
			localConfig,
			agent,
			projectId,
			agentId,
			connectedTriggers,
			scheduleConfigUpdate: onConfigFieldUpdate,
			scheduleSkillSave: ({ skillId, skill }) => skillAutosave.scheduleAutosave({
				type: "skill",
				projectId: projectId.value,
				agentId: agentId.value,
				skillId,
				skill
			}),
			telemetry: {
				trackOpenedToolFromList: builderTelemetry.trackOpenedToolFromList,
				trackOpenedSkillFromList: builderTelemetry.trackOpenedSkillFromList,
				trackOpenedAddSkillModal: builderTelemetry.trackOpenedAddSkillModal,
				trackTriggerListChanged: builderTelemetry.trackTriggerListChanged,
				trackTriggerAdded: builderTelemetry.trackTriggerAdded
			}
		});
		const appliedSkills = caps.appliedSkills;
		function replaceConfigAndScheduleSave(nextConfig, recordEdit = true) {
			if (recordEdit) builderTelemetry.recordConfigEdit(nextConfig);
			localConfig.value = deepCopy(nextConfig);
			syncAgentIdentityFromConfig(localConfig.value);
			configAutosave.scheduleAutosave({
				projectId: projectId.value,
				agentId: agentId.value,
				type: "config",
				config: normalizeAgentMemoryConfig(deepCopy(localConfig.value))
			});
		}
		function persistMissingPersonalisationGradient() {
			if (!canEditAgent.value) return;
			if (!localConfig.value) return;
			const nextConfig = addMissingAgentPersonalisation(localConfig.value);
			if (!nextConfig) return;
			replaceConfigAndScheduleSave(nextConfig, false);
		}
		async function onConfigUpdated() {
			agentsEventBus.emit("agentUpdated", {
				agentId: agentId.value,
				source: "agent-builder"
			});
			await Promise.all([fetchAgent(), fetchConfig(projectId.value, agentId.value)]);
			const triggerTypes = (await ensureIntegrationsCatalog(projectId.value).catch(() => [])).map((i) => i.type);
			const connected = await builderTelemetry.fetchInitialTriggersBaseline(triggerTypes);
			if (connected) connectedTriggers.value = connected;
			tasksReloadKey.value += 1;
			builderTelemetry.trackToolsAdded();
			builderTelemetry.trackSkillsAdded();
			builderTelemetry.trackTasksChanged();
		}
		async function refreshArtifactShell() {
			await settleAutosave();
			await onConfigUpdated();
		}
		function handleArtifactRefreshError(error) {
			showError(error, locale.baseText("agents.builder.loadError"));
		}
		async function replayPendingArtifactRefresh() {
			if (!isArtifactMode.value || pendingArtifactRefreshKey.value === void 0) return;
			pendingArtifactRefreshKey.value = void 0;
			await refreshArtifactShell();
		}
		watch(() => props.artifactRefreshKey, async (refreshKey, previousRefreshKey) => {
			if (!isArtifactMode.value || refreshKey === previousRefreshKey) return;
			if (!initialized.value) {
				pendingArtifactRefreshKey.value = refreshKey;
				return;
			}
			pendingArtifactRefreshKey.value = void 0;
			try {
				await refreshArtifactShell();
			} catch (error) {
				handleArtifactRefreshError(error);
			}
		});
		function onBuildDone() {
			isBuildChatStreaming.value = false;
			if (!shouldCollapseChatAfterInitialBuild.value) return;
			isChatFullWidth.value = false;
			shouldCollapseChatAfterInitialBuild.value = false;
		}
		const headerActions = computed(() => {
			const actions = [{
				id: "export-json",
				label: locale.baseText("agents.builder.exportJson"),
				icon: "download"
			}];
			if (canEditAgent.value) actions.push({
				id: "import-json",
				label: locale.baseText("agents.builder.importJson"),
				icon: "upload"
			});
			if (agent.value) actions.push({
				id: "toggleFavorite",
				label: isFavorite.value === true ? locale.baseText("favorites.remove") : locale.baseText("favorites.add"),
				icon: isFavorite.value === true ? "star-filled" : "star"
			});
			if (canDeleteAgent.value) actions.push({
				id: "delete",
				label: locale.baseText("agents.builder.deleteAgent"),
				icon: "trash-2",
				divided: true
			});
			return actions;
		});
		async function exportAgentJson() {
			if (!localConfig.value) return;
			try {
				await flushAutosave();
			} catch {
				return;
			}
			if (!localConfig.value) return;
			const blob = new Blob([`${JSON.stringify(localConfig.value, null, 2)}\n`], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const name = localConfig.value.name.trim().replace(/[\\/:*?"<>|]+/g, "-") || "agent";
			const link = Object.assign(document.createElement("a"), {
				href: url,
				download: `${name}.json`
			});
			document.body.appendChild(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
		}
		function openImportJsonModal() {
			if (!canEditAgent.value) return;
			uiStore.openModalWithData({
				name: AGENT_JSON_IMPORT_MODAL_KEY,
				data: { onConfirm: replaceConfigAndScheduleSave }
			});
		}
		async function onHeaderAction(action) {
			if (action === "export-json") {
				await exportAgentJson();
				return;
			}
			if (action === "import-json") {
				openImportJsonModal();
				return;
			}
			if (action === "toggleFavorite") {
				await favoritesStore.toggleFavorite(agentId.value, "agent");
				return;
			}
			if (action === "delete") {
				if (await openAgentConfirmationModal({
					title: locale.baseText("agents.delete.modal.title", { interpolate: { name: agentName.value } }),
					description: locale.baseText("agents.delete.modal.description", { interpolate: { name: agentName.value } }),
					confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
					cancelButtonText: locale.baseText("generic.cancel")
				}) !== "confirm") return;
				await settleAutosave();
				const capturedProjectId = projectId.value;
				try {
					await deleteAgent(rootStore.restApiContext, capturedProjectId, agentId.value);
					removeProjectAgentFromListCache(capturedProjectId, agentId.value);
					favoritesStore.removeFavoriteLocally(agentId.value, "agent");
				} catch (error) {
					showError(error, "Could not delete agent");
					return;
				}
				agent.value = null;
				localConfig.value = null;
				agentsEventBus.emit("agentUpdated", {
					agentId: agentId.value,
					source: "agent-builder"
				});
				const targetPath = `/projects/${capturedProjectId}/agents`;
				try {
					await router.replace(targetPath);
				} catch {}
				await nextTick();
				if (route.params.agentId) window.location.assign(targetPath);
			}
		}
		async function initialize() {
			initialized.value = false;
			try {
				await settleAutosave();
				builderTelemetry.resetForAgentSwitch();
				agent.value = null;
				agentName.value = "";
				activeChatSessionId.value = null;
				localConfig.value = null;
				connectedTriggers.value = [];
				agentFiles.value = [];
				agentFilesLoading.value = false;
				agentFilesUploading.value = false;
				deletingAgentFileId.value = null;
				fetchBuilderStatus().catch((error) => {
					showError(error, locale.baseText("settings.agentBuilder.loadError"));
				});
				await Promise.all([
					fetchAgent(),
					fetchConfig(projectId.value, agentId.value),
					fetchAgentFiles()
				]);
				persistMissingPersonalisationGradient();
				builderTelemetry.captureToolsBaseline();
				builderTelemetry.captureSkillsBaseline();
				builderTelemetry.captureTasksBaseline();
				credentialsStore.setCredentials([]);
				await Promise.all([credentialsStore.fetchAllCredentialsForWorkflow({ projectId: projectId.value }), credentialsStore.fetchCredentialTypes(false)]).catch(() => void 0);
				sessionsStore.stopAutoRefresh();
				sessionsStore.fetchThreads(projectId.value, agentId.value).then(() => {
					sessionsStore.startAutoRefresh();
				});
				(async () => {
					const triggerTypes = (await ensureIntegrationsCatalog(projectId.value).catch(() => [])).map((i) => i.type);
					const connected = await builderTelemetry.fetchInitialTriggersBaseline(triggerTypes);
					if (connected) connectedTriggers.value = connected;
				})();
				if (isPreviewMode.value) bindPreviewSession();
				const prompt = isArtifactMode.value ? void 0 : route.query.prompt;
				if (prompt) {
					if (shouldAutoExpandInitialBuild()) {
						isChatFullWidth.value = true;
						shouldCollapseChatAfterInitialBuild.value = true;
					}
					router.replace({ query: {
						...route.query,
						prompt: void 0,
						expandBuildChat: void 0
					} });
					startChat(prompt);
				}
			} catch (error) {
				showError(error, locale.baseText("agents.builder.loadError"));
			} finally {
				initialized.value = true;
				replayPendingArtifactRefresh().catch(handleArtifactRefreshError);
				warmAgentKnowledgeSandboxForPage();
			}
		}
		watch(agentId, initialize, { immediate: true });
		onBeforeUnmount(() => {
			sessionsStore.stopAutoRefresh();
		});
		watch(() => sessionsStore.loading, (isLoading, wasLoading) => {
			if (!wasLoading || isLoading) return;
			if (!isPreviewMode.value) return;
			if (continueSessionId.value || activeChatSessionId.value) return;
			bindPreviewSession();
		});
		watch(isPreviewMode, (preview) => {
			if (preview) bindPreviewSession();
		});
		function exitContinueMode() {
			clearContinueSessionParam();
		}
		function onConfirmVectorStore(vectorStore, originalName) {
			const vectorStores = localConfig.value?.vectorStores ?? [];
			const matchName = originalName ?? vectorStore.name;
			const index = vectorStores.findIndex((existing) => existing.name === matchName);
			onConfigFieldUpdate({ vectorStores: index === -1 ? [...vectorStores, vectorStore] : vectorStores.map((existing, i) => i === index ? vectorStore : existing) });
		}
		function onOpenAddVectorStoreModal() {
			const vectorStores = localConfig.value?.vectorStores ?? [];
			uiStore.openModalWithData({
				name: AGENT_VECTOR_STORES_MODAL_KEY,
				data: {
					projectId: projectId.value,
					agentId: agentId.value,
					existingNames: vectorStores.map((vectorStore) => vectorStore.name),
					onConfirm: onConfirmVectorStore
				}
			});
		}
		function onOpenEditVectorStoreModal(vectorStore) {
			const vectorStores = localConfig.value?.vectorStores ?? [];
			uiStore.openModalWithData({
				name: AGENT_VECTOR_STORES_MODAL_KEY,
				data: {
					projectId: projectId.value,
					agentId: agentId.value,
					existingNames: vectorStores.map((existing) => existing.name),
					vectorStore,
					onConfirm: (updated) => onConfirmVectorStore(updated, vectorStore.name),
					onRemove: (name) => {
						onConfigFieldUpdate({ vectorStores: (localConfig.value?.vectorStores ?? []).filter((existing) => existing.name !== name) });
					}
				}
			});
		}
		async function onRemoveVectorStore(vectorStore) {
			if (await openAgentConfirmationModal({
				title: locale.baseText("agents.builder.vectorStores.panel.removeModal.title", { interpolate: { name: vectorStore.name } }),
				description: locale.baseText("agents.builder.vectorStores.panel.removeModal.description", { interpolate: { name: vectorStore.name } }),
				confirmButtonText: locale.baseText("agents.builder.vectorStores.panel.removeModal.button.remove"),
				cancelButtonText: locale.baseText("generic.cancel")
			}) !== "confirm") return;
			onConfigFieldUpdate({ vectorStores: (localConfig.value?.vectorStores ?? []).filter((existing) => existing.name !== vectorStore.name) });
		}
		function onContinueLoaded(count) {
			const requestedSessionId = continueSessionId.value;
			const knownThread = requestedSessionId ? sessionsStore.threads.some((thread) => thread.id === requestedSessionId) : false;
			if (count === 0 && requestedSessionId && !knownThread) {
				exitContinueMode();
				nextTick(() => {
					if (isPreviewMode.value) bindPreviewSession();
				});
			}
		}
		function onSwitchAgent(nextAgentId) {
			if (!nextAgentId || nextAgentId === agentId.value) return;
			router.push({
				name: isPreviewMode.value ? AGENT_PREVIEW_VIEW : AGENT_BUILDER_VIEW,
				params: {
					projectId: projectId.value,
					agentId: nextAgentId
				},
				query: isPreviewMode.value ? {} : route.query
			});
		}
		function onPreviewBreadcrumbSelect(item) {
			if (item.id === projectId.value) router.push(projectRoute.value);
			else if (item.id === agentId.value) router.push(agentRoute.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [isPreviewMode.value ? (openBlock(), createBlock(AgentBuilderPreviewHeader_default, {
				key: 0,
				"breadcrumb-items": previewBreadcrumbItems.value,
				"session-title": unref(currentSessionTitle),
				"session-id": unref(effectiveSessionId),
				"has-session": unref(currentSessionHasMessages),
				"session-options": sessionOptions.value,
				onBreadcrumbSelect: onPreviewBreadcrumbSelect,
				onSessionSelect: unref(onSessionPick),
				onNewChat: unref(onNewChat),
				onClosePreview: closePreview
			}, null, 8, [
				"breadcrumb-items",
				"session-title",
				"session-id",
				"has-session",
				"session-options",
				"onSessionSelect",
				"onNewChat"
			])) : (openBlock(), createBlock(AgentBuilderHeader_default, {
				key: 1,
				agent: agent.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"project-name": projectName.value,
				"header-actions": headerActions.value,
				"save-status": saveStatus.value,
				"before-revert-to-published": settleAutosave,
				"is-version-history-open": isVersionHistoryOpen.value,
				"artifact-mode": isArtifactMode.value,
				onHeaderAction,
				onOpenPreview,
				onPublished,
				onUnpublished,
				onReverted,
				onSwitchAgent,
				onToggleVersionHistory
			}, null, 8, [
				"agent",
				"project-id",
				"agent-id",
				"project-name",
				"header-actions",
				"save-status",
				"is-version-history-open",
				"artifact-mode"
			])), createBaseVNode("div", {
				ref_key: "builderContainer",
				ref: builderContainer,
				class: normalizeClass({
					[_ctx.$style.builder]: true,
					[_ctx.$style.isResizingChat]: unref(chatPanelResizer).isResizing.value,
					[_ctx.$style.previewBuilder]: isPreviewMode.value
				})
			}, [showBuilderLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				spin: ""
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				isPreviewMode.value ? (openBlock(), createBlock(AgentPreviewChatPage_default, {
					key: 0,
					initialized: initialized.value,
					"project-id": projectId.value,
					"agent-id": agentId.value,
					agent: agent.value,
					"local-config": localConfig.value,
					"connected-triggers": connectedTriggers.value,
					"effective-session-id": unref(effectiveSessionId),
					"initial-prompt": initialPrompt.value,
					onConfigUpdated,
					onContinueLoaded,
					onOpenBuild: onOpenBuildFromChat
				}, null, 8, [
					"initialized",
					"project-id",
					"agent-id",
					"agent",
					"local-config",
					"connected-triggers",
					"effective-session-id",
					"initial-prompt"
				])) : !isArtifactMode.value && isBuildChatHidden.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "ghost",
					"icon-only": "",
					size: "small",
					class: normalizeClass(_ctx.$style.showBuildChatButton),
					"aria-label": unref(locale).baseText("agents.builder.chat.show.ariaLabel"),
					"data-testid": "agent-build-chat-show-button",
					onClick: _cache[0] || (_cache[0] = ($event) => isBuildChatHidden.value = false)
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "panel-left",
						size: 14
					})]),
					_: 1
				}, 8, ["class", "aria-label"])) : !isArtifactMode.value ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
					key: 2,
					class: normalizeClass({
						[_ctx.$style.chatResizer]: true,
						[_ctx.$style.chatResizerFullWidth]: isChatFullWidth.value
					}),
					width: isChatFullWidth.value ? 0 : unref(chatPanelResizer).size.value,
					style: normalizeStyle({ width: isChatFullWidth.value ? "100%" : `${unref(chatPanelResizer).size.value}px` }),
					"is-resizing-enabled": !isChatFullWidth.value,
					"supported-directions": isChatFullWidth.value ? [] : ["right"],
					"min-width": AGENT_CHAT_PANEL_MIN_WIDTH,
					"max-width": AGENT_CHAT_PANEL_MAX_WIDTH,
					"grid-size": 8,
					outset: "",
					"data-testid": "agent-builder-chat-resizer",
					onResize: unref(chatPanelResizer).onResize,
					onResizeend: unref(chatPanelResizer).onResizeEnd
				}, {
					default: withCtx(() => [createVNode(AgentBuilderChatColumn_default, {
						initialized: initialized.value,
						"project-id": projectId.value,
						"agent-id": agentId.value,
						"agent-name": agentName.value,
						agent: agent.value,
						"local-config": localConfig.value,
						"connected-triggers": connectedTriggers.value,
						"initial-prompt": initialPrompt.value,
						"is-builder-configured": unref(isBuilderConfigured),
						"is-published": Boolean(agent.value?.activeVersionId),
						"is-full-width": isChatFullWidth.value,
						"is-build-chat-streaming": isBuildChatStreaming.value,
						"can-edit-agent": unref(canEditAgent),
						"before-build-send": flushAutosave,
						onConfigUpdated,
						onBuildDone,
						"onUpdate:streaming": onBuildChatStreamingChange,
						"onUpdate:tools": unref(caps).onQuickActionAddTool,
						"onUpdate:mcpServers": unref(caps).onQuickActionAddMcpServers,
						"onUpdate:connectedTriggers": unref(caps).onConnectedTriggersUpdate,
						onHide: _cache[1] || (_cache[1] = ($event) => {
							isChatFullWidth.value = false;
							isBuildChatHidden.value = true;
						}),
						onTriggerAdded: unref(caps).onTriggerAdded,
						onAgentPublished: onPublished,
						onAgentChanged: refreshAgentAfterIntegrationChange
					}, null, 8, [
						"initialized",
						"project-id",
						"agent-id",
						"agent-name",
						"agent",
						"local-config",
						"connected-triggers",
						"initial-prompt",
						"is-builder-configured",
						"is-published",
						"is-full-width",
						"is-build-chat-streaming",
						"can-edit-agent",
						"onUpdate:tools",
						"onUpdate:mcpServers",
						"onUpdate:connectedTriggers",
						"onTriggerAdded"
					])]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style",
					"is-resizing-enabled",
					"supported-directions",
					"onResize",
					"onResizeend"
				])) : createCommentVNode("", true),
				!isPreviewMode.value && (isArtifactMode.value || !isChatFullWidth.value || isBuildChatHidden.value) ? (openBlock(), createBlock(AgentBuilderEditorColumn_default, {
					key: 3,
					class: normalizeClass(_ctx.$style.editorColumn),
					"active-main-tab": unref(activeMainTab),
					"onUpdate:activeMainTab": _cache[2] || (_cache[2] = ($event) => isRef(activeMainTab) ? activeMainTab.value = $event : null),
					"local-config": localConfig.value,
					agent: agent.value,
					"project-id": projectId.value,
					"agent-id": agentId.value,
					"agent-files": agentFiles.value,
					"agent-files-loading": agentFilesLoading.value,
					"agent-files-uploading": agentFilesUploading.value,
					"knowledge-base-enabled": isKnowledgeBaseEnabled.value,
					"deleting-agent-file-id": deletingAgentFileId.value,
					"applied-skills": unref(appliedSkills),
					"connected-triggers": connectedTriggers.value,
					"is-build-chat-streaming": isBuildChatStreaming.value,
					"can-edit-agent": unref(canEditAgent),
					"tasks-reload-key": tasksReloadKey.value,
					"main-tab-options": unref(mainTabOptions),
					"executions-description": unref(executionsDescription),
					"artifact-mode": isArtifactMode.value,
					"onUpdate:config": onConfigFieldUpdate,
					onOpenTool: unref(caps).onOpenToolFromList,
					onOpenSkill: unref(caps).onOpenSkillFromList,
					onAddTool: unref(caps).onOpenAddToolModal,
					onAddSkill: unref(caps).onOpenAddSkillModal,
					onUploadFiles: onUploadAgentFiles,
					onDeleteFile: onDeleteAgentFile,
					onAddVectorStore: onOpenAddVectorStoreModal,
					onEditVectorStore: onOpenEditVectorStoreModal,
					onRemoveVectorStore,
					onRemoveTool: unref(caps).onRemoveTool,
					onRemoveSkill: unref(caps).onRemoveSkill,
					"onUpdate:connectedTriggers": unref(caps).onConnectedTriggersUpdate,
					onTriggerAdded: unref(caps).onTriggerAdded,
					onToggleTask: unref(caps).onToggleTask,
					onTasksChanged: onConfigUpdated,
					onAgentChanged: refreshAgentAfterIntegrationChange
				}, null, 8, [
					"class",
					"active-main-tab",
					"local-config",
					"agent",
					"project-id",
					"agent-id",
					"agent-files",
					"agent-files-loading",
					"agent-files-uploading",
					"knowledge-base-enabled",
					"deleting-agent-file-id",
					"applied-skills",
					"connected-triggers",
					"is-build-chat-streaming",
					"can-edit-agent",
					"tasks-reload-key",
					"main-tab-options",
					"executions-description",
					"artifact-mode",
					"onOpenTool",
					"onOpenSkill",
					"onAddTool",
					"onAddSkill",
					"onRemoveTool",
					"onRemoveSkill",
					"onUpdate:connectedTriggers",
					"onTriggerAdded",
					"onToggleTask"
				])) : createCommentVNode("", true),
				!isPreviewMode.value && isVersionHistoryOpen.value ? (openBlock(), createBlock(AgentVersionHistoryPanel_default, {
					key: 4,
					ref_key: "versionHistoryPanel",
					ref: versionHistoryPanel,
					"project-id": projectId.value,
					"agent-id": agentId.value,
					"has-unpublished-changes": Boolean(agent.value?.activeVersionId) && agent.value?.versionId !== agent.value?.activeVersionId,
					"agent-name": agent.value?.name ?? agentName.value,
					onClose: onCloseVersionHistory,
					onReverted,
					onPublished,
					onUnpublished
				}, null, 8, [
					"project-id",
					"agent-id",
					"has-unpublished-changes",
					"agent-name"
				])) : createCommentVNode("", true)
			], 64))], 2)], 2);
		};
	}
});
var AgentBuilderView_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_a6ia1_125",
	builder: "_builder_a6ia1_134",
	loading: "_loading_a6ia1_145",
	previewBuilder: "_previewBuilder_a6ia1_152",
	chatResizer: "_chatResizer_a6ia1_156",
	chatResizerFullWidth: "_chatResizerFullWidth_a6ia1_181",
	showBuildChatButton: "_showBuildChatButton_a6ia1_185",
	isResizingChat: "_isResizingChat_a6ia1_192",
	editorColumn: "_editorColumn_a6ia1_196"
};
var AgentBuilderView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useWizardNavigation as a, ConfirmationFooter_default as i, ChannelSetupCard_default as n, isRecord as o, InstanceAiQuestions_default as r, AgentBuilderView_default as t };
