import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, Z as onUnmounted, bt as withCtx, it as renderSlot, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ai as N8nText_default, Li as N8nIcon_default } from "./src-DXQiQnOc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { a as vscode_default, c as claude_default, o as openai_default, s as cursor_default } from "./clients.utils-CgYeSj0_.js";
//#region src/features/ai/mcpAccess/components/McpClientLogoCards.vue?vue&type=script&setup=true&lang.ts
var McpClientLogoCards_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpClientLogoCards",
	setup(__props) {
		const CLIENT_ICONS = [
			claude_default,
			cursor_default,
			vscode_default,
			openai_default
		];
		const leftIconIndex = ref(0);
		const rightIconIndex = ref(2);
		const leftFading = ref(false);
		const rightFading = ref(false);
		let animationInterval = null;
		function animateLeft() {
			leftFading.value = true;
			setTimeout(() => {
				leftIconIndex.value = (leftIconIndex.value + 1) % CLIENT_ICONS.length;
				leftFading.value = false;
			}, 300);
		}
		function animateRight() {
			rightFading.value = true;
			setTimeout(() => {
				rightIconIndex.value = (rightIconIndex.value + 1) % CLIENT_ICONS.length;
				rightFading.value = false;
			}, 300);
		}
		onMounted(() => {
			animationInterval = setInterval(() => {
				animateLeft();
				setTimeout(() => {
					animateRight();
				}, 1500);
			}, 3e3);
		});
		onUnmounted(() => {
			if (animationInterval) clearInterval(animationInterval);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.iconCardContainer) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[leftIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: leftFading.value }]) }, null, 8, ["class"]))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), {
					icon: "mcp",
					class: normalizeClass(_ctx.$style.mcpIcon)
				}, null, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[rightIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: rightFading.value }]) }, null, 8, ["class"]))], 2)
			], 2);
		};
	}
});
var McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default = {
	iconCardContainer: "_iconCardContainer_d43l4_125",
	iconCard: "_iconCard_d43l4_125",
	clientLogo: "_clientLogo_d43l4_155",
	mcpIcon: "_mcpIcon_d43l4_164",
	fading: "_fading_d43l4_170"
};
var McpClientLogoCards_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpClientLogoCards_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpEmptyStateCard",
	props: {
		title: {},
		description: {},
		surface: {
			type: Boolean,
			default: false
		},
		dataTestId: { default: void 0 }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.card, __props.surface && _ctx.$style.surface]),
				"data-test-id": __props.dataTestId
			}, [
				createVNode(McpClientLogoCards_default, { class: normalizeClass(_ctx.$style.cards) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				})], 2),
				_ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_9b5c5_125";
var surface = "_surface_9b5c5_138";
var cards = "_cards_9b5c5_157";
var copy = "_copy_9b5c5_161";
var actions = "_actions_9b5c5_168";
var McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	"mcp-reveal-in": "_mcp-reveal-in_9b5c5_1",
	surface,
	cards,
	copy,
	actions
};
var McpEmptyStateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpEmptyStateCard_default as t };
