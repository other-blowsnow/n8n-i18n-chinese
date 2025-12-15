const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-C8YSpQK8.js","assets/core-B834MECE.js","assets/chunk-6z4oVpB-.js","assets/languageModules-GJLbrGx7.js","assets/xml-BP5i5VLm.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { I as useSpeechRecognition, L as useSpeechSynthesis, M as useMediaQuery, P as useScroll, _t as I18nT, gt as useI18n, j as useLocalStorage } from "./_MapCache-CyBAZEDf.js";
import { Hn as N8nButton_default, Vn as N8nText_default, Wn as N8nIcon_default, ht as require_markdown_it_link_attributes, i as N8nScrollArea_default, it as useDeviceSupport, mt as N8nTooltip_default, ut as N8nLink_default, xt as N8nIconButton_default, yt as N8nInput_default, zn as N8nHeading_default } from "./src-CKNGGC1H.js";
import "./en-b3uD8cvU.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-CZFeThpb.js";
import "./icon-521DvC2D.js";
import "./empty-C2SrrehM.js";
import { Fi as useUIStore, Ro as v4_default, Tn as useDocumentTitle, nr as useUsersStore } from "./useTelemetry-DfTC69TL.js";
import { t as useToast } from "./useToast-D5n7Pl1L.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import { Po as VIEWS, Qr as PROVIDER_CREDENTIAL_TYPE_MAP, _s as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, hi as INodesSchema, vs as LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS } from "./constants-DrLxPWeP.js";
import "./merge-CKju1Aqe.js";
import { r as useRootStore } from "./_baseOrderBy-BFxQ1EZq.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-BiLybJE6.js";
import "./useExternalHooks-CSQJVpG7.js";
import "./useStyles-DhM0cpS7.js";
import "./retry-CalJieID.js";
import "./nodeIcon-B7K4ClOd.js";
import { t as useClipboard } from "./useClipboard-D5Yg8Qkg.js";
import "./NodeIcon-DkIAxVaH.js";
import "./CredentialIcon-DV5y8eJm.js";
import { t as VueMarkdown_default } from "./VueMarkdown-D5vsYey_.js";
import { f as providerDisplayNames, l as CHAT_VIEW, r as CHAT_CONVERSATION_VIEW, t as AGENT_EDITOR_MODAL_KEY, u as MOBILE_MEDIA_QUERY } from "./constants-D2fYduVh.js";
import { c as isLlmProvider, f as unflattenModel, l as isLlmProviderModel, p as buildChatAttachmentUrl, r as findOneFromModelsResponse, t as useChatStore } from "./chat.store-ow_A6EGh.js";
import "./fileUtils-BIVczUdz.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-Dj1oP6RM.js";
import { i as chatHubConversationModelWithCachedDisplayNameSchema, n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-T0GehR4G.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-BcArS2-a.js";
import { n as ModelSelector_default, t as ToolsSelector_default } from "./ToolsSelector-DSx9EvjT.js";
import { t as ChatFile_default } from "./ChatFile-BbL40HHy.js";
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
		const sidebar = useChatHubSidebarState();
		const router = useRouter();
		const modelSelectorRef = useTemplateRef("modelSelectorRef");
		const i18n = useI18n();
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
						onClick: onNewChat
					}, null, 8, ["class", "aria-label"])) : createCommentVNode("", true),
					_ctx.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
						key: 1,
						ref_key: "modelSelectorRef",
						ref: modelSelectorRef,
						"selected-agent": _ctx.selectedModel,
						credentials: _ctx.credentials,
						text: "",
						onChange: onModelChange,
						onCreateCustomAgent: _cache[0] || (_cache[0] = ($event) => emit("createCustomAgent")),
						onSelectCredential: _cache[1] || (_cache[1] = (provider, credentialId) => emit("selectCredential", provider, credentialId))
					}, null, 8, ["selected-agent", "credentials"])) : createCommentVNode("", true)
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
				_ctx.selectedModel?.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.openWorkflow"),
					onClick: _cache[3] || (_cache[3] = ($event) => emit("openWorkflow", _ctx.selectedModel.model.workflowId))
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
var hljsInstance;
var asyncImport = { status: "uninitialized" };
function useChatHubMarkdownOptions() {
	const forceReRenderKey = ref(0);
	const markdownOptions = { highlight(str, lang) {
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
				promise: Promise.all([__vitePreload(() => import("./es-C8YSpQK8.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-GJLbrGx7.js"), __vite__mapDeps([3,4]))])
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
		markdownOptions,
		forceReRenderKey
	};
}
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		justCopied: { type: Boolean },
		message: {},
		alternatives: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean }
	},
	emits: [
		"copy",
		"edit",
		"regenerate",
		"switchAlternative",
		"readAloud"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const emit = __emit;
		const copyTooltip = computed(() => {
			return __props.justCopied ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
		});
		const currentAlternativeIndex = computed(() => {
			return __props.alternatives.findIndex((id) => id === __props.message.id);
		});
		const executionUrl = computed(() => {
			if (__props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: __props.message.workflowId,
					executionId: __props.message.executionId
				}
			}).href;
		});
		function handleCopy() {
			emit("copy");
		}
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
				createVNode(unref(N8nTooltip_default), {
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(copyTooltip.value), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: _ctx.justCopied ? "check" : "copy",
						type: "tertiary",
						size: "medium",
						text: "",
						onClick: handleCopy
					}, null, 8, ["icon"])]),
					_: 1
				}),
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
				executionUrl.value && _ctx.message.executionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-d8f0ff6a"]]);
var _hoisted_1 = ["data-message-id"];
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
		minHeight: {}
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
		const clipboard = useClipboard();
		const chatStore = useChatStore();
		const rootStore = useRootStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const i18n = useI18n();
		const editedText = ref("");
		const textareaRef = useTemplateRef("textarea");
		const justCopied = ref(false);
		const { markdownOptions, forceReRenderKey } = useChatHubMarkdownOptions();
		const speech = useSpeechSynthesis(computed(() => __props.message.content), {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const agent = computed(() => {
			const model = unflattenModel(__props.message);
			if (!model) return null;
			return chatStore.getAgent(model, __props.cachedAgentDisplayName ?? void 0);
		});
		const attachments$2 = computed(() => __props.message.attachments.map(({ fileName, mimeType }, index) => ({
			file: new File([], fileName ?? "file", { type: mimeType }),
			downloadUrl: buildChatAttachmentUrl(rootStore.restApiContext, __props.message.sessionId, __props.message.id, index)
		})));
		async function handleCopy() {
			const text = __props.message.content;
			await clipboard.copy(text);
			justCopied.value = true;
			setTimeout(() => {
				justCopied.value = false;
			}, 1e3);
		}
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
		const linksNewTabPlugin = (vueMarkdownItInstance) => {
			vueMarkdownItInstance.use(import_markdown_it_link_attributes.default, { attrs: {
				target: "_blank",
				rel: "noopener"
			} });
		};
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
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.message,
					_ctx.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant,
					{ [_ctx.$style.compact]: _ctx.compact }
				]),
				style: normalizeStyle(_ctx.minHeight ? { minHeight: `${_ctx.minHeight}px` } : void 0),
				"data-message-id": _ctx.message.id
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [_ctx.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "user",
				width: "20",
				height: "20"
			})) : agent.value ? (openBlock(), createBlock(ChatAgentAvatar_default, {
				key: 1,
				agent: agent.value,
				size: "md",
				tooltip: ""
			}, null, 8, ["agent"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "sparkles",
				width: "20",
				height: "20"
			}))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [_ctx.isEditing ? (openBlock(), createElementBlock("div", {
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
			], 2)) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.errorMessage]: _ctx.message.status === "error" }]) }, [attachments$2.value.length > 0 ? (openBlock(), createElementBlock("div", {
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
				key: unref(forceReRenderKey),
				class: normalizeClass([_ctx.$style.chatMessageMarkdown, "chat-message-markdown"]),
				source: _ctx.message.status === "error" && !_ctx.message.content ? unref(i18n).baseText("chatHub.message.error.unknown") : _ctx.message.content,
				options: unref(markdownOptions),
				plugins: [linksNewTabPlugin]
			}, null, 8, [
				"class",
				"source",
				"options",
				"plugins"
			]))], 2), _ctx.isStreaming ? (openBlock(), createBlock(ChatTypingIndicator_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.typingIndicator)
			}, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
				key: 1,
				"just-copied": justCopied.value,
				"is-speech-synthesis-available": unref(speech).isSupported.value,
				"is-speaking": unref(speech).isPlaying.value,
				class: normalizeClass(_ctx.$style.actions),
				message: _ctx.message,
				alternatives: _ctx.message.alternatives,
				onCopy: handleCopy,
				onEdit: handleEdit,
				onRegenerate: handleRegenerate,
				onReadAloud: handleReadAloud,
				onSwitchAlternative: handleSwitchAlternative
			}, null, 8, [
				"just-copied",
				"is-speech-synthesis-available",
				"is-speaking",
				"class",
				"message",
				"alternatives"
			]))]))], 2)], 14, _hoisted_1);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_ayk83_123",
	avatar: "_avatar_ayk83_128",
	compact: "_compact_ayk83_141",
	content: "_content_ayk83_146",
	attachments: "_attachments_ayk83_151",
	chatMessage: "_chatMessage_ayk83_156",
	user: "_user_ayk83_170",
	errorMessage: "_errorMessage_ayk83_177",
	chatMessageMarkdown: "_chatMessageMarkdown_ayk83_185",
	actions: "_actions_ayk83_266",
	editContainer: "_editContainer_ayk83_270",
	textarea: "_textarea_ayk83_285",
	editActions: "_editActions_ayk83_298",
	typingIndicator: "_typingIndicator_ayk83_304"
};
var ChatMessage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
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
		"setCredentials"
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
		function onSelectTools(tools$1) {
			emit("selectTools", tools$1);
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
					multiple: "",
					onChange: handleFileSelect
				}, null, 34),
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
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [_ctx.isToolsSelectable ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.tools)
					}, [createVNode(ToolsSelector_default, {
						class: normalizeClass(_ctx.$style.toolsButton),
						selected: _ctx.selectedTools ?? [],
						disabled: !!_ctx.issue || _ctx.isResponding,
						"transparent-bg": "",
						onSelect: onSelectTools
					}, null, 8, [
						"class",
						"selected",
						"disabled"
					])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
						_ctx.selectedModel?.allowFileUploads ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							"native-type": "button",
							type: "secondary",
							title: unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
							disabled: !!_ctx.issue || _ctx.isResponding,
							icon: "paperclip",
							"icon-size": "large",
							text: "",
							onClick: withModifiers(onAttach, ["stop"])
						}, null, 8, ["title", "disabled"])) : createCommentVNode("", true),
						unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 1,
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
							key: 2,
							"native-type": "submit",
							disabled: !!_ctx.issue || !message$1.value.trim(),
							title: unref(i18n).baseText("chatHub.chat.prompt.button.send"),
							icon: "arrow-up",
							"icon-size": "large",
							onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
						}, null, 8, ["disabled", "title"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 3,
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
		const toast = useToast();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const documentTitle = useDocumentTitle();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const headerRef = useTemplateRef("headerRef");
		const inputRef = useTemplateRef("inputRef");
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isResponding = computed(() => chatStore.isResponding(sessionId.value));
		const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
		const scrollableRef = useTemplateRef("scrollable");
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.byId[sessionId.value] : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const canSelectTools = computed(() => isLlmProvider(selectedModel.value?.model.provider));
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
		const defaultModelName = computed(() => defaultModel.value ? chatStore.getAgent(defaultModel.value).name : void 0);
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
		const toolsSelection = ref(null);
		const shouldSkipNextScrollTrigger = ref(false);
		const selectedTools = computed(() => {
			if (currentConversation.value?.tools) return currentConversation.value.tools;
			if (toolsSelection.value !== null) return toolsSelection.value;
			return defaultTools.value ?? [];
		});
		const modelFromQuery = computed(() => {
			const agentId = route.query.agentId;
			const workflowId = route.query.workflowId;
			if (!isNewSession$1.value) return null;
			if (typeof agentId === "string") return chatStore.getAgent({
				provider: "custom-agent",
				agentId
			});
			if (typeof workflowId === "string") return chatStore.getAgent({
				provider: "n8n",
				workflowId
			});
			return null;
		});
		const selectedModel = computed(() => {
			if (!isNewSession$1.value) {
				const model = currentConversation.value ? unflattenModel(currentConversation.value) : null;
				if (!model) return null;
				return chatStore.getAgent(model, (currentConversation.value?.agentName || currentConversation.value?.model) ?? void 0);
			}
			if (modelFromQuery.value) return modelFromQuery.value;
			if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.getAgent(chatStore.streaming.model, chatStore.streaming.agentName);
			if (!defaultModel.value) return null;
			return chatStore.getAgent(defaultModel.value, defaultModel.value.cachedDisplayName);
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
		const fileDrop = useFileDrop(computed(() => editingMessageId.value === void 0 && !!selectedModel.value?.allowFileUploads && !isMissingSelectedCredential.value), onFilesDropped);
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
			if (!models || !!selectedModel.value || !isNewSession$1.value) return;
			const model = findOneFromModelsResponse(models) ?? null;
			if (model) handleSelectAgent(model);
		}, { immediate: true });
		watch([sessionId, isNewSession$1], async ([id, isNew]) => {
			didSubmitInCurrentSession.value = false;
			if (!isNew && !chatStore.getConversation(id)) try {
				await chatStore.fetchMessages(id);
			} catch (error) {
				toast.showError(error, "Error fetching a conversation");
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
		watch(defaultModelName, (name) => {
			if (defaultModel.value && name) defaultModel.value = {
				...defaultModel.value,
				cachedDisplayName: name
			};
		}, { immediate: true });
		function onSubmit(message$1, attachments$2) {
			if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			didSubmitInCurrentSession.value = true;
			editingMessageId.value = void 0;
			chatStore.sendMessage(sessionId.value, message$1, selectedModel.value.model, credentialsForSelectedProvider.value, canSelectTools.value ? selectedTools.value : [], attachments$2, selectedModel.value.name);
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
			chatStore.editMessage(sessionId.value, messageToEdit, message$1.content, selectedModel.value.model, credentialsForSelectedProvider.value);
			editingMessageId.value = void 0;
		}
		function handleRegenerateMessage(message$1) {
			if (isResponding.value || message$1.type !== "ai" || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			const messageToRetry = message$1.id;
			chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value.model, credentialsForSelectedProvider.value);
		}
		async function handleSelectModel(selection, displayName) {
			const agentName = displayName ?? chatStore.getAgent(selection)?.name ?? "";
			if (currentConversation.value) try {
				await chatStore.updateSessionModel(sessionId.value, selection, agentName);
			} catch (error) {
				toast.showError(error, "Could not update selected model");
			}
			else defaultModel.value = {
				...selection,
				cachedDisplayName: agentName
			};
		}
		async function handleSelectAgent(selection) {
			await handleSelectModel(selection.model, selection.name);
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
			toolsSelection.value = newTools;
			defaultTools.value = newTools;
			if (currentConversation.value) try {
				await chatStore.updateToolsInSession(sessionId.value, newTools);
			} catch (error) {
				toast.showError(error, "Could not update selected tools");
			}
		}
		function handleEditAgent(agentId) {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					agentId,
					credentials: credentialsByProvider,
					onCreateCustomAgent: handleSelectModel
				}
			});
		}
		function openNewAgentCreator() {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					credentials: credentialsByProvider,
					onCreateCustomAgent: handleSelectModel
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
						onSelectModel: handleSelectAgent,
						onEditCustomAgent: handleEditAgent,
						onCreateCustomAgent: openNewAgentCreator,
						onSelectCredential: unref(selectCredential),
						onOpenWorkflow: handleOpenWorkflow
					}, null, 8, [
						"selected-model",
						"credentials",
						"ready-to-show-model-selector",
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
								"min-height": didSubmitInCurrentSession.value && message$1.type === "ai" && index === chatMessages.value.length - 1 && scrollContainerRef.value ? scrollContainerRef.value.offsetHeight - 30 - 200 : void 0,
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
								"min-height",
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
							onSetCredentials: handleConfigureCredentials
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
