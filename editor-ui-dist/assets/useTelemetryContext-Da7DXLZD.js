import { $ as openBlock, E as createElementBlock, N as defineComponent, R as inject, _n as normalizeClass, bt as withDirectives, ot as resolveDirective, tt as provide } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Dc as TelemetryContextSymbol } from "./constants-CjIW4CHX.js";
//#region src/features/ndv/runData/components/MappingPill.vue?vue&type=script&setup=true&lang.ts
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
var MappingPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MappingPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MappingPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useTelemetryContext.ts
/**
* Composable that injects/provides data for telemetry payload.
*
* Intended for populating telemetry payload in reusable components to include
* contextual information that depends on which part of UI it is used.
*/
function useTelemetryContext(overrides = {}) {
	const merged = {
		...inject(TelemetryContextSymbol, {}),
		...overrides
	};
	provide(TelemetryContextSymbol, merged);
	return merged;
}
//#endregion
export { MappingPill_default as n, useTelemetryContext as t };
