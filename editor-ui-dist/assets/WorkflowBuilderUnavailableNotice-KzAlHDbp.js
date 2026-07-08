import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { Ka as N8nCallout_default, Wi as N8nIconButton_default, X as N8nTag_default, Ya as N8nIcon_default, gt as useRoute, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { n as onClickOutside } from "./core-CxAuVuwP.js";
import { Sn as useSourceControlStore } from "./workflowDocument.store-B_SrjkP6.js";
import { p as useTelemetry } from "./users.store-DlXqF6lz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DtWPu5uu.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BQRQJUiK.js";
import { n as useInstanceAiStore } from "./instanceAi.store-CaacBsFp.js";
import { t as convertFileToBinaryData } from "./fileUtils-BYFIKUi3.js";
import { n as CreditsSettingsDropdown_default } from "./CreditWarningBanner-F_7OVqYy.js";
import { t as ChatFile_default } from "./ChatFile-BtWHDVBT.js";
import { t as ChatInputBase_default } from "./ChatInputBase-CGCzgHh3.js";
import { n as useSidebarState } from "./instanceAiLayout-BrRQjZTw.js";
//#region src/features/ai/instanceAi/emptyStateSuggestions.ts
var isPromptSuggestion = (suggestion) => suggestion.type === "prompt";
var isMenuSuggestion = (suggestion) => suggestion.type === "menu";
var INSTANCE_AI_EMPTY_STATE_SUGGESTIONS = [
	{
		type: "prompt",
		id: "build-workflow",
		icon: "workflow",
		labelKey: "instanceAi.emptyState.suggestions.buildWorkflow.label",
		promptKey: "instanceAi.emptyState.suggestions.buildWorkflow.prompt"
	},
	{
		type: "prompt",
		id: "build-agent",
		icon: "bot",
		labelKey: "instanceAi.emptyState.suggestions.buildAgent.label",
		promptKey: "instanceAi.emptyState.suggestions.buildAgent.prompt"
	},
	{
		type: "prompt",
		id: "find-automation-ideas",
		icon: "lightbulb",
		labelKey: "instanceAi.emptyState.suggestions.findAutomationIdeas.label",
		promptKey: "instanceAi.emptyState.suggestions.findAutomationIdeas.prompt"
	},
	{
		type: "menu",
		id: "quick-examples",
		icon: "zap",
		labelKey: "instanceAi.emptyState.suggestions.quickExamples.label",
		examples: [
			{
				id: "monitor-competitors",
				labelKey: "instanceAi.emptyState.quickExamples.monitorCompetitors.label",
				promptKey: "instanceAi.emptyState.quickExamples.monitorCompetitors.prompt"
			},
			{
				id: "automate-inbox",
				labelKey: "instanceAi.emptyState.quickExamples.automateInbox.label",
				promptKey: "instanceAi.emptyState.quickExamples.automateInbox.prompt"
			},
			{
				id: "answer-support-requests",
				labelKey: "instanceAi.emptyState.quickExamples.answerSupportRequests.label",
				promptKey: "instanceAi.emptyState.quickExamples.answerSupportRequests.prompt"
			},
			{
				id: "analyse-ad-spend",
				labelKey: "instanceAi.emptyState.quickExamples.analyseAdSpend.label",
				promptKey: "instanceAi.emptyState.quickExamples.analyseAdSpend.prompt"
			},
			{
				id: "get-news-summary",
				labelKey: "instanceAi.emptyState.quickExamples.getNewsSummary.label",
				promptKey: "instanceAi.emptyState.quickExamples.getNewsSummary.prompt"
			}
		]
	}
];
//#endregion
//#region src/features/ai/instanceAi/composables/useCreditWarningBanner.ts
/**
* Shared credit-warning banner state used by every Instance AI view leaf.
* The banner becomes dismissible the moment credits drop below the warning
* threshold; subsequent push updates within the low-credits zone don't
* re-show a banner the user already dismissed.
*/
function useCreditWarningBanner(isLowCredits) {
	const dismissed = ref(false);
	watch(() => toValue(isLowCredits), (isLow, wasLow) => {
		if (isLow && !wasLow) dismissed.value = false;
	});
	const visible = computed(() => toValue(isLowCredits) && !dismissed.value);
	function dismiss() {
		dismissed.value = true;
	}
	return {
		visible,
		dismiss
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiPromptSuggestions.telemetry.ts
var shownImpressionKeys = /* @__PURE__ */ new Set();
var resolveSuggestionCatalogVersion = (context) => context.suggestionCatalogVersion ?? "v1";
var createBasePayload = (context) => {
	const payload = {
		...context.telemetryPayload,
		suggestion_catalog_version: resolveSuggestionCatalogVersion(context)
	};
	if (context.threadId) payload.thread_id = context.threadId;
	return payload;
};
function createInstanceAiPromptSuggestionsTelemetry(telemetry, shownKeys = shownImpressionKeys) {
	return {
		trackSuggestionsShown(context) {
			const impressionKey = (context.threadId || "empty-state") + ":" + resolveSuggestionCatalogVersion(context);
			if (shownKeys.has(impressionKey)) return;
			shownKeys.add(impressionKey);
			telemetry.track("Instance AI prompt suggestions shown", createBasePayload(context));
		},
		trackQuickExamplesOpened(context) {
			telemetry.track("Instance AI quick examples opened", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				position: context.position
			});
		},
		trackSuggestionsCycled(context) {
			telemetry.track("Instance AI prompt suggestions cycled", {
				...context.telemetryPayload,
				suggestion_catalog_version: resolveSuggestionCatalogVersion(context),
				visible_suggestion_ids: context.visibleSuggestionIds,
				cycle_count: context.cycleCount
			});
		},
		trackSuggestionSelected(context) {
			telemetry.track("Instance AI prompt suggestion selected", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position
			});
		},
		trackSuggestionSubmitted(context) {
			telemetry.track("Instance AI prompt suggestion submitted", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position,
				prompt_modified: context.promptModified
			});
		}
	};
}
function useInstanceAiPromptSuggestionsTelemetry() {
	return createInstanceAiPromptSuggestionsTelemetry(useTelemetry());
}
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["src", "alt"];
var AttachmentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AttachmentPreview",
	props: {
		file: {},
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const loading = ref(true);
		const workflowAttachment = computed(() => props.attachment?.type === "workflow" ? props.attachment : void 0);
		const fileAttachment = computed(() => props.attachment?.type === "file" ? props.attachment : void 0);
		const mimeType = computed(() => props.file?.type ?? fileAttachment.value?.mimeType ?? "");
		const fileName = computed(() => props.file?.name ?? fileAttachment.value?.fileName ?? "");
		const isImage = computed(() => mimeType.value.startsWith("image/"));
		const objectUrl = computed(() => {
			if (props.file && isImage.value) return URL.createObjectURL(props.file);
			return null;
		});
		const thumbnailSrc = computed(() => {
			if (objectUrl.value) return objectUrl.value;
			if (fileAttachment.value && isImage.value) return `data:${fileAttachment.value.mimeType};base64,${fileAttachment.value.data}`;
			return null;
		});
		const fallbackFile = computed(() => {
			if (props.file) return props.file;
			if (fileAttachment.value) return new File([], fileAttachment.value.fileName, { type: fileAttachment.value.mimeType });
			return new File([], "unknown");
		});
		function handleLoad() {
			loading.value = false;
		}
		function handleRemove() {
			if (props.file) emit("remove", props.file);
		}
		onBeforeUnmount(() => {
			if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
		});
		return (_ctx, _cache) => {
			return workflowAttachment.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.resourceChip),
				"data-test-id": "attachment-preview-resource"
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "small"
				}),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.resourceName) }, toDisplayString(workflowAttachment.value.name ?? "Workflow"), 3),
				workflowAttachment.value.executionId ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "play",
					size: "xsmall"
				})) : createCommentVNode("", true)
			], 2)) : isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.thumbnailWrapper)
			}, [
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loadingSkeleton)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("img", {
					src: thumbnailSrc.value,
					alt: fileName.value,
					class: normalizeClass(_ctx.$style.thumbnail),
					onLoad: handleLoad
				}, null, 42, _hoisted_1$2),
				__props.isRemovable ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.removeBtn),
					"data-test-id": "attachment-preview-remove",
					onClick: withModifiers(handleRemove, ["stop"])
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)) : createCommentVNode("", true)
			], 2)) : (openBlock(), createBlock(ChatFile_default, {
				key: 2,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"]));
		};
	}
});
var AttachmentPreview_vue_vue_type_style_index_0_lang_module_default = {
	resourceChip: "_resourceChip_sbj4y_125",
	resourceName: "_resourceName_sbj4y_138",
	thumbnailWrapper: "_thumbnailWrapper_sbj4y_145",
	thumbnail: "_thumbnail_sbj4y_145",
	loadingSkeleton: "_loadingSkeleton_sbj4y_162",
	removeBtn: "_removeBtn_sbj4y_172"
};
var AttachmentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AttachmentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AttachmentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = [
	"data-test-id",
	"aria-expanded",
	"aria-haspopup",
	"disabled",
	"onClick",
	"onMouseenter",
	"onMouseleave",
	"onFocus",
	"onBlur"
];
var _hoisted_2 = ["aria-label", "disabled"];
var _hoisted_3 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestions",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"quick-examples-opened",
		"insert-suggestion"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const quickExamplesSuggestion = computed(() => props.suggestions.find(isMenuSuggestion) ?? null);
		const activePreviewPromptKey = ref(null);
		const isQuickExamplesOpen = ref(false);
		const rootRef = ref(null);
		let hoverTimer = null;
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function setPreview(promptKey) {
			activePreviewPromptKey.value = promptKey;
			emit("preview-change", promptKey);
		}
		function closeQuickExamples() {
			clearHoverTimer();
			isQuickExamplesOpen.value = false;
			setPreview(null);
		}
		function getTopLevelPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function getQuickExamplePosition(exampleId) {
			const quickExamples = quickExamplesSuggestion.value;
			if (!quickExamples) return 0;
			const index = quickExamples.examples.findIndex((example) => example.id === exampleId);
			return index >= 0 ? index + 1 : 0;
		}
		function insertSuggestion(payload) {
			if (props.disabled) return;
			closeQuickExamples();
			emit("insert-suggestion", payload);
		}
		function handleDocumentKeydown(event) {
			if (event.key === "Escape") closeQuickExamples();
		}
		onMounted(() => {
			document.addEventListener("keydown", handleDocumentKeydown);
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", handleDocumentKeydown);
			clearHoverTimer();
		});
		onClickOutside(rootRef, closeQuickExamples);
		function handleSuggestionEnter(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				setPreview(suggestion.promptKey);
			}, 300);
		}
		function handleSuggestionLeave(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionBlur(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionClick(suggestion) {
			clearHoverTimer();
			if (isPromptSuggestion(suggestion)) {
				insertSuggestion({
					promptKey: suggestion.promptKey,
					suggestionId: suggestion.id,
					suggestionKind: "prompt",
					position: getTopLevelPosition(suggestion.id)
				});
				return;
			}
			if (props.disabled) return;
			if (isQuickExamplesOpen.value) {
				closeQuickExamples();
				return;
			}
			setPreview(null);
			isQuickExamplesOpen.value = true;
			emit("quick-examples-opened", {
				suggestionId: suggestion.id,
				position: getTopLevelPosition(suggestion.id)
			});
		}
		function handleQuickExampleEnter(promptKey) {
			if (props.disabled) return;
			setPreview(promptKey);
		}
		function handleQuickExampleLeave() {
			if (props.disabled) return;
			setPreview(null);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.suggestions, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([
						_ctx.$style.suggestionButton,
						unref(isMenuSuggestion)(suggestion) && _ctx.$style.menuSuggestionButton,
						unref(isMenuSuggestion)(suggestion) && isQuickExamplesOpen.value && _ctx.$style.menuSuggestionButtonActive
					]),
					style: normalizeStyle({ animationDelay: `${index * 50}ms` }),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					"aria-expanded": unref(isMenuSuggestion)(suggestion) ? isQuickExamplesOpen.value : void 0,
					"aria-haspopup": unref(isMenuSuggestion)(suggestion) ? "dialog" : void 0,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: ($event) => handleSuggestionLeave(suggestion),
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: ($event) => handleSuggestionBlur(suggestion)
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: suggestion.icon,
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionIcon)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1),
					unref(isMenuSuggestion)(suggestion) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: isQuickExamplesOpen.value ? "chevron-up" : "chevron-down",
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionChevron)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)
				], 46, _hoisted_1$1);
			}), 128))], 2), createVNode(Transition, { name: "quick-examples-fade" }, {
				default: withCtx(() => [isQuickExamplesOpen.value && quickExamplesSuggestion.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.quickExamplesPanel),
					"data-test-id": "instance-ai-quick-examples-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: quickExamplesSuggestion.value.icon,
					size: 14
				}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(quickExamplesSuggestion.value.labelKey)), 1)], 2), createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.quickExamplesClose),
					"aria-label": unref(i18n).baseText("instanceAi.emptyState.quickExamples.close"),
					disabled: props.disabled,
					onClick: closeQuickExamples
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: 14
				})], 10, _hoisted_2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(quickExamplesSuggestion.value.examples, (example) => {
					return openBlock(), createElementBlock("button", {
						key: example.id,
						type: "button",
						class: normalizeClass([_ctx.$style.quickExampleButton, activePreviewPromptKey.value === example.promptKey && _ctx.$style.quickExampleButtonActive]),
						"data-test-id": `instance-ai-quick-example-${example.id}`,
						disabled: props.disabled,
						onClick: ($event) => insertSuggestion({
							promptKey: example.promptKey,
							suggestionId: example.id,
							suggestionKind: "quick_example",
							position: getQuickExamplePosition(example.id)
						}),
						onMouseenter: ($event) => handleQuickExampleEnter(example.promptKey),
						onMouseleave: handleQuickExampleLeave,
						onFocus: ($event) => handleQuickExampleEnter(example.promptKey),
						onBlur: handleQuickExampleLeave
					}, toDisplayString(unref(i18n).baseText(example.labelKey)), 43, _hoisted_3);
				}), 128))], 2)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_146rc_135",
	suggestionRow: "_suggestionRow_146rc_140",
	suggestionButton: "_suggestionButton_146rc_148",
	suggestionSlideIn: "_suggestionSlideIn_146rc_1",
	menuSuggestionButton: "_menuSuggestionButton_146rc_178",
	menuSuggestionButtonActive: "_menuSuggestionButtonActive_146rc_182",
	suggestionIcon: "_suggestionIcon_146rc_189",
	suggestionChevron: "_suggestionChevron_146rc_198",
	quickExamplesPanel: "_quickExamplesPanel_146rc_203",
	quickExamplesHeader: "_quickExamplesHeader_146rc_214",
	quickExamplesTitle: "_quickExamplesTitle_146rc_223",
	quickExamplesClose: "_quickExamplesClose_146rc_232",
	quickExamplesList: "_quickExamplesList_146rc_251",
	quickExampleButton: "_quickExampleButton_146rc_257",
	quickExampleButtonActive: "_quickExampleButtonActive_146rc_274"
};
var InstanceAiPromptSuggestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["title", "aria-label"];
var DEFAULT_AUTOSIZE_ROWS = 3;
var DEFAULT_MAX_AUTOSIZE_ROWS = 6;
var TYPEWRITER_SPEED_MS = 9;
var InstanceAiInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiInput",
	props: {
		isStreaming: {
			type: Boolean,
			default: false
		},
		isSubmitting: {
			type: Boolean,
			default: false
		},
		isAwaitingConfirmation: {
			type: Boolean,
			default: false
		},
		isPlanEditMode: {
			type: Boolean,
			default: false
		},
		currentThreadId: { default: "" },
		amendContext: { default: null },
		contextualSuggestion: { default: null },
		suggestions: {},
		isWorkflowBuilderAvailable: {
			type: Boolean,
			default: true
		},
		suggestionsComponent: {},
		suggestionsComponentProps: {},
		suggestionCatalogVersion: {},
		suggestionTelemetryPayload: {},
		placeholderKey: {},
		previewPromptKey: { default: null },
		fixedRows: { default: null },
		submitLabel: { default: void 0 },
		submitActiveRequiresFocus: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"submit",
		"stop",
		"cancel-plan-edit",
		"workflow-preview",
		"content-change"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const SUGGESTIONS_TRANSITION_DURATION = {
			enter: 450,
			leave: 320
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const promptSuggestionsTelemetry = useInstanceAiPromptSuggestionsTelemetry();
		const inputText = ref("");
		const attachedFiles = ref([]);
		const chatInputRef = ref(null);
		const previewPrompt = ref(null);
		const selectedSuggestionDraft = ref(null);
		const typedPreview = ref("");
		let typewriterTimer = null;
		function stopTypewriter() {
			if (typewriterTimer) {
				clearInterval(typewriterTimer);
				typewriterTimer = null;
			}
		}
		watch(() => props.previewPromptKey, (key) => {
			stopTypewriter();
			if (!key) {
				typedPreview.value = "";
				return;
			}
			const full = i18n.baseText(key);
			typedPreview.value = "";
			let i = 0;
			typewriterTimer = setInterval(() => {
				i += 1;
				typedPreview.value = full.slice(0, i);
				if (i >= full.length) stopTypewriter();
			}, TYPEWRITER_SPEED_MS);
		}, { immediate: true });
		onBeforeUnmount(stopTypewriter);
		function focus() {
			chatInputRef.value?.focus();
		}
		function appendText(text) {
			inputText.value += text;
		}
		__expose({
			focus,
			appendText,
			insertSuggestion: handleSuggestionInsert,
			submitSuggestion
		});
		const isBusy = computed(() => props.isPlanEditMode ? props.isSubmitting : props.isStreaming || props.isSubmitting);
		const hasNonWhitespaceDraftText = computed(() => inputText.value.trim().length > 0);
		const isInputVisuallyEmpty = computed(() => inputText.value.length === 0);
		const hasAttachments = computed(() => attachedFiles.value.length > 0);
		const isComposerDirty = computed(() => hasNonWhitespaceDraftText.value || hasAttachments.value);
		watch(isComposerDirty, (hasContent) => emit("content-change", hasContent));
		const isGatedBySetup = computed(() => props.isAwaitingConfirmation || !props.isWorkflowBuilderAvailable);
		const canSubmit = computed(() => isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const canShowSuggestions = computed(() => Boolean(props.suggestions?.length) && !props.isPlanEditMode && !isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const resolvedSuggestionsComponent = computed(() => props.suggestionsComponent ?? InstanceAiPromptSuggestions_default);
		const resolvedSuggestionCatalogVersion = computed(() => props.suggestionCatalogVersion ?? "v1");
		const shouldTrackVisibleSuggestions = computed(() => canShowSuggestions.value);
		const placeholder = computed(() => {
			if (!props.isWorkflowBuilderAvailable) return i18n.baseText("instanceAi.input.workflowBuilderUnavailablePlaceholder");
			if (isGatedBySetup.value) return i18n.baseText("instanceAi.input.suspendedPlaceholder");
			if (props.isPlanEditMode) return i18n.baseText("instanceAi.input.planEditPlaceholder");
			if (props.previewPromptKey && isInputVisuallyEmpty.value) return typedPreview.value;
			if (previewPrompt.value && isInputVisuallyEmpty.value) return previewPrompt.value;
			if (props.amendContext) return i18n.baseText("instanceAi.input.amendPlaceholder", { interpolate: { role: props.amendContext.role } });
			if (props.contextualSuggestion) return props.contextualSuggestion;
			return i18n.baseText(props.placeholderKey ?? "instanceAi.input.placeholder");
		});
		watch([
			shouldTrackVisibleSuggestions,
			resolvedSuggestionCatalogVersion,
			() => props.currentThreadId
		], ([shouldTrackSuggestions, suggestionCatalogVersion, threadId]) => {
			if (shouldTrackSuggestions) {
				promptSuggestionsTelemetry.trackSuggestionsShown({
					threadId: threadId || void 0,
					suggestionCatalogVersion,
					telemetryPayload: props.suggestionTelemetryPayload
				});
				return;
			}
			previewPrompt.value = null;
			emit("workflow-preview", null);
		}, { immediate: true });
		watch(inputText, (text) => {
			if (text.length === 0) selectedSuggestionDraft.value = null;
		});
		watch(() => props.isPlanEditMode, (isPlanEditMode, wasPlanEditMode) => {
			if (isPlanEditMode || wasPlanEditMode) {
				previewPrompt.value = null;
				resetDraftComposer();
			}
		});
		function emitSubmittedMessage(message, attachments) {
			previewPrompt.value = null;
			emit("submit", message, attachments);
		}
		function resetDraftComposer() {
			inputText.value = "";
			attachedFiles.value = [];
		}
		function canSubmitMessage(message, attachmentCount = 0) {
			return (message.length > 0 || attachmentCount > 0) && !isBusy.value && !isGatedBySetup.value;
		}
		function submitComposerMessage(message, attachments) {
			if (!canSubmitMessage(message, attachments?.length ?? 0)) return;
			trackSelectedSuggestionSubmitted(message);
			emitSubmittedMessage(message, attachments);
			resetDraftComposer();
		}
		function submitSuggestion(payload) {
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			submitComposerMessage(prompt);
		}
		async function handleSubmit() {
			const text = inputText.value.trim();
			if (!canSubmitMessage(text, attachedFiles.value.length)) return;
			let attachments;
			if (attachedFiles.value.length > 0) attachments = (await Promise.all(attachedFiles.value.map(convertFileToBinaryData))).map((b) => ({
				type: "file",
				data: b.data,
				mimeType: b.mimeType,
				fileName: b.fileName ?? "unnamed"
			}));
			submitComposerMessage(text, attachments);
		}
		function handleStop() {
			emit("stop");
		}
		function handleTabAutocomplete() {
			if (!inputText.value && props.contextualSuggestion) inputText.value = props.contextualSuggestion;
		}
		function handleFilesSelected(files) {
			attachedFiles.value.push(...files);
		}
		function handleFileRemove(file) {
			const idx = attachedFiles.value.indexOf(file);
			if (idx !== -1) attachedFiles.value.splice(idx, 1);
		}
		function getTelemetryContext(telemetryPayload) {
			return {
				threadId: props.currentThreadId || void 0,
				suggestionCatalogVersion: resolvedSuggestionCatalogVersion.value,
				telemetryPayload: {
					...props.suggestionTelemetryPayload,
					...telemetryPayload
				}
			};
		}
		function getSuggestionPrompt(payload) {
			return payload.prompt ?? i18n.baseText(payload.promptKey);
		}
		function getPreviewPromptText(preview) {
			if (!preview) return null;
			if (typeof preview === "string") return i18n.baseText(preview);
			return preview.prompt;
		}
		function trackSelectedSuggestionSubmitted(message) {
			const selectedSuggestion = selectedSuggestionDraft.value;
			if (!selectedSuggestion) return;
			promptSuggestionsTelemetry.trackSuggestionSubmitted({
				...getTelemetryContext(selectedSuggestion.telemetryPayload),
				suggestionId: selectedSuggestion.suggestionId,
				suggestionKind: selectedSuggestion.suggestionKind,
				position: selectedSuggestion.position,
				promptModified: message !== selectedSuggestion.originalPrompt
			});
		}
		function handleQuickExamplesOpened(payload) {
			if (payload.suggestionId !== "quick-examples") return;
			promptSuggestionsTelemetry.trackQuickExamplesOpened({
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				position: payload.position
			});
		}
		function trackSuggestionSelected(payload) {
			promptSuggestionsTelemetry.trackSuggestionSelected({
				...getTelemetryContext(payload.telemetryPayload),
				suggestionId: payload.suggestionId,
				suggestionKind: payload.suggestionKind,
				position: payload.position
			});
		}
		function handleSuggestionsCycled(payload) {
			promptSuggestionsTelemetry.trackSuggestionsCycled({
				...getTelemetryContext(payload.telemetryPayload),
				visibleSuggestionIds: payload.visibleSuggestionIds,
				cycleCount: payload.cycleCount
			});
		}
		async function handleSuggestionInsert(payload) {
			trackSuggestionSelected(payload);
			previewPrompt.value = null;
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			inputText.value = prompt;
			await nextTick();
			chatInputRef.value?.focus();
		}
		const resizable = computed(() => {
			if (props.fixedRows) return {
				minRows: props.fixedRows,
				maxRows: props.fixedRows
			};
			if (previewPrompt.value) return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_AUTOSIZE_ROWS
			};
			return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_MAX_AUTOSIZE_ROWS
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.composer) }, [
				createVNode(ChatInputBase_default, {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
					class: normalizeClass({
						[_ctx.$style.planEditInput]: props.isPlanEditMode,
						[_ctx.$style.inputWrapper]: true
					}),
					placeholder: placeholder.value,
					"is-streaming": props.isPlanEditMode ? false : props.isStreaming,
					"can-submit": canSubmit.value,
					disabled: isGatedBySetup.value,
					autosize: resizable.value,
					"button-label": props.submitLabel,
					"active-requires-focus": props.submitActiveRequiresFocus,
					"show-voice": "",
					"show-attach": !props.isPlanEditMode,
					onSubmit: handleSubmit,
					onStop: handleStop,
					onTab: handleTabAutocomplete,
					onFilesSelected: handleFilesSelected
				}, {
					attachments: withCtx(() => [props.isPlanEditMode ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.contextChip),
						"data-test-id": "instance-ai-plan-edit-context"
					}, [createVNode(unref(N8nTag_default), {
						text: unref(i18n).baseText("instanceAi.planReview.askForEdits"),
						clickable: false,
						size: "lg"
					}, {
						tag: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextChipContent) }, [
							createVNode(unref(N8nIcon_default), {
								icon: "corner-down-right",
								size: "small"
							}),
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.contextChipText) }, toDisplayString(unref(i18n).baseText("instanceAi.planReview.askForEdits")), 3),
							createBaseVNode("button", {
								type: "button",
								class: normalizeClass(_ctx.$style.contextChipClose),
								title: unref(i18n).baseText("generic.close"),
								"aria-label": unref(i18n).baseText("generic.close"),
								"data-test-id": "instance-ai-plan-edit-cancel",
								onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("cancel-plan-edit"), ["stop"]))
							}, [createVNode(unref(N8nIcon_default), {
								icon: "x",
								size: "xsmall"
							})], 10, _hoisted_1)
						], 2)]),
						_: 1
					}, 8, ["text"])], 2)) : attachedFiles.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.attachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: index,
							file,
							"is-removable": true,
							onRemove: handleFileRemove
						}, null, 8, ["file"]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"modelValue",
					"class",
					"placeholder",
					"is-streaming",
					"can-submit",
					"disabled",
					"autosize",
					"button-label",
					"active-requires-focus",
					"show-attach"
				]),
				renderSlot(_ctx.$slots, "footer"),
				createVNode(Transition, {
					name: "suggestions-fade",
					duration: SUGGESTIONS_TRANSITION_DURATION
				}, {
					default: withCtx(() => [canShowSuggestions.value && props.suggestions ? (openBlock(), createBlock(resolveDynamicComponent(resolvedSuggestionsComponent.value), mergeProps({
						key: 0,
						class: _ctx.$style.suggestions,
						suggestions: props.suggestions,
						disabled: isBusy.value || isGatedBySetup.value
					}, props.suggestionsComponentProps, {
						onPreviewChange: _cache[2] || (_cache[2] = ($event) => previewPrompt.value = getPreviewPromptText($event)),
						onQuickExamplesOpened: handleQuickExamplesOpened,
						onCycleSuggestions: handleSuggestionsCycled,
						onInsertSuggestion: handleSuggestionInsert,
						onWorkflowPreview: _cache[3] || (_cache[3] = ($event) => emit("workflow-preview", $event))
					}), null, 16, [
						"class",
						"suggestions",
						"disabled"
					])) : createCommentVNode("", true)]),
					_: 1
				})
			], 2);
		};
	}
});
var InstanceAiInput_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_1uk7n_125",
	inputWrapper: "_inputWrapper_1uk7n_133",
	suggestions: "_suggestions_1uk7n_137",
	attachments: "_attachments_1uk7n_141",
	contextChip: "_contextChip_1uk7n_147",
	contextChipContent: "_contextChipContent_1uk7n_152",
	contextChipText: "_contextChipText_1uk7n_159",
	contextChipClose: "_contextChipClose_1uk7n_163",
	planEditInput: "_planEditInput_1uk7n_178"
};
var InstanceAiInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiViewHeader.vue?vue&type=script&setup=true&lang.ts
var InstanceAiViewHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiViewHeader",
	setup(__props) {
		const store = useInstanceAiStore();
		const sourceControlStore = useSourceControlStore();
		const i18n = useI18n();
		const sidebar = useSidebarState();
		const route = useRoute();
		const { goToUpgrade } = usePageRedirectionHelper();
		const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
		const activeThreadId = computed(() => {
			const id = route.params.threadId;
			return typeof id === "string" ? id : void 0;
		});
		const threadCreditsUsed = computed(() => activeThreadId.value ? store.threadCreditsUsed(activeThreadId.value) : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
				createVNode(Transition, { name: "sidebar-toggle-fade" }, {
					default: withCtx(() => [unref(sidebar).collapsed.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sidebarToggle)
					}, [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("instanceAi.sidebar.chatHistory"),
						placement: "bottom",
						"show-after": unref(500)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "history",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							"data-test-id": "instance-ai-sidebar-toggle",
							"aria-label": unref(i18n).baseText("instanceAi.sidebar.chatHistory"),
							onClick: unref(sidebar).toggle
						}, null, 8, ["aria-label", "onClick"])]),
						_: 1
					}, 8, ["content", "show-after"])], 2)) : createCommentVNode("", true)]),
					_: 1
				}),
				renderSlot(_ctx.$slots, "title"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [unref(store).creditsRemaining !== void 0 ? (openBlock(), createBlock(CreditsSettingsDropdown_default, {
					key: 0,
					"credits-remaining": unref(store).creditsRemaining,
					"credits-quota": unref(store).creditsQuota,
					"credits-used": threadCreditsUsed.value,
					"is-low-credits": unref(store).isLowCredits,
					"button-size": "small",
					onUpgradeClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai"))
				}, null, 8, [
					"credits-remaining",
					"credits-quota",
					"credits-used",
					"is-low-credits"
				])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")], 2)
			], 2), isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				icon: "lock",
				class: normalizeClass(_ctx.$style.readOnlyBanner)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.instanceAi.notice")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 64);
		};
	}
});
var InstanceAiViewHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_2m74t_125",
	sidebarToggle: "_sidebarToggle_2m74t_134",
	headerActions: "_headerActions_2m74t_138",
	readOnlyBanner: "_readOnlyBanner_2m74t_145"
};
var InstanceAiViewHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiViewHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiViewHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/WorkflowBuilderUnavailableNotice.vue?vue&type=script&setup=true&lang.ts
var WorkflowBuilderUnavailableNotice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowBuilderUnavailableNotice",
	setup(__props) {
		const i18n = useI18n();
		const settingsStore = useInstanceAiSettingsStore();
		const descriptionKey = computed(() => settingsStore.isSandboxEnabled ? "instanceAi.workflowBuilderUnavailable.serviceUrlDescription" : "instanceAi.workflowBuilderUnavailable.enableSandboxDescription");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				class: normalizeClass(_ctx.$style.notice),
				theme: "warning",
				"data-test-id": "instance-ai-workflow-builder-unavailable"
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.copy) }, [createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowBuilderUnavailable.title")), 1), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(descriptionKey.value)), 1)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var WorkflowBuilderUnavailableNotice_vue_vue_type_style_index_0_lang_module_default = {
	notice: "_notice_7gp85_125",
	copy: "_copy_7gp85_129"
};
var WorkflowBuilderUnavailableNotice_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowBuilderUnavailableNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowBuilderUnavailableNotice_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useInstanceAiPromptSuggestionsTelemetry as a, AttachmentPreview_default as i, InstanceAiViewHeader_default as n, useCreditWarningBanner as o, InstanceAiInput_default as r, INSTANCE_AI_EMPTY_STATE_SUGGESTIONS as s, WorkflowBuilderUnavailableNotice_default as t };
