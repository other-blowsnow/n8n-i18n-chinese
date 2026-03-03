import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B5pLjaIh.js";
import "./src-BIzQ9532.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BBCNHvSo.js";
import "./MainSidebarHeader-CeyOoZST.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-C1mjwDyK.js";
import "./merge-Bf-2KzoL.js";
import "./_baseOrderBy-PADM6HdE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CP9TQSjh.js";
import "./versions.store-CGNLq3HD.js";
import "./usePageRedirectionHelper-Cc9a9pHZ.js";
import "./useBugReporting-B4fnY72t.js";
import "./canvas.utils-C_LYlwVv.js";
import "./folders.store-B5UUkbFr.js";
import "./KeyboardShortcutTooltip-I9mwgv0c.js";
import "./sourceControl.eventBus-B0CUHz0R.js";
import "./useKeybindings-B8SNS2kD.js";
import "./useGlobalEntityCreation-ByQu42M8.js";
import "./useSettingsItems-CDw99XOs.js";
import { t as AppSidebar_default } from "./AppSidebar-BsrgFkH9.js";
import "./readyToRun.store-B3ITNKa3.js";
import "./resourceCenter.store-nM44PX7a.js";
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
export { DefaultLayout_default as default };
