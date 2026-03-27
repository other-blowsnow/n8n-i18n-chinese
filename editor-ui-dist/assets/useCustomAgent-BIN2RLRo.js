import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, Ht as toValue, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, pt as useTemplateRef, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-65UNw25j.js";
import { $i as N8nIcon_default, Bi as truncateBeforeLast$1, Mi as N8nTooltip_default, Qi as N8nButton_default, Zi as N8nText_default, n as DropdownMenu_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { As as useSettingsStore, Ft as useProjectsStore, at as useCredentialsStore, en as useTelemetry, r as useUIStore } from "./users.store-buY8IFeq.js";
import { is as getResourcePermissions, li as PROVIDER_CREDENTIAL_TYPE_MAP, pi as chatHubLLMProviderSchema } from "./constants-DgFYHRsp.js";
import { n as truncateBeforeLast } from "./dist-DrwP24hX.js";
import { d as LLM_AGGREGATORS, f as MAX_AGENT_NAME_CHARS, g as NEW_AGENT_MENU_ID, i as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, m as MAX_FLATTENED_SEARCH_RESULTS_PER_PROVIDER, p as MAX_AGENT_NAME_CHARS_MENU, r as CHAT_CREDENTIAL_SELECTOR_MODAL_KEY, y as providerDisplayNames } from "./constants-CsI9wULx.js";
import { C as workflowAgentDefaultIcon, a as createFakeAgent, g as isLlmProviderModel, l as flattenModel, p as isAllowedModel, t as useChatStore, u as fromStringToModel, x as stringifyModel, y as personalAgentDefaultIcon } from "./chat.store-uXx5LGUR.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-bwq8faRM.js";
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
function buildLlmProviderMenuItem(provider, { models, error }, options) {
	const { settings, i18n, isLoading, credentials } = options;
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
		...(agentOptions.length > 0 || !!credentials?.[provider]) && providerSettings?.allowedModels.length === 0 ? [{
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
			settings: settingStore.moduleSettings?.["chat-hub"]?.providers ?? {},
			credentials: __props.credentials
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
					credentialType,
					displayName: providerDisplayNames[provider],
					initialValue: __props.credentials?.[provider] ?? null,
					onSelect: (credentialId) => handleSelectCredentials(provider, credentialId)
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
					variant: __props.text ? "ghost" : "subtle",
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
				}, 8, [
					"variant",
					"class",
					"text"
				])]),
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
					"content-class": _ctx.$style.tooltip,
					placement: "right"
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
					"content-class"
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
	component: "_component_wt5tl_125",
	dropdownButton: "_dropdownButton_wt5tl_130",
	credentialsMissingIcon: "_credentialsMissingIcon_wt5tl_141",
	selected: "_selected_wt5tl_146",
	icon: "_icon_wt5tl_153",
	infoIcon: "_infoIcon_wt5tl_158",
	menuIcon: "_menuIcon_wt5tl_159",
	avatarIcon: "_avatarIcon_wt5tl_167",
	tooltip: "_tooltip_wt5tl_171",
	flattenedLabel: "_flattenedLabel_wt5tl_176",
	separator: "_separator_wt5tl_185"
};
var ModelSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default }]]);
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
export { ModelSelector_default as n, useCustomAgent as t };
