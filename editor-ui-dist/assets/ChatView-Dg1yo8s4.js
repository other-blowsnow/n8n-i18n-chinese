const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-BkUFJVtD.js","assets/core-CP5FY4aX.js","assets/chunk-6z4oVpB-.js","assets/languageModules-Bl7v6Q9_.js","assets/xml-D4a2k3Fn.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, q as onBeforeMount, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { I as useSpeechRecognition, L as useSpeechSynthesis, M as useMediaQuery, P as useScroll, gt as useI18n, j as useLocalStorage } from "./_MapCache-DxwXn8uM.js";
import { Bn as N8nIcon_default, Et as N8nIconButton_default, Fn as N8nHeading_default, Ln as N8nText_default, Rn as N8nButton_default, bt as require_markdown_it_link_attributes, ht as N8nLink_default, i as N8nScrollArea_default, wt as N8nInput_default, yt as N8nTooltip_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./overlay-DUEudB48.js";
import "./empty-BuGRxzl4.js";
import "./dialog-DcTfFSsP.js";
import { Io as v4_default, Ni as useUIStore, Tn as useDocumentTitle, er as useUsersStore } from "./useTelemetry-Ct6_U3iA.js";
import { t as useToast } from "./useToast-Da575Qgf.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Fr as INodesSchema, Oo as VIEWS, cr as PROVIDER_CREDENTIAL_TYPE_MAP, ds as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, fs as LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS, lr as chatHubConversationModelSchema } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./useExternalHooks-B9_prI2u.js";
import "./useStyles-CBQs-v7u.js";
import "./retry-BJSZoz93.js";
import "./nodeIcon-CgagKz42.js";
import { t as useClipboard } from "./useClipboard-CT4iVqI5.js";
import "./NodeIcon-mnGJPl1p.js";
import "./Modal-0-JBp-gL.js";
import "./CredentialIcon-Dcqn4FLw.js";
import { t as VueMarkdown_default } from "./VueMarkdown-BB8En43O.js";
import { a as CHAT_VIEW, c as providerDisplayNames, o as MOBILE_MEDIA_QUERY, r as CHAT_CONVERSATION_VIEW, t as AGENT_EDITOR_MODAL_KEY } from "./constants-yvMG61zm.js";
import { d as unflattenModel, i as findOneFromModelsResponse, n as useChatStore, t as ChatAgentAvatar_default } from "./ChatAgentAvatar-CO02V0mM.js";
import { n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-BJ7W0Y10.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-C_zx3q36.js";
import { n as ModelSelector_default, t as ToolsSelector_default } from "./ToolsSelector-hXlMCKcu.js";
import { t as useAgent } from "./useAgent--aXuLWNX.js";
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
		__expose({ openModelSelector: () => modelSelectorRef.value?.open() });
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
						onClick: onNewChat
					}, null, 8, ["class"])) : createCommentVNode("", true),
					_ctx.readyToShowModelSelector ? (openBlock(), createBlock(ModelSelector_default, {
						key: 1,
						ref_key: "modelSelectorRef",
						ref: modelSelectorRef,
						"selected-agent": _ctx.selectedModel,
						credentials: _ctx.credentials,
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
					label: "Edit Agent",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("editCustomAgent", _ctx.selectedModel.model.agentId))
				}, null, 8, ["class"])) : createCommentVNode("", true),
				_ctx.selectedModel?.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: "Open Workflow",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("openWorkflow", _ctx.selectedModel.model.workflowId))
				}, null, 8, ["class"])) : createCommentVNode("", true)
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
				promise: Promise.all([__vitePreload(() => import("./es-BkUFJVtD.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-Bl7v6Q9_.js"), __vite__mapDeps([3,4]))])
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
					content: withCtx(() => [createTextVNode(toDisplayString(_ctx.isSpeaking ? "Stop reading" : "Read aloud"), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: _ctx.isSpeaking ? "volume-x" : "volume-2",
						type: "tertiary",
						size: "medium",
						text: "",
						onClick: handleReadAloud
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true),
				createVNode(unref(N8nTooltip_default), {
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("Edit")])),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "tertiary",
						size: "medium",
						text: "",
						onClick: handleEdit
					})]),
					_: 1
				}),
				_ctx.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("Regenerate")])),
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
					key: 2,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [_cache[4] || (_cache[4] = createTextVNode(" Execution ID: ")), createVNode(unref(N8nLink_default), {
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
				_ctx.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
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
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-1a4933d7"]]);
var _hoisted_1 = ["data-message-id"];
var ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessage",
	props: {
		message: {},
		compact: { type: Boolean },
		isEditing: { type: Boolean },
		isStreaming: { type: Boolean },
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
		const editedText = ref("");
		const textareaRef = useTemplateRef("textarea");
		const justCopied = ref(false);
		const { markdownOptions, forceReRenderKey } = useChatHubMarkdownOptions();
		const speech = useSpeechSynthesis(computed(() => __props.message.content), {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const agent = useAgent(computed(() => unflattenModel(__props.message)));
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
		watch(() => __props.isEditing, async (editing) => {
			if (editing) {
				editedText.value = __props.message.content;
				await nextTick();
				textareaRef.value?.focus();
			} else editedText.value = "";
		}, { immediate: true });
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
			})) : unref(agent) ? (openBlock(), createBlock(ChatAgentAvatar_default, {
				key: 1,
				agent: unref(agent),
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
			}, [createVNode(unref(N8nInput_default), {
				ref: "textarea",
				modelValue: editedText.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedText.value = $event),
				type: "textarea",
				autosize: {
					minRows: 3,
					maxRows: 20
				},
				class: normalizeClass(_ctx.$style.textarea)
			}, null, 8, ["modelValue", "class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editActions) }, [createVNode(unref(N8nButton_default), {
				type: "secondary",
				size: "small",
				onClick: handleCancelEdit
			}, {
				default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode(" Cancel ")])),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				type: "primary",
				size: "small",
				disabled: !editedText.value.trim(),
				onClick: handleConfirmEdit
			}, {
				default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Send ")])),
				_: 1
			}, 8, ["disabled"])], 2)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatMessage) }, [(openBlock(), createBlock(unref(VueMarkdown_default), {
				key: unref(forceReRenderKey),
				class: normalizeClass([_ctx.$style.chatMessageMarkdown, "chat-message-markdown"]),
				source: _ctx.message.status === "error" && !_ctx.message.content ? "Error: Unknown error occurred" : _ctx.message.content,
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
			]))], 64))], 2)], 14, _hoisted_1);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_s7m4z_123",
	avatar: "_avatar_s7m4z_128",
	compact: "_compact_s7m4z_141",
	content: "_content_s7m4z_146",
	chatMessage: "_chatMessage_s7m4z_151",
	user: "_user_s7m4z_156",
	chatMessageMarkdown: "_chatMessageMarkdown_s7m4z_161",
	actions: "_actions_s7m4z_205",
	editContainer: "_editContainer_s7m4z_209",
	textarea: "_textarea_s7m4z_215",
	editActions: "_editActions_s7m4z_221",
	typingIndicator: "_typingIndicator_s7m4z_227"
};
var ChatMessage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatPrompt_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPrompt",
	props: {
		isResponding: { type: Boolean },
		isNewSession: { type: Boolean },
		isToolsSelectable: { type: Boolean },
		isMissingCredentials: { type: Boolean },
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
		const message$1 = ref("");
		const toast = useToast();
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		const placeholder = computed(() => __props.selectedModel ? `Message ${__props.selectedModel.name ?? "a model"}...` : "Select a model");
		const llmProvider = computed(() => __props.selectedModel?.model.provider === "n8n" || __props.selectedModel?.model.provider === "custom-agent" ? void 0 : __props.selectedModel?.model.provider);
		function onMic() {
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function onStop() {
			emit("stop");
		}
		function handleSubmitForm() {
			const trimmed = message$1.value.trim();
			if (trimmed) {
				speechInput.stop();
				emit("submit", trimmed);
			}
		}
		function handleKeydownTextarea(e) {
			const trimmed = message$1.value.trim();
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
				e.preventDefault();
				speechInput.stop();
				emit("submit", trimmed);
			}
		}
		watch(speechInput.result, (spoken) => {
			if (spoken) message$1.value = spoken;
		});
		watch(speechInput.error, (event) => {
			if (event?.error === "not-allowed") {
				toast.showError(/* @__PURE__ */ new Error("Microphone access denied"), "Please allow microphone access to use voice input");
				return;
			}
			if (event?.error === "no-speech") toast.showMessage({
				title: "No speech detected. Please try again",
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
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.prompt),
				onSubmit: withModifiers(handleSubmitForm, ["prevent"])
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWrap) }, [
				!_ctx.selectedModel ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [_ctx.isNewSession ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
						_cache[5] || (_cache[5] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
						}, "select a model"),
						_cache[6] || (_cache[6] = createTextVNode(" to start a conversation "))
					], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						_cache[7] || (_cache[7] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
						}, "reselect a model"),
						_cache[8] || (_cache[8] = createTextVNode(" to continue the conversation "))
					], 64))]),
					_: 1
				}, 8, ["class"])) : _ctx.isMissingCredentials && llmProvider.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [_ctx.isNewSession ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
						_cache[9] || (_cache[9] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("setCredentials", llmProvider.value), ["prevent"]))
						}, " set credentials "),
						createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to start a conversation ", 1)
					], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						_cache[10] || (_cache[10] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[3] || (_cache[3] = withModifiers(($event) => emit("setCredentials", llmProvider.value), ["prevent"]))
						}, " set credentials "),
						createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[llmProvider.value]) + " to continue the conversation ", 1)
					], 64))]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					modelValue: message$1.value,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => message$1.value = $event),
					class: normalizeClass(_ctx.$style.input),
					type: "textarea",
					placeholder: placeholder.value,
					autocomplete: "off",
					autosize: {
						minRows: 1,
						maxRows: 6
					},
					autofocus: "",
					disabled: _ctx.isMissingCredentials || !_ctx.selectedModel,
					onKeydown: handleKeydownTextarea
				}, null, 8, [
					"modelValue",
					"class",
					"placeholder",
					"disabled"
				]),
				_ctx.isToolsSelectable ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.tools)
				}, [createVNode(ToolsSelector_default, {
					selected: _ctx.selectedTools ?? [],
					disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || _ctx.isResponding,
					onSelect: onSelectTools
				}, null, 8, ["selected", "disabled"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					"native-type": "button",
					title: unref(speechInput).isListening.value ? "Stop recording" : "Voice input",
					type: "secondary",
					disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || _ctx.isResponding,
					icon: unref(speechInput).isListening.value ? "square" : "mic",
					class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
					"icon-size": "large",
					onClick: onMic
				}, null, 8, [
					"title",
					"disabled",
					"icon",
					"class"
				])) : createCommentVNode("", true), !_ctx.isResponding ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					"native-type": "submit",
					disabled: _ctx.isMissingCredentials || !_ctx.selectedModel || !message$1.value.trim(),
					title: "Send",
					icon: "arrow-up",
					"icon-size": "large"
				}, null, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 2,
					"native-type": "button",
					title: "Stop generating",
					icon: "square",
					"icon-size": "large",
					onClick: onStop
				}))], 2)
			], 2)], 34);
		};
	}
});
var ChatPrompt_vue_vue_type_style_index_0_lang_module_default = {
	prompt: "_prompt_17wu6_123",
	inputWrap: "_inputWrap_17wu6_128",
	callout: "_callout_17wu6_136",
	input: "_input_17wu6_128",
	tools: "_tools_17wu6_163",
	actions: "_actions_17wu6_174",
	recording: "_recording_17wu6_187",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_17wu6_1"
};
var ChatPrompt_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatPrompt_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPrompt_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatStarter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatStarter",
	props: { isMobileDevice: { type: Boolean } },
	setup(__props) {
		const userStore = useUsersStore();
		const greetings = computed(() => `Hello, ${userStore.currentUser?.firstName ?? userStore.currentUser?.fullName ?? "User"}!`);
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
		const headerRef = useTemplateRef("headerRef");
		const inputRef = useTemplateRef("inputRef");
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isResponding = computed(() => chatStore.isResponding(sessionId.value));
		const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
		const scrollableRef = useTemplateRef("scrollable");
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.find((session) => session.id === sessionId.value) : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const readyToShowMessages = computed(() => chatStore.agentsReady);
		const canSelectTools = computed(() => selectedModel.value?.model.provider !== "custom-agent" && selectedModel.value?.model.provider !== "n8n");
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
						return chatHubConversationModelSchema.parse(JSON.parse(value));
					} catch (error) {
						return null;
					}
				},
				write: (value) => JSON.stringify(value)
			}
		});
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
			}) ?? null;
			if (typeof workflowId === "string") return chatStore.getAgent({
				provider: "n8n",
				workflowId
			}) ?? null;
			return null;
		});
		const selectedModel = computed(() => {
			if (!chatStore.agentsReady) return;
			if (modelFromQuery.value) return modelFromQuery.value;
			if (currentConversation.value?.provider) {
				const model = unflattenModel(currentConversation.value);
				return model ? chatStore.getAgent(model) : void 0;
			}
			if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.getAgent(chatStore.streaming.model);
			return defaultModel.value ? chatStore.getAgent(defaultModel.value) : void 0;
		});
		const { credentialsByProvider, selectCredential } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
		const credentialsForSelectedProvider = computed(() => {
			const provider = selectedModel.value?.model.provider;
			if (!provider) return null;
			if (provider === "custom-agent" || provider === "n8n") return {};
			const credentialsId = credentialsByProvider.value?.[provider];
			if (!credentialsId) return null;
			return { [PROVIDER_CREDENTIAL_TYPE_MAP[provider]]: {
				id: credentialsId,
				name: ""
			} };
		});
		const isMissingSelectedCredential = computed(() => !credentialsForSelectedProvider.value);
		const editingMessageId = ref();
		const didSubmitInCurrentSession = ref(false);
		function scrollToBottom(smooth) {
			scrollContainerRef.value?.scrollTo({
				top: scrollableRef.value?.scrollHeight,
				behavior: smooth ? "smooth" : "instant"
			});
		}
		function scrollToMessage(messageId) {
			scrollableRef.value?.querySelector(`[data-message-id="${messageId}"]`)?.scrollIntoView({ behavior: "smooth" });
		}
		watch([readyToShowMessages, () => chatMessages.value[chatMessages.value.length - 1]?.id], ([ready, lastMessageId]) => {
			if (!ready || !lastMessageId) return;
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
			if (model) handleSelectModel(model);
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
		watch([inputRef, sessionId], ([input$1]) => {
			input$1?.focus();
		}, { immediate: true });
		watch(currentConversationTitle, (title$1) => {
			documentTitle.set(title$1 ?? "Chat");
		}, { immediate: true });
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials);
		}, { immediate: true });
		function onSubmit(message$1) {
			if (!message$1.trim() || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			didSubmitInCurrentSession.value = true;
			chatStore.sendMessage(sessionId.value, message$1, selectedModel.value.model, credentialsForSelectedProvider.value, canSelectTools.value ? selectedTools.value : []);
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
			const messageToRetry = message$1.retryOfMessageId ?? message$1.id;
			chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value.model, credentialsForSelectedProvider.value);
		}
		async function handleSelectModel(selection) {
			if (currentConversation.value) try {
				await chatStore.updateSessionModel(sessionId.value, selection.model);
			} catch (error) {
				toast.showError(error, "Could not update selected model");
			}
			else defaultModel.value = selection.model;
		}
		function handleSwitchAlternative(messageId) {
			chatStore.switchAlternative(sessionId.value, messageId);
		}
		function handleConfigureCredentials(_provider) {}
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
		async function handleEditAgent(agentId) {
			try {
				await chatStore.fetchCustomAgent(agentId);
				uiStore.openModalWithData({
					name: AGENT_EDITOR_MODAL_KEY,
					data: {
						agentId,
						credentials: credentialsByProvider,
						onCreateCustomAgent: handleSelectModel
					}
				});
			} catch (error) {
				toast.showError(error, "Failed to load agent");
			}
		}
		function openNewAgentCreator() {
			chatStore.currentEditingAgent = null;
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
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, { class: normalizeClass({
				[_ctx.$style.isNewSession]: isNewSession$1.value,
				[_ctx.$style.isExistingSession]: !isNewSession$1.value,
				[_ctx.$style.isMobileDevice]: unref(isMobileDevice$1)
			}) }, {
				default: withCtx(() => [createVNode(ChatConversationHeader_default, {
					ref_key: "headerRef",
					ref: headerRef,
					"selected-model": selectedModel.value ?? null,
					credentials: unref(credentialsByProvider),
					"ready-to-show-model-selector": unref(chatStore).agentsReady,
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
				]), readyToShowMessages.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
					key: 0,
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
							"min-height",
							"onStartEdit"
						]);
					}), 128))], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.promptContainer) }, [!unref(arrivedState).bottom && !isNewSession$1.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						type: "secondary",
						icon: "arrow-down",
						class: normalizeClass(_ctx.$style.scrollToBottomButton),
						title: "Scroll to bottom",
						onClick: _cache[0] || (_cache[0] = ($event) => scrollToBottom(true))
					}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(ChatPrompt_default, {
						ref_key: "inputRef",
						ref: inputRef,
						class: normalizeClass(_ctx.$style.prompt),
						"selected-model": selectedModel.value ?? null,
						"selected-tools": selectedTools.value,
						"is-responding": isResponding.value,
						"is-tools-selectable": canSelectTools.value,
						"is-missing-credentials": isMissingSelectedCredential.value,
						"is-new-session": isNewSession$1.value,
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
						"is-new-session"
					])], 2)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ChatView_vue_vue_type_style_index_0_lang_module_default = {
	scrollArea: "_scrollArea_1cs1t_123",
	scrollable: "_scrollable_1cs1t_128",
	isNewSession: "_isNewSession_1cs1t_137",
	header: "_header_1cs1t_141",
	isMobileDevice: "_isMobileDevice_1cs1t_147",
	starter: "_starter_1cs1t_147",
	messageList: "_messageList_1cs1t_152",
	promptContainer: "_promptContainer_1cs1t_168",
	isExistingSession: "_isExistingSession_1cs1t_172",
	prompt: "_prompt_1cs1t_168",
	scrollToBottomButton: "_scrollToBottomButton_1cs1t_190"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
