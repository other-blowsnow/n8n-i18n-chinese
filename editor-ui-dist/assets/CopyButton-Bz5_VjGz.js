import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Wi as N8nIconButton_default, zi as N8nTooltip_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useClipboard } from "./useClipboard-CmuvlZuK.js";
//#region src/features/ai/chatHub/components/ChatTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_1lhqs_335";
var typingBlink = "_typingBlink_1lhqs_1";
var shimmer = "_shimmer_1lhqs_1";
var spin = "_spin_1lhqs_1";
var opacityPulse = "_opacityPulse_1lhqs_1";
var popoverIn = "_popoverIn_1lhqs_1";
var fadeIn = "_fadeIn_1lhqs_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1lhqs_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1lhqs_1";
var pulseGlow = "_pulseGlow_1lhqs_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1lhqs_1";
var fade = "_fade_1lhqs_1";
var fadeInUp = "_fadeInUp_1lhqs_1";
var fadeInDown = "_fadeInDown_1lhqs_1";
var fadeInLeft = "_fadeInLeft_1lhqs_1";
var fadeInRight = "_fadeInRight_1lhqs_1";
var fadeOut = "_fadeOut_1lhqs_1";
var fadeOutDown = "_fadeOutDown_1lhqs_1";
var fadeOutUp = "_fadeOutUp_1lhqs_1";
var fadeOutLeft = "_fadeOutLeft_1lhqs_1";
var fadeOutRight = "_fadeOutRight_1lhqs_1";
var blinkBackground = "_blinkBackground_1lhqs_1";
var ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1lhqs_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	blinkBackground
};
//#endregion
//#region src/features/ai/chatHub/components/ChatTypingIndicator.vue
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
var ChatTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CopyButton.vue?vue&type=script&setup=true&lang.ts
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
					variant: "ghost",
					icon: justCopied.value ? "check" : "copy",
					size: "small",
					"icon-size": "medium",
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
var CopyButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatTypingIndicator_default as n, CopyButton_default as t };
