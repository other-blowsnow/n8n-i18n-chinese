import { $ as openBlock, N as defineComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { t as Modal_default } from "./Modal-Bz0C3EHi.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-DSRcFKvq.js";
//#endregion
//#region src/features/ai/instanceAi/components/modals/ComputerUseSetupModal.vue
var ComputerUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "ComputerUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"custom-class": "instance-ai-computer-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(ComputerUseSetupContent_default)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
//#endregion
export { ComputerUseSetupModal_default as default };
