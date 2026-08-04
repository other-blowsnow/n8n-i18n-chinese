import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-H3H6Z9UB.js";
import { Ai as N8nText_default, Ii as N8nButton_default, Li as N8nIcon_default, en as DropdownMenu_default, jr as N8nTooltip_default, t as MarkdownEditor_default } from "./src-D0J2qzpK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { B as useDebounceFn } from "./dist-CmlFwYoT.js";
import { t as useToast } from "./useToast-CL5w_AIp.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { L as useNodeTypesStore } from "./workflows.store-WmGfSEo0.js";
import { G as NATIVE_WEB_SEARCH_PROVIDER_TOOLS, J as resolvePromptCaching, K as PROVIDER_CAPABILITIES, U as ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS, W as NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER, X as isAgentModelProvider } from "./src-CYAJL8H-.js";
import { t as useRootStore } from "./useRootStore-G5KSjJVg.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
import { Dr as AGENT_TASK_MODAL_KEY, Er as AGENT_SUB_AGENTS_MODAL_KEY, Or as AGENT_TOOLS_MODAL_KEY, Tr as AGENT_SKILL_MODAL_KEY, kr as AGENT_TOOL_CONFIG_MODAL_KEY } from "./constants-B41t77fU.js";
import { t as DEBOUNCE_TIME } from "./durations-CNO5pC2_.js";
import { o as useUIStore } from "./posthog.store-D9oFJCkF.js";
import { t as getDebounceTime } from "./useDebounce-D0e4CozO.js";
import { t as NodeIcon_default } from "./NodeIcon-CbDdsWWW.js";
import { P as updateAgentConfig, h as getAgentTasks, i as createAgentSkill, p as getAgentConfig } from "./useAgentApi-yjeRrdO9.js";
import { a as sanitizeModelId, c as useAgentProjectId, n as modelToString, o as useModelCatalog, r as parseModelString, s as useAgentModelCredentials, t as AgentModelSelector_default } from "./AgentModelSelector-WNnhPCTN.js";
import { t as agent_panel_module_default } from "./agent-panel.module-DTACCpYR.js";
import "./menuItemId-Ts5wPrjx.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-Epy8i85w.js";
import { n as mcpServerToNode, s as toolRefToNode } from "./useMcpServerAdapter-CV99WyOA.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-FBPOKI68.js";
import { n as AgentChipButton_default, t as normalizeAgentSkillForSave } from "./agentSkill-B92M4hBP.js";
//#region src/features/agents/utils/nativeWebSearch.ts
function isFallbackWebSearchProvider(provider) {
	return provider === "brave" || provider === "searxng";
}
function stripNativeWebSearchProviderTools(providerTools) {
	if (!providerTools) return void 0;
	const next = { ...providerTools };
	for (const key of NATIVE_WEB_SEARCH_PROVIDER_TOOLS) delete next[key];
	return next;
}
function getWebSearchMethod(config, hasNativeWebSearch) {
	const configuredProvider = config?.config?.webSearch?.provider;
	if (isFallbackWebSearchProvider(configuredProvider)) return configuredProvider;
	return hasNativeWebSearch ? "native" : "brave";
}
function getNativeWebSearchArgs(config, providerTool) {
	if (!providerTool) return {};
	if (providerTool === "anthropic.web_search") {
		const matchingTool = ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS.find((tool) => config?.providerTools?.[tool]);
		return { ...matchingTool ? config?.providerTools?.[matchingTool] : {} };
	}
	return { ...config?.providerTools?.[providerTool] ?? {} };
}
function getDefaultNativeWebSearchArgs(providerTool) {
	const defaults = Object.values(NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER).find((defaultsByProvider) => defaultsByProvider.toolName === providerTool);
	return defaults ? { ...defaults.args } : {};
}
function withNativeWebSearchConfig(config, enabled, providerTool, args = {}) {
	const providerTools = { ...stripNativeWebSearchProviderTools(config?.providerTools) ?? {} };
	const changes = { config: {
		...config?.config ?? {},
		webSearch: enabled ? {
			enabled: true,
			provider: "native"
		} : { enabled: false }
	} };
	if (enabled && providerTool) providerTools[providerTool] = {
		...getDefaultNativeWebSearchArgs(providerTool),
		...args
	};
	if (config?.providerTools || enabled && providerTool) changes.providerTools = providerTools;
	return changes;
}
function withWebSearchConfig(config, enabled, method, providerTool, args = {}, credential = "") {
	if (!enabled) return {
		config: {
			...config?.config ?? {},
			webSearch: { enabled: false }
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
	if (method === "native" && providerTool) return withNativeWebSearchConfig(config, true, providerTool, args);
	const webSearch = method === "native" ? { enabled: false } : {
		enabled: true,
		provider: method,
		...credential && { credential }
	};
	return {
		config: {
			...config?.config ?? {},
			webSearch
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
}
function normalizeWebSearchForModelChange(config, nextProviderTool) {
	const webSearch = config?.config?.webSearch;
	if (!webSearch) return config?.providerTools ? { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} } : {};
	const method = getWebSearchMethod(config, Boolean(nextProviderTool));
	if (isFallbackWebSearchProvider(webSearch.provider)) return withWebSearchConfig(config, webSearch.enabled, method, nextProviderTool, {}, webSearch.credential);
	if (!webSearch.enabled) return withWebSearchConfig(config, false, "native", nextProviderTool);
	return nextProviderTool ? withNativeWebSearchConfig(config, true, nextProviderTool) : withWebSearchConfig(config, false, "native", nextProviderTool);
}
//#endregion
//#region src/features/agents/utils/promptCaching.ts
/**
* Prompt caching is mandatory for supported providers (OpenAI/Anthropic): it
* always resolves to `{ enabled: true }` for a newly selected supported
* provider (the user cannot disable it), preserves an explicit Anthropic TTL
* across the switch, and strips the field entirely when the newly selected
* provider doesn't support it.
*
* `currentSubConfig` should be the agent's `config.config`, already merged
* with any other in-flight normalization (e.g. web search) for the same
* model change, so this composes without one normalizer clobbering another.
*/
function normalizePromptCachingForModelChange(currentSubConfig, nextPromptCachingCapability) {
	const current = currentSubConfig?.promptCaching;
	const resolved = resolvePromptCaching(current, nextPromptCachingCapability);
	if (!resolved) {
		if (!current) return {};
		const { promptCaching: _promptCaching, ...restConfig } = currentSubConfig ?? {};
		return { config: Object.keys(restConfig).length > 0 ? restConfig : void 0 };
	}
	return { config: {
		...currentSubConfig ?? {},
		promptCaching: resolved
	} };
}
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
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
			})) : createCommentVNode("", true)], 2), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.actions)
			}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
	text: "_text_1gwsm_125",
	row: "_row_1gwsm_133",
	copy: "_copy_1gwsm_139",
	actions: "_actions_1gwsm_147"
};
var AgentPanelHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentInfoPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-testid"];
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
		},
		projectId: {},
		instructionsMaxHeight: { default: "360px" },
		showModel: {
			type: Boolean,
			default: true
		},
		showInstructions: {
			type: Boolean,
			default: true
		},
		showInstructionsToolbar: {
			type: Boolean,
			default: false
		},
		immediateUpdates: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		/**
		* Combined editor for the core agent fields: name, model, and instructions.
		* Credential selection is handled inside the model picker — no separate
		* credential field.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const { showError } = useToast();
		const { ensureLoaded, getModelsForPicker, isLoading } = useModelCatalog();
		const projectId = useAgentProjectId(() => props.projectId);
		const { credentialsByProvider, selectCredential } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectId);
		watch(projectId, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		const filteredAgents = computed(() => getModelsForPicker(credentialsByProvider.value));
		const selectedAgent = computed(() => {
			const modelStr = modelToString(props.config?.model);
			if (!modelStr) return null;
			const parsed = parseModelString(modelStr);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return null;
			const registryEntry = filteredAgents.value[parsed.provider]?.models.find((m) => m.model === parsed.name);
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
		const panelTestId = computed(() => {
			if (props.showModel && !props.showInstructions) return "agent-model-panel";
			if (!props.showModel && props.showInstructions) return "agent-instructions-panel";
			return "agent-info-panel";
		});
		const instructionsToolbarMode = computed(() => props.showInstructionsToolbar ? "always" : "never");
		function onModelChange(selection) {
			const credentialId = credentialsByProvider.value?.[selection.provider];
			if (!credentialId) {
				showError(new Error(i18n.baseText("credentials.noResults")), i18n.baseText("error"));
				return;
			}
			const model = `${selection.provider}/${sanitizeModelId(selection.provider, selection.model)}`;
			const capabilities = PROVIDER_CAPABILITIES[selection.provider];
			const webSearchChanges = normalizeWebSearchForModelChange(props.config, capabilities?.webSearch ?? false);
			emit("update:config", {
				model,
				credential: credentialId,
				...webSearchChanges,
				...normalizePromptCachingForModelChange(webSearchChanges.config ?? props.config?.config, capabilities?.promptCaching ?? false)
			});
		}
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
			if (parseModelString(modelToString(props.config?.model))?.provider === provider && credentialId) emit("update:config", { credential: credentialId });
		}
		const instructions = ref(props.config?.instructions ?? "");
		watch(() => props.config?.instructions ?? "", (value) => {
			if (value !== instructions.value) instructions.value = value;
		});
		const emitInstructionsDebounced = useDebounceFn(() => {
			emit("update:config", { instructions: instructions.value });
		}, getDebounceTime(DEBOUNCE_TIME.API.HEAVY_OPERATION));
		function onInstructionsInput(value) {
			instructions.value = value;
			if (props.immediateUpdates) {
				emit("update:config", { instructions: value });
				return;
			}
			emitInstructionsDebounced();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": panelTestId.value
			}, [
				!props.embedded ? (openBlock(), createBlock(AgentPanelHeader_default, {
					key: 0,
					title: unref(i18n).baseText("agents.builder.agent.title"),
					description: unref(i18n).baseText("agents.builder.agent.description")
				}, null, 8, ["title", "description"])) : createCommentVNode("", true),
				props.showModel ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.field])
				}, [createBaseVNode("label", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.label")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(AgentModelSelector_default, {
					disabled: props.disabled,
					"selected-model": selectedAgent.value,
					credentials: unref(credentialsByProvider),
					"models-by-provider": filteredAgents.value,
					"is-loading": unref(isLoading),
					"project-id": unref(projectId),
					"warn-missing-credentials": true,
					"data-testid": "agent-model-selector",
					onChange: onModelChange,
					onSelectCredential
				}, null, 8, [
					"disabled",
					"selected-model",
					"credentials",
					"models-by-provider",
					"is-loading",
					"project-id"
				])], 2)) : createCommentVNode("", true),
				props.showInstructions ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.field])
				}, [createBaseVNode("label", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.label")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(MarkdownEditor_default), {
					class: normalizeClass(_ctx.$style.instructionsDocument),
					"model-value": instructions.value,
					disabled: props.disabled,
					"show-toolbar": instructionsToolbarMode.value,
					"max-height": props.instructionsMaxHeight,
					variant: "contained",
					"data-testid": "agent-instructions-document",
					"onUpdate:modelValue": onInstructionsInput
				}, null, 8, [
					"class",
					"model-value",
					"disabled",
					"show-toolbar",
					"max-height"
				])], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
var AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_12ntl_2",
	instructionsDocument: "_instructionsDocument_12ntl_11",
	field: "_field_12ntl_27",
	label: "_label_12ntl_33"
};
var AgentInfoPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentInfoPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default }]]);
function toUngroupedToolRow(row) {
	const item = {
		index: row.index,
		label: row.label,
		nodeType: row.nodeType,
		openTarget: row.openTarget,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons
	};
	return {
		index: row.index,
		label: row.label,
		typeLabel: row.typeLabel,
		nodeType: row.nodeType,
		fallbackIcon: row.fallbackIcon,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons,
		isGrouped: false,
		tool: item
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
		invalid: group.some((row) => row.invalid),
		invalidReasons: [...new Set(group.flatMap((row) => row.invalidReasons))],
		isGrouped: true,
		tools: group.map((row) => ({
			index: row.index,
			label: row.label,
			nodeType: row.nodeType,
			openTarget: row.openTarget,
			invalid: row.invalid,
			invalidReasons: row.invalidReasons
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
var AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCapabilitiesSection",
	props: {
		config: {},
		tools: {},
		customTools: {},
		skills: {},
		disabled: {
			type: Boolean,
			default: false
		},
		projectId: {},
		agentId: {},
		isPublished: { type: Boolean },
		taskRefs: { default: () => [] },
		reloadKey: {},
		validationIssues: { default: () => [] },
		sections: { default: () => [
			"tools",
			"skills",
			"subAgents",
			"tasks"
		] }
	},
	emits: [
		"open-tool",
		"open-skill",
		"add-tool",
		"add-skill",
		"remove-tool",
		"remove-skill",
		"toggle-task",
		"tasks-changed",
		"update:config"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visibleSections = computed(() => new Set(props.sections));
		function showSection(section) {
			return visibleSections.value.has(section);
		}
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const { list: projectAgents, ensureLoaded: ensureProjectAgentsLoaded } = useProjectAgentsList(computed(() => props.projectId));
		const mcpServers = computed(() => props.config?.mcpServers ?? []);
		const selectedSubAgentRefs = computed(() => props.config?.subAgents?.agents ?? []);
		const selectedSubAgentIds = computed(() => selectedSubAgentRefs.value.map(({ agentId }) => agentId));
		const selectedSubAgentIdSet = computed(() => new Set(selectedSubAgentIds.value));
		const availableSubAgents = computed(() => (projectAgents.value ?? []).filter((agent) => agent.id !== props.agentId && Boolean(agent.activeVersionId) && !selectedSubAgentIdSet.value.has(agent.id)));
		const selectedSubAgents = computed(() => selectedSubAgentRefs.value.map(({ agentId, useWhen }) => {
			const agent = projectAgents.value?.find((candidate) => candidate.id === agentId);
			const reasons = subAgentIssueMessages.value.get(agentId) ?? [];
			return {
				id: agentId,
				name: agent?.name ?? agentId,
				useWhen: useWhen ?? "",
				invalid: reasons.length > 0,
				invalidReasons: reasons
			};
		}));
		const taskBodies = ref([]);
		const taskErrorMessage = ref("");
		const taskRows = computed(() => {
			const bodiesById = new Map(taskBodies.value.map((body) => [body.id, body]));
			return props.taskRefs.map((taskRef) => {
				const body = bodiesById.get(taskRef.id);
				if (!body) return null;
				const reasons = taskIssueMessages.value.get(taskRef.id) ?? [];
				return {
					...body,
					enabled: taskRef.enabled,
					invalid: reasons.length > 0,
					invalidReasons: reasons
				};
			}).filter((task) => task !== null);
		});
		const GENERIC_ISSUE_KEYS = {
			missing_required: "agents.builder.validation.issue.missingRequired",
			invalid_value: "agents.builder.validation.issue.invalidValue",
			missing_credential: "agents.builder.validation.issue.missingCredential",
			invalid_credential: "agents.builder.validation.issue.invalidCredential",
			incompatible_credential: "agents.builder.validation.issue.incompatibleCredential",
			missing_reference: "agents.builder.validation.issue.missingReference",
			incompatible_reference: "agents.builder.validation.issue.incompatibleReference"
		};
		/** Kind-specific overrides, keyed `<kind>.<code>` or `tool.<toolType>.<code>`. */
		const SPECIFIC_ISSUE_KEYS = {
			"subAgent.missing_reference": "agents.builder.validation.issue.subAgent.missingReference",
			"subAgent.incompatible_reference": "agents.builder.validation.issue.subAgent.incompatibleReference",
			"skill.missing_reference": "agents.builder.validation.issue.skill.missingReference",
			"task.invalid_value": "agents.builder.validation.issue.task.invalidValue",
			"tool.workflow.missing_reference": "agents.builder.validation.issue.tool.workflow.missingReference",
			"tool.workflow.incompatible_reference": "agents.builder.validation.issue.tool.workflow.incompatibleReference",
			"tool.custom.missing_reference": "agents.builder.validation.issue.tool.custom.missingReference",
			"tool.node.missing_reference": "agents.builder.validation.issue.tool.node.missingReference",
			"mcpServer.incompatible_credential": "agents.builder.validation.issue.mcpServer.incompatibleCredential"
		};
		function issueMessage(issue) {
			const { kind, toolType, id } = issue.capability;
			const key = (kind === "tool" && toolType ? SPECIFIC_ISSUE_KEYS[`tool.${toolType}.${issue.code}`] : void 0) ?? SPECIFIC_ISSUE_KEYS[`${kind}.${issue.code}`] ?? GENERIC_ISSUE_KEYS[issue.code];
			return i18n.baseText(key, { interpolate: { id: id ?? "" } });
		}
		function issueMessages(issues) {
			return [...new Set(issues.map(issueMessage))];
		}
		function issuesFor(kind) {
			return props.validationIssues.filter((issue) => issue.capability.kind === kind);
		}
		/** Group a capability kind's issues into per-key message lists, keyed by `keyOf`. */
		function groupIssueMessages(kind, keyOf) {
			const byKey = /* @__PURE__ */ new Map();
			for (const issue of issuesFor(kind)) {
				const key = keyOf(issue);
				if (key === void 0) continue;
				const existing = byKey.get(key);
				if (existing) existing.push(issue);
				else byKey.set(key, [issue]);
			}
			return new Map([...byKey].map(([key, issues]) => [key, issueMessages(issues)]));
		}
		const toolIssueMessages = computed(() => groupIssueMessages("tool", (issue) => issue.capability.index));
		const mcpServerIssueMessages = computed(() => groupIssueMessages("mcpServer", (issue) => issue.capability.id));
		const skillIssueMessages = computed(() => groupIssueMessages("skill", (issue) => issue.capability.id));
		const taskIssueMessages = computed(() => groupIssueMessages("task", (issue) => issue.capability.id));
		const subAgentIssueMessages = computed(() => groupIssueMessages("subAgent", (issue) => issue.capability.id));
		async function reloadTasks() {
			taskErrorMessage.value = "";
			try {
				taskBodies.value = await getAgentTasks(rootStore.restApiContext, props.projectId, props.agentId);
			} catch (error) {
				taskErrorMessage.value = error instanceof Error && error.message ? error.message : i18n.baseText("agents.builder.tasks.loadError");
			}
		}
		onMounted(() => {
			if (showSection("tasks")) reloadTasks();
			if (showSection("subAgents")) ensureProjectAgentsLoaded().catch(() => {});
		});
		watch([
			() => props.reloadKey,
			() => props.projectId,
			() => props.agentId
		], () => {
			if (showSection("tasks")) reloadTasks();
		});
		function openTaskModal(task) {
			uiStore.openModalWithData({
				name: AGENT_TASK_MODAL_KEY,
				data: {
					projectId: props.projectId,
					agentId: props.agentId,
					task,
					isPublished: props.isPublished,
					taskState: task ? { enabled: task.enabled } : void 0,
					onToggle: (payload) => emit("toggle-task", payload),
					onSaved: () => emit("tasks-changed")
				}
			});
		}
		function toToolOpenTarget(tool) {
			if (tool.type === "custom") return {
				kind: "tool",
				toolType: "custom",
				id: tool.id
			};
			if (tool.type === "workflow") return {
				kind: "tool",
				toolType: "workflow",
				id: tool.workflow
			};
			return {
				kind: "tool",
				toolType: "node",
				id: tool.name
			};
		}
		const capabilityTools = computed(() => [...props.tools.map((tool, index) => ({
			kind: "tool",
			index,
			tool,
			openTarget: toToolOpenTarget(tool)
		})), ...mcpServers.value.map((server, index) => ({
			kind: "mcpServer",
			index: props.tools.length + index,
			server,
			openTarget: {
				kind: "mcpServer",
				serverName: server.name
			}
		}))]);
		function toolLabel(entry) {
			if (entry.kind === "mcpServer") return formatToolNameForDisplay(entry.server.name);
			const { tool, index } = entry;
			if (tool.type === "custom") return formatToolNameForDisplay((tool.id ? props.customTools?.[tool.id]?.descriptor.name : void 0) ?? tool.id ?? `${tool.type}-${index + 1}`);
			if (tool.type === "workflow") return formatToolNameForDisplay(tool.name ?? tool.workflow ?? `${tool.type}-${index + 1}`);
			return formatToolNameForDisplay(tool.name ?? `${tool.type}-${index + 1}`);
		}
		function toolIcon(entry) {
			if (entry.kind === "mcpServer") return "mcp";
			const { tool } = entry;
			if (tool.type === "workflow") return "workflow";
			if (tool.type === "custom") return "code";
			return "globe";
		}
		function toolNodeType(entry) {
			if (entry.kind === "mcpServer") {
				const preferredTypeName = entry.server.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
				return nodeTypesStore.getNodeType(preferredTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool") ?? null;
			}
			const { tool } = entry;
			const node = toolRefToNode(tool);
			if (!node) return null;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion) ?? null;
		}
		function toolTypeLabel(entry, nodeType = toolNodeType(entry)) {
			if (entry.kind === "mcpServer") return nodeType?.displayName ?? toolLabel(entry);
			const { tool } = entry;
			if (tool.type === "node") return nodeType?.displayName.replace(/ Tool$/, "") ?? toolLabel(entry);
			if (tool.type === "workflow") return i18n.baseText("agents.builder.tools.type.workflow");
			if (tool.type === "custom") return i18n.baseText("agents.builder.tools.type.custom");
			return toolLabel(entry);
		}
		function toolEntryReasons(entry) {
			if (entry.kind === "mcpServer") return mcpServerIssueMessages.value.get(entry.server.name) ?? [];
			return toolIssueMessages.value.get(entry.index) ?? [];
		}
		const toolRows = computed(() => {
			return buildToolRows(capabilityTools.value.map((entry) => {
				const nodeType = toolNodeType(entry);
				const reasons = toolEntryReasons(entry);
				return {
					index: entry.index,
					label: toolLabel(entry),
					typeLabel: toolTypeLabel(entry, nodeType),
					nodeType,
					fallbackIcon: toolIcon(entry),
					toolType: entry.kind === "tool" ? entry.tool.type : "mcpServer",
					openTarget: entry.openTarget,
					invalid: reasons.length > 0,
					invalidReasons: reasons
				};
			}));
		});
		function toTargetKey(target) {
			if (target.kind === "mcpServer") return `mcpServer:${encodeURIComponent(target.serverName)}`;
			return `tool:${target.toolType}:${encodeURIComponent(target.id)}`;
		}
		function fromTargetKey(key) {
			const [scope, toolType, ...rest] = key.split(":");
			if (scope === "mcpServer") {
				const encodedServerName = toolType;
				if (!encodedServerName) return null;
				return {
					kind: "mcpServer",
					serverName: decodeURIComponent(encodedServerName)
				};
			}
			if (scope !== "tool") return null;
			if (toolType !== "node" && toolType !== "workflow" && toolType !== "custom") return null;
			const encodedId = rest.join(":");
			if (!encodedId) return null;
			return {
				kind: "tool",
				toolType,
				id: decodeURIComponent(encodedId)
			};
		}
		function toolMenuItems(tool) {
			if (!tool.isGrouped) return [];
			return tool.tools.map((item) => ({
				id: toTargetKey(item.openTarget),
				label: item.label,
				data: {
					nodeType: item.nodeType,
					openTarget: item.openTarget
				}
			}));
		}
		function onToolMenuSelect(key) {
			const target = fromTargetKey(key);
			if (!target) return;
			emit("open-tool", target);
		}
		function emitSubAgentRefs(agents) {
			emit("update:config", { subAgents: {
				...props.config?.subAgents ?? {},
				agents
			} });
		}
		function toSubAgentRef(agentId, useWhen) {
			return {
				agentId,
				...useWhen ? { useWhen } : {}
			};
		}
		async function openSubAgentsModal() {
			try {
				await ensureProjectAgentsLoaded();
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.subAgents.loadError"));
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					agents: availableSubAgents.value.map(({ id, name }) => ({
						id,
						name
					})),
					onConfirm: ({ agentId, useWhen }) => {
						if (selectedSubAgentIdSet.value.has(agentId)) return;
						emitSubAgentRefs([...selectedSubAgentRefs.value, toSubAgentRef(agentId, useWhen)]);
					}
				}
			});
		}
		function openExistingSubAgentModal(subAgent) {
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					selectedAgent: {
						id: subAgent.id,
						name: subAgent.name
					},
					useWhen: subAgent.useWhen,
					invalidReasons: subAgent.invalidReasons,
					onConfirm: ({ agentId, useWhen }) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.map((ref) => ref.agentId === agentId ? toSubAgentRef(agentId, useWhen) : ref));
					},
					onRemove: (agentId) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.filter((ref) => ref.agentId !== agentId));
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.section),
				"data-testid": "agent-capabilities-section"
			}, [
				showSection("tools") ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [toolRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(toolRows.value, (tool, toolIndex) => {
					return openBlock(), createElementBlock("div", {
						key: `tool-${tool.index}`,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [tool.isGrouped ? (openBlock(), createBlock(unref(DropdownMenu_default), {
						key: 0,
						items: toolMenuItems(tool),
						disabled: props.disabled,
						placement: "bottom-start",
						"data-testid": "agent-capabilities-tool-group",
						onSelect: onToolMenuSelect
					}, {
						trigger: withCtx(() => [createVNode(AgentChipButton_default, {
							invalid: tool.invalid,
							"invalid-reasons": tool.invalidReasons,
							disabled: props.disabled,
							class: normalizeClass(_ctx.$style.capabilityChip),
							"data-testid": "agent-capabilities-tool-row"
						}, {
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
						}, 1032, [
							"invalid",
							"invalid-reasons",
							"disabled",
							"class"
						])]),
						"item-leading": withCtx(({ item, ui }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
							key: 0,
							"node-type": item.data.nodeType,
							size: 16,
							class: normalizeClass(ui.class)
						}, null, 8, ["node-type", "class"])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["items", "disabled"])) : tool.nodeType ? (openBlock(), createBlock(AgentChipButton_default, {
						key: 1,
						invalid: tool.invalid,
						"invalid-reasons": tool.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.tool.openTarget)
					}, {
						icon: withCtx(() => [createVNode(NodeIcon_default, {
							"node-type": tool.nodeType,
							size: 16
						}, null, 8, ["node-type"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					])) : (openBlock(), createBlock(AgentChipButton_default, {
						key: 2,
						icon: tool.fallbackIcon,
						invalid: tool.invalid,
						"invalid-reasons": tool.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.tool.openTarget)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, [
						"icon",
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					])), toolIndex === toolRows.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						content: unref(i18n).baseText("agents.builder.tools.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-tool",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("add-tool"))
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), toolRows.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.tools.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-tool",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("add-tool"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("skills") ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [__props.skills.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.skills, ({ id, skill }, skillIndex) => {
					return openBlock(), createElementBlock("div", {
						key: id,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(AgentChipButton_default, {
						icon: "sparkles",
						invalid: (skillIssueMessages.value.get(id) ?? []).length > 0,
						"invalid-reasons": skillIssueMessages.value.get(id) ?? [],
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-skill-row",
						onClick: ($event) => emit("open-skill", id)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(skill.name || id), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					]), skillIndex === __props.skills.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("agents.builder.skills.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-skill",
							onClick: _cache[2] || (_cache[2] = ($event) => emit("add-skill"))
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), __props.skills.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.skills.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-skill",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("add-skill"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("subAgents") ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [selectedSubAgents.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(selectedSubAgents.value, (subAgent, subAgentIndex) => {
					return openBlock(), createElementBlock("div", {
						key: subAgent.id,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(AgentChipButton_default, {
						icon: "bot",
						invalid: subAgent.invalid,
						"invalid-reasons": subAgent.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-sub-agent-row",
						onClick: ($event) => openExistingSubAgentModal(subAgent)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(subAgent.name), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					]), subAgentIndex === selectedSubAgents.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("agents.builder.subAgents.modal.title"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-sub-agent",
							onClick: openSubAgentsModal
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), selectedSubAgents.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.subAgents.modal.title"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-sub-agent",
						onClick: openSubAgentsModal
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("tasks") ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [taskRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(taskRows.value, (task, taskIndex) => {
						return openBlock(), createElementBlock("div", {
							key: task.id,
							class: normalizeClass(_ctx.$style.chipGroup)
						}, [createVNode(AgentChipButton_default, {
							icon: "clipboard-list",
							invalid: task.invalid,
							"invalid-reasons": task.invalidReasons,
							disabled: props.disabled,
							class: normalizeClass(_ctx.$style.capabilityChip),
							"data-testid": "agent-capabilities-task-row",
							onClick: ($event) => openTaskModal(task)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.name), 1)]),
							_: 2
						}, 1032, [
							"invalid",
							"invalid-reasons",
							"disabled",
							"class",
							"onClick"
						]), taskIndex === taskRows.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(i18n).baseText("agents.builder.tasks.add"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "ghost",
								size: "medium",
								"icon-only": "",
								disabled: props.disabled,
								"data-testid": "agent-capabilities-add-task",
								onClick: _cache[4] || (_cache[4] = ($event) => openTaskModal(null))
							}, {
								icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "plus",
									size: 16,
									color: "text-light"
								})]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true)], 2);
					}), 128)),
					taskRows.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(unref(N8nTooltip_default), {
						disabled: "",
						content: unref(i18n).baseText("agents.builder.tasks.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							class: normalizeClass(_ctx.$style.addButtonEmpty),
							variant: "ghost",
							size: "medium",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-task",
							onClick: _cache[5] || (_cache[5] = ($event) => openTaskModal(null))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.add")), 1)]),
							_: 1
						}, 8, ["class", "disabled"])]),
						_: 1
					}, 8, ["content"])], 2)) : createCommentVNode("", true),
					taskErrorMessage.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						class: normalizeClass(_ctx.$style.error)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(taskErrorMessage.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : createCommentVNode("", true)
			], 2)]);
		};
	}
});
var AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1lb72_125",
	capabilityRow: "_capabilityRow_1lb72_132",
	rowLabel: "_rowLabel_1lb72_138",
	chips: "_chips_1lb72_145",
	chipGroup: "_chipGroup_1lb72_153",
	addButtonEmpty: "_addButtonEmpty_1lb72_162",
	capabilityChip: "_capabilityChip_1lb72_168",
	groupChipLabel: "_groupChipLabel_1lb72_172",
	error: "_error_1lb72_178"
};
var AgentCapabilitiesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentCapabilitiesActions.ts
/**
* The set of capability-action handlers wired to `AgentCapabilitiesSection`
* (tools, skills, tasks, triggers). Extracted from `AgentBuilderView` so a
* second surface (the agent node's NDV) can reuse them with its own
* config-update funnel + telemetry adapter.
*/
function useAgentCapabilitiesActions(deps) {
	const { localConfig, agent, projectId, agentId, connectedTriggers, scheduleConfigUpdate, scheduleSkillSave, localSkills, supportsToolApproval, telemetry } = deps;
	const locale = useI18n();
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const { showError, showMessage } = useToast();
	function onOpenAddToolModal() {
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_TOOLS_MODAL_KEY,
			data: {
				tools: localConfig.value?.tools ?? [],
				mcpServers: localConfig.value?.mcpServers ?? [],
				projectId: projectId.value,
				agentId: targetAgentId,
				supportsToolApproval,
				onConfirm: (payload) => {
					if (agentId.value !== targetAgentId) return;
					scheduleConfigUpdate({
						...payload.tools && { tools: payload.tools },
						...payload.mcpServers && { mcpServers: payload.mcpServers }
					});
				}
			}
		});
	}
	function onOpenToolFromList(target) {
		const tools = localConfig.value?.tools ?? [];
		const toolIndex = typeof target === "number" ? target : tools.findIndex((tool) => {
			if (target.kind !== "tool") return false;
			if (tool.type !== target.toolType) return false;
			if (tool.type === "node") return tool.name === target.id;
			if (tool.type === "workflow") return tool.workflow === target.id;
			return tool.id === target.id;
		});
		const tool = toolIndex >= 0 ? tools[toolIndex] : void 0;
		if (tool) {
			const customTool = tool.type === "custom" && tool.id ? agent.value?.tools?.[tool.id] : void 0;
			telemetry?.trackOpenedToolFromList?.(tool.type);
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef: tool,
					customTool,
					projectId: projectId.value,
					agentId: agentId.value,
					supportsToolApproval,
					existingToolNames: tools.map((toolRef, i) => i === toolIndex || toolRef.type === "custom" ? null : toolRef.name).filter((name) => !!name),
					onConfirm: (updatedTool) => {
						const nextTools = [...localConfig.value?.tools ?? []];
						nextTools[toolIndex] = updatedTool;
						scheduleConfigUpdate({ tools: nextTools });
					},
					onRemove: () => onRemoveTool(toolIndex)
				}
			});
			return;
		}
		const mcpServers = localConfig.value?.mcpServers ?? [];
		const mcpServerIndex = typeof target === "number" ? target - tools.length : target.kind === "mcpServer" ? mcpServers.findIndex((server) => server.name === target.serverName) : -1;
		const mcpServer = mcpServers[mcpServerIndex];
		if (!mcpServer) return;
		const preferredNodeTypeName = mcpServer.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
		const nodeType = nodeTypesStore.getNodeType(preferredNodeTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool");
		if (!nodeType) return;
		telemetry?.trackOpenedToolFromList?.("mcpServer");
		uiStore.openModalWithData({
			name: AGENT_TOOL_CONFIG_MODAL_KEY,
			data: {
				kind: "mcpServer",
				mcpServer,
				initialNode: mcpServerToNode(mcpServer, nodeType),
				projectId: projectId.value,
				agentId: agentId.value,
				supportsToolApproval,
				existingToolNames: mcpServers.filter((_, i) => i !== mcpServerIndex).map((server) => server.name),
				onConfirm: (updatedServer) => {
					const nextMcpServers = [...localConfig.value?.mcpServers ?? []];
					nextMcpServers[mcpServerIndex] = updatedServer;
					scheduleConfigUpdate({ mcpServers: nextMcpServers });
				},
				onRemove: () => {
					scheduleConfigUpdate({ mcpServers: (localConfig.value?.mcpServers ?? []).filter((_, i) => i !== mcpServerIndex) });
					telemetry?.trackRemovedMcpServer?.(mcpServer);
				}
			}
		});
	}
	const appliedSkills = computed(() => {
		const rawRefs = localConfig.value?.skills;
		const refs = Array.isArray(rawRefs) ? rawRefs : [];
		const bodies = localSkills?.bodies.value ?? agent.value?.skills ?? {};
		const seen = /* @__PURE__ */ new Set();
		const out = [];
		for (const skillRef of refs) {
			if (typeof skillRef?.id !== "string" || !skillRef.id || seen.has(skillRef.id)) continue;
			seen.add(skillRef.id);
			out.push({
				id: skillRef.id,
				skill: (Object.hasOwn(bodies, skillRef.id) ? bodies[skillRef.id] : void 0) ?? {
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
		telemetry?.trackOpenedSkillFromList?.(id);
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: projectId.value,
				agentId: targetAgentId,
				skill,
				skillId: id,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(id),
				onRemove: (skillId) => {
					if (agentId.value !== targetAgentId) return;
					onRemoveSkill(skillId);
				},
				onConfirm: ({ id: skillId, skill: updatedSkill }) => {
					if (!skillId) return;
					if (agentId.value !== targetAgentId) return;
					const sanitizedSkill = filterSkillAllowedTools(updatedSkill);
					if (localSkills) {
						if (hasDuplicateSkillName(sanitizedSkill.name, skillId)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.updateSkill(skillId, sanitizedSkill);
						return;
					}
					if (agent.value?.id !== targetAgentId) return;
					agent.value = {
						...agent.value,
						skills: {
							...agent.value.skills ?? {},
							[skillId]: sanitizedSkill
						}
					};
					const nextSkills = [...localConfig.value?.skills ?? []];
					const skillRefIndex = nextSkills.findIndex((skillRef) => skillRef.id === id);
					if (skillRefIndex !== -1) {
						nextSkills[skillRefIndex] = {
							type: "skill",
							id: skillId
						};
						scheduleConfigUpdate({ skills: nextSkills });
					}
					scheduleSkillSave({
						skillId,
						skill: sanitizedSkill
					});
				}
			}
		});
	}
	function configuredToolOptions() {
		const tools = [];
		for (const tool of localConfig.value?.tools ?? []) if (tool.type === "custom") {
			const name = agent.value?.tools?.[tool.id]?.descriptor.name ?? tool.id;
			if (name) tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "code"
			});
		} else if (tool.type === "workflow") {
			const name = tool.name ?? tool.workflow;
			tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "workflow"
			});
		} else tools.push({
			name: tool.name,
			label: formatToolNameForDisplay(tool.name) || tool.name,
			icon: "globe"
		});
		return tools;
	}
	function configuredToolNames() {
		return new Set(configuredToolOptions().map((tool) => tool.name));
	}
	function filterSkillAllowedTools(skill) {
		return normalizeAgentSkillForSave(skill, configuredToolNames());
	}
	/** Names the skill modal validates against: every applied skill except the one being edited. */
	function appliedSkillNames(excludeId) {
		return appliedSkills.value.filter(({ id }) => id !== excludeId).map(({ skill }) => skill.name);
	}
	/**
	* Authoring-time mirror of the backend's `assertSkillNameIsUnique` for
	* local-skill hosts. The modal validates against `existingSkillNames` before closing
	*/
	function hasDuplicateSkillName(name, excludeId) {
		const normalized = name.trim().toLowerCase();
		return appliedSkillNames(excludeId).some((existing) => existing.trim().toLowerCase() === normalized);
	}
	function showDuplicateSkillNameError(name) {
		showMessage({
			title: locale.baseText("agents.builder.skills.duplicateName.error", { interpolate: { name: name.trim() } }),
			type: "error"
		});
	}
	function onRemoveTool(index) {
		const currentTools = localConfig.value?.tools ?? [];
		if (index < 0 || index >= currentTools.length) return;
		const removed = currentTools[index];
		scheduleConfigUpdate({ tools: currentTools.filter((_, i) => i !== index) });
		telemetry?.trackRemovedTool?.(removed);
	}
	function onRemoveSkill(id) {
		scheduleConfigUpdate({ skills: (localConfig.value?.skills ?? []).filter((skillRef) => skillRef.id !== id) });
	}
	function onToggleTask(payload) {
		scheduleConfigUpdate({ tasks: (localConfig.value?.tasks ?? []).map((taskRef) => taskRef.id === payload.id ? {
			...taskRef,
			enabled: payload.enabled
		} : taskRef) });
	}
	function onOpenAddSkillModal() {
		telemetry?.trackOpenedAddSkillModal?.();
		const targetProjectId = projectId.value;
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: targetProjectId,
				agentId: targetAgentId,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(),
				onConfirm: ({ skill }) => {
					if (localSkills) {
						if (agentId.value !== targetAgentId) return;
						const sanitizedSkill = filterSkillAllowedTools(skill);
						if (hasDuplicateSkillName(sanitizedSkill.name)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.createSkill(sanitizedSkill);
						showMessage({
							title: locale.baseText("agents.builder.skills.added"),
							type: "success"
						});
						return;
					}
					(async () => {
						const sanitizedSkill = filterSkillAllowedTools(skill);
						let created;
						let versionId;
						let skillId;
						try {
							const result = await createAgentSkill(rootStore.restApiContext, targetProjectId, targetAgentId, sanitizedSkill);
							skillId = result.id;
							created = result.skill;
							versionId = result.versionId;
						} catch (error) {
							showError(error, locale.baseText("agents.builder.skills.create.error"));
							return;
						}
						if (agent.value?.id !== targetAgentId) return;
						agent.value = {
							...agent.value,
							versionId,
							skills: {
								...agent.value.skills ?? {},
								[skillId]: created
							}
						};
						scheduleConfigUpdate({ skills: [...localConfig.value?.skills ?? [], {
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
	function onConnectedTriggersUpdate(triggers) {
		connectedTriggers.value = triggers;
		telemetry?.trackTriggerListChanged?.(triggers);
	}
	function onTriggerAdded(payload) {
		connectedTriggers.value = payload.triggers;
		telemetry?.trackTriggerAdded?.(payload);
	}
	return {
		appliedSkills,
		onOpenAddToolModal,
		onOpenToolFromList,
		onRemoveTool,
		onOpenAddSkillModal,
		onOpenSkillFromList,
		onRemoveSkill,
		onToggleTask,
		onConnectedTriggersUpdate,
		onTriggerAdded
	};
}
//#endregion
//#region src/features/agents/agents.eventBus.ts
var agentsEventBus = createEventBus();
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
	/**
	* Repoint the active (project, agent) pair without fetching: any in-flight
	* fetch/update for the previous pair resolves as stale, and the previous
	* pair's config is dropped so watchers stop serving it. Used on agent
	* switch BEFORE flushing the previous agent's pending save — otherwise that
	* save's response would land as current and repopulate the working copy
	* with the old agent's data.
	*/
	function repoint(projectId, agentId) {
		latestKey = keyFor(projectId, agentId);
		config.value = null;
		loading.value = false;
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
		repoint,
		fetchConfig,
		updateConfig
	};
}
//#endregion
export { AgentInfoPanel_default as a, withWebSearchConfig as c, AgentCapabilitiesSection_default as i, agentsEventBus as n, getNativeWebSearchArgs as o, useAgentCapabilitiesActions as r, getWebSearchMethod as s, useAgentConfig as t };
