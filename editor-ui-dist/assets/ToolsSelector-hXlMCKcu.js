import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, mt as useTemplateRef, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { g as onClickOutside, gt as useI18n } from "./_MapCache-DxwXn8uM.js";
import { A as N8nNavigationDropdown_default, Bn as N8nIcon_default, Ct as N8nAvatar_default, G as N8nSelect_default, K as N8nOption_default, Ln as N8nText_default, Rn as N8nButton_default } from "./src-BcrqaOXg.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-D8k4BuhS.js";
import { Ht as useCredentialsStore, Ni as useUIStore, rt as useNodeTypesStore, t as useTelemetry } from "./useTelemetry-Ct6_U3iA.js";
import { cr as PROVIDER_CREDENTIAL_TYPE_MAP, fr as emptyChatModelsResponse, ur as chatHubLLMProviderSchema } from "./constants-C-5XMlPK.js";
import { t as useRootStore } from "./useRootStore-B7yZgeot.js";
import { t as NodeIcon_default } from "./NodeIcon-mnGJPl1p.js";
import { t as Modal_default } from "./Modal-0-JBp-gL.js";
import { t as CredentialIcon_default } from "./CredentialIcon-Dcqn4FLw.js";
import { c as providerDisplayNames, s as TOOLS_SELECTOR_MODAL_KEY } from "./constants-yvMG61zm.js";
import { a as flattenModel, f as fetchChatModelsApi, l as isMatchedAgent, o as fromStringToModel, t as ChatAgentAvatar_default, u as stringifyModel } from "./ChatAgentAvatar-CO02V0mM.js";
var CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialSelectorModal",
	props: {
		provider: {},
		initialValue: {}
	},
	emits: ["select", "createNew"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialsStore = useCredentialsStore();
		const modalBus = ref(createEventBus());
		const selectedCredentialId = ref(props.initialValue);
		const availableCredentials = computed(() => {
			return credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[props.provider]);
		});
		function onCredentialSelect(credentialId) {
			selectedCredentialId.value = credentialId;
		}
		function onConfirm() {
			if (selectedCredentialId.value) {
				emit("select", props.provider, selectedCredentialId.value);
				modalBus.value.emit("close");
			}
		}
		function onCreateNew() {
			emit("createNew", props.provider);
			modalBus.value.emit("close");
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: "chatCredentialSelector",
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.provider],
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createBaseVNode("h2", { class: normalizeClass(_ctx.$style.title) }, "Select " + toDisplayString(unref(providerDisplayNames)[_ctx.provider]) + " Credential", 3)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" Choose an existing credential or create a new one ")])),
					_: 1
				}), createVNode(unref(N8nSelect_default), {
					"model-value": selectedCredentialId.value,
					size: "large",
					placeholder: "Select credential...",
					"onUpdate:modelValue": onCredentialSelect
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCredentials.value, (credential) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: credential.id,
							value: credential.id,
							label: credential.name
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, ["model-value"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: onCreateNew
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode(" Create New ")])),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					onClick: onCancel
				}, {
					default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Cancel ")])),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: !selectedCredentialId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode(" Select ")])),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["event-bus"]);
		};
	}
});
var CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	title: "_title_1hes0_123",
	content: "_content_1hes0_129",
	footer: "_footer_1hes0_136",
	footerRight: "_footerRight_1hes0_143",
	header: "_header_1hes0_148",
	icon: "_icon_1hes0_154"
};
var CredentialSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
var NEW_AGENT_MENU_ID = "agent::new";
var ModelSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelector",
	props: {
		selectedAgent: {},
		includeCustomAgents: {
			type: Boolean,
			default: true
		},
		credentials: {}
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
		const i18n = useI18n();
		const agents = ref(emptyChatModelsResponse);
		const dropdownRef = useTemplateRef("dropdownRef");
		const credentialSelectorProvider = ref(null);
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const telemetry = useTelemetry();
		const credentialsName = computed(() => __props.selectedAgent ? credentialsStore.getCredentialById(__props.credentials?.[__props.selectedAgent.model.provider] ?? "")?.name : void 0);
		const menu = computed(() => {
			const menuItems = [];
			if (__props.includeCustomAgents) {
				const customAgents = [...agents.value["custom-agent"].models, ...agents.value["n8n"].models].map((agent) => ({
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
					submenu: [
						...customAgents,
						...customAgents.length > 0 ? [{
							isDivider: true,
							id: "divider"
						}] : [],
						{
							id: NEW_AGENT_MENU_ID,
							icon: "plus",
							title: i18n.baseText("chatHub.agent.newAgent"),
							disabled: false
						}
					]
				});
			}
			for (const provider of chatHubLLMProviderSchema.options) {
				const theAgents = agents.value[provider].models;
				const error = agents.value[provider].error;
				const agentOptions = theAgents.length > 0 ? theAgents.filter((agent) => agent.model.provider !== "custom-agent").map((agent) => ({
					id: stringifyModel(agent.model),
					title: agent.name,
					disabled: false
				})) : error ? [{
					id: `${provider}::error`,
					value: null,
					disabled: true,
					title: error
				}] : [];
				const submenu = agentOptions.concat([...agentOptions.length > 0 ? [{
					isDivider: true,
					id: "divider"
				}] : [], {
					id: `${provider}::configure`,
					icon: "settings",
					title: "Configure credentials...",
					disabled: false
				}]);
				menuItems.push({
					id: provider,
					title: providerDisplayNames[provider],
					submenu
				});
			}
			return menuItems;
		});
		const selectedLabel = computed(() => __props.selectedAgent?.name ?? "Select model");
		function openCredentialsSelectorOrCreate(provider) {
			const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
			if (credentialsStore.getCredentialsByType(credentialType).length === 0) {
				uiStore.openNewCredential(credentialType);
				return;
			}
			credentialSelectorProvider.value = provider;
			uiStore.openModal("chatCredentialSelector");
		}
		function onSelect(id) {
			if (id === NEW_AGENT_MENU_ID) {
				emit("createCustomAgent");
				return;
			}
			const [, identifier] = id.split("::");
			const parsedModel = fromStringToModel(id);
			if (!parsedModel) return;
			if (identifier === "configure" && parsedModel.provider !== "n8n" && parsedModel.provider !== "custom-agent") {
				openCredentialsSelectorOrCreate(parsedModel.provider);
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
			if (credentials) agents.value = await fetchChatModelsApi(useRootStore().restApiContext, { credentials });
		}, { immediate: true });
		__expose({ open: () => dropdownRef.value?.open() });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				menu: menu.value,
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
					text: ""
				}, {
					default: withCtx(() => [
						credentialSelectorProvider.value ? (openBlock(), createBlock(CredentialSelectorModal_default, {
							key: credentialSelectorProvider.value,
							provider: credentialSelectorProvider.value,
							"initial-value": _ctx.credentials?.[credentialSelectorProvider.value] ?? null,
							onSelect: handleSelectCredentials,
							onCreateNew: handleCreateNewCredential
						}, null, 8, ["provider", "initial-value"])) : createCommentVNode("", true),
						_ctx.selectedAgent ? (openBlock(), createBlock(ChatAgentAvatar_default, {
							key: 1,
							agent: _ctx.selectedAgent,
							size: credentialsName.value ? "md" : "sm",
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, [
							"agent",
							"size",
							"class"
						])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.selected) }, [createBaseVNode("div", null, toDisplayString(selectedLabel.value), 1), credentialsName.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(credentialsName.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: "medium"
						})
					]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["menu"]);
		};
	}
});
var ModelSelector_vue_vue_type_style_index_0_lang_module_default = {
	dropdownButton: "_dropdownButton_1vfzi_123",
	selected: "_selected_1vfzi_131",
	icon: "_icon_1vfzi_144",
	menuIcon: "_menuIcon_1vfzi_149",
	avatarIcon: "_avatarIcon_1vfzi_153"
};
var ModelSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default }]]);
var ToolsSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsSelector",
	props: {
		disabled: { type: Boolean },
		selected: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const toolCount = computed(() => __props.selected.length ?? 0);
		const displayToolNodeTypes = computed(() => {
			return __props.selected.slice(0, 3).map((t) => nodeTypesStore.getNodeType(t.type)).filter(Boolean);
		});
		const toolsLabel = computed(() => toolCount.value > 0 ? `${toolCount.value} Tool${toolCount.value > 1 ? "s" : ""}` : "Tools");
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
				class: normalizeClass(_ctx.$style.toolsButton),
				disabled: _ctx.disabled,
				"aria-label": "Select tools",
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
				}), 128))], 2)) : (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.iconFallback)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "plus",
					size: 12
				})], 2)), createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(toolsLabel.value), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class", "disabled"]);
		};
	}
});
var ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
	toolsButton: "_toolsButton_tpwui_123",
	iconStack: "_iconStack_tpwui_131",
	icon: "_icon_tpwui_131",
	iconOverlap: "_iconOverlap_tpwui_144",
	iconFallback: "_iconFallback_tpwui_148"
};
var ToolsSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsSelector_vue_vue_type_style_index_0_lang_module_default }]]);
export { ModelSelector_default as n, ToolsSelector_default as t };
