import { D as createElementBlock, P as defineComponent, et as openBlock, nt as provide, st as resolveDirective, vn as normalizeClass, xt as withDirectives, z as inject } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { hc as TelemetryContextSymbol } from "./constants-Cyrg9Nbl.js";
var MappingPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MappingPill",
	props: {
		html: {},
		canDrop: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dragPill, __props.canDrop ? _ctx.$style.droppablePill : _ctx.$style.defaultPill]) }, null, 2)), [[_directive_n8n_html, __props.html]]);
		};
	}
});
var MappingPill_vue_vue_type_style_index_0_lang_module_default = {
	dragPill: "_dragPill_2ouzo_125",
	droppablePill: "_droppablePill_2ouzo_143",
	defaultPill: "_defaultPill_2ouzo_150"
};
var MappingPill_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MappingPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MappingPill_vue_vue_type_style_index_0_lang_module_default }]]);
function useTelemetryContext(overrides = {}) {
	const merged = {
		...inject(TelemetryContextSymbol, {}),
		...overrides
	};
	provide(TelemetryContextSymbol, merged);
	return merged;
}
export { MappingPill_default as n, useTelemetryContext as t };
