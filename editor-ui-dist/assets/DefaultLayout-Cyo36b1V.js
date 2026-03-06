import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B9vJNOCd.js";
import "./src-DiEfDBW_.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CeIiqJPu.js";
import "./MainSidebarHeader-DNLb11Wm.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-BDDzQuZL.js";
import "./merge-CZQEi9PS.js";
import "./_baseOrderBy-C5llb9iP.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CC7G435l.js";
import "./versions.store-Xt5DODWs.js";
import "./usePageRedirectionHelper-Cz7ZivjC.js";
import "./useBugReporting-BnfSWbZI.js";
import "./canvas.utils-BvHrBpk4.js";
import "./folders.store-Bfs_o1tT.js";
import "./KeyboardShortcutTooltip-DNMCksvF.js";
import "./sourceControl.eventBus-pNiL3xAh.js";
import "./useKeybindings-BzIbxzrU.js";
import "./useGlobalEntityCreation-D_dhS5XN.js";
import "./useSettingsItems-CYuQ07-3.js";
import { t as AppSidebar_default } from "./AppSidebar-CGkPSBEG.js";
import "./readyToRun.store-D1-gjBC8.js";
import "./resourceCenter.store-BDRectpq.js";
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
