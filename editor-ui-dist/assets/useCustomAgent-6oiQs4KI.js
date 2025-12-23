import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, Z as onMounted, _ as Fragment, _t as watch, bn as normalizeStyle, bt as withCtx, c as useCssModule, et as openBlock, it as renderList, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { g as onClickOutside, gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, Hn as N8nText_default, N as N8nNavigationDropdown_default, Un as N8nButton_default, ht as N8nTooltip_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { $o as useSettingsStore, Pn as useProjectsStore, Wi as useUIStore, _t as useNodeTypesStore, en as useCredentialsStore, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import { Qr as PROVIDER_CREDENTIAL_TYPE_MAP, jo as getResourcePermissions, ti as chatHubLLMProviderSchema } from "./constants-ksa9xIxI.js";
import { t as NodeIcon_default } from "./NodeIcon-BDiqVc0r.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CHvZKgl9.js";
import { i as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, p as providerDisplayNames, r as CHAT_CREDENTIAL_SELECTOR_MODAL_KEY } from "./constants-qk3hx0l8.js";
import { a as flattenModel, d as personalAgentDefaultIcon, f as stringifyModel, m as workflowAgentDefaultIcon, o as fromStringToModel, t as useChatStore, u as isLlmProviderModel } from "./chat.store-DnJwLoWK.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-hwD4RBR6.js";
function truncateBeforeLast(text, maxLength, lastCharsLength = 5) {
	const chars = [];
	const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
	for (const { segment } of segmenter.segment(text)) chars.push(segment);
	if (chars.length <= maxLength) return text;
	const lastWordIndex = chars.findLastIndex((ch) => ch.match(/^\s+$/)) + 1;
	const lastWord = chars.slice(lastWordIndex);
	const ellipsis = "…";
	const ellipsisLength = 1;
	if (lastWord.length < 15) {
		const charsToRemove = chars.length - maxLength + ellipsisLength;
		const indexBeforeLastWord = lastWordIndex;
		const keepLength = indexBeforeLastWord - charsToRemove;
		if (keepLength > 0) return chars.slice(0, keepLength).join("") + ellipsis + chars.slice(indexBeforeLastWord).join("");
	}
	if (lastCharsLength < 1) return chars.slice(0, maxLength).join("") + ellipsis;
	return chars.slice(0, maxLength - lastCharsLength - ellipsisLength).join("") + ellipsis + chars.slice(-lastCharsLength).join("");
}
var NEW_AGENT_MENU_ID = "agent::new";
var MAX_AGENT_NAME_CHARS = 30;
var MAX_AGENT_NAME_CHARS_MENU = 45;
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
		const styles = useCssModule();
		const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
		const isCredentialsRequired = computed(() => isLlmProviderModel(__props.selectedAgent?.model));
		const isCredentialsMissing = computed(() => __props.warnMissingCredentials && isCredentialsRequired.value && __props.selectedAgent?.model.provider && !__props.credentials?.[__props.selectedAgent?.model.provider]);
		const menu = computed(() => {
			const menuItems = [];
			const fullNamesMap = {};
			if (__props.includeCustomAgents) {
				const n8nAgentsSubmenu = [];
				if (__props.isLoading) n8nAgentsSubmenu.push({
					id: "loading",
					title: i18n.baseText("generic.loadingEllipsis"),
					disabled: true
				});
				else if (__props.agents.n8n.models.length === 0) n8nAgentsSubmenu.push({
					id: "no-agents",
					title: i18n.baseText("chatHub.workflowAgents.empty.noAgents"),
					disabled: true
				});
				else n8nAgentsSubmenu.push(...__props.agents.n8n.models.map((agent) => {
					const id = stringifyModel(agent.model);
					fullNamesMap[id] = agent.name;
					return {
						id,
						icon: agent.icon ?? workflowAgentDefaultIcon,
						iconSize: "large",
						title: truncateBeforeLast(agent.name, MAX_AGENT_NAME_CHARS_MENU),
						disabled: false,
						description: agent.description ? truncateBeforeLast(agent.description, 200, 0) : void 0
					};
				}));
				const customAgents = __props.isLoading ? [] : __props.agents["custom-agent"].models.map((agent) => {
					const id = stringifyModel(agent.model);
					fullNamesMap[id] = agent.name;
					return {
						id,
						icon: agent.icon ?? personalAgentDefaultIcon,
						iconSize: "large",
						title: truncateBeforeLast(agent.name, MAX_AGENT_NAME_CHARS_MENU),
						disabled: false,
						description: agent.description ? truncateBeforeLast(agent.description, 200, 0) : void 0
					};
				});
				menuItems.push({
					id: "custom-agents",
					title: i18n.baseText("chatHub.agent.personalAgents"),
					icon: "message-square",
					iconSize: "large",
					iconMargin: false,
					submenu: [...__props.isLoading ? [{
						id: "loading",
						title: i18n.baseText("generic.loadingEllipsis"),
						disabled: true
					}, {
						isDivider: true,
						id: "divider"
					}] : customAgents.length > 0 ? [...customAgents, {
						isDivider: true,
						id: "divider"
					}] : [], {
						id: NEW_AGENT_MENU_ID,
						icon: "plus",
						iconSize: "large",
						title: i18n.baseText("chatHub.agent.newAgent"),
						disabled: false
					}]
				});
				menuItems.push({
					id: "n8n-agents",
					title: i18n.baseText("chatHub.agent.workflowAgents"),
					icon: "robot",
					iconSize: "large",
					iconMargin: false,
					submenu: n8nAgentsSubmenu
				});
				menuItems.push({
					isDivider: true,
					id: "agents-divider"
				});
			}
			for (const provider of chatHubLLMProviderSchema.options) {
				const settings = settingStore.moduleSettings?.["chat-hub"]?.providers[provider];
				if (settings && !settings.enabled) continue;
				const configureMenu = {
					id: `${provider}::configure`,
					icon: "settings",
					iconSize: "large",
					title: i18n.baseText("chatHub.agent.configureCredentials"),
					disabled: false
				};
				if (__props.isLoading) {
					menuItems.push({
						id: provider,
						title: providerDisplayNames[provider],
						submenu: [
							configureMenu,
							{
								isDivider: true,
								id: "divider"
							},
							{
								id: `${provider}::loading`,
								title: i18n.baseText("generic.loadingEllipsis"),
								disabled: true
							}
						]
					});
					continue;
				}
				const theAgents = [...__props.agents[provider].models];
				for (const model of settings?.allowedModels ?? []) if (model.isManual) theAgents.push({
					name: model.displayName,
					description: "",
					icon: null,
					model: {
						provider,
						model: model.model
					},
					createdAt: "",
					updatedAt: null,
					metadata: {
						inputModalities: [
							"text",
							"image",
							"audio",
							"video",
							"file"
						],
						capabilities: { functionCalling: true },
						available: true
					}
				});
				const error = __props.agents[provider].error;
				const agentOptions = theAgents.length > 0 ? theAgents.filter((agent) => agent.model.provider === "n8n" || !settings || settings.allowedModels.length === 0 || settings.allowedModels.some((m) => "model" in agent.model && m.model === agent.model.model)).map((agent) => {
					const id = stringifyModel(agent.model);
					fullNamesMap[id] = agent.name;
					return {
						id,
						title: truncateBeforeLast(agent.name, MAX_AGENT_NAME_CHARS_MENU),
						disabled: false
					};
				}).filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index) : error ? [{
					id: `${provider}::error`,
					value: null,
					disabled: true,
					title: error
				}] : [];
				const submenu = agentOptions.concat([...agentOptions.length > 0 ? [{
					isDivider: true,
					id: "divider"
				}] : [], ...settings?.allowedModels.length === 0 ? [{
					id: `${provider}::add-model`,
					icon: "plus",
					iconSize: "large",
					title: i18n.baseText("chatHub.agent.addModel"),
					disabled: false
				}] : []]);
				submenu.unshift(configureMenu, ...submenu.length > 1 ? [{
					isDivider: true,
					id: "divider"
				}] : []);
				menuItems.push({
					id: provider,
					title: providerDisplayNames[provider],
					submenu
				});
			}
			return {
				items: menuItems,
				fullNames: fullNamesMap
			};
		});
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
			if (id === NEW_AGENT_MENU_ID) {
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
		onClickOutside(computed(() => dropdownRef.value?.$el), () => dropdownRef.value?.close(), { ignore: [`.${styles.component} [role=menuitem]`] });
		__expose({
			open: () => dropdownRef.value?.open(),
			openCredentialSelector: (provider) => openCredentialsSelectorOrCreate(provider)
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				"submenu-class": _ctx.$style.component,
				menu: menu.value.items,
				teleport: "",
				onSelect
			}, {
				"item-icon": withCtx(({ item }) => [item.id in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.id],
					size: 16,
					class: normalizeClass(_ctx.$style.menuIcon)
				}, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.dropdownButton),
					type: "secondary",
					text: _ctx.text
				}, {
					default: withCtx(() => [
						createVNode(ChatAgentAvatar_default, {
							agent: _ctx.selectedAgent,
							size: credentialsName.value || !isCredentialsRequired.value ? "md" : "sm",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, [
							"agent",
							"size",
							"class"
						]),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.selected) }, [createBaseVNode("div", null, toDisplayString(unref(truncateBeforeLast)(selectedLabel.value, MAX_AGENT_NAME_CHARS)), 1), credentialsName.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(credentialsName.value, MAX_AGENT_NAME_CHARS)), 1)]),
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
				_: 1
			}, 8, ["submenu-class", "menu"]);
		};
	}
});
var ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1rkhd_123",
	dropdownButton: "_dropdownButton_1rkhd_128",
	credentialsMissingIcon: "_credentialsMissingIcon_1rkhd_136",
	selected: "_selected_1rkhd_141",
	icon: "_icon_1rkhd_148",
	menuIcon: "_menuIcon_1rkhd_153",
	avatarIcon: "_avatarIcon_1rkhd_157"
};
var ModelSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default }]]);
var ToolsSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsSelector",
	props: {
		disabled: { type: Boolean },
		selected: {},
		transparentBg: {
			type: Boolean,
			default: false
		},
		disabledTooltip: {}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const toolCount = computed(() => __props.selected.length ?? 0);
		const displayToolNodeTypes = computed(() => {
			return __props.selected.slice(0, 3).map((t) => nodeTypesStore.getNodeType(t.type)).filter(Boolean);
		});
		const toolsLabel = computed(() => {
			if (toolCount.value > 0) return i18n.baseText("chatHub.tools.selector.label.count", { adjustToNumber: toolCount.value });
			return i18n.baseText("chatHub.tools.selector.label.default");
		});
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: _ctx.disabledTooltip,
				disabled: !_ctx.disabledTooltip,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "secondary",
					"native-type": "button",
					class: normalizeClass([_ctx.$style.toolsButton, { [_ctx.$style.transparentBg]: _ctx.transparentBg }]),
					disabled: _ctx.disabled,
					icon: toolCount.value > 0 ? void 0 : "plus",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
				}, {
					default: withCtx(() => [toolCount.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.iconStack)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayToolNodeTypes.value, (nodeType, i) => {
						return openBlock(), createBlock(NodeIcon_default, {
							key: `${nodeType?.name}-${i}`,
							style: normalizeStyle({ zIndex: displayToolNodeTypes.value.length - i }),
							"node-type": nodeType,
							class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.iconOverlap]: i !== 0 }]),
							circle: true,
							size: 12
						}, null, 8, [
							"style",
							"node-type",
							"class"
						]);
					}), 128))], 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(toolsLabel.value), 1)]),
					_: 1
				}, 8, [
					"class",
					"disabled",
					"icon"
				])]),
				_: 1
			}, 8, ["content", "disabled"]);
		};
	}
});
var ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
	toolsButton: "_toolsButton_1u99p_123",
	transparentBg: "_transparentBg_1u99p_128",
	iconStack: "_iconStack_1u99p_132",
	icon: "_icon_1u99p_132",
	iconOverlap: "_iconOverlap_1u99p_145"
};
var ToolsSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsSelector_vue_vue_type_style_index_0_lang_module_default }]]);
function useCustomAgent(agentId) {
	const store = useChatStore();
	const id = computed(() => toValue(agentId));
	const agent = computed(() => {
		if (!id.value) return;
		return store.customAgents[id.value];
	});
	watch(id, (theId) => {
		if (theId) store.fetchCustomAgent(theId);
	}, { immediate: true });
	return agent;
}
export { ToolsSelector_default as n, ModelSelector_default as r, useCustomAgent as t };
