import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, Ht as toValue, K as onBeforeMount, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, n as Transition, pt as useTemplateRef, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { D as useElementSize, M as useLocalStorage, N as useMediaQuery, O as useEventListener, b as useActiveElement, bt as useI18n, xt as I18nT } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Ii as N8nIconButton_default, Mi as N8nTooltip_default, Nt as N8nCard_default, Qi as N8nButton_default, R as N8nSpinner_default, Yi as N8nHeading_default, Zi as N8nText_default, _t as useRouter, gt as useRoute, i as Select_default, lt as N8nLink_default, m as N8nScrollArea_default, z as N8nResizeWrapper_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ln as useToast, Lo as INVITE_USER_MODAL_KEY, Ns as useSettingsStore, _i as hasRole, li as hasPermission, pr as useTelemetry, r as useUIStore, t as useUsersStore, zt as useDocumentTitle } from "./users.store-DNsxOyr9.js";
import { Wo as v4_default, ai as ROLE, hs as VIEWS, ml as EnterpriseEditionFeature, oc as LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE, pi as chatHubConversationModelSchema, sc as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, ui as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import { r as useRootStore } from "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./versions.store-Cwz3Wqlv.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-H79gLsnv.js";
import "./useClipboard-CRF4y00Y.js";
import "./nodeIcon-BECwfvAM.js";
import { l as shouldIgnoreCanvasShortcut } from "./canvas.utils-DpVKjWUr.js";
import { t as CredentialIcon_default } from "./CredentialIcon-C_ro4oh2.js";
import { t as useDynamicCredentials } from "./useDynamicCredentials-Bp5Gkrur.js";
import "./NodeIcon-BCEWdXjI.js";
import "./pushConnection.store-Cn2XGMRG.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-DdzVEcPD.js";
import "./dist-DbwL6rH5.js";
import { h as MOBILE_MEDIA_QUERY, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, t as AGENT_EDITOR_MODAL_KEY } from "./constants-CsI9wULx.js";
import { A as revokeDynamicCredential, C as unflattenModel, T as authorizeDynamicCredential, a as collectChatArtifacts, g as isLlmProvider, k as fetchWorkflowExecutionStatus, l as findOneFromModelsResponse, t as useChatStore, u as flattenModel } from "./chat.store-BrIM6zrT.js";
import "./ChatAgentAvatar-D7Wu8cPY.js";
import { t as useResizablePanel } from "./useResizablePanel-DJSdAJJK.js";
import { a as useChatSession, i as ChatMarkdownChunk_default, n as ChatPrompt_default, r as ChatMessage_default, t as ChatGreetings_default } from "./ChatGreetings-BIhPpJD4.js";
import { n as useFileDrop } from "./ToolsSelector-DJC5f0HH.js";
import { n as useChatCredentials, r as chatHubConversationModelWithCachedDisplayNameSchema, t as ChatLayout_default } from "./ChatLayout-DRaMMCW9.js";
import { n as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-CJjZqyno.js";
var ChatConversationHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatConversationHeader",
	props: {
		selectedModel: {},
		credentials: {},
		readyToShowModelSelector: { type: Boolean },
		showArtifactIcon: { type: Boolean }
	},
	emits: [
		"selectModel",
		"renameConversation",
		"editCustomAgent",
		"createCustomAgent",
		"selectCredential",
		"openWorkflow",
		"reopenArtifact"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const modelSelectorRef = useTemplateRef("modelSelectorRef");
		const i18n = useI18n();
		const chatStore = useChatStore();
		const isLoadingAgents = ref(false);
		const showOpenWorkflow = computed(() => {
			return __props.selectedModel?.model.provider === "n8n" && __props.selectedModel.metadata.scopes?.includes("workflow:read");
		});
		function onOpenWorkflow() {
			if (__props.selectedModel?.model.provider === "n8n") emit("openWorkflow", __props.selectedModel.model.workflowId);
		}
		function onModelChange(selection) {
			emit("selectModel", selection);
		}
		watch(() => __props.credentials, async (creds) => {
			if (creds) {
				isLoadingAgents.value = true;
				try {
					await chatStore.fetchAgents(creds);
				} finally {
					isLoadingAgents.value = false;
				}
			}
		}, { immediate: true });
		__expose({
			openModelSelector: () => modelSelectorRef.value?.open(),
			openCredentialSelector: (provider) => modelSelectorRef.value?.openCredentialSelector(provider)
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.grow) }, [__props.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
				key: 0,
				ref_key: "modelSelectorRef",
				ref: modelSelectorRef,
				"selected-agent": __props.selectedModel,
				credentials: __props.credentials,
				text: "",
				agents: unref(chatStore).agents,
				"is-loading": isLoadingAgents.value,
				onChange: onModelChange,
				onCreateCustomAgent: _cache[0] || (_cache[0] = ($event) => emit("createCustomAgent")),
				onSelectCredential: _cache[1] || (_cache[1] = (provider, credentialId) => emit("selectCredential", provider, credentialId))
			}, null, 8, [
				"selected-agent",
				"credentials",
				"agents",
				"is-loading"
			])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [
				__props.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.editAgent"),
					onClick: _cache[2] || (_cache[2] = ($event) => emit("editCustomAgent", __props.selectedModel.model.agentId))
				}, null, 8, ["label"])) : createCommentVNode("", true),
				__props.showArtifactIcon ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					icon: "panel-right",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("reopenArtifact"))
				})) : createCommentVNode("", true),
				showOpenWorkflow.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: "subtle",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.openWorkflow"),
					onClick: onOpenWorkflow
				}, null, 8, ["label"])) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1hi6t_125",
	menuButton: "_menuButton_1hi6t_136",
	grow: "_grow_1hi6t_140",
	title: "_title_1hi6t_147",
	buttons: "_buttons_1hi6t_151"
};
var ChatConversationHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var CHAT_USERS_DOCS_URL = "https://docs.n8n.io/advanced-ai/chat-hub/#chat-user-role";
var ChatStarter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatStarter",
	props: { showWelcomeScreen: { type: Boolean } },
	emits: ["startNewChat"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const uiStore = useUIStore();
		const settingsStore = useSettingsStore();
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const isAdvancedPermissionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions]);
		const hasInvitePermission = computed(() => hasPermission(["rbac"], { rbac: { scope: "user:create" } }));
		const showInviteButton = computed(() => hasInvitePermission.value);
		const isInviteDisabled = computed(() => !isAdvancedPermissionsEnabled.value);
		function handleStartNewChat() {
			emit("startNewChat");
		}
		function handleInviteUsers() {
			uiStore.openModalWithData({
				name: INVITE_USER_MODAL_KEY,
				data: { initialRole: ROLE.ChatUser }
			});
		}
		function handleUpgradeClick() {
			goToUpgrade("chat-hub", "upgrade-advanced-permissions");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, {
				name: "welcome-fade",
				mode: "out-in"
			}, {
				default: withCtx(() => [__props.showWelcomeScreen ? (openBlock(), createElementBlock("div", {
					key: "welcome",
					class: normalizeClass(_ctx.$style.welcomeContent)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: "",
						size: "xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.header")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "large",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.subtitle")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardGrid) }, [
						createBaseVNode("div", {
							"data-test-id": "welcome-card-workflow-agents",
							class: normalizeClass([_ctx.$style.cardWrapper, _ctx.$style.cardFirst])
						}, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nIcon_default), {
								icon: "robot",
								size: "large",
								color: "text-dark"
							}), createVNode(unref(N8nText_default), { bold: "" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.workflowAgents.title")), 1)]),
								_: 1
							})], 2), createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.workflowAgents.description")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["class"])], 2),
						createBaseVNode("div", {
							class: normalizeClass([_ctx.$style.cardWrapper, _ctx.$style.cardMiddle]),
							"data-test-id": "welcome-card-personal-agents"
						}, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nIcon_default), {
								icon: "message-square",
								size: "large",
								color: "text-dark"
							}), createVNode(unref(N8nText_default), { bold: "" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.personalAgents.title")), 1)]),
								_: 1
							})], 2), createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.personalAgents.description")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["class"])], 2),
						createBaseVNode("div", {
							class: normalizeClass([_ctx.$style.cardWrapper, _ctx.$style.cardLast]),
							"data-test-id": "welcome-card-base-models"
						}, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.providerIcons) }, [
								createVNode(CredentialIcon_default, {
									"credential-type-name": "openAiApi",
									size: 20
								}),
								createVNode(CredentialIcon_default, {
									"credential-type-name": "anthropicApi",
									size: 20
								}),
								createVNode(CredentialIcon_default, {
									"credential-type-name": "googlePalmApi",
									size: 20
								})
							], 2), createVNode(unref(N8nText_default), { bold: "" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.baseModels.title")), 1)]),
								_: 1
							})], 2), createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.card.baseModels.description")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["class"])], 2)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonGroup) }, [createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						icon: "plus",
						"data-test-id": "welcome-start-new-chat",
						onClick: handleStartNewChat
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.button.startNewChat")), 1)]),
						_: 1
					}), showInviteButton.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						disabled: !isInviteDisabled.value
					}, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "chatHub.welcome.inviteUpgrade.tooltip",
							scope: "global"
						}, {
							link: withCtx(() => [createVNode(unref(N8nLink_default), {
								size: "small",
								onClick: handleUpgradeClick
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
								_: 1
							})]),
							docsLink: withCtx(() => [createVNode(unref(N8nLink_default), {
								size: "small",
								href: CHAT_USERS_DOCS_URL,
								target: "_blank",
								rel: "noopener"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.inviteUpgrade.here")), 1)]),
								_: 1
							})]),
							_: 1
						})]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							size: "medium",
							icon: "users",
							disabled: isInviteDisabled.value,
							"data-test-id": "welcome-invite-chat-users",
							onClick: handleInviteUsers
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.welcome.button.inviteChatUsers")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true)], 2)
				], 2)) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
var ChatStarter_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_186nk_125",
	cardGrid: "_cardGrid_186nk_133",
	cardWrapper: "_cardWrapper_186nk_143",
	card: "_card_186nk_133",
	cardFirst: "_cardFirst_186nk_166",
	cardMiddle: "_cardMiddle_186nk_175",
	cardLast: "_cardLast_186nk_179",
	cardHeader: "_cardHeader_186nk_188",
	providerIcons: "_providerIcons_186nk_196",
	buttonGroup: "_buttonGroup_186nk_201",
	welcomeContent: "_welcomeContent_186nk_207"
};
var ChatStarter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatStarter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatStarter_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["srcdoc", "title"];
var ChatArtifactViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatArtifactViewer",
	props: {
		artifacts: {},
		selectedIndex: {}
	},
	emits: [
		"close",
		"selectArtifact",
		"download"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const selectedArtifact = computed(() => props.artifacts[props.selectedIndex] ?? props.artifacts[0]);
		const options = computed(() => props.artifacts.map((artifact, index) => ({
			value: index,
			label: artifact.title
		})));
		const isHtml = computed(() => selectedArtifact.value?.type === "html");
		const isMarkdown = computed(() => selectedArtifact.value?.type === "md");
		const markdownContent = computed(() => ({
			type: "text",
			content: isMarkdown.value ? selectedArtifact.value?.content : `\`\`\`${selectedArtifact.value?.type}\n${selectedArtifact.value?.content}\n\`\`\``
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.viewer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [(openBlock(), createBlock(unref(Select_default), {
				key: selectedArtifact.value?.title ?? "",
				"model-value": __props.selectedIndex,
				size: "medium",
				variant: "ghost",
				items: options.value,
				class: normalizeClass(_ctx.$style.title),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("selectArtifact", $event))
			}, null, 8, [
				"model-value",
				"items",
				"class"
			])), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				text: "",
				icon: "download",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("download"))
			}), createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				text: "",
				icon: "x",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("close"))
			})], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [isHtml.value ? (openBlock(), createElementBlock("iframe", {
				key: 0,
				srcdoc: selectedArtifact.value?.content,
				class: normalizeClass(_ctx.$style.iframe),
				sandbox: "",
				title: selectedArtifact.value?.title
			}, null, 10, _hoisted_1)) : markdownContent.value ? (openBlock(), createBlock(ChatMarkdownChunk_default, {
				key: 1,
				ref: "markdownChunk",
				class: normalizeClass(isMarkdown.value ? _ctx.$style.markdown : ""),
				"single-pre": !isMarkdown.value,
				source: markdownContent.value,
				"footnote-style": "normal"
			}, null, 8, [
				"class",
				"single-pre",
				"source"
			])) : createCommentVNode("", true)], 2)], 2)], 2);
		};
	}
});
var ChatArtifactViewer_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1w6pd_125",
	viewer: "_viewer_1w6pd_135",
	header: "_header_1w6pd_142",
	markdown: "_markdown_1w6pd_156",
	title: "_title_1w6pd_160",
	headerActions: "_headerActions_1w6pd_169",
	type: "_type_1w6pd_176",
	content: "_content_1w6pd_181",
	iframe: "_iframe_1w6pd_186"
};
var ChatArtifactViewer_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatArtifactViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatArtifactViewer_vue_vue_type_style_index_0_lang_module_default }]]);
var DynamicCredentialsDrawer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DynamicCredentialsDrawer",
	props: {
		credentials: {},
		connectedCount: {},
		totalCount: {}
	},
	emits: [
		"close",
		"authorize",
		"revoke"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIconButton_default), {
					type: "tertiary",
					text: "",
					icon: "x",
					"data-testid": "dynamic-credentials-drawer-close",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.subtitle) }, [createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.subtitle")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.credentialList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.credentials, (cred) => {
					return openBlock(), createElementBlock("li", {
						key: cred.credentialId,
						class: normalizeClass(_ctx.$style.credentialRow),
						"data-testid": "dynamic-credential-row"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialInfo) }, [
						createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(cred.credentialName), 1)]),
							_: 2
						}, 1024),
						cred.credentialStatus === "configured" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.status.connected")), 1)]),
							_: 1
						})) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.status.notConnected")), 1)]),
							_: 1
						})),
						cred.error ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(cred.error), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)
					], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialAction) }, [cred.isConnecting ? (openBlock(), createBlock(unref(N8nSpinner_default), {
						key: 0,
						size: "small"
					})) : cred.credentialStatus === "configured" ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						type: "tertiary",
						size: "small",
						"data-testid": "dynamic-credential-disconnect",
						onClick: ($event) => emit("revoke", cred.credentialId)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.disconnect")), 1)]),
						_: 1
					}, 8, ["onClick"])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						type: "secondary",
						size: "small",
						"data-testid": "dynamic-credential-connect",
						onClick: ($event) => emit("authorize", cred.credentialId)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.connect")), 1)]),
						_: 1
					}, 8, ["onClick"]))], 2)], 2);
				}), 128))], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.dynamicCredentials.drawer.footer", { interpolate: {
						connected: String(__props.connectedCount),
						total: String(__props.totalCount)
					} })), 1)]),
					_: 1
				})], 2)
			], 2)], 2);
		};
	}
});
var DynamicCredentialsDrawer_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_8e4c4_125",
	panel: "_panel_8e4c4_135",
	header: "_header_8e4c4_142",
	body: "_body_8e4c4_153",
	subtitle: "_subtitle_8e4c4_159",
	credentialList: "_credentialList_8e4c4_166",
	credentialRow: "_credentialRow_8e4c4_175",
	credentialInfo: "_credentialInfo_8e4c4_185",
	credentialAction: "_credentialAction_8e4c4_193",
	footer: "_footer_8e4c4_199"
};
var DynamicCredentialsDrawer_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DynamicCredentialsDrawer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DynamicCredentialsDrawer_vue_vue_type_style_index_0_lang_module_default }]]);
function useChatArtifacts(container$2, chatMessages) {
	const isViewerCollapsed = ref(false);
	const selectedIndex = ref(0);
	const allArtifacts = computed(() => collectChatArtifacts(chatMessages.value.flatMap((message) => message.content)));
	const selectedArtifact = computed(() => {
		const artifacts = allArtifacts.value;
		if (artifacts.length === 0) return null;
		return artifacts[Math.min(selectedIndex.value, artifacts.length - 1)];
	});
	const isViewerVisible = computed(() => allArtifacts.value.length > 0 && !isViewerCollapsed.value);
	const panelResizer = useResizablePanel("N8N_CHAT_ARTIFACT_VIEWER_WIDTH", {
		container: container$2,
		defaultSize: (size) => size * .6,
		minSize: 300,
		maxSize: (size) => size - 300,
		allowFullSize: true
	});
	watch(allArtifacts, (newArtifacts, oldArtifacts) => {
		if (newArtifacts.length > 0 && newArtifacts.length !== oldArtifacts?.length) {
			isViewerCollapsed.value = false;
			selectedIndex.value = newArtifacts.length - 1;
		}
	});
	function handleViewerResizeEnd() {
		if (panelResizer.isFullSize.value) isViewerCollapsed.value = true;
		panelResizer.onResizeEnd();
	}
	function handleCloseViewer() {
		isViewerCollapsed.value = true;
	}
	function handleSelect(index) {
		selectedIndex.value = index;
	}
	function handleOpenViewer(title$2) {
		if (title$2) selectedIndex.value = allArtifacts.value.findIndex((d) => d.title === title$2);
		isViewerCollapsed.value = false;
	}
	function handleDownload() {
		const artifact = selectedArtifact.value;
		if (!artifact) return;
		const blob = new Blob([artifact.content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${artifact.title}.${artifact.type}`;
		a.click();
		URL.revokeObjectURL(url);
	}
	return {
		selectedIndex,
		allArtifacts,
		isViewerVisible,
		isViewerCollapsed,
		viewerSize: computed(() => panelResizer.size.value),
		isViewerResizing: computed(() => panelResizer.isResizing.value),
		handleOpenViewer,
		handleViewerResize: panelResizer.onResize,
		handleViewerResizeEnd,
		handleCloseViewer,
		handleDownload,
		handleSelect
	};
}
function useChatInputFocus(inputRef, options) {
	const uiStore = useUIStore();
	const activeElement = useActiveElement();
	const isDisabled = computed(() => toValue(options?.disabled) ?? false);
	const shouldIgnoreKeypress = computed(() => {
		if (isDisabled.value) return true;
		if (uiStore.isAnyModalOpen) return true;
		if (activeElement.value && shouldIgnoreCanvasShortcut(activeElement.value)) return true;
		return false;
	});
	const RESERVED_SHORTCUT_KEYS = ["["];
	const isPrintableKey = (event) => {
		return event.key.length === 1;
	};
	const isReservedShortcut = (event) => {
		return RESERVED_SHORTCUT_KEYS.includes(event.key);
	};
	const hasModifierKey = (event) => {
		return event.ctrlKey || event.metaKey || event.altKey;
	};
	const onKeyDown = (event) => {
		if (shouldIgnoreKeypress.value) return;
		if (event.isComposing) return;
		if (event.repeat) return;
		if (hasModifierKey(event)) return;
		if (!isPrintableKey(event)) return;
		if (isReservedShortcut(event)) return;
		const input = inputRef.value;
		if (!input) return;
		event.preventDefault();
		input.appendText(event.key);
		input.focus();
	};
	useEventListener(document, "keydown", onKeyDown);
}
function parseResolverId(authorizationUrl) {
	if (!authorizationUrl) return "";
	try {
		return new URL(authorizationUrl).searchParams.get("resolverId") ?? "";
	} catch {
		return "";
	}
}
function useDynamicCredentialsStatus(workflowId) {
	const rootStore = useRootStore();
	const credentials = ref([]);
	const isLoading = ref(false);
	const hasDynamicCredentials = computed(() => credentials.value.length > 0);
	const allAuthenticated = computed(() => hasDynamicCredentials.value && credentials.value.every((c) => c.credentialStatus === "configured"));
	const connectedCount = computed(() => credentials.value.filter((c) => c.credentialStatus === "configured").length);
	const totalCount = computed(() => credentials.value.length);
	async function fetchStatus() {
		const id = workflowId.value;
		if (!id) {
			credentials.value = [];
			return;
		}
		isLoading.value = true;
		try {
			credentials.value = ((await fetchWorkflowExecutionStatus(rootStore.restApiContext, id)).credentials ?? []).map((c) => ({
				credentialId: c.credentialId,
				credentialName: c.credentialName,
				credentialType: c.credentialType,
				credentialStatus: c.credentialStatus,
				resolverId: parseResolverId(c.authorizationUrl),
				isConnecting: false,
				error: null
			}));
		} catch {
			credentials.value = [];
		} finally {
			isLoading.value = false;
		}
	}
	async function pollUntilConfigured(credentialId, maxAttempts = 10, intervalMs = 1e3) {
		for (let i = 0; i < maxAttempts; i++) {
			await fetchStatus();
			if (credentials.value.find((c) => c.credentialId === credentialId)?.credentialStatus === "configured") return;
			await new Promise((resolve) => setTimeout(resolve, intervalMs));
		}
	}
	async function authorize(credentialId) {
		const cred = credentials.value.find((c) => c.credentialId === credentialId);
		if (!cred) return;
		cred.isConnecting = true;
		cred.error = null;
		try {
			const oauthUrl = await authorizeDynamicCredential(rootStore.restApiContext, credentialId, cred.resolverId);
			const allowedProtocols = ["http:", "https:"];
			try {
				const parsedUrl = new URL(oauthUrl);
				if (!allowedProtocols.includes(parsedUrl.protocol)) {
					cred.error = "Invalid authorization URL";
					cred.isConnecting = false;
					return;
				}
			} catch {
				cred.error = "Invalid authorization URL";
				cred.isConnecting = false;
				return;
			}
			const oauthPopup = window.open(oauthUrl, "OAuth Authorization", "scrollbars=no,resizable=yes,status=no,titlebar=no,location=no,toolbar=no,menubar=no,width=500,height=700");
			const oauthChannel = new BroadcastChannel("oauth-callback");
			let settled = false;
			const settle = async () => {
				if (settled) return;
				settled = true;
				oauthChannel.close();
				clearInterval(pollInterval);
				await pollUntilConfigured(credentialId);
				cred.isConnecting = false;
			};
			oauthChannel.addEventListener("message", async (event) => {
				if (event.data === "success") {
					if (oauthPopup) oauthPopup.close();
					await settle();
				}
			});
			const pollInterval = setInterval(() => {
				if (oauthPopup?.closed) settle();
			}, 500);
		} catch {
			cred.error = "Failed to start authorization";
			cred.isConnecting = false;
		}
	}
	async function revoke(credentialId) {
		const cred = credentials.value.find((c) => c.credentialId === credentialId);
		if (!cred) return;
		cred.isConnecting = true;
		cred.error = null;
		try {
			await revokeDynamicCredential(rootStore.restApiContext, credentialId, cred.resolverId);
			await fetchStatus();
		} catch {
			cred.error = "Failed to disconnect credential";
		} finally {
			cred.isConnecting = false;
		}
	}
	watch(workflowId, (newId) => {
		if (newId) fetchStatus();
		else credentials.value = [];
	}, { immediate: true });
	return {
		credentials,
		hasDynamicCredentials,
		allAuthenticated,
		connectedCount,
		totalCount,
		isLoading,
		fetchStatus,
		authorize,
		revoke
	};
}
var ChatView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatView",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const usersStore = useUsersStore();
		const chatStore = useChatStore();
		const settingsStore = useSettingsStore();
		const toast = useToast();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const documentTitle = useDocumentTitle();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		onBeforeMount(async () => {
			await chatStore.fetchConfiguredTools();
		});
		const headerRef = useTemplateRef("headerRef");
		const inputRef = useTemplateRef("inputRef");
		const scrollableRef = useTemplateRef("scrollable");
		const chatLayoutRef = useTemplateRef("chatLayout");
		const chatLayoutElement = computed(() => chatLayoutRef.value?.$el);
		const welcomeScreenDismissed = ref(false);
		const showCreditsClaimedCallout = ref(false);
		const hasAttemptedAutoClaim = ref(false);
		const { userCanClaimOpenAiCredits, aiCreditsQuota, claimCredits } = useFreeAiCredits();
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isNewSessionOverride = computed(() => sessionId.value !== route.params.id);
		const shouldSkipNextScrollTrigger = ref(false);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.byId[sessionId.value] : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const canSelectTools = computed(() => !!selectedModel.value?.metadata.capabilities.functionCalling);
		const hadConversationBefore = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE(usersStore.currentUserId ?? "anonymous"), false);
		const hasSession = computed(() => (chatStore.sessions.ids?.length ?? 0) > 0);
		const showWelcomeScreen = computed(() => {
			if (hadConversationBefore.value || welcomeScreenDismissed.value) return false;
			if (route.query.workflowId || route.query.agentId) return false;
			if (!chatStore.sessionsReady) return;
			return !hasSession.value && (!settingsStore.isChatFeatureEnabled || !hasRole(["global:chatUser"]));
		});
		const defaultModel = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL(usersStore.currentUserId ?? "anonymous"), null, {
			writeDefaults: false,
			shallow: true,
			serializer: {
				read: (value) => {
					try {
						return chatHubConversationModelWithCachedDisplayNameSchema.parse(JSON.parse(value));
					} catch (error) {
						return null;
					}
				},
				write: (value) => JSON.stringify(value)
			}
		});
		const defaultAgent = computed(() => defaultModel.value ? chatStore.getAgent(defaultModel.value) : void 0);
		const modelFromQuery = computed(() => {
			const agentId = route.query.agentId;
			const workflowId = route.query.workflowId;
			const provider = route.query.provider;
			const model = route.query.model;
			if (!isNewSessionOverride.value) return null;
			if (typeof agentId === "string") return chatStore.getAgent({
				provider: "custom-agent",
				agentId
			});
			if (typeof workflowId === "string") return chatStore.getAgent({
				provider: "n8n",
				workflowId
			});
			if (typeof provider === "string" && typeof model === "string") {
				const parsedModel = chatHubConversationModelSchema.safeParse({
					provider,
					model
				});
				if (parsedModel.success) return chatStore.getAgent(parsedModel.data);
			}
			return null;
		});
		const selectedModel = computed(() => {
			if (!isNewSessionOverride.value) {
				const model = currentConversation.value ? unflattenModel(currentConversation.value) : null;
				if (!model) return null;
				return chatStore.getAgent(model, {
					name: currentConversation.value?.agentName || currentConversation.value?.model,
					icon: currentConversation.value?.agentIcon
				});
			}
			if (modelFromQuery.value) return modelFromQuery.value;
			if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.streaming.agent;
			if (!defaultModel.value) return null;
			return chatStore.getAgent(defaultModel.value, {
				name: defaultModel.value.cachedDisplayName,
				icon: defaultModel.value.cachedIcon
			});
		});
		const isAgentModel = computed(() => !!selectedModel.value && !isLlmProvider(selectedModel.value.model.provider));
		const customAgentId = computed(() => selectedModel.value?.model.provider === "custom-agent" ? selectedModel.value.model.agentId : void 0);
		const { customAgent } = useCustomAgent(customAgentId);
		const checkedToolIds = computed(() => {
			if (customAgent.value) return customAgent.value.toolIds;
			if (currentConversation.value?.toolIds) return currentConversation.value.toolIds;
			return modelFromQuery.value ? [] : chatStore.configuredTools.filter((t) => t.enabled).map((t) => t.definition.id);
		});
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const { isEnabled: dynamicCredentialsEnabled } = useDynamicCredentials();
		const dynamicCreds = useDynamicCredentialsStatus(computed(() => selectedModel.value?.model.provider === "n8n" && dynamicCredentialsEnabled.value ? selectedModel.value.model.workflowId : null));
		const isDynamicCredentialsDrawerOpen = ref(false);
		const showDynamicCredentialsMissingCallout = computed(() => messagingState.value === "missingDynamicCredentials");
		watch(() => dynamicCreds.allAuthenticated.value, (allConnected) => {
			if (allConnected && isDynamicCredentialsDrawerOpen.value) isDynamicCredentialsDrawerOpen.value = false;
		});
		const credentialsForSelectedProvider = computed(() => {
			const provider = selectedModel.value?.model.provider;
			if (!provider) return null;
			if (!isLlmProvider(provider)) return {};
			const credentialsId = credentialsByProvider.value?.[provider];
			if (!credentialsId) return null;
			return { [PROVIDER_CREDENTIAL_TYPE_MAP[provider]]: {
				id: credentialsId,
				name: ""
			} };
		});
		const isMissingSelectedCredential = computed(() => !credentialsForSelectedProvider.value);
		const { chatMessages, isResponding, isNewSession: isNewSession$1, messagingState, scrollContainerRef, arrivedState, scrollToBottom, loadSession } = useChatSession({
			sessionId,
			scrollableRef,
			isNewSession: isNewSessionOverride,
			extendMessagingState: () => {
				if (chatStore.agentsReady && !selectedModel.value) return "missingAgent";
				if (chatStore.agentsReady && isMissingSelectedCredential.value) return "missingCredentials";
				if (dynamicCreds.hasDynamicCredentials.value && !dynamicCreds.allAuthenticated.value) return "missingDynamicCredentials";
				return null;
			},
			shouldSkipScroll: () => {
				if (shouldSkipNextScrollTrigger.value) {
					shouldSkipNextScrollTrigger.value = false;
					return true;
				}
				return false;
			}
		});
		const scrollContainerSize = useElementSize(scrollContainerRef);
		const artifacts = useChatArtifacts(chatLayoutElement, chatMessages);
		const isMainPanelNarrow$1 = computed(() => scrollContainerSize.width.value < 600);
		const editingMessageId = ref();
		const messageElementsRef = useTemplateRef("messages");
		const didSubmitInCurrentSession = ref(false);
		const fileDrop = useFileDrop(computed(() => {
			if (!((selectedModel.value?.metadata.allowFileUploads ?? false) && !isMissingSelectedCredential.value)) return false;
			if (editingMessageId.value) return chatMessages.value.find((msg) => msg.id === editingMessageId.value)?.type === "human";
			return true;
		}), onFilesDropped);
		useChatInputFocus(inputRef, { disabled: computed(() => showWelcomeScreen.value === true || messagingState.value !== "idle") });
		watch(() => chatStore.agents, (models) => {
			const settings = settingsStore.moduleSettings?.["chat-hub"];
			if (!models || !!selectedModel.value || !isNewSession$1.value || !settings) return;
			const model = findOneFromModelsResponse(models, settings.providers);
			if (model) handleSelectAgent(model);
		}, { immediate: true });
		watch([sessionId, isNewSession$1], async ([id, isNew]) => {
			didSubmitInCurrentSession.value = false;
			editingMessageId.value = void 0;
			if (!isNew) try {
				await loadSession(id);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.fetchConversationFailed"));
				await router.push({ name: CHAT_VIEW });
			}
		}, { immediate: true });
		watch([inputRef, sessionId], ([input]) => {
			input?.focus();
		}, { immediate: true });
		watch(currentConversationTitle, (title$2) => {
			documentTitle.set(title$2 ?? "Chat");
		}, { immediate: true });
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials);
		}, { immediate: true });
		watch(defaultAgent, (agent, prevAgent) => {
			if (defaultModel.value && agent?.name && agent.name !== prevAgent?.name) defaultModel.value = {
				...defaultModel.value,
				cachedDisplayName: agent.name
			};
			if (defaultModel.value && agent?.icon && (agent.icon.type !== prevAgent?.icon?.type || agent.icon.value !== prevAgent.icon.value)) defaultModel.value = {
				...defaultModel.value,
				cachedIcon: agent.icon
			};
		}, { immediate: true });
		watch([
			welcomeScreenDismissed,
			userCanClaimOpenAiCredits,
			messagingState,
			() => chatStore.agentsReady
		], async ([dismissed, canClaim, state, ready]) => {
			if (!canClaim || hasAttemptedAutoClaim.value) return;
			if (dismissed || ready && state === "missingCredentials") {
				hasAttemptedAutoClaim.value = true;
				if (await claimCredits("chatHubAutoClaim")) showCreditsClaimedCallout.value = true;
			}
		}, { immediate: true });
		watch(chatMessages, (messages) => {
			if (messages.length > 0) showCreditsClaimedCallout.value = false;
		});
		watch(hasSession, (value) => {
			hadConversationBefore.value = hadConversationBefore.value || value;
		}, { immediate: true });
		function handleDismissCreditsCallout() {
			showCreditsClaimedCallout.value = false;
		}
		async function onSubmit(message, attachments) {
			if (!message.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value || dynamicCreds.hasDynamicCredentials.value && !dynamicCreds.allAuthenticated.value) return;
			didSubmitInCurrentSession.value = true;
			editingMessageId.value = void 0;
			await chatStore.sendMessage(sessionId.value, message, selectedModel.value, credentialsForSelectedProvider.value, attachments);
			inputRef.value?.reset();
			if (isNewSession$1.value) router.push({
				name: CHAT_CONVERSATION_VIEW,
				params: { id: sessionId.value }
			});
		}
		async function onStop() {
			await chatStore.stopStreamingMessage(sessionId.value);
		}
		function handleStartEditMessage(messageId) {
			editingMessageId.value = messageId;
		}
		function handleCancelEditMessage() {
			editingMessageId.value = void 0;
		}
		async function handleEditMessage(content$1, keptAttachmentIndices, newFiles) {
			if (!editingMessageId.value || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value || dynamicCreds.hasDynamicCredentials.value && !dynamicCreds.allAuthenticated.value) return;
			await chatStore.editMessage(sessionId.value, editingMessageId.value, content$1, selectedModel.value, credentialsForSelectedProvider.value, keptAttachmentIndices, newFiles);
			editingMessageId.value = void 0;
		}
		async function handleRegenerateMessage(message) {
			if (isResponding.value || message.type !== "ai" || !selectedModel.value || !credentialsForSelectedProvider.value || dynamicCreds.hasDynamicCredentials.value && !dynamicCreds.allAuthenticated.value) return;
			const messageToRetry = message.id;
			editingMessageId.value = void 0;
			await chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value, credentialsForSelectedProvider.value);
		}
		async function handleSelectModel(selection, selectedAgent) {
			const agent = selectedAgent ?? chatStore.getAgent(selection);
			if (currentConversation.value) try {
				await chatStore.updateSessionModel(sessionId.value, selection, agent.name);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateModelFailed"));
			}
			else {
				defaultModel.value = {
					...selection,
					cachedDisplayName: agent.name,
					cachedIcon: agent.icon ?? void 0
				};
				await router.push({
					name: CHAT_VIEW,
					force: true
				});
			}
		}
		async function handleSelectAgent(selection) {
			await handleSelectModel(selection.model, selection);
		}
		function handleSwitchAlternative(messageId) {
			shouldSkipNextScrollTrigger.value = true;
			chatStore.switchAlternative(sessionId.value, messageId);
		}
		function handleConfigureCredentials(provider) {
			headerRef.value?.openCredentialSelector(provider);
		}
		function handleConfigureModel() {
			headerRef.value?.openModelSelector();
		}
		function handleEditAgent(agentId) {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					agentId,
					credentials: credentialsByProvider,
					onCreateCustomAgent: handleSelectAgent
				}
			});
		}
		function openNewAgentCreator() {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					credentials: credentialsByProvider,
					onCreateCustomAgent: handleSelectAgent
				}
			});
		}
		function handleOpenWorkflow(workflowId) {
			const routeData = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { name: workflowId }
			});
			window.open(routeData.href, "_blank");
		}
		function handleSelectPrompt(prompt) {
			if (selectedModel.value) telemetry.track("User clicked chat hub suggested prompt", {
				...flattenModel(selectedModel.value.model),
				source: "chat_hub"
			});
			inputRef.value?.setText(prompt);
			inputRef.value?.focus();
		}
		function onFilesDropped(files) {
			if (!editingMessageId.value) {
				inputRef.value?.addAttachments(files);
				return;
			}
			const index = chatMessages.value.findIndex((message) => message.id === editingMessageId.value);
			messageElementsRef.value?.[index]?.addFiles(files);
		}
		return (_ctx, _cache) => {
			return showWelcomeScreen.value !== void 0 ? (openBlock(), createBlock(ChatLayout_default, {
				key: 0,
				ref: "chatLayout",
				class: normalizeClass({
					[_ctx.$style.chatLayout]: true,
					[_ctx.$style.isNewSession]: unref(isNewSession$1),
					[_ctx.$style.isAgentNewSession]: unref(isNewSession$1) && isAgentModel.value,
					[_ctx.$style.isExistingSession]: !unref(isNewSession$1),
					[_ctx.$style.isMobileDevice]: unref(isMobileDevice$1),
					[_ctx.$style.isDraggingFile]: unref(fileDrop).isDragging.value,
					[_ctx.$style.hasArtifact]: unref(artifacts).isViewerVisible.value,
					[_ctx.$style.isMainPanelNarrow]: isMainPanelNarrow$1.value,
					[_ctx.$style.isResizing]: unref(artifacts).isViewerResizing.value
				}),
				onDragenter: unref(fileDrop).handleDragEnter,
				onDragleave: unref(fileDrop).handleDragLeave,
				onDragover: unref(fileDrop).handleDragOver,
				onDrop: unref(fileDrop).handleDrop,
				onPaste: unref(fileDrop).handlePaste
			}, {
				default: withCtx(() => [
					unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.dropOverlay)
					}, [createVNode(unref(N8nText_default), {
						size: "large",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.dropOverlay")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nResizeWrapper_default), {
						class: normalizeClass(_ctx.$style.mainContentResizer),
						width: unref(artifacts).viewerSize.value,
						style: normalizeStyle({ width: unref(artifacts).isViewerVisible.value ? `${unref(artifacts).viewerSize.value}px` : isDynamicCredentialsDrawerOpen.value ? "calc(100% - 340px)" : "100%" }),
						"supported-directions": ["right"],
						"is-resizing-enabled": true,
						onResize: unref(artifacts).handleViewerResize,
						onResizeend: unref(artifacts).handleViewerResizeEnd
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainContent) }, [
							!showWelcomeScreen.value ? (openBlock(), createBlock(ChatConversationHeader_default, {
								key: 0,
								ref_key: "headerRef",
								ref: headerRef,
								"selected-model": selectedModel.value,
								credentials: unref(credentialsByProvider),
								"ready-to-show-model-selector": unref(isNewSession$1) || !!currentConversation.value,
								"show-artifact-icon": unref(artifacts).allArtifacts.value.length > 0 && unref(artifacts).isViewerCollapsed.value,
								onSelectModel: handleSelectModel,
								onEditCustomAgent: handleEditAgent,
								onCreateCustomAgent: openNewAgentCreator,
								onSelectCredential: unref(selectCredential),
								onOpenWorkflow: handleOpenWorkflow,
								onReopenArtifact: unref(artifacts).handleOpenViewer
							}, null, 8, [
								"selected-model",
								"credentials",
								"ready-to-show-model-selector",
								"show-artifact-icon",
								"onSelectCredential",
								"onReopenArtifact"
							])) : createCommentVNode("", true),
							createVNode(unref(N8nScrollArea_default), {
								type: "scroll",
								"enable-vertical-scroll": true,
								"enable-horizontal-scroll": false,
								"as-child": "",
								class: normalizeClass(_ctx.$style.scrollArea)
							}, {
								default: withCtx(() => [createBaseVNode("div", {
									ref: "scrollable",
									class: normalizeClass(_ctx.$style.scrollable)
								}, [unref(isNewSession$1) ? (openBlock(), createBlock(ChatGreetings_default, {
									key: 0,
									class: normalizeClass({ [_ctx.$style.greetingsCentered]: !isAgentModel.value }),
									"selected-agent": selectedModel.value,
									loading: !unref(chatStore).agentsReady,
									onSelectPrompt: handleSelectPrompt
								}, null, 8, [
									"class",
									"selected-agent",
									"loading"
								])) : (openBlock(), createElementBlock("div", {
									key: 1,
									role: "log",
									"aria-live": "polite",
									class: normalizeClass(_ctx.$style.messageList)
								}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chatMessages), (message, index) => {
									return openBlock(), createBlock(ChatMessage_default, {
										key: message.id,
										ref_for: true,
										ref: "messages",
										message,
										compact: isMainPanelNarrow$1.value,
										"is-editing": editingMessageId.value === message.id,
										"is-edit-submitting": unref(chatStore).streaming?.revisionOfMessageId === message.id,
										"has-session-streaming": unref(isResponding),
										"cached-agent-display-name": selectedModel.value?.name ?? null,
										"cached-agent-icon": selectedModel.value?.icon ?? null,
										"accepted-mime-types": selectedModel.value?.metadata.allowedFilesMimeTypes ?? "",
										"min-height": didSubmitInCurrentSession.value && message.type === "ai" && index === unref(chatMessages).length - 1 && unref(scrollContainerRef) ? unref(scrollContainerRef).offsetHeight - 30 - 200 : void 0,
										onStartEdit: ($event) => handleStartEditMessage(message.id),
										onCancelEdit: handleCancelEditMessage,
										onRegenerate: handleRegenerateMessage,
										onUpdate: handleEditMessage,
										onSwitchAlternative: handleSwitchAlternative,
										onOpenArtifact: unref(artifacts).handleOpenViewer
									}, null, 8, [
										"message",
										"compact",
										"is-editing",
										"is-edit-submitting",
										"has-session-streaming",
										"cached-agent-display-name",
										"cached-agent-icon",
										"accepted-mime-types",
										"min-height",
										"onStartEdit",
										"onOpenArtifact"
									]);
								}), 128))], 2)), !showWelcomeScreen.value ? (openBlock(), createElementBlock("div", {
									key: 2,
									class: normalizeClass(_ctx.$style.promptContainer)
								}, [!unref(arrivedState).bottom && !unref(isNewSession$1) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									variant: "subtle",
									icon: "arrow-down",
									class: normalizeClass(_ctx.$style.scrollToBottomButton),
									title: unref(i18n).baseText("chatHub.chat.scrollToBottom"),
									onClick: _cache[0] || (_cache[0] = ($event) => unref(scrollToBottom)(true))
								}, null, 8, ["class", "title"])) : createCommentVNode("", true), createVNode(ChatPrompt_default, {
									ref_key: "inputRef",
									ref: inputRef,
									"selected-model": selectedModel.value,
									"checked-tool-ids": canSelectTools.value ? checkedToolIds.value : [],
									"session-id": unref(isNewSession$1) ? void 0 : sessionId.value,
									"custom-agent-id": customAgentId.value,
									"messaging-state": unref(messagingState),
									"is-tools-selectable": canSelectTools.value,
									"is-new-session": unref(isNewSession$1),
									"show-credits-claimed-callout": showCreditsClaimedCallout.value,
									"show-dynamic-credentials-missing-callout": showDynamicCredentialsMissingCallout.value,
									"ai-credits-quota": String(unref(aiCreditsQuota)),
									onSubmit,
									onStop,
									onSelectModel: handleConfigureModel,
									onSetCredentials: handleConfigureCredentials,
									onEditAgent: handleEditAgent,
									onDismissCreditsCallout: handleDismissCreditsCallout,
									onOpenDynamicCredentials: _cache[1] || (_cache[1] = ($event) => isDynamicCredentialsDrawerOpen.value = true)
								}, null, 8, [
									"selected-model",
									"checked-tool-ids",
									"session-id",
									"custom-agent-id",
									"messaging-state",
									"is-tools-selectable",
									"is-new-session",
									"show-credits-claimed-callout",
									"show-dynamic-credentials-missing-callout",
									"ai-credits-quota"
								])], 2)) : createCommentVNode("", true)], 2)]),
								_: 1
							}, 8, ["class"]),
							unref(isNewSession$1) ? (openBlock(), createBlock(ChatStarter_default, {
								key: 1,
								"show-welcome-screen": showWelcomeScreen.value,
								onStartNewChat: _cache[2] || (_cache[2] = ($event) => {
									welcomeScreenDismissed.value = true;
									inputRef.value?.focus();
								})
							}, null, 8, ["show-welcome-screen"])) : createCommentVNode("", true)
						], 2)]),
						_: 1
					}, 8, [
						"class",
						"width",
						"style",
						"onResize",
						"onResizeend"
					]),
					isDynamicCredentialsDrawerOpen.value && unref(dynamicCreds).hasDynamicCredentials.value ? (openBlock(), createBlock(DynamicCredentialsDrawer_default, {
						key: 1,
						class: normalizeClass(_ctx.$style.dynamicCredentialsDrawer),
						credentials: unref(dynamicCreds).credentials.value,
						"connected-count": unref(dynamicCreds).connectedCount.value,
						"total-count": unref(dynamicCreds).totalCount.value,
						"data-testid": "dynamic-credentials-drawer",
						onClose: _cache[3] || (_cache[3] = ($event) => isDynamicCredentialsDrawerOpen.value = false),
						onAuthorize: unref(dynamicCreds).authorize,
						onRevoke: unref(dynamicCreds).revoke
					}, null, 8, [
						"class",
						"credentials",
						"connected-count",
						"total-count",
						"onAuthorize",
						"onRevoke"
					])) : createCommentVNode("", true),
					unref(artifacts).isViewerVisible.value ? (openBlock(), createBlock(ChatArtifactViewer_default, {
						key: sessionId.value,
						class: normalizeClass(_ctx.$style.artifactViewer),
						artifacts: unref(artifacts).allArtifacts.value,
						"selected-index": unref(artifacts).selectedIndex.value,
						onClose: unref(artifacts).handleCloseViewer,
						onSelectArtifact: unref(artifacts).handleSelect,
						onDownload: unref(artifacts).handleDownload
					}, null, 8, [
						"class",
						"artifacts",
						"selected-index",
						"onClose",
						"onSelectArtifact",
						"onDownload"
					])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, [
				"class",
				"onDragenter",
				"onDragleave",
				"onDragover",
				"onDrop",
				"onPaste"
			])) : createCommentVNode("", true);
		};
	}
});
var ChatView_vue_vue_type_style_index_0_lang_module_default = {
	chatLayout: "_chatLayout_5crcp_125",
	hasArtifact: "_hasArtifact_5crcp_130",
	mainContent: "_mainContent_5crcp_130",
	mainContentResizer: "_mainContentResizer_5crcp_138",
	dynamicCredentialsDrawer: "_dynamicCredentialsDrawer_5crcp_151",
	artifactViewer: "_artifactViewer_5crcp_158",
	isResizing: "_isResizing_5crcp_163",
	scrollArea: "_scrollArea_5crcp_168",
	scrollable: "_scrollable_5crcp_173",
	isNewSession: "_isNewSession_5crcp_182",
	isAgentNewSession: "_isAgentNewSession_5crcp_185",
	greetingsCentered: "_greetingsCentered_5crcp_189",
	header: "_header_5crcp_196",
	messageList: "_messageList_5crcp_202",
	promptContainer: "_promptContainer_5crcp_212",
	isMobileDevice: "_isMobileDevice_5crcp_219",
	isExistingSession: "_isExistingSession_5crcp_219",
	isMainPanelNarrow: "_isMainPanelNarrow_5crcp_232",
	scrollToBottomButton: "_scrollToBottomButton_5crcp_237",
	isDraggingFile: "_isDraggingFile_5crcp_245",
	dropOverlay: "_dropOverlay_5crcp_249"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
