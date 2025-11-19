import { D as createElementBlock, P as defineComponent, _n as normalizeClass, et as openBlock, nt as provide, st as resolveDirective, xt as withDirectives, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Es as TelemetryContextSymbol } from "./constants-C_oOJnqT.js";
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
			return withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dragPill, _ctx.canDrop ? _ctx.$style.droppablePill : _ctx.$style.defaultPill]) }, null, 2)), [[_directive_n8n_html, _ctx.html]]);
		};
	}
});
var MappingPill_vue_vue_type_style_index_0_lang_module_default = {
	dragPill: "_dragPill_wasb1_123",
	droppablePill: "_droppablePill_wasb1_141",
	defaultPill: "_defaultPill_wasb1_148"
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
