import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, W as nextTick, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, j as createVNode, q as onBeforeUnmount, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BH7Ervrw.js";
import { Da as N8nIcon_default, Mi as N8nTooltip_default, Si as AskAssistantIcon_default, Ta as N8nText_default, ut as useRouter } from "./src-D7XhL4SE.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-CBSZ9zNh.js";
import { Hl as INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT, Lc as v4, Ul as INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT } from "./constants-Brs44Mbc.js";
import { D as storeToRefs, t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { g as usePostHog } from "./users.store-ByD75lsx.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-2KQSFa_s.js";
import { n as INSTANCE_AI_THREAD_VIEW } from "./constants-oS_opmZd.js";
import { n as useInstanceAiStore } from "./instanceAi.store-BcqQYYI4.js";
import { t as CreditWarningBanner_default } from "./CreditWarningBanner-I9QL4fbZ.js";
import { a as INSTANCE_AI_EMPTY_STATE_SUGGESTIONS, i as useCreditWarningBanner, n as InstanceAiInput_default, t as InstanceAiViewHeader_default } from "./InstanceAiViewHeader-DEI38zHW.js";
//#region src/experiments/instanceAiProactiveAgent/useInstanceAiProactiveAgentExperiment.ts
function useInstanceAiProactiveAgentExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.name) === INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiProactiveAgent/components/InstanceAiProactiveStarterMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var STARTER_DELAY_MS = 800;
var TYPING_DURATION_MS = 600;
var InstanceAiProactiveStarterMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiProactiveStarterMessage",
	setup(__props) {
		const i18n = useI18n();
		const stage = ref("waiting");
		const timers = [];
		onMounted(() => {
			timers.push(setTimeout(() => {
				stage.value = "typing";
			}, STARTER_DELAY_MS));
			timers.push(setTimeout(() => {
				stage.value = "message";
			}, STARTER_DELAY_MS + TYPING_DURATION_MS));
		});
		onBeforeUnmount(() => {
			for (const timer of timers) clearTimeout(timer);
		});
		return (_ctx, _cache) => {
			return stage.value !== "waiting" ? (openBlock(), createElementBlock("article", {
				key: 0,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-proactive-starter"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.avatar),
				"aria-hidden": "true"
			}, [createVNode(unref(AskAssistantIcon_default), {
				size: "large",
				theme: "blank"
			})], 2), createBaseVNode("section", {
				class: normalizeClass(_ctx.$style.bubble),
				"aria-live": "polite"
			}, [stage.value === "typing" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.typing),
				"aria-label": unref(i18n).baseText("experiments.instanceAiProactiveAgent.typingLabel"),
				role: "status",
				"data-test-id": "instance-ai-proactive-typing"
			}, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.typingDot) }, null, 2)
			], 10, _hoisted_1$1)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				tag: "p",
				size: "large",
				class: normalizeClass(_ctx.$style.message),
				"data-test-id": "instance-ai-proactive-message"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.instanceAiProactiveAgent.message")), 1)]),
				_: 1
			}, 8, ["class"]))], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/experiments/instanceAiProactiveAgent/components/InstanceAiProactiveStarterMessage.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_rshub_335";
var fadeInUp = "_fadeInUp_rshub_1";
var avatar = "_avatar_rshub_355";
var bubble = "_bubble_rshub_366";
var message = "_message_rshub_377";
var typing = "_typing_rshub_395";
var typingDot = "_typingDot_rshub_402";
var shimmer = "_shimmer_rshub_1";
var spin = "_spin_rshub_1";
var opacityPulse = "_opacityPulse_rshub_1";
var popoverIn = "_popoverIn_rshub_1";
var fadeIn$1 = "_fadeIn_rshub_1";
var collapsibleSlideDown = "_collapsibleSlideDown_rshub_1";
var collapsibleSlideUp = "_collapsibleSlideUp_rshub_1";
var pulseGlow = "_pulseGlow_rshub_1";
var pulseGlowDelayed = "_pulseGlowDelayed_rshub_1";
var fade = "_fade_rshub_1";
var fadeInDown = "_fadeInDown_rshub_1";
var fadeInLeft = "_fadeInLeft_rshub_1";
var fadeInRight = "_fadeInRight_rshub_1";
var fadeOut = "_fadeOut_rshub_1";
var fadeOutDown = "_fadeOutDown_rshub_1";
var fadeOutUp = "_fadeOutUp_rshub_1";
var fadeOutLeft = "_fadeOutLeft_rshub_1";
var fadeOutRight = "_fadeOutRight_rshub_1";
var blinkBackground = "_blinkBackground_rshub_1";
var typingBlink = "_typingBlink_rshub_1";
var InstanceAiProactiveStarterMessage_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	fadeInUp,
	avatar,
	bubble,
	message,
	typing,
	typingDot,
	"typing-dot": "_typing-dot_rshub_1",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_rshub_1",
	opacityPulse,
	popoverIn,
	fadeIn: fadeIn$1,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	blinkBackground,
	typingBlink
};
var InstanceAiProactiveStarterMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiProactiveStarterMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiProactiveStarterMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/useInstanceAiPromptSuggestionsV2Experiment.ts
function useInstanceAiPromptSuggestionsV2Experiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT.name) === INSTANCE_AI_PROMPT_SUGGESTIONS_V2_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/suggestions.ts
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2 = [
	{
		type: "prompt",
		id: "process-invoices",
		icon: "circle-dollar-sign",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.processInvoices.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.processInvoices.prompt"
	},
	{
		type: "prompt",
		id: "qualify-inbound-leads",
		icon: "badge-check",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.qualifyInboundLeads.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.qualifyInboundLeads.prompt"
	},
	{
		type: "prompt",
		id: "whatsapp-support-agent",
		icon: "message-circle",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.whatsappSupportAgent.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.whatsappSupportAgent.prompt"
	},
	{
		type: "prompt",
		id: "schedule-social-posts",
		icon: "calendar",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.scheduleSocialPosts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.scheduleSocialPosts.prompt"
	},
	{
		type: "prompt",
		id: "analyze-exit-interviews",
		icon: "users",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.analyzeExitInterviews.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.analyzeExitInterviews.prompt"
	},
	{
		type: "prompt",
		id: "post-to-linkedin",
		icon: "send",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.postToLinkedIn.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.postToLinkedIn.prompt"
	},
	{
		type: "prompt",
		id: "detect-at-risk-accounts",
		icon: "shield-user",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.detectAtRiskAccounts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.detectAtRiskAccounts.prompt"
	},
	{
		type: "prompt",
		id: "automate-order-flow",
		icon: "package-open",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.automateOrderFlow.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.automateOrderFlow.prompt"
	},
	{
		type: "prompt",
		id: "recover-abandoned-carts",
		icon: "archive-restore",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.recoverAbandonedCarts.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.recoverAbandonedCarts.prompt"
	},
	{
		type: "prompt",
		id: "monitor-market-news",
		icon: "rss",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.monitorMarketNews.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.monitorMarketNews.prompt"
	},
	{
		type: "prompt",
		id: "onboard-new-hires",
		icon: "user-check",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.onboardNewHires.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.onboardNewHires.prompt"
	},
	{
		type: "prompt",
		id: "extract-data-from-emails",
		icon: "paperclip",
		labelKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.extractDataFromEmails.label",
		promptKey: "experiments.instanceAiPromptSuggestionsV2.suggestions.extractDataFromEmails.prompt"
	}
];
//#endregion
//#region src/experiments/instanceAiPromptSuggestionsV2/components/InstanceAiPromptSuggestionsV2.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var _hoisted_2 = ["aria-label", "disabled"];
var VISIBLE_SUGGESTION_COUNT = 4;
var PREVIEW_HOVER_DELAY_MS = 300;
var SUGGESTION_ENTER_STAGGER_MS = 50;
var SUGGESTION_LEAVE_STAGGER_MS = 35;
var InstanceAiPromptSuggestionsV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestionsV2",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"insert-suggestion",
		"cycle-suggestions"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const startIndex = ref(0);
		const cycleCount = ref(0);
		let hoverTimer = null;
		const canCycleSuggestions = computed(() => props.suggestions.length > VISIBLE_SUGGESTION_COUNT);
		function getVisibleSuggestionsFromIndex(index) {
			const nextSuggestions = [];
			for (let offset = 0; offset < VISIBLE_SUGGESTION_COUNT; offset++) {
				const suggestionIndex = (index + offset) % props.suggestions.length;
				const suggestion = props.suggestions[suggestionIndex];
				if (suggestion) nextSuggestions.push(suggestion);
			}
			return nextSuggestions;
		}
		const visibleSuggestions = computed(() => {
			if (!canCycleSuggestions.value) return props.suggestions;
			return getVisibleSuggestionsFromIndex(startIndex.value);
		});
		const visibleSuggestionButtonCount = computed(() => visibleSuggestions.value.length + (canCycleSuggestions.value ? 1 : 0));
		function getSuggestionButtonStyle(index) {
			const reverseIndex = visibleSuggestionButtonCount.value - index - 1;
			return {
				"--suggestion-index": String(index),
				"--suggestion-count": String(visibleSuggestionButtonCount.value),
				"--suggestion-enter-delay": `${index * SUGGESTION_ENTER_STAGGER_MS}ms`,
				"--suggestion-leave-delay": `${reverseIndex * SUGGESTION_LEAVE_STAGGER_MS}ms`
			};
		}
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function setPreview(promptKey) {
			emit("preview-change", promptKey);
		}
		function getSuggestionPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function handleSuggestionEnter(suggestion) {
			if (props.disabled) return;
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				setPreview(suggestion.promptKey);
			}, PREVIEW_HOVER_DELAY_MS);
		}
		function clearPreview() {
			clearHoverTimer();
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			if (props.disabled) return;
			clearHoverTimer();
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionClick(suggestion) {
			if (props.disabled) return;
			clearPreview();
			emit("insert-suggestion", {
				promptKey: suggestion.promptKey,
				suggestionId: suggestion.id,
				suggestionKind: "prompt",
				position: getSuggestionPosition(suggestion.id)
			});
		}
		function cycleSuggestions() {
			if (props.disabled || !canCycleSuggestions.value) return;
			clearPreview();
			const nextStartIndex = (startIndex.value + VISIBLE_SUGGESTION_COUNT) % props.suggestions.length;
			const nextVisibleSuggestions = getVisibleSuggestionsFromIndex(nextStartIndex);
			cycleCount.value += 1;
			startIndex.value = nextStartIndex;
			emit("cycle-suggestions", {
				visibleSuggestionIds: nextVisibleSuggestions.map((suggestion) => suggestion.id),
				cycleCount: cycleCount.value
			});
		}
		onUnmounted(clearHoverTimer);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.suggestions),
				"data-test-id": "instance-ai-prompt-suggestions-v2"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSuggestions.value, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass(_ctx.$style.suggestionButton),
					style: normalizeStyle(getSuggestionButtonStyle(index)),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: clearPreview,
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: clearPreview
				}, [createVNode(unref(N8nIcon_default), {
					icon: suggestion.icon,
					size: 12,
					class: normalizeClass(_ctx.$style.suggestionIcon)
				}, null, 8, ["icon", "class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1)], 46, _hoisted_1);
			}), 128)), canCycleSuggestions.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(i18n).baseText("experiments.instanceAiPromptSuggestionsV2.nextSuggestions"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass([_ctx.$style.suggestionButton, _ctx.$style.cycleButton]),
					style: normalizeStyle(getSuggestionButtonStyle(visibleSuggestions.value.length)),
					"data-test-id": "instance-ai-suggestions-cycle",
					"aria-label": unref(i18n).baseText("experiments.instanceAiPromptSuggestionsV2.nextSuggestions"),
					disabled: props.disabled,
					onClick: cycleSuggestions
				}, [createVNode(unref(N8nIcon_default), {
					icon: "refresh-cw",
					size: 12
				})], 14, _hoisted_2)]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var InstanceAiPromptSuggestionsV2_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_1dqnq_135",
	suggestionRow: "_suggestionRow_1dqnq_139",
	suggestionButton: "_suggestionButton_1dqnq_147",
	suggestionSlideIn: "_suggestionSlideIn_1dqnq_1",
	suggestionIcon: "_suggestionIcon_1dqnq_182",
	cycleButton: "_cycleButton_1dqnq_191",
	suggestionSlideOut: "_suggestionSlideOut_1dqnq_1"
};
var InstanceAiPromptSuggestionsV2_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPromptSuggestionsV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPromptSuggestionsV2_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiEmptyState.vue?vue&type=script&setup=true&lang.ts
var InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyState",
	props: { titleKey: { default: "instanceAi.emptyState.title" } },
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-empty-state"
			}, [createVNode(unref(N8nText_default), {
				tag: "h1",
				size: "xlarge",
				bold: "",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(props.titleKey)), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_urytu_125",
	fadeIn: "_fadeIn_urytu_1",
	title: "_title_urytu_143"
};
var InstanceAiEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiEmptyView.vue?vue&type=script&setup=true&lang.ts
var INSTANCE_AI_DEFAULT_TITLE_KEY = "instanceAi.emptyState.title";
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2_TITLE_KEY = "experiments.instanceAiPromptSuggestionsV2.emptyState.title";
var INSTANCE_AI_PROMPT_SUGGESTIONS_V2_PLACEHOLDER_KEY = "experiments.instanceAiPromptSuggestionsV2.input.placeholder";
var InstanceAiEmptyView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyView",
	setup(__props) {
		const store = useInstanceAiStore();
		const { isLowCredits } = storeToRefs(store);
		const rootStore = useRootStore();
		const router = useRouter();
		const toast = useToast();
		const { goToUpgrade } = usePageRedirectionHelper();
		const creditBanner = useCreditWarningBanner(isLowCredits);
		const { isFeatureEnabled: isProactiveAgentExperimentEnabled } = useInstanceAiProactiveAgentExperiment();
		const { isFeatureEnabled: isPromptSuggestionsV2ExperimentEnabled } = useInstanceAiPromptSuggestionsV2Experiment();
		const showProactiveStarter = computed(() => isProactiveAgentExperimentEnabled.value);
		const emptyStatePromptSuggestionProps = computed(() => {
			if (showProactiveStarter.value) return {};
			if (isPromptSuggestionsV2ExperimentEnabled.value) return {
				suggestions: INSTANCE_AI_PROMPT_SUGGESTIONS_V2,
				suggestionsComponent: InstanceAiPromptSuggestionsV2_default,
				suggestionCatalogVersion: "v2",
				placeholderKey: INSTANCE_AI_PROMPT_SUGGESTIONS_V2_PLACEHOLDER_KEY
			};
			return { suggestions: INSTANCE_AI_EMPTY_STATE_SUGGESTIONS };
		});
		const emptyStateTitleKey = computed(() => isPromptSuggestionsV2ExperimentEnabled.value ? INSTANCE_AI_PROMPT_SUGGESTIONS_V2_TITLE_KEY : INSTANCE_AI_DEFAULT_TITLE_KEY);
		const chatInputRef = ref(null);
		const isStartingThread = ref(false);
		onMounted(() => {
			nextTick(() => chatInputRef.value?.focus());
		});
		async function handleSubmit(message, attachments) {
			const threadId = v4();
			isStartingThread.value = true;
			try {
				await store.syncThread(threadId);
			} catch {
				isStartingThread.value = false;
				toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Send failed");
				return;
			}
			store.getOrCreateRuntime(threadId).sendMessage(message, attachments, rootStore.pushRef);
			router.replace({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.chatArea) }, [createVNode(InstanceAiViewHeader_default), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentArea) }, [showProactiveStarter.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.proactiveLayout)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.proactiveMessageList) }, [createVNode(unref(InstanceAiProactiveStarterMessage_default))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.proactiveInput) }, [unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
				key: 0,
				"credits-remaining": unref(store).creditsRemaining,
				"credits-quota": unref(store).creditsQuota,
				onUpgradeClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
				onDismiss: _cache[1] || (_cache[1] = ($event) => unref(creditBanner).dismiss())
			}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true), createVNode(InstanceAiInput_default, {
				ref_key: "chatInputRef",
				ref: chatInputRef,
				"is-submitting": isStartingThread.value,
				onSubmit: handleSubmit
			}, null, 8, ["is-submitting"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyLayout)
			}, [createVNode(InstanceAiEmptyState_default, { "title-key": emptyStateTitleKey.value }, null, 8, ["title-key"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.centeredInput) }, [unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
				key: 0,
				"credits-remaining": unref(store).creditsRemaining,
				"credits-quota": unref(store).creditsQuota,
				onUpgradeClick: _cache[2] || (_cache[2] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
				onDismiss: _cache[3] || (_cache[3] = ($event) => unref(creditBanner).dismiss())
			}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true), createVNode(InstanceAiInput_default, mergeProps({
				ref_key: "chatInputRef",
				ref: chatInputRef,
				"is-submitting": isStartingThread.value
			}, emptyStatePromptSuggestionProps.value, { onSubmit: handleSubmit }), null, 16, ["is-submitting"])], 2)], 2))], 2)], 2);
		};
	}
});
var InstanceAiEmptyView_vue_vue_type_style_index_0_lang_module_default = {
	chatArea: "_chatArea_rc8n0_125",
	contentArea: "_contentArea_rc8n0_135",
	emptyLayout: "_emptyLayout_rc8n0_142",
	centeredInput: "_centeredInput_rc8n0_152",
	proactiveLayout: "_proactiveLayout_rc8n0_157",
	proactiveMessageList: "_proactiveMessageList_rc8n0_164",
	proactiveInput: "_proactiveInput_rc8n0_175"
};
var InstanceAiEmptyView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiEmptyView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiEmptyView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiEmptyView_default as default };
