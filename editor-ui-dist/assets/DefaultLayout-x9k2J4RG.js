import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-C-EGnnaH.js";
import "./src-AoeVD7He.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-CU7DkGnX.js";
import "./MainSidebarHeader-CeX0Uwpz.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CumZmnWv.js";
import "./merge-DgwDWcpR.js";
import "./_baseOrderBy-CxotlRq1.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BX6oNCg_.js";
import "./versions.store-Bg88yKwe.js";
import "./usePageRedirectionHelper-ZZHSAwuP.js";
import "./useBugReporting-BXdNVeZN.js";
import "./canvas.utils-BsGxI6nE.js";
import "./folders.store-BpixiajR.js";
import "./KeyboardShortcutTooltip-BNYSsFGN.js";
import "./sourceControl.eventBus-b82Qrqrt.js";
import "./useKeybindings-CIaHia8Z.js";
import "./useGlobalEntityCreation-DSsjENi-.js";
import "./useSettingsItems-BG6TAqKW.js";
import { t as AppSidebar_default } from "./AppSidebar-BaBORcYp.js";
import "./readyToRun.store-GISs5Zk5.js";
import "./resourceCenter.store-CBqk5I3V.js";
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
