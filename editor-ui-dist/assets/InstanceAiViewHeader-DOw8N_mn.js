import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, Ht as toValue, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-Dm3AetX9.js";
import { Ca as N8nCallout_default, Ea as N8nIcon_default, Ii as N8nIconButton_default, ji as N8nTooltip_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { n as onClickOutside } from "./core-vNZq-xzE.js";
import { fi as useSourceControlStore, ln as useTelemetry } from "./users.store-DjNI0iy4.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-PYk3q58x.js";
import { t as convertFileToBinaryData } from "./fileUtils-D7lS1y9K.js";
import { n as useInstanceAiStore } from "./instanceAi.store-B8CIL53s.js";
import { n as CreditsSettingsDropdown_default } from "./CreditWarningBanner-BjmwP1Be.js";
import { t as ChatFile_default } from "./ChatFile-MUQ3FcSF.js";
import { t as ChatInputBase_default } from "./ChatInputBase-BuqpaEF3.js";
import { n as useSidebarState } from "./instanceAiLayout-BJtAMirC.js";
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
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["src", "alt"];
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
		const mimeType = computed(() => props.file?.type ?? props.attachment?.mimeType ?? "");
		const fileName = computed(() => props.file?.name ?? props.attachment?.fileName ?? "");
		const isImage = computed(() => mimeType.value.startsWith("image/"));
		const objectUrl = computed(() => {
			if (props.file && isImage.value) return URL.createObjectURL(props.file);
			return null;
		});
		const thumbnailSrc = computed(() => {
			if (objectUrl.value) return objectUrl.value;
			if (props.attachment && isImage.value) return `data:${props.attachment.mimeType};base64,${props.attachment.data}`;
			return null;
		});
		const fallbackFile = computed(() => {
			if (props.file) return props.file;
			if (props.attachment) return new File([], props.attachment.fileName, { type: props.attachment.mimeType });
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
			return isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 0,
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
				}, null, 42, _hoisted_1$1),
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
				key: 1,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"]));
		};
	}
});
var AttachmentPreview_vue_vue_type_style_index_0_lang_module_default = {
	thumbnailWrapper: "_thumbnailWrapper_22ink_125",
	thumbnail: "_thumbnail_22ink_125",
	loadingSkeleton: "_loadingSkeleton_22ink_142",
	removeBtn: "_removeBtn_22ink_152"
};
var AttachmentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AttachmentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AttachmentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
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
		"submit-suggestion"
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
		function submitSuggestion(payload) {
			if (props.disabled) return;
			closeQuickExamples();
			emit("submit-suggestion", payload);
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
				submitSuggestion({
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
				], 46, _hoisted_1);
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
						onClick: ($event) => submitSuggestion({
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
//#region src/features/ai/instanceAi/instanceAiPromptSuggestions.telemetry.ts
var shownImpressionKeys = /* @__PURE__ */ new Set();
var resolveSuggestionCatalogVersion = (context) => context.suggestionCatalogVersion ?? "v1";
var createBasePayload = (context) => {
	const payload = { suggestion_catalog_version: resolveSuggestionCatalogVersion(context) };
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
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
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
		currentThreadId: { default: "" },
		amendContext: { default: null },
		contextualSuggestion: { default: null },
		suggestions: {},
		suggestionsComponent: {},
		suggestionCatalogVersion: {},
		placeholderKey: {}
	},
	emits: ["submit", "stop"],
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
		const previewPromptKey = ref(null);
		const selectedSuggestionDraft = ref(null);
		__expose({ focus: () => chatInputRef.value?.focus() });
		const isBusy = computed(() => props.isStreaming || props.isSubmitting);
		const hasNonWhitespaceDraftText = computed(() => inputText.value.trim().length > 0);
		const isInputVisuallyEmpty = computed(() => inputText.value.length === 0);
		const hasAttachments = computed(() => attachedFiles.value.length > 0);
		const isComposerDirty = computed(() => hasNonWhitespaceDraftText.value || hasAttachments.value);
		const isGatedBySetup = computed(() => props.isAwaitingConfirmation);
		const canSubmit = computed(() => isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const canShowSuggestions = computed(() => Boolean(props.suggestions?.length) && !isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const resolvedSuggestionsComponent = computed(() => props.suggestionsComponent ?? InstanceAiPromptSuggestions_default);
		const resolvedSuggestionCatalogVersion = computed(() => props.suggestionCatalogVersion ?? "v1");
		const shouldTrackVisibleSuggestions = computed(() => canShowSuggestions.value);
		const placeholder = computed(() => {
			if (isGatedBySetup.value) return i18n.baseText("instanceAi.input.suspendedPlaceholder");
			if (previewPromptKey.value && isInputVisuallyEmpty.value) return i18n.baseText(previewPromptKey.value);
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
					suggestionCatalogVersion
				});
				return;
			}
			previewPromptKey.value = null;
		}, { immediate: true });
		watch(inputText, (text) => {
			if (text.length === 0) selectedSuggestionDraft.value = null;
		});
		function emitSubmittedMessage(message, attachments) {
			previewPromptKey.value = null;
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
		async function handleSubmit() {
			const text = inputText.value.trim();
			if (!canSubmitMessage(text, attachedFiles.value.length)) return;
			let attachments;
			if (attachedFiles.value.length > 0) attachments = (await Promise.all(attachedFiles.value.map(convertFileToBinaryData))).map((b) => ({
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
		function getTelemetryContext() {
			return {
				threadId: props.currentThreadId || void 0,
				suggestionCatalogVersion: resolvedSuggestionCatalogVersion.value
			};
		}
		function trackSelectedSuggestionSubmitted(message) {
			const selectedSuggestion = selectedSuggestionDraft.value;
			if (!selectedSuggestion) return;
			promptSuggestionsTelemetry.trackSuggestionSubmitted({
				...getTelemetryContext(),
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
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				suggestionKind: payload.suggestionKind,
				position: payload.position
			});
		}
		function handleSuggestionsCycled(payload) {
			promptSuggestionsTelemetry.trackSuggestionsCycled({
				suggestionCatalogVersion: resolvedSuggestionCatalogVersion.value,
				visibleSuggestionIds: payload.visibleSuggestionIds,
				cycleCount: payload.cycleCount
			});
		}
		function handleSuggestionSubmit(payload) {
			trackSuggestionSelected(payload);
			submitComposerMessage(i18n.baseText(payload.promptKey));
		}
		async function handleSuggestionInsert(payload) {
			trackSuggestionSelected(payload);
			previewPromptKey.value = null;
			const prompt = i18n.baseText(payload.promptKey);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			inputText.value = prompt;
			await nextTick();
			chatInputRef.value?.focus();
		}
		const resizable = computed(() => {
			if (previewPromptKey.value) return {
				minRows: 2,
				maxRows: 2
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.composer) }, [createVNode(ChatInputBase_default, {
				ref_key: "chatInputRef",
				ref: chatInputRef,
				modelValue: inputText.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputText.value = $event),
				placeholder: placeholder.value,
				"is-streaming": props.isStreaming,
				"can-submit": canSubmit.value,
				disabled: isGatedBySetup.value,
				autosize: resizable.value,
				"show-voice": "",
				"show-attach": "",
				onSubmit: handleSubmit,
				onStop: handleStop,
				onTab: handleTabAutocomplete,
				onFilesSelected: handleFilesSelected
			}, createSlots({ _: 2 }, [attachedFiles.value.length > 0 ? {
				name: "attachments",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachments) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
					return openBlock(), createBlock(AttachmentPreview_default, {
						key: index,
						file,
						"is-removable": true,
						onRemove: handleFileRemove
					}, null, 8, ["file"]);
				}), 128))], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"modelValue",
				"placeholder",
				"is-streaming",
				"can-submit",
				"disabled",
				"autosize"
			]), createVNode(Transition, {
				name: "suggestions-fade",
				duration: SUGGESTIONS_TRANSITION_DURATION
			}, {
				default: withCtx(() => [canShowSuggestions.value && props.suggestions ? (openBlock(), createBlock(resolveDynamicComponent(resolvedSuggestionsComponent.value), {
					key: 0,
					suggestions: props.suggestions,
					disabled: isBusy.value || isGatedBySetup.value,
					onPreviewChange: _cache[1] || (_cache[1] = ($event) => previewPromptKey.value = $event),
					onQuickExamplesOpened: handleQuickExamplesOpened,
					onCycleSuggestions: handleSuggestionsCycled,
					onInsertSuggestion: handleSuggestionInsert,
					onSubmitSuggestion: handleSuggestionSubmit
				}, null, 40, ["suggestions", "disabled"])) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiInput_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_13u0i_125",
	attachments: "_attachments_13u0i_131"
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
		const { goToUpgrade } = usePageRedirectionHelper();
		const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
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
					"is-low-credits": unref(store).isLowCredits,
					onUpgradeClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai"))
				}, null, 8, [
					"credits-remaining",
					"credits-quota",
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
export { INSTANCE_AI_EMPTY_STATE_SUGGESTIONS as a, useCreditWarningBanner as i, InstanceAiInput_default as n, AttachmentPreview_default as r, InstanceAiViewHeader_default as t };
