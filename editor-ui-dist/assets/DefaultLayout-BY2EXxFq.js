import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B1YZmiaS.js";
import "./src-BKhrJAXQ.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-D4KlI7i9.js";
import "./MainSidebarHeader-CFiEyIs8.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-f59869wg.js";
import "./merge-BtJrdwQI.js";
import "./_baseOrderBy-LIkFSIqt.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CFG_KaDf.js";
import "./versions.store-Cp19XiSm.js";
import "./usePageRedirectionHelper-CQhOmqYP.js";
import "./useBugReporting-CKDJa63L.js";
import "./canvas.utils-Bvp_du9O.js";
import "./folders.store-CC8rU1bE.js";
import "./KeyboardShortcutTooltip-B-kciyp2.js";
import "./sourceControl.eventBus-Gg_3nWPb.js";
import "./useKeybindings-CZPRuRLz.js";
import "./useGlobalEntityCreation-DDWttF61.js";
import "./useSettingsItems-BI-7foC7.js";
import { t as AppSidebar_default } from "./AppSidebar-MDAAi4d2.js";
import "./readyToRun.store-daLGnyDr.js";
import "./resourceCenter.store-BfJjXkrd.js";
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
