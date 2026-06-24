import { $ as openBlock, N as defineComponent, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { t as Modal_default } from "./Modal-BPkKtKFQ.js";
import { t as ComputerUseSetupContent_default } from "./ComputerUseSetupContent-0fuSoVH9.js";
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
