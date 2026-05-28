import { $ as openBlock, C as createBaseVNode, E as createElementBlock, _n as normalizeClass } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
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
export { ChatTypingIndicator_default as t };
