import { $ as openBlock, N as defineComponent, at as resolveComponent, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { t as BaseLayout_default } from "./BaseLayout-BnnCFCQ8.js";
import { t as AppSidebar_default } from "./AppSidebar-D0bnKGAn.js";
//#endregion
//#region src/app/layouts/DefaultLayout.vue
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DefaultLayout_default as default };
