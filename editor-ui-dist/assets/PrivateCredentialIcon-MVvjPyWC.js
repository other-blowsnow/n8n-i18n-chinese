import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { Ya as N8nIcon_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
//#endregion
//#region src/features/resolvers/components/PrivateCredentialIcon.vue
var PrivateCredentialIcon_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PrivateCredentialIcon",
	props: {
		tooltip: {
			type: Boolean,
			default: true
		},
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const content = computed(() => props.tooltipText ?? i18n.baseText("credentials.private.tooltip"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				disabled: !__props.tooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(content.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), mergeProps(_ctx.$attrs, {
					"data-test-id": "private-credential-icon",
					icon: "user-round-key"
				}), null, 16)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
//#endregion
export { PrivateCredentialIcon_default as t };
