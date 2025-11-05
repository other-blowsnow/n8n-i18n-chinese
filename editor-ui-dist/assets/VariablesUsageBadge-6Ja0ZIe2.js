import { C as computed, Gt as unref, P as defineComponent, Sn as toDisplayString, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { ht as N8nTooltip_default } from "./src-CrJGxD3z.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { t as useToast } from "./useToast-BabYcC1S.js";
import { t as useClipboard } from "./useClipboard-ZySm1Yx-.js";
var VariablesUsageBadge_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "VariablesUsageBadge",
	props: { name: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		const props = __props;
		const usage = computed(() => `$vars.${props.name}`);
		const handleClick = () => {
			clipboard.copy(usage.value);
			showMessage({
				title: i18n.baseText("variables.row.usage.copiedToClipboard"),
				type: "success"
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), { placement: "top" }, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.usage.copyToClipboard")), 1)]),
				default: withCtx(() => [createBaseVNode("span", {
					class: "usageSyntax",
					onClick: handleClick
				}, toDisplayString(usage.value), 1)]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-5d2fb697"]]);
export { VariablesUsageBadge_default as t };
