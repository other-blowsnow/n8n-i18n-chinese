import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D28pXLlm.js";
import "./src-6rUDOvr2.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-B-dhu6_V.js";
import "./MainSidebarHeader-Ddham_uZ.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import "./versions.store-Ab008Wjp.js";
import "./usePageRedirectionHelper-CPm-PPft.js";
import "./useBugReporting-CvzjKna1.js";
import "./canvas.utils-DQc-Akl3.js";
import "./folders.store-BSLXys7n.js";
import "./KeyboardShortcutTooltip-BGeays24.js";
import "./sourceControl.eventBus-CjqnbKRT.js";
import "./useKeybindings-VVsUcxhO.js";
import "./useGlobalEntityCreation-rrCm9w2X.js";
import "./useSettingsItems-DYrLkiqp.js";
import { t as AppSidebar_default } from "./AppSidebar-D-zEQL3x.js";
import "./readyToRun.store-6vWm_gSe.js";
import "./resourceCenter.store-5Fsa0edc.js";
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
