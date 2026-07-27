import { $ as openBlock, N as defineComponent, at as resolveComponent, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as BaseLayout_default } from "./BaseLayout-CAgUJK0y.js";
//#endregion
//#region src/app/layouts/AuthLayout.vue
var AuthLayout_default = /* @__PURE__ */ defineComponent({
	__name: "AuthLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { AuthLayout_default as default };
