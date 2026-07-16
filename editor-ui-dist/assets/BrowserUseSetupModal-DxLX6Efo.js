import { $ as openBlock, N as defineComponent, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as Modal_default } from "./Modal-B9k6VWLE.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-51aJ8VGW.js";
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupModal.vue
var BrowserUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"custom-class": "instance-ai-browser-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(BrowserUseSetupContent_default)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
//#endregion
export { BrowserUseSetupModal_default as default };
