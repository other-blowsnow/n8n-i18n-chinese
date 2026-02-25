import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, Z as onMounted, _ as Fragment, _t as watch, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Hi as N8nButton_default, Ii as truncateBeforeLast$1, Mi as N8nIconButton_default, Oi as N8nTooltip_default, Ui as N8nIcon_default, Vi as N8nText_default, n as DropdownMenu_default } from "./src-BPnX41kb.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, Gt as useProjectsStore, Lt as useTelemetry, r as useUIStore, rt as useCredentialsStore, ws as useSettingsStore } from "./users.store-Dzwfthm5.js";
import { li as chatHubLLMProviderSchema, oi as PROVIDER_CREDENTIAL_TYPE_MAP, qo as getResourcePermissions } from "./constants-DJi2tANw.js";
import { t as NodeIcon_default } from "./NodeIcon-DKBaXy4A.js";
import { n as truncateBeforeLast } from "./dist-d4MXkYet.js";
import { _ as TOOLS_MANAGER_MODAL_KEY, d as LLM_AGGREGATORS, f as MAX_AGENT_NAME_CHARS, g as NEW_AGENT_MENU_ID, i as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, m as MAX_FLATTENED_SEARCH_RESULTS_PER_PROVIDER, p as MAX_AGENT_NAME_CHARS_MENU, r as CHAT_CREDENTIAL_SELECTOR_MODAL_KEY, v as TOOL_SETTINGS_MODAL_KEY, y as providerDisplayNames } from "./constants-DLAfnKfU.js";
import { _ as personalAgentDefaultIcon, c as fromStringToModel, d as isAllowedModel, m as isLlmProviderModel, r as createFakeAgent, s as flattenModel, t as useChatStore, x as workflowAgentDefaultIcon, y as stringifyModel } from "./chat.store-CrBEjXvs.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-Pi-5MLEl.js";
var ChatProviderAvatar_default = /* @__PURE__ */ defineComponent({
	__name: "ChatProviderAvatar",
	props: {
		provider: {},
		icon: {}
	},
	setup(__props) {
		const agent = computed(() => createFakeAgent(__props.provider === "n8n" ? {
			provider: "n8n",
			workflowId: ""
		} : __props.provider === "custom-agent" ? {
			provider: "custom-agent",
			agentId: ""
		} : {
			provider: __props.provider,
			model: ""
		}, { icon: __props.icon }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatAgentAvatar_default, {
				agent: agent.value,
				size: "sm"
			}, null, 8, ["agent"]);
		};
	}
});
function matchesSearch(item, query) {
	if (!query) return true;
	return (item.data?.fullName ?? item.label ?? "").toLowerCase().includes(query);
}
function isSpecialMenuItem(item) {
	const id = item.id;
	if (id.endsWith("::configure") || id.endsWith("::add-model") || id.endsWith("::error") || id.endsWith("::loading")) return true;
	if (item.disabled) return true;
	if (!item.data?.provider) return true;
	return false;
}
function filterMenuItem(item, query, parentMatched = false) {
	if (isSpecialMenuItem(item)) return null;
	if (!query || parentMatched) return item;
	const labelMatches = matchesSearch(item, query);
	const children = item.children ?? [];
	const filteredChildren = children.flatMap((child) => {
		const matched = filterMenuItem(child, query, labelMatches);
		return matched ? [matched] : [];
	});
	if (labelMatches || filteredChildren.length > 0) {
		if (children.length > 0 && filteredChildren.length === 0) return null;
		return {
			...item,
			children: filteredChildren
		};
	}
	return null;
}
function agentToMenuItem(agent, defaultIcon) {
	return {
		id: stringifyModel(agent.model),
		icon: agent.icon ?? defaultIcon ?? void 0,
		label: truncateBeforeLast$1(agent.name, 45),
		disabled: false,
		data: {
			provider: agent.model.provider,
			description: agent.description ?? void 0,
			fullName: agent.name
		}
	};
}
function buildPersonalAgentsMenuItem(agents, { isLoading, i18n, includeCustomAgents }) {
	if (!includeCustomAgents) return null;
	const customAgents = isLoading ? [] : agents.map((agent) => agentToMenuItem(agent, personalAgentDefaultIcon));
	return {
		id: "custom-agent",
		label: i18n.baseText("chatHub.agent.personalAgents"),
		icon: personalAgentDefaultIcon,
		data: { provider: "custom-agent" },
		children: [...isLoading ? [{
			id: "custom-agent::loading",
			label: i18n.baseText("generic.loadingEllipsis"),
			disabled: true
		}] : customAgents, {
			id: NEW_AGENT_MENU_ID,
			icon: {
				type: "icon",
				value: "plus"
			},
			label: i18n.baseText("chatHub.agent.newAgent"),
			disabled: false,
			divided: isLoading || customAgents.length > 0
		}]
	};
}
function buildGroupedWorkflowAgentMenuItems(agents, i18n) {
	const groupedAgents = /* @__PURE__ */ new Map();
	for (const agent of agents) {
		const groupName = agent.groupName ?? "";
		const entry = groupedAgents.get(groupName) ?? [];
		groupedAgents.set(groupName, [...entry, agent]);
	}
	if (groupedAgents.size < 2) return agents.map((agent) => agentToMenuItem(agent, workflowAgentDefaultIcon));
	return [...groupedAgents].map(([group, groupAgents]) => {
		const displayLabel = group === "" ? i18n.baseText("chatHub.models.selector.personalProject") : group;
		return {
			id: `n8n-project-${group}`,
			label: displayLabel,
			icon: groupAgents[0]?.groupIcon ?? workflowAgentDefaultIcon,
			data: { provider: "n8n" },
			children: groupAgents.map((agent) => agentToMenuItem(agent, workflowAgentDefaultIcon))
		};
	});
}
function buildWorkflowAgentsMenuItem(agents, { includeCustomAgents, i18n, isLoading }) {
	if (!includeCustomAgents) return null;
	const emptyText = i18n.baseText("chatHub.workflowAgents.empty.noAgents");
	const loadingText = i18n.baseText("generic.loadingEllipsis");
	return {
		id: "n8n",
		label: i18n.baseText("chatHub.agent.workflowAgents"),
		icon: workflowAgentDefaultIcon,
		data: { provider: "n8n" },
		children: isLoading ? [{
			id: "n8n::loading",
			label: loadingText,
			disabled: true
		}] : agents.length === 0 ? [{
			id: "n8n::no-agents",
			label: emptyText,
			disabled: true
		}] : buildGroupedWorkflowAgentMenuItems(agents, i18n)
	};
}
function buildLlmProviderMenuItem(provider, { models, error }, { settings, i18n, isLoading }) {
	const providerSettings = settings[provider];
	if (providerSettings?.enabled === false) return null;
	const configureMenu = {
		id: `${provider}::configure`,
		icon: {
			type: "icon",
			value: "settings"
		},
		label: i18n.baseText("chatHub.agent.configureCredentials"),
		disabled: false
	};
	if (isLoading) return {
		id: provider,
		label: providerDisplayNames[provider],
		data: { provider },
		children: [configureMenu, {
			id: `${provider}::loading`,
			label: i18n.baseText("generic.loadingEllipsis"),
			disabled: true,
			divided: true
		}]
	};
	const manualModels = (providerSettings?.allowedModels ?? []).flatMap((model) => model.isManual ? [createFakeAgent({
		provider,
		model: model.model
	}, { name: model.displayName })] : []);
	const allModels = [...models, ...manualModels].toSorted((a, b) => (b.metadata.priority ?? 0) - (a.metadata.priority ?? 0));
	const agentOptions = allModels.length > 0 ? allModels.flatMap((agent, index) => {
		if (providerSettings && !isAllowedModel(providerSettings, agent.model)) return [];
		const item = agentToMenuItem(agent);
		return [index === 0 ? {
			...item,
			divided: true
		} : item];
	}).filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index) : error ? [{
		id: `${provider}::error`,
		divided: true,
		disabled: true,
		label: error
	}] : [];
	const children = [
		configureMenu,
		...agentOptions,
		...agentOptions.length > 0 && providerSettings?.allowedModels.length === 0 ? [{
			id: `${provider}::add-model`,
			icon: {
				type: "icon",
				value: "plus"
			},
			label: i18n.baseText("chatHub.agent.addModel"),
			disabled: false,
			divided: true
		}] : []
	];
	return {
		id: provider,
		data: { provider },
		label: providerDisplayNames[provider],
		children
	};
}
function collectFlattenedSearchResults(item, pathPrefix) {
	const children = item.children ?? [];
	const fullPath = [...pathPrefix, item.label];
	if (children.length === 0) return [{
		...item,
		divided: false,
		data: item.data ? {
			...item.data,
			parts: fullPath
		} : void 0
	}];
	return children.flatMap((child) => collectFlattenedSearchResults(child, fullPath));
}
function applySearch(menuItems, query, i18n) {
	if (!query) return menuItems;
	return menuItems.reduce((acc, item) => {
		const matched = filterMenuItem(item, query);
		if (!matched) return acc;
		const results = collectFlattenedSearchResults(matched, []);
		const flattenCount = Math.max(0, 10 - acc.length);
		const provider = matched.data?.provider;
		const providerName = provider ? providerDisplayNames[provider] : "";
		acc.push(...results.slice(0, flattenCount));
		if (results.length > flattenCount) {
			const label = flattenCount > 0 ? i18n.baseText("chatHub.models.selector.moreModels", { interpolate: { providerName } }) : matched.label;
			const rest = results.slice(flattenCount).map((result) => ({
				...result,
				label: truncateBeforeLast$1(result.data?.fullName ?? "", 45),
				data: result.data ? {
					...result.data,
					parts: void 0
				} : void 0
			}));
			acc.push({
				...matched,
				divided: false,
				label,
				children: rest
			});
		}
		return acc;
	}, []);
}
function buildModelSelectorMenuItems(agents, options) {
	const menuItems = [];
	const personalAgentsItem = buildPersonalAgentsMenuItem(agents["custom-agent"].models, options);
	const n8nAgentsItem = buildWorkflowAgentsMenuItem(agents.n8n.models, options);
	if (personalAgentsItem) menuItems.push(personalAgentsItem);
	if (n8nAgentsItem) menuItems.push(n8nAgentsItem);
	const sortedProviders = chatHubLLMProviderSchema.options.toSorted((a, b) => {
		return (LLM_AGGREGATORS.includes(a) ? 1 : -1) - (LLM_AGGREGATORS.includes(b) ? 1 : -1);
	});
	let dividerInserted = false;
	for (const provider of sortedProviders) {
		const item = buildLlmProviderMenuItem(provider, agents[provider], options);
		if (item) {
			menuItems.push(dividerInserted ? item : {
				...item,
				divided: true
			});
			dividerInserted = true;
		}
	}
	return menuItems;
}
var ModelSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelector",
	props: {
		selectedAgent: {},
		includeCustomAgents: {
			type: Boolean,
			default: true
		},
		credentials: {},
		text: { type: Boolean },
		warnMissingCredentials: {
			type: Boolean,
			default: false
		},
		agents: {},
		isLoading: { type: Boolean }
	},
	emits: [
		"change",
		"createCustomAgent",
		"selectCredential"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		function handleSelectCredentials(provider, id) {
			emit("selectCredential", provider, id);
		}
		function handleSelectModelById(provider, modelId) {
			emit("change", {
				provider,
				model: modelId
			});
		}
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownRef");
		const uiStore = useUIStore();
		const settingStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const projectStore = useProjectsStore();
		const telemetry = useTelemetry();
		const searchQuery = ref("");
		const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
		const isCredentialsRequired = computed(() => isLlmProviderModel(__props.selectedAgent?.model));
		const isCredentialsMissing = computed(() => __props.warnMissingCredentials && isCredentialsRequired.value && __props.selectedAgent?.model.provider && !__props.credentials?.[__props.selectedAgent?.model.provider]);
		const menu = computed(() => buildModelSelectorMenuItems(__props.agents, {
			includeCustomAgents: __props.includeCustomAgents,
			isLoading: __props.isLoading,
			i18n,
			settings: settingStore.moduleSettings?.["chat-hub"]?.providers ?? {}
		}));
		const filteredMenu = computed(() => applySearch(menu.value, searchQuery.value, i18n));
		const selectedLabel = computed(() => __props.selectedAgent?.name ?? i18n.baseText("chatHub.models.selector.defaultLabel"));
		const canCreateCredentials = computed(() => {
			return getResourcePermissions(projectStore.personalProject?.scopes).credential.create;
		});
		function openCredentialsSelectorOrCreate(provider) {
			const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
			if (credentialsStore.getCredentialsByType(credentialType).length === 0 && canCreateCredentials.value) {
				uiStore.openNewCredential(credentialType);
				return;
			}
			uiStore.openModalWithData({
				name: CHAT_CREDENTIAL_SELECTOR_MODAL_KEY,
				data: {
					provider,
					initialValue: __props.credentials?.[provider] ?? null,
					onSelect: handleSelectCredentials
				}
			});
		}
		function openModelByIdSelector(provider) {
			uiStore.openModalWithData({
				name: CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY,
				data: {
					provider,
					initialValue: null,
					onSelect: handleSelectModelById
				}
			});
		}
		function onSelect(id) {
			if (id === "agent::new") {
				emit("createCustomAgent");
				return;
			}
			const [, identifier] = id.split("::");
			const parsedModel = fromStringToModel(id);
			if (!parsedModel) return;
			if (identifier === "configure" && isLlmProviderModel(parsedModel)) {
				openCredentialsSelectorOrCreate(parsedModel.provider);
				return;
			}
			if (identifier === "add-model" && isLlmProviderModel(parsedModel)) {
				openModelByIdSelector(parsedModel.provider);
				return;
			}
			telemetry.track("User selected model or agent", {
				...flattenModel(parsedModel),
				is_custom: parsedModel.provider === "custom-agent"
			});
			emit("change", parsedModel);
		}
		function handleSearch(query) {
			searchQuery.value = query.toLowerCase();
		}
		__expose({
			open: () => dropdownRef.value?.open(),
			openCredentialSelector: (provider) => openCredentialsSelectorOrCreate(provider)
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: filteredMenu.value,
				teleported: "",
				placement: "bottom-start",
				"extra-popper-class": [_ctx.$style.component, searchQuery.value ? _ctx.$style.searching : ""].join(" "),
				searchable: "",
				emptyText: searchQuery.value ? unref(i18n).baseText("chatHub.models.selector.noMatch") : void 0,
				onSearch: handleSearch,
				onSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					class: normalizeClass(_ctx.$style.dropdownButton),
					text: __props.text,
					"data-test-id": "chat-model-selector"
				}, {
					default: withCtx(() => [
						createVNode(ChatAgentAvatar_default, {
							agent: __props.selectedAgent,
							size: credentialsName.value || !isCredentialsRequired.value ? "md" : "sm",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, [
							"agent",
							"size",
							"class"
						]),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.selected) }, [createBaseVNode("div", null, toDisplayString(unref(truncateBeforeLast)(selectedLabel.value, unref(30))), 1), credentialsName.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(credentialsName.value, unref(30))), 1)]),
							_: 1
						})) : isCredentialsMissing.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "xsmall",
							color: "danger"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "node-validation-error",
								size: "xsmall",
								class: normalizeClass(_ctx.$style.credentialsMissingIcon)
							}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("chatHub.agent.credentialsMissing")), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: "medium"
						})
					]),
					_: 1
				}, 8, ["class", "text"])]),
				"item-leading": withCtx(({ item }) => [item.data?.provider ? (openBlock(), createBlock(ChatProviderAvatar_default, {
					key: 0,
					provider: item.data?.provider,
					icon: item.icon,
					class: normalizeClass(_ctx.$style.menuIcon)
				}, null, 8, [
					"provider",
					"icon",
					"class"
				])) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [item.data?.parts ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.flattenedLabel, ui.class])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.parts, (part, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [index > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						class: normalizeClass(_ctx.$style.separator)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "small"
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
						size: "medium",
						color: index === item.data.parts.length - 1 ? "text-dark" : "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(part), 1)]),
						_: 2
					}, 1032, ["color"])], 64);
				}), 128))], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(ui.class),
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1032, ["class"]))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data?.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(truncateBeforeLast)(item.data.description, 200, 0),
					class: normalizeClass(ui.class),
					"popper-class": _ctx.$style.tooltip
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "medium",
						color: "text-light",
						class: normalizeClass(_ctx.$style.infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, [
					"content",
					"class",
					"popper-class"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"items",
				"extra-popper-class",
				"emptyText"
			]);
		};
	}
});
var ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1abe6_125",
	dropdownButton: "_dropdownButton_1abe6_130",
	credentialsMissingIcon: "_credentialsMissingIcon_1abe6_139",
	selected: "_selected_1abe6_144",
	icon: "_icon_1abe6_151",
	infoIcon: "_infoIcon_1abe6_156",
	menuIcon: "_menuIcon_1abe6_157",
	avatarIcon: "_avatarIcon_1abe6_165",
	tooltip: "_tooltip_1abe6_169",
	flattenedLabel: "_flattenedLabel_1abe6_174",
	separator: "_separator_1abe6_183"
};
var ModelSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default }]]);
var ToolsSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsSelector",
	props: {
		disabled: { type: Boolean },
		checkedToolIds: {},
		customAgentId: {},
		disabledTooltip: {}
	},
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const chatStore = useChatStore();
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownMenu");
		const searchQuery = ref("");
		const checkedToolIdsSet = computed(() => new Set(props.checkedToolIds));
		const toolCount = computed(() => props.checkedToolIds.length);
		const displayToolNodeTypes = computed(() => {
			const maxIcons = toolCount.value > 3 ? 2 : 3;
			return chatStore.configuredTools.filter((t) => checkedToolIdsSet.value.has(t.definition.id)).slice(0, maxIcons).map((t) => nodeTypesStore.getNodeType(t.definition.type, t.definition.typeVersion)).filter(Boolean);
		});
		const remainingToolCount = computed(() => {
			if (toolCount.value > 3) return toolCount.value - 2;
			return 0;
		});
		const toolsLabel = computed(() => {
			if (toolCount.value === 1) {
				const toolId = props.checkedToolIds[0];
				const tool = chatStore.configuredTools.find((t) => t.definition.id === toolId);
				if (tool) return tool.definition.name;
			}
			if (toolCount.value > 1) return i18n.baseText("chatHub.tools.selector.label.count", { adjustToNumber: toolCount.value });
			return i18n.baseText("chatHub.tools.selector.label.default");
		});
		function openToolsManager() {
			dropdownRef.value?.close();
			uiStore.openModalWithData({
				name: TOOLS_MANAGER_MODAL_KEY,
				data: {
					tools: chatStore.configuredTools.filter((t) => checkedToolIdsSet.value.has(t.definition.id)).map((t) => t.definition),
					onConfirm: () => {},
					customAgentId: props.customAgentId
				}
			});
		}
		function openToolSettings(item) {
			dropdownRef.value?.close();
			const tool = item.data?.tool;
			if (!tool) return;
			const otherToolNames = chatStore.configuredTools.filter((t) => t.definition.id !== tool.id).map((t) => t.definition.name);
			uiStore.openModalWithData({
				name: TOOL_SETTINGS_MODAL_KEY,
				data: {
					node: { ...tool },
					existingToolNames: otherToolNames,
					onConfirm: async (configuredNode) => {
						await chatStore.updateConfiguredTool(tool.id, configuredNode);
					}
				}
			});
		}
		const menuItems = computed(() => {
			const query = searchQuery.value.toLowerCase();
			return chatStore.configuredTools.filter((tool) => {
				if (!query) return true;
				const def = tool.definition;
				const nodeType = nodeTypesStore.getNodeType(def.type, def.typeVersion);
				const nameMatch = def.name.toLowerCase().includes(query);
				const typeMatch = nodeType?.displayName.toLowerCase().includes(query);
				return nameMatch || typeMatch;
			}).map((tool) => ({
				id: `tool::${tool.definition.id}`,
				label: tool.definition.name,
				checked: checkedToolIdsSet.value.has(tool.definition.id),
				data: {
					nodeType: nodeTypesStore.getNodeType(tool.definition.type, tool.definition.typeVersion),
					tool: tool.definition
				}
			}));
		});
		function handleSelect(id) {
			const [command, toolId] = id.split("::");
			if (command === "tool") emit("toggle", toolId);
		}
		function handleSearch(query) {
			searchQuery.value = query;
		}
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(chatStore).configuredTools.length === 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: __props.disabledTooltip,
				disabled: !__props.disabledTooltip || !__props.disabled,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"native-type": "button",
					class: normalizeClass(_ctx.$style.toolsButton),
					disabled: __props.disabled,
					icon: "plus",
					"data-test-id": "chat-tools-button",
					onClick: openToolsManager
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(toolsLabel.value), 1)]),
					_: 1
				}, 8, ["class", "disabled"])]),
				_: 1
			}, 8, ["content", "disabled"])) : (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 1,
				content: __props.disabledTooltip,
				disabled: !__props.disabledTooltip || !__props.disabled,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					ref: "dropdownMenu",
					items: menuItems.value,
					placement: "top-start",
					"extra-popper-class": "tools-selector-dropdown",
					searchable: "",
					"search-placeholder": unref(i18n).baseText("chatHub.toolsManager.searchPlaceholder"),
					"empty-text": unref(i18n).baseText("chatHub.toolsManager.noResults"),
					onSelect: handleSelect,
					onSearch: handleSearch
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"native-type": "button",
						disabled: __props.disabled,
						icon: toolCount.value === 0 ? "plus" : void 0,
						"data-test-id": "chat-tools-button"
					}, {
						default: withCtx(() => [toolCount.value > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.iconStack)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayToolNodeTypes.value, (nodeType, i) => {
							return openBlock(), createBlock(NodeIcon_default, {
								key: `${nodeType?.name}-${i}`,
								style: normalizeStyle({ zIndex: i + 1 }),
								"node-type": nodeType,
								class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.iconOverlap]: i !== 0 }]),
								circle: true,
								size: 12
							}, null, 8, [
								"style",
								"node-type",
								"class"
							]);
						}), 128)), remainingToolCount.value > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass([
								_ctx.$style.icon,
								_ctx.$style.iconOverlap,
								_ctx.$style.countBadge
							])
						}, " +" + toDisplayString(remainingToolCount.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(toolsLabel.value), 1)]),
						_: 1
					}, 8, ["disabled", "icon"])]),
					"search-prefix": withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					"search-suffix": withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						size: "medium",
						text: "",
						class: normalizeClass(_ctx.$style.settingsButton),
						onClick: withModifiers(openToolsManager, ["stop"])
					}, null, 8, ["class"])]),
					"item-leading": withCtx(({ item }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": item.data.nodeType,
						size: 16
					}, null, 8, ["node-type"])) : createCommentVNode("", true)]),
					"item-trailing": withCtx(({ item }) => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						size: "medium",
						text: "",
						class: normalizeClass(_ctx.$style.itemSettingsButton),
						onClick: withModifiers(($event) => openToolSettings(item), ["stop"])
					}, null, 8, ["class", "onClick"]), !item.checked ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.checkPlaceholder)
					}, null, 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"items",
					"search-placeholder",
					"empty-text"
				])]),
				_: 1
			}, 8, ["content", "disabled"]))], 2);
		};
	}
});
var ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_i8oeh_125",
	toolsButton: "_toolsButton_i8oeh_130",
	transparentBg: "_transparentBg_i8oeh_135",
	iconStack: "_iconStack_i8oeh_139",
	icon: "_icon_i8oeh_139",
	iconOverlap: "_iconOverlap_i8oeh_154",
	countBadge: "_countBadge_i8oeh_158",
	settingsButton: "_settingsButton_i8oeh_171",
	itemSettingsButton: "_itemSettingsButton_i8oeh_179",
	checkPlaceholder: "_checkPlaceholder_i8oeh_183"
};
var ToolsSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsSelector_vue_vue_type_style_index_0_lang_module_default }]]);
function useCustomAgent(agentId) {
	const store = useChatStore();
	const isLoading = ref(false);
	const id = computed(() => toValue(agentId));
	const customAgent = computed(() => {
		if (!id.value) return;
		return store.customAgents[id.value];
	});
	watch(id, async (theId) => {
		if (theId) try {
			isLoading.value = true;
			await store.fetchCustomAgent(theId);
		} finally {
			isLoading.value = false;
		}
	}, { immediate: true });
	return {
		isLoading,
		customAgent
	};
}
export { ToolsSelector_default as n, ModelSelector_default as r, useCustomAgent as t };
