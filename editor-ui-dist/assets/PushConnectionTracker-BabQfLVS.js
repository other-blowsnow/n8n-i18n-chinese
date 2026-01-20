import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { St as N8nTooltip_default, jn as N8nIcon_default } from "./src-Ca6p-F4w.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DXsSwlon.js";
var _hoisted_1 = {
	key: 0,
	class: "push-connection-lost primary-color"
};
var PushConnectionTracker_default = /* @__PURE__ */ defineComponent({
	__name: "PushConnectionTracker",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const i18n = useI18n();
		const showConnectionLostError = computed(() => {
			return pushConnectionStore.isConnectionRequested && !pushConnectionStore.isConnected;
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("span", null, [showConnectionLostError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTooltip_default), { placement: "bottom-end" }, {
				content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("pushConnectionTracker.cannotConnectToServer")]])]),
				default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), { icon: "triangle-alert" }), createTextVNode("\xA0 " + toDisplayString(unref(i18n).baseText("pushConnectionTracker.connectionLost")), 1)])]),
				_: 1
			})])) : renderSlot(_ctx.$slots, "default", { key: 1 })]);
		};
	}
});
export { PushConnectionTracker_default as t };
