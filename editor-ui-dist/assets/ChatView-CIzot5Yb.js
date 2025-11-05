const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-BO7MlKL2.js","assets/core-BfCr8skN.js","assets/chunk-6z4oVpB-.js","assets/languageModules-B8UNBljm.js","assets/xml-CcxXd9zY.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, q as onBeforeMount, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { I as useSpeechRecognition, L as useSpeechSynthesis, M as useMediaQuery, P as useScroll, g as onClickOutside, gt as useI18n, j as useLocalStorage } from "./_MapCache-It4eafc2.js";
import { Ct as N8nIconButton_default, Fn as N8nText_default, G as N8nOption_default, In as N8nButton_default, Nn as N8nHeading_default, Rn as N8nIcon_default, W as N8nSelect_default, bt as N8nInput_default, gt as require_markdown_it_link_attributes, ht as N8nTooltip_default, i as N8nScrollArea_default, k as N8nNavigationDropdown_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, x as createEventBus, y as useRoute } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import "./dialog-B2TUeQnw.js";
import { Ht as useCredentialsStore, Li as useUIStore, ir as useUsersStore, kn as useDocumentTitle, yc as v4_default } from "./useTelemetry-D6pZULgL.js";
import { t as useToast } from "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Go as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, Ko as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, Lr as nullType, Rr as recordType, cr as PROVIDER_CREDENTIAL_TYPE_MAP, lr as chatHubConversationModelSchema, ur as chatHubProviderSchema, zr as stringType } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
import "./retry-sDkwzrPY.js";
import { t as useClipboard } from "./useClipboard-ZySm1Yx-.js";
import { t as Modal_default } from "./Modal-B6qiGYJG.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DUOHN_vH.js";
import { a as providerDisplayNames, i as MOBILE_MEDIA_QUERY, r as CHAT_VIEW, t as CHAT_CONVERSATION_VIEW } from "./constants-DlQs6Cav.js";
import { n as useChatStore, r as findOneFromModelsResponse, t as useChatHubSidebarState } from "./useChatHubSidebarState-B-EMmo7G.js";
import { t as VueMarkdown_default } from "./VueMarkdown-BCMxdlbf.js";
var ModelSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelector",
	props: {
		models: {},
		selectedModel: {},
		credentialsName: {}
	},
	emits: ["change", "configure"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dropdownRef = useTemplateRef("dropdownRef");
		const menu = computed(() => chatHubProviderSchema.options.filter((provider) => provider !== "n8n").map((provider) => {
			const models = props.models?.[provider].models ?? [];
			const error = props.models?.[provider].error;
			const modelOptions = models.length > 0 ? models.map((model) => {
				return {
					id: `${provider}::${model.provider === "n8n" ? model.workflowId : model.model}`,
					title: model.name,
					disabled: false
				};
			}) : error ? [{
				id: `${provider}::error`,
				value: null,
				disabled: true,
				title: error
			}] : [];
			const submenu = modelOptions.concat([...provider !== "n8n" && modelOptions.length > 0 ? [{
				isDivider: true,
				id: "divider"
			}] : []]);
			if (provider !== "n8n") submenu.push({
				id: `${provider}::configure`,
				icon: "settings",
				title: "Configure credentials...",
				disabled: false
			});
			return {
				id: provider,
				hidden: true,
				title: providerDisplayNames[provider],
				submenu
			};
		}));
		const selectedLabel = computed(() => {
			if (!props.selectedModel) return "Select model";
			return props.selectedModel.name;
		});
		function onSelect(id) {
			const [provider, identifier] = id.split("::");
			const parsedProvider = chatHubProviderSchema.safeParse(provider).data;
			if (!parsedProvider) return;
			if (identifier === "configure" && parsedProvider !== "n8n") {
				emit("configure", parsedProvider);
				return;
			}
			const model = parsedProvider === "n8n" ? null : identifier;
			const workflowId = parsedProvider === "n8n" ? identifier : null;
			const selected$1 = props.models?.[parsedProvider].models.find((m) => m.provider === "n8n" ? m.workflowId === workflowId : m.model === model);
			if (!selected$1) return;
			emit("change", selected$1);
		}
		onClickOutside(computed(() => dropdownRef.value?.$el), () => dropdownRef.value?.close());
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
				}, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.dropdownButton),
					type: "secondary",
					text: ""
				}, {
					default: withCtx(() => [
						_ctx.selectedModel && _ctx.selectedModel.provider in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
							key: 0,
							"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.selectedModel.provider],
							size: _ctx.credentialsName ? 20 : 16,
							class: normalizeClass(_ctx.$style.icon)
						}, null, 8, [
							"credential-type-name",
							"size",
							"class"
						])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.selected) }, [createBaseVNode("div", null, toDisplayString(selectedLabel.value), 1), _ctx.credentialsName ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.credentialsName), 1)]),
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
	dropdownButton: "_dropdownButton_1go3j_123",
	selected: "_selected_1go3j_131",
	icon: "_icon_1go3j_144",
	menuIcon: "_menuIcon_1go3j_149"
};
var ModelSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ModelSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSelector_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatConversationHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatConversationHeader",
	props: {
		selectedModel: {},
		credentials: {}
	},
	emits: [
		"selectModel",
		"setCredentials",
		"renameConversation"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const sidebar = useChatHubSidebarState();
		const chatStore = useChatStore();
		const credentialsStore = useCredentialsStore();
		const router = useRouter();
		const modelSelectorRef = useTemplateRef("modelSelectorRef");
		const credentialsName = computed(() => __props.selectedModel ? credentialsStore.getCredentialById(__props.credentials[__props.selectedModel.provider] ?? "")?.name : void 0);
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
				!unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.menuButton),
					type: "secondary",
					icon: "panel-left",
					text: "",
					"icon-size": "large",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(sidebar).toggleOpen(true))
				}, null, 8, ["class"])) : createCommentVNode("", true),
				!unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.menuButton),
					type: "secondary",
					icon: "square-pen",
					text: "",
					"icon-size": "large",
					onClick: onNewChat
				}, null, 8, ["class"])) : createCommentVNode("", true),
				createVNode(ModelSelector_default, {
					ref_key: "modelSelectorRef",
					ref: modelSelectorRef,
					models: unref(chatStore).models ?? null,
					"selected-model": _ctx.selectedModel,
					"credentials-name": credentialsName.value,
					onChange: onModelChange,
					onConfigure: _cache[1] || (_cache[1] = ($event) => emit("setCredentials", $event))
				}, null, 8, [
					"models",
					"selected-model",
					"credentials-name"
				])
			], 2);
		};
	}
});
var ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_k0rp2_123",
	menuButton: "_menuButton_k0rp2_133",
	title: "_title_k0rp2_137"
};
var ChatConversationHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatConversationHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatConversationHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		type: {},
		justCopied: { type: Boolean },
		messageId: {},
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
		const emit = __emit;
		const copyTooltip = computed(() => {
			return __props.justCopied ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
		});
		const currentAlternativeIndex = computed(() => {
			return __props.alternatives.findIndex((id) => id === __props.messageId);
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
				_ctx.isSpeechSynthesisAvailable && _ctx.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				_ctx.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				_ctx.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
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
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-26250adf"]]);
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
				promise: Promise.all([__vitePreload(() => import("./es-BO7MlKL2.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-B8UNBljm.js"), __vite__mapDeps([3,4]))])
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
		const credentialTypeName = computed(() => {
			if (__props.message.type !== "ai" || !__props.message.provider || __props.message.provider === "n8n") return null;
			return PROVIDER_CREDENTIAL_TYPE_MAP[__props.message.provider] ?? null;
		});
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
			})) : _ctx.message.type === "ai" && credentialTypeName.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 1,
				"show-after": 100,
				placement: "left"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(_ctx.message.model), 1)]),
				default: withCtx(() => [createVNode(CredentialIcon_default, {
					size: 20,
					"credential-type-name": credentialTypeName.value
				}, null, 8, ["credential-type-name"])]),
				_: 1
			})) : (openBlock(), createBlock(unref(N8nIcon_default), {
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
				source: _ctx.message.content,
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
				type: _ctx.message.type,
				"just-copied": justCopied.value,
				"is-speech-synthesis-available": unref(speech).isSupported.value,
				"is-speaking": unref(speech).isPlaying.value,
				class: normalizeClass(_ctx.$style.actions),
				"message-id": _ctx.message.id,
				alternatives: _ctx.message.alternatives,
				onCopy: handleCopy,
				onEdit: handleEdit,
				onRegenerate: handleRegenerate,
				onReadAloud: handleReadAloud,
				onSwitchAlternative: handleSwitchAlternative
			}, null, 8, [
				"type",
				"just-copied",
				"is-speech-synthesis-available",
				"is-speaking",
				"class",
				"message-id",
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
		selectedModel: {},
		isMissingCredentials: { type: Boolean }
	},
	emits: [
		"submit",
		"stop",
		"selectModel",
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
		const placeholder = computed(() => {
			if (!__props.selectedModel) return "Select a model";
			return `Message ${__props.selectedModel.name}`;
		});
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
					default: withCtx(() => [
						_cache[3] || (_cache[3] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
						}, "select a model"),
						_cache[4] || (_cache[4] = createTextVNode(" to start a conversation "))
					]),
					_: 1
				}, 8, ["class"])) : _ctx.isMissingCredentials ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.callout)
				}, {
					default: withCtx(() => [
						_cache[5] || (_cache[5] = createTextVNode(" Please ")),
						createBaseVNode("a", {
							href: "",
							onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("setCredentials", _ctx.selectedModel.provider), ["prevent"]))
						}, " set credentials "),
						createTextVNode(" for " + toDisplayString(unref(providerDisplayNames)[_ctx.selectedModel.provider]) + " to start a conversation ", 1)
					]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					modelValue: message$1.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => message$1.value = $event),
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
	prompt: "_prompt_l0yq4_123",
	inputWrap: "_inputWrap_l0yq4_128",
	callout: "_callout_l0yq4_136",
	input: "_input_l0yq4_128",
	actions: "_actions_l0yq4_164",
	recording: "_recording_l0yq4_177",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_l0yq4_1"
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
const credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
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
var ChatView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatView",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const usersStore = useUsersStore();
		const chatStore = useChatStore();
		const credentialsStore = useCredentialsStore();
		const toast = useToast();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const documentTitle = useDocumentTitle();
		const uiStore = useUIStore();
		const headerRef = useTemplateRef("headerRef");
		const inputRef = useTemplateRef("inputRef");
		const sessionId = computed(() => typeof route.params.id === "string" ? route.params.id : v4_default());
		const isNewSession = computed(() => sessionId.value !== route.params.id);
		const scrollableRef = useTemplateRef("scrollable");
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.find((session) => session.id === sessionId.value) : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const { arrivedState } = useScroll(scrollContainerRef, {
			throttle: 100,
			offset: { bottom: 100 }
		});
		const selectedModel = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL(usersStore.currentUserId ?? "anonymous"), null, {
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
		const selectedCredentials = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_CREDENTIALS(usersStore.currentUserId ?? "anonymous"), {}, {
			writeDefaults: false,
			shallow: true,
			serializer: {
				read: (value) => {
					try {
						return credentialsMapSchema.parse(JSON.parse(value));
					} catch (error) {
						return {};
					}
				},
				write: (value) => JSON.stringify(value)
			}
		});
		const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map((provider) => {
			if (provider === "n8n") return [provider, null];
			return [provider, credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[provider]).toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
		})));
		const mergedCredentials = computed(() => ({
			...autoSelectCredentials.value,
			...selectedCredentials.value
		}));
		const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
		const isNewChat$1 = computed(() => route.name === CHAT_VIEW);
		const credentialsId = computed(() => selectedModel.value ? mergedCredentials.value[selectedModel.value.provider] : void 0);
		const modelRequiresCredentials = computed(() => {
			if (!selectedModel.value) return false;
			return selectedModel.value?.provider !== "n8n";
		});
		const isMissingSelectedCredential = computed(() => {
			if (!selectedModel.value) return false;
			if (!modelRequiresCredentials.value) return false;
			return !credentialsId.value;
		});
		const editingMessageId = ref();
		const didSubmitInCurrentSession = ref(false);
		const initialization = ref({
			credentialsFetched: false,
			modelsFetched: false
		});
		const credentialSelectorProvider = ref(null);
		const isInitialized = computed(() => initialization.value.credentialsFetched && initialization.value.modelsFetched);
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
			if (lastMessageId !== chatStore.streamingMessageId) {
				scrollToBottom(chatStore.streamingMessageId !== void 0);
				return;
			}
			const message$1 = chatStore.getActiveMessages(sessionId.value).find((message$2) => message$2.id === lastMessageId);
			if (message$1?.previousMessageId) scrollToMessage(message$1.previousMessageId);
		}, {
			immediate: true,
			flush: "post"
		});
		watch(mergedCredentials, async (credentials) => {
			const models = await chatStore.fetchChatModels(credentials);
			if (selectedModel.value === null) selectedModel.value = findOneFromModelsResponse(models) ?? null;
			initialization.value.modelsFetched = true;
		}, { immediate: true });
		watch([sessionId, isNewSession], async ([id, isNew]) => {
			didSubmitInCurrentSession.value = false;
			if (!isNew && !chatStore.getConversation(id)) try {
				await chatStore.fetchMessages(id);
			} catch (error) {
				toast.showError(error, "Error fetching a conversation");
				await router.push({ name: CHAT_VIEW });
			}
			inputRef.value?.focus();
		}, { immediate: true });
		watch(currentConversationTitle, (title$2) => {
			documentTitle.set(title$2 ?? "Chat");
		}, { immediate: true });
		onMounted(async () => {
			await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentials()]);
			initialization.value.credentialsFetched = true;
		});
		function onSubmit(message$1) {
			if (!message$1.trim() || chatStore.isResponding || !selectedModel.value || isMissingSelectedCredential.value) return;
			didSubmitInCurrentSession.value = true;
			const credentials = {};
			if (selectedModel.value.provider !== "n8n" && credentialsId.value) Object.assign(credentials, { [PROVIDER_CREDENTIAL_TYPE_MAP[selectedModel.value.provider]]: {
				id: credentialsId.value,
				name: ""
			} });
			chatStore.sendMessage(sessionId.value, message$1, selectedModel.value, credentials);
			inputRef.value?.setText("");
			if (isNewSession.value) router.push({
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
			if (chatStore.isResponding || !["human", "ai"].includes(message$1.type) || !selectedModel.value || !credentialsId.value) return;
			const messageToEdit = message$1.revisionOfMessageId ?? message$1.id;
			chatStore.editMessage(sessionId.value, messageToEdit, message$1.content, selectedModel.value, selectedModel.value.provider === "n8n" ? {} : { [PROVIDER_CREDENTIAL_TYPE_MAP[selectedModel.value.provider]]: {
				id: credentialsId.value,
				name: ""
			} });
			editingMessageId.value = void 0;
		}
		function handleRegenerateMessage(message$1) {
			if (chatStore.isResponding || message$1.type !== "ai" || !selectedModel.value || !credentialsId.value) return;
			const messageToRetry = message$1.retryOfMessageId ?? message$1.id;
			chatStore.regenerateMessage(sessionId.value, messageToRetry, selectedModel.value, selectedModel.value.provider === "n8n" ? {} : { [PROVIDER_CREDENTIAL_TYPE_MAP[selectedModel.value.provider]]: {
				id: credentialsId.value,
				name: ""
			} });
		}
		function handleSelectModel(selection) {
			selectedModel.value = selection;
		}
		function handleSelectCredentials(provider, id) {
			selectedCredentials.value = {
				...selectedCredentials.value,
				[provider]: id
			};
		}
		function handleSwitchAlternative(messageId) {
			chatStore.switchAlternative(sessionId.value, messageId);
		}
		function handleConfigureCredentials(provider) {
			const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
			if (credentialsStore.getCredentialsByType(credentialType).length === 0) {
				uiStore.openNewCredential(credentialType);
				return;
			}
			credentialSelectorProvider.value = provider;
			uiStore.openModal("chatCredentialSelector");
		}
		function handleConfigureModel() {
			headerRef.value?.openModelSelector();
		}
		function handleCreateNewCredential(provider) {
			uiStore.openNewCredential(PROVIDER_CREDENTIAL_TYPE_MAP[provider]);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, {
				[_ctx.$style.isNewChat]: isNewChat$1.value,
				[_ctx.$style.isMobileDevice]: unref(isMobileDevice$1)
			}]) }, [
				isInitialized.value ? (openBlock(), createBlock(ChatConversationHeader_default, {
					key: 0,
					ref_key: "headerRef",
					ref: headerRef,
					"selected-model": unref(selectedModel),
					credentials: mergedCredentials.value,
					onSelectModel: handleSelectModel,
					onSetCredentials: handleConfigureCredentials
				}, null, 8, ["selected-model", "credentials"])) : createCommentVNode("", true),
				credentialSelectorProvider.value && credentialSelectorProvider.value !== "n8n" ? (openBlock(), createBlock(CredentialSelectorModal_default, {
					key: credentialSelectorProvider.value,
					provider: credentialSelectorProvider.value,
					"initial-value": mergedCredentials.value[credentialSelectorProvider.value] ?? null,
					onSelect: handleSelectCredentials,
					onCreateNew: handleCreateNewCredential
				}, null, 8, ["provider", "initial-value"])) : createCommentVNode("", true),
				isInitialized.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
					key: 2,
					type: "scroll",
					"enable-vertical-scroll": true,
					"enable-horizontal-scroll": false,
					"as-child": "",
					class: normalizeClass(_ctx.$style.scrollArea)
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.scrollable),
						ref: "scrollable"
					}, [isNewChat$1.value ? (openBlock(), createBlock(ChatStarter_default, {
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
							"is-streaming": unref(chatStore).streamingMessageId === message$1.id,
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
					}), 128))], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.promptContainer) }, [!unref(arrivedState).bottom && !isNewChat$1.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						type: "secondary",
						icon: "arrow-down",
						class: normalizeClass(_ctx.$style.scrollToBottomButton),
						title: "Scroll to bottom",
						onClick: _cache[0] || (_cache[0] = ($event) => scrollToBottom(true))
					}, null, 8, ["class"])) : createCommentVNode("", true), isInitialized.value ? (openBlock(), createBlock(ChatPrompt_default, {
						key: 1,
						ref_key: "inputRef",
						ref: inputRef,
						class: normalizeClass(_ctx.$style.prompt),
						"is-responding": unref(chatStore).isResponding,
						"selected-model": unref(selectedModel),
						"is-missing-credentials": isMissingSelectedCredential.value,
						onSubmit,
						onStop,
						onSelectModel: handleConfigureModel,
						onSetCredentials: handleConfigureCredentials
					}, null, 8, [
						"class",
						"is-responding",
						"selected-model",
						"is-missing-credentials"
					])) : createCommentVNode("", true)], 2)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatView_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1wt8h_123",
	isMobileDevice: "_isMobileDevice_1wt8h_134",
	scrollArea: "_scrollArea_1wt8h_139",
	scrollable: "_scrollable_1wt8h_144",
	isNewChat: "_isNewChat_1wt8h_153",
	header: "_header_1wt8h_157",
	starter: "_starter_1wt8h_163",
	messageList: "_messageList_1wt8h_168",
	promptContainer: "_promptContainer_1wt8h_184",
	prompt: "_prompt_1wt8h_184",
	scrollToBottomButton: "_scrollToBottomButton_1wt8h_206"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
