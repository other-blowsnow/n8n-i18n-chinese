import { Cn as toDisplayString, D as createElementBlock, Gt as unref, P as defineComponent, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
var WorkflowActivationErrorMessage_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowActivationErrorMessage",
	props: { message: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined")) + " ", 1),
				_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
				createBaseVNode("i", null, toDisplayString(_ctx.message), 1)
			]);
		};
	}
});
export { WorkflowActivationErrorMessage_default as t };
