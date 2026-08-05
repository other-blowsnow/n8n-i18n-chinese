import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ai as N8nText_default, Li as N8nIcon_default, jr as N8nTooltip_default } from "./src-DXQiQnOc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
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
		},
		invalid: {
			type: Boolean,
			default: false
		},
		invalidReasons: { default: () => [] },
		clickable: {
			type: Boolean,
			default: true
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
					{
						[_ctx.$style.active]: props.active,
						[_ctx.$style.invalid]: props.invalid,
						[_ctx.$style.nonClickable]: !props.clickable
					}
				]),
				disabled: props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, [
				props.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.iconWrapper)
				}, [renderSlot(_ctx.$slots, "icon", {}, () => [props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: props.icon,
					size: 16,
					class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.suggestionIcon]: props.variant === "suggestion" }])
				}, null, 8, ["icon", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.text)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["class"]),
				props.invalid ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: props.invalidReasons.length === 0,
					placement: "top"
				}, {
					content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.invalidReasons, (reason) => {
						return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
					}), 128))]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						class: normalizeClass(_ctx.$style.invalidIcon),
						"data-testid": "agent-chip-invalid-icon"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=style&index=0&lang.module.scss
var chip = "_chip_gzno9_125";
var invalid = "_invalid_gzno9_152";
var invalidIcon = "_invalidIcon_gzno9_156";
var nonClickable = "_nonClickable_gzno9_160";
var suggestion = "_suggestion_gzno9_164";
var suggestionSlideIn = "_suggestionSlideIn_gzno9_1";
var active = "_active_gzno9_178";
var iconWrapper = "_iconWrapper_gzno9_192";
var icon = "_icon_gzno9_192";
var suggestionIcon = "_suggestionIcon_gzno9_202";
var text = "_text_gzno9_214";
var AgentChipButton_vue_vue_type_style_index_0_lang_module_default = {
	chip,
	"default": "_default_gzno9_143",
	invalid,
	invalidIcon,
	nonClickable,
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
export { AgentChipButton_default as n, normalizeAgentSkillForSave as t };
