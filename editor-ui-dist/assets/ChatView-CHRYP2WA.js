const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-DMNyXBI9.js","assets/core-O17GTs5u.js","assets/chunk-r2Y0G7H8.js","assets/languageModules-Cublut3B.js","assets/xml-DMSvkJ3u.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, n as Transition, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { D as useElementSize, F as useScroll, L as useSpeechRecognition, M as useLocalStorage, N as useMediaQuery, R as useSpeechSynthesis, bt as I18nT, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, At as N8nLink_default, Bi as N8nButton_default, Gi as __vitePreload, Hi as N8nIcon_default, Ht as N8nTooltip_default, Kt as N8nInput_default, Li as N8nHeading_default, Lt as useRoute, Ni as truncate, Ri as N8nCallout_default, Rt as useRouter, Ut as require_markdown_it_link_attributes, c as N8nScrollArea_default, ht as N8nCard_default, wt as useDeviceSupport, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { ar as hasPermission, cn as useDocumentTitle, fs as useSettingsStore, go as INVITE_USER_MODAL_KEY, hr as useToast, kr as v4_default, pr as hasRole, r as useUIStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Bs as LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS, Mc as EnterpriseEditionFeature, Qr as ROLE, Rs as LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE, Xo as VIEWS, ri as chatHubConversationModelSchema, ti as PROVIDER_CREDENTIAL_TYPE_MAP, yi as INodesSchema, zs as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useClipboard } from "./useClipboard-D9AU0bV9.js";
import "./nodeIcon-p8UmtDus.js";
import { t as VueMarkdown_default } from "./VueMarkdown-DGZ05_F-.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DmygWc0W.js";
import "./NodeIcon-HdSkOCP-.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-Dxull4ml.js";
import { _ as TOOLS_SELECTOR_MODAL_KEY, h as MOBILE_MEDIA_QUERY, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, t as AGENT_EDITOR_MODAL_KEY, v as providerDisplayNames } from "./constants-mCmg0XQZ.js";
import { a as findOneFromModelsResponse, b as buildChatAttachmentUrl, d as isEditable, f as isLlmProvider, g as splitMarkdownIntoChunks, m as isRegenerable, p as isLlmProviderModel, r as createMimeTypes, t as useChatStore, v as unflattenModel } from "./chat.store-iit3mf2V.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-D0NEe1bL.js";
import { t as ChatFile_default } from "./ChatFile-D7N9M2uo.js";
import { n as ToolsSelector_default, r as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-PczHEEQe.js";
import { n as useChatCredentials, r as chatHubConversationModelWithCachedDisplayNameSchema, t as ChatLayout_default } from "./ChatLayout-UQ6lZMed.js";
var ChatConversationHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatConversationHeader",
	props: {
		selectedModel: {},
		credentials: {},
		readyToShowModelSelector: { type: Boolean }
	},
	emits: [
		"selectModel",
		"renameConversation",
		"editCustomAgent",
		"createCustomAgent",
		"selectCredential",
		"openWorkflow"
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.grow) }, [__props.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
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
				])) : createCommentVNode("", true)], 2),
				__props.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.editAgent"),
					onClick: _cache[2] || (_cache[2] = ($event) => emit("editCustomAgent", __props.selectedModel.model.agentId))
				}, null, 8, ["class", "label"])) : createCommentVNode("", true),
				showOpenWorkflow.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.openWorkflow"),
					onClick: onOpenWorkflow
				}, null, 8, ["class", "label"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_5jy9c_125",
	menuButton: "_menuButton_5jy9c_135",
	grow: "_grow_5jy9c_139",
	title: "_title_5jy9c_146",
	editAgent: "_editAgent_5jy9c_150"
};
var ChatConversationHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing: "_typing_v8rma_125",
	blink: "_blink_v8rma_1"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "chat-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var ChatTypingIndicator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
var CopyButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CopyButton",
	props: { content: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const justCopied = ref(false);
		const copyTooltip = computed(() => {
			return justCopied.value ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
		});
		async function handleCopy() {
			await clipboard.copy(__props.content);
			justCopied.value = true;
			setTimeout(() => {
				justCopied.value = false;
			}, 1e3);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "bottom",
				"show-after": 300
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(copyTooltip.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: justCopied.value ? "check" : "copy",
					type: "tertiary",
					size: "medium",
					text: "",
					class: normalizeClass(_ctx.$style.button),
					tabindex: "0",
					"aria-label": copyTooltip.value,
					onClick: handleCopy
				}, null, 8, [
					"icon",
					"class",
					"aria-label"
				])]),
				_: 1
			});
		};
	}
});
var CopyButton_vue_vue_type_style_index_0_lang_module_default = { button: "_button_1pgkm_125" };
var CopyButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		message: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean },
		hasSessionStreaming: { type: Boolean }
	},
	emits: [
		"edit",
		"regenerate",
		"switchAlternative",
		"readAloud"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const workflowsStore = useWorkflowsStore();
		const emit = __emit;
		const currentAlternativeIndex = computed(() => {
			return __props.message.alternatives.findIndex((id) => id === __props.message.id);
		});
		const executionUrl = computed(() => {
			if (workflowsStore.canViewWorkflows && __props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: __props.message.workflowId,
					executionId: __props.message.executionId
				}
			}).href;
		});
		const canEdit = computed(() => isEditable(__props.message));
		const canRegenerate = computed(() => isRegenerable(__props.message));
		function handleEdit() {
			emit("edit");
		}
		function handleRegenerate() {
			emit("regenerate");
		}
		function handleReadAloud() {
			emit("readAloud");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.actions) }, [
				createVNode(CopyButton_default, {
					content: __props.message.content,
					"data-test-id": "chat-message-copy"
				}, null, 8, ["content"]),
				__props.isSpeechSynthesisAvailable && __props.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: __props.isSpeaking ? "volume-x" : "volume-2",
						type: "tertiary",
						size: "medium",
						text: "",
						onClick: handleReadAloud
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true),
				canEdit.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.edit")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "tertiary",
						size: "medium",
						text: "",
						"data-test-id": "chat-message-edit",
						disabled: __props.hasSessionStreaming,
						onClick: handleEdit
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				canRegenerate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.regenerate")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "refresh-cw",
						type: "tertiary",
						size: "medium",
						text: "",
						"data-test-id": "chat-message-regenerate",
						disabled: __props.hasSessionStreaming,
						onClick: handleRegenerate
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				executionUrl.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.executionId")) + ": ", 1), createVNode(unref(N8nLink_default), {
						to: executionUrl.value,
						"new-window": true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.message.executionId), 1)]),
						_: 1
					}, 8, ["to"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "info",
						type: "tertiary",
						size: "medium",
						text: "",
						"data-test-id": "chat-message-info"
					})]),
					_: 1
				})) : createCommentVNode("", true),
				__props.message.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createVNode(unref(N8nIconButton_default), {
						icon: "chevron-left",
						type: "tertiary",
						size: "medium",
						text: "",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === 0,
						"data-test-id": "chat-message-prev-alternative",
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value - 1]))
					}, null, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(`${currentAlternativeIndex.value + 1}/${__props.message.alternatives.length}`), 1)]),
						_: 1
					}),
					createVNode(unref(N8nIconButton_default), {
						icon: "chevron-right",
						type: "tertiary",
						size: "medium",
						text: "",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === __props.message.alternatives.length - 1,
						"data-test-id": "chat-message-next-alternative",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value + 1]))
					}, null, 8, ["disabled"])
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_1dz1l_125" };
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-cc49b274"]]);
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes(), 1);
var hljsInstance;
var asyncImport = { status: "uninitialized" };
function useChatHubMarkdownOptions(codeBlockActionsClassName, tableContainerClassName) {
	const forceReRenderKey = ref(0);
	const codeBlockContents = ref();
	const options = { highlight(str, lang) {
		if (!lang) return "";
		const normalizedLang = lang.toLowerCase();
		if (hljsInstance?.getLanguage(normalizedLang)) try {
			return hljsInstance.highlight(str, { language: normalizedLang }).value;
		} catch {}
		loadLanguageModules();
		return "";
	} };
	async function loadLanguageModules() {
		if (asyncImport.status === "done") return;
		if (asyncImport.status === "inProgress") {
			await asyncImport.promise;
			forceReRenderKey.value++;
			return;
		}
		try {
			asyncImport = {
				status: "inProgress",
				promise: Promise.all([__vitePreload(() => import("./es-DMNyXBI9.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-Cublut3B.js"), __vite__mapDeps([3,4]))])
			};
			const [hljs, languages] = await asyncImport.promise;
			asyncImport = { status: "done" };
			hljsInstance = hljs.default.newInstance();
			for (const [lang, module] of Object.entries(languages)) hljsInstance.registerLanguage(lang, module);
			forceReRenderKey.value++;
		} catch (error) {
			console.warn("Failed to load syntax highlighting modules", error);
		}
	}
	return {
		options,
		forceReRenderKey,
		plugins: computed(() => {
			const linksNewTabPlugin = (vueMarkdownItInstance) => {
				vueMarkdownItInstance.use(import_markdown_it_link_attributes.default, { attrs: {
					target: "_blank",
					rel: "noopener"
				} });
			};
			const codeBlockPlugin = (vueMarkdownItInstance) => {
				const defaultFenceRenderer = vueMarkdownItInstance.renderer.rules.fence;
				codeBlockContents.value = /* @__PURE__ */ new Map();
				vueMarkdownItInstance.renderer.rules.fence = (tokens, idx, options$1, env, self) => {
					const defaultRendered = defaultFenceRenderer?.(tokens, idx, options$1, env, self) ?? self.renderToken(tokens, idx, options$1);
					const content$1 = tokens[idx]?.content.trim();
					if (content$1) codeBlockContents.value?.set(String(idx), content$1);
					return defaultRendered.replace("<pre>", `<pre><div data-markdown-token-idx="${idx}" class="${codeBlockActionsClassName}"></div>`);
				};
			};
			const tablePlugin = (vueMarkdownItInstance) => {
				const defaultTableOpenRenderer = vueMarkdownItInstance.renderer.rules.table_open;
				const defaultTableCloseRenderer = vueMarkdownItInstance.renderer.rules.table_close;
				vueMarkdownItInstance.renderer.rules.table_open = (tokens, idx, options$1, env, self) => {
					return (defaultTableOpenRenderer?.(tokens, idx, options$1, env, self) ?? self.renderToken(tokens, idx, options$1)).replace("<table", `<div class="${tableContainerClassName}"><table`);
				};
				vueMarkdownItInstance.renderer.rules.table_close = (tokens, idx, options$1, env, self) => {
					return (defaultTableCloseRenderer?.(tokens, idx, options$1, env, self) ?? self.renderToken(tokens, idx, options$1)).replace("</table>", "</table></div>");
				};
			};
			return [
				linksNewTabPlugin,
				codeBlockPlugin,
				tablePlugin
			];
		}),
		codeBlockContents
	};
}
var ChatMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMarkdownChunk",
	props: {
		source: {},
		containerWidth: {}
	},
	setup(__props) {
		const styles = useCssModule();
		const markdown = useChatHubMarkdownOptions(styles.codeBlockActions, styles.tableContainer);
		const hoveredCodeBlockActions = ref(null);
		const hoveredCodeBlockContent = computed(() => {
			const idx = hoveredCodeBlockActions.value?.getAttribute("data-markdown-token-idx");
			return idx ? markdown.codeBlockContents.value?.get(idx) : void 0;
		});
		function handleMouseMove(e) {
			const container = e.target instanceof HTMLElement || e.target instanceof SVGElement ? e.target.closest("pre")?.querySelector(`.${styles.codeBlockActions}`) : null;
			hoveredCodeBlockActions.value = container instanceof HTMLElement ? container : null;
		}
		function handleMouseLeave() {
			hoveredCodeBlockActions.value = null;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.chatMessageMarkdown, "chat-message-markdown"]),
				style: normalizeStyle({ "--container--width": `${__props.containerWidth}px` }),
				onMousemove: handleMouseMove,
				onMouseleave: handleMouseLeave
			}, [(openBlock(), createBlock(unref(VueMarkdown_default), {
				key: unref(markdown).forceReRenderKey.value,
				source: __props.source,
				options: unref(markdown).options,
				plugins: unref(markdown).plugins.value
			}, null, 8, [
				"source",
				"options",
				"plugins"
			])), hoveredCodeBlockActions.value && hoveredCodeBlockContent.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: hoveredCodeBlockActions.value
			}, [createVNode(CopyButton_default, { content: hoveredCodeBlockContent.value }, null, 8, ["content"])], 8, ["to"])) : createCommentVNode("", true)], 38);
		};
	}
});
var ChatMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = {
	chatMessageMarkdown: "_chatMessageMarkdown_429f8_125",
	codeBlockActions: "_codeBlockActions_429f8_190",
	tableContainer: "_tableContainer_429f8_207"
};
var ChatMarkdownChunk_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["data-message-id", "data-test-id"];
var _hoisted_2 = { key: 1 };
var ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessage",
	props: {
		message: {},
		compact: { type: Boolean },
		isEditing: { type: Boolean },
		isEditSubmitting: { type: Boolean },
		hasSessionStreaming: { type: Boolean },
		cachedAgentDisplayName: {},
		cachedAgentIcon: {},
		minHeight: {},
		containerWidth: {}
	},
	emits: [
		"startEdit",
		"cancelEdit",
		"update",
		"regenerate",
		"switchAlternative"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const chatStore = useChatStore();
		const rootStore = useRootStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const i18n = useI18n();
		const editedText = ref("");
		const newFiles = ref([]);
		const removedExistingIndices = ref(/* @__PURE__ */ new Set());
		const fileInputRef = useTemplateRef("fileInputRef");
		const textareaRef = useTemplateRef("textarea");
		const messageContent = computed(() => __props.message.content);
		const messageChunks = computed(() => {
			if (__props.message.status === "error" && !__props.message.content) return [i18n.baseText("chatHub.message.error.unknown")];
			return splitMarkdownIntoChunks(__props.message.content).filter((chunk) => chunk.trim() !== "");
		});
		const speech = useSpeechSynthesis(messageContent, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const agent = computed(() => {
			const model = unflattenModel(__props.message);
			if (!model) return null;
			return chatStore.getAgent(model, {
				name: __props.cachedAgentDisplayName,
				icon: __props.cachedAgentIcon
			});
		});
		const attachments$2 = computed(() => __props.message.attachments.map(({ fileName, mimeType }, index) => ({
			file: new File([], fileName ?? "file", { type: mimeType }),
			downloadUrl: buildChatAttachmentUrl(rootStore.restApiContext, __props.message.sessionId, __props.message.id, index)
		})));
		const mergedAttachments = computed(() => [...attachments$2.value.flatMap(({ downloadUrl, file }, idx) => removedExistingIndices.value.has(idx) ? [] : [{
			isNew: false,
			file,
			index: idx,
			downloadUrl
		}]), ...newFiles.value.map((file, index) => ({
			isNew: true,
			file,
			index
		}))]);
		const hideMessage = computed(() => {
			return __props.message.status === "success" && __props.message.content === "";
		});
		function handleEdit() {
			emit("startEdit");
		}
		function handleCancelEdit() {
			emit("cancelEdit");
		}
		function handleConfirmEdit() {
			if (!editedText.value.trim()) return;
			const keptAttachmentIndices = __props.message.attachments.map((_, idx) => idx).filter((idx) => !removedExistingIndices.value.has(idx));
			emit("update", editedText.value, keptAttachmentIndices, newFiles.value);
		}
		function handleAttachClick() {
			fileInputRef.value?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			for (const file of Array.from(files)) newFiles.value.push(file);
			if (target) target.value = "";
		}
		function handleRemoveFile(file) {
			if (file.isNew) {
				newFiles.value = newFiles.value.filter((_, idx) => idx !== file.index);
				return;
			}
			removedExistingIndices.value.add(file.index);
		}
		function addFiles(files) {
			for (const file of files) newFiles.value.push(file);
		}
		__expose({ addFiles });
		function handleKeydownTextarea(e) {
			if (e.key === "Escape") {
				emit("cancelEdit");
				return;
			}
			const trimmed = editedText.value.trim();
			if (e.key === "Enter" && isCtrlKeyPressed(e) && !e.isComposing && trimmed) {
				e.preventDefault();
				handleConfirmEdit();
			}
		}
		function handleRegenerate() {
			emit("regenerate", __props.message);
		}
		function handleReadAloud() {
			if (speech.isSupported.value) if (speech.isPlaying.value) speech.stop();
			else speech.speak();
		}
		function handleSwitchAlternative(messageId) {
			emit("switchAlternative", messageId);
		}
		watch(() => __props.isEditing, (editing) => {
			editedText.value = editing ? __props.message.content : "";
			newFiles.value = [];
			removedExistingIndices.value = /* @__PURE__ */ new Set();
		}, { immediate: true });
		watch(textareaRef, async (textarea$1) => {
			if (textarea$1) {
				await new Promise((r) => setTimeout(r, 0));
				textarea$1.focus();
				textarea$1.$el.scrollIntoView({ block: "nearest" });
			}
		}, {
			immediate: true,
			flush: "post"
		});
		onBeforeMount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return !hideMessage.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([
					_ctx.$style.message,
					__props.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant,
					{ [_ctx.$style.compact]: __props.compact }
				]),
				style: normalizeStyle({
					minHeight: __props.minHeight ? `${__props.minHeight}px` : void 0,
					"--container--width": `${__props.containerWidth}px`
				}),
				"data-message-id": __props.message.id,
				"data-test-id": `chat-message-${__props.message.id}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "user",
				width: "20",
				height: "20"
			})) : (openBlock(), createBlock(ChatAgentAvatar_default, {
				key: 1,
				agent: agent.value,
				size: "md",
				tooltip: ""
			}, null, 8, ["agent"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.message.type === "human" ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				"data-test-id": "message-edit-file-input",
				class: normalizeClass(_ctx.$style.fileInput),
				multiple: "",
				onChange: handleFileSelect
			}, null, 34)) : createCommentVNode("", true), __props.isEditing ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.editContainer)
			}, [
				__props.message.type === "human" && mergedAttachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.attachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(mergedAttachments.value, (attachment, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file: attachment.file,
						"is-removable": "",
						href: attachment.isNew ? void 0 : attachment.downloadUrl,
						onRemove: ($event) => handleRemoveFile(attachment)
					}, null, 8, [
						"file",
						"href",
						"onRemove"
					]);
				}), 128))], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nInput_default), {
					ref: "textarea",
					modelValue: editedText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedText.value = $event),
					type: "textarea",
					autosize: {
						minRows: 1,
						maxRows: 20
					},
					class: normalizeClass(_ctx.$style.textarea),
					onKeydown: handleKeydownTextarea
				}, null, 8, ["modelValue", "class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.editFooter) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					"native-type": "button",
					type: "secondary",
					icon: "paperclip",
					text: "",
					onClick: withModifiers(handleAttachClick, ["stop"])
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editActions) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					size: "small",
					onClick: handleCancelEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					size: "small",
					disabled: !editedText.value.trim() || __props.isEditSubmitting,
					loading: __props.isEditSubmitting,
					onClick: handleConfirmEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.send")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)], 2)
			], 2)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.errorMessage]: __props.message.status === "error" }]) }, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.attachments)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (attachment, index) => {
				return openBlock(), createBlock(ChatFile_default, {
					key: index,
					file: attachment.file,
					"is-removable": false,
					href: attachment.downloadUrl
				}, null, 8, ["file", "href"]);
			}), 128))], 2)) : createCommentVNode("", true), __props.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.message.content), 1)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(messageChunks.value, (chunk, index) => {
				return openBlock(), createBlock(ChatMarkdownChunk_default, {
					key: index,
					source: chunk,
					"container-width": __props.containerWidth
				}, null, 8, ["source", "container-width"]);
			}), 128))], 2), __props.message.status === "running" ? (openBlock(), createBlock(ChatTypingIndicator_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.typingIndicator)
			}, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
				key: 1,
				"is-speech-synthesis-available": unref(speech).isSupported.value,
				"is-speaking": unref(speech).isPlaying.value,
				class: normalizeClass(_ctx.$style.actions),
				message: __props.message,
				"has-session-streaming": __props.hasSessionStreaming,
				onEdit: handleEdit,
				onRegenerate: handleRegenerate,
				onReadAloud: handleReadAloud,
				onSwitchAlternative: handleSwitchAlternative
			}, null, 8, [
				"is-speech-synthesis-available",
				"is-speaking",
				"class",
				"message",
				"has-session-streaming"
			]))], 64))], 2)], 14, _hoisted_1$1)) : createCommentVNode("", true);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_1rywg_125",
	avatar: "_avatar_1rywg_130",
	compact: "_compact_1rywg_143",
	content: "_content_1rywg_148",
	attachments: "_attachments_1rywg_154",
	chatMessage: "_chatMessage_1rywg_160",
	user: "_user_1rywg_172",
	errorMessage: "_errorMessage_1rywg_180",
	actions: "_actions_1rywg_188",
	editContainer: "_editContainer_1rywg_192",
	textarea: "_textarea_1rywg_207",
	fileInput: "_fileInput_1rywg_220",
	editFooter: "_editFooter_1rywg_224",
	editActions: "_editActions_1rywg_230",
	typingIndicator: "_typingIndicator_1rywg_236"
};
var ChatMessage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["accept"];
var ChatPrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPrompt",
	props: {
		messagingState: {},
		isNewSession: { type: Boolean },
		isToolsSelectable: { type: Boolean },
		selectedModel: {},
		selectedTools: {},
		showCreditsClaimedCallout: { type: Boolean },
		aiCreditsQuota: {}
	},
	emits: [
		"submit",
		"stop",
		"selectModel",
		"selectTools",
		"setCredentials",
		"editAgent",
		"dismissCreditsCallout"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const message$1 = ref("");
		const committedSpokenMessage = ref("");
		const attachments$2 = ref([]);
		const toast = useToast();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		const placeholder = computed(() => {
			if (__props.selectedModel) return i18n.baseText("chatHub.chat.prompt.placeholder.withModel", { interpolate: { model: __props.selectedModel.name ?? "a model" } });
			return i18n.baseText("chatHub.chat.prompt.placeholder.selectModel");
		});
		const llmProvider = computed(() => isLlmProviderModel(__props.selectedModel?.model) ? __props.selectedModel?.model.provider : void 0);
		const acceptedMimeTypes = computed(() => createMimeTypes(__props.selectedModel?.metadata.inputModalities ?? []));
		const canUploadFiles = computed(() => !!acceptedMimeTypes.value);
		const showMisisngAgentCallout = computed(() => __props.messagingState === "missingAgent");
		const showMissingCredentialsCallout = computed(() => __props.messagingState === "missingCredentials" && !!llmProvider.value);
		const calloutVisible$1 = computed(() => {
			return showMisisngAgentCallout.value || showMissingCredentialsCallout.value || __props.showCreditsClaimedCallout;
		});
		function onMic() {
			committedSpokenMessage.value = message$1.value;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function onStop() {
			emit("stop");
		}
		function onAttach() {
			fileInputRef.value?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			for (const file of Array.from(files)) attachments$2.value.push(file);
			if (target) target.value = "";
			inputRef.value?.focus();
		}
		function removeAttachment(removed) {
			attachments$2.value = attachments$2.value.filter((attachment) => attachment !== removed);
		}
		function handleSubmitForm() {
			const trimmed = message$1.value.trim();
			if (trimmed) {
				speechInput.stop();
				emit("submit", trimmed, attachments$2.value);
			}
		}
		function handleKeydownTextarea(e) {
			const trimmed = message$1.value.trim();
			speechInput.stop();
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
				e.preventDefault();
				speechInput.stop();
				emit("submit", trimmed, attachments$2.value);
			}
		}
		function handleClickInputWrapper() {
			inputRef.value?.focus();
		}
		watch(speechInput.result, (spoken) => {
			message$1.value = committedSpokenMessage.value + " " + spoken.trimStart();
		});
		watch(speechInput.isFinal, (final) => {
			if (final) committedSpokenMessage.value = message$1.value;
		}, { flush: "post" });
		watch(speechInput.error, (event) => {
			if (event?.error === "not-allowed") {
				toast.showError(new Error(i18n.baseText("chatHub.chat.prompt.microphone.accessDenied")), i18n.baseText("chatHub.chat.prompt.microphone.allowAccess"));
				return;
			}
			if (event?.error === "no-speech") toast.showMessage({
				title: i18n.baseText("chatHub.chat.prompt.microphone.noSpeech"),
				type: "warning"
			});
		});
		function onSelectTools() {
			if (__props.selectedModel?.model.provider === "custom-agent") {
				emit("editAgent", __props.selectedModel.model.agentId);
				return;
			}
			uiStore.openModalWithData({
				name: TOOLS_SELECTOR_MODAL_KEY,
				data: {
					selected: __props.selectedTools,
					onConfirm: (newTools) => emit("selectTools", newTools)
				}
			});
		}
		__expose({
			focus: () => inputRef.value?.focus(),
			reset: () => {
				message$1.value = "";
				committedSpokenMessage.value = "";
				attachments$2.value = [];
			},
			setText: (text) => {
				message$1.value = text;
			},
			addAttachments: (files) => {
				attachments$2.value.push(...files);
				inputRef.value?.focus();
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.prompt),
				onSubmit: withModifiers(handleSubmitForm, ["prevent"])
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWrap) }, [
				showMisisngAgentCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					icon: "info",
					theme: "secondary",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new" : "chatHub.chat.prompt.callout.selectModel.existing",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: "",
							onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
						}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new.link" : "chatHub.chat.prompt.callout.selectModel.existing.link")), 1)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				}, 8, ["class"])) : showMissingCredentialsCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 1,
					icon: "info",
					theme: "secondary",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new" : "chatHub.chat.prompt.callout.setCredentials.existing",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: "",
							onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("setCredentials", llmProvider.value), ["prevent"]))
						}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new.link" : "chatHub.chat.prompt.callout.setCredentials.existing.link")), 1)]),
						provider: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[llmProvider.value]), 1)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				}, 8, ["class"])) : __props.showCreditsClaimedCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					icon: "info",
					theme: "secondary",
					class: normalizeClass(_ctx.$style.callout)
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "x",
						title: "Dismiss",
						size: "medium",
						type: "secondary",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("dismissCreditsCallout"))
					})]),
					default: withCtx(() => [
						createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.beginning")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.credits", { interpolate: { amount: __props.aiCreditsQuota } })), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.end")), 1)]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createBaseVNode("input", {
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: acceptedMimeTypes.value,
					multiple: "",
					onChange: handleFileSelect
				}, null, 42, _hoisted_1),
				createBaseVNode("div", {
					class: normalizeClass([{ [_ctx.$style.calloutVisible]: calloutVisible$1.value }, _ctx.$style.inputWrapper]),
					onClick: handleClickInputWrapper
				}, [
					attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.attachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (file, index) => {
						return openBlock(), createBlock(ChatFile_default, {
							key: index,
							file,
							"is-previewable": true,
							"is-removable": __props.messagingState === "idle",
							onRemove: removeAttachment
						}, null, 8, ["file", "is-removable"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nInput_default), {
						ref_key: "inputRef",
						ref: inputRef,
						modelValue: message$1.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => message$1.value = $event),
						type: "textarea",
						placeholder: placeholder.value,
						autocomplete: "off",
						autosize: {
							minRows: 1,
							maxRows: 6
						},
						autofocus: "",
						disabled: __props.messagingState !== "idle",
						onKeydown: handleKeydownTextarea
					}, null, 8, [
						"modelValue",
						"placeholder",
						"disabled"
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tools) }, [createVNode(ToolsSelector_default, {
						class: normalizeClass(_ctx.$style.toolsButton),
						selected: __props.selectedTools ?? [],
						disabled: __props.messagingState !== "idle" || !__props.isToolsSelectable,
						"disabled-tooltip": __props.isToolsSelectable ? void 0 : unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip"),
						"transparent-bg": "",
						onClick: onSelectTools
					}, null, 8, [
						"class",
						"selected",
						"disabled",
						"disabled-tooltip"
					])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
						createVNode(unref(N8nTooltip_default), {
							content: !canUploadFiles.value ? unref(i18n).baseText("chatHub.chat.prompt.button.attach.disabled") : unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
							disabled: canUploadFiles.value && __props.messagingState === "idle",
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								"native-type": "button",
								type: "secondary",
								disabled: __props.messagingState !== "idle" || !canUploadFiles.value,
								icon: "paperclip",
								"icon-size": "large",
								text: "",
								onClick: withModifiers(onAttach, ["stop"])
							}, null, 8, ["disabled"])]),
							_: 1
						}, 8, ["content", "disabled"]),
						unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							"native-type": "button",
							title: unref(speechInput).isListening.value ? unref(i18n).baseText("chatHub.chat.prompt.button.stopRecording") : unref(i18n).baseText("chatHub.chat.prompt.button.voiceInput"),
							type: "secondary",
							disabled: __props.messagingState !== "idle",
							icon: unref(speechInput).isListening.value ? "square" : "mic",
							class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
							"icon-size": "large",
							onClick: withModifiers(onMic, ["stop"])
						}, null, 8, [
							"title",
							"disabled",
							"icon",
							"class"
						])) : createCommentVNode("", true),
						__props.messagingState !== "receiving" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 1,
							"native-type": "submit",
							disabled: __props.messagingState !== "idle" || !message$1.value.trim(),
							title: unref(i18n).baseText("chatHub.chat.prompt.button.send"),
							loading: __props.messagingState === "waitingFirstChunk",
							icon: "arrow-up",
							"icon-size": "large",
							onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
						}, null, 8, [
							"disabled",
							"title",
							"loading"
						])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 2,
							"native-type": "button",
							title: unref(i18n).baseText("chatHub.chat.prompt.button.stopGenerating"),
							icon: "square",
							"icon-size": "large",
							onClick: withModifiers(onStop, ["stop"])
						}, null, 8, ["title"]))
					], 2)], 2)
				], 2)
			], 2)], 34);
		};
	}
});
var ChatPrompt_vue_vue_type_style_index_0_lang_module_default = {
	prompt: "_prompt_5r2cq_125",
	inputWrap: "_inputWrap_5r2cq_130",
	callout: "_callout_5r2cq_138",
	closeButton: "_closeButton_5r2cq_145",
	fileInput: "_fileInput_5r2cq_149",
	inputWrapper: "_inputWrapper_5r2cq_153",
	calloutVisible: "_calloutVisible_5r2cq_176",
	footer: "_footer_5r2cq_181",
	tools: "_tools_5r2cq_188",
	toolsButton: "_toolsButton_5r2cq_192",
	iconStack: "_iconStack_5r2cq_197",
	icon: "_icon_5r2cq_197",
	iconOverlap: "_iconOverlap_5r2cq_210",
	iconFallback: "_iconFallback_5r2cq_214",
	actions: "_actions_5r2cq_220",
	attachments: "_attachments_5r2cq_229",
	recording: "_recording_5r2cq_235",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_5r2cq_1"
};
var ChatPrompt_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatPrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPrompt_vue_vue_type_style_index_0_lang_module_default }]]);
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
						type: "primary",
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
							type: "secondary",
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
function useFileDrop(canAcceptFiles, onFilesDropped) {
	const isDragging = ref(false);
	function handleDragEnter(e) {
		if (!canAcceptFiles.value) return;
		if (e.dataTransfer?.types.includes("Files")) isDragging.value = true;
	}
	function handleDragLeave(e) {
		if (!canAcceptFiles.value) return;
		const target = e.currentTarget;
		const relatedTarget = e.relatedTarget;
		if (relatedTarget && target.contains(relatedTarget)) return;
		isDragging.value = false;
	}
	function handleDragOver(e) {
		if (!canAcceptFiles.value) return;
		e.preventDefault();
		e.stopPropagation();
	}
	function handleDrop(e) {
		e.preventDefault();
		e.stopPropagation();
		isDragging.value = false;
		if (!canAcceptFiles.value) return;
		const files = e.dataTransfer?.files;
		if (!files || files.length === 0) return;
		onFilesDropped(Array.from(files));
	}
	function handlePaste(e) {
		if (!canAcceptFiles.value) return;
		const items = e.clipboardData?.items;
		if (!items) return;
		let hasFiles = false;
		const files = [];
		for (const item of Array.from(items)) if (item.kind === "file") {
			const file = item.getAsFile();
			if (file) {
				files.push(file);
				hasFiles = true;
			}
		}
		if (hasFiles) {
			e.preventDefault();
			onFilesDropped(files);
		}
	}
	return {
		isDragging,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handlePaste
	};
}
var ChatGreetings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatGreetings",
	props: { selectedAgent: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				key: "greetings",
				class: normalizeClass(_ctx.$style.greetings)
			}, [__props.selectedAgent ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(unref(N8nHeading_default), { tag: "h2" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting")), 1)]),
					_: 1
				}),
				createVNode(ChatAgentAvatar_default, {
					agent: __props.selectedAgent,
					size: "md",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["agent", "class"]),
				createVNode(unref(N8nHeading_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(truncate)(__props.selectedAgent.name, 40)), 1)]),
					_: 1
				})
			], 64)) : (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 1,
				tag: "h2"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting.fallback")), 1)]),
				_: 1
			}))], 2);
		};
	}
});
var ChatGreetings_vue_vue_type_style_index_0_lang_module_default = {
	greetings: "_greetings_1ej7o_125",
	icon: "_icon_1ej7o_132"
};
var ChatGreetings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatGreetings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatGreetings_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const headerRef = useTemplateRef("headerRef");
		const inputRef = useTemplateRef("inputRef");
		const scrollableRef = useTemplateRef("scrollable");
		const welcomeScreenDismissed = ref(false);
		const showCreditsClaimedCallout = ref(false);
		const hasAttemptedAutoClaim = ref(false);
		const { userCanClaimOpenAiCredits, aiCreditsQuota, claimCredits } = useFreeAiCredits();
		const scrollableSize = useElementSize(scrollableRef);
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isResponding = computed(() => chatStore.isResponding(sessionId.value));
		const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.byId[sessionId.value] : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const canSelectTools = computed(() => selectedModel.value?.model.provider === "custom-agent" || !!selectedModel.value?.metadata.capabilities.functionCalling);
		const hadConversationBefore = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE(usersStore.currentUserId ?? "anonymous"), false);
		const hasSession = computed(() => (chatStore.sessions.ids?.length ?? 0) > 0);
		const showWelcomeScreen = computed(() => {
			if (hadConversationBefore.value || welcomeScreenDismissed.value) return false;
			if (!chatStore.sessionsReady) return;
			return !hasSession.value && (!settingsStore.isChatFeatureEnabled || !hasRole(["global:chatUser"]));
		});
		const { arrivedState, measure } = useScroll(scrollContainerRef, {
			throttle: 100,
			offset: { bottom: 100 }
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
		const defaultTools = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS(usersStore.currentUserId ?? "anonymous"), null, {
			writeDefaults: false,
			shallow: true,
			serializer: {
				read: (value) => {
					try {
						return INodesSchema.parse(JSON.parse(value));
					} catch (error) {
						return null;
					}
				},
				write: (value) => JSON.stringify(value)
			}
		});
		const shouldSkipNextScrollTrigger = ref(false);
		const modelFromQuery = computed(() => {
			const agentId = route.query.agentId;
			const workflowId = route.query.workflowId;
			const provider = route.query.provider;
			const model = route.query.model;
			if (!isNewSession$1.value) return null;
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
			if (!isNewSession$1.value) {
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
		const { customAgent } = useCustomAgent(computed(() => selectedModel.value?.model.provider === "custom-agent" ? selectedModel.value.model.agentId : void 0));
		const selectedTools = computed(() => {
			if (customAgent.value) return customAgent.value.tools;
			if (currentConversation.value?.tools) return currentConversation.value.tools;
			return modelFromQuery.value ? [] : defaultTools.value ?? [];
		});
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
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
		const messagingState = computed(() => {
			if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.streaming.messageId ? "receiving" : "waitingFirstChunk";
			if (chatStore.agentsReady && !selectedModel.value) return "missingAgent";
			if (chatStore.agentsReady && isMissingSelectedCredential.value) return "missingCredentials";
			return "idle";
		});
		const editingMessageId = ref();
		const messageElementsRef = useTemplateRef("messages");
		const didSubmitInCurrentSession = ref(false);
		const fileDrop = useFileDrop(computed(() => {
			if (!(!!createMimeTypes(selectedModel.value?.metadata.inputModalities ?? []) && !isMissingSelectedCredential.value)) return false;
			if (editingMessageId.value) return chatMessages.value.find((msg) => msg.id === editingMessageId.value)?.type === "human";
			return true;
		}), onFilesDropped);
		function scrollToBottom(smooth) {
			scrollContainerRef.value?.scrollTo({
				top: scrollableRef.value?.scrollHeight,
				behavior: smooth ? "smooth" : "instant"
			});
		}
		function scrollToMessage(messageId) {
			scrollableRef.value?.querySelector(`[data-message-id="${messageId}"]`)?.scrollIntoView({ behavior: "smooth" });
		}
		watch(() => chatMessages.value[chatMessages.value.length - 1]?.id, (lastMessageId) => {
			if (!lastMessageId) return;
			if (shouldSkipNextScrollTrigger.value) {
				shouldSkipNextScrollTrigger.value = false;
				return;
			}
			nextTick(measure);
			if (chatStore.streaming?.sessionId === sessionId.value) {
				scrollToMessage(chatStore.streaming.promptId);
				return;
			}
			scrollToBottom(false);
		}, {
			immediate: true,
			flush: "post"
		});
		watch(() => chatStore.agents, (models) => {
			const settings = settingsStore.moduleSettings?.["chat-hub"];
			if (!models || !!selectedModel.value || !isNewSession$1.value || !settings) return;
			const model = findOneFromModelsResponse(models, settings.providers);
			if (model) handleSelectAgent(model);
		}, { immediate: true });
		watch([sessionId, isNewSession$1], async ([id, isNew]) => {
			didSubmitInCurrentSession.value = false;
			editingMessageId.value = void 0;
			if (!isNew && !chatStore.getConversation(id)) try {
				await chatStore.fetchMessages(id);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.fetchConversationFailed"));
				await router.push({ name: CHAT_VIEW });
			}
		}, { immediate: true });
		watch([inputRef, sessionId], ([input]) => {
			input?.focus();
		}, { immediate: true });
		watch(currentConversationTitle, (title$1) => {
			documentTitle.set(title$1 ?? "Chat");
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
			if (agent && !agent.metadata.capabilities.functionCalling && (defaultTools.value ?? []).length > 0) defaultTools.value = [];
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
		async function onSubmit(message$1, attachments$2) {
			if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			didSubmitInCurrentSession.value = true;
			editingMessageId.value = void 0;
			await chatStore.sendMessage(sessionId.value, message$1, selectedModel.value, credentialsForSelectedProvider.value, canSelectTools.value ? selectedTools.value : [], attachments$2);
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
			if (!editingMessageId.value || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			await chatStore.editMessage(sessionId.value, editingMessageId.value, content$1, selectedModel.value, credentialsForSelectedProvider.value, keptAttachmentIndices, newFiles);
			editingMessageId.value = void 0;
		}
		async function handleRegenerateMessage(message$1) {
			if (isResponding.value || message$1.type !== "ai" || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			const messageToRetry = message$1.id;
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
		async function handleUpdateTools(newTools) {
			defaultTools.value = newTools;
			if (currentConversation.value) try {
				await chatStore.updateToolsInSession(sessionId.value, newTools);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
			}
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
		function onFilesDropped(files) {
			if (!editingMessageId.value) {
				inputRef.value?.addAttachments(files);
				return;
			}
			const index = chatMessages.value.findIndex((message$1) => message$1.id === editingMessageId.value);
			messageElementsRef.value?.[index]?.addFiles(files);
		}
		return (_ctx, _cache) => {
			return showWelcomeScreen.value !== void 0 ? (openBlock(), createBlock(ChatLayout_default, {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.chatLayout]: true,
					[_ctx.$style.isNewSession]: isNewSession$1.value,
					[_ctx.$style.isExistingSession]: !isNewSession$1.value,
					[_ctx.$style.isMobileDevice]: unref(isMobileDevice$1),
					[_ctx.$style.isDraggingFile]: unref(fileDrop).isDragging.value
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
					!showWelcomeScreen.value ? (openBlock(), createBlock(ChatConversationHeader_default, {
						key: 1,
						ref_key: "headerRef",
						ref: headerRef,
						"selected-model": selectedModel.value,
						credentials: unref(credentialsByProvider),
						"ready-to-show-model-selector": isNewSession$1.value || !!currentConversation.value,
						onSelectModel: handleSelectModel,
						onEditCustomAgent: handleEditAgent,
						onCreateCustomAgent: openNewAgentCreator,
						onSelectCredential: unref(selectCredential),
						onOpenWorkflow: handleOpenWorkflow
					}, null, 8, [
						"selected-model",
						"credentials",
						"ready-to-show-model-selector",
						"onSelectCredential"
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
						}, [isNewSession$1.value ? (openBlock(), createBlock(ChatGreetings_default, {
							key: 0,
							"selected-agent": selectedModel.value
						}, null, 8, ["selected-agent"])) : (openBlock(), createElementBlock("div", {
							key: 1,
							role: "log",
							"aria-live": "polite",
							class: normalizeClass(_ctx.$style.messageList)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(chatMessages.value, (message$1, index) => {
							return openBlock(), createBlock(ChatMessage_default, {
								key: message$1.id,
								ref_for: true,
								ref: "messages",
								message: message$1,
								compact: unref(isMobileDevice$1),
								"is-editing": editingMessageId.value === message$1.id,
								"is-edit-submitting": unref(chatStore).streaming?.revisionOfMessageId === message$1.id,
								"has-session-streaming": isResponding.value,
								"cached-agent-display-name": selectedModel.value?.name ?? null,
								"cached-agent-icon": selectedModel.value?.icon ?? null,
								"min-height": didSubmitInCurrentSession.value && message$1.type === "ai" && index === chatMessages.value.length - 1 && scrollContainerRef.value ? scrollContainerRef.value.offsetHeight - 30 - 200 : void 0,
								"container-width": unref(scrollableSize).width.value ?? 0,
								onStartEdit: ($event) => handleStartEditMessage(message$1.id),
								onCancelEdit: handleCancelEditMessage,
								onRegenerate: handleRegenerateMessage,
								onUpdate: handleEditMessage,
								onSwitchAlternative: handleSwitchAlternative
							}, null, 8, [
								"message",
								"compact",
								"is-editing",
								"is-edit-submitting",
								"has-session-streaming",
								"cached-agent-display-name",
								"cached-agent-icon",
								"min-height",
								"container-width",
								"onStartEdit"
							]);
						}), 128))], 2)), !showWelcomeScreen.value ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.promptContainer)
						}, [!unref(arrivedState).bottom && !isNewSession$1.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							type: "secondary",
							icon: "arrow-down",
							class: normalizeClass(_ctx.$style.scrollToBottomButton),
							title: unref(i18n).baseText("chatHub.chat.scrollToBottom"),
							onClick: _cache[0] || (_cache[0] = ($event) => scrollToBottom(true))
						}, null, 8, ["class", "title"])) : createCommentVNode("", true), createVNode(ChatPrompt_default, {
							ref_key: "inputRef",
							ref: inputRef,
							class: normalizeClass(_ctx.$style.prompt),
							"selected-model": selectedModel.value,
							"selected-tools": selectedTools.value,
							"messaging-state": messagingState.value,
							"is-tools-selectable": canSelectTools.value,
							"is-new-session": isNewSession$1.value,
							"show-credits-claimed-callout": showCreditsClaimedCallout.value,
							"ai-credits-quota": String(unref(aiCreditsQuota)),
							onSubmit,
							onStop,
							onSelectModel: handleConfigureModel,
							onSelectTools: handleUpdateTools,
							onSetCredentials: handleConfigureCredentials,
							onEditAgent: handleEditAgent,
							onDismissCreditsCallout: handleDismissCreditsCallout
						}, null, 8, [
							"class",
							"selected-model",
							"selected-tools",
							"messaging-state",
							"is-tools-selectable",
							"is-new-session",
							"show-credits-claimed-callout",
							"ai-credits-quota"
						])], 2)) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["class"]),
					isNewSession$1.value ? (openBlock(), createBlock(ChatStarter_default, {
						key: 2,
						"show-welcome-screen": showWelcomeScreen.value,
						onStartNewChat: _cache[1] || (_cache[1] = ($event) => {
							welcomeScreenDismissed.value = true;
							inputRef.value?.focus();
						})
					}, null, 8, ["show-welcome-screen"])) : createCommentVNode("", true)
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
	chatLayout: "_chatLayout_rj7o7_125",
	scrollArea: "_scrollArea_rj7o7_129",
	scrollable: "_scrollable_rj7o7_134",
	isNewSession: "_isNewSession_rj7o7_143",
	header: "_header_rj7o7_147",
	messageList: "_messageList_rj7o7_153",
	isMobileDevice: "_isMobileDevice_rj7o7_165",
	promptContainer: "_promptContainer_rj7o7_169",
	isExistingSession: "_isExistingSession_rj7o7_173",
	prompt: "_prompt_rj7o7_169",
	scrollToBottomButton: "_scrollToBottomButton_rj7o7_191",
	isDraggingFile: "_isDraggingFile_rj7o7_199",
	dropOverlay: "_dropOverlay_rj7o7_203"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
