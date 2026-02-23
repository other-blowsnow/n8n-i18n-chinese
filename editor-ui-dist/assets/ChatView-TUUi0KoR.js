const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-Datxe7JU.js","assets/core-XmFv11t6.js","assets/chunk-r2Y0G7H8.js","assets/languageModules-CN487Om9.js","assets/xml-BMqNMrYo.js"])))=>i.map(i=>d[i]);
import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, n as Transition, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { D as useElementSize, F as useScroll, L as useSpeechRecognition, M as useLocalStorage, N as useMediaQuery, O as useEventListener, R as useSpeechSynthesis, b as useActiveElement, bt as I18nT, yt as useI18n } from "./_MapCache-C-EGnnaH.js";
import { Ai as N8nIconButton_default, Bi as N8nButton_default, Ei as require_markdown_it_link_attributes, Et as useDeviceSupport, Gi as __vitePreload, Hi as N8nIcon_default, Li as N8nHeading_default, N as N8nResizeWrapper_default, Ni as truncate, Ri as N8nCallout_default, Ti as N8nTooltip_default, _t as N8nCard_default, bi as useRoute, c as N8nScrollArea_default, i as Select_default, ki as Input_default, pi as N8nLink_default, xi as useRouter, zi as N8nText_default } from "./src-AoeVD7He.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Lr as v4_default, To as INVITE_USER_MODAL_KEY, fn as useDocumentTitle, r as useUIStore, s as useWorkflowsStore, t as useUsersStore, ur as hasPermission, vr as hasRole, xs as useSettingsStore, yr as useToast } from "./users.store-CU7DkGnX.js";
import { $r as ROLE, Ci as INodesSchema, Gc as EnterpriseEditionFeature, Gs as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, Ks as LOCAL_STORAGE_CHAT_HUB_SELECTED_TOOLS, Ws as LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE, ii as chatHubConversationModelSchema, ni as PROVIDER_CREDENTIAL_TYPE_MAP, ns as VIEWS } from "./constants-CumZmnWv.js";
import "./merge-DgwDWcpR.js";
import { r as useRootStore } from "./_baseOrderBy-CxotlRq1.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BX6oNCg_.js";
import "./versions.store-Bg88yKwe.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-ZZHSAwuP.js";
import { t as useClipboard } from "./useClipboard-BNj9_TRT.js";
import "./nodeIcon-PKSJcu42.js";
import { l as shouldIgnoreCanvasShortcut } from "./canvas.utils-BsGxI6nE.js";
import { t as VueMarkdown_default } from "./VueMarkdown-BYt67cMe.js";
import { t as CredentialIcon_default } from "./CredentialIcon-uObLr7k-.js";
import "./NodeIcon-Dt9Wjnlx.js";
import { t as usePushConnectionStore } from "./pushConnection.store-UDvGTgEt.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-BL4UBbqZ.js";
import "./dist-DO4Q9JvC.js";
import { _ as TOOLS_SELECTOR_MODAL_KEY, h as MOBILE_MEDIA_QUERY, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, t as AGENT_EDITOR_MODAL_KEY, v as providerDisplayNames } from "./constants-DODtTwao.js";
import { S as buildChatAttachmentUrl, b as unflattenModel, f as isEditable, g as isWaitingForApproval, h as isRegenerable, i as createMimeTypes, m as isLlmProviderModel, n as collectChatArtifacts, o as findOneFromModelsResponse, p as isLlmProvider, t as useChatStore, v as splitMarkdownIntoChunks } from "./chat.store-DBHcGdNJ.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-DeiwxFjy.js";
import { n as ChatFile_default, t as useResizablePanel } from "./useResizablePanel-Ca6BGTdN.js";
import { n as useChatCredentials, r as chatHubConversationModelWithCachedDisplayNameSchema, t as ChatLayout_default } from "./ChatLayout-C9362xm9.js";
import { n as ToolsSelector_default, r as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-CNbPqSkb.js";
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
				__props.showArtifactIcon ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "secondary",
					size: "medium",
					icon: "notebook-pen",
					text: "",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("reopenArtifact"))
				})) : createCommentVNode("", true),
				__props.selectedModel?.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.editAgent),
					type: "secondary",
					size: "small",
					icon: "settings",
					label: unref(i18n).baseText("chatHub.chat.header.button.editAgent"),
					onClick: _cache[3] || (_cache[3] = ($event) => emit("editCustomAgent", __props.selectedModel.model.agentId))
				}, null, 8, ["class", "label"])) : createCommentVNode("", true),
				showOpenWorkflow.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
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
		const text = computed(() => __props.message.content.map((c) => c.content).join("\n\n"));
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
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "chat-message-actions"
			}, [
				createVNode(CopyButton_default, {
					content: text.value,
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
var ChatMessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-bf964da2"]]);
var require_katex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function webpackUniversalModuleDefinition(root, factory) {
		if (typeof exports === "object" && typeof module === "object") module.exports = factory();
		else if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof exports === "object") exports["katex"] = factory();
		else root["katex"] = factory();
	})(typeof self !== "undefined" ? self : exports, function() {
		return (function() {
			"use strict";
			var __webpack_require__ = {};
			(function() {
				__webpack_require__.d = function(exports$1, definition) {
					for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports$1, key)) Object.defineProperty(exports$1, key, {
						enumerable: true,
						get: definition[key]
					});
				};
			})();
			(function() {
				__webpack_require__.o = function(obj, prop) {
					return Object.prototype.hasOwnProperty.call(obj, prop);
				};
			})();
			var __webpack_exports__ = {};
			__webpack_require__.d(__webpack_exports__, { "default": function() {
				return katex_webpack;
			} });
			class ParseError {
				constructor(message$1, token) {
					this.name = void 0;
					this.position = void 0;
					this.length = void 0;
					this.rawMessage = void 0;
					let error = "KaTeX parse error: " + message$1;
					let start;
					let end;
					const loc = token && token.loc;
					if (loc && loc.start <= loc.end) {
						const input = loc.lexer.input;
						start = loc.start;
						end = loc.end;
						if (start === input.length) error += " at end of input: ";
						else error += " at position " + (start + 1) + ": ";
						const underlined = input.slice(start, end).replace(/[^]/g, "$&̲");
						let left;
						if (start > 15) left = "…" + input.slice(start - 15, start);
						else left = input.slice(0, start);
						let right;
						if (end + 15 < input.length) right = input.slice(end, end + 15) + "…";
						else right = input.slice(end);
						error += left + underlined + right;
					}
					const self$1 = new Error(error);
					self$1.name = "ParseError";
					self$1.__proto__ = ParseError.prototype;
					self$1.position = start;
					if (start != null && end != null) self$1.length = end - start;
					self$1.rawMessage = message$1;
					return self$1;
				}
			}
			ParseError.prototype.__proto__ = Error.prototype;
			var src_ParseError = ParseError;
			const deflt = function(setting, defaultIfUndefined) {
				return setting === void 0 ? defaultIfUndefined : setting;
			};
			const uppercase = /([A-Z])/g;
			const hyphenate = function(str) {
				return str.replace(uppercase, "-$1").toLowerCase();
			};
			const ESCAPE_LOOKUP = {
				"&": "&amp;",
				">": "&gt;",
				"<": "&lt;",
				"\"": "&quot;",
				"'": "&#x27;"
			};
			const ESCAPE_REGEX = /[&><"']/g;
			function utils_escape(text) {
				return String(text).replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
			}
			const getBaseElem = function(group) {
				if (group.type === "ordgroup") if (group.body.length === 1) return getBaseElem(group.body[0]);
				else return group;
				else if (group.type === "color") if (group.body.length === 1) return getBaseElem(group.body[0]);
				else return group;
				else if (group.type === "font") return getBaseElem(group.body);
				else return group;
			};
			const isCharacterBox = function(group) {
				const baseElem = getBaseElem(group);
				return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "atom";
			};
			const assert = function(value) {
				if (!value) throw new Error("Expected non-null, but got " + String(value));
				return value;
			};
			const protocolFromUrl = function(url) {
				const protocol = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(url);
				if (!protocol) return "_relative";
				if (protocol[2] !== ":") return null;
				if (!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(protocol[1])) return null;
				return protocol[1].toLowerCase();
			};
			var utils = {
				deflt,
				escape: utils_escape,
				hyphenate,
				getBaseElem,
				isCharacterBox,
				protocolFromUrl
			};
			const SETTINGS_SCHEMA = {
				displayMode: {
					type: "boolean",
					description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
					cli: "-d, --display-mode"
				},
				output: {
					type: { enum: [
						"htmlAndMathml",
						"html",
						"mathml"
					] },
					description: "Determines the markup language of the output.",
					cli: "-F, --format <type>"
				},
				leqno: {
					type: "boolean",
					description: "Render display math in leqno style (left-justified tags)."
				},
				fleqn: {
					type: "boolean",
					description: "Render display math flush left."
				},
				throwOnError: {
					type: "boolean",
					default: true,
					cli: "-t, --no-throw-on-error",
					cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
				},
				errorColor: {
					type: "string",
					default: "#cc0000",
					cli: "-c, --error-color <color>",
					cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
					cliProcessor: (color) => "#" + color
				},
				macros: {
					type: "object",
					cli: "-m, --macro <def>",
					cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
					cliDefault: [],
					cliProcessor: (def, defs) => {
						defs.push(def);
						return defs;
					}
				},
				minRuleThickness: {
					type: "number",
					description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
					processor: (t) => Math.max(0, t),
					cli: "--min-rule-thickness <size>",
					cliProcessor: parseFloat
				},
				colorIsTextColor: {
					type: "boolean",
					description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
					cli: "-b, --color-is-text-color"
				},
				strict: {
					type: [
						{ enum: [
							"warn",
							"ignore",
							"error"
						] },
						"boolean",
						"function"
					],
					description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
					cli: "-S, --strict",
					cliDefault: false
				},
				trust: {
					type: ["boolean", "function"],
					description: "Trust the input, enabling all HTML features such as \\url.",
					cli: "-T, --trust"
				},
				maxSize: {
					type: "number",
					default: Infinity,
					description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
					processor: (s) => Math.max(0, s),
					cli: "-s, --max-size <n>",
					cliProcessor: parseInt
				},
				maxExpand: {
					type: "number",
					default: 1e3,
					description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
					processor: (n) => Math.max(0, n),
					cli: "-e, --max-expand <n>",
					cliProcessor: (n) => n === "Infinity" ? Infinity : parseInt(n)
				},
				globalGroup: {
					type: "boolean",
					cli: false
				}
			};
			function getDefaultValue(schema) {
				if (schema.default) return schema.default;
				const type$1 = schema.type;
				const defaultType = Array.isArray(type$1) ? type$1[0] : type$1;
				if (typeof defaultType !== "string") return defaultType.enum[0];
				switch (defaultType) {
					case "boolean": return false;
					case "string": return "";
					case "number": return 0;
					case "object": return {};
				}
			}
			class Settings {
				constructor(options) {
					this.displayMode = void 0;
					this.output = void 0;
					this.leqno = void 0;
					this.fleqn = void 0;
					this.throwOnError = void 0;
					this.errorColor = void 0;
					this.macros = void 0;
					this.minRuleThickness = void 0;
					this.colorIsTextColor = void 0;
					this.strict = void 0;
					this.trust = void 0;
					this.maxSize = void 0;
					this.maxExpand = void 0;
					this.globalGroup = void 0;
					options = options || {};
					for (const prop in SETTINGS_SCHEMA) if (SETTINGS_SCHEMA.hasOwnProperty(prop)) {
						const schema = SETTINGS_SCHEMA[prop];
						this[prop] = options[prop] !== void 0 ? schema.processor ? schema.processor(options[prop]) : options[prop] : getDefaultValue(schema);
					}
				}
				reportNonstrict(errorCode, errorMsg, token) {
					let strict = this.strict;
					if (typeof strict === "function") strict = strict(errorCode, errorMsg, token);
					if (!strict || strict === "ignore") return;
					else if (strict === true || strict === "error") throw new src_ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (errorMsg + " [" + errorCode + "]"), token);
					else if (strict === "warn") typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
					else typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
				}
				useStrictBehavior(errorCode, errorMsg, token) {
					let strict = this.strict;
					if (typeof strict === "function") try {
						strict = strict(errorCode, errorMsg, token);
					} catch (error) {
						strict = "error";
					}
					if (!strict || strict === "ignore") return false;
					else if (strict === true || strict === "error") return true;
					else if (strict === "warn") {
						typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
						return false;
					} else {
						typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
						return false;
					}
				}
				isTrusted(context) {
					if (context.url && !context.protocol) {
						const protocol = utils.protocolFromUrl(context.url);
						if (protocol == null) return false;
						context.protocol = protocol;
					}
					const trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
					return Boolean(trust);
				}
			}
			class Style {
				constructor(id, size, cramped) {
					this.id = void 0;
					this.size = void 0;
					this.cramped = void 0;
					this.id = id;
					this.size = size;
					this.cramped = cramped;
				}
				sup() {
					return styles[sup[this.id]];
				}
				sub() {
					return styles[sub[this.id]];
				}
				fracNum() {
					return styles[fracNum[this.id]];
				}
				fracDen() {
					return styles[fracDen[this.id]];
				}
				cramp() {
					return styles[cramp[this.id]];
				}
				text() {
					return styles[Style_text[this.id]];
				}
				isTight() {
					return this.size >= 2;
				}
			}
			const D = 0;
			const Dc = 1;
			const T = 2;
			const Tc = 3;
			const S = 4;
			const Sc = 5;
			const SS = 6;
			const SSc = 7;
			const styles = [
				new Style(D, 0, false),
				new Style(Dc, 0, true),
				new Style(T, 1, false),
				new Style(Tc, 1, true),
				new Style(S, 2, false),
				new Style(Sc, 2, true),
				new Style(SS, 3, false),
				new Style(SSc, 3, true)
			];
			const sup = [
				S,
				Sc,
				S,
				Sc,
				SS,
				SSc,
				SS,
				SSc
			];
			const sub = [
				Sc,
				Sc,
				Sc,
				Sc,
				SSc,
				SSc,
				SSc,
				SSc
			];
			const fracNum = [
				T,
				Tc,
				S,
				Sc,
				SS,
				SSc,
				SS,
				SSc
			];
			const fracDen = [
				Tc,
				Tc,
				Sc,
				Sc,
				SSc,
				SSc,
				SSc,
				SSc
			];
			const cramp = [
				Dc,
				Dc,
				Tc,
				Tc,
				Sc,
				Sc,
				SSc,
				SSc
			];
			const Style_text = [
				D,
				Dc,
				T,
				Tc,
				T,
				Tc,
				T,
				Tc
			];
			var src_Style = {
				DISPLAY: styles[D],
				TEXT: styles[T],
				SCRIPT: styles[S],
				SCRIPTSCRIPT: styles[SS]
			};
			const scriptData = [
				{
					name: "latin",
					blocks: [[256, 591], [768, 879]]
				},
				{
					name: "cyrillic",
					blocks: [[1024, 1279]]
				},
				{
					name: "armenian",
					blocks: [[1328, 1423]]
				},
				{
					name: "brahmic",
					blocks: [[2304, 4255]]
				},
				{
					name: "georgian",
					blocks: [[4256, 4351]]
				},
				{
					name: "cjk",
					blocks: [
						[12288, 12543],
						[19968, 40879],
						[65280, 65376]
					]
				},
				{
					name: "hangul",
					blocks: [[44032, 55215]]
				}
			];
			function scriptFromCodepoint(codepoint) {
				for (let i = 0; i < scriptData.length; i++) {
					const script = scriptData[i];
					for (let i$1 = 0; i$1 < script.blocks.length; i$1++) {
						const block = script.blocks[i$1];
						if (codepoint >= block[0] && codepoint <= block[1]) return script.name;
					}
				}
				return null;
			}
			const allBlocks = [];
			scriptData.forEach((s) => s.blocks.forEach((b) => allBlocks.push(...b)));
			function supportedCodepoint(codepoint) {
				for (let i = 0; i < allBlocks.length; i += 2) if (codepoint >= allBlocks[i] && codepoint <= allBlocks[i + 1]) return true;
				return false;
			}
			const hLinePad = 80;
			const sqrtMain = function(extraVinculum, hLinePad$1) {
				return "M95," + (622 + extraVinculum + hLinePad$1) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + extraVinculum / 2.075 + " -" + extraVinculum + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + extraVinculum) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + extraVinculum) + " " + hLinePad$1 + "h400000v" + (40 + extraVinculum) + "h-400000z";
			};
			const sqrtSize1 = function(extraVinculum, hLinePad$1) {
				return "M263," + (601 + extraVinculum + hLinePad$1) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + extraVinculum / 2.084 + " -" + extraVinculum + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + extraVinculum) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + extraVinculum) + " " + hLinePad$1 + "h400000v" + (40 + extraVinculum) + "h-400000z";
			};
			const sqrtSize2 = function(extraVinculum, hLinePad$1) {
				return "M983 " + (10 + extraVinculum + hLinePad$1) + "\nl" + extraVinculum / 3.13 + " -" + extraVinculum + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + extraVinculum) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + extraVinculum) + " " + hLinePad$1 + "h400000v" + (40 + extraVinculum) + "h-400000z";
			};
			const sqrtSize3 = function(extraVinculum, hLinePad$1) {
				return "M424," + (2398 + extraVinculum + hLinePad$1) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + extraVinculum / 4.223 + " -" + extraVinculum + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + extraVinculum) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + extraVinculum) + " " + hLinePad$1 + "\nh400000v" + (40 + extraVinculum) + "h-400000z";
			};
			const sqrtSize4 = function(extraVinculum, hLinePad$1) {
				return "M473," + (2713 + extraVinculum + hLinePad$1) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + extraVinculum / 5.298 + " -" + extraVinculum + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + extraVinculum) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + extraVinculum) + " " + hLinePad$1 + "h400000v" + (40 + extraVinculum) + "H1017.7z";
			};
			const phasePath = function(y) {
				const x = y / 2;
				return "M400000 " + y + " H0 L" + x + " 0 l65 45 L145 " + (y - 80) + " H400000z";
			};
			const sqrtTall = function(extraVinculum, hLinePad$1, viewBoxHeight) {
				const vertSegment = viewBoxHeight - 54 - hLinePad$1 - extraVinculum;
				return "M702 " + (extraVinculum + hLinePad$1) + "H400000" + (40 + extraVinculum) + "\nH742v" + vertSegment + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + hLinePad$1 + "H400000v" + (40 + extraVinculum) + "H742z";
			};
			const sqrtPath = function(size, extraVinculum, viewBoxHeight) {
				extraVinculum = 1e3 * extraVinculum;
				let path$1 = "";
				switch (size) {
					case "sqrtMain":
						path$1 = sqrtMain(extraVinculum, hLinePad);
						break;
					case "sqrtSize1":
						path$1 = sqrtSize1(extraVinculum, hLinePad);
						break;
					case "sqrtSize2":
						path$1 = sqrtSize2(extraVinculum, hLinePad);
						break;
					case "sqrtSize3":
						path$1 = sqrtSize3(extraVinculum, hLinePad);
						break;
					case "sqrtSize4":
						path$1 = sqrtSize4(extraVinculum, hLinePad);
						break;
					case "sqrtTall": path$1 = sqrtTall(extraVinculum, hLinePad, viewBoxHeight);
				}
				return path$1;
			};
			const innerPath = function(name, height) {
				switch (name) {
					case "⎜": return "M291 0 H417 V" + height + " H291z M291 0 H417 V" + height + " H291z";
					case "∣": return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z";
					case "∥": return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z" + ("M367 0 H410 V" + height + " H367z M367 0 H410 V" + height + " H367z");
					case "⎟": return "M457 0 H583 V" + height + " H457z M457 0 H583 V" + height + " H457z";
					case "⎢": return "M319 0 H403 V" + height + " H319z M319 0 H403 V" + height + " H319z";
					case "⎥": return "M263 0 H347 V" + height + " H263z M263 0 H347 V" + height + " H263z";
					case "⎪": return "M384 0 H504 V" + height + " H384z M384 0 H504 V" + height + " H384z";
					case "⏐": return "M312 0 H355 V" + height + " H312z M312 0 H355 V" + height + " H312z";
					case "‖": return "M257 0 H300 V" + height + " H257z M257 0 H300 V" + height + " H257z" + ("M478 0 H521 V" + height + " H478z M478 0 H521 V" + height + " H478z");
					default: return "";
				}
			};
			const path = {
				doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
				doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
				leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
				leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
				leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
				leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
				leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
				leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
				leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
				leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
				leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
				lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
				leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
				leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
				leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
				longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
				midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
				midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
				oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
				oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
				oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
				oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
				rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
				rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
				rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
				rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
				rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
				rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
				rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
				rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
				rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
				righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
				rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
				rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
				twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
				twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
				tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
				tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
				tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
				tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
				vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
				widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
				widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
				widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
				widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
				widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
				widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
				widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
				widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
				baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
				rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
				baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
				rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
				shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
				shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
			};
			const tallDelim = function(label, midHeight) {
				switch (label) {
					case "lbrack": return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + midHeight + " v1759 h84z";
					case "rbrack": return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + midHeight + " v1759 h84z";
					case "vert": return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z";
					case "doublevert": return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z\nM367 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + midHeight + " v585 h43z";
					case "lfloor": return "M319 602 V0 H403 V602 v" + midHeight + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
					case "rfloor": return "M319 602 V0 H403 V602 v" + midHeight + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
					case "lceil": return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v602 h84z\nM403 1759 V0 H319 V1759 v" + midHeight + " v602 h84z";
					case "rceil": return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + midHeight + " v602 h84z";
					case "lparen": return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (midHeight + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (midHeight + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
					case "rparen": return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (midHeight + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (midHeight + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
					default: throw new Error("Unknown stretchy delimiter.");
				}
			};
			var fontMetricsData = {
				"AMS-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"65": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"66": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"67": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"68": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"69": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"70": [
						0,
						.68889,
						0,
						0,
						.61111
					],
					"71": [
						0,
						.68889,
						0,
						0,
						.77778
					],
					"72": [
						0,
						.68889,
						0,
						0,
						.77778
					],
					"73": [
						0,
						.68889,
						0,
						0,
						.38889
					],
					"74": [
						.16667,
						.68889,
						0,
						0,
						.5
					],
					"75": [
						0,
						.68889,
						0,
						0,
						.77778
					],
					"76": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"77": [
						0,
						.68889,
						0,
						0,
						.94445
					],
					"78": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"79": [
						.16667,
						.68889,
						0,
						0,
						.77778
					],
					"80": [
						0,
						.68889,
						0,
						0,
						.61111
					],
					"81": [
						.16667,
						.68889,
						0,
						0,
						.77778
					],
					"82": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"83": [
						0,
						.68889,
						0,
						0,
						.55556
					],
					"84": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"85": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"86": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"87": [
						0,
						.68889,
						0,
						0,
						1
					],
					"88": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"89": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"90": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"107": [
						0,
						.68889,
						0,
						0,
						.55556
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"165": [
						0,
						.675,
						.025,
						0,
						.75
					],
					"174": [
						.15559,
						.69224,
						0,
						0,
						.94666
					],
					"240": [
						0,
						.68889,
						0,
						0,
						.55556
					],
					"295": [
						0,
						.68889,
						0,
						0,
						.54028
					],
					"710": [
						0,
						.825,
						0,
						0,
						2.33334
					],
					"732": [
						0,
						.9,
						0,
						0,
						2.33334
					],
					"770": [
						0,
						.825,
						0,
						0,
						2.33334
					],
					"771": [
						0,
						.9,
						0,
						0,
						2.33334
					],
					"989": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"1008": [
						0,
						.43056,
						.04028,
						0,
						.66667
					],
					"8245": [
						0,
						.54986,
						0,
						0,
						.275
					],
					"8463": [
						0,
						.68889,
						0,
						0,
						.54028
					],
					"8487": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"8498": [
						0,
						.68889,
						0,
						0,
						.55556
					],
					"8502": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"8503": [
						0,
						.68889,
						0,
						0,
						.44445
					],
					"8504": [
						0,
						.68889,
						0,
						0,
						.66667
					],
					"8513": [
						0,
						.68889,
						0,
						0,
						.63889
					],
					"8592": [
						-.03598,
						.46402,
						0,
						0,
						.5
					],
					"8594": [
						-.03598,
						.46402,
						0,
						0,
						.5
					],
					"8602": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8603": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8606": [
						.01354,
						.52239,
						0,
						0,
						1
					],
					"8608": [
						.01354,
						.52239,
						0,
						0,
						1
					],
					"8610": [
						.01354,
						.52239,
						0,
						0,
						1.11111
					],
					"8611": [
						.01354,
						.52239,
						0,
						0,
						1.11111
					],
					"8619": [
						0,
						.54986,
						0,
						0,
						1
					],
					"8620": [
						0,
						.54986,
						0,
						0,
						1
					],
					"8621": [
						-.13313,
						.37788,
						0,
						0,
						1.38889
					],
					"8622": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8624": [
						0,
						.69224,
						0,
						0,
						.5
					],
					"8625": [
						0,
						.69224,
						0,
						0,
						.5
					],
					"8630": [
						0,
						.43056,
						0,
						0,
						1
					],
					"8631": [
						0,
						.43056,
						0,
						0,
						1
					],
					"8634": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8635": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8638": [
						.19444,
						.69224,
						0,
						0,
						.41667
					],
					"8639": [
						.19444,
						.69224,
						0,
						0,
						.41667
					],
					"8642": [
						.19444,
						.69224,
						0,
						0,
						.41667
					],
					"8643": [
						.19444,
						.69224,
						0,
						0,
						.41667
					],
					"8644": [
						.1808,
						.675,
						0,
						0,
						1
					],
					"8646": [
						.1808,
						.675,
						0,
						0,
						1
					],
					"8647": [
						.1808,
						.675,
						0,
						0,
						1
					],
					"8648": [
						.19444,
						.69224,
						0,
						0,
						.83334
					],
					"8649": [
						.1808,
						.675,
						0,
						0,
						1
					],
					"8650": [
						.19444,
						.69224,
						0,
						0,
						.83334
					],
					"8651": [
						.01354,
						.52239,
						0,
						0,
						1
					],
					"8652": [
						.01354,
						.52239,
						0,
						0,
						1
					],
					"8653": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8654": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8655": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8666": [
						.13667,
						.63667,
						0,
						0,
						1
					],
					"8667": [
						.13667,
						.63667,
						0,
						0,
						1
					],
					"8669": [
						-.13313,
						.37788,
						0,
						0,
						1
					],
					"8672": [
						-.064,
						.437,
						0,
						0,
						1.334
					],
					"8674": [
						-.064,
						.437,
						0,
						0,
						1.334
					],
					"8705": [
						0,
						.825,
						0,
						0,
						.5
					],
					"8708": [
						0,
						.68889,
						0,
						0,
						.55556
					],
					"8709": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8717": [
						0,
						.43056,
						0,
						0,
						.42917
					],
					"8722": [
						-.03598,
						.46402,
						0,
						0,
						.5
					],
					"8724": [
						.08198,
						.69224,
						0,
						0,
						.77778
					],
					"8726": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8733": [
						0,
						.69224,
						0,
						0,
						.77778
					],
					"8736": [
						0,
						.69224,
						0,
						0,
						.72222
					],
					"8737": [
						0,
						.69224,
						0,
						0,
						.72222
					],
					"8738": [
						.03517,
						.52239,
						0,
						0,
						.72222
					],
					"8739": [
						.08167,
						.58167,
						0,
						0,
						.22222
					],
					"8740": [
						.25142,
						.74111,
						0,
						0,
						.27778
					],
					"8741": [
						.08167,
						.58167,
						0,
						0,
						.38889
					],
					"8742": [
						.25142,
						.74111,
						0,
						0,
						.5
					],
					"8756": [
						0,
						.69224,
						0,
						0,
						.66667
					],
					"8757": [
						0,
						.69224,
						0,
						0,
						.66667
					],
					"8764": [
						-.13313,
						.36687,
						0,
						0,
						.77778
					],
					"8765": [
						-.13313,
						.37788,
						0,
						0,
						.77778
					],
					"8769": [
						-.13313,
						.36687,
						0,
						0,
						.77778
					],
					"8770": [
						-.03625,
						.46375,
						0,
						0,
						.77778
					],
					"8774": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8776": [
						-.01688,
						.48312,
						0,
						0,
						.77778
					],
					"8778": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8782": [
						.06062,
						.54986,
						0,
						0,
						.77778
					],
					"8783": [
						.06062,
						.54986,
						0,
						0,
						.77778
					],
					"8785": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8786": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8787": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8790": [
						0,
						.69224,
						0,
						0,
						.77778
					],
					"8791": [
						.22958,
						.72958,
						0,
						0,
						.77778
					],
					"8796": [
						.08198,
						.91667,
						0,
						0,
						.77778
					],
					"8806": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"8807": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"8808": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"8809": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"8812": [
						.25583,
						.75583,
						0,
						0,
						.5
					],
					"8814": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8815": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8816": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8817": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8818": [
						.22958,
						.72958,
						0,
						0,
						.77778
					],
					"8819": [
						.22958,
						.72958,
						0,
						0,
						.77778
					],
					"8822": [
						.1808,
						.675,
						0,
						0,
						.77778
					],
					"8823": [
						.1808,
						.675,
						0,
						0,
						.77778
					],
					"8828": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8829": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8830": [
						.22958,
						.72958,
						0,
						0,
						.77778
					],
					"8831": [
						.22958,
						.72958,
						0,
						0,
						.77778
					],
					"8832": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8833": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8840": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8841": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8842": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8843": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8847": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8848": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8858": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8859": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8861": [
						.08198,
						.58198,
						0,
						0,
						.77778
					],
					"8862": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"8863": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"8864": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"8865": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"8872": [
						0,
						.69224,
						0,
						0,
						.61111
					],
					"8873": [
						0,
						.69224,
						0,
						0,
						.72222
					],
					"8874": [
						0,
						.69224,
						0,
						0,
						.88889
					],
					"8876": [
						0,
						.68889,
						0,
						0,
						.61111
					],
					"8877": [
						0,
						.68889,
						0,
						0,
						.61111
					],
					"8878": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"8879": [
						0,
						.68889,
						0,
						0,
						.72222
					],
					"8882": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8883": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8884": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8885": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8888": [
						0,
						.54986,
						0,
						0,
						1.11111
					],
					"8890": [
						.19444,
						.43056,
						0,
						0,
						.55556
					],
					"8891": [
						.19444,
						.69224,
						0,
						0,
						.61111
					],
					"8892": [
						.19444,
						.69224,
						0,
						0,
						.61111
					],
					"8901": [
						0,
						.54986,
						0,
						0,
						.27778
					],
					"8903": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8905": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8906": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"8907": [
						0,
						.69224,
						0,
						0,
						.77778
					],
					"8908": [
						0,
						.69224,
						0,
						0,
						.77778
					],
					"8909": [
						-.03598,
						.46402,
						0,
						0,
						.77778
					],
					"8910": [
						0,
						.54986,
						0,
						0,
						.76042
					],
					"8911": [
						0,
						.54986,
						0,
						0,
						.76042
					],
					"8912": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8913": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"8914": [
						0,
						.54986,
						0,
						0,
						.66667
					],
					"8915": [
						0,
						.54986,
						0,
						0,
						.66667
					],
					"8916": [
						0,
						.69224,
						0,
						0,
						.66667
					],
					"8918": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8919": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8920": [
						.03517,
						.54986,
						0,
						0,
						1.33334
					],
					"8921": [
						.03517,
						.54986,
						0,
						0,
						1.33334
					],
					"8922": [
						.38569,
						.88569,
						0,
						0,
						.77778
					],
					"8923": [
						.38569,
						.88569,
						0,
						0,
						.77778
					],
					"8926": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8927": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"8928": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8929": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8934": [
						.23222,
						.74111,
						0,
						0,
						.77778
					],
					"8935": [
						.23222,
						.74111,
						0,
						0,
						.77778
					],
					"8936": [
						.23222,
						.74111,
						0,
						0,
						.77778
					],
					"8937": [
						.23222,
						.74111,
						0,
						0,
						.77778
					],
					"8938": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8939": [
						.20576,
						.70576,
						0,
						0,
						.77778
					],
					"8940": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8941": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"8994": [
						.19444,
						.69224,
						0,
						0,
						.77778
					],
					"8995": [
						.19444,
						.69224,
						0,
						0,
						.77778
					],
					"9416": [
						.15559,
						.69224,
						0,
						0,
						.90222
					],
					"9484": [
						0,
						.69224,
						0,
						0,
						.5
					],
					"9488": [
						0,
						.69224,
						0,
						0,
						.5
					],
					"9492": [
						0,
						.37788,
						0,
						0,
						.5
					],
					"9496": [
						0,
						.37788,
						0,
						0,
						.5
					],
					"9585": [
						.19444,
						.68889,
						0,
						0,
						.88889
					],
					"9586": [
						.19444,
						.74111,
						0,
						0,
						.88889
					],
					"9632": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"9633": [
						0,
						.675,
						0,
						0,
						.77778
					],
					"9650": [
						0,
						.54986,
						0,
						0,
						.72222
					],
					"9651": [
						0,
						.54986,
						0,
						0,
						.72222
					],
					"9654": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"9660": [
						0,
						.54986,
						0,
						0,
						.72222
					],
					"9661": [
						0,
						.54986,
						0,
						0,
						.72222
					],
					"9664": [
						.03517,
						.54986,
						0,
						0,
						.77778
					],
					"9674": [
						.11111,
						.69224,
						0,
						0,
						.66667
					],
					"9733": [
						.19444,
						.69224,
						0,
						0,
						.94445
					],
					"10003": [
						0,
						.69224,
						0,
						0,
						.83334
					],
					"10016": [
						0,
						.69224,
						0,
						0,
						.83334
					],
					"10731": [
						.11111,
						.69224,
						0,
						0,
						.66667
					],
					"10846": [
						.19444,
						.75583,
						0,
						0,
						.61111
					],
					"10877": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"10878": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"10885": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"10886": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"10887": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"10888": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"10889": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10890": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10891": [
						.48256,
						.98256,
						0,
						0,
						.77778
					],
					"10892": [
						.48256,
						.98256,
						0,
						0,
						.77778
					],
					"10901": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"10902": [
						.13667,
						.63667,
						0,
						0,
						.77778
					],
					"10933": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"10934": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"10935": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10936": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10937": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10938": [
						.26167,
						.75726,
						0,
						0,
						.77778
					],
					"10949": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"10950": [
						.25583,
						.75583,
						0,
						0,
						.77778
					],
					"10955": [
						.28481,
						.79383,
						0,
						0,
						.77778
					],
					"10956": [
						.28481,
						.79383,
						0,
						0,
						.77778
					],
					"57350": [
						.08167,
						.58167,
						0,
						0,
						.22222
					],
					"57351": [
						.08167,
						.58167,
						0,
						0,
						.38889
					],
					"57352": [
						.08167,
						.58167,
						0,
						0,
						.77778
					],
					"57353": [
						0,
						.43056,
						.04028,
						0,
						.66667
					],
					"57356": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57357": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57358": [
						.41951,
						.91951,
						0,
						0,
						.77778
					],
					"57359": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"57360": [
						.30274,
						.79383,
						0,
						0,
						.77778
					],
					"57361": [
						.41951,
						.91951,
						0,
						0,
						.77778
					],
					"57366": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57367": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57368": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57369": [
						.25142,
						.75726,
						0,
						0,
						.77778
					],
					"57370": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"57371": [
						.13597,
						.63597,
						0,
						0,
						.77778
					]
				},
				"Caligraphic-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"65": [
						0,
						.68333,
						0,
						.19445,
						.79847
					],
					"66": [
						0,
						.68333,
						.03041,
						.13889,
						.65681
					],
					"67": [
						0,
						.68333,
						.05834,
						.13889,
						.52653
					],
					"68": [
						0,
						.68333,
						.02778,
						.08334,
						.77139
					],
					"69": [
						0,
						.68333,
						.08944,
						.11111,
						.52778
					],
					"70": [
						0,
						.68333,
						.09931,
						.11111,
						.71875
					],
					"71": [
						.09722,
						.68333,
						.0593,
						.11111,
						.59487
					],
					"72": [
						0,
						.68333,
						.00965,
						.11111,
						.84452
					],
					"73": [
						0,
						.68333,
						.07382,
						0,
						.54452
					],
					"74": [
						.09722,
						.68333,
						.18472,
						.16667,
						.67778
					],
					"75": [
						0,
						.68333,
						.01445,
						.05556,
						.76195
					],
					"76": [
						0,
						.68333,
						0,
						.13889,
						.68972
					],
					"77": [
						0,
						.68333,
						0,
						.13889,
						1.2009
					],
					"78": [
						0,
						.68333,
						.14736,
						.08334,
						.82049
					],
					"79": [
						0,
						.68333,
						.02778,
						.11111,
						.79611
					],
					"80": [
						0,
						.68333,
						.08222,
						.08334,
						.69556
					],
					"81": [
						.09722,
						.68333,
						0,
						.11111,
						.81667
					],
					"82": [
						0,
						.68333,
						0,
						.08334,
						.8475
					],
					"83": [
						0,
						.68333,
						.075,
						.13889,
						.60556
					],
					"84": [
						0,
						.68333,
						.25417,
						0,
						.54464
					],
					"85": [
						0,
						.68333,
						.09931,
						.08334,
						.62583
					],
					"86": [
						0,
						.68333,
						.08222,
						0,
						.61278
					],
					"87": [
						0,
						.68333,
						.08222,
						.08334,
						.98778
					],
					"88": [
						0,
						.68333,
						.14643,
						.13889,
						.7133
					],
					"89": [
						.09722,
						.68333,
						.08222,
						.08334,
						.66834
					],
					"90": [
						0,
						.68333,
						.07944,
						.13889,
						.72473
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					]
				},
				"Fraktur-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69141,
						0,
						0,
						.29574
					],
					"34": [
						0,
						.69141,
						0,
						0,
						.21471
					],
					"38": [
						0,
						.69141,
						0,
						0,
						.73786
					],
					"39": [
						0,
						.69141,
						0,
						0,
						.21201
					],
					"40": [
						.24982,
						.74947,
						0,
						0,
						.38865
					],
					"41": [
						.24982,
						.74947,
						0,
						0,
						.38865
					],
					"42": [
						0,
						.62119,
						0,
						0,
						.27764
					],
					"43": [
						.08319,
						.58283,
						0,
						0,
						.75623
					],
					"44": [
						0,
						.10803,
						0,
						0,
						.27764
					],
					"45": [
						.08319,
						.58283,
						0,
						0,
						.75623
					],
					"46": [
						0,
						.10803,
						0,
						0,
						.27764
					],
					"47": [
						.24982,
						.74947,
						0,
						0,
						.50181
					],
					"48": [
						0,
						.47534,
						0,
						0,
						.50181
					],
					"49": [
						0,
						.47534,
						0,
						0,
						.50181
					],
					"50": [
						0,
						.47534,
						0,
						0,
						.50181
					],
					"51": [
						.18906,
						.47534,
						0,
						0,
						.50181
					],
					"52": [
						.18906,
						.47534,
						0,
						0,
						.50181
					],
					"53": [
						.18906,
						.47534,
						0,
						0,
						.50181
					],
					"54": [
						0,
						.69141,
						0,
						0,
						.50181
					],
					"55": [
						.18906,
						.47534,
						0,
						0,
						.50181
					],
					"56": [
						0,
						.69141,
						0,
						0,
						.50181
					],
					"57": [
						.18906,
						.47534,
						0,
						0,
						.50181
					],
					"58": [
						0,
						.47534,
						0,
						0,
						.21606
					],
					"59": [
						.12604,
						.47534,
						0,
						0,
						.21606
					],
					"61": [
						-.13099,
						.36866,
						0,
						0,
						.75623
					],
					"63": [
						0,
						.69141,
						0,
						0,
						.36245
					],
					"65": [
						0,
						.69141,
						0,
						0,
						.7176
					],
					"66": [
						0,
						.69141,
						0,
						0,
						.88397
					],
					"67": [
						0,
						.69141,
						0,
						0,
						.61254
					],
					"68": [
						0,
						.69141,
						0,
						0,
						.83158
					],
					"69": [
						0,
						.69141,
						0,
						0,
						.66278
					],
					"70": [
						.12604,
						.69141,
						0,
						0,
						.61119
					],
					"71": [
						0,
						.69141,
						0,
						0,
						.78539
					],
					"72": [
						.06302,
						.69141,
						0,
						0,
						.7203
					],
					"73": [
						0,
						.69141,
						0,
						0,
						.55448
					],
					"74": [
						.12604,
						.69141,
						0,
						0,
						.55231
					],
					"75": [
						0,
						.69141,
						0,
						0,
						.66845
					],
					"76": [
						0,
						.69141,
						0,
						0,
						.66602
					],
					"77": [
						0,
						.69141,
						0,
						0,
						1.04953
					],
					"78": [
						0,
						.69141,
						0,
						0,
						.83212
					],
					"79": [
						0,
						.69141,
						0,
						0,
						.82699
					],
					"80": [
						.18906,
						.69141,
						0,
						0,
						.82753
					],
					"81": [
						.03781,
						.69141,
						0,
						0,
						.82699
					],
					"82": [
						0,
						.69141,
						0,
						0,
						.82807
					],
					"83": [
						0,
						.69141,
						0,
						0,
						.82861
					],
					"84": [
						0,
						.69141,
						0,
						0,
						.66899
					],
					"85": [
						0,
						.69141,
						0,
						0,
						.64576
					],
					"86": [
						0,
						.69141,
						0,
						0,
						.83131
					],
					"87": [
						0,
						.69141,
						0,
						0,
						1.04602
					],
					"88": [
						0,
						.69141,
						0,
						0,
						.71922
					],
					"89": [
						.18906,
						.69141,
						0,
						0,
						.83293
					],
					"90": [
						.12604,
						.69141,
						0,
						0,
						.60201
					],
					"91": [
						.24982,
						.74947,
						0,
						0,
						.27764
					],
					"93": [
						.24982,
						.74947,
						0,
						0,
						.27764
					],
					"94": [
						0,
						.69141,
						0,
						0,
						.49965
					],
					"97": [
						0,
						.47534,
						0,
						0,
						.50046
					],
					"98": [
						0,
						.69141,
						0,
						0,
						.51315
					],
					"99": [
						0,
						.47534,
						0,
						0,
						.38946
					],
					"100": [
						0,
						.62119,
						0,
						0,
						.49857
					],
					"101": [
						0,
						.47534,
						0,
						0,
						.40053
					],
					"102": [
						.18906,
						.69141,
						0,
						0,
						.32626
					],
					"103": [
						.18906,
						.47534,
						0,
						0,
						.5037
					],
					"104": [
						.18906,
						.69141,
						0,
						0,
						.52126
					],
					"105": [
						0,
						.69141,
						0,
						0,
						.27899
					],
					"106": [
						0,
						.69141,
						0,
						0,
						.28088
					],
					"107": [
						0,
						.69141,
						0,
						0,
						.38946
					],
					"108": [
						0,
						.69141,
						0,
						0,
						.27953
					],
					"109": [
						0,
						.47534,
						0,
						0,
						.76676
					],
					"110": [
						0,
						.47534,
						0,
						0,
						.52666
					],
					"111": [
						0,
						.47534,
						0,
						0,
						.48885
					],
					"112": [
						.18906,
						.52396,
						0,
						0,
						.50046
					],
					"113": [
						.18906,
						.47534,
						0,
						0,
						.48912
					],
					"114": [
						0,
						.47534,
						0,
						0,
						.38919
					],
					"115": [
						0,
						.47534,
						0,
						0,
						.44266
					],
					"116": [
						0,
						.62119,
						0,
						0,
						.33301
					],
					"117": [
						0,
						.47534,
						0,
						0,
						.5172
					],
					"118": [
						0,
						.52396,
						0,
						0,
						.5118
					],
					"119": [
						0,
						.52396,
						0,
						0,
						.77351
					],
					"120": [
						.18906,
						.47534,
						0,
						0,
						.38865
					],
					"121": [
						.18906,
						.47534,
						0,
						0,
						.49884
					],
					"122": [
						.18906,
						.47534,
						0,
						0,
						.39054
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"8216": [
						0,
						.69141,
						0,
						0,
						.21471
					],
					"8217": [
						0,
						.69141,
						0,
						0,
						.21471
					],
					"58112": [
						0,
						.62119,
						0,
						0,
						.49749
					],
					"58113": [
						0,
						.62119,
						0,
						0,
						.4983
					],
					"58114": [
						.18906,
						.69141,
						0,
						0,
						.33328
					],
					"58115": [
						.18906,
						.69141,
						0,
						0,
						.32923
					],
					"58116": [
						.18906,
						.47534,
						0,
						0,
						.50343
					],
					"58117": [
						0,
						.69141,
						0,
						0,
						.33301
					],
					"58118": [
						0,
						.62119,
						0,
						0,
						.33409
					],
					"58119": [
						0,
						.47534,
						0,
						0,
						.50073
					]
				},
				"Main-Bold": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						0,
						0,
						.35
					],
					"34": [
						0,
						.69444,
						0,
						0,
						.60278
					],
					"35": [
						.19444,
						.69444,
						0,
						0,
						.95833
					],
					"36": [
						.05556,
						.75,
						0,
						0,
						.575
					],
					"37": [
						.05556,
						.75,
						0,
						0,
						.95833
					],
					"38": [
						0,
						.69444,
						0,
						0,
						.89444
					],
					"39": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"40": [
						.25,
						.75,
						0,
						0,
						.44722
					],
					"41": [
						.25,
						.75,
						0,
						0,
						.44722
					],
					"42": [
						0,
						.75,
						0,
						0,
						.575
					],
					"43": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"44": [
						.19444,
						.15556,
						0,
						0,
						.31944
					],
					"45": [
						0,
						.44444,
						0,
						0,
						.38333
					],
					"46": [
						0,
						.15556,
						0,
						0,
						.31944
					],
					"47": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"48": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"49": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"50": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"51": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"52": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"53": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"54": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"55": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"56": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"57": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"58": [
						0,
						.44444,
						0,
						0,
						.31944
					],
					"59": [
						.19444,
						.44444,
						0,
						0,
						.31944
					],
					"60": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"61": [
						-.10889,
						.39111,
						0,
						0,
						.89444
					],
					"62": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"63": [
						0,
						.69444,
						0,
						0,
						.54305
					],
					"64": [
						0,
						.69444,
						0,
						0,
						.89444
					],
					"65": [
						0,
						.68611,
						0,
						0,
						.86944
					],
					"66": [
						0,
						.68611,
						0,
						0,
						.81805
					],
					"67": [
						0,
						.68611,
						0,
						0,
						.83055
					],
					"68": [
						0,
						.68611,
						0,
						0,
						.88194
					],
					"69": [
						0,
						.68611,
						0,
						0,
						.75555
					],
					"70": [
						0,
						.68611,
						0,
						0,
						.72361
					],
					"71": [
						0,
						.68611,
						0,
						0,
						.90416
					],
					"72": [
						0,
						.68611,
						0,
						0,
						.9
					],
					"73": [
						0,
						.68611,
						0,
						0,
						.43611
					],
					"74": [
						0,
						.68611,
						0,
						0,
						.59444
					],
					"75": [
						0,
						.68611,
						0,
						0,
						.90138
					],
					"76": [
						0,
						.68611,
						0,
						0,
						.69166
					],
					"77": [
						0,
						.68611,
						0,
						0,
						1.09166
					],
					"78": [
						0,
						.68611,
						0,
						0,
						.9
					],
					"79": [
						0,
						.68611,
						0,
						0,
						.86388
					],
					"80": [
						0,
						.68611,
						0,
						0,
						.78611
					],
					"81": [
						.19444,
						.68611,
						0,
						0,
						.86388
					],
					"82": [
						0,
						.68611,
						0,
						0,
						.8625
					],
					"83": [
						0,
						.68611,
						0,
						0,
						.63889
					],
					"84": [
						0,
						.68611,
						0,
						0,
						.8
					],
					"85": [
						0,
						.68611,
						0,
						0,
						.88472
					],
					"86": [
						0,
						.68611,
						.01597,
						0,
						.86944
					],
					"87": [
						0,
						.68611,
						.01597,
						0,
						1.18888
					],
					"88": [
						0,
						.68611,
						0,
						0,
						.86944
					],
					"89": [
						0,
						.68611,
						.02875,
						0,
						.86944
					],
					"90": [
						0,
						.68611,
						0,
						0,
						.70277
					],
					"91": [
						.25,
						.75,
						0,
						0,
						.31944
					],
					"92": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"93": [
						.25,
						.75,
						0,
						0,
						.31944
					],
					"94": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"95": [
						.31,
						.13444,
						.03194,
						0,
						.575
					],
					"97": [
						0,
						.44444,
						0,
						0,
						.55902
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"99": [
						0,
						.44444,
						0,
						0,
						.51111
					],
					"100": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"101": [
						0,
						.44444,
						0,
						0,
						.52708
					],
					"102": [
						0,
						.69444,
						.10903,
						0,
						.35139
					],
					"103": [
						.19444,
						.44444,
						.01597,
						0,
						.575
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"105": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"106": [
						.19444,
						.69444,
						0,
						0,
						.35139
					],
					"107": [
						0,
						.69444,
						0,
						0,
						.60694
					],
					"108": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"109": [
						0,
						.44444,
						0,
						0,
						.95833
					],
					"110": [
						0,
						.44444,
						0,
						0,
						.63889
					],
					"111": [
						0,
						.44444,
						0,
						0,
						.575
					],
					"112": [
						.19444,
						.44444,
						0,
						0,
						.63889
					],
					"113": [
						.19444,
						.44444,
						0,
						0,
						.60694
					],
					"114": [
						0,
						.44444,
						0,
						0,
						.47361
					],
					"115": [
						0,
						.44444,
						0,
						0,
						.45361
					],
					"116": [
						0,
						.63492,
						0,
						0,
						.44722
					],
					"117": [
						0,
						.44444,
						0,
						0,
						.63889
					],
					"118": [
						0,
						.44444,
						.01597,
						0,
						.60694
					],
					"119": [
						0,
						.44444,
						.01597,
						0,
						.83055
					],
					"120": [
						0,
						.44444,
						0,
						0,
						.60694
					],
					"121": [
						.19444,
						.44444,
						.01597,
						0,
						.60694
					],
					"122": [
						0,
						.44444,
						0,
						0,
						.51111
					],
					"123": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"124": [
						.25,
						.75,
						0,
						0,
						.31944
					],
					"125": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"126": [
						.35,
						.34444,
						0,
						0,
						.575
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"163": [
						0,
						.69444,
						0,
						0,
						.86853
					],
					"168": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"172": [
						0,
						.44444,
						0,
						0,
						.76666
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.86944
					],
					"177": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.51111
					],
					"198": [
						0,
						.68611,
						0,
						0,
						1.04166
					],
					"215": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"216": [
						.04861,
						.73472,
						0,
						0,
						.89444
					],
					"223": [
						0,
						.69444,
						0,
						0,
						.59722
					],
					"230": [
						0,
						.44444,
						0,
						0,
						.83055
					],
					"247": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"248": [
						.09722,
						.54167,
						0,
						0,
						.575
					],
					"305": [
						0,
						.44444,
						0,
						0,
						.31944
					],
					"338": [
						0,
						.68611,
						0,
						0,
						1.16944
					],
					"339": [
						0,
						.44444,
						0,
						0,
						.89444
					],
					"567": [
						.19444,
						.44444,
						0,
						0,
						.35139
					],
					"710": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"711": [
						0,
						.63194,
						0,
						0,
						.575
					],
					"713": [
						0,
						.59611,
						0,
						0,
						.575
					],
					"714": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"728": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"729": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.86944
					],
					"732": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"733": [
						0,
						.69444,
						0,
						0,
						.575
					],
					"915": [
						0,
						.68611,
						0,
						0,
						.69166
					],
					"916": [
						0,
						.68611,
						0,
						0,
						.95833
					],
					"920": [
						0,
						.68611,
						0,
						0,
						.89444
					],
					"923": [
						0,
						.68611,
						0,
						0,
						.80555
					],
					"926": [
						0,
						.68611,
						0,
						0,
						.76666
					],
					"928": [
						0,
						.68611,
						0,
						0,
						.9
					],
					"931": [
						0,
						.68611,
						0,
						0,
						.83055
					],
					"933": [
						0,
						.68611,
						0,
						0,
						.89444
					],
					"934": [
						0,
						.68611,
						0,
						0,
						.83055
					],
					"936": [
						0,
						.68611,
						0,
						0,
						.89444
					],
					"937": [
						0,
						.68611,
						0,
						0,
						.83055
					],
					"8211": [
						0,
						.44444,
						.03194,
						0,
						.575
					],
					"8212": [
						0,
						.44444,
						.03194,
						0,
						1.14999
					],
					"8216": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"8217": [
						0,
						.69444,
						0,
						0,
						.31944
					],
					"8220": [
						0,
						.69444,
						0,
						0,
						.60278
					],
					"8221": [
						0,
						.69444,
						0,
						0,
						.60278
					],
					"8224": [
						.19444,
						.69444,
						0,
						0,
						.51111
					],
					"8225": [
						.19444,
						.69444,
						0,
						0,
						.51111
					],
					"8242": [
						0,
						.55556,
						0,
						0,
						.34444
					],
					"8407": [
						0,
						.72444,
						.15486,
						0,
						.575
					],
					"8463": [
						0,
						.69444,
						0,
						0,
						.66759
					],
					"8465": [
						0,
						.69444,
						0,
						0,
						.83055
					],
					"8467": [
						0,
						.69444,
						0,
						0,
						.47361
					],
					"8472": [
						.19444,
						.44444,
						0,
						0,
						.74027
					],
					"8476": [
						0,
						.69444,
						0,
						0,
						.83055
					],
					"8501": [
						0,
						.69444,
						0,
						0,
						.70277
					],
					"8592": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8593": [
						.19444,
						.69444,
						0,
						0,
						.575
					],
					"8594": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8595": [
						.19444,
						.69444,
						0,
						0,
						.575
					],
					"8596": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8597": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"8598": [
						.19444,
						.69444,
						0,
						0,
						1.14999
					],
					"8599": [
						.19444,
						.69444,
						0,
						0,
						1.14999
					],
					"8600": [
						.19444,
						.69444,
						0,
						0,
						1.14999
					],
					"8601": [
						.19444,
						.69444,
						0,
						0,
						1.14999
					],
					"8636": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8637": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8640": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8641": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8656": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8657": [
						.19444,
						.69444,
						0,
						0,
						.70277
					],
					"8658": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8659": [
						.19444,
						.69444,
						0,
						0,
						.70277
					],
					"8660": [
						-.10889,
						.39111,
						0,
						0,
						1.14999
					],
					"8661": [
						.25,
						.75,
						0,
						0,
						.70277
					],
					"8704": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"8706": [
						0,
						.69444,
						.06389,
						0,
						.62847
					],
					"8707": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"8709": [
						.05556,
						.75,
						0,
						0,
						.575
					],
					"8711": [
						0,
						.68611,
						0,
						0,
						.95833
					],
					"8712": [
						.08556,
						.58556,
						0,
						0,
						.76666
					],
					"8715": [
						.08556,
						.58556,
						0,
						0,
						.76666
					],
					"8722": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8723": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8725": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"8726": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"8727": [
						-.02778,
						.47222,
						0,
						0,
						.575
					],
					"8728": [
						-.02639,
						.47361,
						0,
						0,
						.575
					],
					"8729": [
						-.02639,
						.47361,
						0,
						0,
						.575
					],
					"8730": [
						.18,
						.82,
						0,
						0,
						.95833
					],
					"8733": [
						0,
						.44444,
						0,
						0,
						.89444
					],
					"8734": [
						0,
						.44444,
						0,
						0,
						1.14999
					],
					"8736": [
						0,
						.69224,
						0,
						0,
						.72222
					],
					"8739": [
						.25,
						.75,
						0,
						0,
						.31944
					],
					"8741": [
						.25,
						.75,
						0,
						0,
						.575
					],
					"8743": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8744": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8745": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8746": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8747": [
						.19444,
						.69444,
						.12778,
						0,
						.56875
					],
					"8764": [
						-.10889,
						.39111,
						0,
						0,
						.89444
					],
					"8768": [
						.19444,
						.69444,
						0,
						0,
						.31944
					],
					"8771": [
						.00222,
						.50222,
						0,
						0,
						.89444
					],
					"8773": [
						.027,
						.638,
						0,
						0,
						.894
					],
					"8776": [
						.02444,
						.52444,
						0,
						0,
						.89444
					],
					"8781": [
						.00222,
						.50222,
						0,
						0,
						.89444
					],
					"8801": [
						.00222,
						.50222,
						0,
						0,
						.89444
					],
					"8804": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8805": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8810": [
						.08556,
						.58556,
						0,
						0,
						1.14999
					],
					"8811": [
						.08556,
						.58556,
						0,
						0,
						1.14999
					],
					"8826": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"8827": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"8834": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"8835": [
						.08556,
						.58556,
						0,
						0,
						.89444
					],
					"8838": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8839": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8846": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8849": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8850": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"8851": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8852": [
						0,
						.55556,
						0,
						0,
						.76666
					],
					"8853": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8854": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8855": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8856": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8857": [
						.13333,
						.63333,
						0,
						0,
						.89444
					],
					"8866": [
						0,
						.69444,
						0,
						0,
						.70277
					],
					"8867": [
						0,
						.69444,
						0,
						0,
						.70277
					],
					"8868": [
						0,
						.69444,
						0,
						0,
						.89444
					],
					"8869": [
						0,
						.69444,
						0,
						0,
						.89444
					],
					"8900": [
						-.02639,
						.47361,
						0,
						0,
						.575
					],
					"8901": [
						-.02639,
						.47361,
						0,
						0,
						.31944
					],
					"8902": [
						-.02778,
						.47222,
						0,
						0,
						.575
					],
					"8968": [
						.25,
						.75,
						0,
						0,
						.51111
					],
					"8969": [
						.25,
						.75,
						0,
						0,
						.51111
					],
					"8970": [
						.25,
						.75,
						0,
						0,
						.51111
					],
					"8971": [
						.25,
						.75,
						0,
						0,
						.51111
					],
					"8994": [
						-.13889,
						.36111,
						0,
						0,
						1.14999
					],
					"8995": [
						-.13889,
						.36111,
						0,
						0,
						1.14999
					],
					"9651": [
						.19444,
						.69444,
						0,
						0,
						1.02222
					],
					"9657": [
						-.02778,
						.47222,
						0,
						0,
						.575
					],
					"9661": [
						.19444,
						.69444,
						0,
						0,
						1.02222
					],
					"9667": [
						-.02778,
						.47222,
						0,
						0,
						.575
					],
					"9711": [
						.19444,
						.69444,
						0,
						0,
						1.14999
					],
					"9824": [
						.12963,
						.69444,
						0,
						0,
						.89444
					],
					"9825": [
						.12963,
						.69444,
						0,
						0,
						.89444
					],
					"9826": [
						.12963,
						.69444,
						0,
						0,
						.89444
					],
					"9827": [
						.12963,
						.69444,
						0,
						0,
						.89444
					],
					"9837": [
						0,
						.75,
						0,
						0,
						.44722
					],
					"9838": [
						.19444,
						.69444,
						0,
						0,
						.44722
					],
					"9839": [
						.19444,
						.69444,
						0,
						0,
						.44722
					],
					"10216": [
						.25,
						.75,
						0,
						0,
						.44722
					],
					"10217": [
						.25,
						.75,
						0,
						0,
						.44722
					],
					"10815": [
						0,
						.68611,
						0,
						0,
						.9
					],
					"10927": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"10928": [
						.19667,
						.69667,
						0,
						0,
						.89444
					],
					"57376": [
						.19444,
						.69444,
						0,
						0,
						0
					]
				},
				"Main-BoldItalic": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						.11417,
						0,
						.38611
					],
					"34": [
						0,
						.69444,
						.07939,
						0,
						.62055
					],
					"35": [
						.19444,
						.69444,
						.06833,
						0,
						.94444
					],
					"37": [
						.05556,
						.75,
						.12861,
						0,
						.94444
					],
					"38": [
						0,
						.69444,
						.08528,
						0,
						.88555
					],
					"39": [
						0,
						.69444,
						.12945,
						0,
						.35555
					],
					"40": [
						.25,
						.75,
						.15806,
						0,
						.47333
					],
					"41": [
						.25,
						.75,
						.03306,
						0,
						.47333
					],
					"42": [
						0,
						.75,
						.14333,
						0,
						.59111
					],
					"43": [
						.10333,
						.60333,
						.03306,
						0,
						.88555
					],
					"44": [
						.19444,
						.14722,
						0,
						0,
						.35555
					],
					"45": [
						0,
						.44444,
						.02611,
						0,
						.41444
					],
					"46": [
						0,
						.14722,
						0,
						0,
						.35555
					],
					"47": [
						.25,
						.75,
						.15806,
						0,
						.59111
					],
					"48": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"49": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"50": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"51": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"52": [
						.19444,
						.64444,
						.13167,
						0,
						.59111
					],
					"53": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"54": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"55": [
						.19444,
						.64444,
						.13167,
						0,
						.59111
					],
					"56": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"57": [
						0,
						.64444,
						.13167,
						0,
						.59111
					],
					"58": [
						0,
						.44444,
						.06695,
						0,
						.35555
					],
					"59": [
						.19444,
						.44444,
						.06695,
						0,
						.35555
					],
					"61": [
						-.10889,
						.39111,
						.06833,
						0,
						.88555
					],
					"63": [
						0,
						.69444,
						.11472,
						0,
						.59111
					],
					"64": [
						0,
						.69444,
						.09208,
						0,
						.88555
					],
					"65": [
						0,
						.68611,
						0,
						0,
						.86555
					],
					"66": [
						0,
						.68611,
						.0992,
						0,
						.81666
					],
					"67": [
						0,
						.68611,
						.14208,
						0,
						.82666
					],
					"68": [
						0,
						.68611,
						.09062,
						0,
						.87555
					],
					"69": [
						0,
						.68611,
						.11431,
						0,
						.75666
					],
					"70": [
						0,
						.68611,
						.12903,
						0,
						.72722
					],
					"71": [
						0,
						.68611,
						.07347,
						0,
						.89527
					],
					"72": [
						0,
						.68611,
						.17208,
						0,
						.8961
					],
					"73": [
						0,
						.68611,
						.15681,
						0,
						.47166
					],
					"74": [
						0,
						.68611,
						.145,
						0,
						.61055
					],
					"75": [
						0,
						.68611,
						.14208,
						0,
						.89499
					],
					"76": [
						0,
						.68611,
						0,
						0,
						.69777
					],
					"77": [
						0,
						.68611,
						.17208,
						0,
						1.07277
					],
					"78": [
						0,
						.68611,
						.17208,
						0,
						.8961
					],
					"79": [
						0,
						.68611,
						.09062,
						0,
						.85499
					],
					"80": [
						0,
						.68611,
						.0992,
						0,
						.78721
					],
					"81": [
						.19444,
						.68611,
						.09062,
						0,
						.85499
					],
					"82": [
						0,
						.68611,
						.02559,
						0,
						.85944
					],
					"83": [
						0,
						.68611,
						.11264,
						0,
						.64999
					],
					"84": [
						0,
						.68611,
						.12903,
						0,
						.7961
					],
					"85": [
						0,
						.68611,
						.17208,
						0,
						.88083
					],
					"86": [
						0,
						.68611,
						.18625,
						0,
						.86555
					],
					"87": [
						0,
						.68611,
						.18625,
						0,
						1.15999
					],
					"88": [
						0,
						.68611,
						.15681,
						0,
						.86555
					],
					"89": [
						0,
						.68611,
						.19803,
						0,
						.86555
					],
					"90": [
						0,
						.68611,
						.14208,
						0,
						.70888
					],
					"91": [
						.25,
						.75,
						.1875,
						0,
						.35611
					],
					"93": [
						.25,
						.75,
						.09972,
						0,
						.35611
					],
					"94": [
						0,
						.69444,
						.06709,
						0,
						.59111
					],
					"95": [
						.31,
						.13444,
						.09811,
						0,
						.59111
					],
					"97": [
						0,
						.44444,
						.09426,
						0,
						.59111
					],
					"98": [
						0,
						.69444,
						.07861,
						0,
						.53222
					],
					"99": [
						0,
						.44444,
						.05222,
						0,
						.53222
					],
					"100": [
						0,
						.69444,
						.10861,
						0,
						.59111
					],
					"101": [
						0,
						.44444,
						.085,
						0,
						.53222
					],
					"102": [
						.19444,
						.69444,
						.21778,
						0,
						.4
					],
					"103": [
						.19444,
						.44444,
						.105,
						0,
						.53222
					],
					"104": [
						0,
						.69444,
						.09426,
						0,
						.59111
					],
					"105": [
						0,
						.69326,
						.11387,
						0,
						.35555
					],
					"106": [
						.19444,
						.69326,
						.1672,
						0,
						.35555
					],
					"107": [
						0,
						.69444,
						.11111,
						0,
						.53222
					],
					"108": [
						0,
						.69444,
						.10861,
						0,
						.29666
					],
					"109": [
						0,
						.44444,
						.09426,
						0,
						.94444
					],
					"110": [
						0,
						.44444,
						.09426,
						0,
						.64999
					],
					"111": [
						0,
						.44444,
						.07861,
						0,
						.59111
					],
					"112": [
						.19444,
						.44444,
						.07861,
						0,
						.59111
					],
					"113": [
						.19444,
						.44444,
						.105,
						0,
						.53222
					],
					"114": [
						0,
						.44444,
						.11111,
						0,
						.50167
					],
					"115": [
						0,
						.44444,
						.08167,
						0,
						.48694
					],
					"116": [
						0,
						.63492,
						.09639,
						0,
						.385
					],
					"117": [
						0,
						.44444,
						.09426,
						0,
						.62055
					],
					"118": [
						0,
						.44444,
						.11111,
						0,
						.53222
					],
					"119": [
						0,
						.44444,
						.11111,
						0,
						.76777
					],
					"120": [
						0,
						.44444,
						.12583,
						0,
						.56055
					],
					"121": [
						.19444,
						.44444,
						.105,
						0,
						.56166
					],
					"122": [
						0,
						.44444,
						.13889,
						0,
						.49055
					],
					"126": [
						.35,
						.34444,
						.11472,
						0,
						.59111
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"168": [
						0,
						.69444,
						.11473,
						0,
						.59111
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.94888
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.53222
					],
					"198": [
						0,
						.68611,
						.11431,
						0,
						1.02277
					],
					"216": [
						.04861,
						.73472,
						.09062,
						0,
						.88555
					],
					"223": [
						.19444,
						.69444,
						.09736,
						0,
						.665
					],
					"230": [
						0,
						.44444,
						.085,
						0,
						.82666
					],
					"248": [
						.09722,
						.54167,
						.09458,
						0,
						.59111
					],
					"305": [
						0,
						.44444,
						.09426,
						0,
						.35555
					],
					"338": [
						0,
						.68611,
						.11431,
						0,
						1.14054
					],
					"339": [
						0,
						.44444,
						.085,
						0,
						.82666
					],
					"567": [
						.19444,
						.44444,
						.04611,
						0,
						.385
					],
					"710": [
						0,
						.69444,
						.06709,
						0,
						.59111
					],
					"711": [
						0,
						.63194,
						.08271,
						0,
						.59111
					],
					"713": [
						0,
						.59444,
						.10444,
						0,
						.59111
					],
					"714": [
						0,
						.69444,
						.08528,
						0,
						.59111
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.59111
					],
					"728": [
						0,
						.69444,
						.10333,
						0,
						.59111
					],
					"729": [
						0,
						.69444,
						.12945,
						0,
						.35555
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.94888
					],
					"732": [
						0,
						.69444,
						.11472,
						0,
						.59111
					],
					"733": [
						0,
						.69444,
						.11472,
						0,
						.59111
					],
					"915": [
						0,
						.68611,
						.12903,
						0,
						.69777
					],
					"916": [
						0,
						.68611,
						0,
						0,
						.94444
					],
					"920": [
						0,
						.68611,
						.09062,
						0,
						.88555
					],
					"923": [
						0,
						.68611,
						0,
						0,
						.80666
					],
					"926": [
						0,
						.68611,
						.15092,
						0,
						.76777
					],
					"928": [
						0,
						.68611,
						.17208,
						0,
						.8961
					],
					"931": [
						0,
						.68611,
						.11431,
						0,
						.82666
					],
					"933": [
						0,
						.68611,
						.10778,
						0,
						.88555
					],
					"934": [
						0,
						.68611,
						.05632,
						0,
						.82666
					],
					"936": [
						0,
						.68611,
						.10778,
						0,
						.88555
					],
					"937": [
						0,
						.68611,
						.0992,
						0,
						.82666
					],
					"8211": [
						0,
						.44444,
						.09811,
						0,
						.59111
					],
					"8212": [
						0,
						.44444,
						.09811,
						0,
						1.18221
					],
					"8216": [
						0,
						.69444,
						.12945,
						0,
						.35555
					],
					"8217": [
						0,
						.69444,
						.12945,
						0,
						.35555
					],
					"8220": [
						0,
						.69444,
						.16772,
						0,
						.62055
					],
					"8221": [
						0,
						.69444,
						.07939,
						0,
						.62055
					]
				},
				"Main-Italic": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						.12417,
						0,
						.30667
					],
					"34": [
						0,
						.69444,
						.06961,
						0,
						.51444
					],
					"35": [
						.19444,
						.69444,
						.06616,
						0,
						.81777
					],
					"37": [
						.05556,
						.75,
						.13639,
						0,
						.81777
					],
					"38": [
						0,
						.69444,
						.09694,
						0,
						.76666
					],
					"39": [
						0,
						.69444,
						.12417,
						0,
						.30667
					],
					"40": [
						.25,
						.75,
						.16194,
						0,
						.40889
					],
					"41": [
						.25,
						.75,
						.03694,
						0,
						.40889
					],
					"42": [
						0,
						.75,
						.14917,
						0,
						.51111
					],
					"43": [
						.05667,
						.56167,
						.03694,
						0,
						.76666
					],
					"44": [
						.19444,
						.10556,
						0,
						0,
						.30667
					],
					"45": [
						0,
						.43056,
						.02826,
						0,
						.35778
					],
					"46": [
						0,
						.10556,
						0,
						0,
						.30667
					],
					"47": [
						.25,
						.75,
						.16194,
						0,
						.51111
					],
					"48": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"49": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"50": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"51": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"52": [
						.19444,
						.64444,
						.13556,
						0,
						.51111
					],
					"53": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"54": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"55": [
						.19444,
						.64444,
						.13556,
						0,
						.51111
					],
					"56": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"57": [
						0,
						.64444,
						.13556,
						0,
						.51111
					],
					"58": [
						0,
						.43056,
						.0582,
						0,
						.30667
					],
					"59": [
						.19444,
						.43056,
						.0582,
						0,
						.30667
					],
					"61": [
						-.13313,
						.36687,
						.06616,
						0,
						.76666
					],
					"63": [
						0,
						.69444,
						.1225,
						0,
						.51111
					],
					"64": [
						0,
						.69444,
						.09597,
						0,
						.76666
					],
					"65": [
						0,
						.68333,
						0,
						0,
						.74333
					],
					"66": [
						0,
						.68333,
						.10257,
						0,
						.70389
					],
					"67": [
						0,
						.68333,
						.14528,
						0,
						.71555
					],
					"68": [
						0,
						.68333,
						.09403,
						0,
						.755
					],
					"69": [
						0,
						.68333,
						.12028,
						0,
						.67833
					],
					"70": [
						0,
						.68333,
						.13305,
						0,
						.65277
					],
					"71": [
						0,
						.68333,
						.08722,
						0,
						.77361
					],
					"72": [
						0,
						.68333,
						.16389,
						0,
						.74333
					],
					"73": [
						0,
						.68333,
						.15806,
						0,
						.38555
					],
					"74": [
						0,
						.68333,
						.14028,
						0,
						.525
					],
					"75": [
						0,
						.68333,
						.14528,
						0,
						.76888
					],
					"76": [
						0,
						.68333,
						0,
						0,
						.62722
					],
					"77": [
						0,
						.68333,
						.16389,
						0,
						.89666
					],
					"78": [
						0,
						.68333,
						.16389,
						0,
						.74333
					],
					"79": [
						0,
						.68333,
						.09403,
						0,
						.76666
					],
					"80": [
						0,
						.68333,
						.10257,
						0,
						.67833
					],
					"81": [
						.19444,
						.68333,
						.09403,
						0,
						.76666
					],
					"82": [
						0,
						.68333,
						.03868,
						0,
						.72944
					],
					"83": [
						0,
						.68333,
						.11972,
						0,
						.56222
					],
					"84": [
						0,
						.68333,
						.13305,
						0,
						.71555
					],
					"85": [
						0,
						.68333,
						.16389,
						0,
						.74333
					],
					"86": [
						0,
						.68333,
						.18361,
						0,
						.74333
					],
					"87": [
						0,
						.68333,
						.18361,
						0,
						.99888
					],
					"88": [
						0,
						.68333,
						.15806,
						0,
						.74333
					],
					"89": [
						0,
						.68333,
						.19383,
						0,
						.74333
					],
					"90": [
						0,
						.68333,
						.14528,
						0,
						.61333
					],
					"91": [
						.25,
						.75,
						.1875,
						0,
						.30667
					],
					"93": [
						.25,
						.75,
						.10528,
						0,
						.30667
					],
					"94": [
						0,
						.69444,
						.06646,
						0,
						.51111
					],
					"95": [
						.31,
						.12056,
						.09208,
						0,
						.51111
					],
					"97": [
						0,
						.43056,
						.07671,
						0,
						.51111
					],
					"98": [
						0,
						.69444,
						.06312,
						0,
						.46
					],
					"99": [
						0,
						.43056,
						.05653,
						0,
						.46
					],
					"100": [
						0,
						.69444,
						.10333,
						0,
						.51111
					],
					"101": [
						0,
						.43056,
						.07514,
						0,
						.46
					],
					"102": [
						.19444,
						.69444,
						.21194,
						0,
						.30667
					],
					"103": [
						.19444,
						.43056,
						.08847,
						0,
						.46
					],
					"104": [
						0,
						.69444,
						.07671,
						0,
						.51111
					],
					"105": [
						0,
						.65536,
						.1019,
						0,
						.30667
					],
					"106": [
						.19444,
						.65536,
						.14467,
						0,
						.30667
					],
					"107": [
						0,
						.69444,
						.10764,
						0,
						.46
					],
					"108": [
						0,
						.69444,
						.10333,
						0,
						.25555
					],
					"109": [
						0,
						.43056,
						.07671,
						0,
						.81777
					],
					"110": [
						0,
						.43056,
						.07671,
						0,
						.56222
					],
					"111": [
						0,
						.43056,
						.06312,
						0,
						.51111
					],
					"112": [
						.19444,
						.43056,
						.06312,
						0,
						.51111
					],
					"113": [
						.19444,
						.43056,
						.08847,
						0,
						.46
					],
					"114": [
						0,
						.43056,
						.10764,
						0,
						.42166
					],
					"115": [
						0,
						.43056,
						.08208,
						0,
						.40889
					],
					"116": [
						0,
						.61508,
						.09486,
						0,
						.33222
					],
					"117": [
						0,
						.43056,
						.07671,
						0,
						.53666
					],
					"118": [
						0,
						.43056,
						.10764,
						0,
						.46
					],
					"119": [
						0,
						.43056,
						.10764,
						0,
						.66444
					],
					"120": [
						0,
						.43056,
						.12042,
						0,
						.46389
					],
					"121": [
						.19444,
						.43056,
						.08847,
						0,
						.48555
					],
					"122": [
						0,
						.43056,
						.12292,
						0,
						.40889
					],
					"126": [
						.35,
						.31786,
						.11585,
						0,
						.51111
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"168": [
						0,
						.66786,
						.10474,
						0,
						.51111
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.83129
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.46
					],
					"198": [
						0,
						.68333,
						.12028,
						0,
						.88277
					],
					"216": [
						.04861,
						.73194,
						.09403,
						0,
						.76666
					],
					"223": [
						.19444,
						.69444,
						.10514,
						0,
						.53666
					],
					"230": [
						0,
						.43056,
						.07514,
						0,
						.71555
					],
					"248": [
						.09722,
						.52778,
						.09194,
						0,
						.51111
					],
					"338": [
						0,
						.68333,
						.12028,
						0,
						.98499
					],
					"339": [
						0,
						.43056,
						.07514,
						0,
						.71555
					],
					"710": [
						0,
						.69444,
						.06646,
						0,
						.51111
					],
					"711": [
						0,
						.62847,
						.08295,
						0,
						.51111
					],
					"713": [
						0,
						.56167,
						.10333,
						0,
						.51111
					],
					"714": [
						0,
						.69444,
						.09694,
						0,
						.51111
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.51111
					],
					"728": [
						0,
						.69444,
						.10806,
						0,
						.51111
					],
					"729": [
						0,
						.66786,
						.11752,
						0,
						.30667
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.83129
					],
					"732": [
						0,
						.66786,
						.11585,
						0,
						.51111
					],
					"733": [
						0,
						.69444,
						.1225,
						0,
						.51111
					],
					"915": [
						0,
						.68333,
						.13305,
						0,
						.62722
					],
					"916": [
						0,
						.68333,
						0,
						0,
						.81777
					],
					"920": [
						0,
						.68333,
						.09403,
						0,
						.76666
					],
					"923": [
						0,
						.68333,
						0,
						0,
						.69222
					],
					"926": [
						0,
						.68333,
						.15294,
						0,
						.66444
					],
					"928": [
						0,
						.68333,
						.16389,
						0,
						.74333
					],
					"931": [
						0,
						.68333,
						.12028,
						0,
						.71555
					],
					"933": [
						0,
						.68333,
						.11111,
						0,
						.76666
					],
					"934": [
						0,
						.68333,
						.05986,
						0,
						.71555
					],
					"936": [
						0,
						.68333,
						.11111,
						0,
						.76666
					],
					"937": [
						0,
						.68333,
						.10257,
						0,
						.71555
					],
					"8211": [
						0,
						.43056,
						.09208,
						0,
						.51111
					],
					"8212": [
						0,
						.43056,
						.09208,
						0,
						1.02222
					],
					"8216": [
						0,
						.69444,
						.12417,
						0,
						.30667
					],
					"8217": [
						0,
						.69444,
						.12417,
						0,
						.30667
					],
					"8220": [
						0,
						.69444,
						.1685,
						0,
						.51444
					],
					"8221": [
						0,
						.69444,
						.06961,
						0,
						.51444
					],
					"8463": [
						0,
						.68889,
						0,
						0,
						.54028
					]
				},
				"Main-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"34": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"35": [
						.19444,
						.69444,
						0,
						0,
						.83334
					],
					"36": [
						.05556,
						.75,
						0,
						0,
						.5
					],
					"37": [
						.05556,
						.75,
						0,
						0,
						.83334
					],
					"38": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"39": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"40": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"41": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"42": [
						0,
						.75,
						0,
						0,
						.5
					],
					"43": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"44": [
						.19444,
						.10556,
						0,
						0,
						.27778
					],
					"45": [
						0,
						.43056,
						0,
						0,
						.33333
					],
					"46": [
						0,
						.10556,
						0,
						0,
						.27778
					],
					"47": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"48": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"49": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"50": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"51": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"52": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"53": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"54": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"55": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"56": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"57": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"58": [
						0,
						.43056,
						0,
						0,
						.27778
					],
					"59": [
						.19444,
						.43056,
						0,
						0,
						.27778
					],
					"60": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"61": [
						-.13313,
						.36687,
						0,
						0,
						.77778
					],
					"62": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"63": [
						0,
						.69444,
						0,
						0,
						.47222
					],
					"64": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"65": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"66": [
						0,
						.68333,
						0,
						0,
						.70834
					],
					"67": [
						0,
						.68333,
						0,
						0,
						.72222
					],
					"68": [
						0,
						.68333,
						0,
						0,
						.76389
					],
					"69": [
						0,
						.68333,
						0,
						0,
						.68056
					],
					"70": [
						0,
						.68333,
						0,
						0,
						.65278
					],
					"71": [
						0,
						.68333,
						0,
						0,
						.78472
					],
					"72": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"73": [
						0,
						.68333,
						0,
						0,
						.36111
					],
					"74": [
						0,
						.68333,
						0,
						0,
						.51389
					],
					"75": [
						0,
						.68333,
						0,
						0,
						.77778
					],
					"76": [
						0,
						.68333,
						0,
						0,
						.625
					],
					"77": [
						0,
						.68333,
						0,
						0,
						.91667
					],
					"78": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"79": [
						0,
						.68333,
						0,
						0,
						.77778
					],
					"80": [
						0,
						.68333,
						0,
						0,
						.68056
					],
					"81": [
						.19444,
						.68333,
						0,
						0,
						.77778
					],
					"82": [
						0,
						.68333,
						0,
						0,
						.73611
					],
					"83": [
						0,
						.68333,
						0,
						0,
						.55556
					],
					"84": [
						0,
						.68333,
						0,
						0,
						.72222
					],
					"85": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"86": [
						0,
						.68333,
						.01389,
						0,
						.75
					],
					"87": [
						0,
						.68333,
						.01389,
						0,
						1.02778
					],
					"88": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"89": [
						0,
						.68333,
						.025,
						0,
						.75
					],
					"90": [
						0,
						.68333,
						0,
						0,
						.61111
					],
					"91": [
						.25,
						.75,
						0,
						0,
						.27778
					],
					"92": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"93": [
						.25,
						.75,
						0,
						0,
						.27778
					],
					"94": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"95": [
						.31,
						.12056,
						.02778,
						0,
						.5
					],
					"97": [
						0,
						.43056,
						0,
						0,
						.5
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"99": [
						0,
						.43056,
						0,
						0,
						.44445
					],
					"100": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"101": [
						0,
						.43056,
						0,
						0,
						.44445
					],
					"102": [
						0,
						.69444,
						.07778,
						0,
						.30556
					],
					"103": [
						.19444,
						.43056,
						.01389,
						0,
						.5
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"105": [
						0,
						.66786,
						0,
						0,
						.27778
					],
					"106": [
						.19444,
						.66786,
						0,
						0,
						.30556
					],
					"107": [
						0,
						.69444,
						0,
						0,
						.52778
					],
					"108": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"109": [
						0,
						.43056,
						0,
						0,
						.83334
					],
					"110": [
						0,
						.43056,
						0,
						0,
						.55556
					],
					"111": [
						0,
						.43056,
						0,
						0,
						.5
					],
					"112": [
						.19444,
						.43056,
						0,
						0,
						.55556
					],
					"113": [
						.19444,
						.43056,
						0,
						0,
						.52778
					],
					"114": [
						0,
						.43056,
						0,
						0,
						.39167
					],
					"115": [
						0,
						.43056,
						0,
						0,
						.39445
					],
					"116": [
						0,
						.61508,
						0,
						0,
						.38889
					],
					"117": [
						0,
						.43056,
						0,
						0,
						.55556
					],
					"118": [
						0,
						.43056,
						.01389,
						0,
						.52778
					],
					"119": [
						0,
						.43056,
						.01389,
						0,
						.72222
					],
					"120": [
						0,
						.43056,
						0,
						0,
						.52778
					],
					"121": [
						.19444,
						.43056,
						.01389,
						0,
						.52778
					],
					"122": [
						0,
						.43056,
						0,
						0,
						.44445
					],
					"123": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"124": [
						.25,
						.75,
						0,
						0,
						.27778
					],
					"125": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"126": [
						.35,
						.31786,
						0,
						0,
						.5
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"163": [
						0,
						.69444,
						0,
						0,
						.76909
					],
					"167": [
						.19444,
						.69444,
						0,
						0,
						.44445
					],
					"168": [
						0,
						.66786,
						0,
						0,
						.5
					],
					"172": [
						0,
						.43056,
						0,
						0,
						.66667
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.75
					],
					"177": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"182": [
						.19444,
						.69444,
						0,
						0,
						.61111
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.44445
					],
					"198": [
						0,
						.68333,
						0,
						0,
						.90278
					],
					"215": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"216": [
						.04861,
						.73194,
						0,
						0,
						.77778
					],
					"223": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"230": [
						0,
						.43056,
						0,
						0,
						.72222
					],
					"247": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"248": [
						.09722,
						.52778,
						0,
						0,
						.5
					],
					"305": [
						0,
						.43056,
						0,
						0,
						.27778
					],
					"338": [
						0,
						.68333,
						0,
						0,
						1.01389
					],
					"339": [
						0,
						.43056,
						0,
						0,
						.77778
					],
					"567": [
						.19444,
						.43056,
						0,
						0,
						.30556
					],
					"710": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"711": [
						0,
						.62847,
						0,
						0,
						.5
					],
					"713": [
						0,
						.56778,
						0,
						0,
						.5
					],
					"714": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"728": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"729": [
						0,
						.66786,
						0,
						0,
						.27778
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.75
					],
					"732": [
						0,
						.66786,
						0,
						0,
						.5
					],
					"733": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"915": [
						0,
						.68333,
						0,
						0,
						.625
					],
					"916": [
						0,
						.68333,
						0,
						0,
						.83334
					],
					"920": [
						0,
						.68333,
						0,
						0,
						.77778
					],
					"923": [
						0,
						.68333,
						0,
						0,
						.69445
					],
					"926": [
						0,
						.68333,
						0,
						0,
						.66667
					],
					"928": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"931": [
						0,
						.68333,
						0,
						0,
						.72222
					],
					"933": [
						0,
						.68333,
						0,
						0,
						.77778
					],
					"934": [
						0,
						.68333,
						0,
						0,
						.72222
					],
					"936": [
						0,
						.68333,
						0,
						0,
						.77778
					],
					"937": [
						0,
						.68333,
						0,
						0,
						.72222
					],
					"8211": [
						0,
						.43056,
						.02778,
						0,
						.5
					],
					"8212": [
						0,
						.43056,
						.02778,
						0,
						1
					],
					"8216": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"8217": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"8220": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"8221": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"8224": [
						.19444,
						.69444,
						0,
						0,
						.44445
					],
					"8225": [
						.19444,
						.69444,
						0,
						0,
						.44445
					],
					"8230": [
						0,
						.123,
						0,
						0,
						1.172
					],
					"8242": [
						0,
						.55556,
						0,
						0,
						.275
					],
					"8407": [
						0,
						.71444,
						.15382,
						0,
						.5
					],
					"8463": [
						0,
						.68889,
						0,
						0,
						.54028
					],
					"8465": [
						0,
						.69444,
						0,
						0,
						.72222
					],
					"8467": [
						0,
						.69444,
						0,
						.11111,
						.41667
					],
					"8472": [
						.19444,
						.43056,
						0,
						.11111,
						.63646
					],
					"8476": [
						0,
						.69444,
						0,
						0,
						.72222
					],
					"8501": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"8592": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8593": [
						.19444,
						.69444,
						0,
						0,
						.5
					],
					"8594": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8595": [
						.19444,
						.69444,
						0,
						0,
						.5
					],
					"8596": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8597": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"8598": [
						.19444,
						.69444,
						0,
						0,
						1
					],
					"8599": [
						.19444,
						.69444,
						0,
						0,
						1
					],
					"8600": [
						.19444,
						.69444,
						0,
						0,
						1
					],
					"8601": [
						.19444,
						.69444,
						0,
						0,
						1
					],
					"8614": [
						.011,
						.511,
						0,
						0,
						1
					],
					"8617": [
						.011,
						.511,
						0,
						0,
						1.126
					],
					"8618": [
						.011,
						.511,
						0,
						0,
						1.126
					],
					"8636": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8637": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8640": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8641": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8652": [
						.011,
						.671,
						0,
						0,
						1
					],
					"8656": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8657": [
						.19444,
						.69444,
						0,
						0,
						.61111
					],
					"8658": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8659": [
						.19444,
						.69444,
						0,
						0,
						.61111
					],
					"8660": [
						-.13313,
						.36687,
						0,
						0,
						1
					],
					"8661": [
						.25,
						.75,
						0,
						0,
						.61111
					],
					"8704": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"8706": [
						0,
						.69444,
						.05556,
						.08334,
						.5309
					],
					"8707": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"8709": [
						.05556,
						.75,
						0,
						0,
						.5
					],
					"8711": [
						0,
						.68333,
						0,
						0,
						.83334
					],
					"8712": [
						.0391,
						.5391,
						0,
						0,
						.66667
					],
					"8715": [
						.0391,
						.5391,
						0,
						0,
						.66667
					],
					"8722": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8723": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8725": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"8726": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"8727": [
						-.03472,
						.46528,
						0,
						0,
						.5
					],
					"8728": [
						-.05555,
						.44445,
						0,
						0,
						.5
					],
					"8729": [
						-.05555,
						.44445,
						0,
						0,
						.5
					],
					"8730": [
						.2,
						.8,
						0,
						0,
						.83334
					],
					"8733": [
						0,
						.43056,
						0,
						0,
						.77778
					],
					"8734": [
						0,
						.43056,
						0,
						0,
						1
					],
					"8736": [
						0,
						.69224,
						0,
						0,
						.72222
					],
					"8739": [
						.25,
						.75,
						0,
						0,
						.27778
					],
					"8741": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"8743": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8744": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8745": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8746": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8747": [
						.19444,
						.69444,
						.11111,
						0,
						.41667
					],
					"8764": [
						-.13313,
						.36687,
						0,
						0,
						.77778
					],
					"8768": [
						.19444,
						.69444,
						0,
						0,
						.27778
					],
					"8771": [
						-.03625,
						.46375,
						0,
						0,
						.77778
					],
					"8773": [
						-.022,
						.589,
						0,
						0,
						.778
					],
					"8776": [
						-.01688,
						.48312,
						0,
						0,
						.77778
					],
					"8781": [
						-.03625,
						.46375,
						0,
						0,
						.77778
					],
					"8784": [
						-.133,
						.673,
						0,
						0,
						.778
					],
					"8801": [
						-.03625,
						.46375,
						0,
						0,
						.77778
					],
					"8804": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8805": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8810": [
						.0391,
						.5391,
						0,
						0,
						1
					],
					"8811": [
						.0391,
						.5391,
						0,
						0,
						1
					],
					"8826": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8827": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8834": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8835": [
						.0391,
						.5391,
						0,
						0,
						.77778
					],
					"8838": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8839": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8846": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8849": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8850": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"8851": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8852": [
						0,
						.55556,
						0,
						0,
						.66667
					],
					"8853": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8854": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8855": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8856": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8857": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"8866": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"8867": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"8868": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"8869": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"8872": [
						.249,
						.75,
						0,
						0,
						.867
					],
					"8900": [
						-.05555,
						.44445,
						0,
						0,
						.5
					],
					"8901": [
						-.05555,
						.44445,
						0,
						0,
						.27778
					],
					"8902": [
						-.03472,
						.46528,
						0,
						0,
						.5
					],
					"8904": [
						.005,
						.505,
						0,
						0,
						.9
					],
					"8942": [
						.03,
						.903,
						0,
						0,
						.278
					],
					"8943": [
						-.19,
						.313,
						0,
						0,
						1.172
					],
					"8945": [
						-.1,
						.823,
						0,
						0,
						1.282
					],
					"8968": [
						.25,
						.75,
						0,
						0,
						.44445
					],
					"8969": [
						.25,
						.75,
						0,
						0,
						.44445
					],
					"8970": [
						.25,
						.75,
						0,
						0,
						.44445
					],
					"8971": [
						.25,
						.75,
						0,
						0,
						.44445
					],
					"8994": [
						-.14236,
						.35764,
						0,
						0,
						1
					],
					"8995": [
						-.14236,
						.35764,
						0,
						0,
						1
					],
					"9136": [
						.244,
						.744,
						0,
						0,
						.412
					],
					"9137": [
						.244,
						.745,
						0,
						0,
						.412
					],
					"9651": [
						.19444,
						.69444,
						0,
						0,
						.88889
					],
					"9657": [
						-.03472,
						.46528,
						0,
						0,
						.5
					],
					"9661": [
						.19444,
						.69444,
						0,
						0,
						.88889
					],
					"9667": [
						-.03472,
						.46528,
						0,
						0,
						.5
					],
					"9711": [
						.19444,
						.69444,
						0,
						0,
						1
					],
					"9824": [
						.12963,
						.69444,
						0,
						0,
						.77778
					],
					"9825": [
						.12963,
						.69444,
						0,
						0,
						.77778
					],
					"9826": [
						.12963,
						.69444,
						0,
						0,
						.77778
					],
					"9827": [
						.12963,
						.69444,
						0,
						0,
						.77778
					],
					"9837": [
						0,
						.75,
						0,
						0,
						.38889
					],
					"9838": [
						.19444,
						.69444,
						0,
						0,
						.38889
					],
					"9839": [
						.19444,
						.69444,
						0,
						0,
						.38889
					],
					"10216": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"10217": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"10222": [
						.244,
						.744,
						0,
						0,
						.412
					],
					"10223": [
						.244,
						.745,
						0,
						0,
						.412
					],
					"10229": [
						.011,
						.511,
						0,
						0,
						1.609
					],
					"10230": [
						.011,
						.511,
						0,
						0,
						1.638
					],
					"10231": [
						.011,
						.511,
						0,
						0,
						1.859
					],
					"10232": [
						.024,
						.525,
						0,
						0,
						1.609
					],
					"10233": [
						.024,
						.525,
						0,
						0,
						1.638
					],
					"10234": [
						.024,
						.525,
						0,
						0,
						1.858
					],
					"10236": [
						.011,
						.511,
						0,
						0,
						1.638
					],
					"10815": [
						0,
						.68333,
						0,
						0,
						.75
					],
					"10927": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"10928": [
						.13597,
						.63597,
						0,
						0,
						.77778
					],
					"57376": [
						.19444,
						.69444,
						0,
						0,
						0
					]
				},
				"Math-BoldItalic": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"48": [
						0,
						.44444,
						0,
						0,
						.575
					],
					"49": [
						0,
						.44444,
						0,
						0,
						.575
					],
					"50": [
						0,
						.44444,
						0,
						0,
						.575
					],
					"51": [
						.19444,
						.44444,
						0,
						0,
						.575
					],
					"52": [
						.19444,
						.44444,
						0,
						0,
						.575
					],
					"53": [
						.19444,
						.44444,
						0,
						0,
						.575
					],
					"54": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"55": [
						.19444,
						.44444,
						0,
						0,
						.575
					],
					"56": [
						0,
						.64444,
						0,
						0,
						.575
					],
					"57": [
						.19444,
						.44444,
						0,
						0,
						.575
					],
					"65": [
						0,
						.68611,
						0,
						0,
						.86944
					],
					"66": [
						0,
						.68611,
						.04835,
						0,
						.8664
					],
					"67": [
						0,
						.68611,
						.06979,
						0,
						.81694
					],
					"68": [
						0,
						.68611,
						.03194,
						0,
						.93812
					],
					"69": [
						0,
						.68611,
						.05451,
						0,
						.81007
					],
					"70": [
						0,
						.68611,
						.15972,
						0,
						.68889
					],
					"71": [
						0,
						.68611,
						0,
						0,
						.88673
					],
					"72": [
						0,
						.68611,
						.08229,
						0,
						.98229
					],
					"73": [
						0,
						.68611,
						.07778,
						0,
						.51111
					],
					"74": [
						0,
						.68611,
						.10069,
						0,
						.63125
					],
					"75": [
						0,
						.68611,
						.06979,
						0,
						.97118
					],
					"76": [
						0,
						.68611,
						0,
						0,
						.75555
					],
					"77": [
						0,
						.68611,
						.11424,
						0,
						1.14201
					],
					"78": [
						0,
						.68611,
						.11424,
						0,
						.95034
					],
					"79": [
						0,
						.68611,
						.03194,
						0,
						.83666
					],
					"80": [
						0,
						.68611,
						.15972,
						0,
						.72309
					],
					"81": [
						.19444,
						.68611,
						0,
						0,
						.86861
					],
					"82": [
						0,
						.68611,
						.00421,
						0,
						.87235
					],
					"83": [
						0,
						.68611,
						.05382,
						0,
						.69271
					],
					"84": [
						0,
						.68611,
						.15972,
						0,
						.63663
					],
					"85": [
						0,
						.68611,
						.11424,
						0,
						.80027
					],
					"86": [
						0,
						.68611,
						.25555,
						0,
						.67778
					],
					"87": [
						0,
						.68611,
						.15972,
						0,
						1.09305
					],
					"88": [
						0,
						.68611,
						.07778,
						0,
						.94722
					],
					"89": [
						0,
						.68611,
						.25555,
						0,
						.67458
					],
					"90": [
						0,
						.68611,
						.06979,
						0,
						.77257
					],
					"97": [
						0,
						.44444,
						0,
						0,
						.63287
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.52083
					],
					"99": [
						0,
						.44444,
						0,
						0,
						.51342
					],
					"100": [
						0,
						.69444,
						0,
						0,
						.60972
					],
					"101": [
						0,
						.44444,
						0,
						0,
						.55361
					],
					"102": [
						.19444,
						.69444,
						.11042,
						0,
						.56806
					],
					"103": [
						.19444,
						.44444,
						.03704,
						0,
						.5449
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.66759
					],
					"105": [
						0,
						.69326,
						0,
						0,
						.4048
					],
					"106": [
						.19444,
						.69326,
						.0622,
						0,
						.47083
					],
					"107": [
						0,
						.69444,
						.01852,
						0,
						.6037
					],
					"108": [
						0,
						.69444,
						.0088,
						0,
						.34815
					],
					"109": [
						0,
						.44444,
						0,
						0,
						1.0324
					],
					"110": [
						0,
						.44444,
						0,
						0,
						.71296
					],
					"111": [
						0,
						.44444,
						0,
						0,
						.58472
					],
					"112": [
						.19444,
						.44444,
						0,
						0,
						.60092
					],
					"113": [
						.19444,
						.44444,
						.03704,
						0,
						.54213
					],
					"114": [
						0,
						.44444,
						.03194,
						0,
						.5287
					],
					"115": [
						0,
						.44444,
						0,
						0,
						.53125
					],
					"116": [
						0,
						.63492,
						0,
						0,
						.41528
					],
					"117": [
						0,
						.44444,
						0,
						0,
						.68102
					],
					"118": [
						0,
						.44444,
						.03704,
						0,
						.56666
					],
					"119": [
						0,
						.44444,
						.02778,
						0,
						.83148
					],
					"120": [
						0,
						.44444,
						0,
						0,
						.65903
					],
					"121": [
						.19444,
						.44444,
						.03704,
						0,
						.59028
					],
					"122": [
						0,
						.44444,
						.04213,
						0,
						.55509
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"915": [
						0,
						.68611,
						.15972,
						0,
						.65694
					],
					"916": [
						0,
						.68611,
						0,
						0,
						.95833
					],
					"920": [
						0,
						.68611,
						.03194,
						0,
						.86722
					],
					"923": [
						0,
						.68611,
						0,
						0,
						.80555
					],
					"926": [
						0,
						.68611,
						.07458,
						0,
						.84125
					],
					"928": [
						0,
						.68611,
						.08229,
						0,
						.98229
					],
					"931": [
						0,
						.68611,
						.05451,
						0,
						.88507
					],
					"933": [
						0,
						.68611,
						.15972,
						0,
						.67083
					],
					"934": [
						0,
						.68611,
						0,
						0,
						.76666
					],
					"936": [
						0,
						.68611,
						.11653,
						0,
						.71402
					],
					"937": [
						0,
						.68611,
						.04835,
						0,
						.8789
					],
					"945": [
						0,
						.44444,
						0,
						0,
						.76064
					],
					"946": [
						.19444,
						.69444,
						.03403,
						0,
						.65972
					],
					"947": [
						.19444,
						.44444,
						.06389,
						0,
						.59003
					],
					"948": [
						0,
						.69444,
						.03819,
						0,
						.52222
					],
					"949": [
						0,
						.44444,
						0,
						0,
						.52882
					],
					"950": [
						.19444,
						.69444,
						.06215,
						0,
						.50833
					],
					"951": [
						.19444,
						.44444,
						.03704,
						0,
						.6
					],
					"952": [
						0,
						.69444,
						.03194,
						0,
						.5618
					],
					"953": [
						0,
						.44444,
						0,
						0,
						.41204
					],
					"954": [
						0,
						.44444,
						0,
						0,
						.66759
					],
					"955": [
						0,
						.69444,
						0,
						0,
						.67083
					],
					"956": [
						.19444,
						.44444,
						0,
						0,
						.70787
					],
					"957": [
						0,
						.44444,
						.06898,
						0,
						.57685
					],
					"958": [
						.19444,
						.69444,
						.03021,
						0,
						.50833
					],
					"959": [
						0,
						.44444,
						0,
						0,
						.58472
					],
					"960": [
						0,
						.44444,
						.03704,
						0,
						.68241
					],
					"961": [
						.19444,
						.44444,
						0,
						0,
						.6118
					],
					"962": [
						.09722,
						.44444,
						.07917,
						0,
						.42361
					],
					"963": [
						0,
						.44444,
						.03704,
						0,
						.68588
					],
					"964": [
						0,
						.44444,
						.13472,
						0,
						.52083
					],
					"965": [
						0,
						.44444,
						.03704,
						0,
						.63055
					],
					"966": [
						.19444,
						.44444,
						0,
						0,
						.74722
					],
					"967": [
						.19444,
						.44444,
						0,
						0,
						.71805
					],
					"968": [
						.19444,
						.69444,
						.03704,
						0,
						.75833
					],
					"969": [
						0,
						.44444,
						.03704,
						0,
						.71782
					],
					"977": [
						0,
						.69444,
						0,
						0,
						.69155
					],
					"981": [
						.19444,
						.69444,
						0,
						0,
						.7125
					],
					"982": [
						0,
						.44444,
						.03194,
						0,
						.975
					],
					"1009": [
						.19444,
						.44444,
						0,
						0,
						.6118
					],
					"1013": [
						0,
						.44444,
						0,
						0,
						.48333
					],
					"57649": [
						0,
						.44444,
						0,
						0,
						.39352
					],
					"57911": [
						.19444,
						.44444,
						0,
						0,
						.43889
					]
				},
				"Math-Italic": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"48": [
						0,
						.43056,
						0,
						0,
						.5
					],
					"49": [
						0,
						.43056,
						0,
						0,
						.5
					],
					"50": [
						0,
						.43056,
						0,
						0,
						.5
					],
					"51": [
						.19444,
						.43056,
						0,
						0,
						.5
					],
					"52": [
						.19444,
						.43056,
						0,
						0,
						.5
					],
					"53": [
						.19444,
						.43056,
						0,
						0,
						.5
					],
					"54": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"55": [
						.19444,
						.43056,
						0,
						0,
						.5
					],
					"56": [
						0,
						.64444,
						0,
						0,
						.5
					],
					"57": [
						.19444,
						.43056,
						0,
						0,
						.5
					],
					"65": [
						0,
						.68333,
						0,
						.13889,
						.75
					],
					"66": [
						0,
						.68333,
						.05017,
						.08334,
						.75851
					],
					"67": [
						0,
						.68333,
						.07153,
						.08334,
						.71472
					],
					"68": [
						0,
						.68333,
						.02778,
						.05556,
						.82792
					],
					"69": [
						0,
						.68333,
						.05764,
						.08334,
						.7382
					],
					"70": [
						0,
						.68333,
						.13889,
						.08334,
						.64306
					],
					"71": [
						0,
						.68333,
						0,
						.08334,
						.78625
					],
					"72": [
						0,
						.68333,
						.08125,
						.05556,
						.83125
					],
					"73": [
						0,
						.68333,
						.07847,
						.11111,
						.43958
					],
					"74": [
						0,
						.68333,
						.09618,
						.16667,
						.55451
					],
					"75": [
						0,
						.68333,
						.07153,
						.05556,
						.84931
					],
					"76": [
						0,
						.68333,
						0,
						.02778,
						.68056
					],
					"77": [
						0,
						.68333,
						.10903,
						.08334,
						.97014
					],
					"78": [
						0,
						.68333,
						.10903,
						.08334,
						.80347
					],
					"79": [
						0,
						.68333,
						.02778,
						.08334,
						.76278
					],
					"80": [
						0,
						.68333,
						.13889,
						.08334,
						.64201
					],
					"81": [
						.19444,
						.68333,
						0,
						.08334,
						.79056
					],
					"82": [
						0,
						.68333,
						.00773,
						.08334,
						.75929
					],
					"83": [
						0,
						.68333,
						.05764,
						.08334,
						.6132
					],
					"84": [
						0,
						.68333,
						.13889,
						.08334,
						.58438
					],
					"85": [
						0,
						.68333,
						.10903,
						.02778,
						.68278
					],
					"86": [
						0,
						.68333,
						.22222,
						0,
						.58333
					],
					"87": [
						0,
						.68333,
						.13889,
						0,
						.94445
					],
					"88": [
						0,
						.68333,
						.07847,
						.08334,
						.82847
					],
					"89": [
						0,
						.68333,
						.22222,
						0,
						.58056
					],
					"90": [
						0,
						.68333,
						.07153,
						.08334,
						.68264
					],
					"97": [
						0,
						.43056,
						0,
						0,
						.52859
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.42917
					],
					"99": [
						0,
						.43056,
						0,
						.05556,
						.43276
					],
					"100": [
						0,
						.69444,
						0,
						.16667,
						.52049
					],
					"101": [
						0,
						.43056,
						0,
						.05556,
						.46563
					],
					"102": [
						.19444,
						.69444,
						.10764,
						.16667,
						.48959
					],
					"103": [
						.19444,
						.43056,
						.03588,
						.02778,
						.47697
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.57616
					],
					"105": [
						0,
						.65952,
						0,
						0,
						.34451
					],
					"106": [
						.19444,
						.65952,
						.05724,
						0,
						.41181
					],
					"107": [
						0,
						.69444,
						.03148,
						0,
						.5206
					],
					"108": [
						0,
						.69444,
						.01968,
						.08334,
						.29838
					],
					"109": [
						0,
						.43056,
						0,
						0,
						.87801
					],
					"110": [
						0,
						.43056,
						0,
						0,
						.60023
					],
					"111": [
						0,
						.43056,
						0,
						.05556,
						.48472
					],
					"112": [
						.19444,
						.43056,
						0,
						.08334,
						.50313
					],
					"113": [
						.19444,
						.43056,
						.03588,
						.08334,
						.44641
					],
					"114": [
						0,
						.43056,
						.02778,
						.05556,
						.45116
					],
					"115": [
						0,
						.43056,
						0,
						.05556,
						.46875
					],
					"116": [
						0,
						.61508,
						0,
						.08334,
						.36111
					],
					"117": [
						0,
						.43056,
						0,
						.02778,
						.57246
					],
					"118": [
						0,
						.43056,
						.03588,
						.02778,
						.48472
					],
					"119": [
						0,
						.43056,
						.02691,
						.08334,
						.71592
					],
					"120": [
						0,
						.43056,
						0,
						.02778,
						.57153
					],
					"121": [
						.19444,
						.43056,
						.03588,
						.05556,
						.49028
					],
					"122": [
						0,
						.43056,
						.04398,
						.05556,
						.46505
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"915": [
						0,
						.68333,
						.13889,
						.08334,
						.61528
					],
					"916": [
						0,
						.68333,
						0,
						.16667,
						.83334
					],
					"920": [
						0,
						.68333,
						.02778,
						.08334,
						.76278
					],
					"923": [
						0,
						.68333,
						0,
						.16667,
						.69445
					],
					"926": [
						0,
						.68333,
						.07569,
						.08334,
						.74236
					],
					"928": [
						0,
						.68333,
						.08125,
						.05556,
						.83125
					],
					"931": [
						0,
						.68333,
						.05764,
						.08334,
						.77986
					],
					"933": [
						0,
						.68333,
						.13889,
						.05556,
						.58333
					],
					"934": [
						0,
						.68333,
						0,
						.08334,
						.66667
					],
					"936": [
						0,
						.68333,
						.11,
						.05556,
						.61222
					],
					"937": [
						0,
						.68333,
						.05017,
						.08334,
						.7724
					],
					"945": [
						0,
						.43056,
						.0037,
						.02778,
						.6397
					],
					"946": [
						.19444,
						.69444,
						.05278,
						.08334,
						.56563
					],
					"947": [
						.19444,
						.43056,
						.05556,
						0,
						.51773
					],
					"948": [
						0,
						.69444,
						.03785,
						.05556,
						.44444
					],
					"949": [
						0,
						.43056,
						0,
						.08334,
						.46632
					],
					"950": [
						.19444,
						.69444,
						.07378,
						.08334,
						.4375
					],
					"951": [
						.19444,
						.43056,
						.03588,
						.05556,
						.49653
					],
					"952": [
						0,
						.69444,
						.02778,
						.08334,
						.46944
					],
					"953": [
						0,
						.43056,
						0,
						.05556,
						.35394
					],
					"954": [
						0,
						.43056,
						0,
						0,
						.57616
					],
					"955": [
						0,
						.69444,
						0,
						0,
						.58334
					],
					"956": [
						.19444,
						.43056,
						0,
						.02778,
						.60255
					],
					"957": [
						0,
						.43056,
						.06366,
						.02778,
						.49398
					],
					"958": [
						.19444,
						.69444,
						.04601,
						.11111,
						.4375
					],
					"959": [
						0,
						.43056,
						0,
						.05556,
						.48472
					],
					"960": [
						0,
						.43056,
						.03588,
						0,
						.57003
					],
					"961": [
						.19444,
						.43056,
						0,
						.08334,
						.51702
					],
					"962": [
						.09722,
						.43056,
						.07986,
						.08334,
						.36285
					],
					"963": [
						0,
						.43056,
						.03588,
						0,
						.57141
					],
					"964": [
						0,
						.43056,
						.1132,
						.02778,
						.43715
					],
					"965": [
						0,
						.43056,
						.03588,
						.02778,
						.54028
					],
					"966": [
						.19444,
						.43056,
						0,
						.08334,
						.65417
					],
					"967": [
						.19444,
						.43056,
						0,
						.05556,
						.62569
					],
					"968": [
						.19444,
						.69444,
						.03588,
						.11111,
						.65139
					],
					"969": [
						0,
						.43056,
						.03588,
						0,
						.62245
					],
					"977": [
						0,
						.69444,
						0,
						.08334,
						.59144
					],
					"981": [
						.19444,
						.69444,
						0,
						.08334,
						.59583
					],
					"982": [
						0,
						.43056,
						.02778,
						0,
						.82813
					],
					"1009": [
						.19444,
						.43056,
						0,
						.08334,
						.51702
					],
					"1013": [
						0,
						.43056,
						0,
						.05556,
						.4059
					],
					"57649": [
						0,
						.43056,
						0,
						.02778,
						.32246
					],
					"57911": [
						.19444,
						.43056,
						0,
						.08334,
						.38403
					]
				},
				"SansSerif-Bold": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						0,
						0,
						.36667
					],
					"34": [
						0,
						.69444,
						0,
						0,
						.55834
					],
					"35": [
						.19444,
						.69444,
						0,
						0,
						.91667
					],
					"36": [
						.05556,
						.75,
						0,
						0,
						.55
					],
					"37": [
						.05556,
						.75,
						0,
						0,
						1.02912
					],
					"38": [
						0,
						.69444,
						0,
						0,
						.83056
					],
					"39": [
						0,
						.69444,
						0,
						0,
						.30556
					],
					"40": [
						.25,
						.75,
						0,
						0,
						.42778
					],
					"41": [
						.25,
						.75,
						0,
						0,
						.42778
					],
					"42": [
						0,
						.75,
						0,
						0,
						.55
					],
					"43": [
						.11667,
						.61667,
						0,
						0,
						.85556
					],
					"44": [
						.10556,
						.13056,
						0,
						0,
						.30556
					],
					"45": [
						0,
						.45833,
						0,
						0,
						.36667
					],
					"46": [
						0,
						.13056,
						0,
						0,
						.30556
					],
					"47": [
						.25,
						.75,
						0,
						0,
						.55
					],
					"48": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"49": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"50": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"51": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"52": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"53": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"54": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"55": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"56": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"57": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"58": [
						0,
						.45833,
						0,
						0,
						.30556
					],
					"59": [
						.10556,
						.45833,
						0,
						0,
						.30556
					],
					"61": [
						-.09375,
						.40625,
						0,
						0,
						.85556
					],
					"63": [
						0,
						.69444,
						0,
						0,
						.51945
					],
					"64": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"65": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"66": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"67": [
						0,
						.69444,
						0,
						0,
						.70278
					],
					"68": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"69": [
						0,
						.69444,
						0,
						0,
						.64167
					],
					"70": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"71": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"72": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"73": [
						0,
						.69444,
						0,
						0,
						.33056
					],
					"74": [
						0,
						.69444,
						0,
						0,
						.51945
					],
					"75": [
						0,
						.69444,
						0,
						0,
						.76389
					],
					"76": [
						0,
						.69444,
						0,
						0,
						.58056
					],
					"77": [
						0,
						.69444,
						0,
						0,
						.97778
					],
					"78": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"79": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"80": [
						0,
						.69444,
						0,
						0,
						.70278
					],
					"81": [
						.10556,
						.69444,
						0,
						0,
						.79445
					],
					"82": [
						0,
						.69444,
						0,
						0,
						.70278
					],
					"83": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"84": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"85": [
						0,
						.69444,
						0,
						0,
						.76389
					],
					"86": [
						0,
						.69444,
						.01528,
						0,
						.73334
					],
					"87": [
						0,
						.69444,
						.01528,
						0,
						1.03889
					],
					"88": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"89": [
						0,
						.69444,
						.0275,
						0,
						.73334
					],
					"90": [
						0,
						.69444,
						0,
						0,
						.67223
					],
					"91": [
						.25,
						.75,
						0,
						0,
						.34306
					],
					"93": [
						.25,
						.75,
						0,
						0,
						.34306
					],
					"94": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"95": [
						.35,
						.10833,
						.03056,
						0,
						.55
					],
					"97": [
						0,
						.45833,
						0,
						0,
						.525
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.56111
					],
					"99": [
						0,
						.45833,
						0,
						0,
						.48889
					],
					"100": [
						0,
						.69444,
						0,
						0,
						.56111
					],
					"101": [
						0,
						.45833,
						0,
						0,
						.51111
					],
					"102": [
						0,
						.69444,
						.07639,
						0,
						.33611
					],
					"103": [
						.19444,
						.45833,
						.01528,
						0,
						.55
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.56111
					],
					"105": [
						0,
						.69444,
						0,
						0,
						.25556
					],
					"106": [
						.19444,
						.69444,
						0,
						0,
						.28611
					],
					"107": [
						0,
						.69444,
						0,
						0,
						.53056
					],
					"108": [
						0,
						.69444,
						0,
						0,
						.25556
					],
					"109": [
						0,
						.45833,
						0,
						0,
						.86667
					],
					"110": [
						0,
						.45833,
						0,
						0,
						.56111
					],
					"111": [
						0,
						.45833,
						0,
						0,
						.55
					],
					"112": [
						.19444,
						.45833,
						0,
						0,
						.56111
					],
					"113": [
						.19444,
						.45833,
						0,
						0,
						.56111
					],
					"114": [
						0,
						.45833,
						.01528,
						0,
						.37222
					],
					"115": [
						0,
						.45833,
						0,
						0,
						.42167
					],
					"116": [
						0,
						.58929,
						0,
						0,
						.40417
					],
					"117": [
						0,
						.45833,
						0,
						0,
						.56111
					],
					"118": [
						0,
						.45833,
						.01528,
						0,
						.5
					],
					"119": [
						0,
						.45833,
						.01528,
						0,
						.74445
					],
					"120": [
						0,
						.45833,
						0,
						0,
						.5
					],
					"121": [
						.19444,
						.45833,
						.01528,
						0,
						.5
					],
					"122": [
						0,
						.45833,
						0,
						0,
						.47639
					],
					"126": [
						.35,
						.34444,
						0,
						0,
						.55
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"168": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"180": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.48889
					],
					"305": [
						0,
						.45833,
						0,
						0,
						.25556
					],
					"567": [
						.19444,
						.45833,
						0,
						0,
						.28611
					],
					"710": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"711": [
						0,
						.63542,
						0,
						0,
						.55
					],
					"713": [
						0,
						.63778,
						0,
						0,
						.55
					],
					"728": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"729": [
						0,
						.69444,
						0,
						0,
						.30556
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"732": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"733": [
						0,
						.69444,
						0,
						0,
						.55
					],
					"915": [
						0,
						.69444,
						0,
						0,
						.58056
					],
					"916": [
						0,
						.69444,
						0,
						0,
						.91667
					],
					"920": [
						0,
						.69444,
						0,
						0,
						.85556
					],
					"923": [
						0,
						.69444,
						0,
						0,
						.67223
					],
					"926": [
						0,
						.69444,
						0,
						0,
						.73334
					],
					"928": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"931": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"933": [
						0,
						.69444,
						0,
						0,
						.85556
					],
					"934": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"936": [
						0,
						.69444,
						0,
						0,
						.85556
					],
					"937": [
						0,
						.69444,
						0,
						0,
						.79445
					],
					"8211": [
						0,
						.45833,
						.03056,
						0,
						.55
					],
					"8212": [
						0,
						.45833,
						.03056,
						0,
						1.10001
					],
					"8216": [
						0,
						.69444,
						0,
						0,
						.30556
					],
					"8217": [
						0,
						.69444,
						0,
						0,
						.30556
					],
					"8220": [
						0,
						.69444,
						0,
						0,
						.55834
					],
					"8221": [
						0,
						.69444,
						0,
						0,
						.55834
					]
				},
				"SansSerif-Italic": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						.05733,
						0,
						.31945
					],
					"34": [
						0,
						.69444,
						.00316,
						0,
						.5
					],
					"35": [
						.19444,
						.69444,
						.05087,
						0,
						.83334
					],
					"36": [
						.05556,
						.75,
						.11156,
						0,
						.5
					],
					"37": [
						.05556,
						.75,
						.03126,
						0,
						.83334
					],
					"38": [
						0,
						.69444,
						.03058,
						0,
						.75834
					],
					"39": [
						0,
						.69444,
						.07816,
						0,
						.27778
					],
					"40": [
						.25,
						.75,
						.13164,
						0,
						.38889
					],
					"41": [
						.25,
						.75,
						.02536,
						0,
						.38889
					],
					"42": [
						0,
						.75,
						.11775,
						0,
						.5
					],
					"43": [
						.08333,
						.58333,
						.02536,
						0,
						.77778
					],
					"44": [
						.125,
						.08333,
						0,
						0,
						.27778
					],
					"45": [
						0,
						.44444,
						.01946,
						0,
						.33333
					],
					"46": [
						0,
						.08333,
						0,
						0,
						.27778
					],
					"47": [
						.25,
						.75,
						.13164,
						0,
						.5
					],
					"48": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"49": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"50": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"51": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"52": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"53": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"54": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"55": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"56": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"57": [
						0,
						.65556,
						.11156,
						0,
						.5
					],
					"58": [
						0,
						.44444,
						.02502,
						0,
						.27778
					],
					"59": [
						.125,
						.44444,
						.02502,
						0,
						.27778
					],
					"61": [
						-.13,
						.37,
						.05087,
						0,
						.77778
					],
					"63": [
						0,
						.69444,
						.11809,
						0,
						.47222
					],
					"64": [
						0,
						.69444,
						.07555,
						0,
						.66667
					],
					"65": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"66": [
						0,
						.69444,
						.08293,
						0,
						.66667
					],
					"67": [
						0,
						.69444,
						.11983,
						0,
						.63889
					],
					"68": [
						0,
						.69444,
						.07555,
						0,
						.72223
					],
					"69": [
						0,
						.69444,
						.11983,
						0,
						.59722
					],
					"70": [
						0,
						.69444,
						.13372,
						0,
						.56945
					],
					"71": [
						0,
						.69444,
						.11983,
						0,
						.66667
					],
					"72": [
						0,
						.69444,
						.08094,
						0,
						.70834
					],
					"73": [
						0,
						.69444,
						.13372,
						0,
						.27778
					],
					"74": [
						0,
						.69444,
						.08094,
						0,
						.47222
					],
					"75": [
						0,
						.69444,
						.11983,
						0,
						.69445
					],
					"76": [
						0,
						.69444,
						0,
						0,
						.54167
					],
					"77": [
						0,
						.69444,
						.08094,
						0,
						.875
					],
					"78": [
						0,
						.69444,
						.08094,
						0,
						.70834
					],
					"79": [
						0,
						.69444,
						.07555,
						0,
						.73611
					],
					"80": [
						0,
						.69444,
						.08293,
						0,
						.63889
					],
					"81": [
						.125,
						.69444,
						.07555,
						0,
						.73611
					],
					"82": [
						0,
						.69444,
						.08293,
						0,
						.64584
					],
					"83": [
						0,
						.69444,
						.09205,
						0,
						.55556
					],
					"84": [
						0,
						.69444,
						.13372,
						0,
						.68056
					],
					"85": [
						0,
						.69444,
						.08094,
						0,
						.6875
					],
					"86": [
						0,
						.69444,
						.1615,
						0,
						.66667
					],
					"87": [
						0,
						.69444,
						.1615,
						0,
						.94445
					],
					"88": [
						0,
						.69444,
						.13372,
						0,
						.66667
					],
					"89": [
						0,
						.69444,
						.17261,
						0,
						.66667
					],
					"90": [
						0,
						.69444,
						.11983,
						0,
						.61111
					],
					"91": [
						.25,
						.75,
						.15942,
						0,
						.28889
					],
					"93": [
						.25,
						.75,
						.08719,
						0,
						.28889
					],
					"94": [
						0,
						.69444,
						.0799,
						0,
						.5
					],
					"95": [
						.35,
						.09444,
						.08616,
						0,
						.5
					],
					"97": [
						0,
						.44444,
						.00981,
						0,
						.48056
					],
					"98": [
						0,
						.69444,
						.03057,
						0,
						.51667
					],
					"99": [
						0,
						.44444,
						.08336,
						0,
						.44445
					],
					"100": [
						0,
						.69444,
						.09483,
						0,
						.51667
					],
					"101": [
						0,
						.44444,
						.06778,
						0,
						.44445
					],
					"102": [
						0,
						.69444,
						.21705,
						0,
						.30556
					],
					"103": [
						.19444,
						.44444,
						.10836,
						0,
						.5
					],
					"104": [
						0,
						.69444,
						.01778,
						0,
						.51667
					],
					"105": [
						0,
						.67937,
						.09718,
						0,
						.23889
					],
					"106": [
						.19444,
						.67937,
						.09162,
						0,
						.26667
					],
					"107": [
						0,
						.69444,
						.08336,
						0,
						.48889
					],
					"108": [
						0,
						.69444,
						.09483,
						0,
						.23889
					],
					"109": [
						0,
						.44444,
						.01778,
						0,
						.79445
					],
					"110": [
						0,
						.44444,
						.01778,
						0,
						.51667
					],
					"111": [
						0,
						.44444,
						.06613,
						0,
						.5
					],
					"112": [
						.19444,
						.44444,
						.0389,
						0,
						.51667
					],
					"113": [
						.19444,
						.44444,
						.04169,
						0,
						.51667
					],
					"114": [
						0,
						.44444,
						.10836,
						0,
						.34167
					],
					"115": [
						0,
						.44444,
						.0778,
						0,
						.38333
					],
					"116": [
						0,
						.57143,
						.07225,
						0,
						.36111
					],
					"117": [
						0,
						.44444,
						.04169,
						0,
						.51667
					],
					"118": [
						0,
						.44444,
						.10836,
						0,
						.46111
					],
					"119": [
						0,
						.44444,
						.10836,
						0,
						.68334
					],
					"120": [
						0,
						.44444,
						.09169,
						0,
						.46111
					],
					"121": [
						.19444,
						.44444,
						.10836,
						0,
						.46111
					],
					"122": [
						0,
						.44444,
						.08752,
						0,
						.43472
					],
					"126": [
						.35,
						.32659,
						.08826,
						0,
						.5
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"168": [
						0,
						.67937,
						.06385,
						0,
						.5
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.73752
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.44445
					],
					"305": [
						0,
						.44444,
						.04169,
						0,
						.23889
					],
					"567": [
						.19444,
						.44444,
						.04169,
						0,
						.26667
					],
					"710": [
						0,
						.69444,
						.0799,
						0,
						.5
					],
					"711": [
						0,
						.63194,
						.08432,
						0,
						.5
					],
					"713": [
						0,
						.60889,
						.08776,
						0,
						.5
					],
					"714": [
						0,
						.69444,
						.09205,
						0,
						.5
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"728": [
						0,
						.69444,
						.09483,
						0,
						.5
					],
					"729": [
						0,
						.67937,
						.07774,
						0,
						.27778
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.73752
					],
					"732": [
						0,
						.67659,
						.08826,
						0,
						.5
					],
					"733": [
						0,
						.69444,
						.09205,
						0,
						.5
					],
					"915": [
						0,
						.69444,
						.13372,
						0,
						.54167
					],
					"916": [
						0,
						.69444,
						0,
						0,
						.83334
					],
					"920": [
						0,
						.69444,
						.07555,
						0,
						.77778
					],
					"923": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"926": [
						0,
						.69444,
						.12816,
						0,
						.66667
					],
					"928": [
						0,
						.69444,
						.08094,
						0,
						.70834
					],
					"931": [
						0,
						.69444,
						.11983,
						0,
						.72222
					],
					"933": [
						0,
						.69444,
						.09031,
						0,
						.77778
					],
					"934": [
						0,
						.69444,
						.04603,
						0,
						.72222
					],
					"936": [
						0,
						.69444,
						.09031,
						0,
						.77778
					],
					"937": [
						0,
						.69444,
						.08293,
						0,
						.72222
					],
					"8211": [
						0,
						.44444,
						.08616,
						0,
						.5
					],
					"8212": [
						0,
						.44444,
						.08616,
						0,
						1
					],
					"8216": [
						0,
						.69444,
						.07816,
						0,
						.27778
					],
					"8217": [
						0,
						.69444,
						.07816,
						0,
						.27778
					],
					"8220": [
						0,
						.69444,
						.14205,
						0,
						.5
					],
					"8221": [
						0,
						.69444,
						.00316,
						0,
						.5
					]
				},
				"SansSerif-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"33": [
						0,
						.69444,
						0,
						0,
						.31945
					],
					"34": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"35": [
						.19444,
						.69444,
						0,
						0,
						.83334
					],
					"36": [
						.05556,
						.75,
						0,
						0,
						.5
					],
					"37": [
						.05556,
						.75,
						0,
						0,
						.83334
					],
					"38": [
						0,
						.69444,
						0,
						0,
						.75834
					],
					"39": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"40": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"41": [
						.25,
						.75,
						0,
						0,
						.38889
					],
					"42": [
						0,
						.75,
						0,
						0,
						.5
					],
					"43": [
						.08333,
						.58333,
						0,
						0,
						.77778
					],
					"44": [
						.125,
						.08333,
						0,
						0,
						.27778
					],
					"45": [
						0,
						.44444,
						0,
						0,
						.33333
					],
					"46": [
						0,
						.08333,
						0,
						0,
						.27778
					],
					"47": [
						.25,
						.75,
						0,
						0,
						.5
					],
					"48": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"49": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"50": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"51": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"52": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"53": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"54": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"55": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"56": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"57": [
						0,
						.65556,
						0,
						0,
						.5
					],
					"58": [
						0,
						.44444,
						0,
						0,
						.27778
					],
					"59": [
						.125,
						.44444,
						0,
						0,
						.27778
					],
					"61": [
						-.13,
						.37,
						0,
						0,
						.77778
					],
					"63": [
						0,
						.69444,
						0,
						0,
						.47222
					],
					"64": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"65": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"66": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"67": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"68": [
						0,
						.69444,
						0,
						0,
						.72223
					],
					"69": [
						0,
						.69444,
						0,
						0,
						.59722
					],
					"70": [
						0,
						.69444,
						0,
						0,
						.56945
					],
					"71": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"72": [
						0,
						.69444,
						0,
						0,
						.70834
					],
					"73": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"74": [
						0,
						.69444,
						0,
						0,
						.47222
					],
					"75": [
						0,
						.69444,
						0,
						0,
						.69445
					],
					"76": [
						0,
						.69444,
						0,
						0,
						.54167
					],
					"77": [
						0,
						.69444,
						0,
						0,
						.875
					],
					"78": [
						0,
						.69444,
						0,
						0,
						.70834
					],
					"79": [
						0,
						.69444,
						0,
						0,
						.73611
					],
					"80": [
						0,
						.69444,
						0,
						0,
						.63889
					],
					"81": [
						.125,
						.69444,
						0,
						0,
						.73611
					],
					"82": [
						0,
						.69444,
						0,
						0,
						.64584
					],
					"83": [
						0,
						.69444,
						0,
						0,
						.55556
					],
					"84": [
						0,
						.69444,
						0,
						0,
						.68056
					],
					"85": [
						0,
						.69444,
						0,
						0,
						.6875
					],
					"86": [
						0,
						.69444,
						.01389,
						0,
						.66667
					],
					"87": [
						0,
						.69444,
						.01389,
						0,
						.94445
					],
					"88": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"89": [
						0,
						.69444,
						.025,
						0,
						.66667
					],
					"90": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"91": [
						.25,
						.75,
						0,
						0,
						.28889
					],
					"93": [
						.25,
						.75,
						0,
						0,
						.28889
					],
					"94": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"95": [
						.35,
						.09444,
						.02778,
						0,
						.5
					],
					"97": [
						0,
						.44444,
						0,
						0,
						.48056
					],
					"98": [
						0,
						.69444,
						0,
						0,
						.51667
					],
					"99": [
						0,
						.44444,
						0,
						0,
						.44445
					],
					"100": [
						0,
						.69444,
						0,
						0,
						.51667
					],
					"101": [
						0,
						.44444,
						0,
						0,
						.44445
					],
					"102": [
						0,
						.69444,
						.06944,
						0,
						.30556
					],
					"103": [
						.19444,
						.44444,
						.01389,
						0,
						.5
					],
					"104": [
						0,
						.69444,
						0,
						0,
						.51667
					],
					"105": [
						0,
						.67937,
						0,
						0,
						.23889
					],
					"106": [
						.19444,
						.67937,
						0,
						0,
						.26667
					],
					"107": [
						0,
						.69444,
						0,
						0,
						.48889
					],
					"108": [
						0,
						.69444,
						0,
						0,
						.23889
					],
					"109": [
						0,
						.44444,
						0,
						0,
						.79445
					],
					"110": [
						0,
						.44444,
						0,
						0,
						.51667
					],
					"111": [
						0,
						.44444,
						0,
						0,
						.5
					],
					"112": [
						.19444,
						.44444,
						0,
						0,
						.51667
					],
					"113": [
						.19444,
						.44444,
						0,
						0,
						.51667
					],
					"114": [
						0,
						.44444,
						.01389,
						0,
						.34167
					],
					"115": [
						0,
						.44444,
						0,
						0,
						.38333
					],
					"116": [
						0,
						.57143,
						0,
						0,
						.36111
					],
					"117": [
						0,
						.44444,
						0,
						0,
						.51667
					],
					"118": [
						0,
						.44444,
						.01389,
						0,
						.46111
					],
					"119": [
						0,
						.44444,
						.01389,
						0,
						.68334
					],
					"120": [
						0,
						.44444,
						0,
						0,
						.46111
					],
					"121": [
						.19444,
						.44444,
						.01389,
						0,
						.46111
					],
					"122": [
						0,
						.44444,
						0,
						0,
						.43472
					],
					"126": [
						.35,
						.32659,
						0,
						0,
						.5
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"168": [
						0,
						.67937,
						0,
						0,
						.5
					],
					"176": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"184": [
						.17014,
						0,
						0,
						0,
						.44445
					],
					"305": [
						0,
						.44444,
						0,
						0,
						.23889
					],
					"567": [
						.19444,
						.44444,
						0,
						0,
						.26667
					],
					"710": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"711": [
						0,
						.63194,
						0,
						0,
						.5
					],
					"713": [
						0,
						.60889,
						0,
						0,
						.5
					],
					"714": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"715": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"728": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"729": [
						0,
						.67937,
						0,
						0,
						.27778
					],
					"730": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"732": [
						0,
						.67659,
						0,
						0,
						.5
					],
					"733": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"915": [
						0,
						.69444,
						0,
						0,
						.54167
					],
					"916": [
						0,
						.69444,
						0,
						0,
						.83334
					],
					"920": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"923": [
						0,
						.69444,
						0,
						0,
						.61111
					],
					"926": [
						0,
						.69444,
						0,
						0,
						.66667
					],
					"928": [
						0,
						.69444,
						0,
						0,
						.70834
					],
					"931": [
						0,
						.69444,
						0,
						0,
						.72222
					],
					"933": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"934": [
						0,
						.69444,
						0,
						0,
						.72222
					],
					"936": [
						0,
						.69444,
						0,
						0,
						.77778
					],
					"937": [
						0,
						.69444,
						0,
						0,
						.72222
					],
					"8211": [
						0,
						.44444,
						.02778,
						0,
						.5
					],
					"8212": [
						0,
						.44444,
						.02778,
						0,
						1
					],
					"8216": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"8217": [
						0,
						.69444,
						0,
						0,
						.27778
					],
					"8220": [
						0,
						.69444,
						0,
						0,
						.5
					],
					"8221": [
						0,
						.69444,
						0,
						0,
						.5
					]
				},
				"Script-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"65": [
						0,
						.7,
						.22925,
						0,
						.80253
					],
					"66": [
						0,
						.7,
						.04087,
						0,
						.90757
					],
					"67": [
						0,
						.7,
						.1689,
						0,
						.66619
					],
					"68": [
						0,
						.7,
						.09371,
						0,
						.77443
					],
					"69": [
						0,
						.7,
						.18583,
						0,
						.56162
					],
					"70": [
						0,
						.7,
						.13634,
						0,
						.89544
					],
					"71": [
						0,
						.7,
						.17322,
						0,
						.60961
					],
					"72": [
						0,
						.7,
						.29694,
						0,
						.96919
					],
					"73": [
						0,
						.7,
						.19189,
						0,
						.80907
					],
					"74": [
						.27778,
						.7,
						.19189,
						0,
						1.05159
					],
					"75": [
						0,
						.7,
						.31259,
						0,
						.91364
					],
					"76": [
						0,
						.7,
						.19189,
						0,
						.87373
					],
					"77": [
						0,
						.7,
						.15981,
						0,
						1.08031
					],
					"78": [
						0,
						.7,
						.3525,
						0,
						.9015
					],
					"79": [
						0,
						.7,
						.08078,
						0,
						.73787
					],
					"80": [
						0,
						.7,
						.08078,
						0,
						1.01262
					],
					"81": [
						0,
						.7,
						.03305,
						0,
						.88282
					],
					"82": [
						0,
						.7,
						.06259,
						0,
						.85
					],
					"83": [
						0,
						.7,
						.19189,
						0,
						.86767
					],
					"84": [
						0,
						.7,
						.29087,
						0,
						.74697
					],
					"85": [
						0,
						.7,
						.25815,
						0,
						.79996
					],
					"86": [
						0,
						.7,
						.27523,
						0,
						.62204
					],
					"87": [
						0,
						.7,
						.27523,
						0,
						.80532
					],
					"88": [
						0,
						.7,
						.26006,
						0,
						.94445
					],
					"89": [
						0,
						.7,
						.2939,
						0,
						.70961
					],
					"90": [
						0,
						.7,
						.24037,
						0,
						.8212
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					]
				},
				"Size1-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"40": [
						.35001,
						.85,
						0,
						0,
						.45834
					],
					"41": [
						.35001,
						.85,
						0,
						0,
						.45834
					],
					"47": [
						.35001,
						.85,
						0,
						0,
						.57778
					],
					"91": [
						.35001,
						.85,
						0,
						0,
						.41667
					],
					"92": [
						.35001,
						.85,
						0,
						0,
						.57778
					],
					"93": [
						.35001,
						.85,
						0,
						0,
						.41667
					],
					"123": [
						.35001,
						.85,
						0,
						0,
						.58334
					],
					"125": [
						.35001,
						.85,
						0,
						0,
						.58334
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"710": [
						0,
						.72222,
						0,
						0,
						.55556
					],
					"732": [
						0,
						.72222,
						0,
						0,
						.55556
					],
					"770": [
						0,
						.72222,
						0,
						0,
						.55556
					],
					"771": [
						0,
						.72222,
						0,
						0,
						.55556
					],
					"8214": [
						-99e-5,
						.601,
						0,
						0,
						.77778
					],
					"8593": [
						1e-5,
						.6,
						0,
						0,
						.66667
					],
					"8595": [
						1e-5,
						.6,
						0,
						0,
						.66667
					],
					"8657": [
						1e-5,
						.6,
						0,
						0,
						.77778
					],
					"8659": [
						1e-5,
						.6,
						0,
						0,
						.77778
					],
					"8719": [
						.25001,
						.75,
						0,
						0,
						.94445
					],
					"8720": [
						.25001,
						.75,
						0,
						0,
						.94445
					],
					"8721": [
						.25001,
						.75,
						0,
						0,
						1.05556
					],
					"8730": [
						.35001,
						.85,
						0,
						0,
						1
					],
					"8739": [
						-.00599,
						.606,
						0,
						0,
						.33333
					],
					"8741": [
						-.00599,
						.606,
						0,
						0,
						.55556
					],
					"8747": [
						.30612,
						.805,
						.19445,
						0,
						.47222
					],
					"8748": [
						.306,
						.805,
						.19445,
						0,
						.47222
					],
					"8749": [
						.306,
						.805,
						.19445,
						0,
						.47222
					],
					"8750": [
						.30612,
						.805,
						.19445,
						0,
						.47222
					],
					"8896": [
						.25001,
						.75,
						0,
						0,
						.83334
					],
					"8897": [
						.25001,
						.75,
						0,
						0,
						.83334
					],
					"8898": [
						.25001,
						.75,
						0,
						0,
						.83334
					],
					"8899": [
						.25001,
						.75,
						0,
						0,
						.83334
					],
					"8968": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"8969": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"8970": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"8971": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"9168": [
						-99e-5,
						.601,
						0,
						0,
						.66667
					],
					"10216": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"10217": [
						.35001,
						.85,
						0,
						0,
						.47222
					],
					"10752": [
						.25001,
						.75,
						0,
						0,
						1.11111
					],
					"10753": [
						.25001,
						.75,
						0,
						0,
						1.11111
					],
					"10754": [
						.25001,
						.75,
						0,
						0,
						1.11111
					],
					"10756": [
						.25001,
						.75,
						0,
						0,
						.83334
					],
					"10758": [
						.25001,
						.75,
						0,
						0,
						.83334
					]
				},
				"Size2-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"40": [
						.65002,
						1.15,
						0,
						0,
						.59722
					],
					"41": [
						.65002,
						1.15,
						0,
						0,
						.59722
					],
					"47": [
						.65002,
						1.15,
						0,
						0,
						.81111
					],
					"91": [
						.65002,
						1.15,
						0,
						0,
						.47222
					],
					"92": [
						.65002,
						1.15,
						0,
						0,
						.81111
					],
					"93": [
						.65002,
						1.15,
						0,
						0,
						.47222
					],
					"123": [
						.65002,
						1.15,
						0,
						0,
						.66667
					],
					"125": [
						.65002,
						1.15,
						0,
						0,
						.66667
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"710": [
						0,
						.75,
						0,
						0,
						1
					],
					"732": [
						0,
						.75,
						0,
						0,
						1
					],
					"770": [
						0,
						.75,
						0,
						0,
						1
					],
					"771": [
						0,
						.75,
						0,
						0,
						1
					],
					"8719": [
						.55001,
						1.05,
						0,
						0,
						1.27778
					],
					"8720": [
						.55001,
						1.05,
						0,
						0,
						1.27778
					],
					"8721": [
						.55001,
						1.05,
						0,
						0,
						1.44445
					],
					"8730": [
						.65002,
						1.15,
						0,
						0,
						1
					],
					"8747": [
						.86225,
						1.36,
						.44445,
						0,
						.55556
					],
					"8748": [
						.862,
						1.36,
						.44445,
						0,
						.55556
					],
					"8749": [
						.862,
						1.36,
						.44445,
						0,
						.55556
					],
					"8750": [
						.86225,
						1.36,
						.44445,
						0,
						.55556
					],
					"8896": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					],
					"8897": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					],
					"8898": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					],
					"8899": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					],
					"8968": [
						.65002,
						1.15,
						0,
						0,
						.52778
					],
					"8969": [
						.65002,
						1.15,
						0,
						0,
						.52778
					],
					"8970": [
						.65002,
						1.15,
						0,
						0,
						.52778
					],
					"8971": [
						.65002,
						1.15,
						0,
						0,
						.52778
					],
					"10216": [
						.65002,
						1.15,
						0,
						0,
						.61111
					],
					"10217": [
						.65002,
						1.15,
						0,
						0,
						.61111
					],
					"10752": [
						.55001,
						1.05,
						0,
						0,
						1.51112
					],
					"10753": [
						.55001,
						1.05,
						0,
						0,
						1.51112
					],
					"10754": [
						.55001,
						1.05,
						0,
						0,
						1.51112
					],
					"10756": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					],
					"10758": [
						.55001,
						1.05,
						0,
						0,
						1.11111
					]
				},
				"Size3-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"40": [
						.95003,
						1.45,
						0,
						0,
						.73611
					],
					"41": [
						.95003,
						1.45,
						0,
						0,
						.73611
					],
					"47": [
						.95003,
						1.45,
						0,
						0,
						1.04445
					],
					"91": [
						.95003,
						1.45,
						0,
						0,
						.52778
					],
					"92": [
						.95003,
						1.45,
						0,
						0,
						1.04445
					],
					"93": [
						.95003,
						1.45,
						0,
						0,
						.52778
					],
					"123": [
						.95003,
						1.45,
						0,
						0,
						.75
					],
					"125": [
						.95003,
						1.45,
						0,
						0,
						.75
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"710": [
						0,
						.75,
						0,
						0,
						1.44445
					],
					"732": [
						0,
						.75,
						0,
						0,
						1.44445
					],
					"770": [
						0,
						.75,
						0,
						0,
						1.44445
					],
					"771": [
						0,
						.75,
						0,
						0,
						1.44445
					],
					"8730": [
						.95003,
						1.45,
						0,
						0,
						1
					],
					"8968": [
						.95003,
						1.45,
						0,
						0,
						.58334
					],
					"8969": [
						.95003,
						1.45,
						0,
						0,
						.58334
					],
					"8970": [
						.95003,
						1.45,
						0,
						0,
						.58334
					],
					"8971": [
						.95003,
						1.45,
						0,
						0,
						.58334
					],
					"10216": [
						.95003,
						1.45,
						0,
						0,
						.75
					],
					"10217": [
						.95003,
						1.45,
						0,
						0,
						.75
					]
				},
				"Size4-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.25
					],
					"40": [
						1.25003,
						1.75,
						0,
						0,
						.79167
					],
					"41": [
						1.25003,
						1.75,
						0,
						0,
						.79167
					],
					"47": [
						1.25003,
						1.75,
						0,
						0,
						1.27778
					],
					"91": [
						1.25003,
						1.75,
						0,
						0,
						.58334
					],
					"92": [
						1.25003,
						1.75,
						0,
						0,
						1.27778
					],
					"93": [
						1.25003,
						1.75,
						0,
						0,
						.58334
					],
					"123": [
						1.25003,
						1.75,
						0,
						0,
						.80556
					],
					"125": [
						1.25003,
						1.75,
						0,
						0,
						.80556
					],
					"160": [
						0,
						0,
						0,
						0,
						.25
					],
					"710": [
						0,
						.825,
						0,
						0,
						1.8889
					],
					"732": [
						0,
						.825,
						0,
						0,
						1.8889
					],
					"770": [
						0,
						.825,
						0,
						0,
						1.8889
					],
					"771": [
						0,
						.825,
						0,
						0,
						1.8889
					],
					"8730": [
						1.25003,
						1.75,
						0,
						0,
						1
					],
					"8968": [
						1.25003,
						1.75,
						0,
						0,
						.63889
					],
					"8969": [
						1.25003,
						1.75,
						0,
						0,
						.63889
					],
					"8970": [
						1.25003,
						1.75,
						0,
						0,
						.63889
					],
					"8971": [
						1.25003,
						1.75,
						0,
						0,
						.63889
					],
					"9115": [
						.64502,
						1.155,
						0,
						0,
						.875
					],
					"9116": [
						1e-5,
						.6,
						0,
						0,
						.875
					],
					"9117": [
						.64502,
						1.155,
						0,
						0,
						.875
					],
					"9118": [
						.64502,
						1.155,
						0,
						0,
						.875
					],
					"9119": [
						1e-5,
						.6,
						0,
						0,
						.875
					],
					"9120": [
						.64502,
						1.155,
						0,
						0,
						.875
					],
					"9121": [
						.64502,
						1.155,
						0,
						0,
						.66667
					],
					"9122": [
						-99e-5,
						.601,
						0,
						0,
						.66667
					],
					"9123": [
						.64502,
						1.155,
						0,
						0,
						.66667
					],
					"9124": [
						.64502,
						1.155,
						0,
						0,
						.66667
					],
					"9125": [
						-99e-5,
						.601,
						0,
						0,
						.66667
					],
					"9126": [
						.64502,
						1.155,
						0,
						0,
						.66667
					],
					"9127": [
						1e-5,
						.9,
						0,
						0,
						.88889
					],
					"9128": [
						.65002,
						1.15,
						0,
						0,
						.88889
					],
					"9129": [
						.90001,
						0,
						0,
						0,
						.88889
					],
					"9130": [
						0,
						.3,
						0,
						0,
						.88889
					],
					"9131": [
						1e-5,
						.9,
						0,
						0,
						.88889
					],
					"9132": [
						.65002,
						1.15,
						0,
						0,
						.88889
					],
					"9133": [
						.90001,
						0,
						0,
						0,
						.88889
					],
					"9143": [
						.88502,
						.915,
						0,
						0,
						1.05556
					],
					"10216": [
						1.25003,
						1.75,
						0,
						0,
						.80556
					],
					"10217": [
						1.25003,
						1.75,
						0,
						0,
						.80556
					],
					"57344": [
						-.00499,
						.605,
						0,
						0,
						1.05556
					],
					"57345": [
						-.00499,
						.605,
						0,
						0,
						1.05556
					],
					"57680": [
						0,
						.12,
						0,
						0,
						.45
					],
					"57681": [
						0,
						.12,
						0,
						0,
						.45
					],
					"57682": [
						0,
						.12,
						0,
						0,
						.45
					],
					"57683": [
						0,
						.12,
						0,
						0,
						.45
					]
				},
				"Typewriter-Regular": {
					"32": [
						0,
						0,
						0,
						0,
						.525
					],
					"33": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"34": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"35": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"36": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"37": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"38": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"39": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"40": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"41": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"42": [
						0,
						.52083,
						0,
						0,
						.525
					],
					"43": [
						-.08056,
						.53055,
						0,
						0,
						.525
					],
					"44": [
						.13889,
						.125,
						0,
						0,
						.525
					],
					"45": [
						-.08056,
						.53055,
						0,
						0,
						.525
					],
					"46": [
						0,
						.125,
						0,
						0,
						.525
					],
					"47": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"48": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"49": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"50": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"51": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"52": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"53": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"54": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"55": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"56": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"57": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"58": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"59": [
						.13889,
						.43056,
						0,
						0,
						.525
					],
					"60": [
						-.05556,
						.55556,
						0,
						0,
						.525
					],
					"61": [
						-.19549,
						.41562,
						0,
						0,
						.525
					],
					"62": [
						-.05556,
						.55556,
						0,
						0,
						.525
					],
					"63": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"64": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"65": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"66": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"67": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"68": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"69": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"70": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"71": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"72": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"73": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"74": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"75": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"76": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"77": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"78": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"79": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"80": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"81": [
						.13889,
						.61111,
						0,
						0,
						.525
					],
					"82": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"83": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"84": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"85": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"86": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"87": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"88": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"89": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"90": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"91": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"92": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"93": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"94": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"95": [
						.09514,
						0,
						0,
						0,
						.525
					],
					"96": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"97": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"98": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"99": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"100": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"101": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"102": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"103": [
						.22222,
						.43056,
						0,
						0,
						.525
					],
					"104": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"105": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"106": [
						.22222,
						.61111,
						0,
						0,
						.525
					],
					"107": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"108": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"109": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"110": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"111": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"112": [
						.22222,
						.43056,
						0,
						0,
						.525
					],
					"113": [
						.22222,
						.43056,
						0,
						0,
						.525
					],
					"114": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"115": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"116": [
						0,
						.55358,
						0,
						0,
						.525
					],
					"117": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"118": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"119": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"120": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"121": [
						.22222,
						.43056,
						0,
						0,
						.525
					],
					"122": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"123": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"124": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"125": [
						.08333,
						.69444,
						0,
						0,
						.525
					],
					"126": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"127": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"160": [
						0,
						0,
						0,
						0,
						.525
					],
					"176": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"184": [
						.19445,
						0,
						0,
						0,
						.525
					],
					"305": [
						0,
						.43056,
						0,
						0,
						.525
					],
					"567": [
						.22222,
						.43056,
						0,
						0,
						.525
					],
					"711": [
						0,
						.56597,
						0,
						0,
						.525
					],
					"713": [
						0,
						.56555,
						0,
						0,
						.525
					],
					"714": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"715": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"728": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"730": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"770": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"771": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"776": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"915": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"916": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"920": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"923": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"926": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"928": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"931": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"933": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"934": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"936": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"937": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"8216": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"8217": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"8242": [
						0,
						.61111,
						0,
						0,
						.525
					],
					"9251": [
						.11111,
						.21944,
						0,
						0,
						.525
					]
				}
			};
			const sigmasAndXis = {
				slant: [
					.25,
					.25,
					.25
				],
				space: [
					0,
					0,
					0
				],
				stretch: [
					0,
					0,
					0
				],
				shrink: [
					0,
					0,
					0
				],
				xHeight: [
					.431,
					.431,
					.431
				],
				quad: [
					1,
					1.171,
					1.472
				],
				extraSpace: [
					0,
					0,
					0
				],
				num1: [
					.677,
					.732,
					.925
				],
				num2: [
					.394,
					.384,
					.387
				],
				num3: [
					.444,
					.471,
					.504
				],
				denom1: [
					.686,
					.752,
					1.025
				],
				denom2: [
					.345,
					.344,
					.532
				],
				sup1: [
					.413,
					.503,
					.504
				],
				sup2: [
					.363,
					.431,
					.404
				],
				sup3: [
					.289,
					.286,
					.294
				],
				sub1: [
					.15,
					.143,
					.2
				],
				sub2: [
					.247,
					.286,
					.4
				],
				supDrop: [
					.386,
					.353,
					.494
				],
				subDrop: [
					.05,
					.071,
					.1
				],
				delim1: [
					2.39,
					1.7,
					1.98
				],
				delim2: [
					1.01,
					1.157,
					1.42
				],
				axisHeight: [
					.25,
					.25,
					.25
				],
				defaultRuleThickness: [
					.04,
					.049,
					.049
				],
				bigOpSpacing1: [
					.111,
					.111,
					.111
				],
				bigOpSpacing2: [
					.166,
					.166,
					.166
				],
				bigOpSpacing3: [
					.2,
					.2,
					.2
				],
				bigOpSpacing4: [
					.6,
					.611,
					.611
				],
				bigOpSpacing5: [
					.1,
					.143,
					.143
				],
				sqrtRuleThickness: [
					.04,
					.04,
					.04
				],
				ptPerEm: [
					10,
					10,
					10
				],
				doubleRuleSep: [
					.2,
					.2,
					.2
				],
				arrayRuleWidth: [
					.04,
					.04,
					.04
				],
				fboxsep: [
					.3,
					.3,
					.3
				],
				fboxrule: [
					.04,
					.04,
					.04
				]
			};
			const extraCharacterMap = {
				"Å": "A",
				"Ð": "D",
				"Þ": "o",
				"å": "a",
				"ð": "d",
				"þ": "o",
				"А": "A",
				"Б": "B",
				"В": "B",
				"Г": "F",
				"Д": "A",
				"Е": "E",
				"Ж": "K",
				"З": "3",
				"И": "N",
				"Й": "N",
				"К": "K",
				"Л": "N",
				"М": "M",
				"Н": "H",
				"О": "O",
				"П": "N",
				"Р": "P",
				"С": "C",
				"Т": "T",
				"У": "y",
				"Ф": "O",
				"Х": "X",
				"Ц": "U",
				"Ч": "h",
				"Ш": "W",
				"Щ": "W",
				"Ъ": "B",
				"Ы": "X",
				"Ь": "B",
				"Э": "3",
				"Ю": "X",
				"Я": "R",
				"а": "a",
				"б": "b",
				"в": "a",
				"г": "r",
				"д": "y",
				"е": "e",
				"ж": "m",
				"з": "e",
				"и": "n",
				"й": "n",
				"к": "n",
				"л": "n",
				"м": "m",
				"н": "n",
				"о": "o",
				"п": "n",
				"р": "p",
				"с": "c",
				"т": "o",
				"у": "y",
				"ф": "b",
				"х": "x",
				"ц": "n",
				"ч": "n",
				"ш": "w",
				"щ": "w",
				"ъ": "a",
				"ы": "m",
				"ь": "a",
				"э": "e",
				"ю": "m",
				"я": "r"
			};
			function setFontMetrics(fontName, metrics) {
				fontMetricsData[fontName] = metrics;
			}
			function getCharacterMetrics(character, font, mode) {
				if (!fontMetricsData[font]) throw new Error("Font metrics not found for font: " + font + ".");
				let ch = character.charCodeAt(0);
				let metrics = fontMetricsData[font][ch];
				if (!metrics && character[0] in extraCharacterMap) {
					ch = extraCharacterMap[character[0]].charCodeAt(0);
					metrics = fontMetricsData[font][ch];
				}
				if (!metrics && mode === "text") {
					if (supportedCodepoint(ch)) metrics = fontMetricsData[font][77];
				}
				if (metrics) return {
					depth: metrics[0],
					height: metrics[1],
					italic: metrics[2],
					skew: metrics[3],
					width: metrics[4]
				};
			}
			const fontMetricsBySizeIndex = {};
			function getGlobalMetrics(size) {
				let sizeIndex;
				if (size >= 5) sizeIndex = 0;
				else if (size >= 3) sizeIndex = 1;
				else sizeIndex = 2;
				if (!fontMetricsBySizeIndex[sizeIndex]) {
					const metrics = fontMetricsBySizeIndex[sizeIndex] = { cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18 };
					for (const key in sigmasAndXis) if (sigmasAndXis.hasOwnProperty(key)) metrics[key] = sigmasAndXis[key][sizeIndex];
				}
				return fontMetricsBySizeIndex[sizeIndex];
			}
			const sizeStyleMap = [
				[
					1,
					1,
					1
				],
				[
					2,
					1,
					1
				],
				[
					3,
					1,
					1
				],
				[
					4,
					2,
					1
				],
				[
					5,
					2,
					1
				],
				[
					6,
					3,
					1
				],
				[
					7,
					4,
					2
				],
				[
					8,
					6,
					3
				],
				[
					9,
					7,
					6
				],
				[
					10,
					8,
					7
				],
				[
					11,
					10,
					9
				]
			];
			const sizeMultipliers = [
				.5,
				.6,
				.7,
				.8,
				.9,
				1,
				1.2,
				1.44,
				1.728,
				2.074,
				2.488
			];
			const sizeAtStyle = function(size, style) {
				return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
			};
			class Options {
				constructor(data) {
					this.style = void 0;
					this.color = void 0;
					this.size = void 0;
					this.textSize = void 0;
					this.phantom = void 0;
					this.font = void 0;
					this.fontFamily = void 0;
					this.fontWeight = void 0;
					this.fontShape = void 0;
					this.sizeMultiplier = void 0;
					this.maxSize = void 0;
					this.minRuleThickness = void 0;
					this._fontMetrics = void 0;
					this.style = data.style;
					this.color = data.color;
					this.size = data.size || Options.BASESIZE;
					this.textSize = data.textSize || this.size;
					this.phantom = !!data.phantom;
					this.font = data.font || "";
					this.fontFamily = data.fontFamily || "";
					this.fontWeight = data.fontWeight || "";
					this.fontShape = data.fontShape || "";
					this.sizeMultiplier = sizeMultipliers[this.size - 1];
					this.maxSize = data.maxSize;
					this.minRuleThickness = data.minRuleThickness;
					this._fontMetrics = void 0;
				}
				extend(extension) {
					const data = {
						style: this.style,
						size: this.size,
						textSize: this.textSize,
						color: this.color,
						phantom: this.phantom,
						font: this.font,
						fontFamily: this.fontFamily,
						fontWeight: this.fontWeight,
						fontShape: this.fontShape,
						maxSize: this.maxSize,
						minRuleThickness: this.minRuleThickness
					};
					for (const key in extension) if (extension.hasOwnProperty(key)) data[key] = extension[key];
					return new Options(data);
				}
				havingStyle(style) {
					if (this.style === style) return this;
					else return this.extend({
						style,
						size: sizeAtStyle(this.textSize, style)
					});
				}
				havingCrampedStyle() {
					return this.havingStyle(this.style.cramp());
				}
				havingSize(size) {
					if (this.size === size && this.textSize === size) return this;
					else return this.extend({
						style: this.style.text(),
						size,
						textSize: size,
						sizeMultiplier: sizeMultipliers[size - 1]
					});
				}
				havingBaseStyle(style) {
					style = style || this.style.text();
					const wantSize = sizeAtStyle(Options.BASESIZE, style);
					if (this.size === wantSize && this.textSize === Options.BASESIZE && this.style === style) return this;
					else return this.extend({
						style,
						size: wantSize
					});
				}
				havingBaseSizing() {
					let size;
					switch (this.style.id) {
						case 4:
						case 5:
							size = 3;
							break;
						case 6:
						case 7:
							size = 1;
							break;
						default: size = 6;
					}
					return this.extend({
						style: this.style.text(),
						size
					});
				}
				withColor(color) {
					return this.extend({ color });
				}
				withPhantom() {
					return this.extend({ phantom: true });
				}
				withFont(font) {
					return this.extend({ font });
				}
				withTextFontFamily(fontFamily) {
					return this.extend({
						fontFamily,
						font: ""
					});
				}
				withTextFontWeight(fontWeight) {
					return this.extend({
						fontWeight,
						font: ""
					});
				}
				withTextFontShape(fontShape) {
					return this.extend({
						fontShape,
						font: ""
					});
				}
				sizingClasses(oldOptions) {
					if (oldOptions.size !== this.size) return [
						"sizing",
						"reset-size" + oldOptions.size,
						"size" + this.size
					];
					else return [];
				}
				baseSizingClasses() {
					if (this.size !== Options.BASESIZE) return [
						"sizing",
						"reset-size" + this.size,
						"size" + Options.BASESIZE
					];
					else return [];
				}
				fontMetrics() {
					if (!this._fontMetrics) this._fontMetrics = getGlobalMetrics(this.size);
					return this._fontMetrics;
				}
				getColor() {
					if (this.phantom) return "transparent";
					else return this.color;
				}
			}
			Options.BASESIZE = 6;
			var src_Options = Options;
			const ptPerUnit = {
				"pt": 1,
				"mm": 7227 / 2540,
				"cm": 7227 / 254,
				"in": 72.27,
				"bp": 803 / 800,
				"pc": 12,
				"dd": 1238 / 1157,
				"cc": 14856 / 1157,
				"nd": 685 / 642,
				"nc": 1370 / 107,
				"sp": 1 / 65536,
				"px": 803 / 800
			};
			const relativeUnit = {
				"ex": true,
				"em": true,
				"mu": true
			};
			const validUnit = function(unit) {
				if (typeof unit !== "string") unit = unit.unit;
				return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
			};
			const calculateSize = function(sizeValue, options) {
				let scale;
				if (sizeValue.unit in ptPerUnit) scale = ptPerUnit[sizeValue.unit] / options.fontMetrics().ptPerEm / options.sizeMultiplier;
				else if (sizeValue.unit === "mu") scale = options.fontMetrics().cssEmPerMu;
				else {
					let unitOptions;
					if (options.style.isTight()) unitOptions = options.havingStyle(options.style.text());
					else unitOptions = options;
					if (sizeValue.unit === "ex") scale = unitOptions.fontMetrics().xHeight;
					else if (sizeValue.unit === "em") scale = unitOptions.fontMetrics().quad;
					else throw new src_ParseError("Invalid unit: '" + sizeValue.unit + "'");
					if (unitOptions !== options) scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
				}
				return Math.min(sizeValue.number * scale, options.maxSize);
			};
			const makeEm = function(n) {
				return +n.toFixed(4) + "em";
			};
			const createClass = function(classes) {
				return classes.filter((cls) => cls).join(" ");
			};
			const initNode = function(classes, options, style) {
				this.classes = classes || [];
				this.attributes = {};
				this.height = 0;
				this.depth = 0;
				this.maxFontSize = 0;
				this.style = style || {};
				if (options) {
					if (options.style.isTight()) this.classes.push("mtight");
					const color = options.getColor();
					if (color) this.style.color = color;
				}
			};
			const toNode = function(tagName) {
				const node = document.createElement(tagName);
				node.className = createClass(this.classes);
				for (const style in this.style) if (this.style.hasOwnProperty(style)) node.style[style] = this.style[style];
				for (const attr in this.attributes) if (this.attributes.hasOwnProperty(attr)) node.setAttribute(attr, this.attributes[attr]);
				for (let i = 0; i < this.children.length; i++) node.appendChild(this.children[i].toNode());
				return node;
			};
			const invalidAttributeNameRegex = /[\s"'>/=\x00-\x1f]/;
			const toMarkup = function(tagName) {
				let markup = "<" + tagName;
				if (this.classes.length) markup += " class=\"" + utils.escape(createClass(this.classes)) + "\"";
				let styles$1 = "";
				for (const style in this.style) if (this.style.hasOwnProperty(style)) styles$1 += utils.hyphenate(style) + ":" + this.style[style] + ";";
				if (styles$1) markup += " style=\"" + utils.escape(styles$1) + "\"";
				for (const attr in this.attributes) if (this.attributes.hasOwnProperty(attr)) {
					if (invalidAttributeNameRegex.test(attr)) throw new src_ParseError("Invalid attribute name '" + attr + "'");
					markup += " " + attr + "=\"" + utils.escape(this.attributes[attr]) + "\"";
				}
				markup += ">";
				for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
				markup += "</" + tagName + ">";
				return markup;
			};
			class Span {
				constructor(classes, children, options, style) {
					this.children = void 0;
					this.attributes = void 0;
					this.classes = void 0;
					this.height = void 0;
					this.depth = void 0;
					this.width = void 0;
					this.maxFontSize = void 0;
					this.style = void 0;
					initNode.call(this, classes, options, style);
					this.children = children || [];
				}
				setAttribute(attribute, value) {
					this.attributes[attribute] = value;
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					return toNode.call(this, "span");
				}
				toMarkup() {
					return toMarkup.call(this, "span");
				}
			}
			class Anchor {
				constructor(href, classes, children, options) {
					this.children = void 0;
					this.attributes = void 0;
					this.classes = void 0;
					this.height = void 0;
					this.depth = void 0;
					this.maxFontSize = void 0;
					this.style = void 0;
					initNode.call(this, classes, options);
					this.children = children || [];
					this.setAttribute("href", href);
				}
				setAttribute(attribute, value) {
					this.attributes[attribute] = value;
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					return toNode.call(this, "a");
				}
				toMarkup() {
					return toMarkup.call(this, "a");
				}
			}
			class Img {
				constructor(src, alt, style) {
					this.src = void 0;
					this.alt = void 0;
					this.classes = void 0;
					this.height = void 0;
					this.depth = void 0;
					this.maxFontSize = void 0;
					this.style = void 0;
					this.alt = alt;
					this.src = src;
					this.classes = ["mord"];
					this.style = style;
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					const node = document.createElement("img");
					node.src = this.src;
					node.alt = this.alt;
					node.className = "mord";
					for (const style in this.style) if (this.style.hasOwnProperty(style)) node.style[style] = this.style[style];
					return node;
				}
				toMarkup() {
					let markup = "<img src=\"" + utils.escape(this.src) + "\"" + (" alt=\"" + utils.escape(this.alt) + "\"");
					let styles$1 = "";
					for (const style in this.style) if (this.style.hasOwnProperty(style)) styles$1 += utils.hyphenate(style) + ":" + this.style[style] + ";";
					if (styles$1) markup += " style=\"" + utils.escape(styles$1) + "\"";
					markup += "'/>";
					return markup;
				}
			}
			const iCombinations = {
				"î": "ı̂",
				"ï": "ı̈",
				"í": "ı́",
				"ì": "ı̀"
			};
			class SymbolNode {
				constructor(text, height, depth, italic, skew, width, classes, style) {
					this.text = void 0;
					this.height = void 0;
					this.depth = void 0;
					this.italic = void 0;
					this.skew = void 0;
					this.width = void 0;
					this.maxFontSize = void 0;
					this.classes = void 0;
					this.style = void 0;
					this.text = text;
					this.height = height || 0;
					this.depth = depth || 0;
					this.italic = italic || 0;
					this.skew = skew || 0;
					this.width = width || 0;
					this.classes = classes || [];
					this.style = style || {};
					this.maxFontSize = 0;
					const script = scriptFromCodepoint(this.text.charCodeAt(0));
					if (script) this.classes.push(script + "_fallback");
					if (/[îïíì]/.test(this.text)) this.text = iCombinations[this.text];
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					const node = document.createTextNode(this.text);
					let span = null;
					if (this.italic > 0) {
						span = document.createElement("span");
						span.style.marginRight = makeEm(this.italic);
					}
					if (this.classes.length > 0) {
						span = span || document.createElement("span");
						span.className = createClass(this.classes);
					}
					for (const style in this.style) if (this.style.hasOwnProperty(style)) {
						span = span || document.createElement("span");
						span.style[style] = this.style[style];
					}
					if (span) {
						span.appendChild(node);
						return span;
					} else return node;
				}
				toMarkup() {
					let needsSpan = false;
					let markup = "<span";
					if (this.classes.length) {
						needsSpan = true;
						markup += " class=\"";
						markup += utils.escape(createClass(this.classes));
						markup += "\"";
					}
					let styles$1 = "";
					if (this.italic > 0) styles$1 += "margin-right:" + this.italic + "em;";
					for (const style in this.style) if (this.style.hasOwnProperty(style)) styles$1 += utils.hyphenate(style) + ":" + this.style[style] + ";";
					if (styles$1) {
						needsSpan = true;
						markup += " style=\"" + utils.escape(styles$1) + "\"";
					}
					const escaped = utils.escape(this.text);
					if (needsSpan) {
						markup += ">";
						markup += escaped;
						markup += "</span>";
						return markup;
					} else return escaped;
				}
			}
			class SvgNode {
				constructor(children, attributes) {
					this.children = void 0;
					this.attributes = void 0;
					this.children = children || [];
					this.attributes = attributes || {};
				}
				toNode() {
					const node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) node.setAttribute(attr, this.attributes[attr]);
					for (let i = 0; i < this.children.length; i++) node.appendChild(this.children[i].toNode());
					return node;
				}
				toMarkup() {
					let markup = "<svg xmlns=\"http://www.w3.org/2000/svg\"";
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) markup += " " + attr + "=\"" + utils.escape(this.attributes[attr]) + "\"";
					markup += ">";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					markup += "</svg>";
					return markup;
				}
			}
			class PathNode {
				constructor(pathName, alternate) {
					this.pathName = void 0;
					this.alternate = void 0;
					this.pathName = pathName;
					this.alternate = alternate;
				}
				toNode() {
					const node = document.createElementNS("http://www.w3.org/2000/svg", "path");
					if (this.alternate) node.setAttribute("d", this.alternate);
					else node.setAttribute("d", path[this.pathName]);
					return node;
				}
				toMarkup() {
					if (this.alternate) return "<path d=\"" + utils.escape(this.alternate) + "\"/>";
					else return "<path d=\"" + utils.escape(path[this.pathName]) + "\"/>";
				}
			}
			class LineNode {
				constructor(attributes) {
					this.attributes = void 0;
					this.attributes = attributes || {};
				}
				toNode() {
					const node = document.createElementNS("http://www.w3.org/2000/svg", "line");
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) node.setAttribute(attr, this.attributes[attr]);
					return node;
				}
				toMarkup() {
					let markup = "<line";
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) markup += " " + attr + "=\"" + utils.escape(this.attributes[attr]) + "\"";
					markup += "/>";
					return markup;
				}
			}
			function assertSymbolDomNode(group) {
				if (group instanceof SymbolNode) return group;
				else throw new Error("Expected symbolNode but got " + String(group) + ".");
			}
			function assertSpan(group) {
				if (group instanceof Span) return group;
				else throw new Error("Expected span<HtmlDomNode> but got " + String(group) + ".");
			}
			const ATOMS = {
				"bin": 1,
				"close": 1,
				"inner": 1,
				"open": 1,
				"punct": 1,
				"rel": 1
			};
			const NON_ATOMS = {
				"accent-token": 1,
				"mathord": 1,
				"op-token": 1,
				"spacing": 1,
				"textord": 1
			};
			const symbols = {
				"math": {},
				"text": {}
			};
			var src_symbols = symbols;
			function defineSymbol(mode, font, group, replace, name, acceptUnicodeChar) {
				symbols[mode][name] = {
					font,
					group,
					replace
				};
				if (acceptUnicodeChar && replace) symbols[mode][replace] = symbols[mode][name];
			}
			const math = "math";
			const symbols_text = "text";
			const main = "main";
			const ams = "ams";
			const accent = "accent-token";
			const bin = "bin";
			const symbols_close = "close";
			const inner = "inner";
			const mathord = "mathord";
			const op = "op-token";
			const symbols_open = "open";
			const punct = "punct";
			const rel = "rel";
			const spacing = "spacing";
			const textord = "textord";
			defineSymbol(math, main, rel, "≡", "\\equiv", true);
			defineSymbol(math, main, rel, "≺", "\\prec", true);
			defineSymbol(math, main, rel, "≻", "\\succ", true);
			defineSymbol(math, main, rel, "∼", "\\sim", true);
			defineSymbol(math, main, rel, "⊥", "\\perp");
			defineSymbol(math, main, rel, "⪯", "\\preceq", true);
			defineSymbol(math, main, rel, "⪰", "\\succeq", true);
			defineSymbol(math, main, rel, "≃", "\\simeq", true);
			defineSymbol(math, main, rel, "∣", "\\mid", true);
			defineSymbol(math, main, rel, "≪", "\\ll", true);
			defineSymbol(math, main, rel, "≫", "\\gg", true);
			defineSymbol(math, main, rel, "≍", "\\asymp", true);
			defineSymbol(math, main, rel, "∥", "\\parallel");
			defineSymbol(math, main, rel, "⋈", "\\bowtie", true);
			defineSymbol(math, main, rel, "⌣", "\\smile", true);
			defineSymbol(math, main, rel, "⊑", "\\sqsubseteq", true);
			defineSymbol(math, main, rel, "⊒", "\\sqsupseteq", true);
			defineSymbol(math, main, rel, "≐", "\\doteq", true);
			defineSymbol(math, main, rel, "⌢", "\\frown", true);
			defineSymbol(math, main, rel, "∋", "\\ni", true);
			defineSymbol(math, main, rel, "∝", "\\propto", true);
			defineSymbol(math, main, rel, "⊢", "\\vdash", true);
			defineSymbol(math, main, rel, "⊣", "\\dashv", true);
			defineSymbol(math, main, rel, "∋", "\\owns");
			defineSymbol(math, main, punct, ".", "\\ldotp");
			defineSymbol(math, main, punct, "⋅", "\\cdotp");
			defineSymbol(math, main, textord, "#", "\\#");
			defineSymbol(symbols_text, main, textord, "#", "\\#");
			defineSymbol(math, main, textord, "&", "\\&");
			defineSymbol(symbols_text, main, textord, "&", "\\&");
			defineSymbol(math, main, textord, "ℵ", "\\aleph", true);
			defineSymbol(math, main, textord, "∀", "\\forall", true);
			defineSymbol(math, main, textord, "ℏ", "\\hbar", true);
			defineSymbol(math, main, textord, "∃", "\\exists", true);
			defineSymbol(math, main, textord, "∇", "\\nabla", true);
			defineSymbol(math, main, textord, "♭", "\\flat", true);
			defineSymbol(math, main, textord, "ℓ", "\\ell", true);
			defineSymbol(math, main, textord, "♮", "\\natural", true);
			defineSymbol(math, main, textord, "♣", "\\clubsuit", true);
			defineSymbol(math, main, textord, "℘", "\\wp", true);
			defineSymbol(math, main, textord, "♯", "\\sharp", true);
			defineSymbol(math, main, textord, "♢", "\\diamondsuit", true);
			defineSymbol(math, main, textord, "ℜ", "\\Re", true);
			defineSymbol(math, main, textord, "♡", "\\heartsuit", true);
			defineSymbol(math, main, textord, "ℑ", "\\Im", true);
			defineSymbol(math, main, textord, "♠", "\\spadesuit", true);
			defineSymbol(math, main, textord, "§", "\\S", true);
			defineSymbol(symbols_text, main, textord, "§", "\\S");
			defineSymbol(math, main, textord, "¶", "\\P", true);
			defineSymbol(symbols_text, main, textord, "¶", "\\P");
			defineSymbol(math, main, textord, "†", "\\dag");
			defineSymbol(symbols_text, main, textord, "†", "\\dag");
			defineSymbol(symbols_text, main, textord, "†", "\\textdagger");
			defineSymbol(math, main, textord, "‡", "\\ddag");
			defineSymbol(symbols_text, main, textord, "‡", "\\ddag");
			defineSymbol(symbols_text, main, textord, "‡", "\\textdaggerdbl");
			defineSymbol(math, main, symbols_close, "⎱", "\\rmoustache", true);
			defineSymbol(math, main, symbols_open, "⎰", "\\lmoustache", true);
			defineSymbol(math, main, symbols_close, "⟯", "\\rgroup", true);
			defineSymbol(math, main, symbols_open, "⟮", "\\lgroup", true);
			defineSymbol(math, main, bin, "∓", "\\mp", true);
			defineSymbol(math, main, bin, "⊖", "\\ominus", true);
			defineSymbol(math, main, bin, "⊎", "\\uplus", true);
			defineSymbol(math, main, bin, "⊓", "\\sqcap", true);
			defineSymbol(math, main, bin, "∗", "\\ast");
			defineSymbol(math, main, bin, "⊔", "\\sqcup", true);
			defineSymbol(math, main, bin, "◯", "\\bigcirc", true);
			defineSymbol(math, main, bin, "∙", "\\bullet", true);
			defineSymbol(math, main, bin, "‡", "\\ddagger");
			defineSymbol(math, main, bin, "≀", "\\wr", true);
			defineSymbol(math, main, bin, "⨿", "\\amalg");
			defineSymbol(math, main, bin, "&", "\\And");
			defineSymbol(math, main, rel, "⟵", "\\longleftarrow", true);
			defineSymbol(math, main, rel, "⇐", "\\Leftarrow", true);
			defineSymbol(math, main, rel, "⟸", "\\Longleftarrow", true);
			defineSymbol(math, main, rel, "⟶", "\\longrightarrow", true);
			defineSymbol(math, main, rel, "⇒", "\\Rightarrow", true);
			defineSymbol(math, main, rel, "⟹", "\\Longrightarrow", true);
			defineSymbol(math, main, rel, "↔", "\\leftrightarrow", true);
			defineSymbol(math, main, rel, "⟷", "\\longleftrightarrow", true);
			defineSymbol(math, main, rel, "⇔", "\\Leftrightarrow", true);
			defineSymbol(math, main, rel, "⟺", "\\Longleftrightarrow", true);
			defineSymbol(math, main, rel, "↦", "\\mapsto", true);
			defineSymbol(math, main, rel, "⟼", "\\longmapsto", true);
			defineSymbol(math, main, rel, "↗", "\\nearrow", true);
			defineSymbol(math, main, rel, "↩", "\\hookleftarrow", true);
			defineSymbol(math, main, rel, "↪", "\\hookrightarrow", true);
			defineSymbol(math, main, rel, "↘", "\\searrow", true);
			defineSymbol(math, main, rel, "↼", "\\leftharpoonup", true);
			defineSymbol(math, main, rel, "⇀", "\\rightharpoonup", true);
			defineSymbol(math, main, rel, "↙", "\\swarrow", true);
			defineSymbol(math, main, rel, "↽", "\\leftharpoondown", true);
			defineSymbol(math, main, rel, "⇁", "\\rightharpoondown", true);
			defineSymbol(math, main, rel, "↖", "\\nwarrow", true);
			defineSymbol(math, main, rel, "⇌", "\\rightleftharpoons", true);
			defineSymbol(math, ams, rel, "≮", "\\nless", true);
			defineSymbol(math, ams, rel, "", "\\@nleqslant");
			defineSymbol(math, ams, rel, "", "\\@nleqq");
			defineSymbol(math, ams, rel, "⪇", "\\lneq", true);
			defineSymbol(math, ams, rel, "≨", "\\lneqq", true);
			defineSymbol(math, ams, rel, "", "\\@lvertneqq");
			defineSymbol(math, ams, rel, "⋦", "\\lnsim", true);
			defineSymbol(math, ams, rel, "⪉", "\\lnapprox", true);
			defineSymbol(math, ams, rel, "⊀", "\\nprec", true);
			defineSymbol(math, ams, rel, "⋠", "\\npreceq", true);
			defineSymbol(math, ams, rel, "⋨", "\\precnsim", true);
			defineSymbol(math, ams, rel, "⪹", "\\precnapprox", true);
			defineSymbol(math, ams, rel, "≁", "\\nsim", true);
			defineSymbol(math, ams, rel, "", "\\@nshortmid");
			defineSymbol(math, ams, rel, "∤", "\\nmid", true);
			defineSymbol(math, ams, rel, "⊬", "\\nvdash", true);
			defineSymbol(math, ams, rel, "⊭", "\\nvDash", true);
			defineSymbol(math, ams, rel, "⋪", "\\ntriangleleft");
			defineSymbol(math, ams, rel, "⋬", "\\ntrianglelefteq", true);
			defineSymbol(math, ams, rel, "⊊", "\\subsetneq", true);
			defineSymbol(math, ams, rel, "", "\\@varsubsetneq");
			defineSymbol(math, ams, rel, "⫋", "\\subsetneqq", true);
			defineSymbol(math, ams, rel, "", "\\@varsubsetneqq");
			defineSymbol(math, ams, rel, "≯", "\\ngtr", true);
			defineSymbol(math, ams, rel, "", "\\@ngeqslant");
			defineSymbol(math, ams, rel, "", "\\@ngeqq");
			defineSymbol(math, ams, rel, "⪈", "\\gneq", true);
			defineSymbol(math, ams, rel, "≩", "\\gneqq", true);
			defineSymbol(math, ams, rel, "", "\\@gvertneqq");
			defineSymbol(math, ams, rel, "⋧", "\\gnsim", true);
			defineSymbol(math, ams, rel, "⪊", "\\gnapprox", true);
			defineSymbol(math, ams, rel, "⊁", "\\nsucc", true);
			defineSymbol(math, ams, rel, "⋡", "\\nsucceq", true);
			defineSymbol(math, ams, rel, "⋩", "\\succnsim", true);
			defineSymbol(math, ams, rel, "⪺", "\\succnapprox", true);
			defineSymbol(math, ams, rel, "≆", "\\ncong", true);
			defineSymbol(math, ams, rel, "", "\\@nshortparallel");
			defineSymbol(math, ams, rel, "∦", "\\nparallel", true);
			defineSymbol(math, ams, rel, "⊯", "\\nVDash", true);
			defineSymbol(math, ams, rel, "⋫", "\\ntriangleright");
			defineSymbol(math, ams, rel, "⋭", "\\ntrianglerighteq", true);
			defineSymbol(math, ams, rel, "", "\\@nsupseteqq");
			defineSymbol(math, ams, rel, "⊋", "\\supsetneq", true);
			defineSymbol(math, ams, rel, "", "\\@varsupsetneq");
			defineSymbol(math, ams, rel, "⫌", "\\supsetneqq", true);
			defineSymbol(math, ams, rel, "", "\\@varsupsetneqq");
			defineSymbol(math, ams, rel, "⊮", "\\nVdash", true);
			defineSymbol(math, ams, rel, "⪵", "\\precneqq", true);
			defineSymbol(math, ams, rel, "⪶", "\\succneqq", true);
			defineSymbol(math, ams, rel, "", "\\@nsubseteqq");
			defineSymbol(math, ams, bin, "⊴", "\\unlhd");
			defineSymbol(math, ams, bin, "⊵", "\\unrhd");
			defineSymbol(math, ams, rel, "↚", "\\nleftarrow", true);
			defineSymbol(math, ams, rel, "↛", "\\nrightarrow", true);
			defineSymbol(math, ams, rel, "⇍", "\\nLeftarrow", true);
			defineSymbol(math, ams, rel, "⇏", "\\nRightarrow", true);
			defineSymbol(math, ams, rel, "↮", "\\nleftrightarrow", true);
			defineSymbol(math, ams, rel, "⇎", "\\nLeftrightarrow", true);
			defineSymbol(math, ams, rel, "△", "\\vartriangle");
			defineSymbol(math, ams, textord, "ℏ", "\\hslash");
			defineSymbol(math, ams, textord, "▽", "\\triangledown");
			defineSymbol(math, ams, textord, "◊", "\\lozenge");
			defineSymbol(math, ams, textord, "Ⓢ", "\\circledS");
			defineSymbol(math, ams, textord, "®", "\\circledR");
			defineSymbol(symbols_text, ams, textord, "®", "\\circledR");
			defineSymbol(math, ams, textord, "∡", "\\measuredangle", true);
			defineSymbol(math, ams, textord, "∄", "\\nexists");
			defineSymbol(math, ams, textord, "℧", "\\mho");
			defineSymbol(math, ams, textord, "Ⅎ", "\\Finv", true);
			defineSymbol(math, ams, textord, "⅁", "\\Game", true);
			defineSymbol(math, ams, textord, "‵", "\\backprime");
			defineSymbol(math, ams, textord, "▲", "\\blacktriangle");
			defineSymbol(math, ams, textord, "▼", "\\blacktriangledown");
			defineSymbol(math, ams, textord, "■", "\\blacksquare");
			defineSymbol(math, ams, textord, "⧫", "\\blacklozenge");
			defineSymbol(math, ams, textord, "★", "\\bigstar");
			defineSymbol(math, ams, textord, "∢", "\\sphericalangle", true);
			defineSymbol(math, ams, textord, "∁", "\\complement", true);
			defineSymbol(math, ams, textord, "ð", "\\eth", true);
			defineSymbol(symbols_text, main, textord, "ð", "ð");
			defineSymbol(math, ams, textord, "╱", "\\diagup");
			defineSymbol(math, ams, textord, "╲", "\\diagdown");
			defineSymbol(math, ams, textord, "□", "\\square");
			defineSymbol(math, ams, textord, "□", "\\Box");
			defineSymbol(math, ams, textord, "◊", "\\Diamond");
			defineSymbol(math, ams, textord, "¥", "\\yen", true);
			defineSymbol(symbols_text, ams, textord, "¥", "\\yen", true);
			defineSymbol(math, ams, textord, "✓", "\\checkmark", true);
			defineSymbol(symbols_text, ams, textord, "✓", "\\checkmark");
			defineSymbol(math, ams, textord, "ℶ", "\\beth", true);
			defineSymbol(math, ams, textord, "ℸ", "\\daleth", true);
			defineSymbol(math, ams, textord, "ℷ", "\\gimel", true);
			defineSymbol(math, ams, textord, "ϝ", "\\digamma", true);
			defineSymbol(math, ams, textord, "ϰ", "\\varkappa");
			defineSymbol(math, ams, symbols_open, "┌", "\\@ulcorner", true);
			defineSymbol(math, ams, symbols_close, "┐", "\\@urcorner", true);
			defineSymbol(math, ams, symbols_open, "└", "\\@llcorner", true);
			defineSymbol(math, ams, symbols_close, "┘", "\\@lrcorner", true);
			defineSymbol(math, ams, rel, "≦", "\\leqq", true);
			defineSymbol(math, ams, rel, "⩽", "\\leqslant", true);
			defineSymbol(math, ams, rel, "⪕", "\\eqslantless", true);
			defineSymbol(math, ams, rel, "≲", "\\lesssim", true);
			defineSymbol(math, ams, rel, "⪅", "\\lessapprox", true);
			defineSymbol(math, ams, rel, "≊", "\\approxeq", true);
			defineSymbol(math, ams, bin, "⋖", "\\lessdot");
			defineSymbol(math, ams, rel, "⋘", "\\lll", true);
			defineSymbol(math, ams, rel, "≶", "\\lessgtr", true);
			defineSymbol(math, ams, rel, "⋚", "\\lesseqgtr", true);
			defineSymbol(math, ams, rel, "⪋", "\\lesseqqgtr", true);
			defineSymbol(math, ams, rel, "≑", "\\doteqdot");
			defineSymbol(math, ams, rel, "≓", "\\risingdotseq", true);
			defineSymbol(math, ams, rel, "≒", "\\fallingdotseq", true);
			defineSymbol(math, ams, rel, "∽", "\\backsim", true);
			defineSymbol(math, ams, rel, "⋍", "\\backsimeq", true);
			defineSymbol(math, ams, rel, "⫅", "\\subseteqq", true);
			defineSymbol(math, ams, rel, "⋐", "\\Subset", true);
			defineSymbol(math, ams, rel, "⊏", "\\sqsubset", true);
			defineSymbol(math, ams, rel, "≼", "\\preccurlyeq", true);
			defineSymbol(math, ams, rel, "⋞", "\\curlyeqprec", true);
			defineSymbol(math, ams, rel, "≾", "\\precsim", true);
			defineSymbol(math, ams, rel, "⪷", "\\precapprox", true);
			defineSymbol(math, ams, rel, "⊲", "\\vartriangleleft");
			defineSymbol(math, ams, rel, "⊴", "\\trianglelefteq");
			defineSymbol(math, ams, rel, "⊨", "\\vDash", true);
			defineSymbol(math, ams, rel, "⊪", "\\Vvdash", true);
			defineSymbol(math, ams, rel, "⌣", "\\smallsmile");
			defineSymbol(math, ams, rel, "⌢", "\\smallfrown");
			defineSymbol(math, ams, rel, "≏", "\\bumpeq", true);
			defineSymbol(math, ams, rel, "≎", "\\Bumpeq", true);
			defineSymbol(math, ams, rel, "≧", "\\geqq", true);
			defineSymbol(math, ams, rel, "⩾", "\\geqslant", true);
			defineSymbol(math, ams, rel, "⪖", "\\eqslantgtr", true);
			defineSymbol(math, ams, rel, "≳", "\\gtrsim", true);
			defineSymbol(math, ams, rel, "⪆", "\\gtrapprox", true);
			defineSymbol(math, ams, bin, "⋗", "\\gtrdot");
			defineSymbol(math, ams, rel, "⋙", "\\ggg", true);
			defineSymbol(math, ams, rel, "≷", "\\gtrless", true);
			defineSymbol(math, ams, rel, "⋛", "\\gtreqless", true);
			defineSymbol(math, ams, rel, "⪌", "\\gtreqqless", true);
			defineSymbol(math, ams, rel, "≖", "\\eqcirc", true);
			defineSymbol(math, ams, rel, "≗", "\\circeq", true);
			defineSymbol(math, ams, rel, "≜", "\\triangleq", true);
			defineSymbol(math, ams, rel, "∼", "\\thicksim");
			defineSymbol(math, ams, rel, "≈", "\\thickapprox");
			defineSymbol(math, ams, rel, "⫆", "\\supseteqq", true);
			defineSymbol(math, ams, rel, "⋑", "\\Supset", true);
			defineSymbol(math, ams, rel, "⊐", "\\sqsupset", true);
			defineSymbol(math, ams, rel, "≽", "\\succcurlyeq", true);
			defineSymbol(math, ams, rel, "⋟", "\\curlyeqsucc", true);
			defineSymbol(math, ams, rel, "≿", "\\succsim", true);
			defineSymbol(math, ams, rel, "⪸", "\\succapprox", true);
			defineSymbol(math, ams, rel, "⊳", "\\vartriangleright");
			defineSymbol(math, ams, rel, "⊵", "\\trianglerighteq");
			defineSymbol(math, ams, rel, "⊩", "\\Vdash", true);
			defineSymbol(math, ams, rel, "∣", "\\shortmid");
			defineSymbol(math, ams, rel, "∥", "\\shortparallel");
			defineSymbol(math, ams, rel, "≬", "\\between", true);
			defineSymbol(math, ams, rel, "⋔", "\\pitchfork", true);
			defineSymbol(math, ams, rel, "∝", "\\varpropto");
			defineSymbol(math, ams, rel, "◀", "\\blacktriangleleft");
			defineSymbol(math, ams, rel, "∴", "\\therefore", true);
			defineSymbol(math, ams, rel, "∍", "\\backepsilon");
			defineSymbol(math, ams, rel, "▶", "\\blacktriangleright");
			defineSymbol(math, ams, rel, "∵", "\\because", true);
			defineSymbol(math, ams, rel, "⋘", "\\llless");
			defineSymbol(math, ams, rel, "⋙", "\\gggtr");
			defineSymbol(math, ams, bin, "⊲", "\\lhd");
			defineSymbol(math, ams, bin, "⊳", "\\rhd");
			defineSymbol(math, ams, rel, "≂", "\\eqsim", true);
			defineSymbol(math, main, rel, "⋈", "\\Join");
			defineSymbol(math, ams, rel, "≑", "\\Doteq", true);
			defineSymbol(math, ams, bin, "∔", "\\dotplus", true);
			defineSymbol(math, ams, bin, "∖", "\\smallsetminus");
			defineSymbol(math, ams, bin, "⋒", "\\Cap", true);
			defineSymbol(math, ams, bin, "⋓", "\\Cup", true);
			defineSymbol(math, ams, bin, "⩞", "\\doublebarwedge", true);
			defineSymbol(math, ams, bin, "⊟", "\\boxminus", true);
			defineSymbol(math, ams, bin, "⊞", "\\boxplus", true);
			defineSymbol(math, ams, bin, "⋇", "\\divideontimes", true);
			defineSymbol(math, ams, bin, "⋉", "\\ltimes", true);
			defineSymbol(math, ams, bin, "⋊", "\\rtimes", true);
			defineSymbol(math, ams, bin, "⋋", "\\leftthreetimes", true);
			defineSymbol(math, ams, bin, "⋌", "\\rightthreetimes", true);
			defineSymbol(math, ams, bin, "⋏", "\\curlywedge", true);
			defineSymbol(math, ams, bin, "⋎", "\\curlyvee", true);
			defineSymbol(math, ams, bin, "⊝", "\\circleddash", true);
			defineSymbol(math, ams, bin, "⊛", "\\circledast", true);
			defineSymbol(math, ams, bin, "⋅", "\\centerdot");
			defineSymbol(math, ams, bin, "⊺", "\\intercal", true);
			defineSymbol(math, ams, bin, "⋒", "\\doublecap");
			defineSymbol(math, ams, bin, "⋓", "\\doublecup");
			defineSymbol(math, ams, bin, "⊠", "\\boxtimes", true);
			defineSymbol(math, ams, rel, "⇢", "\\dashrightarrow", true);
			defineSymbol(math, ams, rel, "⇠", "\\dashleftarrow", true);
			defineSymbol(math, ams, rel, "⇇", "\\leftleftarrows", true);
			defineSymbol(math, ams, rel, "⇆", "\\leftrightarrows", true);
			defineSymbol(math, ams, rel, "⇚", "\\Lleftarrow", true);
			defineSymbol(math, ams, rel, "↞", "\\twoheadleftarrow", true);
			defineSymbol(math, ams, rel, "↢", "\\leftarrowtail", true);
			defineSymbol(math, ams, rel, "↫", "\\looparrowleft", true);
			defineSymbol(math, ams, rel, "⇋", "\\leftrightharpoons", true);
			defineSymbol(math, ams, rel, "↶", "\\curvearrowleft", true);
			defineSymbol(math, ams, rel, "↺", "\\circlearrowleft", true);
			defineSymbol(math, ams, rel, "↰", "\\Lsh", true);
			defineSymbol(math, ams, rel, "⇈", "\\upuparrows", true);
			defineSymbol(math, ams, rel, "↿", "\\upharpoonleft", true);
			defineSymbol(math, ams, rel, "⇃", "\\downharpoonleft", true);
			defineSymbol(math, main, rel, "⊶", "\\origof", true);
			defineSymbol(math, main, rel, "⊷", "\\imageof", true);
			defineSymbol(math, ams, rel, "⊸", "\\multimap", true);
			defineSymbol(math, ams, rel, "↭", "\\leftrightsquigarrow", true);
			defineSymbol(math, ams, rel, "⇉", "\\rightrightarrows", true);
			defineSymbol(math, ams, rel, "⇄", "\\rightleftarrows", true);
			defineSymbol(math, ams, rel, "↠", "\\twoheadrightarrow", true);
			defineSymbol(math, ams, rel, "↣", "\\rightarrowtail", true);
			defineSymbol(math, ams, rel, "↬", "\\looparrowright", true);
			defineSymbol(math, ams, rel, "↷", "\\curvearrowright", true);
			defineSymbol(math, ams, rel, "↻", "\\circlearrowright", true);
			defineSymbol(math, ams, rel, "↱", "\\Rsh", true);
			defineSymbol(math, ams, rel, "⇊", "\\downdownarrows", true);
			defineSymbol(math, ams, rel, "↾", "\\upharpoonright", true);
			defineSymbol(math, ams, rel, "⇂", "\\downharpoonright", true);
			defineSymbol(math, ams, rel, "⇝", "\\rightsquigarrow", true);
			defineSymbol(math, ams, rel, "⇝", "\\leadsto");
			defineSymbol(math, ams, rel, "⇛", "\\Rrightarrow", true);
			defineSymbol(math, ams, rel, "↾", "\\restriction");
			defineSymbol(math, main, textord, "‘", "`");
			defineSymbol(math, main, textord, "$", "\\$");
			defineSymbol(symbols_text, main, textord, "$", "\\$");
			defineSymbol(symbols_text, main, textord, "$", "\\textdollar");
			defineSymbol(math, main, textord, "%", "\\%");
			defineSymbol(symbols_text, main, textord, "%", "\\%");
			defineSymbol(math, main, textord, "_", "\\_");
			defineSymbol(symbols_text, main, textord, "_", "\\_");
			defineSymbol(symbols_text, main, textord, "_", "\\textunderscore");
			defineSymbol(math, main, textord, "∠", "\\angle", true);
			defineSymbol(math, main, textord, "∞", "\\infty", true);
			defineSymbol(math, main, textord, "′", "\\prime");
			defineSymbol(math, main, textord, "△", "\\triangle");
			defineSymbol(math, main, textord, "Γ", "\\Gamma", true);
			defineSymbol(math, main, textord, "Δ", "\\Delta", true);
			defineSymbol(math, main, textord, "Θ", "\\Theta", true);
			defineSymbol(math, main, textord, "Λ", "\\Lambda", true);
			defineSymbol(math, main, textord, "Ξ", "\\Xi", true);
			defineSymbol(math, main, textord, "Π", "\\Pi", true);
			defineSymbol(math, main, textord, "Σ", "\\Sigma", true);
			defineSymbol(math, main, textord, "Υ", "\\Upsilon", true);
			defineSymbol(math, main, textord, "Φ", "\\Phi", true);
			defineSymbol(math, main, textord, "Ψ", "\\Psi", true);
			defineSymbol(math, main, textord, "Ω", "\\Omega", true);
			defineSymbol(math, main, textord, "A", "Α");
			defineSymbol(math, main, textord, "B", "Β");
			defineSymbol(math, main, textord, "E", "Ε");
			defineSymbol(math, main, textord, "Z", "Ζ");
			defineSymbol(math, main, textord, "H", "Η");
			defineSymbol(math, main, textord, "I", "Ι");
			defineSymbol(math, main, textord, "K", "Κ");
			defineSymbol(math, main, textord, "M", "Μ");
			defineSymbol(math, main, textord, "N", "Ν");
			defineSymbol(math, main, textord, "O", "Ο");
			defineSymbol(math, main, textord, "P", "Ρ");
			defineSymbol(math, main, textord, "T", "Τ");
			defineSymbol(math, main, textord, "X", "Χ");
			defineSymbol(math, main, textord, "¬", "\\neg", true);
			defineSymbol(math, main, textord, "¬", "\\lnot");
			defineSymbol(math, main, textord, "⊤", "\\top");
			defineSymbol(math, main, textord, "⊥", "\\bot");
			defineSymbol(math, main, textord, "∅", "\\emptyset");
			defineSymbol(math, ams, textord, "∅", "\\varnothing");
			defineSymbol(math, main, mathord, "α", "\\alpha", true);
			defineSymbol(math, main, mathord, "β", "\\beta", true);
			defineSymbol(math, main, mathord, "γ", "\\gamma", true);
			defineSymbol(math, main, mathord, "δ", "\\delta", true);
			defineSymbol(math, main, mathord, "ϵ", "\\epsilon", true);
			defineSymbol(math, main, mathord, "ζ", "\\zeta", true);
			defineSymbol(math, main, mathord, "η", "\\eta", true);
			defineSymbol(math, main, mathord, "θ", "\\theta", true);
			defineSymbol(math, main, mathord, "ι", "\\iota", true);
			defineSymbol(math, main, mathord, "κ", "\\kappa", true);
			defineSymbol(math, main, mathord, "λ", "\\lambda", true);
			defineSymbol(math, main, mathord, "μ", "\\mu", true);
			defineSymbol(math, main, mathord, "ν", "\\nu", true);
			defineSymbol(math, main, mathord, "ξ", "\\xi", true);
			defineSymbol(math, main, mathord, "ο", "\\omicron", true);
			defineSymbol(math, main, mathord, "π", "\\pi", true);
			defineSymbol(math, main, mathord, "ρ", "\\rho", true);
			defineSymbol(math, main, mathord, "σ", "\\sigma", true);
			defineSymbol(math, main, mathord, "τ", "\\tau", true);
			defineSymbol(math, main, mathord, "υ", "\\upsilon", true);
			defineSymbol(math, main, mathord, "ϕ", "\\phi", true);
			defineSymbol(math, main, mathord, "χ", "\\chi", true);
			defineSymbol(math, main, mathord, "ψ", "\\psi", true);
			defineSymbol(math, main, mathord, "ω", "\\omega", true);
			defineSymbol(math, main, mathord, "ε", "\\varepsilon", true);
			defineSymbol(math, main, mathord, "ϑ", "\\vartheta", true);
			defineSymbol(math, main, mathord, "ϖ", "\\varpi", true);
			defineSymbol(math, main, mathord, "ϱ", "\\varrho", true);
			defineSymbol(math, main, mathord, "ς", "\\varsigma", true);
			defineSymbol(math, main, mathord, "φ", "\\varphi", true);
			defineSymbol(math, main, bin, "∗", "*", true);
			defineSymbol(math, main, bin, "+", "+");
			defineSymbol(math, main, bin, "−", "-", true);
			defineSymbol(math, main, bin, "⋅", "\\cdot", true);
			defineSymbol(math, main, bin, "∘", "\\circ", true);
			defineSymbol(math, main, bin, "÷", "\\div", true);
			defineSymbol(math, main, bin, "±", "\\pm", true);
			defineSymbol(math, main, bin, "×", "\\times", true);
			defineSymbol(math, main, bin, "∩", "\\cap", true);
			defineSymbol(math, main, bin, "∪", "\\cup", true);
			defineSymbol(math, main, bin, "∖", "\\setminus", true);
			defineSymbol(math, main, bin, "∧", "\\land");
			defineSymbol(math, main, bin, "∨", "\\lor");
			defineSymbol(math, main, bin, "∧", "\\wedge", true);
			defineSymbol(math, main, bin, "∨", "\\vee", true);
			defineSymbol(math, main, textord, "√", "\\surd");
			defineSymbol(math, main, symbols_open, "⟨", "\\langle", true);
			defineSymbol(math, main, symbols_open, "∣", "\\lvert");
			defineSymbol(math, main, symbols_open, "∥", "\\lVert");
			defineSymbol(math, main, symbols_close, "?", "?");
			defineSymbol(math, main, symbols_close, "!", "!");
			defineSymbol(math, main, symbols_close, "⟩", "\\rangle", true);
			defineSymbol(math, main, symbols_close, "∣", "\\rvert");
			defineSymbol(math, main, symbols_close, "∥", "\\rVert");
			defineSymbol(math, main, rel, "=", "=");
			defineSymbol(math, main, rel, ":", ":");
			defineSymbol(math, main, rel, "≈", "\\approx", true);
			defineSymbol(math, main, rel, "≅", "\\cong", true);
			defineSymbol(math, main, rel, "≥", "\\ge");
			defineSymbol(math, main, rel, "≥", "\\geq", true);
			defineSymbol(math, main, rel, "←", "\\gets");
			defineSymbol(math, main, rel, ">", "\\gt", true);
			defineSymbol(math, main, rel, "∈", "\\in", true);
			defineSymbol(math, main, rel, "", "\\@not");
			defineSymbol(math, main, rel, "⊂", "\\subset", true);
			defineSymbol(math, main, rel, "⊃", "\\supset", true);
			defineSymbol(math, main, rel, "⊆", "\\subseteq", true);
			defineSymbol(math, main, rel, "⊇", "\\supseteq", true);
			defineSymbol(math, ams, rel, "⊈", "\\nsubseteq", true);
			defineSymbol(math, ams, rel, "⊉", "\\nsupseteq", true);
			defineSymbol(math, main, rel, "⊨", "\\models");
			defineSymbol(math, main, rel, "←", "\\leftarrow", true);
			defineSymbol(math, main, rel, "≤", "\\le");
			defineSymbol(math, main, rel, "≤", "\\leq", true);
			defineSymbol(math, main, rel, "<", "\\lt", true);
			defineSymbol(math, main, rel, "→", "\\rightarrow", true);
			defineSymbol(math, main, rel, "→", "\\to");
			defineSymbol(math, ams, rel, "≱", "\\ngeq", true);
			defineSymbol(math, ams, rel, "≰", "\\nleq", true);
			defineSymbol(math, main, spacing, "\xA0", "\\ ");
			defineSymbol(math, main, spacing, "\xA0", "\\space");
			defineSymbol(math, main, spacing, "\xA0", "\\nobreakspace");
			defineSymbol(symbols_text, main, spacing, "\xA0", "\\ ");
			defineSymbol(symbols_text, main, spacing, "\xA0", " ");
			defineSymbol(symbols_text, main, spacing, "\xA0", "\\space");
			defineSymbol(symbols_text, main, spacing, "\xA0", "\\nobreakspace");
			defineSymbol(math, main, spacing, null, "\\nobreak");
			defineSymbol(math, main, spacing, null, "\\allowbreak");
			defineSymbol(math, main, punct, ",", ",");
			defineSymbol(math, main, punct, ";", ";");
			defineSymbol(math, ams, bin, "⊼", "\\barwedge", true);
			defineSymbol(math, ams, bin, "⊻", "\\veebar", true);
			defineSymbol(math, main, bin, "⊙", "\\odot", true);
			defineSymbol(math, main, bin, "⊕", "\\oplus", true);
			defineSymbol(math, main, bin, "⊗", "\\otimes", true);
			defineSymbol(math, main, textord, "∂", "\\partial", true);
			defineSymbol(math, main, bin, "⊘", "\\oslash", true);
			defineSymbol(math, ams, bin, "⊚", "\\circledcirc", true);
			defineSymbol(math, ams, bin, "⊡", "\\boxdot", true);
			defineSymbol(math, main, bin, "△", "\\bigtriangleup");
			defineSymbol(math, main, bin, "▽", "\\bigtriangledown");
			defineSymbol(math, main, bin, "†", "\\dagger");
			defineSymbol(math, main, bin, "⋄", "\\diamond");
			defineSymbol(math, main, bin, "⋆", "\\star");
			defineSymbol(math, main, bin, "◃", "\\triangleleft");
			defineSymbol(math, main, bin, "▹", "\\triangleright");
			defineSymbol(math, main, symbols_open, "{", "\\{");
			defineSymbol(symbols_text, main, textord, "{", "\\{");
			defineSymbol(symbols_text, main, textord, "{", "\\textbraceleft");
			defineSymbol(math, main, symbols_close, "}", "\\}");
			defineSymbol(symbols_text, main, textord, "}", "\\}");
			defineSymbol(symbols_text, main, textord, "}", "\\textbraceright");
			defineSymbol(math, main, symbols_open, "{", "\\lbrace");
			defineSymbol(math, main, symbols_close, "}", "\\rbrace");
			defineSymbol(math, main, symbols_open, "[", "\\lbrack", true);
			defineSymbol(symbols_text, main, textord, "[", "\\lbrack", true);
			defineSymbol(math, main, symbols_close, "]", "\\rbrack", true);
			defineSymbol(symbols_text, main, textord, "]", "\\rbrack", true);
			defineSymbol(math, main, symbols_open, "(", "\\lparen", true);
			defineSymbol(math, main, symbols_close, ")", "\\rparen", true);
			defineSymbol(symbols_text, main, textord, "<", "\\textless", true);
			defineSymbol(symbols_text, main, textord, ">", "\\textgreater", true);
			defineSymbol(math, main, symbols_open, "⌊", "\\lfloor", true);
			defineSymbol(math, main, symbols_close, "⌋", "\\rfloor", true);
			defineSymbol(math, main, symbols_open, "⌈", "\\lceil", true);
			defineSymbol(math, main, symbols_close, "⌉", "\\rceil", true);
			defineSymbol(math, main, textord, "\\", "\\backslash");
			defineSymbol(math, main, textord, "∣", "|");
			defineSymbol(math, main, textord, "∣", "\\vert");
			defineSymbol(symbols_text, main, textord, "|", "\\textbar", true);
			defineSymbol(math, main, textord, "∥", "\\|");
			defineSymbol(math, main, textord, "∥", "\\Vert");
			defineSymbol(symbols_text, main, textord, "∥", "\\textbardbl");
			defineSymbol(symbols_text, main, textord, "~", "\\textasciitilde");
			defineSymbol(symbols_text, main, textord, "\\", "\\textbackslash");
			defineSymbol(symbols_text, main, textord, "^", "\\textasciicircum");
			defineSymbol(math, main, rel, "↑", "\\uparrow", true);
			defineSymbol(math, main, rel, "⇑", "\\Uparrow", true);
			defineSymbol(math, main, rel, "↓", "\\downarrow", true);
			defineSymbol(math, main, rel, "⇓", "\\Downarrow", true);
			defineSymbol(math, main, rel, "↕", "\\updownarrow", true);
			defineSymbol(math, main, rel, "⇕", "\\Updownarrow", true);
			defineSymbol(math, main, op, "∐", "\\coprod");
			defineSymbol(math, main, op, "⋁", "\\bigvee");
			defineSymbol(math, main, op, "⋀", "\\bigwedge");
			defineSymbol(math, main, op, "⨄", "\\biguplus");
			defineSymbol(math, main, op, "⋂", "\\bigcap");
			defineSymbol(math, main, op, "⋃", "\\bigcup");
			defineSymbol(math, main, op, "∫", "\\int");
			defineSymbol(math, main, op, "∫", "\\intop");
			defineSymbol(math, main, op, "∬", "\\iint");
			defineSymbol(math, main, op, "∭", "\\iiint");
			defineSymbol(math, main, op, "∏", "\\prod");
			defineSymbol(math, main, op, "∑", "\\sum");
			defineSymbol(math, main, op, "⨂", "\\bigotimes");
			defineSymbol(math, main, op, "⨁", "\\bigoplus");
			defineSymbol(math, main, op, "⨀", "\\bigodot");
			defineSymbol(math, main, op, "∮", "\\oint");
			defineSymbol(math, main, op, "∯", "\\oiint");
			defineSymbol(math, main, op, "∰", "\\oiiint");
			defineSymbol(math, main, op, "⨆", "\\bigsqcup");
			defineSymbol(math, main, op, "∫", "\\smallint");
			defineSymbol(symbols_text, main, inner, "…", "\\textellipsis");
			defineSymbol(math, main, inner, "…", "\\mathellipsis");
			defineSymbol(symbols_text, main, inner, "…", "\\ldots", true);
			defineSymbol(math, main, inner, "…", "\\ldots", true);
			defineSymbol(math, main, inner, "⋯", "\\@cdots", true);
			defineSymbol(math, main, inner, "⋱", "\\ddots", true);
			defineSymbol(math, main, textord, "⋮", "\\varvdots");
			defineSymbol(symbols_text, main, textord, "⋮", "\\varvdots");
			defineSymbol(math, main, accent, "ˊ", "\\acute");
			defineSymbol(math, main, accent, "ˋ", "\\grave");
			defineSymbol(math, main, accent, "¨", "\\ddot");
			defineSymbol(math, main, accent, "~", "\\tilde");
			defineSymbol(math, main, accent, "ˉ", "\\bar");
			defineSymbol(math, main, accent, "˘", "\\breve");
			defineSymbol(math, main, accent, "ˇ", "\\check");
			defineSymbol(math, main, accent, "^", "\\hat");
			defineSymbol(math, main, accent, "⃗", "\\vec");
			defineSymbol(math, main, accent, "˙", "\\dot");
			defineSymbol(math, main, accent, "˚", "\\mathring");
			defineSymbol(math, main, mathord, "", "\\@imath");
			defineSymbol(math, main, mathord, "", "\\@jmath");
			defineSymbol(math, main, textord, "ı", "ı");
			defineSymbol(math, main, textord, "ȷ", "ȷ");
			defineSymbol(symbols_text, main, textord, "ı", "\\i", true);
			defineSymbol(symbols_text, main, textord, "ȷ", "\\j", true);
			defineSymbol(symbols_text, main, textord, "ß", "\\ss", true);
			defineSymbol(symbols_text, main, textord, "æ", "\\ae", true);
			defineSymbol(symbols_text, main, textord, "œ", "\\oe", true);
			defineSymbol(symbols_text, main, textord, "ø", "\\o", true);
			defineSymbol(symbols_text, main, textord, "Æ", "\\AE", true);
			defineSymbol(symbols_text, main, textord, "Œ", "\\OE", true);
			defineSymbol(symbols_text, main, textord, "Ø", "\\O", true);
			defineSymbol(symbols_text, main, accent, "ˊ", "\\'");
			defineSymbol(symbols_text, main, accent, "ˋ", "\\`");
			defineSymbol(symbols_text, main, accent, "ˆ", "\\^");
			defineSymbol(symbols_text, main, accent, "˜", "\\~");
			defineSymbol(symbols_text, main, accent, "ˉ", "\\=");
			defineSymbol(symbols_text, main, accent, "˘", "\\u");
			defineSymbol(symbols_text, main, accent, "˙", "\\.");
			defineSymbol(symbols_text, main, accent, "¸", "\\c");
			defineSymbol(symbols_text, main, accent, "˚", "\\r");
			defineSymbol(symbols_text, main, accent, "ˇ", "\\v");
			defineSymbol(symbols_text, main, accent, "¨", "\\\"");
			defineSymbol(symbols_text, main, accent, "˝", "\\H");
			defineSymbol(symbols_text, main, accent, "◯", "\\textcircled");
			const ligatures = {
				"--": true,
				"---": true,
				"``": true,
				"''": true
			};
			defineSymbol(symbols_text, main, textord, "–", "--", true);
			defineSymbol(symbols_text, main, textord, "–", "\\textendash");
			defineSymbol(symbols_text, main, textord, "—", "---", true);
			defineSymbol(symbols_text, main, textord, "—", "\\textemdash");
			defineSymbol(symbols_text, main, textord, "‘", "`", true);
			defineSymbol(symbols_text, main, textord, "‘", "\\textquoteleft");
			defineSymbol(symbols_text, main, textord, "’", "'", true);
			defineSymbol(symbols_text, main, textord, "’", "\\textquoteright");
			defineSymbol(symbols_text, main, textord, "“", "``", true);
			defineSymbol(symbols_text, main, textord, "“", "\\textquotedblleft");
			defineSymbol(symbols_text, main, textord, "”", "''", true);
			defineSymbol(symbols_text, main, textord, "”", "\\textquotedblright");
			defineSymbol(math, main, textord, "°", "\\degree", true);
			defineSymbol(symbols_text, main, textord, "°", "\\degree");
			defineSymbol(symbols_text, main, textord, "°", "\\textdegree", true);
			defineSymbol(math, main, textord, "£", "\\pounds");
			defineSymbol(math, main, textord, "£", "\\mathsterling", true);
			defineSymbol(symbols_text, main, textord, "£", "\\pounds");
			defineSymbol(symbols_text, main, textord, "£", "\\textsterling", true);
			defineSymbol(math, ams, textord, "✠", "\\maltese");
			defineSymbol(symbols_text, ams, textord, "✠", "\\maltese");
			const mathTextSymbols = "0123456789/@.\"";
			for (let i = 0; i < 14; i++) {
				const ch = mathTextSymbols.charAt(i);
				defineSymbol(math, main, textord, ch, ch);
			}
			const textSymbols = "0123456789!@*()-=+\";:?/.,";
			for (let i = 0; i < 25; i++) {
				const ch = textSymbols.charAt(i);
				defineSymbol(symbols_text, main, textord, ch, ch);
			}
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for (let i = 0; i < 52; i++) {
				const ch = letters.charAt(i);
				defineSymbol(math, main, mathord, ch, ch);
				defineSymbol(symbols_text, main, textord, ch, ch);
			}
			defineSymbol(math, ams, textord, "C", "ℂ");
			defineSymbol(symbols_text, ams, textord, "C", "ℂ");
			defineSymbol(math, ams, textord, "H", "ℍ");
			defineSymbol(symbols_text, ams, textord, "H", "ℍ");
			defineSymbol(math, ams, textord, "N", "ℕ");
			defineSymbol(symbols_text, ams, textord, "N", "ℕ");
			defineSymbol(math, ams, textord, "P", "ℙ");
			defineSymbol(symbols_text, ams, textord, "P", "ℙ");
			defineSymbol(math, ams, textord, "Q", "ℚ");
			defineSymbol(symbols_text, ams, textord, "Q", "ℚ");
			defineSymbol(math, ams, textord, "R", "ℝ");
			defineSymbol(symbols_text, ams, textord, "R", "ℝ");
			defineSymbol(math, ams, textord, "Z", "ℤ");
			defineSymbol(symbols_text, ams, textord, "Z", "ℤ");
			defineSymbol(math, main, mathord, "h", "ℎ");
			defineSymbol(symbols_text, main, mathord, "h", "ℎ");
			let wideChar = "";
			for (let i = 0; i < 52; i++) {
				const ch = letters.charAt(i);
				wideChar = String.fromCharCode(55349, 56320 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56372 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56424 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56580 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56684 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56736 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56788 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56840 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 56944 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				if (i < 26) {
					wideChar = String.fromCharCode(55349, 56632 + i);
					defineSymbol(math, main, mathord, ch, wideChar);
					defineSymbol(symbols_text, main, textord, ch, wideChar);
					wideChar = String.fromCharCode(55349, 56476 + i);
					defineSymbol(math, main, mathord, ch, wideChar);
					defineSymbol(symbols_text, main, textord, ch, wideChar);
				}
			}
			wideChar = String.fromCharCode(55349, 56668);
			defineSymbol(math, main, mathord, "k", wideChar);
			defineSymbol(symbols_text, main, textord, "k", wideChar);
			for (let i = 0; i < 10; i++) {
				const ch = i.toString();
				wideChar = String.fromCharCode(55349, 57294 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 57314 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 57324 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
				wideChar = String.fromCharCode(55349, 57334 + i);
				defineSymbol(math, main, mathord, ch, wideChar);
				defineSymbol(symbols_text, main, textord, ch, wideChar);
			}
			const extraLatin = "ÐÞþ";
			for (let i = 0; i < 3; i++) {
				const ch = extraLatin.charAt(i);
				defineSymbol(math, main, mathord, ch, ch);
				defineSymbol(symbols_text, main, textord, ch, ch);
			}
			const wideLatinLetterData = [
				[
					"mathbf",
					"textbf",
					"Main-Bold"
				],
				[
					"mathbf",
					"textbf",
					"Main-Bold"
				],
				[
					"mathnormal",
					"textit",
					"Math-Italic"
				],
				[
					"mathnormal",
					"textit",
					"Math-Italic"
				],
				[
					"boldsymbol",
					"boldsymbol",
					"Main-BoldItalic"
				],
				[
					"boldsymbol",
					"boldsymbol",
					"Main-BoldItalic"
				],
				[
					"mathscr",
					"textscr",
					"Script-Regular"
				],
				[
					"",
					"",
					""
				],
				[
					"",
					"",
					""
				],
				[
					"",
					"",
					""
				],
				[
					"mathfrak",
					"textfrak",
					"Fraktur-Regular"
				],
				[
					"mathfrak",
					"textfrak",
					"Fraktur-Regular"
				],
				[
					"mathbb",
					"textbb",
					"AMS-Regular"
				],
				[
					"mathbb",
					"textbb",
					"AMS-Regular"
				],
				[
					"mathboldfrak",
					"textboldfrak",
					"Fraktur-Regular"
				],
				[
					"mathboldfrak",
					"textboldfrak",
					"Fraktur-Regular"
				],
				[
					"mathsf",
					"textsf",
					"SansSerif-Regular"
				],
				[
					"mathsf",
					"textsf",
					"SansSerif-Regular"
				],
				[
					"mathboldsf",
					"textboldsf",
					"SansSerif-Bold"
				],
				[
					"mathboldsf",
					"textboldsf",
					"SansSerif-Bold"
				],
				[
					"mathitsf",
					"textitsf",
					"SansSerif-Italic"
				],
				[
					"mathitsf",
					"textitsf",
					"SansSerif-Italic"
				],
				[
					"",
					"",
					""
				],
				[
					"",
					"",
					""
				],
				[
					"mathtt",
					"texttt",
					"Typewriter-Regular"
				],
				[
					"mathtt",
					"texttt",
					"Typewriter-Regular"
				]
			];
			const wideNumeralData = [
				[
					"mathbf",
					"textbf",
					"Main-Bold"
				],
				[
					"",
					"",
					""
				],
				[
					"mathsf",
					"textsf",
					"SansSerif-Regular"
				],
				[
					"mathboldsf",
					"textboldsf",
					"SansSerif-Bold"
				],
				[
					"mathtt",
					"texttt",
					"Typewriter-Regular"
				]
			];
			const wideCharacterFont = function(wideChar$1, mode) {
				const H = wideChar$1.charCodeAt(0);
				const L = wideChar$1.charCodeAt(1);
				const codePoint = (H - 55296) * 1024 + (L - 56320) + 65536;
				const j = mode === "math" ? 0 : 1;
				if (119808 <= codePoint && codePoint < 120484) {
					const i = Math.floor((codePoint - 119808) / 26);
					return [wideLatinLetterData[i][2], wideLatinLetterData[i][j]];
				} else if (120782 <= codePoint && codePoint <= 120831) {
					const i = Math.floor((codePoint - 120782) / 10);
					return [wideNumeralData[i][2], wideNumeralData[i][j]];
				} else if (codePoint === 120485 || codePoint === 120486) return [wideLatinLetterData[0][2], wideLatinLetterData[0][j]];
				else if (120486 < codePoint && codePoint < 120782) return ["", ""];
				else throw new src_ParseError("Unsupported character: " + wideChar$1);
			};
			class DocumentFragment {
				constructor(children) {
					this.children = void 0;
					this.classes = void 0;
					this.height = void 0;
					this.depth = void 0;
					this.maxFontSize = void 0;
					this.style = void 0;
					this.children = children;
					this.classes = [];
					this.height = 0;
					this.depth = 0;
					this.maxFontSize = 0;
					this.style = {};
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					const frag = document.createDocumentFragment();
					for (let i = 0; i < this.children.length; i++) frag.appendChild(this.children[i].toNode());
					return frag;
				}
				toMarkup() {
					let markup = "";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					return markup;
				}
				toText() {
					const toText = (child) => child.toText();
					return this.children.map(toText).join("");
				}
			}
			const lookupSymbol = function(value, fontName, mode) {
				if (src_symbols[mode][value] && src_symbols[mode][value].replace) value = src_symbols[mode][value].replace;
				return {
					value,
					metrics: getCharacterMetrics(value, fontName, mode)
				};
			};
			const makeSymbol = function(value, fontName, mode, options, classes) {
				const lookup = lookupSymbol(value, fontName, mode);
				const metrics = lookup.metrics;
				value = lookup.value;
				let symbolNode;
				if (metrics) {
					let italic = metrics.italic;
					if (mode === "text" || options && options.font === "mathit") italic = 0;
					symbolNode = new SymbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, metrics.width, classes);
				} else {
					typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + value + "' in style '" + fontName + "' and mode '" + mode + "'"));
					symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
				}
				if (options) {
					symbolNode.maxFontSize = options.sizeMultiplier;
					if (options.style.isTight()) symbolNode.classes.push("mtight");
					const color = options.getColor();
					if (color) symbolNode.style.color = color;
				}
				return symbolNode;
			};
			const mathsym = function(value, mode, options, classes) {
				if (classes === void 0) classes = [];
				if (options.font === "boldsymbol" && lookupSymbol(value, "Main-Bold", mode).metrics) return makeSymbol(value, "Main-Bold", mode, options, classes.concat(["mathbf"]));
				else if (value === "\\" || src_symbols[mode][value].font === "main") return makeSymbol(value, "Main-Regular", mode, options, classes);
				else return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
			};
			const boldsymbol = function(value, mode, options, classes, type$1) {
				if (type$1 !== "textord" && lookupSymbol(value, "Math-BoldItalic", mode).metrics) return {
					fontName: "Math-BoldItalic",
					fontClass: "boldsymbol"
				};
				else return {
					fontName: "Main-Bold",
					fontClass: "mathbf"
				};
			};
			const makeOrd = function(group, options, type$1) {
				const mode = group.mode;
				const text = group.text;
				const classes = ["mord"];
				const isFont = mode === "math" || mode === "text" && options.font;
				const fontOrFamily = isFont ? options.font : options.fontFamily;
				let wideFontName = "";
				let wideFontClass = "";
				if (text.charCodeAt(0) === 55349) [wideFontName, wideFontClass] = wideCharacterFont(text, mode);
				if (wideFontName.length > 0) return makeSymbol(text, wideFontName, mode, options, classes.concat(wideFontClass));
				else if (fontOrFamily) {
					let fontName;
					let fontClasses;
					if (fontOrFamily === "boldsymbol") {
						const fontData = boldsymbol(text, mode, options, classes, type$1);
						fontName = fontData.fontName;
						fontClasses = [fontData.fontClass];
					} else if (isFont) {
						fontName = fontMap[fontOrFamily].fontName;
						fontClasses = [fontOrFamily];
					} else {
						fontName = retrieveTextFontName(fontOrFamily, options.fontWeight, options.fontShape);
						fontClasses = [
							fontOrFamily,
							options.fontWeight,
							options.fontShape
						];
					}
					if (lookupSymbol(text, fontName, mode).metrics) return makeSymbol(text, fontName, mode, options, classes.concat(fontClasses));
					else if (ligatures.hasOwnProperty(text) && fontName.slice(0, 10) === "Typewriter") {
						const parts = [];
						for (let i = 0; i < text.length; i++) parts.push(makeSymbol(text[i], fontName, mode, options, classes.concat(fontClasses)));
						return makeFragment(parts);
					}
				}
				if (type$1 === "mathord") return makeSymbol(text, "Math-Italic", mode, options, classes.concat(["mathnormal"]));
				else if (type$1 === "textord") {
					const font = src_symbols[mode][text] && src_symbols[mode][text].font;
					if (font === "ams") return makeSymbol(text, retrieveTextFontName("amsrm", options.fontWeight, options.fontShape), mode, options, classes.concat("amsrm", options.fontWeight, options.fontShape));
					else if (font === "main" || !font) return makeSymbol(text, retrieveTextFontName("textrm", options.fontWeight, options.fontShape), mode, options, classes.concat(options.fontWeight, options.fontShape));
					else {
						const fontName = retrieveTextFontName(font, options.fontWeight, options.fontShape);
						return makeSymbol(text, fontName, mode, options, classes.concat(fontName, options.fontWeight, options.fontShape));
					}
				} else throw new Error("unexpected type: " + type$1 + " in makeOrd");
			};
			const canCombine = (prev, next) => {
				if (createClass(prev.classes) !== createClass(next.classes) || prev.skew !== next.skew || prev.maxFontSize !== next.maxFontSize) return false;
				if (prev.classes.length === 1) {
					const cls = prev.classes[0];
					if (cls === "mbin" || cls === "mord") return false;
				}
				for (const style in prev.style) if (prev.style.hasOwnProperty(style) && prev.style[style] !== next.style[style]) return false;
				for (const style in next.style) if (next.style.hasOwnProperty(style) && prev.style[style] !== next.style[style]) return false;
				return true;
			};
			const tryCombineChars = (chars) => {
				for (let i = 0; i < chars.length - 1; i++) {
					const prev = chars[i];
					const next = chars[i + 1];
					if (prev instanceof SymbolNode && next instanceof SymbolNode && canCombine(prev, next)) {
						prev.text += next.text;
						prev.height = Math.max(prev.height, next.height);
						prev.depth = Math.max(prev.depth, next.depth);
						prev.italic = next.italic;
						chars.splice(i + 1, 1);
						i--;
					}
				}
				return chars;
			};
			const sizeElementFromChildren = function(elem) {
				let height = 0;
				let depth = 0;
				let maxFontSize = 0;
				for (let i = 0; i < elem.children.length; i++) {
					const child = elem.children[i];
					if (child.height > height) height = child.height;
					if (child.depth > depth) depth = child.depth;
					if (child.maxFontSize > maxFontSize) maxFontSize = child.maxFontSize;
				}
				elem.height = height;
				elem.depth = depth;
				elem.maxFontSize = maxFontSize;
			};
			const makeSpan = function(classes, children, options, style) {
				const span = new Span(classes, children, options, style);
				sizeElementFromChildren(span);
				return span;
			};
			const makeSvgSpan = (classes, children, options, style) => new Span(classes, children, options, style);
			const makeLineSpan = function(className, options, thickness) {
				const line = makeSpan([className], [], options);
				line.height = Math.max(thickness || options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
				line.style.borderBottomWidth = makeEm(line.height);
				line.maxFontSize = 1;
				return line;
			};
			const makeAnchor = function(href, classes, children, options) {
				const anchor = new Anchor(href, classes, children, options);
				sizeElementFromChildren(anchor);
				return anchor;
			};
			const makeFragment = function(children) {
				const fragment = new DocumentFragment(children);
				sizeElementFromChildren(fragment);
				return fragment;
			};
			const wrapFragment = function(group, options) {
				if (group instanceof DocumentFragment) return makeSpan([], [group], options);
				return group;
			};
			const getVListChildrenAndDepth = function(params) {
				if (params.positionType === "individualShift") {
					const oldChildren = params.children;
					const children = [oldChildren[0]];
					const depth$1 = -oldChildren[0].shift - oldChildren[0].elem.depth;
					let currPos = depth$1;
					for (let i = 1; i < oldChildren.length; i++) {
						const diff = -oldChildren[i].shift - currPos - oldChildren[i].elem.depth;
						const size = diff - (oldChildren[i - 1].elem.height + oldChildren[i - 1].elem.depth);
						currPos = currPos + diff;
						children.push({
							type: "kern",
							size
						});
						children.push(oldChildren[i]);
					}
					return {
						children,
						depth: depth$1
					};
				}
				let depth;
				if (params.positionType === "top") {
					let bottom = params.positionData;
					for (let i = 0; i < params.children.length; i++) {
						const child = params.children[i];
						bottom -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
					}
					depth = bottom;
				} else if (params.positionType === "bottom") depth = -params.positionData;
				else {
					const firstChild = params.children[0];
					if (firstChild.type !== "elem") throw new Error("First child must have type \"elem\".");
					if (params.positionType === "shift") depth = -firstChild.elem.depth - params.positionData;
					else if (params.positionType === "firstBaseline") depth = -firstChild.elem.depth;
					else throw new Error("Invalid positionType " + params.positionType + ".");
				}
				return {
					children: params.children,
					depth
				};
			};
			const makeVList = function(params, options) {
				const { children, depth } = getVListChildrenAndDepth(params);
				let pstrutSize = 0;
				for (let i = 0; i < children.length; i++) {
					const child = children[i];
					if (child.type === "elem") {
						const elem = child.elem;
						pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
					}
				}
				pstrutSize += 2;
				const pstrut = makeSpan(["pstrut"], []);
				pstrut.style.height = makeEm(pstrutSize);
				const realChildren = [];
				let minPos = depth;
				let maxPos = depth;
				let currPos = depth;
				for (let i = 0; i < children.length; i++) {
					const child = children[i];
					if (child.type === "kern") currPos += child.size;
					else {
						const elem = child.elem;
						const classes = child.wrapperClasses || [];
						const style = child.wrapperStyle || {};
						const childWrap = makeSpan(classes, [pstrut, elem], void 0, style);
						childWrap.style.top = makeEm(-pstrutSize - currPos - elem.depth);
						if (child.marginLeft) childWrap.style.marginLeft = child.marginLeft;
						if (child.marginRight) childWrap.style.marginRight = child.marginRight;
						realChildren.push(childWrap);
						currPos += elem.height + elem.depth;
					}
					minPos = Math.min(minPos, currPos);
					maxPos = Math.max(maxPos, currPos);
				}
				const vlist = makeSpan(["vlist"], realChildren);
				vlist.style.height = makeEm(maxPos);
				let rows;
				if (minPos < 0) {
					const depthStrut = makeSpan(["vlist"], [makeSpan([], [])]);
					depthStrut.style.height = makeEm(-minPos);
					rows = [makeSpan(["vlist-r"], [vlist, makeSpan(["vlist-s"], [new SymbolNode("​")])]), makeSpan(["vlist-r"], [depthStrut])];
				} else rows = [makeSpan(["vlist-r"], [vlist])];
				const vtable = makeSpan(["vlist-t"], rows);
				if (rows.length === 2) vtable.classes.push("vlist-t2");
				vtable.height = maxPos;
				vtable.depth = -minPos;
				return vtable;
			};
			const makeGlue = (measurement, options) => {
				const rule = makeSpan(["mspace"], [], options);
				const size = calculateSize(measurement, options);
				rule.style.marginRight = makeEm(size);
				return rule;
			};
			const retrieveTextFontName = function(fontFamily, fontWeight, fontShape) {
				let baseFontName = "";
				switch (fontFamily) {
					case "amsrm":
						baseFontName = "AMS";
						break;
					case "textrm":
						baseFontName = "Main";
						break;
					case "textsf":
						baseFontName = "SansSerif";
						break;
					case "texttt":
						baseFontName = "Typewriter";
						break;
					default: baseFontName = fontFamily;
				}
				let fontStylesName;
				if (fontWeight === "textbf" && fontShape === "textit") fontStylesName = "BoldItalic";
				else if (fontWeight === "textbf") fontStylesName = "Bold";
				else if (fontWeight === "textit") fontStylesName = "Italic";
				else fontStylesName = "Regular";
				return baseFontName + "-" + fontStylesName;
			};
			const fontMap = {
				"mathbf": {
					variant: "bold",
					fontName: "Main-Bold"
				},
				"mathrm": {
					variant: "normal",
					fontName: "Main-Regular"
				},
				"textit": {
					variant: "italic",
					fontName: "Main-Italic"
				},
				"mathit": {
					variant: "italic",
					fontName: "Main-Italic"
				},
				"mathnormal": {
					variant: "italic",
					fontName: "Math-Italic"
				},
				"mathsfit": {
					variant: "sans-serif-italic",
					fontName: "SansSerif-Italic"
				},
				"mathbb": {
					variant: "double-struck",
					fontName: "AMS-Regular"
				},
				"mathcal": {
					variant: "script",
					fontName: "Caligraphic-Regular"
				},
				"mathfrak": {
					variant: "fraktur",
					fontName: "Fraktur-Regular"
				},
				"mathscr": {
					variant: "script",
					fontName: "Script-Regular"
				},
				"mathsf": {
					variant: "sans-serif",
					fontName: "SansSerif-Regular"
				},
				"mathtt": {
					variant: "monospace",
					fontName: "Typewriter-Regular"
				}
			};
			const svgData = {
				vec: [
					"vec",
					.471,
					.714
				],
				oiintSize1: [
					"oiintSize1",
					.957,
					.499
				],
				oiintSize2: [
					"oiintSize2",
					1.472,
					.659
				],
				oiiintSize1: [
					"oiiintSize1",
					1.304,
					.499
				],
				oiiintSize2: [
					"oiiintSize2",
					1.98,
					.659
				]
			};
			const staticSvg = function(value, options) {
				const [pathName, width, height] = svgData[value];
				const span = makeSvgSpan(["overlay"], [new SvgNode([new PathNode(pathName)], {
					"width": makeEm(width),
					"height": makeEm(height),
					"style": "width:" + makeEm(width),
					"viewBox": "0 0 " + 1e3 * width + " " + 1e3 * height,
					"preserveAspectRatio": "xMinYMin"
				})], options);
				span.height = height;
				span.style.height = makeEm(height);
				span.style.width = makeEm(width);
				return span;
			};
			var buildCommon = {
				fontMap,
				makeSymbol,
				mathsym,
				makeSpan,
				makeSvgSpan,
				makeLineSpan,
				makeAnchor,
				makeFragment,
				wrapFragment,
				makeVList,
				makeOrd,
				makeGlue,
				staticSvg,
				svgData,
				tryCombineChars
			};
			const thinspace = {
				number: 3,
				unit: "mu"
			};
			const mediumspace = {
				number: 4,
				unit: "mu"
			};
			const thickspace = {
				number: 5,
				unit: "mu"
			};
			const spacings = {
				mord: {
					mop: thinspace,
					mbin: mediumspace,
					mrel: thickspace,
					minner: thinspace
				},
				mop: {
					mord: thinspace,
					mop: thinspace,
					mrel: thickspace,
					minner: thinspace
				},
				mbin: {
					mord: mediumspace,
					mop: mediumspace,
					mopen: mediumspace,
					minner: mediumspace
				},
				mrel: {
					mord: thickspace,
					mop: thickspace,
					mopen: thickspace,
					minner: thickspace
				},
				mopen: {},
				mclose: {
					mop: thinspace,
					mbin: mediumspace,
					mrel: thickspace,
					minner: thinspace
				},
				mpunct: {
					mord: thinspace,
					mop: thinspace,
					mrel: thickspace,
					mopen: thinspace,
					mclose: thinspace,
					mpunct: thinspace,
					minner: thinspace
				},
				minner: {
					mord: thinspace,
					mop: thinspace,
					mbin: mediumspace,
					mrel: thickspace,
					mopen: thinspace,
					mpunct: thinspace,
					minner: thinspace
				}
			};
			const tightSpacings = {
				mord: { mop: thinspace },
				mop: {
					mord: thinspace,
					mop: thinspace
				},
				mbin: {},
				mrel: {},
				mopen: {},
				mclose: { mop: thinspace },
				mpunct: {},
				minner: { mop: thinspace }
			};
			const _functions = {};
			const _htmlGroupBuilders = {};
			const _mathmlGroupBuilders = {};
			function defineFunction(_ref) {
				let { type: type$1, names, props, handler, htmlBuilder: htmlBuilder$1, mathmlBuilder: mathmlBuilder$1 } = _ref;
				const data = {
					type: type$1,
					numArgs: props.numArgs,
					argTypes: props.argTypes,
					allowedInArgument: !!props.allowedInArgument,
					allowedInText: !!props.allowedInText,
					allowedInMath: props.allowedInMath === void 0 ? true : props.allowedInMath,
					numOptionalArgs: props.numOptionalArgs || 0,
					infix: !!props.infix,
					primitive: !!props.primitive,
					handler
				};
				for (let i = 0; i < names.length; ++i) _functions[names[i]] = data;
				if (type$1) {
					if (htmlBuilder$1) _htmlGroupBuilders[type$1] = htmlBuilder$1;
					if (mathmlBuilder$1) _mathmlGroupBuilders[type$1] = mathmlBuilder$1;
				}
			}
			function defineFunctionBuilders(_ref2) {
				let { type: type$1, htmlBuilder: htmlBuilder$1, mathmlBuilder: mathmlBuilder$1 } = _ref2;
				defineFunction({
					type: type$1,
					names: [],
					props: { numArgs: 0 },
					handler() {
						throw new Error("Should never be called.");
					},
					htmlBuilder: htmlBuilder$1,
					mathmlBuilder: mathmlBuilder$1
				});
			}
			const normalizeArgument = function(arg) {
				return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
			};
			const ordargument = function(arg) {
				return arg.type === "ordgroup" ? arg.body : [arg];
			};
			const buildHTML_makeSpan = buildCommon.makeSpan;
			const binLeftCanceller = [
				"leftmost",
				"mbin",
				"mopen",
				"mrel",
				"mop",
				"mpunct"
			];
			const binRightCanceller = [
				"rightmost",
				"mrel",
				"mclose",
				"mpunct"
			];
			const styleMap = {
				"display": src_Style.DISPLAY,
				"text": src_Style.TEXT,
				"script": src_Style.SCRIPT,
				"scriptscript": src_Style.SCRIPTSCRIPT
			};
			const DomEnum = {
				mord: "mord",
				mop: "mop",
				mbin: "mbin",
				mrel: "mrel",
				mopen: "mopen",
				mclose: "mclose",
				mpunct: "mpunct",
				minner: "minner"
			};
			const buildExpression = function(expression, options, isRealGroup, surrounding) {
				if (surrounding === void 0) surrounding = [null, null];
				const groups = [];
				for (let i = 0; i < expression.length; i++) {
					const output = buildGroup(expression[i], options);
					if (output instanceof DocumentFragment) {
						const children = output.children;
						groups.push(...children);
					} else groups.push(output);
				}
				buildCommon.tryCombineChars(groups);
				if (!isRealGroup) return groups;
				let glueOptions = options;
				if (expression.length === 1) {
					const node = expression[0];
					if (node.type === "sizing") glueOptions = options.havingSize(node.size);
					else if (node.type === "styling") glueOptions = options.havingStyle(styleMap[node.style]);
				}
				const dummyPrev = buildHTML_makeSpan([surrounding[0] || "leftmost"], [], options);
				const dummyNext = buildHTML_makeSpan([surrounding[1] || "rightmost"], [], options);
				const isRoot = isRealGroup === "root";
				traverseNonSpaceNodes(groups, (node, prev) => {
					const prevType = prev.classes[0];
					const type$1 = node.classes[0];
					if (prevType === "mbin" && binRightCanceller.includes(type$1)) prev.classes[0] = "mord";
					else if (type$1 === "mbin" && binLeftCanceller.includes(prevType)) node.classes[0] = "mord";
				}, { node: dummyPrev }, dummyNext, isRoot);
				traverseNonSpaceNodes(groups, (node, prev) => {
					const prevType = getTypeOfDomTree(prev);
					const type$1 = getTypeOfDomTree(node);
					const space = prevType && type$1 ? node.hasClass("mtight") ? tightSpacings[prevType][type$1] : spacings[prevType][type$1] : null;
					if (space) return buildCommon.makeGlue(space, glueOptions);
				}, { node: dummyPrev }, dummyNext, isRoot);
				return groups;
			};
			const traverseNonSpaceNodes = function(nodes, callback, prev, next, isRoot) {
				if (next) nodes.push(next);
				let i = 0;
				for (; i < nodes.length; i++) {
					const node = nodes[i];
					const partialGroup = checkPartialGroup(node);
					if (partialGroup) {
						traverseNonSpaceNodes(partialGroup.children, callback, prev, null, isRoot);
						continue;
					}
					const nonspace = !node.hasClass("mspace");
					if (nonspace) {
						const result = callback(node, prev.node);
						if (result) if (prev.insertAfter) prev.insertAfter(result);
						else {
							nodes.unshift(result);
							i++;
						}
					}
					if (nonspace) prev.node = node;
					else if (isRoot && node.hasClass("newline")) prev.node = buildHTML_makeSpan(["leftmost"]);
					prev.insertAfter = ((index) => (n) => {
						nodes.splice(index + 1, 0, n);
						i++;
					})(i);
				}
				if (next) nodes.pop();
			};
			const checkPartialGroup = function(node) {
				if (node instanceof DocumentFragment || node instanceof Anchor || node instanceof Span && node.hasClass("enclosing")) return node;
				return null;
			};
			const getOutermostNode = function(node, side) {
				const partialGroup = checkPartialGroup(node);
				if (partialGroup) {
					const children = partialGroup.children;
					if (children.length) {
						if (side === "right") return getOutermostNode(children[children.length - 1], "right");
						else if (side === "left") return getOutermostNode(children[0], "left");
					}
				}
				return node;
			};
			const getTypeOfDomTree = function(node, side) {
				if (!node) return null;
				if (side) node = getOutermostNode(node, side);
				return DomEnum[node.classes[0]] || null;
			};
			const makeNullDelimiter = function(options, classes) {
				const moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
				return buildHTML_makeSpan(classes.concat(moreClasses));
			};
			const buildGroup = function(group, options, baseOptions) {
				if (!group) return buildHTML_makeSpan();
				if (_htmlGroupBuilders[group.type]) {
					let groupNode = _htmlGroupBuilders[group.type](group, options);
					if (baseOptions && options.size !== baseOptions.size) {
						groupNode = buildHTML_makeSpan(options.sizingClasses(baseOptions), [groupNode], options);
						const multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
						groupNode.height *= multiplier;
						groupNode.depth *= multiplier;
					}
					return groupNode;
				} else throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
			};
			function buildHTMLUnbreakable(children, options) {
				const body = buildHTML_makeSpan(["base"], children, options);
				const strut = buildHTML_makeSpan(["strut"]);
				strut.style.height = makeEm(body.height + body.depth);
				if (body.depth) strut.style.verticalAlign = makeEm(-body.depth);
				body.children.unshift(strut);
				return body;
			}
			function buildHTML(tree, options) {
				let tag = null;
				if (tree.length === 1 && tree[0].type === "tag") {
					tag = tree[0].tag;
					tree = tree[0].body;
				}
				const expression = buildExpression(tree, options, "root");
				let eqnNum;
				if (expression.length === 2 && expression[1].hasClass("tag")) eqnNum = expression.pop();
				const children = [];
				let parts = [];
				for (let i = 0; i < expression.length; i++) {
					parts.push(expression[i]);
					if (expression[i].hasClass("mbin") || expression[i].hasClass("mrel") || expression[i].hasClass("allowbreak")) {
						let nobreak = false;
						while (i < expression.length - 1 && expression[i + 1].hasClass("mspace") && !expression[i + 1].hasClass("newline")) {
							i++;
							parts.push(expression[i]);
							if (expression[i].hasClass("nobreak")) nobreak = true;
						}
						if (!nobreak) {
							children.push(buildHTMLUnbreakable(parts, options));
							parts = [];
						}
					} else if (expression[i].hasClass("newline")) {
						parts.pop();
						if (parts.length > 0) {
							children.push(buildHTMLUnbreakable(parts, options));
							parts = [];
						}
						children.push(expression[i]);
					}
				}
				if (parts.length > 0) children.push(buildHTMLUnbreakable(parts, options));
				let tagChild;
				if (tag) {
					tagChild = buildHTMLUnbreakable(buildExpression(tag, options, true));
					tagChild.classes = ["tag"];
					children.push(tagChild);
				} else if (eqnNum) children.push(eqnNum);
				const htmlNode = buildHTML_makeSpan(["katex-html"], children);
				htmlNode.setAttribute("aria-hidden", "true");
				if (tagChild) {
					const strut = tagChild.children[0];
					strut.style.height = makeEm(htmlNode.height + htmlNode.depth);
					if (htmlNode.depth) strut.style.verticalAlign = makeEm(-htmlNode.depth);
				}
				return htmlNode;
			}
			function newDocumentFragment(children) {
				return new DocumentFragment(children);
			}
			class MathNode {
				constructor(type$1, children, classes) {
					this.type = void 0;
					this.attributes = void 0;
					this.children = void 0;
					this.classes = void 0;
					this.type = type$1;
					this.attributes = {};
					this.children = children || [];
					this.classes = classes || [];
				}
				setAttribute(name, value) {
					this.attributes[name] = value;
				}
				getAttribute(name) {
					return this.attributes[name];
				}
				toNode() {
					const node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) node.setAttribute(attr, this.attributes[attr]);
					if (this.classes.length > 0) node.className = createClass(this.classes);
					for (let i = 0; i < this.children.length; i++) if (this.children[i] instanceof TextNode && this.children[i + 1] instanceof TextNode) {
						let text = this.children[i].toText() + this.children[++i].toText();
						while (this.children[i + 1] instanceof TextNode) text += this.children[++i].toText();
						node.appendChild(new TextNode(text).toNode());
					} else node.appendChild(this.children[i].toNode());
					return node;
				}
				toMarkup() {
					let markup = "<" + this.type;
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
						markup += " " + attr + "=\"";
						markup += utils.escape(this.attributes[attr]);
						markup += "\"";
					}
					if (this.classes.length > 0) markup += " class =\"" + utils.escape(createClass(this.classes)) + "\"";
					markup += ">";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					markup += "</" + this.type + ">";
					return markup;
				}
				toText() {
					return this.children.map((child) => child.toText()).join("");
				}
			}
			class TextNode {
				constructor(text) {
					this.text = void 0;
					this.text = text;
				}
				toNode() {
					return document.createTextNode(this.text);
				}
				toMarkup() {
					return utils.escape(this.toText());
				}
				toText() {
					return this.text;
				}
			}
			class SpaceNode {
				constructor(width) {
					this.width = void 0;
					this.character = void 0;
					this.width = width;
					if (width >= .05555 && width <= .05556) this.character = " ";
					else if (width >= .1666 && width <= .1667) this.character = " ";
					else if (width >= .2222 && width <= .2223) this.character = " ";
					else if (width >= .2777 && width <= .2778) this.character = "  ";
					else if (width >= -.05556 && width <= -.05555) this.character = " ⁣";
					else if (width >= -.1667 && width <= -.1666) this.character = " ⁣";
					else if (width >= -.2223 && width <= -.2222) this.character = " ⁣";
					else if (width >= -.2778 && width <= -.2777) this.character = " ⁣";
					else this.character = null;
				}
				toNode() {
					if (this.character) return document.createTextNode(this.character);
					else {
						const node = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
						node.setAttribute("width", makeEm(this.width));
						return node;
					}
				}
				toMarkup() {
					if (this.character) return "<mtext>" + this.character + "</mtext>";
					else return "<mspace width=\"" + makeEm(this.width) + "\"/>";
				}
				toText() {
					if (this.character) return this.character;
					else return " ";
				}
			}
			var mathMLTree = {
				MathNode,
				TextNode,
				SpaceNode,
				newDocumentFragment
			};
			const makeText = function(text, mode, options) {
				if (src_symbols[mode][text] && src_symbols[mode][text].replace && text.charCodeAt(0) !== 55349 && !(ligatures.hasOwnProperty(text) && options && (options.fontFamily && options.fontFamily.slice(4, 6) === "tt" || options.font && options.font.slice(4, 6) === "tt"))) text = src_symbols[mode][text].replace;
				return new mathMLTree.TextNode(text);
			};
			const makeRow = function(body) {
				if (body.length === 1) return body[0];
				else return new mathMLTree.MathNode("mrow", body);
			};
			const getVariant = function(group, options) {
				if (options.fontFamily === "texttt") return "monospace";
				else if (options.fontFamily === "textsf") if (options.fontShape === "textit" && options.fontWeight === "textbf") return "sans-serif-bold-italic";
				else if (options.fontShape === "textit") return "sans-serif-italic";
				else if (options.fontWeight === "textbf") return "bold-sans-serif";
				else return "sans-serif";
				else if (options.fontShape === "textit" && options.fontWeight === "textbf") return "bold-italic";
				else if (options.fontShape === "textit") return "italic";
				else if (options.fontWeight === "textbf") return "bold";
				const font = options.font;
				if (!font || font === "mathnormal") return null;
				const mode = group.mode;
				if (font === "mathit") return "italic";
				else if (font === "boldsymbol") return group.type === "textord" ? "bold" : "bold-italic";
				else if (font === "mathbf") return "bold";
				else if (font === "mathbb") return "double-struck";
				else if (font === "mathsfit") return "sans-serif-italic";
				else if (font === "mathfrak") return "fraktur";
				else if (font === "mathscr" || font === "mathcal") return "script";
				else if (font === "mathsf") return "sans-serif";
				else if (font === "mathtt") return "monospace";
				let text = group.text;
				if (["\\imath", "\\jmath"].includes(text)) return null;
				if (src_symbols[mode][text] && src_symbols[mode][text].replace) text = src_symbols[mode][text].replace;
				const fontName = buildCommon.fontMap[font].fontName;
				if (getCharacterMetrics(text, fontName, mode)) return buildCommon.fontMap[font].variant;
				return null;
			};
			function isNumberPunctuation(group) {
				if (!group) return false;
				if (group.type === "mi" && group.children.length === 1) {
					const child = group.children[0];
					return child instanceof TextNode && child.text === ".";
				} else if (group.type === "mo" && group.children.length === 1 && group.getAttribute("separator") === "true" && group.getAttribute("lspace") === "0em" && group.getAttribute("rspace") === "0em") {
					const child = group.children[0];
					return child instanceof TextNode && child.text === ",";
				} else return false;
			}
			const buildMathML_buildExpression = function(expression, options, isOrdgroup) {
				if (expression.length === 1) {
					const group = buildMathML_buildGroup(expression[0], options);
					if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
						group.setAttribute("lspace", "0em");
						group.setAttribute("rspace", "0em");
					}
					return [group];
				}
				const groups = [];
				let lastGroup;
				for (let i = 0; i < expression.length; i++) {
					const group = buildMathML_buildGroup(expression[i], options);
					if (group instanceof MathNode && lastGroup instanceof MathNode) {
						if (group.type === "mtext" && lastGroup.type === "mtext" && group.getAttribute("mathvariant") === lastGroup.getAttribute("mathvariant")) {
							lastGroup.children.push(...group.children);
							continue;
						} else if (group.type === "mn" && lastGroup.type === "mn") {
							lastGroup.children.push(...group.children);
							continue;
						} else if (isNumberPunctuation(group) && lastGroup.type === "mn") {
							lastGroup.children.push(...group.children);
							continue;
						} else if (group.type === "mn" && isNumberPunctuation(lastGroup)) {
							group.children = [...lastGroup.children, ...group.children];
							groups.pop();
						} else if ((group.type === "msup" || group.type === "msub") && group.children.length >= 1 && (lastGroup.type === "mn" || isNumberPunctuation(lastGroup))) {
							const base = group.children[0];
							if (base instanceof MathNode && base.type === "mn") {
								base.children = [...lastGroup.children, ...base.children];
								groups.pop();
							}
						} else if (lastGroup.type === "mi" && lastGroup.children.length === 1) {
							const lastChild = lastGroup.children[0];
							if (lastChild instanceof TextNode && lastChild.text === "̸" && (group.type === "mo" || group.type === "mi" || group.type === "mn")) {
								const child = group.children[0];
								if (child instanceof TextNode && child.text.length > 0) {
									child.text = child.text.slice(0, 1) + "̸" + child.text.slice(1);
									groups.pop();
								}
							}
						}
					}
					groups.push(group);
					lastGroup = group;
				}
				return groups;
			};
			const buildExpressionRow = function(expression, options, isOrdgroup) {
				return makeRow(buildMathML_buildExpression(expression, options, isOrdgroup));
			};
			const buildMathML_buildGroup = function(group, options) {
				if (!group) return new mathMLTree.MathNode("mrow");
				if (_mathmlGroupBuilders[group.type]) return _mathmlGroupBuilders[group.type](group, options);
				else throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
			};
			function buildMathML(tree, texExpression, options, isDisplayMode, forMathmlOnly) {
				const expression = buildMathML_buildExpression(tree, options);
				let wrapper;
				if (expression.length === 1 && expression[0] instanceof MathNode && ["mrow", "mtable"].includes(expression[0].type)) wrapper = expression[0];
				else wrapper = new mathMLTree.MathNode("mrow", expression);
				const annotation = new mathMLTree.MathNode("annotation", [new mathMLTree.TextNode(texExpression)]);
				annotation.setAttribute("encoding", "application/x-tex");
				const semantics = new mathMLTree.MathNode("semantics", [wrapper, annotation]);
				const math$1 = new mathMLTree.MathNode("math", [semantics]);
				math$1.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
				if (isDisplayMode) math$1.setAttribute("display", "block");
				const wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
				return buildCommon.makeSpan([wrapperClass], [math$1]);
			}
			const optionsFromSettings = function(settings) {
				return new src_Options({
					style: settings.displayMode ? src_Style.DISPLAY : src_Style.TEXT,
					maxSize: settings.maxSize,
					minRuleThickness: settings.minRuleThickness
				});
			};
			const displayWrap = function(node, settings) {
				if (settings.displayMode) {
					const classes = ["katex-display"];
					if (settings.leqno) classes.push("leqno");
					if (settings.fleqn) classes.push("fleqn");
					node = buildCommon.makeSpan(classes, [node]);
				}
				return node;
			};
			const buildTree = function(tree, expression, settings) {
				const options = optionsFromSettings(settings);
				let katexNode;
				if (settings.output === "mathml") return buildMathML(tree, expression, options, settings.displayMode, true);
				else if (settings.output === "html") {
					const htmlNode = buildHTML(tree, options);
					katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
				} else {
					const mathMLNode = buildMathML(tree, expression, options, settings.displayMode, false);
					const htmlNode = buildHTML(tree, options);
					katexNode = buildCommon.makeSpan(["katex"], [mathMLNode, htmlNode]);
				}
				return displayWrap(katexNode, settings);
			};
			const buildHTMLTree = function(tree, expression, settings) {
				const htmlNode = buildHTML(tree, optionsFromSettings(settings));
				return displayWrap(buildCommon.makeSpan(["katex"], [htmlNode]), settings);
			};
			const stretchyCodePoint = {
				widehat: "^",
				widecheck: "ˇ",
				widetilde: "~",
				utilde: "~",
				overleftarrow: "←",
				underleftarrow: "←",
				xleftarrow: "←",
				overrightarrow: "→",
				underrightarrow: "→",
				xrightarrow: "→",
				underbrace: "⏟",
				overbrace: "⏞",
				overgroup: "⏠",
				undergroup: "⏡",
				overleftrightarrow: "↔",
				underleftrightarrow: "↔",
				xleftrightarrow: "↔",
				Overrightarrow: "⇒",
				xRightarrow: "⇒",
				overleftharpoon: "↼",
				xleftharpoonup: "↼",
				overrightharpoon: "⇀",
				xrightharpoonup: "⇀",
				xLeftarrow: "⇐",
				xLeftrightarrow: "⇔",
				xhookleftarrow: "↩",
				xhookrightarrow: "↪",
				xmapsto: "↦",
				xrightharpoondown: "⇁",
				xleftharpoondown: "↽",
				xrightleftharpoons: "⇌",
				xleftrightharpoons: "⇋",
				xtwoheadleftarrow: "↞",
				xtwoheadrightarrow: "↠",
				xlongequal: "=",
				xtofrom: "⇄",
				xrightleftarrows: "⇄",
				xrightequilibrium: "⇌",
				xleftequilibrium: "⇋",
				"\\cdrightarrow": "→",
				"\\cdleftarrow": "←",
				"\\cdlongequal": "="
			};
			const mathMLnode = function(label) {
				const node = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(stretchyCodePoint[label.replace(/^\\/, "")])]);
				node.setAttribute("stretchy", "true");
				return node;
			};
			const katexImagesData = {
				overrightarrow: [
					["rightarrow"],
					.888,
					522,
					"xMaxYMin"
				],
				overleftarrow: [
					["leftarrow"],
					.888,
					522,
					"xMinYMin"
				],
				underrightarrow: [
					["rightarrow"],
					.888,
					522,
					"xMaxYMin"
				],
				underleftarrow: [
					["leftarrow"],
					.888,
					522,
					"xMinYMin"
				],
				xrightarrow: [
					["rightarrow"],
					1.469,
					522,
					"xMaxYMin"
				],
				"\\cdrightarrow": [
					["rightarrow"],
					3,
					522,
					"xMaxYMin"
				],
				xleftarrow: [
					["leftarrow"],
					1.469,
					522,
					"xMinYMin"
				],
				"\\cdleftarrow": [
					["leftarrow"],
					3,
					522,
					"xMinYMin"
				],
				Overrightarrow: [
					["doublerightarrow"],
					.888,
					560,
					"xMaxYMin"
				],
				xRightarrow: [
					["doublerightarrow"],
					1.526,
					560,
					"xMaxYMin"
				],
				xLeftarrow: [
					["doubleleftarrow"],
					1.526,
					560,
					"xMinYMin"
				],
				overleftharpoon: [
					["leftharpoon"],
					.888,
					522,
					"xMinYMin"
				],
				xleftharpoonup: [
					["leftharpoon"],
					.888,
					522,
					"xMinYMin"
				],
				xleftharpoondown: [
					["leftharpoondown"],
					.888,
					522,
					"xMinYMin"
				],
				overrightharpoon: [
					["rightharpoon"],
					.888,
					522,
					"xMaxYMin"
				],
				xrightharpoonup: [
					["rightharpoon"],
					.888,
					522,
					"xMaxYMin"
				],
				xrightharpoondown: [
					["rightharpoondown"],
					.888,
					522,
					"xMaxYMin"
				],
				xlongequal: [
					["longequal"],
					.888,
					334,
					"xMinYMin"
				],
				"\\cdlongequal": [
					["longequal"],
					3,
					334,
					"xMinYMin"
				],
				xtwoheadleftarrow: [
					["twoheadleftarrow"],
					.888,
					334,
					"xMinYMin"
				],
				xtwoheadrightarrow: [
					["twoheadrightarrow"],
					.888,
					334,
					"xMaxYMin"
				],
				overleftrightarrow: [
					["leftarrow", "rightarrow"],
					.888,
					522
				],
				overbrace: [
					[
						"leftbrace",
						"midbrace",
						"rightbrace"
					],
					1.6,
					548
				],
				underbrace: [
					[
						"leftbraceunder",
						"midbraceunder",
						"rightbraceunder"
					],
					1.6,
					548
				],
				underleftrightarrow: [
					["leftarrow", "rightarrow"],
					.888,
					522
				],
				xleftrightarrow: [
					["leftarrow", "rightarrow"],
					1.75,
					522
				],
				xLeftrightarrow: [
					["doubleleftarrow", "doublerightarrow"],
					1.75,
					560
				],
				xrightleftharpoons: [
					["leftharpoondownplus", "rightharpoonplus"],
					1.75,
					716
				],
				xleftrightharpoons: [
					["leftharpoonplus", "rightharpoondownplus"],
					1.75,
					716
				],
				xhookleftarrow: [
					["leftarrow", "righthook"],
					1.08,
					522
				],
				xhookrightarrow: [
					["lefthook", "rightarrow"],
					1.08,
					522
				],
				overlinesegment: [
					["leftlinesegment", "rightlinesegment"],
					.888,
					522
				],
				underlinesegment: [
					["leftlinesegment", "rightlinesegment"],
					.888,
					522
				],
				overgroup: [
					["leftgroup", "rightgroup"],
					.888,
					342
				],
				undergroup: [
					["leftgroupunder", "rightgroupunder"],
					.888,
					342
				],
				xmapsto: [
					["leftmapsto", "rightarrow"],
					1.5,
					522
				],
				xtofrom: [
					["leftToFrom", "rightToFrom"],
					1.75,
					528
				],
				xrightleftarrows: [
					["baraboveleftarrow", "rightarrowabovebar"],
					1.75,
					901
				],
				xrightequilibrium: [
					["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
					1.75,
					716
				],
				xleftequilibrium: [
					["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
					1.75,
					716
				]
			};
			const groupLength = function(arg) {
				if (arg.type === "ordgroup") return arg.body.length;
				else return 1;
			};
			const svgSpan = function(group, options) {
				function buildSvgSpan_() {
					let viewBoxWidth = 4e5;
					const label = group.label.slice(1);
					if ([
						"widehat",
						"widecheck",
						"widetilde",
						"utilde"
					].includes(label)) {
						const numChars = groupLength(group.base);
						let viewBoxHeight;
						let pathName;
						let height$1;
						if (numChars > 5) if (label === "widehat" || label === "widecheck") {
							viewBoxHeight = 420;
							viewBoxWidth = 2364;
							height$1 = .42;
							pathName = label + "4";
						} else {
							viewBoxHeight = 312;
							viewBoxWidth = 2340;
							height$1 = .34;
							pathName = "tilde4";
						}
						else {
							const imgIndex = [
								1,
								1,
								2,
								2,
								3,
								3
							][numChars];
							if (label === "widehat" || label === "widecheck") {
								viewBoxWidth = [
									0,
									1062,
									2364,
									2364,
									2364
								][imgIndex];
								viewBoxHeight = [
									0,
									239,
									300,
									360,
									420
								][imgIndex];
								height$1 = [
									0,
									.24,
									.3,
									.3,
									.36,
									.42
								][imgIndex];
								pathName = label + imgIndex;
							} else {
								viewBoxWidth = [
									0,
									600,
									1033,
									2339,
									2340
								][imgIndex];
								viewBoxHeight = [
									0,
									260,
									286,
									306,
									312
								][imgIndex];
								height$1 = [
									0,
									.26,
									.286,
									.3,
									.306,
									.34
								][imgIndex];
								pathName = "tilde" + imgIndex;
							}
						}
						const svgNode = new SvgNode([new PathNode(pathName)], {
							"width": "100%",
							"height": makeEm(height$1),
							"viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
							"preserveAspectRatio": "none"
						});
						return {
							span: buildCommon.makeSvgSpan([], [svgNode], options),
							minWidth: 0,
							height: height$1
						};
					} else {
						const spans = [];
						const data = katexImagesData[label];
						const [paths, minWidth$1, viewBoxHeight] = data;
						const height$1 = viewBoxHeight / 1e3;
						const numSvgChildren = paths.length;
						let widthClasses;
						let aligns;
						if (numSvgChildren === 1) {
							const align1 = data[3];
							widthClasses = ["hide-tail"];
							aligns = [align1];
						} else if (numSvgChildren === 2) {
							widthClasses = ["halfarrow-left", "halfarrow-right"];
							aligns = ["xMinYMin", "xMaxYMin"];
						} else if (numSvgChildren === 3) {
							widthClasses = [
								"brace-left",
								"brace-center",
								"brace-right"
							];
							aligns = [
								"xMinYMin",
								"xMidYMin",
								"xMaxYMin"
							];
						} else throw new Error("Correct katexImagesData or update code here to support\n                    " + numSvgChildren + " children.");
						for (let i = 0; i < numSvgChildren; i++) {
							const svgNode = new SvgNode([new PathNode(paths[i])], {
								"width": "400em",
								"height": makeEm(height$1),
								"viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
								"preserveAspectRatio": aligns[i] + " slice"
							});
							const span$1 = buildCommon.makeSvgSpan([widthClasses[i]], [svgNode], options);
							if (numSvgChildren === 1) return {
								span: span$1,
								minWidth: minWidth$1,
								height: height$1
							};
							else {
								span$1.style.height = makeEm(height$1);
								spans.push(span$1);
							}
						}
						return {
							span: buildCommon.makeSpan(["stretchy"], spans, options),
							minWidth: minWidth$1,
							height: height$1
						};
					}
				}
				const { span, minWidth, height } = buildSvgSpan_();
				span.height = height;
				span.style.height = makeEm(height);
				if (minWidth > 0) span.style.minWidth = makeEm(minWidth);
				return span;
			};
			const encloseSpan = function(inner$1, label, topPad, bottomPad, options) {
				let img;
				const totalHeight = inner$1.height + inner$1.depth + topPad + bottomPad;
				if (/fbox|color|angl/.test(label)) {
					img = buildCommon.makeSpan(["stretchy", label], [], options);
					if (label === "fbox") {
						const color = options.color && options.getColor();
						if (color) img.style.borderColor = color;
					}
				} else {
					const lines = [];
					if (/^[bx]cancel$/.test(label)) lines.push(new LineNode({
						"x1": "0",
						"y1": "0",
						"x2": "100%",
						"y2": "100%",
						"stroke-width": "0.046em"
					}));
					if (/^x?cancel$/.test(label)) lines.push(new LineNode({
						"x1": "0",
						"y1": "100%",
						"x2": "100%",
						"y2": "0",
						"stroke-width": "0.046em"
					}));
					const svgNode = new SvgNode(lines, {
						"width": "100%",
						"height": makeEm(totalHeight)
					});
					img = buildCommon.makeSvgSpan([], [svgNode], options);
				}
				img.height = totalHeight;
				img.style.height = makeEm(totalHeight);
				return img;
			};
			var stretchy = {
				encloseSpan,
				mathMLnode,
				svgSpan
			};
			function assertNodeType(node, type$1) {
				if (!node || node.type !== type$1) throw new Error("Expected node of type " + type$1 + ", but got " + (node ? "node of type " + node.type : String(node)));
				return node;
			}
			function assertSymbolNodeType(node) {
				const typedNode = checkSymbolNodeType(node);
				if (!typedNode) throw new Error("Expected node of symbol group type, but got " + (node ? "node of type " + node.type : String(node)));
				return typedNode;
			}
			function checkSymbolNodeType(node) {
				if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) return node;
				return null;
			}
			const htmlBuilder = (grp, options) => {
				let base;
				let group;
				let supSubGroup;
				if (grp && grp.type === "supsub") {
					group = assertNodeType(grp.base, "accent");
					base = group.base;
					grp.base = base;
					supSubGroup = assertSpan(buildGroup(grp, options));
					grp.base = group;
				} else {
					group = assertNodeType(grp, "accent");
					base = group.base;
				}
				const body = buildGroup(base, options.havingCrampedStyle());
				const mustShift = group.isShifty && utils.isCharacterBox(base);
				let skew = 0;
				if (mustShift) skew = assertSymbolDomNode(buildGroup(utils.getBaseElem(base), options.havingCrampedStyle())).skew;
				const accentBelow = group.label === "\\c";
				let clearance = accentBelow ? body.height + body.depth : Math.min(body.height, options.fontMetrics().xHeight);
				let accentBody;
				if (!group.isStretchy) {
					let accent$1;
					let width;
					if (group.label === "\\vec") {
						accent$1 = buildCommon.staticSvg("vec", options);
						width = buildCommon.svgData.vec[1];
					} else {
						accent$1 = buildCommon.makeOrd({
							mode: group.mode,
							text: group.label
						}, options, "textord");
						accent$1 = assertSymbolDomNode(accent$1);
						accent$1.italic = 0;
						width = accent$1.width;
						if (accentBelow) clearance += accent$1.depth;
					}
					accentBody = buildCommon.makeSpan(["accent-body"], [accent$1]);
					const accentFull = group.label === "\\textcircled";
					if (accentFull) {
						accentBody.classes.push("accent-full");
						clearance = body.height;
					}
					let left = skew;
					if (!accentFull) left -= width / 2;
					accentBody.style.left = makeEm(left);
					if (group.label === "\\textcircled") accentBody.style.top = ".2em";
					accentBody = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [
							{
								type: "elem",
								elem: body
							},
							{
								type: "kern",
								size: -clearance
							},
							{
								type: "elem",
								elem: accentBody
							}
						]
					}, options);
				} else {
					accentBody = stretchy.svgSpan(group, options);
					accentBody = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [{
							type: "elem",
							elem: body
						}, {
							type: "elem",
							elem: accentBody,
							wrapperClasses: ["svg-align"],
							wrapperStyle: skew > 0 ? {
								width: "calc(100% - " + makeEm(2 * skew) + ")",
								marginLeft: makeEm(2 * skew)
							} : void 0
						}]
					}, options);
				}
				const accentWrap = buildCommon.makeSpan(["mord", "accent"], [accentBody], options);
				if (supSubGroup) {
					supSubGroup.children[0] = accentWrap;
					supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);
					supSubGroup.classes[0] = "mord";
					return supSubGroup;
				} else return accentWrap;
			};
			const mathmlBuilder = (group, options) => {
				const accentNode = group.isStretchy ? stretchy.mathMLnode(group.label) : new mathMLTree.MathNode("mo", [makeText(group.label, group.mode)]);
				const node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.base, options), accentNode]);
				node.setAttribute("accent", "true");
				return node;
			};
			const NON_STRETCHY_ACCENT_REGEX = new RegExp([
				"\\acute",
				"\\grave",
				"\\ddot",
				"\\tilde",
				"\\bar",
				"\\breve",
				"\\check",
				"\\hat",
				"\\vec",
				"\\dot",
				"\\mathring"
			].map((accent$1) => "\\" + accent$1).join("|"));
			defineFunction({
				type: "accent",
				names: [
					"\\acute",
					"\\grave",
					"\\ddot",
					"\\tilde",
					"\\bar",
					"\\breve",
					"\\check",
					"\\hat",
					"\\vec",
					"\\dot",
					"\\mathring",
					"\\widecheck",
					"\\widehat",
					"\\widetilde",
					"\\overrightarrow",
					"\\overleftarrow",
					"\\Overrightarrow",
					"\\overleftrightarrow",
					"\\overgroup",
					"\\overlinesegment",
					"\\overleftharpoon",
					"\\overrightharpoon"
				],
				props: { numArgs: 1 },
				handler: (context, args) => {
					const base = normalizeArgument(args[0]);
					const isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
					const isShifty = !isStretchy || context.funcName === "\\widehat" || context.funcName === "\\widetilde" || context.funcName === "\\widecheck";
					return {
						type: "accent",
						mode: context.parser.mode,
						label: context.funcName,
						isStretchy,
						isShifty,
						base
					};
				},
				htmlBuilder,
				mathmlBuilder
			});
			defineFunction({
				type: "accent",
				names: [
					"\\'",
					"\\`",
					"\\^",
					"\\~",
					"\\=",
					"\\u",
					"\\.",
					"\\\"",
					"\\c",
					"\\r",
					"\\H",
					"\\v",
					"\\textcircled"
				],
				props: {
					numArgs: 1,
					allowedInText: true,
					allowedInMath: true,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const base = args[0];
					let mode = context.parser.mode;
					if (mode === "math") {
						context.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + context.funcName + " works only in text mode");
						mode = "text";
					}
					return {
						type: "accent",
						mode,
						label: context.funcName,
						isStretchy: false,
						isShifty: true,
						base
					};
				},
				htmlBuilder,
				mathmlBuilder
			});
			defineFunction({
				type: "accentUnder",
				names: [
					"\\underleftarrow",
					"\\underrightarrow",
					"\\underleftrightarrow",
					"\\undergroup",
					"\\underlinesegment",
					"\\utilde"
				],
				props: { numArgs: 1 },
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					const base = args[0];
					return {
						type: "accentUnder",
						mode: parser.mode,
						label: funcName,
						base
					};
				},
				htmlBuilder: (group, options) => {
					const innerGroup = buildGroup(group.base, options);
					const accentBody = stretchy.svgSpan(group, options);
					const kern = group.label === "\\utilde" ? .12 : 0;
					const vlist = buildCommon.makeVList({
						positionType: "top",
						positionData: innerGroup.height,
						children: [
							{
								type: "elem",
								elem: accentBody,
								wrapperClasses: ["svg-align"]
							},
							{
								type: "kern",
								size: kern
							},
							{
								type: "elem",
								elem: innerGroup
							}
						]
					}, options);
					return buildCommon.makeSpan(["mord", "accentunder"], [vlist], options);
				},
				mathmlBuilder: (group, options) => {
					const accentNode = stretchy.mathMLnode(group.label);
					const node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.base, options), accentNode]);
					node.setAttribute("accentunder", "true");
					return node;
				}
			});
			const paddedNode = (group) => {
				const node = new mathMLTree.MathNode("mpadded", group ? [group] : []);
				node.setAttribute("width", "+0.6em");
				node.setAttribute("lspace", "0.3em");
				return node;
			};
			defineFunction({
				type: "xArrow",
				names: [
					"\\xleftarrow",
					"\\xrightarrow",
					"\\xLeftarrow",
					"\\xRightarrow",
					"\\xleftrightarrow",
					"\\xLeftrightarrow",
					"\\xhookleftarrow",
					"\\xhookrightarrow",
					"\\xmapsto",
					"\\xrightharpoondown",
					"\\xrightharpoonup",
					"\\xleftharpoondown",
					"\\xleftharpoonup",
					"\\xrightleftharpoons",
					"\\xleftrightharpoons",
					"\\xlongequal",
					"\\xtwoheadrightarrow",
					"\\xtwoheadleftarrow",
					"\\xtofrom",
					"\\xrightleftarrows",
					"\\xrightequilibrium",
					"\\xleftequilibrium",
					"\\\\cdrightarrow",
					"\\\\cdleftarrow",
					"\\\\cdlongequal"
				],
				props: {
					numArgs: 1,
					numOptionalArgs: 1
				},
				handler(_ref, args, optArgs) {
					let { parser, funcName } = _ref;
					return {
						type: "xArrow",
						mode: parser.mode,
						label: funcName,
						body: args[0],
						below: optArgs[0]
					};
				},
				htmlBuilder(group, options) {
					const style = options.style;
					let newOptions = options.havingStyle(style.sup());
					const upperGroup = buildCommon.wrapFragment(buildGroup(group.body, newOptions, options), options);
					const arrowPrefix = group.label.slice(0, 2) === "\\x" ? "x" : "cd";
					upperGroup.classes.push(arrowPrefix + "-arrow-pad");
					let lowerGroup;
					if (group.below) {
						newOptions = options.havingStyle(style.sub());
						lowerGroup = buildCommon.wrapFragment(buildGroup(group.below, newOptions, options), options);
						lowerGroup.classes.push(arrowPrefix + "-arrow-pad");
					}
					const arrowBody = stretchy.svgSpan(group, options);
					const arrowShift = -options.fontMetrics().axisHeight + .5 * arrowBody.height;
					let upperShift = -options.fontMetrics().axisHeight - .5 * arrowBody.height - .111;
					if (upperGroup.depth > .25 || group.label === "\\xleftequilibrium") upperShift -= upperGroup.depth;
					let vlist;
					if (lowerGroup) {
						const lowerShift = -options.fontMetrics().axisHeight + lowerGroup.height + .5 * arrowBody.height + .111;
						vlist = buildCommon.makeVList({
							positionType: "individualShift",
							children: [
								{
									type: "elem",
									elem: upperGroup,
									shift: upperShift
								},
								{
									type: "elem",
									elem: arrowBody,
									shift: arrowShift
								},
								{
									type: "elem",
									elem: lowerGroup,
									shift: lowerShift
								}
							]
						}, options);
					} else vlist = buildCommon.makeVList({
						positionType: "individualShift",
						children: [{
							type: "elem",
							elem: upperGroup,
							shift: upperShift
						}, {
							type: "elem",
							elem: arrowBody,
							shift: arrowShift
						}]
					}, options);
					vlist.children[0].children[0].children[1].classes.push("svg-align");
					return buildCommon.makeSpan(["mrel", "x-arrow"], [vlist], options);
				},
				mathmlBuilder(group, options) {
					const arrowNode = stretchy.mathMLnode(group.label);
					arrowNode.setAttribute("minsize", group.label.charAt(0) === "x" ? "1.75em" : "3.0em");
					let node;
					if (group.body) {
						const upperNode = paddedNode(buildMathML_buildGroup(group.body, options));
						if (group.below) {
							const lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
							node = new mathMLTree.MathNode("munderover", [
								arrowNode,
								lowerNode,
								upperNode
							]);
						} else node = new mathMLTree.MathNode("mover", [arrowNode, upperNode]);
					} else if (group.below) {
						const lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
						node = new mathMLTree.MathNode("munder", [arrowNode, lowerNode]);
					} else {
						node = paddedNode();
						node = new mathMLTree.MathNode("mover", [arrowNode, node]);
					}
					return node;
				}
			});
			const mclass_makeSpan = buildCommon.makeSpan;
			function mclass_htmlBuilder(group, options) {
				const elements = buildExpression(group.body, options, true);
				return mclass_makeSpan([group.mclass], elements, options);
			}
			function mclass_mathmlBuilder(group, options) {
				let node;
				const inner$1 = buildMathML_buildExpression(group.body, options);
				if (group.mclass === "minner") node = new mathMLTree.MathNode("mpadded", inner$1);
				else if (group.mclass === "mord") if (group.isCharacterBox) {
					node = inner$1[0];
					node.type = "mi";
				} else node = new mathMLTree.MathNode("mi", inner$1);
				else {
					if (group.isCharacterBox) {
						node = inner$1[0];
						node.type = "mo";
					} else node = new mathMLTree.MathNode("mo", inner$1);
					if (group.mclass === "mbin") {
						node.attributes.lspace = "0.22em";
						node.attributes.rspace = "0.22em";
					} else if (group.mclass === "mpunct") {
						node.attributes.lspace = "0em";
						node.attributes.rspace = "0.17em";
					} else if (group.mclass === "mopen" || group.mclass === "mclose") {
						node.attributes.lspace = "0em";
						node.attributes.rspace = "0em";
					} else if (group.mclass === "minner") {
						node.attributes.lspace = "0.0556em";
						node.attributes.width = "+0.1111em";
					}
				}
				return node;
			}
			defineFunction({
				type: "mclass",
				names: [
					"\\mathord",
					"\\mathbin",
					"\\mathrel",
					"\\mathopen",
					"\\mathclose",
					"\\mathpunct",
					"\\mathinner"
				],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					const body = args[0];
					return {
						type: "mclass",
						mode: parser.mode,
						mclass: "m" + funcName.slice(5),
						body: ordargument(body),
						isCharacterBox: utils.isCharacterBox(body)
					};
				},
				htmlBuilder: mclass_htmlBuilder,
				mathmlBuilder: mclass_mathmlBuilder
			});
			const binrelClass = (arg) => {
				const atom = arg.type === "ordgroup" && arg.body.length ? arg.body[0] : arg;
				if (atom.type === "atom" && (atom.family === "bin" || atom.family === "rel")) return "m" + atom.family;
				else return "mord";
			};
			defineFunction({
				type: "mclass",
				names: ["\\@binrel"],
				props: { numArgs: 2 },
				handler(_ref2, args) {
					let { parser } = _ref2;
					return {
						type: "mclass",
						mode: parser.mode,
						mclass: binrelClass(args[0]),
						body: ordargument(args[1]),
						isCharacterBox: utils.isCharacterBox(args[1])
					};
				}
			});
			defineFunction({
				type: "mclass",
				names: [
					"\\stackrel",
					"\\overset",
					"\\underset"
				],
				props: { numArgs: 2 },
				handler(_ref3, args) {
					let { parser, funcName } = _ref3;
					const baseArg = args[1];
					const shiftedArg = args[0];
					let mclass;
					if (funcName !== "\\stackrel") mclass = binrelClass(baseArg);
					else mclass = "mrel";
					const baseOp = {
						type: "op",
						mode: baseArg.mode,
						limits: true,
						alwaysHandleSupSub: true,
						parentIsSupSub: false,
						symbol: false,
						suppressBaseShift: funcName !== "\\stackrel",
						body: ordargument(baseArg)
					};
					const supsub = {
						type: "supsub",
						mode: shiftedArg.mode,
						base: baseOp,
						sup: funcName === "\\underset" ? null : shiftedArg,
						sub: funcName === "\\underset" ? shiftedArg : null
					};
					return {
						type: "mclass",
						mode: parser.mode,
						mclass,
						body: [supsub],
						isCharacterBox: utils.isCharacterBox(supsub)
					};
				},
				htmlBuilder: mclass_htmlBuilder,
				mathmlBuilder: mclass_mathmlBuilder
			});
			defineFunction({
				type: "pmb",
				names: ["\\pmb"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser } = _ref;
					return {
						type: "pmb",
						mode: parser.mode,
						mclass: binrelClass(args[0]),
						body: ordargument(args[0])
					};
				},
				htmlBuilder(group, options) {
					const elements = buildExpression(group.body, options, true);
					const node = buildCommon.makeSpan([group.mclass], elements, options);
					node.style.textShadow = "0.02em 0.01em 0.04px";
					return node;
				},
				mathmlBuilder(group, style) {
					const inner$1 = buildMathML_buildExpression(group.body, style);
					const node = new mathMLTree.MathNode("mstyle", inner$1);
					node.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
					return node;
				}
			});
			const cdArrowFunctionName = {
				">": "\\\\cdrightarrow",
				"<": "\\\\cdleftarrow",
				"=": "\\\\cdlongequal",
				"A": "\\uparrow",
				"V": "\\downarrow",
				"|": "\\Vert",
				".": "no arrow"
			};
			const newCell = () => {
				return {
					type: "styling",
					body: [],
					mode: "math",
					style: "display"
				};
			};
			const isStartOfArrow = (node) => {
				return node.type === "textord" && node.text === "@";
			};
			const isLabelEnd = (node, endChar) => {
				return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
			};
			function cdArrow(arrowChar, labels, parser) {
				const funcName = cdArrowFunctionName[arrowChar];
				switch (funcName) {
					case "\\\\cdrightarrow":
					case "\\\\cdleftarrow": return parser.callFunction(funcName, [labels[0]], [labels[1]]);
					case "\\uparrow":
					case "\\downarrow": {
						const leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
						const bareArrow = {
							type: "atom",
							text: funcName,
							mode: "math",
							family: "rel"
						};
						const arrowGroup = {
							type: "ordgroup",
							mode: "math",
							body: [
								leftLabel,
								parser.callFunction("\\Big", [bareArrow], []),
								parser.callFunction("\\\\cdright", [labels[1]], [])
							]
						};
						return parser.callFunction("\\\\cdparent", [arrowGroup], []);
					}
					case "\\\\cdlongequal": return parser.callFunction("\\\\cdlongequal", [], []);
					case "\\Vert": return parser.callFunction("\\Big", [{
						type: "textord",
						text: "\\Vert",
						mode: "math"
					}], []);
					default: return {
						type: "textord",
						text: " ",
						mode: "math"
					};
				}
			}
			function parseCD(parser) {
				const parsedRows = [];
				parser.gullet.beginGroup();
				parser.gullet.macros.set("\\cr", "\\\\\\relax");
				parser.gullet.beginGroup();
				while (true) {
					parsedRows.push(parser.parseExpression(false, "\\\\"));
					parser.gullet.endGroup();
					parser.gullet.beginGroup();
					const next = parser.fetch().text;
					if (next === "&" || next === "\\\\") parser.consume();
					else if (next === "\\end") {
						if (parsedRows[parsedRows.length - 1].length === 0) parsedRows.pop();
						break;
					} else throw new src_ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
				}
				let row = [];
				const body = [row];
				for (let i = 0; i < parsedRows.length; i++) {
					const rowNodes = parsedRows[i];
					let cell = newCell();
					for (let j = 0; j < rowNodes.length; j++) if (!isStartOfArrow(rowNodes[j])) cell.body.push(rowNodes[j]);
					else {
						row.push(cell);
						j += 1;
						const arrowChar = assertSymbolNodeType(rowNodes[j]).text;
						const labels = new Array(2);
						labels[0] = {
							type: "ordgroup",
							mode: "math",
							body: []
						};
						labels[1] = {
							type: "ordgroup",
							mode: "math",
							body: []
						};
						if ("=|.".indexOf(arrowChar) > -1) {} else if ("<>AV".indexOf(arrowChar) > -1) for (let labelNum = 0; labelNum < 2; labelNum++) {
							let inLabel = true;
							for (let k = j + 1; k < rowNodes.length; k++) {
								if (isLabelEnd(rowNodes[k], arrowChar)) {
									inLabel = false;
									j = k;
									break;
								}
								if (isStartOfArrow(rowNodes[k])) throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
								labels[labelNum].body.push(rowNodes[k]);
							}
							if (inLabel) throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j]);
						}
						else throw new src_ParseError("Expected one of \"<>AV=|.\" after @", rowNodes[j]);
						const wrappedArrow = {
							type: "styling",
							body: [cdArrow(arrowChar, labels, parser)],
							mode: "math",
							style: "display"
						};
						row.push(wrappedArrow);
						cell = newCell();
					}
					if (i % 2 === 0) row.push(cell);
					else row.shift();
					row = [];
					body.push(row);
				}
				parser.gullet.endGroup();
				parser.gullet.endGroup();
				return {
					type: "array",
					mode: "math",
					body,
					arraystretch: 1,
					addJot: true,
					rowGaps: [null],
					cols: new Array(body[0].length).fill({
						type: "align",
						align: "c",
						pregap: .25,
						postgap: .25
					}),
					colSeparationType: "CD",
					hLinesBeforeRow: new Array(body.length + 1).fill([])
				};
			}
			defineFunction({
				type: "cdlabel",
				names: ["\\\\cdleft", "\\\\cdright"],
				props: { numArgs: 1 },
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					return {
						type: "cdlabel",
						mode: parser.mode,
						side: funcName.slice(4),
						label: args[0]
					};
				},
				htmlBuilder(group, options) {
					const newOptions = options.havingStyle(options.style.sup());
					const label = buildCommon.wrapFragment(buildGroup(group.label, newOptions, options), options);
					label.classes.push("cd-label-" + group.side);
					label.style.bottom = makeEm(.8 - label.depth);
					label.height = 0;
					label.depth = 0;
					return label;
				},
				mathmlBuilder(group, options) {
					let label = new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.label, options)]);
					label = new mathMLTree.MathNode("mpadded", [label]);
					label.setAttribute("width", "0");
					if (group.side === "left") label.setAttribute("lspace", "-1width");
					label.setAttribute("voffset", "0.7em");
					label = new mathMLTree.MathNode("mstyle", [label]);
					label.setAttribute("displaystyle", "false");
					label.setAttribute("scriptlevel", "1");
					return label;
				}
			});
			defineFunction({
				type: "cdlabelparent",
				names: ["\\\\cdparent"],
				props: { numArgs: 1 },
				handler(_ref2, args) {
					let { parser } = _ref2;
					return {
						type: "cdlabelparent",
						mode: parser.mode,
						fragment: args[0]
					};
				},
				htmlBuilder(group, options) {
					const parent = buildCommon.wrapFragment(buildGroup(group.fragment, options), options);
					parent.classes.push("cd-vert-arrow");
					return parent;
				},
				mathmlBuilder(group, options) {
					return new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.fragment, options)]);
				}
			});
			defineFunction({
				type: "textord",
				names: ["\\@char"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser } = _ref;
					const group = assertNodeType(args[0], "ordgroup").body;
					let number = "";
					for (let i = 0; i < group.length; i++) {
						const node = assertNodeType(group[i], "textord");
						number += node.text;
					}
					let code = parseInt(number);
					let text;
					if (isNaN(code)) throw new src_ParseError("\\@char has non-numeric argument " + number);
					else if (code < 0 || code >= 1114111) throw new src_ParseError("\\@char with invalid code point " + number);
					else if (code <= 65535) text = String.fromCharCode(code);
					else {
						code -= 65536;
						text = String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
					}
					return {
						type: "textord",
						mode: parser.mode,
						text
					};
				}
			});
			const color_htmlBuilder = (group, options) => {
				const elements = buildExpression(group.body, options.withColor(group.color), false);
				return buildCommon.makeFragment(elements);
			};
			const color_mathmlBuilder = (group, options) => {
				const inner$1 = buildMathML_buildExpression(group.body, options.withColor(group.color));
				const node = new mathMLTree.MathNode("mstyle", inner$1);
				node.setAttribute("mathcolor", group.color);
				return node;
			};
			defineFunction({
				type: "color",
				names: ["\\textcolor"],
				props: {
					numArgs: 2,
					allowedInText: true,
					argTypes: ["color", "original"]
				},
				handler(_ref, args) {
					let { parser } = _ref;
					const color = assertNodeType(args[0], "color-token").color;
					const body = args[1];
					return {
						type: "color",
						mode: parser.mode,
						color,
						body: ordargument(body)
					};
				},
				htmlBuilder: color_htmlBuilder,
				mathmlBuilder: color_mathmlBuilder
			});
			defineFunction({
				type: "color",
				names: ["\\color"],
				props: {
					numArgs: 1,
					allowedInText: true,
					argTypes: ["color"]
				},
				handler(_ref2, args) {
					let { parser, breakOnTokenText } = _ref2;
					const color = assertNodeType(args[0], "color-token").color;
					parser.gullet.macros.set("\\current@color", color);
					const body = parser.parseExpression(true, breakOnTokenText);
					return {
						type: "color",
						mode: parser.mode,
						color,
						body
					};
				},
				htmlBuilder: color_htmlBuilder,
				mathmlBuilder: color_mathmlBuilder
			});
			defineFunction({
				type: "cr",
				names: ["\\\\"],
				props: {
					numArgs: 0,
					numOptionalArgs: 0,
					allowedInText: true
				},
				handler(_ref, args, optArgs) {
					let { parser } = _ref;
					const size = parser.gullet.future().text === "[" ? parser.parseSizeGroup(true) : null;
					const newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
					return {
						type: "cr",
						mode: parser.mode,
						newLine,
						size: size && assertNodeType(size, "size").value
					};
				},
				htmlBuilder(group, options) {
					const span = buildCommon.makeSpan(["mspace"], [], options);
					if (group.newLine) {
						span.classes.push("newline");
						if (group.size) span.style.marginTop = makeEm(calculateSize(group.size, options));
					}
					return span;
				},
				mathmlBuilder(group, options) {
					const node = new mathMLTree.MathNode("mspace");
					if (group.newLine) {
						node.setAttribute("linebreak", "newline");
						if (group.size) node.setAttribute("height", makeEm(calculateSize(group.size, options)));
					}
					return node;
				}
			});
			const globalMap = {
				"\\global": "\\global",
				"\\long": "\\\\globallong",
				"\\\\globallong": "\\\\globallong",
				"\\def": "\\gdef",
				"\\gdef": "\\gdef",
				"\\edef": "\\xdef",
				"\\xdef": "\\xdef",
				"\\let": "\\\\globallet",
				"\\futurelet": "\\\\globalfuture"
			};
			const checkControlSequence = (tok) => {
				const name = tok.text;
				if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) throw new src_ParseError("Expected a control sequence", tok);
				return name;
			};
			const getRHS = (parser) => {
				let tok = parser.gullet.popToken();
				if (tok.text === "=") {
					tok = parser.gullet.popToken();
					if (tok.text === " ") tok = parser.gullet.popToken();
				}
				return tok;
			};
			const letCommand = (parser, name, tok, global) => {
				let macro = parser.gullet.macros.get(tok.text);
				if (macro == null) {
					tok.noexpand = true;
					macro = {
						tokens: [tok],
						numArgs: 0,
						unexpandable: !parser.gullet.isExpandable(tok.text)
					};
				}
				parser.gullet.macros.set(name, macro, global);
			};
			defineFunction({
				type: "internal",
				names: [
					"\\global",
					"\\long",
					"\\\\globallong"
				],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler(_ref) {
					let { parser, funcName } = _ref;
					parser.consumeSpaces();
					const token = parser.fetch();
					if (globalMap[token.text]) {
						if (funcName === "\\global" || funcName === "\\\\globallong") token.text = globalMap[token.text];
						return assertNodeType(parser.parseFunction(), "internal");
					}
					throw new src_ParseError("Invalid token after macro prefix", token);
				}
			});
			defineFunction({
				type: "internal",
				names: [
					"\\def",
					"\\gdef",
					"\\edef",
					"\\xdef"
				],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler(_ref2) {
					let { parser, funcName } = _ref2;
					let tok = parser.gullet.popToken();
					const name = tok.text;
					if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) throw new src_ParseError("Expected a control sequence", tok);
					let numArgs = 0;
					let insert;
					const delimiters$1 = [[]];
					while (parser.gullet.future().text !== "{") {
						tok = parser.gullet.popToken();
						if (tok.text === "#") {
							if (parser.gullet.future().text === "{") {
								insert = parser.gullet.future();
								delimiters$1[numArgs].push("{");
								break;
							}
							tok = parser.gullet.popToken();
							if (!/^[1-9]$/.test(tok.text)) throw new src_ParseError("Invalid argument number \"" + tok.text + "\"");
							if (parseInt(tok.text) !== numArgs + 1) throw new src_ParseError("Argument number \"" + tok.text + "\" out of order");
							numArgs++;
							delimiters$1.push([]);
						} else if (tok.text === "EOF") throw new src_ParseError("Expected a macro definition");
						else delimiters$1[numArgs].push(tok.text);
					}
					let { tokens } = parser.gullet.consumeArg();
					if (insert) tokens.unshift(insert);
					if (funcName === "\\edef" || funcName === "\\xdef") {
						tokens = parser.gullet.expandTokens(tokens);
						tokens.reverse();
					}
					parser.gullet.macros.set(name, {
						tokens,
						numArgs,
						delimiters: delimiters$1
					}, funcName === globalMap[funcName]);
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\let", "\\\\globallet"],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler(_ref3) {
					let { parser, funcName } = _ref3;
					const name = checkControlSequence(parser.gullet.popToken());
					parser.gullet.consumeSpaces();
					letCommand(parser, name, getRHS(parser), funcName === "\\\\globallet");
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\futurelet", "\\\\globalfuture"],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler(_ref4) {
					let { parser, funcName } = _ref4;
					const name = checkControlSequence(parser.gullet.popToken());
					const middle = parser.gullet.popToken();
					const tok = parser.gullet.popToken();
					letCommand(parser, name, tok, funcName === "\\\\globalfuture");
					parser.gullet.pushToken(tok);
					parser.gullet.pushToken(middle);
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			const getMetrics = function(symbol, font, mode) {
				const metrics = getCharacterMetrics(src_symbols.math[symbol] && src_symbols.math[symbol].replace || symbol, font, mode);
				if (!metrics) throw new Error("Unsupported symbol " + symbol + " and font size " + font + ".");
				return metrics;
			};
			const styleWrap = function(delim, toStyle, options, classes) {
				const newOptions = options.havingBaseStyle(toStyle);
				const span = buildCommon.makeSpan(classes.concat(newOptions.sizingClasses(options)), [delim], options);
				const delimSizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
				span.height *= delimSizeMultiplier;
				span.depth *= delimSizeMultiplier;
				span.maxFontSize = newOptions.sizeMultiplier;
				return span;
			};
			const centerSpan = function(span, options, style) {
				const newOptions = options.havingBaseStyle(style);
				const shift = (1 - options.sizeMultiplier / newOptions.sizeMultiplier) * options.fontMetrics().axisHeight;
				span.classes.push("delimcenter");
				span.style.top = makeEm(shift);
				span.height -= shift;
				span.depth += shift;
			};
			const makeSmallDelim = function(delim, style, center, options, mode, classes) {
				const span = styleWrap(buildCommon.makeSymbol(delim, "Main-Regular", mode, options), style, options, classes);
				if (center) centerSpan(span, options, style);
				return span;
			};
			const mathrmSize = function(value, size, mode, options) {
				return buildCommon.makeSymbol(value, "Size" + size + "-Regular", mode, options);
			};
			const makeLargeDelim = function(delim, size, center, options, mode, classes) {
				const inner$1 = mathrmSize(delim, size, mode, options);
				const span = styleWrap(buildCommon.makeSpan(["delimsizing", "size" + size], [inner$1], options), src_Style.TEXT, options, classes);
				if (center) centerSpan(span, options, src_Style.TEXT);
				return span;
			};
			const makeGlyphSpan = function(symbol, font, mode) {
				let sizeClass;
				if (font === "Size1-Regular") sizeClass = "delim-size1";
				else sizeClass = "delim-size4";
				return {
					type: "elem",
					elem: buildCommon.makeSpan(["delimsizinginner", sizeClass], [buildCommon.makeSpan([], [buildCommon.makeSymbol(symbol, font, mode)])])
				};
			};
			const makeInner = function(ch, height, options) {
				const width = fontMetricsData["Size4-Regular"][ch.charCodeAt(0)] ? fontMetricsData["Size4-Regular"][ch.charCodeAt(0)][4] : fontMetricsData["Size1-Regular"][ch.charCodeAt(0)][4];
				const svgNode = new SvgNode([new PathNode("inner", innerPath(ch, Math.round(1e3 * height)))], {
					"width": makeEm(width),
					"height": makeEm(height),
					"style": "width:" + makeEm(width),
					"viewBox": "0 0 " + 1e3 * width + " " + Math.round(1e3 * height),
					"preserveAspectRatio": "xMinYMin"
				});
				const span = buildCommon.makeSvgSpan([], [svgNode], options);
				span.height = height;
				span.style.height = makeEm(height);
				span.style.width = makeEm(width);
				return {
					type: "elem",
					elem: span
				};
			};
			const lapInEms = .008;
			const lap = {
				type: "kern",
				size: -1 * lapInEms
			};
			const verts = [
				"|",
				"\\lvert",
				"\\rvert",
				"\\vert"
			];
			const doubleVerts = [
				"\\|",
				"\\lVert",
				"\\rVert",
				"\\Vert"
			];
			const makeStackedDelim = function(delim, heightTotal, center, options, mode, classes) {
				let top;
				let middle;
				let repeat;
				let bottom;
				let svgLabel = "";
				let viewBoxWidth = 0;
				top = repeat = bottom = delim;
				middle = null;
				let font = "Size1-Regular";
				if (delim === "\\uparrow") repeat = bottom = "⏐";
				else if (delim === "\\Uparrow") repeat = bottom = "‖";
				else if (delim === "\\downarrow") top = repeat = "⏐";
				else if (delim === "\\Downarrow") top = repeat = "‖";
				else if (delim === "\\updownarrow") {
					top = "\\uparrow";
					repeat = "⏐";
					bottom = "\\downarrow";
				} else if (delim === "\\Updownarrow") {
					top = "\\Uparrow";
					repeat = "‖";
					bottom = "\\Downarrow";
				} else if (verts.includes(delim)) {
					repeat = "∣";
					svgLabel = "vert";
					viewBoxWidth = 333;
				} else if (doubleVerts.includes(delim)) {
					repeat = "∥";
					svgLabel = "doublevert";
					viewBoxWidth = 556;
				} else if (delim === "[" || delim === "\\lbrack") {
					top = "⎡";
					repeat = "⎢";
					bottom = "⎣";
					font = "Size4-Regular";
					svgLabel = "lbrack";
					viewBoxWidth = 667;
				} else if (delim === "]" || delim === "\\rbrack") {
					top = "⎤";
					repeat = "⎥";
					bottom = "⎦";
					font = "Size4-Regular";
					svgLabel = "rbrack";
					viewBoxWidth = 667;
				} else if (delim === "\\lfloor" || delim === "⌊") {
					repeat = top = "⎢";
					bottom = "⎣";
					font = "Size4-Regular";
					svgLabel = "lfloor";
					viewBoxWidth = 667;
				} else if (delim === "\\lceil" || delim === "⌈") {
					top = "⎡";
					repeat = bottom = "⎢";
					font = "Size4-Regular";
					svgLabel = "lceil";
					viewBoxWidth = 667;
				} else if (delim === "\\rfloor" || delim === "⌋") {
					repeat = top = "⎥";
					bottom = "⎦";
					font = "Size4-Regular";
					svgLabel = "rfloor";
					viewBoxWidth = 667;
				} else if (delim === "\\rceil" || delim === "⌉") {
					top = "⎤";
					repeat = bottom = "⎥";
					font = "Size4-Regular";
					svgLabel = "rceil";
					viewBoxWidth = 667;
				} else if (delim === "(" || delim === "\\lparen") {
					top = "⎛";
					repeat = "⎜";
					bottom = "⎝";
					font = "Size4-Regular";
					svgLabel = "lparen";
					viewBoxWidth = 875;
				} else if (delim === ")" || delim === "\\rparen") {
					top = "⎞";
					repeat = "⎟";
					bottom = "⎠";
					font = "Size4-Regular";
					svgLabel = "rparen";
					viewBoxWidth = 875;
				} else if (delim === "\\{" || delim === "\\lbrace") {
					top = "⎧";
					middle = "⎨";
					bottom = "⎩";
					repeat = "⎪";
					font = "Size4-Regular";
				} else if (delim === "\\}" || delim === "\\rbrace") {
					top = "⎫";
					middle = "⎬";
					bottom = "⎭";
					repeat = "⎪";
					font = "Size4-Regular";
				} else if (delim === "\\lgroup" || delim === "⟮") {
					top = "⎧";
					bottom = "⎩";
					repeat = "⎪";
					font = "Size4-Regular";
				} else if (delim === "\\rgroup" || delim === "⟯") {
					top = "⎫";
					bottom = "⎭";
					repeat = "⎪";
					font = "Size4-Regular";
				} else if (delim === "\\lmoustache" || delim === "⎰") {
					top = "⎧";
					bottom = "⎭";
					repeat = "⎪";
					font = "Size4-Regular";
				} else if (delim === "\\rmoustache" || delim === "⎱") {
					top = "⎫";
					bottom = "⎩";
					repeat = "⎪";
					font = "Size4-Regular";
				}
				const topMetrics = getMetrics(top, font, mode);
				const topHeightTotal = topMetrics.height + topMetrics.depth;
				const repeatMetrics = getMetrics(repeat, font, mode);
				const repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
				const bottomMetrics = getMetrics(bottom, font, mode);
				const bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
				let middleHeightTotal = 0;
				let middleFactor = 1;
				if (middle !== null) {
					const middleMetrics = getMetrics(middle, font, mode);
					middleHeightTotal = middleMetrics.height + middleMetrics.depth;
					middleFactor = 2;
				}
				const minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;
				const realHeightTotal = minHeight + Math.max(0, Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal))) * middleFactor * repeatHeightTotal;
				let axisHeight = options.fontMetrics().axisHeight;
				if (center) axisHeight *= options.sizeMultiplier;
				const depth = realHeightTotal / 2 - axisHeight;
				const stack = [];
				if (svgLabel.length > 0) {
					const midHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
					const viewBoxHeight = Math.round(realHeightTotal * 1e3);
					const pathStr = tallDelim(svgLabel, Math.round(midHeight * 1e3));
					const path$1 = new PathNode(svgLabel, pathStr);
					const width = (viewBoxWidth / 1e3).toFixed(3) + "em";
					const height = (viewBoxHeight / 1e3).toFixed(3) + "em";
					const svg = new SvgNode([path$1], {
						"width": width,
						"height": height,
						"viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight
					});
					const wrapper = buildCommon.makeSvgSpan([], [svg], options);
					wrapper.height = viewBoxHeight / 1e3;
					wrapper.style.width = width;
					wrapper.style.height = height;
					stack.push({
						type: "elem",
						elem: wrapper
					});
				} else {
					stack.push(makeGlyphSpan(bottom, font, mode));
					stack.push(lap);
					if (middle === null) {
						const innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal + 2 * lapInEms;
						stack.push(makeInner(repeat, innerHeight, options));
					} else {
						const innerHeight = (realHeightTotal - topHeightTotal - bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
						stack.push(makeInner(repeat, innerHeight, options));
						stack.push(lap);
						stack.push(makeGlyphSpan(middle, font, mode));
						stack.push(lap);
						stack.push(makeInner(repeat, innerHeight, options));
					}
					stack.push(lap);
					stack.push(makeGlyphSpan(top, font, mode));
				}
				const newOptions = options.havingBaseStyle(src_Style.TEXT);
				const inner$1 = buildCommon.makeVList({
					positionType: "bottom",
					positionData: depth,
					children: stack
				}, newOptions);
				return styleWrap(buildCommon.makeSpan(["delimsizing", "mult"], [inner$1], newOptions), src_Style.TEXT, options, classes);
			};
			const vbPad = 80;
			const emPad = .08;
			const sqrtSvg = function(sqrtName, height, viewBoxHeight, extraVinculum, options) {
				const svg = new SvgNode([new PathNode(sqrtName, sqrtPath(sqrtName, extraVinculum, viewBoxHeight))], {
					"width": "400em",
					"height": makeEm(height),
					"viewBox": "0 0 400000 " + viewBoxHeight,
					"preserveAspectRatio": "xMinYMin slice"
				});
				return buildCommon.makeSvgSpan(["hide-tail"], [svg], options);
			};
			const makeSqrtImage = function(height, options) {
				const newOptions = options.havingBaseSizing();
				const delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier, stackLargeDelimiterSequence, newOptions);
				let sizeMultiplier = newOptions.sizeMultiplier;
				const extraVinculum = Math.max(0, options.minRuleThickness - options.fontMetrics().sqrtRuleThickness);
				let span;
				let spanHeight = 0;
				let texHeight = 0;
				let viewBoxHeight = 0;
				let advanceWidth;
				if (delim.type === "small") {
					viewBoxHeight = 1e3 + 1e3 * extraVinculum + vbPad;
					if (height < 1) sizeMultiplier = 1;
					else if (height < 1.4) sizeMultiplier = .7;
					spanHeight = (1 + extraVinculum + emPad) / sizeMultiplier;
					texHeight = (1 + extraVinculum) / sizeMultiplier;
					span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraVinculum, options);
					span.style.minWidth = "0.853em";
					advanceWidth = .833 / sizeMultiplier;
				} else if (delim.type === "large") {
					viewBoxHeight = (1e3 + vbPad) * sizeToMaxHeight[delim.size];
					texHeight = (sizeToMaxHeight[delim.size] + extraVinculum) / sizeMultiplier;
					spanHeight = (sizeToMaxHeight[delim.size] + extraVinculum + emPad) / sizeMultiplier;
					span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, extraVinculum, options);
					span.style.minWidth = "1.02em";
					advanceWidth = 1 / sizeMultiplier;
				} else {
					spanHeight = height + extraVinculum + emPad;
					texHeight = height + extraVinculum;
					viewBoxHeight = Math.floor(1e3 * height + extraVinculum) + vbPad;
					span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraVinculum, options);
					span.style.minWidth = "0.742em";
					advanceWidth = 1.056;
				}
				span.height = texHeight;
				span.style.height = makeEm(spanHeight);
				return {
					span,
					advanceWidth,
					ruleWidth: (options.fontMetrics().sqrtRuleThickness + extraVinculum) * sizeMultiplier
				};
			};
			const stackLargeDelimiters = [
				"(",
				"\\lparen",
				")",
				"\\rparen",
				"[",
				"\\lbrack",
				"]",
				"\\rbrack",
				"\\{",
				"\\lbrace",
				"\\}",
				"\\rbrace",
				"\\lfloor",
				"\\rfloor",
				"⌊",
				"⌋",
				"\\lceil",
				"\\rceil",
				"⌈",
				"⌉",
				"\\surd"
			];
			const stackAlwaysDelimiters = [
				"\\uparrow",
				"\\downarrow",
				"\\updownarrow",
				"\\Uparrow",
				"\\Downarrow",
				"\\Updownarrow",
				"|",
				"\\|",
				"\\vert",
				"\\Vert",
				"\\lvert",
				"\\rvert",
				"\\lVert",
				"\\rVert",
				"\\lgroup",
				"\\rgroup",
				"⟮",
				"⟯",
				"\\lmoustache",
				"\\rmoustache",
				"⎰",
				"⎱"
			];
			const stackNeverDelimiters = [
				"<",
				">",
				"\\langle",
				"\\rangle",
				"/",
				"\\backslash",
				"\\lt",
				"\\gt"
			];
			const sizeToMaxHeight = [
				0,
				1.2,
				1.8,
				2.4,
				3
			];
			const makeSizedDelim = function(delim, size, options, mode, classes) {
				if (delim === "<" || delim === "\\lt" || delim === "⟨") delim = "\\langle";
				else if (delim === ">" || delim === "\\gt" || delim === "⟩") delim = "\\rangle";
				if (stackLargeDelimiters.includes(delim) || stackNeverDelimiters.includes(delim)) return makeLargeDelim(delim, size, false, options, mode, classes);
				else if (stackAlwaysDelimiters.includes(delim)) return makeStackedDelim(delim, sizeToMaxHeight[size], false, options, mode, classes);
				else throw new src_ParseError("Illegal delimiter: '" + delim + "'");
			};
			const stackNeverDelimiterSequence = [
				{
					type: "small",
					style: src_Style.SCRIPTSCRIPT
				},
				{
					type: "small",
					style: src_Style.SCRIPT
				},
				{
					type: "small",
					style: src_Style.TEXT
				},
				{
					type: "large",
					size: 1
				},
				{
					type: "large",
					size: 2
				},
				{
					type: "large",
					size: 3
				},
				{
					type: "large",
					size: 4
				}
			];
			const stackAlwaysDelimiterSequence = [
				{
					type: "small",
					style: src_Style.SCRIPTSCRIPT
				},
				{
					type: "small",
					style: src_Style.SCRIPT
				},
				{
					type: "small",
					style: src_Style.TEXT
				},
				{ type: "stack" }
			];
			const stackLargeDelimiterSequence = [
				{
					type: "small",
					style: src_Style.SCRIPTSCRIPT
				},
				{
					type: "small",
					style: src_Style.SCRIPT
				},
				{
					type: "small",
					style: src_Style.TEXT
				},
				{
					type: "large",
					size: 1
				},
				{
					type: "large",
					size: 2
				},
				{
					type: "large",
					size: 3
				},
				{
					type: "large",
					size: 4
				},
				{ type: "stack" }
			];
			const delimTypeToFont = function(type$1) {
				if (type$1.type === "small") return "Main-Regular";
				else if (type$1.type === "large") return "Size" + type$1.size + "-Regular";
				else if (type$1.type === "stack") return "Size4-Regular";
				else throw new Error("Add support for delim type '" + type$1.type + "' here.");
			};
			const traverseSequence = function(delim, height, sequence, options) {
				const start = Math.min(2, 3 - options.style.size);
				for (let i = start; i < sequence.length; i++) {
					if (sequence[i].type === "stack") break;
					const metrics = getMetrics(delim, delimTypeToFont(sequence[i]), "math");
					let heightDepth = metrics.height + metrics.depth;
					if (sequence[i].type === "small") {
						const newOptions = options.havingBaseStyle(sequence[i].style);
						heightDepth *= newOptions.sizeMultiplier;
					}
					if (heightDepth > height) return sequence[i];
				}
				return sequence[sequence.length - 1];
			};
			const makeCustomSizedDelim = function(delim, height, center, options, mode, classes) {
				if (delim === "<" || delim === "\\lt" || delim === "⟨") delim = "\\langle";
				else if (delim === ">" || delim === "\\gt" || delim === "⟩") delim = "\\rangle";
				let sequence;
				if (stackNeverDelimiters.includes(delim)) sequence = stackNeverDelimiterSequence;
				else if (stackLargeDelimiters.includes(delim)) sequence = stackLargeDelimiterSequence;
				else sequence = stackAlwaysDelimiterSequence;
				const delimType = traverseSequence(delim, height, sequence, options);
				if (delimType.type === "small") return makeSmallDelim(delim, delimType.style, center, options, mode, classes);
				else if (delimType.type === "large") return makeLargeDelim(delim, delimType.size, center, options, mode, classes);
				else return makeStackedDelim(delim, height, center, options, mode, classes);
			};
			const makeLeftRightDelim = function(delim, height, depth, options, mode, classes) {
				const axisHeight = options.fontMetrics().axisHeight * options.sizeMultiplier;
				const delimiterFactor = 901;
				const delimiterExtend = 5 / options.fontMetrics().ptPerEm;
				const maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
				return makeCustomSizedDelim(delim, Math.max(maxDistFromAxis / 500 * delimiterFactor, 2 * maxDistFromAxis - delimiterExtend), true, options, mode, classes);
			};
			var delimiter = {
				sqrtImage: makeSqrtImage,
				sizedDelim: makeSizedDelim,
				sizeToMaxHeight,
				customSizedDelim: makeCustomSizedDelim,
				leftRightDelim: makeLeftRightDelim
			};
			const delimiterSizes = {
				"\\bigl": {
					mclass: "mopen",
					size: 1
				},
				"\\Bigl": {
					mclass: "mopen",
					size: 2
				},
				"\\biggl": {
					mclass: "mopen",
					size: 3
				},
				"\\Biggl": {
					mclass: "mopen",
					size: 4
				},
				"\\bigr": {
					mclass: "mclose",
					size: 1
				},
				"\\Bigr": {
					mclass: "mclose",
					size: 2
				},
				"\\biggr": {
					mclass: "mclose",
					size: 3
				},
				"\\Biggr": {
					mclass: "mclose",
					size: 4
				},
				"\\bigm": {
					mclass: "mrel",
					size: 1
				},
				"\\Bigm": {
					mclass: "mrel",
					size: 2
				},
				"\\biggm": {
					mclass: "mrel",
					size: 3
				},
				"\\Biggm": {
					mclass: "mrel",
					size: 4
				},
				"\\big": {
					mclass: "mord",
					size: 1
				},
				"\\Big": {
					mclass: "mord",
					size: 2
				},
				"\\bigg": {
					mclass: "mord",
					size: 3
				},
				"\\Bigg": {
					mclass: "mord",
					size: 4
				}
			};
			const delimiters = [
				"(",
				"\\lparen",
				")",
				"\\rparen",
				"[",
				"\\lbrack",
				"]",
				"\\rbrack",
				"\\{",
				"\\lbrace",
				"\\}",
				"\\rbrace",
				"\\lfloor",
				"\\rfloor",
				"⌊",
				"⌋",
				"\\lceil",
				"\\rceil",
				"⌈",
				"⌉",
				"<",
				">",
				"\\langle",
				"⟨",
				"\\rangle",
				"⟩",
				"\\lt",
				"\\gt",
				"\\lvert",
				"\\rvert",
				"\\lVert",
				"\\rVert",
				"\\lgroup",
				"\\rgroup",
				"⟮",
				"⟯",
				"\\lmoustache",
				"\\rmoustache",
				"⎰",
				"⎱",
				"/",
				"\\backslash",
				"|",
				"\\vert",
				"\\|",
				"\\Vert",
				"\\uparrow",
				"\\Uparrow",
				"\\downarrow",
				"\\Downarrow",
				"\\updownarrow",
				"\\Updownarrow",
				"."
			];
			function checkDelimiter(delim, context) {
				const symDelim = checkSymbolNodeType(delim);
				if (symDelim && delimiters.includes(symDelim.text)) return symDelim;
				else if (symDelim) throw new src_ParseError("Invalid delimiter '" + symDelim.text + "' after '" + context.funcName + "'", delim);
				else throw new src_ParseError("Invalid delimiter type '" + delim.type + "'", delim);
			}
			defineFunction({
				type: "delimsizing",
				names: [
					"\\bigl",
					"\\Bigl",
					"\\biggl",
					"\\Biggl",
					"\\bigr",
					"\\Bigr",
					"\\biggr",
					"\\Biggr",
					"\\bigm",
					"\\Bigm",
					"\\biggm",
					"\\Biggm",
					"\\big",
					"\\Big",
					"\\bigg",
					"\\Bigg"
				],
				props: {
					numArgs: 1,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					return {
						type: "delimsizing",
						mode: context.parser.mode,
						size: delimiterSizes[context.funcName].size,
						mclass: delimiterSizes[context.funcName].mclass,
						delim: delim.text
					};
				},
				htmlBuilder: (group, options) => {
					if (group.delim === ".") return buildCommon.makeSpan([group.mclass]);
					return delimiter.sizedDelim(group.delim, group.size, options, group.mode, [group.mclass]);
				},
				mathmlBuilder: (group) => {
					const children = [];
					if (group.delim !== ".") children.push(makeText(group.delim, group.mode));
					const node = new mathMLTree.MathNode("mo", children);
					if (group.mclass === "mopen" || group.mclass === "mclose") node.setAttribute("fence", "true");
					else node.setAttribute("fence", "false");
					node.setAttribute("stretchy", "true");
					const size = makeEm(delimiter.sizeToMaxHeight[group.size]);
					node.setAttribute("minsize", size);
					node.setAttribute("maxsize", size);
					return node;
				}
			});
			function assertParsed(group) {
				if (!group.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
			}
			defineFunction({
				type: "leftright-right",
				names: ["\\right"],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler: (context, args) => {
					const color = context.parser.gullet.macros.get("\\current@color");
					if (color && typeof color !== "string") throw new src_ParseError("\\current@color set to non-string in \\right");
					return {
						type: "leftright-right",
						mode: context.parser.mode,
						delim: checkDelimiter(args[0], context).text,
						color
					};
				}
			});
			defineFunction({
				type: "leftright",
				names: ["\\left"],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					const parser = context.parser;
					++parser.leftrightDepth;
					const body = parser.parseExpression(false);
					--parser.leftrightDepth;
					parser.expect("\\right", false);
					const right = assertNodeType(parser.parseFunction(), "leftright-right");
					return {
						type: "leftright",
						mode: parser.mode,
						body,
						left: delim.text,
						right: right.delim,
						rightColor: right.color
					};
				},
				htmlBuilder: (group, options) => {
					assertParsed(group);
					const inner$1 = buildExpression(group.body, options, true, ["mopen", "mclose"]);
					let innerHeight = 0;
					let innerDepth = 0;
					let hadMiddle = false;
					for (let i = 0; i < inner$1.length; i++) if (inner$1[i].isMiddle) hadMiddle = true;
					else {
						innerHeight = Math.max(inner$1[i].height, innerHeight);
						innerDepth = Math.max(inner$1[i].depth, innerDepth);
					}
					innerHeight *= options.sizeMultiplier;
					innerDepth *= options.sizeMultiplier;
					let leftDelim;
					if (group.left === ".") leftDelim = makeNullDelimiter(options, ["mopen"]);
					else leftDelim = delimiter.leftRightDelim(group.left, innerHeight, innerDepth, options, group.mode, ["mopen"]);
					inner$1.unshift(leftDelim);
					if (hadMiddle) for (let i = 1; i < inner$1.length; i++) {
						const isMiddle = inner$1[i].isMiddle;
						if (isMiddle) inner$1[i] = delimiter.leftRightDelim(isMiddle.delim, innerHeight, innerDepth, isMiddle.options, group.mode, []);
					}
					let rightDelim;
					if (group.right === ".") rightDelim = makeNullDelimiter(options, ["mclose"]);
					else {
						const colorOptions = group.rightColor ? options.withColor(group.rightColor) : options;
						rightDelim = delimiter.leftRightDelim(group.right, innerHeight, innerDepth, colorOptions, group.mode, ["mclose"]);
					}
					inner$1.push(rightDelim);
					return buildCommon.makeSpan(["minner"], inner$1, options);
				},
				mathmlBuilder: (group, options) => {
					assertParsed(group);
					const inner$1 = buildMathML_buildExpression(group.body, options);
					if (group.left !== ".") {
						const leftNode = new mathMLTree.MathNode("mo", [makeText(group.left, group.mode)]);
						leftNode.setAttribute("fence", "true");
						inner$1.unshift(leftNode);
					}
					if (group.right !== ".") {
						const rightNode = new mathMLTree.MathNode("mo", [makeText(group.right, group.mode)]);
						rightNode.setAttribute("fence", "true");
						if (group.rightColor) rightNode.setAttribute("mathcolor", group.rightColor);
						inner$1.push(rightNode);
					}
					return makeRow(inner$1);
				}
			});
			defineFunction({
				type: "middle",
				names: ["\\middle"],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					if (!context.parser.leftrightDepth) throw new src_ParseError("\\middle without preceding \\left", delim);
					return {
						type: "middle",
						mode: context.parser.mode,
						delim: delim.text
					};
				},
				htmlBuilder: (group, options) => {
					let middleDelim;
					if (group.delim === ".") middleDelim = makeNullDelimiter(options, []);
					else {
						middleDelim = delimiter.sizedDelim(group.delim, 1, options, group.mode, []);
						const isMiddle = {
							delim: group.delim,
							options
						};
						middleDelim.isMiddle = isMiddle;
					}
					return middleDelim;
				},
				mathmlBuilder: (group, options) => {
					const textNode = group.delim === "\\vert" || group.delim === "|" ? makeText("|", "text") : makeText(group.delim, group.mode);
					const middleNode = new mathMLTree.MathNode("mo", [textNode]);
					middleNode.setAttribute("fence", "true");
					middleNode.setAttribute("lspace", "0.05em");
					middleNode.setAttribute("rspace", "0.05em");
					return middleNode;
				}
			});
			const enclose_htmlBuilder = (group, options) => {
				const inner$1 = buildCommon.wrapFragment(buildGroup(group.body, options), options);
				const label = group.label.slice(1);
				let scale = options.sizeMultiplier;
				let img;
				let imgShift = 0;
				const isSingleChar = utils.isCharacterBox(group.body);
				if (label === "sout") {
					img = buildCommon.makeSpan(["stretchy", "sout"]);
					img.height = options.fontMetrics().defaultRuleThickness / scale;
					imgShift = -.5 * options.fontMetrics().xHeight;
				} else if (label === "phase") {
					const lineWeight = calculateSize({
						number: .6,
						unit: "pt"
					}, options);
					const clearance = calculateSize({
						number: .35,
						unit: "ex"
					}, options);
					const newOptions = options.havingBaseSizing();
					scale = scale / newOptions.sizeMultiplier;
					const angleHeight = inner$1.height + inner$1.depth + lineWeight + clearance;
					inner$1.style.paddingLeft = makeEm(angleHeight / 2 + lineWeight);
					const viewBoxHeight = Math.floor(1e3 * angleHeight * scale);
					const svgNode = new SvgNode([new PathNode("phase", phasePath(viewBoxHeight))], {
						"width": "400em",
						"height": makeEm(viewBoxHeight / 1e3),
						"viewBox": "0 0 400000 " + viewBoxHeight,
						"preserveAspectRatio": "xMinYMin slice"
					});
					img = buildCommon.makeSvgSpan(["hide-tail"], [svgNode], options);
					img.style.height = makeEm(angleHeight);
					imgShift = inner$1.depth + lineWeight + clearance;
				} else {
					if (/cancel/.test(label)) {
						if (!isSingleChar) inner$1.classes.push("cancel-pad");
					} else if (label === "angl") inner$1.classes.push("anglpad");
					else inner$1.classes.push("boxpad");
					let topPad = 0;
					let bottomPad = 0;
					let ruleThickness = 0;
					if (/box/.test(label)) {
						ruleThickness = Math.max(options.fontMetrics().fboxrule, options.minRuleThickness);
						topPad = options.fontMetrics().fboxsep + (label === "colorbox" ? 0 : ruleThickness);
						bottomPad = topPad;
					} else if (label === "angl") {
						ruleThickness = Math.max(options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
						topPad = 4 * ruleThickness;
						bottomPad = Math.max(0, .25 - inner$1.depth);
					} else {
						topPad = isSingleChar ? .2 : 0;
						bottomPad = topPad;
					}
					img = stretchy.encloseSpan(inner$1, label, topPad, bottomPad, options);
					if (/fbox|boxed|fcolorbox/.test(label)) {
						img.style.borderStyle = "solid";
						img.style.borderWidth = makeEm(ruleThickness);
					} else if (label === "angl" && ruleThickness !== .049) {
						img.style.borderTopWidth = makeEm(ruleThickness);
						img.style.borderRightWidth = makeEm(ruleThickness);
					}
					imgShift = inner$1.depth + bottomPad;
					if (group.backgroundColor) {
						img.style.backgroundColor = group.backgroundColor;
						if (group.borderColor) img.style.borderColor = group.borderColor;
					}
				}
				let vlist;
				if (group.backgroundColor) vlist = buildCommon.makeVList({
					positionType: "individualShift",
					children: [{
						type: "elem",
						elem: img,
						shift: imgShift
					}, {
						type: "elem",
						elem: inner$1,
						shift: 0
					}]
				}, options);
				else {
					const classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
					vlist = buildCommon.makeVList({
						positionType: "individualShift",
						children: [{
							type: "elem",
							elem: inner$1,
							shift: 0
						}, {
							type: "elem",
							elem: img,
							shift: imgShift,
							wrapperClasses: classes
						}]
					}, options);
				}
				if (/cancel/.test(label)) {
					vlist.height = inner$1.height;
					vlist.depth = inner$1.depth;
				}
				if (/cancel/.test(label) && !isSingleChar) return buildCommon.makeSpan(["mord", "cancel-lap"], [vlist], options);
				else return buildCommon.makeSpan(["mord"], [vlist], options);
			};
			const enclose_mathmlBuilder = (group, options) => {
				let fboxsep = 0;
				const node = new mathMLTree.MathNode(group.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [buildMathML_buildGroup(group.body, options)]);
				switch (group.label) {
					case "\\cancel":
						node.setAttribute("notation", "updiagonalstrike");
						break;
					case "\\bcancel":
						node.setAttribute("notation", "downdiagonalstrike");
						break;
					case "\\phase":
						node.setAttribute("notation", "phasorangle");
						break;
					case "\\sout":
						node.setAttribute("notation", "horizontalstrike");
						break;
					case "\\fbox":
						node.setAttribute("notation", "box");
						break;
					case "\\angl":
						node.setAttribute("notation", "actuarial");
						break;
					case "\\fcolorbox":
					case "\\colorbox":
						fboxsep = options.fontMetrics().fboxsep * options.fontMetrics().ptPerEm;
						node.setAttribute("width", "+" + 2 * fboxsep + "pt");
						node.setAttribute("height", "+" + 2 * fboxsep + "pt");
						node.setAttribute("lspace", fboxsep + "pt");
						node.setAttribute("voffset", fboxsep + "pt");
						if (group.label === "\\fcolorbox") {
							const thk = Math.max(options.fontMetrics().fboxrule, options.minRuleThickness);
							node.setAttribute("style", "border: " + thk + "em solid " + String(group.borderColor));
						}
						break;
					case "\\xcancel":
						node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
						break;
				}
				if (group.backgroundColor) node.setAttribute("mathbackground", group.backgroundColor);
				return node;
			};
			defineFunction({
				type: "enclose",
				names: ["\\colorbox"],
				props: {
					numArgs: 2,
					allowedInText: true,
					argTypes: ["color", "text"]
				},
				handler(_ref, args, optArgs) {
					let { parser, funcName } = _ref;
					const color = assertNodeType(args[0], "color-token").color;
					const body = args[1];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						backgroundColor: color,
						body
					};
				},
				htmlBuilder: enclose_htmlBuilder,
				mathmlBuilder: enclose_mathmlBuilder
			});
			defineFunction({
				type: "enclose",
				names: ["\\fcolorbox"],
				props: {
					numArgs: 3,
					allowedInText: true,
					argTypes: [
						"color",
						"color",
						"text"
					]
				},
				handler(_ref2, args, optArgs) {
					let { parser, funcName } = _ref2;
					const borderColor = assertNodeType(args[0], "color-token").color;
					const backgroundColor = assertNodeType(args[1], "color-token").color;
					const body = args[2];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						backgroundColor,
						borderColor,
						body
					};
				},
				htmlBuilder: enclose_htmlBuilder,
				mathmlBuilder: enclose_mathmlBuilder
			});
			defineFunction({
				type: "enclose",
				names: ["\\fbox"],
				props: {
					numArgs: 1,
					argTypes: ["hbox"],
					allowedInText: true
				},
				handler(_ref3, args) {
					let { parser } = _ref3;
					return {
						type: "enclose",
						mode: parser.mode,
						label: "\\fbox",
						body: args[0]
					};
				}
			});
			defineFunction({
				type: "enclose",
				names: [
					"\\cancel",
					"\\bcancel",
					"\\xcancel",
					"\\sout",
					"\\phase"
				],
				props: { numArgs: 1 },
				handler(_ref4, args) {
					let { parser, funcName } = _ref4;
					const body = args[0];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						body
					};
				},
				htmlBuilder: enclose_htmlBuilder,
				mathmlBuilder: enclose_mathmlBuilder
			});
			defineFunction({
				type: "enclose",
				names: ["\\angl"],
				props: {
					numArgs: 1,
					argTypes: ["hbox"],
					allowedInText: false
				},
				handler(_ref5, args) {
					let { parser } = _ref5;
					return {
						type: "enclose",
						mode: parser.mode,
						label: "\\angl",
						body: args[0]
					};
				}
			});
			const _environments = {};
			function defineEnvironment(_ref) {
				let { type: type$1, names, props, handler, htmlBuilder: htmlBuilder$1, mathmlBuilder: mathmlBuilder$1 } = _ref;
				const data = {
					type: type$1,
					numArgs: props.numArgs || 0,
					allowedInText: false,
					numOptionalArgs: 0,
					handler
				};
				for (let i = 0; i < names.length; ++i) _environments[names[i]] = data;
				if (htmlBuilder$1) _htmlGroupBuilders[type$1] = htmlBuilder$1;
				if (mathmlBuilder$1) _mathmlGroupBuilders[type$1] = mathmlBuilder$1;
			}
			const _macros = {};
			function defineMacro(name, body) {
				_macros[name] = body;
			}
			class SourceLocation {
				constructor(lexer, start, end) {
					this.lexer = void 0;
					this.start = void 0;
					this.end = void 0;
					this.lexer = lexer;
					this.start = start;
					this.end = end;
				}
				static range(first, second) {
					if (!second) return first && first.loc;
					else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) return null;
					else return new SourceLocation(first.loc.lexer, first.loc.start, second.loc.end);
				}
			}
			class Token {
				constructor(text, loc) {
					this.text = void 0;
					this.loc = void 0;
					this.noexpand = void 0;
					this.treatAsRelax = void 0;
					this.text = text;
					this.loc = loc;
				}
				range(endToken, text) {
					return new Token(text, SourceLocation.range(this, endToken));
				}
			}
			function getHLines(parser) {
				const hlineInfo = [];
				parser.consumeSpaces();
				let nxt = parser.fetch().text;
				if (nxt === "\\relax") {
					parser.consume();
					parser.consumeSpaces();
					nxt = parser.fetch().text;
				}
				while (nxt === "\\hline" || nxt === "\\hdashline") {
					parser.consume();
					hlineInfo.push(nxt === "\\hdashline");
					parser.consumeSpaces();
					nxt = parser.fetch().text;
				}
				return hlineInfo;
			}
			const validateAmsEnvironmentContext = (context) => {
				if (!context.parser.settings.displayMode) throw new src_ParseError("{" + context.envName + "} can be used only in display mode.");
			};
			function getAutoTag(name) {
				if (name.indexOf("ed") === -1) return name.indexOf("*") === -1;
			}
			function parseArray(parser, _ref, style) {
				let { hskipBeforeAndAfter, addJot, cols, arraystretch, colSeparationType, autoTag, singleRow, emptySingleRow, maxNumCols, leqno } = _ref;
				parser.gullet.beginGroup();
				if (!singleRow) parser.gullet.macros.set("\\cr", "\\\\\\relax");
				if (!arraystretch) {
					const stretch = parser.gullet.expandMacroAsText("\\arraystretch");
					if (stretch == null) arraystretch = 1;
					else {
						arraystretch = parseFloat(stretch);
						if (!arraystretch || arraystretch < 0) throw new src_ParseError("Invalid \\arraystretch: " + stretch);
					}
				}
				parser.gullet.beginGroup();
				let row = [];
				const body = [row];
				const rowGaps = [];
				const hLinesBeforeRow = [];
				const tags = autoTag != null ? [] : void 0;
				function beginRow() {
					if (autoTag) parser.gullet.macros.set("\\@eqnsw", "1", true);
				}
				function endRow() {
					if (tags) if (parser.gullet.macros.get("\\df@tag")) {
						tags.push(parser.subparse([new Token("\\df@tag")]));
						parser.gullet.macros.set("\\df@tag", void 0, true);
					} else tags.push(Boolean(autoTag) && parser.gullet.macros.get("\\@eqnsw") === "1");
				}
				beginRow();
				hLinesBeforeRow.push(getHLines(parser));
				while (true) {
					let cell = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
					parser.gullet.endGroup();
					parser.gullet.beginGroup();
					cell = {
						type: "ordgroup",
						mode: parser.mode,
						body: cell
					};
					if (style) cell = {
						type: "styling",
						mode: parser.mode,
						style,
						body: [cell]
					};
					row.push(cell);
					const next = parser.fetch().text;
					if (next === "&") {
						if (maxNumCols && row.length === maxNumCols) if (singleRow || colSeparationType) throw new src_ParseError("Too many tab characters: &", parser.nextToken);
						else parser.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
						parser.consume();
					} else if (next === "\\end") {
						endRow();
						if (row.length === 1 && cell.type === "styling" && cell.body[0].body.length === 0 && (body.length > 1 || !emptySingleRow)) body.pop();
						if (hLinesBeforeRow.length < body.length + 1) hLinesBeforeRow.push([]);
						break;
					} else if (next === "\\\\") {
						parser.consume();
						let size;
						if (parser.gullet.future().text !== " ") size = parser.parseSizeGroup(true);
						rowGaps.push(size ? size.value : null);
						endRow();
						hLinesBeforeRow.push(getHLines(parser));
						row = [];
						body.push(row);
						beginRow();
					} else throw new src_ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
				}
				parser.gullet.endGroup();
				parser.gullet.endGroup();
				return {
					type: "array",
					mode: parser.mode,
					addJot,
					arraystretch,
					body,
					cols,
					rowGaps,
					hskipBeforeAndAfter,
					hLinesBeforeRow,
					colSeparationType,
					tags,
					leqno
				};
			}
			function dCellStyle(envName) {
				if (envName.slice(0, 1) === "d") return "display";
				else return "text";
			}
			const array_htmlBuilder = function(group, options) {
				let r;
				let c;
				const nr = group.body.length;
				const hLinesBeforeRow = group.hLinesBeforeRow;
				let nc = 0;
				let body = new Array(nr);
				const hlines = [];
				const ruleThickness = Math.max(options.fontMetrics().arrayRuleWidth, options.minRuleThickness);
				const pt = 1 / options.fontMetrics().ptPerEm;
				let arraycolsep = 5 * pt;
				if (group.colSeparationType && group.colSeparationType === "small") arraycolsep = .2778 * (options.havingStyle(src_Style.SCRIPT).sizeMultiplier / options.sizeMultiplier);
				const baselineskip = group.colSeparationType === "CD" ? calculateSize({
					number: 3,
					unit: "ex"
				}, options) : 12 * pt;
				const jot = 3 * pt;
				const arrayskip = group.arraystretch * baselineskip;
				const arstrutHeight = .7 * arrayskip;
				const arstrutDepth = .3 * arrayskip;
				let totalHeight = 0;
				function setHLinePos(hlinesInGap) {
					for (let i = 0; i < hlinesInGap.length; ++i) {
						if (i > 0) totalHeight += .25;
						hlines.push({
							pos: totalHeight,
							isDashed: hlinesInGap[i]
						});
					}
				}
				setHLinePos(hLinesBeforeRow[0]);
				for (r = 0; r < group.body.length; ++r) {
					const inrow = group.body[r];
					let height = arstrutHeight;
					let depth = arstrutDepth;
					if (nc < inrow.length) nc = inrow.length;
					const outrow = new Array(inrow.length);
					for (c = 0; c < inrow.length; ++c) {
						const elt = buildGroup(inrow[c], options);
						if (depth < elt.depth) depth = elt.depth;
						if (height < elt.height) height = elt.height;
						outrow[c] = elt;
					}
					const rowGap = group.rowGaps[r];
					let gap = 0;
					if (rowGap) {
						gap = calculateSize(rowGap, options);
						if (gap > 0) {
							gap += arstrutDepth;
							if (depth < gap) depth = gap;
							gap = 0;
						}
					}
					if (group.addJot) depth += jot;
					outrow.height = height;
					outrow.depth = depth;
					totalHeight += height;
					outrow.pos = totalHeight;
					totalHeight += depth + gap;
					body[r] = outrow;
					setHLinePos(hLinesBeforeRow[r + 1]);
				}
				const offset = totalHeight / 2 + options.fontMetrics().axisHeight;
				const colDescriptions = group.cols || [];
				const cols = [];
				let colSep;
				let colDescrNum;
				const tagSpans = [];
				if (group.tags && group.tags.some((tag) => tag)) for (r = 0; r < nr; ++r) {
					const rw = body[r];
					const shift = rw.pos - offset;
					const tag = group.tags[r];
					let tagSpan;
					if (tag === true) tagSpan = buildCommon.makeSpan(["eqn-num"], [], options);
					else if (tag === false) tagSpan = buildCommon.makeSpan([], [], options);
					else tagSpan = buildCommon.makeSpan([], buildExpression(tag, options, true), options);
					tagSpan.depth = rw.depth;
					tagSpan.height = rw.height;
					tagSpans.push({
						type: "elem",
						elem: tagSpan,
						shift
					});
				}
				for (c = 0, colDescrNum = 0; c < nc || colDescrNum < colDescriptions.length; ++c, ++colDescrNum) {
					let colDescr = colDescriptions[colDescrNum] || {};
					let firstSeparator = true;
					while (colDescr.type === "separator") {
						if (!firstSeparator) {
							colSep = buildCommon.makeSpan(["arraycolsep"], []);
							colSep.style.width = makeEm(options.fontMetrics().doubleRuleSep);
							cols.push(colSep);
						}
						if (colDescr.separator === "|" || colDescr.separator === ":") {
							const lineType = colDescr.separator === "|" ? "solid" : "dashed";
							const separator = buildCommon.makeSpan(["vertical-separator"], [], options);
							separator.style.height = makeEm(totalHeight);
							separator.style.borderRightWidth = makeEm(ruleThickness);
							separator.style.borderRightStyle = lineType;
							separator.style.margin = "0 " + makeEm(-ruleThickness / 2);
							const shift = totalHeight - offset;
							if (shift) separator.style.verticalAlign = makeEm(-shift);
							cols.push(separator);
						} else throw new src_ParseError("Invalid separator type: " + colDescr.separator);
						colDescrNum++;
						colDescr = colDescriptions[colDescrNum] || {};
						firstSeparator = false;
					}
					if (c >= nc) continue;
					let sepwidth;
					if (c > 0 || group.hskipBeforeAndAfter) {
						sepwidth = utils.deflt(colDescr.pregap, arraycolsep);
						if (sepwidth !== 0) {
							colSep = buildCommon.makeSpan(["arraycolsep"], []);
							colSep.style.width = makeEm(sepwidth);
							cols.push(colSep);
						}
					}
					let col = [];
					for (r = 0; r < nr; ++r) {
						const row = body[r];
						const elem = row[c];
						if (!elem) continue;
						const shift = row.pos - offset;
						elem.depth = row.depth;
						elem.height = row.height;
						col.push({
							type: "elem",
							elem,
							shift
						});
					}
					col = buildCommon.makeVList({
						positionType: "individualShift",
						children: col
					}, options);
					col = buildCommon.makeSpan(["col-align-" + (colDescr.align || "c")], [col]);
					cols.push(col);
					if (c < nc - 1 || group.hskipBeforeAndAfter) {
						sepwidth = utils.deflt(colDescr.postgap, arraycolsep);
						if (sepwidth !== 0) {
							colSep = buildCommon.makeSpan(["arraycolsep"], []);
							colSep.style.width = makeEm(sepwidth);
							cols.push(colSep);
						}
					}
				}
				body = buildCommon.makeSpan(["mtable"], cols);
				if (hlines.length > 0) {
					const line = buildCommon.makeLineSpan("hline", options, ruleThickness);
					const dashes = buildCommon.makeLineSpan("hdashline", options, ruleThickness);
					const vListElems = [{
						type: "elem",
						elem: body,
						shift: 0
					}];
					while (hlines.length > 0) {
						const hline = hlines.pop();
						const lineShift = hline.pos - offset;
						if (hline.isDashed) vListElems.push({
							type: "elem",
							elem: dashes,
							shift: lineShift
						});
						else vListElems.push({
							type: "elem",
							elem: line,
							shift: lineShift
						});
					}
					body = buildCommon.makeVList({
						positionType: "individualShift",
						children: vListElems
					}, options);
				}
				if (tagSpans.length === 0) return buildCommon.makeSpan(["mord"], [body], options);
				else {
					let eqnNumCol = buildCommon.makeVList({
						positionType: "individualShift",
						children: tagSpans
					}, options);
					eqnNumCol = buildCommon.makeSpan(["tag"], [eqnNumCol], options);
					return buildCommon.makeFragment([body, eqnNumCol]);
				}
			};
			const alignMap = {
				c: "center ",
				l: "left ",
				r: "right "
			};
			const array_mathmlBuilder = function(group, options) {
				const tbl = [];
				const glue = new mathMLTree.MathNode("mtd", [], ["mtr-glue"]);
				const tag = new mathMLTree.MathNode("mtd", [], ["mml-eqn-num"]);
				for (let i = 0; i < group.body.length; i++) {
					const rw = group.body[i];
					const row = [];
					for (let j = 0; j < rw.length; j++) row.push(new mathMLTree.MathNode("mtd", [buildMathML_buildGroup(rw[j], options)]));
					if (group.tags && group.tags[i]) {
						row.unshift(glue);
						row.push(glue);
						if (group.leqno) row.unshift(tag);
						else row.push(tag);
					}
					tbl.push(new mathMLTree.MathNode("mtr", row));
				}
				let table = new mathMLTree.MathNode("mtable", tbl);
				const gap = group.arraystretch === .5 ? .1 : .16 + group.arraystretch - 1 + (group.addJot ? .09 : 0);
				table.setAttribute("rowspacing", makeEm(gap));
				let menclose = "";
				let align = "";
				if (group.cols && group.cols.length > 0) {
					const cols = group.cols;
					let columnLines = "";
					let prevTypeWasAlign = false;
					let iStart = 0;
					let iEnd = cols.length;
					if (cols[0].type === "separator") {
						menclose += "top ";
						iStart = 1;
					}
					if (cols[cols.length - 1].type === "separator") {
						menclose += "bottom ";
						iEnd -= 1;
					}
					for (let i = iStart; i < iEnd; i++) if (cols[i].type === "align") {
						align += alignMap[cols[i].align];
						if (prevTypeWasAlign) columnLines += "none ";
						prevTypeWasAlign = true;
					} else if (cols[i].type === "separator") {
						if (prevTypeWasAlign) {
							columnLines += cols[i].separator === "|" ? "solid " : "dashed ";
							prevTypeWasAlign = false;
						}
					}
					table.setAttribute("columnalign", align.trim());
					if (/[sd]/.test(columnLines)) table.setAttribute("columnlines", columnLines.trim());
				}
				if (group.colSeparationType === "align") {
					const cols = group.cols || [];
					let spacing$1 = "";
					for (let i = 1; i < cols.length; i++) spacing$1 += i % 2 ? "0em " : "1em ";
					table.setAttribute("columnspacing", spacing$1.trim());
				} else if (group.colSeparationType === "alignat" || group.colSeparationType === "gather") table.setAttribute("columnspacing", "0em");
				else if (group.colSeparationType === "small") table.setAttribute("columnspacing", "0.2778em");
				else if (group.colSeparationType === "CD") table.setAttribute("columnspacing", "0.5em");
				else table.setAttribute("columnspacing", "1em");
				let rowLines = "";
				const hlines = group.hLinesBeforeRow;
				menclose += hlines[0].length > 0 ? "left " : "";
				menclose += hlines[hlines.length - 1].length > 0 ? "right " : "";
				for (let i = 1; i < hlines.length - 1; i++) rowLines += hlines[i].length === 0 ? "none " : hlines[i][0] ? "dashed " : "solid ";
				if (/[sd]/.test(rowLines)) table.setAttribute("rowlines", rowLines.trim());
				if (menclose !== "") {
					table = new mathMLTree.MathNode("menclose", [table]);
					table.setAttribute("notation", menclose.trim());
				}
				if (group.arraystretch && group.arraystretch < 1) {
					table = new mathMLTree.MathNode("mstyle", [table]);
					table.setAttribute("scriptlevel", "1");
				}
				return table;
			};
			const alignedHandler = function(context, args) {
				if (context.envName.indexOf("ed") === -1) validateAmsEnvironmentContext(context);
				const cols = [];
				const separationType = context.envName.indexOf("at") > -1 ? "alignat" : "align";
				const isSplit = context.envName === "split";
				const res = parseArray(context.parser, {
					cols,
					addJot: true,
					autoTag: isSplit ? void 0 : getAutoTag(context.envName),
					emptySingleRow: true,
					colSeparationType: separationType,
					maxNumCols: isSplit ? 2 : void 0,
					leqno: context.parser.settings.leqno
				}, "display");
				let numMaths;
				let numCols = 0;
				const emptyGroup = {
					type: "ordgroup",
					mode: context.mode,
					body: []
				};
				if (args[0] && args[0].type === "ordgroup") {
					let arg0 = "";
					for (let i = 0; i < args[0].body.length; i++) {
						const textord$1 = assertNodeType(args[0].body[i], "textord");
						arg0 += textord$1.text;
					}
					numMaths = Number(arg0);
					numCols = numMaths * 2;
				}
				const isAligned = !numCols;
				res.body.forEach(function(row) {
					for (let i = 1; i < row.length; i += 2) assertNodeType(assertNodeType(row[i], "styling").body[0], "ordgroup").body.unshift(emptyGroup);
					if (!isAligned) {
						const curMaths = row.length / 2;
						if (numMaths < curMaths) throw new src_ParseError("Too many math in a row: " + ("expected " + numMaths + ", but got " + curMaths), row[0]);
					} else if (numCols < row.length) numCols = row.length;
				});
				for (let i = 0; i < numCols; ++i) {
					let align = "r";
					let pregap = 0;
					if (i % 2 === 1) align = "l";
					else if (i > 0 && isAligned) pregap = 1;
					cols[i] = {
						type: "align",
						align,
						pregap,
						postgap: 0
					};
				}
				res.colSeparationType = isAligned ? "align" : "alignat";
				return res;
			};
			defineEnvironment({
				type: "array",
				names: ["array", "darray"],
				props: { numArgs: 1 },
				handler(context, args) {
					const cols = (checkSymbolNodeType(args[0]) ? [args[0]] : assertNodeType(args[0], "ordgroup").body).map(function(nde) {
						const ca = assertSymbolNodeType(nde).text;
						if ("lcr".indexOf(ca) !== -1) return {
							type: "align",
							align: ca
						};
						else if (ca === "|") return {
							type: "separator",
							separator: "|"
						};
						else if (ca === ":") return {
							type: "separator",
							separator: ":"
						};
						throw new src_ParseError("Unknown column alignment: " + ca, nde);
					});
					const res = {
						cols,
						hskipBeforeAndAfter: true,
						maxNumCols: cols.length
					};
					return parseArray(context.parser, res, dCellStyle(context.envName));
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: [
					"matrix",
					"pmatrix",
					"bmatrix",
					"Bmatrix",
					"vmatrix",
					"Vmatrix",
					"matrix*",
					"pmatrix*",
					"bmatrix*",
					"Bmatrix*",
					"vmatrix*",
					"Vmatrix*"
				],
				props: { numArgs: 0 },
				handler(context) {
					const delimiters$1 = {
						"matrix": null,
						"pmatrix": ["(", ")"],
						"bmatrix": ["[", "]"],
						"Bmatrix": ["\\{", "\\}"],
						"vmatrix": ["|", "|"],
						"Vmatrix": ["\\Vert", "\\Vert"]
					}[context.envName.replace("*", "")];
					let colAlign = "c";
					const payload = {
						hskipBeforeAndAfter: false,
						cols: [{
							type: "align",
							align: colAlign
						}]
					};
					if (context.envName.charAt(context.envName.length - 1) === "*") {
						const parser = context.parser;
						parser.consumeSpaces();
						if (parser.fetch().text === "[") {
							parser.consume();
							parser.consumeSpaces();
							colAlign = parser.fetch().text;
							if ("lcr".indexOf(colAlign) === -1) throw new src_ParseError("Expected l or c or r", parser.nextToken);
							parser.consume();
							parser.consumeSpaces();
							parser.expect("]");
							parser.consume();
							payload.cols = [{
								type: "align",
								align: colAlign
							}];
						}
					}
					const res = parseArray(context.parser, payload, dCellStyle(context.envName));
					const numCols = Math.max(0, ...res.body.map((row) => row.length));
					res.cols = new Array(numCols).fill({
						type: "align",
						align: colAlign
					});
					return delimiters$1 ? {
						type: "leftright",
						mode: context.mode,
						body: [res],
						left: delimiters$1[0],
						right: delimiters$1[1],
						rightColor: void 0
					} : res;
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: ["smallmatrix"],
				props: { numArgs: 0 },
				handler(context) {
					const res = parseArray(context.parser, { arraystretch: .5 }, "script");
					res.colSeparationType = "small";
					return res;
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: ["subarray"],
				props: { numArgs: 1 },
				handler(context, args) {
					const cols = (checkSymbolNodeType(args[0]) ? [args[0]] : assertNodeType(args[0], "ordgroup").body).map(function(nde) {
						const ca = assertSymbolNodeType(nde).text;
						if ("lc".indexOf(ca) !== -1) return {
							type: "align",
							align: ca
						};
						throw new src_ParseError("Unknown column alignment: " + ca, nde);
					});
					if (cols.length > 1) throw new src_ParseError("{subarray} can contain only one column");
					let res = {
						cols,
						hskipBeforeAndAfter: false,
						arraystretch: .5
					};
					res = parseArray(context.parser, res, "script");
					if (res.body.length > 0 && res.body[0].length > 1) throw new src_ParseError("{subarray} can contain only one column");
					return res;
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: [
					"cases",
					"dcases",
					"rcases",
					"drcases"
				],
				props: { numArgs: 0 },
				handler(context) {
					const res = parseArray(context.parser, {
						arraystretch: 1.2,
						cols: [{
							type: "align",
							align: "l",
							pregap: 0,
							postgap: 1
						}, {
							type: "align",
							align: "l",
							pregap: 0,
							postgap: 0
						}]
					}, dCellStyle(context.envName));
					return {
						type: "leftright",
						mode: context.mode,
						body: [res],
						left: context.envName.indexOf("r") > -1 ? "." : "\\{",
						right: context.envName.indexOf("r") > -1 ? "\\}" : ".",
						rightColor: void 0
					};
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: [
					"align",
					"align*",
					"aligned",
					"split"
				],
				props: { numArgs: 0 },
				handler: alignedHandler,
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: [
					"gathered",
					"gather",
					"gather*"
				],
				props: { numArgs: 0 },
				handler(context) {
					if (["gather", "gather*"].includes(context.envName)) validateAmsEnvironmentContext(context);
					const res = {
						cols: [{
							type: "align",
							align: "c"
						}],
						addJot: true,
						colSeparationType: "gather",
						autoTag: getAutoTag(context.envName),
						emptySingleRow: true,
						leqno: context.parser.settings.leqno
					};
					return parseArray(context.parser, res, "display");
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: [
					"alignat",
					"alignat*",
					"alignedat"
				],
				props: { numArgs: 1 },
				handler: alignedHandler,
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: ["equation", "equation*"],
				props: { numArgs: 0 },
				handler(context) {
					validateAmsEnvironmentContext(context);
					const res = {
						autoTag: getAutoTag(context.envName),
						emptySingleRow: true,
						singleRow: true,
						maxNumCols: 1,
						leqno: context.parser.settings.leqno
					};
					return parseArray(context.parser, res, "display");
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineEnvironment({
				type: "array",
				names: ["CD"],
				props: { numArgs: 0 },
				handler(context) {
					validateAmsEnvironmentContext(context);
					return parseCD(context.parser);
				},
				htmlBuilder: array_htmlBuilder,
				mathmlBuilder: array_mathmlBuilder
			});
			defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
			defineMacro("\\notag", "\\nonumber");
			defineFunction({
				type: "text",
				names: ["\\hline", "\\hdashline"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: true
				},
				handler(context, args) {
					throw new src_ParseError(context.funcName + " valid only within array environment");
				}
			});
			var src_environments = _environments;
			defineFunction({
				type: "environment",
				names: ["\\begin", "\\end"],
				props: {
					numArgs: 1,
					argTypes: ["text"]
				},
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					const nameGroup = args[0];
					if (nameGroup.type !== "ordgroup") throw new src_ParseError("Invalid environment name", nameGroup);
					let envName = "";
					for (let i = 0; i < nameGroup.body.length; ++i) envName += assertNodeType(nameGroup.body[i], "textord").text;
					if (funcName === "\\begin") {
						if (!src_environments.hasOwnProperty(envName)) throw new src_ParseError("No such environment: " + envName, nameGroup);
						const env = src_environments[envName];
						const { args: args$1, optArgs } = parser.parseArguments("\\begin{" + envName + "}", env);
						const context = {
							mode: parser.mode,
							envName,
							parser
						};
						const result = env.handler(context, args$1, optArgs);
						parser.expect("\\end", false);
						const endNameToken = parser.nextToken;
						const end = assertNodeType(parser.parseFunction(), "environment");
						if (end.name !== envName) throw new src_ParseError("Mismatch: \\begin{" + envName + "} matched by \\end{" + end.name + "}", endNameToken);
						return result;
					}
					return {
						type: "environment",
						mode: parser.mode,
						name: envName,
						nameGroup
					};
				}
			});
			const font_htmlBuilder = (group, options) => {
				const font = group.font;
				const newOptions = options.withFont(font);
				return buildGroup(group.body, newOptions);
			};
			const font_mathmlBuilder = (group, options) => {
				const font = group.font;
				const newOptions = options.withFont(font);
				return buildMathML_buildGroup(group.body, newOptions);
			};
			const fontAliases = {
				"\\Bbb": "\\mathbb",
				"\\bold": "\\mathbf",
				"\\frak": "\\mathfrak",
				"\\bm": "\\boldsymbol"
			};
			defineFunction({
				type: "font",
				names: [
					"\\mathrm",
					"\\mathit",
					"\\mathbf",
					"\\mathnormal",
					"\\mathsfit",
					"\\mathbb",
					"\\mathcal",
					"\\mathfrak",
					"\\mathscr",
					"\\mathsf",
					"\\mathtt",
					"\\Bbb",
					"\\bold",
					"\\frak"
				],
				props: {
					numArgs: 1,
					allowedInArgument: true
				},
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					const body = normalizeArgument(args[0]);
					let func = funcName;
					if (func in fontAliases) func = fontAliases[func];
					return {
						type: "font",
						mode: parser.mode,
						font: func.slice(1),
						body
					};
				},
				htmlBuilder: font_htmlBuilder,
				mathmlBuilder: font_mathmlBuilder
			});
			defineFunction({
				type: "mclass",
				names: ["\\boldsymbol", "\\bm"],
				props: { numArgs: 1 },
				handler: (_ref2, args) => {
					let { parser } = _ref2;
					const body = args[0];
					const isCharacterBox$1 = utils.isCharacterBox(body);
					return {
						type: "mclass",
						mode: parser.mode,
						mclass: binrelClass(body),
						body: [{
							type: "font",
							mode: parser.mode,
							font: "boldsymbol",
							body
						}],
						isCharacterBox: isCharacterBox$1
					};
				}
			});
			defineFunction({
				type: "font",
				names: [
					"\\rm",
					"\\sf",
					"\\tt",
					"\\bf",
					"\\it",
					"\\cal"
				],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler: (_ref3, args) => {
					let { parser, funcName, breakOnTokenText } = _ref3;
					const { mode } = parser;
					const body = parser.parseExpression(true, breakOnTokenText);
					return {
						type: "font",
						mode,
						font: "math" + funcName.slice(1),
						body: {
							type: "ordgroup",
							mode: parser.mode,
							body
						}
					};
				},
				htmlBuilder: font_htmlBuilder,
				mathmlBuilder: font_mathmlBuilder
			});
			const adjustStyle = (size, originalStyle) => {
				let style = originalStyle;
				if (size === "display") style = style.id >= src_Style.SCRIPT.id ? style.text() : src_Style.DISPLAY;
				else if (size === "text" && style.size === src_Style.DISPLAY.size) style = src_Style.TEXT;
				else if (size === "script") style = src_Style.SCRIPT;
				else if (size === "scriptscript") style = src_Style.SCRIPTSCRIPT;
				return style;
			};
			const genfrac_htmlBuilder = (group, options) => {
				const style = adjustStyle(group.size, options.style);
				const nstyle = style.fracNum();
				const dstyle = style.fracDen();
				let newOptions;
				newOptions = options.havingStyle(nstyle);
				const numerm = buildGroup(group.numer, newOptions, options);
				if (group.continued) {
					const hStrut = 8.5 / options.fontMetrics().ptPerEm;
					const dStrut = 3.5 / options.fontMetrics().ptPerEm;
					numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
					numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
				}
				newOptions = options.havingStyle(dstyle);
				const denomm = buildGroup(group.denom, newOptions, options);
				let rule;
				let ruleWidth;
				let ruleSpacing;
				if (group.hasBarLine) {
					if (group.barSize) {
						ruleWidth = calculateSize(group.barSize, options);
						rule = buildCommon.makeLineSpan("frac-line", options, ruleWidth);
					} else rule = buildCommon.makeLineSpan("frac-line", options);
					ruleWidth = rule.height;
					ruleSpacing = rule.height;
				} else {
					rule = null;
					ruleWidth = 0;
					ruleSpacing = options.fontMetrics().defaultRuleThickness;
				}
				let numShift;
				let clearance;
				let denomShift;
				if (style.size === src_Style.DISPLAY.size || group.size === "display") {
					numShift = options.fontMetrics().num1;
					if (ruleWidth > 0) clearance = 3 * ruleSpacing;
					else clearance = 7 * ruleSpacing;
					denomShift = options.fontMetrics().denom1;
				} else {
					if (ruleWidth > 0) {
						numShift = options.fontMetrics().num2;
						clearance = ruleSpacing;
					} else {
						numShift = options.fontMetrics().num3;
						clearance = 3 * ruleSpacing;
					}
					denomShift = options.fontMetrics().denom2;
				}
				let frac;
				if (!rule) {
					const candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);
					if (candidateClearance < clearance) {
						numShift += .5 * (clearance - candidateClearance);
						denomShift += .5 * (clearance - candidateClearance);
					}
					frac = buildCommon.makeVList({
						positionType: "individualShift",
						children: [{
							type: "elem",
							elem: denomm,
							shift: denomShift
						}, {
							type: "elem",
							elem: numerm,
							shift: -numShift
						}]
					}, options);
				} else {
					const axisHeight = options.fontMetrics().axisHeight;
					if (numShift - numerm.depth - (axisHeight + .5 * ruleWidth) < clearance) numShift += clearance - (numShift - numerm.depth - (axisHeight + .5 * ruleWidth));
					if (axisHeight - .5 * ruleWidth - (denomm.height - denomShift) < clearance) denomShift += clearance - (axisHeight - .5 * ruleWidth - (denomm.height - denomShift));
					const midShift = -(axisHeight - .5 * ruleWidth);
					frac = buildCommon.makeVList({
						positionType: "individualShift",
						children: [
							{
								type: "elem",
								elem: denomm,
								shift: denomShift
							},
							{
								type: "elem",
								elem: rule,
								shift: midShift
							},
							{
								type: "elem",
								elem: numerm,
								shift: -numShift
							}
						]
					}, options);
				}
				newOptions = options.havingStyle(style);
				frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
				frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier;
				let delimSize;
				if (style.size === src_Style.DISPLAY.size) delimSize = options.fontMetrics().delim1;
				else if (style.size === src_Style.SCRIPTSCRIPT.size) delimSize = options.havingStyle(src_Style.SCRIPT).fontMetrics().delim2;
				else delimSize = options.fontMetrics().delim2;
				let leftDelim;
				let rightDelim;
				if (group.leftDelim == null) leftDelim = makeNullDelimiter(options, ["mopen"]);
				else leftDelim = delimiter.customSizedDelim(group.leftDelim, delimSize, true, options.havingStyle(style), group.mode, ["mopen"]);
				if (group.continued) rightDelim = buildCommon.makeSpan([]);
				else if (group.rightDelim == null) rightDelim = makeNullDelimiter(options, ["mclose"]);
				else rightDelim = delimiter.customSizedDelim(group.rightDelim, delimSize, true, options.havingStyle(style), group.mode, ["mclose"]);
				return buildCommon.makeSpan(["mord"].concat(newOptions.sizingClasses(options)), [
					leftDelim,
					buildCommon.makeSpan(["mfrac"], [frac]),
					rightDelim
				], options);
			};
			const genfrac_mathmlBuilder = (group, options) => {
				let node = new mathMLTree.MathNode("mfrac", [buildMathML_buildGroup(group.numer, options), buildMathML_buildGroup(group.denom, options)]);
				if (!group.hasBarLine) node.setAttribute("linethickness", "0px");
				else if (group.barSize) {
					const ruleWidth = calculateSize(group.barSize, options);
					node.setAttribute("linethickness", makeEm(ruleWidth));
				}
				const style = adjustStyle(group.size, options.style);
				if (style.size !== options.style.size) {
					node = new mathMLTree.MathNode("mstyle", [node]);
					const isDisplay = style.size === src_Style.DISPLAY.size ? "true" : "false";
					node.setAttribute("displaystyle", isDisplay);
					node.setAttribute("scriptlevel", "0");
				}
				if (group.leftDelim != null || group.rightDelim != null) {
					const withDelims = [];
					if (group.leftDelim != null) {
						const leftOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.leftDelim.replace("\\", ""))]);
						leftOp.setAttribute("fence", "true");
						withDelims.push(leftOp);
					}
					withDelims.push(node);
					if (group.rightDelim != null) {
						const rightOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.rightDelim.replace("\\", ""))]);
						rightOp.setAttribute("fence", "true");
						withDelims.push(rightOp);
					}
					return makeRow(withDelims);
				}
				return node;
			};
			defineFunction({
				type: "genfrac",
				names: [
					"\\dfrac",
					"\\frac",
					"\\tfrac",
					"\\dbinom",
					"\\binom",
					"\\tbinom",
					"\\\\atopfrac",
					"\\\\bracefrac",
					"\\\\brackfrac"
				],
				props: {
					numArgs: 2,
					allowedInArgument: true
				},
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					const numer = args[0];
					const denom = args[1];
					let hasBarLine;
					let leftDelim = null;
					let rightDelim = null;
					let size = "auto";
					switch (funcName) {
						case "\\dfrac":
						case "\\frac":
						case "\\tfrac":
							hasBarLine = true;
							break;
						case "\\\\atopfrac":
							hasBarLine = false;
							break;
						case "\\dbinom":
						case "\\binom":
						case "\\tbinom":
							hasBarLine = false;
							leftDelim = "(";
							rightDelim = ")";
							break;
						case "\\\\bracefrac":
							hasBarLine = false;
							leftDelim = "\\{";
							rightDelim = "\\}";
							break;
						case "\\\\brackfrac":
							hasBarLine = false;
							leftDelim = "[";
							rightDelim = "]";
							break;
						default: throw new Error("Unrecognized genfrac command");
					}
					switch (funcName) {
						case "\\dfrac":
						case "\\dbinom":
							size = "display";
							break;
						case "\\tfrac":
						case "\\tbinom":
							size = "text";
							break;
					}
					return {
						type: "genfrac",
						mode: parser.mode,
						continued: false,
						numer,
						denom,
						hasBarLine,
						leftDelim,
						rightDelim,
						size,
						barSize: null
					};
				},
				htmlBuilder: genfrac_htmlBuilder,
				mathmlBuilder: genfrac_mathmlBuilder
			});
			defineFunction({
				type: "genfrac",
				names: ["\\cfrac"],
				props: { numArgs: 2 },
				handler: (_ref2, args) => {
					let { parser, funcName } = _ref2;
					const numer = args[0];
					const denom = args[1];
					return {
						type: "genfrac",
						mode: parser.mode,
						continued: true,
						numer,
						denom,
						hasBarLine: true,
						leftDelim: null,
						rightDelim: null,
						size: "display",
						barSize: null
					};
				}
			});
			defineFunction({
				type: "infix",
				names: [
					"\\over",
					"\\choose",
					"\\atop",
					"\\brace",
					"\\brack"
				],
				props: {
					numArgs: 0,
					infix: true
				},
				handler(_ref3) {
					let { parser, funcName, token } = _ref3;
					let replaceWith;
					switch (funcName) {
						case "\\over":
							replaceWith = "\\frac";
							break;
						case "\\choose":
							replaceWith = "\\binom";
							break;
						case "\\atop":
							replaceWith = "\\\\atopfrac";
							break;
						case "\\brace":
							replaceWith = "\\\\bracefrac";
							break;
						case "\\brack":
							replaceWith = "\\\\brackfrac";
							break;
						default: throw new Error("Unrecognized infix genfrac command");
					}
					return {
						type: "infix",
						mode: parser.mode,
						replaceWith,
						token
					};
				}
			});
			const stylArray = [
				"display",
				"text",
				"script",
				"scriptscript"
			];
			const delimFromValue = function(delimString) {
				let delim = null;
				if (delimString.length > 0) {
					delim = delimString;
					delim = delim === "." ? null : delim;
				}
				return delim;
			};
			defineFunction({
				type: "genfrac",
				names: ["\\genfrac"],
				props: {
					numArgs: 6,
					allowedInArgument: true,
					argTypes: [
						"math",
						"math",
						"size",
						"text",
						"math",
						"math"
					]
				},
				handler(_ref4, args) {
					let { parser } = _ref4;
					const numer = args[4];
					const denom = args[5];
					const leftNode = normalizeArgument(args[0]);
					const leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
					const rightNode = normalizeArgument(args[1]);
					const rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
					const barNode = assertNodeType(args[2], "size");
					let hasBarLine;
					let barSize = null;
					if (barNode.isBlank) hasBarLine = true;
					else {
						barSize = barNode.value;
						hasBarLine = barSize.number > 0;
					}
					let size = "auto";
					let styl = args[3];
					if (styl.type === "ordgroup") {
						if (styl.body.length > 0) {
							const textOrd = assertNodeType(styl.body[0], "textord");
							size = stylArray[Number(textOrd.text)];
						}
					} else {
						styl = assertNodeType(styl, "textord");
						size = stylArray[Number(styl.text)];
					}
					return {
						type: "genfrac",
						mode: parser.mode,
						numer,
						denom,
						continued: false,
						hasBarLine,
						barSize,
						leftDelim,
						rightDelim,
						size
					};
				},
				htmlBuilder: genfrac_htmlBuilder,
				mathmlBuilder: genfrac_mathmlBuilder
			});
			defineFunction({
				type: "infix",
				names: ["\\above"],
				props: {
					numArgs: 1,
					argTypes: ["size"],
					infix: true
				},
				handler(_ref5, args) {
					let { parser, funcName, token } = _ref5;
					return {
						type: "infix",
						mode: parser.mode,
						replaceWith: "\\\\abovefrac",
						size: assertNodeType(args[0], "size").value,
						token
					};
				}
			});
			defineFunction({
				type: "genfrac",
				names: ["\\\\abovefrac"],
				props: {
					numArgs: 3,
					argTypes: [
						"math",
						"size",
						"math"
					]
				},
				handler: (_ref6, args) => {
					let { parser, funcName } = _ref6;
					const numer = args[0];
					const barSize = assert(assertNodeType(args[1], "infix").size);
					const denom = args[2];
					const hasBarLine = barSize.number > 0;
					return {
						type: "genfrac",
						mode: parser.mode,
						numer,
						denom,
						continued: false,
						hasBarLine,
						barSize,
						leftDelim: null,
						rightDelim: null,
						size: "auto"
					};
				},
				htmlBuilder: genfrac_htmlBuilder,
				mathmlBuilder: genfrac_mathmlBuilder
			});
			const horizBrace_htmlBuilder = (grp, options) => {
				const style = options.style;
				let supSubGroup;
				let group;
				if (grp.type === "supsub") {
					supSubGroup = grp.sup ? buildGroup(grp.sup, options.havingStyle(style.sup()), options) : buildGroup(grp.sub, options.havingStyle(style.sub()), options);
					group = assertNodeType(grp.base, "horizBrace");
				} else group = assertNodeType(grp, "horizBrace");
				const body = buildGroup(group.base, options.havingBaseStyle(src_Style.DISPLAY));
				const braceBody = stretchy.svgSpan(group, options);
				let vlist;
				if (group.isOver) {
					vlist = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [
							{
								type: "elem",
								elem: body
							},
							{
								type: "kern",
								size: .1
							},
							{
								type: "elem",
								elem: braceBody
							}
						]
					}, options);
					vlist.children[0].children[0].children[1].classes.push("svg-align");
				} else {
					vlist = buildCommon.makeVList({
						positionType: "bottom",
						positionData: body.depth + .1 + braceBody.height,
						children: [
							{
								type: "elem",
								elem: braceBody
							},
							{
								type: "kern",
								size: .1
							},
							{
								type: "elem",
								elem: body
							}
						]
					}, options);
					vlist.children[0].children[0].children[0].classes.push("svg-align");
				}
				if (supSubGroup) {
					const vSpan = buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
					if (group.isOver) vlist = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [
							{
								type: "elem",
								elem: vSpan
							},
							{
								type: "kern",
								size: .2
							},
							{
								type: "elem",
								elem: supSubGroup
							}
						]
					}, options);
					else vlist = buildCommon.makeVList({
						positionType: "bottom",
						positionData: vSpan.depth + .2 + supSubGroup.height + supSubGroup.depth,
						children: [
							{
								type: "elem",
								elem: supSubGroup
							},
							{
								type: "kern",
								size: .2
							},
							{
								type: "elem",
								elem: vSpan
							}
						]
					}, options);
				}
				return buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
			};
			const horizBrace_mathmlBuilder = (group, options) => {
				const accentNode = stretchy.mathMLnode(group.label);
				return new mathMLTree.MathNode(group.isOver ? "mover" : "munder", [buildMathML_buildGroup(group.base, options), accentNode]);
			};
			defineFunction({
				type: "horizBrace",
				names: ["\\overbrace", "\\underbrace"],
				props: { numArgs: 1 },
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					return {
						type: "horizBrace",
						mode: parser.mode,
						label: funcName,
						isOver: /^\\over/.test(funcName),
						base: args[0]
					};
				},
				htmlBuilder: horizBrace_htmlBuilder,
				mathmlBuilder: horizBrace_mathmlBuilder
			});
			defineFunction({
				type: "href",
				names: ["\\href"],
				props: {
					numArgs: 2,
					argTypes: ["url", "original"],
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { parser } = _ref;
					const body = args[1];
					const href = assertNodeType(args[0], "url").url;
					if (!parser.settings.isTrusted({
						command: "\\href",
						url: href
					})) return parser.formatUnsupportedCmd("\\href");
					return {
						type: "href",
						mode: parser.mode,
						href,
						body: ordargument(body)
					};
				},
				htmlBuilder: (group, options) => {
					const elements = buildExpression(group.body, options, false);
					return buildCommon.makeAnchor(group.href, [], elements, options);
				},
				mathmlBuilder: (group, options) => {
					let math$1 = buildExpressionRow(group.body, options);
					if (!(math$1 instanceof MathNode)) math$1 = new MathNode("mrow", [math$1]);
					math$1.setAttribute("href", group.href);
					return math$1;
				}
			});
			defineFunction({
				type: "href",
				names: ["\\url"],
				props: {
					numArgs: 1,
					argTypes: ["url"],
					allowedInText: true
				},
				handler: (_ref2, args) => {
					let { parser } = _ref2;
					const href = assertNodeType(args[0], "url").url;
					if (!parser.settings.isTrusted({
						command: "\\url",
						url: href
					})) return parser.formatUnsupportedCmd("\\url");
					const chars = [];
					for (let i = 0; i < href.length; i++) {
						let c = href[i];
						if (c === "~") c = "\\textasciitilde";
						chars.push({
							type: "textord",
							mode: "text",
							text: c
						});
					}
					const body = {
						type: "text",
						mode: parser.mode,
						font: "\\texttt",
						body: chars
					};
					return {
						type: "href",
						mode: parser.mode,
						href,
						body: ordargument(body)
					};
				}
			});
			defineFunction({
				type: "hbox",
				names: ["\\hbox"],
				props: {
					numArgs: 1,
					argTypes: ["text"],
					allowedInText: true,
					primitive: true
				},
				handler(_ref, args) {
					let { parser } = _ref;
					return {
						type: "hbox",
						mode: parser.mode,
						body: ordargument(args[0])
					};
				},
				htmlBuilder(group, options) {
					const elements = buildExpression(group.body, options, false);
					return buildCommon.makeFragment(elements);
				},
				mathmlBuilder(group, options) {
					return new mathMLTree.MathNode("mrow", buildMathML_buildExpression(group.body, options));
				}
			});
			defineFunction({
				type: "html",
				names: [
					"\\htmlClass",
					"\\htmlId",
					"\\htmlStyle",
					"\\htmlData"
				],
				props: {
					numArgs: 2,
					argTypes: ["raw", "original"],
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { parser, funcName, token } = _ref;
					const value = assertNodeType(args[0], "raw").string;
					const body = args[1];
					if (parser.settings.strict) parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
					let trustContext;
					const attributes = {};
					switch (funcName) {
						case "\\htmlClass":
							attributes.class = value;
							trustContext = {
								command: "\\htmlClass",
								class: value
							};
							break;
						case "\\htmlId":
							attributes.id = value;
							trustContext = {
								command: "\\htmlId",
								id: value
							};
							break;
						case "\\htmlStyle":
							attributes.style = value;
							trustContext = {
								command: "\\htmlStyle",
								style: value
							};
							break;
						case "\\htmlData": {
							const data = value.split(",");
							for (let i = 0; i < data.length; i++) {
								const item = data[i];
								const firstEquals = item.indexOf("=");
								if (firstEquals < 0) throw new src_ParseError("\\htmlData key/value '" + item + "' missing equals sign");
								const key = item.slice(0, firstEquals);
								const value$1 = item.slice(firstEquals + 1);
								attributes["data-" + key.trim()] = value$1;
							}
							trustContext = {
								command: "\\htmlData",
								attributes
							};
							break;
						}
						default: throw new Error("Unrecognized html command");
					}
					if (!parser.settings.isTrusted(trustContext)) return parser.formatUnsupportedCmd(funcName);
					return {
						type: "html",
						mode: parser.mode,
						attributes,
						body: ordargument(body)
					};
				},
				htmlBuilder: (group, options) => {
					const elements = buildExpression(group.body, options, false);
					const classes = ["enclosing"];
					if (group.attributes.class) classes.push(...group.attributes.class.trim().split(/\s+/));
					const span = buildCommon.makeSpan(classes, elements, options);
					for (const attr in group.attributes) if (attr !== "class" && group.attributes.hasOwnProperty(attr)) span.setAttribute(attr, group.attributes[attr]);
					return span;
				},
				mathmlBuilder: (group, options) => {
					return buildExpressionRow(group.body, options);
				}
			});
			defineFunction({
				type: "htmlmathml",
				names: ["\\html@mathml"],
				props: {
					numArgs: 2,
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { parser } = _ref;
					return {
						type: "htmlmathml",
						mode: parser.mode,
						html: ordargument(args[0]),
						mathml: ordargument(args[1])
					};
				},
				htmlBuilder: (group, options) => {
					const elements = buildExpression(group.html, options, false);
					return buildCommon.makeFragment(elements);
				},
				mathmlBuilder: (group, options) => {
					return buildExpressionRow(group.mathml, options);
				}
			});
			const sizeData = function(str) {
				if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) return {
					number: +str,
					unit: "bp"
				};
				else {
					const match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
					if (!match) throw new src_ParseError("Invalid size: '" + str + "' in \\includegraphics");
					const data = {
						number: +(match[1] + match[2]),
						unit: match[3]
					};
					if (!validUnit(data)) throw new src_ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
					return data;
				}
			};
			defineFunction({
				type: "includegraphics",
				names: ["\\includegraphics"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1,
					argTypes: ["raw", "url"],
					allowedInText: false
				},
				handler: (_ref, args, optArgs) => {
					let { parser } = _ref;
					let width = {
						number: 0,
						unit: "em"
					};
					let height = {
						number: .9,
						unit: "em"
					};
					let totalheight = {
						number: 0,
						unit: "em"
					};
					let alt = "";
					if (optArgs[0]) {
						const attributes = assertNodeType(optArgs[0], "raw").string.split(",");
						for (let i = 0; i < attributes.length; i++) {
							const keyVal = attributes[i].split("=");
							if (keyVal.length === 2) {
								const str = keyVal[1].trim();
								switch (keyVal[0].trim()) {
									case "alt":
										alt = str;
										break;
									case "width":
										width = sizeData(str);
										break;
									case "height":
										height = sizeData(str);
										break;
									case "totalheight":
										totalheight = sizeData(str);
										break;
									default: throw new src_ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
								}
							}
						}
					}
					const src = assertNodeType(args[0], "url").url;
					if (alt === "") {
						alt = src;
						alt = alt.replace(/^.*[\\/]/, "");
						alt = alt.substring(0, alt.lastIndexOf("."));
					}
					if (!parser.settings.isTrusted({
						command: "\\includegraphics",
						url: src
					})) return parser.formatUnsupportedCmd("\\includegraphics");
					return {
						type: "includegraphics",
						mode: parser.mode,
						alt,
						width,
						height,
						totalheight,
						src
					};
				},
				htmlBuilder: (group, options) => {
					const height = calculateSize(group.height, options);
					let depth = 0;
					if (group.totalheight.number > 0) depth = calculateSize(group.totalheight, options) - height;
					let width = 0;
					if (group.width.number > 0) width = calculateSize(group.width, options);
					const style = { height: makeEm(height + depth) };
					if (width > 0) style.width = makeEm(width);
					if (depth > 0) style.verticalAlign = makeEm(-depth);
					const node = new Img(group.src, group.alt, style);
					node.height = height;
					node.depth = depth;
					return node;
				},
				mathmlBuilder: (group, options) => {
					const node = new mathMLTree.MathNode("mglyph", []);
					node.setAttribute("alt", group.alt);
					const height = calculateSize(group.height, options);
					let depth = 0;
					if (group.totalheight.number > 0) {
						depth = calculateSize(group.totalheight, options) - height;
						node.setAttribute("valign", makeEm(-depth));
					}
					node.setAttribute("height", makeEm(height + depth));
					if (group.width.number > 0) {
						const width = calculateSize(group.width, options);
						node.setAttribute("width", makeEm(width));
					}
					node.setAttribute("src", group.src);
					return node;
				}
			});
			defineFunction({
				type: "kern",
				names: [
					"\\kern",
					"\\mkern",
					"\\hskip",
					"\\mskip"
				],
				props: {
					numArgs: 1,
					argTypes: ["size"],
					primitive: true,
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					const size = assertNodeType(args[0], "size");
					if (parser.settings.strict) {
						const mathFunction = funcName[1] === "m";
						const muUnit = size.value.unit === "mu";
						if (mathFunction) {
							if (!muUnit) parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " supports only mu units, " + ("not " + size.value.unit + " units"));
							if (parser.mode !== "math") parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " works only in math mode");
						} else if (muUnit) parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " doesn't support mu units");
					}
					return {
						type: "kern",
						mode: parser.mode,
						dimension: size.value
					};
				},
				htmlBuilder(group, options) {
					return buildCommon.makeGlue(group.dimension, options);
				},
				mathmlBuilder(group, options) {
					const dimension = calculateSize(group.dimension, options);
					return new mathMLTree.SpaceNode(dimension);
				}
			});
			defineFunction({
				type: "lap",
				names: [
					"\\mathllap",
					"\\mathrlap",
					"\\mathclap"
				],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					const body = args[0];
					return {
						type: "lap",
						mode: parser.mode,
						alignment: funcName.slice(5),
						body
					};
				},
				htmlBuilder: (group, options) => {
					let inner$1;
					if (group.alignment === "clap") {
						inner$1 = buildCommon.makeSpan([], [buildGroup(group.body, options)]);
						inner$1 = buildCommon.makeSpan(["inner"], [inner$1], options);
					} else inner$1 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options)]);
					const fix = buildCommon.makeSpan(["fix"], []);
					let node = buildCommon.makeSpan([group.alignment], [inner$1, fix], options);
					const strut = buildCommon.makeSpan(["strut"]);
					strut.style.height = makeEm(node.height + node.depth);
					if (node.depth) strut.style.verticalAlign = makeEm(-node.depth);
					node.children.unshift(strut);
					node = buildCommon.makeSpan(["thinbox"], [node], options);
					return buildCommon.makeSpan(["mord", "vbox"], [node], options);
				},
				mathmlBuilder: (group, options) => {
					const node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
					if (group.alignment !== "rlap") {
						const offset = group.alignment === "llap" ? "-1" : "-0.5";
						node.setAttribute("lspace", offset + "width");
					}
					node.setAttribute("width", "0px");
					return node;
				}
			});
			defineFunction({
				type: "styling",
				names: ["\\(", "$"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: false
				},
				handler(_ref, args) {
					let { funcName, parser } = _ref;
					const outerMode = parser.mode;
					parser.switchMode("math");
					const close = funcName === "\\(" ? "\\)" : "$";
					const body = parser.parseExpression(false, close);
					parser.expect(close);
					parser.switchMode(outerMode);
					return {
						type: "styling",
						mode: parser.mode,
						style: "text",
						body
					};
				}
			});
			defineFunction({
				type: "text",
				names: ["\\)", "\\]"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: false
				},
				handler(context, args) {
					throw new src_ParseError("Mismatched " + context.funcName);
				}
			});
			const chooseMathStyle = (group, options) => {
				switch (options.style.size) {
					case src_Style.DISPLAY.size: return group.display;
					case src_Style.TEXT.size: return group.text;
					case src_Style.SCRIPT.size: return group.script;
					case src_Style.SCRIPTSCRIPT.size: return group.scriptscript;
					default: return group.text;
				}
			};
			defineFunction({
				type: "mathchoice",
				names: ["\\mathchoice"],
				props: {
					numArgs: 4,
					primitive: true
				},
				handler: (_ref, args) => {
					let { parser } = _ref;
					return {
						type: "mathchoice",
						mode: parser.mode,
						display: ordargument(args[0]),
						text: ordargument(args[1]),
						script: ordargument(args[2]),
						scriptscript: ordargument(args[3])
					};
				},
				htmlBuilder: (group, options) => {
					const elements = buildExpression(chooseMathStyle(group, options), options, false);
					return buildCommon.makeFragment(elements);
				},
				mathmlBuilder: (group, options) => {
					return buildExpressionRow(chooseMathStyle(group, options), options);
				}
			});
			const assembleSupSub = (base, supGroup, subGroup, options, style, slant, baseShift) => {
				base = buildCommon.makeSpan([], [base]);
				const subIsSingleCharacter = subGroup && utils.isCharacterBox(subGroup);
				let sub$1;
				let sup$1;
				if (supGroup) {
					const elem = buildGroup(supGroup, options.havingStyle(style.sup()), options);
					sup$1 = {
						elem,
						kern: Math.max(options.fontMetrics().bigOpSpacing1, options.fontMetrics().bigOpSpacing3 - elem.depth)
					};
				}
				if (subGroup) {
					const elem = buildGroup(subGroup, options.havingStyle(style.sub()), options);
					sub$1 = {
						elem,
						kern: Math.max(options.fontMetrics().bigOpSpacing2, options.fontMetrics().bigOpSpacing4 - elem.height)
					};
				}
				let finalGroup;
				if (sup$1 && sub$1) {
					const bottom = options.fontMetrics().bigOpSpacing5 + sub$1.elem.height + sub$1.elem.depth + sub$1.kern + base.depth + baseShift;
					finalGroup = buildCommon.makeVList({
						positionType: "bottom",
						positionData: bottom,
						children: [
							{
								type: "kern",
								size: options.fontMetrics().bigOpSpacing5
							},
							{
								type: "elem",
								elem: sub$1.elem,
								marginLeft: makeEm(-slant)
							},
							{
								type: "kern",
								size: sub$1.kern
							},
							{
								type: "elem",
								elem: base
							},
							{
								type: "kern",
								size: sup$1.kern
							},
							{
								type: "elem",
								elem: sup$1.elem,
								marginLeft: makeEm(slant)
							},
							{
								type: "kern",
								size: options.fontMetrics().bigOpSpacing5
							}
						]
					}, options);
				} else if (sub$1) {
					const top = base.height - baseShift;
					finalGroup = buildCommon.makeVList({
						positionType: "top",
						positionData: top,
						children: [
							{
								type: "kern",
								size: options.fontMetrics().bigOpSpacing5
							},
							{
								type: "elem",
								elem: sub$1.elem,
								marginLeft: makeEm(-slant)
							},
							{
								type: "kern",
								size: sub$1.kern
							},
							{
								type: "elem",
								elem: base
							}
						]
					}, options);
				} else if (sup$1) {
					const bottom = base.depth + baseShift;
					finalGroup = buildCommon.makeVList({
						positionType: "bottom",
						positionData: bottom,
						children: [
							{
								type: "elem",
								elem: base
							},
							{
								type: "kern",
								size: sup$1.kern
							},
							{
								type: "elem",
								elem: sup$1.elem,
								marginLeft: makeEm(slant)
							},
							{
								type: "kern",
								size: options.fontMetrics().bigOpSpacing5
							}
						]
					}, options);
				} else return base;
				const parts = [finalGroup];
				if (sub$1 && slant !== 0 && !subIsSingleCharacter) {
					const spacer = buildCommon.makeSpan(["mspace"], [], options);
					spacer.style.marginRight = makeEm(slant);
					parts.unshift(spacer);
				}
				return buildCommon.makeSpan(["mop", "op-limits"], parts, options);
			};
			const noSuccessor = ["\\smallint"];
			const op_htmlBuilder = (grp, options) => {
				let supGroup;
				let subGroup;
				let hasLimits = false;
				let group;
				if (grp.type === "supsub") {
					supGroup = grp.sup;
					subGroup = grp.sub;
					group = assertNodeType(grp.base, "op");
					hasLimits = true;
				} else group = assertNodeType(grp, "op");
				const style = options.style;
				let large = false;
				if (style.size === src_Style.DISPLAY.size && group.symbol && !noSuccessor.includes(group.name)) large = true;
				let base;
				if (group.symbol) {
					const fontName = large ? "Size2-Regular" : "Size1-Regular";
					let stash = "";
					if (group.name === "\\oiint" || group.name === "\\oiiint") {
						stash = group.name.slice(1);
						group.name = stash === "oiint" ? "\\iint" : "\\iiint";
					}
					base = buildCommon.makeSymbol(group.name, fontName, "math", options, [
						"mop",
						"op-symbol",
						large ? "large-op" : "small-op"
					]);
					if (stash.length > 0) {
						const italic = base.italic;
						const oval = buildCommon.staticSvg(stash + "Size" + (large ? "2" : "1"), options);
						base = buildCommon.makeVList({
							positionType: "individualShift",
							children: [{
								type: "elem",
								elem: base,
								shift: 0
							}, {
								type: "elem",
								elem: oval,
								shift: large ? .08 : 0
							}]
						}, options);
						group.name = "\\" + stash;
						base.classes.unshift("mop");
						base.italic = italic;
					}
				} else if (group.body) {
					const inner$1 = buildExpression(group.body, options, true);
					if (inner$1.length === 1 && inner$1[0] instanceof SymbolNode) {
						base = inner$1[0];
						base.classes[0] = "mop";
					} else base = buildCommon.makeSpan(["mop"], inner$1, options);
				} else {
					const output = [];
					for (let i = 1; i < group.name.length; i++) output.push(buildCommon.mathsym(group.name[i], group.mode, options));
					base = buildCommon.makeSpan(["mop"], output, options);
				}
				let baseShift = 0;
				let slant = 0;
				if ((base instanceof SymbolNode || group.name === "\\oiint" || group.name === "\\oiiint") && !group.suppressBaseShift) {
					baseShift = (base.height - base.depth) / 2 - options.fontMetrics().axisHeight;
					slant = base.italic;
				}
				if (hasLimits) return assembleSupSub(base, supGroup, subGroup, options, style, slant, baseShift);
				else {
					if (baseShift) {
						base.style.position = "relative";
						base.style.top = makeEm(baseShift);
					}
					return base;
				}
			};
			const op_mathmlBuilder = (group, options) => {
				let node;
				if (group.symbol) {
					node = new MathNode("mo", [makeText(group.name, group.mode)]);
					if (noSuccessor.includes(group.name)) node.setAttribute("largeop", "false");
				} else if (group.body) node = new MathNode("mo", buildMathML_buildExpression(group.body, options));
				else {
					node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
					const operator = new MathNode("mo", [makeText("⁡", "text")]);
					if (group.parentIsSupSub) node = new MathNode("mrow", [node, operator]);
					else node = newDocumentFragment([node, operator]);
				}
				return node;
			};
			const singleCharBigOps = {
				"∏": "\\prod",
				"∐": "\\coprod",
				"∑": "\\sum",
				"⋀": "\\bigwedge",
				"⋁": "\\bigvee",
				"⋂": "\\bigcap",
				"⋃": "\\bigcup",
				"⨀": "\\bigodot",
				"⨁": "\\bigoplus",
				"⨂": "\\bigotimes",
				"⨄": "\\biguplus",
				"⨆": "\\bigsqcup"
			};
			defineFunction({
				type: "op",
				names: [
					"\\coprod",
					"\\bigvee",
					"\\bigwedge",
					"\\biguplus",
					"\\bigcap",
					"\\bigcup",
					"\\intop",
					"\\prod",
					"\\sum",
					"\\bigotimes",
					"\\bigoplus",
					"\\bigodot",
					"\\bigsqcup",
					"\\smallint",
					"∏",
					"∐",
					"∑",
					"⋀",
					"⋁",
					"⋂",
					"⋃",
					"⨀",
					"⨁",
					"⨂",
					"⨄",
					"⨆"
				],
				props: { numArgs: 0 },
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					let fName = funcName;
					if (fName.length === 1) fName = singleCharBigOps[fName];
					return {
						type: "op",
						mode: parser.mode,
						limits: true,
						parentIsSupSub: false,
						symbol: true,
						name: fName
					};
				},
				htmlBuilder: op_htmlBuilder,
				mathmlBuilder: op_mathmlBuilder
			});
			defineFunction({
				type: "op",
				names: ["\\mathop"],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler: (_ref2, args) => {
					let { parser } = _ref2;
					const body = args[0];
					return {
						type: "op",
						mode: parser.mode,
						limits: false,
						parentIsSupSub: false,
						symbol: false,
						body: ordargument(body)
					};
				},
				htmlBuilder: op_htmlBuilder,
				mathmlBuilder: op_mathmlBuilder
			});
			const singleCharIntegrals = {
				"∫": "\\int",
				"∬": "\\iint",
				"∭": "\\iiint",
				"∮": "\\oint",
				"∯": "\\oiint",
				"∰": "\\oiiint"
			};
			defineFunction({
				type: "op",
				names: [
					"\\arcsin",
					"\\arccos",
					"\\arctan",
					"\\arctg",
					"\\arcctg",
					"\\arg",
					"\\ch",
					"\\cos",
					"\\cosec",
					"\\cosh",
					"\\cot",
					"\\cotg",
					"\\coth",
					"\\csc",
					"\\ctg",
					"\\cth",
					"\\deg",
					"\\dim",
					"\\exp",
					"\\hom",
					"\\ker",
					"\\lg",
					"\\ln",
					"\\log",
					"\\sec",
					"\\sin",
					"\\sinh",
					"\\sh",
					"\\tan",
					"\\tanh",
					"\\tg",
					"\\th"
				],
				props: { numArgs: 0 },
				handler(_ref3) {
					let { parser, funcName } = _ref3;
					return {
						type: "op",
						mode: parser.mode,
						limits: false,
						parentIsSupSub: false,
						symbol: false,
						name: funcName
					};
				},
				htmlBuilder: op_htmlBuilder,
				mathmlBuilder: op_mathmlBuilder
			});
			defineFunction({
				type: "op",
				names: [
					"\\det",
					"\\gcd",
					"\\inf",
					"\\lim",
					"\\max",
					"\\min",
					"\\Pr",
					"\\sup"
				],
				props: { numArgs: 0 },
				handler(_ref4) {
					let { parser, funcName } = _ref4;
					return {
						type: "op",
						mode: parser.mode,
						limits: true,
						parentIsSupSub: false,
						symbol: false,
						name: funcName
					};
				},
				htmlBuilder: op_htmlBuilder,
				mathmlBuilder: op_mathmlBuilder
			});
			defineFunction({
				type: "op",
				names: [
					"\\int",
					"\\iint",
					"\\iiint",
					"\\oint",
					"\\oiint",
					"\\oiiint",
					"∫",
					"∬",
					"∭",
					"∮",
					"∯",
					"∰"
				],
				props: {
					numArgs: 0,
					allowedInArgument: true
				},
				handler(_ref5) {
					let { parser, funcName } = _ref5;
					let fName = funcName;
					if (fName.length === 1) fName = singleCharIntegrals[fName];
					return {
						type: "op",
						mode: parser.mode,
						limits: false,
						parentIsSupSub: false,
						symbol: true,
						name: fName
					};
				},
				htmlBuilder: op_htmlBuilder,
				mathmlBuilder: op_mathmlBuilder
			});
			const operatorname_htmlBuilder = (grp, options) => {
				let supGroup;
				let subGroup;
				let hasLimits = false;
				let group;
				if (grp.type === "supsub") {
					supGroup = grp.sup;
					subGroup = grp.sub;
					group = assertNodeType(grp.base, "operatorname");
					hasLimits = true;
				} else group = assertNodeType(grp, "operatorname");
				let base;
				if (group.body.length > 0) {
					const expression = buildExpression(group.body.map((child) => {
						const childText = child.text;
						if (typeof childText === "string") return {
							type: "textord",
							mode: child.mode,
							text: childText
						};
						else return child;
					}), options.withFont("mathrm"), true);
					for (let i = 0; i < expression.length; i++) {
						const child = expression[i];
						if (child instanceof SymbolNode) child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
					}
					base = buildCommon.makeSpan(["mop"], expression, options);
				} else base = buildCommon.makeSpan(["mop"], [], options);
				if (hasLimits) return assembleSupSub(base, supGroup, subGroup, options, options.style, 0, 0);
				else return base;
			};
			const operatorname_mathmlBuilder = (group, options) => {
				let expression = buildMathML_buildExpression(group.body, options.withFont("mathrm"));
				let isAllString = true;
				for (let i = 0; i < expression.length; i++) {
					const node = expression[i];
					if (node instanceof mathMLTree.SpaceNode) {} else if (node instanceof mathMLTree.MathNode) switch (node.type) {
						case "mi":
						case "mn":
						case "ms":
						case "mspace":
						case "mtext": break;
						case "mo": {
							const child = node.children[0];
							if (node.children.length === 1 && child instanceof mathMLTree.TextNode) child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
							else isAllString = false;
							break;
						}
						default: isAllString = false;
					}
					else isAllString = false;
				}
				if (isAllString) {
					const word = expression.map((node) => node.toText()).join("");
					expression = [new mathMLTree.TextNode(word)];
				}
				const identifier = new mathMLTree.MathNode("mi", expression);
				identifier.setAttribute("mathvariant", "normal");
				const operator = new mathMLTree.MathNode("mo", [makeText("⁡", "text")]);
				if (group.parentIsSupSub) return new mathMLTree.MathNode("mrow", [identifier, operator]);
				else return mathMLTree.newDocumentFragment([identifier, operator]);
			};
			defineFunction({
				type: "operatorname",
				names: ["\\operatorname@", "\\operatornamewithlimits"],
				props: { numArgs: 1 },
				handler: (_ref, args) => {
					let { parser, funcName } = _ref;
					const body = args[0];
					return {
						type: "operatorname",
						mode: parser.mode,
						body: ordargument(body),
						alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
						limits: false,
						parentIsSupSub: false
					};
				},
				htmlBuilder: operatorname_htmlBuilder,
				mathmlBuilder: operatorname_mathmlBuilder
			});
			defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
			defineFunctionBuilders({
				type: "ordgroup",
				htmlBuilder(group, options) {
					if (group.semisimple) return buildCommon.makeFragment(buildExpression(group.body, options, false));
					return buildCommon.makeSpan(["mord"], buildExpression(group.body, options, true), options);
				},
				mathmlBuilder(group, options) {
					return buildExpressionRow(group.body, options, true);
				}
			});
			defineFunction({
				type: "overline",
				names: ["\\overline"],
				props: { numArgs: 1 },
				handler(_ref, args) {
					let { parser } = _ref;
					const body = args[0];
					return {
						type: "overline",
						mode: parser.mode,
						body
					};
				},
				htmlBuilder(group, options) {
					const innerGroup = buildGroup(group.body, options.havingCrampedStyle());
					const line = buildCommon.makeLineSpan("overline-line", options);
					const defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
					const vlist = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [
							{
								type: "elem",
								elem: innerGroup
							},
							{
								type: "kern",
								size: 3 * defaultRuleThickness
							},
							{
								type: "elem",
								elem: line
							},
							{
								type: "kern",
								size: defaultRuleThickness
							}
						]
					}, options);
					return buildCommon.makeSpan(["mord", "overline"], [vlist], options);
				},
				mathmlBuilder(group, options) {
					const operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("‾")]);
					operator.setAttribute("stretchy", "true");
					const node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.body, options), operator]);
					node.setAttribute("accent", "true");
					return node;
				}
			});
			defineFunction({
				type: "phantom",
				names: ["\\phantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { parser } = _ref;
					const body = args[0];
					return {
						type: "phantom",
						mode: parser.mode,
						body: ordargument(body)
					};
				},
				htmlBuilder: (group, options) => {
					const elements = buildExpression(group.body, options.withPhantom(), false);
					return buildCommon.makeFragment(elements);
				},
				mathmlBuilder: (group, options) => {
					const inner$1 = buildMathML_buildExpression(group.body, options);
					return new mathMLTree.MathNode("mphantom", inner$1);
				}
			});
			defineFunction({
				type: "hphantom",
				names: ["\\hphantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: (_ref2, args) => {
					let { parser } = _ref2;
					const body = args[0];
					return {
						type: "hphantom",
						mode: parser.mode,
						body
					};
				},
				htmlBuilder: (group, options) => {
					let node = buildCommon.makeSpan([], [buildGroup(group.body, options.withPhantom())]);
					node.height = 0;
					node.depth = 0;
					if (node.children) for (let i = 0; i < node.children.length; i++) {
						node.children[i].height = 0;
						node.children[i].depth = 0;
					}
					node = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [{
							type: "elem",
							elem: node
						}]
					}, options);
					return buildCommon.makeSpan(["mord"], [node], options);
				},
				mathmlBuilder: (group, options) => {
					const inner$1 = buildMathML_buildExpression(ordargument(group.body), options);
					const phantom = new mathMLTree.MathNode("mphantom", inner$1);
					const node = new mathMLTree.MathNode("mpadded", [phantom]);
					node.setAttribute("height", "0px");
					node.setAttribute("depth", "0px");
					return node;
				}
			});
			defineFunction({
				type: "vphantom",
				names: ["\\vphantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: (_ref3, args) => {
					let { parser } = _ref3;
					const body = args[0];
					return {
						type: "vphantom",
						mode: parser.mode,
						body
					};
				},
				htmlBuilder: (group, options) => {
					const inner$1 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options.withPhantom())]);
					const fix = buildCommon.makeSpan(["fix"], []);
					return buildCommon.makeSpan(["mord", "rlap"], [inner$1, fix], options);
				},
				mathmlBuilder: (group, options) => {
					const inner$1 = buildMathML_buildExpression(ordargument(group.body), options);
					const phantom = new mathMLTree.MathNode("mphantom", inner$1);
					const node = new mathMLTree.MathNode("mpadded", [phantom]);
					node.setAttribute("width", "0px");
					return node;
				}
			});
			defineFunction({
				type: "raisebox",
				names: ["\\raisebox"],
				props: {
					numArgs: 2,
					argTypes: ["size", "hbox"],
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser } = _ref;
					const amount = assertNodeType(args[0], "size").value;
					const body = args[1];
					return {
						type: "raisebox",
						mode: parser.mode,
						dy: amount,
						body
					};
				},
				htmlBuilder(group, options) {
					const body = buildGroup(group.body, options);
					const dy = calculateSize(group.dy, options);
					return buildCommon.makeVList({
						positionType: "shift",
						positionData: -dy,
						children: [{
							type: "elem",
							elem: body
						}]
					}, options);
				},
				mathmlBuilder(group, options) {
					const node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
					const dy = group.dy.number + group.dy.unit;
					node.setAttribute("voffset", dy);
					return node;
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\relax"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInArgument: true
				},
				handler(_ref) {
					let { parser } = _ref;
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "rule",
				names: ["\\rule"],
				props: {
					numArgs: 2,
					numOptionalArgs: 1,
					allowedInText: true,
					allowedInMath: true,
					argTypes: [
						"size",
						"size",
						"size"
					]
				},
				handler(_ref, args, optArgs) {
					let { parser } = _ref;
					const shift = optArgs[0];
					const width = assertNodeType(args[0], "size");
					const height = assertNodeType(args[1], "size");
					return {
						type: "rule",
						mode: parser.mode,
						shift: shift && assertNodeType(shift, "size").value,
						width: width.value,
						height: height.value
					};
				},
				htmlBuilder(group, options) {
					const rule = buildCommon.makeSpan(["mord", "rule"], [], options);
					const width = calculateSize(group.width, options);
					const height = calculateSize(group.height, options);
					const shift = group.shift ? calculateSize(group.shift, options) : 0;
					rule.style.borderRightWidth = makeEm(width);
					rule.style.borderTopWidth = makeEm(height);
					rule.style.bottom = makeEm(shift);
					rule.width = width;
					rule.height = height + shift;
					rule.depth = -shift;
					rule.maxFontSize = height * 1.125 * options.sizeMultiplier;
					return rule;
				},
				mathmlBuilder(group, options) {
					const width = calculateSize(group.width, options);
					const height = calculateSize(group.height, options);
					const shift = group.shift ? calculateSize(group.shift, options) : 0;
					const color = options.color && options.getColor() || "black";
					const rule = new mathMLTree.MathNode("mspace");
					rule.setAttribute("mathbackground", color);
					rule.setAttribute("width", makeEm(width));
					rule.setAttribute("height", makeEm(height));
					const wrapper = new mathMLTree.MathNode("mpadded", [rule]);
					if (shift >= 0) wrapper.setAttribute("height", makeEm(shift));
					else {
						wrapper.setAttribute("height", makeEm(shift));
						wrapper.setAttribute("depth", makeEm(-shift));
					}
					wrapper.setAttribute("voffset", makeEm(shift));
					return wrapper;
				}
			});
			function sizingGroup(value, options, baseOptions) {
				const inner$1 = buildExpression(value, options, false);
				const multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
				for (let i = 0; i < inner$1.length; i++) {
					const pos = inner$1[i].classes.indexOf("sizing");
					if (pos < 0) Array.prototype.push.apply(inner$1[i].classes, options.sizingClasses(baseOptions));
					else if (inner$1[i].classes[pos + 1] === "reset-size" + options.size) inner$1[i].classes[pos + 1] = "reset-size" + baseOptions.size;
					inner$1[i].height *= multiplier;
					inner$1[i].depth *= multiplier;
				}
				return buildCommon.makeFragment(inner$1);
			}
			const sizeFuncs = [
				"\\tiny",
				"\\sixptsize",
				"\\scriptsize",
				"\\footnotesize",
				"\\small",
				"\\normalsize",
				"\\large",
				"\\Large",
				"\\LARGE",
				"\\huge",
				"\\Huge"
			];
			const sizing_htmlBuilder = (group, options) => {
				const newOptions = options.havingSize(group.size);
				return sizingGroup(group.body, newOptions, options);
			};
			defineFunction({
				type: "sizing",
				names: sizeFuncs,
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler: (_ref, args) => {
					let { breakOnTokenText, funcName, parser } = _ref;
					const body = parser.parseExpression(false, breakOnTokenText);
					return {
						type: "sizing",
						mode: parser.mode,
						size: sizeFuncs.indexOf(funcName) + 1,
						body
					};
				},
				htmlBuilder: sizing_htmlBuilder,
				mathmlBuilder: (group, options) => {
					const newOptions = options.havingSize(group.size);
					const inner$1 = buildMathML_buildExpression(group.body, newOptions);
					const node = new mathMLTree.MathNode("mstyle", inner$1);
					node.setAttribute("mathsize", makeEm(newOptions.sizeMultiplier));
					return node;
				}
			});
			defineFunction({
				type: "smash",
				names: ["\\smash"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1,
					allowedInText: true
				},
				handler: (_ref, args, optArgs) => {
					let { parser } = _ref;
					let smashHeight = false;
					let smashDepth = false;
					const tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
					if (tbArg) {
						let letter = "";
						for (let i = 0; i < tbArg.body.length; ++i) {
							letter = tbArg.body[i].text;
							if (letter === "t") smashHeight = true;
							else if (letter === "b") smashDepth = true;
							else {
								smashHeight = false;
								smashDepth = false;
								break;
							}
						}
					} else {
						smashHeight = true;
						smashDepth = true;
					}
					const body = args[0];
					return {
						type: "smash",
						mode: parser.mode,
						body,
						smashHeight,
						smashDepth
					};
				},
				htmlBuilder: (group, options) => {
					const node = buildCommon.makeSpan([], [buildGroup(group.body, options)]);
					if (!group.smashHeight && !group.smashDepth) return node;
					if (group.smashHeight) {
						node.height = 0;
						if (node.children) for (let i = 0; i < node.children.length; i++) node.children[i].height = 0;
					}
					if (group.smashDepth) {
						node.depth = 0;
						if (node.children) for (let i = 0; i < node.children.length; i++) node.children[i].depth = 0;
					}
					const smashedNode = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [{
							type: "elem",
							elem: node
						}]
					}, options);
					return buildCommon.makeSpan(["mord"], [smashedNode], options);
				},
				mathmlBuilder: (group, options) => {
					const node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
					if (group.smashHeight) node.setAttribute("height", "0px");
					if (group.smashDepth) node.setAttribute("depth", "0px");
					return node;
				}
			});
			defineFunction({
				type: "sqrt",
				names: ["\\sqrt"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1
				},
				handler(_ref, args, optArgs) {
					let { parser } = _ref;
					const index = optArgs[0];
					const body = args[0];
					return {
						type: "sqrt",
						mode: parser.mode,
						body,
						index
					};
				},
				htmlBuilder(group, options) {
					let inner$1 = buildGroup(group.body, options.havingCrampedStyle());
					if (inner$1.height === 0) inner$1.height = options.fontMetrics().xHeight;
					inner$1 = buildCommon.wrapFragment(inner$1, options);
					const theta = options.fontMetrics().defaultRuleThickness;
					let phi = theta;
					if (options.style.id < src_Style.TEXT.id) phi = options.fontMetrics().xHeight;
					let lineClearance = theta + phi / 4;
					const minDelimiterHeight = inner$1.height + inner$1.depth + lineClearance + theta;
					const { span: img, ruleWidth, advanceWidth } = delimiter.sqrtImage(minDelimiterHeight, options);
					const delimDepth = img.height - ruleWidth;
					if (delimDepth > inner$1.height + inner$1.depth + lineClearance) lineClearance = (lineClearance + delimDepth - inner$1.height - inner$1.depth) / 2;
					const imgShift = img.height - inner$1.height - lineClearance - ruleWidth;
					inner$1.style.paddingLeft = makeEm(advanceWidth);
					const body = buildCommon.makeVList({
						positionType: "firstBaseline",
						children: [
							{
								type: "elem",
								elem: inner$1,
								wrapperClasses: ["svg-align"]
							},
							{
								type: "kern",
								size: -(inner$1.height + imgShift)
							},
							{
								type: "elem",
								elem: img
							},
							{
								type: "kern",
								size: ruleWidth
							}
						]
					}, options);
					if (!group.index) return buildCommon.makeSpan(["mord", "sqrt"], [body], options);
					else {
						const newOptions = options.havingStyle(src_Style.SCRIPTSCRIPT);
						const rootm = buildGroup(group.index, newOptions, options);
						const toShift = .6 * (body.height - body.depth);
						const rootVList = buildCommon.makeVList({
							positionType: "shift",
							positionData: -toShift,
							children: [{
								type: "elem",
								elem: rootm
							}]
						}, options);
						const rootVListWrap = buildCommon.makeSpan(["root"], [rootVList]);
						return buildCommon.makeSpan(["mord", "sqrt"], [rootVListWrap, body], options);
					}
				},
				mathmlBuilder(group, options) {
					const { body, index } = group;
					return index ? new mathMLTree.MathNode("mroot", [buildMathML_buildGroup(body, options), buildMathML_buildGroup(index, options)]) : new mathMLTree.MathNode("msqrt", [buildMathML_buildGroup(body, options)]);
				}
			});
			const styling_styleMap = {
				"display": src_Style.DISPLAY,
				"text": src_Style.TEXT,
				"script": src_Style.SCRIPT,
				"scriptscript": src_Style.SCRIPTSCRIPT
			};
			defineFunction({
				type: "styling",
				names: [
					"\\displaystyle",
					"\\textstyle",
					"\\scriptstyle",
					"\\scriptscriptstyle"
				],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler(_ref, args) {
					let { breakOnTokenText, funcName, parser } = _ref;
					const body = parser.parseExpression(true, breakOnTokenText);
					const style = funcName.slice(1, funcName.length - 5);
					return {
						type: "styling",
						mode: parser.mode,
						style,
						body
					};
				},
				htmlBuilder(group, options) {
					const newStyle = styling_styleMap[group.style];
					const newOptions = options.havingStyle(newStyle).withFont("");
					return sizingGroup(group.body, newOptions, options);
				},
				mathmlBuilder(group, options) {
					const newStyle = styling_styleMap[group.style];
					const newOptions = options.havingStyle(newStyle);
					const inner$1 = buildMathML_buildExpression(group.body, newOptions);
					const node = new mathMLTree.MathNode("mstyle", inner$1);
					const attr = {
						"display": ["0", "true"],
						"text": ["0", "false"],
						"script": ["1", "false"],
						"scriptscript": ["2", "false"]
					}[group.style];
					node.setAttribute("scriptlevel", attr[0]);
					node.setAttribute("displaystyle", attr[1]);
					return node;
				}
			});
			const htmlBuilderDelegate = function(group, options) {
				const base = group.base;
				if (!base) return null;
				else if (base.type === "op") return base.limits && (options.style.size === src_Style.DISPLAY.size || base.alwaysHandleSupSub) ? op_htmlBuilder : null;
				else if (base.type === "operatorname") return base.alwaysHandleSupSub && (options.style.size === src_Style.DISPLAY.size || base.limits) ? operatorname_htmlBuilder : null;
				else if (base.type === "accent") return utils.isCharacterBox(base.base) ? htmlBuilder : null;
				else if (base.type === "horizBrace") return !group.sub === base.isOver ? horizBrace_htmlBuilder : null;
				else return null;
			};
			defineFunctionBuilders({
				type: "supsub",
				htmlBuilder(group, options) {
					const builderDelegate = htmlBuilderDelegate(group, options);
					if (builderDelegate) return builderDelegate(group, options);
					const { base: valueBase, sup: valueSup, sub: valueSub } = group;
					const base = buildGroup(valueBase, options);
					let supm;
					let subm;
					const metrics = options.fontMetrics();
					let supShift = 0;
					let subShift = 0;
					const isCharacterBox$1 = valueBase && utils.isCharacterBox(valueBase);
					if (valueSup) {
						const newOptions = options.havingStyle(options.style.sup());
						supm = buildGroup(valueSup, newOptions, options);
						if (!isCharacterBox$1) supShift = base.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
					}
					if (valueSub) {
						const newOptions = options.havingStyle(options.style.sub());
						subm = buildGroup(valueSub, newOptions, options);
						if (!isCharacterBox$1) subShift = base.depth + newOptions.fontMetrics().subDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
					}
					let minSupShift;
					if (options.style === src_Style.DISPLAY) minSupShift = metrics.sup1;
					else if (options.style.cramped) minSupShift = metrics.sup3;
					else minSupShift = metrics.sup2;
					const multiplier = options.sizeMultiplier;
					const marginRight = makeEm(.5 / metrics.ptPerEm / multiplier);
					let marginLeft = null;
					if (subm) {
						const isOiint = group.base && group.base.type === "op" && group.base.name && (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
						if (base instanceof SymbolNode || isOiint) marginLeft = makeEm(-base.italic);
					}
					let supsub;
					if (supm && subm) {
						supShift = Math.max(supShift, minSupShift, supm.depth + .25 * metrics.xHeight);
						subShift = Math.max(subShift, metrics.sub2);
						const maxWidth = 4 * metrics.defaultRuleThickness;
						if (supShift - supm.depth - (subm.height - subShift) < maxWidth) {
							subShift = maxWidth - (supShift - supm.depth) + subm.height;
							const psi = .8 * metrics.xHeight - (supShift - supm.depth);
							if (psi > 0) {
								supShift += psi;
								subShift -= psi;
							}
						}
						const vlistElem = [{
							type: "elem",
							elem: subm,
							shift: subShift,
							marginRight,
							marginLeft
						}, {
							type: "elem",
							elem: supm,
							shift: -supShift,
							marginRight
						}];
						supsub = buildCommon.makeVList({
							positionType: "individualShift",
							children: vlistElem
						}, options);
					} else if (subm) {
						subShift = Math.max(subShift, metrics.sub1, subm.height - .8 * metrics.xHeight);
						const vlistElem = [{
							type: "elem",
							elem: subm,
							marginLeft,
							marginRight
						}];
						supsub = buildCommon.makeVList({
							positionType: "shift",
							positionData: subShift,
							children: vlistElem
						}, options);
					} else if (supm) {
						supShift = Math.max(supShift, minSupShift, supm.depth + .25 * metrics.xHeight);
						supsub = buildCommon.makeVList({
							positionType: "shift",
							positionData: -supShift,
							children: [{
								type: "elem",
								elem: supm,
								marginRight
							}]
						}, options);
					} else throw new Error("supsub must have either sup or sub.");
					const mclass = getTypeOfDomTree(base, "right") || "mord";
					return buildCommon.makeSpan([mclass], [base, buildCommon.makeSpan(["msupsub"], [supsub])], options);
				},
				mathmlBuilder(group, options) {
					let isBrace = false;
					let isOver;
					let isSup;
					if (group.base && group.base.type === "horizBrace") {
						isSup = !!group.sup;
						if (isSup === group.base.isOver) {
							isBrace = true;
							isOver = group.base.isOver;
						}
					}
					if (group.base && (group.base.type === "op" || group.base.type === "operatorname")) group.base.parentIsSupSub = true;
					const children = [buildMathML_buildGroup(group.base, options)];
					if (group.sub) children.push(buildMathML_buildGroup(group.sub, options));
					if (group.sup) children.push(buildMathML_buildGroup(group.sup, options));
					let nodeType;
					if (isBrace) nodeType = isOver ? "mover" : "munder";
					else if (!group.sub) {
						const base = group.base;
						if (base && base.type === "op" && base.limits && (options.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) nodeType = "mover";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options.style === src_Style.DISPLAY)) nodeType = "mover";
						else nodeType = "msup";
					} else if (!group.sup) {
						const base = group.base;
						if (base && base.type === "op" && base.limits && (options.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) nodeType = "munder";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options.style === src_Style.DISPLAY)) nodeType = "munder";
						else nodeType = "msub";
					} else {
						const base = group.base;
						if (base && base.type === "op" && base.limits && options.style === src_Style.DISPLAY) nodeType = "munderover";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (options.style === src_Style.DISPLAY || base.limits)) nodeType = "munderover";
						else nodeType = "msubsup";
					}
					return new mathMLTree.MathNode(nodeType, children);
				}
			});
			defineFunctionBuilders({
				type: "atom",
				htmlBuilder(group, options) {
					return buildCommon.mathsym(group.text, group.mode, options, ["m" + group.family]);
				},
				mathmlBuilder(group, options) {
					const node = new mathMLTree.MathNode("mo", [makeText(group.text, group.mode)]);
					if (group.family === "bin") {
						const variant = getVariant(group, options);
						if (variant === "bold-italic") node.setAttribute("mathvariant", variant);
					} else if (group.family === "punct") node.setAttribute("separator", "true");
					else if (group.family === "open" || group.family === "close") node.setAttribute("stretchy", "false");
					return node;
				}
			});
			const defaultVariant = {
				"mi": "italic",
				"mn": "normal",
				"mtext": "normal"
			};
			defineFunctionBuilders({
				type: "mathord",
				htmlBuilder(group, options) {
					return buildCommon.makeOrd(group, options, "mathord");
				},
				mathmlBuilder(group, options) {
					const node = new mathMLTree.MathNode("mi", [makeText(group.text, group.mode, options)]);
					const variant = getVariant(group, options) || "italic";
					if (variant !== defaultVariant[node.type]) node.setAttribute("mathvariant", variant);
					return node;
				}
			});
			defineFunctionBuilders({
				type: "textord",
				htmlBuilder(group, options) {
					return buildCommon.makeOrd(group, options, "textord");
				},
				mathmlBuilder(group, options) {
					const text = makeText(group.text, group.mode, options);
					const variant = getVariant(group, options) || "normal";
					let node;
					if (group.mode === "text") node = new mathMLTree.MathNode("mtext", [text]);
					else if (/[0-9]/.test(group.text)) node = new mathMLTree.MathNode("mn", [text]);
					else if (group.text === "\\prime") node = new mathMLTree.MathNode("mo", [text]);
					else node = new mathMLTree.MathNode("mi", [text]);
					if (variant !== defaultVariant[node.type]) node.setAttribute("mathvariant", variant);
					return node;
				}
			});
			const cssSpace = {
				"\\nobreak": "nobreak",
				"\\allowbreak": "allowbreak"
			};
			const regularSpace = {
				" ": {},
				"\\ ": {},
				"~": { className: "nobreak" },
				"\\space": {},
				"\\nobreakspace": { className: "nobreak" }
			};
			defineFunctionBuilders({
				type: "spacing",
				htmlBuilder(group, options) {
					if (regularSpace.hasOwnProperty(group.text)) {
						const className = regularSpace[group.text].className || "";
						if (group.mode === "text") {
							const ord = buildCommon.makeOrd(group, options, "textord");
							ord.classes.push(className);
							return ord;
						} else return buildCommon.makeSpan(["mspace", className], [buildCommon.mathsym(group.text, group.mode, options)], options);
					} else if (cssSpace.hasOwnProperty(group.text)) return buildCommon.makeSpan(["mspace", cssSpace[group.text]], [], options);
					else throw new src_ParseError("Unknown type of space \"" + group.text + "\"");
				},
				mathmlBuilder(group, options) {
					let node;
					if (regularSpace.hasOwnProperty(group.text)) node = new mathMLTree.MathNode("mtext", [new mathMLTree.TextNode("\xA0")]);
					else if (cssSpace.hasOwnProperty(group.text)) return new mathMLTree.MathNode("mspace");
					else throw new src_ParseError("Unknown type of space \"" + group.text + "\"");
					return node;
				}
			});
			const pad = () => {
				const padNode = new mathMLTree.MathNode("mtd", []);
				padNode.setAttribute("width", "50%");
				return padNode;
			};
			defineFunctionBuilders({
				type: "tag",
				mathmlBuilder(group, options) {
					const table = new mathMLTree.MathNode("mtable", [new mathMLTree.MathNode("mtr", [
						pad(),
						new mathMLTree.MathNode("mtd", [buildExpressionRow(group.body, options)]),
						pad(),
						new mathMLTree.MathNode("mtd", [buildExpressionRow(group.tag, options)])
					])]);
					table.setAttribute("width", "100%");
					return table;
				}
			});
			const textFontFamilies = {
				"\\text": void 0,
				"\\textrm": "textrm",
				"\\textsf": "textsf",
				"\\texttt": "texttt",
				"\\textnormal": "textrm"
			};
			const textFontWeights = {
				"\\textbf": "textbf",
				"\\textmd": "textmd"
			};
			const textFontShapes = {
				"\\textit": "textit",
				"\\textup": "textup"
			};
			const optionsWithFont = (group, options) => {
				const font = group.font;
				if (!font) return options;
				else if (textFontFamilies[font]) return options.withTextFontFamily(textFontFamilies[font]);
				else if (textFontWeights[font]) return options.withTextFontWeight(textFontWeights[font]);
				else if (font === "\\emph") return options.fontShape === "textit" ? options.withTextFontShape("textup") : options.withTextFontShape("textit");
				return options.withTextFontShape(textFontShapes[font]);
			};
			defineFunction({
				type: "text",
				names: [
					"\\text",
					"\\textrm",
					"\\textsf",
					"\\texttt",
					"\\textnormal",
					"\\textbf",
					"\\textmd",
					"\\textit",
					"\\textup",
					"\\emph"
				],
				props: {
					numArgs: 1,
					argTypes: ["text"],
					allowedInArgument: true,
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser, funcName } = _ref;
					const body = args[0];
					return {
						type: "text",
						mode: parser.mode,
						body: ordargument(body),
						font: funcName
					};
				},
				htmlBuilder(group, options) {
					const newOptions = optionsWithFont(group, options);
					const inner$1 = buildExpression(group.body, newOptions, true);
					return buildCommon.makeSpan(["mord", "text"], inner$1, newOptions);
				},
				mathmlBuilder(group, options) {
					const newOptions = optionsWithFont(group, options);
					return buildExpressionRow(group.body, newOptions);
				}
			});
			defineFunction({
				type: "underline",
				names: ["\\underline"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler(_ref, args) {
					let { parser } = _ref;
					return {
						type: "underline",
						mode: parser.mode,
						body: args[0]
					};
				},
				htmlBuilder(group, options) {
					const innerGroup = buildGroup(group.body, options);
					const line = buildCommon.makeLineSpan("underline-line", options);
					const defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
					const vlist = buildCommon.makeVList({
						positionType: "top",
						positionData: innerGroup.height,
						children: [
							{
								type: "kern",
								size: defaultRuleThickness
							},
							{
								type: "elem",
								elem: line
							},
							{
								type: "kern",
								size: 3 * defaultRuleThickness
							},
							{
								type: "elem",
								elem: innerGroup
							}
						]
					}, options);
					return buildCommon.makeSpan(["mord", "underline"], [vlist], options);
				},
				mathmlBuilder(group, options) {
					const operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("‾")]);
					operator.setAttribute("stretchy", "true");
					const node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.body, options), operator]);
					node.setAttribute("accentunder", "true");
					return node;
				}
			});
			defineFunction({
				type: "vcenter",
				names: ["\\vcenter"],
				props: {
					numArgs: 1,
					argTypes: ["original"],
					allowedInText: false
				},
				handler(_ref, args) {
					let { parser } = _ref;
					return {
						type: "vcenter",
						mode: parser.mode,
						body: args[0]
					};
				},
				htmlBuilder(group, options) {
					const body = buildGroup(group.body, options);
					const axisHeight = options.fontMetrics().axisHeight;
					const dy = .5 * (body.height - axisHeight - (body.depth + axisHeight));
					return buildCommon.makeVList({
						positionType: "shift",
						positionData: dy,
						children: [{
							type: "elem",
							elem: body
						}]
					}, options);
				},
				mathmlBuilder(group, options) {
					return new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)], ["vcenter"]);
				}
			});
			defineFunction({
				type: "verb",
				names: ["\\verb"],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler(context, args, optArgs) {
					throw new src_ParseError("\\verb ended by end of line instead of matching delimiter");
				},
				htmlBuilder(group, options) {
					const text = makeVerb(group);
					const body = [];
					const newOptions = options.havingStyle(options.style.text());
					for (let i = 0; i < text.length; i++) {
						let c = text[i];
						if (c === "~") c = "\\textasciitilde";
						body.push(buildCommon.makeSymbol(c, "Typewriter-Regular", group.mode, newOptions, ["mord", "texttt"]));
					}
					return buildCommon.makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options)), buildCommon.tryCombineChars(body), newOptions);
				},
				mathmlBuilder(group, options) {
					const text = new mathMLTree.TextNode(makeVerb(group));
					const node = new mathMLTree.MathNode("mtext", [text]);
					node.setAttribute("mathvariant", "monospace");
					return node;
				}
			});
			const makeVerb = (group) => group.body.replace(/ /g, group.star ? "␣" : "\xA0");
			var src_functions = _functions;
			const spaceRegexString = "[ \r\n	]";
			const controlWordRegexString = "\\\\[a-zA-Z@]+";
			const controlSymbolRegexString = "\\\\[^\ud800-\udfff]";
			const controlWordWhitespaceRegexString = "(" + controlWordRegexString + ")[ \r\n	]*";
			const controlSpaceRegexString = "\\\\(\n|[ \r	]+\n?)[ \r	]*";
			const combiningDiacriticalMarkString = "[̀-ͯ]";
			const combiningDiacriticalMarksEndRegex = /* @__PURE__ */ new RegExp(combiningDiacriticalMarkString + "+$");
			const tokenRegexString = "(" + spaceRegexString + "+)|" + (controlSpaceRegexString + "|") + "([!-\\[\\]-‧‪-퟿豈-￿]" + (combiningDiacriticalMarkString + "*") + "|[\ud800-\udbff][\udc00-\udfff]" + (combiningDiacriticalMarkString + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + controlWordWhitespaceRegexString) + ("|" + controlSymbolRegexString + ")");
			class Lexer {
				constructor(input, settings) {
					this.input = void 0;
					this.settings = void 0;
					this.tokenRegex = void 0;
					this.catcodes = void 0;
					this.input = input;
					this.settings = settings;
					this.tokenRegex = new RegExp(tokenRegexString, "g");
					this.catcodes = {
						"%": 14,
						"~": 13
					};
				}
				setCatcode(char, code) {
					this.catcodes[char] = code;
				}
				lex() {
					const input = this.input;
					const pos = this.tokenRegex.lastIndex;
					if (pos === input.length) return new Token("EOF", new SourceLocation(this, pos, pos));
					const match = this.tokenRegex.exec(input);
					if (match === null || match.index !== pos) throw new src_ParseError("Unexpected character: '" + input[pos] + "'", new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
					const text = match[6] || match[3] || (match[2] ? "\\ " : " ");
					if (this.catcodes[text] === 14) {
						const nlIndex = input.indexOf("\n", this.tokenRegex.lastIndex);
						if (nlIndex === -1) {
							this.tokenRegex.lastIndex = input.length;
							this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)");
						} else this.tokenRegex.lastIndex = nlIndex + 1;
						return this.lex();
					}
					return new Token(text, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
				}
			}
			class Namespace {
				constructor(builtins, globalMacros) {
					if (builtins === void 0) builtins = {};
					if (globalMacros === void 0) globalMacros = {};
					this.current = void 0;
					this.builtins = void 0;
					this.undefStack = void 0;
					this.current = globalMacros;
					this.builtins = builtins;
					this.undefStack = [];
				}
				beginGroup() {
					this.undefStack.push({});
				}
				endGroup() {
					if (this.undefStack.length === 0) throw new src_ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
					const undefs = this.undefStack.pop();
					for (const undef in undefs) if (undefs.hasOwnProperty(undef)) if (undefs[undef] == null) delete this.current[undef];
					else this.current[undef] = undefs[undef];
				}
				endGroups() {
					while (this.undefStack.length > 0) this.endGroup();
				}
				has(name) {
					return this.current.hasOwnProperty(name) || this.builtins.hasOwnProperty(name);
				}
				get(name) {
					if (this.current.hasOwnProperty(name)) return this.current[name];
					else return this.builtins[name];
				}
				set(name, value, global) {
					if (global === void 0) global = false;
					if (global) {
						for (let i = 0; i < this.undefStack.length; i++) delete this.undefStack[i][name];
						if (this.undefStack.length > 0) this.undefStack[this.undefStack.length - 1][name] = value;
					} else {
						const top = this.undefStack[this.undefStack.length - 1];
						if (top && !top.hasOwnProperty(name)) top[name] = this.current[name];
					}
					if (value == null) delete this.current[name];
					else this.current[name] = value;
				}
			}
			var src_macros = _macros;
			defineMacro("\\noexpand", function(context) {
				const t = context.popToken();
				if (context.isExpandable(t.text)) {
					t.noexpand = true;
					t.treatAsRelax = true;
				}
				return {
					tokens: [t],
					numArgs: 0
				};
			});
			defineMacro("\\expandafter", function(context) {
				const t = context.popToken();
				context.expandOnce(true);
				return {
					tokens: [t],
					numArgs: 0
				};
			});
			defineMacro("\\@firstoftwo", function(context) {
				return {
					tokens: context.consumeArgs(2)[0],
					numArgs: 0
				};
			});
			defineMacro("\\@secondoftwo", function(context) {
				return {
					tokens: context.consumeArgs(2)[1],
					numArgs: 0
				};
			});
			defineMacro("\\@ifnextchar", function(context) {
				const args = context.consumeArgs(3);
				context.consumeSpaces();
				const nextToken = context.future();
				if (args[0].length === 1 && args[0][0].text === nextToken.text) return {
					tokens: args[1],
					numArgs: 0
				};
				else return {
					tokens: args[2],
					numArgs: 0
				};
			});
			defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
			defineMacro("\\TextOrMath", function(context) {
				const args = context.consumeArgs(2);
				if (context.mode === "text") return {
					tokens: args[0],
					numArgs: 0
				};
				else return {
					tokens: args[1],
					numArgs: 0
				};
			});
			const digitToNumber = {
				"0": 0,
				"1": 1,
				"2": 2,
				"3": 3,
				"4": 4,
				"5": 5,
				"6": 6,
				"7": 7,
				"8": 8,
				"9": 9,
				"a": 10,
				"A": 10,
				"b": 11,
				"B": 11,
				"c": 12,
				"C": 12,
				"d": 13,
				"D": 13,
				"e": 14,
				"E": 14,
				"f": 15,
				"F": 15
			};
			defineMacro("\\char", function(context) {
				let token = context.popToken();
				let base;
				let number = "";
				if (token.text === "'") {
					base = 8;
					token = context.popToken();
				} else if (token.text === "\"") {
					base = 16;
					token = context.popToken();
				} else if (token.text === "`") {
					token = context.popToken();
					if (token.text[0] === "\\") number = token.text.charCodeAt(1);
					else if (token.text === "EOF") throw new src_ParseError("\\char` missing argument");
					else number = token.text.charCodeAt(0);
				} else base = 10;
				if (base) {
					number = digitToNumber[token.text];
					if (number == null || number >= base) throw new src_ParseError("Invalid base-" + base + " digit " + token.text);
					let digit;
					while ((digit = digitToNumber[context.future().text]) != null && digit < base) {
						number *= base;
						number += digit;
						context.popToken();
					}
				}
				return "\\@char{" + number + "}";
			});
			const newcommand = (context, existsOK, nonexistsOK, skipIfExists) => {
				let arg = context.consumeArg().tokens;
				if (arg.length !== 1) throw new src_ParseError("\\newcommand's first argument must be a macro name");
				const name = arg[0].text;
				const exists = context.isDefined(name);
				if (exists && !existsOK) throw new src_ParseError("\\newcommand{" + name + "} attempting to redefine " + (name + "; use \\renewcommand"));
				if (!exists && !nonexistsOK) throw new src_ParseError("\\renewcommand{" + name + "} when command " + name + " does not yet exist; use \\newcommand");
				let numArgs = 0;
				arg = context.consumeArg().tokens;
				if (arg.length === 1 && arg[0].text === "[") {
					let argText = "";
					let token = context.expandNextToken();
					while (token.text !== "]" && token.text !== "EOF") {
						argText += token.text;
						token = context.expandNextToken();
					}
					if (!argText.match(/^\s*[0-9]+\s*$/)) throw new src_ParseError("Invalid number of arguments: " + argText);
					numArgs = parseInt(argText);
					arg = context.consumeArg().tokens;
				}
				if (!(exists && skipIfExists)) context.macros.set(name, {
					tokens: arg,
					numArgs
				});
				return "";
			};
			defineMacro("\\newcommand", (context) => newcommand(context, false, true, false));
			defineMacro("\\renewcommand", (context) => newcommand(context, true, false, false));
			defineMacro("\\providecommand", (context) => newcommand(context, true, true, true));
			defineMacro("\\message", (context) => {
				const arg = context.consumeArgs(1)[0];
				console.log(arg.reverse().map((token) => token.text).join(""));
				return "";
			});
			defineMacro("\\errmessage", (context) => {
				const arg = context.consumeArgs(1)[0];
				console.error(arg.reverse().map((token) => token.text).join(""));
				return "";
			});
			defineMacro("\\show", (context) => {
				const tok = context.popToken();
				const name = tok.text;
				console.log(tok, context.macros.get(name), src_functions[name], src_symbols.math[name], src_symbols.text[name]);
				return "";
			});
			defineMacro("\\bgroup", "{");
			defineMacro("\\egroup", "}");
			defineMacro("~", "\\nobreakspace");
			defineMacro("\\lq", "`");
			defineMacro("\\rq", "'");
			defineMacro("\\aa", "\\r a");
			defineMacro("\\AA", "\\r A");
			defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
			defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
			defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
			defineMacro("ℬ", "\\mathscr{B}");
			defineMacro("ℰ", "\\mathscr{E}");
			defineMacro("ℱ", "\\mathscr{F}");
			defineMacro("ℋ", "\\mathscr{H}");
			defineMacro("ℐ", "\\mathscr{I}");
			defineMacro("ℒ", "\\mathscr{L}");
			defineMacro("ℳ", "\\mathscr{M}");
			defineMacro("ℛ", "\\mathscr{R}");
			defineMacro("ℭ", "\\mathfrak{C}");
			defineMacro("ℌ", "\\mathfrak{H}");
			defineMacro("ℨ", "\\mathfrak{Z}");
			defineMacro("\\Bbbk", "\\Bbb{k}");
			defineMacro("·", "\\cdotp");
			defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
			defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
			defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");
			defineMacro("\\mathstrut", "\\vphantom{(}");
			defineMacro("\\underbar", "\\underline{\\text{#1}}");
			defineMacro("\\not", "\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char\"338}");
			defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
			defineMacro("\\ne", "\\neq");
			defineMacro("≠", "\\neq");
			defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
			defineMacro("∉", "\\notin");
			defineMacro("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
			defineMacro("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
			defineMacro("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
			defineMacro("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
			defineMacro("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
			defineMacro("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
			defineMacro("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
			defineMacro("⟂", "\\perp");
			defineMacro("‼", "\\mathclose{!\\mkern-0.8mu!}");
			defineMacro("∌", "\\notni");
			defineMacro("⌜", "\\ulcorner");
			defineMacro("⌝", "\\urcorner");
			defineMacro("⌞", "\\llcorner");
			defineMacro("⌟", "\\lrcorner");
			defineMacro("©", "\\copyright");
			defineMacro("®", "\\textregistered");
			defineMacro("️", "\\textregistered");
			defineMacro("\\ulcorner", "\\html@mathml{\\@ulcorner}{\\mathop{\\char\"231c}}");
			defineMacro("\\urcorner", "\\html@mathml{\\@urcorner}{\\mathop{\\char\"231d}}");
			defineMacro("\\llcorner", "\\html@mathml{\\@llcorner}{\\mathop{\\char\"231e}}");
			defineMacro("\\lrcorner", "\\html@mathml{\\@lrcorner}{\\mathop{\\char\"231f}}");
			defineMacro("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
			defineMacro("⋮", "\\vdots");
			defineMacro("\\varGamma", "\\mathit{\\Gamma}");
			defineMacro("\\varDelta", "\\mathit{\\Delta}");
			defineMacro("\\varTheta", "\\mathit{\\Theta}");
			defineMacro("\\varLambda", "\\mathit{\\Lambda}");
			defineMacro("\\varXi", "\\mathit{\\Xi}");
			defineMacro("\\varPi", "\\mathit{\\Pi}");
			defineMacro("\\varSigma", "\\mathit{\\Sigma}");
			defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
			defineMacro("\\varPhi", "\\mathit{\\Phi}");
			defineMacro("\\varPsi", "\\mathit{\\Psi}");
			defineMacro("\\varOmega", "\\mathit{\\Omega}");
			defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
			defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
			defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
			defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
			defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
			defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
			defineMacro("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
			defineMacro("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
			const dotsByToken = {
				",": "\\dotsc",
				"\\not": "\\dotsb",
				"+": "\\dotsb",
				"=": "\\dotsb",
				"<": "\\dotsb",
				">": "\\dotsb",
				"-": "\\dotsb",
				"*": "\\dotsb",
				":": "\\dotsb",
				"\\DOTSB": "\\dotsb",
				"\\coprod": "\\dotsb",
				"\\bigvee": "\\dotsb",
				"\\bigwedge": "\\dotsb",
				"\\biguplus": "\\dotsb",
				"\\bigcap": "\\dotsb",
				"\\bigcup": "\\dotsb",
				"\\prod": "\\dotsb",
				"\\sum": "\\dotsb",
				"\\bigotimes": "\\dotsb",
				"\\bigoplus": "\\dotsb",
				"\\bigodot": "\\dotsb",
				"\\bigsqcup": "\\dotsb",
				"\\And": "\\dotsb",
				"\\longrightarrow": "\\dotsb",
				"\\Longrightarrow": "\\dotsb",
				"\\longleftarrow": "\\dotsb",
				"\\Longleftarrow": "\\dotsb",
				"\\longleftrightarrow": "\\dotsb",
				"\\Longleftrightarrow": "\\dotsb",
				"\\mapsto": "\\dotsb",
				"\\longmapsto": "\\dotsb",
				"\\hookrightarrow": "\\dotsb",
				"\\doteq": "\\dotsb",
				"\\mathbin": "\\dotsb",
				"\\mathrel": "\\dotsb",
				"\\relbar": "\\dotsb",
				"\\Relbar": "\\dotsb",
				"\\xrightarrow": "\\dotsb",
				"\\xleftarrow": "\\dotsb",
				"\\DOTSI": "\\dotsi",
				"\\int": "\\dotsi",
				"\\oint": "\\dotsi",
				"\\iint": "\\dotsi",
				"\\iiint": "\\dotsi",
				"\\iiiint": "\\dotsi",
				"\\idotsint": "\\dotsi",
				"\\DOTSX": "\\dotsx"
			};
			defineMacro("\\dots", function(context) {
				let thedots = "\\dotso";
				const next = context.expandAfterFuture().text;
				if (next in dotsByToken) thedots = dotsByToken[next];
				else if (next.slice(0, 4) === "\\not") thedots = "\\dotsb";
				else if (next in src_symbols.math) {
					if (["bin", "rel"].includes(src_symbols.math[next].group)) thedots = "\\dotsb";
				}
				return thedots;
			});
			const spaceAfterDots = {
				")": true,
				"]": true,
				"\\rbrack": true,
				"\\}": true,
				"\\rbrace": true,
				"\\rangle": true,
				"\\rceil": true,
				"\\rfloor": true,
				"\\rgroup": true,
				"\\rmoustache": true,
				"\\right": true,
				"\\bigr": true,
				"\\biggr": true,
				"\\Bigr": true,
				"\\Biggr": true,
				"$": true,
				";": true,
				".": true,
				",": true
			};
			defineMacro("\\dotso", function(context) {
				if (context.future().text in spaceAfterDots) return "\\ldots\\,";
				else return "\\ldots";
			});
			defineMacro("\\dotsc", function(context) {
				const next = context.future().text;
				if (next in spaceAfterDots && next !== ",") return "\\ldots\\,";
				else return "\\ldots";
			});
			defineMacro("\\cdots", function(context) {
				if (context.future().text in spaceAfterDots) return "\\@cdots\\,";
				else return "\\@cdots";
			});
			defineMacro("\\dotsb", "\\cdots");
			defineMacro("\\dotsm", "\\cdots");
			defineMacro("\\dotsi", "\\!\\cdots");
			defineMacro("\\dotsx", "\\ldots\\,");
			defineMacro("\\DOTSI", "\\relax");
			defineMacro("\\DOTSB", "\\relax");
			defineMacro("\\DOTSX", "\\relax");
			defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
			defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
			defineMacro("\\thinspace", "\\,");
			defineMacro("\\>", "\\mskip{4mu}");
			defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
			defineMacro("\\medspace", "\\:");
			defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
			defineMacro("\\thickspace", "\\;");
			defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
			defineMacro("\\negthinspace", "\\!");
			defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
			defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
			defineMacro("\\enspace", "\\kern.5em ");
			defineMacro("\\enskip", "\\hskip.5em\\relax");
			defineMacro("\\quad", "\\hskip1em\\relax");
			defineMacro("\\qquad", "\\hskip2em\\relax");
			defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
			defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
			defineMacro("\\tag@literal", (context) => {
				if (context.macros.get("\\df@tag")) throw new src_ParseError("Multiple \\tag");
				return "\\gdef\\df@tag{\\text{#1}}";
			});
			defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
			defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
			defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
			defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
			defineMacro("\\newline", "\\\\\\relax");
			defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
			const latexRaiseA = makeEm(fontMetricsData["Main-Regular"]["T".charCodeAt(0)][1] - .7 * fontMetricsData["Main-Regular"]["A".charCodeAt(0)][1]);
			defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
			defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
			defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
			defineMacro("\\@hspace", "\\hskip #1\\relax");
			defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
			defineMacro("\\ordinarycolon", ":");
			defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
			defineMacro("\\dblcolon", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char\"2237}}");
			defineMacro("\\coloneqq", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char\"2254}}");
			defineMacro("\\Coloneqq", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char\"2237\\char\"3d}}");
			defineMacro("\\coloneq", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char\"3a\\char\"2212}}");
			defineMacro("\\Coloneq", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char\"2237\\char\"2212}}");
			defineMacro("\\eqqcolon", "\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char\"2255}}");
			defineMacro("\\Eqqcolon", "\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char\"3d\\char\"2237}}");
			defineMacro("\\eqcolon", "\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char\"2239}}");
			defineMacro("\\Eqcolon", "\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char\"2212\\char\"2237}}");
			defineMacro("\\colonapprox", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char\"3a\\char\"2248}}");
			defineMacro("\\Colonapprox", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char\"2237\\char\"2248}}");
			defineMacro("\\colonsim", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char\"3a\\char\"223c}}");
			defineMacro("\\Colonsim", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char\"2237\\char\"223c}}");
			defineMacro("∷", "\\dblcolon");
			defineMacro("∹", "\\eqcolon");
			defineMacro("≔", "\\coloneqq");
			defineMacro("≕", "\\eqqcolon");
			defineMacro("⩴", "\\Coloneqq");
			defineMacro("\\ratio", "\\vcentcolon");
			defineMacro("\\coloncolon", "\\dblcolon");
			defineMacro("\\colonequals", "\\coloneqq");
			defineMacro("\\coloncolonequals", "\\Coloneqq");
			defineMacro("\\equalscolon", "\\eqqcolon");
			defineMacro("\\equalscoloncolon", "\\Eqqcolon");
			defineMacro("\\colonminus", "\\coloneq");
			defineMacro("\\coloncolonminus", "\\Coloneq");
			defineMacro("\\minuscolon", "\\eqcolon");
			defineMacro("\\minuscoloncolon", "\\Eqcolon");
			defineMacro("\\coloncolonapprox", "\\Colonapprox");
			defineMacro("\\coloncolonsim", "\\Colonsim");
			defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
			defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
			defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
			defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
			defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
			defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
			defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
			defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
			defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
			defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
			defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
			defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
			defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
			defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
			defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
			defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
			defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
			defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
			defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
			defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
			defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
			defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
			defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
			defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
			defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
			defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
			defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
			defineMacro("\\imath", "\\html@mathml{\\@imath}{ı}");
			defineMacro("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
			defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
			defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
			defineMacro("⟦", "\\llbracket");
			defineMacro("⟧", "\\rrbracket");
			defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
			defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
			defineMacro("⦃", "\\lBrace");
			defineMacro("⦄", "\\rBrace");
			defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
			defineMacro("⦵", "\\minuso");
			defineMacro("\\darr", "\\downarrow");
			defineMacro("\\dArr", "\\Downarrow");
			defineMacro("\\Darr", "\\Downarrow");
			defineMacro("\\lang", "\\langle");
			defineMacro("\\rang", "\\rangle");
			defineMacro("\\uarr", "\\uparrow");
			defineMacro("\\uArr", "\\Uparrow");
			defineMacro("\\Uarr", "\\Uparrow");
			defineMacro("\\N", "\\mathbb{N}");
			defineMacro("\\R", "\\mathbb{R}");
			defineMacro("\\Z", "\\mathbb{Z}");
			defineMacro("\\alef", "\\aleph");
			defineMacro("\\alefsym", "\\aleph");
			defineMacro("\\Alpha", "\\mathrm{A}");
			defineMacro("\\Beta", "\\mathrm{B}");
			defineMacro("\\bull", "\\bullet");
			defineMacro("\\Chi", "\\mathrm{X}");
			defineMacro("\\clubs", "\\clubsuit");
			defineMacro("\\cnums", "\\mathbb{C}");
			defineMacro("\\Complex", "\\mathbb{C}");
			defineMacro("\\Dagger", "\\ddagger");
			defineMacro("\\diamonds", "\\diamondsuit");
			defineMacro("\\empty", "\\emptyset");
			defineMacro("\\Epsilon", "\\mathrm{E}");
			defineMacro("\\Eta", "\\mathrm{H}");
			defineMacro("\\exist", "\\exists");
			defineMacro("\\harr", "\\leftrightarrow");
			defineMacro("\\hArr", "\\Leftrightarrow");
			defineMacro("\\Harr", "\\Leftrightarrow");
			defineMacro("\\hearts", "\\heartsuit");
			defineMacro("\\image", "\\Im");
			defineMacro("\\infin", "\\infty");
			defineMacro("\\Iota", "\\mathrm{I}");
			defineMacro("\\isin", "\\in");
			defineMacro("\\Kappa", "\\mathrm{K}");
			defineMacro("\\larr", "\\leftarrow");
			defineMacro("\\lArr", "\\Leftarrow");
			defineMacro("\\Larr", "\\Leftarrow");
			defineMacro("\\lrarr", "\\leftrightarrow");
			defineMacro("\\lrArr", "\\Leftrightarrow");
			defineMacro("\\Lrarr", "\\Leftrightarrow");
			defineMacro("\\Mu", "\\mathrm{M}");
			defineMacro("\\natnums", "\\mathbb{N}");
			defineMacro("\\Nu", "\\mathrm{N}");
			defineMacro("\\Omicron", "\\mathrm{O}");
			defineMacro("\\plusmn", "\\pm");
			defineMacro("\\rarr", "\\rightarrow");
			defineMacro("\\rArr", "\\Rightarrow");
			defineMacro("\\Rarr", "\\Rightarrow");
			defineMacro("\\real", "\\Re");
			defineMacro("\\reals", "\\mathbb{R}");
			defineMacro("\\Reals", "\\mathbb{R}");
			defineMacro("\\Rho", "\\mathrm{P}");
			defineMacro("\\sdot", "\\cdot");
			defineMacro("\\sect", "\\S");
			defineMacro("\\spades", "\\spadesuit");
			defineMacro("\\sub", "\\subset");
			defineMacro("\\sube", "\\subseteq");
			defineMacro("\\supe", "\\supseteq");
			defineMacro("\\Tau", "\\mathrm{T}");
			defineMacro("\\thetasym", "\\vartheta");
			defineMacro("\\weierp", "\\wp");
			defineMacro("\\Zeta", "\\mathrm{Z}");
			defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
			defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
			defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
			defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
			defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
			defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
			defineMacro("\\Bra", "\\left\\langle#1\\right|");
			defineMacro("\\Ket", "\\left|#1\\right\\rangle");
			const braketHelper = (one) => (context) => {
				const left = context.consumeArg().tokens;
				const middle = context.consumeArg().tokens;
				const middleDouble = context.consumeArg().tokens;
				const right = context.consumeArg().tokens;
				const oldMiddle = context.macros.get("|");
				const oldMiddleDouble = context.macros.get("\\|");
				context.macros.beginGroup();
				const midMacro = (double) => (context$1) => {
					if (one) {
						context$1.macros.set("|", oldMiddle);
						if (middleDouble.length) context$1.macros.set("\\|", oldMiddleDouble);
					}
					let doubled = double;
					if (!double && middleDouble.length) {
						if (context$1.future().text === "|") {
							context$1.popToken();
							doubled = true;
						}
					}
					return {
						tokens: doubled ? middleDouble : middle,
						numArgs: 0
					};
				};
				context.macros.set("|", midMacro(false));
				if (middleDouble.length) context.macros.set("\\|", midMacro(true));
				const arg = context.consumeArg().tokens;
				const expanded = context.expandTokens([
					...right,
					...arg,
					...left
				]);
				context.macros.endGroup();
				return {
					tokens: expanded.reverse(),
					numArgs: 0
				};
			};
			defineMacro("\\bra@ket", braketHelper(false));
			defineMacro("\\bra@set", braketHelper(true));
			defineMacro("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
			defineMacro("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
			defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
			defineMacro("\\angln", "{\\angl n}");
			defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
			defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
			defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
			defineMacro("\\red", "\\textcolor{##df0030}{#1}");
			defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
			defineMacro("\\gray", "\\textcolor{gray}{#1}");
			defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
			defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
			defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
			defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
			defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
			defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
			defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
			defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
			defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
			defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
			defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
			defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
			defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
			defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
			defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
			defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
			defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
			defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
			defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
			defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
			defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
			defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
			defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
			defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
			defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
			defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
			defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
			defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
			defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
			defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
			defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
			defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
			defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
			defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
			defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
			defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
			defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
			defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
			defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
			defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
			defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
			defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
			defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
			defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
			defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
			defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
			defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
			defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
			defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
			defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
			const implicitCommands = {
				"^": true,
				"_": true,
				"\\limits": true,
				"\\nolimits": true
			};
			class MacroExpander {
				constructor(input, settings, mode) {
					this.settings = void 0;
					this.expansionCount = void 0;
					this.lexer = void 0;
					this.macros = void 0;
					this.stack = void 0;
					this.mode = void 0;
					this.settings = settings;
					this.expansionCount = 0;
					this.feed(input);
					this.macros = new Namespace(src_macros, settings.macros);
					this.mode = mode;
					this.stack = [];
				}
				feed(input) {
					this.lexer = new Lexer(input, this.settings);
				}
				switchMode(newMode) {
					this.mode = newMode;
				}
				beginGroup() {
					this.macros.beginGroup();
				}
				endGroup() {
					this.macros.endGroup();
				}
				endGroups() {
					this.macros.endGroups();
				}
				future() {
					if (this.stack.length === 0) this.pushToken(this.lexer.lex());
					return this.stack[this.stack.length - 1];
				}
				popToken() {
					this.future();
					return this.stack.pop();
				}
				pushToken(token) {
					this.stack.push(token);
				}
				pushTokens(tokens) {
					this.stack.push(...tokens);
				}
				scanArgument(isOptional) {
					let start;
					let end;
					let tokens;
					if (isOptional) {
						this.consumeSpaces();
						if (this.future().text !== "[") return null;
						start = this.popToken();
						({tokens, end} = this.consumeArg(["]"]));
					} else ({tokens, start, end} = this.consumeArg());
					this.pushToken(new Token("EOF", end.loc));
					this.pushTokens(tokens);
					return new Token("", SourceLocation.range(start, end));
				}
				consumeSpaces() {
					for (;;) if (this.future().text === " ") this.stack.pop();
					else break;
				}
				consumeArg(delims) {
					const tokens = [];
					const isDelimited = delims && delims.length > 0;
					if (!isDelimited) this.consumeSpaces();
					const start = this.future();
					let tok;
					let depth = 0;
					let match = 0;
					do {
						tok = this.popToken();
						tokens.push(tok);
						if (tok.text === "{") ++depth;
						else if (tok.text === "}") {
							--depth;
							if (depth === -1) throw new src_ParseError("Extra }", tok);
						} else if (tok.text === "EOF") throw new src_ParseError("Unexpected end of input in a macro argument, expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
						if (delims && isDelimited) if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
							++match;
							if (match === delims.length) {
								tokens.splice(-match, match);
								break;
							}
						} else match = 0;
					} while (depth !== 0 || isDelimited);
					if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
						tokens.pop();
						tokens.shift();
					}
					tokens.reverse();
					return {
						tokens,
						start,
						end: tok
					};
				}
				consumeArgs(numArgs, delimiters$1) {
					if (delimiters$1) {
						if (delimiters$1.length !== numArgs + 1) throw new src_ParseError("The length of delimiters doesn't match the number of args!");
						const delims = delimiters$1[0];
						for (let i = 0; i < delims.length; i++) {
							const tok = this.popToken();
							if (delims[i] !== tok.text) throw new src_ParseError("Use of the macro doesn't match its definition", tok);
						}
					}
					const args = [];
					for (let i = 0; i < numArgs; i++) args.push(this.consumeArg(delimiters$1 && delimiters$1[i + 1]).tokens);
					return args;
				}
				countExpansion(amount) {
					this.expansionCount += amount;
					if (this.expansionCount > this.settings.maxExpand) throw new src_ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
				}
				expandOnce(expandableOnly) {
					const topToken = this.popToken();
					const name = topToken.text;
					const expansion = !topToken.noexpand ? this._getExpansion(name) : null;
					if (expansion == null || expandableOnly && expansion.unexpandable) {
						if (expandableOnly && expansion == null && name[0] === "\\" && !this.isDefined(name)) throw new src_ParseError("Undefined control sequence: " + name);
						this.pushToken(topToken);
						return false;
					}
					this.countExpansion(1);
					let tokens = expansion.tokens;
					const args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
					if (expansion.numArgs) {
						tokens = tokens.slice();
						for (let i = tokens.length - 1; i >= 0; --i) {
							let tok = tokens[i];
							if (tok.text === "#") {
								if (i === 0) throw new src_ParseError("Incomplete placeholder at end of macro body", tok);
								tok = tokens[--i];
								if (tok.text === "#") tokens.splice(i + 1, 1);
								else if (/^[1-9]$/.test(tok.text)) tokens.splice(i, 2, ...args[+tok.text - 1]);
								else throw new src_ParseError("Not a valid argument number", tok);
							}
						}
					}
					this.pushTokens(tokens);
					return tokens.length;
				}
				expandAfterFuture() {
					this.expandOnce();
					return this.future();
				}
				expandNextToken() {
					for (;;) if (this.expandOnce() === false) {
						const token = this.stack.pop();
						if (token.treatAsRelax) token.text = "\\relax";
						return token;
					}
					throw new Error();
				}
				expandMacro(name) {
					return this.macros.has(name) ? this.expandTokens([new Token(name)]) : void 0;
				}
				expandTokens(tokens) {
					const output = [];
					const oldStackLength = this.stack.length;
					this.pushTokens(tokens);
					while (this.stack.length > oldStackLength) if (this.expandOnce(true) === false) {
						const token = this.stack.pop();
						if (token.treatAsRelax) {
							token.noexpand = false;
							token.treatAsRelax = false;
						}
						output.push(token);
					}
					this.countExpansion(output.length);
					return output;
				}
				expandMacroAsText(name) {
					const tokens = this.expandMacro(name);
					if (tokens) return tokens.map((token) => token.text).join("");
					else return tokens;
				}
				_getExpansion(name) {
					const definition = this.macros.get(name);
					if (definition == null) return definition;
					if (name.length === 1) {
						const catcode = this.lexer.catcodes[name];
						if (catcode != null && catcode !== 13) return;
					}
					const expansion = typeof definition === "function" ? definition(this) : definition;
					if (typeof expansion === "string") {
						let numArgs = 0;
						if (expansion.indexOf("#") !== -1) {
							const stripped = expansion.replace(/##/g, "");
							while (stripped.indexOf("#" + (numArgs + 1)) !== -1) ++numArgs;
						}
						const bodyLexer = new Lexer(expansion, this.settings);
						const tokens = [];
						let tok = bodyLexer.lex();
						while (tok.text !== "EOF") {
							tokens.push(tok);
							tok = bodyLexer.lex();
						}
						tokens.reverse();
						return {
							tokens,
							numArgs
						};
					}
					return expansion;
				}
				isDefined(name) {
					return this.macros.has(name) || src_functions.hasOwnProperty(name) || src_symbols.math.hasOwnProperty(name) || src_symbols.text.hasOwnProperty(name) || implicitCommands.hasOwnProperty(name);
				}
				isExpandable(name) {
					const macro = this.macros.get(name);
					return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : src_functions.hasOwnProperty(name) && !src_functions[name].primitive;
				}
			}
			const unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
			const uSubsAndSups = Object.freeze({
				"₊": "+",
				"₋": "-",
				"₌": "=",
				"₍": "(",
				"₎": ")",
				"₀": "0",
				"₁": "1",
				"₂": "2",
				"₃": "3",
				"₄": "4",
				"₅": "5",
				"₆": "6",
				"₇": "7",
				"₈": "8",
				"₉": "9",
				"ₐ": "a",
				"ₑ": "e",
				"ₕ": "h",
				"ᵢ": "i",
				"ⱼ": "j",
				"ₖ": "k",
				"ₗ": "l",
				"ₘ": "m",
				"ₙ": "n",
				"ₒ": "o",
				"ₚ": "p",
				"ᵣ": "r",
				"ₛ": "s",
				"ₜ": "t",
				"ᵤ": "u",
				"ᵥ": "v",
				"ₓ": "x",
				"ᵦ": "β",
				"ᵧ": "γ",
				"ᵨ": "ρ",
				"ᵩ": "ϕ",
				"ᵪ": "χ",
				"⁺": "+",
				"⁻": "-",
				"⁼": "=",
				"⁽": "(",
				"⁾": ")",
				"⁰": "0",
				"¹": "1",
				"²": "2",
				"³": "3",
				"⁴": "4",
				"⁵": "5",
				"⁶": "6",
				"⁷": "7",
				"⁸": "8",
				"⁹": "9",
				"ᴬ": "A",
				"ᴮ": "B",
				"ᴰ": "D",
				"ᴱ": "E",
				"ᴳ": "G",
				"ᴴ": "H",
				"ᴵ": "I",
				"ᴶ": "J",
				"ᴷ": "K",
				"ᴸ": "L",
				"ᴹ": "M",
				"ᴺ": "N",
				"ᴼ": "O",
				"ᴾ": "P",
				"ᴿ": "R",
				"ᵀ": "T",
				"ᵁ": "U",
				"ⱽ": "V",
				"ᵂ": "W",
				"ᵃ": "a",
				"ᵇ": "b",
				"ᶜ": "c",
				"ᵈ": "d",
				"ᵉ": "e",
				"ᶠ": "f",
				"ᵍ": "g",
				"ʰ": "h",
				"ⁱ": "i",
				"ʲ": "j",
				"ᵏ": "k",
				"ˡ": "l",
				"ᵐ": "m",
				"ⁿ": "n",
				"ᵒ": "o",
				"ᵖ": "p",
				"ʳ": "r",
				"ˢ": "s",
				"ᵗ": "t",
				"ᵘ": "u",
				"ᵛ": "v",
				"ʷ": "w",
				"ˣ": "x",
				"ʸ": "y",
				"ᶻ": "z",
				"ᵝ": "β",
				"ᵞ": "γ",
				"ᵟ": "δ",
				"ᵠ": "ϕ",
				"ᵡ": "χ",
				"ᶿ": "θ"
			});
			const unicodeAccents = {
				"́": {
					"text": "\\'",
					"math": "\\acute"
				},
				"̀": {
					"text": "\\`",
					"math": "\\grave"
				},
				"̈": {
					"text": "\\\"",
					"math": "\\ddot"
				},
				"̃": {
					"text": "\\~",
					"math": "\\tilde"
				},
				"̄": {
					"text": "\\=",
					"math": "\\bar"
				},
				"̆": {
					"text": "\\u",
					"math": "\\breve"
				},
				"̌": {
					"text": "\\v",
					"math": "\\check"
				},
				"̂": {
					"text": "\\^",
					"math": "\\hat"
				},
				"̇": {
					"text": "\\.",
					"math": "\\dot"
				},
				"̊": {
					"text": "\\r",
					"math": "\\mathring"
				},
				"̋": { "text": "\\H" },
				"̧": { "text": "\\c" }
			};
			const unicodeSymbols = {
				"á": "á",
				"à": "à",
				"ä": "ä",
				"ǟ": "ǟ",
				"ã": "ã",
				"ā": "ā",
				"ă": "ă",
				"ắ": "ắ",
				"ằ": "ằ",
				"ẵ": "ẵ",
				"ǎ": "ǎ",
				"â": "â",
				"ấ": "ấ",
				"ầ": "ầ",
				"ẫ": "ẫ",
				"ȧ": "ȧ",
				"ǡ": "ǡ",
				"å": "å",
				"ǻ": "ǻ",
				"ḃ": "ḃ",
				"ć": "ć",
				"ḉ": "ḉ",
				"č": "č",
				"ĉ": "ĉ",
				"ċ": "ċ",
				"ç": "ç",
				"ď": "ď",
				"ḋ": "ḋ",
				"ḑ": "ḑ",
				"é": "é",
				"è": "è",
				"ë": "ë",
				"ẽ": "ẽ",
				"ē": "ē",
				"ḗ": "ḗ",
				"ḕ": "ḕ",
				"ĕ": "ĕ",
				"ḝ": "ḝ",
				"ě": "ě",
				"ê": "ê",
				"ế": "ế",
				"ề": "ề",
				"ễ": "ễ",
				"ė": "ė",
				"ȩ": "ȩ",
				"ḟ": "ḟ",
				"ǵ": "ǵ",
				"ḡ": "ḡ",
				"ğ": "ğ",
				"ǧ": "ǧ",
				"ĝ": "ĝ",
				"ġ": "ġ",
				"ģ": "ģ",
				"ḧ": "ḧ",
				"ȟ": "ȟ",
				"ĥ": "ĥ",
				"ḣ": "ḣ",
				"ḩ": "ḩ",
				"í": "í",
				"ì": "ì",
				"ï": "ï",
				"ḯ": "ḯ",
				"ĩ": "ĩ",
				"ī": "ī",
				"ĭ": "ĭ",
				"ǐ": "ǐ",
				"î": "î",
				"ǰ": "ǰ",
				"ĵ": "ĵ",
				"ḱ": "ḱ",
				"ǩ": "ǩ",
				"ķ": "ķ",
				"ĺ": "ĺ",
				"ľ": "ľ",
				"ļ": "ļ",
				"ḿ": "ḿ",
				"ṁ": "ṁ",
				"ń": "ń",
				"ǹ": "ǹ",
				"ñ": "ñ",
				"ň": "ň",
				"ṅ": "ṅ",
				"ņ": "ņ",
				"ó": "ó",
				"ò": "ò",
				"ö": "ö",
				"ȫ": "ȫ",
				"õ": "õ",
				"ṍ": "ṍ",
				"ṏ": "ṏ",
				"ȭ": "ȭ",
				"ō": "ō",
				"ṓ": "ṓ",
				"ṑ": "ṑ",
				"ŏ": "ŏ",
				"ǒ": "ǒ",
				"ô": "ô",
				"ố": "ố",
				"ồ": "ồ",
				"ỗ": "ỗ",
				"ȯ": "ȯ",
				"ȱ": "ȱ",
				"ő": "ő",
				"ṕ": "ṕ",
				"ṗ": "ṗ",
				"ŕ": "ŕ",
				"ř": "ř",
				"ṙ": "ṙ",
				"ŗ": "ŗ",
				"ś": "ś",
				"ṥ": "ṥ",
				"š": "š",
				"ṧ": "ṧ",
				"ŝ": "ŝ",
				"ṡ": "ṡ",
				"ş": "ş",
				"ẗ": "ẗ",
				"ť": "ť",
				"ṫ": "ṫ",
				"ţ": "ţ",
				"ú": "ú",
				"ù": "ù",
				"ü": "ü",
				"ǘ": "ǘ",
				"ǜ": "ǜ",
				"ǖ": "ǖ",
				"ǚ": "ǚ",
				"ũ": "ũ",
				"ṹ": "ṹ",
				"ū": "ū",
				"ṻ": "ṻ",
				"ŭ": "ŭ",
				"ǔ": "ǔ",
				"û": "û",
				"ů": "ů",
				"ű": "ű",
				"ṽ": "ṽ",
				"ẃ": "ẃ",
				"ẁ": "ẁ",
				"ẅ": "ẅ",
				"ŵ": "ŵ",
				"ẇ": "ẇ",
				"ẘ": "ẘ",
				"ẍ": "ẍ",
				"ẋ": "ẋ",
				"ý": "ý",
				"ỳ": "ỳ",
				"ÿ": "ÿ",
				"ỹ": "ỹ",
				"ȳ": "ȳ",
				"ŷ": "ŷ",
				"ẏ": "ẏ",
				"ẙ": "ẙ",
				"ź": "ź",
				"ž": "ž",
				"ẑ": "ẑ",
				"ż": "ż",
				"Á": "Á",
				"À": "À",
				"Ä": "Ä",
				"Ǟ": "Ǟ",
				"Ã": "Ã",
				"Ā": "Ā",
				"Ă": "Ă",
				"Ắ": "Ắ",
				"Ằ": "Ằ",
				"Ẵ": "Ẵ",
				"Ǎ": "Ǎ",
				"Â": "Â",
				"Ấ": "Ấ",
				"Ầ": "Ầ",
				"Ẫ": "Ẫ",
				"Ȧ": "Ȧ",
				"Ǡ": "Ǡ",
				"Å": "Å",
				"Ǻ": "Ǻ",
				"Ḃ": "Ḃ",
				"Ć": "Ć",
				"Ḉ": "Ḉ",
				"Č": "Č",
				"Ĉ": "Ĉ",
				"Ċ": "Ċ",
				"Ç": "Ç",
				"Ď": "Ď",
				"Ḋ": "Ḋ",
				"Ḑ": "Ḑ",
				"É": "É",
				"È": "È",
				"Ë": "Ë",
				"Ẽ": "Ẽ",
				"Ē": "Ē",
				"Ḗ": "Ḗ",
				"Ḕ": "Ḕ",
				"Ĕ": "Ĕ",
				"Ḝ": "Ḝ",
				"Ě": "Ě",
				"Ê": "Ê",
				"Ế": "Ế",
				"Ề": "Ề",
				"Ễ": "Ễ",
				"Ė": "Ė",
				"Ȩ": "Ȩ",
				"Ḟ": "Ḟ",
				"Ǵ": "Ǵ",
				"Ḡ": "Ḡ",
				"Ğ": "Ğ",
				"Ǧ": "Ǧ",
				"Ĝ": "Ĝ",
				"Ġ": "Ġ",
				"Ģ": "Ģ",
				"Ḧ": "Ḧ",
				"Ȟ": "Ȟ",
				"Ĥ": "Ĥ",
				"Ḣ": "Ḣ",
				"Ḩ": "Ḩ",
				"Í": "Í",
				"Ì": "Ì",
				"Ï": "Ï",
				"Ḯ": "Ḯ",
				"Ĩ": "Ĩ",
				"Ī": "Ī",
				"Ĭ": "Ĭ",
				"Ǐ": "Ǐ",
				"Î": "Î",
				"İ": "İ",
				"Ĵ": "Ĵ",
				"Ḱ": "Ḱ",
				"Ǩ": "Ǩ",
				"Ķ": "Ķ",
				"Ĺ": "Ĺ",
				"Ľ": "Ľ",
				"Ļ": "Ļ",
				"Ḿ": "Ḿ",
				"Ṁ": "Ṁ",
				"Ń": "Ń",
				"Ǹ": "Ǹ",
				"Ñ": "Ñ",
				"Ň": "Ň",
				"Ṅ": "Ṅ",
				"Ņ": "Ņ",
				"Ó": "Ó",
				"Ò": "Ò",
				"Ö": "Ö",
				"Ȫ": "Ȫ",
				"Õ": "Õ",
				"Ṍ": "Ṍ",
				"Ṏ": "Ṏ",
				"Ȭ": "Ȭ",
				"Ō": "Ō",
				"Ṓ": "Ṓ",
				"Ṑ": "Ṑ",
				"Ŏ": "Ŏ",
				"Ǒ": "Ǒ",
				"Ô": "Ô",
				"Ố": "Ố",
				"Ồ": "Ồ",
				"Ỗ": "Ỗ",
				"Ȯ": "Ȯ",
				"Ȱ": "Ȱ",
				"Ő": "Ő",
				"Ṕ": "Ṕ",
				"Ṗ": "Ṗ",
				"Ŕ": "Ŕ",
				"Ř": "Ř",
				"Ṙ": "Ṙ",
				"Ŗ": "Ŗ",
				"Ś": "Ś",
				"Ṥ": "Ṥ",
				"Š": "Š",
				"Ṧ": "Ṧ",
				"Ŝ": "Ŝ",
				"Ṡ": "Ṡ",
				"Ş": "Ş",
				"Ť": "Ť",
				"Ṫ": "Ṫ",
				"Ţ": "Ţ",
				"Ú": "Ú",
				"Ù": "Ù",
				"Ü": "Ü",
				"Ǘ": "Ǘ",
				"Ǜ": "Ǜ",
				"Ǖ": "Ǖ",
				"Ǚ": "Ǚ",
				"Ũ": "Ũ",
				"Ṹ": "Ṹ",
				"Ū": "Ū",
				"Ṻ": "Ṻ",
				"Ŭ": "Ŭ",
				"Ǔ": "Ǔ",
				"Û": "Û",
				"Ů": "Ů",
				"Ű": "Ű",
				"Ṽ": "Ṽ",
				"Ẃ": "Ẃ",
				"Ẁ": "Ẁ",
				"Ẅ": "Ẅ",
				"Ŵ": "Ŵ",
				"Ẇ": "Ẇ",
				"Ẍ": "Ẍ",
				"Ẋ": "Ẋ",
				"Ý": "Ý",
				"Ỳ": "Ỳ",
				"Ÿ": "Ÿ",
				"Ỹ": "Ỹ",
				"Ȳ": "Ȳ",
				"Ŷ": "Ŷ",
				"Ẏ": "Ẏ",
				"Ź": "Ź",
				"Ž": "Ž",
				"Ẑ": "Ẑ",
				"Ż": "Ż",
				"ά": "ά",
				"ὰ": "ὰ",
				"ᾱ": "ᾱ",
				"ᾰ": "ᾰ",
				"έ": "έ",
				"ὲ": "ὲ",
				"ή": "ή",
				"ὴ": "ὴ",
				"ί": "ί",
				"ὶ": "ὶ",
				"ϊ": "ϊ",
				"ΐ": "ΐ",
				"ῒ": "ῒ",
				"ῑ": "ῑ",
				"ῐ": "ῐ",
				"ό": "ό",
				"ὸ": "ὸ",
				"ύ": "ύ",
				"ὺ": "ὺ",
				"ϋ": "ϋ",
				"ΰ": "ΰ",
				"ῢ": "ῢ",
				"ῡ": "ῡ",
				"ῠ": "ῠ",
				"ώ": "ώ",
				"ὼ": "ὼ",
				"Ύ": "Ύ",
				"Ὺ": "Ὺ",
				"Ϋ": "Ϋ",
				"Ῡ": "Ῡ",
				"Ῠ": "Ῠ",
				"Ώ": "Ώ",
				"Ὼ": "Ὼ"
			};
			class Parser {
				constructor(input, settings) {
					this.mode = void 0;
					this.gullet = void 0;
					this.settings = void 0;
					this.leftrightDepth = void 0;
					this.nextToken = void 0;
					this.mode = "math";
					this.gullet = new MacroExpander(input, settings, this.mode);
					this.settings = settings;
					this.leftrightDepth = 0;
				}
				expect(text, consume) {
					if (consume === void 0) consume = true;
					if (this.fetch().text !== text) throw new src_ParseError("Expected '" + text + "', got '" + this.fetch().text + "'", this.fetch());
					if (consume) this.consume();
				}
				consume() {
					this.nextToken = null;
				}
				fetch() {
					if (this.nextToken == null) this.nextToken = this.gullet.expandNextToken();
					return this.nextToken;
				}
				switchMode(newMode) {
					this.mode = newMode;
					this.gullet.switchMode(newMode);
				}
				parse() {
					if (!this.settings.globalGroup) this.gullet.beginGroup();
					if (this.settings.colorIsTextColor) this.gullet.macros.set("\\color", "\\textcolor");
					try {
						const parse = this.parseExpression(false);
						this.expect("EOF");
						if (!this.settings.globalGroup) this.gullet.endGroup();
						return parse;
					} finally {
						this.gullet.endGroups();
					}
				}
				subparse(tokens) {
					const oldToken = this.nextToken;
					this.consume();
					this.gullet.pushToken(new Token("}"));
					this.gullet.pushTokens(tokens);
					const parse = this.parseExpression(false);
					this.expect("}");
					this.nextToken = oldToken;
					return parse;
				}
				parseExpression(breakOnInfix, breakOnTokenText) {
					const body = [];
					while (true) {
						if (this.mode === "math") this.consumeSpaces();
						const lex = this.fetch();
						if (Parser.endOfExpression.indexOf(lex.text) !== -1) break;
						if (breakOnTokenText && lex.text === breakOnTokenText) break;
						if (breakOnInfix && src_functions[lex.text] && src_functions[lex.text].infix) break;
						const atom = this.parseAtom(breakOnTokenText);
						if (!atom) break;
						else if (atom.type === "internal") continue;
						body.push(atom);
					}
					if (this.mode === "text") this.formLigatures(body);
					return this.handleInfixNodes(body);
				}
				handleInfixNodes(body) {
					let overIndex = -1;
					let funcName;
					for (let i = 0; i < body.length; i++) if (body[i].type === "infix") {
						if (overIndex !== -1) throw new src_ParseError("only one infix operator per group", body[i].token);
						overIndex = i;
						funcName = body[i].replaceWith;
					}
					if (overIndex !== -1 && funcName) {
						let numerNode;
						let denomNode;
						const numerBody = body.slice(0, overIndex);
						const denomBody = body.slice(overIndex + 1);
						if (numerBody.length === 1 && numerBody[0].type === "ordgroup") numerNode = numerBody[0];
						else numerNode = {
							type: "ordgroup",
							mode: this.mode,
							body: numerBody
						};
						if (denomBody.length === 1 && denomBody[0].type === "ordgroup") denomNode = denomBody[0];
						else denomNode = {
							type: "ordgroup",
							mode: this.mode,
							body: denomBody
						};
						let node;
						if (funcName === "\\\\abovefrac") node = this.callFunction(funcName, [
							numerNode,
							body[overIndex],
							denomNode
						], []);
						else node = this.callFunction(funcName, [numerNode, denomNode], []);
						return [node];
					} else return body;
				}
				handleSupSubscript(name) {
					const symbolToken = this.fetch();
					const symbol = symbolToken.text;
					this.consume();
					this.consumeSpaces();
					let group;
					do {
						var _group;
						group = this.parseGroup(name);
					} while (((_group = group) == null ? void 0 : _group.type) === "internal");
					if (!group) throw new src_ParseError("Expected group after '" + symbol + "'", symbolToken);
					return group;
				}
				formatUnsupportedCmd(text) {
					const textordArray = [];
					for (let i = 0; i < text.length; i++) textordArray.push({
						type: "textord",
						mode: "text",
						text: text[i]
					});
					const textNode = {
						type: "text",
						mode: this.mode,
						body: textordArray
					};
					return {
						type: "color",
						mode: this.mode,
						color: this.settings.errorColor,
						body: [textNode]
					};
				}
				parseAtom(breakOnTokenText) {
					const base = this.parseGroup("atom", breakOnTokenText);
					if ((base == null ? void 0 : base.type) === "internal") return base;
					if (this.mode === "text") return base;
					let superscript;
					let subscript;
					while (true) {
						this.consumeSpaces();
						const lex = this.fetch();
						if (lex.text === "\\limits" || lex.text === "\\nolimits") {
							if (base && base.type === "op") {
								base.limits = lex.text === "\\limits";
								base.alwaysHandleSupSub = true;
							} else if (base && base.type === "operatorname") {
								if (base.alwaysHandleSupSub) base.limits = lex.text === "\\limits";
							} else throw new src_ParseError("Limit controls must follow a math operator", lex);
							this.consume();
						} else if (lex.text === "^") {
							if (superscript) throw new src_ParseError("Double superscript", lex);
							superscript = this.handleSupSubscript("superscript");
						} else if (lex.text === "_") {
							if (subscript) throw new src_ParseError("Double subscript", lex);
							subscript = this.handleSupSubscript("subscript");
						} else if (lex.text === "'") {
							if (superscript) throw new src_ParseError("Double superscript", lex);
							const prime = {
								type: "textord",
								mode: this.mode,
								text: "\\prime"
							};
							const primes = [prime];
							this.consume();
							while (this.fetch().text === "'") {
								primes.push(prime);
								this.consume();
							}
							if (this.fetch().text === "^") primes.push(this.handleSupSubscript("superscript"));
							superscript = {
								type: "ordgroup",
								mode: this.mode,
								body: primes
							};
						} else if (uSubsAndSups[lex.text]) {
							const isSub = unicodeSubRegEx.test(lex.text);
							const subsupTokens = [];
							subsupTokens.push(new Token(uSubsAndSups[lex.text]));
							this.consume();
							while (true) {
								const token = this.fetch().text;
								if (!uSubsAndSups[token]) break;
								if (unicodeSubRegEx.test(token) !== isSub) break;
								subsupTokens.unshift(new Token(uSubsAndSups[token]));
								this.consume();
							}
							const body = this.subparse(subsupTokens);
							if (isSub) subscript = {
								type: "ordgroup",
								mode: "math",
								body
							};
							else superscript = {
								type: "ordgroup",
								mode: "math",
								body
							};
						} else break;
					}
					if (superscript || subscript) return {
						type: "supsub",
						mode: this.mode,
						base,
						sup: superscript,
						sub: subscript
					};
					else return base;
				}
				parseFunction(breakOnTokenText, name) {
					const token = this.fetch();
					const func = token.text;
					const funcData = src_functions[func];
					if (!funcData) return null;
					this.consume();
					if (name && name !== "atom" && !funcData.allowedInArgument) throw new src_ParseError("Got function '" + func + "' with no arguments" + (name ? " as " + name : ""), token);
					else if (this.mode === "text" && !funcData.allowedInText) throw new src_ParseError("Can't use function '" + func + "' in text mode", token);
					else if (this.mode === "math" && funcData.allowedInMath === false) throw new src_ParseError("Can't use function '" + func + "' in math mode", token);
					const { args, optArgs } = this.parseArguments(func, funcData);
					return this.callFunction(func, args, optArgs, token, breakOnTokenText);
				}
				callFunction(name, args, optArgs, token, breakOnTokenText) {
					const context = {
						funcName: name,
						parser: this,
						token,
						breakOnTokenText
					};
					const func = src_functions[name];
					if (func && func.handler) return func.handler(context, args, optArgs);
					else throw new src_ParseError("No function handler for " + name);
				}
				parseArguments(func, funcData) {
					const totalArgs = funcData.numArgs + funcData.numOptionalArgs;
					if (totalArgs === 0) return {
						args: [],
						optArgs: []
					};
					const args = [];
					const optArgs = [];
					for (let i = 0; i < totalArgs; i++) {
						let argType = funcData.argTypes && funcData.argTypes[i];
						const isOptional = i < funcData.numOptionalArgs;
						if (funcData.primitive && argType == null || funcData.type === "sqrt" && i === 1 && optArgs[0] == null) argType = "primitive";
						const arg = this.parseGroupOfType("argument to '" + func + "'", argType, isOptional);
						if (isOptional) optArgs.push(arg);
						else if (arg != null) args.push(arg);
						else throw new src_ParseError("Null argument, please report this as a bug");
					}
					return {
						args,
						optArgs
					};
				}
				parseGroupOfType(name, type$1, optional) {
					switch (type$1) {
						case "color": return this.parseColorGroup(optional);
						case "size": return this.parseSizeGroup(optional);
						case "url": return this.parseUrlGroup(optional);
						case "math":
						case "text": return this.parseArgumentGroup(optional, type$1);
						case "hbox": {
							const group = this.parseArgumentGroup(optional, "text");
							return group != null ? {
								type: "styling",
								mode: group.mode,
								body: [group],
								style: "text"
							} : null;
						}
						case "raw": {
							const token = this.parseStringGroup("raw", optional);
							return token != null ? {
								type: "raw",
								mode: "text",
								string: token.text
							} : null;
						}
						case "primitive": {
							if (optional) throw new src_ParseError("A primitive argument cannot be optional");
							const group = this.parseGroup(name);
							if (group == null) throw new src_ParseError("Expected group as " + name, this.fetch());
							return group;
						}
						case "original":
						case null:
						case void 0: return this.parseArgumentGroup(optional);
						default: throw new src_ParseError("Unknown group type as " + name, this.fetch());
					}
				}
				consumeSpaces() {
					while (this.fetch().text === " ") this.consume();
				}
				parseStringGroup(modeName, optional) {
					const argToken = this.gullet.scanArgument(optional);
					if (argToken == null) return null;
					let str = "";
					let nextToken;
					while ((nextToken = this.fetch()).text !== "EOF") {
						str += nextToken.text;
						this.consume();
					}
					this.consume();
					argToken.text = str;
					return argToken;
				}
				parseRegexGroup(regex, modeName) {
					const firstToken = this.fetch();
					let lastToken = firstToken;
					let str = "";
					let nextToken;
					while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
						lastToken = nextToken;
						str += lastToken.text;
						this.consume();
					}
					if (str === "") throw new src_ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
					return firstToken.range(lastToken, str);
				}
				parseColorGroup(optional) {
					const res = this.parseStringGroup("color", optional);
					if (res == null) return null;
					const match = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);
					if (!match) throw new src_ParseError("Invalid color: '" + res.text + "'", res);
					let color = match[0];
					if (/^[0-9a-f]{6}$/i.test(color)) color = "#" + color;
					return {
						type: "color-token",
						mode: this.mode,
						color
					};
				}
				parseSizeGroup(optional) {
					let res;
					let isBlank = false;
					this.gullet.consumeSpaces();
					if (!optional && this.gullet.future().text !== "{") res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
					else res = this.parseStringGroup("size", optional);
					if (!res) return null;
					if (!optional && res.text.length === 0) {
						res.text = "0pt";
						isBlank = true;
					}
					const match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);
					if (!match) throw new src_ParseError("Invalid size: '" + res.text + "'", res);
					const data = {
						number: +(match[1] + match[2]),
						unit: match[3]
					};
					if (!validUnit(data)) throw new src_ParseError("Invalid unit: '" + data.unit + "'", res);
					return {
						type: "size",
						mode: this.mode,
						value: data,
						isBlank
					};
				}
				parseUrlGroup(optional) {
					this.gullet.lexer.setCatcode("%", 13);
					this.gullet.lexer.setCatcode("~", 12);
					const res = this.parseStringGroup("url", optional);
					this.gullet.lexer.setCatcode("%", 14);
					this.gullet.lexer.setCatcode("~", 13);
					if (res == null) return null;
					const url = res.text.replace(/\\([#$%&~_^{}])/g, "$1");
					return {
						type: "url",
						mode: this.mode,
						url
					};
				}
				parseArgumentGroup(optional, mode) {
					const argToken = this.gullet.scanArgument(optional);
					if (argToken == null) return null;
					const outerMode = this.mode;
					if (mode) this.switchMode(mode);
					this.gullet.beginGroup();
					const expression = this.parseExpression(false, "EOF");
					this.expect("EOF");
					this.gullet.endGroup();
					const result = {
						type: "ordgroup",
						mode: this.mode,
						loc: argToken.loc,
						body: expression
					};
					if (mode) this.switchMode(outerMode);
					return result;
				}
				parseGroup(name, breakOnTokenText) {
					const firstToken = this.fetch();
					const text = firstToken.text;
					let result;
					if (text === "{" || text === "\\begingroup") {
						this.consume();
						const groupEnd = text === "{" ? "}" : "\\endgroup";
						this.gullet.beginGroup();
						const expression = this.parseExpression(false, groupEnd);
						const lastToken = this.fetch();
						this.expect(groupEnd);
						this.gullet.endGroup();
						result = {
							type: "ordgroup",
							mode: this.mode,
							loc: SourceLocation.range(firstToken, lastToken),
							body: expression,
							semisimple: text === "\\begingroup" || void 0
						};
					} else {
						result = this.parseFunction(breakOnTokenText, name) || this.parseSymbol();
						if (result == null && text[0] === "\\" && !implicitCommands.hasOwnProperty(text)) {
							if (this.settings.throwOnError) throw new src_ParseError("Undefined control sequence: " + text, firstToken);
							result = this.formatUnsupportedCmd(text);
							this.consume();
						}
					}
					return result;
				}
				formLigatures(group) {
					let n = group.length - 1;
					for (let i = 0; i < n; ++i) {
						const a = group[i];
						const v = a.text;
						if (v === "-" && group[i + 1].text === "-") if (i + 1 < n && group[i + 2].text === "-") {
							group.splice(i, 3, {
								type: "textord",
								mode: "text",
								loc: SourceLocation.range(a, group[i + 2]),
								text: "---"
							});
							n -= 2;
						} else {
							group.splice(i, 2, {
								type: "textord",
								mode: "text",
								loc: SourceLocation.range(a, group[i + 1]),
								text: "--"
							});
							n -= 1;
						}
						if ((v === "'" || v === "`") && group[i + 1].text === v) {
							group.splice(i, 2, {
								type: "textord",
								mode: "text",
								loc: SourceLocation.range(a, group[i + 1]),
								text: v + v
							});
							n -= 1;
						}
					}
				}
				parseSymbol() {
					const nucleus = this.fetch();
					let text = nucleus.text;
					if (/^\\verb[^a-zA-Z]/.test(text)) {
						this.consume();
						let arg = text.slice(5);
						const star = arg.charAt(0) === "*";
						if (star) arg = arg.slice(1);
						if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) throw new src_ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
						arg = arg.slice(1, -1);
						return {
							type: "verb",
							mode: "text",
							body: arg,
							star
						};
					}
					if (unicodeSymbols.hasOwnProperty(text[0]) && !src_symbols[this.mode][text[0]]) {
						if (this.settings.strict && this.mode === "math") this.settings.reportNonstrict("unicodeTextInMathMode", "Accented Unicode text character \"" + text[0] + "\" used in math mode", nucleus);
						text = unicodeSymbols[text[0]] + text.slice(1);
					}
					const match = combiningDiacriticalMarksEndRegex.exec(text);
					if (match) {
						text = text.substring(0, match.index);
						if (text === "i") text = "ı";
						else if (text === "j") text = "ȷ";
					}
					let symbol;
					if (src_symbols[this.mode][text]) {
						if (this.settings.strict && this.mode === "math" && extraLatin.indexOf(text) >= 0) this.settings.reportNonstrict("unicodeTextInMathMode", "Latin-1/Unicode text character \"" + text[0] + "\" used in math mode", nucleus);
						const group = src_symbols[this.mode][text].group;
						const loc = SourceLocation.range(nucleus);
						let s;
						if (ATOMS.hasOwnProperty(group)) {
							const family = group;
							s = {
								type: "atom",
								mode: this.mode,
								family,
								loc,
								text
							};
						} else s = {
							type: group,
							mode: this.mode,
							loc,
							text
						};
						symbol = s;
					} else if (text.charCodeAt(0) >= 128) {
						if (this.settings.strict) {
							if (!supportedCodepoint(text.charCodeAt(0))) this.settings.reportNonstrict("unknownSymbol", "Unrecognized Unicode character \"" + text[0] + "\"" + (" (" + text.charCodeAt(0) + ")"), nucleus);
							else if (this.mode === "math") this.settings.reportNonstrict("unicodeTextInMathMode", "Unicode text character \"" + text[0] + "\" used in math mode", nucleus);
						}
						symbol = {
							type: "textord",
							mode: "text",
							loc: SourceLocation.range(nucleus),
							text
						};
					} else return null;
					this.consume();
					if (match) for (let i = 0; i < match[0].length; i++) {
						const accent$1 = match[0][i];
						if (!unicodeAccents[accent$1]) throw new src_ParseError("Unknown accent ' " + accent$1 + "'", nucleus);
						const command$1 = unicodeAccents[accent$1][this.mode] || unicodeAccents[accent$1].text;
						if (!command$1) throw new src_ParseError("Accent " + accent$1 + " unsupported in " + this.mode + " mode", nucleus);
						symbol = {
							type: "accent",
							mode: this.mode,
							loc: SourceLocation.range(nucleus),
							label: command$1,
							isStretchy: false,
							isShifty: true,
							base: symbol
						};
					}
					return symbol;
				}
			}
			Parser.endOfExpression = [
				"}",
				"\\endgroup",
				"\\end",
				"\\right",
				"&"
			];
			const parseTree = function(toParse, settings) {
				if (!(typeof toParse === "string" || toParse instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
				const parser = new Parser(toParse, settings);
				delete parser.gullet.macros.current["\\df@tag"];
				let tree = parser.parse();
				delete parser.gullet.macros.current["\\current@color"];
				delete parser.gullet.macros.current["\\color"];
				if (parser.gullet.macros.get("\\df@tag")) {
					if (!settings.displayMode) throw new src_ParseError("\\tag works only in display equations");
					tree = [{
						type: "tag",
						mode: "text",
						body: tree,
						tag: parser.subparse([new Token("\\df@tag")])
					}];
				}
				return tree;
			};
			var src_parseTree = parseTree;
			let render = function(expression, baseNode, options) {
				baseNode.textContent = "";
				const node = renderToDomTree(expression, options).toNode();
				baseNode.appendChild(node);
			};
			if (typeof document !== "undefined") {
				if (document.compatMode !== "CSS1Compat") {
					typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
					render = function() {
						throw new src_ParseError("KaTeX doesn't work in quirks mode.");
					};
				}
			}
			const renderToString = function(expression, options) {
				return renderToDomTree(expression, options).toMarkup();
			};
			const generateParseTree = function(expression, options) {
				return src_parseTree(expression, new Settings(options));
			};
			const renderError = function(error, expression, options) {
				if (options.throwOnError || !(error instanceof src_ParseError)) throw error;
				const node = buildCommon.makeSpan(["katex-error"], [new SymbolNode(expression)]);
				node.setAttribute("title", error.toString());
				node.setAttribute("style", "color:" + options.errorColor);
				return node;
			};
			const renderToDomTree = function(expression, options) {
				const settings = new Settings(options);
				try {
					return buildTree(src_parseTree(expression, settings), expression, settings);
				} catch (error) {
					return renderError(error, expression, settings);
				}
			};
			const renderToHTMLTree = function(expression, options) {
				const settings = new Settings(options);
				try {
					return buildHTMLTree(src_parseTree(expression, settings), expression, settings);
				} catch (error) {
					return renderError(error, expression, settings);
				}
			};
			var katex_webpack = {
				version: "0.16.27",
				render,
				renderToString,
				ParseError: src_ParseError,
				SETTINGS_SCHEMA,
				__parse: generateParseTree,
				__renderToDomTree: renderToDomTree,
				__renderToHTMLTree: renderToHTMLTree,
				__setFontMetrics: setFontMetrics,
				__defineSymbol: defineSymbol,
				__defineFunction: defineFunction,
				__defineMacro: defineMacro,
				__domTree: {
					Span,
					Anchor,
					SymbolNode,
					SvgNode,
					PathNode,
					LineNode
				}
			};
			__webpack_exports__ = __webpack_exports__["default"];
			return __webpack_exports__;
		})();
	});
}));
var import_dist = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var katex_1 = __importDefault(require_katex());
	function isValidInlineDelim(state, pos) {
		const prevChar = state.src[pos - 1];
		const char = state.src[pos];
		const nextChar = state.src[pos + 1];
		if (char !== "$") return {
			can_open: false,
			can_close: false
		};
		let canOpen = false;
		let canClose = false;
		if (prevChar !== "$" && prevChar !== "\\" && (prevChar === void 0 || isWhitespace(prevChar) || !isWordCharacterOrNumber(prevChar))) canOpen = true;
		if (nextChar !== "$" && (nextChar == void 0 || isWhitespace(nextChar) || !isWordCharacterOrNumber(nextChar))) canClose = true;
		return {
			can_open: canOpen,
			can_close: canClose
		};
	}
	function isWhitespace(char) {
		return /^\s$/u.test(char);
	}
	function isWordCharacterOrNumber(char) {
		return /^[\w\d]$/u.test(char);
	}
	function isValidBlockDelim(state, pos) {
		const prevChar = state.src[pos - 1];
		const char = state.src[pos];
		const nextChar = state.src[pos + 1];
		const nextCharPlus1 = state.src[pos + 2];
		if (char === "$" && prevChar !== "$" && prevChar !== "\\" && nextChar === "$" && nextCharPlus1 !== "$") return {
			can_open: true,
			can_close: true
		};
		return {
			can_open: false,
			can_close: false
		};
	}
	function inlineMath(state, silent) {
		if (state.src[state.pos] !== "$") return false;
		const lastToken = state.tokens.at(-1);
		if (lastToken?.type === "html_inline") {
			if (/^<\w+.+[^/]>$/.test(lastToken.content)) return false;
		}
		let res = isValidInlineDelim(state, state.pos);
		if (!res.can_open) {
			if (!silent) state.pending += "$";
			state.pos += 1;
			return true;
		}
		let start = state.pos + 1;
		let match = start;
		let pos;
		while ((match = state.src.indexOf("$", match)) !== -1) {
			pos = match - 1;
			while (state.src[pos] === "\\") pos -= 1;
			if ((match - pos) % 2 == 1) break;
			match += 1;
		}
		if (match === -1) {
			if (!silent) state.pending += "$";
			state.pos = start;
			return true;
		}
		if (match - start === 0) {
			if (!silent) state.pending += "$$";
			state.pos = start + 1;
			return true;
		}
		res = isValidInlineDelim(state, match);
		if (!res.can_close) {
			if (!silent) state.pending += "$";
			state.pos = start;
			return true;
		}
		if (!silent) {
			const token = state.push("math_inline", "math", 0);
			token.markup = "$";
			token.content = state.src.slice(start, match);
		}
		state.pos = match + 1;
		return true;
	}
	function blockMath(state, start, end, silent) {
		let found = false;
		let pos = state.bMarks[start] + state.tShift[start];
		let max = state.eMarks[start];
		if (pos + 2 > max) return false;
		if (state.src.slice(pos, pos + 2) !== "$$") return false;
		pos += 2;
		let firstLine = state.src.slice(pos, max);
		const endIndexes = [...firstLine.matchAll(/\$\$/g)];
		if (endIndexes.length === 1 && endIndexes[0].index === firstLine.length - 2) {
			firstLine = firstLine.trim().slice(0, -2);
			found = true;
		} else if (endIndexes.length > 1) return false;
		if (silent) return true;
		let lastLine;
		let next;
		let lastPos;
		for (next = start; !found;) {
			next++;
			if (next >= end) break;
			pos = state.bMarks[next] + state.tShift[next];
			max = state.eMarks[next];
			if (pos < max && state.tShift[next] < state.blkIndent) break;
			if (state.src.slice(pos, max).trim().slice(-2) === "$$") {
				lastPos = state.src.slice(0, max).lastIndexOf("$$");
				lastLine = state.src.slice(pos, lastPos);
				found = true;
			} else if (state.src.slice(pos, max).trim().includes("$$")) {
				lastPos = state.src.slice(0, max).trim().indexOf("$$");
				lastLine = state.src.slice(pos, lastPos);
				found = true;
			}
		}
		state.line = next + 1;
		const token = state.push("math_block", "math", 0);
		token.block = true;
		token.content = (firstLine && firstLine.trim() ? firstLine + "\n" : "") + state.getLines(start + 1, next, state.tShift[start], true) + (lastLine && lastLine.trim() ? lastLine : "");
		token.map = [start, state.line];
		token.markup = "$$";
		return true;
	}
	function blockBareMath(state, start, end, silent) {
		const startPos = state.bMarks[start] + state.tShift[start];
		const startMax = state.eMarks[start];
		if (!state.src.slice(startPos, startMax).match(/^\s*\\begin\s*\{([^{}]+)\}/)) return false;
		if (start > 0) {
			const previousStart = state.bMarks[start - 1] + state.tShift[start - 1];
			const previousEnd = state.eMarks[start - 1];
			const previousLine = state.src.slice(previousStart, previousEnd);
			if (!/^\s*$/.test(previousLine)) return false;
		}
		if (silent) return true;
		const beginEndStack = [];
		let next = start;
		let lastLine;
		let found = false;
		outer: for (; !found; next++) {
			if (next >= end) break;
			const pos = state.bMarks[next] + state.tShift[next];
			const max = state.eMarks[next];
			if (pos < max && state.tShift[next] < state.blkIndent) break;
			const line = state.src.slice(pos, max);
			for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) if (match[1] === "\\begin") beginEndStack.push(match[2].trim());
			else if (match[1] === "\\end") {
				beginEndStack.pop();
				if (!beginEndStack.length) {
					lastLine = state.src.slice(pos, max);
					found = true;
					break outer;
				}
			}
		}
		state.line = next + 1;
		const token = state.push("math_block", "math", 0);
		token.block = true;
		token.content = (state.getLines(start, next, state.tShift[start], true) + (lastLine ?? "")).trim();
		token.map = [start, state.line];
		token.markup = "$$";
		return true;
	}
	function inlineMathBlock(state, silent) {
		var start, match, token, res, pos;
		if (state.src.slice(state.pos, state.pos + 2) !== "$$") return false;
		res = isValidBlockDelim(state, state.pos);
		if (!res.can_open) {
			if (!silent) state.pending += "$$";
			state.pos += 2;
			return true;
		}
		start = state.pos + 2;
		match = start;
		while ((match = state.src.indexOf("$$", match)) !== -1) {
			pos = match - 1;
			while (state.src[pos] === "\\") pos -= 1;
			if ((match - pos) % 2 == 1) break;
			match += 2;
		}
		if (match === -1) {
			if (!silent) state.pending += "$$";
			state.pos = start;
			return true;
		}
		if (match - start === 0) {
			if (!silent) state.pending += "$$$$";
			state.pos = start + 2;
			return true;
		}
		res = isValidBlockDelim(state, match);
		if (!res.can_close) {
			if (!silent) state.pending += "$$";
			state.pos = start;
			return true;
		}
		if (!silent) {
			token = state.push("math_block", "math", 0);
			token.block = true;
			token.markup = "$$";
			token.content = state.src.slice(start, match);
		}
		state.pos = match + 2;
		return true;
	}
	function inlineBareBlock(state, silent) {
		const text = state.src.slice(state.pos);
		if (!/^\n\\begin/.test(text)) return false;
		state.pos += 1;
		if (silent) return true;
		const lines = text.split(/\n/g).slice(1);
		let foundLine;
		const beginEndStack = [];
		outer: for (var i = 0; i < lines.length; ++i) {
			const line = lines[i];
			for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) if (match[1] === "\\begin") beginEndStack.push(match[2].trim());
			else if (match[1] === "\\end") {
				beginEndStack.pop();
				if (!beginEndStack.length) {
					foundLine = i;
					break outer;
				}
			}
		}
		if (typeof foundLine === "undefined") return false;
		const endIndex = lines.slice(0, foundLine + 1).reduce((p, c) => p + c.length, 0) + foundLine + 1;
		const token = state.push("math_inline_bare_block", "math", 0);
		token.block = true;
		token.markup = "$$";
		token.content = text.slice(1, endIndex);
		state.pos = state.pos + endIndex;
		return true;
	}
	function handleMathInHtml(state, mathType, mathMarkup, mathRegex) {
		const tokens = state.tokens;
		for (let index = tokens.length - 1; index >= 0; index--) {
			const currentToken = tokens[index];
			const newTokens = [];
			if (currentToken.type !== "html_block") continue;
			const content$2 = currentToken.content;
			for (const match of content$2.matchAll(mathRegex)) {
				if (!match.groups) continue;
				const html_before_math = match.groups.html_before_math;
				const math = match.groups.math;
				const html_after_math = match.groups.html_after_math;
				if (html_before_math) newTokens.push({
					...currentToken,
					type: "html_block",
					map: null,
					content: html_before_math
				});
				if (math) newTokens.push({
					...currentToken,
					type: mathType,
					map: null,
					content: math,
					markup: mathMarkup,
					block: true,
					tag: "math"
				});
				if (html_after_math) newTokens.push({
					...currentToken,
					type: "html_block",
					map: null,
					content: html_after_math
				});
			}
			if (newTokens.length > 0) tokens.splice(index, 1, ...newTokens);
		}
		return true;
	}
	function escapeHtml(unsafe) {
		return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
	}
	function default_1(md, options) {
		const katex = options?.katex ?? katex_1.default;
		const enableBareBlocks = options?.enableBareBlocks;
		const enableMathBlockInHtml = options?.enableMathBlockInHtml;
		const enableMathInlineInHtml = options?.enableMathInlineInHtml;
		const enableFencedBlocks = options?.enableFencedBlocks;
		md.inline.ruler.after("escape", "math_inline", inlineMath);
		md.inline.ruler.after("escape", "math_inline_block", inlineMathBlock);
		if (enableBareBlocks) md.inline.ruler.before("text", "math_inline_bare_block", inlineBareBlock);
		md.block.ruler.after("blockquote", "math_block", (state, start, end, silent) => {
			if (enableBareBlocks && blockBareMath(state, start, end, silent)) return true;
			return blockMath(state, start, end, silent);
		}, { alt: [
			"paragraph",
			"reference",
			"blockquote",
			"list"
		] });
		const math_block_within_html_regex = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm;
		const math_inline_within_html_regex = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;
		if (enableMathBlockInHtml) md.core.ruler.push("math_block_in_html_block", (state) => {
			return handleMathInHtml(state, "math_block", "$$", math_block_within_html_regex);
		});
		if (enableMathInlineInHtml) md.core.ruler.push("math_inline_in_html_block", (state) => {
			return handleMathInHtml(state, "math_inline", "$", math_inline_within_html_regex);
		});
		const katexInline = (latex) => {
			const displayMode = /\\begin\{(align|equation|gather|cd|alignat)\}/gi.test(latex);
			try {
				return katex.renderToString(latex, {
					...options,
					displayMode
				});
			} catch (error) {
				if (options?.throwOnError) console.log(error);
				return `<span class="katex-error" title="${escapeHtml(latex)}">${escapeHtml(error + "")}</span>`;
			}
		};
		const inlineRenderer = (tokens, idx) => {
			const content$2 = tokens[idx].content;
			return katexInline(content$2.length > 2 && content$2[0] === "`" && content$2[content$2.length - 1] === "`" ? content$2.slice(1, -1) : content$2);
		};
		const katexBlockRenderer = (latex) => {
			try {
				return `<p class="katex-block">${katex.renderToString(latex, {
					...options,
					displayMode: true
				})}</p>`;
			} catch (error) {
				if (options?.throwOnError) console.log(error);
				return `<p class="katex-block katex-error" title="${escapeHtml(latex)}">${escapeHtml(error + "")}</p>`;
			}
		};
		const blockRenderer = (tokens, idx) => {
			return katexBlockRenderer(tokens[idx].content) + "\n";
		};
		md.renderer.rules.math_inline = inlineRenderer;
		md.renderer.rules.math_inline_block = blockRenderer;
		md.renderer.rules.math_inline_bare_block = blockRenderer;
		md.renderer.rules.math_block = blockRenderer;
		if (enableFencedBlocks) {
			const mathLanguageId = "math";
			const originalFenceRenderer = md.renderer.rules.fence;
			md.renderer.rules.fence = function(tokens, idx, options$1, env, self$1) {
				const token = tokens[idx];
				if (token.info.trim().toLowerCase() === mathLanguageId && enableFencedBlocks) return katexBlockRenderer(token.content) + "\n";
				else return originalFenceRenderer?.call(this, tokens, idx, options$1, env, self$1) || "";
			};
		}
	}
	exports.default = default_1;
})))(), 1);
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
				promise: Promise.all([__vitePreload(() => import("./es-Datxe7JU.js"), __vite__mapDeps([0,1,2])), __vitePreload(() => import("./languageModules-CN487Om9.js"), __vite__mapDeps([3,4]))])
			};
			const [hljs, languages] = await asyncImport.promise;
			asyncImport = { status: "done" };
			hljsInstance = hljs.default.newInstance();
			for (const [lang, module$1] of Object.entries(languages)) hljsInstance.registerLanguage(lang, module$1);
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
				vueMarkdownItInstance.renderer.rules.fence = (tokens, idx, options$1, env, self$1) => {
					const defaultRendered = defaultFenceRenderer?.(tokens, idx, options$1, env, self$1) ?? self$1.renderToken(tokens, idx, options$1);
					const content$2 = tokens[idx]?.content.trim();
					if (content$2) codeBlockContents.value?.set(String(idx), content$2);
					return defaultRendered.replace("<pre>", `<pre><div data-markdown-token-idx="${idx}" class="${codeBlockActionsClassName}"></div>`);
				};
			};
			const tablePlugin = (vueMarkdownItInstance) => {
				const defaultTableOpenRenderer = vueMarkdownItInstance.renderer.rules.table_open;
				const defaultTableCloseRenderer = vueMarkdownItInstance.renderer.rules.table_close;
				vueMarkdownItInstance.renderer.rules.table_open = (tokens, idx, options$1, env, self$1) => {
					return (defaultTableOpenRenderer?.(tokens, idx, options$1, env, self$1) ?? self$1.renderToken(tokens, idx, options$1)).replace("<table", `<div class="${tableContainerClassName}"><table`);
				};
				vueMarkdownItInstance.renderer.rules.table_close = (tokens, idx, options$1, env, self$1) => {
					return (defaultTableCloseRenderer?.(tokens, idx, options$1, env, self$1) ?? self$1.renderToken(tokens, idx, options$1)).replace("</table>", "</table></div>");
				};
			};
			const mathPlugin = (vueMarkdownItInstance) => {
				const katexPlugin = import_dist.default.default ?? import_dist.default;
				vueMarkdownItInstance.use(katexPlugin, { throwOnError: false });
			};
			return [
				linksNewTabPlugin,
				codeBlockPlugin,
				tablePlugin,
				mathPlugin
			];
		}),
		codeBlockContents
	};
}
var ChatButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatButtons",
	props: {
		buttons: {},
		isDisabled: { type: Boolean }
	},
	setup(__props) {
		const clickedButtonIndex = ref(null);
		const isLoading = ref(false);
		async function onClick(link, index) {
			if (__props.isDisabled || clickedButtonIndex.value !== null || isLoading.value) return;
			isLoading.value = true;
			try {
				if ((await fetch(link)).ok) clickedButtonIndex.value = index;
			} finally {
				isLoading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.buttons) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button$1, index) => {
				return openBlock(), createElementBlock(Fragment, { key: button$1.link }, [clickedButtonIndex.value === null || index === clickedButtonIndex.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: button$1.type,
					disabled: __props.isDisabled || isLoading.value || clickedButtonIndex.value !== null,
					loading: isLoading.value && clickedButtonIndex.value === null,
					size: "small",
					onClick: ($event) => onClick(button$1.link, index)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(button$1.text), 1)]),
					_: 2
				}, 1032, [
					"type",
					"disabled",
					"loading",
					"onClick"
				])) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var ChatButtons_vue_vue_type_style_index_0_lang_module_default = { buttons: "_buttons_f542l_125" };
var ChatButtons_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatButtons_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = { key: 2 };
var ChatMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMarkdownChunk",
	props: {
		source: {},
		singlePre: {
			type: Boolean,
			default: false
		},
		isButtonsDisabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["openArtifact"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const styles = useCssModule();
		const markdown$1 = useChatHubMarkdownOptions(styles.codeBlockActions, styles.tableContainer);
		const hoveredCodeBlockActions = ref(null);
		function getHoveredCodeBlockContent() {
			const idx = hoveredCodeBlockActions.value?.getAttribute("data-markdown-token-idx");
			return idx ? markdown$1.codeBlockContents.value?.get(idx) : void 0;
		}
		function handleMouseMove(e) {
			const container$2 = e.target instanceof HTMLElement || e.target instanceof SVGElement ? e.target.closest("pre")?.querySelector(`.${styles.codeBlockActions}`) : null;
			hoveredCodeBlockActions.value = container$2 instanceof HTMLElement ? container$2 : null;
		}
		function handleMouseLeave() {
			hoveredCodeBlockActions.value = null;
		}
		__expose({
			hoveredCodeBlockActions,
			getHoveredCodeBlockContent
		});
		return (_ctx, _cache) => {
			return __props.source.type === "text" ? (openBlock(), createBlock(unref(VueMarkdown_default), {
				key: unref(markdown$1).forceReRenderKey.value,
				source: __props.source.content,
				class: normalizeClass([_ctx.$style.chatMessageMarkdown, { [_ctx.$style.singlePre]: __props.singlePre }]),
				options: unref(markdown$1).options,
				plugins: unref(markdown$1).plugins.value,
				onMousemove: handleMouseMove,
				onMouseleave: handleMouseLeave
			}, null, 8, [
				"source",
				"class",
				"options",
				"plugins"
			])) : __props.source.type === "with-buttons" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.container)
			}, [(openBlock(), createBlock(unref(VueMarkdown_default), {
				key: unref(markdown$1).forceReRenderKey.value,
				source: __props.source.content,
				class: normalizeClass(_ctx.$style.chatMessageMarkdown),
				options: unref(markdown$1).options,
				plugins: unref(markdown$1).plugins.value,
				onMousemove: handleMouseMove,
				onMouseleave: handleMouseLeave
			}, null, 8, [
				"source",
				"class",
				"options",
				"plugins"
			])), createVNode(ChatButtons_default, {
				buttons: __props.source.buttons,
				"is-disabled": __props.isButtonsDisabled
			}, null, 8, ["buttons", "is-disabled"])], 2)) : __props.source.type === "hidden" ? (openBlock(), createElementBlock("div", _hoisted_1$3)) : __props.source.type === "artifact-edit" && !__props.source.isIncomplete ? (openBlock(), createElementBlock("button", {
				key: 3,
				class: normalizeClass(_ctx.$style.command),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("openArtifact", __props.source.command.title))
			}, [_cache[2] || (_cache[2] = createTextVNode(" Updated ", -1)), createBaseVNode("b", null, toDisplayString(__props.source.command.title), 1)], 2)) : __props.source.type === "artifact-create" && !__props.source.isIncomplete ? (openBlock(), createElementBlock("button", {
				key: 4,
				class: normalizeClass(_ctx.$style.command),
				onClick: _cache[1] || (_cache[1] = ($event) => emit("openArtifact", __props.source.command.title))
			}, [_cache[3] || (_cache[3] = createTextVNode(" Created ", -1)), createBaseVNode("b", null, toDisplayString(__props.source.command.title), 1)], 2)) : createCommentVNode("", true);
		};
	}
});
var ChatMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_bryyw_125",
	chatMessageMarkdown: "_chatMessageMarkdown_bryyw_133",
	codeBlockActions: "_codeBlockActions_bryyw_245",
	singlePre: "_singlePre_bryyw_261",
	tableContainer: "_tableContainer_bryyw_320",
	command: "_command_bryyw_408"
};
var ChatMarkdownChunk_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = ["data-message-id", "data-test-id"];
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
		minHeight: {}
	},
	emits: [
		"startEdit",
		"cancelEdit",
		"update",
		"regenerate",
		"switchAlternative",
		"openArtifact"
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
		const markdownChunkRefs = useTemplateRef("markdownChunk");
		const activeCodeBlockTeleport = computed(() => {
			const refs = markdownChunkRefs.value;
			if (!refs || !Array.isArray(refs)) return null;
			for (const chunkRef of refs) if (chunkRef?.hoveredCodeBlockActions) {
				const content$2 = chunkRef.getHoveredCodeBlockContent();
				if (content$2) return {
					target: chunkRef.hoveredCodeBlockActions,
					content: content$2
				};
			}
			return null;
		});
		const messageChunks = computed(() => __props.message.content.flatMap((chunk, index, arr) => {
			if (chunk.type === "hidden") return [];
			if (chunk.type === "with-buttons") return [chunk];
			if (chunk.type === "artifact-create" || chunk.type === "artifact-edit") {
				const prev = arr[index - 1];
				return prev?.type === chunk.type && prev.command.title === chunk.command.title ? [] : [chunk];
			}
			if (__props.message.status === "error" && !chunk.content) return [{
				type: "text",
				content: i18n.baseText("chatHub.message.error.unknown")
			}];
			return splitMarkdownIntoChunks(chunk.content).flatMap((content$2) => content$2.trim() === "" ? [] : [{
				type: "text",
				content: content$2
			}]);
		}));
		const text = computed(() => messageChunks.value.flatMap((chunk) => chunk.type === "text" ? [chunk.content] : []).join(""));
		const speech = useSpeechSynthesis(text, {
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
			return __props.message.status === "success" && text.value === "" && !__props.message.content.some((c) => c.type === "with-buttons");
		});
		const shouldShowTypingIndicator = computed(() => __props.message.status === "running");
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
			editedText.value = editing ? text.value : "";
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
				style: normalizeStyle({ minHeight: __props.minHeight ? `${__props.minHeight}px` : void 0 }),
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
				createVNode(unref(Input_default), {
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
			}), 128))], 2)) : createCommentVNode("", true), __props.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(text.value), 1)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.markdownContent)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(messageChunks.value, (chunk, index) => {
				return openBlock(), createBlock(ChatMarkdownChunk_default, {
					ref_for: true,
					ref: "markdownChunk",
					key: index,
					source: chunk,
					"is-buttons-disabled": __props.message.status !== "waiting",
					onOpenArtifact: _cache[1] || (_cache[1] = ($event) => emit("openArtifact", $event))
				}, null, 8, ["source", "is-buttons-disabled"]);
			}), 128)), activeCodeBlockTeleport.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: activeCodeBlockTeleport.value.target
			}, [createVNode(CopyButton_default, { content: activeCodeBlockTeleport.value.content }, null, 8, ["content"])], 8, ["to"])) : createCommentVNode("", true)], 2))], 2), shouldShowTypingIndicator.value ? (openBlock(), createBlock(ChatTypingIndicator_default, {
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
			]))], 64))], 2)], 14, _hoisted_1$2)) : createCommentVNode("", true);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_31lfg_125",
	markdownContent: "_markdownContent_31lfg_130",
	codeBlockActions: "_codeBlockActions_31lfg_137",
	avatar: "_avatar_31lfg_141",
	compact: "_compact_31lfg_154",
	content: "_content_31lfg_160",
	actions: "_actions_31lfg_166",
	attachments: "_attachments_31lfg_172",
	chatMessage: "_chatMessage_31lfg_177",
	user: "_user_31lfg_190",
	errorMessage: "_errorMessage_31lfg_201",
	editContainer: "_editContainer_31lfg_228",
	textarea: "_textarea_31lfg_243",
	fileInput: "_fileInput_31lfg_256",
	editFooter: "_editFooter_31lfg_260",
	editActions: "_editActions_31lfg_266",
	typingIndicator: "_typingIndicator_31lfg_272"
};
var ChatMessage_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["accept"];
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
			appendText: (text) => {
				message$1.value += text;
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
				}, null, 42, _hoisted_1$1),
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
					createVNode(unref(Input_default), {
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
	prompt: "_prompt_fcmhb_125",
	inputWrap: "_inputWrap_fcmhb_130",
	callout: "_callout_fcmhb_138",
	closeButton: "_closeButton_fcmhb_145",
	fileInput: "_fileInput_fcmhb_149",
	inputWrapper: "_inputWrapper_fcmhb_153",
	calloutVisible: "_calloutVisible_fcmhb_178",
	footer: "_footer_fcmhb_183",
	tools: "_tools_fcmhb_190",
	toolsButton: "_toolsButton_fcmhb_194",
	iconStack: "_iconStack_fcmhb_199",
	icon: "_icon_fcmhb_199",
	iconOverlap: "_iconOverlap_fcmhb_212",
	iconFallback: "_iconFallback_fcmhb_216",
	actions: "_actions_fcmhb_222",
	attachments: "_attachments_fcmhb_231",
	recording: "_recording_fcmhb_237",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_fcmhb_1"
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
function useChatPushHandler() {
	const pushStore = usePushConnectionStore();
	const chatStore = useChatStore();
	const activeStreams = ref(/* @__PURE__ */ new Map());
	const removeEventListener = ref(null);
	const stopReconnectWatcher = ref(null);
	function handleExecutionBegin(event) {
		const { sessionId } = event.data;
		chatStore.handleWebSocketExecutionBegin({ sessionId });
	}
	function handleExecutionEnd(event) {
		const { sessionId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketExecutionEnd({
			sessionId,
			status
		});
	}
	function handleStreamBegin(event) {
		const { sessionId, messageId, sequenceNumber, previousMessageId, retryOfMessageId } = event.data;
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber: sequenceNumber,
			content: ""
		});
		if (chatStore.streaming?.sessionId === sessionId) {
			if (chatStore.streaming.messageId !== messageId) chatStore.streaming.messageId = messageId;
		}
		chatStore.handleWebSocketStreamBegin({
			sessionId,
			messageId,
			previousMessageId,
			retryOfMessageId
		});
	}
	function handleStreamChunk(event) {
		const { sessionId, messageId, sequenceNumber, content: content$2 } = event.data;
		const streamState = activeStreams.value.get(sessionId);
		if (!streamState || streamState.messageId !== messageId) return;
		if (sequenceNumber <= streamState.lastSequenceNumber) return;
		streamState.lastSequenceNumber = sequenceNumber;
		streamState.content += content$2;
		chatStore.handleWebSocketStreamChunk({
			sessionId,
			messageId,
			content: content$2
		});
	}
	function handleStreamEnd(event) {
		const { sessionId, messageId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamEnd({
			sessionId,
			messageId,
			status
		});
	}
	function handleStreamError(event) {
		const { sessionId, messageId, error } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamError({
			sessionId,
			messageId,
			error
		});
	}
	function handleHumanMessageCreated(event) {
		chatStore.handleHumanMessageCreated(event.data);
	}
	function handleMessageEdited(event) {
		chatStore.handleMessageEdited(event.data);
	}
	async function handleReconnect() {
		for (const [sessionId, streamState] of activeStreams.value.entries()) {
			const result = await chatStore.reconnectToStream(sessionId, streamState.lastSequenceNumber);
			if (result?.pendingChunks?.length) {
				for (const chunk of result.pendingChunks) if (chunk.sequenceNumber > streamState.lastSequenceNumber) streamState.lastSequenceNumber = chunk.sequenceNumber;
			}
		}
	}
	function processMessage(event) {
		switch (event.type) {
			case "chatHubHumanMessageCreated":
				handleHumanMessageCreated(event);
				break;
			case "chatHubMessageEdited":
				handleMessageEdited(event);
				break;
			case "chatHubExecutionBegin":
				handleExecutionBegin(event);
				break;
			case "chatHubExecutionEnd":
				handleExecutionEnd(event);
				break;
			case "chatHubStreamBegin":
				handleStreamBegin(event);
				break;
			case "chatHubStreamChunk":
				handleStreamChunk(event);
				break;
			case "chatHubStreamEnd":
				handleStreamEnd(event);
				break;
			case "chatHubStreamError":
				handleStreamError(event);
				break;
		}
	}
	function initialize() {
		if (removeEventListener.value) return;
		pushStore.pushConnect();
		removeEventListener.value = pushStore.addEventListener(processMessage);
		stopReconnectWatcher.value = watch(() => pushStore.isConnected, async (isConnected, wasConnected) => {
			if (isConnected && !wasConnected) await handleReconnect();
		});
	}
	function terminate() {
		if (stopReconnectWatcher.value) {
			stopReconnectWatcher.value();
			stopReconnectWatcher.value = null;
		}
		if (removeEventListener.value) {
			removeEventListener.value();
			removeEventListener.value = null;
		}
		activeStreams.value.clear();
		pushStore.pushDisconnect();
	}
	function getStreamState(sessionId) {
		return activeStreams.value.get(sessionId);
	}
	function hasActiveStream(sessionId) {
		return !!activeStreams.value.get(sessionId);
	}
	function initializeStreamState(sessionId, messageId, lastSequenceNumber) {
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber,
			content: ""
		});
	}
	function getLastSequenceNumber(sessionId) {
		return activeStreams.value.get(sessionId)?.lastSequenceNumber ?? 0;
	}
	return {
		activeStreams,
		initialize,
		terminate,
		getStreamState,
		hasActiveStream,
		getLastSequenceNumber,
		initializeStreamState
	};
}
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
		const markdownContent$1 = computed(() => ({
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
				type: "tertiary",
				text: "",
				icon: "download",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("download"))
			}), createVNode(unref(N8nIconButton_default), {
				type: "tertiary",
				text: "",
				icon: "x",
				onClick: _cache[2] || (_cache[2] = ($event) => emit("close"))
			})], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [isHtml.value ? (openBlock(), createElementBlock("iframe", {
				key: 0,
				srcdoc: selectedArtifact.value?.content,
				class: normalizeClass(_ctx.$style.iframe),
				sandbox: "",
				title: selectedArtifact.value?.title
			}, null, 10, _hoisted_1)) : markdownContent$1.value ? (openBlock(), createBlock(ChatMarkdownChunk_default, {
				key: 1,
				ref: "markdownChunk",
				class: normalizeClass(isMarkdown.value ? _ctx.$style.markdown : ""),
				"single-pre": !isMarkdown.value,
				source: markdownContent$1.value
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
function useChatArtifacts(container$2, chatMessages) {
	const isViewerCollapsed = ref(false);
	const selectedIndex = ref(0);
	const allArtifacts = computed(() => collectChatArtifacts(chatMessages.value.flatMap((message$1) => message$1.content)));
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
		const chatPushHandler = useChatPushHandler();
		onBeforeMount(() => {
			chatPushHandler.initialize();
		});
		onBeforeUnmount(() => {
			chatPushHandler.terminate();
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
		const isResponding = computed(() => chatStore.isResponding(sessionId.value));
		const isNewSession$1 = computed(() => sessionId.value !== route.params.id);
		const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
		const scrollContainerSize = useElementSize(scrollContainerRef);
		const currentConversation = computed(() => sessionId.value ? chatStore.sessions.byId[sessionId.value] : void 0);
		const currentConversationTitle = computed(() => currentConversation.value?.title);
		const canSelectTools = computed(() => selectedModel.value?.model.provider === "custom-agent" || !!selectedModel.value?.metadata.capabilities.functionCalling);
		const hadConversationBefore = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_HAD_CONVERSATION_BEFORE(usersStore.currentUserId ?? "anonymous"), false);
		const hasSession = computed(() => (chatStore.sessions.ids?.length ?? 0) > 0);
		const showWelcomeScreen = computed(() => {
			if (hadConversationBefore.value || welcomeScreenDismissed.value) return false;
			if (route.query.workflowId || route.query.agentId) return false;
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
		const artifacts = useChatArtifacts(chatLayoutElement, chatMessages);
		const isMainPanelNarrow$1 = computed(() => scrollContainerSize.width.value < 600);
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
			if (isWaitingForApproval(chatStore.lastMessage(sessionId.value))) return "waitingForApproval";
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
		useChatInputFocus(inputRef, { disabled: computed(() => showWelcomeScreen.value === true || messagingState.value !== "idle") });
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
				const reconnectResult = await chatStore.reconnectToStream(id, 0);
				if (reconnectResult?.hasActiveStream && reconnectResult.currentMessageId) chatPushHandler.initializeStreamState(id, reconnectResult.currentMessageId, reconnectResult.lastSequenceNumber);
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
		async function handleEditMessage(content$2, keptAttachmentIndices, newFiles) {
			if (!editingMessageId.value || isResponding.value || !selectedModel.value || !credentialsForSelectedProvider.value) return;
			await chatStore.editMessage(sessionId.value, editingMessageId.value, content$2, selectedModel.value, credentialsForSelectedProvider.value, keptAttachmentIndices, newFiles);
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
				ref: "chatLayout",
				class: normalizeClass({
					[_ctx.$style.chatLayout]: true,
					[_ctx.$style.isNewSession]: isNewSession$1.value,
					[_ctx.$style.isExistingSession]: !isNewSession$1.value,
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
						style: normalizeStyle({ width: unref(artifacts).isViewerVisible.value ? `${unref(artifacts).viewerSize.value}px` : "100%" }),
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
								"ready-to-show-model-selector": isNewSession$1.value || !!currentConversation.value,
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
										compact: isMainPanelNarrow$1.value,
										"is-editing": editingMessageId.value === message$1.id,
										"is-edit-submitting": unref(chatStore).streaming?.revisionOfMessageId === message$1.id,
										"has-session-streaming": isResponding.value,
										"cached-agent-display-name": selectedModel.value?.name ?? null,
										"cached-agent-icon": selectedModel.value?.icon ?? null,
										"min-height": didSubmitInCurrentSession.value && message$1.type === "ai" && index === chatMessages.value.length - 1 && scrollContainerRef.value ? scrollContainerRef.value.offsetHeight - 30 - 200 : void 0,
										onStartEdit: ($event) => handleStartEditMessage(message$1.id),
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
										"min-height",
										"onStartEdit",
										"onOpenArtifact"
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
								key: 1,
								"show-welcome-screen": showWelcomeScreen.value,
								onStartNewChat: _cache[1] || (_cache[1] = ($event) => {
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
	chatLayout: "_chatLayout_s1z4d_125",
	hasArtifact: "_hasArtifact_s1z4d_130",
	mainContent: "_mainContent_s1z4d_130",
	mainContentResizer: "_mainContentResizer_s1z4d_138",
	artifactViewer: "_artifactViewer_s1z4d_151",
	isResizing: "_isResizing_s1z4d_156",
	scrollArea: "_scrollArea_s1z4d_161",
	scrollable: "_scrollable_s1z4d_166",
	isNewSession: "_isNewSession_s1z4d_175",
	header: "_header_s1z4d_179",
	messageList: "_messageList_s1z4d_185",
	promptContainer: "_promptContainer_s1z4d_195",
	isMobileDevice: "_isMobileDevice_s1z4d_199",
	isExistingSession: "_isExistingSession_s1z4d_199",
	prompt: "_prompt_s1z4d_195",
	isMainPanelNarrow: "_isMainPanelNarrow_s1z4d_214",
	scrollToBottomButton: "_scrollToBottomButton_s1z4d_219",
	isDraggingFile: "_isDraggingFile_s1z4d_227",
	dropOverlay: "_dropOverlay_s1z4d_231"
};
var ChatView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatView_default as default };
