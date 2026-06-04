import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, At as isRef, Bt as toRef, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Nt as reactive, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-rwoOesms.js";
import { A as N8nResizeWrapper_default, Da as N8nIcon_default, E as Switch_default, Ea as N8nButton_default, Ft as DropdownMenuItem_default, Ii as Input_default, Li as N8nIconButton_default, Mi as N8nTooltip_default, N as N8nRadioButtons_default, Pt as DropdownMenu_default, St as N8nCollapsiblePanel_default, T as N8nSwitch_default, Ta as N8nText_default, _t as N8nSelect_default, dt as N8nInputLabel_default, ft as Checkbox_default, g as N8nBreadcrumbs_default, jt as N8nActionDropdown_default, ka as updatedIconSet, lt as useRoute, m as N8nInlineTextEdit_default, t as InputNumber_default, ut as useRouter, vt as N8nOption_default, wa as N8nCallout_default, wt as N8nCard_default, xt as createEventBus } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Gr as useProjectsStore, b as useNodeTypesStore, nt as useCredentialsStore } from "./workflows.store-fKRofyHu.js";
import { t as useToast } from "./useToast-BFkWPPHz.js";
import { $a as askCredentialInputSchema, $r as CONTINUE_SESSION_ID_PARAM, Br as AGENT_ADD_TRIGGER_MODAL_KEY, Gr as AGENT_PREVIEW_VIEW, Gs as deepCopy, Hr as AGENT_BUILDER_VIEW, Jr as AGENT_SKILL_MODAL_KEY, Qa as ASK_QUESTION_TOOL_NAME, Qr as CHAT_MESSAGE_STATUS, Ur as AGENT_EPISODIC_MEMORY_CREDENTIAL_MODAL_KEY, Wr as AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE, Xa as ASK_CREDENTIAL_TOOL_NAME, Xr as AGENT_TOOL_CONFIG_MODAL_KEY, Yr as AGENT_TOOLS_MODAL_KEY, Za as ASK_LLM_TOOL_NAME, ao as AGENT_SCHEDULE_TRIGGER_TYPE, ei as EXECUTIONS_SECTION_KEY, eo as askCredentialResumeSchema, fu as getDebounceTime, io as askQuestionResumeSchema, iu as DEBOUNCE_TIME, no as askLlmResumeSchema, oi as VIEWS, oo as isAgentScheduleIntegration, ri as TOOL_CALL_STATE, ro as askQuestionInputSchema, ta as LOCAL_STORAGE_AGENT_BUILDER_CHAT_PANEL_WIDTH, ti as NEW_AGENT_VIEW, to as askLlmInputSchema, zc as require_isEqual } from "./constants-Brs44Mbc.js";
import { t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { C as useSpeechSynthesis, G as useDebounceFn } from "./core-CMxey_qZ.js";
import { f as useUIStore, p as useTelemetry, t as useUsersStore } from "./users.store-ByD75lsx.js";
import { o as truncate } from "./dist-1UmUUMlk.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BoZ4pEPK.js";
import { H as EditorView, nt as lineNumbers } from "./dist-qNs_-cZw.js";
import { $ as history, t as javascript } from "./dist-Ch2qeyMr.js";
import { t as codeEditorTheme } from "./theme-CqgkzM4m.js";
import { t as NodeCredentials_default } from "./NodeCredentials-D3ZYyT-_.js";
import { t as NodeIcon_default } from "./NodeIcon-DOKlGMRK.js";
import { t as useChatStore } from "./chat.store-CjCVi3Kl.js";
import { v as isLlmProviderModel } from "./chat.utils-Dj_xLCd-.js";
import { t as useResizablePanel } from "./useResizablePanel-BxcXqW9z.js";
import { n as ChatTypingIndicator_default, t as CopyButton_default } from "./CopyButton-CRW2DozH.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-DretmBA4.js";
import { t as useAgentPermissions } from "./useAgentPermissions-Cg8Nc7Sm.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-BMIWBno5.js";
import { O as updateAgentConfig, S as getTestChatMessages, _ as getBuilderMessages, g as getAgentConfig, h as getAgent, i as toolIdentifiersFromConfig, k as updateAgentSkill, n as deriveAgentStatus, o as clearBuilderMessages, p as deleteAgent, r as skillIdentifiersFromConfig, s as clearTestChatMessages, t as buildAgentConfigFingerprint, u as createAgentSkill, v as getChatMessages, w as listAgents } from "./agentTelemetry.utils-JiK0HuJn.js";
import { r as useAgentIntegrationsCatalog, t as syncAgentIntegrationStatusCache } from "./useAgentIntegrationStatus-HnCb6P0Z.js";
import { n as useAgentConfirmationModal, t as useAgentPublish } from "./useAgentPublish-bH3Zt13o.js";
import { r as toolRefToNode } from "./useAgentToolRefAdapter-CIjPjypU.js";
import { n as agent_panel_module_default, r as useCodeMirrorEditor, t as AgentJsonEditor_default } from "./AgentJsonEditor-VSHQrh7-.js";
import { n as useAgentBuilderStatus, t as AgentBuilderUnconfiguredEmptyState_default } from "./AgentBuilderUnconfiguredEmptyState-jQ2kjdpi.js";
import { t as useAgentSessionsStore } from "./agentSessions.store-CZKk1eb1.js";
import { t as useThreadTitle } from "./thread-title-jV0tu7VW.js";
import { t as ChatInputBase_default } from "./ChatInputBase-De-3o8S7.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-DzOruqMR.js";
import { t as useChatCredentials } from "./useChatCredentials-CT52vCH6.js";
import { t as ModelSelector_default } from "./ModelSelector-DR2XwIA6.js";
import { a as AGENT_UNSUPPORTED_PROVIDERS, i as sanitizeModelId, n as parseModelString, o as CATALOG_TO_CHATHUB, r as parseProvider, s as CHATHUB_TO_CATALOG, t as modelToString } from "./model-string-BIx3FSGh.js";
import { t as AgentSessionsListView_default } from "./AgentSessionsListView-CUxY53N-.js";
//#region src/features/agents/composables/useAgentBuilderTelemetry.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var TRACKED_CONFIG_KEYS = [
	"instructions",
	"model",
	"memory",
	"tools",
	"skills",
	"name",
	"description"
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
		if (isAgentScheduleIntegration(integration)) {
			if (integration.cronExpression.trim() !== "") entries.push({ type: integration.type });
			continue;
		}
		if (!isAgentScheduleIntegration(integration)) entries.push({
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
		captureToolsBaseline,
		captureSkillsBaseline,
		fetchInitialTriggersBaseline,
		resetForAgentSwitch,
		trackOpenedToolFromList,
		trackOpenedSkillFromList,
		trackOpenedAddSkillModal
	};
}
//#endregion
//#region src/features/agents/composables/useAgentConfig.ts
function useAgentConfig() {
	const rootStore = useRootStore();
	const config = ref(null);
	const loading = ref(false);
	let latestKey = null;
	function keyFor(projectId, agentId) {
		return `${projectId}:${agentId}`;
	}
	async function fetchConfig(projectId, agentId) {
		const key = keyFor(projectId, agentId);
		latestKey = key;
		loading.value = true;
		try {
			const fresh = await getAgentConfig(rootStore.restApiContext, projectId, agentId);
			if (latestKey === key) config.value = fresh;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	async function updateConfig(projectId, agentId, data) {
		const key = keyFor(projectId, agentId);
		const result = await updateAgentConfig(rootStore.restApiContext, projectId, agentId, data);
		const stale = latestKey !== key;
		if (!stale) config.value = result.config;
		return {
			versionId: result.versionId,
			stale
		};
	}
	return {
		config,
		loading,
		fetchConfig,
		updateConfig
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
//#region src/features/agents/composables/useAgentConfigAutosave.ts
/**
* Owns the debounced autosave loop for the agent builder.
*
* Hand-rolled timers (instead of `useDebounceFn`) so the route-leave guard can
* both cancel a pending save AND await one in flight — important to avoid a
* scheduled save that fires after publish, bumping versionId and immediately
* re-marking the agent as having unpublished changes.
*
* `scheduleAutosave` snapshots its argument at call time; later switches to a
* different agent therefore can't bleed an in-flight save onto the new agent.
*/
function useAgentConfigAutosave(params) {
	const saveStatus = ref("idle");
	const debounceMs = params.debounceMs ?? 500;
	const savedHoldMs = params.savedHoldMs ?? 2e3;
	let autosaveTimer = null;
	let autosaveInFlight = null;
	let saveStatusResetTimer = null;
	let pendingSnapshot = null;
	let pendingSnapshotRevision = 0;
	let latestSnapshotRevision = 0;
	let lastSaveError = null;
	function toError(error) {
		return error instanceof Error ? error : new Error(String(error));
	}
	async function runSave(snapshot, rethrow) {
		saveStatus.value = "saving";
		lastSaveError = null;
		if (saveStatusResetTimer !== null) {
			clearTimeout(saveStatusResetTimer);
			saveStatusResetTimer = null;
		}
		try {
			await params.save(snapshot);
			params.onSaved?.(snapshot);
			saveStatus.value = "saved";
			saveStatusResetTimer = setTimeout(() => {
				saveStatus.value = "idle";
				saveStatusResetTimer = null;
			}, savedHoldMs);
		} catch (error) {
			lastSaveError = toError(error);
			params.onError?.(error);
			saveStatus.value = "idle";
			if (rethrow) throw lastSaveError;
		}
	}
	async function chainSave(snapshot, rethrow) {
		const slot = (autosaveInFlight ?? Promise.resolve()).then(async () => await runSave(snapshot, rethrow));
		const trackedSlot = slot.catch(() => void 0);
		autosaveInFlight = trackedSlot;
		trackedSlot.finally(() => {
			if (autosaveInFlight === trackedSlot) autosaveInFlight = null;
		});
		await slot;
	}
	function scheduleAutosave(snapshot) {
		pendingSnapshot = snapshot;
		pendingSnapshotRevision = ++latestSnapshotRevision;
		if (autosaveTimer !== null) clearTimeout(autosaveTimer);
		autosaveTimer = setTimeout(() => {
			autosaveTimer = null;
			const target = pendingSnapshot;
			pendingSnapshot = null;
			pendingSnapshotRevision = 0;
			chainSave(target, false);
		}, getDebounceTime(debounceMs));
	}
	async function settleAutosave() {
		if (autosaveTimer !== null) {
			clearTimeout(autosaveTimer);
			autosaveTimer = null;
		}
		if (autosaveInFlight) await autosaveInFlight;
	}
	async function flushAutosave() {
		if (autosaveTimer !== null) {
			clearTimeout(autosaveTimer);
			autosaveTimer = null;
		}
		const target = pendingSnapshot;
		const targetRevision = pendingSnapshotRevision;
		pendingSnapshot = null;
		pendingSnapshotRevision = 0;
		if (target !== null) {
			try {
				await chainSave(target, true);
			} catch (error) {
				if (latestSnapshotRevision === targetRevision && pendingSnapshot === null) {
					pendingSnapshot = target;
					pendingSnapshotRevision = targetRevision;
				}
				throw error;
			}
			return;
		}
		if (autosaveInFlight) await autosaveInFlight;
		if (lastSaveError) throw lastSaveError;
	}
	return {
		saveStatus,
		scheduleAutosave,
		settleAutosave,
		flushAutosave
	};
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderMainTabs.ts
var SECTION_QUERY_PARAM = "section";
function getSectionFromQuery(section) {
	const value = Array.isArray(section) ? section[0] : section;
	if (value === "__executions" || value === "raw") return value;
	return null;
}
function getSectionFromTab(tab) {
	if (tab === "executions") return EXECUTIONS_SECTION_KEY;
	if (tab === "raw") return "raw";
	return null;
}
function useAgentBuilderMainTabs({ executionsCount }) {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const selectedSection = ref(null);
	async function setSelectedSection(section) {
		selectedSection.value = section;
		await router.replace({ query: {
			...route.query,
			[SECTION_QUERY_PARAM]: section ?? void 0
		} });
	}
	const activeMainTab = computed({
		get() {
			if (selectedSection.value === "__executions") return "executions";
			if (selectedSection.value === "raw") return "raw";
			return "agent";
		},
		set(tab) {
			setSelectedSection(getSectionFromTab(tab));
		}
	});
	const mainTabOptions = computed(() => [
		{
			label: i18n.baseText("agents.builder.header.tab.agent"),
			value: "agent"
		},
		{
			label: i18n.baseText("agents.builder.header.tab.executions"),
			value: "executions"
		},
		{
			label: i18n.baseText("agents.builder.header.tab.raw"),
			value: "raw"
		}
	]);
	const executionsDescription = computed(() => i18n.baseText("agents.builder.executions.count", {
		adjustToNumber: executionsCount.value,
		interpolate: { count: String(executionsCount.value) }
	}));
	watch(() => route.query[SECTION_QUERY_PARAM], (section) => {
		selectedSection.value = getSectionFromQuery(section);
	}, { immediate: true });
	return {
		activeMainTab,
		mainTabOptions,
		executionsDescription
	};
}
//#endregion
//#region src/features/agents/agents.eventBus.ts
var agentsEventBus = createEventBus();
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
//#region src/features/agents/composables/useProjectAgentsList.ts
/**
* Per-project cache of the agents list. Used by the builder header's agent
* switcher. Matches the shape of `useAgentIntegrationsCatalog` — fetched once
* per project, in-flight requests deduped, errors propagated so the next
* `ensureLoaded()` can retry cleanly.
*/
var caches = /* @__PURE__ */ new Map();
function getEntry(projectId) {
	let entry = caches.get(projectId);
	if (!entry) {
		entry = {
			list: ref(null),
			inFlight: null
		};
		caches.set(projectId, entry);
	}
	return entry;
}
function useProjectAgentsList(projectId) {
	const rootStore = useRootStore();
	const list = ref(null);
	function bind(id) {
		if (!id) {
			list.value = null;
			return;
		}
		list.value = getEntry(id).list.value;
	}
	bind(projectId.value);
	watch(projectId, (id) => bind(id));
	async function ensureLoaded() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		if (entry.list.value) return entry.list.value;
		if (!entry.inFlight) entry.inFlight = listAgents(rootStore.restApiContext, id).then((result) => {
			entry.list.value = result;
			entry.inFlight = null;
			if (projectId.value === id) list.value = result;
			return result;
		}).catch((err) => {
			entry.inFlight = null;
			throw err;
		});
		return await entry.inFlight;
	}
	async function refresh() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		entry.list.value = null;
		return await ensureLoaded();
	}
	return {
		list,
		ensureLoaded,
		refresh
	};
}
//#endregion
//#region src/features/agents/components/AgentBuilderHeader.vue?vue&type=script&setup=true&lang.ts
var sessionMenuMaxHeight = "calc((var(--spacing--xl) * 5) + var(--spacing--xs))";
var AgentBuilderHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderHeader",
	props: {
		agent: {},
		projectId: {},
		agentId: {},
		projectName: {},
		headerActions: {},
		saveStatus: {},
		mode: {},
		currentSessionTitle: {},
		sessionOptions: {},
		beforeRevertToPublished: { type: Function }
	},
	emits: [
		"header-action",
		"open-preview",
		"new-chat",
		"close-preview",
		"session-select",
		"published",
		"unpublished",
		"reverted",
		"switch-agent"
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
			ensureLoaded();
		});
		const projectRoute = computed(() => ({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: props.projectId }
		}));
		const breadcrumbItems = computed(() => [{
			id: props.projectId,
			label: props.projectName ?? i18n.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}]);
		const agentDisplayName = computed(() => props.agent?.name ?? "…");
		const isPreview = computed(() => props.mode === "preview");
		const isPreviewDisabled = computed(() => props.agent?.isRunnable !== true);
		const previewDisabledTooltip = computed(() => i18n.baseText("agents.builder.preview.disabledTooltip"));
		const sessionTitle = computed(() => props.currentSessionTitle ?? i18n.baseText("agents.builder.chat.newChat.label"));
		const sessionOptions = computed(() => {
			if (props.sessionOptions && props.sessionOptions.length > 0) return props.sessionOptions;
			return [{
				id: "__empty__",
				label: i18n.baseText("agents.builder.chat.sessionPicker.empty"),
				disabled: true
			}];
		});
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
		function onOpenPreview() {
			if (isPreviewDisabled.value) return;
			emit("open-preview");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-builder-header"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.left) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: breadcrumbItems.value,
				theme: "medium",
				onItemSelected: onBreadcrumbSelect
			}, {
				append: withCtx(() => [
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.crumbSeparator),
						"aria-hidden": "true"
					}, "/", 2),
					createVNode(unref(DropdownMenu_default), {
						items: switcherOptions.value,
						placement: "bottom-start",
						"data-testid": "agent-header-switcher",
						onSelect: onSwitcherSelect
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "xsmall",
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
					}, 8, ["items"]),
					isPreview.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.crumbSeparator),
						"aria-hidden": "true"
					}, "/", 2), createVNode(unref(DropdownMenu_default), {
						items: sessionOptions.value,
						"max-height": sessionMenuMaxHeight,
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
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.switcherLabel, _ctx.$style.previewSessionLabel]) }, toDisplayString(sessionTitle.value), 3), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: 12
							})]),
							_: 1
						}, 8, ["class", "aria-label"])]),
						_: 1
					}, 8, ["items", "extra-popper-class"])], 64)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["items"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.right) }, [isPreview.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "medium",
				icon: "plus",
				"data-testid": "agent-preview-new-chat-btn",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("new-chat"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.chat.newChat.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				variant: "ghost",
				"icon-only": "",
				size: "medium",
				"aria-label": unref(i18n).baseText("agents.builder.preview.close.ariaLabel"),
				"data-testid": "agent-preview-close-btn",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("close-preview"))
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: 16
				})]),
				_: 1
			}, 8, ["aria-label"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
						disabled: isPreviewDisabled.value,
						"data-testid": "agent-header-preview-btn",
						onClick: onOpenPreview
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.button")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["disabled", "content"]),
				createVNode(AgentPublishButton_default, {
					agent: __props.agent,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"is-saving": __props.saveStatus === "saving",
					"before-revert-to-published": __props.beforeRevertToPublished,
					onPublished: _cache[3] || (_cache[3] = (a) => emit("published", a)),
					onUnpublished: _cache[4] || (_cache[4] = (a) => emit("unpublished", a)),
					onReverted: _cache[5] || (_cache[5] = (a) => emit("reverted", a))
				}, null, 8, [
					"agent",
					"project-id",
					"agent-id",
					"is-saving",
					"before-revert-to-published"
				]),
				__props.headerActions.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 1,
					items: __props.headerActions,
					"activator-icon": "ellipsis",
					"activator-size": "medium",
					"data-testid": "agent-header-actions",
					onSelect: _cache[6] || (_cache[6] = (item) => emit("header-action", item))
				}, null, 8, ["items"])) : createCommentVNode("", true)
			], 64))], 2)], 2);
		};
	}
});
var AgentBuilderHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_fe440_125",
	left: "_left_fe440_136",
	crumbSeparator: "_crumbSeparator_fe440_151",
	switcherButton: "_switcherButton_fe440_157",
	switcherLabel: "_switcherLabel_fe440_163",
	agentSwitcherLabel: "_agentSwitcherLabel_fe440_171",
	previewSessionLabel: "_previewSessionLabel_fe440_175",
	switcherFooter: "_switcherFooter_fe440_179",
	right: "_right_fe440_184",
	saveStatus: "_saveStatus_fe440_192",
	sessionMenu: "_sessionMenu_fe440_198"
};
var AgentBuilderHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/agentChatMessages.ts
var INTERACTIVE_TOOL_NAMES = [
	ASK_CREDENTIAL_TOOL_NAME,
	ASK_LLM_TOOL_NAME,
	ASK_QUESTION_TOOL_NAME
];
function isInteractiveToolName(v) {
	return typeof v === "string" && INTERACTIVE_TOOL_NAMES.includes(v);
}
function isGroupable(msg) {
	return msg.role === "assistant" && !!msg.toolCalls?.length && !msg.content.trim();
}
function buildDisplayGroups(messages) {
	const groups = [];
	for (const msg of messages) {
		if (isGroupable(msg)) {
			const last = groups[groups.length - 1];
			if (last && last.kind === "toolRun" && !last.finalMessage) {
				last.toolCalls = [...last.toolCalls, ...msg.toolCalls ?? []];
				if (msg.thinking) last.thinking = last.thinking ? `${last.thinking}\n\n${msg.thinking}` : msg.thinking;
				if (msg.interactive) last.interactives.push(msg.interactive);
				continue;
			}
			groups.push({
				kind: "toolRun",
				id: msg.id,
				thinking: msg.thinking ?? "",
				toolCalls: [...msg.toolCalls ?? []],
				interactives: msg.interactive ? [msg.interactive] : []
			});
			continue;
		}
		if (msg.role === "assistant") {
			const last = groups[groups.length - 1];
			if (last && last.kind === "toolRun" && !last.finalMessage) {
				last.finalMessage = msg;
				if (msg.thinking) last.thinking = last.thinking ? `${last.thinking}\n\n${msg.thinking}` : msg.thinking;
				if (msg.toolCalls?.length) last.toolCalls = [...last.toolCalls, ...msg.toolCalls];
				if (msg.interactive) last.interactives.push(msg.interactive);
				continue;
			}
		}
		groups.push({
			kind: "message",
			id: msg.id,
			message: msg
		});
	}
	return groups;
}
/**
* Given a tool call belonging to one of the interactive builder tools,
* reconstruct an `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present — `resolvedValue` is parsed from it
*   via the matching zod schema. The output IS the user's resume payload (the
*   tool handler returns `ctx.resumeData` after a resume), so no separate
*   `resumedAt` signal is needed.
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*/
function rebuildInteractiveFromHistory(tc) {
	if (!isInteractiveToolName(tc.tool)) return void 0;
	const base = {
		toolCallId: tc.toolCallId,
		...tc.output !== void 0 && { resolvedAt: 1 }
	};
	if (tc.tool === "ask_credential") {
		const input = askCredentialInputSchema.safeParse(tc.input);
		if (!input.success) return void 0;
		const resolved = tc.output !== void 0 ? askCredentialResumeSchema.safeParse(tc.output) : null;
		return {
			...base,
			toolName: ASK_CREDENTIAL_TOOL_NAME,
			input: input.data,
			...resolved?.success && { resolvedValue: resolved.data }
		};
	}
	if (tc.tool === "ask_llm") {
		const input = askLlmInputSchema.safeParse(tc.input ?? {});
		if (!input.success) return void 0;
		const resolved = tc.output !== void 0 ? askLlmResumeSchema.safeParse(tc.output) : null;
		return {
			...base,
			toolName: ASK_LLM_TOOL_NAME,
			input: input.data,
			...resolved?.success && { resolvedValue: resolved.data }
		};
	}
	const input = askQuestionInputSchema.safeParse(tc.input);
	if (!input.success) return void 0;
	const resolved = tc.output !== void 0 ? askQuestionResumeSchema.safeParse(tc.output) : null;
	return {
		...base,
		toolName: ASK_QUESTION_TOOL_NAME,
		input: input.data,
		...resolved?.success && { resolvedValue: resolved.data }
	};
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive (one of the ask_* tools), we attach a
* reconstructed `InteractivePayload` so the UI re-renders the card in either
* its open (awaiting user) or resolved (disabled) state.
*/
function convertDbMessages(dbMessages) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === "user" ? "user" : msg.role === "assistant" ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const toolCalls = [];
		for (const part of msg.content) if (part.type === "text" && part.text) text += part.text;
		else if (part.type === "reasoning" && part.text) thinking += part.text;
		else if (part.type === "tool-call" && part.toolName) {
			let state;
			let output;
			if (part.state === "resolved") {
				state = TOOL_CALL_STATE.DONE;
				output = part.output;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else {
				state = TOOL_CALL_STATE.RUNNING;
				output = void 0;
			}
			toolCalls.push({
				tool: part.toolName,
				toolCallId: part.toolCallId ?? "",
				input: part.input,
				...output !== void 0 && { output },
				state
			});
		}
		let interactive;
		let status;
		for (const tc of toolCalls) {
			const rebuilt = rebuildInteractiveFromHistory(tc);
			if (rebuilt) {
				interactive = rebuilt;
				if (rebuilt.resolvedAt === void 0) {
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					status = CHAT_MESSAGE_STATUS.AWAITING_USER;
				}
				break;
			}
		}
		result.push({
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			thinking: thinking || void 0,
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...status && { status },
			...interactive && { interactive }
		});
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
		if (!msg.interactive) continue;
		const runId = byToolCallId.get(msg.interactive.toolCallId);
		if (runId) msg.interactive.runId = runId;
	}
	return chat;
}
//#endregion
//#region src/features/agents/utils/interactive-summary.ts
/**
* Build a one-line human-readable label for a resolved interactive tool call.
* Used by `AgentChatToolSteps` to show the user's answer beside the tool name
* (e.g. "→ ask_question · Slack") so resolved cards leave a compact trace in
* scrollback instead of vanishing.
*
* Returns `undefined` for non-interactive tools or when the output isn't
* shaped as expected — callers fall back to rendering just the tool name.
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function summariseInteractiveOutput(toolName, output, input) {
	if (!isPlainObject(output)) return void 0;
	if (toolName === "ask_question") {
		const resume = output;
		if (!Array.isArray(resume.values) || resume.values.length === 0) return void 0;
		const opts = input?.options ?? [];
		return resume.values.map((v) => opts.find((o) => o.value === v)?.label ?? v).join(", ");
	}
	if (toolName === "ask_credential") {
		const resume = output;
		if ("skipped" in resume && resume.skipped) return "Skipped";
		if ("credentialName" in resume && resume.credentialName) return resume.credentialName;
		return;
	}
	if (toolName === "ask_llm") {
		const resume = output;
		if (!resume.provider || !resume.model) return void 0;
		const slug = `${resume.provider}/${resume.model}`;
		return resume.credentialName ? `${slug} · ${resume.credentialName}` : slug;
	}
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
			} else if (continueId) dbMessages = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId);
			else dbMessages = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
			if (dbMessages.length > 0) messages.value = applyOpenSuspensions(convertDbMessages(dbMessages), openSuspensions);
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
					state: TOOL_CALL_STATE.PENDING
				});
				else {
					existing.input = event.input;
					if (existing.state !== TOOL_CALL_STATE.RUNNING && existing.state !== TOOL_CALL_STATE.DONE) existing.state = TOOL_CALL_STATE.PENDING;
				}
				break;
			}
			case "tool-execution-start": {
				const found = findToolCallById(event.toolCallId);
				if (found && found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR) found.tc.state = TOOL_CALL_STATE.RUNNING;
				break;
			}
			case "tool-result": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					found.tc.output = event.output;
					found.tc.state = event.isError ? TOOL_CALL_STATE.ERROR : TOOL_CALL_STATE.DONE;
					found.tc.displaySummary = summariseInteractiveOutput(found.tc.tool, event.output, found.tc.input);
					if (found.msg.interactive) {
						const updated = rebuildInteractiveFromHistory(found.tc);
						if (updated) found.msg.interactive = updated;
					}
					if (found.msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) found.msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
				}
				break;
			}
			case "tool-call-suspended": {
				const { payload } = event;
				const found = findToolCallById(payload.toolCallId);
				let msg;
				let tc;
				if (found) {
					msg = found.msg;
					tc = found.tc;
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					tc.input = payload.input;
				} else {
					msg = ensureCurrent(session);
					tc = {
						tool: payload.toolName,
						toolCallId: payload.toolCallId,
						input: payload.input,
						state: TOOL_CALL_STATE.SUSPENDED
					};
					msg.toolCalls = [...msg.toolCalls ?? [], tc];
				}
				const interactive = rebuildInteractiveFromHistory({
					...tc,
					output: void 0
				});
				if (interactive) {
					interactive.runId = payload.runId;
					msg.interactive = interactive;
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
		if (!response.body) return;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
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
					if (handleEvent(event, session)?.done) break readerLoop;
				}
			}
		} finally {
			reader.releaseLock();
		}
	}
	function finalizeStream(session) {
		for (const msg of session.minted) if (msg.status === CHAT_MESSAGE_STATUS.STREAMING) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
		if (params.endpoint.value === "build" && session.builderMutated) params.onConfigUpdated?.();
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
			await consumeStream(response, session);
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
	* Resume a suspended build interaction. Posts to the build/resume endpoint
	* and re-enters the same SSE handler. The `runId` is required — it comes
	* from the original `tool-call-suspended` chunk (live) or from the
	* `openSuspensions` sidecar applied during history reload.
	*/
	async function resume(payload) {
		const found = findToolCallById(payload.toolCallId);
		const snapshot = found ? {
			tc: found.tc,
			prevState: found.tc.state,
			prevOutput: found.tc.output,
			prevSummary: found.tc.displaySummary,
			msg: found.msg,
			prevStatus: found.msg.status,
			prevInteractive: found.msg.interactive
		} : null;
		if (found) {
			found.tc.state = TOOL_CALL_STATE.DONE;
			found.tc.output = payload.resumeData;
			found.tc.displaySummary = summariseInteractiveOutput(found.tc.tool, payload.resumeData, found.tc.input);
			const updated = rebuildInteractiveFromHistory(found.tc);
			if (updated) found.msg.interactive = updated;
			if (found.msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) found.msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
		}
		const { baseUrl } = rootStore.restApiContext;
		const { ok } = await postAndConsume(`${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/build/resume`, payload);
		if (!ok && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			snapshot.msg.interactive = snapshot.prevInteractive;
		}
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
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
var AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: { toolCalls: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ol", { class: normalizeClass(_ctx.$style.toolSteps) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.toolCalls, (tc, i) => {
				return openBlock(), createElementBlock("li", {
					key: i,
					class: normalizeClass(_ctx.$style.toolStep)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolStepIndicator) }, [tc.state === "done" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "circle-check",
						size: "large",
						class: normalizeClass(_ctx.$style.toolStepDone)
					}, null, 8, ["class"])) : tc.state === "error" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "circle-x",
						size: "large",
						class: normalizeClass(_ctx.$style.toolStepError)
					}, null, 8, ["class"])) : tc.state === "suspended" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						placement: "top",
						content: "Waiting for your input"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "clock",
							size: "large",
							class: normalizeClass(_ctx.$style.toolStepSuspended)
						}, null, 8, ["class"])]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 3,
						icon: "spinner",
						size: "large",
						spin: true,
						class: normalizeClass(_ctx.$style.toolStepLoading)
					}, null, 8, ["class"]))], 2),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.toolStepLabel, { [_ctx.$style.shimmer]: tc.state === "running" }]) }, toDisplayString(unref(formatToolNameForDisplay)(tc.tool)), 3),
					tc.displaySummary ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.toolStepSummary),
						"data-testid": "tool-step-summary"
					}, " · " + toDisplayString(tc.displaySummary), 3)) : createCommentVNode("", true)
				], 2);
			}), 128))], 2);
		};
	}
});
var AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default = {
	toolSteps: "_toolSteps_1n5op_2",
	toolStep: "_toolStep_1n5op_2",
	toolStepIndicator: "_toolStepIndicator_1n5op_19",
	toolStepDone: "_toolStepDone_1n5op_41",
	toolStepError: "_toolStepError_1n5op_45",
	toolStepLoading: "_toolStepLoading_1n5op_49",
	toolStepSuspended: "_toolStepSuspended_1n5op_53",
	toolStepLabel: "_toolStepLabel_1n5op_57",
	toolStepSummary: "_toolStepSummary_1n5op_64",
	shimmer: "_shimmer_1n5op_74"
};
var AgentChatToolSteps_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/AskCredentialCard.vue?vue&type=script&setup=true&lang.ts
var AskCredentialCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskCredentialCard",
	props: {
		purpose: {},
		credentialType: {},
		nodeType: {},
		credentialSlot: {},
		projectId: {},
		agentId: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const selectedId = ref("");
		const selectedCredential = computed(() => selectedId.value ? credentialsStore.getCredentialById(selectedId.value) : null);
		/**
		* Synthetic node passed to NodeCredentials. We use `noOp` as the carrier node
		* type because the component only needs *some* INodeUi to attach the selected
		* credential to; the actual credential type is forced via `override-cred-type`.
		* This mirrors the pattern used in InstanceAiCredentialSetup.vue.
		*/
		const nodeForCredentials = computed(() => {
			const cred = selectedCredential.value;
			return {
				id: props.credentialType,
				name: props.credentialType,
				type: "n8n-nodes-base.noOp",
				typeVersion: 1,
				position: [0, 0],
				parameters: {},
				credentials: cred ? { [props.credentialType]: {
					id: cred.id,
					name: cred.name
				} } : {}
			};
		});
		function onCredentialSelected(info) {
			if (props.disabled) return;
			const data = info.properties.credentials?.[props.credentialType];
			if (data && typeof data === "object" && data.id) {
				if (data.id === selectedId.value) return;
				selectedId.value = data.id;
				emit("submit", {
					credentialId: data.id,
					credentialName: data.name ?? selectedCredential.value?.name ?? ""
				});
			} else selectedId.value = "";
		}
		function onSkip() {
			if (props.disabled) return;
			emit("submit", { skipped: true });
		}
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
						default: withCtx(() => [createTextVNode(toDisplayString(__props.purpose), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(NodeCredentials_default, {
						node: nodeForCredentials.value,
						"override-cred-type": __props.credentialType,
						"project-id": __props.projectId,
						readonly: __props.disabled,
						standalone: "",
						"hide-issues": "",
						"skip-auto-select": "",
						onCredentialSelected
					}, null, 8, [
						"node",
						"override-cred-type",
						"project-id",
						"readonly"
					])], 2),
					!__props.disabled ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						"data-testid": "ask-credential-skip",
						onClick: onSkip
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askCredential.skip")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.resolvedRow)
					}, [__props.resolvedValue && "skipped" in __props.resolvedValue ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Skipped", -1)])]),
						_: 1
					})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						size: "small",
						color: "success"
					}), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString((__props.resolvedValue && "credentialName" in __props.resolvedValue ? __props.resolvedValue.credentialName : null) ?? selectedCredential.value?.name ?? "—"), 1)]),
						_: 1
					})], 64))], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AskCredentialCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1t0d5_125",
	disabled: "_disabled_1t0d5_132",
	cardBody: "_cardBody_1t0d5_136",
	purpose: "_purpose_1t0d5_142",
	credentialContainer: "_credentialContainer_1t0d5_147",
	actions: "_actions_1t0d5_155",
	resolvedRow: "_resolvedRow_1t0d5_162"
};
var AskCredentialCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskCredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskCredentialCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/AskLlmCard.vue?vue&type=script&setup=true&lang.ts
var AskLlmCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskLlmCard",
	props: {
		purpose: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const usersStore = useUsersStore();
		const credentialsStore = useCredentialsStore();
		const chatStore = useChatStore();
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials);
		}, { immediate: true });
		const filteredAgents = computed(() => Object.fromEntries(Object.entries(chatStore.agents).filter(([provider]) => !AGENT_UNSUPPORTED_PROVIDERS.has(provider))));
		function onModelChange(selection) {
			if (!isLlmProviderModel(selection) || props.disabled) return;
			const catalogProvider = CHATHUB_TO_CATALOG[selection.provider] ?? selection.provider;
			const credentialId = credentialsByProvider.value?.[selection.provider] ?? "";
			const credentialName = credentialsStore.allCredentials.find((c) => c.id === credentialId)?.name ?? "";
			emit("submit", {
				provider: catalogProvider,
				model: sanitizeModelId(catalogProvider, selection.model),
				credentialId,
				credentialName
			});
		}
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "ask-llm-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					bold: "",
					class: normalizeClass(_ctx.$style.purpose)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.purpose ?? "Choose a model"), 1)]),
					_: 1
				}, 8, ["class"]), __props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.resolved)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "circle-check",
					size: "small",
					color: "success"
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.resolvedDetails) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.resolvedValue.provider) + "/" + toDisplayString(__props.resolvedValue.model), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.resolvedValue.credentialName), 1)]),
					_: 1
				})], 2)], 2)) : (openBlock(), createBlock(ModelSelector_default, {
					key: 1,
					"selected-agent": null,
					"include-custom-agents": false,
					credentials: unref(credentialsByProvider),
					agents: filteredAgents.value,
					"is-loading": false,
					"warn-missing-credentials": true,
					horizontal: "",
					onChange: onModelChange,
					onSelectCredential
				}, null, 8, ["credentials", "agents"]))], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AskLlmCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1i4d9_125",
	disabled: "_disabled_1i4d9_132",
	cardBody: "_cardBody_1i4d9_137",
	resolved: "_resolved_1i4d9_143",
	resolvedDetails: "_resolvedDetails_1i4d9_150",
	purpose: "_purpose_1i4d9_156"
};
var AskLlmCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskLlmCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskLlmCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/AskQuestionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = [
	"disabled",
	"aria-pressed",
	"onClick"
];
var SINGLE_CHOICE_SUBMIT_DELAY_MS = 250;
var AskQuestionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AskQuestionCard",
	props: {
		question: {},
		options: {},
		allowMultiple: { type: Boolean },
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selected = ref([]);
		const otherText = ref("");
		let singleChoiceSubmitTimer;
		/** Labels of the persisted selected values, for the resolved state. */
		const resolvedLabels = computed(() => {
			if (!props.resolvedValue) return [];
			return props.resolvedValue.values.map((v) => props.options.find((o) => o.value === v)?.label ?? v);
		});
		const trimmedOtherText = computed(() => otherText.value.trim());
		const selectedValuesWithOther = computed(() => {
			const values = [...selected.value];
			if (trimmedOtherText.value) values.push(trimmedOtherText.value);
			return values;
		});
		function selectSingle(value) {
			if (props.disabled) return;
			selected.value = [value];
			clearSingleChoiceSubmitTimer();
			singleChoiceSubmitTimer = window.setTimeout(() => {
				singleChoiceSubmitTimer = void 0;
				if (props.disabled || selected.value[0] !== value) return;
				emit("submit", { values: [value] });
			}, SINGLE_CHOICE_SUBMIT_DELAY_MS);
		}
		function clearSingleChoiceSubmitTimer() {
			if (singleChoiceSubmitTimer === void 0) return;
			window.clearTimeout(singleChoiceSubmitTimer);
			singleChoiceSubmitTimer = void 0;
		}
		function toggleMultiple(value, checked) {
			if (props.disabled) return;
			const idx = selected.value.indexOf(value);
			if (checked && idx < 0) selected.value.push(value);
			else if (!checked && idx >= 0) selected.value.splice(idx, 1);
		}
		function onSubmit() {
			const values = selectedValuesWithOther.value;
			if (values.length === 0 || props.disabled) return;
			emit("submit", { values });
		}
		function submitOther() {
			if (!trimmedOtherText.value || props.disabled) return;
			clearSingleChoiceSubmitTimer();
			emit("submit", { values: [trimmedOtherText.value] });
		}
		function onOtherKeydown(event) {
			if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;
			event.preventDefault();
			if (props.allowMultiple) {
				onSubmit();
				return;
			}
			submitOther();
		}
		onBeforeUnmount(clearSingleChoiceSubmitTimer);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "ask-question-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					bold: "",
					class: normalizeClass(_ctx.$style.question)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.question), 1)]),
					_: 1
				}, 8, ["class"]), __props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.resolved)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "circle-check",
					size: "small",
					color: "success"
				}), createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(resolvedLabels.value.join(", ")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.options) }, [!__props.allowMultiple ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.options, (opt, index) => {
						return openBlock(), createElementBlock("button", {
							key: opt.value,
							class: normalizeClass([
								_ctx.$style.option,
								selected.value.includes(opt.value) && _ctx.$style.activeSelected,
								__props.disabled && _ctx.$style.optionDisabled
							]),
							disabled: __props.disabled,
							"aria-pressed": selected.value.includes(opt.value),
							"data-testid": "ask-question-option",
							onClick: ($event) => selectSingle(opt.value)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.numberBadge) }, toDisplayString(index + 1), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(opt.label), 3), opt.description ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.optionDescription)
						}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)], 2)], 10, _hoisted_1$4);
					}), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.options, (opt) => {
						return openBlock(), createElementBlock("label", {
							key: opt.value,
							class: normalizeClass(_ctx.$style.checkboxRow),
							"data-testid": "ask-question-option"
						}, [createVNode(unref(Checkbox_default), {
							"model-value": selected.value.includes(opt.value),
							disabled: __props.disabled,
							"data-testid": "ask-question-checkbox",
							"onUpdate:modelValue": (checked) => toggleMultiple(opt.value, checked)
						}, null, 8, [
							"model-value",
							"disabled",
							"onUpdate:modelValue"
						]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(opt.label), 3), opt.description ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.optionDescription)
						}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)], 2)], 2);
					}), 128))], 2),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "ask-question-other-input",
						label: unref(i18n).baseText("agents.chat.askQuestion.otherLabel"),
						bold: false,
						size: "small",
						class: normalizeClass(_ctx.$style.other)
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.otherInputRow) }, [createVNode(unref(Input_default), {
							id: "ask-question-other-input",
							modelValue: otherText.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otherText.value = $event),
							size: "small",
							disabled: __props.disabled,
							placeholder: unref(i18n).baseText("agents.chat.askQuestion.otherPlaceholder"),
							"data-testid": "ask-question-other-input",
							onKeydown: onOtherKeydown
						}, null, 8, [
							"modelValue",
							"disabled",
							"placeholder"
						]), !__props.allowMultiple ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							disabled: !trimmedOtherText.value || __props.disabled,
							size: "small",
							"data-testid": "ask-question-other-submit",
							onClick: submitOther
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askQuestion.submit")), 1)]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["label", "class"]),
					__props.allowMultiple ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						disabled: selectedValuesWithOther.value.length === 0 || __props.disabled,
						size: "medium",
						"data-testid": "ask-question-submit",
						onClick: onSubmit
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.askQuestion.submit")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)) : createCommentVNode("", true)
				], 64))], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AskQuestionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1yzyh_125",
	disabled: "_disabled_1yzyh_132",
	cardBody: "_cardBody_1yzyh_136",
	question: "_question_1yzyh_142",
	resolved: "_resolved_1yzyh_147",
	options: "_options_1yzyh_154",
	other: "_other_1yzyh_160",
	otherInputRow: "_otherInputRow_1yzyh_167",
	option: "_option_1yzyh_154",
	highlighted: "_highlighted_1yzyh_190",
	activeSelected: "_activeSelected_1yzyh_197",
	numberBadge: "_numberBadge_1yzyh_200",
	optionLabel: "_optionLabel_1yzyh_204",
	arrowIndicator: "_arrowIndicator_1yzyh_207",
	checkboxRow: "_checkboxRow_1yzyh_212",
	optionDisabled: "_optionDisabled_1yzyh_225",
	optionContent: "_optionContent_1yzyh_236",
	optionDescription: "_optionDescription_1yzyh_254",
	actions: "_actions_1yzyh_264"
};
var AskQuestionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AskQuestionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AskQuestionCard_vue_vue_type_style_index_0_lang_module_default }]]);
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
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return __props.payload.toolName === unref("ask_credential") && __props.projectId && __props.agentId ? (openBlock(), createBlock(AskCredentialCard_default, {
				key: 0,
				purpose: __props.payload.input.purpose,
				"credential-type": __props.payload.input.credentialType,
				"node-type": __props.payload.input.nodeType,
				"credential-slot": __props.payload.input.slot,
				"project-id": __props.projectId,
				"agent-id": __props.agentId,
				disabled: disabled.value,
				"resolved-value": __props.payload.resolvedValue,
				onSubmit
			}, null, 8, [
				"purpose",
				"credential-type",
				"node-type",
				"credential-slot",
				"project-id",
				"agent-id",
				"disabled",
				"resolved-value"
			])) : __props.payload.toolName === unref("ask_llm") ? (openBlock(), createBlock(AskLlmCard_default, {
				key: 1,
				purpose: __props.payload.input.purpose,
				disabled: disabled.value,
				"resolved-value": __props.payload.resolvedValue,
				onSubmit
			}, null, 8, [
				"purpose",
				"disabled",
				"resolved-value"
			])) : __props.payload.toolName === unref("ask_question") ? (openBlock(), createBlock(AskQuestionCard_default, {
				key: 2,
				question: __props.payload.input.question,
				options: __props.payload.input.options,
				"allow-multiple": __props.payload.input.allowMultiple,
				disabled: disabled.value,
				"resolved-value": __props.payload.resolvedValue,
				onSubmit
			}, null, 8, [
				"question",
				"options",
				"allow-multiple",
				"disabled",
				"resolved-value"
			])) : createCommentVNode("", true);
		};
	}
});
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
var AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_banme_125" };
var AgentChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default }]]);
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
		function onInteractiveSubmit(payload, resumeData) {
			if (!payload.runId) return;
			emit("resume", {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			});
		}
		const scrollRef = useTemplateRef("scrollRef");
		const displayGroups = computed(() => buildDisplayGroups(props.messages));
		function getAssistantGroupContent(group) {
			if (group.kind === "toolRun") return group.finalMessage?.content ?? "";
			return group.message.role === "assistant" ? group.message.content : "";
		}
		function isAssistantGroup(group) {
			if (group.kind === "toolRun") return true;
			return group.message.role === "assistant";
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
		function shouldShowAssistantActions(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return false;
			const group = displayGroups.value[index];
			if (!isAssistantGroup(group)) return false;
			if (!getAssistantRunContent(groupId)) return false;
			const nextGroup = displayGroups.value[index + 1];
			return !nextGroup || !isAssistantGroup(nextGroup);
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
			return `${last.content}|${last.toolCalls?.length ?? 0}|${last.thinking ?? ""}`;
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
						"tool-calls": group.toolCalls
					}, null, 8, ["tool-calls"])) : createCommentVNode("", true),
					group.interactives.some((p) => !p.resolvedAt) ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.interactives)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.interactives.filter((p) => !p.resolvedAt), (payload) => {
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
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(ChatMarkdownChunk_default, {
						source: {
							type: "text",
							content: group.finalMessage.content
						},
						onOpenArtifact: () => {}
					}, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					shouldShowAssistantActions(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.messageActions)
					}, [createVNode(AgentChatMessageActions_default, {
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						onReadAloud: ($event) => toggleReadAloud(group.id)
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"onReadAloud"
					])], 2)) : createCommentVNode("", true),
					group.finalMessage?.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.finalMessage.content && !group.toolCalls.length ? (openBlock(), createBlock(ChatTypingIndicator_default, {
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
						"tool-calls": group.message.toolCalls
					}, null, 8, ["tool-calls"])) : createCommentVNode("", true),
					group.message.role === "user" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : group.message.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.message.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(ChatMarkdownChunk_default, {
						source: {
							type: "text",
							content: group.message.content
						},
						onOpenArtifact: () => {}
					}, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					shouldShowAssistantActions(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.messageActions)
					}, [createVNode(AgentChatMessageActions_default, {
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						onReadAloud: ($event) => toggleReadAloud(group.id)
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"onReadAloud"
					])], 2)) : createCommentVNode("", true),
					group.message.interactive && !group.message.interactive.resolvedAt ? (openBlock(), createElementBlock("div", {
						key: 5,
						class: normalizeClass(_ctx.$style.interactives)
					}, [createVNode(InteractiveCard_default, {
						payload: group.message.interactive,
						"project-id": __props.projectId,
						"agent-id": __props.agentId,
						onSubmit: ($event) => onInteractiveSubmit(group.message.interactive, $event)
					}, null, 8, [
						"payload",
						"project-id",
						"agent-id",
						"onSubmit"
					])], 2)) : createCommentVNode("", true),
					group.message.role === "assistant" && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length ? (openBlock(), createBlock(ChatTypingIndicator_default, {
						key: 6,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(ChatTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
});
var AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default = {
	messages: "_messages_4nsrc_125",
	message: "_message_4nsrc_125",
	content: "_content_4nsrc_145",
	messageActions: "_messageActions_4nsrc_151",
	assistant: "_assistant_4nsrc_157",
	user: "_user_4nsrc_163",
	interactives: "_interactives_4nsrc_172",
	chatMessage: "_chatMessage_4nsrc_179",
	chatMessageUser: "_chatMessageUser_4nsrc_185",
	chatMessageError: "_chatMessageError_4nsrc_194",
	markdownContent: "_markdownContent_4nsrc_202",
	thinkingBlock: "_thinkingBlock_4nsrc_214",
	thinkingSummary: "_thinkingSummary_4nsrc_219",
	thinkingContent: "_thinkingContent_4nsrc_228",
	typingIndicator: "_typingIndicator_4nsrc_239"
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
		const { messages, isStreaming, messagingState, fatalError, loadHistory, sendMessage, stopGenerating, resume, dismissFatalError } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			endpoint: toRef(props, "endpoint"),
			continueSessionId: toRef(props, "continueSessionId"),
			onCodeUpdated: () => emit("codeUpdated"),
			onCodeDelta: (d) => emit("codeDelta", d),
			onConfigUpdated: () => emit("configUpdated"),
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
		const hasOpenInteractiveQuestion = computed(() => messages.value.some((message) => message.interactive && !message.interactive.resolvedAt));
		const isBuilderReadOnly = computed(() => props.endpoint === "build" && !props.canEditAgent);
		const chatPlaceholder = computed(() => isBuilderReadOnly.value ? locale.baseText("agents.builder.readonly.placeholder") : hasOpenInteractiveQuestion.value ? locale.baseText("agents.chat.answerQuestionPlaceholder") : locale.baseText("agents.chat.input.placeholder"));
		function onOpenBuild() {
			dismissFatalError();
			emit("open-build");
		}
		watch(isStreaming, (v) => emit("update:streaming", v));
		async function onSubmit() {
			const text = inputText.value.trim();
			if (!text || isStreaming.value || isPreparingToSend.value || isBuilderReadOnly.value || hasOpenInteractiveQuestion.value) return;
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
			if (hasOpenInteractiveQuestion.value) return;
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [renderSlot(_ctx.$slots, "above-input"), createVNode(ChatInputBase_default, {
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputText.value = $event),
					placeholder: chatPlaceholder.value,
					"is-streaming": unref(messagingState) === "receiving",
					"can-submit": !hasOpenInteractiveQuestion.value && !unref(isStreaming) && !isPreparingToSend.value && !isBuilderReadOnly.value && inputText.value.trim().length > 0,
					disabled: isBuilderReadOnly.value || hasOpenInteractiveQuestion.value || isPreparingToSend.value || unref(isStreaming) && unref(messagingState) !== "receiving",
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
//#region src/features/agents/components/AgentChipButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["disabled"];
var AgentChipButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChipButton",
	props: {
		icon: {},
		disabled: {
			type: Boolean,
			default: false
		},
		variant: { default: "default" },
		active: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass([
					_ctx.$style.chip,
					props.variant === "suggestion" ? _ctx.$style.suggestion : _ctx.$style.default,
					{ [_ctx.$style.active]: props.active }
				]),
				disabled: props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, [props.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.iconWrapper)
			}, [renderSlot(_ctx.$slots, "icon", {}, () => [props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: props.icon,
				size: 16,
				class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.suggestionIcon]: props.variant === "suggestion" }])
			}, null, 8, ["icon", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.text)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"])], 10, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=style&index=0&lang.module.scss
var chip = "_chip_1dcfa_125";
var suggestion = "_suggestion_1dcfa_148";
var suggestionSlideIn = "_suggestionSlideIn_1dcfa_1";
var active = "_active_1dcfa_162";
var iconWrapper = "_iconWrapper_1dcfa_176";
var icon = "_icon_1dcfa_176";
var suggestionIcon = "_suggestionIcon_1dcfa_186";
var text$2 = "_text_1dcfa_198";
var AgentChipButton_vue_vue_type_style_index_0_lang_module_default = {
	chip,
	"default": "_default_1dcfa_139",
	suggestion,
	suggestionSlideIn,
	active,
	iconWrapper,
	icon,
	suggestionIcon,
	text: text$2
};
var AgentChipButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChipButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChipButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatQuickActions.vue?vue&type=script&setup=true&lang.ts
var AgentChatQuickActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatQuickActions",
	props: {
		tools: {},
		projectId: {},
		agentId: {},
		agentName: {},
		isPublished: { type: Boolean },
		connectedTriggers: {}
	},
	emits: [
		"update:tools",
		"update:connected-triggers",
		"trigger-added",
		"agent-published"
	],
	setup(__props, { emit: __emit }) {
		/**
		* Quick-action chips pinned above the chat input.
		*   - Add tool: opens `AgentToolsModal` via the shared modal system and
		*     re-emits the confirmed tools upward as `update:tools`.
		*   - Add trigger: opens `AgentAddTriggerModal` and re-emits connected-trigger
		*     updates + trigger-added events upward.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const uiStore = useUIStore();
		function onAddTool() {
			uiStore.openModalWithData({
				name: AGENT_TOOLS_MODAL_KEY,
				data: {
					tools: props.tools,
					projectId: props.projectId,
					agentId: props.agentId,
					onConfirm: (tools) => emit("update:tools", tools)
				}
			});
		}
		function onAddTrigger() {
			uiStore.openModalWithData({
				name: AGENT_ADD_TRIGGER_MODAL_KEY,
				data: {
					projectId: props.projectId,
					agentId: props.agentId,
					agentName: props.agentName,
					isPublished: props.isPublished,
					connectedTriggers: props.connectedTriggers,
					onConnectedTriggersChange: (triggers) => emit("update:connected-triggers", triggers),
					onTriggerAdded: (payload) => emit("trigger-added", payload),
					onAgentPublished: (agent) => emit("agent-published", agent)
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.row),
				"data-testid": "agent-chat-quick-actions"
			}, [createVNode(AgentChipButton_default, {
				variant: "suggestion",
				icon: "wrench",
				"data-testid": "agent-quick-action-add-tool",
				onClick: onAddTool
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.quickActions.addTool")), 1)]),
				_: 1
			}), createVNode(AgentChipButton_default, {
				variant: "suggestion",
				icon: "zap",
				"data-testid": "agent-quick-action-add-trigger",
				onClick: onAddTrigger
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.quickActions.addTrigger")), 1)]),
				_: 1
			})], 2);
		};
	}
});
var AgentChatQuickActions_vue_vue_type_style_index_0_lang_module_default = { row: "_row_1kgcb_125" };
var AgentChatQuickActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatQuickActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatQuickActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderChatColumn.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
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
		isPublished: { type: Boolean },
		isFullWidth: { type: Boolean },
		canEditAgent: { type: Boolean },
		beforeBuildSend: { type: Function }
	},
	emits: [
		"config-updated",
		"update:streaming",
		"update:tools",
		"update:connected-triggers",
		"update:full-width",
		"trigger-added",
		"agent-published"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const fullWidthToggleLabel = computed(() => i18n.baseText(props.isFullWidth ? "agents.builder.chat.fullWidth.collapse.ariaLabel" : "agents.builder.chat.fullWidth.expand.ariaLabel"));
		const sharedInputDraft = ref("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.chatColumn),
				"aria-label": unref(i18n).baseText("agents.builder.chatColumn.ariaLabel"),
				"data-testid": "agent-builder-chat-column"
			}, [__props.initialized ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.floatingFullWidthToggle)
			}, [createVNode(unref(N8nTooltip_default), {
				placement: "left",
				content: fullWidthToggleLabel.value
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					"icon-only": "",
					size: "small",
					class: normalizeClass(_ctx.$style.headerIconBtn),
					"aria-label": fullWidthToggleLabel.value,
					"data-testid": "agent-build-chat-full-width-toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("update:full-width", !__props.isFullWidth))
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: __props.isFullWidth ? "minimize-2" : "maximize-2",
						size: 14
					}, null, 8, ["icon"])]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatBody) }, [__props.initialized && __props.isBuilderConfigured ? (openBlock(), createBlock(AgentChatPanel_default, {
				key: 0,
				"input-draft": sharedInputDraft.value,
				"onUpdate:inputDraft": _cache[5] || (_cache[5] = ($event) => sharedInputDraft.value = $event),
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
				onConfigUpdated: _cache[6] || (_cache[6] = ($event) => emit("config-updated")),
				"onUpdate:streaming": _cache[7] || (_cache[7] = ($event) => emit("update:streaming", $event))
			}, createSlots({ _: 2 }, [__props.canEditAgent ? {
				name: "above-input",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickActionsRow) }, [createVNode(AgentChatQuickActions_default, {
					tools: __props.localConfig?.tools ?? [],
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"agent-name": __props.agentName,
					"is-published": __props.isPublished,
					"connected-triggers": __props.connectedTriggers,
					"onUpdate:tools": _cache[1] || (_cache[1] = ($event) => emit("update:tools", $event)),
					"onUpdate:connectedTriggers": _cache[2] || (_cache[2] = ($event) => emit("update:connected-triggers", $event)),
					onTriggerAdded: _cache[3] || (_cache[3] = ($event) => emit("trigger-added", $event)),
					onAgentPublished: _cache[4] || (_cache[4] = ($event) => emit("agent-published", $event))
				}, null, 8, [
					"tools",
					"project-id",
					"agent-id",
					"agent-name",
					"is-published",
					"connected-triggers"
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
			])) : createCommentVNode("", true), __props.initialized && !__props.isBuilderConfigured ? (openBlock(), createBlock(AgentBuilderUnconfiguredEmptyState_default, { key: 1 })) : createCommentVNode("", true)], 2)], 10, _hoisted_1$2);
		};
	}
});
var AgentBuilderChatColumn_vue_vue_type_style_index_0_lang_module_default = {
	chatColumn: "_chatColumn_b7qg0_125",
	quickActionsRow: "_quickActionsRow_b7qg0_137",
	headerIconBtn: "_headerIconBtn_b7qg0_145",
	floatingFullWidthToggle: "_floatingFullWidthToggle_b7qg0_152",
	chatBody: "_chatBody_b7qg0_160"
};
var AgentBuilderChatColumn_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderChatColumn_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderChatColumn_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/provider-capabilities.ts
var PROVIDER_CAPABILITIES = {
	anthropic: { thinking: "budgetTokens" },
	openai: { thinking: "reasoningEffort" },
	google: { thinking: false },
	xai: { thinking: false },
	groq: { thinking: false },
	deepseek: { thinking: false },
	mistral: { thinking: false },
	openrouter: { thinking: false },
	cohere: { thinking: false },
	ollama: { thinking: false }
};
var REASONING_EFFORT_OPTIONS = [
	"low",
	"medium",
	"high"
];
//#endregion
//#region src/features/agents/components/AgentAdvancedPanel.vue?vue&type=script&setup=true&lang.ts
/**
* Creates a ref, debounced config-emit, change handler, and watch-sync
* function for one numeric field inside `config`. Designed for N8nInputNumber2
* which emits numbers directly (NaN when the field is cleared).
*
* @param key          Config key (must be a numeric field).
* @param defaultValue Fallback when the key is absent or the field is cleared.
*                     Pass `undefined` for optional fields — the key is removed
*                     from the config when the field is cleared.
*/
var CONCURRENCY_MIN = 1;
var CONCURRENCY_MAX = 20;
var MAX_ITERATIONS_MIN = 1;
var MAX_ITERATIONS_MAX = 200;
var BUDGET_TOKENS_MIN = 1;
var BUDGET_TOKENS_DEFAULT = 1024;
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
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const isExpanded = ref(!props.collapsible);
		const provider = computed(() => parseProvider(props.config?.model));
		const capabilities = computed(() => PROVIDER_CAPABILITIES[provider.value] ?? { thinking: false });
		function makeNumberField(key, defaultValue) {
			const value = ref(props.config?.config?.[key] ?? defaultValue);
			const debouncedEmit = useDebounceFn(() => {
				const cfg = { ...props.config?.config ?? {} };
				if (value.value === void 0) delete cfg[key];
				else cfg[key] = value.value;
				emit("update:config", { config: cfg });
			}, 500);
			return {
				modelValue: value,
				onChange(n) {
					value.value = isNaN(n) ? defaultValue : n;
					debouncedEmit();
				},
				sync(cfg) {
					value.value = cfg?.config?.[key] ?? defaultValue;
				}
			};
		}
		const { modelValue: concurrencyModelValue, onChange: onConcurrencyChange, sync: syncConcurrency } = makeNumberField("toolCallConcurrency", CONCURRENCY_MIN);
		const { modelValue: maxIterationsModelValue, onChange: onMaxIterationsChange, sync: syncMaxIterations } = makeNumberField("maxIterations", void 0);
		const thinkingCfg = computed(() => props.config?.config?.thinking ?? null);
		const thinkingEnabled = ref(thinkingCfg.value !== null);
		const budgetTokens = ref(thinkingCfg.value?.budgetTokens ?? BUDGET_TOKENS_DEFAULT);
		const reasoningEffort = ref(thinkingCfg.value?.reasoningEffort ?? "medium");
		watch(() => props.config, (cfg) => {
			if (!cfg) return;
			const t = cfg.config?.thinking ?? null;
			thinkingEnabled.value = t !== null;
			budgetTokens.value = t?.budgetTokens ?? BUDGET_TOKENS_DEFAULT;
			reasoningEffort.value = t?.reasoningEffort ?? "medium";
			syncConcurrency(cfg);
			syncMaxIterations(cfg);
		}, { deep: true });
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
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCollapsiblePanel_default), {
				modelValue: isExpanded.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isExpanded.value = $event),
				class: normalizeClass(_ctx.$style.panel),
				disabled: !props.collapsible,
				"data-testid": "agent-behavior-panel"
			}, {
				title: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h3",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.title")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.thinking.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.thinking.hint")), 1)]),
						_: 1
					})], 2), createVNode(unref(N8nTooltip_default), {
						content: thinkingDisabledReason.value,
						disabled: !!capabilities.value.thinking,
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(Switch_default), {
							"model-value": thinkingEnabled.value,
							disabled: !capabilities.value.thinking || props.disabled,
							"data-testid": "agent-thinking-toggle",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => onThinkingToggle(Boolean(v)))
						}, null, 8, ["model-value", "disabled"])]),
						_: 1
					}, 8, ["content", "disabled"])], 2),
					thinkingEnabled.value && capabilities.value.thinking === "budgetTokens" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.row)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.budgetTokens.label")), 1)]),
						_: 1
					}), createVNode(unref(InputNumber_default), {
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
					])], 2)) : createCommentVNode("", true),
					thinkingEnabled.value && capabilities.value.thinking === "reasoningEffort" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.row)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.reasoningEffort.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
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
					])], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabel) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.concurrency.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.concurrency.hint")), 1)]),
						_: 1
					})], 2), createVNode(unref(InputNumber_default), {
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
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.maxIterations.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.advanced.maxIterations.hint")), 1)]),
						_: 1
					})], 2), createVNode(unref(InputNumber_default), {
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
				], 2)]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"disabled"
			]);
		};
	}
});
var AgentAdvancedPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_cj5dl_2",
	content: "_content_cj5dl_26",
	row: "_row_cj5dl_33",
	rowLabel: "_rowLabel_cj5dl_41",
	shortInput: "_shortInput_cj5dl_49"
};
var AgentAdvancedPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentAdvancedPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentAdvancedPanel_vue_vue_type_style_index_0_lang_module_default }]]);
function toUngroupedToolRow(row) {
	const item = {
		index: row.index,
		label: row.label,
		nodeType: row.nodeType
	};
	return {
		index: row.index,
		label: row.label,
		typeLabel: row.typeLabel,
		nodeType: row.nodeType,
		fallbackIcon: row.fallbackIcon,
		isGrouped: false,
		items: [item]
	};
}
function toGroupedToolRow(group) {
	const [first] = group;
	return {
		index: first.index,
		label: `${group.length} ${first.typeLabel}`,
		typeLabel: first.typeLabel,
		nodeType: first.nodeType,
		fallbackIcon: first.fallbackIcon,
		isGrouped: true,
		items: group.map((row) => ({
			index: row.index,
			label: row.label,
			nodeType: row.nodeType
		}))
	};
}
function buildToolRows(rows) {
	const groupedRows = [];
	const nodeGroups = /* @__PURE__ */ new Map();
	for (const row of rows) {
		/**
		* Only node tools with a resolved node type are eligible for grouping.
		* Workflow tools, custom tools, and unresolved node tools stay ungrouped
		* because this grouping logic relies on nodeType.name as the canonical key
		* and on the resolved node type for the grouped label/icon.
		*/
		if (row.toolType !== "node" || !row.nodeType) {
			groupedRows.push(toUngroupedToolRow(row));
			continue;
		}
		const group = nodeGroups.get(row.nodeType.name);
		if (group) {
			group.push(row);
			continue;
		}
		nodeGroups.set(row.nodeType.name, [row]);
	}
	for (const group of nodeGroups.values()) {
		if (group.length >= 2) {
			groupedRows.push(toGroupedToolRow(group));
			continue;
		}
		groupedRows.push(...group.map(toUngroupedToolRow));
	}
	return groupedRows.sort((left, right) => left.index - right.index);
}
//#endregion
//#region src/features/agents/components/AgentCapabilitiesSection.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["inert"];
var AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCapabilitiesSection",
	props: {
		config: {},
		tools: {},
		customTools: {},
		skills: {},
		connectedTriggers: {},
		disabled: {
			type: Boolean,
			default: false
		},
		projectId: {},
		agentId: {},
		isPublished: { type: Boolean }
	},
	emits: [
		"open-tool",
		"open-skill",
		"open-trigger",
		"add-tool",
		"add-skill",
		"add-trigger",
		"remove-tool",
		"remove-skill",
		"update:connected-triggers",
		"trigger-added"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const { catalog } = useAgentIntegrationsCatalog();
		function isIconName(icon) {
			return typeof icon === "string" && icon in updatedIconSet;
		}
		function triggerIcon(trigger, integrationIcon) {
			if (isIconName(integrationIcon)) return integrationIcon;
			if (trigger === "schedule") return "clock";
			return "zap";
		}
		const triggerRows = computed(() => props.connectedTriggers.map((trigger) => {
			const integration = catalog.value?.find(({ type }) => type === trigger);
			return {
				type: trigger,
				label: integration?.label ?? (trigger === "schedule" ? i18n.baseText("agents.schedule.title") : trigger),
				icon: triggerIcon(trigger, integration?.icon)
			};
		}));
		const hasTriggers = computed(() => triggerRows.value.length > 0);
		const hasTools = computed(() => props.tools.length > 0);
		const hasSkills = computed(() => props.skills.length > 0);
		function toolLabel(tool, index) {
			if (tool.type === "custom") return formatToolNameForDisplay((tool.id ? props.customTools?.[tool.id]?.descriptor.name : void 0) ?? tool.id ?? `${tool.type}-${index + 1}`);
			if (tool.type === "workflow") return formatToolNameForDisplay(tool.name ?? tool.workflow ?? `${tool.type}-${index + 1}`);
			return formatToolNameForDisplay(tool.name ?? `${tool.type}-${index + 1}`);
		}
		function toolIcon(tool) {
			if (tool.type === "workflow") return "workflow";
			if (tool.type === "custom") return "code";
			return "globe";
		}
		function toolNodeType(tool) {
			const node = toolRefToNode(tool);
			if (!node) return null;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion) ?? null;
		}
		function toolTypeLabel(tool, index, nodeType = toolNodeType(tool)) {
			if (tool.type === "node") return nodeType?.displayName.replace(/ Tool$/, "") ?? toolLabel(tool, index);
			if (tool.type === "workflow") return i18n.baseText("agents.builder.tools.type.workflow");
			if (tool.type === "custom") return i18n.baseText("agents.builder.tools.type.custom");
			return toolLabel(tool, index);
		}
		const toolRows = computed(() => {
			return buildToolRows(props.tools.map((tool, index) => {
				const nodeType = toolNodeType(tool);
				return {
					index,
					label: toolLabel(tool, index),
					typeLabel: toolTypeLabel(tool, index, nodeType),
					nodeType,
					fallbackIcon: toolIcon(tool),
					toolType: tool.type
				};
			}));
		});
		function toolMenuItems(tool) {
			return tool.items.map((item) => ({
				id: item.index,
				label: item.label,
				data: { nodeType: item.nodeType }
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.section, props.disabled && _ctx.$style.disabled]),
				inert: props.disabled || void 0,
				"data-testid": "agent-capabilities-section"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.capabilityRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.triggers.title")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(triggerRows.value, (trigger) => {
					return openBlock(), createBlock(AgentChipButton_default, {
						key: trigger.type,
						icon: trigger.icon,
						"data-testid": "agent-capabilities-trigger-row",
						onClick: ($event) => emit("open-trigger", trigger.type)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(trigger.label), 1)]),
						_: 2
					}, 1032, ["icon", "onClick"]);
				}), 128)), createVNode(unref(N8nTooltip_default), {
					disabled: !hasTriggers.value,
					content: unref(i18n).baseText("agents.builder.triggers.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": hasTriggers.value,
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-trigger",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("add-trigger"))
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "plus",
							size: 16,
							color: "text-light"
						})]),
						default: withCtx(() => [!hasTriggers.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.triggers.add")), 1)], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["icon-only", "disabled"])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.capabilityRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.title")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(toolRows.value, (tool) => {
					return openBlock(), createElementBlock(Fragment, { key: `tool-${tool.index}` }, [tool.isGrouped ? (openBlock(), createBlock(unref(DropdownMenu_default), {
						key: 0,
						items: toolMenuItems(tool),
						placement: "bottom-start",
						"data-testid": "agent-capabilities-tool-group",
						onSelect: _cache[1] || (_cache[1] = ($event) => emit("open-tool", $event))
					}, {
						trigger: withCtx(() => [createVNode(AgentChipButton_default, { "data-testid": "agent-capabilities-tool-row" }, {
							icon: withCtx(() => [createVNode(NodeIcon_default, {
								"node-type": tool.nodeType,
								size: 16
							}, null, 8, ["node-type"])]),
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.groupChipLabel) }, [createTextVNode(toDisplayString(tool.label) + " ", 1), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: 12,
								color: "text-light"
							})], 2)]),
							_: 2
						}, 1024)]),
						"item-leading": withCtx(({ item, ui }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
							key: 0,
							"node-type": item.data.nodeType,
							size: 16,
							class: normalizeClass(ui.class)
						}, null, 8, ["node-type", "class"])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["items"])) : tool.nodeType ? (openBlock(), createBlock(AgentChipButton_default, {
						key: 1,
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.index)
					}, {
						icon: withCtx(() => [createVNode(NodeIcon_default, {
							"node-type": tool.nodeType,
							size: 16
						}, null, 8, ["node-type"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, ["onClick"])) : (openBlock(), createBlock(AgentChipButton_default, {
						key: 2,
						icon: tool.fallbackIcon,
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.index)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, ["icon", "onClick"]))], 64);
				}), 128)), createVNode(unref(N8nTooltip_default), {
					disabled: !hasTools.value,
					content: unref(i18n).baseText("agents.builder.tools.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": hasTools.value,
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-tool",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("add-tool"))
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "plus",
							size: 16,
							color: "text-light"
						})]),
						default: withCtx(() => [!hasTools.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.add")), 1)], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["icon-only", "disabled"])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.capabilityRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.title")), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.skills, ({ id, skill }) => {
					return openBlock(), createBlock(AgentChipButton_default, {
						key: id,
						icon: "sparkles",
						"data-testid": "agent-capabilities-skill-row",
						onClick: ($event) => emit("open-skill", id)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(skill.name || id), 1)]),
						_: 2
					}, 1032, ["onClick"]);
				}), 128)), createVNode(unref(N8nTooltip_default), {
					disabled: !hasSkills.value,
					content: unref(i18n).baseText("agents.builder.skills.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": hasSkills.value,
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-skill",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("add-skill"))
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "plus",
							size: 16,
							color: "text-light"
						})]),
						default: withCtx(() => [!hasSkills.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.add")), 1)], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["icon-only", "disabled"])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)], 2)
			], 10, _hoisted_1$1);
		};
	}
});
var AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_cgf7m_125",
	capabilityRow: "_capabilityRow_cgf7m_132",
	rowLabel: "_rowLabel_cgf7m_139",
	chips: "_chips_cgf7m_146",
	groupChipLabel: "_groupChipLabel_cgf7m_155",
	disabled: "_disabled_cgf7m_161"
};
var AgentCapabilitiesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const name = computed(() => props.config?.name ?? "");
		const description = computed(() => props.config?.description ?? "");
		function onNameUpdate(value) {
			emit("update:config", { name: value });
		}
		function onDescriptionUpdate(value) {
			emit("update:config", { description: value || void 0 });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.text),
				"data-testid": "agent-identity-header"
			}, [createVNode(unref(N8nInlineTextEdit_default), {
				"model-value": name.value,
				placeholder: unref(i18n).baseText("agents.builder.agent.name.placeholder"),
				disabled: props.disabled,
				"max-width": "80%",
				"min-width": 96,
				class: normalizeClass(_ctx.$style.title),
				"data-testid": "agent-name-inline-edit",
				"onUpdate:modelValue": onNameUpdate
			}, null, 8, [
				"model-value",
				"placeholder",
				"disabled",
				"class"
			]), createVNode(unref(N8nInlineTextEdit_default), {
				"model-value": description.value,
				placeholder: unref(i18n).baseText("agents.builder.agent.description.placeholder"),
				disabled: props.disabled,
				"max-width": "80%",
				"min-width": 96,
				class: normalizeClass(_ctx.$style.description),
				"data-testid": "agent-description-inline-edit",
				"onUpdate:modelValue": onDescriptionUpdate
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
	text: "_text_1cqol_125",
	title: "_title_1cqol_133",
	description: "_description_1cqol_140"
};
var AgentIdentityHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentIdentityHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentIdentityHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPanelHeader.vue?vue&type=script&setup=true&lang.ts
var AgentPanelHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPanelHeader",
	props: {
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.text) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "xlarge",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default = { text: "_text_14vgd_125" };
var AgentPanelHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentMiniEditor.vue?vue&type=script&setup=true&lang.ts
var AgentMiniEditor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMiniEditor",
	props: {
		modelValue: {},
		language: { default: "typescript" },
		readonly: {
			type: Boolean,
			default: false
		},
		maxHeight: { default: "300px" },
		minHeight: { default: "100px" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const container = ref();
		const readOnly = toRef(props, "readonly");
		const langExtensions = props.language === "typescript" ? [javascript({ typescript: true })] : [];
		const { replaceDoc } = useCodeMirrorEditor({
			container,
			initialDoc: props.modelValue,
			readOnly,
			extensions: [
				...langExtensions,
				lineNumbers(),
				EditorView.lineWrapping,
				codeEditorTheme({
					isReadOnly: props.readonly,
					maxHeight: props.maxHeight,
					minHeight: props.minHeight,
					rows: -1
				}),
				history()
			],
			onChange: (next) => emit("update:modelValue", next)
		});
		watch(() => props.modelValue, (val) => replaceDoc(val));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container,
				class: normalizeClass(_ctx.$style.editor)
			}, null, 2);
		};
	}
});
var AgentMiniEditor_vue_vue_type_style_index_0_lang_module_default = { editor: "_editor_143gb_2" };
var AgentMiniEditor_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMiniEditor_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMiniEditor_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentInfoPanel.vue?vue&type=script&setup=true&lang.ts
var AgentInfoPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentInfoPanel",
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
		/**
		* Combined editor for the core agent fields: name, model (delegated to the
		* canonical ChatHub ModelSelector), and instructions. Credential selection is
		* handled inside the model picker — no separate credential field.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const chatStore = useChatStore();
		const { showError } = useToast();
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials);
		}, { immediate: true });
		const filteredAgents = computed(() => Object.fromEntries(Object.entries(chatStore.agents).filter(([provider]) => !AGENT_UNSUPPORTED_PROVIDERS.has(provider))));
		const selectedAgent = computed(() => {
			const modelStr = modelToString(props.config?.model);
			if (!modelStr) return null;
			const parsed = parseModelString(modelStr);
			if (!parsed) return null;
			const chatHubProvider = CATALOG_TO_CHATHUB[parsed.provider];
			if (!chatHubProvider) return null;
			const registryEntry = filteredAgents.value[chatHubProvider]?.models.find((m) => isLlmProviderModel(m.model) && m.model.model === parsed.name);
			if (registryEntry) return registryEntry;
			return {
				model: {
					provider: chatHubProvider,
					model: parsed.name
				},
				name: parsed.name,
				description: null,
				icon: null,
				updatedAt: null,
				createdAt: null,
				metadata: {},
				groupName: null,
				groupIcon: null
			};
		});
		function onModelChange(selection) {
			if (!isLlmProviderModel(selection)) return;
			const catalogProvider = CHATHUB_TO_CATALOG[selection.provider] ?? selection.provider;
			const credentialId = credentialsByProvider.value?.[selection.provider];
			if (!credentialId) {
				showError(new Error(i18n.baseText("credentials.noResults")), i18n.baseText("error"));
				return;
			}
			emit("update:config", {
				model: `${catalogProvider}/${sanitizeModelId(catalogProvider, selection.model)}`,
				credential: credentialId
			});
		}
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
			const parsed = parseModelString(modelToString(props.config?.model));
			if ((parsed ? CATALOG_TO_CHATHUB[parsed.provider] : void 0) === provider && credentialId) emit("update:config", { credential: credentialId });
		}
		const instructions = ref(props.config?.instructions ?? "");
		watch(() => props.config?.instructions ?? "", (value) => {
			if (value !== instructions.value) instructions.value = value;
		});
		const emitInstructions = useDebounceFn(() => {
			emit("update:config", { instructions: instructions.value });
		}, getDebounceTime(DEBOUNCE_TIME.API.HEAVY_OPERATION));
		function onInstructionsInput(value) {
			instructions.value = value;
			emitInstructions();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": "agent-info-panel"
			}, [
				!props.embedded ? (openBlock(), createBlock(AgentPanelHeader_default, {
					key: 0,
					title: unref(i18n).baseText("agents.builder.agent.title"),
					description: unref(i18n).baseText("agents.builder.agent.description")
				}, null, 8, ["title", "description"])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.field, props.disabled && unref(agent_panel_module_default).disabledOverlay]) }, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.label")), 1)]),
					_: 1
				})], 2), createVNode(ModelSelector_default, {
					"selected-agent": selectedAgent.value,
					"include-custom-agents": false,
					credentials: unref(credentialsByProvider),
					agents: filteredAgents.value,
					"is-loading": false,
					"warn-missing-credentials": true,
					horizontal: "",
					"data-testid": "agent-model-selector",
					onChange: onModelChange,
					onSelectCredential
				}, null, 8, [
					"selected-agent",
					"credentials",
					"agents"
				])], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.field, _ctx.$style.instructionsField]) }, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.label")), 1)]),
						_: 1
					})], 2),
					createVNode(AgentMiniEditor_default, {
						class: normalizeClass(_ctx.$style.instructionsEditor),
						"model-value": instructions.value,
						language: "markdown",
						readonly: props.disabled,
						"max-height": "640px",
						"min-height": "160px",
						"onUpdate:modelValue": onInstructionsInput
					}, null, 8, [
						"class",
						"model-value",
						"readonly"
					]),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.characterCount", { interpolate: { count: String(instructions.value.length) } })), 1)]),
						_: 1
					})
				], 2)
			], 2);
		};
	}
});
var AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_15h7o_2",
	instructionsField: "_instructionsField_15h7o_13",
	instructionsEditor: "_instructionsEditor_15h7o_18",
	field: "_field_15h7o_29",
	label: "_label_15h7o_35"
};
var AgentInfoPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentInfoPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const uiStore = useUIStore();
		const memory = computed(() => props.config?.memory?.enabled ? props.config.memory : null);
		const episodicMemory = computed(() => props.config?.memory?.episodicMemory ?? null);
		const episodicMemoryEnabled = computed(() => memory.value !== null && episodicMemory.value?.enabled === true);
		const episodicMemoryCredential = computed(() => episodicMemory.value?.enabled === true ? episodicMemory.value.credential : null);
		function onEnableMemory() {
			const existingMemory = props.config?.memory;
			emit("update:config", { memory: {
				...existingMemory,
				enabled: true,
				storage: "n8n",
				lastMessages: existingMemory?.lastMessages ?? 50
			} });
		}
		function onDisableMemory() {
			emit("update:config", { memory: {
				...props.config?.memory ?? { storage: "n8n" },
				enabled: false,
				episodicMemory: { enabled: false }
			} });
		}
		function onMemoryToggle(enabled) {
			if (enabled) onEnableMemory();
			else onDisableMemory();
		}
		function enableEpisodicMemory(credentialId) {
			const existingMemory = props.config?.memory;
			const existingEpisodicMemory = existingMemory?.episodicMemory;
			emit("update:config", { memory: {
				...existingMemory,
				enabled: true,
				storage: "n8n",
				lastMessages: existingMemory?.lastMessages ?? 50,
				episodicMemory: {
					...existingEpisodicMemory?.enabled === true ? existingEpisodicMemory : {},
					enabled: true,
					credential: credentialId
				}
			} });
		}
		function disableEpisodicMemory() {
			emit("update:config", { memory: {
				...props.config?.memory ?? { storage: "n8n" },
				enabled: props.config?.memory?.enabled ?? false,
				episodicMemory: { enabled: false }
			} });
		}
		function openEpisodicMemoryCredentialModal() {
			uiStore.openModalWithData({
				name: AGENT_EPISODIC_MEMORY_CREDENTIAL_MODAL_KEY,
				data: {
					credentialType: AGENT_EPISODIC_MEMORY_CREDENTIAL_TYPE,
					displayName: "OpenAI",
					initialValue: episodicMemoryCredential.value,
					title: i18n.baseText("agents.builder.episodicMemoryCredentialModal.title"),
					description: i18n.baseText("agents.builder.episodicMemoryCredentialModal.description"),
					cancelLabel: i18n.baseText("generic.cancel"),
					confirmLabel: i18n.baseText("agents.builder.episodicMemoryCredentialModal.confirm"),
					showDelete: false,
					hideCreateNew: false,
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
			openEpisodicMemoryCredentialModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, props.disabled && _ctx.$style.disabled]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.title")), 1)]),
				_: 1
			}), createVNode(unref(N8nSwitch_default), {
				"model-value": memory.value !== null,
				disabled: props.disabled,
				"data-testid": "agent-memory-toggle",
				"onUpdate:modelValue": onMemoryToggle
			}, null, 8, ["model-value", "disabled"])], 2), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.description")), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [createVNode(unref(N8nText_default), { bold: true }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.hint")), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [episodicMemoryEnabled.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "ghost",
				size: "small",
				disabled: props.disabled,
				"data-testid": "agent-episodic-memory-change-credential",
				onClick: openEpisodicMemoryCredentialModal
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.memory.episodicMemory.changeCredential")), 1)]),
				_: 1
			}, 8, ["disabled"])) : createCommentVNode("", true), createVNode(unref(N8nSwitch_default), {
				"model-value": episodicMemoryEnabled.value,
				disabled: props.disabled,
				"data-testid": "agent-episodic-memory-toggle",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => onEpisodicMemoryToggle(Boolean(value)))
			}, null, 8, ["model-value", "disabled"])], 2)], 2)], 2);
		};
	}
});
var AgentMemoryPanel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1e6n2_2",
	titleGroup: "_titleGroup_1e6n2_13",
	header: "_header_1e6n2_19",
	row: "_row_1e6n2_26",
	actions: "_actions_1e6n2_33",
	disabled: "_disabled_1e6n2_39",
	inlineInput: "_inlineInput_1e6n2_43",
	divider: "_divider_1e6n2_60"
};
var AgentMemoryPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMemoryPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMemoryPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBuilderEditorColumn.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var _hoisted_2 = { key: 3 };
var AgentBuilderEditorColumn_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderEditorColumn",
	props: {
		activeMainTab: {},
		mainTabOptions: {},
		localConfig: {},
		agent: {},
		projectId: {},
		agentId: {},
		appliedSkills: {},
		connectedTriggers: {},
		isBuildChatStreaming: { type: Boolean },
		canEditAgent: { type: Boolean },
		executionsDescription: {}
	},
	emits: [
		"update:activeMainTab",
		"update:config",
		"open-tool",
		"open-skill",
		"open-trigger",
		"add-tool",
		"add-skill",
		"add-trigger",
		"remove-tool",
		"remove-skill",
		"update:connected-triggers",
		"trigger-added"
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
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panelArea) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panelAreaContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panelHeaderRow) }, [__props.activeMainTab === "agent" ? (openBlock(), createBlock(AgentIdentityHeader_default, {
				key: 0,
				config: __props.localConfig,
				disabled: childrenDisabled.value,
				"onUpdate:config": _cache[0] || (_cache[0] = ($event) => emit("update:config", $event))
			}, null, 8, ["config", "disabled"])) : __props.activeMainTab === "executions" ? (openBlock(), createBlock(AgentPanelHeader_default, {
				key: 1,
				title: unref(i18n).baseText("agents.builder.header.tab.executions"),
				description: __props.executionsDescription
			}, null, 8, ["title", "description"])) : __props.activeMainTab === "raw" ? (openBlock(), createBlock(AgentPanelHeader_default, {
				key: 2,
				title: unref(i18n).baseText("agents.builder.header.tab.raw"),
				description: unref(i18n).baseText("agents.builder.raw.description")
			}, null, 8, ["title", "description"])) : (openBlock(), createElementBlock("div", _hoisted_2)), createVNode(unref(N8nRadioButtons_default), {
				"model-value": __props.activeMainTab,
				options: __props.mainTabOptions,
				class: normalizeClass(_ctx.$style.mainTabs),
				"data-testid": "agent-header-tabs",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:activeMainTab", $event))
			}, null, 8, [
				"model-value",
				"options",
				"class"
			])], 2), __props.activeMainTab === "agent" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.agentCards)
			}, [
				createVNode(unref(N8nCard_default), {
					variant: "outlined",
					class: normalizeClass(_ctx.$style.card)
				}, {
					default: withCtx(() => [createVNode(AgentCapabilitiesSection_default, {
						config: __props.localConfig,
						tools: __props.localConfig?.tools ?? [],
						"custom-tools": __props.agent?.tools ?? {},
						skills: __props.appliedSkills,
						"connected-triggers": __props.connectedTriggers,
						disabled: childrenDisabled.value,
						"project-id": __props.projectId,
						"agent-id": __props.agentId,
						"is-published": Boolean(__props.agent?.activeVersionId),
						onOpenTool: _cache[2] || (_cache[2] = ($event) => emit("open-tool", $event)),
						onOpenSkill: _cache[3] || (_cache[3] = ($event) => emit("open-skill", $event)),
						onOpenTrigger: _cache[4] || (_cache[4] = ($event) => emit("open-trigger", $event)),
						onAddTool: _cache[5] || (_cache[5] = ($event) => emit("add-tool")),
						onAddSkill: _cache[6] || (_cache[6] = ($event) => emit("add-skill")),
						onAddTrigger: _cache[7] || (_cache[7] = ($event) => emit("add-trigger")),
						onRemoveTool: _cache[8] || (_cache[8] = ($event) => emit("remove-tool", $event)),
						onRemoveSkill: _cache[9] || (_cache[9] = ($event) => emit("remove-skill", $event)),
						"onUpdate:connectedTriggers": _cache[10] || (_cache[10] = ($event) => emit("update:connected-triggers", $event)),
						onTriggerAdded: _cache[11] || (_cache[11] = ($event) => emit("trigger-added", $event))
					}, null, 8, [
						"config",
						"tools",
						"custom-tools",
						"skills",
						"connected-triggers",
						"disabled",
						"project-id",
						"agent-id",
						"is-published"
					])]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					variant: "outlined",
					class: normalizeClass(_ctx.$style.card)
				}, {
					default: withCtx(() => [createVNode(AgentInfoPanel_default, {
						config: __props.localConfig,
						disabled: childrenDisabled.value,
						embedded: "",
						"onUpdate:config": _cache[12] || (_cache[12] = ($event) => emit("update:config", $event))
					}, null, 8, ["config", "disabled"])]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					variant: "outlined",
					class: normalizeClass(_ctx.$style.card)
				}, {
					default: withCtx(() => [createVNode(AgentMemoryPanel_default, {
						config: __props.localConfig,
						disabled: childrenDisabled.value,
						embedded: "",
						"data-testid": "agent-memory-panel",
						"onUpdate:config": _cache[13] || (_cache[13] = ($event) => emit("update:config", $event))
					}, null, 8, ["config", "disabled"])]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					variant: "outlined",
					class: normalizeClass(_ctx.$style.card)
				}, {
					default: withCtx(() => [createVNode(AgentAdvancedPanel_default, {
						config: __props.localConfig,
						disabled: childrenDisabled.value,
						collapsible: "",
						"onUpdate:config": _cache[14] || (_cache[14] = ($event) => emit("update:config", $event))
					}, null, 8, ["config", "disabled"])]),
					_: 1
				}, 8, ["class"])
			], 2)) : __props.activeMainTab === "executions" ? (openBlock(), createBlock(AgentSessionsListView_default, {
				key: 1,
				"data-testid": "agent-executions-panel"
			})) : __props.activeMainTab === "raw" ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.rawPanel)
			}, [createVNode(AgentJsonEditor_default, {
				value: __props.localConfig,
				"read-only": childrenDisabled.value,
				"copy-button-test-id": "agent-config-json-copy",
				"onUpdate:value": _cache[15] || (_cache[15] = ($event) => emit("update:config", $event))
			}, null, 8, ["value", "read-only"])], 2)) : createCommentVNode("", true)], 2)], 2)], 10, _hoisted_1);
		};
	}
});
var AgentBuilderEditorColumn_vue_vue_type_style_index_0_lang_module_default = {
	editorColumn: "_editorColumn_1n23x_125",
	panelArea: "_panelArea_1n23x_133",
	panelAreaContainer: "_panelAreaContainer_1n23x_145",
	panelHeaderRow: "_panelHeaderRow_1n23x_156",
	mainTabs: "_mainTabs_1n23x_167",
	rawPanel: "_rawPanel_1n23x_171",
	agentCards: "_agentCards_1n23x_179",
	panel: "_panel_1n23x_133",
	card: "_card_1n23x_194"
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
//#region src/features/agents/views/AgentBuilderView.vue?vue&type=script&setup=true&lang.ts
var AGENT_CHAT_PANEL_MIN_WIDTH = 320;
var AGENT_CHAT_PANEL_DEFAULT_WIDTH = 460;
var AGENT_CHAT_PANEL_MAX_WIDTH = 720;
var AGENT_EDITOR_MIN_WIDTH = 360;
var AgentBuilderView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const locale = useI18n();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const telemetry = useTelemetry();
		const sessionsStore = useAgentSessionsStore();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		const { isBuilderConfigured, fetchStatus: fetchBuilderStatus } = useAgentBuilderStatus();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const isPreviewMode = computed(() => route.name === AGENT_PREVIEW_VIEW);
		const projectId = computed(() => route.params.projectId ?? projectsStore.personalProject?.id ?? "");
		const agentId = computed(() => route.params.agentId);
		const { canUpdate: canEditAgent, canDelete: canDeleteAgent } = useAgentPermissions(projectId);
		const isBuildChatStreaming = ref(false);
		const initialPrompt = ref();
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
		const agentName = ref("");
		const agent = ref(null);
		watch(agentName, (name) => {
			documentTitle.set(name || locale.baseText("agents.heading"));
		});
		const { activeChatSessionId, continueSessionId, effectiveSessionId, currentSessionTitle, sessionMenu, setSessionInUrl, clearContinueSessionParam, onSessionPick, onNewChat } = useAgentBuilderSession();
		const sessionOptions = computed(() => sessionMenu.value.map((item) => ({
			id: item.id,
			label: item.when ? `${item.label} · ${item.when}` : item.label ?? item.title,
			disabled: item.disabled
		})));
		const { config, fetchConfig, updateConfig } = useAgentConfig();
		const localConfig = ref(null);
		const connectedTriggers = ref([]);
		const builderContainer = useTemplateRef("builderContainer");
		const isChatFullWidth = ref(false);
		const { activeMainTab, mainTabOptions, executionsDescription } = useAgentBuilderMainTabs({ executionsCount: computed(() => sessionsStore.threads.length) });
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
		watch(config, (c) => {
			if (c) {
				localConfig.value = deepCopy(c);
				syncAgentIdentityFromConfig(c);
			}
		}, { immediate: true });
		function syncAgentIdentityFromConfig(c) {
			agentName.value = c.name;
			if (!agent.value) return;
			agent.value = {
				...agent.value,
				name: c.name,
				description: c.description ?? null
			};
		}
		const projectName = computed(() => {
			if (projectsStore.personalProject?.id === projectId.value) return locale.baseText("projects.menu.personal");
			const current = projectsStore.currentProject;
			if (current && current.id === projectId.value) return current.name ?? null;
			return projectsStore.myProjects.find((p) => p.id === projectId.value)?.name ?? null;
		});
		async function fetchAgent(targetProjectId = projectId.value, targetAgentId = agentId.value) {
			const data = await getAgent(rootStore.restApiContext, targetProjectId, targetAgentId);
			if (agentId.value !== targetAgentId || projectId.value !== targetProjectId) return;
			agent.value = data;
			agentName.value = data.name;
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
				initialPrompt.value = msg;
				telemetry.track("User started agent build", { agent_id: agentId.value });
				nextTick(() => {
					initialPrompt.value = void 0;
				});
			}
		}
		function onPublished(updated) {
			agent.value = updated;
		}
		function onUnpublished(updated) {
			agent.value = updated;
		}
		async function onReverted(updated) {
			agent.value = updated;
			agentName.value = updated.name;
			await fetchConfig(projectId.value, agentId.value);
			builderTelemetry.captureToolsBaseline();
			builderTelemetry.captureSkillsBaseline();
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
		function onOpenBuildFromChat() {
			closePreview();
		}
		async function saveConfig(snapshot) {
			const result = await updateConfig(snapshot.projectId, snapshot.agentId, snapshot.config);
			if (result.stale) return;
			if (agent.value && agent.value.id === snapshot.agentId && result.versionId !== void 0) agent.value = {
				...agent.value,
				versionId: result.versionId
			};
			await fetchAgent(snapshot.projectId, snapshot.agentId);
		}
		async function saveSkill(snapshot) {
			const result = await updateAgentSkill(rootStore.restApiContext, snapshot.projectId, snapshot.agentId, snapshot.skillId, snapshot.skill);
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
		function onConfigFieldUpdate(updates) {
			if (!localConfig.value) return;
			builderTelemetry.recordConfigEdit(updates);
			Object.assign(localConfig.value, updates);
			if (updates.name !== void 0) {
				agentName.value = updates.name;
				if (agent.value) agent.value = {
					...agent.value,
					name: updates.name
				};
			}
			if (updates.description !== void 0 && agent.value) agent.value = {
				...agent.value,
				description: updates.description ?? null
			};
			configAutosave.scheduleAutosave({
				projectId: projectId.value,
				agentId: agentId.value,
				type: "config",
				config: deepCopy(localConfig.value)
			});
		}
		async function onConfigUpdated() {
			await Promise.all([fetchAgent(), fetchConfig(projectId.value, agentId.value)]);
			const triggerTypes = [...(await ensureIntegrationsCatalog(projectId.value).catch(() => [])).map((i) => i.type), AGENT_SCHEDULE_TRIGGER_TYPE];
			const connected = await builderTelemetry.fetchInitialTriggersBaseline(triggerTypes);
			if (connected) connectedTriggers.value = connected;
			builderTelemetry.trackToolsAdded();
			builderTelemetry.trackSkillsAdded();
		}
		const headerActions = computed(() => canDeleteAgent.value ? [{
			id: "delete",
			label: locale.baseText("agents.builder.deleteAgent")
		}] : []);
		async function onHeaderAction(action) {
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
				} catch (error) {
					showError(error, "Could not delete agent");
					return;
				}
				agent.value = null;
				localConfig.value = null;
				agentsEventBus.emit("agentUpdated");
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
			await settleAutosave();
			builderTelemetry.resetForAgentSwitch();
			agent.value = null;
			activeChatSessionId.value = null;
			localConfig.value = null;
			connectedTriggers.value = [];
			fetchBuilderStatus().catch((error) => {
				showError(error, locale.baseText("settings.agentBuilder.loadError"));
			});
			await fetchAgent();
			await fetchConfig(projectId.value, agentId.value);
			builderTelemetry.captureToolsBaseline();
			builderTelemetry.captureSkillsBaseline();
			credentialsStore.setCredentials([]);
			await Promise.all([credentialsStore.fetchAllCredentialsForWorkflow({ projectId: projectId.value }), credentialsStore.fetchCredentialTypes(false)]).catch(() => void 0);
			sessionsStore.stopAutoRefresh();
			sessionsStore.fetchThreads(projectId.value, agentId.value).then(() => {
				sessionsStore.startAutoRefresh();
			});
			(async () => {
				const triggerTypes = [...(await ensureIntegrationsCatalog(projectId.value).catch(() => [])).map((i) => i.type), AGENT_SCHEDULE_TRIGGER_TYPE];
				const connected = await builderTelemetry.fetchInitialTriggersBaseline(triggerTypes);
				if (connected) connectedTriggers.value = connected;
			})();
			if (isPreviewMode.value) bindPreviewSession();
			const prompt = route.query.prompt;
			if (prompt) {
				router.replace({ query: {
					...route.query,
					prompt: void 0
				} });
				startChat(prompt);
			}
			initialized.value = true;
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
		function onOpenAddToolModal() {
			uiStore.openModalWithData({
				name: AGENT_TOOLS_MODAL_KEY,
				data: {
					tools: localConfig.value?.tools ?? [],
					projectId: projectId.value,
					agentId: agentId.value,
					onConfirm: (tools) => onConfigFieldUpdate({ tools })
				}
			});
		}
		function onOpenAddTriggerModal(initialTriggerType) {
			uiStore.openModalWithData({
				name: AGENT_ADD_TRIGGER_MODAL_KEY,
				data: {
					initialTriggerType,
					projectId: projectId.value,
					agentId: agentId.value,
					agentName: agentName.value,
					isPublished: Boolean(agent.value?.activeVersionId),
					connectedTriggers: connectedTriggers.value,
					onConnectedTriggersChange: (triggers) => onConnectedTriggersUpdate(triggers),
					onTriggerAdded: (payload) => onTriggerAdded(payload),
					onAgentPublished: (updated) => onPublished(updated)
				}
			});
		}
		function onOpenToolFromList(index) {
			const tools = localConfig.value?.tools ?? [];
			const tool = tools[index];
			if (!tool) return;
			builderTelemetry.trackOpenedToolFromList(tool.type);
			const customTool = tool.type === "custom" && tool.id ? agent.value?.tools?.[tool.id] : void 0;
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef: tool,
					customTool,
					projectId: projectId.value,
					agentId: agentId.value,
					existingToolNames: tools.map((toolRef, i) => i === index || toolRef.type === "custom" ? null : toolRef.name).filter((name) => !!name),
					onConfirm: (updatedTool) => {
						const nextTools = [...localConfig.value?.tools ?? []];
						nextTools[index] = updatedTool;
						onConfigFieldUpdate({ tools: nextTools });
					},
					onRemove: () => onRemoveTool(index)
				}
			});
		}
		const appliedSkills = computed(() => {
			const refs = localConfig.value?.skills ?? [];
			const seen = /* @__PURE__ */ new Set();
			const out = [];
			for (const skillRef of refs) {
				if (!skillRef.id || seen.has(skillRef.id)) continue;
				seen.add(skillRef.id);
				out.push({
					id: skillRef.id,
					skill: agent.value?.skills?.[skillRef.id] ?? {
						name: skillRef.id,
						description: "",
						instructions: ""
					}
				});
			}
			return out;
		});
		function onOpenSkillFromList(id) {
			const skill = appliedSkills.value.find((s) => s.id === id)?.skill;
			if (!skill) return;
			builderTelemetry.trackOpenedSkillFromList(id);
			uiStore.openModalWithData({
				name: AGENT_SKILL_MODAL_KEY,
				data: {
					projectId: projectId.value,
					agentId: agentId.value,
					skill,
					skillId: id,
					onRemove: (skillId) => onRemoveSkill(skillId),
					onConfirm: ({ id: skillId, skill: updatedSkill }) => {
						if (!skillId) return;
						if (agent.value?.id !== agentId.value) return;
						agent.value = {
							...agent.value,
							skills: {
								...agent.value.skills ?? {},
								[skillId]: updatedSkill
							}
						};
						const nextSkills = [...localConfig.value?.skills ?? []];
						const skillRefIndex = nextSkills.findIndex((skillRef) => skillRef.id === id);
						if (skillRefIndex !== -1) {
							nextSkills[skillRefIndex] = {
								type: "skill",
								id: skillId
							};
							onConfigFieldUpdate({ skills: nextSkills });
						}
					}
				}
			});
		}
		function onRemoveTool(index) {
			const currentTools = localConfig.value?.tools ?? [];
			if (index < 0 || index >= currentTools.length) return;
			onConfigFieldUpdate({ tools: currentTools.filter((_, i) => i !== index) });
		}
		function onRemoveSkill(id) {
			onConfigFieldUpdate({ skills: (localConfig.value?.skills ?? []).filter((skillRef) => skillRef.id !== id) });
		}
		function onOpenAddSkillModal() {
			builderTelemetry.trackOpenedAddSkillModal();
			uiStore.openModalWithData({
				name: AGENT_SKILL_MODAL_KEY,
				data: {
					projectId: projectId.value,
					agentId: agentId.value,
					onConfirm: ({ skill }) => {
						(async () => {
							let created;
							let versionId;
							let skillId;
							try {
								const result = await createAgentSkill(rootStore.restApiContext, projectId.value, agentId.value, skill);
								skillId = result.id;
								created = result.skill;
								versionId = result.versionId;
							} catch (error) {
								showError(error, locale.baseText("agents.builder.skills.create.error"));
								return;
							}
							if (agent.value?.id !== agentId.value) return;
							agent.value = {
								...agent.value,
								versionId,
								skills: {
									...agent.value.skills ?? {},
									[skillId]: created
								}
							};
							onConfigFieldUpdate({ skills: [...localConfig.value?.skills ?? [], {
								type: "skill",
								id: skillId
							}] });
							showMessage({
								title: locale.baseText("agents.builder.skills.added"),
								type: "success"
							});
						})();
					}
				}
			});
		}
		function onQuickActionAddTool(tools) {
			onConfigFieldUpdate({ tools });
		}
		function onConnectedTriggersUpdate(triggers) {
			connectedTriggers.value = triggers;
			builderTelemetry.trackTriggerListChanged(triggers);
		}
		function onTriggerAdded(payload) {
			connectedTriggers.value = payload.triggers;
			builderTelemetry.trackTriggerAdded(payload);
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createVNode(AgentBuilderHeader_default, {
				agent: agent.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"project-name": projectName.value,
				"header-actions": headerActions.value,
				"save-status": saveStatus.value,
				mode: isPreviewMode.value ? "preview" : "edit",
				"current-session-title": unref(currentSessionTitle),
				"session-options": sessionOptions.value,
				"before-revert-to-published": settleAutosave,
				onHeaderAction,
				onOpenPreview,
				onNewChat: unref(onNewChat),
				onClosePreview: closePreview,
				onSessionSelect: unref(onSessionPick),
				onPublished,
				onUnpublished,
				onReverted,
				onSwitchAgent
			}, null, 8, [
				"agent",
				"project-id",
				"agent-id",
				"project-name",
				"header-actions",
				"save-status",
				"mode",
				"current-session-title",
				"session-options",
				"onNewChat",
				"onSessionSelect"
			]), createBaseVNode("div", {
				ref_key: "builderContainer",
				ref: builderContainer,
				class: normalizeClass({
					[_ctx.$style.builder]: true,
					[_ctx.$style.isResizingChat]: unref(chatPanelResizer).isResizing.value,
					[_ctx.$style.previewBuilder]: isPreviewMode.value
				})
			}, [isPreviewMode.value ? (openBlock(), createBlock(AgentPreviewChatPage_default, {
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
			])) : (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				key: 1,
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
					"can-edit-agent": unref(canEditAgent),
					"before-build-send": flushAutosave,
					onConfigUpdated,
					"onUpdate:streaming": onBuildChatStreamingChange,
					"onUpdate:tools": onQuickActionAddTool,
					"onUpdate:connectedTriggers": onConnectedTriggersUpdate,
					"onUpdate:fullWidth": _cache[0] || (_cache[0] = ($event) => isChatFullWidth.value = $event),
					onTriggerAdded,
					onAgentPublished: onPublished
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
					"can-edit-agent"
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
			])), !isPreviewMode.value && !isChatFullWidth.value ? (openBlock(), createBlock(AgentBuilderEditorColumn_default, {
				key: 2,
				class: normalizeClass(_ctx.$style.editorColumn),
				"active-main-tab": unref(activeMainTab),
				"onUpdate:activeMainTab": _cache[1] || (_cache[1] = ($event) => isRef(activeMainTab) ? activeMainTab.value = $event : null),
				"local-config": localConfig.value,
				agent: agent.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"applied-skills": appliedSkills.value,
				"connected-triggers": connectedTriggers.value,
				"is-build-chat-streaming": isBuildChatStreaming.value,
				"can-edit-agent": unref(canEditAgent),
				"main-tab-options": unref(mainTabOptions),
				"executions-description": unref(executionsDescription),
				"onUpdate:config": onConfigFieldUpdate,
				onOpenTool: onOpenToolFromList,
				onOpenSkill: onOpenSkillFromList,
				onOpenTrigger: onOpenAddTriggerModal,
				onAddTool: onOpenAddToolModal,
				onAddSkill: onOpenAddSkillModal,
				onAddTrigger: onOpenAddTriggerModal,
				onRemoveTool,
				onRemoveSkill,
				"onUpdate:connectedTriggers": onConnectedTriggersUpdate,
				onTriggerAdded
			}, null, 8, [
				"class",
				"active-main-tab",
				"local-config",
				"agent",
				"project-id",
				"agent-id",
				"applied-skills",
				"connected-triggers",
				"is-build-chat-streaming",
				"can-edit-agent",
				"main-tab-options",
				"executions-description"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var AgentBuilderView_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_ugdf4_125",
	builder: "_builder_ugdf4_132",
	previewBuilder: "_previewBuilder_ugdf4_139",
	chatResizer: "_chatResizer_ugdf4_143",
	chatResizerFullWidth: "_chatResizerFullWidth_ugdf4_167",
	isResizingChat: "_isResizingChat_ugdf4_171",
	editorColumn: "_editorColumn_ugdf4_175"
};
var AgentBuilderView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentBuilderView_default as default };
