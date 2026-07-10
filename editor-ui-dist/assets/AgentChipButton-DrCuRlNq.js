import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ya as N8nIcon_default, qa as N8nText_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/features/agents/utils/agentSkill.ts
function normalizeAgentSkillForSave(skill, availableToolNames) {
	if (!availableToolNames || !skill.allowedTools?.length) return skill;
	const available = new Set(availableToolNames);
	const allowedTools = skill.allowedTools.filter((toolName) => available.has(toolName));
	const { allowedTools: _allowedTools, ...skillWithoutAllowedTools } = skill;
	return allowedTools.length > 0 ? {
		...skill,
		allowedTools
	} : skillWithoutAllowedTools;
}
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var AgentChipButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChipButton",
	props: {
		icon: {},
		disabled: {
			type: Boolean,
			default: false
		},
		variant: { default: "default" },
		active: {
			type: Boolean,
			default: false
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass([
					_ctx.$style.chip,
					props.variant === "suggestion" ? _ctx.$style.suggestion : _ctx.$style.default,
					{ [_ctx.$style.active]: props.active }
				]),
				disabled: props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, [props.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.iconWrapper)
			}, [renderSlot(_ctx.$slots, "icon", {}, () => [props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: props.icon,
				size: 16,
				class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.suggestionIcon]: props.variant === "suggestion" }])
			}, null, 8, ["icon", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.text)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"])], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=style&index=0&lang.module.scss
var chip = "_chip_12oqt_125";
var suggestion = "_suggestion_12oqt_148";
var suggestionSlideIn = "_suggestionSlideIn_12oqt_1";
var active = "_active_12oqt_162";
var iconWrapper = "_iconWrapper_12oqt_176";
var icon = "_icon_12oqt_176";
var suggestionIcon = "_suggestionIcon_12oqt_186";
var text = "_text_12oqt_198";
var AgentChipButton_vue_vue_type_style_index_0_lang_module_default = {
	chip,
	"default": "_default_12oqt_139",
	suggestion,
	suggestionSlideIn,
	active,
	iconWrapper,
	icon,
	suggestionIcon,
	text
};
var AgentChipButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChipButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChipButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { normalizeAgentSkillForSave as n, AgentChipButton_default as t };
