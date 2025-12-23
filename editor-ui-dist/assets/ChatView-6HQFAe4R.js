const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-BskBLtZB.js","assets/core-CXk6RNMV.js","assets/chunk-6z4oVpB-.js","assets/languageModules-CLe6cIYW.js","assets/xml-DSIt30t0.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { E as useElementSize, I as useSpeechRecognition, L as useSpeechSynthesis, M as useMediaQuery, P as useScroll, _t as I18nT, gt as useI18n, j as useLocalStorage } from "./_MapCache-DZpzsuCB.js";
import { Bn as N8nHeading_default, Gn as N8nIcon_default, Hn as N8nText_default, Un as N8nButton_default, ct as useDeviceSupport, gt as require_markdown_it_link_attributes, ht as N8nTooltip_default, mt as N8nLink_default, s as N8nScrollArea_default, xt as N8nIconButton_default, yt as N8nInput_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { $o as useSettingsStore, Nn as useDocumentTitle, Wi as useUIStore, Yo as v4_default, dr as useUsersStore, n as useToast, nr as hasPermission } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { As as LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS, Qr as PROVIDER_CREDENTIAL_TYPE_MAP, Vo as VIEWS, ei as chatHubConversationModelSchema, gi as INodesSchema, ks as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./retry-CMAFrhVi.js";
import "./nodeIcon-7dyMxFgB.js";
import { t as useClipboard } from "./useClipboard-Dy2su5yb.js";
import "./NodeIcon-BDiqVc0r.js";
import "./CredentialIcon-CHvZKgl9.js";
import { t as VueMarkdown_default } from "./VueMarkdown-DBt7Thyn.js";
import { d as MOBILE_MEDIA_QUERY, f as TOOLS_SELECTOR_MODAL_KEY, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, p as providerDisplayNames, t as AGENT_EDITOR_MODAL_KEY } from "./constants-qk3hx0l8.js";
import { h as buildChatAttachmentUrl, i as findOneFromModelsResponse, l as isLlmProvider, n as createMimeTypes, p as unflattenModel, t as useChatStore, u as isLlmProviderModel } from "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
import { n as ToolsSelector_default, r as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-6oiQs4KI.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-hwD4RBR6.js";
import { i as chatHubConversationModelWithCachedDisplayNameSchema, n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-KoERJgoC.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-BVw6kDBQ.js";
import { t as ChatFile_default } from "./ChatFile-8ik4bOn3.js";
var ChatConversationHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatConversationHeader",
	props: {
		isNewSession: { type: Boolean },
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
		const sidebar = useChatHubSidebarState();
		const router = useRouter();
		const modelSelectorRef = useTemplateRef("modelSelectorRef");
		const i18n = useI18n();
		const chatStore = useChatStore();
		const isLoadingAgents = ref(false);
		const showOpenWorkflow = computed(() => {
			return __props.selectedModel?.model.provider === "n8n" && hasPermission(["rbac"], { rbac: { scope: "workflow:read" } });
		});
		function onOpenWorkflow() {
			if (__props.selectedModel?.model.provider === "n8n") emit("openWorkflow", __props.selectedModel.model.workflowId);
		}
		function onModelChange(selection) {
			emit("selectModel", selection);
		}
		function onNewChat() {
			sidebar.toggleOpen(false);
			router.push({
				name: CHAT_VIEW,
				force: true
			});
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.grow) }, [
					createVNode(ChatSidebarOpener_default, { class: normalizeClass(_ctx.$style.menuButton) }, null, 8, ["class"]),
					!unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.menuButton),
						type: "secondary",
						icon: "square-pen",
						text: "",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("chatHub.chat.header.button.newChat"),
						disabled: _ctx.isNewSession,
						onClick: onNewChat
					}, null, 8, [
						"class",
						"aria-label",
						"disabled"
					])) : createCommentVNode("", true),
					_ctx.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
						key: 1,
						ref_key: "modelSelectorRef",
						ref: modelSelectorRef,
						"selected-agent": _ctx.selectedModel,
						credentials: _ctx.credentials,
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
					])) : createCommentVNode("", true)
				], 2),
				_ctx.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.editAgent"),
					onClick: _cache[2] || (_cache[2] = ($event) => emit("editCustomAgent", _ctx.selectedModel.model.agentId))
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
	component: "_component_1rkfw_123",
	menuButton: "_menuButton_1rkfw_133",
	grow: "_grow_1rkfw_137",
	title: "_title_1rkfw_144",
	editAgent: "_editAgent_1rkfw_148"
};
var ChatConversationHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing: "_typing_9qr9t_123",
	blink: "_blink_9qr9t_1"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", { class: normalizeClass(_ctx.$style.typing) }, _cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	]), 2);
}
var ChatTypingIndicator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
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
				promise: Promise.all([__vitePreload(() => import("./es-BskBLtZB.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-CLe6cIYW.js"), __vite__mapDeps([3,4]))])
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
					return defaultRendered.replace("</pre>", `<div data-markdown-token-idx="${idx}" class="${codeBlockActionsClassName}"></div></pre>`);
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
					onClick: handleCopy
				}, null, 8, ["icon", "class"])]),
				_: 1
			});
		};
	}
});
var CopyButton_vue_vue_type_style_index_0_lang_module_default = { button: "_button_9m8dh_123" };
var CopyButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		message: {},
		alternatives: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean }
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
		const emit = __emit;
		const currentAlternativeIndex = computed(() => {
			return __props.alternatives.findIndex((id) => id === __props.message.id);
		});
		const showExecutionUrl = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "workflow:read" } });
		});
		const executionUrl = computed(() => {
			if (!showExecutionUrl.value) return void 0;
			if (__props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: __props.message.workflowId,
					executionId: __props.message.executionId
				}
			}).href;
		});
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
				createVNode(CopyButton_default, { content: _ctx.message.content }, null, 8, ["content"]),
				_ctx.isSpeechSynthesisAvailable && _ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(_ctx.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: _ctx.isSpeaking ? "volume-x" : "volume-2",
						type: "tertiary",
						size: "medium",
						text: "",
						onClick: handleReadAloud
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true),
				_ctx.message.status === "success" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
						onClick: handleEdit
					})]),
					_: 1
				})) : createCommentVNode("", true),
				_ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
						onClick: handleRegenerate
					})]),
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
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.message.executionId), 1)]),
						_: 1
					}, 8, ["to"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "info",
						type: "tertiary",
						size: "medium",
						text: ""
					})]),
					_: 1
				})) : createCommentVNode("", true),
				_ctx.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createVNode(unref(N8nIconButton_default), {
						icon: "chevron-left",
						type: "tertiary",
						size: "medium",
						text: "",
						disabled: currentAlternativeIndex.value === 0,
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("switchAlternative", _ctx.alternatives[currentAlternativeIndex.value - 1]))
					}, null, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(`${currentAlternativeIndex.value + 1}/${_ctx.alternatives.length}`), 1)]),
						_: 1
					}),
					createVNode(unref(N8nIconButton_default), {
						icon: "chevron-right",
						type: "tertiary",
						size: "medium",
						text: "",
						disabled: currentAlternativeIndex.value === _ctx.alternatives.length - 1,
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("switchAlternative", _ctx.alternatives[currentAlternativeIndex.value + 1]))
					}, null, 8, ["disabled"])
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_1sizk_123" };
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-5c4db6e8"]]);
var _hoisted_1$1 = ["data-message-id"];
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 1 };
var ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessage",
	props: {
		message: {},
		compact: { type: Boolean },
		isEditing: { type: Boolean },
		isStreaming: { type: Boolean },
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
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const chatStore = useChatStore();
		const rootStore = useRootStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const i18n = useI18n();
		const styles = useCssModule();
		const editedText = ref("");
		const hoveredCodeBlockActions = ref(null);
		const textareaRef = useTemplateRef("textarea");
		const markdown = useChatHubMarkdownOptions(styles.codeBlockActions, styles.tableContainer);
		const speech = useSpeechSynthesis(computed(() => __props.message.content), {
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
		const hideMessage = computed(() => {
			return __props.message.status === "success" && __props.message.content === "";
		});
		const hoveredCodeBlockContent = computed(() => {
			const idx = hoveredCodeBlockActions.value?.getAttribute("data-markdown-token-idx");
			return idx ? markdown.codeBlockContents.value?.get(idx) : void 0;
		});
		function handleEdit() {
			emit("startEdit");
		}
		function handleCancelEdit() {
			emit("cancelEdit");
		}
		function handleConfirmEdit() {
			if (!editedText.value.trim()) return;
			emit("update", {
				...__props.message,
				content: editedText.value
			});
		}
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
		function handleMouseMove(e) {
			const container = e.target instanceof HTMLElement || e.target instanceof SVGElement ? e.target.closest("pre")?.querySelector(`.${styles.codeBlockActions}`) : null;
			hoveredCodeBlockActions.value = container instanceof HTMLElement ? container : null;
		}
		function handleMouseLeave() {
			hoveredCodeBlockActions.value = null;
		}
		watch(() => __props.isEditing, (editing) => {
			editedText.value = editing ? __props.message.content : "";
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
					_ctx.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant,
					{ [_ctx.$style.compact]: _ctx.compact }
				]),
				style: normalizeStyle({
					minHeight: _ctx.minHeight ? `${_ctx.minHeight}px` : void 0,
					"--container--width": `${_ctx.containerWidth}px`
				}),
				"data-message-id": _ctx.message.id
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [_ctx.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "user",
					width: "20",
					height: "20"
				})) : (openBlock(), createBlock(ChatAgentAvatar_default, {
					key: 1,
					agent: agent.value,
					size: "md",
					tooltip: ""
				}, null, 8, ["agent"]))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [_ctx.isEditing ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.editContainer)
				}, [
					attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.attachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (attachment, index) => {
						return openBlock(), createBlock(ChatFile_default, {
							key: index,
							file: attachment.file,
							"is-removable": false,
							href: attachment.downloadUrl
						}, null, 8, ["file", "href"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nInput_default), {
						ref: "textarea",
						modelValue: editedText.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedText.value = $event),
						type: "textarea",
						autosize: {
							minRows: 3,
							maxRows: 20
						},
						class: normalizeClass(_ctx.$style.textarea),
						onKeydown: handleKeydownTextarea
					}, null, 8, ["modelValue", "class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.editActions) }, [createVNode(unref(N8nButton_default), {
						type: "secondary",
						size: "small",
						onClick: handleCancelEdit
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.cancel")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						type: "primary",
						size: "small",
						disabled: !editedText.value.trim(),
						onClick: handleConfirmEdit
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.send")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				], 2)) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.errorMessage]: _ctx.message.status === "error" }]),
					onMousemove: handleMouseMove,
					onMouseleave: handleMouseLeave
				}, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.attachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments$2.value, (attachment, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file: attachment.file,
						"is-removable": false,
						href: attachment.downloadUrl
					}, null, 8, ["file", "href"]);
				}), 128))], 2)) : createCommentVNode("", true), _ctx.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.message.content), 1)) : (openBlock(), createBlock(unref(VueMarkdown_default), {
					key: unref(markdown).forceReRenderKey.value,
					class: normalizeClass([_ctx.$style.chatMessageMarkdown, "chat-message-markdown"]),
					source: _ctx.message.status === "error" && !_ctx.message.content ? unref(i18n).baseText("chatHub.message.error.unknown") : _ctx.message.content,
					options: unref(markdown).options,
					plugins: unref(markdown).plugins.value
				}, null, 8, [
					"class",
					"source",
					"options",
					"plugins"
				]))], 34), _ctx.isStreaming ? (openBlock(), createBlock(ChatTypingIndicator_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.typingIndicator)
				}, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
					key: 1,
					"is-speech-synthesis-available": unref(speech).isSupported.value,
					"is-speaking": unref(speech).isPlaying.value,
					class: normalizeClass(_ctx.$style.actions),
					message: _ctx.message,
					alternatives: _ctx.message.alternatives,
					onEdit: handleEdit,
					onRegenerate: handleRegenerate,
					onReadAloud: handleReadAloud,
					onSwitchAlternative: handleSwitchAlternative
				}, null, 8, [
					"is-speech-synthesis-available",
					"is-speaking",
					"class",
					"message",
					"alternatives"
				]))]))], 2),
				hoveredCodeBlockActions.value && hoveredCodeBlockContent.value ? (openBlock(), createBlock(Teleport, {
					key: 0,
					to: hoveredCodeBlockActions.value
				}, [createVNode(CopyButton_default, { content: hoveredCodeBlockContent.value }, null, 8, ["content"])], 8, ["to"])) : createCommentVNode("", true)
			], 14, _hoisted_1$1)) : createCommentVNode("", true);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_h7mzl_123",
	avatar: "_avatar_h7mzl_128",
	compact: "_compact_h7mzl_141",
	content: "_content_h7mzl_146",
	attachments: "_attachments_h7mzl_151",
	chatMessage: "_chatMessage_h7mzl_156",
	user: "_user_h7mzl_170",
	errorMessage: "_errorMessage_h7mzl_177",
	chatMessageMarkdown: "_chatMessageMarkdown_h7mzl_185",
	codeBlockActions: "_codeBlockActions_h7mzl_250",
	tableContainer: "_tableContainer_h7mzl_259",
	actions: "_actions_h7mzl_288",
	editContainer: "_editContainer_h7mzl_292",
	textarea: "_textarea_h7mzl_307",
	editActions: "_editActions_h7mzl_320",
	typingIndicator: "_typingIndicator_h7mzl_326"
};
var ChatMessage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["accept"];
var ChatPrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPrompt",
	props: {
		isResponding: { type: Boolean },
		isNewSession: { type: Boolean },
		isToolsSelectable: { type: Boolean },
		issue: {},
		selectedModel: {},
		selectedTools: {}
	},
	emits: [
		"submit",
		"stop",
		"selectModel",
		"selectTools",
		"setCredentials",
		"editAgent"
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
				message$1.value = "";
				committedSpokenMessage.value = "";
				attachments$2.value = [];
			}
		}
		function handleKeydownTextarea(e) {
			const trimmed = message$1.value.trim();
			speechInput.stop();
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
				e.preventDefault();
				speechInput.stop();
				emit("submit", trimmed, attachments$2.value);
				message$1.value = "";
				committedSpokenMessage.value = "";
				attachments$2.value = [];
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
				_ctx.issue === "missingAgent" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: _ctx.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new" : "chatHub.chat.prompt.callout.selectModel.existing",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: "",
							onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
						}, toDisplayString(unref(i18n).baseText(_ctx.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new.link" : "chatHub.chat.prompt.callout.selectModel.existing.link")), 1)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				}, 8, ["class"])) : _ctx.issue === "missingCredentials" && llmProvider.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: _ctx.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new" : "chatHub.chat.prompt.callout.setCredentials.existing",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: "",
							onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("setCredentials", llmProvider.value), ["prevent"]))
						}, toDisplayString(unref(i18n).baseText(_ctx.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new.link" : "chatHub.chat.prompt.callout.setCredentials.existing.link")), 1)]),
						provider: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[llmProvider.value]), 1)]),
						_: 1
					}, 8, ["keypath"])]),
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
					class: normalizeClass(_ctx.$style.inputWrapper),
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
							"is-removable": true,
							onRemove: removeAttachment
						}, null, 8, ["file"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createVNode(unref(N8nInput_default), {
						ref_key: "inputRef",
						ref: inputRef,
						modelValue: message$1.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => message$1.value = $event),
						type: "textarea",
						placeholder: placeholder.value,
						autocomplete: "off",
						autosize: {
							minRows: 1,
							maxRows: 6
						},
						autofocus: "",
						disabled: !!_ctx.issue,
						onKeydown: handleKeydownTextarea
					}, null, 8, [
						"modelValue",
						"placeholder",
						"disabled"
					]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tools) }, [createVNode(ToolsSelector_default, {
						class: normalizeClass(_ctx.$style.toolsButton),
						selected: _ctx.selectedTools ?? [],
						disabled: !!_ctx.issue || _ctx.isResponding || !_ctx.isToolsSelectable,
						"disabled-tooltip": _ctx.isToolsSelectable ? void 0 : unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip"),
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
							disabled: canUploadFiles.value && !_ctx.issue && !_ctx.isResponding,
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								"native-type": "button",
								type: "secondary",
								disabled: !!_ctx.issue || _ctx.isResponding || !canUploadFiles.value,
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
							disabled: !!_ctx.issue || _ctx.isResponding,
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
						!_ctx.isResponding ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 1,
							"native-type": "submit",
							disabled: !!_ctx.issue || !message$1.value.trim(),
							title: unref(i18n).baseText("chatHub.chat.prompt.button.send"),
							icon: "arrow-up",
							"icon-size": "large",
							onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
						}, null, 8, ["disabled", "title"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
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
	prompt: "_prompt_b2qw2_123",
	inputWrap: "_inputWrap_b2qw2_128",
	callout: "_callout_b2qw2_136",
	fileInput: "_fileInput_b2qw2_153",
	inputWrapper: "_inputWrapper_b2qw2_157",
	footer: "_footer_b2qw2_181",
	tools: "_tools_b2qw2_188",
	toolsButton: "_toolsButton_b2qw2_192",
	iconStack: "_iconStack_b2qw2_197",
	icon: "_icon_b2qw2_197",
	iconOverlap: "_iconOverlap_b2qw2_210",
	iconFallback: "_iconFallback_b2qw2_214",
	actions: "_actions_b2qw2_220",
	attachments: "_attachments_b2qw2_229",
	recording: "_recording_b2qw2_235",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_b2qw2_1"
};
var ChatPrompt_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatPrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPrompt_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatStarter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatStarter",
	props: { isMobileDevice: { type: Boolean } },
	setup(__props) {
		const userStore = useUsersStore();
		const i18n = useI18n();
		const greetings = computed(() => {
			const name = userStore.currentUser?.firstName ?? userStore.currentUser?.fullName ?? i18n.baseText("chatHub.chat.greeting.fallback");
			return i18n.baseText("chatHub.chat.greeting", { interpolate: { name } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.starter, { [_ctx.$style.isMobileDevice]: _ctx.isMobileDevice }]) }, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				bold: "",
				size: "xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(greetings.value), 1)]),
				_: 1
			})], 2);
		};
	}
});
var ChatStarter_vue_vue_type_style_index_0_lang_module_default = {
	starter: "_starter_1julh_123",
	card: "_card_1julh_131",
	cardIcon: "_cardIcon_1julh_149",
	cardText: "_cardText_1julh_155"
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
		const scrollableSize = useElementSize(scrollableRef);
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isResponding = computed(() => chatStore.isResponding(sessionId.value));
		const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.byId[sessionId.value] : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const canSelectTools = computed(() => selectedModel.value?.model.provider === "custom-agent" || !!selectedModel.value?.metadata.capabilities.functionCalling);
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
		const customAgent = useCustomAgent(computed(() => selectedModel.value?.model.provider === "custom-agent" ? selectedModel.value.model.agentId : void 0));
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
		const issue = computed(() => {
			if (!chatStore.agentsReady) return null;
			if (!selectedModel.value) return "missingAgent";
			if (isMissingSelectedCredential.value) return "missingCredentials";
			return null;
		});
		const editingMessageId = ref();
		const didSubmitInCurrentSession = ref(false);
		const fileDrop = useFileDrop(computed(() => editingMessageId.value === void 0 && !!createMimeTypes(selectedModel.value?.metadata.inputModalities ?? []) && !isMissingSelectedCredential.value), onFilesDropped);
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
		async function onSubmit(message$1, attachments$2) {
			if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			didSubmitInCurrentSession.value = true;
			editingMessageId.value = void 0;
			await chatStore.sendMessage(sessionId.value, message$1, selectedModel.value, credentialsForSelectedProvider.value, canSelectTools.value ? selectedTools.value : [], attachments$2);
			inputRef.value?.setText("");
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
		function handleEditMessage(message$1) {
			if (isResponding.value || !["human", "ai"].includes(message$1.type) || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			const messageToEdit = message$1.revisionOfMessageId ?? message$1.id;
			chatStore.editMessage(sessionId.value, messageToEdit, message$1.content, selectedModel.value, credentialsForSelectedProvider.value);
			editingMessageId.value = void 0;
		}
		function handleRegenerateMessage(message$1) {
			if (isResponding.value || message$1.type !== "ai" || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			const messageToRetry = message$1.id;
			chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value, credentialsForSelectedProvider.value);
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
			inputRef.value?.addAttachments(files);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, {
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
					createVNode(ChatConversationHeader_default, {
						ref_key: "headerRef",
						ref: headerRef,
						"selected-model": selectedModel.value,
						credentials: unref(credentialsByProvider),
						"ready-to-show-model-selector": isNewSession$1.value || !!currentConversation.value,
						"is-new-session": isNewSession$1.value,
						onSelectModel: handleSelectModel,
						onEditCustomAgent: handleEditAgent,
						onCreateCustomAgent: openNewAgentCreator,
						onSelectCredential: unref(selectCredential),
						onOpenWorkflow: handleOpenWorkflow
					}, null, 8, [
						"selected-model",
						"credentials",
						"ready-to-show-model-selector",
						"is-new-session",
						"onSelectCredential"
					]),
					createVNode(unref(N8nScrollArea_default), {
						type: "scroll",
						"enable-vertical-scroll": true,
						"enable-horizontal-scroll": false,
						"as-child": "",
						class: normalizeClass(_ctx.$style.scrollArea)
					}, {
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.scrollable),
							ref: "scrollable"
						}, [isNewSession$1.value ? (openBlock(), createBlock(ChatStarter_default, {
							key: 0,
							class: normalizeClass(_ctx.$style.starter),
							"is-mobile-device": unref(isMobileDevice$1)
						}, null, 8, ["class", "is-mobile-device"])) : (openBlock(), createElementBlock("div", {
							key: 1,
							role: "log",
							"aria-live": "polite",
							class: normalizeClass(_ctx.$style.messageList)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(chatMessages.value, (message$1, index) => {
							return openBlock(), createBlock(ChatMessage_default, {
								key: message$1.id,
								message: message$1,
								compact: unref(isMobileDevice$1),
								"is-editing": editingMessageId.value === message$1.id,
								"is-streaming": message$1.status === "running",
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
								"is-streaming",
								"cached-agent-display-name",
								"cached-agent-icon",
								"min-height",
								"container-width",
								"onStartEdit"
							]);
						}), 128))], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.promptContainer) }, [!unref(arrivedState).bottom && !isNewSession$1.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
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
							"is-responding": isResponding.value,
							"is-tools-selectable": canSelectTools.value,
							"is-missing-credentials": isMissingSelectedCredential.value,
							"is-new-session": isNewSession$1.value,
							issue: issue.value,
							onSubmit,
							onStop,
							onSelectModel: handleConfigureModel,
							onSelectTools: handleUpdateTools,
							onSetCredentials: handleConfigureCredentials,
							onEditAgent: handleEditAgent
						}, null, 8, [
							"class",
							"selected-model",
							"selected-tools",
							"is-responding",
							"is-tools-selectable",
							"is-missing-credentials",
							"is-new-session",
							"issue"
						])], 2)], 2)]),
						_: 1
					}, 8, ["class"])
				]),
				_: 1
			}, 8, [
				"class",
				"onDragenter",
				"onDragleave",
				"onDragover",
				"onDrop",
				"onPaste"
			]);
		};
	}
});
var ChatView_vue_vue_type_style_index_0_lang_module_default = {
	chatLayout: "_chatLayout_1sy6c_123",
	scrollArea: "_scrollArea_1sy6c_127",
	scrollable: "_scrollable_1sy6c_132",
	isNewSession: "_isNewSession_1sy6c_141",
	header: "_header_1sy6c_145",
	isMobileDevice: "_isMobileDevice_1sy6c_151",
	starter: "_starter_1sy6c_151",
	messageList: "_messageList_1sy6c_156",
	promptContainer: "_promptContainer_1sy6c_172",
	isExistingSession: "_isExistingSession_1sy6c_176",
	prompt: "_prompt_1sy6c_172",
	scrollToBottomButton: "_scrollToBottomButton_1sy6c_194",
	isDraggingFile: "_isDraggingFile_1sy6c_202",
	dropOverlay: "_dropOverlay_1sy6c_206"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
