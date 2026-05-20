import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _n as normalizeClass, j as createVNode, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-x10Anb9r.js";
import { Ca as N8nText_default, bi as AskAssistantIcon_default, lt as useRouter } from "./src-CSSRFm72.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { on as usePostHog } from "./users.store-V46mYCxM.js";
import { t as useToast } from "./useToast-vrHmeB6l.js";
import { zl as INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT } from "./constants-B2-iseoM.js";
import { D as storeToRefs, t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-MHoQtuiD.js";
import { n as INSTANCE_AI_THREAD_VIEW } from "./constants-DlgrjQNI.js";
import { n as useInstanceAiStore } from "./instanceAi.store-CcbI8H-U.js";
import { t as CreditWarningBanner_default } from "./CreditWarningBanner-B4PcUmas.js";
import { a as INSTANCE_AI_EMPTY_STATE_SUGGESTIONS, i as useCreditWarningBanner, n as InstanceAiInput_default, t as InstanceAiViewHeader_default } from "./InstanceAiViewHeader-BugtvC6l.js";
//#region src/experiments/instanceAiProactiveAgent/useInstanceAiProactiveAgentExperiment.ts
function useInstanceAiProactiveAgentExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.name) === INSTANCE_AI_PROACTIVE_AGENT_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiProactiveAgent/components/InstanceAiProactiveStarterMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
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
			], 10, _hoisted_1)) : (openBlock(), createBlock(unref(N8nText_default), {
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
//#region src/features/ai/instanceAi/components/InstanceAiEmptyState.vue?vue&type=script&setup=true&lang.ts
var InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyState",
	setup(__props) {
		const i18n = useI18n();
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
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.emptyState.title")), 1)]),
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
		const showProactiveStarter = computed(() => isProactiveAgentExperimentEnabled.value);
		store.clearCurrentThread();
		const chatInputRef = ref(null);
		onMounted(() => {
			nextTick(() => chatInputRef.value?.focus());
		});
		async function handleSubmit(message, attachments) {
			const threadId = store.currentThreadId;
			try {
				await store.syncThread(threadId);
			} catch {
				toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Send failed");
				return;
			}
			store.sendMessage(message, attachments, rootStore.pushRef);
			router.replace({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		function handleStop() {
			store.cancelRun();
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
				"is-streaming": unref(store).isStreaming,
				"is-sending-message": unref(store).isSendingMessage,
				"is-awaiting-confirmation": unref(store).isAwaitingConfirmation,
				"current-thread-id": unref(store).currentThreadId,
				"amend-context": unref(store).amendContext,
				"contextual-suggestion": unref(store).contextualSuggestion,
				"research-mode": unref(store).researchMode,
				onSubmit: handleSubmit,
				onStop: handleStop,
				onToggleResearchMode: _cache[2] || (_cache[2] = ($event) => unref(store).toggleResearchMode())
			}, null, 8, [
				"is-streaming",
				"is-sending-message",
				"is-awaiting-confirmation",
				"current-thread-id",
				"amend-context",
				"contextual-suggestion",
				"research-mode"
			])], 2)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyLayout)
			}, [createVNode(InstanceAiEmptyState_default), createBaseVNode("div", { class: normalizeClass(_ctx.$style.centeredInput) }, [unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
				key: 0,
				"credits-remaining": unref(store).creditsRemaining,
				"credits-quota": unref(store).creditsQuota,
				onUpgradeClick: _cache[3] || (_cache[3] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
				onDismiss: _cache[4] || (_cache[4] = ($event) => unref(creditBanner).dismiss())
			}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true), createVNode(InstanceAiInput_default, {
				ref_key: "chatInputRef",
				ref: chatInputRef,
				"is-streaming": unref(store).isStreaming,
				"is-sending-message": unref(store).isSendingMessage,
				"is-awaiting-confirmation": unref(store).isAwaitingConfirmation,
				"current-thread-id": unref(store).currentThreadId,
				"amend-context": unref(store).amendContext,
				"contextual-suggestion": unref(store).contextualSuggestion,
				"research-mode": unref(store).researchMode,
				suggestions: unref(INSTANCE_AI_EMPTY_STATE_SUGGESTIONS),
				onSubmit: handleSubmit,
				onStop: handleStop,
				onToggleResearchMode: _cache[5] || (_cache[5] = ($event) => unref(store).toggleResearchMode())
			}, null, 8, [
				"is-streaming",
				"is-sending-message",
				"is-awaiting-confirmation",
				"current-thread-id",
				"amend-context",
				"contextual-suggestion",
				"research-mode",
				"suggestions"
			])], 2)], 2))], 2)], 2);
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
