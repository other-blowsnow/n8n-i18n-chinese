import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bn as normalizeStyle, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { g as onClickOutside, gt as useI18n } from "./_MapCache-rO6uEnTT.js";
import { A as N8nNavigationDropdown_default, Hn as N8nButton_default, Vn as N8nText_default, Wn as N8nIcon_default, vt as N8nAvatar_default } from "./src-DM4yYASg.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Fi as useUIStore, Ho as useSettingsStore, Ht as useCredentialsStore, at as useNodeTypesStore, t as useTelemetry } from "./useTelemetry-R6FQLszn.js";
import { Qr as PROVIDER_CREDENTIAL_TYPE_MAP, ei as chatHubLLMProviderSchema, ni as emptyChatModelsResponse } from "./constants-BP6a478f.js";
import { r as useRootStore } from "./_baseOrderBy-LpH21c0I.js";
import { t as NodeIcon_default } from "./NodeIcon-BfbLfnl3.js";
import { t as CredentialIcon_default } from "./CredentialIcon-BSfrXc7R.js";
import { a as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, d as TOOLS_SELECTOR_MODAL_KEY, f as providerDisplayNames, i as CHAT_CREDENTIAL_SELECTOR_MODAL_KEY } from "./constants-D2fYduVh.js";
import { a as fromStringToModel, d as stringifyModel, i as flattenModel, l as isLlmProviderModel, m as fetchChatModelsApi, u as isMatchedAgent } from "./chat.store-DWfibw_y.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-H-CnD7hx.js";
function truncateBeforeLast(text, maxLength) {
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
	return chars.slice(0, maxLength - 5 - ellipsisLength).join("") + ellipsis + chars.slice(-5).join("");
}
var NEW_AGENT_MENU_ID = "agent::new";
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
		}
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
				model: {
					provider,
					model: modelId
				},
				name: modelId,
				description: null,
				updatedAt: null,
				createdAt: null,
				allowFileUploads: true
			});
		}
		const i18n = useI18n();
		const agents = ref(emptyChatModelsResponse);
		const isLoading = ref(false);
		const dropdownRef = useTemplateRef("dropdownRef");
		const uiStore = useUIStore();
		const settingStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const telemetry = useTelemetry();
		const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
		const isCredentialsRequired = computed(() => isLlmProviderModel(__props.selectedAgent?.model));
		const isCredentialsMissing = computed(() => __props.warnMissingCredentials && isCredentialsRequired.value && __props.selectedAgent?.model.provider && !__props.credentials?.[__props.selectedAgent?.model.provider]);
		const menu = computed(() => {
			const menuItems = [];
			if (__props.includeCustomAgents) {
				const customAgents = isLoading.value ? [] : [...agents.value["custom-agent"].models, ...agents.value["n8n"].models].map((agent) => ({
					id: stringifyModel(agent.model),
					title: agent.name,
					disabled: false
				}));
				menuItems.push({
					id: "custom-agents",
					title: i18n.baseText("chatHub.agent.customAgents"),
					icon: "robot",
					iconSize: "large",
					iconMargin: false,
					submenu: [...isLoading.value ? [{
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
						title: i18n.baseText("chatHub.agent.newAgent"),
						disabled: false
					}]
				});
			}
			for (const provider of chatHubLLMProviderSchema.options) {
				const settings = settingStore.moduleSettings?.["chat-hub"]?.providers[provider];
				if (settings && !settings.enabled) continue;
				const configureMenu = {
					id: `${provider}::configure`,
					icon: "settings",
					title: i18n.baseText("chatHub.agent.configureCredentials"),
					disabled: false
				};
				if (isLoading.value) {
					menuItems.push({
						id: provider,
						title: providerDisplayNames[provider],
						submenu: [
							{
								id: `${provider}::loading`,
								title: i18n.baseText("generic.loadingEllipsis"),
								disabled: true
							},
							{
								isDivider: true,
								id: "divider"
							},
							configureMenu
						]
					});
					continue;
				}
				const theAgents = [...agents.value[provider].models];
				for (const model of settings?.allowedModels ?? []) if (model.isManual) theAgents.push({
					name: model.displayName,
					description: "",
					model: {
						provider,
						model: model.model
					},
					createdAt: "",
					updatedAt: null
				});
				const error = agents.value[provider].error;
				const agentOptions = theAgents.length > 0 ? theAgents.filter((agent) => agent.model.provider === "n8n" || !settings || settings.allowedModels.length === 0 || settings.allowedModels.some((m) => "model" in agent.model && m.model === agent.model.model)).map((agent) => ({
					id: stringifyModel(agent.model),
					title: agent.name,
					disabled: false
				})) : error ? [{
					id: `${provider}::error`,
					value: null,
					disabled: true,
					title: error
				}] : [];
				const submenu = agentOptions.concat([
					...agentOptions.length > 0 ? [{
						isDivider: true,
						id: "divider"
					}] : [],
					...settings?.allowedModels.length === 0 ? [{
						id: `${provider}::add-model`,
						icon: "plus",
						title: i18n.baseText("chatHub.agent.addModel"),
						disabled: false
					}] : [],
					configureMenu
				]);
				menuItems.push({
					id: provider,
					title: providerDisplayNames[provider],
					submenu
				});
			}
			return menuItems;
		});
		const selectedLabel = computed(() => __props.selectedAgent?.name ?? i18n.baseText("chatHub.models.selector.defaultLabel"));
		function openCredentialsSelectorOrCreate(provider) {
			const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
			if (credentialsStore.getCredentialsByType(credentialType).length === 0) {
				uiStore.openNewCredential(credentialType);
				return;
			}
			uiStore.openModalWithData({
				name: CHAT_CREDENTIAL_SELECTOR_MODAL_KEY,
				data: {
					provider,
					initialValue: __props.credentials?.[provider] ?? null,
					onSelect: handleSelectCredentials,
					onCreateNew: handleCreateNewCredential
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
			const selected$1 = agents.value[parsedModel.provider].models.find((a) => isMatchedAgent(a, parsedModel));
			if (!selected$1) return;
			telemetry.track("User selected model or agent", {
				...flattenModel(selected$1.model),
				is_custom: selected$1.model.provider === "custom-agent"
			});
			emit("change", selected$1);
		}
		function handleCreateNewCredential(provider) {
			const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
			telemetry.track("User opened Credential modal", {
				credential_type: credentialType,
				source: "chat",
				new_credential: true,
				workflow_id: null
			});
			uiStore.openNewCredential(credentialType);
		}
		onClickOutside(computed(() => dropdownRef.value?.$el), () => dropdownRef.value?.close());
		watch(() => __props.credentials, async (credentials) => {
			if (credentials) {
				isLoading.value = true;
				try {
					agents.value = await fetchChatModelsApi(useRootStore().restApiContext, { credentials });
				} finally {
					isLoading.value = false;
				}
			}
		}, { immediate: true });
		__expose({
			open: () => dropdownRef.value?.open(),
			openCredentialSelector: (provider) => openCredentialsSelectorOrCreate(provider)
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				menu: menu.value,
				teleport: "",
				onSelect
			}, {
				"item-icon": withCtx(({ item }) => [item.id in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.id],
					size: 16,
					class: normalizeClass(_ctx.$style.menuIcon)
				}, null, 8, ["credential-type-name", "class"])) : item.id.startsWith("n8n::") || item.id.startsWith("custom-agent::") ? (openBlock(), createBlock(unref(N8nAvatar_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.avatarIcon),
					"first-name": item.title,
					size: "xsmall"
				}, null, 8, ["class", "first-name"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.dropdownButton),
					type: "secondary",
					text: _ctx.text
				}, {
					default: withCtx(() => [
						_ctx.selectedAgent ? (openBlock(), createBlock(ChatAgentAvatar_default, {
							key: 0,
							agent: _ctx.selectedAgent,
							size: credentialsName.value || !isCredentialsRequired.value ? "md" : "sm",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, [
							"agent",
							"size",
							"class"
						])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.selected) }, [createBaseVNode("div", null, toDisplayString(unref(truncateBeforeLast)(selectedLabel.value, 30)), 1), credentialsName.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(credentialsName.value, 30)), 1)]),
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
			}, 8, ["menu"]);
		};
	}
});
var ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
	dropdownButton: "_dropdownButton_cgrkm_123",
	credentialsMissingIcon: "_credentialsMissingIcon_cgrkm_131",
	selected: "_selected_cgrkm_136",
	icon: "_icon_cgrkm_143",
	menuIcon: "_menuIcon_cgrkm_148",
	avatarIcon: "_avatarIcon_cgrkm_152"
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
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const uiStore = useUIStore();
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
		const handleSelect = (tools) => {
			emit("select", tools);
		};
		const onClick = () => {
			uiStore.openModalWithData({
				name: TOOLS_SELECTOR_MODAL_KEY,
				data: {
					selected: __props.selected,
					onConfirm: handleSelect
				}
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), {
				type: "secondary",
				"native-type": "button",
				class: normalizeClass([_ctx.$style.toolsButton, { [_ctx.$style.transparentBg]: _ctx.transparentBg }]),
				disabled: _ctx.disabled,
				icon: toolCount.value > 0 ? void 0 : "plus",
				onClick
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
			]);
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
export { ModelSelector_default as n, ToolsSelector_default as t };
