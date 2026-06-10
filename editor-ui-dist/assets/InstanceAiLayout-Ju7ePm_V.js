import { $ as openBlock, N as defineComponent, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { t as BaseLayout_default } from "./BaseLayout-5KvkWi6S.js";
import { t as usePushConnectionStore } from "./pushConnection.store-Br9GEgi_.js";
import { t as AppSidebar_default } from "./AppSidebar-C4Q7z6tc.js";
//#endregion
//#region src/app/layouts/InstanceAiLayout.vue
var InstanceAiLayout_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLayout",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		onMounted(() => {
			pushConnectionStore.pushConnect();
		});
		onBeforeUnmount(() => {
			pushConnectionStore.pushDisconnect();
		});
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
export { InstanceAiLayout_default as default };
