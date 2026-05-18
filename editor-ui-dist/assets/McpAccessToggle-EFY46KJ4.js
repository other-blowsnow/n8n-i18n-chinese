import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-BYwHXEXE.js";
import { Mi as N8nTooltip_default, Rt as ElSwitch, ga as N8nText_default } from "./src-BvkWedrz.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/features/ai/mcpAccess/components/header/McpAccessToggle.vue?vue&type=script&setup=true&lang.ts
var McpAccessToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAccessToggle",
	props: {
		modelValue: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["disableMcpAccess"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const disabledTooltip = computed(() => props.managedByEnv ? i18n.baseText("settings.mcp.managedByEnv.tooltip") : i18n.baseText("settings.mcp.toggle.disabled.tooltip"));
		const onUpdateMCPEnabled = () => {
			emit("disableMcpAccess");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["main-toggle-container"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["main-toggle-info"]) }, [createVNode(unref(N8nText_default), {
				bold: true,
				color: __props.modelValue ? `success` : `text-light`,
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.modelValue ? unref(i18n).baseText("settings.mcp.header.toggle.enabled") : unref(i18n).baseText("settings.mcp.header.toggle.disabled")), 1)]),
				_: 1
			}, 8, ["color"])], 2), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style["main-toggle"]),
				"data-test-id": "mcp-toggle-container"
			}, [createVNode(unref(N8nTooltip_default), {
				content: disabledTooltip.value,
				disabled: !props.disabled,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(ElSwitch), {
					size: "large",
					"data-test-id": "mcp-access-toggle",
					"model-value": props.modelValue,
					disabled: props.disabled,
					loading: props.loading,
					"onUpdate:modelValue": onUpdateMCPEnabled
				}, null, 8, [
					"model-value",
					"disabled",
					"loading"
				])]),
				_: 1
			}, 8, ["content", "disabled"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/header/McpAccessToggle.vue?vue&type=style&index=0&lang.module.scss
var McpAccessToggle_vue_vue_type_style_index_0_lang_module_default = {
	"main-toggle-container": "_main-toggle-container_6ezoc_125",
	"main-toggle": "_main-toggle_6ezoc_125"
};
var McpAccessToggle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpAccessToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAccessToggle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpAccessToggle_default as t };
